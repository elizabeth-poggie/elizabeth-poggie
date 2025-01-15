import Head from "next/head";
import Meta from "../../../src/views/meta/meta";
import Burger from "../../../src/components/navigation/burger/Burger";
import { MDXProps, navItems } from "../..";
import { MdxNoteDetails } from "../../../src/views/mdx-note-details/mdx-note-details";

export default function NoteDetailsPage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Notes</title>
      </Head>
      <Burger navItems={navItems} />
      <MdxNoteDetails />
    </>
  );
}
