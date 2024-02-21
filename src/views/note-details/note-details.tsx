import { Text } from "../../components/typography/text/text";
import { ICollegeNote, INote } from "../../interfaces/note";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Markdown from "react-markdown";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import styles from "./note-details.module.scss";
import { Link, TextLink } from "../../components/navigation/link/link";
import { Image } from "../../components/display/image/image";
import rehypeSlug from "rehype-slug";
import React from "react";
import {
  TOC_NOTE_DETAILS_OPTIONS,
  Toc,
} from "../../components/navigation/toc/toc";
import tocbot from "tocbot";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { filterToColorMap } from "../notes/notes";

interface IProps {
  noteDetails: INote;
  relatedNotes?: INote[];
}

export function NoteDetails({ noteDetails, relatedNotes }: Readonly<IProps>) {
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

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        <div className={styles.noteTitle}>
          <Text variant="h3">
            {noteDetails.type} {noteDetails.number}
          </Text>
        </div>
        <div className={styles.noteTitle}>
          <Text variant="title">{noteDetails.title}</Text>
        </div>
        <div>
          {noteDetails.link ? (
            <Link href={noteDetails.link.href}>
              <PillButton title={noteDetails.link.text} onClick={() => null} />
            </Link>
          ) : null}
        </div>
      </header>
    );
  };

  const renderSideBar = () => {
    return (
      <aside className={styles.sideBar}>
        <header className={styles.sideBarSection}>
          <PillButton
            color={filterToColorMap[noteDetails.category]}
            title={noteDetails.category}
            onClick={() => null}
          />
        </header>
        <section className={styles.sideBarSection}>
          {relatedNotes?.map((note: ICollegeNote) => {
            const isActiveLink = note.title === noteDetails.title;
            return (
              <div key={note.slug}>
                <TextLink
                  href={`/notes/${note.slug}`}
                  variant="subheading"
                  onClick={() =>
                    tocbot.refresh({
                      ...TOC_NOTE_DETAILS_OPTIONS,
                      hasInnerContainers: true,
                    })
                  }
                  color={isActiveLink ? "white" : "grey"}
                >
                  {note.title}
                </TextLink>
                {isActiveLink ? (
                  <div className={styles.tocInSideBar}>
                    <Toc />
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
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
                <TextLink
                  href={href}
                  color={filterToColorMap[noteDetails.category]}
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
  };

  return (
    <>
      {renderSideBar()}
      <div className={styles.container}>{renderNoteDetails()}</div>
    </>
  );
}
