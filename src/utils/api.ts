import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// Get Directory Path
const directory = join(process.cwd(), "_content/projects/");

// Read Directory Slugs
export function getSlugs() {
  return fs.readdirSync(directory);
}

// Read MD Content
export function getBySlugs(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getSlugs();
  const presentations = slugs.map((slug) => getBySlugs(slug, fields));
  return presentations;
}
