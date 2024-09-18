import { Text } from "../../components/typography/text/text";
import React, { useEffect } from "react";
import {
  Toc,
  TOC_NOTE_DETAILS_OPTIONS,
} from "../../components/navigation/toc/toc";
import { MDXProps } from "../../../pages/recipes/[slug]";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";
import styles from "./mdx-note-details.module.scss";
import {
  Collapsible,
  CollapsibleLinkList,
} from "../../components/layout/collapsible/collapsible";
import { CategoryToLinkMap } from "../../utils/helpers/noteFetchers";
import {
  pluralToSingular,
  replaceHyphensWithSpaces,
} from "../../utils/helpers/textFormatters";
import tocbot from "tocbot";
import { useRouter } from "next/router";

export function MdxNoteDetails(props: MDXProps) {
  const { title, type } = props.source.frontmatter;
  const relatedNotes: CategoryToLinkMap = props.relatedNotes;
  const noteType = type ? replaceHyphensWithSpaces(type) : null;
  const router = useRouter();

  const refreshToc = () => {
    tocbot.refresh({
      ...TOC_NOTE_DETAILS_OPTIONS,
      hasInnerContainers: true,
    });
  };

  React.useEffect(() => {
    refreshToc();
  }, [router.asPath]);

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        {type ? (
          <Text variant="h3" gutterBottom={2} style="capitalize">
            {pluralToSingular(noteType)}
          </Text>
        ) : null}
        <Text variant="title" gutterBottom={2}>
          {title}
        </Text>
      </header>
    );
  };

  const renderRelatedNotes = () => {
    if (!type || !relatedNotes || !relatedNotes[type]) {
      return null;
    }

    const links = relatedNotes[type].map((note) => ({
      text: note.text,
      href: note.href,
    }));

    return (
      <section className={styles.collapsibleInSideBar}>
        <Collapsible title={noteType}>
          <CollapsibleLinkList
            links={links}
            selectedText={title}
            handleOnClick={refreshToc}
          />
        </Collapsible>
      </section>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {renderNoteHeader()}
        <main className={styles.main}>
          <section className={styles.sideBarSection}>
            <div className={styles.tocInSideBar}>
              <Toc />
            </div>
          </section>
          <section className={styles.contentSection}>
            <MDXNoteContent {...props} />
          </section>
          <section className={styles.sideBarSection}>
            {renderRelatedNotes()}
          </section>
        </main>
      </div>
    </>
  );
}
