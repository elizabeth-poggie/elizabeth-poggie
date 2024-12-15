import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticPropsContext } from "next";
import Burger from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { GalleryDetails } from "../../src/views/gallery-details/gallery-details";
import { PORTFOLIO_BASE_FOLDER, PORTFOLIO_CATEGORIES } from ".";
import { MDXProps } from "../recipes/[slug]";
import { getNotePaths, getNoteProps } from "../../src/services/noteService";

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
  return getNoteProps(ctx, PORTFOLIO_BASE_FOLDER, PORTFOLIO_CATEGORIES);
}

export async function getStaticPaths() {
  return getNotePaths(PORTFOLIO_BASE_FOLDER, PORTFOLIO_CATEGORIES);
}
