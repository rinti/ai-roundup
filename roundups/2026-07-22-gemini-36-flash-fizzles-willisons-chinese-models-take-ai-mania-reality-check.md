---
title: "Gemini 3.6 Flash Fizzles, Willison's Chinese Models Take & the AI Mania Reality Check"
date: "2026-07-22"
summary: "Google drops **Gemini 3.6 Flash** alongside 3.5 Flash-Lite and a government-only Cyber model — and early hands-on reactions are brutal (\"genuinely the worst results\"). Simon Willison shares Ben Thompson's **\"Who's Afraid of Chinese Models?\"** piece arguing the US should lean into fair-use distillation rather than trying to block it, and his **\"AI Mania\" link post** resurfaces Nik Suresh's anecdotes of executives who've never used ChatGPT writing AI strategies for $2B+ orgs. Meanwhile yesterday's big threads keep rolling: Theo's **Missing Opus theory** gains traction, Matt Pocock's **150K \"smart zone\"** advice spawns practical follow-ups, and Armin Ronacher's **\"Never Enough\" essay** about Silicon Valley's fear-of-falling-behind pathology keeps circulating. Jerry Liu announces a **loop engineering dinner series** in SF, and Claude Code ships emoji shortcode autocomplete (the update nobody asked for but everyone will use)."
tags:
  - "Model Wars: Gemini 3.6 Flash"
  - AI Industry & Policy
  - Agentic Coding & Loop Engineering
  - Continuing Threads
  - Tools & Releases
---

# AI Roundup — July 22, 2026

## Model Wars: Gemini 3.6 Flash

### Google launches three models — gets roasted on one of them

Google surprised everyone on July 21 by [dropping Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/) — three models instead of the long-awaited 3.5 Pro, which was promised at I/O for June and still hasn't shipped ([Bloomberg reported](https://xenospectrum.com/en/google-gemini-flash-models-pro-delay/) it's being held back over internal coding benchmark shortfalls).

**Gemini 3.6 Flash** is positioned as Google's workhorse model at $1.50/$7.50 per million tokens (down from 3.5 Flash's $9/M output), uses 17% fewer output tokens, and finally moves the knowledge cutoff from January 2025 to March 2026. On paper, a solid incremental upgrade.

