import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextButton } from "../../components/inputs/text-button/text-button";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { Link } from "../../components/navigation/link/link";
import {
  formatDate,
  pluralToSingular,
  replaceHyphensWithSpaces,
} from "../../utils/textFormatters";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { NOTES_CATEGORIES } from "../../../pages/notes";

interface IProps {
  allNotes: INote[];
}

export default function Notes({ allNotes }: IProps) {
  const renderFilterRow = () => {
    const filters: string[] = NOTES_CATEGORIES.map((category) =>
      replaceHyphensWithSpaces(category)
    );

    return (
      <nav className={styles.nav}>
        <header>
          <Text color="white">John Abbott College</Text>
        </header>
        {filters.map((filter: string) => (
          <div key={filter}>
            <Text variant="subheading" style="capitalize" color="grey">
              {filter}
            </Text>
          </div>
        ))}
      </nav>
    );
  };

  const renderListItem = (note: INote) => {
    const {
      slug,
      title,
      coverSrc,
      baseFolder,
      category,
      type,
      created,
      updated,
    } = note;
    const currentDate = formatDate(updated ?? created);

    return (
      <Link href={`/notes/${slug}`}>
        <div className={styles.listItem}>
          <Text color="grey">{currentDate}</Text>
          <Text variant="h2" gutterBottom={2} color="white">
            {title}
          </Text>
          <Text
            variant="subheading"
            gutterBottom={coverSrc ? 6 : 1}
            style="italics"
            color="grey"
          >
            {type ? `${pluralToSingular(type)}, ` : null}
            {category}
          </Text>
          {coverSrc ? (
            <MDXImage baseFolder={baseFolder} src={coverSrc} alt={title} />
          ) : null}
        </div>
        <HorizontalLine />
      </Link>
    );
  };

  const renderTitle = () => {
    return (
      <header className={styles.titleWrapper}>
        <Text variant="title">Notes</Text>
      </header>
    );
  };

  const renderMainContent = () => {
    return (
      <div className={styles.mainContent}>
        <HorizontalLine />
        <section className={styles.content}>
          <>{allNotes.map((note: INote) => renderListItem(note))}</>
        </section>
      </div>
    );
  };

  return (
    <>
      <ThreeColumnTemplate
        header={renderTitle()}
        rightSidebar={""}
        mainContent={renderMainContent()}
        leftSidebar={renderFilterRow()}
      />
    </>
  );
}
