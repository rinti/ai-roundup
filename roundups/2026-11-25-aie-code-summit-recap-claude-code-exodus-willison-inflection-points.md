---
title: "AIE Code Summit Recap, Claude Code Exodus & Willison's Three Inflection Points"
date: "2026-11-25"
summary: "Simon Willison published **'Three LLM Inflection Points in Twelve Months'**, naming Claude Opus 4.5 (Nov 2025), Fable-class models (June 2026), and 3D/game-dev capable models (Sept 2026) as the three moments coding agents leveled up. The **AI Engineer Code Summit** wrapped up in SF (Nov 10-12) with talks from Willison, Armin Ronacher, Lauren Tan, and Fabian Hedin. The **Claude Code talent exodus** continued: Cat Wu joined OpenAI to lead Core Products, Thariq Shihipar left Anthropic (destination unconfirmed), and Boris Cherny got a CNN profile ahead of Anthropic's expected IPO. Armin Ronacher published two posts: 'AI and Irontown' on nuance in AI discourse, and a conversation with Mario Zechner about software entropy and agent-driven code. Karpathy shipped HackerTube with Claude Code in ~2 hours. LlamaIndex released OCRia-1.5 document parsing models. Matt Pocock teased extending his AI Coding Crash Course to non-coding work. Theo stirred the pot on engineer unemployment and stripped telemetry from T3 Code."
tags:
  - Agentic Coding & Agent Harnesses
  - AI Engineer Code Summit
  - Models & Releases
  - People & Industry
  - Other Interesting Stuff
---

# AI Roundup — November 25, 2026

The AI Engineer Code Summit wrapped, Willison named his three inflection points, and the Claude Code team keeps shrinking.

## AI Engineer Code Summit (Nov 10-12, SF)

### The summit itself

