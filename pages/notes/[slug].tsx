import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { markdownToHtml } from "../../src/utils/helpers/markdownToHtml";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { ICollegeNote } from "../../src/interfaces/note";

interface Props {
  noteDetails: ICollegeNote;
}

export default function NoteDetailsPage({ noteDetails }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>
          {noteDetails.title} - {noteDetails.course}
        </title>
      </Head>
      {noteDetails.content}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const details = getBySlug(
    params.slug,
    ["title", "subtitle", "content"],
    noteDirectory
  );

  const content = await markdownToHtml(details.content || "");

  return {
    props: {
      noteDetails: {
        ...details,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const notes = getAllNotes(["slug"]);

  return {
    paths: notes.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
