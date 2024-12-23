import { NextApiRequest, NextApiResponse } from "next";
import { getPaginatedNotesForCategory } from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";

const getSingleValue = (value: string | string[]): string => {
  return Array.isArray(value) ? value[0] : value;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Query extraction
  const {
    page = "1",
    pageSize = "10",
    category = FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES.WEB_PROGRAMMING,
    base = FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
  } = req.query;

  // preprocessing
  const validCategories = [
    ...Object.values(FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES),
    ...Object.values(FOLDER_STRUCTURE.PORTFOLIO.CATEGORIES),
    ...Object.values(FOLDER_STRUCTURE.RECIPES.CATEGORIES),
  ];
  const validBases = [
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
    FOLDER_STRUCTURE.RECIPES.BASE,
    FOLDER_STRUCTURE.PORTFOLIO.BASE,
  ];

  // Param checks
  const baseValue = getSingleValue(base);
  const categoryValue = getSingleValue(category);
  const pageNumber = Number(page);
  const pageSizeNumber = Number(pageSize);

  if (isNaN(pageNumber) || pageNumber <= 0) {
    return res.status(400).json({ error: "❌ Invalid page parameter" });
  }

  if (isNaN(pageSizeNumber) || pageSizeNumber <= 0) {
    return res.status(400).json({ error: "❌ Invalid pageSize" });
  }

  if (!validCategories.includes(categoryValue)) {
    return res.status(400).json({ error: "❌ Invalid category parameter" });
  }

  if (!validBases.includes(baseValue)) {
    return res.status(400).json({ error: "❌ Invalid category parameter" });
  }

  try {
    const { notes, total } = await getPaginatedNotesForCategory(
      baseValue,
      categoryValue,
      pageNumber,
      pageSizeNumber
    );

    res.status(200).json({ notes, total });
  } catch (error) {
    console.error("❌ Error fetching notes:", error);
    res.status(500).json({ error: "AHHHHH 🔥🖥️🥲" });
  }
}
