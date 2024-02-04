import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { ProjectDetails } from "../../src/views/project-details/project-details";
import { markdownToHtml } from "../../src/utils/helpers/markdownToHtml";
import { getAllProjects, getBySlug, noteDirectory } from "../../src/utils/api";
import { IProjectDetails } from "../../src/interfaces/project";
import { ICollegeNote } from "../../src/interfaces/note";

interface Props {
  noteDetails: ICollegeNote;
}

export default function ProjectDetailsPage({ noteDetails }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>
          {noteDetails.title} - {noteDetails.course}
        </title>
      </Head>
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
