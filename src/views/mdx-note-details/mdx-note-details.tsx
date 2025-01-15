import { Text } from "../../components/typography/text/text";
import React from "react";
import {
  Toc,
  TOC_NOTE_DETAILS_OPTIONS,
} from "../../components/navigation/toc/toc";
import { MDXNoteContent } from "../../components/display/mdx-note-content/mdx-note-content";
import styles from "./mdx-note-details.module.scss";
import {
  CollapsibleLinkList,
  CollapsibleList,
} from "../../components/layout/collapsible/collapsible";
import { pluralToSingular } from "../../utils/textFormatters";
import * as tocbot from "tocbot";
import { useRouter } from "next/router";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";

export const useNoteDetails = (
  currentCollection,
  currentCategory,
  currentSubCategory,
  currentFileName
) => {
  const [data, setData] = React.useState({ noteProps: null, relatedNotes: [] });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const router = useRouter();

  React.useEffect(() => {
    const fetchNoteDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/note?category=${currentCategory}&collection=${currentCollection}&subcategory=${currentSubCategory}&filename=${currentFileName}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch note details: ${response.statusText}`
          );
        }

        const result = await response.json();
        setData({
          noteProps: result.noteProps || null,
          relatedNotes: result.relatedNotes || [],
        });
      } catch (err) {
        console.error(err);
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNoteDetails();
  }, [currentCategory, currentCollection, router.asPath]);

  return { ...data, loading, error };
};

export function getSlugParams(slug) {
  console.log(slug);
  if (!slug || typeof slug !== "string") {
    console.error("Something has gone terribly wrong");
    return {
      currentFileName: null,
      currentSubCategory: null,
      currentCategory: null,
      currentCollection: null,
    };
  }

  // Split the remaining slug by "_"
  const parts = slug.split("_");
  const currentFileName = parts.pop() || null;
  const currentSubCategory = parts.pop() || null;
  const currentCategory = parts.pop() || null;
  const currentCollection = "john-abbott-college"; // TODO - this should not be hard coded lol
  return {
    currentFileName,
    currentSubCategory,
    currentCategory,
    currentCollection,
  };
}

export function MdxNoteDetails() {
  // slug preprocessing
  const router = useRouter();
  const { slug } = router.query;
  // Split slug to handle nested structure
  const {
    currentFileName,
    currentSubCategory,
    currentCategory,
    currentCollection,
  } = getSlugParams(slug);

  const { noteProps, relatedNotes, loading, error } = useNoteDetails(
    currentCollection,
    currentCategory,
    currentSubCategory,
    currentFileName
  );

  const refreshToc = () => {
    tocbot.refresh({
      ...TOC_NOTE_DETAILS_OPTIONS,
      hasInnerContainers: true,
    });
  };

  React.useEffect(() => {
    refreshToc();
  }, [router.asPath]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const { source, assetPath, title, subcategory, number } = noteProps || {};

  const renderNoteHeader = () => (
    <header className={styles.title}>
      {subcategory ? (
        <Text variant="h3" gutterBottom={4} style="capitalize">
          {pluralToSingular(subcategory)}
        </Text>
      ) : null}
      <Text variant="title" gutterBottom={2}>
        {title || "Note not found"}
      </Text>
    </header>
  );

  const renderRelatedNotes = () => {
    if (!relatedNotes || Object.keys(relatedNotes).length === 0) {
      return null;
    }

    const collapsibles = Object.keys(relatedNotes).map((subcategory) => {
      const links = relatedNotes[subcategory].map((note) => ({
        text: note.text,
        href: note.href,
      }));

      return {
        title: subcategory,
        content: (
          <CollapsibleLinkList
            links={links}
            selectedText={`${number}. ${title}`}
            handleOnClick={refreshToc}
          />
        ),
      };
    });

    return (
      <section className={styles.collapsibleInSideBar}>
        <CollapsibleList collapsibles={collapsibles} selected={subcategory} />
      </section>
    );
  };

  const renderToc = () => (
    <div className={styles.tocInSideBar}>
      <Toc />
    </div>
  );

  const renderNotes = () => (
    <div className={styles.mainContent}>
      <MDXNoteContent source={source} assetPath={assetPath} />
    </div>
  );

  return (
    <ThreeColumnTemplate
      mainContent={renderNotes()}
      header={renderNoteHeader()}
      rightSidebar={renderRelatedNotes()}
      leftSidebar={renderToc()}
    />
  );
}
