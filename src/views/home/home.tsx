import { CollectionItemLink } from "../../components/navigation/collection-item-link/collection-item-link";
import { TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./home.module.scss";

interface IProps {
  allCourses: INote[];
}

// TODO - make it so all these links navigate within the code base
// TODO - maybe move this is a markdown file lol
export function Home({ allCourses }: IProps) {
  return (
    <div className={styles.container}>
      {/* <Text variant="title" align="center">
        Courses
      </Text>
      <div className={styles.collection}>
        {allCourses.map((course: INote) => {
          return (
            <CollectionItemLink href={`/courses/${course.slug}`} color="green">
              <Text variant="h3" color="green">
                {course.category}
              </Text>
            </CollectionItemLink>
          );
        })}
      </div> */}
      <section className={styles.section}>
        <Text variant="title" align="center">
          About
        </Text>
        <div className={styles.paragraphContainer}>
          <Text variant="p">
            I am currently a lecturer @ John Abbott College , where I teach{" "}
            <TextLink
              variant="p"
              href="/notes/01-W24-intro-to-programming"
              decoration="underline"
              color="green"
            >
              programming
            </TextLink>{" "}
            and{" "}
            <TextLink
              variant="p"
              href="/notes/01-user-interfaces"
              decoration="underline"
              color="green"
            >
              web development
            </TextLink>
            .
          </Text>
        </div>
        <div className={styles.paragraphContainer}>
          <Text variant="p">
            Since 2019, I've been merging my technical expertise with my love of
            problem-solving by working on highly interdisciplinary projects. In
            the right environment, I like to blend creativity into my work by
            adding{" "}
            <TextLink
              variant="p"
              href="/art"
              decoration="underline"
              color="green"
            >
              my own artistic touch
            </TextLink>
            .
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
