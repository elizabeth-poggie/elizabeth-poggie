export interface INote {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
}

export interface INoteDetails extends INote {
  content: string;
}
