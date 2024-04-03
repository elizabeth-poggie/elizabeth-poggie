import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ILink, INote } from "../src/interfaces/note";
import { getAllNotes } from "../src/utils/api";
import { Burger } from "../src/components/navigation/burger/Burger";
import { Notes } from "../src/views/notes/notes";
import { sortByCreatedDescending } from "../src/utils/helpers/sortByDate";
export const navItems: ILink[] = [
  {
    href: "/",
    text: "Notes",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/art",
    text: "Art",
  },
];

interface IProps {
  allNotes: INote[];
}

export default function Index({ allNotes }: Readonly<IProps>) {
  const sortedNotes = sortByCreatedDescending(allNotes);
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <Notes allNotes={sortedNotes} />
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
