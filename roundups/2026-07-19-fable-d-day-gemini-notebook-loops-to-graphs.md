---
title: "Fable D-Day, Gemini Notebook & the Loops-to-Graphs Question"
date: "2026-07-19"
summary: "Today is **Fable 5 D-Day** — the final hours of Anthropic's 50%-included promotion before Max/Team Premium users transition to permanent-but-reduced Fable access and Pro users fall to $100 credits then API pricing. The Fablepocalypse resolution from yesterday continues to ripple: **Armin Ronacher** warns 'slacking off with Fable is expensive,' **Simon Willison** breathes 'huge relief,' and **Jerry Liu** takes the pragmatist's 'I'll take it.' Meanwhile **Steipete's** 'are we still talking loops or did we shift to graphs yet?' crystallizes the next phase of the agentic design discourse, with **Jerry Liu** answering that life is both — build a workflow graph on top of the agent harness, then let an outer agent loop create the graph dynamically. **Google rebrands NotebookLM to Gemini Notebook** with sandboxed code execution, Simon Willison ships three tools in three days (llm-cliche-highlighter, claude-token-counter, mermaid-ascii), and **LLMJunky** wants natural-language search in Codex."
tags:
  - Fable 5 Transition & Anthropic
  - Loops to Graphs — Agentic Design
  - Google Gemini Notebook
  - Simon Willison's Tool Blitz
  - Codex & OpenAI
  - Other Notes
---

# AI Roundup — July 19, 2026

## Fable 5 Transition & Anthropic

### Today is Fable D-Day

The clock is ticking: **July 19 at 11:59 PM PT marks the end of Anthropic's Fable 5 included-access promotion** — and the simultaneous end of the 50% higher Claude Code weekly rate limits. Starting tomorrow (July 20), the new regime kicks in:

- **Max and Team Premium** subscribers: Fable 5 becomes a **permanent** part of the plan at 50% of standard weekly limits. The "Fablepocalypse" saga is over for these tiers.
- **Pro and Team Standard** subscribers: Fable 5 drops out of the subscription entirely. Anthropic is issuing a one-time **$100 usage credit**; after that, it's API pricing at **$10/M input tokens and $50/M output tokens** — the most expensive generally-available model Anthropic has published.
- **Claude Code weekly limits**: the 50% boost ends for everyone. Standard limits resume.

Anthropic says Fable 5 "isn't permanently leaving subscriptions" for lower tiers and plans to restore it once capacity allows — but no date. The weeks of rolling extensions (July 7 → July 12 → July 19) exhausted a lot of goodwill, with users burning through allowances racing deadlines that then evaporated.

