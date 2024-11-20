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
  CollapsibleLinkList,
  CollapsibleList,
} from "../../components/layout/collapsible/collapsible";
import { pluralToSingular } from "../../utils/textFormatters";
import tocbot from "tocbot";
import { useRouter } from "next/router";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { CategoryToLinkMap } from "../../interfaces/note";

export function MdxNoteDetails(props: MDXProps) {
  const { title, type } = props.source.frontmatter;
  const relatedNotes: CategoryToLinkMap = props.relatedNotes;
  const noteType = type ? type : null;
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
      <header className={styles.title}>
        {type ? (
          <Text variant="h3" gutterBottom={4} style="capitalize">
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
    if (!relatedNotes) {
      return null;
    }

    const collapsibles = Object.keys(relatedNotes).map((noteType) => {
      const links = relatedNotes[noteType].map((note) => ({
        text: note.text,
        href: note.href,
      }));

      return {
        title: noteType,
        content: (
          <CollapsibleLinkList
            links={links}
            selectedText={title}
            handleOnClick={refreshToc}
          />
        ),
      };
    });

    if (!collapsibles) {
      return null;
    }

    return (
      <section className={styles.collapsibleInSideBar}>
        <CollapsibleList collapsibles={collapsibles} currentType={type} />
      </section>
    );
  };

  const renderToc = () => {
    return (
      <div className={styles.tocInSideBar}>
        <Toc />
      </div>
    );
  };

  const renderNotes = () => {
    return (
      <div className={styles.mainContent}>
        <MDXNoteContent {...props} />;
      </div>
    );
  };

  return (
    <ThreeColumnTemplate
      mainContent={renderNotes()}
      header={renderNoteHeader()}
      rightSidebar={renderRelatedNotes()}
      leftSidebar={renderToc()}
    />
  );
}
