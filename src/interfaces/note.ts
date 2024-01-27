export interface INote {
  slug: string;
  title: string;
  subtitle: string; // TODO - eventually replace by parsing h1 titles in the content
  date: string;
  course: string;
  type: string;
  content: string;
}

type NoteCategory = "Course" | "Year" | "Material Type";

// TODO - Group based on similar keys instead of manually creating sub types
