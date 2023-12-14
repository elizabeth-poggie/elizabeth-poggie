import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";
import cover from "./cover.jpeg";
import { Image } from "../../components/display/image/image";

// TODO - import good fonts
// TODO - Draft Vision
// TODO - fix colours
export function Home() {
  return (
    <div>
      <Text variant="h1" align="center">
        Elizabeth Poggie
      </Text>
      <Image src={cover.src} variant="cover" />
      <Text variant="h1">Tech Enthusiast && Coordinator</Text>
    </div>
  );
}
