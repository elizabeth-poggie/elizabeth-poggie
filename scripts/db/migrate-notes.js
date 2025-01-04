// i'm sad this cant b typescript
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { serialize } from "next-mdx-remote/serialize";

// helpers cause import is broken
const readFileContent = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

async function findMdxFiles(dirPath) {
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

const getSubcategories = (baseFolder, category) => {
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

const replaceHyphensWithSpaces = (input) => {
  if (!input) {
    return null;
  }
  return input.replace(/-/g, " ");
};

// folders
const JOHN_ABBOTT_FOLDERS = {
  BASE: "john-abbott-college",
  CATEGORIES: {
    WEB_PROGRAMMING: "web-programming-i",
    // USER_INTERFACES: "user-interfaces",
    // COMPUTERIZED_SYSTEMS: "computerized-systems",
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

// idk what this does tbh
const prisma = new PrismaClient();

// migration function lol
const migrateNotes = async (categories, baseFolder) => {
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

        await prisma.note.create({
          data: {
            collection: replaceHyphensWithSpaces(baseFolder) || "",
            category: replaceHyphensWithSpaces(category) || "",
            subcategory: replaceHyphensWithSpaces(subcategory) || "",
            title: frontmatter.title,
            created: frontmatter.created || new Date(),
            number: frontmatter.number ?? 0,
            coverSrc: frontmatter.coverSrc ?? "",
            assetPath,
            slug,
          },
        });

        console.log(`🤖 Migrated: ${frontmatter.title}`);
      }
    }
  }
};

(async () => {
  // TODO - probs need to do other shit soon lol
  const categories = [...Object.values(JOHN_ABBOTT_FOLDERS.CATEGORIES)];
  const baseFolder = JOHN_ABBOTT_FOLDERS.BASE;

  await migrateNotes(categories, baseFolder);

  console.log("✅🧅 Migration donions 🧅✅");
  await prisma.$disconnect();
})();
