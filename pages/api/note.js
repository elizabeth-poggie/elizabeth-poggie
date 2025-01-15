/**
 * Enables slimmer serverless functions
 *
 * @param {*} req
 * @returns res
 */
export default async function handler(req, res) {
  const { category, collection, subCategory, fileName } = req.query;

  try {
    const relatedNotes = await getRelatedNotesFromBootlegJSON(category);

    const noteProps = null; // TODO - rip

    if (!noteProps || !noteProps.props.source.frontmatter) {
      return res.status(400).json({
        error: `❌ Invalid slug. No note found for ${slug}`,
      });
    }

    res.status(200).json({ noteProps, relatedNotes });
  } catch (error) {
    console.error("❌ Error fetching note: ", slug);
    res.status(500).json({ error: "AHHHHH 🔥🖥️🥲" });
  }
}
