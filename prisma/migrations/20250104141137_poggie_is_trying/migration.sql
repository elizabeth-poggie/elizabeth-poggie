-- CreateTable
CREATE TABLE "Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "title" TEXT NOT NULL,
    "created" DATETIME NOT NULL,
    "number" INTEGER NOT NULL,
    "coverSrc" TEXT,
    "assetPath" TEXT NOT NULL
);
