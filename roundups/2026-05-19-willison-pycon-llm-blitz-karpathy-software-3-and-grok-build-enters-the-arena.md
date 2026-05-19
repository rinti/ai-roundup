---
title: "Willison's PyCon LLM Blitz, Karpathy's Software 3.0 & Grok Build Enters the Arena"
date: "2026-05-19"
summary: "Simon Willison published **annotated slides from his PyCon US 2026 lightning talk** today — \"The last six months in LLMs in five minutes\" — calling November 2025 the inflection point where coding agents went from *often-work to mostly-work*, and noting the \"best\" model crown changed hands **five times** between three providers. Meanwhile Karpathy's **Sequoia Ascent 2026 fireside chat summary** kept compounding: Software 1.0/2.0/3.0 framework, the *menugen* example of entire apps being \"engulfed\" by a single multimodal prompt, and the claim that December 2025 was when the *unit of programming* shifted from lines of code to macro-actions delegated to agents. **xAI shipped Grok Build** — an 8-agent-parallel CLI with a promised Arena Mode evaluation layer — at $299/mo (intro $99), scoring 70.8% on SWE-Bench Verified. **Jerry Liu told VentureBeat the scaffolding era is over**: agent loops are capable enough that context quality is the new moat, and *\"the new programming language is essentially English.\"* Matt Pocock **rebranded his course** from \"Claude Code for Real Engineers\" to \"AI Coding for Real Engineers\" — a small rename that tracks a big shift. Steipete continued building the OpenClaw toolchain with **CodexBar 0.26.0** (Kiro, Antigravity, OpenRouter, Kimi support) and a **browser built into RepoBar** for inline issue context. Mitsuhiko's Monday verdict on his **personal DeepSeek V4 Flash quant** calibrated from his own Pi coding sessions: *\"cannot tell or measure a difference.\"*"
tags:
  - LLM Landscape & Model Race
  - Agentic Coding & Agent Harnesses
  - Tooling & Developer Experience
  - Industry & Misc
---

# AI Roundup — May 19, 2026

## LLM Landscape & Model Race

### Simon Willison: "The last six months in LLMs in five minutes" — PyCon US 2026

