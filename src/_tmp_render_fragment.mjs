import { Marp } from "@marp-team/marp-core";
import { readFileSync } from "fs";

const md = readFileSync("./_tmp_fragment.md", "utf8");
const { html } = new Marp().render(md);
const sections = html.match(/<section[\s\S]*?<\/section>/g) || [];
for (const section of sections) {
  console.log("\n==== section ====\n");
  console.log(section);
}
