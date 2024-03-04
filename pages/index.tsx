import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ILink, INote } from "../src/interfaces/note";
import { Notes } from "../src/views/notes/notes";
import { getAllNotes } from "../src/utils/api";
import { sortByCreatedDescending } from "../src/utils/helpers/sortByDate";
import { Burger } from "../src/components/navigation/burger/Burger";
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
];

interface IProps {}

export default function Index({}: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie</title>
      </Head>
      <Burger navItems={navItems} />
      <Home />
    </>
  );
}
