import { MDXProps } from "../../../pages/recipes/[slug]";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";
import { Text } from "../../components/typography/text/text";
import styles from "./art-details.module.scss";

export function ArtDetails(props: MDXProps) {
  const { coverSrc, title, subtitle, created } = props.source.frontmatter;
  const { baseFolder } = props;
  return (
    <div className={styles.container}>
      <div className={styles.noteContainer}>
        <div className={styles.noteTitle}>
          <Text variant="h3">{created.split("-")[0]}</Text>
        </div>
        <Text variant="title">{title}</Text>
        <Text variant="subheading2">{subtitle}</Text>
        <MDXNoteContent {...props} />
      </div>
      <div className={styles.artContainer}>
        <MDXImage src={coverSrc} slug={baseFolder} />
      </div>
    </div>
  );
}
