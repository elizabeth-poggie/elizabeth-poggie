import Head from "next/head";
import Meta from "../../../src/views/meta/meta";
import { Burger } from "../../../src/components/navigation/burger/Burger";
import { navItems } from "../..";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "..";
import { GetStaticPropsContext } from "next";
import { MdxNoteDetails } from "../../../src/views/mdx-note-details/mdx-note-details";
import { MDXProps } from "../../recipes/[slug]";
import { getNotePaths, getNoteProps } from "../../../src/services/noteService";

export default function NoteDetailsPage(props: MDXProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • JAC </title>
      </Head>
      <Burger navItems={navItems} />
      <MdxNoteDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getNoteProps(ctx, NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}

export async function getStaticPaths() {
  return getNotePaths(NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}
