import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { GetStaticPropsContext } from "next";
import { Gallery } from "../../src/views/gallery/gallery";
import { getAllNotesForCategories } from "../../src/services/noteService";

export const RECIPES_CATEGORIES = ["bread", "snack", "dessert"];
export const RECIPES_BASE_FOLDER = "recipes";

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
  const { notes, total } = await getAllNotesForCategories(
    RECIPES_BASE_FOLDER,
    RECIPES_CATEGORIES
  );
  return {
    props: {
      allNotes: notes,
    },
  };
}
