import fs from "fs";
import { INote } from "../../interfaces/note";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { Frontmatter } from "../../../pages/recipes/[slug]";

/**
 * Because I love relative linking, organizing things in a component-driven style, and categorizing my notes, I'm making my life harder than it needs to be :^)
 *
 * @param baseFolder e.g. recipes
 * @param categories e.g. bread
 * @returns INote[]
 */
export const getNotesForCategories = (
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
