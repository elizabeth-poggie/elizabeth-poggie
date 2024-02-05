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
  const renderList = () => {
    return (
      <>
        {allNotes.map((note: ICollegeNote, i: number) => {
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
              {i === allNotes.length - 1 ? null : <HorizontalLine />}
            </div>
          );
        })}
      </>
    );
  };

  // TODO - add sort on click functionality
  const renderFilterRow = (filterTitle: string, filterType: string) => {
    const onlyUnique = (value, index, array) => {
      return array.indexOf(value) === index;
    };

    const filterTitles: string[] = [
      ...allNotes.map((note: ICollegeNote) => {
        return note[filterType];
      }),
    ].filter(onlyUnique);

    return (
      <article>
        <header className={styles.filterHeader}>
          <Text variant="h2">{filterTitle}</Text>
        </header>
        {filterTitles.map((filterTitle: string) => {
          return (
            <PillButton
              key={filterTitle}
              title={filterTitle}
              onClick={() => null}
            />
          );
        })}
      </article>
    );
  };

  // TODO - support more types
  const renderFilters = () => {
    return <>{renderFilterRow("Course", "course")}</>;
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={renderFilters()}
      listContent={renderList()}
    />
  );
}
