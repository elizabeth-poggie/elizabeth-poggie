import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextButton } from "../../components/inputs/text-button/text-button";
import { sortByCreatedDescending } from "../../utils/noteHelpers";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { Link } from "../../components/navigation/link/link";
import { formatDate, pluralToSingular } from "../../utils/textFormatters";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";

interface IProps {
  allNotes: INote[];
}

export function Notes({ allNotes }: IProps) {
  const sortedNotes = sortByCreatedDescending(allNotes); // Sort latest notes

  const [activeFilter, setActiveFilter] = React.useState<
    string | "John Abbott College"
  >("John Abbott College");

  const setNotes = (filter: string) => {
    setActiveFilter(filter);
  };

  const renderFilterRow = (filterType: string) => {
    const onlyUnique = (value, index, array) => {
      return array.indexOf(value) === index;
    };

    const filters: string[] = [
      ...allNotes.map((note: INote) => note[filterType]),
    ].filter(onlyUnique);

    return (
      <nav className={styles.nav}>
        <header>
          <TextButton
            onClick={() => {
              setActiveFilter("John Abbott College");
            }}
            color={activeFilter === "John Abbott College" ? "white" : "grey"}
          >
            John Abbott College
          </TextButton>
        </header>
        {filters.map((filter: string) => (
          <div key={filter}>
            <TextButton
              variant="subheading"
              onClick={() => setNotes(filter)}
              color={activeFilter === filter ? "white" : "grey"}
            >
              {filter}
            </TextButton>
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
          <>{sortedNotes.map((note: INote) => renderListItem(note))}</>
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
        leftSidebar={renderFilterRow("category")}
      />
    </>
  );
}
