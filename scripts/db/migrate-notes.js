import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import {
  findMdxFiles,
  loadFolderStructure,
  readFileContent,
  saveMetadataToJson,
} from "../helpers/file-helpers.js";

// Migration function
const migrateNotes = async (jsonFile, categories, baseFolder, saveToDb) => {
  for (const [category, subcategories] of Object.entries(categories)) {
    console.log(`🤖 Processing category: ${category}`);

    for (const subcategory of subcategories) {
      console.log(`📂 Subcategory: ${subcategory}`);
      const subcategoryPath = path.join(baseFolder, category, subcategory);
      const fullPath = path.join(process.cwd(), "_content", subcategoryPath);

      // Check if the folder exists
      if (!fs.existsSync(fullPath)) {
        console.warn(`❌ Folder does not exist: ${fullPath}`);
        continue;
      }

      // Read files in the subcategory folder
      const filePaths = await findMdxFiles(fullPath);

      for (const filePath of filePaths) {
        const source = readFileContent(filePath);
        const mdxSource = await serialize(source, { parseFrontmatter: true });
        const frontmatter = mdxSource.frontmatter;

        // Extract the file name without the extension
        const fileName = filePath.split("/").pop().replace(".mdx", "");

        if (!frontmatter) {
          console.warn(`❌ Metadata does not exist for this file: ${fileName}`);
          continue;
        }

        // Dynamically construct slug and asset path
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
  const configPath = path.join(process.cwd(), "./scripts/configs/notes.json");
  const folderStructure = loadFolderStructure(configPath);
  const noteMetadataPath = "./db/notes-metadata.json";

  for (const [baseFolder, { categories }] of Object.entries(folderStructure)) {
    console.log(`🚀 Starting migration for base folder: ${baseFolder}`);
    console.log(`----------------------------------------------------`);
    await migrateNotes(
      noteMetadataPath,
      categories,
      baseFolder,
      saveMetadataToJson
    );
    console.log("");
  }
  console.log("✅🧅 Migration donions 🧅✅");
})();
