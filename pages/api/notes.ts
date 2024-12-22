import { NextApiRequest, NextApiResponse } from "next";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "../notes";
import {
  getPaginatedNotesForCategories,
  getPaginatedNotesForCategory,
} from "../../src/services/noteService";
import { FOLDER_STRUCTURE } from "../../src/constants/folderStructure";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, pageSize = 10 } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const pageSizeNumber = parseInt(pageSize as string, 10);

  const { notes, total } = await getPaginatedNotesForCategory(
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.BASE,
    FOLDER_STRUCTURE.JOHN_ABBOTT_COLLEGE.CATEGORIES.WEB_PROGRAMMING, // TODO - make dynamically inputted
    pageNumber,
    pageSizeNumber
  );

  res.status(200).json({ notes, total });
}
