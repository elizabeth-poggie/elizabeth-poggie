import Markdown from "react-markdown";
import { INote } from "../../../interfaces/note";
import rehypeSlug from "rehype-slug";
import { Link, TextLink } from "../../navigation/link/link";
import { PillButton } from "../../inputs/pill-button/pill-button";
import { Text } from "../../typography/text/text";
import { HorizontalLine } from "../horizontal-line/horizontal-line";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./md-content.module.scss";
import { Image } from "../image/image";

interface IProps {
  noteDetails: INote;
}

export function MDContent({ noteDetails }: IProps) {
  const renderHeader = ({ id, children }) => {
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

  const renderSubHeader = ({ children }) => {
    return (
      <div className={styles.mdSubHeader}>
        <Text variant="h3">{children}</Text>
      </div>
    );
  };

  const renderImage = ({ children, src }) => {
    return (
      <div className={styles.codeBlock}>
        <Image src={src} />
      </div>
    );
  };

  const renderUnorderedList = ({ children }) => {
    return (
      <ul>
        <Text variant="p">{children}</Text>
      </ul>
    );
  };

  const renderParagraph = ({ children }) => {
    return (
      <div className={styles.mdParagraph}>
        <Text variant="p">{children}</Text>
      </div>
    );
  };

  return (
    <>
      <div className="js-toc-content">
        <Markdown
          rehypePlugins={[rehypeSlug]}
          components={{
            h1: ({ id, children }) => renderHeader({ id, children }),
            h2: ({ children }) => renderSubHeader({ children }),
            p: ({ children }) => renderParagraph({ children }),
            ul: ({ children }) => renderUnorderedList({ children }),
            img: ({ children, src }) => renderImage({ children, src }),
            a: ({ children, href }) => (
              <TextLink
                href={href}
                color="green" // TODO - maybe come up with a stronger brand lol
                decoration="underline"
              >
                {children}
              </TextLink>
            ),
            code: ({ node, className, children, ...props }) => {
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
            },
          }}
        >
          {noteDetails.content}
        </Markdown>
      </div>
    </>
  );
}
