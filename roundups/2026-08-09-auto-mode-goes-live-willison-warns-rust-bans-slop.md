---
title: "Auto Mode Goes Live, Willison Asks for Receipts, Rust Bans LLM Slop & the EU Wants Chatbots to Say Hello"
date: "2026-08-09"
summary: "Simon Willison published his full take on Claude Code's auto-mode-as-default announcement — the Trajectory Labs numbers are impressive (0/720 attacks succeeded) but he'd like independent confirmation before retiring his 'Challenger disaster' prediction. Lasso Security dropped open-source hooks that scan tool outputs for prompt injection before Claude sees them, adding a complementary defense layer. Meanwhile the Rust project published a formal LLM policy: AI may review but not author code, and if LLM-created PRs hit 50% of merges in a six-week window, they freeze. DeepSeek quietly warned prices are going up after months of undercutting the field. The EU AI Act's Article 50 transparency rules are now enforceable — chatbots must say they're AI, deepfakes need labels, and fines run to €15M/3% of turnover. On the product side: OpenAI sunsets Atlas today, folding browser-agent features into Codex and ChatGPT; swyx opened Smol Forge to 100 alpha testers; and NVIDIA shipped NOOA, a one-class-per-agent Python framework that already hits 82% on SWE-bench Verified."
tags:
  - Claude Code & Auto Mode
  - AI Security & Prompt Injection
  - Open Source & Policy
  - Models & Pricing
  - Regulation
  - Other Bits
---

# AI Roundup — August 9, 2026

## Claude Code & Auto Mode

### Simon Willison's full take: impressive numbers, wants receipts

