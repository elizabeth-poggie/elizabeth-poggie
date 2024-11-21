import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { INote } from "../../src/interfaces/note";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { Notes } from "../../src/views/notes/notes";
import { Pagination } from "../../src/components/navigation/pagination/pagination";
import { getAllNotesForCategories } from "../../src/services/noteService";

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
  initialCurrentPage: number;
  total: number;
}

export default function Index({
  initialNotes,
  initialPageSize,
  initialCurrentPage,
  total,
}: Readonly<IProps>) {
  const [notes, setNotes] = useState(initialNotes);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pageSize = initialPageSize;

  const fetchNotesForPage = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/notes?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      console.log(data.notes);
      setNotes(data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // shallow === Updates the URL without a full page reload
    router.push(`/notes?page=${page}`, undefined, { shallow: true });
    fetchNotesForPage(page);
  };

  useEffect(() => {
    console.log("Router query:", router.query.page); // Debugging log
    if (router.query.page) {
      const page = parseInt(router.query.page as string, 10) || 1;
      setCurrentPage(page);
      fetchNotesForPage(page);
    }
  }, [router.query.page]);

  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <Notes allNotes={notes} pageSize={pageSize} />
      <Pagination
        items={total}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page as string, 10) || 1;
  const pageSize = 10;

  const { notes, total } = await getAllNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    page,
    pageSize
  );

  return {
    props: {
      initialNotes: notes,
      total,
      initialCurrentPage: page,
      initialPageSize: pageSize,
    },
  };
}
