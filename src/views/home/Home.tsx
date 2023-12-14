import Layout from "../../components/templates/layout";
import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";
import cover from "./cover.jpeg";

// TODO - import good fonts
// TODO - Draft Vision
// TODO - fix colours
export function Home() {
  return (
    <div>
      <Text variant="h1">Elizabeth Poggie</Text>
      <div className={styles.container}>
        <img className={styles.centerFit} src={cover.src} />
      </div>
      <Text variant="h1">Tech Enthusiast && Coordinator</Text>
    </div>
  );
}
