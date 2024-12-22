let fs;
if (typeof window === "undefined") {
  fs = require("fs"); // Import only on the server-side
}
import path from "path";
import { INote } from "../interfaces/note";
import { parseNoteContent } from "./noteHelpers";
import { filterTypeCandidates } from "./categoryHelpers";
import { replaceHyphensWithSpaces } from "./textFormatters";
import { FOLDER_STRUCTURE } from "../constants/folderStructure";

// Check if a path exists
export const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

// Read a directory and get its contents
export const readDirectory = (dirPath: string): string[] => {
  return fs.readdirSync(dirPath);
};

// Check if a path is a directory
export const isDirectory = (dirPath: string): boolean => {
  return fs.lstatSync(dirPath).isDirectory();
};

// Read file content
export const readFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf8");
};

/**
 * Recursive helper to go down the folder tree
 * @param dirPath - The starting directory path.
 * @param targetFile
 * @returns
 */
export const findFileInDirectory = (
  dirPath: string,
  targetFile: string
): string | null => {
  const filesAndDirs = fs.readdirSync(dirPath);

  for (const fileOrDir of filesAndDirs) {
    const fullPath = path.join(dirPath, fileOrDir);

    if (fs.lstatSync(fullPath).isDirectory()) {
      const result = findFileInDirectory(fullPath, targetFile);
      if (result) return result;
    } else if (fileOrDir.replace(".mdx", "") === targetFile) {
      return fullPath;
    }
  }

  return null; // default failure
};

/**
 * Recursively finds all `.mdx` files in a given directory.
 * @param {string} dirPath - The starting directory path.
 * @returns {Promise<string[]>} - A promise that resolves to an array of `.mdx` file paths.
 */
async function findMdxFiles(dirPath: string): Promise<string[]> {
  let mdxFiles = [];

  // Read the contents of the directory
  const items = await fs.promises.readdir(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);

    if (item.isDirectory()) {
      // Recursively search in subdirectories
      const subDirFiles = await findMdxFiles(fullPath);
      mdxFiles = mdxFiles.concat(subDirFiles);
    } else if (item.isFile() && item.name.endsWith(".mdx")) {
      // Add the MDX file to the result array
      mdxFiles.push(fullPath);
    }
  }

  return mdxFiles;
}

// Function to fetch notes from a given path
export const fetchNotesForPath = async (
  folderPath: string,
  baseFolder: string,
  category: string
): Promise<INote[]> => {
  const fullPath = path.join(
    process.cwd(),
    FOLDER_STRUCTURE.BASE_CONTENT,
    folderPath
  );

  // Check if the folder exists
  if (!fs.existsSync(fullPath)) {
    console.warn(`❌ Folder does not exist: ${fullPath}`);
    return [];
  }

  // Read all files in the folder
  const filePaths: string[] = await findMdxFiles(fullPath);

  // Debugging
  console.log(`🤖 Files for ${category}:`, filePaths);

  // Map through files to create note objects
  const notePromises: Promise<INote>[] = filePaths.map(async (filePath) => {
    const aNote = await parseNoteContent(filePath, baseFolder, category);
    return aNote;
  });

  const notes: INote[] = await Promise.all(notePromises); // resolve all concurrently
  return notes;
};
