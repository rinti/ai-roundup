# AI Roundup: Nov 18, 2026 — AI Coding History, the No-Slop Manifesto, and New Model Drops

## Agentic & Code-Related AI

### Matt Pocock's "Brief History of AI Coding" (Nov 16)

Matt Pocock posted a month-by-month timeline of AI coding since November 2025. Key highlights:

- **Nov 2025:** Opus 4.5 releases, OpenClaw gets built
- **Dec 2025:** Community agrees models handle 95% of coding tasks
- **Jan 2026:** Ralph loops get popular, early efforts on loops/orchestration
- **Feb 2026:** Everyone feels knackered — too much strategic decision-making, "cognitive debt" worries start
- **Mar 2026:** The skills explosion — people converge on easy-to-share processes
- **Apr 2026:** Most top devs haven't written a line of code in months
- **Nov 2026:** "No-slop manifesto" releases, reading the code still appears essential

The post hit ~46.8K views. A secondary summary from @RoundtableSpace adds that by October, the promised speed gains hadn't materialized.

**Links:**
- [Original thread](https://x.com/mattpocockuk/status/2122287575557706226)
- [Summary by @RoundtableSpace](https://x.com/RoundtableSpace/status/2122486199893778917)

---

### The No AI Slop Manifesto (Nov 12-13)

Born out of the AIE Code Summit, this values document modeled on the Agile Manifesto tackles the growing problem of low-quality AI-generated output. Key points:

- Using AI doesn't make something slop — slop happens when you pass AI output along without taking responsibility for quality
- Definition: work where the effort put in is lower than the effort it asks the reader to spend
- Attacks organizations that reward token throughput and parallel agents without updating review culture
- Covers both code and communications
- Over 330 signatures on the signing gist, including Dex Horthy, Philip Kiely, and Kent C. Dodds

**Links:**
- [AI Engineer Guide summary](https://aiengineerguide.com/til/no-ai-slop-manifesto)
- [AI-TLDR coverage](https://ai-tldr.dev/releases/aie-no-ai-slop-manifesto/)
- [Explainx analysis](https://explainx.ai/blog/no-ai-slop-manifesto-aie-code-summit-2026)

---

### Matt Pocock — Other Recent Activity

- **Nov 17:** [Asked for signal on who's making the best content about AI for non-coding tasks](https://x.com/mattpocockuk/status/2122715955336036600) — "That field is full of noise, I need signal"
- **Nov 13:** [Working on an /animatic skill](https://x.com/mattpocockuk/status/2121156583979962734) so every important PR can be accompanied by a walkthrough video
- **Nov 11:** [Announced a live interview](https://x.com/mattpocockuk/status/2120554967035433183) with @mitsuhiko (Armin Ronacher) and @badlogicgames (Mario Zechner) — the creators of Pi — about how code should be written in the AI age
- Upcoming course: "AI Coding For Real Engineers" — complete re-record covering wayfinder, codebase design, automated checks/review, and building a software factory

---

### Theo / T3 Code — In-App UI Customization (Nov 14)

Theo announced that T3 Code now lets you fully customize the app's UI from within the app itself — ask your coding agent to make changes and it updates on the fly. The feature shipped in nightly builds (v0.1.10-nightly) with 64 changes from 7 contributors.

T3 Code is an open-source, MIT-licensed control plane for coding agents (Claude Code, Codex, Cursor). Community reaction was positive around the in-app visualizations and theme-compatible CSS variables, though some worried agents might hallucinate styles.

Theo also claimed T3 Code now does roughly 2x the token throughput of all of OpenAI last year (Nov 2).

**Links:**
- [UI customization announcement](https://x.com/theo/status/2121455838414201200)
- [AGTP summary](https://x.com/AGTPinsights/status/2121513186448818195)
- [Throughput claim](https://x.com/theo/status/2117261338351161486)

---

### Thariq (@trq212) — Software Factories & The Bitter Lesson

Thariq (formerly Claude Code at Anthropic) had two notable posts:

- **Nov 16:** Argued that software factories feel like a temporary problem — "the models will learn to build them for you. The more interesting question to me is how to build a workspace where agents can collaborate with you"
- **Nov 11-12:** Gave the closing keynote at AIE Code, titled "The Sweet Side of the Bitter Lesson" — about how coding-agent experiences might look next year and how developers can help shape them

**Links:**
- [Software factories post](https://x.com/trq212/status/2122438326431154210)
- [AIE Code keynote announcement](https://x.com/trq212/status/2120620900785820143)

---

### Karpathy — HackerTube & Claude Workflow (Early Nov)

Andrej Karpathy built HackerTube — a YouTube-style site showing only videos recommended by Hacker News commenters — in about 2 hours using Claude Code with Opus 5.5. No accounts, no algorithm, no watch history. 6,454 videos spanning 2007-2026 across 150 topics.

**How it was built:**
- Claude Opus 5.5 managed the overall project; Claude Sonnet did the comment filtering via a Claude Code Workflow
- Filtered ~43 million HN comments down to ~40,000 that recommend YouTube videos
- Karpathy's manual work: API key, renting a server, buying the domain
- His setup: Claude Code desktop app for Mac, Opus 5.5 on Medium effort

He also built TristanTube (from a curated YouTube channel list) reportedly in just 3 minutes.

**Links:**
- [AI Weekly coverage](https://aiweekly.co/alerts/karpathy-ships-hackertube-in-2-hours-with-claude-opus-55)
- [FourWeekMBA deep dive](https://fourweekmba.com/ai-karpathy-has-claude-build-hackertube-from-6454-hn-videos/)
- [Karpathy's "immaculate vibes" reply](https://x.com/karpathy/status/2119118206325703121)

---

### Simon Willison — LLM Tooling Releases (All November)

Simon Willison has been shipping steadily through November:

- **llm 0.37** (Nov 2): Adds GPT-6.1 models, changes default model to gpt-6-luna (half the price). "A lot of stuff in this release — around two months of accumulated features and fixes"
- **llm-anthropic 0.31** (Nov 9): Adds Anthropic's Fable 5.2 and Mythos 5.2 models
- **llm-gemini 0.36 & 0.37** (Nov 10 & 12): Gemini 4 models. Notes pricing for Carbon and Argon will double on Dec 1
- **datasette-llm 0.1a11** (Nov 14): Adds OpenAI-compatible endpoints — local models from LM Studio, Ollama, or llama.cpp now work
- **datasette-agent 0.6a0** (Nov 15): Adds agent prompt to Datasette homepage
- **llm 0.37.3** (Nov 16): Bug fix for SQLite 3.54.1 JSON behavior change
- **Blog post** (Nov 3): [Running Qwen 3.8 27B locally to interpret model weights](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)

**Links:**
- [Simon's LLM tag page](https://simonwillison.net/tags/llm/)

---

### Jerry Liu / LlamaIndex — ParseBench-2 (Nov 12)

LlamaIndex launched ParseBench-2, a severity-aware document parsing benchmark covering six dimensions: text, formatting, tables, charts, visual grounding, and forms. It uses a 4-tier severity scoring system where, for example, a wrong number in a chart costs 10 points but formatting errors in markdown deduct nothing.

- Hit 30K monthly downloads in 3 days, #3 on HuggingFace trending benchmarks
- OCRia-1.5 model family released alongside, powering LlamaParse modes
- LlamaParse (Agentic Plus) tops the leaderboard at 90.09% overall (~2.81 cents/page)
- Earlier (Nov 3): OCRia-1 got a 10x speedup on a single B200 (285 → 2,800 tok/s)

**Links:**
- [ParseBench-2 blog post](https://www.llamaindex.ai/blog/introducing-parsebench-v2)
- [HuggingFace dataset](https://huggingface.co/datasets/llamaindex/ParseBench-2)
- [Jerry Liu on ParseBench-2 downloads](https://x.com/jerryjliu0/status/2122019605271167009)
- [OCRia-1 speedup post](https://x.com/jerryjliu0/status/2117697428833132986)

---

### Peter Steinberger (@steipete) — macOS Permissions & AI Agents (Nov 16)

Steinberger (OpenClaw creator, now at OpenAI working on agents) complained about macOS 27.3 warning users against giving AI apps full Mac control — arguing people actually want *fewer* permission alerts so agents can work without constant babysitting. He also mentioned his team writing about running persistent agents inside OpenAI (Nov 13).

Related projects: Peekaboo (macOS CLI/MCP server for AI agent screenshots), Brabble (wake-word voice daemon), CodeLooper (Cursor workflow monitoring).

**Links:**
- [steipete's X profile](https://x.com/steipete)

---

### swyx — AI Engineer NYC & Code Summit Announcement

swyx closed AI Engineer NYC 2026 (3-day event, early November), announcing:
- **AIE Code**: A new vertical summit focused on coding agents — "the pinnacle of where verifiable AI is going"
- **AIE Europe**: Returns to London in February
- **World's Fair**: Targeting 10,000 people in San Francisco next summer

Also promoted local AI and mentioned he's hyped for Ahmad Osman's return to AIE Code.

**Links:**
- [Closing remarks video](https://www.youtube.com/watch?v=Gs4Ho0ub3a4)
- ["The Highest Loop" talk](https://www.youtube.com/watch?v=Fva8hFosqyQ)
- [Local AI post](https://x.com/swyx/status/2119140818690974203)

---

### LLMJunky — DeepSeek V4.1 Flash (Nov 6)

Called DeepSeek V4.1 Flash 1017 the best open-weights model and the go-to for anyone who can run it. Interesting context: open weights' share of paid tokens briefly fell to 52% when Claude Opus 5.5, Sonnet 5.5, and GPT-6.1 Sol launched, then rose back above 70% two weeks later, mostly due to DeepSeek V4.1 Flash.

**Links:**
- [LLMJunky's DeepSeek post thread](https://x.com/LLMJunky/status/2021087480288854509)

---

### MIT Missing Semester 2026 — Now Covers Coding Agents

MIT's 2026 edition of The Missing Semester of Your CS Education now includes an "Agentic Coding" lecture covering Claude Code, Codex CLI, and opencode. Topics include worktree parallelism, MCP integrations, AGENTS.md conventions, subagents, and sandboxing. The instructors used Claude Code to review and fix the lecture notes themselves.

**Links:**
- [Agentic Coding lecture](https://missing.csail.mit.edu/2026/agentic-coding)
- [2026 course page](https://missing.csail.mit.edu/2026)

---

## Broader AI News (Nov 17-18)

### Microsoft Ignite — MAI Code 2 (Nov 17)

Microsoft unveiled MAI Code 2 and MAI Code 2 Flash at Ignite in San Francisco, now generally available in GitHub Copilot and Foundry. Positioned as nearly matching rival coding models at a much lower price. Also announced a cybersecurity-focused model for limited customers, plus image and transcription models.

**Links:**
- [US News / Reuters coverage](https://www.usnews.com/news/top-news/articles/2026-11-17/microsoft-unveils-ai-models-for-coding-cybersecurity-as-it-takes-on-anthropic-openai)
- [Ignite agents coverage](https://men.industry.co.id/read/9861/microsoft-ignite-2026-ai-agents-get-their-own-ids-and-guards)

### OpenAI — GPT-6.2 Astra & Sol (Nov 17-18)

OpenAI released GPT-6.2 Astra (targeting demanding projects including software development and scientific research) and Sol (everyday work and multi-step AI agents). Notably, Astra is reportedly the first externally released model to reach OpenAI's "High" threshold for AI self-improvement. Early analysis found no gain over GPT-6 Astra on at least one Coding Agent Index.

**Links:**
- [The Neuron AI digest](https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-18-2026/)

### Armin Ronacher (@mitsuhiko) — Quiet November

No confirmed November posts found. His most recent notable post (Oct 22) reflects: "As fun as AI is, we built so much bad software over the last 30 years, and now the universe is punishing us for our sins." His company Earendil released Pi 1.0 around October, and he remains an active voice on code quality in the AI age.

**Links:**
- [October reflection](https://x.com/mitsuhiko/status/2113207589978636646)
- [Pi open-source post](https://lucumr.pocoo.org/2026/5/24/pi-oss)

---

*Note: nitter.net was unavailable in this environment. Content was gathered via web search and may not capture all posts from the last 24 hours. Check the linked X profiles directly for the most complete picture.*
