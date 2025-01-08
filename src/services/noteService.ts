import { constructNoteSlug } from "../utils/noteHelpers";
import { filterTypeCandidates } from "../utils/categoryHelpers";
import { findFileInDirectory } from "../utils/fileHelpers";
import { CategoryToLinkMap, Frontmatter, INote } from "../interfaces/note";
import path from "path";
import fs from "fs"; // Cannot be used directly in Next.js code that runs in the browser
import { replaceHyphensWithSpaces } from "../utils/textFormatters";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPropsContext } from "next";

export const getNotePaths = (baseFolder: string, categories: string[]) => {
  const paths: { params: { slug: string } }[] = [];

  const getPathsFromFolder = (categoryPath: string, currentSlug: string) => {
    const filesAndFolders = fs.existsSync(categoryPath)
      ? fs.readdirSync(categoryPath)
      : [];

    filesAndFolders.forEach((fileOrFolder) => {
      const fullPath = path.join(categoryPath, fileOrFolder);

      if (fs.lstatSync(fullPath).isDirectory()) {
        getPathsFromFolder(fullPath, `${currentSlug}_${fileOrFolder}`);
      } else if (fileOrFolder.endsWith(".mdx")) {
        const fileNameWithoutExtension = fileOrFolder.replace(".mdx", "");

        paths.push({
          params: {
            slug: constructNoteSlug(currentSlug, fileNameWithoutExtension),
          },
        });
      }
    });
  };

  categories.forEach((category) => {
    getPathsFromFolder(
      path.join(`_content/${baseFolder}/${category}`),
      category
    );
  });

  return { paths, fallback: false };
};

export const getNoteProps = async (
  ctx: GetStaticPropsContext,
  baseFolder: string,
  categories: string[]
) => {
  const { slug } = ctx.params as { slug: string };

  // Split slug to handle nested structure
  const parts = slug.split("_");
  const fileName = parts.slice(-1)[0];
  const subCategoryPath = parts;
  const subcategory = filterTypeCandidates(
    subCategoryPath,
    baseFolder,
    categories,
    fileName
  );

  // Iterate through all categories to find the matching file
  for (const category of categories) {
    const categoryPath = path.join(
      process.cwd(),
      `_content/${baseFolder}/${category}`
    );

    // Find the file path within the category
    const filePath = findFileInDirectory(categoryPath, fileName);

    if (filePath) {
      console.log(`Found file at: ${filePath}`);

      // Extract note content
      const source = fs.readFileSync(filePath, "utf8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });

      // Construct the image path
      const assetPath = `/${baseFolder}/${subCategoryPath.join("/")}`;

      return {
        props: {
          source: {
            compiledSource: mdxSource.compiledSource,
            scope: mdxSource.scope,
            frontmatter: {
              ...(mdxSource.frontmatter as Frontmatter),
              subCategory: replaceHyphensWithSpaces(subcategory) || null,
            },
          },
          assetPath,
        },
      };
    }
  }

  // If no matching file is found, handle it gracefully
  console.error(`❌ Can't find the notes you are looking for`);
  return {
    props: {
      source: {
        compiledSource: "",
        scope: {},
        frontmatter: {
          title: "404 Note not found",
          category: null,
          subCategory: null,
        },
      },
      assetPath: "",
    },
  };
};

export const getRelatedNotesFromBootlegJSON = (
  category: string
): CategoryToLinkMap => {
  // Resolve the path to the JSON file
  const filePath = path.join(process.cwd(), "db", "notes-metadata.json");

  // Read and parse the JSON file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const jsonNotes: INote[] = JSON.parse(fileContents);

  // Filter notes by the specified category
  const notes = jsonNotes.filter((note) => note.category === category);

  if (!notes.length) {
    console.warn(`👀 No notes found for category: ${category}`);
    return {};
  }

  // Group notes by their subcategory
  const categoryMap: CategoryToLinkMap = notes.reduce((acc, note) => {
    const { subcategory } = note;

    if (!subcategory) {
      return acc;
    }

    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }

    acc[subcategory].push({
      text: `${note.number}. ${note.title}`,
      href: `/notes/${note.slug}`,
    });

    return acc;
  }, {} as CategoryToLinkMap);

  return categoryMap;
};

export const getPaginatedNotesFromBootlegJSON = async (
  collection: string,
  category: string,
  page = 1,
  pageSize = 10
): Promise<{ notes: INote[]; total: number }> => {
  // Resolve the path to the JSON file
  const filePath = path.join(process.cwd(), "db", "notes-metadata.json");

  // Read and parse the JSON file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const jsonNotes: INote[] = JSON.parse(fileContents);

  // Filter, sort, and paginate the notes
  const notes = jsonNotes
    .filter(
      (note) => note.collection === collection && note.category === category
    )
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    .slice((page - 1) * pageSize, page * pageSize);

  // Get total count for pagination
  const total = jsonNotes.filter(
    (note) => note.collection === collection && note.category === category
  ).length;

  return { notes, total };
};
