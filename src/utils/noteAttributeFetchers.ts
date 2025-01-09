import { INote } from "../interfaces/note";

export const getUniqueCategories = (notes: INote[]) => {
  const categories = notes.map((note) => note.category);
  const uniqueCategories = Array.from(new Set<string>(categories));
  return uniqueCategories;
};
