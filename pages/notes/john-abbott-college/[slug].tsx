import Head from "next/head";
import Meta from "../../../src/views/meta/meta";
import { Burger } from "../../../src/components/navigation/burger/Burger";
import { navItems } from "../..";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "..";
import { GetStaticPropsContext } from "next";
import { MdxNoteDetails } from "../../../src/views/mdx-note-details/mdx-note-details";
import { MDXProps } from "../../recipes/[slug]";
import {
  getNotePaths,
  getNoteProps,
  getNotesForCategory,
} from "../../../src/services/noteService";

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
  const category = Array.isArray(ctx.params?.category)
    ? ctx.params?.category[0]
    : ctx.params?.category || "";

  // TODO - find a way to pass the category instead of hardcoding it
  // Fetch notes for the given category
  const relatedNotes = await getNotesForCategory(
    NOTES_BASE_FOLDER,
    "Assignment"
  );

  const noteProps = await getNoteProps(
    ctx,
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES
  );

  return {
    props: {
      ...noteProps.props,
      relatedNotes,
    },
  };
}

export async function getStaticPaths() {
  return getNotePaths(NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}
