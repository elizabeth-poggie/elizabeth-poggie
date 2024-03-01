import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";

export interface relatedNotes {
  type: string;
  notes: Pick<INote, "slug" | "title" | "number">[];
}

interface Props {
  noteDetails: INote;
  relatedNotes?: relatedNotes[];
}

type CategoryProperties = {
  color: string;
  relatedTypes?: string[];
};

type SupportedCategories = "User Interfaces" | "Intro to Programming";

type CategoryMap = {
  [key in SupportedCategories]: CategoryProperties;
};

export const categoryMap: CategoryMap = {
  "User Interfaces": {
    color: "green",
    relatedTypes: ["Lecture", "Lab"],
  },
  "Intro to Programming": {
    color: "yellow",
    relatedTypes: ["Lecture", "Lab"],
  },
};

export default function NoteDetailsPage({
  noteDetails,
  relatedNotes,
}: Readonly<Props>) {
  return (
    <>
      <Meta />
      <Head>
        <title>{noteDetails.title}</title>
      </Head>
      <Burger navItems={navItems} />
      <NoteDetails noteDetails={noteDetails} relatedNotes={relatedNotes} />
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

  // Col 1
  const relatedNotes = [];
  categoryMap[details.category].relatedTypes?.map((type: string) => {
    const notesByType = allNotes.filter(
      (note) => note.category === details.category && note.type === type
    );
    if (notesByType.length > 0) relatedNotes.push({ type, notes: notesByType });
  });

  return {
    props: {
      noteDetails: {
        ...details,
      },
      relatedNotes,
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
