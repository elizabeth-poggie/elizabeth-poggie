import Head from "next/head";
import { INote } from "../../src/interfaces/note";
import { sortByCreatedDescending } from "../../src/utils/helpers/noteSorters";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { Notes } from "../../src/views/notes/notes";

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
