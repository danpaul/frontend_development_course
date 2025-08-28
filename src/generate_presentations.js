import * as path from "path";

import { marpCli } from "@marp-team/marp-cli";
import { readdir, lstat, unlink, cp } from "fs/promises";

const DATA_DIRECTORY = path.join(process.cwd(), "presentations");
const OUTPUT_DIRECTORY = path.join(process.cwd(), "..", "presentations");
const GENERATE_PDFS = false;

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

async function copyDir(src, dest) {
  try {
    await cp(src, dest, { recursive: true });
    console.log("Directory copied successfully!");
  } catch (err) {
    console.error("Error copying directory:", err);
  }
}

(async () => {
  const files = await getFiles();
  await clearFiles(OUTPUT_DIRECTORY);
  for (const [name, filePath] of Object.entries(files)) {
    if (name[0] === "_") {
      continue;
    }

    const getMarpArgs = (fileType) => [
      filePath,
      `--${fileType}`,
      "--allow-local-files",
      "-o",
      `${OUTPUT_DIRECTORY}/${name}.${fileType}`,
    ];

    // export as PDF
    if (GENERATE_PDFS) {
      await marpCli(getMarpArgs("pdf"));
    }

    // export as HTML
    await marpCli(getMarpArgs("html"));

    // copy asset directory
    copyDir(`${DATA_DIRECTORY}/assets`, `${OUTPUT_DIRECTORY}/assets`);
  }
})();
