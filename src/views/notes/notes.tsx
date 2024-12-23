import React, {
  useState,
  useRef,
  useEffect,
  Suspense,
  useCallback,
} from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
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

export function Notes() {
  const [currentCategory, setCurrentCategory] = useState<string>(
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES.WEB_PROGRAMMING
  );
  const [currentBase, setCurrentBase] = useState<string>(
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE
  );
  const [notes, setNotes] = useState<{ [key: string]: INote[] }>({});
  const [currentPage, setCurrentPage] = useState<number>(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [cap, setCap] = useState<number>(100);

  const [loading, setLoading] = useState(false);

  const fetchNotes = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/notes?page=${page}&pageSize=10&category=${currentCategory}&base=${currentBase}`
      );
      const data = await response.json();

      if (!data.notes.length) {
        console.warn("❌ No more notes to fetch");
        return;
      }

      const newNotes = data.notes.filter(
        (newNote: INote) =>
          !notes[currentBase]?.some((note) => note.slug === newNote.slug)
      );

      const updatedNotes = {
        ...notes,
        [currentBase]: sortByCreatedDescending([
          ...(notes[currentBase] || []),
          ...newNotes,
        ]),
      };

      setNotes(updatedNotes);
      localStorage.setItem("cachedNotes", JSON.stringify(updatedNotes));
      setCap(data.total);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        !loading &&
        (notes[currentBase]?.length || 0) < cap &&
        currentPage * 10 < cap
      ) {
        setCurrentPage((prevPage) => {
          const nextPage = prevPage + 1;
          fetchNotes(nextPage);
          return nextPage;
        });
      }
    },
    [loading, notes, cap, currentPage, currentBase]
  );

  useEffect(() => {
    const cachedNotes = localStorage.getItem("cachedNotes");
    if (cachedNotes) {
      setNotes(JSON.parse(cachedNotes));
    } else {
      fetchNotes(0);
    }
  }, [currentBase, currentCategory]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
      rootMargin: "60% 0px",
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  const handleCollapsibleClick = (base: string, category: string) => {
    setCurrentBase(base);
    setCurrentCategory(category);
    setCurrentPage(0);
    fetchNotes(0); // Fetch notes for the new base and category
  };

  const renderCategoryCollabibles = () => {
    const collapsibles = Object.values([
      FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE,
    ]).map((folder) => {
      const items = Object.values(folder.CATEGORIES).map((category) => ({
        text: category,
        href: "",
        handleOnClick: () => handleCollapsibleClick(folder.BASE, category),
      }));

      return {
        title: folder.BASE,
        content: (
          <CollapsibleLinkList links={items} selectedText={currentCategory} />
        ),
      };
    });

    return (
      <nav className={styles.nav}>
        <CollapsibleList
          collapsibles={collapsibles}
          currentType={currentBase}
        />
      </nav>
    );
  };

  const renderListItem = (note: INote) => {
    const {
      slug,
      title,
      coverSrc,
      baseFolder,
      category,
      type,
      created,
      updated,
    } = note;
    const currentDate = formatDate(updated ?? created);

    return (
      <Link href={`/notes/${slug}`}>
        <div className={styles.listItem}>
          <Text color="grey">{currentDate}</Text>
          <Text variant="h2" gutterBottom={2} color="white">
            {title}
          </Text>
          <Text
            variant="subheading"
            gutterBottom={coverSrc ? 6 : 1}
            style="italics"
            color="grey"
          >
            {type ? `${pluralToSingular(type)}, ` : null}
            {category}
          </Text>
          {coverSrc && (
            <MDXImage src={coverSrc} alt={title} baseFolder={baseFolder} />
          )}
        </div>
        <HorizontalLine />
      </Link>
    );
  };

  const renderMainContent = () => (
    <div className={styles.mainContent}>
      <HorizontalLine />
      <section className={styles.content}>
        {notes[currentBase]?.map((note) => renderListItem(note)) || null}
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
        leftSidebar={renderCategoryCollabibles()}
      />
    </Suspense>
  );
}
