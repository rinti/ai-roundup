---
title: "Slack Code Ships, Terminals Under Fire & Frameworks Declared Dead"
date: "2026-08-23"
summary: "Slack Code went live on August 21, embedding Claude Code, Devin, Copilot, and Vercel's agent directly into dedicated Slack channels — tag an agent from any conversation and the whole team watches the plan, diffs, and live preview in shared tabs. The anti-terminal chorus grew louder: Theo released his \"I'm Done with Terminals\" episode arguing GUIs are structurally superior for managing parallel agents (claims 3-4 PRs/week → 20/day), and Simon Willison boosted Thomas Ptacek's \"Stop Making TUIs\" essay, noting that coding agents have reduced the cost of a usable GUI to near zero. Armin Ronacher published \"Better Models: Worse Tools,\" documenting how Opus 4.8 and Sonnet 5 hallucinate invented tool-schema fields that older models never did — a post-training regression he blames on Claude Code's harness creating overly strong schema priors. Jerry Liu told Conor Bronsdon the framework era LlamaIndex helped create is over: agent harnesses ate the abstraction layer, and context quality is the new moat. Claude Code shipped a release with data-residency cost-estimate premiums, plugin sync, Alpine/musl support, and a /claude-api Python 1.x migration helper. Also: Matt Pocock's 25-skill overview video, swyx open-sourcing The Coding Career Handbook, DeepSeek V4 Pro 0813 going GA at 1.6T parameters, Cloudflare Kitesurf (an agent-first browser at 1/7th Chromium's memory), Meta Muse Code entering beta with parallel sub-agents, Google Antigravity escaping into VS Code/JetBrains/Zed, and Firecrawl's Developer Index putting 70M+ repos at agents' fingertips."
tags:
  - Agentic Coding & the Terminal Wars
  - Claude Code & Anthropic Updates
  - Frameworks vs Harnesses
  - New Tools & Infrastructure
  - Models & Releases
---

# AI Roundup — August 23, 2026

## Agentic Coding & the Terminal Wars

### Slack Code: AI agents move into team channels

