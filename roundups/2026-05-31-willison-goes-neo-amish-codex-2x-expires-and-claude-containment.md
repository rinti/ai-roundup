---
title: "Willison Goes Neo-Amish, Codex 2x Expires & Anthropic's Claude Containment Deep Dive"
date: "2026-05-31"
summary: "Simon Willison dropped a bombshell reflective post about **retiring from tech to live offline** — calling himself 'Neo-Amish' after three 12-hour days with Claude Code left him feeling like he had 'another person in his head.' Anthropic published a detailed engineering blog on **how they sandbox Claude across products** (gVisor, Seatbelt, Bubblewrap, full VMs), which Willison promptly linked. The **Codex 2x usage promotion expires today** (May 31), ending a months-long doubling of rate limits for Pro users. Meanwhile the State of AI 2026 survey landed: **AI-generated code jumped from 28% to 54%** of developer output year-over-year. Plus Mitsuhiko and collaborators warn of a 'vibe slop' crisis, Boris Cherny surfaced Claude Code hidden features including voice coding and session teleporting, and Karpathy is quietly onboarding at Anthropic."
tags:
  - Simon Willison Goes Neo-Amish
  - Claude Containment & Sandboxing
  - Codex 2x Promotion Expires
  - State of AI 2026 Survey
  - Vibe Slop & Code Quality
  - Claude Code Hidden Features
  - Karpathy at Anthropic
  - Industry & Economics
---

# AI Roundup — May 31, 2026

A reflective Saturday to close out a massive week. The throughline: people are grappling not just with what AI agents *can* do, but what they're *doing to us* — from Willison's soul-searching about becoming "AI Amish" to Mitsuhiko's warnings about addictive slop loops, to Anthropic publishing its containment playbook. And the Codex 2x promo quietly expires at midnight.

## Simon Willison Goes Neo-Amish

**Simon Willison posted "I Am Retiring from Tech to Live Offline."** The post ([simonwillison.net](https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/)) describes testing Claude Code with Opus 4.5 on a side project, spending three 12+ hour days with it, and finding himself "intoxicated" — but his family was weirded out, and unplugging for a long weekend made him realize something was off. He described feeling like he had "another person in his head — a computer system owned by a corporation."

His framing: he wants to be **"AI Amish, which means Internet Amish"** — drawing a parallel to the Amish in Pennsylvania "bearing witness to an earlier way of life." But not 1780 — **"1980. Neo-Amish."** He's fine driving a car and flipping a lightswitch, but AI and doomscrolling "make him into something he hates." The post references Chad Whitacre's February piece "[Spitting Out the Agentic Kool-Aid](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)" as an influence.

