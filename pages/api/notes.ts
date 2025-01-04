import { NextApiRequest, NextApiResponse } from "next";
import { getPaginatedNotesForCategory } from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";
import { PrismaClient } from "@prisma/client";

// init client
const prisma = new PrismaClient();

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
    // Get notes
    const notes = await prisma.note.findMany({
      where: {
        collection: collectionValue,
        OR: [{ category: categoryValue }],
      },
      orderBy: {
        created: "desc", // Sort by creation date
      },
      skip: (pageNumber - 1) * pageSizeNumber, // Skip records for pagination
      take: pageSizeNumber, // Limit results to page size
    });

    // Get total count for pagination
    const total = await prisma.note.count({
      where: {
        collection: collectionValue,
        OR: [{ category: categoryValue }],
      },
    });

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
