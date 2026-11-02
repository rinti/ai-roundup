---
title: "Anthropic S-1 Filed, Thariq & Morris Exit Claude Code, DeepSeek Harness Drops & Karpathy Ships HackerTube"
date: "2026-11-02"
summary: "Anthropic filed its S-1 on October 26 targeting a late-November listing with $16.3B in H1 revenue, but the week's bigger conversation is the back-to-back departures of Claude Code engineers **Thariq Shihipar** and **Anthony Morris** — weeks before the IPO. DeepSeek launched **Harness v0.1**, an MIT-licensed open-source coding agent positioning itself as the Claude Code alternative. **Karpathy** shipped **HackerTube** on Halloween — 6,454 Hacker News-curated videos organized by Claude into 150 topics, built in about two hours. **JetBrains** released **Mellum 2.1**, a 12B MoE open-weight model purpose-built for coding sub-agents. **Epic Games** told developers 'no more hand-written code' on their Disney shooter, and **Simon Willison** shared a Kyle Kingsbury quote on LLM-driven erosion of trust in documentation."
tags:
  - Anthropic IPO & Departures
  - Coding Agents & Harnesses
  - Models & Open Weights
  - Industry Moves
  - Other Bits
---

# AI Roundup — November 2, 2026

> **Note:** nitter.net and direct X profile scraping were unavailable in this session's network environment. This roundup was assembled from web search results, blog posts, and news coverage. Some items are from the past week rather than strictly the last 24 hours.

---

## Anthropic IPO & Departures

### Anthropic files its S-1 — IPO targeting late November

