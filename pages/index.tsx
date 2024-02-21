import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ICollegeNote, INote } from "../src/interfaces/note";
import { Notes } from "../src/views/notes/notes";
import { getAllNotes } from "../src/utils/api";

// Putting the other nav items on ice for now until im further along in my teacher career lol

// export const navItems: Array<NavItem> = [
//   {
//     href: "/",
//     name: "Notes",
//   },
//   {
//     href: "/projects",
//     name: "Projects",
//   },
//   {
//     href: "/art",
//     name: "Art",
//   },
// ];

interface IProps {
  allNotes: INote[];
}

export default function Index({ allNotes }: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie - Notes</title>
      </Head>
      {/* <NavBar navItems={navItems} /> */}
      <Notes allNotes={allNotes} />
    </>
  );
}

export const getStaticProps = async () => {
  const allNotes = getAllNotes([
    "slug",
    "category",
    "number",
    "type",
    "title",
    "subtitle",
    "created",
  ]);

  return {
    props: { allNotes },
  };
};
