import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextButton } from "../../components/inputs/text-button/text-button";
import { ScrollableContainer } from "../../components/layout/scrollable-container/scrollable-container";

interface IProps {
  allNotes: INote[];
}

// List of supported filters lol
export const filterToColorMap = {
  // Categories
  "User Interfaces": "green",
  "Intro to Programming": "yellow",
};

export function Notes({ allNotes }: IProps) {
  const [filteredNotes, setFilteredNotes] = React.useState(allNotes);
  const [activeFilter, setActiveFilter] = React.useState<
    string | "John Abbott College"
  >("John Abbott College");

  const setNotes = (filter: string) => {
    setActiveFilter(filter);
    const newFilterNotes = allNotes.filter(
      (note) => note.type === filter || note.category === filter
    );
    setFilteredNotes(newFilterNotes);
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
      <article>
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
      </article>
    );
  };

  const renderList = () => {
    return (
      <>
        {filteredNotes.map((note: INote, i: number) => {
          // date logic for list items
          const currentDate = note.updated
            ? new Date(note.updated) // priority given to updated
            : new Date(note.created);
          const displayDate = currentDate.getFullYear() ? (
            <Text>
              {`${currentDate.toLocaleString("default", {
                month: "short",
              })} ${currentDate.getFullYear()}`}
            </Text>
          ) : null;

          return (
            <div key={note.slug}>
              <ListItem
                title={note.title}
                href={`/notes/${note.slug}`}
                rightContent={displayDate}
                subContent={
                  <PillButton
                    color={filterToColorMap[note.category]}
                    title={note.category}
                    onClick={() => null}
                  />
                }
              />
              {i === filteredNotes.length - 1 ? null : <HorizontalLine />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className={styles.container}>
      <header className={styles.titleWrapper}>
        <Text variant="title">Notes</Text>
      </header>
      <HorizontalLine />
      <aside className={styles.leftSideBar}>
        {renderFilterRow("category")}
      </aside>
      <section className={styles.content}>
        <ScrollableContainer isLockWindowEnabled={true}>
          {renderList()}
        </ScrollableContainer>
      </section>
      <aside className={styles.rightSideBar}></aside>
    </main>
  );
}
