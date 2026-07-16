---
title: "Grok Build's Privacy Fallout, Theo's Token Playbook & the Five Archetypes of AI Engineering"
date: "2026-07-16"
summary: "The Grok Build privacy scandal lands its second act: **Simon Willison** digs into the 844K-line Rust codebase xAI open-sourced to regain trust — and immediately extracts a Mermaid-to-Unicode renderer, compiles it to WebAssembly, and ships a browser tool from it. **Theo** publishes his long-awaited GPT-5.6 Sol cost-saving playbook — three levers that cut token consumption by 80% — as OpenAI resets limits for its 8M-user base. **Boris Cherny** frames the future of engineering roles as five archetypes (Prototyper, Builder, Sweeper, Grower, Maintainer), and separately reveals that Claude Code's next version will let you run `/usage` to see exactly which Skills, Agents, MCPs, and Plugins are eating your tokens. **Matt Pocock** pushes /wayfinder toward a standalone CLI and debates adding a domain-modeling step before map creation. Plus: Karpathy's Anthropic move confirmed amid the July 15 news cycle, and mitsuhiko's encrypted-prompt hot take."
tags:
  - Grok Build Privacy Fallout
  - Theo's GPT-5.6 Token Playbook
  - The Five Archetypes
  - Claude Code Updates
  - Skills & Tooling
  - Videos
  - Quick Hits
---

# AI Roundup — July 16, 2026

## Grok Build's Privacy Fallout & Simon's Instant Salvage Op

