import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { ListLayout } from "../../components/layout/list-layout/list-layout";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextLink } from "../../components/navigation/link/link";
import { TextButton } from "../../components/inputs/text-button/text-button";

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
  // TODO - maybe use a provider instead lol, however this will be good for now
  const [filteredNotes, setFilteredNotes] = React.useState(allNotes);
  const [activeFilter, setActiveFilter] = React.useState<string>(null);

  // TODO - maybe make it such that more than one thing can be selected at once
  // TODO - ...and that the styling of things that are active is different lol
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
          <Text>John Abbott College</Text>
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
        {filteredNotes.map((note: INote, i: number) => {
          return (
            <div key={note.slug}>
              <ListItem
                title={note.title}
                href={`/notes/${note.slug}`}
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
      </section>
      <aside className={styles.rightSideBar}></aside>
    </main>
  );
}
