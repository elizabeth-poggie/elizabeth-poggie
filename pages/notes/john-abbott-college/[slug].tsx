import Head from "next/head";
import Meta from "../../../src/views/meta/meta";
import Burger from "../../../src/components/navigation/burger/Burger";
import { MDXProps, navItems } from "../..";
import { GetStaticPropsContext } from "next";
import { MdxNoteDetails } from "../../../src/views/mdx-note-details/mdx-note-details";
import {
  getNotePaths,
  getNoteProps,
  getRelatedNotesFromBootlegJSON,
} from "../../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../../src/constants/folderStructure";

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
  try {
    // Extract the note category (the first segment after "notes/")
    const category = ctx.params?.slug
      ? Array.isArray(ctx.params.slug)
        ? ctx.params.slug[0]
        : ctx.params.slug.split("_")[0]
      : "";

    const relatedNotes = await getRelatedNotesFromBootlegJSON(category);

    const noteProps = await getNoteProps(
      ctx,
      FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
      Object.values(FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES)
    );

    if (!noteProps || !noteProps.props.source.frontmatter) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...noteProps.props,
        relatedNotes,
      },
    };
  } catch (error) {
    console.error("🔥🖥️🥲 AHHHHH: ", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return getNotePaths(
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
    Object.values(FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES)
  );
}
