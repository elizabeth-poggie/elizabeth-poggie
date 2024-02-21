import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import {
  getAllNotes,
  getBySlug,
  note2Directory,
  noteDirectory,
} from "../../src/utils/api";
import { ICollegeNote, INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { sortByCreatedAscending } from "../../src/utils/helpers/sortByDate";

interface Props {
  noteDetails: INote;
  relatedNotes: INote[];
}

export default function NoteDetailsPage({
  noteDetails,
  relatedNotes,
}: Readonly<Props>) {
  const sortedRelatedNotes = sortByCreatedAscending(relatedNotes);
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
    [
      "slug",
      "category",
      "type",
      "number",
      "title",
      "subtitle",
      "link",
      "content",
    ],
    note2Directory
  );

  console.log(details);

  // filtered by type and course
  const filteredNotes = getAllNotes([
    "slug",
    "category",
    "type",
    "number",
    "title",
  ]).filter(
    (note) => note.category === details.category && note.type === details.type
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
