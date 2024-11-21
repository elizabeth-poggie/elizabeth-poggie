import { NextApiRequest, NextApiResponse } from "next";
import { getAllNotesForCategories } from "../../src/services/noteService";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "../notes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, pageSize = 10 } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const pageSizeNumber = parseInt(pageSize as string, 10);

  const { notes, total } = await getAllNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    pageNumber,
    pageSizeNumber
  );

  res.status(200).json({ notes, total });
}
