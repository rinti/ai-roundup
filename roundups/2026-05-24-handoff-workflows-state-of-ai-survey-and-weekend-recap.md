---
title: "Handoff Workflows, State of AI Survey & Weekend Recap"
date: "2026-05-24"
summary: "A quieter Saturday wraps up a monster week: **Matt Pocock** shipped `/handoff` — a context-preservation skill for switching between agents — and is now composing multi-skill chains (`/grill-with-docs → /handoff → /prototype → /handoff → /to-prd`). The **State of AI for Web Devs 2026** survey landed with a headline stat: **56% of respondent code is now AI-generated**, up from 28% last year, with Claude the most-paid-for model. **Jerry Liu** argued the scaffolding era is over and context engineering is the new moat. Meanwhile the week's big threads keep simmering: Mitsuhiko's scope-control rant, DHH's GPT-5.5-over-Opus verdict, and the MCP stateless RC all crossed into weekend discussion. Plus **Karpathy** and **Boris Cherny** recaps from Sequoia AI Ascent are still generating takes, and **Thariq** (trq212) made Claude Code edit videos via Remotion."
tags:
  - Agentic Coding & Agent Harnesses
  - Model & Tool Releases
  - Industry & Ecosystem
---

# AI Roundup — May 24, 2026

## Agentic Coding & Agent Harnesses

**Matt Pocock ships `/handoff` and chains skills end-to-end.** The new skill compacts the current conversation into a handoff document so another agent can pick up seamlessly — an alternative to `/compact` that preserves more structured context. Pocock's workflow now looks like this: `/grill-with-docs` → "Oh, I need to prototype some UI" → `/handoff` to `/prototype` → create prototype → `/handoff` back to grilling session → `/to-prd` → `/to-issues` → `npm run sandcastle` → `/improve-codebase-architecture`. *"I love this shit."* The skill is part of his [skills repo](https://github.com/mattpocock/skills) which crossed 53K GitHub stars and is installable via `npx skills add mattpocock/skills --skill handoff`. [/handoff deep-dive](https://x.com/mattpocockuk/status/2057411932710166657) · [Full workflow tweet](https://x.com/mattpocockuk/status/2052042499053453330).

