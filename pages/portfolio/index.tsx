import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import Burger from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { GetStaticPropsContext } from "next";
import { Gallery } from "../../src/views/gallery/gallery";
import { ILazyLoadProps } from "../notes";
import { useEffect, useRef, useState } from "react";
import { Text } from "../../src/components/typography/text/text";
import { getPaginatedNotesFromBootlegJSON } from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";

export default function PortfolioPage({
  initialNotes,
  initialPageSize,
  total,
}: Readonly<ILazyLoadProps>) {
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
        <title>Poggie • Portfolio</title>
      </Head>
      <Burger navItems={navItems} />
      <Gallery allNotes={notes} />
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

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const pageSize = 10;

  const { notes, total } = await getPaginatedNotesFromBootlegJSON(
    FOLDER_STRUCTURE.PORTFOLIO.BASE,
    FOLDER_STRUCTURE.PORTFOLIO.CATEGORIES.MANAGEMENT, // TODO - #124 - Maybe should be multiple categories here?
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
