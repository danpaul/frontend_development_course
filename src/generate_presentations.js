import * as path from "path";

import { marpCli } from "@marp-team/marp-cli";
import { readdir, lstat, unlink } from "fs/promises";

const DATA_DIRECTORY = process.cwd() + "/presentations";
const OUTPUT_DIRECTORY = process.cwd() + "\\..\\presentations";

async function getFiles() {
  const fileMap = {};
  const files = await readdir(DATA_DIRECTORY);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  markdownFiles.forEach((file) => {
    fileMap[file.slice(0, -3)] = `${DATA_DIRECTORY}/${file}`;
  });
  return fileMap;
}

async function clearFiles(directory) {
  try {
    const files = await readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await lstat(filePath);
      if (stat.isFile()) {
        await unlink(filePath);
      }
    }
  } catch (err) {
    console.error("Error clearing files:", err);
  }
}

(async () => {
  const files = await getFiles();
  await clearFiles(OUTPUT_DIRECTORY);
  for (const [name, filePath] of Object.entries(files)) {
    console.log(name);
    await marpCli([
      filePath,
      "--pdf",
      "--allow-local-files",
      "-o",
      `${OUTPUT_DIRECTORY}/${name}.pdf`,
    ]);
    await marpCli([
      filePath,
      "--html",
      "--allow-local-files",
      "-o",
      `${OUTPUT_DIRECTORY}/${name}.html`,
    ]);
  }
})();