[Slack announced Slack Code](https://slack.com/blog/news/slack-code-channels-for-agents) on August 21 — dedicated channels where AI coding agents live alongside your team. Launch partners include **Claude Code, Devin, GitHub Copilot, and Vercel's agent**. Tag an agent from any conversation and it spins up a code channel with four tabs: conversation, plan, code diffs, and a live preview. The whole team can watch, steer, and approve before changes ship. Available on every Slack plan; you bring your own agent subscription. [Computerworld's take](https://www.computerworld.com/article/4212446/new-slack-code-turns-ai-coding-into-a-team-activity.html) frames it as turning AI coding from a solo terminal activity into a team sport. [Developer docs](https://docs.slack.dev/changelog/2026/08/20/slack-code/) detail the new Agent Sessions API updates.

### Theo: "I'm Done with Terminals"

Theo released a [video/podcast episode](https://finance.biggo.com/podcast/1e4bc1739e6c1fa0) arguing the terminal is "structurally wrong" for managing parallel AI agents. After going 8+ hours post-reboot without opening a terminal, he's convinced that purpose-built GUIs are the superior tool for agent management. He claims concrete workflow changes took him from **3-4 PRs/week to as many as 20 PRs/day**. This is his third piece this week in the "your setup isn't built for agents" arc, following the Mac filesystem rant. He's defending [T3 Code](https://x.com/theo/status/2030071716530245800), the open-source Electron app he built with Julius on top of Codex CLI, which recently added a ["settle" button sidebar](https://x.com/theo/status/2079892861689254129) — click it when you're done with a thread and it slides to the bottom, helping finish more tasks instead of letting them pile up.

### Simon Willison: Stop Making TUIs

Simon Willison [boosted](https://simonwillison.net/2026/Aug/21/stop-making-tuis/) Thomas Ptacek's essay "Stop Making TUIs" on August 21, highlighting the argument that coding agents have reduced the cost of getting a usable-enough GUI up and running to almost nothing. If your personal tool has a TUI, you're now doing extra work for a worse result. This pairs neatly with Theo's anti-terminal thesis above. Simon also [quoted Matt Webb](https://simonwillison.net/2026/Aug/21/matt-webb/) on a new opportunity for extensible software on the web, noting that LLMs radically lower the cost of authoring extensions.

### Simon Willison: ChatGPT search now uses site: at scale

From August 20: Simon [documented](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/) that ChatGPT Search started using the `site:` operator at scale on August 8, jumping from ~0.4% to ~17% of all fanout queries overnight — aligned with the GPT-5.6 rollout. [Promptwatch](https://promptwatch.com/data/chatgpt-site-operator-fanouts) is tracking this as part of the emerging **GEO** (Generative Engine Optimization) space — the chatbot equivalent of SEO. A follow-up noted ChatGPT also greatly reduced Reddit's presence in those searches.

## Claude Code & Anthropic Updates

### Claude Code release (August 22)

[Claude Code shipped updates](https://releasebot.io/updates/anthropic/claude-code) including:
- **Cost estimates** (`/cost`, status line, `--max-budget-usd`) now include the 1.1× US-only-inference premium for data-residency workspaces
- **Plugin sync**: plugins synced from claude.ai show as `name@synced`, work with `claude plugin enable/disable <name>@synced`, and never override same-named local plugins
- **Alpine/musl builds**: native image paste, clipboard, and audio-capture add-ons now load
- **`/claude-api` upgrade**: migrates Python projects from `anthropic` 0.x to 1.x
- Fullscreen renderer offer now appears on Bedrock, Vertex, Foundry and other previously excluded setups
- Default model setting, cross-session idle notifications, stronger macOS sandbox protections
- Improved auto mode, Remote Control, startup speed, and VS Code screen reader support

## Frameworks vs Harnesses

### Armin Ronacher: Better Models, Worse Tools

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) [published](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/) a detailed post (still actively discussed) documenting how newer Claude models hallucinate tool-schema fields. **Opus 4.8 and Sonnet 5** sometimes call Pi's edit tool with extra, invented fields in the `edits[]` array — keys like `requireUnique`, `matchCase`, and `oldText2` that don't exist in the schema. Older Claude models never did this. His diagnosis: post-training on Claude Code's own harness creates strong schema priors, causing "better" models to be actively worse for third-party tool builders. [Simon Willison linked it](https://simonwillison.net/2026/Jul/4/better-models-worse-tools/), calling it a regression worth watching. The thread on Bluesky is [still going](https://bsky.app/profile/mitsuhiko.at/post/3lrcwiqvz7c2b).

### Jerry Liu: The framework era is over

[Conor Bronsdon's interview thread](https://x.com/ConorBronsdon/status/2062224321381323218): "Jerry Liu built one of the most installed pieces of AI plumbing of the last three years. Then he sat down and told me the framework era he helped create is over." The agent harness ate the abstraction layer — the scaffolding developers once needed (indexing layers, query engines, retrieval pipelines) is collapsing. [VentureBeat's writeup](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives) frames it as "context is the new moat." LlamaIndex is pivoting to Document AI: LlamaParse v2 (multi-modal document understanding), LlamaSheets (spreadsheet-native AI extraction), and LlamaSplit (intelligent document chunking). Liu's broader point: the capability gap between open-weight and closed models has narrowed much faster than the pricing gap.

## New Tools & Infrastructure

### Cloudflare Kitesurf: a browser built for AI agents

[Cloudflare launched Kitesurf](https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/) in beta — a browser built from scratch for AI agents, running on Workers in V8 isolates. Uses **~1/7th the memory and ~1/3rd the CPU** of Chromium. Supports Chrome DevTools Protocol so existing Puppeteer/Playwright code works with a single parameter change (`browser=kitesurf`). Built on a modular stack: Blitz for rendering, Firefox's Stylo CSS parser, and the Rust-based Boa JS engine. [MarkTechPost's technical breakdown](https://www.marktechpost.com/2026/08/06/cloudflare-introduces-kitesurf-an-agent-first-web-browser-that-runs-entirely-in-v8-isolates-on-cloudflare-workers/) covers the design philosophy: managing context windows, token costs, and prompt injection defenses rather than tabs and themes.

### Firecrawl Developer Index: 70M+ repos for coding agents

[Firecrawl launched Developer Index](https://www.firecrawl.dev/blog/developer-index-launch), a searchable index of **70M+ repos, docs, and issues** built specifically for coding agents. It indexes READMEs, external documentation, issues, PRs, and OpenAPI specs with semantic retrieval and metadata filters, refreshed daily. Alongside it comes **DevDex**, an open benchmark of 1,179 developer-search queries so teams can measure how well any retrieval system supports real coding-agent work.

### Meta Muse Code enters beta

[Meta launched Muse Code](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/) on August 5 — a terminal coding agent powered by Muse Spark 1.2 (1.6T total parameters). Key differentiator: **parallel persistent sub-agents** that each run in isolated git worktrees. Installs with one shell command, runs OS sandbox by default. Pricing: $1.25/$4.25 per million tokens, or **$0.10/$0.20** if you let Meta train on your code. [Zuckerberg announced](https://www.explainx.ai/blog/meta-muse-code-coding-agent-muse-spark-1-2-launch-august-2026) on August 10 that Muse Spark 1.2's weights will be open-sourced.

### Google Antigravity escapes its IDE

[The New Stack reports](https://thenewstack.io/google-antigravity-ide-extensions/) Google's Antigravity AI coding agents now work inside **VS Code, JetBrains, and Zed** via extensions, with Gemini Enterprise giving admins budget and access controls. Developers can open agent conversations in a side panel, review inline diffs, and delegate multi-step engineering tasks without moving into the Antigravity 2.0 desktop app.

## Models & Releases

### DeepSeek V4 Pro 0813 goes GA

[DeepSeek V4 Pro 0813](https://api-docs.deepseek.com/news/news260813/) hit general availability on August 13, ending a preview period that started in April. **1.6 trillion total parameters, 49 billion active per token**, 1M context window, up to 384K output tokens. Benchmarks: 87.9 on Terminal Bench 2.1, 62.7 on DeepSWE, 61.5 on NL2Repo. [Notable change](https://qz.com/deepseek-v4-pro-official-launch-081326): introducing **peak and off-peak billing** from August 16, with off-peak rates at half price.

### Gemini 3.7 Flash

Google released [Gemini 3.7 Flash](https://www.morphllm.com/best-ai-coding-agents-2026) on August 13, calling it its most intelligent workhorse model for coding and AI agents at half the cost of 3.6 Flash. Now powers Gemini Spark in 160+ countries.

## People & Projects

### Matt Pocock: 25 skills in 10 minutes

Matt Pocock [posted](https://x.com/mattpocockuk/status/2088290952704151671) on August 14: "Just saw a comment saying that I've never made a proper overview of EVERY skill in my skills repo. I thought 'damn it, he's right.' So, here it is." The video (250k+ views) walks through all 25 skills — now past **83,900 GitHub stars**. He also announced an [AI Coding Crash Course](https://x.com/mattpocockuk/status/2085796061361078718), fully shipped and going on sale in 10 days, built around any harness plus his skills repo.

### swyx: The Coding Career Handbook goes open source

[swyx open-sourced](https://swyx.io/) The Coding Career Handbook on August 18 — the complete book is free to read online with source available for everyone to use, share, and improve under an open license. He continues to run [Latent Space](https://www.latent.space/) (the #1 AI Engineering podcast, 200K+ subscribers) and is working at Cognition, where integrating coding agents into his workflow led to realizations about purpose-fit knowledge management tools as a top trend for 2026.

### steipete: from OpenClaw to YC Startup School

Peter Steinberger ([@steipete](https://github.com/steipete)) was [announced](https://x.com/ycombinator/status/2062942526856941994) as a Y Combinator Startup School 2026 speaker. OpenClaw — his open-source AI agent that went from a weekend project to the most-starred software repo on GitHub — now sits at **381k+ stars**. He joined OpenAI in February to build the next generation of personal AI agents, with OpenClaw moving to an independent foundation. His [ai-agents repo](https://github.com/steipete) was updated as recently as August 21.

---

*Nitter was blocked by the network egress proxy again today; sourcing relied on web search, cached social media aggregators, and direct blog fetches where available.*
