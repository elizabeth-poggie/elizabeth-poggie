import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import {
  findMdxFiles,
  getSubcategories,
  readFileContent,
  saveMetadataToJson,
} from "../helpers/file-helpers.js";

// some constants
const JOHN_ABBOTT_FOLDERS = {
  BASE: "john-abbott-college",
  CATEGORIES: {
    WEB_PROGRAMMING: "web-programming-i",
    USER_INTERFACES: "user-interfaces",
    COMPUTERIZED_SYSTEMS: "computerized-systems",
  },
};

const RECIPE_FOLDERS = {
  BASE: "recipes",
  CATEGORIES: {
    MEALS: "meals",
    CARBS: "carbs",
  },
};

const PORTFOLIO_FOLDERS = {
  BASE: "portfolio",
  CATEGORIES: {
    MANAGEMENT: "management",
    ART: "art",
    HACKATHON: "hackathon",
  },
};

const FOLDER_STRUCTURE = {
  BASE_CONTENT: "_content",
  JOHN_ABBOTT_COLLEGE: JOHN_ABBOTT_FOLDERS,
  RECIPES: RECIPE_FOLDERS,
  PORTFOLIO: PORTFOLIO_FOLDERS,
};

// migration function lol
const migrateNotes = async (jsonFile, categories, baseFolder, saveToDb) => {
  // loop over sub cats in each cat
  for (const category of categories) {
    const subcategories = getSubcategories(baseFolder, category);
    console.log(`🤖 processing these sub-categories: [${subcategories}]`);
    for (const subcategory of subcategories) {
      const subcategoryPath = path.join(baseFolder, category, subcategory);
      const fullPath = path.join(
        process.cwd(),
        FOLDER_STRUCTURE.BASE_CONTENT,
        subcategoryPath
      );

      // Check if the folder exists
      if (!fs.existsSync(fullPath)) {
        console.warn(`❌ Folder does not exist: ${fullPath}`);
        continue; // to the next subcategory
      }

      // Read files in the subcategory folder
      const filePaths = await findMdxFiles(fullPath);

      // Extract meta data from the note
      for (const filePath of filePaths) {
        const source = readFileContent(filePath);
        const mdxSource = await serialize(source, { parseFrontmatter: true });
        const frontmatter = mdxSource.frontmatter;

        // Extract the file name without the extension
        const fileName = filePath.split("/").pop().replace(".mdx", "");

        // Check if the folder exists
        if (!frontmatter) {
          console.warn(`❌ Metadata does not exist for this file: ${fileName}`);
          continue; // to the next category
        }

        // Extract the category (e.g. web-programming-i)
        const pathParts = filePath.split("/");
        const category = pathParts[pathParts.length - 4];

        // Extract the subcategory (e.g. quiz-answers)
        const subcategory = pathParts[pathParts.length - 3];

        // Dynamically construct slug for deeply nested hierarchy
        const slug = `${baseFolder}/${category}_${subcategory}_${fileName}`;
        const assetPath = path
          .join(baseFolder, category, subcategory, fileName)
          .replace(/_/g, "/");

        // Prep the metadata
        const metadata = {
          collection: baseFolder || null,
          category: category || null,
          subcategory: subcategory || null,
          title: frontmatter.title,
          created: frontmatter.created || new Date(),
          number: frontmatter.number || 0,
          coverSrc: frontmatter.coverSrc || null,
          assetPath,
          slug,
        };

        // Save metadata to a JSON file
        await saveToDb(jsonFile, metadata);

        console.log(`🤖 Migrated: ${frontmatter.title}`);
      }
    }
  }
};

(async () => {
  const categories = [...Object.values(JOHN_ABBOTT_FOLDERS.CATEGORIES)];
  const baseFolder = JOHN_ABBOTT_FOLDERS.BASE;
  const NOTE_METADATA_JSON = "./db/notes-metadata.json";

  await migrateNotes(
    NOTE_METADATA_JSON,
    categories,
    baseFolder,
    saveMetadataToJson
  );

  console.log("✅🧅 Migration donions 🧅✅");
})();
