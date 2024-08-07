import { Text } from "../../components/typography/text/text";
import React from "react";
import { Toc } from "../../components/navigation/toc/toc";
import { MDXProps } from "../../../pages/recipes/[slug]";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";
import styles from "./mdx-note-details.module.scss";
import {
  Collapsible,
  CollapsibleLinkList,
} from "../../components/layout/collapsible/collapsible";

export function MdxNoteDetails(props: MDXProps) {
  const { title, type } = props.source.frontmatter;

  const renderNoteHeader = () => {
    return (
      <header className={styles.header}>
        <Text variant="h3" gutterBottom={2}>
          {type}
        </Text>
        <Text variant="title" gutterBottom={2}>
          {title}
        </Text>
      </header>
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
            <section className={styles.collapsibleInSideBar}>
              <Collapsible title={type}>
                <CollapsibleLinkList links={[{ text: "beep", href: "boop" }]} />
              </Collapsible>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