Anthropic [filed its S-1 publicly](https://www.iposcoop.com/the-ipo-buzz-anthropic-ant-proposed-files-its-s-1/) on October 26, 2026, after a confidential draft filing back in June. The numbers are staggering: **$16.3 billion in revenue** during H1 2026, up from $1.2B in the same period last year. Nearly 25% of revenue in the first nine months came from just five customers, though no single customer exceeded 10%.

The proposed ticker is **ANT** on Nasdaq. Analysts expect the raise could hit [$75 billion or more](https://www.sharesansar.com/newsdetail/anthropics-ipo-could-become-worlds-largest-ipo-surpassing-spacexs-record-breaking-ipo-2026-10-28), potentially rivaling SpaceX's historic IPO from June 2026. The May 2026 Series H set a post-money valuation of roughly **$965 billion** after raising $65B.

The listing is reportedly [targeting late November](https://richnerds.substack.com/p/anthropic-ipo-filing-2026), though timing has slipped several times already — it was initially penciled in for September, then early October.

### Thariq Shihipar and Anthony Morris leave Claude Code

The bigger conversation this week: two of Claude Code's most visible engineers announced their departures within a day of each other, [weeks before the IPO](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/).

**Thariq Shihipar** [announced on X](https://x.com/trq212/status/2115937378674372783) on October 24 that he had left Anthropic after more than a year on Claude Code, saying he had watched it "scale larger than I ever imagined" and that he "really loved working at Ant." He plans to take a break before starting something new.

**Anthony Morris**, who built Claude Code Desktop, [reportedly also departed](https://magica.com/news/anthony-morris-claude-code-desktop-leaves-anthropic) around the same time — though [some outlets say](https://runtimewire.com/article/thariq-shihipar-and-anthony-morris-have-potentially-departed-anthropic) his departure remains unconfirmed.

Sam Altman [weighed in](https://www.ibtimes.sg/A000OqQ): "This is not a good sign."

In his final weeks, Thariq posted several reflective threads:

- **On coding-agent mania:** "There's 100% a kind of mania you can get into with coding agents, where it feels like you're getting a lot done and working all the time but nothing is really happening. I think it's often a form of avoidance of something else in life." ([link](https://x.com/trq212/status/2115937378674372783))
- **On abstraction layers:** "Working at a higher level of abstraction has always required understanding the lower level ones, I don't think coding agents changes this." ([link](https://x.com/trq212/status/2107504677143368163))
- **Field Guide to Fable:** Published an article on X — ["A Field Guide to Fable: Finding Your Unknowns"](https://x.com/trq212/article/2073100352921215386) — a method for identifying what you don't yet know when working with an AI model.

---

## Coding Agents & Harnesses

### DeepSeek Harness v0.1 — MIT-licensed Claude Code rival

DeepSeek launched [**Harness v0.1**](https://oodaloop.com/briefs/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices/), an open-source (MIT) coding agent harness built on a plugin architecture. It runs locally via a CLI with the interface served on localhost.

Alongside it came **DeepSeek-V4.1-Flash-1017**, a 763B-parameter model also under MIT, and the official **DeepSeek-V4-Pro** on their API. Coverage frames it as [DeepSeek's answer to Claude Code and Codex](https://digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around), with one outlet reporting it [hit 4,000 GitHub stars in a day](https://shattered.io/deepseek-open-sources-super-agent-oct-31-2026).

A [separate write-up](https://yuv.ai/blog/deepseek-harness-v4-1-flash) notes the harness's "everything is a Plugin" architecture and that free search access was available until November 1.

### Karpathy ships HackerTube — Claude-curated YouTube from 43M HN comments

Andrej Karpathy launched [**HackerTube**](https://cryptobriefing.com/andrej-karpathy-launches-hackertube/) on October 31 — an algorithm-free YouTube alternative curated by Claude. The process: Claude pulled roughly **43 million Hacker News comments** spanning 2007–2026 to find recommended YouTube links, resulting in **6,454 videos sorted into 150 topics**.

Karpathy says [the whole thing took about two hours of his own time](https://startupfortune.com/andrej-karpathy-says-6454-hacker-news-picks-beat-youtubes-algorithm-for-him/). The full dataset is exported for anyone to rebuild. The argument: curated human picks can beat recommendation algorithms.

Karpathy [joined Anthropic earlier in 2026](https://analyticsindiamag.com/ai-news/andrej-karpathy-joins-anthropic) to work on pretraining research.

### steipete: "You should be designing loops that prompt your agents"

Peter Steinberger's [most-shared recent take](https://x.com/steipete/status/2063697162748260627): **"Here's your monthly reminder that you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents."**

Steinberger [joined OpenAI in February 2026](https://www.bloomberg.com/news/articles/2026-02-15/openai-hires-openclaw-ai-agent-developer-peter-steinberg) to lead their personal agents push, with OpenClaw [becoming a foundation](https://neowin.net/amp/openclaws-founder-peter-steinberger-is-joining-openai/): "open, independent, and just getting started." He beat out competing offers from Meta and xAI.

### Matt Pocock ships skills v1.3

Matt Pocock's [mattpocock/skills repo](https://x.com/mattpocockuk/status/2107063379751789010) — still sitting at the top of GitHub trending — got a v1.3 update adding:
- **`/pr`** — a command for writing PR descriptions
- **`/implement-spec`** — works through a spec with subagents
- Renamed `CONTEXT.md` to `GLOSSARY.md`

He also added **"Software Factory"** to his [AI Coding Dictionary](https://x.com/mattpocockuk/status/2103103504567107712): "It's the hype term of the day — time we started using it properly."

In a [Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/ai-skills-with-matt-pocock), he said he's moving his coding sessions to cloud agents so they run when he closes his laptop.

---

## Models & Open Weights

### JetBrains Mellum 2.1 — 12B MoE for coding agents

JetBrains released [**Mellum 2.1**](https://tech-insider.org/jetbrains-mellum-2-1-12b-moe-coding-agents-2026/), a 12B mixture-of-experts model trained with reinforcement learning in real coding environments, available on Hugging Face under **Apache 2.0**.

Key specs:
- **131,072 token context** — enough for a mid-sized repo
- **SWE-bench Verified:** 47.0
- **LiveCodeBench v6:** 82.0 (vs 69.4 for Mellum2 Thinking)
- Built for routing, Q&A, sub-agents, and private AI use

Positioning: not a frontier chat model but a [purpose-built fast sub-agent](https://dev.to/davekurian/jetbrains-open-sources-mellum2-to-challenge-third-party-api-limitations-2mc9) for software engineering systems. JetBrains also launched **JetBrains Context**, a repository intelligence layer for coding agents.

---

## Industry Moves

### Epic Games: "No more hand-written code"

[Bloomberg reported](https://www.gamedeveloper.com/programming/no-more-hand-written-code-epic-s-disney-project-reportedly-shifts-to-ai-first-development) on October 12 that Epic Games told developers to move an unannounced Disney shooter (featuring Star Wars and Marvel characters) to an **"AI-first" production model**.

A director's internal message reportedly said "no more hand-written code" — Claude-based tools would generate code with humans checking output for errors. Artists were told assets must be "generated with full AI workflows."

CEO Tim Sweeney framed it as ["maximum AI acceleration"](https://hothardware.com/news/epic-games-major-ai-push). The game has been delayed from its March 2027 window, and Epic [cut ~1,000 jobs earlier in 2026](https://massivelyop.com/2026/10/14/epic-games-delays-a-marvel-and-star-wars-extraction-shooter-in-order-to-pivot-to-an-ai-first-production-model/) citing weaker Fortnite engagement. [Reaction has been overwhelmingly critical](https://www.gamingonlinux.com/2026/10/epic-games-has-gone-completely-off-the-deep-end-with-ai/comment_id=301669).

### Jerry Liu / LlamaIndex: document context is the real moat

Jerry Liu has been pushing the thesis that [context quality is the real competitive edge](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives/) now that agent loops are capable enough. Recent releases:

- **ExtractBench Pro** — a benchmark for complex document extraction using [synthetic templates](https://x.com/jerryjliu0/status/2111886670312374531) so customers' private data isn't needed
- **Extract v2.5** — extraction agents that [outperform Opus 5.5 and GPT-6 Sol](https://x.com/jerryjliu0/status/2106187777058693216) while being 30%–4x cheaper
- **OpenDocRouter** — a unified API for document parsing with frontier and open-weight models

He reports about 95% of LlamaIndex code is now generated by AI.

---

## Other Bits

### Simon Willison: Kyle Kingsbury on LLM erosion of trust

Simon Willison [shared a quote](https://simonwillison.net/2026/Nov/1/kyle-kingsbury/) from Kyle Kingsbury (of Jepsen fame) on November 1, about how LLM use erodes trust in documentation and software. The quote comes from a Jepsen results post for ParticleDB 1.1.4. This continues Willison's ongoing thread of documenting the second-order effects of AI on software quality.

His [September newsletter](https://simonwillison.net/2026/Oct/3/newsletter/) covered the late-September releases including Claude Opus 5.5 and GPT-6 Sol, plus a pricing war in which Opus 5.5 got a 20% price cut.

### Armin Ronacher (mitsuhiko): code quality is down everywhere

Armin Ronacher has been [consistently sounding the alarm](https://newsletter.pragmaticengineer.com/p/python-go-rust-typescript-and-ai) on code quality, telling The Pragmatic Engineer that "code quality is down everywhere" and serious projects are shipping with "vibe slop."

His recent essays:
- [**"The Tower Keeps Rising"**](https://ai-tldr.dev/releases/lucumr-tower-keeps-rising-jul13/) (July) — coding agents let engineers ship in parallel but weaken the coordination that keeps large codebases coherent
- [**"The Coming Loop"**](https://www.developersdigest.tech/blog/armin-ronacher-coming-loop-agent-comprehension) (June) — explores the tension between autonomous AI loops and the engineering comprehension needed for reliability

He [founded Earendil](https://speakerdeck.com/mitsuhiko/agentic-coding-the-future-of-software-development-with-agents), an agent company, earlier this year.

### Boris Cherny: "Coding is solved, what's next"

Claude Code creator Boris Cherny has been making the rounds with an increasingly bold thesis. In a [Startup Hub interview](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/anthropic-s-boris-cherny-coding-is-solved-what-s-next), he declared "coding is solved" and shifted focus to what comes after. He reports [running 5 Claude instances in parallel](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are), with about [90% of Claude Code written with Claude Code](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny). Though he also acknowledged: "Vibe coding — I do this all the time, but it's definitely not the thing you want to do all the time."

### agent-desktop: accessibility trees as the agent API

[**agent-desktop**](https://agent-browser.dev/desktop) (not Vercel's, despite earlier reports) is a CLI and C library that lets AI agents read and operate native desktop apps through the OS accessibility tree on macOS, Windows, and Linux. Separately, Vercel Labs' [**agent-browser**](https://agent-browser.dev/desktop) provides similar accessibility-tree snapshots for browser automation. Also notable: [**BlindPilot**](https://aiagentstore.ai/ai-agent-news/topic/accessibility-inclusion/2026-10-06) shipped v0.43.3, a screen-reader-first desktop front end for coding agents supporting NVDA, JAWS, and VoiceOver.

### Karpathy's AI Twitter take making the rounds

A Karpathy quote is being widely recirculated: **"90% of what AI Twitter tells you to learn will be dead in 6 months."** Multiple accounts are building threads off it listing tools that have already died in production: AutoGen/AG2, CrewAI, autonomous agent pitches, agent marketplaces, benchmark leaderboards, and horizontal "build any agent" platforms. ([Thread](https://x.com/sairahul1/status/2084571632832811174))
