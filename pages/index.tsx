import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { NavBar } from "../src/components/navigation/nav-bar/nav-bar";
import { NavItem } from "../src/interfaces/footer";
import { ICollegeNote } from "../src/interfaces/note";
import { Notes } from "../src/views/notes/notes";
import { getAllNotes } from "../src/utils/api";

// TODO - maybe come up with a better way to control this routing or make it so the footer is only defined in one place
// TODO - Figure out where the 'About' page fits in here
export const navItems: Array<NavItem> = [
  {
    href: "/",
    name: "Notes",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/art",
    name: "Art",
  },
];

interface IProps {
  allNotes: ICollegeNote[];
}

export default function Index({ allNotes }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie - Notes</title>
      </Head>
      <NavBar navItems={navItems} />
      <Notes allNotes={allNotes} />
    </>
  );
}

export const getStaticProps = async () => {
  const allNotes = getAllNotes([
    "slug",
    "title",
    "subtitle",
    "date",
    "course",
    "type",
  ]);

  return {
    props: { allNotes },
  };
};
