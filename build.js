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
const SITE_URL = "https://ai-roundup.rinti.se";

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

// Render the summary on the index. Links are flattened to their text because the
// whole card is wrapped in <a class="entry-link"> and nested anchors get auto-unnested
// by the HTML parser (yanking the body out of the card and shattering the grid).
const summaryMd = new Marked({ gfm: true });
summaryMd.use({
  renderer: {
    link({ tokens }) {
      return this.parser.parseInline(tokens);
    },
  },
});
const renderSummary = (s) => summaryMd.parseInline(String(s || ""));

const truncateAtBoundary = (s, max) => {
  if (s.length <= max) return s;
  const slice = s.slice(0, max);
  const lastBreak = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("; "), slice.lastIndexOf(" — "));
  return (lastBreak > max * 0.6 ? slice.slice(0, lastBreak + 1) : slice) + "…";
};

// Flatten markdown to plain text for meta descriptions and feed summaries.
const stripMarkdown = (s) =>
  String(s || "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // [text](url) → text
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const metaDescription = (summary, max = 160) => truncateAtBoundary(stripMarkdown(summary), max);

// RFC 822 date for RSS (issues carry no time of day; publish time is 06:00 UTC by convention).
const rfc822 = (iso) => new Date(`${iso}T06:00:00Z`).toUTCString();

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

const baseHead = ({ title, description, assetsPrefix, canonicalPath, ogType = "website", publishedDate, jsonLd }) => `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${SITE_URL}${canonicalPath}">
<link rel="icon" href="${assetsPrefix}favicon.svg" type="image/svg+xml">
<link rel="alternate" type="application/rss+xml" title="${SITE_TITLE}" href="${SITE_URL}/feed.xml">
<meta property="og:site_name" content="${SITE_TITLE}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${SITE_URL}${canonicalPath}">
<meta property="og:image" content="${SITE_URL}/assets/og-card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">${publishedDate ? `
<meta property="article:published_time" content="${publishedDate}">` : ""}${jsonLd ? `
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
<link rel="preload" href="${assetsPrefix}fonts/fraunces-standard-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${assetsPrefix}fonts/fraunces-standard-italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${assetsPrefix}fonts/ibm-plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>
<style>${renderStyles(assetsPrefix)}</style>
</head>`;

function renderIndex(issues) {
  const rows = issues
    .map((iss) => {
      const g = formatDateGlyph(iss.date);
      const summarySnippet = renderSummary(truncateAtBoundary(iss.summary, 280));
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    description: SITE_TAGLINE,
    url: `${SITE_URL}/`,
  };

  return `${baseHead({
    title: `${SITE_TITLE} — ${SITE_TAGLINE.replace(/\.$/, "")}`,
    description: SITE_TAGLINE,
    assetsPrefix: "assets/",
    canonicalPath: "/",
    jsonLd,
  })}
<body class="page-index">
<div class="grain" aria-hidden="true"></div>
<header class="masthead">
  <div class="masthead-rule"></div>
  <h1 class="wordmark">AI Roundup</h1>
  <p class="tagline">${escapeHtml(SITE_TAGLINE)}</p>
  <p class="meta-line">
    <span class="meta-issue">№ ${issues.length}</span>
    <span class="meta-sep">·</span>
    <a class="external" href="https://github.com/rinti/ai-roundup" target="_blank" rel="noopener">Source on GitHub<span class="ext-mark" aria-hidden="true">↗</span></a>
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
  <p>Compiled daily by an unattended agent. Source on <a class="external" href="https://github.com/rinti/ai-roundup" target="_blank" rel="noopener">GitHub<span class="ext-mark" aria-hidden="true">↗</span></a>. Subscribe via <a href="feed.xml">RSS</a>.</p>
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

  const description = metaDescription(iss.summary);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: iss.title,
    description,
    datePublished: iss.date,
    url: `${SITE_URL}/issues/${iss.slug}.html`,
    image: `${SITE_URL}/assets/og-card.png`,
    author: { "@type": "Organization", name: SITE_TITLE, url: `${SITE_URL}/` },
    publisher: { "@type": "Organization", name: SITE_TITLE, url: `${SITE_URL}/` },
  };

  return `${baseHead({
    title: `${iss.title} — ${SITE_TITLE}`,
    description,
    assetsPrefix: "../assets/",
    canonicalPath: `/issues/${iss.slug}.html`,
    ogType: "article",
    publishedDate: iss.date,
    jsonLd,
  })}
<body class="page-issue">
<div class="grain" aria-hidden="true"></div>

<nav class="topbar">
  <a class="back-link" href="/"><span aria-hidden="true">←</span> Back to archive</a>
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
  <p><a class="back-link" href="/"><span aria-hidden="true">←</span> Back to archive</a></p>
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

const feedMd = new Marked({ gfm: true });

function renderFeed(issues) {
  const items = issues.slice(0, 20).map((iss) => {
    const url = `${SITE_URL}/issues/${iss.slug}.html`;
    // Summary rendered to inline HTML (links kept), then XML-escaped for the description element.
    const descriptionHtml = feedMd.parseInline(String(iss.summary || ""));
    return `    <item>
      <title>${escapeHtml(iss.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(iss.date)}</pubDate>
      <description>${escapeHtml(descriptionHtml)}</description>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeHtml(SITE_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeHtml(SITE_TAGLINE)}</description>
    <language>en</language>
    <lastBuildDate>${rfc822(issues[0]?.date)}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>
`;
}

function render404() {
  // GH Pages serves 404.html for missing paths at any depth, so asset URLs must be absolute.
  return `${baseHead({
    title: `Page not found — ${SITE_TITLE}`,
    description: SITE_TAGLINE,
    assetsPrefix: "/assets/",
    canonicalPath: "/404.html",
  })}
<body class="page-index">
<div class="grain" aria-hidden="true"></div>
<header class="masthead">
  <div class="masthead-rule"></div>
  <h1 class="wordmark">404</h1>
  <p class="tagline">This dispatch doesn't exist — or was never filed.</p>
  <p class="meta-line"><a class="back-link" href="/"><span aria-hidden="true">←</span> Back to the archive</a></p>
  <div class="masthead-rule"></div>
</header>
</body>
</html>
`;
}

function renderSitemap(issues) {
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: issues[0]?.date },
    ...issues.map((iss) => ({ loc: `${SITE_URL}/issues/${iss.slug}.html`, lastmod: iss.date })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
}

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

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

  fs.writeFileSync(path.join(outDir, "sitemap.xml"), renderSitemap(issues), "utf8");
  fs.writeFileSync(path.join(outDir, "feed.xml"), renderFeed(issues), "utf8");
  fs.writeFileSync(path.join(outDir, "404.html"), await minifyHtml(render404()), "utf8");
  fs.writeFileSync(path.join(outDir, "robots.txt"), ROBOTS_TXT, "utf8");

  // Tiny .nojekyll marker so GH Pages doesn't try to Jekyll-process the output.
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "", "utf8");

  console.log(`Built ${issues.length} issues + index → docs/`);
}

build();
