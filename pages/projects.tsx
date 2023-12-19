import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { Projects } from "../src/views/projects/projects";
import { getAllProjects } from "../src/utils/api";
import { Project } from "../src/interfaces/project";
import { Text } from "../src/components/typography/text/text";
import { footerItems } from ".";

interface Props {
  allProjects: Project[];
}

export default function ProjectsPage({ allProjects }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Projects allProjects={allProjects} />
      <Footer footerItems={footerItems} />
    </>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "year",
    "slug",
    "categories",
    "coverSrc",
  ]);

  return {
    props: { allProjects },
  };
};
