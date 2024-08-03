import { CollectionItemLink } from "../../components/navigation/collection-item-link/collection-item-link";
import { TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./home.module.scss";

// TODO - Just import my README.md it's SOOOOO much easier lol (1 place to maintain it)
export function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Text variant="title" align="center">
          About
        </Text>
        <div className={styles.paragraphContainer}>
          <Text variant="p">
            I am currently a lecturer @ John Abbott College, the community
            manager @ Marché Sainte-Anne, and a freelance artist.
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
            spot me at a farmers market, creating another strange piece of art
            or biting off more work than I can chew (again).
          </Text>
        </div>
      </section>
      <section className={styles.section}>
        <Text variant="title" align="center">
          Contact
        </Text>
        <TextLink
          variant="p"
          align="center"
          href="mailto:elizabethpoggie@gmail.com"
          decoration="underline"
          color="green"
        >
          elizabethpoggie@gmail.com
        </TextLink>
      </section>
    </div>
  );
}
