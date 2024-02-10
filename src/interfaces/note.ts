export interface INote {
  slug: string;
  title: string;
  subtitle: string; // TODO - eventually replace by parsing h1 titles in the content
  content: string;
}

export interface ICollegeNote extends INote {
  date: string;
  course: string;
  type: string;
  slides: string;
}
