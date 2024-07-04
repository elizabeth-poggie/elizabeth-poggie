import { MDXProps } from "../../../../pages/recipes/[slug]";
import { INote } from "../../../interfaces/note";
import { MDXRemote } from "next-mdx-remote";
import {
  MDHeader,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";
import { Image } from "../image/image";

export function MDXNoteContent({ source, baseFolder }: MDXProps) {
  return (
    <MDXRemote
      {...source}
      components={{
        h1: MDHeader,
        h2: MDSubHeader,
        p: MDParagraph,
        ul: MDUnorderedList,
        img: (props) => <MDXImage {...props} slug={baseFolder} />,
      }}
    />
  );
}

interface IMDXImageProps {
  src?: string;
  alt?: string;
  slug: string;
}

export const MDXImage = ({ src, alt, slug }: IMDXImageProps) => {
  // custom loader - kinda hacky but works lol
  const customImageLoader = ({ src }) => {
    return `${slug}/${src}`;
  };
  return <Image customImageLoader={customImageLoader} src={src} alt={alt} />;
};
