---
title: "Haiku 5.5, Claude Code Mods, Astra Bottleneck & T3 Overhaul"
date: "2026-10-08"
summary: "Anthropic shipped **Claude Haiku 5.5** — Simon Willison's deep-dive finds it price-matched to GPT-6 Luna under 100K tokens but 5× pricier above, with a sneaky 1.25× tokenizer tax and mandatory reasoning. Boris Cherny launched **Claude Code Mods**, a TypeScript plugin system that lets you customize behavior, UI, and features — Anthropic itself built /diff and AGENTS.md support as mods. Theo's **T3 Code** merged a major overhaul with `delegate_task` cross-provider child agents, Pi support, thread forking, and mid-thread model switching. Armin Ronacher's viral **GPT-6 Astra experiment** — 35 hours, $1,200, 75K lines, zero usable output — continues to drive debate about long-horizon agent reliability. Karpathy argues the real bottleneck is now **reading AI output**, proposing ASD-STE100 controlled English, diagrams, and interactive HTML. Swyx's **workhorse coding agent poll** (2K+ votes) is live, and LlamaIndex shipped **OpenDocRouter** plus an 'OCR is Dead' manifesto. OpenClaw hit beta 2026.10.1, Codex shipped `instant_interrupt`, and Willison & Vincent are hosting a **Birds of a Feather on Agentic Engineering** in SF on Oct 14."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Models & Benchmarks
  - Deep Reads
  - Tools & Releases
  - Events
---

# AI Roundup — October 8, 2026

## Claude Code & Anthropic Updates

### Claude Code gets Mods: the plugin system is here

