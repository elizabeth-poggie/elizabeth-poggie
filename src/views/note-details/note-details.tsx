import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
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
import { relatedNotes } from "../../../pages/notes/[slug]";

interface IProps {
  noteDetails: INote;
  relatedNotes?: relatedNotes[];
}

export function NoteDetails({ noteDetails, relatedNotes }: Readonly<IProps>) {
  const [isInContent, setIsInContent] = React.useState<boolean>();
  const observedContentRef = React.useRef(null);

  const handleScroll = () => {
    if (!observedContentRef.current) {
      return;
    }
    const { offsetTop } = observedContentRef.current;
    const position = window.pageYOffset;
    if (position + 16 >= offsetTop) {
      tocbot.refresh({
        ...TOC_NOTE_DETAILS_OPTIONS,
        hasInnerContainers: true,
      });
      setIsInContent(true);
    } else if (position < offsetTop) {
      tocbot.refresh({
        ...TOC_NOTE_DETAILS_OPTIONS,
        hasInnerContainers: true,
      });
      setIsInContent(false);
    }
  };

  React.useEffect(() => {
    if (!observedContentRef.current) {
      return;
    }

    // custom styling - configure side bar to become sticky once we enter the content
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // remove listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [observedContentRef]);

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

  const renderDetails = () => {
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
      <div className={styles.container}>
        {renderNoteHeader()}
        <div ref={observedContentRef}>
          <div
            className={
              isInContent
                ? styles.leftSideBar_sticky
                : styles.leftSideBar_default
            }
          >
            <NotesSideBar related={relatedNotes} current={noteDetails} />
          </div>
          {renderDetails()}
        </div>
      </div>
    </>
  );
}

interface ISideBarProps {
  related?: relatedNotes[];
  current: INote;
}

const NotesSideBar = ({ related, current }: ISideBarProps) => {
  return (
    <aside>
      {related.map((related: relatedNotes) => {
        return (
          <section key={related.type} className={styles.sideBarSection}>
            <section className={styles.sideBarSectionHeader}>
              <header>
                <Text variant="p" style="capitalize" color="white">
                  {related.type}s
                </Text>
              </header>
            </section>
            {related.notes?.map((item) => {
              const isActiveLink =
                item.title === current.title && item.number === current.number;
              return (
                <div key={item.slug}>
                  <TextLink
                    href={`/notes/${item.slug}`}
                    variant="subheading"
                    onClick={() =>
                      tocbot.refresh({
                        ...TOC_NOTE_DETAILS_OPTIONS,
                        hasInnerContainers: true,
                      })
                    }
                    color={isActiveLink ? "white" : "grey"}
                  >
                    {item.number}. {item.title}
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
        );
      })}
    </aside>
  );
};
