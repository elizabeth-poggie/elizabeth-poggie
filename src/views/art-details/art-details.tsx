import { MDXProps } from "../../../pages/recipes/[slug]";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";

export function ArtDetails(props: MDXProps) {
  const { coverSrc } = props.source.frontmatter;

  return (
    <div>
      <MDXNoteContent {...props} />
      <MDXImage src={coverSrc} alt="yeet" />
    </div>
  );
}
