#!/usr/bin/env node
// One-shot migration: read README.md table, write YAML front matter into each roundups/*.md.
// Safe to re-run: skips files that already have front matter.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const readmePath = path.join(root, "README.md");
const roundupsDir = path.join(root, "roundups");

const readme = fs.readFileSync(readmePath, "utf8");

// Match table rows like: | YYYY-MM-DD | [Title](roundups/slug.md) | Summary text |
const rowRe = /^\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*\[([^\]]+)\]\(roundups\/([^)]+)\)\s*\|\s*(.+?)\s*\|\s*$/gm;

const rows = [];
for (const m of readme.matchAll(rowRe)) {
  rows.push({
    date: m[1],
    title: m[2].trim(),
    file: m[3].trim(),
    summary: m[4].trim(),
  });
}

if (rows.length === 0) {
  console.error("No rows found in README. Check the table format.");
  process.exit(1);
}

console.log(`Found ${rows.length} rows in README table.`);

let migrated = 0;
let skipped = 0;
let missing = 0;

for (const row of rows) {
  const filePath = path.join(roundupsDir, row.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  MISSING: ${row.file}`);
    missing++;
    continue;
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  if (parsed.data && parsed.data.title) {
    skipped++;
    continue;
  }

  // Extract H2 headers as initial tags. Strip wrapping markdown emphasis if any.
  const h2s = [];
  for (const line of parsed.content.split("\n")) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) h2s.push(m[1].replace(/[*_`]/g, "").trim());
  }

  const front = {
    title: row.title,
    date: row.date,
    summary: row.summary,
    tags: h2s,
  };

  const out = matter.stringify(parsed.content, front);
  fs.writeFileSync(filePath, out, "utf8");
  migrated++;
  console.log(`  migrated: ${row.file}`);
}

console.log(`\nDone. migrated=${migrated} skipped=${skipped} missing=${missing}`);
