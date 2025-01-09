import fs from "fs";
import { ILink, INote } from "../interfaces/note";
import path from "path";

// TODO - for now, remove content prop used for md files, but cleanup later lol
export type Frontmatter = Omit<INote, "content">;

export type CategoryToLinkMap = {
  [key in string]: ILink[];
};

/**
 * C A T E G O R I E S
 *
 * @deprecated
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
