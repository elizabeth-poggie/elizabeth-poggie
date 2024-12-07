import { INote, Frontmatter } from "../interfaces/note";
import { serialize } from "next-mdx-remote/serialize";
import { readFileContent } from "./fileHelpers";

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
  filePath: string
): Promise<{ mdxSource: any; frontmatter: Frontmatter }> => {
  const source = readFileContent(filePath);
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { mdxSource, frontmatter: mdxSource.frontmatter as Frontmatter };
};

// Avoid adding the file name twice if it's the same as the last folder name
export const constructNoteSlug = (
  currentSlug: string,
  fileNameWithoutExtension: string
): string =>
  currentSlug.endsWith(fileNameWithoutExtension)
    ? `${currentSlug}`
    : `${currentSlug}_${fileNameWithoutExtension}`;
