import { MDXProps } from "../../../pages/recipes/[slug]";
import { Image, MDXImageWrapper } from "../../components/display/image/image";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";

export function ArtDetails(props: MDXProps) {
  const { coverSrc } = props.source.frontmatter;
  const baseSrc = "/recipes/focaccia/" + coverSrc;
  console.log(baseSrc);
  return (
    <div>
      <MDXNoteContent {...props} />
      <Image src={baseSrc} />
    </div>
  );
}
