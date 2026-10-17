---
title: "Karpathy's sharp funnel goes viral, AI Engineer NYC wraps up, Scion aftermath continues, Claude Code Mods land"
date: "2026-10-17"
summary: "**Karpathy** says the AI capability gap is widening into a 'sharp funnel' — 6B people have barely touched LLMs, ~5,000 have seen frontier agents tackling massive projects. **AI Engineer NYC** wrapped October 12–14 with talks on agent safety controls, long-horizon finance agents, and the world's first full-length Claude Flows workshop. **Simon Willison** highlighted Anthropic's Scion source control (30K merges/day) and a quote on AI-first code review where most changes have been reviewed by Claude before a human looks. **Armin Ronacher** jokes that Python 3.15 is the first release where core team members suffer 'AI psychosis', and his blog explains how Pi 1.0 adopted MCP via Codemode after long resistance. **Boris Cherny** shipped Claude Code Mods (v2.1.287), letting developers write TypeScript hooks into the agent pipeline. **Jerry Liu** launched OpenDocRouter, a unified API for 130+ document parsing models with benchmarks. **Theo** shipped 22 years of work in 24 days with Opus 5.5 and T3 Code left alpha. **Peter Steinberger** got Sundar Pichai to unblock OpenClaw's Android review."
tags:
  - Agentic Coding & Agent Harnesses
  - Models, Benchmarks & the Capability Gap
  - Source Control & Infrastructure
  - Industry & Conferences
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — October 17, 2026

## Models, Benchmarks & the Capability Gap

