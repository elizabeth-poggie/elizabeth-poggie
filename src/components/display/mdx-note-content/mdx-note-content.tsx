import { MDXProps } from "../../../../pages/recipes/[slug]";
import { MDXRemote } from "next-mdx-remote";
import {
  MDHeader,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";
import { IImageProps, Image } from "../image/image";

export function MDXNoteContent({ source, baseFolder }: MDXProps) {
  return (
    <MDXRemote
      {...source}
      components={{
        h1: MDHeader,
        h2: MDSubHeader,
        p: MDParagraph,
        ul: MDUnorderedList,
        img: (props) => <MDXImage {...props} baseFolder={baseFolder} />,
      }}
    />
  );
}

interface IMDXImageProps extends IImageProps {
  baseFolder: string;
}

export const MDXImage = ({
  src,
  alt,
  baseFolder,
  ...props
}: IMDXImageProps) => {
  // custom loader - kinda hacky but works lol
  const customImageLoader = ({ src }: { src: string }) => {
    return `${baseFolder}/${src}`;
  };
  console.log(`${baseFolder}/${src}`);
  return (
    <Image
      {...props}
      customImageLoader={customImageLoader}
      src={src}
      alt={alt}
    />
  );
};
