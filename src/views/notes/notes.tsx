import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { ListLayout } from "../../components/layout/list-layout/list-layout";
import { Text } from "../../components/typography/text/text";
import { ICollegeNote } from "../../interfaces/note";

interface IProps {
  allNotes: ICollegeNote[];
}

export function Notes({ allNotes }: IProps) {
  // TODO - migrate projects view to here
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

  // TODO - implement with a reducer instead
  // add sort on click functionality
  const renderFilterRow = (filterTitle: string, filterType: string) => {
    return (
      <div>
        <Text variant="h1">{filterTitle}</Text>
        {allNotes.map((note: ICollegeNote) => {
          return <PillButton title={note[filterType]} onClick={() => null} />;
        })}
      </div>
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
