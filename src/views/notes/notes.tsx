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

export function Notes({ allNotes }: IProps) {
  // TODO - maybe use a provider instead lol, however this will be good for now
  const [filteredNotes, setFilteredNotes] = React.useState(allNotes);
  const [activeFilters, setActiveFilters] = React.useState([]);

  const renderList = () => {
    return (
      <>
        {filteredNotes.map((note: ICollegeNote, i: number) => {
          return (
            <div key={note.slug}>
              <ListItem
                title={note.title}
                href={`/notes/${note.slug}`}
                subContent={
                  <Text variant="subheading" style="italics">
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

  const setNotes = (filter: string) => {
    const newFilterNotes = filteredNotes.filter(
      (note) => note.type === filter || note.course === filter
    );
    setFilteredNotes(newFilterNotes);
  };

  const renderFilterRow = (filterType: string) => {
    const onlyUnique = (value, index, array) => {
      return array.indexOf(value) === index;
    };

    const filters: string[] = [
      ...filteredNotes.map((note: ICollegeNote) => {
        return note[filterType];
      }),
    ].filter(onlyUnique);

    return (
      <article>
        <header className={styles.filterHeader}>
          <Text variant="h2">{filterType}</Text>
        </header>
        {filters.map((filter: string) => {
          return (
            <PillButton
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
