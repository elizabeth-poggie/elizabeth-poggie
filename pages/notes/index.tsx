import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { INote } from "../../src/interfaces/note";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { Notes } from "../../src/views/notes/notes";
import { getAllNotesForCategories } from "../../src/services/noteService";
import { Text } from "../../src/components/typography/text/text";

export const NOTES_CATEGORIES = [
  "user-interfaces",
  "computerized-systems",
  "web-programming-i",
  "admin",
];
export const NOTES_BASE_FOLDER = "john-abbott-college";

interface IProps {
  initialNotes: INote[];
  initialPageSize: number;
  total: number;
}

export default function Index({
  initialNotes,
  initialPageSize,
  total,
}: Readonly<IProps>) {
  const [notes, setNotes] = useState(initialNotes);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const pageSize = initialPageSize;

  const fetchNotes = async (page: number) => {
    try {
      setLoading(true);
      console.log("page: ", page, " pageSize: ", pageSize);
      const response = await fetch(
        `/api/notes?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, ...data.notes]);
      console.log([data.notes]);
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
      {
        threshold: 0.5,
        rootMargin: "300px",
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, currentPage, notes.length, total]);

  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <Notes allNotes={notes} />
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        {loading && (
          <Text variant="subheading" style="italics">
            Loading more notes...
          </Text>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const pageSize = 10;

  const { notes, total } = await getAllNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    1,
    pageSize
  );

  return {
    props: {
      initialNotes: notes,
      total,
      initialPageSize: pageSize,
    },
  };
}
