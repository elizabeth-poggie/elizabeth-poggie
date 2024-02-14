import { ICollegeNote } from "../../interfaces/note";

/**
 *
 * Sort array that contains a 'date' property from least to most recent.
 *
 * @param a
 * @returns
 */
export const sortByDateAscending = (a: ICollegeNote[]): ICollegeNote[] => {
  return a.sort((a: ICollegeNote, b: ICollegeNote) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });
};

/**
 *
 * Sort array that contains a 'date' property from most to least recent.
 *
 * @param a
 * @returns
 */
export const sortByDateDescending = (a: ICollegeNote[]): ICollegeNote[] => {
  return a.sort((a: ICollegeNote, b: ICollegeNote) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
};
