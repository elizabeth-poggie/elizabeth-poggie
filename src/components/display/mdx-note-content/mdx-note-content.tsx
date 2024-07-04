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

export function MDXNoteContent({ source }: MDXProps) {
  // TODO - add more support when needed
  return (
    <MDXRemote
      {...source}
      components={{
        h1: MDHeader,
        h2: MDSubHeader,
        p: MDParagraph,
        ul: MDUnorderedList,
        img: (props) => <MDXImage {...props} slug="focaccia" />,
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
  // custom loader to resolve images better
  const customImageLoader = ({ src }) => {
    return `${slug}/${src}`;
  };

  return <Image customImageLoader={customImageLoader} src={src} alt={alt} />;
};
