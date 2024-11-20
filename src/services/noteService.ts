import { parseNoteContent, constructNoteSlug } from "../utils/noteHelpers";
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
import { CategoryToLinkMap, INote } from "../interfaces/note";
import path from "path";
import fs from "fs";

/**
 * TODO - Optimize further by limiting file reads
 * TODO - optimize the getNotesFromFolder function with pagination instead of doing it at the end
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

  // Function to recursively get notes from a folder
  const getNotesFromFolder = async (categoryPath: string, category: string) => {
    if (!fileExists(categoryPath)) return;

    const filesAndFolders = readDirectory(categoryPath);

    for (const item of filesAndFolders) {
      const fullPath = path.join(categoryPath, item);

      if (isDirectory(fullPath)) {
        // Recurse into subfolders
        await getNotesFromFolder(fullPath, `${category}_${item}`);
      } else if (item.endsWith(".mdx")) {
        // Handle MDX files
        const { mdxSource, frontmatter } = await parseNoteContent(fullPath);
        const slug = `${baseFolder}/${category}_${item.replace(".mdx", "")}`;
        allNotes.push({
          title: frontmatter.title,
          slug,
          created: frontmatter.created,
          coverSrc: frontmatter.coverSrc ?? null,
          category,
        });
      }
    }
  };

  // Fetch notes for all categories
  await Promise.all(
    categories.map((category) => {
      const categoryPath = path.join(
        process.cwd(),
        `_content/${baseFolder}/${category}`
      );
      return getNotesFromFolder(categoryPath, category);
    })
  );

  // Calculate total and apply pagination
  const total = allNotes.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedNotes = allNotes.slice(startIndex, endIndex);

  return { notes: paginatedNotes, total };
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
