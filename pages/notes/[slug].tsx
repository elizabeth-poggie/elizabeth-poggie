import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { sortByCreatedAscending } from "../../src/utils/helpers/sortByDate";

export interface relatedNotes {
  type: string;
  items: Pick<INote, "slug" | "title" | "number">[];
}

interface Props {
  noteDetails: INote;
  primaryRelatedNotes?: relatedNotes[];
  secondaryRelatedNotes?: relatedNotes[];
}

/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * - Family
 *    - Category
 *      - Color
 *      - Primary types []              (e.g. left column in Note)
 *      - Secondary types []            (e.g. right column in Note)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export default function NoteDetailsPage({
  noteDetails,
  primaryRelatedNotes,
  secondaryRelatedNotes,
}: Readonly<Props>) {
  // const sortedRelatedNotes = sortByCreatedAscending(primaryRelatedNotes);
  return (
    <>
      <Meta />
      <Head>
        <title>{noteDetails.title}</title>
      </Head>
      <NoteDetails
        noteDetails={noteDetails}
        primaryRelatedNotes={primaryRelatedNotes}
        secondaryRelatedNotes={secondaryRelatedNotes}
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
    noteDirectory
  );

  // filtered by type and course
  const allNotes = getAllNotes(["slug", "category", "type", "number", "title"]);

  // TODO - start with Course layout and then generalize later
  const type1 = allNotes.filter(
    (note) => note.category === details.category && note.type === "Lecture"
  );

  const type2 = allNotes.filter(
    (note) => note.category === details.category && note.type === "Lab"
  );

  const primaryRelatedNotes = [];
  const secondaryRelatedNotes = [];
  if (type1.length > 0)
    primaryRelatedNotes.push({ type: "Lectures", items: type1 });
  if (type2.length > 0)
    primaryRelatedNotes.push({ type: "Labs", items: type2 });

  return {
    props: {
      noteDetails: {
        ...details,
      },
      primaryRelatedNotes: primaryRelatedNotes,
      secondaryRelatedNotes: secondaryRelatedNotes,
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
