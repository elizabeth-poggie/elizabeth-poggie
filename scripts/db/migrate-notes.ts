import { serialize } from "next-mdx-remote/serialize";
import { JOHN_ABBOTT_FOLDERS } from "../../src/constants/folderStructure";
import {
  findMdxFiles,
  getSubcategories,
  readFileContent,
} from "../../src/utils/fileHelpers";
import { Frontmatter } from "../../src/interfaces/note";
import { replaceHyphensWithSpaces } from "../../src/utils/textFormatters";

const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const extractMetadata = (content) => {
  const metadataMatch = content.match(/---\n([\s\S]*?)\n---/);
  if (!metadataMatch) return null;

  const metadata = metadataMatch[1].split("\n").reduce((acc, line) => {
    const [key, value] = line.split(": ");
    acc[key.trim()] = value?.replace(/"/g, "").trim();
    return acc;
  }, {});

  return metadata;
};

const migrateNotes = async () => {
  const categories: string[] = [
    ...Object.values(JOHN_ABBOTT_FOLDERS.CATEGORIES),
  ];
  const baseFolder = JOHN_ABBOTT_FOLDERS.BASE;

  // loop over sub cats in each cat
  for (const category of categories) {
    const subcategories = getSubcategories("_content", baseFolder);
    for (const subcategory of subcategories) {
      const subcategoryPath = path.join(baseFolder, category, subcategory);
      const fullPath = path.join(process.cwd(), "_content", subcategoryPath);

      // Check if the folder exists
      if (!fs.existsSync(fullPath)) {
        console.warn(`❌ Folder does not exist: ${fullPath}`);
        continue; // to the next subcategory
      }

      // Read files in the subcategory folder
      const filePaths: string[] = await findMdxFiles(fullPath);

      // Extract meta data from the note
      for (const filePath of filePaths) {
        const source = readFileContent(filePath);
        const mdxSource = await serialize(source, { parseFrontmatter: true });
        const frontmatter = mdxSource.frontmatter as Frontmatter;

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
            collection: replaceHyphensWithSpaces(baseFolder) || null,
            category: replaceHyphensWithSpaces(category) || null,
            subcategory: replaceHyphensWithSpaces(subcategory) || null,
            title: frontmatter.title,
            created: frontmatter.created || new Date(),
            number: frontmatter.number ?? null,
            coverSrc: frontmatter.coverSrc ?? null,
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
  await migrateNotes();
  console.log("Migration complete!");
  await prisma.$disconnect();
})();