In practice, early reactions are rough. [Community testing](https://wccftech.com/google-just-released-gemini-3-6-flash-and-it-might-be-its-worst-model-to-date/) described "very fast inference but genuinely the worst results" on frontend-generation and spatial-reasoning prompts. On the [Artificial Analysis Intelligence Index](https://kie.ai/blog/gemini-3-6-flash-vs-claude) it scored 50 — below Meta Spark 1.1, GLM-5.2, GPT-5.6 Luna, Sonnet 5, Grok 4.5, and GPT-5.6 Terra. The reaction split predictably: builders welcomed the price cut, but the missing flagship Pro model drew the loudest criticism.

**3.5 Flash-Lite** ($0.30/$2.50 per million tokens) is the cheapest model in the tier, aimed at high-volume low-complexity tasks. **3.5 Flash Cyber** is a limited-access model fine-tuned for cybersecurity vulnerability scanning, offered only to governments and trusted partners.

The elephant in the room: where is Gemini 3.5 Pro? Google teased Gemini 4 in the same announcement, which feels like changing the subject.

### Moonshot's Kimi K3 supply crunch

[Moonshot AI suspended new Kimi K3 subscriptions](https://www.buildfastwithai.com/blogs/ai-news-today-july-21-2026) because demand exceeded serving capacity, days after the model topped a major coding leaderboard. The open weights release is promised for July 27, which should ease the bottleneck once others can host it.

## AI Industry & Policy

### Simon Willison: "Who's Afraid of Chinese Models?"

Willison [shared Ben Thompson's Stratechery piece](https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/) (July 20) with what amounts to a policy proposal: the US should pass a law making data collection for model training explicit fair use **and** barring terms of service that forbid distillation for US companies. Thompson's argument: stopping distillation is nearly impossible, and the US should lean into a copyright policy that ensures what labs learn fuels further innovation rather than trying to lock it down. The piece also addresses the [hypocrisy of labs outlawing distillation](https://daringfireball.net/linked/2026/07/20/thompson-chinese-models-distillation) against their models while having trained on unlicensed data themselves.

### "AI Mania Is Eviscerating Global Decision-Making"

Willison's July 19 link post [surfaced Nik Suresh's collection of anecdotes](https://simonwillison.net/2026/Jul/19/ai-mania/) about how AI enthusiasm is warping corporate decision-making. Highlights from anonymous sources:
- An executive who had **never used ChatGPT or any AI tool** created the technical strategy for a $2B+ revenue organization, centered entirely around AI
- An engineer at a company with a **token leaderboard** reported rewriting codebases in different languages just to keep their job

This pairs nicely with Willison's [viral "AI employees" tweet](https://x.com/simonw/status/2075996740717871125): *"The idea of 'AI employees' feels so short-sighted to me — both disrespectful to humans and a complete misunderstanding of what these tools can do and how to best put them to work. You may as well start adding Excel spreadsheets to your org chart."*

### Amazon CloudWatch enters the agent metrics game

[Amazon CloudWatch launched Coding Agent Insights](https://www.buildfastwithai.com/blogs/ai-news-today-july-21-2026) (July 20) — dashboards showing engineering leaders how AI coding tools perform across their orgs. AWS says it collects telemetry from Claude Code through the Claude apps gateway, with support for Codex and GitHub Copilot as well. The arms race for "are our developers actually productive with these tools?" observability is now three-way (AWS, Greptile's data, Anthropic's own admin console tabs).

## Agentic Coding & Loop Engineering

### Jerry Liu: loop engineering dinner series in SF

Jerry Liu and Dex Horthy are hosting a [founder dinner series on "loop engineering"](https://x.com/jerryjliu0/status/2079250071451795883) in SF — context management, compaction, evals, human-in-the-loop handoffs. The term itself is bidding for vocabulary status, following swyx's "Loopcraft" keynote at AIEWF and steipete's viral "stop prompting, start designing loops" tweet that hit 5M views in June.

For context on the broader loop engineering movement: Armin Ronacher's ["The Coming Loop"](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) essay (June 23) remains the most thoughtful piece on the pattern — distinguishing between the agent-level loop inside coding agents and the harness-level loop outside them, and arguing the harness loop is where the real engineering is happening now.

### LlamaIndex's Retrieval Harness

Jerry Liu also [announced a comprehensive Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) for agentic retrieval — a persistent data pipeline that connects to data sources, indexes and updates knowledge bases, and exposes filesystem-like tools (semantic/keyword search, regex grep, file search, read). The [legal-kb reference app](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/) demonstrates the pattern in action. The framing: agentic retrieval is changing how retrieval-augmented applications are built, especially in domains like legal and fintech where agents need to autonomously navigate large, evolving knowledge bases.

### Boris Cherny's Steps of AI Adoption — still circulating

Cherny's [Steps of AI Adoption framework](https://x.com/bcherny/status/2077929379661844559) (July 16) keeps getting reshared — 251K+ views and climbing, with [Shelly Palmer](https://shellypalmer.com/2026/07/boris-chernys-steps-of-ai-adoption-a-roadmap/) and [LinkedIn](https://www.linkedin.com/posts/bcherny_i-talk-to-engineers-at-other-companies-every-activity-7483695059843043328-kEPH) (234 comments) driving the latest wave. The five maturity levels:

1. **Gated** (0 agents) — restricted access to AI
2. **Assisted** (~1 agent/dev) — high supervision
3. **Parallel** (~10 agents/dev) — AI codes, humans verify
4. **Supervised Autonomy** (~100 agents/dev) — AI verifies
5. **AI-Native** (1,000+ agents) — AI decides what work to do

Key insight: tokens alone don't move you forward — verification loops, auto mode, automated review, worktree isolation, routines, and cost monitoring do. Anthropic says they're at step 3 pushing toward 4.

## Continuing Threads

### Ronacher's "Never Enough" and "The Tower Keeps Rising"

Armin Ronacher's ["Never Enough"](https://dark.ronacher.eu/2026/7/21/never-enough/) essay from yesterday — prompted by the $550k/year couple where the husband handed off parenting to become his company's top AI user, and the founder who has Claude score her first dates for empathy — keeps circulating. The core: Silicon Valley's new crazy isn't rebellion, it's fear of falling behind. *"Every 'saved' hour is returned to a race with no finish line... Maybe we need the misfits who know when to stop."*

His earlier essay ["The Tower Keeps Rising"](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) (July 13) is also still getting traction on [Hacker News](https://news.ycombinator.com/item?id=48909785). The Bruegel's Tower of Babel metaphor: coding agents let engineers ship features in parallel without the coordination (PRs, review, interface negotiation) that used to keep the team's mental model in sync. *"Unlike Babel, construction does not stop when the shared language collapses. The tower does not fall, and so we do not notice what was lost. It just keeps rising."*

And his related quip: [*"In more than one way AI is giving crypto vibes lately."*](https://x.com/mitsuhiko/status/2079253442678198497)

### Theo's Missing Opus theory — day 2

Yesterday's biggest thread continues to draw engagement: [Theo's theory that Opus 5(.1) was meant to replace Fable 5](https://x.com/theo/status/2079322914089029930) for most dev work (377k views, 3.1k likes) — and that Fable's repeated extension deadlines were really Anthropic buying time to improve an underperforming Opus. The reply thread split into camps (capacity vs quality vs competitor-timing), and his [hour-long Fable 5 vs GPT-5.6 video](https://x.com/theo/status/2079368247150100674) introduced the "tool vs contractor" framing that's stuck with viewers.

### Matt Pocock: the 150K smart zone and plugin approval

Matt Pocock's [context window advice](https://x.com/mattpocockuk/status/2079150593524772864) (94k views) continues to generate practical follow-ups. His [Claude Code plugin has been approved](https://x.com/mattpocockuk/status/2079318617041035618) — a managed installation of his skills ships with the next release — and his upcoming course [uses a request logger to show raw payloads sent to Anthropic/OpenAI](https://x.com/mattpocockuk/status/2079193858190041399), instilling what he calls "context paranoia — every token counts."

Also notable: his [skills repo](https://github.com/mattpocock/skills) is now at 160K stars and 7.5M downloads, making it the most-installed personal skills repo in the Claude Code ecosystem.

## Tools & Releases

- **Claude Code v2.1.217** — [Emoji shortcode autocomplete](https://www.havoptic.com/tools/claude-code) in the prompt input, plus clearer transcript write warnings, tighter controls for subagents/budgets/background sessions, and a wave of fixes for updates, security, accessibility, resume flows, telemetry settings, and Windows stability.
- **Fable 5 pricing change** — Starting July 20, [Fable 5 on Max and Team Premium plans drops to 50% of limits](https://releasebot.io/updates/anthropic/claude-code). Pro and Team Standard users kept on usage credits with a one-time $100 credit.
- **Sonnet 5 reminder** — Claude Sonnet 5 (launched June 30) is now the default for Free/Pro plans at introductory pricing of $2/$10 per million tokens through August 31 (rising to $3/$15 after).
- **Simon Willison's tool factory** — Recent July tools: [sqlite-query-explainer](https://tools.simonwillison.net/) (July 18), [llm-cliche-highlighter](https://tools.simonwillison.net/) (July 17), [mermaid-ascii](https://tools.simonwillison.net/) (July 16), [claude-token-counter](https://tools.simonwillison.net/) (July 16). He also ported the Moebius 0.2B inpainting model to run in-browser via WebGPU.
- **Antares AI Code Scanning** — On Cisco's 500-entry benchmark, [scanned repos in ~1 hour for under $1](https://www.buildfastwithai.com/blogs/ai-news-today-july-21-2026) vs ~4.5 hours and $141 for GPT-5.5, running locally to keep source code out of cloud services.
- **Meta Muse Spark 1.1** — Agent-focused model with [1M-token context window, computer-use across desktop/browser/mobile, and parallel subagent delegation](https://www.buildfastwithai.com/blogs/ai-news-today-july-21-2026).
