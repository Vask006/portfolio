import fs from "fs";
import path from "path";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`;

const outDir = path.join(process.cwd(), "out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
