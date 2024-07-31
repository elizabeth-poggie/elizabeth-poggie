import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { ILink, INote } from "../src/interfaces/note";
import { getAllNotes } from "../src/utils/api";
import { Burger } from "../src/components/navigation/burger/Burger";
import { Notes } from "../src/views/notes/notes";
import { sortByCreatedDescending } from "../src/utils/helpers/noteSorters";
import { Text } from "../src/components/typography/text/text";
export const navItems: ILink[] = [
  {
    href: "/",
    text: "Notes",
  },
  {
    href: "/portfolio",
    text: "Portfolio",
  },
  {
    href: "/about",
    text: "About",
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
        <title>Poggie</title>
      </Head>
      <Burger navItems={navItems} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Text variant="title">⛔️ Warning ⛔️</Text>
        <Text>
          This site is very much under construction in preparation for the
          upcoming school year
        </Text>
        <br></br>
        <Text variant="subheading" style="italics">
          Please return in 1 - 2 business weeks ...
        </Text>
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
