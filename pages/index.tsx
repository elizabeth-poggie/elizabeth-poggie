import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ILink, INote } from "../src/interfaces/note";
import { getAllCourses, getAllNotes } from "../src/utils/api";
import { Burger } from "../src/components/navigation/burger/Burger";
import { Home } from "../src/views/home/home";
export const navItems: ILink[] = [
  {
    href: "/",
    text: "About",
  },
  {
    href: "/courses",
    text: "Courses",
  },
  {
    href: "/notes",
    text: "Notes",
  },
  {
    href: "/art",
    text: "Art",
  },
];

interface IProps {
  allCourses: INote[];
}

export default function Index({ allCourses }: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie</title>
      </Head>
      <Burger navItems={navItems} />
      <Home allCourses={allCourses} />
    </>
  );
}

export const getStaticProps = async () => {
  const allCourses = getAllCourses([
    "slug",
    "category",
    "type",
    "title",
    "color",
  ]);
  return {
    props: { allCourses },
  };
};
