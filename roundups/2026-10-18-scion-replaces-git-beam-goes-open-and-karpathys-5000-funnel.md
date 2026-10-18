---
title: >-
  Scion Replaces Git, Beam Goes Open & Karpathy's 5,000-Person Funnel
date: '2026-10-18'
summary: >-
  Anthropic replaces Git with Scion to handle 30,000 daily merges (Simon
  Willison covers); Reflection AI releases Beam 501B open weights under
  Apache 2.0; Karpathy's AI capability gap post goes viral — only ~5,000
  people have seen what frontier AI can really do; Theo says T3 Code makes
  model evaluation easy; Simon Willison builds chirp-pong (phone-to-phone
  game over audio) with Claude Opus 5.5 Extra, releases llm-gemini 0.35
  for Argon support, covers AI game decompilation; Gemini 4 Argon goes GA
  at $2/$10 per million tokens; Boris Cherny's Claude Code Projects beta
  rolls out; Matt Pocock ships skills v1.3.1.
tags:
  - 'Anthropic replaces Git with Scion — 30,000 merges/day, Claude is the heaviest user'
  - 'Reflection AI releases Beam 501B open weights under Apache 2.0'
  - 'Karpathy: the AI capability gap is a widening funnel, ~5,000 people at the top'
  - 'Simon Willison: chirp-pong, llm-gemini 0.35, AI game decompilation'
  - 'Theo: T3 Code makes evaluating new models easy'
  - 'Gemini 4 Argon goes GA — $2/$10 per million tokens'
  - 'Boris Cherny: Claude Code Projects beta + extensibility preview'
  - 'Matt Pocock: skills v1.3.1 ships'
  - 'Jerry Liu: OpenDocRouter unified document parsing API'
  - Broader AI news — Archon CVSS 9.8 vuln, Claude Code latency drop
---
# 2026-10-18 — Scion Replaces Git, Beam Goes Open & Karpathy's 5,000-Person Funnel

## Anthropic replaces Git with Scion — 30,000 merges/day, Claude is the heaviest user

The biggest infrastructure story of the week. Anthropic published an engineering blog post explaining why they replaced Git with **Scion**, a new centralized source-control system built by a seven-person team over five months. Simon Willison covered it on October 13.

The numbers tell the story: in May 2026 Anthropic averaged ~2,500 code changes merged per day. By September, that number hit **30,000 per day**. The main branch alone is nearly 100 GB, with ~25 million code checkouts per day for CI. Git couldn't keep up.

Scion is described as a reinvention of centralized source control along Subversion lines — the repository's data is distributed and every component is independently scalable. Its API exposes source-control queries directly, so in many cases CI jobs don't need a local repository at all.

The most telling detail: when asked about offline support, a Scion engineer said "since Claude is by far the heaviest user of Scion and is necessarily online, this just wasn't important to do."

Willison also highlighted Anthropic's note that **extensive use of adversarial AI review is effective but can be myopic** — engineers must steer models away from over-engineering. In a related October 16 post, he noted that at Anthropic, most changes have been reviewed and fixed by Claude at least once before a human is asked to look.

