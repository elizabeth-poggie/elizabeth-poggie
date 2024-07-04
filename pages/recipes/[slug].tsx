import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import fs from "fs";
import { INote } from "../../src/interfaces/note";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { MDXNoteContent } from "../../src/components/display/mdx-note-content/mdx-note-content";
import { ArtDetails } from "../../src/views/art-details/art-details";

// TODO - for now, remove content prop used for md files, but cleanup later lol
type Frontmatter = Omit<INote, "content">;

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
}

export default function RecipeDetailsPage(props: MDXProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Recipes</title>
      </Head>
      <ArtDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params;

  // Step 1 - get the mdx content
  const source = fs.readFileSync(
    path.join("_content/recipes", slug as string, (slug + ".mdx") as string),
    "utf8"
  );

  // Step 2 - reformat
  const mdxSource = await serialize(source, { parseFrontmatter: true });

  // Step 3 - return with proper types
  return {
    props: {
      source: {
        compiledSource: mdxSource.compiledSource,
        scope: mdxSource.scope,
        frontmatter: mdxSource.frontmatter as Frontmatter,
      },
      baseFolder: slug,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("_content/recipes");
  return {
    paths: files.map((file) => ({
      params: {
        slug: file,
      },
    })),
    fallback: false,
  };
}
