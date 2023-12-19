type ProjectCategory =
  | "Coordination"
  | "Branding"
  | "Presentation"
  | "Development";

export interface Project {
  slug: string;
  title: string;
  year: string;
  coverSrc: string;
  categories: Array<ProjectCategory>;
  content: string;
}
