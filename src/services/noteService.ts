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

/**
 *
 * @param baseFolder
 * @param categories
 * @param page
 * @param pageSize
 * @returns
 */
export const getAllNotesForCategories = async (
  baseFolder: string,
  categories: string[],
  page = 1,
  pageSize = 10
): Promise<{ notes: INote[]; total: number }> => {
  const allNotes: INote[] = [];
  const uniqueNotes = new Map<string, INote>(); // To track unique notes by slug

  const getNotesFromFolder = async (
    categoryPath: string,
    category: string
  ): Promise<INote[]> => {
    if (!fileExists(categoryPath)) return [];

    const filesAndFolders = readDirectory(categoryPath);
    const notesInCategory: INote[] = [];

    for (const item of filesAndFolders) {
      const fullPath = path.join(categoryPath, item);

      if (isDirectory(fullPath)) {
        // Recurse into subfolders
        const subCategoryNotes = await getNotesFromFolder(
          fullPath,
          `${category}_${item}`
        );
        notesInCategory.push(...subCategoryNotes);
      } else if (item.endsWith(".mdx")) {
        // Handle MDX files
        const { mdxSource, frontmatter } = await parseNoteContent(fullPath);
        const slug = `${baseFolder}/${category}`;
        const fullBaseFolderPath = path
          .join(baseFolder, category)
          .replace(/_/g, "/");

        notesInCategory.push({
          title: frontmatter.title,
          slug,
          created: frontmatter.created,
          coverSrc: frontmatter.coverSrc ?? null,
          category: frontmatter.category,
          baseFolder: fullBaseFolderPath,
        });
      }
    }

    return notesInCategory;
  };

  let totalNotes = 0;

  for (const category of categories) {
    const categoryPath = path.join(
      process.cwd(),
      `_content/${baseFolder}/${category}`
    );
    const categoryNotes = await getNotesFromFolder(categoryPath, category);

    for (const note of categoryNotes) {
      if (!uniqueNotes.has(note.slug)) {
        uniqueNotes.set(note.slug, note);
        totalNotes++;
      }
    }
  }

  // Convert Map to Array and sort by creation date
  const sortedNotes = sortByCreatedDescending(Array.from(uniqueNotes.values()));

  // Apply pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedNotes = sortedNotes.slice(startIndex, startIndex + pageSize);

  return { notes: paginatedNotes, total: totalNotes };
};

export const getRelatedNotesByType = async (
  baseFolder: string,
  category: string
): Promise<CategoryToLinkMap> => {
  const { notes } = await getAllNotesForCategories(baseFolder, [category]);

  return notes.reduce((acc, note) => {
    const { type } = note;

    if (type) {
      if (!acc[type]) acc[type] = [];
      acc[type].push({
        text: `${acc[type].length + 1}. ${note.title}`,
        href: `/notes/${note.slug}`,
      });
    }

    return acc;
  }, {} as CategoryToLinkMap);
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

      // Extract all related notes
      const relatedNotes = await getRelatedNotesByType(baseFolder, category);

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
          relatedNotes,
        },
      };
    }
  }

  // If no matching file is found, throw an error
  throw new Error(`No matching file found for slug: ${slug}`);
};
