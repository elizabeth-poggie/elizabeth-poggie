import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { ProjectDetails } from "../../src/views/project-details/project-details";
import { markdownToHtml } from "../../src/utils/helpers/markdownToHtml";
import {
  getAllProjects,
  getBySlug,
  projectDirectory,
} from "../../src/utils/api";
import { IProjectDetails } from "../../src/interfaces/project";

interface Props {
  projectDetails: IProjectDetails;
}

export default function ProjectDetailsPage({ projectDetails }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <ProjectDetails projectDetails={projectDetails} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const projectDetails = getBySlug(
    params.slug,
    [
      "title",
      "year",
      "slug",
      "categories",
      "coverSrc",
      "organization",
      "referenceLink",
      "galleryFolder",
      "content",
    ],
    projectDirectory
  );

  const content = await markdownToHtml(projectDetails.content || "");

  return {
    props: {
      projectDetails: {
        ...projectDetails,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
