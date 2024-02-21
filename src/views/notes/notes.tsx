import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { ListLayout } from "../../components/layout/list-layout/list-layout";
import { Text } from "../../components/typography/text/text";
import { ICollegeNote, INote } from "../../interfaces/note";
import styles from "./notes.module.scss";

interface IProps {
  allNotes: INote[];
}

/**
 * * * * * * * * * * * * * * * * * * * * * * *
 *                                           *
 *    Data Structures and Relationships      *
 *                                           *
 * * * * * * * * * * * * * * * * * * * * * * *
 */

/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - Family
 *    - Category
 *      - Color                         (e.g. yellow, green, blue - can be automated with a script)
 *      - Primary types []              (e.g. left column in Note)
 *      - Secondary types []            (e.g. right column in Note)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - Computer Science @ John Abbott College
 *    - Course
 *      - Lectures
 *      - Labs, Exercises
 * - UnderGrad @ McGill University
 *    - Course
 *      - Lectures
 *      - Assignments, Tests, Projects
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - Navigation Strategies
 *    - The Corporate World
 *      - Strategies
 *      - Templates, Procedures
 *    - The Human Condition
 *      - Strategies
 *      - Templates, Procedures
 *    - The Kitchen
 *      - Mains
 *      - Drinks, Desserts, Appetizers
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

/**
 * Sorters
 *
 * - Latest
 * - Year: 2024, 2023, 2022, ...
 *
 */

// List of supported filters lol
export const filterToColorMap = {
  // Categories
  "User Interfaces": "green",
  "Intro to Programming": "yellow",
};

export function Notes({ allNotes }: IProps) {
  // TODO - maybe use a provider instead lol, however this will be good for now
  const [filteredNotes, setFilteredNotes] = React.useState(allNotes);

  const renderList = () => {
    return (
      <>
        {filteredNotes.map((note: INote, i: number) => {
          return (
            <div key={note.slug}>
              <ListItem
                title={`${note.number}. ${note.title}`}
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
      </>
    );
  };

  // TODO - maybe make it such that more than one thing can be selected at once
  // TODO - ...and that the styling of things that are active is different lol
  const setNotes = (filter: string) => {
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
        <header className={styles.filterHeader}>
          <Text variant="h2" style="capitalize">
            Course
          </Text>
        </header>
        {filters.map((filter: string) => {
          return (
            <PillButton
              color={filterToColorMap[filter]}
              key={filter}
              title={filter}
              onClick={() => setNotes(filter)}
            />
          );
        })}
      </article>
    );
  };

  // TODO - support more types
  const renderFilters = () => {
    return <>{renderFilterRow("category")}</>;
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={renderFilters()}
      listContent={renderList()}
    />
  );
}
