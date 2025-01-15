import { MDXRemote } from "next-mdx-remote";
import {
  MDLink,
  MDParagraph,
  MDSubHeader,
  MDUnorderedList,
} from "../md-note-content/md-note-content";
import { IImageProps, Image } from "../image/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./mdx-note-content.module.scss";
import { Link } from "../../navigation/link/link";
import { Text } from "../../typography/text/text";
import { HorizontalLine } from "../horizontal-line/horizontal-line";
import { MDXProps } from "../../../../pages";

export function MDXNoteContent({ source, assetPath }: MDXProps) {
  if (!source) {
    return (
      <div className={styles.error}>
        <Text variant="p">
          Something is broken lol, please complain to Poggie
        </Text>
      </div>
    );
  }

  return (
    <div className="js-toc-content">
      <MDXRemote
        {...source}
        components={{
          h1: MDXHeader,
          h2: MDSubHeader,
          p: MDParagraph,
          ul: MDUnorderedList,
          a: ({ children, href }) => MDLink({ children, href }),
          img: (props) => <MDXImage {...props} assetPath={assetPath} />,
          code: ({ className, children, ...props }) =>
            mdxCode({ className, children, ...props }),
        }}
      />
    </div>
  );
}

interface IMDXImageProps extends IImageProps {
  assetPath: string;
}

export const MDXImage = ({ src, alt, assetPath, ...props }: IMDXImageProps) => {
  const customImageLoader = ({ src }: { src: string }) => {
    return `${assetPath}/${src}`;
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

export const MDXHeader = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();
  return (
    <div className={styles.mdHeader}>
      <Link href={`#${idText}`} scroll={false}>
        <div className="js-toc-heading" id={idText}>
          <Text variant="h1">{children}</Text>
        </div>
      </Link>
      <HorizontalLine />
    </div>
  );
};
