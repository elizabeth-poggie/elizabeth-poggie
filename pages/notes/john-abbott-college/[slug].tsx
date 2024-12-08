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
  const title = props.source.frontmatter.title;
  return (
    <>
      <Meta />
      <Head>
        <title>{title}</title>
      </Head>
      <Burger navItems={navItems} />
      <MdxNoteDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  // Extract the note category (the first segment after "notes/")
  const category = ctx.params?.slug
    ? Array.isArray(ctx.params.slug)
      ? ctx.params.slug[0]
      : ctx.params.slug.split("_")[0]
    : "";

  // Fetch notes for the given category
  const relatedNotes = await getNotesForCategory(NOTES_BASE_FOLDER, category);

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
