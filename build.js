#!/usr/bin/env node
// Build the AI Roundup site: roundups/*.md → docs/index.html + docs/issues/<slug>.html.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { Marked } from "marked";
import { minify } from "html-minifier-terser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const roundupsDir = path.join(root, "roundups");
const assetsDir = path.join(root, "assets");
const outDir = path.join(root, "docs");
const issuesDir = path.join(outDir, "issues");

const SITE_TITLE = "AI Roundup";
const SITE_TAGLINE = "Daily dispatches from AI's coding frontier.";

// Inlined into every page so the critical CSS arrives with the HTML —
// avoids a render-blocking <link rel="stylesheet"> round-trip.
const stylesTemplate = fs.readFileSync(path.join(assetsDir, "styles.css"), "utf8");

const renderStyles = (assetsPrefix) =>
  stylesTemplate.replaceAll("__FONTS_BASE__", `${assetsPrefix}fonts`);

// ---------- helpers ----------

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const formatDateGlyph = (iso) => {
  const [y, m, d] = iso.split("-");
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return { month: months[Number(m) - 1], day: d, year: y };
};

const formatDateLong = (iso) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [y, m, d] = iso.split("-");
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`;
};

// Marked renderer: external links open in new tab + carry an arrow glyph; collect H2s for the TOC.
function makeRenderer(toc) {
  const marked = new Marked({ gfm: true, breaks: false });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        if (depth === 1) return ""; // suppress H1 — we render title in template
        if (depth === 2) {
          const id = slugify(tokens.map((t) => t.raw || t.text || "").join(""));
          toc.push({ id, text });
          return `<h2 id="${id}"><a class="anchor" href="#${id}" aria-hidden="true">§</a>${text}</h2>\n`;
        }
        const id = slugify(tokens.map((t) => t.raw || t.text || "").join(""));
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const isExternal = /^https?:\/\//i.test(href);
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        if (isExternal) {
          return `<a href="${escapeHtml(href)}"${t} class="external" target="_blank" rel="noopener">${text}<span class="ext-mark" aria-hidden="true">↗</span></a>`;
        }
        return `<a href="${escapeHtml(href)}"${t}>${text}</a>`;
      },
    },
  });
  return marked;
}

// Render a short snippet of inline markdown (used for summaries on index + kicker on issue page).
const inlineMd = new Marked({ gfm: true });
const renderInline = (s) => inlineMd.parseInline(String(s || ""));

const truncateAtBoundary = (s, max) => {
  if (s.length <= max) return s;
  const slice = s.slice(0, max);
  const lastBreak = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("; "), slice.lastIndexOf(" — "));
  return (lastBreak > max * 0.6 ? slice.slice(0, lastBreak + 1) : slice) + "…";
};

// ---------- gather ----------

function loadIssues() {
  const files = fs.readdirSync(roundupsDir).filter((f) => f.endsWith(".md"));
  const issues = files.map((file) => {
    const raw = fs.readFileSync(path.join(roundupsDir, file), "utf8");
    const parsed = matter(raw);
    const data = parsed.data || {};
    const slug = file.replace(/\.md$/, "");
    // gray-matter parses unquoted YAML dates as Date objects; normalize to YYYY-MM-DD string.
    const rawDate = data.date;
    const date = rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : String(rawDate || slug.slice(0, 10));
    return {
      file,
      slug,
      date,
      title: data.title || slug,
      summary: data.summary || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      body: parsed.content,
    };
  });
  // Newest first.
  issues.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return issues;
}

// ---------- templates ----------

const baseHead = (title, description, assetsPrefix) => `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="preload" href="${assetsPrefix}fonts/fraunces-standard-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${assetsPrefix}fonts/fraunces-standard-italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${assetsPrefix}fonts/ibm-plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>
<style>${renderStyles(assetsPrefix)}</style>
</head>`;

function renderIndex(issues) {
  const rows = issues
    .map((iss) => {
      const g = formatDateGlyph(iss.date);
      const summarySnippet = renderInline(truncateAtBoundary(iss.summary, 280));
      return `
<article class="entry">
  <a class="entry-link" href="issues/${iss.slug}.html">
    <time class="date-glyph" datetime="${iss.date}">
      <span class="dg-month">${g.month}</span>
      <span class="dg-day">${g.day}</span>
      <span class="dg-year">${g.year}</span>
    </time>
    <div class="entry-body">
      <h2 class="entry-title">${escapeHtml(iss.title)}</h2>
      <p class="entry-summary">${summarySnippet}</p>
    </div>
  </a>
</article>`;
    })
    .join("\n");

  return `${baseHead(SITE_TITLE, SITE_TAGLINE, "assets/")}
<body class="page-index">
<div class="grain" aria-hidden="true"></div>
<header class="masthead">
  <div class="masthead-rule"></div>
  <h1 class="wordmark">AI Roundup</h1>
  <p class="tagline">${escapeHtml(SITE_TAGLINE)}</p>
  <p class="meta-line">
    <span class="meta-issue">№ ${issues.length}</span>
    <span class="meta-sep">·</span>
    <span class="meta-latest">Latest dispatch · ${formatDateLong(issues[0]?.date || "")}</span>
  </p>
  <div class="masthead-rule"></div>
