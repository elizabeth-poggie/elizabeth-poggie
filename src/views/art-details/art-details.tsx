import { MDXProps } from "../../../pages/recipes-v1/[slug]";
import { Image, MDXImageWrapper } from "../../components/display/image/image";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";

export function ArtDetails(props: MDXProps) {
  const { coverSrc } = props.source.frontmatter;
  return (
    <div>
      <MDXNoteContent {...props} />
      <Image src={coverSrc} />
    </div>
  );
}