- [Anthropic: Redeploying Fable 5](https://www.anthropic.com/news/redeploying-fable-5)
- [BleepingComputer: Fable 5 stays free until July 19](https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-stays-free-for-paid-users-until-july-19-as-anthropic-buys-more-time/)
- [TechTimes: Permanent for Max, credits-only for Pro](https://www.techtimes.com/articles/320905/20260718/claude-fable-5-ends-subscription-limbo-permanent-max-credits-only-pro.htm)

### The community temperature check (continuing from yesterday)

Yesterday's Fablepocalypse-cancelled announcement keeps reverberating:

- **Armin Ronacher** ([@mitsuhiko](https://x.com/mitsuhiko/status/2078423315987697885)): *"Slacking off with Fable is expensive"* — a pragmatic note that even with included access, the token burn at Fable-level reasoning adds up fast.
- **Simon Willison** ([@simonw](https://x.com/simonw/status/2078360078714065370)): *"Huge relief, the Fablepocalypse has been permanently cancelled."*
- **Jerry Liu** ([@jerryjliu0](https://x.com/jerryjliu0/status/2078313486581715063)): *"You know what, I'll take it"* — the Max-user pragmatist's response.
- **Theo** ([@theo](https://x.com/theo/status/2078223917702054221)): clarified once more that **Fable 5 and Mythos 5 are the same weights on the same servers** — "two separate entrances to the same place." Fable's safety classifiers are layers in front; Mythos is the low-friction entrance for trusted parties. Best analogy from the replies: *"TSA-Fable vs TSA Precheck-Mythos — lead to the same terminal if you get through."*

### Theo's T3 Code analytics: the dual-wielder cohort

Theo shared analytics from T3 Code showing that [when Fable returned to Claude Code sub plans, Claude overtook Codex for the first time ever — then GPT-5.6 dropped and Codex took the lead back](https://x.com/theo/status/2078217008894865452). The most interesting cohort: **"dual wielders"** — users running both Codex and Claude Code — are the [heaviest, most loyal users](https://x.com/theo/status/2078225264929325091).

## Loops to Graphs — Agentic Design

### Steipete: "Are we still talking loops or did we shift to graphs yet?"

Peter Steinberger's [one-liner](https://x.com/steipete/status/2078277297791189132) captured the next turn in the agentic design conversation. Since his viral June post (*"You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents"* — 6.5M views), the discourse has moved from "what is a loop?" to "is a loop enough?"

### Jerry Liu's answer: life is a loop (and a graph)

Jerry Liu laid out the synthesis in a [thread](https://x.com/jerryjliu0/status/2078524983748563370): **1. Build a workflow graph on top of the agent harness. 2. Dynamically create that graph through an outer agent loop.** The implication: loops and graphs aren't competing paradigms — graphs give you structure within a single task, and the outer loop gives you iteration across tasks. He also argued that [high-quality retrieval still matters in 2026](https://x.com/jerryjliu0/status/2078537490932384136) even as harnesses improve — the two are complementary.

This builds on the **Retrieval Harness** Jerry announced earlier this month: a persistent data pipeline exposing filesystem-like tools (semantic search, regex grep, file search, read) for agents to autonomously crawl arbitrary knowledge bases. The reference implementation, [legal-kb](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/), shows the pattern in production.

- [Jerry Liu: Retrieval Harness announcement](https://x.com/jerryjliu0/status/2073407100642852871)
- [LlamaIndex blog: Announcing Retrieval Harness](https://www.llamaindex.ai/blog/announcing-retrieval-harness)

## Google Gemini Notebook

### NotebookLM becomes Gemini Notebook — with code execution

Google [rebranded NotebookLM to Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/) on July 16, and the big addition is **sandboxed code execution**. Every notebook now gets a secure cloud computer that can write and run Python against your own sources — a fundamental shift from "it could tell you what a spreadsheet said" to "it can compute on the spreadsheet."

Key details:
- Available now for **Google AI Ultra** and **Workspace business customers**; rolling out to all Pro web users in coming weeks.
- Google ships **100+ curated software skills** for data organization, calculations, charts, and reports.
- 30 million users and 600K+ organizations already on the platform.

The timing is interesting — this lands the same week Fable 5 transitions to credits, potentially catching developers looking for alternatives for data analysis work.

- [Google Blog: Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/)
- [TechCrunch: Google continues its renaming streak](https://techcrunch.com/2026/07/16/google-continues-its-renaming-streak-by-turning-notebooklm-to-gemini-notebook/)
- [9to5Google: What actually changed](https://9to5google.com/2026/07/16/notebooklm-gemini-notebook/)

## Simon Willison's Tool Blitz

Simon shipped three tools in three days this week:

### llm-cliche-highlighter (July 17)
A web tool that [detects and highlights cliched phrases common in LLM output](https://simonwillison.net/2026/Jul/17/llm-cliche-highlighter/) — patterns like "no X, no Y" chains, "sit with that," "you already know," and other tells. Built with Claude Fable 5. Useful for anyone screening text for AI-generated content.

- [Tool](https://tools.simonwillison.net/llm-cliche-highlighter)
- [Blog post](https://simonwillison.net/2026/Jul/17/llm-cliche-highlighter/)

### claude-token-counter (July 16)
Rewritten to [compare token counts across multiple Claude models](https://simonwillison.net/2026/Apr/20/claude-token-counts/) via checkboxes (Opus 4.7, Opus 4.6, Opus 4.5, Sonnet 4.6, Haiku 4.5), with results as a table with Nx multiplier indicators.

### mermaid-ascii & grok-mermaid (July 15–16)
[mermaid-ascii](https://simonwillison.net/2026/Jul/16/grok-mermaid/) converts Mermaid diagrams to Unicode box art using WebAssembly, with color support. Built on the AlexanderGrooff/mermaid-ascii Go library.

### llm-coding-agent alpha (July 2)
Simon also shipped an alpha of **llm-coding-agent** — a simple coding agent built on his `llm` library (which has evolved into more of an agent framework). Run it with `uvx --prerelease=allow --with llm-coding-agent llm code`. Includes edit_file, execute_command, and list_files tools.

- [Release announcement](https://simonwillison.net/2026/Jul/2/llm-coding-agent/)

## Codex & OpenAI

### LLMJunky wants natural-language search in Codex

LLMJunky's [ongoing critique](https://x.com/LLMJunky/status/2078534106049106342): the Search feature in Codex requires near-exact string matching — he wants natural-language search that understands intent. This was part of his "I'll Bet Ya Didn't Know This" series covering hidden Codex features, which also surfaced [easy prompt-switching in long threads](https://x.com/LLMJunky/status/2078129596818489661).

### Steipete: Codex + browser use is "both amazing and painful"

Peter Steinberger [watched Codex use browser + computer-use to open Chrome, navigate to his PR, and wrangle the macOS file picker](https://x.com/steipete/status/2078318731785359634) — all to upload an image, because GitHub has no API for PR comment attachments. He now runs Codex instances in VMs so they don't steal app focus.

## Other Notes

### Thariq's Field Guide to Fable keeps resonating

Thariq's article [A Field Guide to Fable: Finding Your Unknowns](https://x.com/trq212/article/2073100352921215386) (published July 3, 2M views in three days) continues to be a reference point. The core thesis: with a model as capable as Fable 5, the bottleneck shifts from the model's capabilities to the user's ability to clarify what they actually want. Your CLAUDE.md and skills are *"the map, not the territory"* — the gap between them is your unknowns. His practical advice: give the model bash, search, and environment access so it builds its own context, rather than compensating with bigger prompts.

- [Article](https://x.com/trq212/article/2073100352921215386)
- [Video: Field Guide to Fable — Thariq Shihipar, Anthropic](https://www.youtube.com/watch?v=9fubhllmsBU)
- [Latent Space coverage](https://www.latent.space/p/ainews-the-field-guide-to-fable)

### Boris Cherny's "Steps of AI Adoption" continues making rounds

Cherny's [4-step adoption ladder](https://x.com/bcherny/status/2077929379661844559) (posted July 17) keeps generating discussion. The framework: Gated → Assisted → Parallel → Supervised autonomy → AI-native. The key insight resonating: *"measure ROI in avoided eng-hours, not usage dashboards."* Multiple outlets picked it up, including [dnyuz](https://dnyuz.com/2026/07/17/claude-codes-creator-offers-a-better-way-to-measure-ai-success-than-token-burn/) framing it as "a better way to measure AI success than token burn."

### swyx: "Agent Lab" strategy — own the problem, not the model

swyx's [Latent Space episode](https://www.latent.space/p/agent-labs) from the AI Engineer conference continues circulating. The thesis: the only durable strategy for AI startups is to become an **"agent lab"** — pick a vertical (coding, legal, support), become the trusted brand, and absorb model changes on behalf of the customer. Examples: Cursor/Cognition for coding, Harvey for legal, Decagon for support. The episode also covers the emerging inference-chip ecosystem beyond Nvidia and Anthropic's Fable rollout.

- [Latent Space: Agent Labs](https://www.latent.space/p/agent-labs)

### Matt Pocock: agent-managed personal wiki

Matt [previewed experiments](https://x.com/mattpocockuk/status/2071607607714890181) with a personal, entirely agent-managed "Karpathy-style wiki" where X, Discord, and Gmail are all ingested every few hours. This becomes the knowledge base serving as the environment for all future loops — a concrete implementation of the "always-on agent" pattern. His AI Coding Cohort v2 (started June 1) continues, now agent-agnostic rather than Claude Code-only.

### Steipete speaking at YC Startup School next week

Peter Steinberger is [scheduled to speak](https://github.com/steipete/speaking) at **YC Startup School** in San Francisco on July 25–26, followed by the **Agentic AI Summit** in Berkeley on August 1–2. His talk: how agentic engineering fundamentally changes software development.

### Simon Willison on AI-enhanced browsers dying

Simon [questioned whether the whole category of AI-enhanced browsers is coming to a close](https://x.com/simonw/status/2075661863757746535) after Atlas was retired in favor of the browser embedded in ChatGPT — citing security and privacy concerns as the core problem.

### Armin Ronacher: the vibe-coded graveyard

A universal confession from mitsuhiko: [*"I have such a large graveyard of vibe coded apps and productivity things at this point."*](https://x.com/mitsuhiko/status/2078450786963472724) — relatable for anyone who's built 20 things with AI agents and uses none of them.
