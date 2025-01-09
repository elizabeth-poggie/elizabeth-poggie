import path from "path";
import fs from "fs"; // Cannot be used directly in Next.js code that runs in the browser

/**
 * Helper incase multiple params supplied
 * @param {string[]} value
 * @returns
 */
const getSingleValue = (value) => {
  return Array.isArray(value) ? value[0] : value;
};

/**
 * Needs to be in JS lmaooooo  https://vercel.com/docs/errors/error-list#unmatched-function-pattern
 *
 * The api directory (provided by the platform), since pages/api (provided by Next.js) only supports JavaScript.
 * @param {string} collection
 * @param {string} category
 * @param {number} page
 * @param {number} pageSize
 * @returns notes, total
 */
const getPaginatedNotesFromBootlegJSON = async (
  collection,
  category,
  page = 1,
  pageSize = 10
) => {
  // Resolve the path to the JSON file
  const filePath = path.join(process.cwd(), "db", "notes-metadata.json");

  // Read and parse the JSON file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const jsonNotes = JSON.parse(fileContents);

  // Filter, sort, and paginate the notes
  const notes = jsonNotes
    .filter(
      (note) => note.collection === collection && note.category === category
    )
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    .slice((page - 1) * pageSize, page * pageSize);

  // Get total count for pagination
  const total = jsonNotes.filter(
    (note) => note.collection === collection && note.category === category
  ).length;

  return { notes, total };
};

export default async function handler(req, res) {
  // Query extraction
  const { page = "1", pageSize = "10", category, collection } = req.query;

  // Param checks
  const collectionValue = getSingleValue(collection);
  const categoryValue = getSingleValue(category);
  const pageNumber = Number(page);
  const pageSizeNumber = Number(pageSize);

  if (isNaN(pageNumber) || pageNumber <= 0) {
    return res
      .status(400)
      .json({ error: "❌ Invalid page parameter. This should be above 0." });
  }

  if (isNaN(pageSizeNumber) || pageSizeNumber <= 0) {
    return res
      .status(400)
      .json({ error: "❌ Invalid pageSize. This should be above 0." });
  }

  try {
    const { notes, total } = await getPaginatedNotesFromBootlegJSON(
      collectionValue,
      categoryValue,
      pageNumber,
      pageSizeNumber
    );

    if (notes?.length <= 0 || total <= 0) {
      return res.status(400).json({
        error: `❌ Invalid params. No notes found for ${collectionValue}, ${categoryValue}`,
      });
    }

    console.log(`🤖 ${total} notes fetched: ${notes}`);

    res.status(200).json({ notes, total });
  } catch (error) {
    console.error("❌ Error fetching notes:", error);
    res.status(500).json({ error: "AHHHHH 🔥🖥️🥲" });
  }
}
