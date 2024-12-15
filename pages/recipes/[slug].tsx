import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticPropsContext } from "next";
import Burger from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { GalleryDetails } from "../../src/views/gallery-details/gallery-details";
import { RECIPES_BASE_FOLDER, RECIPES_CATEGORIES } from ".";
import { CategoryToLinkMap, Frontmatter } from "../../src/interfaces/note";
import { getNotePaths, getNoteProps } from "../../src/services/noteService";

export interface MDXProps {
  /**
   * Note Content
   */
  source: MDXRemoteSerializeResult<Record<string, unknown>> & {
    frontmatter: Frontmatter;
  };
  /**
   * Base URL of where the images are located in the public && content folders
   * Used to enable relative linking for static website generators
   */
  baseFolder?: string;
  /**
   * Show relatedNotes on the page?
   */
  relatedNotes?: CategoryToLinkMap;
}

export default function RecipeDetailsPage(props: MDXProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Recipes</title>
      </Head>
      <Burger navItems={navItems} />
      <GalleryDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getNoteProps(ctx, RECIPES_BASE_FOLDER, RECIPES_CATEGORIES);
}

export async function getStaticPaths() {
  return getNotePaths(RECIPES_BASE_FOLDER, RECIPES_CATEGORIES);
}
