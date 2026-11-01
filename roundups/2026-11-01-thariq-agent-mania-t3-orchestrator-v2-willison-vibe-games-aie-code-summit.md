---
title: "Thariq on coding-agent mania, T3 Code Orchestrator V2 goes stable, Willison declares an inflection point for vibe games, and the AIE Code Summit lineup takes shape"
date: "2026-11-01"
summary: "**Thariq Shihipar** (@trq212), a week after leaving Anthropic, [posted](https://x.com/trq212/status/2115937378674372783) that there's a kind of mania you can get into with coding agents where it feels like you're getting a lot done but nothing is really happening — and that it's often a form of avoidance. Meanwhile **Theo's T3 Code** [shipped Orchestrator V2](https://newreleases.io/project/github/pingdotgg/t3code/release/v0.1.0) as its first stable release, rebuilding how agents are queued, resumed, and tracked with native steering, forks, rollback, and child sessions. **Simon Willison** [argued](https://simonwillison.net/2026/Oct/28/vibe-game-development/) that October 2026 is the inflection point for vibe-coded games, crediting Claude Opus 5.5. **Matt Pocock** [fixed a Codex bug](https://x.com/mattpocockuk/status/2115751897558614073) where subagents inherited the parent's context window instead of starting fresh — breaking skills that need a clean slate. **swyx** [announced](https://x.com/swyx/status/2116240128511459608) the AIE Code Summit (Nov 11–13 in SF), gathering 1,000 AI engineers. **LlamaIndex** [launched OCRia-1](https://x.com/llama_index/status/2113308699779633501), a 4B document-parsing VLM scoring 87.4 on ParseBench. And **OpenAI** is [merging ChatGPT and Codex usage pools](https://dev.to/paullovelace/openai-is-merging-your-chatgpt-and-codex-allowances-into-one-shared-pool-in-december-explained-1ho4) into a single token-based allowance in December."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Codex & OpenAI
  - Models & Research
  - Events
  - Other Interesting Stuff
---

# AI Roundup — November 1, 2026

## Agentic Coding & Agent Harnesses

### Thariq on coding-agent mania

