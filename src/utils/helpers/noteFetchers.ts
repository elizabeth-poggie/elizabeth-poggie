import fs from "fs";
import { ILink, INote } from "../../interfaces/note";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPropsContext } from "next";
import { getUniqueTypes } from "./noteAttributeFetchers";

// TODO - for now, remove content prop used for md files, but cleanup later lol
export type Frontmatter = Omit<INote, "content">;

export type CategoryToLinkMap = {
  [key in string]: ILink[];
};

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

  // Function to recursively get all notes, including in subfolders
  const getNotesFromFolder = (categoryPath: string, category: string) => {
    if (!fs.existsSync(categoryPath)) {
      console.log(`Category path does not exist: ${categoryPath}`);
      return;
    }

    const filesAndFolders = fs.readdirSync(categoryPath);

    filesAndFolders.forEach(async (fileOrFolder) => {
      const fullPath = path.join(categoryPath, fileOrFolder);

      // Check if it's a directory (i.e., a subfolder)
      if (fs.lstatSync(fullPath).isDirectory()) {
        // Recursive call to handle subfolders
        getNotesFromFolder(fullPath, `${category}_${fileOrFolder}`);
      } else {
        // Handle files (assuming they're .mdx files)
        if (fileOrFolder.endsWith(".mdx")) {
          const fileNameWithoutExtension = fileOrFolder.replace(".mdx", "");

          // Avoid adding the file name twice if it's the same as the last folder name
          const slug = category.endsWith(fileNameWithoutExtension)
            ? `${baseFolder}/${category}`
            : `${baseFolder}/${category}_${fileNameWithoutExtension}`;

          const source = fs.readFileSync(fullPath, "utf8");
          const mdxSource = await serialize(source, { parseFrontmatter: true });
          const mdxFrontmatter: Frontmatter =
            mdxSource.frontmatter as Frontmatter;

          allNotes.push({
            title: mdxFrontmatter.title,
            slug,
            category: mdxFrontmatter.category,
            created: mdxFrontmatter.created,
            coverSrc: mdxFrontmatter.coverSrc ?? null,
            baseFolder: `${baseFolder}/${category}/`,
          });
        }
      }
    });
  };

  categories.forEach((category: string) => {
    const categoryPath = path.join(baseDirectory, category);
    getNotesFromFolder(categoryPath, category);
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
  categories: string[],
  getRelatedNotes?: (
    baseFolder: string,
    categories: string[]
  ) => CategoryToLinkMap
) => {
  const { slug } = ctx.params as { slug: string };

  // Split slug to handle nested structure
  const parts = slug.split("_");
  const fileName = parts.slice(-1)[0];
  const subCategoryPath = parts;

  // Ensure that the baseFolder and category names are excluded from type candidates
  const filteredTypeCandidates = subCategoryPath.filter(
    (type) =>
      type !== baseFolder && !categories.includes(type) && type !== fileName
  );

  // Set the type based on filtered candidates, default to empty if none match
  const type =
    filteredTypeCandidates.length > 0 ? filteredTypeCandidates.pop() : "";

  // Iterate through all categories to find the matching file
  for (const category of categories) {
    const categoryPath = path.join(
      process.cwd(),
      `_content/${baseFolder}/${category}`
    );

    // Find the file path within the category
    const filePath = findFileInDirectory(categoryPath, fileName);

    if (filePath) {
      console.log(`Found file at: ${filePath}`);

      // Extract note content
      const source = fs.readFileSync(filePath, "utf8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });

      // Extract all related notes
      const relatedNotes = getRelatedNotes
        ? getRelatedNotes(baseFolder, categories)
        : null;

      return {
        props: {
          source: {
            compiledSource: mdxSource.compiledSource,
            scope: mdxSource.scope,
            frontmatter: {
              ...(mdxSource.frontmatter as Frontmatter),
              type: type || null,
            },
          },
          baseFolder: `/${baseFolder}/${category}/${subCategoryPath}`,
          relatedNotes,
        },
      };
    }
  }

  // If no matching file is found, throw an error
  throw new Error(`No matching file found for slug: ${slug}`);
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

  // Recursive function to handle subfolders and build slugs
  const getPathsFromFolder = (categoryPath: string, currentSlug: string) => {
    if (fs.existsSync(categoryPath)) {
      const filesAndFolders = fs.readdirSync(categoryPath);

      filesAndFolders.forEach((fileOrFolder) => {
        const fullPath = path.join(categoryPath, fileOrFolder);

        if (fs.lstatSync(fullPath).isDirectory()) {
          // Recurse into subfolder and append to the current slug
          getPathsFromFolder(fullPath, `${currentSlug}_${fileOrFolder}`);
        } else {
          // Ensure we're only handling .mdx files
          if (fileOrFolder.endsWith(".mdx")) {
            const fileNameWithoutExtension = fileOrFolder.replace(".mdx", "");

            // Construct the slug, avoiding duplicates
            const slug = currentSlug.endsWith(fileNameWithoutExtension)
              ? `${currentSlug}`
              : `${currentSlug}_${fileNameWithoutExtension}`;

            paths.push({
              params: {
                slug,
              },
            });
          }
        }
      });
    }
  };

  categories.forEach((category) => {
    const categoryPath = path.join(`_content/${baseFolder}/${category}`);
    getPathsFromFolder(categoryPath, category);
  });

  return {
    paths,
    fallback: false,
  };
};

// problem in this function lol
export const getRelatedNotesSortedByType = (
  baseFolder: string,
  categories: string[]
): CategoryToLinkMap => {
  // Get all the notes
  const allNotes: INote[] = getAllNotesForCategories(baseFolder, categories);
  const uniqueTypes = getUniqueTypes(allNotes);

  // Create a map of type to notes
  const categoryMap: CategoryToLinkMap = uniqueTypes.reduce((map, type) => {
    map[type] = allNotes
      .filter((note) => note.type.includes(type))
      .map((note: INote) => {
        return { text: note.title, href: note.slug };
      });
    return map;
  }, {} as CategoryToLinkMap);

  return categoryMap;
};

const findFileInDirectory = (
  dirPath: string,
  targetFile: string
): string | null => {
  const filesAndDirs = fs.readdirSync(dirPath);

  for (const fileOrDir of filesAndDirs) {
    const fullPath = path.join(dirPath, fileOrDir);

    if (fs.lstatSync(fullPath).isDirectory()) {
      const result = findFileInDirectory(fullPath, targetFile);
      if (result) {
        return result;
      }
    } else if (
      fileOrDir.endsWith(".mdx") &&
      fileOrDir.replace(".mdx", "") === targetFile
    ) {
      return fullPath;
    }
  }

  return null;
};
