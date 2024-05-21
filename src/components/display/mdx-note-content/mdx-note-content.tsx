import { MDXProps } from "../../../../pages/recipes/[slug]";
import { INote } from "../../../interfaces/note";
import { MDXRemote } from "next-mdx-remote";

export function MDXNoteContent({ source }: MDXProps) {
  return <MDXRemote {...source} />;
}
