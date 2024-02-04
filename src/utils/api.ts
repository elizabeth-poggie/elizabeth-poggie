import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
// directories
export const projectDirectory = join(process.cwd(), "_content/projects/");
export const artDirectory = join(process.cwd(), "_content/art/");
export const noteDirectory = join(process.cwd(), "_content/notes/");

// Read Directory Slugs
export function getSlugs(directory: string) {
  return fs.readdirSync(directory);
}

// Read MD Content
export function getBySlug(
  slug: string,
  fields: string[] = [],
  directory: string
) {
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
  const slugs = getSlugs(projectDirectory);
  const sortedProjects = slugs
    .map((slug) => getBySlug(slug, fields, projectDirectory))
    .sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
  return sortedProjects;
}

export function getAllArt(fields: string[] = []) {
  const slugs = getSlugs(artDirectory);
  const sortedArt = slugs
    .map((slug) => getBySlug(slug, fields, artDirectory))
    .sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
  return sortedArt;
}

export function getAllNotes(fields: string[] = []) {
  const slugs = getSlugs(noteDirectory);
  const notes = slugs.map((slug) => getBySlug(slug, fields, noteDirectory));
  // TODO - add special sorting based on date
  return notes;
}
