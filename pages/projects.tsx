import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Projects } from "../src/views/projects/projects";
import { getAllProjects } from "../src/utils/api";
import { IProject } from "../src/interfaces/project";

interface IProps {
  allProjects: IProject[];
}

export default function ProjectsPage({ allProjects }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie - Projects</title>
      </Head>
      {/* <NavBar navItems={navItems} /> */}
      <Projects allProjects={allProjects} />
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
