export interface INote {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  content: string;
}

export interface ICollegeNote extends INote {
  course: string;
  type: string;
  slides: string;
}
