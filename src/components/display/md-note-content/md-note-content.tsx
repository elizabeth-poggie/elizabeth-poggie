import Markdown from "react-markdown";
import { INote } from "../../../interfaces/note";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import rehypeSlug from "rehype-slug";
import { Link, TextLink } from "../../navigation/link/link";
import { Text } from "../../typography/text/text";
import { HorizontalLine } from "../horizontal-line/horizontal-line";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Image } from "../image/image";
import styles from "./md-note-content.module.scss";

interface IProps {
  noteDetails: INote;
}

export function MDNoteContent({ noteDetails }: IProps) {
  return (
    <>
      <div className="js-toc-content">
        <Markdown
          rehypePlugins={[rehypeSlug]}
          components={{
            h1: ({ id, children }) => MDHeader({ id, children }),
            h2: ({ children }) => MDSubHeader({ children }),
            p: ({ children }) => MDParagraph({ children }),
            ul: ({ children }) => MDUnorderedList({ children }),
            img: ({ src, alt }) => MDImage({ src, alt }),
            a: ({ children, href }) => MDLink({ children, href }),
            code: ({ node, className, children, ...props }) =>
              MDCode({ node, className, children, ...props }),
          }}
        >
          {noteDetails.content}
        </Markdown>
      </div>
    </>
  );
}

// helper functions

export const MDHeader = ({ id, children }) => {
  return (
    <div className={styles.mdHeader}>
      <Link href={`#${id}`} scroll={false}>
        <div className="js-toc-heading" id={id}>
          <Text variant="h1">{children}</Text>
        </div>
      </Link>
      <HorizontalLine />
    </div>
  );
};

export const MDSubHeader = ({ children }) => {
  return (
    <div className={styles.mdSubHeader}>
      <Text variant="h3">{children}</Text>
    </div>
  );
};

export const MDImage = ({ src, alt }) => {
  return (
    <div className={styles.codeBlock}>
      <Image src={src} />
    </div>
  );
};

export const MDUnorderedList = ({ children }) => {
  return (
    <ul>
      <Text variant="p">{children}</Text>
    </ul>
  );
};

export const MDParagraph = ({ children }) => {
  return (
    <div className={styles.mdParagraph}>
      <Text variant="p">{children}</Text>
    </div>
  );
};

interface IMDLinkProps extends NextLinkProps {
  children: React.ReactNode;
  assetPath?: string;
}

export const MDLink = ({ children, href }: IMDLinkProps) => {
  return (
    <TextLink
      href={href}
      color="green" // TODO - maybe come up with a stronger brand lol
      decoration="underline"
    >
      {children}
    </TextLink>
  );
};

export const MDCode = ({ node, className, children, ...props }) => {
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
