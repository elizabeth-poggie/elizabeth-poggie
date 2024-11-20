import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextButton } from "../../components/inputs/text-button/text-button";
import { sortByCreatedDescending } from "../../utils/noteHelpers";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { Link } from "../../components/navigation/link/link";
import { formatDate, pluralToSingular } from "../../utils/textFormatters";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { Pagination } from "../../components/navigation/pagination/pagination";
import router from "next/router";

interface IProps {
  allNotes: INote[];
  pageSize: number;
}

// List of supported filters lol
export const filterToColorMap = {
  // Categories
  "User Interfaces": "green",
  "Web Programming I": "yellow",
};

export function Notes({ allNotes, pageSize }: IProps) {
  const sortedNotes = sortByCreatedDescending(allNotes);
  const [filteredNotes, setFilteredNotes] = React.useState(sortedNotes);
  const [activeFilter, setActiveFilter] = React.useState<
    string | "John Abbott College"
  >("John Abbott College");
  const [currentPage, setCurrentPage] = React.useState(1);

  const setNotes = (filter: string) => {
    setActiveFilter(filter);
    const newFilterNotes = allNotes.filter(
      (note) => note.type === filter || note.category === filter
    );
    setFilteredNotes(newFilterNotes);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const renderFilterRow = (filterType: string) => {
    const onlyUnique = (value, index, array) => {
      return array.indexOf(value) === index;
    };

    const filters: string[] = [
      ...allNotes.map((note: INote) => {
        return note[filterType];
      }),
    ].filter(onlyUnique);

    return (
      <nav className={styles.nav}>
        <header>
          <TextButton
            onClick={() => {
              setActiveFilter("John Abbott College");
              setFilteredNotes(allNotes);
            }}
            color={activeFilter === "John Abbott College" ? "white" : "grey"}
          >
            John Abbott College
          </TextButton>
        </header>
        {filters.map((filter: string) => {
          return (
            <div key={filter}>
              <TextButton
                variant="subheading"
                onClick={() => setNotes(filter)}
                color={activeFilter === filter ? "white" : "grey"}
              >
                {filter}
              </TextButton>
            </div>
          );
        })}
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
          <>{filteredNotes.map((note: INote) => renderListItem(note))}</>
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
      <Pagination
        items={filteredNotes.length} // Total number of items
        currentPage={currentPage} // Current active page
        pageSize={pageSize} // Number of items per page
        onPageChange={(page) => {
          setCurrentPage(page);
          router.push(`/notes?page=${page}`);
        }}
      />
    </>
  );
}
