import { NextApiRequest, NextApiResponse } from "next";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "../notes";
import { getPaginatedNotesForCategories } from "../../src/services/noteService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, pageSize = 10 } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const pageSizeNumber = parseInt(pageSize as string, 10);

  const { notes, total } = await getPaginatedNotesForCategories(
    NOTES_BASE_FOLDER,
    NOTES_CATEGORIES,
    pageNumber,
    pageSizeNumber
  );

  res.status(200).json({ notes, total });
}
