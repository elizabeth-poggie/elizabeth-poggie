import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Carousel } from "../../components/layout/carousel/carousel";
import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <Text variant="title" align="center">
        Courses • Projects • Art
      </Text>
      <div className={styles.collection}>
        <div className={styles.collectionItem}></div>
        <div className={styles.collectionItem}></div>
      </div>

      <Text variant="title" align="center">
        About
      </Text>
      <div className={styles.paragraphContainer}>
        <Text variant="p">
          I am currently a lecturer @ John Abbott College, where I teach
          programming and web development.
        </Text>
      </div>
      <div className={styles.paragraphContainer}>
        <Text variant="p">
          Throughout my career, I've been merging my technical expertise with my
          love of problem-solving by working on highly interdisciplinary
          projects. In the right environment, I like to blend creativity into my
          work by adding my own artistic touch.
        </Text>
      </div>
      <div className={styles.paragraphContainer}>
        <Text variant="p">
          When I am not hidden away in the corners of Penfield, you'll often
          spot me at a farmers market, creating another strange piece of art or
          biting off more work than I can chew (again).
        </Text>
      </div>
      <Text variant="title" align="center">
        Contact
      </Text>
    </div>
  );
}
