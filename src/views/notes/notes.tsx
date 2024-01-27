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
    return null;
  };

  return (
    <ListLayout
      title="Notes"
      leftContent={<Text>Yeet</Text>}
      listContent={renderListContent()}
    />
  );
}
