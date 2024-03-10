import { Image } from "../../components/display/image/image";
import { INote } from "../../interfaces/note";
import styles from "./art.module.scss";

interface IProps {
  allArt: INote[];
}

export function Art({ allArt }: IProps) {
  return <GalleryLayout allNotes={allArt} />;
}

interface IGalleryLayoutProps {
  allNotes: INote[];
}

export const GalleryLayout = ({ allNotes }: IGalleryLayoutProps) => {
  const col1 = allNotes.slice(0, allNotes.length / 2);
  const col2 = allNotes.slice(allNotes.length / 2);

  const renderColumn = (colNote: INote[]) => {
    if (!colNote.length) {
      return null;
    }

    return (
      <div className={styles.column}>
        {colNote.map((note: INote) => {
          return <Image key={note.slug} src={note.coverSrc} alt={note.title} />;
        })}
      </div>
    );
  };

  return (
    <main className={styles.container}>
      {renderColumn(col1)}
      {renderColumn(col2)}
    </main>
  );
};
