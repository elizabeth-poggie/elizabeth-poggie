import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { GetStaticPropsContext } from "next";
import { Gallery } from "../../src/views/gallery/gallery";
import { getNotesForCategories } from "../../src/utils/helpers/noteFetchers";

interface IProps {
  allNotes: INote[];
}

export default function RecipesPage({ allNotes }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Recipes</title>
      </Head>
      <Burger navItems={navItems} />
      <Gallery allNotes={allNotes} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const categories = ["bread"];
  const baseFolder = "recipes";
  const allNotes: INote[] = getNotesForCategories(baseFolder, categories);
  return {
    props: {
      allNotes,
    },
  };
}
