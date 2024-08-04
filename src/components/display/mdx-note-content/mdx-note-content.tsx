import { MDXProps } from "../../../../pages/recipes/[slug]";
import { MDXRemote } from "next-mdx-remote";
import {
  MDHeader,
  MDLink,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";
import rehypeSlug from "rehype-slug";
import { IImageProps, Image } from "../image/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./mdx-note-content.module.scss";

export function MDXNoteContent({ source, baseFolder }: MDXProps) {
  return (
    <div className="js-toc-content">
      <MDXRemote
        {...source}
        components={{
          h1: MDHeader,
          h2: MDSubHeader,
          p: MDParagraph,
          ul: MDUnorderedList,
          a: ({ children, href }) => MDLink({ children, href, baseFolder }),
          img: (props) => <MDXImage {...props} baseFolder={baseFolder} />,
          code: ({ className, children, ...props }) =>
            mdxCode({ className, children, ...props }),
        }}
      />
    </div>
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

  return (
    <Image
      {...props}
      customImageLoader={customImageLoader}
      src={src}
      alt={alt}
    />
  );
};

export const mdxCode = ({ className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <div className={styles.codeBlock}>
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <span className={styles.inlineCode} {...props}>
      {children}
    </span>
  );
};
