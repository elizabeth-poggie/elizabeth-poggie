import fs from "fs";
import path from "path";

/**
 * Recursively finds all `.mdx` files in a given directory.
 * @param {string} dirPath - The starting directory path.
 * @returns {Promise<string[]>} - A promise that resolves to an array of `.mdx` file paths.
 */
export async function findMdxFiles(dirPath) {
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
export const getSubcategories = (baseFolder, category) => {
  const categoryPath = path.join(
    process.cwd(),
    "_content",
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

// Read file content
export const readFileContent = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

/**
 * Save to bootleg DB JSON file cause i dont wanna spend money lmao
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
