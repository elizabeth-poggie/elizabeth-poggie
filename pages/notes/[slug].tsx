import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { ICollegeNote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { sortByDateAscending } from "../../src/utils/helpers/sortByDate";

interface Props {
  noteDetails: ICollegeNote;
  relatedNotes: ICollegeNote[];
}

export default function NoteDetailsPage({
  noteDetails,
  relatedNotes,
}: Readonly<Props>) {
  const sortedRelatedNotes = sortByDateAscending(relatedNotes);
  return (
    <>
      <Meta />
      <Head>
        <title>{noteDetails.title}</title>
      </Head>
      <NoteDetails
        noteDetails={noteDetails}
        relatedNotes={sortedRelatedNotes}
      />
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
    ["title", "subtitle", "course", "content", "slides", "type"],
    noteDirectory
  );

  // filtered by type and course
  const filteredNotes = getAllNotes([
    "slug",
    "title",
    "subtitle",
    "course",
    "type",
  ]).filter(
    (note) => note.course === details.course && note.type === details.type
  );

  return {
    props: {
      noteDetails: {
        ...details,
      },
      relatedNotes: [...filteredNotes],
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
