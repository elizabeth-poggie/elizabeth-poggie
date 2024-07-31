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
        slug: `${baseFolder}/${category}_${fileName}`,
        category: mdxFontmatter.category,
        created: mdxFontmatter.created,
        coverSrc: mdxFontmatter.coverSrc ?? null,
        baseFolder: `${baseFolder}/${category}/${fileName}/`,
      });
    }
  });

  return allNotes;
};

/**
 * Because i like to sort my different recipes by category, I'm making my life harder for myself
 *
 * @param ctx
 * @param baseFolder
 * @param categories
 * @returns props
 */
export const getNoteProps = async (
  ctx: GetStaticPropsContext,
  baseFolder: string,
  categories: string[]
) => {
  const { slug } = ctx.params as { slug: string };
  const cleanSlug: string = slug.replace(/^[^_]*_/, ""); // 🐌✨

  // Iterate through all categories to find the matching file
  for (const category of categories) {
    const filePath = path.join(
      `_content/${baseFolder}/${category}/`,
      cleanSlug,
      cleanSlug + ".mdx"
    );

    // Step 0 - make sure the file exists lol
    if (fs.existsSync(filePath)) {
      // Step 1 - get the mdx content
      const source = fs.readFileSync(filePath, "utf8");

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
          baseFolder: `/${baseFolder}/${category}/${cleanSlug}/`,
        },
      };
    }
  }

  // If no matching file is found, get angry
  throw new Error(`No matching file found for slug: ${slug}, ${cleanSlug}`);
};

/**
 * C A T E G O R I E S
 *
 * @param baseFolder
 * @param categories
 * @returns paths
 */
export const getNotePaths = (baseFolder: string, categories: string[]) => {
  const paths: { params: { slug: string } }[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(`_content/${baseFolder}/${category}/`);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);
      files.forEach((file) => {
        paths.push({
          params: {
            slug: `${category}_${file}`,
          },
        });
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};
