---
title: "T3 Code Ships 250 PRs, Theo Ranks Every Model & Armin Says Hard Languages Are Easy Now"
date: "2026-08-27"
summary: "Theo's T3 Code merges **250+ PRs in two weeks** adding subagent observability and ghostty terminal rendering, then he ranks every AI model — **Fable 5 alone in S-tier**, Sol for everything else, Gemini demoted for token waste. Armin Ronacher argues LLMs have **decoupled language familiarity from language choice**, making Rust and Zig the new defaults. Boris Cherny says AI bugs have shifted from off-by-ones to **system design and missing context**. Simon Willison ships **LLM 0.32** with reasoning traces and server-side tools. Karpathy spent $10 getting Claude Opus to build a **3D Lord of the Rings world** in 5,500 lines. swyx open-sources his AI engineering book and builds Forge agents that run while he sleeps. Matt Pocock's AI Hero skills hit 25. Plus: IBM ships Granite 4.2 under Apache 2.0 and the MCP roadmap pivots to agent identity."
tags:
  - Agentic Coding & Tools
  - Model Rankings & Releases
  - AI Engineering & Workflows
  - Other Interesting Stuff
---

# AI Roundup — August 27, 2026

What the people I follow are actually talking about this week: Theo ships a monster T3 Code update and delivers a brutal model ranking, Armin makes the case that LLMs killed the language learning curve, Boris says AI bugs have evolved, and Karpathy builds Middle-earth for $10.