Simon Willison [published a detailed blog post](https://simonwillison.net/2026/Aug/8/auto-mode/) analysing Anthropic's announcement that [auto mode becomes the Claude Code default on August 14](https://claude.com/blog/auto-mode-default-in-claude-code) for Pro, Max, and Team plans. The headline stat: independent evaluator Trajectory Labs designed 72 indirect prompt injection scenarios held out from Anthropic's training, ran each 10 times — **0 of 720 attacks succeeded** against Fable 5, Opus 5, or Sonnet 5 in auto mode. Competing systems (including OpenAI Codex) showed success rates up to 5.83% under similar conditions.

Willison had [predicted a "Challenger disaster for coding agents security"](https://simonw.substack.com/p/llm-predictions-for-2026-shared-with) for 2026 — and isn't ready to retire that call yet. His position: he'd like to believe the problem is solved but wants **more independent confirmation** before trusting it. His preferred structural fix remains designing agent workflows that limit what tools and data agents can access in the first place, treating auto mode as one layer among several rather than a finished solution.

Useful numbers from the [Anthropic blog post](https://claude.com/blog/auto-mode-default-in-claude-code): in a study of 1,053 paid users, auto mode blocked **89% of dangerous commands** — while human testers manually refused only **13.6%** of the time. Team and Enterprise customers using auto mode ship about 25% more PRs than those on manual approval. Anthropic will also stop charging for the classifier's extra tokens.

### Lasso Security ships open-source prompt injection hooks

Lasso Security [released `claude-hooks`](https://github.com/lasso-security/claude-hooks), an open-source PostToolUse hook that scans tool outputs for malicious instructions **before** Claude processes them. Their [accompanying blog post](https://www.lasso.security/blog/the-hidden-backdoor-in-claude-coding-assistant) walks through how indirect prompt injection works in practice — a file, email, or API response contains hidden instructions that manipulate Claude's actions using trusted privileges. The hook adds a complementary defense layer to auto mode's built-in classifier.

## AI Security & Prompt Injection

### OpenAI sunsets Atlas today

OpenAI is [deprecating Atlas](https://developers.openai.com/codex/changelog) — their browser-based agentic product — effective today (August 9). Browser-agent capabilities are being folded into Codex and ChatGPT proper. Also on the deprecation calendar: GPT-5.4 and GPT-5.4 mini leave Codex (for ChatGPT-authenticated users) on August 31, though they remain available via API.

## Open Source & Policy

### Rust adopts a formal LLM policy: AI may analyse, not author

Five Rust teams (compiler, libs, types, rustdoc, bootstrap) [ratified an LLM usage policy](https://blog.rust-lang.org/inside-rust/2026/08/05/rust-langrust-is-adopting-an-llm-policy/) for rust-lang/rust on August 5. The core principle: **LLMs are welcome as tools for thinking, not substitutes for it.**

Key rules:
- LLM-generated text must not be submitted as PR descriptions, issue comments, documentation, nontrivial source comments, or compiler diagnostics — and editing the output afterward doesn't make it acceptable.
- PR authors must disclose LLM use.
- **Rate limiter**: if >50% of PRs merged in a six-week window are LLM-created, LLM-created merges freeze until the share drops below 50%, with a minimum 10-day cooldown aligned to Rust's release cycle.

The policy exists because the project is [dealing with a flood of low-effort "slop" PRs](https://socket.dev/blog/rust-moves-to-restrict-llm-use-in-contributions) primarily authored by LLMs. [Hacker News discussion](https://news.ycombinator.com/item?id=48142650) was lively — some see it as overdue, others think it'll be unenforceable.

### NVIDIA open-sources NOOA: one Python class = one agent

[NVIDIA Labs released NOOA](https://www.marktechpost.com/2026/08/07/nvidia-ai-releases-nooa-an-object-oriented-python-framework/) (NVIDIA Object-Oriented Agents) on August 7 — a model-agnostic Python framework where **an agent is a single class**, its methods are capabilities, docstrings are prompts, and type annotations are enforced contracts. Apache 2.0, `pip install nooa`, Python 3.12+. It already hits **82.2% on SWE-bench Verified**. Models are pluggable via LiteLLM (hosted APIs, Ollama, vLLM all work). NVIDIA classifies it as a research preview. It's also contributing to the [Open Secure AI Alliance](https://blogs.nvidia.com/blog/open-secure-ai-alliance/), a 37-member coalition announced with the Linux Foundation on July 27.

### swyx opens Smol Forge to first 100 alpha users

swyx's [Smol Forge](https://x.com/swyx/status/2085450774914756631) — a fast, agent-native git remote — opened its alpha to 100 users. Per-repo Forge agents use disk-based memory to keep conventions honest and reduce hallucinations. The alpha gates on commit count (no commits = removed by end of day). Transcripts are [still broken](https://x.com/swyx/status/2085570817786880265); updates via their AI DevRel's blog. Related: swyx's [$10k "kill my SaaS in a weekend" competition](https://x.com/swyx/status/2085995879966921177) is still running — deadline extended to Wednesday, 50 entrants within the first hour.

## Models & Pricing

### DeepSeek warns prices are going up

After months of aggressive undercutting — V4 Flash at $0.14/M input, $0.28/M output; V4 Pro at $0.435/$0.87 — [DeepSeek announced on August 6](https://deepseek.ai/pricing) that it **plans to raise API pricing** in the near future, expecting "a significant increase." The permanent 75% cut from May that kicked off the price war is ending. V4 Flash remains impressive on agent benchmarks and fits on two RTX 6000s for local use, but the era of near-free frontier inference from DeepSeek may be closing.

### Benchmark snapshot

Per [Terminal-Bench 2.1](https://www.morphllm.com/best-ai-coding-agents-2026): GPT-5.6 Sol (xhigh effort) leads at **89.5%**, Claude Opus 5 (max effort) follows at **89.1%**. On [BenchAlign coding](https://benchlm.ai/coding): Claude Mythos 5 tops at 79.8, Fable 5 at 79.6, GPT-5.6 Sol at 78.0.

## Regulation

### EU AI Act transparency rules are now live

As of **August 2, 2026**, the EU AI Act's [Article 50 transparency obligations](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1714) are enforceable:

- **Chatbots must disclose** they're AI at the start of every interaction, in plain language.
- **Deepfakes need labels**; machine-made or edited content must carry machine-readable marks.
- **Fines**: up to **€15 million or 3% of worldwide annual turnover**, whichever is higher.
- Machine-readable content marking has a grace period until **December 2026** for existing tools.
- The European AI Office now has full penalty enforcement powers over general-purpose AI model providers.

Several major providers have signed the AI Office's [voluntary Code of Practice on Transparency](https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august), which offers a degree of presumption of conformity. [Analysis from Cooley](https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026) breaks down the specific obligations.

## Other Bits

- **Claude for Government** is in beta — Anthropic remains the billing party, new customers can request access at [claude.com/solutions/government](https://claude.com/solutions/government).
- **Cloudflare's second Agents Week** kicked off August 2 with an unusual twist: no product list announced, instead [inviting users to ask their AI agents what infrastructure they need](https://aiagentstore.ai/ai-agent-news/this-week).
- **BrowserStack shipped Test Companion** (July 29) — agentic AI for test automation in the IDE, covering authoring, execution, debugging, and maintenance across web and mobile.
- **Forbes on "renting our brains"**: a [widely-shared piece](https://www.forbes.com/sites/jasonsnyder/2026/08/07/we-are-renting-our-brains-and-nobody-reads-the-lease/) on AI vendor lock-in and data control — relevant to Armin Ronacher's recent comments on vendor lock-in and LLMs "quietly hiding your data while stripping away your control."

---

*Quiet this cycle: @karpathy, @steipete, @bcherny, @jerryjliu0, and @trq212 had no major new posts in the window (their last substantial activity was covered in yesterday's roundup). @mitsuhiko was active on Bluesky/X but no long-form AI content.*
