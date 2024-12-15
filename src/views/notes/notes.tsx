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
import {
  formatDate,
  pluralToSingular,
  replaceHyphensWithSpaces,
} from "../../utils/textFormatters";
import { NOTES_CATEGORIES } from "../../../pages/notes";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { sortByCreatedDescending } from "../../utils/noteHelpers";

interface IProps {}

export function Notes({}: IProps) {
  const [notes, setNotes] = useState<INote[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [cap, setCap] = useState<number>(100);

  const fetchNotes = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/notes?page=${page}&pageSize=${10}`);
      const data = await response.json();

      // Filter out duplicates
      const newNotes = data.notes.filter(
        (newNote) =>
          !notes.some((existingNote) => existingNote.slug === newNote.slug)
      );

      // Combine and sort notes by date (newest first)
      const combinedNotes = sortByCreatedDescending([...notes, ...newNotes]);

      // Updates
      setNotes(combinedNotes);
      localStorage.setItem("cachedNotes", JSON.stringify(combinedNotes));
      setCap(data.total);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading && notes.length < cap) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        fetchNotes(nextPage);
      }
    },
    [loading, notes.length, cap, currentPage]
  );

  useEffect(() => {
    const cachedNotes = localStorage.getItem("cachedNotes");
    if (cachedNotes) {
      setNotes(JSON.parse(cachedNotes));
    } else {
      fetchNotes(0);
    }
  }, []);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
      rootMargin: "60% 0px",
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  const renderLoading = () => (
    <Text variant="subheading" style="italics">
      Loading more notes...
    </Text>
  );

  const renderFilterRow = () => {
    const filters: string[] = NOTES_CATEGORIES.map((category) =>
      replaceHyphensWithSpaces(category)
    );

    return (
      <nav className={styles.nav}>
        <header>
          <Text color="white">John Abbott College</Text>
        </header>
        {filters.map((filter: string) => (
          <div key={filter}>
            <Text variant="subheading" style="capitalize" color="grey">
              {filter}
            </Text>
          </div>
        ))}
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

  const renderTitle = () => (
    <header className={styles.titleWrapper}>
      <Text variant="title">Notes</Text>
    </header>
  );

  const renderMainContent = () => (
    <div className={styles.mainContent}>
      <HorizontalLine />
      <section className={styles.content}>
        {notes.map((note: INote) => renderListItem(note))}
      </section>
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        {loading && renderLoading()}
      </div>
    </div>
  );

  return (
    <Suspense fallback={renderLoading()}>
      <ThreeColumnTemplate
        header={renderTitle()}
        rightSidebar={null}
        mainContent={renderMainContent()}
        leftSidebar={renderFilterRow()}
      />
    </Suspense>
  );
}
