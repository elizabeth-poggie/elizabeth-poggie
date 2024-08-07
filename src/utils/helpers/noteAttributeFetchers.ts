import { INote } from "../../interfaces/note";

export const getUniqueTypes = (notes: INote[]): string[] => {
  const types = notes.map((note) => note.type);
  const uniqueTypes = Array.from(new Set<string>(types));
  return uniqueTypes;
};

export const getUniqueCategories = (notes: INote[]) => {
  const categories = notes.map((note) => note.category);
  const uniqueCategories = Array.from(new Set<string>(categories));
  return uniqueCategories;
};
