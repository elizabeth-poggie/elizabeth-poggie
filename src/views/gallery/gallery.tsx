import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { Link } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./gallery.module.scss";

interface IProps {
  allNotes: INote[];
}

export function Gallery({ allNotes }: IProps) {
  return (
    <div className={styles.container}>
      {allNotes.map((note: INote) => {
        return (
          <>
            <Link href={note.slug}>
              <div className={styles.imgHolder}>
                <div className={styles.textHolder}>
                  <Text>{note.title}</Text>
                </div>
                <MDXImage
                  src={note.coverSrc}
                  baseFolder={note.baseFolder}
                  variant="galleryItem"
                />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
