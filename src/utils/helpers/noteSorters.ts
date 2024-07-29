import { INote } from "../../interfaces/note";

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
