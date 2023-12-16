import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";
import cover from "../../assets/personal/cover.jpeg";
import { Image } from "../../components/display/image/image";

export function Home() {
  return (
    <div>
      <div className={styles.title}>
        <Text variant="title" align="center">
          Elizabeth Poggie
        </Text>
      </div>
      <Image src={cover.src} variant="cover" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Text variant="p" align="right">
            My name is Elizabeth Poggie and I'm a software developer with a
            passion for coordination. Since 2019, I've been merging my love of
            frontend development with planning by working on highly
            interdisciplinary projects. In the right environment, I like to
            blend creativity in my work by incorporating my own artistic touch.
          </Text>
        </div>
      </div>
    </div>
  );
}
