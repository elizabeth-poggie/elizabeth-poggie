import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { useState } from "react";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { Link } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import { sortByCreatedDescending } from "../../utils/noteHelpers";
import styles from "./gallery.module.scss";
import { getUniqueCategories } from "../../utils/noteAttributeFetchers";

interface IProps {
  allNotes: INote[];
}

export function Gallery({ allNotes }: IProps) {
  const [sortedNotes, setSortedNotes] = useState(
    sortByCreatedDescending(allNotes)
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const uniqueCategories = ["All", ...getUniqueCategories(allNotes)];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const filteredNotes =
      category === "All"
        ? sortByCreatedDescending(allNotes)
        : sortByCreatedDescending(
            allNotes.filter((note) => note.category === category)
          );
    setSortedNotes(filteredNotes);
  };

  const renderFilters = () => {
    return (
      <nav className={styles.filters}>
        {uniqueCategories.map((category: string) => {
          const isSelected = category === selectedCategory;
          return (
            <PillButton
              key={category}
              title={category}
              onClick={() => handleCategoryClick(category)}
              color={isSelected ? "green" : "default"}
            />
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
                    assetPath={note.assetPath}
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
