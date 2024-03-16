import { INote } from "../../interfaces/note";
import { GalleryLayout } from "../art/art";

interface IProps {
  allCourses: INote[];
}

export function Courses({ allCourses }: IProps) {
  return <GalleryLayout allNotes={allCourses} />;
}
