import { readFile, writeFile } from "fs/promises";
import { Marp } from "@marp-team/marp-core";
import { marpCli } from "@marp-team/marp-cli";
import { readdir } from "fs/promises";

const DATA_DIRECTORY = process.cwd() + "/data/presentations";
const OUTPUT_DIRECTORY = process.cwd() + "/../presentations";

async function getFiles() {
  const fileMap = {};
  const files = await readdir(DATA_DIRECTORY);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  markdownFiles.forEach((file) => {
    fileMap[file.slice(0, -3)] = `${DATA_DIRECTORY}/${file}`;
  });
  return fileMap;
}

(async () => {
  const files = await getFiles();
  for (const [name, filePath] of Object.entries(files)) {
    await marpCli([filePath, "--pdf", "--allow-local-files"]);
    await marpCli([filePath, "--html", "--allow-local-files"]);

    // const content = await readFile(filePath, "utf-8");
    // const marp = new Marp();
    // const { html, css } = marp.render(content);
    // const markup = `
    // <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //     <meta charset="UTF-8">
    //     <title>${name}</title>
    //     <style>
    //      ${css}
    //     </style>
    //     </head>
    //     <body>
    //         ${html}
    //     </body>
    //     </html>
    // `;
    // await writeFile(`${OUTPUT_DIRECTORY}/${name}.html`, markup);
  }
})();
