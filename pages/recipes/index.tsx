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

interface IProps {
  allRecipes: INote[];
}

export default function RecipesPage({ allRecipes }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Recipes</title>
      </Head>
      <Burger navItems={navItems} />
      <Art allArt={allRecipes} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const recipesDirectory = path.join(process.cwd(), "_content/recipes");
  const recipeFiles = fs.readdirSync(recipesDirectory);

  const allRecipes: MDXProps[] = [];

  for (const fileName of recipeFiles) {
    const source = fs.readFileSync(
      path.join(
        "_content/recipes",
        fileName as string,
        (fileName + ".mdx") as string
      ),
      "utf8"
    );
    const mdxSource = await serialize(source, { parseFrontmatter: true });

    allRecipes.push({
      source: {
        compiledSource: mdxSource.compiledSource,
        scope: mdxSource.scope,
        frontmatter: mdxSource.frontmatter as Frontmatter,
      },
      baseFolder: fileName,
    });
  }

  return {
    props: {
      allRecipes,
    },
  };
}
