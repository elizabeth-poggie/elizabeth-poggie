import { MDXProps } from "../../../../pages/recipes-v1/[slug]";
import { INote } from "../../../interfaces/note";
import { MDXRemote } from "next-mdx-remote";
import {
  MDHeader,
  MDImage,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";
import Image from "next/image";

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
        img: MDXImage,
      }}
    />
  );
}

/**
 * lol
 */
export const MDXImage = ({ src, alt }) => {
  // custom loader to resolve images better
  const customImageLoader = ({ src }) => {
    console.log("Image src:", src);
    return `/${src}`; // Ensure all paths start with a leading slash
  };
  console.log("Image src:", src);

  return (
    <Image
      loader={customImageLoader}
      src={src}
      alt={alt}
      width={50}
      height={50}
    />
  );
};