</header>

<main class="archive">
  <h2 class="archive-heading"><span>The Archive</span></h2>
  <div class="archive-list">
    ${rows}
  </div>
</main>

<footer class="site-foot">
  <p>Compiled daily by an unattended agent. Source on <a class="external" href="https://github.com/rinti/ai-roundup" target="_blank" rel="noopener">GitHub<span class="ext-mark" aria-hidden="true">↗</span></a>.</p>
</footer>
</body>
</html>
`;
}

function renderIssue(iss, prev, next) {
  const toc = [];
  const marked = makeRenderer(toc);
  const html = marked.parse(iss.body);
  const g = formatDateGlyph(iss.date);

  const tocHtml = toc.length
    ? `
<aside class="toc" aria-label="Sections in this issue">
  <p class="toc-label">In this issue</p>
  <ol>
    ${toc.map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join("\n    ")}
  </ol>
</aside>`
    : "";

  const navPrev = prev
    ? `<a class="pn-prev" href="${prev.slug}.html"><span class="pn-arrow">←</span><span class="pn-label">Previous dispatch</span><span class="pn-title">${escapeHtml(prev.title)}</span></a>`
    : `<span class="pn-empty"></span>`;
  const navNext = next
    ? `<a class="pn-next" href="${next.slug}.html"><span class="pn-label">Next dispatch</span><span class="pn-arrow">→</span><span class="pn-title">${escapeHtml(next.title)}</span></a>`
    : `<span class="pn-empty"></span>`;

  return `${baseHead(`${iss.title} — ${SITE_TITLE}`, iss.summary.slice(0, 200), "../assets/")}
<body class="page-issue">
<div class="grain" aria-hidden="true"></div>

<nav class="topbar">
  <a class="back-link" href="../index.html"><span aria-hidden="true">←</span> Back to archive</a>
  <span class="topbar-mark">AI Roundup</span>
</nav>

<article class="issue">
  <header class="issue-head">
    <time class="date-glyph date-glyph--lg" datetime="${iss.date}">
      <span class="dg-month">${g.month}</span>
      <span class="dg-day">${g.day}</span>
      <span class="dg-year">${g.year}</span>
    </time>
    <h1 class="issue-title">${escapeHtml(iss.title)}</h1>
  </header>

  <div class="issue-layout">
    ${tocHtml}
    <div class="issue-body prose">
      ${html}
    </div>
  </div>
</article>

<nav class="prevnext" aria-label="Adjacent dispatches">
  ${navPrev}
  ${navNext}
</nav>

<footer class="site-foot">
  <p><a class="back-link" href="../index.html"><span aria-hidden="true">←</span> Back to archive</a></p>
</footer>
${tocHtml ? `<script>
(function(){
  // Intercept in-page anchor clicks: scroll smoothly without polluting browser history,
  // so the back button returns to the archive index, not previous in-page sections.
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function(a){
    a.addEventListener('click', function(e){
      var hash = a.getAttribute('href');
      if (!hash || hash.length <= 1) return;
      var target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', hash);
    });
  });

  // Highlight the current section in the TOC as the reader scrolls.
  var headings = Array.prototype.slice.call(document.querySelectorAll('.prose h2[id]'));
  var links = {};
  Array.prototype.forEach.call(document.querySelectorAll('.toc a[href^="#"]'), function(a){
    links[a.hash.slice(1)] = a;
  });
  if (!headings.length) return;
  var THRESHOLD = 120;
  var current = null;
  function update(){
    var activeId = headings[0].id;
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top - THRESHOLD <= 0) activeId = headings[i].id;
      else break;
    }
    if (activeId === current) return;
    current = activeId;
    for (var id in links) links[id].classList.toggle('active', id === activeId);
  }
  var raf = 0;
  function onScroll(){ if (!raf) raf = requestAnimationFrame(function(){ raf = 0; update(); }); }
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
</script>` : ""}
</body>
</html>
`;
}

// ---------- io ----------

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

const minifyOpts = {
  collapseWhitespace: true,
  conservativeCollapse: true, // preserve a single space between inline text — avoids gluing adjacent <a>/<span> together
  removeComments: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true,
};

const minifyHtml = (html) => minify(html, minifyOpts);

async function build() {
  const issues = loadIssues();
  if (issues.length === 0) {
    console.error("No issues found in roundups/.");
    process.exit(1);
  }

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(issuesDir, { recursive: true });
  copyDir(assetsDir, path.join(outDir, "assets"));

  fs.writeFileSync(path.join(outDir, "index.html"), await minifyHtml(renderIndex(issues)), "utf8");

  // Issues sorted newest-first; prev = older issue, next = newer issue.
  for (let i = 0; i < issues.length; i++) {
    const iss = issues[i];
    const newer = i > 0 ? issues[i - 1] : null;
    const older = i < issues.length - 1 ? issues[i + 1] : null;
    fs.writeFileSync(
      path.join(issuesDir, `${iss.slug}.html`),
      await minifyHtml(renderIssue(iss, older, newer)),
      "utf8",
    );
  }

  // Tiny .nojekyll marker so GH Pages doesn't try to Jekyll-process the output.
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "", "utf8");

  console.log(`Built ${issues.length} issues + index → docs/`);
}

build();
