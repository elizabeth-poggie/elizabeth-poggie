import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Carousel } from "../../components/layout/carousel/carousel";
import { TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import styles from "./home.module.scss";

// TODO - maybe move this is a markdown file lol
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
          I am currently a lecturer @{" "}
          <TextLink
            variant="p"
            href="https://johnabbott.qc.ca/"
            decoration="underline"
          >
            John Abbott College
          </TextLink>
          , where I teach programming and web development.
        </Text>
      </div>
      <div className={styles.paragraphContainer}>
        <Text variant="p">
          Since 2019, I've been merging my technical expertise with my love of
          problem-solving by working on highly interdisciplinary projects. In
          the right environment, I like to blend creativity into my work by
          adding my own artistic touch.
        </Text>
      </div>
      <div className={styles.paragraphContainer}>
        <Text variant="p">
          When I am not hidden away in the corners of Penfield, you'll often
          spot me at{" "}
          <TextLink
            variant="p"
            href="http://marchesainteanne.ca/fr/acceuil/"
            decoration="underline"
          >
            a farmers market
          </TextLink>
          , creating another strange piece of art or biting off more work than I
          can chew (again).
        </Text>
      </div>
      <Text variant="title" align="center">
        Contact
      </Text>
      <TextLink
        variant="p"
        align="center"
        href="mailto:elizabethpoggie@gmail.com"
        decoration="underline"
      >
        elizabethpoggie@gmail.com
      </TextLink>
    </div>
  );
}
