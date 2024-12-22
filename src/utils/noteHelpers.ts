import { INote, Frontmatter } from "../interfaces/note";
import { serialize } from "next-mdx-remote/serialize";
import { readFileContent } from "./fileHelpers";
import path from "path";
import { filterTypeCandidates } from "./categoryHelpers";
import { replaceHyphensWithSpaces } from "./textFormatters";

/**
 *
 * Sort array that contains a 'created' property from least to most recent.
 *
 * @param {INote[]} notes array of notes
 * @returns {INote[]} sorted notes
 */
export const sortByCreatedAscending = (notes: INote[]): INote[] => {
  return notes.sort((a: INote, b: INote) => {
    return Date.parse(a.created) - Date.parse(b.created);
  });
};

/**
 *
 *  Sort array that contains a 'created' property from most to least recent.
 *
 * @param {INote[]} notes array of notes
 * @returns {INote[]} sorted notes
 */
export const sortByCreatedDescending = (notes: INote[]): INote[] => {
  return notes.sort((a: INote, b: INote) => {
    return Date.parse(b.created) - Date.parse(a.created);
  });
};

/**
 * Extract Note Content
 * @param filePath - path to note
 * @returns - object containing mdxSource and frontmatter
 */
export const parseNoteContent = async (
  filePath: string,
  baseFolder: string
): Promise<INote> => {
  // Extract meta data from the note
  const source = readFileContent(filePath);
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  const frontmatter = mdxSource.frontmatter as Frontmatter;

  // Extract the file name without the extension
  const fileName = filePath.split("/").pop().replace(".mdx", "");

  // Extract the category (e.g. web-programming-i)
  const pathParts = filePath.split("/");
  const category = pathParts[pathParts.length - 4];

  // Extract the subcategory (e.g. quiz-answers)
  const subcategory = pathParts[pathParts.length - 3];

  // Dynamically construct slug for deeply nested hierarchy
  const slug = `${baseFolder}/${category}_${subcategory}_${fileName}`;
  const fullBaseFolderPath = path
    .join(baseFolder, category, subcategory, fileName)
    .replace(/_/g, "/");

  return {
    title: frontmatter.title,
    slug,
    created: frontmatter.created,
    coverSrc: frontmatter.coverSrc ?? null,
    category: frontmatter.category,
    baseFolder: fullBaseFolderPath,
    type: replaceHyphensWithSpaces(subcategory) || null,
  };
};

// Avoid adding the file name twice if it's the same as the last folder name
export const constructNoteSlug = (
  currentSlug: string,
  fileNameWithoutExtension: string
): string =>
  currentSlug.endsWith(fileNameWithoutExtension)
    ? `${currentSlug}`
    : `${currentSlug}_${fileNameWithoutExtension}`;

/**
 *
 * @param notes
 * @param page
 * @param pageSize
 * @returns
 */
export const paginateNotes = (
  notes: INote[],
  page: number,
  pageSize: number
): { notes: INote[]; total: number } => {
  const total = notes.length;
  const startIndex = (page - 1) * pageSize;
  const paginated = notes.slice(startIndex, startIndex + pageSize);
  return { notes: paginated, total };
};
