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
  baseFolder: string,
  category: string
): Promise<INote> => {
  const source = readFileContent(filePath);
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  const frontmatter = mdxSource.frontmatter as Frontmatter;
  const slug = `${baseFolder}/${category}`;
  const fullBaseFolderPath = path.join(baseFolder, category).replace(/_/g, "/");

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

  return {
    title: frontmatter.title,
    slug,
    created: frontmatter.created,
    coverSrc: frontmatter.coverSrc ?? null,
    category: frontmatter.category,
    baseFolder: fullBaseFolderPath,
    type: replaceHyphensWithSpaces(type) || null,
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
