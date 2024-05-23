import type { MDXComponents } from "mdx/types";
import {
  MDHeader,
  MDImage,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../components/display/md-note-content/md-note-content";
import { MDXImage } from "../components/display/mdx-note-content/mdx-note-content";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: MDHeader,
    h2: MDSubHeader,
    p: MDParagraph,
    ul: MDUnorderedList,
    img: MDXImage,
  };
}
