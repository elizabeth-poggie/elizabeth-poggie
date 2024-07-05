import { Frontmatter } from "../../../pages/recipes/[slug]";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./gallery.module.scss";

interface IProps {
  allNotes: INote[];
}

export function Gallery({ allNotes }: IProps) {
  const col1 = allNotes.slice(0, allNotes.length / 2);
  const col2 = allNotes.slice(allNotes.length / 2);

  const renderColumn = (colNote: INote[]) => {
    if (!colNote.length) {
      return null;
    }

    return (
      <div className={styles.column}>
        {colNote.map((note: INote) => {
          return (
            <>
              <TextLink href={note.slug}>{note.title}</TextLink>
              <MDXImage src={note.coverSrc} slug={note.baseFolder} />
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderColumn(col1)}
      {renderColumn(col2)}
    </div>
  );
}
