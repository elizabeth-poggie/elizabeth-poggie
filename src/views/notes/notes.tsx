import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { ListLayout } from "../../components/layout/list-layout/list-layout";
import { Text } from "../../components/typography/text/text";
import { ICollegeNote } from "../../interfaces/note";
import styles from "./notes.module.scss";

interface IProps {
  allNotes: ICollegeNote[];
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
 * - Category
 *    - Sub Category
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
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - Note
 *    - slug       (e.g. 2024-01-26-Intro-to-Programming - can be automated with a script)
 *    - type             (e.g. "Lecture", "Strategy", "Template", "Assignment", "Lab", "Art" ....)
 *    - category        (e.g. User Interfaces, Intro to Programming)
 *    - content
 *    - date of creation        (e.g. in UTC - can be automated with a script)
 *    - date of update              (in case i re use my notes at all lol)
 *    - number in series        (e.g. "Lecture 1", "Lecture 1.1", "Lab 1", "Lab 2", "Recipe 1", "Strategy 1.0"...)
 *    - title                 (e.g. "Intro to JavaScript", "The Box Model")
 *    - subtitle        (e.g. "as taught by Poggie in 2024", "as made by Nana in 2012", "as taught by Luc Devroye in 2016", "as learnt the hard way in 2022")
 *    - images            (e.g. carousel content, cover image, thumbnail)
 *    - text:link           (e.g. slides:pdf, contact:email, source:href)
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
  // Courses
  "User Interfaces": "green",
  "Intro to Programming": "yellow",
};

export function Notes({ allNotes }: IProps) {
  // TODO - maybe use a provider instead lol, however this will be good for now
  const [filteredNotes, setFilteredNotes] = React.useState(allNotes);

  const renderList = () => {
    return (
      <>
        {filteredNotes.map((note: ICollegeNote, i: number) => {
          return (
            <div key={note.slug}>
              <ListItem
                title={note.title}
                href={`/notes/${note.slug}`}
                rightContent={
                  <PillButton
                    color={filterToColorMap[note.course]}
                    title={note.course}
                    onClick={() => null}
                  />
                }
                subContent={
                  <Text variant="subheading" color="grey">
                    {note.subtitle}
                  </Text>
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
      (note) => note.type === filter || note.course === filter
    );
    setFilteredNotes(newFilterNotes);
  };

  const renderFilterRow = (filterType: string) => {
    const onlyUnique = (value, index, array) => {
      return array.indexOf(value) === index;
    };

    const filters: string[] = [
      ...allNotes.map((note: ICollegeNote) => {
        return note[filterType];
      }),
    ].filter(onlyUnique);

    return (
      <article>
        <header className={styles.filterHeader}>
          <Text variant="h2" style="capitalize">
            {filterType}
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
    return <>{renderFilterRow("course")}</>;
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={renderFilters()}
      listContent={renderList()}
    />
  );
}
