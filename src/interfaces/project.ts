import { Category } from "./category";

export interface Project {
  slug: string;
  title: string;
  year: string;
  coverSrc: string;
  categories: Array<Category>;
  content: string;
}
