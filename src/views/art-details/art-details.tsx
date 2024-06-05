import { MDXProps } from "../../../pages/recipes/[slug]";
import { Image, MDXImageWrapper } from "../../components/display/image/image";
import {
  MDXImage,
  MDXNoteContent,
} from "../../components/display/mdx-note-content/mdx-note-content";

export function ArtDetails(props: MDXProps) {
  const { coverSrc } = props.source.frontmatter;
  const baseSrc = props.baseSrc + coverSrc;
  console.log(baseSrc);
  // will this work lmao
  return (
    <div>
      <MDXNoteContent {...props} />
      <MDXImage src={coverSrc} alt="yeet" />
    </div>
  );
}
