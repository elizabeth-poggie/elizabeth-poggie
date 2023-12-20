import { Category } from "./category";

export interface IProject {
  slug: string;
  title: string;
  year: string;
  coverSrc: string;
  categories: Array<Category>;
}

export interface IProjectDetails extends IProject {
  organization: string;
  referenceLink: string;
  gallerySrcs: Array<string>;
  content: string;
}
