import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { ListItem } from "../../components/display/list-item/list-item";
import { ListLayout } from "../../components/layout/list/list-layout";
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
                subContent={<Text>{note.subtitle}</Text>}
              />
              {i === allNotes.length - 1 ? null : <HorizontalLine />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={<Text>Yeet</Text>}
      listContent={renderListContent()}
    />
  );
}
