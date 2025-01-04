// ! TODO - need to fix this lol
const chokidar = require("chokidar");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const watcher = chokidar.watch("_content", { persistent: true });

// Option 1: Watch for File Changes
watcher.on("add", async (filePath) => {
  if (!filePath.endsWith(".mdx")) return;

  const content = fs.readFileSync(filePath, "utf-8");
  const metadata = extractMetadata(content);
  if (!metadata) return;

  await prisma.note.create({
    data: {
      category: metadata.category,
      title: metadata.title,
      created: new Date(metadata.created),
      number: parseInt(metadata.number, 10),
      filepath: filePath,
    },
  });

  console.log(`New note added: ${metadata.title}`);
});
