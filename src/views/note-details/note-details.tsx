import { Text } from "../../components/typography/text/text";
import { ICollegeNote } from "../../interfaces/note";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Markdown from "react-markdown";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import styles from "./note-details.module.scss";
import { Link } from "../../components/navigation/link/link";
import { NoteLayout } from "../../components/layout/note-layout/note-layout";
import { Image } from "../../components/display/image/image";

interface IProps {
  noteDetails: ICollegeNote;
}

export function NoteDetails({ noteDetails }: Readonly<IProps>) {
  const renderHeader = ({ children }) => {
    return (
      <div className={styles.mdHeader}>
        <Text variant="h1">{children}</Text>
        <HorizontalLine />
      </div>
    );
  };

  const renderSubHeader = ({ children }) => {
    return (
      <div className={styles.mdSubHeader}>
        <Text variant="h2" style="italics">
          {children}
        </Text>
      </div>
    );
  };

  const renderImage = ({ children, src }) => {
    return (
      <div>
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

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        <div>
          <Text variant="title">
            {noteDetails.course} - {noteDetails.title}
          </Text>
        </div>
        <Text variant="subheading" style="italics">
          {noteDetails.subtitle}
        </Text>
      </header>
    );
  };

  const renderSideBar = () => {
    return <aside>Yeet</aside>;
  };

  const renderNoteDetails = () => {
    return (
      <>
        {renderNoteHeader()}
        <div>
          <Markdown
            components={{
              h1: ({ children }) => renderHeader({ children }),
              h2: ({ children }) => renderSubHeader({ children }),
              p: ({ children }) => renderParagraph({ children }),
              ul: ({ children }) => renderUnorderedList({ children }),
              img: ({ children, src }) => renderImage({ children, src }),
              a: ({ children, href }) => (
                <span>
                  <Link href={href}>
                    <Text variant="link">{children}</Text>
                  </Link>
                </span>
              ),
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
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
  };

  return (
    <NoteLayout
      leftContent={renderSideBar()}
      rightContent={renderNoteDetails()}
    />
  );
}
