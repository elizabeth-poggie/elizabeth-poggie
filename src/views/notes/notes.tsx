import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { ListLayout } from "../../components/layout/list-layout/list-layout";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";

interface IProps {
  allNotes: INote[];
}

export function Notes({ allNotes }: IProps) {
  // TODO - make a reducer to filter what notes are being selected
  // TODO - make a pill component
  // TODO - migrate projects view to here
  const renderListContent = () => {
    return (
      <>
        {allNotes.map((note: INote, i: number) => {
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

  const renderFilters = () => {
    return (
      <>
        <Text variant="h1">Course</Text>
        <Text variant="h1">Material Type</Text>
        <Text variant="h1">Year</Text>
      </>
    );
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={renderFilters()}
      listContent={renderListContent()}
    />
  );
}
