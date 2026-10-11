---
title: "Karpathy's output-readability ladder, Armin Ronacher explains Codemode, AI Engineer NYC kicks off, Mistral Large 4 lands, swyx polls the coding-agent field"
date: "2026-10-11"
summary: "Andrej Karpathy posted an output-readability ladder — from ASD-STE100 controlled English through diagrams, interactive HTML and custom explainer videos — arguing we'll spend far more time understanding model output than prompting. Armin Ronacher published \"What is Codemode,\" explaining how Pi 1.0 lets models issue tool calls from sandboxed JavaScript instead of loading MCP servers into context. Simon Willison reviewed Claude Haiku 5.5 pricing (matching GPT-6 Luna at $0.10/$0.50 up to 100K tokens, then 5× above that) and shipped an llm plugin for OpenAI's new Decisions API. swyx ran a \"default coding agent\" poll ahead of the AI Engineer NYC conference (October 12–14). Mistral Large 4 entered public preview on October 6 — a ~1T-parameter MoE with ~49B active, targeting agentic coding. LlamaIndex launched OpenDocRouter, putting 10 document parsers behind one API. Matt Pocock's Sandcastle framework and AI Coding Cohort v2 continue to shape the AFK-agent workflow. Peter Steinberger, now at OpenAI building personal agents, updated CodexBar and spoke at SF Tech Week. Boris Cherny's viral TLA+/Lean formal-verification thread on the Claude Agent SDK keeps circulating. Python 3.15.0 shipped on October 9 after an extra RC for lazy-import blockers."
tags:
  - Karpathy's output-readability ladder
  - Armin Ronacher on Codemode
  - Simon Willison on Haiku 5.5 and Decisions API
  - swyx's coding-agent poll and AI Engineer NYC
  - Mistral Large 4
  - LlamaIndex OpenDocRouter
  - Agentic coding tooling
  - Other interesting stuff
---

# AI Roundup — October 11, 2026

Weekend edition. The AI Engineer NYC conference starts tomorrow, SF Tech Week just wrapped, and the week's most interesting thread was Karpathy arguing that *reading* AI output is now harder than *writing* prompts. Armin Ronacher explained what Codemode actually is, Simon Willison benchmarked Haiku 5.5 pricing, and Mistral dropped a trillion-parameter model aimed squarely at coding agents.

## Karpathy's output-readability ladder

