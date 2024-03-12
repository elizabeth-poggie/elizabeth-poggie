import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import {
  getAllCourses,
  getAllNotes,
  getBySlug,
  noteDirectory,
} from "../../src/utils/api";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";

export interface relatedNotes {
  type: string;
  notes: Pick<INote, "slug" | "title" | "number">[];
}

interface Props {
  courseDetails: INote;
  relatedNotes?: relatedNotes[];
}

export default function CourseDetailsPage({
  courseDetails,
  relatedNotes,
}: Readonly<Props>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • {courseDetails.title}</title>
      </Head>
      <Burger navItems={navItems} />
      <NoteDetails noteDetails={courseDetails} relatedNotes={relatedNotes} />
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

  return {
    props: {
      courseDetails: {
        ...details,
      },
    },
  };
}

export async function getStaticPaths() {
  const courses = getAllCourses(["slug"]);

  return {
    paths: courses.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
