import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { Link } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import { sortByCreatedDescending } from "../../utils/helpers/noteSorters";
import styles from "./gallery.module.scss";

interface IProps {
  allNotes: INote[];
}

const getUniqueCategories = (notes: INote[]) => {
  const categories = notes.map((note) => note.category);
  const uniqueCategories = Array.from(new Set<string>(categories));
  return uniqueCategories;
};

export function Gallery({ allNotes }: IProps) {
  const sortedNotes = sortByCreatedDescending(allNotes);
  const uniqueCategories = getUniqueCategories(allNotes);

  const renderFilters = () => {
    return (
      <nav>
        {uniqueCategories.map((category: string) => {
          return (
            <>
              <PillButton title={category} onClick={() => {}} />
            </>
          );
        })}
      </nav>
    );
  };

  return (
    <>
      {renderFilters()}
      <div className={styles.container}>
        {sortedNotes.map((note: INote) => {
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
    </>
  );
}