[Simon Willison published annotated slides](https://simonwillison.net/2026/May/19/5-minute-llms/) from his five-minute PyCon US 2026 lightning talk today — the most concise state-of-LLMs summary you'll find this week. The key claims:

**November 2025 was the inflection point.** OpenAI and Anthropic had spent most of 2025 running Reinforcement Learning from Verifiable Rewards to increase code quality, especially when paired with their Codex and Claude Code agent harnesses. Coding agents went from *often-work to mostly-work*, crossing a quality barrier where you could use them as a daily-driver without spending most of your time fixing their mistakes.

**The "best" model crown changed hands five times.** At the start of November the widely acknowledged best model was Claude Sonnet 4.5 (released September 29). Then GPT-5.1, then Gemini 3, then GPT-5.1 Codex Max, then Anthropic took it back with Claude Opus 4.5. Simon's visual benchmark: *"Generate an SVG of a pelican riding a bicycle"* — each model's pelican tells you something the benchmarks don't.

The talk also flagged recent open-weight moves: Google releasing the **Gemma 4** series and Chinese lab GLM releasing **GLM-5.1** — an open-weight 1.5TB model.

Also on Substack: [newsletter version](https://simonw.substack.com/p/the-last-six-months-in-llms-in-five). Earlier PyCon coverage: [Simon's live blog of the AI track](https://simonwillison.net/2026/May/6/code-w-claude-2026/).

### xAI ships Grok Build — 8-parallel-agent CLI enters the coding agent race

[xAI launched Grok Build](https://devops.com/xai-enters-the-coding-agent-race-with-grok-build/) on May 14 — their first coding agent — and the reactions are still rolling in. The headline features:

- **8 parallel agents** working a plan → search → build pipeline simultaneously
- **Arena Mode** (confirmed in code traces, not yet live in beta): an automated evaluation layer that scores and ranks competing outputs before a developer reviews
- **Local-first architecture**: code runs on your machine, nothing transmitted to xAI during sessions, air-gap compatible
- Built on **grok-code-fast-1**, a from-scratch model trained on programming content and real-world PRs, scoring **70.8% on SWE-Bench Verified** with a 256k-token context window
- **$299/month** (SuperGrok Heavy), intro $99/month for first six months

The interesting positioning: where Claude Code and Codex are single-agent-with-tools, Grok Build bets on multi-agent parallelism as the differentiator. Whether Arena Mode actually works at catching the errors that slip through individual agents is the question worth watching.

Coverage: [Techloy's 6-way comparison](https://www.techloy.com/grok-build-early-beta-6-ways-xais-new-ai-coding-agent-plans-to-take-on-claude-code/), [Android Headlines](https://www.androidheadlines.com/2026/05/xai-grok-build-agentic-ai-coding-tool-launch-beta.html).

## Agentic Coding & Agent Harnesses

### Karpathy: Software 3.0, menugen, and the Sequoia Ascent 2026 recap

[Karpathy's fireside chat summary](https://x.com/karpathy/status/2049903821095354523) from Sequoia Ascent 2026 (with [full blog post](https://karpathy.bearblog.dev/sequoia-ascent-2026/)) kept generating derivative threads and commentary all weekend. The framework that stuck:

- **Software 1.0**: humans write explicit code
- **Software 2.0**: humans curate datasets and train neural networks
- **Software 3.0**: humans write prompts; the LLM is the interpreter, the context window is the program

The *menugen* example crystallizes the shift: a traditional app required frontend code, APIs, image generation, deployment, auth, and infrastructure. The Software 3.0 version is *"take a photo, give it to a multimodal model, get the result"* — the entire app stack disappears into a single prompt. Karpathy's question: stop asking *"what existing workflow can AI speed up?"* and start asking *"what information transformation was impossible before, but is now natural?"*

On the vibe coding vs agentic engineering distinction: **vibe coding raises the floor** (anyone can build software), **agentic engineering raises the ceiling** (the professional discipline of coordinating fallible, stochastic agents while preserving correctness, security, and taste). The December 2025 inflection point is when the unit of programming shifted from typing lines of code to delegating larger *macro actions* to agents.

[Shruti Gandhi's founder takeaways thread](https://x.com/atShruti/status/2049992301934764501) distills four "obvious in 2026" lessons, the standout being #4: *"Train your agents with your domain-specific data. Big labs trained AI on math and code. They didn't train it on your industry knowledge."*

### Jerry Liu: the scaffolding era is over, context is the new moat

[VentureBeat coverage](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives/) of LlamaIndex CEO Jerry Liu's thesis that the AI framework era is ending. The scaffolding layer developers once needed — indexing layers, query engines, retrieval pipelines, carefully orchestrated agent loops — is collapsing. Agent patterns have consolidated toward what Liu calls a *"managed agent diagram"*: a harness layer combined with tools, MCP connectors, and skills plug-ins, rather than custom-built orchestration for every workflow.

The provocation: *"the new programming language is essentially English"* — about 95% of LlamaIndex code is now generated by AI. The competitive moat moves from *how you build the pipeline* to *how you curate and structure the data fed into models* — context engineering, not scaffolding engineering.

This dovetails with the [Is Grep All You Need paper](https://x.com/jerryjliu0/status/2056077617355522534) Liu highlighted yesterday (covered in [May 18 roundup](2026-05-18-grep-wins-retrieval-lossless-tree-memory-and-pocock-pitches-flag-first-agents.md)): when the harness is smart enough, even primitive retrieval wins.

### Matt Pocock: from "Claude Code for Real Engineers" to "AI Coding for Real Engineers"

[Pocock's rename](https://x.com/mattpocockuk/status/2055177489538756984) (May 15) is small but tracks a real shift — the course that started as Claude-Code-specific is now provider-agnostic. The core curriculum hasn't changed (communicating, anticipating, planning, decomposing), but the framing reflects what Karpathy and Liu are both saying: the agent brand matters less than the harness skills.

His earlier [AI terminology definitions thread](https://x.com/mattpocockuk/status/2050456062520615131) — **Model** (stateless blob of parameters, does next-token prediction), **Harness** (everything around the model that turns it into an agent: tools, system prompt, context window management) — helped seed the entire *"harness engineering"* discourse that [TechTimes](https://www.techtimes.com/articles/316587/20260513/harness-engineering-emerges-fourth-paradigm-ai-engineering.htm) is now calling the fourth paradigm of AI engineering.

His [video hitting 96K hours of watch time](https://x.com/mattpocockuk/status/2053583757743911432) (a decade of viewing) and the [/improve-codebase-architecture skill update](https://x.com/mattpocockuk/status/2047759493581156377) with its glossary of codebase-quality terminology round out the Pocock ecosystem this week.

## Tooling & Developer Experience

### Steipete: CodexBar 0.26.0 and a browser in RepoBar

[CodexBar 0.26.0](https://x.com/steipete/status/2055163690790334865) (May 15) adds support for four new providers: **Kiro**, **Antigravity**, **OpenRouter**, and **Kimi** — plus keyboard navigation for the merged provider switcher. The release also improves Codex/Claude limits and cost scoping.

Separately, Steipete [built a browser into RepoBar](https://x.com/steipete/status/2053717468623872230) for inline issue/PR/SHA/workflow context — *"You gotta build yourself the tools to work more efficient"* — and posted about [using his codex review skill](https://x.com/steipete/status/2055203470941061600) to catch bugs that Codex itself claimed were done.

The [discrawl 0.3.0](https://x.com/steipete/status/2046748122928263345) release (Git-backed Discord archive sync) is the less-discussed but potentially more useful tool for teams using Discord as a knowledge base.

### Boris Cherny: Opus 4.7 one-shots flight booking, engages with Claude Code feedback

[Cherny's flight-booking post](https://x.com/bcherny/status/2053994083497238712) (May 11, still being quoted): Claude Cowork with Opus 4.7 successfully booked multi-leg flights in a single attempt for the first time — *"it 1-shotted it!"* — signaling stronger multi-step reasoning and tool integration in the latest model.

He also [reached out to DavidKPiano](https://x.com/bcherny/status/2053950964126921024) with *"Hey, Boris from the team here. What can we do better?"* — the Claude Code creator doing direct community engagement on complaints.

Context: Cherny [recently told Lauren Reeder](https://x.com/laurenmhreeder/status/2051351487515902247) he hasn't written a line of code himself in 2026; his team is *"living in the future."*

## Industry & Misc

### Mitsuhiko: personal quant verdict — "cannot tell or measure a difference"

The Monday morning punchline to Mitsuhiko's weekend experiment (covered in [May 18 roundup](2026-05-18-grep-wins-retrieval-lossless-tree-memory-and-pocock-pitches-flag-first-agents.md)): after feeding his own [Pi](https://pi.dev) coding sessions into antirez's ds4 imatrix machinery as calibration data for a DeepSeek V4 Flash Q2 quant, the [verdict](https://x.com/mitsuhiko/status/2056266243263328585) is *"Not sure what I expected, but I cannot tell or measure a difference."*

The dream — personal-trajectory data → personal quant that outperforms generic models for your workflow — remains unproven. But Mitsuhiko's [pi-ds4 extension](https://github.com/mitsuhiko/pi-ds4) (run ds4 locally on a Mac via a Pi extension, auto-downloads model, manages lifecycle) is a tidy piece of local-inference tooling regardless.

He also posted about being *"so in love with @antirez' ds4"* ([thread](https://x.com/mitsuhiko/status/2052508753472143614)) — the broader pattern of Redis creator Salvatore Sanfilippo building a local inference engine (DwarfStar 4) that the Sentry creator then wraps for his own tool. Indie infra from indie infra.

### Willison: vibe coding and agentic engineering are converging (ongoing)

[Simon Willison's May 6 post](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/) keeps getting cited in threads: his *"disturbing realization"* that he no longer reviews every line of agent-written code, even for production work. The line he drew between vibe coding (irresponsible) and agentic engineering (responsible) is blurring. Key risk he named: *"normalization of deviance — every time a model turns out to have written the right code without me monitoring it closely there's a risk that I'll trust it at the wrong moment in the future and get burned."*

### swyx: AIE Singapore closing keynote recap

[swyx's closing keynote](https://www.swyx.io/aie-singapore-the-agentic-nation) at AI Engineer Singapore (May 17) — *"Agent Lab Nation"* — explicitly named the **year-of-deployment / decade-of-agents arc** and announced Cognition's Asia HQ in Singapore. The strongest signal from the conference: the model-vs-harness debate is over. Every serious operator on stage described what sits *above* the model (sandboxes, judges, skills, evals, playbooks, identity, observability) and treated the model itself as commodity infill.

[Day 1 decoded](https://aie-sg-day1.vercel.app/) — all 33 talks summarized.
