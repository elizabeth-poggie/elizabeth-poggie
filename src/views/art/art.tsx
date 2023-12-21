import { Text } from "../../components/typography/text/text";
import { IArt } from "../../interfaces/art";

interface IProps {
  allArt: Array<IArt>;
}

export function Art({ allArt }: IProps) {
  console.log("yeet");
  return (
    <div>
      <Text variant="p">Yeet</Text>
    </div>
  );
}