The biggest story of the day is the fallout from xAI's Grok Build privacy disaster. **Simon Willison** published a [detailed analysis of the now open-sourced grok-build codebase](https://simonwillison.net/2026/Jul/15/grok-build/) after xAI released it under Apache 2.0 — a trust-rebuilding move following the revelation that running `grok` in a directory [could upload everything to xAI's Google Cloud buckets](https://thehackernews.com/2026/07/grok-build-uploads-entire-git.html), including SSH keys, password manager databases, and personal files. Musk promised *"all user data that was uploaded to SpaceXAI before now will be completely and utterly deleted,"* and the upload feature was disabled — but the code remnants are still visible: Simon found `upload_session_state()` in `xai-grok-shell/src/upload/trace.rs`, now returning a hard-coded `session_state_upload_unavailable` error. The codebase is **844,530 lines of Rust** (via SLOCCount, excluding whitespace/comments), of which only ~3% is vendored.

But the real Simon Willison move: on [July 16](https://simonwillison.net/2026/Jul/16/grok-mermaid/) he extracted Grok Build's self-contained terminal Mermaid renderer, compiled it to WebAssembly, and shipped **[grok-mermaid](https://tools.simonwillison.net/grok-mermaid)** — a browser tool that renders Mermaid diagrams as Unicode box-drawing art. Flowcharts, sequence, state, class, and ER diagrams are supported. Classic salvage-the-good-parts-from-the-wreckage energy.

## Theo's GPT-5.6 Token Playbook

**Theo** published his definitive guide on [how to stop hitting usage limits with GPT-5.6 Sol](https://x.com/theo/status/2076079256027943397) — then followed up with an even deeper write-up he described as [*"this article could have been a video"*](https://x.com/theo/status/2076589141740159464). Having burned over **$200,000** in tokens with Sol, his investigation uncovered **three levers that together slash consumption by 80%+**:

1. **Set reasoning to High or Medium** — Ultra is the sweet spot of diminishing returns where a single prompt can torch 37.5% of a weekly quota
2. **Edit agent.md to restrict sub-agents** — GPT-5.6 was trained to spawn them liberally, unlike 5.5, and "ultra" subagents inherit the ultra setting ([*"IMO this is a fumble. Causes massive token burn for no good reason."*](https://x.com/theo/status/2075742083370127504))
3. **Embed an explicit stop condition in every prompt**

The guide landed alongside OpenAI's own response: [Tibo announced](https://x.com/thsottiaux/status/2076495156757577895) inference optimizations yielding ~10% more usage for all subscriptions, and later [reset limits for all 8M active users](https://x.com/thsottiaux/status/2077114635308986427) across Codex and ChatGPT Work.

Theo's broader takes this week remain pointed: he called turning [Codex into ChatGPT Desktop a *"generational fumble"*](https://x.com/theo/status/2075312087723876556), noted that Claude Code's programmatic orchestration is [*"significantly better than Codex's subagent implementation"*](https://x.com/theo/status/2075765314483376285), and estimated we're [*"~6 months from most devs moving their code agents off of their laptops."*](https://x.com/theo/status/2071083700385955906)

## The Five Archetypes of AI Engineering

**Boris Cherny**, creator of Claude Code, posted a framework for [how engineering roles are evolving](https://x.com/bcherny/status/2071379474277613732) that generated significant discussion. As engineering, product, design, and data science *"melt into a new kind of role,"* he identified five archetypes on the Claude Code team:

1. **Prototyper** — comes up with brand new ideas; churns out many, most don't ship
2. **Builder** — quickly turns a prototype into production-grade product/infra
3. **Sweeper** — cleans up UI, simplifies code, unships, optimizes performance
4. **Grower** — takes what's been built and iterates toward product-market fit
5. **Maintainer** — owns a mature system for security, reliability, and efficiency at scale

*"Many people span across 2 roles, and sometimes 3. These roles are not really tied to job function."* The post [hit AOL](https://www.aol.com/articles/5-job-archetypes-future-according-141801227.html) and [dev.ua](https://dev.ua/en/news/5-arkhetypiv-profesii-maibutnoho-za-versiieiu-tvortsia-claude-code-1782824768) — and the best community response came from [Dr. Tali Režun](https://x.com/talirezun/status/2071478517800288674): *"Reading this as a solo founder: I hold all five simultaneously. What agents changed is not which roles I carry but how much of each I can actually execute."*

## Claude Code Updates

Two notable Claude Code previews from **Boris Cherny**:

- **`/usage` command** — [*"In the next version of Claude Code: run /usage to see a breakdown of which Skills, Agents, MCPs, and Plugins are using your tokens"*](https://x.com/bcherny/status/2057476878110261587) — CLI today, Desktop next. Finally answers *"where did my tokens go?"*
- **Background subagents by default** — [*"subagents run in the background by default, so you can keep talking to Claude while your subagents work"*](https://x.com/bcherny/status/2071647677591466098). If you want foreground, just tell Claude.

And a warm moment: Boris [welcomed Karpathy to Anthropic](https://x.com/bcherny/status/2056755719941062919) — *"So excited we get to work together."*

## Skills & Tooling

**Matt Pocock** continues iterating on his skills ecosystem at speed:

- **Skills v1.1 shipped** ([announcement](https://x.com/mattpocockuk/status/2074860312423997800)): `/wayfinder` for planning ambitious work, `/to-spec` and `/to-tickets` replacing `/to-prd` and `/to-issues`, `/implement` and `/code-review` completing the lifecycle, plus `/research` and `/prototype` as wayfinder support skills. Recommended flow: `/wayfinder → /to-spec → /to-tickets → /implement`.
- **Wayfinder CLI incoming** — [*"The more I look at this, the more I think I should ship a CLI for wayfinder"*](https://x.com/mattpocockuk/status/2076297916336013516): `npx @ai-hero/wayfinder github 31` where 31 is the map.
- **Domain-modeling integration** — [debating adding an explicit step](https://x.com/mattpocockuk/status/2076996976525054246) before map creation to firm up shared language, after users reported `/wayfinder` doesn't do as much "shared language" work as `/grill-with-docs`.
- **Real-world demo** — [posted his final spec](https://x.com/mattpocockuk/status/2077003527025532958) from a wayfinding session: *"There's one task that needs to be done HITL, but the rest is ready for AFK to pick up. Probably it'll be shipped by the time you see this."*

**steipete** continues evangelizing `autoreview` as the linchpin of his automated workflow — with [GPT 5.5, /goal, autoreview and crabbox](https://x.com/steipete/status/2060678430031597696), his prompts have moved from *"~30-60min to often 4-10h tasks"* with higher confidence. He also flagged ["The Memory Heist"](https://x.com/steipete/status/2077303292225548539) agent-memory attack write-up as *"really clever"* — a timely warning as models get more eager.

## Videos

- **Theo — "the most pissed off I've ever been on camera"** — reaction to the Bun rewrite drama; high heat, mostly cultural not technical — [via @theo](https://x.com/theo/status/2077291692655563035).
- **Theo — GPT-5.6 Sol usage optimization** — the video companion to his token playbook article is [coming soon](https://x.com/theo/status/2076079256027943397).
- **Geoffrey Litt — "Why it's still important for humans to understand the code"** — AIE talk on efficient human comprehension in agent-first workflows — [via @geoffreylitt](https://x.com/geoffreylitt/status/2076815754758918376).
- **Addy Osmani — "Don't Build Agents You Can't Answer For"** — closing AIE keynote on system ownership — [via @aiDotEngineer](https://x.com/aiDotEngineer/status/2077083241413226698).

## Quick Hits

- **Karpathy joins Anthropic**: Confirmed in the July 15 news cycle alongside South Korea's $880B AI commitment — [*"I think the next few years at the frontier of LLMs will be especially formative."*](https://x.com/karpathy/status/2056753169888334312) Boris Cherny welcomed him; the nanochat experiments will presumably continue at Anthropic scale.
- **OpenAI hits 8M active users**: [Tibo](https://x.com/thsottiaux/status/2077114635308986427) announced the milestone across Codex and ChatGPT Work — usage limits reset, 5h rate limit still suspended.
- **swyx's stale agents.md warning**: [*"Models have overtuned to this now and do not realize when the AGENTS.md is out of date and should be changed/ignored"*](https://x.com/swyx/status/2077072402828361772) — stale instructions as self-inflicted prompt injection causing multi-hour stalls.
- **mitsuhiko on encrypted prompts**: [A day after speaking on stage about encrypted reasoning traces](https://x.com/mitsuhiko/status/2077009119614017949), *"we get new SOTA labs shenanigans: encrypted prompts."* His broader take: [*"Love the models, love the subs, do not love the incentives and the consequences of those incentives."*](https://x.com/mitsuhiko/status/2077011241785040935)
- **Jerry Liu's Retrieval Harness**: LlamaIndex shipped a [comprehensive Retrieval Harness for agentic retrieval](https://x.com/jerryjliu0/status/2073407100642852871) — persistent data pipeline with semantic/keyword search, regex grep, file search, and read operations that any agent can plug into.
- **trq212 plays competitive Pokémon with Claude Code**: [*"It writes code using Smogon's npm library, pulls live usage stats and then writes reports to understand matchups, breakpoints or theorycraft teams."*](https://x.com/trq212/status/2077051280267399550)

*Note: @LLMJunky's feed could not be accessed directly; his contributions are sourced from quotes and retweets in other feeds. @karpathy and @bcherny had no new posts in the July 16 window specifically.*