Worth reading alongside his May 27 post **"I think Anthropic and OpenAI have found product-market fit"** ([simonwillison.net](https://simonwillison.net/2026/May/27/product-market-fit/)) where he documented spending **$1,199.79 on Claude Code and $980.37 on Codex in a single month** — evidence that the tools work so well they're genuinely habit-forming.

## Claude Containment & Sandboxing

**Anthropic published "How we contain Claude across products"** ([anthropic.com](https://www.anthropic.com/engineering/how-we-contain-claude)), which Willison linked on May 30 ([simonwillison.net](https://simonwillison.net/2026/May/30/how-we-contain-claude/)). The philosophy: rather than supervising *what* the agent does, supervise *what it's able to do* via access boundaries.

The product-specific breakdown:
- **Claude.ai** uses **gVisor** for process sandboxing
- **Claude Code** (local) uses **Seatbelt** on macOS and **Bubblewrap** on Linux
- **Claude Cowork** runs a **full VM** — Apple's Virtualization framework on macOS, HCS on Windows

Key security layers: filesystem isolation (Claude can only access/modify specific directories), network isolation (only approved servers), and defense-in-depth to prevent prompt-injected Claude from modifying system files or leaking data.

## Codex 2x Promotion Expires Today

**The OpenAI Codex 2x usage window closes May 31.** [OpenAI confirmed](https://x.com/OpenAI/status/2042296046009626989) that Pro $100 users got 10x usage (doubled from standard 5x) and Pro $200 users got extended 2x limits with reset rate limits. LLMJunky called it ["the end of an era"](https://x.com/LLMJunky/status/2059751503460483545) yesterday, noting that $200 ChatGPT Pro may retain higher limits past the cutoff.

This matters because many power users have been running multiple Codex sessions simultaneously under the promotion pricing. The return to standard limits will force workflow changes for heavy users.

## State of AI 2026 Survey Results

**Theo flagged** the [State of AI for Web Devs 2026](https://2026.stateofai.dev/en-US) survey results ([tweet](https://x.com/theo/status/2041715755306389780)). The survey ran April 8 to May 8 with 7,258 responses. Headlines:

- **AI-generated code jumped from 28% to 54%** of developer output year-over-year — the 75%+ segment saw the highest growth
- **Claude is the model developers actually pay for** the most, despite ChatGPT leading in raw popularity
- **AI labs are raising prices** as developers become reliant — individual spend is clearly up
- **Job anxiety persists** — developers remain concerned about displacement, military AI use, and environmental impact
- Over half of respondents watch Theo's videos

## Vibe Slop & Code Quality Concerns

**Mitsuhiko (Armin Ronacher) and collaborators continue sounding the alarm on AI code quality.** His "[Agent Psychosis](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis)" thesis — that agent workflows create dopamine-driven loops producing low-quality output — got fresh legs this week alongside the **SlopCodeBench** paper ([arxiv](https://arxiv.org/html/2603.24755v1)), which benchmarks how coding agents degrade over long-horizon tasks. Key finding: **no agent solves any problem end-to-end across 11 models**; the highest checkpoint solve rate is 17.2%.

Engineers Mario Zechner and Ronacher are calling the phenomenon **"vibe slop"** — the rush to ship AI-written code creating "a ticking time bomb of buggy, insecure code." Ronacher's framing on the asymmetry: AI-generated PRs are cheap to create but expensive to review, and that gap is becoming untenable.

Related: Willison's May 26 post **"The pressure"** ([simonwillison.net](https://simonwillison.net/2026/May/26/the-pressure/)) flagged Daniel Stenberg (curl maintainer) describing an unprecedented deluge of AI-assisted security reports overwhelming the curl team.

## Claude Code Hidden Features

**Boris Cherny shared a thread on under-utilized Claude Code features** ([tweet](https://x.com/bcherny/status/2038454336355999749)). Highlights from the creator himself:

- **Voice coding** — hold spacebar, talk, release. Cherny says he now codes mostly by voice
- **Mobile support** — full Claude Code on iOS and Android for reviewing PRs, fixing bugs, pushing commits from your phone
- **Session teleporting** — `/teleport` lets you start on desktop, continue on mobile (or vice versa) with full context
- **Parallel agents** — `/batch` spins up to 50 parallel agents working on different files simultaneously
- **Git worktrees** — `claude -w` works in a separate git worktree so your main branch stays untouched
- **Scheduled automation** — `/schedule` enables recurring workflows like generating standup updates every morning

Separately, Cherny confirmed in a Platformer interview that **he hasn't written a line of code himself in 2026** — 100% of his Claude Code contributions were written by Claude Code ([tweet](https://x.com/bcherny/status/2004897269674639461)).

## Karpathy at Anthropic

**Andrej Karpathy is quietly onboarding** at Anthropic after his [May 19 announcement](https://x.com/karpathy/status/2056753169888334312) that he'd joined the pre-training team. He's working under team lead Nick Joseph on a new team focused on **using Claude itself to accelerate pretraining research**. The announcement drew nearly 3 million views in an hour, Fortune called him a "defector," and AI Twitter compared it to "KD joining the Warriors for people who know linear algebra." No new public posts in the last couple of days — he's heads-down.

## Industry & Economics

**Anthropic's revenue ramp continues to stun.** Willison's May 29 post ([simonwillison.net](https://simonwillison.net/2026/May/29/anthropic/)) tracked the run-rate crossing **$47 billion**, up from $30B earlier in the year and $10B in annual revenue last year. This came alongside:
- A **$65 billion Series H** at a **$965 billion post-money valuation** ([TechCrunch](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/))
- CNBC reporting Anthropic set to hit **$10.9 billion in Q2 revenue alone**, potentially its first profitable quarter ([CNBC](https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html))
- Infrastructure commitments of **$1.25 billion/month** for compute capacity through May 2029

Willison quoted Axios's Jim VandeHei: he "could not find any company — in any industry, in any era" that has scaled this way.

## Around the Ecosystem

- **Matt Pocock's skills repo** ([github.com/mattpocock/skills](https://github.com/mattpocock/skills)) continues to be the reference implementation for agent skill frameworks — 25K+ stars, 20+ composable skills including `/tdd`, `/diagnose`, `/grill-with-docs`, and `/caveman` (ultra-compressed communication cutting token usage 75%). The "grill me" skill remains the most popular ([tweet](https://x.com/etnshow/status/2051973854101156090)).

- **Steipete (Peter Steinberger)** is at OpenAI working on the Codex team after the Anthropic/OpenClaw fallout. His one-liner on why he chose OpenAI over Anthropic: "One welcomed me, one sent legal threats." OpenClaw continues independent development with recent perf sweeps showing cold agent turns 2.9x faster.

- **swyx's thesis for 2026**: coding agents are "breaking containment to do everything else." His [AIE Europe talk](https://tldrecap.tech/posts/2026/aie-europe/ai-engineers-agent-productivity/) documented using Devin to research where to buy a lobster statue in London — and it worked, providing phone numbers, emails, and websites. AI Engineer is expanding to 7+ events worldwide in 2026.

- **LlamaIndex shipped LiteParse v2** as a Rust rewrite with up to 100x faster document parsing, plus a WASM package for browser/edge runtime use ([llamaindex.ai](https://www.llamaindex.ai/blog/liteparse-local-document-parsing-for-ai-agents)). Jerry Liu is pushing the "context is the differentiator when the stack collapses" thesis ([VentureBeat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)).

- **Datasette Agent** launched May 21 ([simonwillison.net](https://simonwillison.net/2026/May/21/datasette-agent/)) — Willison's extensible AI assistant built around data imported from different parts of your digital life.

---

*Sources: Web searches across X/Twitter profiles, blogs, and news sites for [@mattpocockuk](https://x.com/mattpocockuk), [@theo](https://x.com/theo), [@trq212](https://x.com/trq212), [@LLMJunky](https://x.com/LLMJunky), [@mitsuhiko](https://x.com/mitsuhiko), [@bcherny](https://x.com/bcherny), [@steipete](https://x.com/steipete), [@swyx](https://x.com/swyx), [@simonw](https://x.com/simonw), [@karpathy](https://x.com/karpathy), [@jerryjliu0](https://x.com/jerryjliu0). Note: Nitter instances returned 403 across all mirrors; X.com also blocks automated fetches. Content sourced via web search indexing and blog RSS.*
