---
title: "Fable 5.2, Gemini 4 Neon, Devin Bots & The Software Atelier"
date: "2026-11-22"
summary: "A packed two weeks in AI coding: **Anthropic shipped Claude Fable 5.2 and Mythos 5.2** (Nov 9) with 30% faster outputs and a 20% price cut, **Google rolled out Gemini 4 Neon** (Nov 18) as the third model in a rapidly expanding lineup, and **Cognition launched Devin Bots** (Nov 17) — persistent manager-agents that lead teams of Devins for days or weeks. The **AI Engineer Code Summit** (Nov 10–12, SF) brought together the coding-agent world, highlighted by Armin Ronacher's talk 'The Software Atelier' arguing we should improve the workshop before scaling the factory. Matt Pocock posted a month-by-month retrospective of AI coding since Nov 2025 and says almost nobody writes code by hand anymore. Boris Cherny got a CNN profile as the creator of Claude Code, and his 'delete your CLAUDE.md every six months' advice keeps reverberating. Simon Willison shipped a flurry of LLM CLI releases covering every new model, and Theo summed up the state of play: Anthropic changed how we code, Google is pleasant, OpenAI is smart but hard to use."
tags:
  - Models & Releases
  - Agentic Coding & Agent Harnesses
  - AI Engineer Code Summit
  - Claude Code & Anthropic
  - LLM Tooling
  - Industry Commentary
---

# AI Roundup — November 22, 2026

## Models & Releases

### Anthropic ships Claude Fable 5.2 and Mythos 5.2

