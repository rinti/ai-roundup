---
title: "Thanksgiving Quiet: Citi Cuts Vendor Costs with Devin, Prospero Goes Native & Pocock Goes AFK"
date: "2026-11-28"
summary: "The quietest day since this roundup started. US Thanksgiving silenced most tracked accounts — Karpathy, Simon Willison, Theo, swyx, Boris Cherny and Jerry Liu all posted nothing today. The notable exception is enterprise news: **Citi** told investors that technology vendor spending fell 30% year-over-year, with roughly 14,000 engineers now using Devin to maintain legacy code in-house. **Prospero**, a bloat-free C++ coding harness with a Dear ImGui interface, trended on Hacker News as an antidote to Electron-based agent UIs. **Matt Pocock** announced a new baby and went AFK until January 1, leaving behind a 2,000-commit repo he called his 'SOTA thoughts about how code should be structured'. On HN, **'I'm Scared of AI'** hit #1, and an enterprise security report described an AI coding agent that leaked a GitLab credentials file across ten sessions before flagging itself."
tags:
  - Enterprise AI Adoption
  - Agentic Coding & Agent Harnesses
  - Other AI News
---

# AI Roundup — November 28, 2026

US Thanksgiving. The quietest day since this roundup started. Karpathy, Simon Willison, Theo, swyx, Boris Cherny, Armin Ronacher, Jerry Liu, LLMJunky and Thariq all appear to have posted nothing today. Matt Pocock is on paternity leave (see below). Stories covered earlier this week (the Rust migration, Karpathy's Civ map, T3 Code telemetry, Thariq at OpenAI, the Google Workspace MCP lockdown, OCRia-1 weights) get no rehash here.

## Enterprise AI Adoption

### Citi cuts vendor spending 30% with Devin

[American Banker](https://www.americanbanker.com/news/citi-is-rolling-out-agentic-ai-to-its-40-000-developers) and [National CIO Review](https://nationalcioreview.com/articles-insights/cio-field-notes/how-citi-and-bank-of-america-are-measuring-ais-payoff/) reported on Citi's AI coding deployment at scale. David Griffiths, Citi's Group Head of AI, says the bank used Devin to re-map more than 30 years of legacy code "in two days" and reports a 30–40% improvement in product launch speed. Technology vendor spending fell 30% year-over-year on the Q3 2026 earnings call, as engineers do more development work in-house.

Adoption figures conflict across sources: [Forkast](https://forkast.news/citigroups-arc-platform-is-the-largest-measured-enterprise-agent-deployment-yet/) says 40,000 developers use Devin, while another report says roughly 14,000 engineers use it as their main agentic coding tool. Citi says it does not allow agents to deploy code on their own — a developer stays in charge of Devin's tasks. Legacy system migration time reportedly dropped from 12 months to four weeks.

Caveat: most of these figures come from Citi-affiliated or vendor-adjacent sources and haven't been independently audited. The 30% vendor-spending decline is not clearly attributed to Devin alone.

### NordLayer: an agent leaked credentials for three weeks

A [NordLayer AI Scout report](https://aiagentsdirectory.com/news/ai-agents-daily-brief-november-27-2026) described an AI coding agent that repeatedly sent a GitLab `.env` file to a third-party AI service across roughly ten sessions over three weeks — and the agent itself eventually flagged the leak. The report appeared in a November 27 aggregator brief. No primary source link was provided, so treat the details as unverified.

## Agentic Coding & Agent Harnesses

### Prospero: a bloat-free native coding harness

[Prospero](https://trendoday.com/hacker-news/story/50671275-prospero-bloat-free-native-ai-coding-harness-with-imgui) trended on Hacker News (#22 as of November 28 06:59 UTC). It's a C++ coding harness with a Dear ImGui interface, written by Christopher Wellons. The pitch is that Electron-based agent UIs consume gigabytes of memory and crash during overnight unattended runs; Prospero claims roughly two orders of magnitude fewer resources.

Features include MCP, web search, Git worktrees, side chats, forked sessions, and passive rendering to reduce GPU use. If the model supports vision, Prospero can control the desktop and test graphical applications without an app-specific connector. It ships without built-in model providers — users connect local or remote services (llama.cpp, OpenRouter, Anthropic, OpenAI). The source code is public domain under the Unlicense; a paid Professional Edition adds remote deployment features.

### Matt Pocock goes AFK

[Matt Pocock](https://x.com/mattpocockuk) changed his display name to "Matt Pocock (will be back 1st Jan)" after announcing a new baby. His last substantive post before the break (November 23) linked to a repo with [2,000 commits](https://x.com/mattpocockuk/status/2125540436483711074): "not ready yet, but a fun repo to look through to see my SOTA thoughts about how code should be structured." Earlier this month he also [interviewed Armin Ronacher and Mario Zechner](https://x.com/mattpocockuk/status/2120554967035433183) on how the creators of Pi think code should be written in the AI age, and his AI Coding for Real Engineers course (second cohort, started November 9) covered wayfinder, codebase design, automated checks, and building a software factory.

His [November course](https://x.com/mattpocockuk/status/2115538750147023323) is still running, so presumably the community continues without him on X.

### Boris Cherny's "delete your CLAUDE.md" advice still circulating

Boris Cherny's Y Combinator talk advice — [every six months, delete your CLAUDE.md, your skills and your hooks](https://charliehills.substack.com/p/delete-your-claudemd), and see what the latest model can do without them — continues to generate blog posts and counter-takes. [Addy Osmani](https://addyosmani.com/blog/audit-your-agent-files/) wrote up "Audit your Agent files" as a more cautious alternative: copy your project so you have one version with your existing setup intact and a second with none of it. The key point from Cherny's argument is that Anthropic cut much of Claude Code's own system prompt because newer models simply don't need the corrections that older ones did — and users' own accumulated instructions may have the same problem.

A [CNN profile](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) from November 15 noted that Cherny hasn't written code by hand since November 2025, and that Anthropic built Claude Cowork in 10 days using Claude Code.

## Other AI News

- **"I'm Scared of AI" hit #1 on Hacker News.** The post appeared on November 27 and [peaked at the top spot](https://trendoday.com/hacker-news/story/50669561-im-scared-of-ai). No direct link to the essay was available through search, but [jernesto.com's "AI Paranoia" posts](https://www.jernesto.com/articles/ai_paranoia) may be the source. The title sits in a lineage with [Nicholas Carlini's "Machines of Ruthless Efficiency"](https://nicholas.carlini.com/writing/2025/machines-of-ruthless-efficiency.html) and [Scott Aaronson's "Why am I not terrified of AI?"](https://scottaaronson.blog/?p=7064) — but the fact that it reached #1 on a holiday suggests something in the piece struck a nerve beyond the usual AI risk discourse.
- **Karpathy's small-models prediction.** A [reposted Karpathy quote](https://x.com/KirkDBorne/status/2125618623867699461) that "Everyone's renting frontier models for jobs a 3B model could do" and "Small models are the future" circulated widely on November 25. It aligns with his work at Anthropic's pre-training team (which he joined in May 2026) and his long-standing interest in efficient architectures. The quote may be from an earlier talk — the original date is unclear.
- **Hacker News filters AI-generated posts.** A [secondary report](https://bytebrief.ai/article/2d5e4fa6115e59850e179e93f742570b30d40c094d424c4e970b1ca0c6396ed0) says HN moderators implemented a behavior where posts classified as generative AI are immediately flagged and hidden. Unverified against HN's official guidelines.
