import { Text } from "../../components/typography/text/text";
import { Link, TextLink } from "../../components/navigation/link/link";
import React from "react";
import {
  TOC_NOTE_DETAILS_OPTIONS,
  Toc,
} from "../../components/navigation/toc/toc";
import tocbot from "tocbot";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { MDNoteContent } from "../../components/display/md-note-content/md-note-content";
import { MDXProps } from "../../../pages/recipes/[slug]";

export function MdxNoteDetails(props: MDXProps) {
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

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        <div className={styles.noteTitle}>
          <Text variant="h3">{noteDetails.type}</Text>
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
          <MDNoteContent noteDetails={noteDetails} />
        </div>
      </div>
    </>
  );
}
