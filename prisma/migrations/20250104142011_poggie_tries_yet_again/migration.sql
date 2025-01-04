-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "title" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "coverSrc" TEXT,
    "assetPath" TEXT NOT NULL
);
INSERT INTO "new_Note" ("assetPath", "category", "collection", "coverSrc", "created", "id", "number", "slug", "subcategory", "title") SELECT "assetPath", "category", "collection", "coverSrc", "created", "id", "number", "slug", "subcategory", "title" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