Anthropic [released Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) on November 9. The models bring gains in coding, reasoning, and vision, with outputs running up to 30% faster than the 5.1 generation. Pricing dropped to $8/M input and $40/M output tokens — roughly a 20% cut ([CNBC coverage](https://www.cnbc.com/2026/11/09/anthropic-claude-fable-5-2-mythos-5-2.html)).

Fable 5.2 is generally available. Mythos 5.2 — the same model without certain cybersecurity and biology safeguards — remains restricted to vetted organizations in Anthropic's Life Sciences and Cyber Verification Programs. Anthropic says both models score higher than Opus 5.5 on nearly all evaluated capabilities, and Fable 5.2's safeguards block about 55% fewer requests than Fable 5.1's.

The release came shortly before Anthropic's expected IPO ([MacRumors](https://www.macrumors.com/2026/11/09/anthropic-launches-claude-fable-5-2/), [Yahoo Finance](https://finance.yahoo.com/technology/article/anthropic-debuts-claude-fable-52-and-mythos-52-models-as-ipo-nears-190405087.html)).

### Google rolls out Gemini 4 Neon — the lineup is now four models

Google's Gemini 4 family expanded rapidly through November. Carbon landed around Nov 10–11, Hydrogen on Nov 12–14, and [Neon arrived on November 18](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) as a mid-tier model positioned between Hydrogen and Carbon.

Google describes Neon as built for complex coding, analytical reasoning, and enterprise workflows. Pricing: $3/M input and $15/M output — double Hydrogen's rate. Carbon and Argon are on a promotional $2/$10 until November 30, then rise to $4/$20 ([9to5Google](https://9to5google.com/2026/11/18/gemini-4-neon-announcement/), [DataCamp overview](https://www.datacamp.com/blog/gemini-4-neon)).

Simon Willison tracked all of them in real time with [llm-gemini releases](https://simonwillison.net/2026/Nov/20/llm-gemini/) — versions 0.36 (Carbon), 0.37 (Hydrogen), 0.38 (Neon), and 0.38.1 (a reasoning-level fix he'd missed).

## Agentic Coding & Agent Harnesses

### Cognition launches Devin Bots: persistent agents that lead agent teams

Cognition [launched Devin Bots on November 17](https://i10x.ai/news/cognition-devin-bots-persistent-coding-agents) — persistent manager-agents with their own memory that take an outcome, split it into work, and run a team of Devin sessions on individual cloud machines until pull requests are ready.

Coverage says Cognition's internal use merged roughly 1,600 PRs in a week. The launch follows their $2B Series E at a $48B valuation in September. Bots are live at devin.ai/bots for existing customers; standalone pricing hasn't been announced ([CryptoBriefing](https://cryptobriefing.com/cognition-launches-devin-bots-ai-coding/), [Emergent](https://emergent.sh/news/cognition-ships-devin-bots-supervise-coding)).

Swyx [called them](https://x.com/swyx/status/2122746401482592549) "multi-agent teams done right" after trialing them for a week:

> "always on, proactive (but tuned for ROI) — own outcomes not tasks (but can collab w others) — manages teams of subagents (and reviews itself) — available everywhere (call text slack whatever) — consistent reporting"

He argues users want agent *managers* rather than "AI Employees," and says this replaces the "agent swarms" hype.

## AI Engineer Code Summit (Nov 10–12, San Francisco)

The [AI Engineer Code Summit](https://ai.engineer/code/2026) ran workshops on Nov 10 followed by talks, expo and networking on Nov 11–12 at the Hilton San Francisco Union Square. Eight of the 32 mainstage talks came from Google DeepMind, Anthropic, OpenAI, and xAI. Themes: coding agents, code review, software factories, agent harnesses, PR review and repair workflows, and safe build/verification/release loops.

### Armin Ronacher: "The Software Atelier"

Armin Ronacher (CTO of Earendil, creator of Flask) [gave a talk](https://ai.engineer/code/2026/talks/armin-ronacher) arguing for improving the workshop before maximizing the software factory's output. Key points: his Pi agent has grown much more capable while its core harness has barely changed, and he advocates for agents that can stop, suspend, restore, and continue. He also published a blog post ["AI and Irontown"](https://lucumr.pocoo.org/) (Nov 9) — a non-technical essay on AI's benefits and costs.

### Thariq Shihipar: "The Sweet Side of the Bitter Lesson"

Thariq (@trq212, formerly Claude Code team at Anthropic) [gave a closing talk](https://x.com/trq212/status/2120620900785820143) about how the experience of using coding agents could evolve, and how we get to shape it. His talk was later [featured in Latent Space's five trends defining AI engineering](https://x.com/trq212/status/2121067561915916575). He also demonstrated building a game live with an agent-owned engine and a DSL for defining characters and abilities.

### Swyx: "Something to Celebrate"

Swyx gave a [closing segment](https://ai.engineer/code/2026/schedule) and separately promoted the event by hyping [Ahmad Osman's return](https://x.com/swyx/status/2119140818690974203) to AIE CODE. He continues to frame coding agents as the top of verifiable AI and the clearest path to demos and revenue.

## Claude Code & Anthropic

### Boris Cherny profiled by CNN as "the man behind Claude Code"

CNN [published a profile](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) of Boris Cherny on November 15, describing him as head of core apps at Anthropic and the creator of Claude Code. Reports say he stopped writing code by hand in late 2025 and now runs 10–30 PRs per day with multiple agents at once.

His "delete your CLAUDE.md" advice continues to reverberate. The idea — [first surfaced in a Y Combinator interview](https://dev.to/reporails/opus-5-delete-your-claudemd-9ga) — is to delete your CLAUDE.md, skills, and hooks every six months to see what the latest model can do without stale scaffolding. Commentators read it as a call for intentional reset, not an abandonment of project conventions ([Substack discussion](https://charliehills.substack.com/p/delete-your-claudemd)).

### Peter Steinberger: OpenClaw updates and macOS agent friction

Steipete posted about [landing a fix in OpenClaw](https://x.com/steipete) for users of the embedded harness (Nov 19) and separately [called on Apple](https://x.com/steipete) to reduce macOS permission alerts so agents can work without constant supervision (Nov 16). He continues building at OpenAI on the next generation of personal AI agents, with his GitHub repos showing [recent activity](https://github.com/steipete?tab=repositories) through Nov 21.

### Karpathy: side projects and Anthropic pre-training work

Andrej Karpathy has been relatively quiet this month. Earlier in November he shared a weekend project — filtering 43M Hacker News comments with Claude into 6,454 recommended videos — and posted about [TristanTube](https://x.com/karpathy), built with Claude Code. He joined Anthropic's pre-training team under Nick Joseph in May 2026 and continues in that role.

## LLM Tooling

### Simon Willison: a flurry of LLM CLI releases

Simon Willison shipped an impressive string of releases through November:

- **[llm 0.37](https://simonwillison.net/2026/Nov/2/llm/)** (Nov 2) — two months of accumulated features and fixes
- **[llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/)** (Nov 9) — added support for Fable 5.2 and Mythos 5.2
- **[llm 0.37.2](https://simonwillison.net/2026/Nov/11/llm/)** (Nov 11) — security fix
- **[llm-gemini 0.36–0.38.1](https://simonwillison.net/2026/Nov/20/llm-gemini/)** (Nov 10–20) — tracking Carbon, Hydrogen, Neon, and a reasoning-level bugfix
- **[datasette-agent 0.6a0](https://simonwillison.net/2026/Nov/15/datasette-agent/)** (Nov 15) — an LLM-powered agent for Datasette
- **[llm 0.37.3](https://simonwillison.net/2026/Nov/16/llm/)** (Nov 16) — bugfix for new SQLite 3.54.1 in Homebrew

### LlamaIndex: ParseBench-2 and document hardening

Jerry Liu's LlamaIndex shipped [ParseBench-2](https://www.llamaindex.ai/blog) (Nov 12), a benchmark covering six dimensions including forms. Other November blog posts cover a LlamaParse deployment piece (Nov 5) and application testing hardening for sensitive documents (Nov 11).

## Industry Commentary

### Matt Pocock: "A Brief History of AI Coding Since Nov 2025"

Matt Pocock [posted a month-by-month retrospective](https://x.com/mattpocockuk/status/2122287575557706226) (Nov 16, ~46.8K views) tracing AI coding from Opus 4.5 through to now. His bottom line: few people write code by hand anymore, though the "dark factory" idea still feels far off and reading the code remains essential. He also [noted](https://x.com/mattpocockuk/status/2123341910559318124) (Nov 19) that his AI Coding Crash Course material ports easily to non-coding work.

His next cohort — "AI Coding For Real Engineers" — is a [complete re-record](https://x.com/mattpocockuk/status/2095899598430552471) covering wayfinder, codebase design, automated checks/review, and building a software factory, planned for November.

### Theo: "It's the end of 2026"

Theo [posted a state-of-play summary](https://x.com/theo/status/2123509826856878541):

> "Anthropic recently released a model that's changed how we code forever. Google put out a great general model that is pleasant to work with. OpenAI put out the most intelligent model ever but it sucks to actually use."

He also released podcast episodes including "Copilot is so desperate, they made it free" and ["AI Models: A Race To The Bottom"](https://podimo.com/en/shows/theo-t3-gg/episode/f3666635-834d-40f7-ad6a-247db8c21249) (Nov 13).

## Other Bits

- **OpenAI ChatGPT Images 2.6** reportedly added animated GIF generation in November
- **X (Twitter)** is [testing automated detection](https://socialbee.com/blog/twitter-updates/) of AI-generated posts, with potential labeling
- **Kimi K3.1 Pro Prime** from Moonshot AI released November 20 — latest entry on the LLM release tracker
- **Karpathy's "Deep Dive into LLMs like ChatGPT"** video hit 10.39M views as of Nov 13

---

*Note: nitter.net and direct social media sites were not accessible from this session's network configuration. Content was gathered via web search and may miss very recent posts (last ~24h). Links to x.com posts are included but were not directly verified in this session.*
