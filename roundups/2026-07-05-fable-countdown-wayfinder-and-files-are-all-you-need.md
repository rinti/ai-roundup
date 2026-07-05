---
title: "Fable's 48-Hour Countdown, Pocock's /wayfinder & Files Are All You Need"
date: "2026-07-05"
summary: "With the July 7 subscription cliff now **two days away**, the timeline splits between people burning through their last Fable tokens and Thariq reassuring everyone it *\"will return as soon as capacity allows.\"* Matt Pocock shipped **/wayfinder** — a meta-skill that's let him run ~100 grilling/prototyping/research sessions in four days planning an entire course — and opened a debate on whether PRDs and research files belong in git at all. Simon Willison published his **June 2026 newsletter**, released **llm-coding-agent 0.1a0** (a Claude Code-style agent built on his LLM library), and shared DSPy-powered research on evaluating Datasette Agent's SQL prompts. Jerry Liu crystallized the week's filesystem-as-primitive thesis in LlamaIndex's **\"Files Are All You Need\"** — arguing agents are converging on files for context, search, skills, and memory. OpenClaw hit **100,000 issues and PRs in 222 days** with zero VC funding. And Karpathy's Sequoia Ascent video — *\"From Vibe Coding to Agentic Engineering\"* — continues to be the reference talk of the moment."
tags:
  - The 48-Hour Fable Countdown
  - Pocock's Skill Stack Evolves
  - Simon Willison's Week of Releases
  - Files Are All You Need
  - OpenClaw Hits 100K
  - Karpathy's Defining Talk
  - Also Worth a Look
---

# AI Roundup — July 5, 2026

## The 48-Hour Fable Countdown

The July 7 subscription cliff is now two days away, and the discourse has shifted from anger to strategy.

