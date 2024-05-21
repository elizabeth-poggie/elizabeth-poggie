import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import fs from "fs";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { GetStaticPropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { Text } from "../../src/components/typography/text/text";

export interface relatedNotes {
  type: string;
  notes: Pick<INote, "slug" | "title" | "number">[];
}

interface Props {
  recipeDetails: INote;
}

export default function RecipeDetailsPage({ recipeDetails }: Readonly<Props>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • {recipeDetails.title}</title>
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

  console.log(mdxSource);

  return {
    props: {
      recipeDetails: {
        ...mdxSource,
      },
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
