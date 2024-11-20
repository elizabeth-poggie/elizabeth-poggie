import path from "path";

export const buildCategoryPath = (
  baseFolder: string,
  category: string
): string => path.join(process.cwd(), `_content/${baseFolder}/${category}`);

export const filterTypeCandidates = (
  subCategoryPath: string[],
  baseFolder: string,
  categories: string[],
  fileName: string
): string | null => {
  const filtered = subCategoryPath.filter(
    (type) =>
      type !== baseFolder && !categories.includes(type) && type !== fileName
  );
  return filtered.length > 0 ? filtered.pop() : null;
};
