import Head from "next/head";
import { INote } from "../../src/interfaces/note";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { Notes } from "../../src/views/notes/notes";
import { GetStaticPropsContext } from "next";
import { Pagination } from "../../src/components/navigation/pagination/pagination";
import React from "react";
import router from "next/router";
import { getAllNotesForCategories } from "../../src/services/noteService";

export const NOTES_CATEGORIES = [
  "user-interfaces",
  "computerized-systems",
  "web-programming-i",
  "admin",
];
export const NOTES_BASE_FOLDER = "john-abbott-college";

interface IProps {
  allNotes: INote[];
  pageSize: number;
  currentPage: number;
  total: number;
}

export default function Index({
  allNotes,
  pageSize,
  currentPage,
  total,
}: Readonly<IProps>) {
  const [curr, setCurrentPage] = React.useState(currentPage);
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <Notes allNotes={allNotes} pageSize={pageSize} />
      <Pagination
        items={total}
        currentPage={curr}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
          router.push(`/notes?page=${page}`);
        }}
      />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const page = ctx.params?.page ? parseInt(ctx.params.page as string, 10) : 1;
  const pageSize = 10;

  const { notes, total } = await getAllNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    page,
    pageSize
  );

  return {
    props: {
      allNotes: notes,
      total,
      currentPage: page,
      pageSize,
    },
  };
}
