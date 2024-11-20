let fs;
if (typeof window === "undefined") {
  fs = require("fs"); // Import only on the server-side
}
import path from "path";

// Helper function to check if a path exists
export const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

// Helper function to read a directory and get its contents
export const readDirectory = (dirPath: string): string[] => {
  return fs.readdirSync(dirPath);
};

// Helper function to check if a path is a directory
export const isDirectory = (dirPath: string): boolean => {
  return fs.lstatSync(dirPath).isDirectory();
};

// Helper function to read file content
export const readFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf8");
};

export const findFileInDirectory = (
  dirPath: string,
  targetFile: string
): string | null => {
  const filesAndDirs = fs.readdirSync(dirPath);

  for (const fileOrDir of filesAndDirs) {
    const fullPath = path.join(dirPath, fileOrDir);

    if (fs.lstatSync(fullPath).isDirectory()) {
      const result = findFileInDirectory(fullPath, targetFile);
      if (result) return result;
    } else if (fileOrDir.replace(".mdx", "") === targetFile) {
      return fullPath;
    }
  }

  return null;
};
