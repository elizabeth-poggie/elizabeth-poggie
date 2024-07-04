import { MDXProps } from "../../../pages/recipes/[slug]";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";
import styles from "./art-details.module.scss";

export function ArtDetails(props: MDXProps) {
  const { coverSrc } = props.source.frontmatter;
  const { baseFolder } = props;
  return (
    <div>
      <MDXNoteContent {...props} />
      <div>
        <MDXImage src={coverSrc} slug={baseFolder} />
      </div>
    </div>
  );
}
