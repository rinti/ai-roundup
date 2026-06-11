---
title: 'Fable 5 Drops, DiffusionGemma & Silent Guardrails'
date: '2026-06-11'
summary: >-
  Claude Fable 5 launch and Willison's deep dive, Anthropic's silent frontier-research restrictions,
  DiffusionGemma open model from Google, datasette-agent ask_user(), Karpathy joins Anthropic,
  PewDiePie's Odysseus AI workspace, Uber caps Claude Code at $1500/mo
tags:
  - Claude & Anthropic Updates
  - Open Source Models & Local AI
  - Agentic Coding & Tools
  - Industry Discussion & Takes
  - LlamaIndex & RAG
  - Other Notable Items
---
# AI Roundup — June 11, 2026

## Claude & Anthropic Updates

### Claude Fable 5 & Mythos 5 released (June 9)
Anthropic shipped Claude Fable 5, the first Mythos-class model made generally available. State-of-the-art on nearly all benchmarks — 80.3% on SWE-Bench Pro (vs 69.2% Opus 4.8, 58.6% GPT 5.5), first model to break 90% on Hebbia's finance-analytics benchmark. 1M token context, 128K output, adaptive thinking always on, $10/$50 per million input/output tokens. Free for Pro/Max/Team/Enterprise through June 22. Mythos 5 itself remains in limited release via Project Glasswing.

