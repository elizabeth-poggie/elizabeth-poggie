import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";

export interface relatedNotes {
  type: string;
  items: Pick<INote, "slug" | "title" | "number">[];
}

interface Props {
  noteDetails: INote;
  primaryRelatedNotes?: relatedNotes[];
  secondaryRelatedNotes?: relatedNotes[];
}

type CategoryProperties = {
  color: string;
  primaryRelatedTypes?: string[];
  secondaryRelatedTypes?: string[];
};

type SupportedCategories = "User Interfaces" | "Intro to Programming";

type CategoryMap = {
  [key in SupportedCategories]: CategoryProperties;
};

export const categoryMap: CategoryMap = {
  "User Interfaces": {
    color: "green",
    primaryRelatedTypes: ["Lecture", "Lab"],
  },
  "Intro to Programming": {
    color: "yellow",
    primaryRelatedTypes: ["Lecture", "Lab"],
  },
};

export default function NoteDetailsPage({
  noteDetails,
  primaryRelatedNotes,
  secondaryRelatedNotes,
}: Readonly<Props>) {
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

  const allNotes = getAllNotes(["slug", "category", "type", "number", "title"]);

  const primaryRelatedNotes = [];
  categoryMap[details.category].primaryRelatedTypes.map((type: string) => {
    const notesByType = allNotes.filter(
      (note) => note.category === details.category && note.type === type
    );
    if (notesByType.length > 0)
      primaryRelatedNotes.push({ type, items: notesByType });
  });

  const secondaryRelatedNotes = [];

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
