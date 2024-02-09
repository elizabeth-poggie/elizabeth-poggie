import { Text } from "../../components/typography/text/text";
import { ICollegeNote } from "../../interfaces/note";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Markdown from "react-markdown";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import styles from "./note-details.module.scss";
import { renderToString } from "react-dom/server";
import { Link } from "../../components/navigation/link/link";
import { NoteLayout } from "../../components/layout/note-layout/note-layout";
import { Image } from "../../components/display/image/image";
import rehypeSlug from "rehype-slug";
import React from "react";
import { Toc } from "../../components/navigation/toc/toc";
import tocbot from "tocbot";

interface IProps {
  noteDetails: ICollegeNote;
  relatedNotes?: ICollegeNote[];
}

export function NoteDetails({ noteDetails, relatedNotes }: Readonly<IProps>) {
  const [note, setNote] = React.useState<ICollegeNote>();
  React.useEffect(() => {
    // we do not need to refresh if we are on the same page
    if (note && note === noteDetails) {
      return;
    }
    // this is our first time on the note details page
    if (!note) {
      return setNote(noteDetails);
    }
    // we are moving to another note details page, refresh toc
    return () => {
      setNote(noteDetails);
      tocbot.refresh();
    };
  }, [tocbot, noteDetails]);

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
    return (
      <aside className={styles.sideBar}>
        <Toc />
        {relatedNotes?.map((note: ICollegeNote) => {
          return (
            <div key={note.slug}>
              <Link href={`/notes/${note.slug}`}>
                <Text variant="subheading" style="italics">
                  {note.title}
                </Text>
              </Link>
            </div>
          );
        })}
        <Link href="/">
          <Text variant="subheading" style="italics">
            Home
          </Text>
        </Link>
      </aside>
    );
  };

  const renderNoteDetails = () => {
    return (
      <>
        {renderNoteHeader()}
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
