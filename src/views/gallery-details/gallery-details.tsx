import { MDXProps } from "../../../pages";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";
import { Text } from "../../components/typography/text/text";
import { cs } from "../../utils/classHelpers";
import styles from "./gallery-details.module.scss";

export function GalleryDetails(props: MDXProps) {
  const { coverSrc, title, subtitle, created } = props.source.frontmatter;
  const { baseFolder } = props;
  const year = created.split("-")[0];
  return (
    <div className={styles.container}>
      <div className={cs(styles.column, styles.artContainer)}>
        <div className={styles.smallNoteTitle}>
          <div className={styles.year}>
            <Text variant="h3">{year}</Text>
          </div>
          <Text variant="title">{title}</Text>
          <Text variant="subheading2">{subtitle}</Text>
        </div>
        <MDXImage
          src={coverSrc}
          baseFolder={baseFolder}
          variant="galleryDetailsItem"
        />
      </div>
      <div className={styles.column}>
        <div className={styles.noteContainer}>
          <div className={styles.bigNoteTitle}>
            <div className={styles.year}>
              <Text variant="h3">{year}</Text>
            </div>
            <Text variant="title">{title}</Text>
            <Text variant="subheading2">{subtitle}</Text>
          </div>
          <MDXNoteContent {...props} />
        </div>
      </div>
    </div>
  );
}
