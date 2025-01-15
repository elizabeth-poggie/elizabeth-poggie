import React, {
  useState,
  useRef,
  useEffect,
  Suspense,
  useCallback,
} from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import styles from "./notes.module.scss";
import { Link } from "../../components/navigation/link/link";
import { formatDate, pluralToSingular } from "../../utils/textFormatters";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { sortByCreatedDescending } from "../../utils/noteHelpers";
import { FOLDER_STRUCTURE } from "../../constants/folderStructure";
import {
  CollapsibleLinkList,
  CollapsibleList,
} from "../../components/layout/collapsible/collapsible";

// Custom hook to manage notes state and fetching logic
const useNotes = (initialCategory, initialBase) => {
  const [currentCategory, setCurrentCategory] = useState(initialCategory);
  const [currentBase, setCurrentBase] = useState(initialBase);
  const [notes, setNotes] = useState({});
  const [caps, setCaps] = useState({});
  const [currentPages, setCurrentPages] = useState({ [initialCategory]: 1 });
  const [loading, setLoading] = useState(false);

  const fetchNotes = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/notes?page=${page}&pageSize=10&category=${currentCategory}&collection=${currentBase}`
      );
      const data = await response.json();

      if (!response.ok || !data.notes?.length) return;

      setNotes((prev) => ({
        ...prev,
        [currentCategory]: sortByCreatedDescending([
          ...(prev[currentCategory] || []),
          ...data.notes.filter(
            (newNote) =>
              !prev[currentCategory]?.some((note) => note.slug === newNote.slug)
          ),
        ]),
      }));
      setCaps((prev) => ({ ...prev, [currentCategory]: data.total }));
      setCurrentPages((prev) => ({ ...prev, [currentCategory]: page }));
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeCategory = (base, category) => {
    setCurrentBase(base);
    setCurrentCategory(category);
    setCurrentPages((prev) => ({ ...prev, [category]: 1 }));
  };

  return {
    currentCategory,
    currentBase,
    notes,
    caps,
    currentPages,
    loading,
    fetchNotes,
    changeCategory,
  };
};

export function Notes() {
  const loaderRef = useRef(null);
  const {
    currentCategory,
    currentBase,
    notes,
    caps,
    currentPages,
    loading,
    fetchNotes,
    changeCategory,
  } = useNotes(
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES.WEB_PROGRAMMING,
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE
  );

  const handleObserver = useCallback(
    (entries) => {
      if (
        entries[0].isIntersecting &&
        !loading &&
        (notes[currentCategory]?.length || 0) < (caps[currentCategory] || 0)
      ) {
        const nextPage = currentPages[currentCategory] + 1;
        fetchNotes(nextPage);
      }
    },
    [loading, notes, caps, currentCategory, currentPages, fetchNotes]
  );

  useEffect(() => {
    fetchNotes(1);
  }, [currentCategory, currentBase]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
      rootMargin: "60% 0px",
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  const renderCategoryCollapsibles = () => {
    const collapsibles = Object.values([
      FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE,
    ]).map((folder) => {
      const items = Object.values(folder.CATEGORIES).map((category) => ({
        text: category,
        href: "",
      }));

      return {
        title: folder.BASE,
        content: (
          <CollapsibleLinkList
            links={items}
            selectedText={currentCategory}
            handleOnClick={(selectedText) =>
              changeCategory(folder.BASE, selectedText)
            }
          />
        ),
      };
    });

    return (
      <nav className={styles.nav}>
        <CollapsibleList collapsibles={collapsibles} selected={currentBase} />
      </nav>
    );
  };

  const renderListItem = ({
    slug,
    title,
    coverSrc,
    assetPath,
    category,
    subcategory,
    created,
    updated,
  }) => (
    <Link href={`/notes/${slug}`} key={slug}>
      <div className={styles.listItem}>
        <Text color="grey">{formatDate(updated || created)}</Text>
        <Text variant="h2" gutterBottom={2} color="white">
          {title}
        </Text>
        <Text
          variant="subheading"
          gutterBottom={coverSrc ? 6 : 1}
          style="italics"
          color="grey"
        >
          {subcategory ? `${pluralToSingular(subcategory)}, ` : null}
          {category}
        </Text>
        {coverSrc ? (
          <MDXImage src={coverSrc} alt={title} assetPath={assetPath} />
        ) : null}
      </div>
      <HorizontalLine />
    </Link>
  );

  const renderMainContent = () => (
    <div className={styles.mainContent}>
      <HorizontalLine />
      <section className={styles.content}>
        {notes[currentCategory]?.map(renderListItem) || null}
      </section>
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        {loading && (
          <Text variant="subheading" style="italics">
            Loading more notes...
          </Text>
        )}
      </div>
    </div>
  );

  const renderTitle = () => (
    <header className={styles.titleWrapper}>
      <Text variant="title">Notes</Text>
    </header>
  );

  return (
    <Suspense fallback={<Text variant="subheading">Loading...</Text>}>
      <ThreeColumnTemplate
        header={renderTitle()}
        rightSidebar={null}
        mainContent={renderMainContent()}
        leftSidebar={renderCategoryCollapsibles()}
      />
    </Suspense>
  );
}
