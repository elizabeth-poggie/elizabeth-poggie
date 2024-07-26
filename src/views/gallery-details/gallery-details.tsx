import { MDXProps } from "../../../pages/recipes/[slug]";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";
import { Text } from "../../components/typography/text/text";
import { cs } from "../../utils/helpers/classHelpers";
import styles from "./gallery-details.module.scss";

export function GalleryDetails(props: MDXProps) {
  const { coverSrc, title, subtitle, created } = props.source.frontmatter;
  const { baseFolder } = props;
  return (
    <div className={styles.container}>
      <div className={cs(styles.column, styles.artContainer)}>
        <MDXImage
          src={coverSrc}
          baseFolder={baseFolder}
          variant="galleryDetailsItem"
        />
      </div>
      <div className={styles.column}>
        <div className={styles.noteContainer}>
          <div className={styles.noteTitle}>
            <Text variant="h3">{created.split("-")[0]}</Text>
          </div>
          <Text variant="title">{title}</Text>
          <Text variant="subheading2">{subtitle}</Text>
          <MDXNoteContent {...props} />
        </div>
      </div>
    </div>
  );
}
