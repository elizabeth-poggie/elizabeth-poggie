import { MDXProps } from "../../../../pages/recipes/[slug]";
import { INote } from "../../../interfaces/note";
import { MDXRemote } from "next-mdx-remote";
import {
  MDHeader,
  MDImage,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";

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
        img: MDImage,
      }}
    />
  );
}
