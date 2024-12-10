import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ILink, INote } from "../src/interfaces/note";
import { getAllNotes } from "../src/utils/api";
import Burger from "../src/components/navigation/burger/Burger";
import { Home } from "../src/views/home/home";
export const navItems: ILink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/notes",
    text: "Notes",
  },
  {
    href: "/portfolio",
    text: "Portfolio",
  },
];

interface IProps {
  allNotes: INote[];
}

export default function Index({ allNotes }: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie</title>
      </Head>
      <Burger navItems={navItems} />
      <div>
        <Home />
      </div>
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
