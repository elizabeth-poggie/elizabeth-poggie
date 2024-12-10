import React, { useEffect, useState, useRef, lazy } from "react";
import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { navItems } from "..";
import { getPaginatedNotesForCategories } from "../../src/services/noteService";
import { Text } from "../../src/components/typography/text/text";
import { INote } from "../../src/interfaces/note";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { Notes } from "../../src/views/notes/notes";

export const NOTES_CATEGORIES = [
  "user-interfaces",
  "computerized-systems",
  "web-programming-i",
  "admin",
];
export const NOTES_BASE_FOLDER = "john-abbott-college";

export interface ILazyLoadProps {
  initialNotes: INote[];
  initialPageSize: number;
  total: number;
}

export default function Index({
  initialNotes,
  initialPageSize,
  total,
}: ILazyLoadProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
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

  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <React.Suspense fallback={renderLoading()}>
        <Burger navItems={navItems} />
        <Notes allNotes={notes} />
      </React.Suspense>
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        {loading && renderLoading()}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const pageSize = 10;

  const { notes, total } = await getPaginatedNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    1,
    pageSize
  );

  return {
    props: { initialNotes: notes, total, initialPageSize: pageSize },
  };
}
