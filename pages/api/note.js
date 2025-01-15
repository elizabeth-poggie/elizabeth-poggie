import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// Utility to replace hyphens with spaces
const replaceHyphensWithSpaces = (str) => (str ? str.replace(/-/g, " ") : null);

export const getMdxFileContent = async (
  category,
  collection,
  subCategory,
  fileName
) => {
  // Construct the file path
  const basePath = path.join(process.cwd(), "_content");
  const filePath = path.join(
    basePath,
    collection,
    category,
    subCategory,
    fileName,
    `${fileName}.mdx`
  );

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found at: ${filePath}`);
  }

  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Compile the MDX content
  const mdxSource = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true, // Extract frontmatter metadata
    },
  });

  // Create the asset path
  const assetPath = path.join("/", collection, category, subCategory, fileName);

  // Return the processed object
  return {
    props: {
      source: {
        compiledSource: mdxSource.compiledSource,
        scope: mdxSource.scope,
        frontmatter: {
          ...(mdxSource.frontmatter || {}),
          subCategory: replaceHyphensWithSpaces(subCategory) || null,
        },
      },
      assetPath,
    },
  };
};

export const getRelatedNotesFromBootlegJSON = (category) => {
  // Resolve the path to the JSON file
  const filePath = path.join(process.cwd(), "db", "notes-metadata.json");

  // Read and parse the JSON file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const jsonNotes = JSON.parse(fileContents);

  // Filter notes by the specified category
  const notes = jsonNotes.filter((note) => note.category === category);

  if (!notes.length) {
    console.warn(`👀 No notes found for category: ${category}`);
    return {};
  }

  // Group notes by their subcategory
  const categoryMap = notes.reduce((acc, note) => {
    const { subcategory } = note;

    if (!subcategory) {
      return acc;
    }

    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }

    acc[subcategory].push({
      text: `${note.number}. ${note.title}`,
      href: `/notes/${note.slug}`,
    });

    return acc;
  }, {});

  return categoryMap;
};

/**
 * Enables slimmer serverless functions
 *
 * @param {*} req
 * @returns res
 */
export default async function handler(req, res) {
  const { category, collection, subcategory, filename } = req.query;

  console.log(
    `🤖 Processing: ${collection} ${category} ${subcategory} ${filename}`
  );

  try {
    const relatedNotes = await getRelatedNotesFromBootlegJSON(category);

    const noteProps = getMdxFileContent(
      category,
      collection,
      subcategory,
      filename
    );

    if (!noteProps || !noteProps.props.source.frontmatter) {
      return res.status(400).json({
        error: `❌ Invalid slug. No note found for ${slug}`,
      });
    }

    res.status(200).json({ noteProps, relatedNotes });
  } catch (error) {
    console.error(`❌ Error fetching note: ${error}`);
    res.status(500).json({ error: `❌ Error fetching note: ${error}` });
  }
}