- Anthropic engineering post: [Redesigning source control at Anthropic](https://anthropic.com/engineering/redesigning-source-control)
- Simon Willison's coverage: [simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/](https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/)

## Reflection AI releases Beam 501B open weights under Apache 2.0

Reflection AI released the weights for **Beam**, a 501B-parameter sparse mixture-of-experts model (23B active per token), on October 16 under Apache 2.0. It's a text-only model built specifically for coding and agentic work, with a 1-million-token context window.

Vendor-reported benchmarks (unverified): 80.9% on SWE-bench Verified and ~80% on Terminal-Bench 2.1 while spending ~25,000 tokens per attempt. Independent evaluation is still pending.

The Financial Times reported that **Nvidia is in early talks to deepen its investment in Reflection or acquire it outright**, though nothing has been agreed.

- Reflection coverage: [Reflection Introduces Beam Open-Weight Reasoning Model](https://letsdatascience.com/news/reflection-introduces-beam-open-weight-reasoning-model-b6a0e32f)
- DevX explainer: [What Is Reflection AI's Beam Model?](https://www.devx.com/artificial-intelligence-ai/reflection-ai-beam-model-explained/)

## Karpathy: the AI capability gap is a widening funnel

Andrej Karpathy's October 11 post went viral, reviving an April thread and reframing the AI divide as a **sharp funnel** rather than two groups talking past each other:

- **~6B people** (~75% of the population) have barely come in contact with LLMs at all
- **~1-2B people** are casual, infrequent users of free-tier ChatGPT-like products
- **~20M people** (~0.2%) use frontier models for real work in math and programming
- **~5,000 people** (~0.00006%) have access to frontier-grade systems internally — "Human review and comprehension are starting to fall behind"

The post sparked wide coverage. Karpathy framed these as "napkin math," not survey data. Multiple outlets noted that the gap isn't closing — it's getting steeper as frontier capabilities accelerate.

In related coverage, Karpathy reportedly said on the No Priors podcast that he hasn't typed a line of code since approximately December.

- Karpathy's post: [x.com/karpathy/status/2109361546505966046](https://x.com/karpathy/status/2109361546505966046)
- Business Today coverage: [businesstoday.in — Andrej Karpathy: only 5,000 people](https://www.businesstoday.in/technology/news/story/andrej-karpathy-only-5000-people-560943-2026-10-12)
- Benzinga: [Karpathy Warns AI Capability Gap Is Widening](https://www.benzinga.com/markets/tech/26/10/62292803/andrej-karpathy-warns-ai-capability-gap-is-widening-as-advanced-agents-tackle-massive-projects)

## Simon Willison: chirp-pong, llm-gemini 0.35, and AI game decompilation

Willison had a prolific week. Highlights:

**Chirp Pong (Oct 15)** — A two-player pong game built as a static HTML page where two phones exchange game state through **audio chirps picked up by the microphone**. Built with Claude Opus 5.5 Extra in Claude Code. "It seems to work!" He continues to demonstrate that Claude Code can build surprisingly creative standalone tools.

- [simonwillison.net/2026/Oct/15/chirp-pong/](https://simonwillison.net/2026/Oct/15/chirp-pong/)

**Tree Appreciator (Oct 14)** — A Three.js game built by prompting Claude Opus 5.5 Max in the Claude iPhone app's chat mode (not Claude Code).

- [simonwillison.net/2026/Oct/14/tree-appreciator/](https://simonwillison.net/2026/Oct/14/tree-appreciator/)

**AI game decompilation (Oct 14)** — Willison covered indie developer Popcar's post about the recent wave of AI-powered decompilation of existing games. Framed as "both awesome and scary" — promising for game preservation, worrying for studios.

- [simonwillison.net/2026/Oct/14/ai-is-mass-decompiling-games/](https://simonwillison.net/2026/Oct/14/ai-is-mass-decompiling-games/)

**llm-gemini 0.35 (Oct 13)** — Plugin release adding Gemini 4 Argon support. He noted Argon's introductory pricing is set to **double on December 1st**.

- [simonwillison.net/2026/Oct/13/llm-gemini/](https://simonwillison.net/2026/Oct/13/llm-gemini/)

**llm-meta-ai 0.2 (Oct 12)** — Plugin for Meta AI's API. Willison observed that Meta is shipping a new model roughly every month.

- [simonwillison.net/2026/Oct/12/llm-meta-ai/](https://simonwillison.net/2026/Oct/12/llm-meta-ai/)

**Claude Haiku 5.5 (Oct 7)** — Coverage of Anthropic's new fast model. Pricing: $0.10 per million input / $0.50 per million output.

- [simonwillison.net/2026/Oct/7/claude-haiku-5-5/](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/)

**web-edit 0.1a2 (Oct 17)** — New release of his CodeMirror 6-based web editor.

## Theo: T3 Code makes evaluating new models easy

Theo posted on October 12 that **T3 Code has made evaluating new models so much easier (and more fun!)**, noting he had a ranked verdict out hours after a new model launch.

T3 Code (MIT licensed, by Theo Browne and Julius at T3 Tools) is a local control plane that runs existing agent CLIs in one interface. The latest v0.1.0 release added an orchestrator where an agent can start child agents on any provider or model and wait for their results, plus support for Pi, Muse Code, and OpenCode 2.

In recent weeks Theo also argued that **preferring OpenAI models for code makes almost no sense** given Anthropic's current lead, while calling Gemini 4 Argon unreliable for real code work in his codebases due to hallucinations about how systems work.

- T3 Code repo: [github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- Theo on evaluating models: [x.com/theo/status/2109767799187165339](https://x.com/theo/status/2109767799187165339)

## Boris Cherny: Claude Code Projects beta + extensibility

Boris Cherny (Claude Code creator) has been posting about two major Claude Code developments:

**Projects** — A new beta feature where you stop managing sessions and just send thoughts as they come. Claude splits them into threads, and the project remembers how you work. Cherny says he now does "a ton of [his] coding" in Projects.

**Extensibility** — In a September post he previewed early work on making Claude Code "way more extensible," building on the existing hooks/plugins/skills/MCP architecture. The full system hasn't shipped yet.

He also shared Anthropic's Claude Code origin story in July, tracing it back to Anthropic safety research, and restated his philosophy: "AI works better when you give tools and freedom instead of forcing them into rigid, hand-designed workflows."

- Projects post: [x.com/bcherny/status/2100669598995816511](https://x.com/bcherny/status/2100669598995816511)
- Extensibility preview: [x.com/bcherny/status/2095590515765060076](https://x.com/bcherny/status/2095590515765060076)

## Matt Pocock: skills v1.3.1 ships

Matt Pocock shipped **skills v1.3.1** on October 4-5. The update adds a PR-writing command, an implement-spec command that uses subagents, and renames CONTEXT.md to GLOSSARY.md.

The skills repo (mattpocock/skills) has grown massively — reports vary between 21 and 55 skills and cite 280K+ GitHub stars. The skills are agent-agnostic, installable into Claude Code as a plugin or into Codex and other agents via skills.sh.

Pocock's broader thesis, articulated in recent talks: **bad codebases make bad agents**, AI ate tactical coding so the scarce skill is now strategic work (specs, tickets, shared skills), and test-driven development with a failing test written first remains the right workflow pattern.

- Skills on Claude marketplace: [claude.com/marketplace/plugins/mattpocock-skills](https://claude.com/marketplace/plugins/mattpocock-skills)
- AI Coding Crash Course: [x.com/mattpocockuk/status/2107063379751789010](https://x.com/mattpocockuk/status/2107063379751789010)

## Jerry Liu: OpenDocRouter + "long live RAG"

Jerry Liu (LlamaIndex CEO) announced **OpenDocRouter** around October 7 — a unified API for document parsing. On October 10 he posted "long live RAG," pushing back on the recurring narrative that RAG is dead.

LlamaIndex continues to evolve its parsing stack with LlamaParse (complex documents → structured data) and LiteParse (lighter local option with a two-pass approach: cheap processing first, costlier visual interpretation only on relevant pages).

- Jerry Liu on X: [x.com/jerryjliu0](https://x.com/jerryjliu0)

## Gemini 4 Argon goes GA

Google made **Gemini 4 Argon generally available** on October 13, after initially limiting access to approved cybersecurity defenders. Pricing: **$2 per million input tokens / $10 per million output tokens** (introductory, set to double Dec 1).

Benchmarks are mixed depending on who's measuring:
- **Vals AI**: ranks Argon #1 of 41 on the Vals Index (68.90%)
- **Terminal Bench 4**: 57% — behind Claude Sonnet 5.5 (64%), Opus 5.5 (60%), and GPT-6 Astra (59%)
- **Hallucinations**: 15% on AA-Omniscience, the lowest among frontier models (GPT-6 Astra: 51%)
- **DeepSWE**: 77.9%, but Google ran that test itself

The low hallucination rate is the headline feature. The coding performance is a tier below Anthropic and OpenAI's best.

- Google announcement coverage: [letsdatascience.com — Gemini 4 Argon](https://letsdatascience.com/blog/gemini-4-argon-public-independent-tests-rank-it-first-and-eighth)

---

## Broader AI coding news

**Claude Code latency** — Anthropic reports first-token latency dropped from 4.07s to 1.33s between August and October.

**Archon vulnerability (CVSS 9.8)** — A critical flaw in the Archon AI coding agent lets network attackers send commands without authentication. No vendor patch yet; mitigation is firewalling the endpoint or binding to 127.0.0.1.

**India's CERT-In investigating AI agent incidents** — Autonomous agents reportedly reached live organizational systems and accessed business records including personal data. Rubrik separately warned that agents are shortening the time to discover and exploit software flaws.

**Perplexity open-sources SPACE** — The microVM sandbox behind its Computer agent.

**FrontierCode benchmark** — Cognition's coding benchmark (built with open-source maintainers, evaluating whether code is *mergeable* not just passing tests) continues to evolve. Claude Fable 5 leads the FrontierCode 1.1 Main snapshot at 53.5%. Cognition's SWE-2 scored 50% on the same benchmark.

---

## Misc / shorter

- **Steipete** — His blog post "Just Talk To It" argues agentic engineering has gotten so good that "it now writes pretty much 100% of my code." He mainly uses gpt-5-codex on mid settings and recommends writing tests after each feature. His GitHub lists him as now at OpenAI, working on agents and stewarding OpenClaw.
- **Mitsuhiko (Armin Ronacher)** — His GitHub shows an AI agent toolkit project (earendil-works/pi): unified LLM API, agent loop, TUI, and coding agent CLI in TypeScript. Also maintains an "agent-stuff" repo of commands he uses with Claude agents.
- **Thariq (@trq212)** — Described in recent roundups as a Claude Code team member specializing in non-coding uses of coding agents: slides, research, knowledge management. His experiments (e.g., "the case for HTML as an output format for agents") reportedly keep reappearing in other people's decks.
- **swyx** — Now at Cognition, built FrontierCode benchmark. Recent work focuses on whether coding agents can handle "mergeable" code, not just test-passing code. His Latent Space newsletter continues as an independent outlet.
- **LLMJunky** — Less visible this week. Profile reads "StarSwap // Life in Color, Director of n number of agents."

---

## News articles

- [Anthropic: Redesigning Source Control](https://anthropic.com/engineering/redesigning-source-control) — The Scion engineering blog post
- [The New Stack: Karpathy says only 5,000 people have seen what AI can really do](https://thenewstack.io/karpathy-levie-ai-capability-gap/) — Coverage of the capability gap post
- [Reflection AI: Beam open-weight model](https://letsdatascience.com/news/reflection-introduces-beam-open-weight-reasoning-model-b6a0e32f) — 501B MoE release
- [The Hacker News: Archon CVSS 9.8 vulnerability](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html) — AI coding agent security
- [AI Agent Store: Weekly roundup Oct 17](https://aiagentstore.ai/ai-agent-news/this-week) — Aggregated AI agent news
