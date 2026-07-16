I want you to scan the following accounts for interesting AI discussion, videos or news (within the last 24 hours, since this is a daily scheduled task. You can bend the rules on the 24 hours if there's still interesting discussions going on in a thread/topic older than 24 hours old). I'm mostly interested in agentic and code related AI stuff, but if there's other stuff add it as a separate section in the final file.

## Accounts to scan

https://nitter.net/mattpocockuk/
https://nitter.net/theo/
https://nitter.net/trq212/
https://nitter.net/LLMJunky/
https://nitter.net/mitsuhiko/
https://nitter.net/bcherny/
https://nitter.net/steipete/
https://nitter.net/swyx/
https://nitter.net/simonw/
https://nitter.net/karpathy/
https://nitter.net/jerryjliu0/
https://nitter.net/potetotes/
https://nitter.net/leerob/
https://nitter.net/thsottiaux/

## How to fetch data

### Step 1: Get recent posts via RSS (fast, parallel)

Use `curl` via Bash to fetch RSS feeds in parallel for all accounts. The RSS endpoint is the account URL + `/rss`, e.g.:

```
curl -s -L -A "Mozilla/5.0" "https://nitter.net/karpathy/rss"
```

This returns XML with recent posts, quoted tweets, and the author's own thread replies. WebFetch and direct `curl` requests for Nitter status pages often return empty content; use RSS for account scans and the helper below for thread pages.

### Step 2: Get thread discussions via the Nitter helper

RSS only gives posts by the account owner. To see replies and discussions from other people, use the local helper script to fetch server-rendered Nitter thread HTML with Safari TLS impersonation:

```
python3 scripts/fetch-nitter-thread.py "https://nitter.net/karpathy/status/2042334451611693415"
```

The helper prints the main post, visible replies, stats, x.com links, and a `Load more:` URL when Nitter has additional reply pages. For unusually important threads, fetch one extra page:

```
python3 scripts/fetch-nitter-thread.py --pages 2 "https://nitter.net/karpathy/status/2042334451611693415"
```

Do this for threads that look interesting/high-engagement based on the RSS data. Focus on threads with substantive discussion, not just hype replies.

Do not use Chrome MCP for thread reading. Direct `curl` of Nitter status pages often returns an empty 200 response; use the helper instead.

### Link format

When linking to posts in the report, use x.com URLs (not nitter), e.g.:
`https://x.com/karpathy/status/2042334451611693415`

## Output

When you find interesting threads please summarize them and also link to them. Link to relevant videos with a small description. Link to relevant news articles that might be linked with a short description and where you found it.

Create the report as `roundups/YYYY-MM-DD-title-as-a-slug.md` where the title should be somewhat descriptive of the data.

The file MUST start with a YAML front matter block. Example:

```yaml
---
title: "Anthropic ↔ SpaceX, Dreaming Lands & robobun Outpaces Jarred"
date: "2026-05-07"
summary: "One paragraph (can be long) summarizing the dispatch — used as the kicker on the issue page and as the entry summary on the archive index. Markdown emphasis (**bold**, *italic*) is fine."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
---
```

- `title` — the human title (no leading date).
- `date` — ISO date matching the filename. **Must be a quoted string** (`"2026-05-07"`), not unquoted — unquoted YAML dates get parsed as Date objects by the build script.
- `summary` — the kicker / index summary. The same kind of rich one-paragraph summary that previously went in the README's third column.
- `tags` — the H2 section names you'll use in the body. Keep them aligned with the section headings.

After the front matter block, write the report body as before — start with `# AI Roundup — Month D, YYYY` (or similar), then `## Section` headings.

Do NOT update README.md. The site is built automatically from the markdown files by `build.js` (run by GitHub Actions on push), so just commit the new `roundups/*.md` and push. Don't ask me for permission.
