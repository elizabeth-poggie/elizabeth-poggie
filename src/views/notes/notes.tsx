import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./notes.module.scss";
import { TextButton } from "../../components/inputs/text-button/text-button";
import { ThreeColumnTemplate } from "../../components/templates/three-collumn-template/three-collumn-template";
import { Link } from "../../components/navigation/link/link";
import {
  formatDate,
  pluralToSingular,
  replaceHyphensWithSpaces,
} from "../../utils/textFormatters";
import { MDXImage } from "../../components/display/mdx-note-content/mdx-note-content";
import { NOTES_CATEGORIES } from "../../../pages/notes";

interface IProps {
  initialNotes: INote[];
  total: number;
  initialPageSize: number;
}

export function Notes({ initialNotes, total, initialPageSize }: IProps) {
  const [notes, setNotes] = React.useState(initialNotes);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const loaderRef = React.useRef<HTMLDivElement | null>(null);

  const fetchNotes = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/notes?page=${page}&pageSize=${initialPageSize}`
      );
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, ...data.notes]);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && notes.length < total) {
          const nextPage = currentPage + 1;
          setCurrentPage(nextPage);
          fetchNotes(nextPage);
        }
      },
      { threshold: 0.5, rootMargin: "100px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading, currentPage, notes.length, total]);

  const renderLoading = () => {
    return (
      <Text variant="subheading" style="italics">
        Loading more notes...
      </Text>
    );
  };

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
          {coverSrc ? (
            <MDXImage baseFolder={baseFolder} src={coverSrc} alt={title} />
          ) : null}
        </div>
        <HorizontalLine />
      </Link>
    );
  };

  const renderTitle = () => {
    return (
      <header className={styles.titleWrapper}>
        <Text variant="title">Notes</Text>
      </header>
    );
  };

  const renderMainContent = () => {
    return (
      <div className={styles.mainContent}>
        <HorizontalLine />
        <section className={styles.content}>
          <>{notes.map((note: INote) => renderListItem(note))}</>
        </section>
        <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
          {loading && renderLoading()}
        </div>
      </div>
    );
  };

  return (
    <>
      <ThreeColumnTemplate
        header={renderTitle()}
        rightSidebar={""}
        mainContent={renderMainContent()}
        leftSidebar={renderFilterRow()}
      />
    </>
  );
}