*Note: X/Nitter mirrors were killed by cease-and-desists this week (see [yesterday's roundup](2026-08-26-jalapeno-is-fast-x-kills-the-mirrors-no-neutral-harness.md)), so sourcing shifted to web search, cached posts, and blogs.*

## Agentic Coding & Tools

### Theo: T3 Code merges 250+ PRs in two weeks

The biggest update yet for [T3 Code](https://github.com/pingdotgg/t3code), Theo's open-source GUI for managing AI coding agents. In a [post on X](https://x.com/theo/status/2085639979011891445), Theo outlined the highlights from 250+ merged PRs:

- **Subagent and workflow observability** — you can now see what your agents spawn, solving a key visibility gap when running parallel agents
- **libghostty-vt as the terminal renderer** — replacing the previous terminal backend
- **Thread and content search**, configurable fonts and sizes
- **QR pairing and T3 Connect GA**
- Major memory reductions and reliability fixes across desktop and mobile

Theo also [declared the terminal dead for AI coding](https://x.com/theo/status/2059596131676586216), arguing that managing parallel AI agents in a terminal is "structurally wrong." He reports going from 3-4 PRs per week to **20 PRs a day** after switching to a GUI-first workflow. The [Better Stack guide to T3 Code](https://betterstack.com/community/guides/ai/t3-code/) is a good overview if you haven't tried it.

### Theo ranks every AI model — Fable 5 alone at the top

In a [new video and tier list](https://x.com/theo/status/2091281511924502940), Theo ranked every relevant AI model for coding. The headline: **Fable 5 is the sole S-tier model**, the only one where you can delegate entire tasks and review finished PRs rather than micromanaging.

- **S-tier**: Fable 5 — "use this for code you care about merging"
- **A-tier**: OpenAI's 5.6 Sol (the other model capable of autonomous work, but more expensive), Luna (Theo's most-used by call volume for title generation and categorization), DeepSeek V4 Flash
- **"Google tier"**: All Gemini models demoted — Gemini 3.7 Flash looks cheap at $0.75/M input tokens but burns **73,000 tokens** to complete a basic task vs. Sol's 28,000

His recommendation: Fable for code, Sol for everything else, the rest for narrow niches. Token efficiency, not raw model capability, is now the differentiator. [Full video summary](https://finance.biggo.com/podcast/d89ed76c1e8f2f00).

### Matt Pocock: 25 agent skills for AI Hero

Matt Pocock's [AI Hero skills](https://github.com/ai-hero-dev) project now has **25 skills** (18 engineering, 7 productivity) — small, composable, editable agent skills designed for production engineering, not vibe coding. His standout skill is `/grill-me`, which interrogates a plan before an agent writes any code.

Pocock's core argument, [presented at AI Engineer Europe 2026](https://ai.engineer/speakers/matt-pocock): faster code generation makes engineering judgment **more** valuable. Weak architecture, ambiguous requirements, and poor tests undermine automated development just as they undermine human teams. His workflow chains requirements interrogation, PRDs, dependency-aware vertical slices, autonomous implementation, TDD, isolated review, and human QA. [Skills overview](https://www.aihero.dev/).

He also made a distinction worth repeating: ["My skills vs superpowers: Superpowers gives the agent superpowers. My skills give you superpowers."](https://x.com/mattpocockuk/status/2077789613691699629)

### Boris Cherny: AI bugs have evolved

Boris Cherny (head of Claude Code at Anthropic) [posted on X](https://x.com/bcherny/status/2087284684103537011): "LLMs still produce bugs, but those bugs are different than what they used to be. It's less off-by-ones and more about **system design, UI usability, missing broader context**." Some coding is solved, but not all. His suggestion: use adversarial testing — prompt an AI coding system to "adversarial test every edge case in an iOS simulator." [Benzinga coverage](https://www.benzinga.com/markets/tech/26/08/61134309/anthropics-boris-cherny-says-ai-coding-bugs-are-getting-harder-less-off-by-ones-more-system-design-problems).

Related context: In a [Lenny's Newsletter interview](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens), Cherny said he hasn't handwritten a line of code in eight months but manages massive fleets of AI agents daily. He also [replied to Karpathy](https://x.com/bcherny/status/2015979257038831967) about the Claude Code team hiring mostly generalists with a mix of senior and junior engineers.

### swyx: Forge agents and the open-sourced book

swyx [started building Forge agents](https://x.com/swyx/status/2083654369095156219) — every repository gets its own agent in [SmolForge](https://forge.smol.ai/), his agent-native git remote with built-in CI/CD, site hosting, and AI services. He's been [running them at night while he sleeps](https://x.com/swyx/status/2085507281349931367), using a `/goal` command that only works during "sleepytime." SmolForge opened for the first 100 alpha users.

He also **open-sourced his complete AI engineering book** on August 18 — available to read online with source code for everyone to use, share, and improve. [swyx.io](https://swyx.io/).

## AI Engineering & Workflows

### Armin Ronacher: "Fast and Hard Code" — LLMs killed the language learning curve

The most thought-provoking blog post of the week. Armin Ronacher (creator of Flask, now at Sentry) published ["Fast and Hard Code"](https://lucumr.pocoo.org/2026/8/22/fast-hard-code/) on August 22, arguing that **LLMs have decoupled language familiarity from language choice**.

The core thesis: "programming is solved now" is a meme, but it captures something real — the act of familiarizing yourself with a language no longer matters the way it used to, and some friction that mattered for humans doesn't matter for agents. This means language choice is increasingly driven by **performance aspirations and marketing** rather than developer expertise, leading to a surge in adoption of "hard" languages like **Rust and Zig** by developers who previously wouldn't have chosen them.

Beyond language choice, LLMs are unlocking previously gatekept technical domains — **DWARF, eBPF, custom network stacks, cryptography** — for a broader set of developers. [Zeli summary](https://zeli.app/story/49406285). Also cross-posted on [mitsuhiko.spicytakes.org](https://mitsuhiko.spicytakes.org/post/2026-08-22-fast-hard-code).

### Simon Willison: LLM 0.32 — the biggest release since launch

Simon Willison shipped [LLM 0.32](https://simonwillison.net/2026/Aug/4/llm/) on August 4 and [0.32.1](https://simonwillison.net/2026/Aug/21/llm/) on August 21, calling it the most significant release since the project launched. Key features:

- **Reasoning traces** streamed to stderr
- **OpenAI Responses API** support for interleaved reasoning
- **Server-side provider tools**: OpenAI models get WebSearch and CodeInterpreter; Claude models get WebSearch, WebFetch, CodeExecution, and AnthropicMCP
- **Content-addressable SQLite log store** — smarter logging redesign
- New llm-anthropic plugin with substantial updates

He also wrote about [Paul Dix's million-line AI rewrite](https://simonwillison.net/2026/Aug/26/paul-dix/) on August 26 — AI writing a million lines of code and refining it into shipping software: "If you can build a verification system and give proper direction, AI can produce a highly complex, highly sophisticated piece of software." He continued posting about [Qwen 3.8 27B](https://simonwillison.net/) running locally on a DGX Spark, drawing pelicans.

### Peter Steinberger: OpenClaw and OpenAI

Peter Steinberger, creator of **OpenClaw** (the most-starred software repo on GitHub with 346k+ stars), has been at OpenAI since February 2026 building next-gen personal agents. He was [announced as a YC Startup School 2026 speaker](https://x.com/ycombinator/status/2062942526856941994). OpenClaw transitioned to an independent, OpenAI-backed foundation — the code remains free and community-driven. His [ai-agents repository](https://github.com/steipete?tab=repositories) and blog at [steipete.me](https://steipete.me/) have been actively updated through August.

### Karpathy: $10 Lord of the Rings in 3D

Andrej Karpathy (now on Anthropic's pretraining team since May) tested Claude Opus by giving it the opening paragraph of The Lord of the Rings, a large token budget, and a request to create a Three.js rendering. The model worked autonomously for **~2 hours** and produced **5,500 lines of code** to procedurally generate a 3D world. Total cost: about **$10**. The model placed and animated objects on its own but made mistakes because it could only check its own video output through screenshots.

Karpathy's take: AI systems are entering a phase where they can take on complex creative tasks beyond traditional prompt-based experiments. He considers it "more of a vibe check than a hard benchmark" but sees potential for cheap, custom game worlds built on demand. [Benzinga coverage](https://www.benzinga.com/markets/tech/26/08/60861644/andrej-karpathy-says-ai-has-moved-beyond-simple-prompts-after-claude-opus-builds-3d-lord-of-the-rings-world).

## Model Releases & Industry

### IBM Granite 4.2 — open reasoning models under Apache 2.0

IBM released [Granite 4.2](https://www.marktechpost.com/2026/08/25/ibm-releases-granite-4-2-bringing-native-reasoning-and-agentic-rl-to-open-enterprise-models/) on August 25 — a family of **3B, 8B, and 30B** parameter open reasoning models. Unlike earlier Granite releases (instruction-following assistants), Granite 4.2 is built around explicit reasoning: every model can emit a chain of thought before answering, with a thinking/non-thinking switch and a low-effort mode for easy questions. Behind SOTA but **Apache 2.0 licensed** and steadily improving. [explainx.ai overview](https://explainx.ai/blog/ibm-granite-4-2-open-reasoning-models-august-2026).

### Qwen3.8-Flash-Next previews Qwen4 architecture

Alibaba shipped [Qwen3.8-Flash-Next](https://www.unite.ai/qwen3-8-flash-next-previews-qwen4-architecture-with-6b-active-parameters/) on August 26, an open-weight experimental model previewing the Qwen4 architecture: **125B total parameters, only 6B active per token**. Targeting "ultimate cost efficiency." Meanwhile, Qwen3.8-27B continues to impress the local AI crowd — [described as possibly the most important local AI release of 2026](https://medium.com/@rosgluk/qwen-3-8-27b-is-coming-and-it-could-be-the-most-important-local-ai-release-of-2026-c1cf381d5292), delivering near-Opus-class agentic coding on 24GB VRAM.

### MCP roadmap pivots to agent identity and progressive discovery

The [updated MCP roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) outlines five priorities: agentic messaging primitives, HTTP-native transport, **agent identity and enterprise security**, improved result-handling, and **progressive tool discovery** (servers reveal tools gradually instead of loading hundreds into context upfront). The agent identity push came after the browser-based "click approve" model proved inadequate for autonomous agent workloads. [API Evangelist analysis](https://apievangelist.com/2026/08/24/the-mcp-roadmap-is-an-api-roadmap/) frames it as "an API roadmap" — which is exactly right.

## Other Interesting Stuff

- **80% of developers say AI coding feels more like dependence than advantage** — a Coddy Developer Survey covered by ZDNet found a striking sentiment gap between usage and satisfaction
- The [AI Agents News weekly roundup](https://aiagentstore.ai/ai-agent-news/this-week) for August 26 covers Claude Code ranked #1 for depth of hooks/subagents/workflows, GPT-5.6 Sol leading Terminal-Bench 2.1 at 89.5% (Opus 5 at 89.1%)
- The [EU AI Act Article 50 transparency duties](https://aiweekly.co/ai-news-today) took effect August 2, with penalties reaching 3% of global turnover