**Thariq (trq212) demoed Claude Code as a video editor.** Using [Remotion](https://www.remotion.dev/) — React for programmatic video — every video in the demo thread was "vibe coded by Claude Code." Thariq shared his `.claude` config and the setup has since been picked up by Remotion's official docs. The framing: Claude Code is essentially a small game engine — it constructs scene graphs with React, layouts elements, rasterizes them to a 2D screen, and generates ANSI sequences with a ~16ms frame budget. [Thread](https://x.com/trq212/status/1947706205172068624) · [.claude config](https://x.com/trq212/status/1947706215624282590).

**Boris Cherny's Sequoia AI Ascent talk keeps generating takes.** The creator of Claude Code told Sequoia partner Lauren Reeder he hasn't written a single line of code by hand since November 2025 — 100% AI-generated. He ships dozens of PRs a day from his phone. His thesis: *coding is effectively solved*, and the new competitive frontier is how fast you can restructure organizational processes around these AI capabilities. He runs 5 parallel Claude Code instances in separate git checkouts, exclusively on Opus 4.5 with thinking. [Video](https://www.youtube.com/watch?v=SlGRN8jh2RI) · [HN discussion](https://news.ycombinator.com/item?id=48050402).

**Karpathy's "Software 3.0" framework still resonating.** From his Sequoia AI Ascent fireside chat: Software 1.0 = code written by humans, Software 2.0 = neural networks trained with data, Software 3.0 = software programmed through prompts, context, agents, tools, memory, and verification. Key quote: *"Don't only ask 'What existing workflow can AI speed up?' — also ask 'What information transformation was impossible before, but is now natural?'"* His MenuGen example — an app that renders food images from a menu photo — became obsolete overnight when Gemini could do the same thing natively. He also admitted to feeling *"more behind as a programmer"* than ever. [Blog recap](https://karpathy.bearblog.dev/sequoia-ascent-2026/) · [Tweet thread](https://x.com/karpathy/status/2049903821095354523).

## Model & Tool Releases

**State of AI for Web Devs 2026 survey drops — 56% AI-generated code.** The [survey](https://2026.stateofai.dev/en-US) ran April 8–May 8 with 7,258 responses. Headline numbers: the share of AI-generated code jumped from 28% in 2025 to 56% in 2026, with the 75%+ segment growing fastest. Claude is the model developers pay for most, despite ChatGPT leading in raw popularity. Individual AI spend is up significantly year-over-year as labs raise prices. **Theo** noted that over half of respondents watch his videos. [Survey results](https://2026.stateofai.dev/en-US) · [Theo's reaction](https://x.com/theo/status/1912883664007930314).

**Simon Willison's Datasette Agent gets plugin ecosystem.** Following [Wednesday's alpha release](https://simonwillison.net/2026/May/21/datasette-agent/), Willison shipped `datasette-agent-charts` (0.1a2) and `datasette-agent-sprites` (0.1a0) — demonstrating the plugin-extensible architecture. The agent answers questions about SQLite databases conversationally, supports hundreds of tool-calling models, and runs as a browser app. When compared to "Claude Code + SQLite," Willison was candid: *"Claude Code + SQLite is hard to beat one-on-one!"* — Datasette Agent's edge is multi-model support and the existing Datasette plugin ecosystem. [Live demo](https://agent.datasette.io/).

**Jerry Liu: the scaffolding era is over, context is the new moat.** The LlamaIndex CEO's thesis is generating industry discussion: agent loops are now capable enough that the competitive advantage shifts entirely to context quality — curating and structuring the data fed into models. *"Whether you use OpenAI Codex or Claude Code doesn't really matter. The thing that they all need is context."* LlamaIndex is pivoting hard toward document OCR and agentic document processing. Separately, Liu has been pushing the distinction between **context engineering** (what data to feed) and **workflow engineering** (how to structure agent tasks) — arguing the latter is under-discussed. [VentureBeat article](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives) · [Workflow engineering tweet](https://x.com/jerryjliu0/status/1952173718563910003).

## Industry & Ecosystem

**Weekend echoes from a monster week.** Friday's threads are still active in mentions:

- **Mitsuhiko's scope-control rant** (13.8K views) about GPT-5.5 producing a 300-line diff for a 10-line change sparked the best meta-thread on agent restraint in weeks. The emerging consensus: *"the gap between 'correct code' and 'minimal correct edit' is where the real taste lives."* [Thread](https://x.com/mitsuhiko/status/2057914670653038883).

- **DHH declared GPT-5.5 has overtaken Opus 4.7** for complex agent work (225K views, 3,151 likes). Worth pairing with Mitsuhiko's complaint — same model, opposite verdicts, depending on whether you prize raw capability or restraint. [Thread](https://x.com/dhh/status/2057906669158309913).

- **MCP 2026-07-28 RC went stateless** — no handshake, no session id, any request can hit any server instance (561K views). The cost: sampling is gone. Mitsuhiko's reaction: *"Finally. I asked for this back in March last year!"* [Thread](https://x.com/dsp_/status/2057780712187580924).

- **swyx's Kakuna** — a hardening-only skill suite — shipped alongside a 16-hour, 103-commit experiment that turned a fragile MVP into a production-ready codebase without changing functionality. [Announcement](https://x.com/swyx/status/2057876022553690327).

**Steipete ships imsg 0.6 + 0.7 at OpenAI.** Peter Steinberger continues to build side projects alongside his OpenAI agent work: private API bridge, watch/history reliability fixes, better chat and account diagnostics. Sam Altman personally replied to a steipete complaint with *"let's fix this right away, much too low"* — the kind of direct CEO-to-builder exchange that keeps making OpenAI's culture visible. [imsg release](https://x.com/steipete/status/2051905175355351440) · [Altman reply](https://x.com/sama/status/2051052567522848793).

**Simon Willison highlighted Shopify's River agent system.** Shopify's internal coding agent lives in Slack and can only be used in public channels — so employees learn by watching each other's interactions. In a 30-day period, 5,938 Shopify employees worked with River across 4,450 Slack channels; it opened 1,870 PRs in one week, authoring about 1 in 8 merged PRs in Shopify's main monorepo. Willison compared it to Midjourney's Discord-only launch: public usage as a teaching mechanism. [Thread](https://x.com/simonw/status/2053529689122328947) · [Blog post](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/).

## Security Corner

**GitHub/Nx Console breach aftermath.** The May 18 supply-chain attack via a trojanized Nx Console VS Code extension (live on the marketplace for just 18 minutes) exfiltrated ~3,800 internal GitHub repositories. The attack chain started with compromised TanStack npm packages, which gave TeamPCP push access to the nrwl/nx repo and VS Code Marketplace credentials. The extension had 2.2M installations; actual installs of the malicious version may exceed 6,000. Notably, the attack specifically targeted Claude Code configuration files alongside GitHub tokens, npm credentials, and AWS keys — a sign that `.claude` directories are becoming high-value targets. [Hacker News coverage](https://thehackernews.com/2026/05/github-internal-repositories-breached.html) · [StepSecurity analysis](https://www.stepsecurity.io/blog/nx-console-vs-code-extension-compromised).
