import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllArt, getAllCourses } from "../../src/utils/api";
import { Art } from "../../src/views/art/art";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { sortByCreatedDescending } from "../../src/utils/helpers/sortByDate";
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