The second annual [AI Engineer Code Summit](https://ai.engineer/code/2026) ran November 10-12 in San Francisco, with [69 in-person talks and 23 streamed sessions](https://ai.engineer/code/2026). Google DeepMind was the presenting sponsor. The theme was coding agents in production: code review, evals, and the infrastructure behind real workflows. [swyx](https://x.com/swyx/) (Shawn Wang), the curator, called coding agents "the pinnacle of where verifiable AI is going" and [announced next year's events](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-engineer-turns-goodbye-into-next-year), including a dedicated Code summit, a London/Europe event, and a large "World's Fair."

### Simon Willison: "Three LLM Inflection Points in Twelve Months"

The most-discussed post from the summit circuit. Willison [published a write-up](https://simonwillison.net/2026/Nov/24/llm-inflection-points/) on November 24 expanding on his Code Summit keynote. He identifies three moments where coding agents meaningfully leveled up:

1. **November 2025 — Claude Opus 4.5 / GPT-5.1 Codex.** The first time the default output from Claude Code was "generally right." Agents went from needing constant correction to producing usable code on the first pass.
2. **June/July 2026 — Fable-class models.** He cites an episode where a model autonomously built its own screenshot mechanism using pyobjc-framework-Quartz and spun up a CORS-enabled localhost logging server to debug a Safari rendering bug — without being asked.
3. **September/October 2026 — 3D modeling and game development.** Over about four months, frontier LLMs became capable enough at 3D work that entire game-dev workflows shifted to agent-driven pipelines.

The [talk recording is linked from the blog post](https://simonwillison.net/2026/Nov/24/llm-inflection-points/). Multiple [aggregators](https://glonce.com/simon-willison-sees-three-llm-inflection-points-since/) and [news digests](https://digestai.news/story/three-llm-inflection-points-in-twelve-months) picked it up within hours. This one is worth reading in full.

### Armin Ronacher: "The Software Atelier"

Ronacher's [Code Summit talk](https://ai.engineer/code/2026) (Thursday, Nov 12) argued that his coding agent became much more capable over the past year while its core harness barely changed. The theme: software quality matters more, not less, now that writing code is cheap, because agents amplify whatever entropy already exists in a codebase.

He expanded on this in a [conversation with Mario Zechner](https://www.aihero.dev/armin-ronacher-and-mario-zechner-on-coding-with-agents~fn8vd) published around the same time, arguing that models lean toward defensive code everywhere and that simpler systems are easier to understand over time.

A separate [write-up from AI Red Team](https://www.ai-redteam.com/insights/build-the-workshop-before-the-software-factory-armin-ronacher-earendil/) reported that his Pi coding agent changed its tool-use patterns after model upgrades, even though the harness itself barely changed — a useful data point for anyone running long-lived agent setups across model versions.

### Lauren Tan: "All Code Is Slop (Except Mine)"

Lauren Tan (SpaceXAI) [argued](https://github.com/The-Focus-AI/ai-engineer-code-2026-nov/blob/main/site/talks/2026-11-11-all-code-is-slop-except-mine.html) that better code makes agents more effective. Her practical advice: refactor so the right patterns are obvious rather than teaching agents every rule. A [recap from The Philosopher Developer](https://philosopherdeveloper.com/posts/takeaways-from-aie-code-summit) highlighted this as one of the summit's best talks.

### Other summit highlights

- **Fabian Hedin (Lovable)** opened by admitting the company nearly failed by building for agents too early.
- **Zach Bruggeman (Ramp)** talked about using coding agents to shape engineering culture.
- swyx's [Latent Space newsletter](https://latent.space/p/ainews-the-no-ai-slop-manifesto/) from mid-November covered "The No AI Slop Manifesto" alongside the summit content.

## Agentic Coding & Agent Harnesses

### Armin Ronacher: "AI and Irontown"

Ronacher [published "AI and Irontown"](https://lucumr.pocoo.org/2026/11/9/irontown/) on November 9, using the Studio Ghibli film as a frame. He describes AI as useful and empowering but with costs beyond its direct users, and calls for a conversation about AI that makes room for nuance without hatred. Coming from someone who has been openly enthusiastic about coding agents, it's a notable call for more careful discourse.

### Karpathy ships HackerTube with Claude Code

Andrej Karpathy [announced HackerTube](https://x.com/karpathy/) around November 1 — a curated video site built by filtering 43M Hacker News comments down to [~6,454 recommended videos](https://fourweekmba.com/ai-karpathy-has-claude-build-hackertube-from-6454-hn-videos/) across 150 topics. He [built it in roughly two hours](https://aiweekly.co/alerts/karpathy-ships-hackertube-in-2-hours-with-claude-opus-55) using Claude Opus 5.5 in the Claude Code desktop app, with Sonnet handling spam filtering through a Claude Code Workflow. His manual work was limited to creating a GCP API key, starting a VPS, and buying a domain. He reportedly later built "TristanTube" in about three minutes using the same approach.

### Matt Pocock: AI Coding Crash Course going beyond coding

Pocock [noted on November 19](https://x.com/mattpocockuk/status/2123341910559318124) that his AI Coding Crash Course material could be "directly ported to non-coding work," hinting at expansion. He also published [a timeline of AI coding since November 2025](https://x.com/mattpocockuk/status/2122287575557706226): Opus 4.5, Ralph loops getting popular, early orchestration efforts, and the "cognitive debt" era. The course itself [launched in August](https://x.com/mattpocockuk/status/2085796061361078718) and has trained 8,500+ engineers through AI Hero.

### Peter Steinberger: "Your agents will write this"

Steinberger [posted on November 12](https://x.com/steipete/status/2120974913679040680): "Don't worry, you don't need to learn how to write this. Your agents will. And we made them really good at it." (340K views.) He continues to ship [300-600 commits/day](https://mastodon.social/@steipete) and runs parallel Codex sessions from his OpenAI role. His [OpenClaw](https://github.com/steipete) repos were updated as recently as November 21.

### Theo: T3 Code telemetry removal and engineer unemployment take

Two notable posts from Theo this week:

- **November 24:** He [announced removing "all the invasive telemetry" from T3 Code](https://x.com/theo/status/2125318643357745548) and linked the PR. (147K views.) T3 Code had telemetry enabled by default via PostHog, sending platform, architecture, and version data.
- **November 22:** A provocative post: ["Engineers deserve the mass unemployment they have coming"](https://x.com/theo/status/2124470530590011704) (380K views), followed by a question about whether T3 Code or Antigravity gets better results with Gemini 4.

## People & Industry

### Claude Code talent exodus continues

The departures from Anthropic's Claude Code team continued through October-November:

- **Cat Wu**, who led product for Claude Code, [joined OpenAI on November 5](https://thenextweb.com/news/cat-wu-claude-code-anthropic-openai-core-products) to lead product management for Core Products — just 27 hours after [posting her exit](https://fourweekmba.com/ai-cat-wu-joins-openai-core-products-27-hours-after-exit-post/).
- **Thariq Shihipar** ([@trq212](https://x.com/trq212/)), one of the most visible Claude Code engineers on X, [left Anthropic on October 24](https://runtimewire.com/article/thariq-shihipar-and-anthony-morris-have-potentially-departed-anthropic) saying he'd "take a break before diving into something new." Reports that he joined OpenAI remain [unconfirmed](https://officechai.com/ai/anthropics-thariq-shihipar-who-was-the-face-of-claude-code-on-x-has-reportedly-joined-openai/).
- **Anthony Morris** also left around the same period. His next role hasn't been disclosed.
- In total, [4 Anthropic staff posted exits in 12 days, with 2 confirmed joining OpenAI](https://fourweekmba.com/ai-4-anthropic-staff-posted-exits-in-12-days-2-joined-openai/).

The timing — weeks before Anthropic's expected IPO — has drawn commentary, with [Sam Altman reportedly calling it "not a good sign"](https://www.ibtimes.sg/A000OqQ).

### Boris Cherny CNN profile

CNN [published a profile of Boris Cherny](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) on November 15, calling him the creator of Claude Code and tying the product to Anthropic's IPO story. He now says he writes "loops, not prompts" — [automated procedures that keep Claude working autonomously](https://pasqualepillitteri.it/en/news/33973/boris-cherny-claude-code-creator-loop-engineering). He's [speaking at AI Dev NYC](https://www.linkedin.com/in/bcherny/) (Nov 30 - Dec 1) on giving coding agents context.

### Thariq's last notable appearance

Before leaving, Thariq appeared at the AI Engineer event around November 13, [posting "it's time to retvrn"](https://x.com/trq212/status/2121067561915916575) alongside a live coding session. Observers described a game-building workflow where an agent-owned engine is driven by a DSL that defines characters and abilities. (71K views.)

## Models & Releases

### Simon Willison's LLM tool updates

Willison has been busy with his LLM CLI tool:
- [LLM 0.37](https://simonwillison.net/2026/Nov/2/llm/) (Nov 2) switched the default model to gpt-6-luna, at half the price of the previous default.
- [LLM 0.37.2](https://simonwillison.net/2026/Nov/11/llm/) (Nov 11) fixed an API key leakage security issue.
- [LLM 0.37.3](https://simonwillison.net/2026/Nov/16/llm/) (Nov 16) fixed a SQLite compatibility bug.
- [llm-gemini 0.36-0.38](https://simonwillison.net/2026/Nov/18/llm-gemini/) (Nov 10-18) added support for the Gemini 4 family. He noted the pricing for the Gemini 4 series is confusing.

### LlamaIndex OCRia-1.5 and the document parsing push

LlamaIndex [released OCRia-1.5](https://letsdatascience.com/news/llamaindex-releases-ocria-15-document-parsing-models-in-4b-a-71f7a1f9) on November 18 in 4B and 2B sizes, claiming better accuracy than OCRia-1 on complex tables, charts, and forms. This caps a [seven-week sprint](https://news.sulat.com/2026/11/24/llamaindex-ocria-nano/) that also produced OpenDocRouter (Oct 7), OCRia-1 (Oct 22), the Document Parsing Protocol (Oct 28), and ParseBench-2 (Nov 12). Jerry Liu [announced the releases on X](https://x.com/jerryjliu0/). Reports of a smaller "OCRia-nano-1" model at 8.1M parameters [surfaced on November 23-24](https://news.sulat.com/2026/11/24/llamaindex-ocria-nano/) but have limited sourcing.

## Other Interesting Stuff

### Armin Ronacher on Rust: Abolish Lock Poisoning

Not AI, but notable from the same person: Ronacher [published "Abolish Lock Poisoning"](https://lucumr.pocoo.org/2026/11/25/poisoning/) today (November 25), arguing Rust should drop or make opt-in mutex poisoning from `std::sync::Mutex`. He says he has never seen code that recovers from a poisoned lock properly. [Picked up on news.lavx.hu](https://news.lavx.hu/article/armin-ronacher-urges-rust-to-remove-mutex-poisoning).

### Karpathy on the AI understanding gap

Karpathy [revisited an earlier tweet](https://x.com/karpathy/status/2109361546505966046) in October, arguing the gap in public understanding of AI capability is widening. He estimates ~20M people (0.2% of the population) see first-hand that projects that used to take weeks can now be completed by agents with a prompt. He also [argued](https://x.com/karpathy/status/2106806571321966793) that 99%+ of people now paying attention to AI have been onboarded in less than a year, which is "very confusing to the AI dinosaurs."

### Latent Space: "The No AI Slop Manifesto" and Ripple-65B

swyx's [Latent Space newsletter from November 14](https://latent.space/p/ainews-the-no-ai-slop-manifesto/) covered "The No AI Slop Manifesto." A [November 5 edition](https://latent.space/p/ainews-it-s-swapping-season/) highlighted the Ripple-65B preview, which Ricursive claims is the best US open-weight model on agentic coding benchmarks.

---

*Note: This roundup was compiled via web search. Direct access to nitter.net, x.com, and several blog domains was unavailable from this session, so some items may be incomplete or based on secondary sources. Links to x.com posts are included for reference but were not directly verified.*
