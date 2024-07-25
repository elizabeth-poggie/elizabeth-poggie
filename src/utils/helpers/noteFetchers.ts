import fs from "fs";
import { INote } from "../../interfaces/note";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPropsContext } from "next";

// TODO - for now, remove content prop used for md files, but cleanup later lol
export type Frontmatter = Omit<INote, "content">;

/**
 * Because I love relative linking, organizing things in a component-driven style, and categorizing my notes, I'm making my life harder than it needs to be :^)
 *
 * @param baseFolder e.g. recipes
 * @param categories e.g. bread
 * @returns INote[]
 */
export const getAllNotesForCategories = (
  baseFolder: string,
  categories: string[]
): INote[] => {
  const allNotes: INote[] = [];
  const baseDirectory = path.join(process.cwd(), `_content/${baseFolder}`);

  categories.forEach(async (category: string) => {
    const categoryPath = path.join(baseDirectory, category);

    if (!fs.existsSync(categoryPath)) {
      console.log(`Category path does not exist: ${categoryPath}`);
      return;
    }

    const files = fs.readdirSync(categoryPath);

    for (const fileName of files) {
      const source = fs.readFileSync(
        path.join(
          categoryPath,
          fileName as string,
          (fileName + ".mdx") as string
        ),
        "utf8"
      );
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const mdxFontmatter: Frontmatter = mdxSource.frontmatter as Frontmatter;

      allNotes.push({
        title: mdxFontmatter.title,
        slug: `${baseFolder}/${fileName}`,
        category: mdxFontmatter.category,
        type: mdxFontmatter.type,
        number: mdxFontmatter.number,
        created: mdxFontmatter.created,
        coverSrc: mdxFontmatter.coverSrc,
        baseFolder: `${baseFolder}/${category}/${fileName}/`,
      });
    }
  });

  return allNotes;
};

export const getNoteProps = async (
  ctx: GetStaticPropsContext,
  baseFolder: string,
  categories: string[]
) => {
  const { slug } = ctx.params;

  // Step 1 - get the mdx content
  const source = fs.readFileSync(
    path.join(
      "_content/recipes/bread",
      slug as string,
      (slug + ".mdx") as string
    ),
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
};

export const getNotePaths = (baseFolder: string, categories: string[]) => {
  const files = fs.readdirSync("_content/recipes/bread");
  return {
    paths: files.map((file) => ({
      params: {
        slug: file,
      },
    })),
    fallback: false,
  };
};
