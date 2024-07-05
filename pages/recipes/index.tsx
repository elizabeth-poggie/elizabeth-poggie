import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { INote } from "../../src/interfaces/note";
import { Frontmatter, MDXProps } from "./[slug]";
import { Art } from "../../src/views/art/art";
import { recipeDirectory } from "../../src/utils/api";
import { GetStaticPropsContext } from "next";
import { Gallery } from "../../src/views/gallery/gallery";

interface IProps {
  allNotes: INote[];
}

export default function RecipesPage({ allNotes }: IProps) {
  console.log("yeet" + allNotes);
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
  const recipesDirectory = path.join(process.cwd(), "_content/recipes");
  const recipeFiles = fs.readdirSync(recipesDirectory);

  const allNotes: INote[] = [];

  for (const fileName of recipeFiles) {
    const source = fs.readFileSync(
      path.join(
        recipesDirectory,
        fileName as string,
        (fileName + ".mdx") as string
      ),
      "utf8"
    );
    const mdxSource = await serialize(source, { parseFrontmatter: true });
    const mdxFontmatter: Frontmatter = mdxSource.frontmatter as Frontmatter;

    allNotes.push({
      title: mdxFontmatter.title,
      slug: `/recipes/${fileName}`,
      category: mdxFontmatter.category,
      type: mdxFontmatter.type,
      number: mdxFontmatter.number,
      created: mdxFontmatter.created,
      coverSrc: mdxFontmatter.coverSrc,
      baseFolder: `/recipes/${fileName}`,
    });
  }

  return {
    props: {
      allNotes,
    },
  };
}
