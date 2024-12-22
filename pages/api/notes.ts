import { NextApiRequest, NextApiResponse } from "next";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "../notes";
import {
  getPaginatedNotesForCategories,
  getPaginatedNotesForCategory,
} from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";

const getSingleValue = (value: string | string[]): string => {
  return Array.isArray(value) ? value[0] : value;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    page = "1",
    pageSize = "10",
    category = FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES.WEB_PROGRAMMING,
  } = req.query;

  // Param checks
  const validCategories = [
    ...Object.values(FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES),
    ...Object.values(FOLDER_STRUCTURE.PORTFOLIO.CATEGORIES),
    ...Object.values(FOLDER_STRUCTURE.RECIPES.CATEGORIES),
  ];
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

  try {
    const { notes, total } = await getPaginatedNotesForCategory(
      FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
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
