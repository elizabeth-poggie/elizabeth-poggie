import Head from "next/head";
import { INote } from "../../src/interfaces/note";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { Notes } from "../../src/views/notes/notes";
import { getAllNotesForCategories } from "../../src/utils/helpers/noteFetchers";
import { GetStaticPropsContext } from "next";

export const NOTES_CATEGORIES = ["user-interfaces", "web-programming-i"];
export const NOTES_BASE_FOLDER = "john-abbott-college";

interface IProps {
  allNotes: INote[];
}

export default function Index({ allNotes }: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <Notes allNotes={allNotes} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const allNotes: INote[] = getAllNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES
  );
  return {
    props: {
      allNotes,
    },
  };
}
