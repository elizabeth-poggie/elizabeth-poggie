import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { GetStaticPropsContext } from "next";
import Burger from "../../src/components/navigation/burger/Burger";
import { MDXProps, navItems } from "..";
import { GalleryDetails } from "../../src/views/gallery-details/gallery-details";
import { getNotePaths, getNoteProps } from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";

export default function RecipeDetailsPage(props: MDXProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Portfolio</title>
      </Head>
      <Burger navItems={navItems} />
      <GalleryDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  // TODO - #124 - this probably doesnt work lmao
  return getNoteProps(
    ctx,
    FOLDER_STRUCTURE.PORTFOLIO.BASE,
    Object.values(FOLDER_STRUCTURE.PORTFOLIO.CATEGORIES)
  );
}

export async function getStaticPaths() {
  // TODO - #124 - this probably doesnt work lmao
  return getNotePaths(
    FOLDER_STRUCTURE.PORTFOLIO.BASE,
    Object.values(FOLDER_STRUCTURE.PORTFOLIO.CATEGORIES)
  );
}