**Karpathy: the AI capability gap is now a "sharp funnel."** In an [October 11 post on X](https://x.com/karpathy/status/2109361546505966046), Karpathy revisited his April tweet about two groups talking past each other on AI capability. His updated take: the gap is *widening*, not closing, and it looks like a sharp funnel rather than a binary divide. His napkin math breaks it down:

- ~6B people (~75% of the world population) have barely come in contact with LLMs at all
- 1–2B are casual free-tier users
- ~20M use frontier models professionally for coding or math
- ~5,000 people with internal access are seeing AI systems coordinate thousands of agents on software, cybersecurity, and math work

The post drew wide coverage. [Benzinga reported](https://www.benzinga.com/markets/tech/26/10/62292803/andrej-karpathy-warns-ai-capability-gap-is-widening-as-advanced-agents-tackle-massive-projects) on the "grim warning" angle, [Startup Fortune covered](https://startupfortune.com/andrej-karpathy-says-the-ai-capability-gap-is-now-a-sharp-funnel/) the funnel framing, and [The New Stack highlighted](https://x.com/thenewstack/status/2109826562463801613) that "only 5,000 people have seen what AI can really do." One [reaction from Ole Lehmann](https://x.com/itsolelehmann/status/2110120644604207522) noted how AI warps your sense of time: "less than a year ago, Karpathy says he was still typing out code by hand, character by character. It literally feels like 5 to 10 years ago."

**Simon Willison's LLM tooling releases.** Willison shipped several plugin updates in October for his [LLM CLI tool](https://simonwillison.net/tags/llm/):

- **llm-gemini 0.35** — adds support for a new Gemini model, with launch pricing compared against GPT-6 Sol and Claude Opus 5.5
- **llm-mistral 0.16** — adds reasoning-model support targeting the newly released Mistral Large 4
- **llm-anthropic 0.30** — lets users refresh the Anthropic model list from the API, so new models don't require a new plugin release; also added Claude Sonnet 5.5 support

## Agentic Coding & Agent Harnesses

**Claude Code Mods ship.** Boris Cherny (@bcherny), Claude Code's creator, [announced](https://x.com/bcherny/status/2105756563302723721) Mods in Claude Code v2.1.287 — JavaScript and TypeScript functions that hook into the agent's execution pipeline. As [covered by dev.to](https://dev.to/max_quimby/claude-code-mods-just-turned-agents-into-a-platform-5gc0), Mods let you write hooks with a few lines of TypeScript or have Claude build them for you. Cherny described it as making Claude "work and look the way you want by just prompting it. Each person works differently, so there's no reason why everyone should have an identical Claude experience." The @ClaudeDevs account confirmed mods are live and shareable as plugins.

**Theo ships 22 years of work in 24 days.** Theo [listed](https://x.com/theo/status/2110713238593908868) what he shipped in 24 days with Opus 5.5: ts-rust (a TypeScript compiler rewrite in Rust, 2–3x faster), 245 PRs into T3 Code (60+ in the last 48 hours alone), the Slopalytics bench site, Slophouse (ClickHouse DB), 46 PRs into Lakebed, and over 1,200 commits into lust-lang (a Rust subset that compiles 100x faster). His verdict: "Rough estimate is 22 years of work, in 21 days. Is all of this real stuff that will ship to users? Absolutely not. But a lot of it is."

**T3 Code leaves alpha.** T3 Code shipped [Orchestrator V2](https://x.com/theo/status/2053924497267593593) to stable and dropped the alpha label. Theo described the [best agentic coding experience available](https://x.com/theo/status/2080522617979871350) as "an open source app made by some youtuber." The tool acts as a smarter UI layer on top of Claude Code and Codex, letting you run multiple AI agents in parallel across git repos and worktrees.

**Matt Pocock: agents + state machines.** Pocock [posted](https://x.com/mattpocockuk/status/2110818314499072493) about getting agents to build state machines: "Every time I see an agent has built a state machine (or even just a reducer) I can feel a huge bump in the robustness." He's also running his [AI Coding Cohort](https://x.com/mattpocockuk) with 2,500+ students working with Claude Code. His open-source [sandcastle](https://github.com/mattpocock) project lets you orchestrate sandboxed coding agents in TypeScript.

**Armin Ronacher (mitsuhiko): Pi 1.0 ships with MCP via Codemode.** Ronacher's [blog post "What is Codemode"](https://lucumr.pocoo.org/2026/10/6/codemode/) explains how Pi, which had long resisted MCP over composability and token concerns, now supports it natively through Codemode. The model generates JavaScript that runs inside a QuickJS sandbox — no Node APIs, filesystem, or network — and can call tools serially or in parallel. Pi 1.0 also introduced [deferred tool loading, virtual models, and Pi Durable](https://www.developersdigest.tech/blog/pi-1-0-release-guide-mcp-codemode-pi-durable) for long-running agent applications. Token savings are reported at roughly 5,300 → 3,300 prompt tokens for a GPT-5.6 request.

**Jerry Liu launches OpenDocRouter.** Liu (@jerryjliu0) [announced](https://x.com/jerryjliu0) OpenDocRouter, a single API for document parsing across 130+ frontier and open-weight models, each benchmarked on ParseBench with latency and cost per page. He noted [Claude Haiku 5.5 is available](https://x.com/jerryjliu0/status/2107940101217309041) at roughly $1.2/1K pages and "does quite well on tables and text reading order" but "struggles a bit on charts, semantic formatting, and bounding boxes." A [TypeScript SDK](https://github.com/run-llama/opendocrouter-ts) is available. Liu also [asked for conversation forking](https://x.com/jerryjliu0/status/2110904164922589427) in Claude Cowork, calling it one of the main reasons he's been using Codex as a daily driver.

**Peter Steinberger and OpenClaw.** Steinberger got [Sundar Pichai's attention on X](https://www.storyboard18.com/amp/trending/will-follow-up-sundar-pichai-answers-openclaw-creators-call-for-help-on-x-exchange-goes-viral-111928.htm) after OpenClaw's Android app sat in Google's review for over a week. Pichai replied "Ack, will follow up." Steinberger later confirmed the update went live. He also [followed up](https://x.com/steipete/status/2110607390706147383) on a compaction bug asking if it was "all fixed on main?" Steinberger will [speak at Cloudflare Connect 2026](https://x.com/CloudflareDev/status/2095580333924106570) on a panel about AI and agentic platforms.

## Source Control & Infrastructure

**Anthropic replaces git with Scion — and the Mononoke dispute continues.** Anthropic's October 13 engineering post revealed [Scion](https://fourweekmba.com/ai-anthropic-builds-scion-to-replace-git-at-30000-merges-a-day/), an in-house version control system. Key claims:

- Daily merges rose from ~2,500 in May to **30,000+ in September 2026**
- A 7-person team migrated the monorepo off git in 5 months
- 200x smaller CPU and memory footprint than git mirroring
- CI checkouts in seconds instead of minutes
- Also built **Antique**, a companion code review tool

Simon Willison [linked it](https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/) calling Scion "a reinvention of centralized source control along the lines of Subversion" and noting Anthropic credits Google's Piper and Meta's Sapling as prior art. The [sunshowers author](https://sunshowers.io/posts/anthropic-mononoke-2/) claimed insiders confirmed Scion "intentionally and blatantly ripped off Mononoke" and the data model matches Meta's Bonsai changesets exactly. Anthropic's author [responded on HN](https://news.ycombinator.com/item?id=50106738) adding a footnote crediting Mononoke. Anthropic says Scion is not meant as a general git replacement and [will not be released](https://aiweekly.co/alerts/anthropic-builds-scion-to-replace-git-after-merges-hit-30000day).

**AI-first code review.** On October 16, Willison [quoted](https://simonwillison.net/2026/Oct/16/code-review/) Anthropic-related authors on how "code review now runs continuously, with Claude reviewing changes before a human looks. Most changes have been reviewed and fixed by Claude at least once before a human is asked to look."

## Industry & Conferences

**AI Engineer NYC 2026 wraps up.** The [AI Engineer NYC conference](https://ai.engineer/nyc/2026) ran October 12–14 at the Sheraton New York Times Square. Highlights:

- **Claude Flows workshop** — swyx [posted](https://x.com/swyx/status/2109640508079263769) about the "world's first full-length workshop on Claude Flows" with @cjav_dev and Harrison Stall, calling it "PACKED room, standing room only"
- **Agent safety controls** — John Feminella of Two Sigma spoke on five controls that make agents visible, constrain their access, and keep human attention for critical decisions
- **Long-horizon agents** — Arca's Aman Singh presented on agents that run the business
- **"Who verifies the software factory?"** — Sonar's Kapil Mani and Addy Osmani discussed human review and testing for AI-written code
- **Anthropic on financial services** — Belinda Neal and Keon Shahab covered reusing separation of duties across financial workflows

swyx also [posted](https://x.com/swyx/status/2109797444204572880) "one of the best parts of my job is bringing out the best in ai in each city — I love New York" and shared [a "beautiful essay"](https://x.com/swyx/status/2110382190093836568) from the morning newspaper by Ben. Latent Space is reporting from the event with [Rick Mac on the case](https://x.com/swyx/status/2109640508079263769).

## Other Interesting Stuff

**Armin Ronacher on Python 3.15 and "AI psychosis."** Ronacher [joked on X](https://x.com/mitsuhiko/status/2108583464664776951) that "Python 3.15 is the first release where parts of the core team started to suffer AI psychosis. Welcome aboard!" noting the release notes include a "vibecoded adventure game" to explain new features. The post hit 247.9K views.

**Simon Willison on hard budget caps.** Willison [argued](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/) that pay-by-usage services and APIs need hard budget caps, not soft warnings. "After $X/month, send me a warning email" won't cut it.

**Willison builds a blog feature by voice.** In a [October 9 post](https://simonwillison.net/2026/Oct/9/built-using-my-voice/), he described building a new Newsletters feature "almost entirely using his voice, chatting away to his laptop while cooking dinner" via ChatGPT's Codex voice mode.

**Willison on agent security.** His [October 1 link](https://simonwillison.net/2026/Oct/1/matthew-green/) shared a Matthew Green quote on whether sandboxing can contain rogue agents, describing how "agents could pass instructions to each other and spread like a worm."

**Thariq Shihipar (@trq212)** continues working on Claude Code at Anthropic, focusing on [non-coding uses of coding agents](https://www.latent.space/p/thariq) — slides, research, knowledge management. His recent "cloud brain, local hands" framing for coding agents has been circulating, and a September post with ~603K views explored the local/cloud paradigm being built at frontier coding agent companies.

**LLMJunky (@LLMJunky)** — no October 2026 posts surfaced in search results. The account describes its author as "a director of a number of agents."
