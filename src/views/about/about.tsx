import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import styles from "./about.module.scss";
import { NavBar } from "../../components/navigation/nav-bar/nav-bar";
import { navItems } from "../../../pages";

// Read more about static assets here => https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets
const coverSrc = "/assets/personal/cover.jpeg";

export function About() {
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <Text variant="title" align="center">
            Elizabeth Poggie
          </Text>
        </div>
        <Image src={coverSrc} variant="cover" filter="darken" />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <Text variant="p" align="justify">
            Software developer with a passion for coaching and coordination.
            Since 2019, I've been merging my love of development with my passion
            by working on highly interdisciplinary projects. In the right
            environment, I like to blend creativity into my work by
            incorporating my own artistic touch.
          </Text>
        </div>
      </div>
    </div>
  );
}
