import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllCourses } from "../../src/utils/api";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { Courses } from "../../src/views/courses/courses";

interface IProps {
  allCourses: INote[];
}

export default function ArtPage({ allCourses }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Courses</title>
      </Head>
      <Burger navItems={navItems} />
      <Courses allCourses={allCourses} />
    </>
  );
}

export const getStaticProps = async () => {
  const allCourses = getAllCourses(["slug", "coverSrc", "created"]);
  return {
    props: { allCourses },
  };
};
