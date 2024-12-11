import React, {
  useState,
  useRef,
  useEffect,
  Suspense,
  useCallback,
  useLayoutEffect,
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

interface IProps {
  initialNotes: INote[];
  total: number;
  initialPageSize: number;
}

export function Notes({ initialNotes, total, initialPageSize }: IProps) {
  const [notes, setNotes] = useState<INote[]>(initialNotes);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Fetch notes with error handling
  const fetchNotes = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/notes?page=${page}&pageSize=${10}`);
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, ...data.notes]);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Optimized IntersectionObserver with useCallback
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading && notes.length < total) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        fetchNotes(nextPage);
      }
    },
    [loading, notes.length, total, currentPage]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    const setupObserver = () => {
      if (loaderRef.current) {
        observer = new IntersectionObserver(handleObserver, {
          threshold: 0.5,
          rootMargin: "60% 0px", // Trigger BEFORE the element enters the viewport
        });

        observer.observe(loaderRef.current);
      } else {
        console.warn("LoaderRef isn't ready yet. Retrying...");
        // Retry AFTER a small delay
        setTimeout(setupObserver, 100);
      }
    };

    setupObserver();

    return () => observer && observer.disconnect();
  }, [handleObserver]); // Depends ONLY on the handler

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
