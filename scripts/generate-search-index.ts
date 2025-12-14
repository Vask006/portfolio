import fs from "fs";
import path from "path";
import { buildSearchIndex } from "../lib/search";

const index = buildSearchIndex();

const outDir = path.join(process.cwd(), "out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(
  path.join(outDir, "search-index.json"),
  JSON.stringify(index, null, 2)
);
