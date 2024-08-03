import { Text } from "../../components/typography/text/text";
import React from "react";
import {
  TOC_NOTE_DETAILS_OPTIONS,
  Toc,
} from "../../components/navigation/toc/toc";
import tocbot from "tocbot";
import { MDXProps } from "../../../pages/recipes/[slug]";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";
import styles from "./mdx-note-details.module.scss";

export function MdxNoteDetails(props: MDXProps) {
  const [isInContent, setIsInContent] = React.useState<boolean>();
  const observedContentRef = React.useRef(null);
  const { title, tag } = props.source.frontmatter;

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

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        <div className={styles.noteTitle}>
          <Text variant="h3">{tag}</Text>
        </div>
        <div className={styles.noteTitle}>
          <Text variant="title">{title}</Text>
        </div>
      </header>
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
            <section className={styles.sideBarSection}>
              <div className={styles.tocInSideBar}>
                <Toc />
              </div>
            </section>
          </div>
          <MDXNoteContent {...props} />
        </div>
      </div>
    </>
  );
}