[Boris Cherny announced](https://x.com/bcherny/status/2105756563302723721) that Claude Code now supports **mods** — small TypeScript or JavaScript modules that hook into the tool to change how it behaves, customize the UI, and swap in your own features. Mods ship inside plugins, installed with `/plugin` in the CLI or desktop app. The [official ClaudeDevs post](https://x.com/ClaudeDevs/status/2105721434807083061) (880K+ views) confirms you can write them in a few lines of TypeScript or have Claude build one for you.

What can a mod do? Rewrite prompts, block or retry tool calls, approve or deny permissions, redact secrets from tool output, or change what you see in the UI. Anthropic says it used mods internally to build features like `/diff` and AGENTS.md support. Mods run with full machine access — same as Claude Code itself — so only install from sources you trust. Shipped in Claude Code 2.1.287+, mods are on by default.

Cherny's framing: "Each person works differently, so there's no reason why everyone should have an identical Claude experience. Make Claude your own, and share mods as plugins so others can use them too."

### Claude Haiku 5.5 drops — Willison runs the numbers

Anthropic released **Claude Haiku 5.5** on October 7. [Simon Willison's deep-dive](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/) is the most useful analysis out there.

**Pricing:** Haiku 5.5 exactly matches GPT-6 Luna at $0.10 input / $0.50 output — but only up to 100K tokens. Past that, the price jumps 5× to $0.50/$2.50, while Luna's increase doesn't kick in until 272K tokens. Willison's verdict: "If your workloads fit in 100,000 tokens, Haiku is the same price as Luna and reports higher benchmark scores. Above 100,000 tokens, Luna looks like a much better deal."

**Hidden tokenizer tax:** Willison's Claude Token Counter tool shows the same long prompt uses ~1.25× as many tokens with Haiku 5.5 versus Haiku 4.5. The new tokenizer is less generous, so the real cost is higher than the sticker price suggests.

**Reasoning:** Haiku 5.5 can't turn off reasoning — it defaults to medium effort. His pelican-on-a-bicycle SVG test: low effort took 7 seconds at 0.09¢; max effort took 5 minutes 9 seconds at 3.38¢. Terminal-Bench 4.0 scores reportedly jumped from 0% (Haiku 4.5) to 39.2%.

**API credits for subscribers:** Max 5× users get $100/month, Max 20× get $200, Team subscribers get up to $500 pooled. Willison called it "really generous."

### Karpathy joins Anthropic's pretraining team

[Andrej Karpathy announced](https://x.com/karpathy) on May 19 that he joined Anthropic to lead a pretraining research team — a notable career shift from his independent work and Eureka Labs. Wikipedia's entry confirms the move.

## Agentic Coding & Agent Harnesses

### T3 Code merges a major overhaul

[Theo](https://x.com/theo) merged a large T3 Code overhaul around October 2. The headline feature is `delegate_task`, which lets an agent start **child agents on any provider or model**. Other additions: Pi support, auto-resume when rate limits reset, thread forking, and switching provider or model mid-thread. Subagents appear as child threads in a lineage view, and an ACP Registry lets you add third-party agents. Cursor now runs on the official Cursor SDK instead of the CLI.

Theo warned beforehand that the nightly would be a big rewrite and cut one more stable release so daily drivers have "somewhere to retreat to." He [called T3 Code](https://x.com/theo/status/2079752200243560688) "one of the best agentic code tools right now" and said the end-to-end vision is "so close to realized."

Maturity note: version was still v0.0.34 on a nightly cadence as of August. Stability claims vary by source — treat it as alpha-quality.

### Swyx's workhorse coding agent poll (2K+ votes, still open)

[Swyx asked](https://x.com/swyx): "What is your default/workhorse coding agent today, Oct 2026?" Options: Anthropic Claude Code, OpenAI Codex, Devin/Factory/Amp/Pi/OC, and Other. The poll had **2,022 votes with 7 days remaining** when last cached. Results aren't final yet — check the [original post](https://x.com/swyx) for the tally. A related monthly effort, the [Coding Agent Survey](https://codingagentsurvey.org/), publishes broader usage data.

### OpenClaw ships beta 2026.10.1

[Peter Steinberger's](https://x.com/steipete) OpenClaw — GitHub's most-starred software project — pushed **beta 2026.10.1-beta.2** on October 7–8. Steinberger's [refactor PR](https://github.com/openclaw/openclaw/pull/163963) (Oct 3) simplifies agent-runtime internals, and a [follow-up fix](https://github.com/openclaw/openclaw/pull/166597) (Oct 7) changes how follow-up messages queue behind image-generation tasks. The beta builds on the **OpenClaw 2.0** major release from August 30.

Steinberger is now at OpenAI building personal AI agents and is speaking at SF Tech Week (Oct 5), Cloudflare Global Connect (Oct 19–22), and TEDAI Vienna (Oct 28–30).

### Codex ships instant_interrupt

[Thibault Sottiaux](https://x.com/thsottiaux) reported that default output speed for GPT-6 Astra and GPT-6.1 Sol through subscriptions rose from ~30 to ~50 tokens/second. Codex 0.159.0 also shipped opt-in `instant_interrupt`, letting new input steer the agent during model responses or long-running calls. A [benchmark leaderboard](https://www.morphllm.com/best-ai-coding-agents-2026) updated October 6 ranks Claude Code (with Opus 5.5) highest on score, Codex (with Sol) lowest on cost per solved task.

### Pstack gets cross-platform ports

Lauren Tan's [pstack](https://x.com/poteto) — the workflow plugin that makes coding agents follow an engineering process — now has community ports for Claude Code, Codex, Copilot, Pi, and Gemini. The central `/poteto-mode` command routes work to the right playbook (bug fix, feature, refactor, investigation, perf) and enforces runtime verification. Her [pstack guide thread](https://x.com/poteto/status/2094457600259842065) from late August hit 1.2M views.

## Models & Benchmarks

### Karpathy: the bottleneck is reading AI output

[Karpathy posted](https://x.com/karpathy) on October 2 that generating more AI text makes the bottleneck worse — humans still have to check what was produced. His proposed fix is a **ladder of output formats** ranked by how fast a human can understand them:

1. **ASD-STE100** — controlled English originally designed for aircraft maintenance manuals. Ask the model for "80% of the way" and daily output gets dramatically more scannable.
2. **Diagrams** — for relationships that linear text can't show clearly.
3. **Interactive HTML pages** — the biggest readability jump for the least setup.
4. **Explainer videos** — the top rung.

The thread drew wide secondary coverage. His earlier argument (March 2026) that "humans are now the bottleneck in AI research with easy-to-measure results" provides the theoretical backdrop.

## Deep Reads

### Armin Ronacher: Astra for Coding — $1,200, 35 hours, zero usable output

[Armin Ronacher's](https://x.com/mitsuhiko) September essay **["Astra for Coding: Why Are We Doing This Again?"](https://lucumr.pocoo.org/2026/9/7/astra-why/)** continues generating discussion. He ran GPT-6 Astra unattended for 35 hours on a project to add virtual threads and lexical scoping to Python. The model managed its own context, took notes in an agent-notes directory, and spawned sub-agents. Result: ~$1,200 in API costs, 79 commits, 75K lines of code — and "nothing of value."

Two recurring problems: the model kept defaulting to generating Python for file operations even when working in TypeScript/C, and a compressed "codegolf" style leaked into committed code. Unit tests were 10% more token-efficient in mangled form than after formatting with ruff. Ronacher's explanation: training rewards task completion and token efficiency without penalizing code quality.

He [posted on X](https://x.com/mitsuhiko/status/2097746938804216135): "Astra is really, really cool but I cannot currently trust it for my present day engineering."

Also still relevant: his April survey of 10 teams found 7/10 reported non-engineers vibeslopping code that became [impossible to work with](https://x.com/mitsuhiko/status/2040023781083676789) (27.7K views).

### Simon Willison: 2026 in LLMs (so far)

Willison's September 27 keynote write-up **["2026 in LLMs (so far)"](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/)** — originally the closing keynote at WeAreDevelopers World Congress North America — remains essential reading for catching up on the year's trajectory.

### Matt Pocock: skills, sandcastle, and AI Hero

Pocock's [skills collection](https://claude.com/marketplace/plugins/mattpocock-skills) on the Claude marketplace now has 21 composable agent skills (grilling sessions, TDD, code review, domain modelling). The most recent **AI Hero** episode (Oct 3) is a live session with Poteto (Lauren Tan) on shipping pull requests with AI agents. His GitHub lists **sandcastle** — an orchestrator for sandboxed coding agents in TypeScript — and **dictionary-of-ai-coding**, which explains AI coding jargon in plain English.

## Tools & Releases

### LlamaIndex: OpenDocRouter and "OCR is Dead"

[LlamaIndex](https://www.llamaindex.ai/blog) shipped two posts on October 7:

- **"Introducing OpenDocRouter: every document model under one API"** — a unified API for document processing models.
- **"OCR is Dead. Long Live Agentic OCR."** — argues traditional OCR is being replaced by agentic document understanding.

### Simon Willison: llm-mistral 0.16

Willison released [llm-mistral 0.16](https://simonwillison.net/tags/llm/) on October 6, adding reasoning-model support for Mistral Large 4.

### Lee Robinson: from Vercel VP to SpaceXAI ML

[Lee Robinson](https://x.com/leerob) — formerly Vercel's VP of Product and briefly at Cursor — is now doing ML at SpaceXAI, focused on model training and how AI models communicate and exercise judgment. His earlier advice still resonates: "We gotta tune the AI hype-fluencers out of the feed. There's no AI silver bullet for coding."

## Events

### Birds of a Feather: Agentic Engineering — SF, Oct 14

[Simon Willison and Jesse Vincent](https://simonwillison.net/2026/Sep/23/bof-agentic-engineering/) are hosting an evening session in San Francisco on **October 14** for people building with coding agents. It's an informal show-and-tell focused on unusual projects, odd experiments, and unfinished work that hasn't been discussed publicly — not a venue for product pitches. Registration is through Luma; [Jesse Vincent's blog post](https://blog.fsck.com/2026/09/22/agentic-dev-in-sf/) has details.
