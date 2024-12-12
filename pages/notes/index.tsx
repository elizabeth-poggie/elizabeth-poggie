import React, { useEffect, useState, useRef, lazy } from "react";
import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { navItems } from "..";
import { getPaginatedNotesForCategories } from "../../src/services/noteService";
import { Text } from "../../src/components/typography/text/text";
import { INote } from "../../src/interfaces/note";
import { Notes } from "../../src/views/notes/notes";

// Lazy Load bulky components
const LazyBurger = lazy(
  () => import("../../src/components/navigation/burger/Burger")
);

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

export interface IProps {}

export default function Index({}: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <LazyBurger navItems={navItems} />
      <Notes />
    </>
  );
}