- [Anthropic announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [TechCrunch coverage](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/)

### Simon Willison: Initial impressions of Fable 5 (June 9)
Simon spent ~5.5 hours testing Fable 5 and called it "something of a beast" — slow and expensive but capable of churning through everything thrown at it. He burned $110.42 in tokens that day. Used it to build the ask_user() feature for datasette-agent (see below) and ran image generation benchmarks against all five thinking effort levels.

- [Blog post: Initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/)

### Simon Willison: Fable 5's silent guardrails for frontier LLM research (June 10)
Willison flagged a key detail from the 319-page Fable 5/Mythos 5 system card: Anthropic has implemented "silent" interventions that limit Claude's effectiveness for frontier LLM development requests (pretraining pipelines, distributed training infra, ML accelerator design). Unlike safety interventions for bio/chem/cyber — which visibly fall back to a different model — these work invisibly via prompt modification, steering vectors, or PEFT. Estimated to affect ~0.03% of traffic, but it's the first time Anthropic has announced this kind of hidden capability restriction. Generated significant discussion.

- [Blog post: If Claude Fable stops helping you, you'll never know](https://simonwillison.net/2026/Jun/10/if-claude-fable-stops-helping-you/)
- [Fortune: Anthropic accused of 'secret sabotage'](https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/)

### Boris Cherny: Security-guidance plugin for Claude Code (late May, still buzzing)
Anthropic shipped a free security-guidance plugin that intercepts Claude Code's output in real time and blocks 25+ dangerous patterns (eval, os.system, child_process.exec, pickle deserialization, innerHTML, etc.) before they hit a commit. Three-layer review: deterministic pattern match on every edit, then model-assisted review at session and PR boundaries. 157K installs in the first 24 hours. Cherny RT'd the announcement.

- [Claude Code security-guidance docs](https://code.claude.com/docs/en/security-guidance)
- [Cherny RT](https://x.com/bcherny/status/2059646299440325120)
- [Help Net Security coverage](https://www.helpnetsecurity.com/2026/05/27/anthropic-claude-code-security-guidance-plugin/)

### Karpathy joins Anthropic (May 19, ongoing discussion)
Andrej Karpathy officially joined Anthropic's pretraining team on May 19. He'll start a team focused on using Claude to accelerate pre-training research. The move continues to generate discussion — he left Tesla Autopilot, briefly returned to OpenAI, started Eureka Labs, and now lands at Anthropic. He says "the next few years at the frontier of LLMs will be especially formative."

- [Karpathy announcement](https://x.com/karpathy/status/2056753169888334312)
- [CNBC coverage](https://www.cnbc.com/2026/05/19/anthropic-hires-openai-cofounder-andrej-karpathy-former-tesla-ai-lead.html)
- [TechCrunch](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/)

### Claude Agent SDK billing changes coming June 15
Starting June 15, Agent SDK usage on subscription plans will draw from a new monthly Agent SDK credit pool, separate from interactive usage limits.

- [Migration playbook](https://theplanettools.ai/blog/claude-agent-sdk-billing-model-deprecation-june-15-2026-migration-playbook)

---

## Open Source Models & Local AI

### Google releases DiffusionGemma — open-weight text diffusion model (June 10)
Google released DiffusionGemma (google/diffusiongemma-26B-A4B-it), an Apache 2.0 licensed Mixture-of-Experts model that generates entire blocks of text simultaneously using diffusion instead of autoregressive decoding — up to 4x faster text generation. NVIDIA is hosting it free on their NIM cloud API. Simon Willison tested it and got 2,409 tokens in 4.4 seconds (~500 tok/s). Follows Google's experimental Gemini Diffusion from May (857 tok/s).

- [Simon Willison's post](https://simonwillison.net/2026/Jun/10/diffusiongemma/)
- [Google developer blog](https://developers.googleblog.com/diffusiongemma-the-developer-guide/)
- [NVIDIA blog](https://blogs.nvidia.com/blog/rtx-ai-garage-local-gemma-diffusion/)
- [The Decoder coverage](https://the-decoder.com/googles-new-open-model-diffusiongemma-generates-text-from-noise-instead-of-word-by-word/)

### PewDiePie's Odysseus: open-source local AI workspace (late May/early June, still trending)
swyx commented on the "vibe shift" — PewDiePie released Odysseus, a self-hosted, MIT-licensed AI workspace built on OpenCode, with chat, agents, Deep Research, email, calendar, notes, and image generation. 66K stars and 8.1K forks within 10 days. Hit #1 on Hacker News with 1M+ views. swyx connected the dots back to Soumith Chintala's Feb 2025 dream of personal, local, private agents — "it's June 2026 and PewDiePie has just released his vibecoded opencode wrapper that is a complete personal AI."

- [swyx tweet](https://x.com/swyx/status/2061256096719970337)
- [Gizmodo coverage](https://gizmodo.com/pewdiepie-is-here-to-offer-you-privacy-assurances-in-the-age-of-ai-2000765812)
- [Digg coverage](https://digg.com/ai/ktczymon)

---

## Agentic Coding & Tools

### Simon Willison: datasette-agent 0.2a0 with ask_user() (June 10)
Simon released datasette-agent 0.2a0 — the big new feature is tools that can ask the user questions mid-execution. Tools declare a `context` parameter and call `await context.ask_user(...)` for yes/no, multiple-choice, or free-text questions. The agent turn suspends while waiting (persists to DB, survives server restarts), then re-executes from the top with stored answers replayed. Also adds a `save_query` tool that always requires human approval before storing SQL. Built with Claude Fable 5 the day it dropped.

- [Release notes](https://simonwillison.net/2026/Jun/10/datasette-agent/)
- [Datasette blog](https://datasette.io/blog/2026/datasette-agent/)

### Simon Willison: llm 0.32a3 — human-in-the-loop tool calling (June 9)
Pre-release alpha of Simon's CLI/library for LLMs. Key additions: tools can declare an `llm_tool_call` parameter, guaranteed unique `tool_call_id` for every call, new `llm.PauseChain` exception for pausing tool chains mid-execution for human approval, and the ability to resume from messages history ending in unresolved tool calls. Driven by the ask_user() needs of Datasette Agent.

- [Release notes](https://simonwillison.net/2026/Jun/9/llm/)

### Matt Pocock: Skills repo hits 80K+ stars, /grill-me still king
mattpocock/skills — 21 MIT-licensed Claude Code skills — hit ~80.5K stars on GitHub. The /grill-me skill remains the most popular: it forces Claude to refuse writing code and instead interrogate you about every ambiguous decision before producing a plan. His /teach skill for personalized AI-powered lessons is also gaining traction. The /caveman skill averages 294 output tokens per response vs 1,214 in normal mode — 65% reduction in token spend. Pocock also launched version 2 of his "Claude Code for Real Engineers" cohort.

- [Skills repo](https://github.com/mattpocock/skills)
- [/grill-me skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md)
- [Cohort v2 announcement](https://x.com/mattpocockuk/status/2056447804537741327)

### Thariq (trq212): Deep Research demo for Claude Agent SDK
Thariq built a Deep Research demo for the Claude Agent SDK — one of the most requested use cases. It spawns multiple AI agents to research a topic in parallel, then synthesizes findings into a report. Uses an orchestrator-worker architecture with Opus as lead agent and Sonnet subagents for parallel exploration, reporting 90.2% improvement over single-agent Opus on internal research evals. Karpathy RT'd it. Available in the anthropics/claude-agent-sdk-demos repo.

- [Thariq's thread](https://x.com/trq212/status/1988690675542675536)
- [GitHub: research-agent demo](https://github.com/anthropics/claude-agent-sdk-demos/tree/main/research-agent)
- [Karpathy RT](https://x.com/karpathy/status/2061928642029158853)

### Peter Steinberger (steipete): OpenClaw passes 310K stars, joins OpenAI
OpenClaw — the open-source, local-first autonomous AI assistant steipete created — has passed 310K stars, 58K forks, 1.2K contributors. June release pinned at 2026.6.5. Steinberger himself joined OpenAI earlier this year to work on "bringing agents to everyone," with OpenClaw moving to a foundation. He spoke at Microsoft Build (June 2-3) and has been vocal about "agentic engineering" — the shift from writing code to orchestrating agents while preserving quality. He dates the transition from "this is crap" to "this is good" to May with Sonnet 4.0, and then another leap with gpt-5-codex.

- [steipete blog: OpenClaw, OpenAI and the future](https://steipete.me/posts/2026/openclaw)
- [Blog: Just Talk To It — the no-bs way of agentic engineering](https://steipete.me/posts/just-talk-to-it)

---

## Industry Discussion & Takes

### Uber caps Claude Code usage at $1,500/month per engineer (June 2–3)
Bloomberg broke the story: Uber set a $1,500/month per-engineer cap on agentic coding tools (Cursor, Claude Code) after blowing through their entire annual AI budget in four months. Some engineers were generating $500–$2,000/month in token spend. Caps are trackable via internal dashboard and can be exceeded with manager approval. Simon Willison shared the story. Big discussion about whether this signals cost problems for AI-assisted development at scale.

- [Bloomberg](https://www.bloomberg.com/news/articles/2026-06-02/uber-caps-usage-of-ai-tools-like-claude-code-to-cut-costs)
- [TechCrunch](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/)
- [Simon Willison's link](https://simonwillison.net/2026/Jun/3/uber-caps-usage/)

### Mitsuhiko (Armin Ronacher): AI code quality degradation
Ongoing discussion thread from Ronacher: "There will be more of this. And as much as we're joking about it, we're seeing a massive degradation of code quality right now and we're increasingly only catching it way too late." Jeremy Howard RT'd it. Connects to a broader academic paper mapping developer frustration over "AI slop" as a "tragedy of the commons" in software development (arxiv: 2603.27249v1). Ronacher's company Earendil is building Lefos, focused on AI that helps people communicate with more care rather than optimizing for throughput.

- [Jeremy Howard RT of mitsuhiko](https://x.com/jeremyphoward/status/2036507393337729404)
- [The Decoder: Study maps developer frustration over "AI slop"](https://the-decoder.com/study-maps-developer-frustration-over-ai-slop-as-a-tragedy-of-the-commons-in-software-development/)
- [arxiv paper](https://arxiv.org/html/2603.27249v1)

### Karpathy: Sequoia Ascent 2026 fireside chat recap
Karpathy posted highlights from his Sequoia Ascent fireside chat. Key themes: LLMs are about much more than speeding up coding — three new horizons include menugen (apps that can be "fully engulfed" by AI), LLM Knowledge Bases (see below), and autoresearch loops. December 2025 was the tipping point where agentic coding went from "helpful but messy" to producing consistently correct code. Traditional software automates what you can specify; AI automates what you can verify. He says he's "never felt this much behind as a programmer."

- [Karpathy's fireside chat tweet](https://x.com/karpathy/status/2049903821095354523)
- [Blog: Sequoia Ascent 2026 summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- [Video playlist: AI Ascent 2026](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)

### Karpathy: LLM Knowledge Bases (LLM Wiki)
Still generating discussion — Karpathy's pattern for using LLMs to build personal knowledge bases. Instead of RAG, the LLM acts as a "compiler" that reads raw sources and produces a structured, interlinked wiki of ~100 articles and ~400K words per topic. Includes active maintenance loops — health checks, backlinks, inconsistency detection. Published as a GitHub Gist. Multiple guides and implementations have appeared.

- [Karpathy's tweet](https://x.com/karpathy/status/2039805659525644595)
- [GitHub Gist: LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [VentureBeat deep dive](https://venturebeat.com/data/karpathy-shares-llm-knowledge-base-architecture-that-bypasses-rag-with-an)

### Theo: State of AI for Web Devs 2026 survey
Theo promoted the State of AI for Web Devs 2026 survey (ran April 8 – May 8, 7,258 responses). Key findings: AI-generated code jumped from 28% average in 2025 to 54% in 2026. Despite ChatGPT's overall popularity, Claude is the model devs actually pay for the most. Clear increase in individual AI spend year over year.

- [Theo's tweet](https://x.com/theo/status/2041715755306389780)
- [Survey results](https://2026.stateofai.dev/en-US)

---

## LlamaIndex & RAG

### LlamaIndex presents ParseBench at CVPR 2026 (June 10–11)
Jerry Liu and team are presenting ParseBench at CVPR 2026 this week — the first document-parsing benchmark built specifically for AI agents. Covers ~2,000 human-verified pages from 1,200+ documents (insurance, finance, government). Evaluates five dimensions: tables, charts, content faithfulness, semantic formatting, and visual grounding. Their argument: document understanding is an "AGI-complete problem" — an agent can't act on a document it can't correctly read. Paper on arxiv (2604.08538). Also benchmarked GPT-5.5 on document understanding through ParseBench.

- [LlamaIndex CVPR announcement](https://x.com/llama_index/status/2062525204262236266)
- [Jerry Liu on ParseBench](https://x.com/jerryjliu0/status/2043861501589741958)
- [GitHub: ParseBench](https://github.com/run-llama/ParseBench)
- [Kaggle leaderboard](https://www.kaggle.com/benchmarks/llamaindex-org/parsebench)

---

## Other Notable Items

### OpenAI launches AgentKit, winds down Agent Builder (June 3)
OpenAI launched AgentKit — a complete toolkit for building, deploying, and optimizing agents. Simultaneously announced winding down Agent Builder and Evals products (sunset November 30, 2026). Microsoft Build 2026 positioned Windows as an OS for AI agents with WinUI agents and skills for Copilot, Claude Code, and OpenAI Codex.

- [OpenAI: Introducing AgentKit](https://openai.com/index/introducing-agentkit/)
- [Visual Studio Magazine: Build 2026](https://visualstudiomagazine.com/articles/2026/06/02/at-build-2026-microsoft-sets-up-windows-as-an-os-for-ai-agents.aspx)

### Claude becomes an iPhone option (June 8)
Claude is now officially a supported system-wide AI assistant option on iPhone, rather than being limited to web or separate app access.

### Copilot switches to usage-based billing (June 1)
GitHub Copilot moved to usage-based billing with GitHub AI Credits, replacing the previous flat-rate subscription model.
