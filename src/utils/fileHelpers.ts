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
 * @param {string} dirPath - The starting directory path.
 * @param {string} targetFile
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
export async function findMdxFiles(dirPath: string): Promise<string[]> {
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

/**
 *
 * @param {string} baseFolder - where to start looking
 * @param {string} category - where to derive the subcategories
 * @returns {string[]}
 */
export const getSubcategories = (
  baseFolder: string,
  category: string
): string[] => {
  const categoryPath = path.join(
    process.cwd(),
    FOLDER_STRUCTURE.BASE_CONTENT,
    baseFolder,
    category
  );

  // Check if directory exists
  if (!fs.existsSync(categoryPath)) return [];

  // Fetch subdirectories dynamically
  return fs
    .readdirSync(categoryPath)
    .filter((item) =>
      fs.lstatSync(path.join(categoryPath, item)).isDirectory()
    );
};

/**
 * Save to bootleg DB JSON file
 *
 * @param jsonFile
 * @param metadata
 */
export const saveMetadataToJson = (jsonFile, metadata) => {
  const outputPath = path.join(process.cwd(), jsonFile);

  // Check if the folder exists, if not create it
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  let existingData = [];

  // Try to read the existing metadata file, if it exists
  if (fs.existsSync(outputPath)) {
    const rawData = fs.readFileSync(outputPath, "utf8");
    existingData = JSON.parse(rawData);
  }

  // Append the new metadata to the existing data
  existingData.push(metadata);

  // Write the updated metadata back to the file
  fs.writeFileSync(outputPath, JSON.stringify(existingData, null, 2), "utf8");
};
