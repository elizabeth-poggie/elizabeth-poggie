import {
  parseNoteContent,
  constructNoteSlug,
  sortByCreatedDescending,
} from "../utils/noteHelpers";
import {
  buildCategoryPath,
  filterTypeCandidates,
} from "../utils/categoryHelpers";
import {
  fileExists,
  readDirectory,
  isDirectory,
  findFileInDirectory,
} from "../utils/fileHelpers";
import { CategoryToLinkMap, Frontmatter, INote } from "../interfaces/note";
import path from "path";
import fs from "fs"; // Cannot be used directly in Next.js code that runs in the browser
import { replaceHyphensWithSpaces } from "../utils/textFormatters";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPropsContext } from "next";

const getNotesFromFolder = async (
  baseFolder: string,
  categoryPath: string,
  category: string
): Promise<INote[]> => {
  if (!fileExists(categoryPath)) {
    console.error(
      `❌ Can't find this category path "${categoryPath}" for this category "${category}"`
    );
    return [];
  }

  const filesAndFolders = readDirectory(categoryPath);
  const notesInCategory: INote[] = [];

  for (const item of filesAndFolders) {
    const fullPath = path.join(categoryPath, item);

    if (isDirectory(fullPath)) {
      const subCategoryNotes = await getNotesFromFolder(
        baseFolder,
        fullPath,
        `${category}_${item}`
      );
      notesInCategory.push(...subCategoryNotes);
    } else if (item.endsWith(".mdx")) {
      const { mdxSource, frontmatter } = await parseNoteContent(fullPath);
      const slug = `${baseFolder}/${category}`;
      const fullBaseFolderPath = path
        .join(baseFolder, category)
        .replace(/_/g, "/");

      // Split slug to handle nested structure
      const parts = slug.split("_");
      const fileName = parts.slice(-1)[0];
      const subCategoryPath = parts;
      const type = filterTypeCandidates(
        subCategoryPath,
        baseFolder,
        [category],
        fileName
      );

      notesInCategory.push({
        title: frontmatter.title,
        slug,
        created: frontmatter.created,
        coverSrc: frontmatter.coverSrc ?? null,
        category: frontmatter.category,
        baseFolder: fullBaseFolderPath,
        type: type,
      });
    }
  }

  return notesInCategory;
};

const fetchNotesForCategories = async (
  baseFolder: string,
  categories: string[]
): Promise<INote[]> => {
  const uniqueNotes = new Map<string, INote>();

  for (const category of categories) {
    const categoryPath = path.join(
      process.cwd(),
      `_content/${baseFolder}/${category}`
    );
    const categoryNotes = await getNotesFromFolder(
      baseFolder,
      categoryPath,
      category
    );

    for (const note of categoryNotes) {
      if (!uniqueNotes.has(note.slug)) {
        uniqueNotes.set(note.slug, note);
      }
    }
  }

  return Array.from(uniqueNotes.values());
};

const paginateNotes = (
  notes: INote[],
  page: number,
  pageSize: number
): { notes: INote[]; total: number } => {
  const total = notes.length;
  const startIndex = (page - 1) * pageSize;
  const paginated = notes.slice(startIndex, startIndex + pageSize);
  return { notes: paginated, total };
};

export const getPaginatedNotesForCategories = async (
  baseFolder: string,
  categories: string[],
  page = 1,
  pageSize = 10
): Promise<{ notes: INote[]; total: number }> => {
  const notes = await fetchNotesForCategories(baseFolder, categories);
  const sortedNotes = sortByCreatedDescending(notes);
  return paginateNotes(sortedNotes, page, pageSize);
};

export const getNotesForCategory = async (
  baseFolder: string,
  category: string
): Promise<CategoryToLinkMap> => {
  const notes = await fetchNotesForCategories(baseFolder, [category]);

  if (!notes.length) {
    console.warn(`👀 No notes found for category: ${category}`);
    return {};
  }

  // Group notes by their type
  const categoryMap: CategoryToLinkMap = notes.reduce((acc, note) => {
    const { type } = note;

    if (!type) {
      return acc;
    }

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push({
      text: `${acc[type].length + 1}. ${note.title}`,
      href: `/notes/${note.slug}`,
    });

    return acc;
  }, {} as CategoryToLinkMap);
  return categoryMap;
};

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
  const type = filterTypeCandidates(
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
      const fullBaseFolderPath = `/${baseFolder}/${subCategoryPath.join("/")}`;

      return {
        props: {
          source: {
            compiledSource: mdxSource.compiledSource,
            scope: mdxSource.scope,
            frontmatter: {
              ...(mdxSource.frontmatter as Frontmatter),
              type: replaceHyphensWithSpaces(type) || null,
            },
          },
          baseFolder: fullBaseFolderPath,
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
          type: null,
          category: null,
        },
      },
      baseFolder: "",
    },
  };
};