A week after [leaving Anthropic](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/), Thariq Shihipar (@trq212) [posted](https://x.com/trq212/status/2115937378674372783) a reflection that hit a nerve: "There's 100% a kind of mania you can get into with coding agents, where it feels like you're getting a lot done and working all the time but nothing is really happening. I think it's often a form of avoidance of something else in life." This comes from someone who helped build Claude Code, shipped the [HTML plan skill](https://x.com/trq212/status/2107192901537329354) for better agent-generated plans, and popularized the [spec-based workflow](https://x.com/trq212/status/2005315275026260309) of asking Claude to interview you first and then executing in a fresh session.

His departure alongside Anthony Morris (creator of Claude Code's desktop app) was [widely covered](https://runtimewire.com/article/thariq-shihipar-and-anthony-morris-have-potentially-departed-anthropic) — both left weeks before Anthropic's expected IPO. Multiple outlets [noted](https://officechai.com/ai/thariq-shihipar-anthony-morris-announce-theyre-leaving-anthropic-weeks-before-its-ipo/) that the exit was [leaked on X](https://pasqualepillitteri.it/en/news/27040/thariq-leaves-anthropic-exit-leaked-on-x-before-announcement) hours before his own announcement.

### T3 Code Orchestrator V2 goes stable

Theo's T3 Code [shipped v0.1.0](https://newreleases.io/project/github/pingdotgg/t3code/release/v0.1.0), the first stable release of Orchestrator V2 after it was in Nightly since early October. V2 rebuilds how agents are queued, resumed, and tracked. New features include native steering, forks, rollback, compaction, plan mode, child sessions as subagent threads, and recovery after restarts.

**Upgrade notes:** On first launch, V2 copies your existing database and imports threads. A V2 server and a V1 app can't talk to each other — you need to update every machine. V2 is built for OpenCode 2.0.18+.

In a [recent video](https://x.com/theo/status/2114955682193054930) ("Day 23"), Theo said agents now use T3 Code's tools 4x better while using 79% less context. He's also reported that [27 of 32 pull requests](https://finance.biggo.com/news/8e41e2f0b5a7a374) he marked "full send" merged without human review, crediting small markdown skill files that encode permissions and proof requirements. In a separate discussion, he [argued](https://finance.biggo.com/news/03cabe8b7722ee60) that most feature requests for agent tools are really information requests that a prompt can answer, and that evals agents can optimize against are the real leverage.

### Matt Pocock ships Codex subagent context fix

Matt Pocock [posted](https://x.com/mattpocockuk/status/2115751897558614073) about a fix for Codex users: "Codex was biasing most of its subagents to inherit its context window from the parent agent. I.e. forking it. This has a big negative impact on a lot of my skills, that rely on a clean context window (for code review, implement-spec etc)." The fix starts subagents with a fresh context instead. This aligns with his broader [workflow philosophy](https://www.contextstudios.ai/blog/pocock-workflow-grill-me-spec-tickets-subagent-review) of sizing work so each piece fits in one fresh context window.

He also recently [added the term "Software Factory"](https://x.com/mattpocockuk/status/2103103504567107712) to his [AI Coding Dictionary](https://aicodingdictionary.com/) — an interactive 3D knowledge graph mapping the vocabulary of AI coding. His next cohort, [AI Coding For Real Engineers](https://x.com/mattpocockuk/status/2095899598430552471), is a complete re-record covering wayfinder, codebase design, automated checks/review, and building a software factory, planned for November.

### swyx announces the AIE Code Summit

swyx [announced](https://x.com/swyx/status/2116240128511459608) that the AI Engineer Code Summit is gathering the top 1,000 AI engineers to "accurately represent the 2026 SOTA in AI x Code and preview 2027." The event runs [November 11–13 in San Francisco](https://www.ai.engineer/code/2026). The [call for speakers](https://sessionize.com/aiecode26/) is closed; the [schedule](https://www.ai.engineer/code/2026/schedule) says details are being assembled.

In a [recent Latent Space episode](https://latent.space/p/supabase_s_plan_for_a_billion_ai-built_apps/), swyx talked with Supabase's co-founders about backends for AI-built apps — long-lived workloads alongside the database and schemas that agents can more easily understand. On [daily.dev](https://daily.dev/posts/agent-quality-isn-t-just-the-diff-it-s-the-wasted-tool-calls-fqxtasmsh), Ben Holmes's talk at AIE New York covered a system for detecting wasted agent effort, scoring redundant tests and noisy explanations. swyx framed agent verbosity as more of a code review problem than a correctness one.

### Armin Ronacher on prototyping vs. shipping with AI

Armin Ronacher (@mitsuhiko) has been vocal about the gap between prototyping and production with coding agents. In an [X post](https://x.com/mitsuhiko/status/2040023781083676789), he reported that after 10 calls with people sharing their agentic coding experience, 7 out of 10 reported non-engineers "vibeslopping" code up, and the majority said they had to re-prompt all those contributions because it became impossible to work with those PRs. He continues to work on [Pi](https://x.com/mitsuhiko/status/2017604638137012335), his agent toolkit that can extend itself, under his company Earendil.

## Models & Research

### Simon Willison: "The October inflection point for vibe game development"

Simon Willison [argued](https://simonwillison.net/2026/Oct/28/vibe-game-development/) that October 2026 marks an inflection point for AI-built games, following the November 2025 inflection for coding agents. He singles out Claude Opus 5.5 as showing meaningful gains for compelling game development, while saying GPT-6 Astra isn't quite there yet. The post was [picked up widely](https://ecosistemastartup.com/claude-opus-5-5-el-vibe-coding-ya-crea-juegos-divertidos/) and remains in active discussion.

Other recent Willison posts:
- **[Claude Haiku 5.5](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/) (Oct 7):** Matches GPT-6 Luna pricing at $0.10/$0.50 per million tokens up to 100K tokens, but his token counter found the same prompt uses ~1.25x as many tokens vs Haiku 4.5. Reasoning is on by default and can't be disabled.
- **[GPT-6.1 Terra](https://simonwillison.net/2026/Oct/) (Oct 26):** Priced at $1/$5 per million tokens — roughly 10x the cost of GPT-6 Luna.
- **[Newsletter](https://simonwillison.net/newsletters/) (Oct 21):** Covered Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and the pricing war.

### LlamaIndex launches OCRia-1

LlamaIndex [announced OCRia-1](https://x.com/llama_index/status/2113308699779633501), a 4-billion-parameter vision-language model for document parsing. Key claims from the [technical report](https://www.llamaindex.ai/ocria/ocria-1-technical-report.pdf) and [blog post](https://www.llamaindex.ai/blog/parse-ocria-1):

- **87.4 on ParseBench** — highest for any parsing model under 35B parameters, 12.1 points ahead of the next-highest
- Leads table evaluations on [olmOCR-bench](https://x.com/jerryjliu0/status/1996668513562644823) (92.9), PulseBench-Tab (84.1), and fr-bench-pdf2md
- Built on Qwen3.5-4B, decodes at ~4,700 tokens/second on a single B200 GPU
- Post-trained with supervised fine-tuning + reinforcement learning with verifiable rewards (RLVR)
- [75x faster than Gemini](https://alphasignal.ai/news/llamaindex-s-ocria-1-parses-pdfs-75x-faster-than-gemini-at-a-third-the-cost) at a third of the cost, according to AlphaSignal

Available through [LlamaParse](https://www.llamaindex.ai/) and [OpenDocRouter](https://x.com/jerryjliu0) as `llamaindex/ocria-1`. Jerry Liu also recently launched OpenDocRouter — a unified API for document parsing with frontier and open-weight models.

### Karpathy's AI capability "funnel"

Andrej Karpathy's [October 11 post](https://www.therundown.ai/news/andrej-karpathy-ai-sharp-funnel-access) argued that the public's understanding of AI is [sharply diverging](https://superpowerdaily.com/posts/andrej-karpathy-says-the-gap-in-public-understanding-of-ai-is-widening) from what insiders see, with only about 5,000 people having seen what AI can really do at the frontier. He estimated audience sizes in a "napkin math" breakdown, with roughly 6 billion people having barely encountered LLMs.

Separately, on [October 31](https://fourweekmba.com/ai-karpathy-has-claude-build-hackertube-from-6454-hn-videos), he reportedly built a site of ~6,454 Hacker News-recommended videos (2007–2026) across 150 topics using Claude Opus 5.5 in Claude Code, completed in about two hours. (Note: I could not verify this against a primary source — the claim comes from a secondary write-up.)

## Codex & OpenAI

### OpenAI merging ChatGPT and Codex usage pools in December

Starting in December 2026, OpenAI will [combine ChatGPT and Codex usage](https://dev.to/paullovelace/openai-is-merging-your-chatgpt-and-codex-allowances-into-one-shared-pool-in-december-explained-1ho4) into one shared token-based allowance for Plus, Pro, and Business subscribers. No exact date or per-plan amounts have been published yet. This follows the [merger of the Codex app with ChatGPT desktop](https://en.wikipedia.org/wiki/OpenAI_Codex_(AI_agent)) on July 9, 2026.

At DevDay 2026 (early October), OpenAI [announced](https://openai.com/index/devday-2026-recap/) voice control for the Codex CLI, automatic cloud reviews, reusable cloud environments, and Codex Security Cloud. A [Wikipedia entry](https://en.wikipedia.org/wiki/OpenAI_Codex_(AI_agent)) says the Codex harness was open-sourced, but this needs verification against OpenAI's own channels.

## Events

### Upcoming: AIE Code Summit, AI Coding Summit NYC, and more

- **[AI Engineer Code Summit](https://www.ai.engineer/code/2026)** — Nov 11–13, San Francisco. Organized by swyx and the AI Engineer team. ~1,000 attendees expected. Schedule being finalized.
- **[AI Coding Summit NYC](https://gitnation.com/events/ai-coding-summit-nyc/attendees)** — Nov 16–19, Jersey City. Speakers from OpenAI, Anthropic, Google, AWS, Microsoft, Salesforce, Figma, Grafana Labs, and Twilio.
- **[AI Engineering Summit Chicago](https://www.eventbrite.com/e/1995176142551)** — Nov 12, 2026.

## Other Interesting Stuff

### JetBrains ships Mellum2.1 and Context

JetBrains is rolling out early access to **JetBrains Context**, a repository-intelligence layer for coding agents. **Air** now supports GitHub Copilot, OpenCode, Pi, Cline, and other ACP agents. They also released **Mellum2.1**, described as a fast open model for coding agents and fast sub-agents.

### The AI Agent Accountability Act

A bipartisan bill, the **AI Agent Accountability Act**, was [introduced in the Senate](https://agentic.ai/news), addressing the growing use of autonomous AI agents in software development and other domains.

### Peter Steinberger: run your own harness

Steinberger (@steipete) continues to advocate for developer autonomy. After Anthropic's game-recreation rule surfaced, he [called it](https://x.com/steipete/status/2116153238563242385) "another reason why you wanna use your own harness and not one where companies change what you can or can't do at will" (4.5K likes). He joined OpenAI [in February 2026](https://x.com/steipete/) and is connected to OpenClaw, which is becoming a foundation for open coding agents.

---

*Note: This roundup was compiled via web search because direct access to nitter.net, x.com, and other social media was blocked in this session's network configuration. Some timestamps are approximate and some stories come from secondary sources. Links to x.com posts may require authentication to view.*