Andrej Karpathy [posted a thread](https://x.com/karpathy/status/2105819303471976479) on October 2 that kept circulating all week: "We'll be spending a lot more time trying to understand the outputs of language models." He laid out a ladder of output formats, each rung making model output easier for humans to verify:

1. **ASD-STE100 controlled English** — an aviation-derived spec that limits vocabulary to ~900 words and enforces one action per sentence. Karpathy says he sometimes asks for "80% of the way to ASD-STE100" because the full spec is quite stringent.
2. **Diagrams** — visual structure helps pattern-match faster than prose.
3. **Interactive HTML pages** — clickable, explorable output.
4. **Custom explainer videos** — the format he's "most bullish on." Models generate bespoke animations explaining their own output.

The post got wide pickup. [Search Engine Journal covered it](https://www.searchenginejournal.com/karpathy-llm-aircraft-manual-writing/591813/) under "Make LLMs Write Like An Aircraft Manual." Critics [pointed out](https://gu-log.vercel.app/en/posts/en-mp-317-20261002-karpathy-llm-output-format-ladder/) that clearer presentation doesn't establish correctness — a well-rendered diagram of a wrong answer is still wrong. Another analysis noted that the ASD-STE100 cheat sheet attached to the post [inverts one dictionary rule](https://kgolubic.com/posts/asd-ste100-and-llms/).

**Context:** Karpathy [joined Anthropic's pretraining team](https://venturebeat.com/technology/andrej-karpathy-announces-hes-joining-anthropic) in May 2026, reporting to Nicholas Joseph. He's building a group focused on using Claude to accelerate pretraining research itself. In a [separate post](https://x.com/karpathy/status/2106806571321966793) on October 4 he noted that "99%+ of people who are now paying attention have been onboarded to anything related to AI in <1 year," which he finds confusing as an "AI dinosaur."

## Armin Ronacher explains Codemode

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) published ["What is Codemode"](https://lucumr.pocoo.org/2026/10/6/codemode/) on October 6. The post explains how Pi 1.0 added MCP support through a mechanism where the model issues tool calls from inside **sandboxed JavaScript** (QuickJS on a WASM runtime) rather than loading MCP servers into context.

Key points from the post and [HN discussion](https://news.ycombinator.com/item?id=49978333):
- The sandbox has no network, no filesystem, no timers, and limited memory.
- Ronacher credits Cloudflare for coining the "Codemode" term.
- Open problems: MCP servers don't yet target Codemode-aware harnesses, and durability, binary data, and smaller-model support remain unsolved.

He also [joked on X](https://x.com/mitsuhiko/status/2108583464664776951) (Oct 9) that "Python 3.15 is the first release where parts of the core team started to suffer AI psychosis" — the release notes apparently reference a vibecoded adventure game to explain new features. Python 3.15.0 itself [shipped October 9](https://python.org/downloads/release/python-3150/) after an extra release candidate (rc3) to fix last-minute lazy-import blockers.

## Simon Willison: Haiku 5.5 pricing and the Decisions API

Two posts from Simon Willison's blog this week:

**[Claude Haiku 5.5](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/)** (Oct 7) — Willison found that Haiku 5.5 exactly matches GPT-6 Luna pricing at **$0.10 input / $0.50 output per million tokens** up to 100K tokens. Above that threshold the price jumps 5× to $0.50/$2.50. He also measured that the same long prompt uses ~1.25× as many tokens with Haiku 5.5 compared to Haiku 4.5, so there's a hidden price increase on top of the sticker match. On the quality side, Haiku 5.5 is "far better at drawing pelicans riding bicycles."

**[llm-openai-decisions](https://simonwillison.net/2026/Oct/6/llm-openai-decisions/)** (Oct 6) — A new plugin connecting his `llm` CLI to OpenAI's Decisions API, which handles yes/no, multiple-choice, and scoring questions. He built it by having GPT-6 Astra read OpenAI's docs, using his existing `llm-typesafe` plugin as a template. The default model is `gpt-6-luna`, which accepts images as well as text.

On [Bluesky](https://bsky.app/profile/simonwillison.net), Willison is organizing an informal chat about agentic engineering in San Francisco on October 14. He also [asked on X](https://x.com/simonw) (Oct 9): "What's the best open-weight Mixture-of-Experts LLM for coding that fits in less than 60GB of RAM?" — a question that Mistral Large 4 might answer once the open weights drop.

## swyx's coding-agent poll and AI Engineer NYC

Ahead of the [AI Engineer NYC conference](https://ai.engineer/nyc) (October 12–14 at the Sheraton Times Square), swyx ran a poll on X (Oct 7) asking: **"What is your default/workhorse coding agent today, Oct 2026?"** with options including Claude Code and OpenAI Codex. The poll had ~3,180 votes when cached.

The conference itself starts tomorrow with hands-on workshops, followed by two days of keynotes and talks. Past editions have featured speakers from Anthropic, Google DeepMind, Cursor, OpenAI, and Meta.

On a [recent podcast](https://www.cognitiverevolution.ai/ai-am-a-level-we-shouldn-t-pass-notes-from-the-curve-tokens-vs-salaries-is-saas-cooked/) (recorded around Oct 6–7), swyx discussed why plugged-in engineers are in more demand than ever, and how agents are reshaping software development economics.

## Mistral Large 4 enters public preview

[Mistral Large 4](https://openrouter.ai/models/mistralai/mistral-large-4-0) launched October 6 as a public preview — a **~1 trillion parameter MoE** with ~49B active parameters, targeting software engineering and agentic workflows. Key details:

- **Context:** 512K+ tokens (some sources report up to 1M)
- **Self-reported benchmarks:** 61.7% on DeepSWE v1.1, 59.4% on SWE-Atlas-QnA, 28.3% on Terminal-Bench 4
- **Pricing:** Sale price of $0.68/$2.09 per million tokens (list: $1.36/$4.18)
- **Open weights:** Scheduled for public release by end of October 2026

The [See Through AI weekly roundup](https://seethroughai.substack.com/p/top-ai-news-of-the-week-32-october) notes that Mistral's combined Coding Agent Index score of 49.8% reportedly puts it ahead of DeepSeek.

## LlamaIndex launches OpenDocRouter

[OpenDocRouter](https://www.llamaindex.ai/blog/introducing-opendocrouter) launched October 7 as a hosted document-parsing platform putting **10 models** behind one API — converting PDFs and images to markdown. The lineup spans frontier APIs and open-source parsers, reportedly including Claude Opus 5.5, Gemini 3 Flash, GPT-6 Luna, and several open-source OCR models.

Each page runs as its own call with independent status and billing. Failed pages aren't charged. Pricing ranges from ~$0.86 to ~$48.82 per 1,000 pages depending on the model. Every model is scored on ParseBench for quality, cost, faithfulness, formatting, and grounding.

LlamaIndex also co-hosted **The Agent Economy Gala** during SF Tech Week on October 9 at The Redwood Room in San Francisco — a black-tie Gatsby-themed event with MongoDB as sponsor.

## Agentic coding tooling

**Matt Pocock** ([@mattpocockuk](https://x.com/mattpocockuk)) — His [Sandcastle framework](https://x.com/mattpocockuk/status/2039350619681554434) for orchestrating AFK coding agents continues to develop. It runs each agent in a Docker container with its own git worktree and supports Claude Code, Codex, and OpenCode. His [AI Coding Cohort v2](https://x.com/mattpocockuk/status/2056447804537741327) uses Sandcastle and supports any coding agent. GitHub shows recent updates to `sandcastle`, `ai-hero-cli` (Oct 9), and `course-video-manager` (Oct 10). His [AI coding workflow](https://x.com/mattpocockuk/status/2024874219662905676) runs: Idea → `/write-a-prd` → PRD → `/prd-to-issues` → Kanban Board → ralph.sh → Ralph Loop → Manual QA.

**Peter Steinberger** ([@steipete](https://x.com/steipete)) — Now at OpenAI [building next-gen personal agents](https://www.theregister.com/2026/02/16/open_ai_grabs_openclaw), he updated [CodexBar](https://github.com/steipete) (showing usage stats for Codex and Claude Code) on Oct 10. OpenClaw, which [passed 346K stars](https://x.com/ycombinator/status/2062942526856941994), has moved to a foundation. Steinberger spoke at the SF Tech Week opening fireside on Oct 5 and will be at TEDAI Vienna Oct 28–30. He [argued in June](https://x.com/steipete/status/2046199252430888878) that developers shouldn't be prompting agents anymore — they should design loops that prompt their agents.

**Boris Cherny** ([@bcherny](https://x.com/bcherny)) — His viral thread using Opus 5.5 for [formal verification of the Claude Agent SDK](https://explainx.ai/blog/boris-cherny-opus-5-5-lean-tla-formal-verification-sdk-2026) with Lean 4 and TLA+ continues to circulate. The reported numbers — 16 PRs, 24 bugs found, 1,529 theorems — come from a single secondary source and should be verified against his original post. He [ships 20–30 PRs a day](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) running 5 parallel Claude instances.

## Other interesting stuff

**Theo** ([@theo](https://x.com/theo)) — Promoted [T3 Code](https://x.com/theo/status/2086559870300676203) as "the AI dev tool for real dev work." In a recent conference talk he argued that AI enables individual developers to build across a wider product surface area than ever, and that devs should drop their "skeuomorphic" attachment to old workflows.

**@LLMJunky** (am.will) — Built [GooeyPi](https://x.com/LLMJunky), a GUI for the Pi family of agents and local models. Complained about the [normalization of $500 AI subscriptions](https://x.com/LLMJunky) (Sep 30). Attended [OpenAI DevDay](https://x.com/OpenAIDevs/status/2104990335588057458) (Sep 29).

**@trq212** (Thariq Shihipar) — Claude Code engineer whose analyses on Claude Code writing ~4% of all GitHub commits [became a reference point](https://pasqualepillitteri.it/en/news/3633/ai-x-twitter-accounts-to-follow-2026) for agent designers. No October posts found via search.

**Python 3.15.0** — [Released October 9](https://python.org/downloads/release/python-3150/) after three release candidates. Headline features: PEP 661 (sentinel built-in type), PEP 686 (UTF-8 default encoding), PEP 798 (unpacking in comprehensions), and a new Tachyon sampling profiler. macOS 27.0 users should hold off — tkinter apps like IDLE can hang.

**Coding agent leaderboard** — Per [Morph's October 2026 rankings](https://www.morphllm.com/best-ai-coding-agents-2026), Claude Code + Opus 5.5 leads Terminal-Bench 4.0 at 64.8%, with Sonnet 5.5 at 61.8%.

**SF Tech Week** wrapped October 5–11 with hundreds of AI events across San Francisco. Highlights included the Agent Economy Gala (Oct 9), Bots, Bagels & Brews (Oct 5), and the Steinberger fireside (Oct 5).
