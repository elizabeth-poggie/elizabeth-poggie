import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";

interface IProps {
  allNotes: INote[];
}

export function Notes({ allNotes }: IProps) {
  // TODO - make a reducer to filter what notes are being selected
  // TODO - make a pill component
  return (
    <div>
      <Text variant="title">Notes</Text>
      <HorizontalLine />
    </div>
  );
}
