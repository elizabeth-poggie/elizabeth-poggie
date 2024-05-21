import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import fs from "fs";
import { INote } from "../../src/interfaces/note";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export default function RecipeDetailsPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(source);
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • {source.frontmatter.title}</title>
      </Head>
      <Burger navItems={navItems} />
    </>
  );
}

// text link lol http://localhost:3000/recipes/focaccia
export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params;

  const source = fs.readFileSync(
    path.join("_content/recipes", slug as string, (slug + ".mdx") as string),
    "utf8"
  );

  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return {
    props: {
      source: mdxSource,
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
