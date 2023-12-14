import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";
import cover from "./cover.jpeg";
import { Image } from "../../components/display/image/image";

// TODO - import good fonts
// TODO - Draft Vision
// TODO - fix colors
export function Home() {
  return (
    <div>
      <Text variant="h1" align="center">
        Elizabeth Poggie
      </Text>
      <Image src={cover.src} variant="cover" />
      <Text variant="h3" align="right">
        My name is Elizabeth Poggie and I'm a Software Developer with a passion
        for coordination. Since 2019, I've been merging my love of frontend
        development with event planning by working on highly interdisciplinary
        projects. In the right environment, I like to merge creativity in my
        work by incorporating my own artistic touch.
      </Text>
    </div>
  );
}
