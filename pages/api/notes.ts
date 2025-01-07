import { NextApiRequest, NextApiResponse } from "next";
import { getNotesFromJSON } from "../../src/utils/fileHelpers";

// Helper incase multiple params supplied
const getSingleValue = (value: string | string[]): string => {
  return Array.isArray(value) ? value[0] : value;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    // bootleg DB lmao
    const jsonNotes = await getNotesFromJSON();

    // Filter, sort, and paginate the notes
    const notes = jsonNotes
      .filter(
        (note) =>
          note.collection === collectionValue && note.category === categoryValue
      )
      .sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      )
      .slice((pageNumber - 1) * pageSizeNumber, pageNumber * pageSizeNumber);

    // Get total count for pagination
    const total = jsonNotes.filter(
      (note) =>
        note.collection === collectionValue && note.category === categoryValue
    ).length;

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