**The pricing picture.** After July 7, Fable 5 moves to usage-credit billing at [$10 per million input tokens and $50 per million output tokens](https://www.digitalapplied.com/blog/claude-fable-5-usage-credits-july-7-pricing-guide-2026) — exactly double Opus 4.8's rates. A [$2,000 daily redemption limit](https://www.digitalapplied.com/blog/claude-fable-5-usage-credits-july-7-pricing-guide-2026) and configurable monthly spending cap apply. Anthropic still hasn't published what "up to 50% of weekly usage limits" actually equals in tokens or dollars, which is fueling a [steady stream of frustration on Reddit and X](https://www.pcworld.com/article/3181897/claude-subscribers-are-furious-over-fables-new-restrictions.html).

**Thariq's reassurance, revisited.** His [July 3 statement](https://x.com/trq212/status/2072814903170408784) (**1.08M views**) — "we aim to restore Fable as a standard part of our subscriptions as soon as capacity allows" — remains the only official word. [Digital Trends](https://www.digitaltrends.com/computing/claude-fable-5-is-leaving-subscriptions-but-maybe-not-for-good/), [Bleeping Computer](https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/), and others picked up the story, all noting the same gap: no timeline, no capacity targets, no credit-to-dollar conversion. The community's weekend playbook: burn through the hard problems now, hand the implementation gruntwork to Sonnet 5 and GPT-5.5 after Tuesday.

**Theo's last-48-hours advice.** His [effort-level guide](https://x.com/theo/status/2073312248710496421) from yesterday is still circulating, and his Fable usage tips from earlier in the week remain the practitioner's consensus: [stick to "high" effort, use Codex for computer-use and verification](https://x.com/theo/status/2072481845363822914), and teach your CLAUDE.md to delegate. A follow-up video on the ["stop reading the code" debate](https://x.com/theo/status/2073291309423673462) is promised and should land soon.

## Pocock's Skill Stack Evolves

Matt Pocock has been quietly shipping a new generation of skills that move beyond coding into higher-level orchestration.

**The /wayfinder skill.** ["My new skill /wayfinder is letting me do stuff I've never considered trying"](https://x.com/mattpocockuk/status/2072716979195326905) — he's been using it to plan an entire course, running close to 100 separate grilling, prototyping, and research sessions in four days, all contributing to a central map that "grows as I learn more about the problem and shrinks as I find answers to questions." It [replaces /grill-with-docs in his stack](https://x.com/mattpocockuk/status/2072599827540578664) as an orchestrator on top of grilling. The [skill source is on GitHub](https://github.com/mattpocock/skills/tree/main/skills/in-progress/wayfinder) — it charts a route through a foggy problem by turning a loose idea into investigation tickets and resolving them one at a time.

**The /wizard skill.** Also recently shipped: [/wizard builds an interactive CLI](https://x.com/mattpocockuk/status/2072042214188847178) that walks a human through a manual procedure — setup, one-off migrations, state transitions — opening URLs, capturing values, and writing .env and GitHub Actions secrets.

**"AI coding assets don't belong in git."** A related provocation: ["There are a class of AI Coding assets that IMO don't really belong checked into git: PRDs, research files, decision maps, implementation plans"](https://x.com/mattpocockuk/status/2069698109492343101). The thread is an open question to the community on what alternatives people are using — and it cuts to the heart of the /wayfinder use case: these artifacts are ephemeral explorations, not source code.

## Simon Willison's Week of Releases

Simon had one of his most productive weeks in a while, and most of it landed right before the weekend.

**llm-coding-agent 0.1a0** ([released July 2](https://simonwillison.net/2026/Jul/2/llm-coding-agent/)). His LLM library has evolved into something more like an agent framework, and this is the proof: a Claude Code-style coding agent with tools for reading, editing files, and executing commands — built entirely on the LLM library. It's an experiment with Fable 5 that demonstrates how thin the gap between "CLI tool" and "agent harness" has become.

**DSPy + Datasette Agent research** ([July 2](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/)). He fired off an async research task in Claude Code for Web using Fable 5 to evaluate and improve the core system prompts Datasette Agent uses for read-only SQL queries. The harness: DSPy agents invoke Datasette Agent's actual tool implementations against a live in-process Datasette instance. It's a concrete example of using one agent framework to evaluate another.

**June 2026 newsletter** ([published July 3](https://simonwillison.net/2026/Jul/3/june-newsletter/)). Highlights include porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code and sqlite-utils 4.0rc1 adding migrations and nested transactions.

**The model-routing tip that won't die.** His [July 3 tip](https://x.com/simonw/status/2073117641020215566) (**227K views**) — tell Fable *"use your judgement to decide an appropriate lower power model and run that in a subagent"* — continues to be the most-discussed delegation pattern of the week and is now being [adopted as the default in multiple CLAUDE.md templates](https://simonwillison.net/2026/Jul/3/judgement/).

## Files Are All You Need

Jerry Liu crystallized what's been building all week in LlamaIndex's ["Files Are All You Need"](https://www.llamaindex.ai/blog/files-are-all-you-need) blog post — the thesis that coding agents like Claude Code and Cursor are converging on **filesystems as their core abstraction**.

The argument: agents are storing conversation histories in searchable files, using file-based retrieval with semantic search instead of traditional vector-store RAG, and defining skills as simple files rather than complex MCP tool registrations. ["Building 'RAG 2.0' is just making Claude Code running over your filesystem"](https://x.com/jerryjliu0/status/2000677592559706396) — you need to solve three things: virtualize the filesystem (AgentFS), parse unstructured docs (LlamaParse), and provide retrieval tools that feel like `grep`, `find`, and `read`.

LlamaIndex's concrete output: a [Retrieval Harness](https://www.llamaindex.ai/blog/did-filesystem-tools-kill-vector-search) that exposes a persistent data pipeline with tools akin to filesystem operations — semantic/keyword search, regex grep, file search, read — that can be plugged into any agent. The benchmark result that matters: [filesystem tools outperform traditional vector search](https://www.llamaindex.ai/blog/did-filesystem-tools-kill-vector-search) on retrieval quality when agents can iterate.

## OpenClaw Hits 100K

Peter Steinberger's OpenClaw — the AI personal assistant that became one of the fastest-growing open-source projects in history — [hit 100,000 issues and pull requests in 222 days](https://releasebot.io/updates/openclaw). The entire milestone came from unpaid contributors across every timezone, with zero VC funding. The project is [moving to a foundation](https://steipete.me/posts/2026/openclaw) to preserve independence, even as Steinberger himself now works at OpenAI.

In the same week, OpenClaw shipped [GPT-5.6 support](https://releasebot.io/updates/openclaw) and expanded Telegram Codex pairing. The pace is staggering: issue #100,000 was a community bug report, not a milestone PR.

## Karpathy's Defining Talk

Andrej Karpathy's [Sequoia Ascent 2026 fireside chat](https://x.com/karpathy/status/2049903821095354523) — ["From Vibe Coding to Agentic Engineering"](https://www.youtube.com/watch?v=96jN2OCOfLs) with Stephanie Zhan — continues to be the reference talk everyone cites when explaining what changed.

The core framing: **Software 3.0** is here. Software 1.0 was explicit code; 2.0 was trained neural networks; 3.0 is prompting an LLM interpreter. The December 2025 inflection point is when generated chunks got large enough, coherent enough, and reliable enough that the workflow flipped from "80% manual, 20% agents" to the reverse. His [blog summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/) includes a cleaned-up transcript and a [29-minute video](https://www.youtube.com/watch?v=96jN2OCOfLs).

The line that stuck: **"I've never felt more behind as a programmer."** Not because the tools are hard to use — because correctly stringing them together is a new skill, and failing to do so "feels like a skill issue." It's the perfect companion piece to Geoffrey Litt's "understanding is the new bottleneck" thesis from AIE that dominated Thursday.

## Also Worth a Look

- **Armin Ronacher: harness matters.** His [observation](https://x.com/mitsuhiko/status/2072512908047892745) — "It's crazy how different fable feels in pi vs claude code" — is becoming a canonical reference for why the same model can feel like two different products. He also noted that ["Fable really likes its comments. Damn."](https://x.com/mitsuhiko/status/2073053722708410729) — a pet peeve for the minimal-agent-prompt school.

- **Boris Cherny's five archetypes** are still generating articles and discussion a week later. The taxonomy — [Prototyper, Builder, Sweeper, Grower, Maintainer](https://x.com/bcherny/status/2071379474277613732) — got [Yahoo coverage](https://tech.yahoo.com/ai/claude/articles/5-job-archetypes-future-according-141801028.html), a [detailed blog response](https://paddo.dev/blog/the-archetype-under-the-title/), and the sharpest pushback: roles should shift with the project lifecycle, not be pinned to people. Cherny [agreed](https://youmind.com/landing/x-viral-articles/claude-code-creator-ai-archetypes).

- **Claude Code v2.1.201** shipped July 3 — the [335th release](https://www.gradually.ai/en/changelogs/claude-code/).

- **Sonnet 5 is now the free-tier default.** As of July 1, every Free and Pro Claude user gets [Sonnet 5 as the default model](https://llm-stats.com/llm-updates) — the most agentic Sonnet yet, performing close to Opus 4.8 on many tasks, with introductory pricing through August 31 that undercuts Sonnet 4.6.

- **GPT-5.6 Sol, Terra & Luna** were [previewed June 26](https://openai.com/index/previewing-gpt-5-6-sol/) and are expected to go GA in the coming weeks. Sol is priced at $5/$30 per million tokens and introduces "ultra mode" — subagent orchestration built into the model itself.
