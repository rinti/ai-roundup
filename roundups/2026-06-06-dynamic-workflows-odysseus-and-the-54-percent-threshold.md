---
title: "Dynamic Workflows Ship, Odysseus Goes Viral & AI-Generated Code Hits 54%"
date: "2026-06-06"
summary: "The week's throughline is **orchestration at every layer** — from Anthropic shipping **dynamic workflows** that fan work across hundreds of parallel subagents, to PewDiePie releasing **Odysseus**, a self-hosted AI workspace that hit 44K GitHub stars in days, to Theo's **Lakebed** proving agent-native design by having an agent silently discover an unannounced feature and build on it overnight. The numbers caught up too: the **State of AI 2026 survey** reports AI-generated code jumping from 28% to **54%** year-over-year, while a separate Sonar survey finds **96% of developers don't fully trust** what AI writes. Karpathy is settling into Anthropic's pre-training team after his May 19 move; steipete spoke at MS Build on *'Build the thing that builds the thing'* and is teaching Codex to QA-test OpenClaw via webVNC with Peekaboo; mitsuhiko's *'Building Pi With Pi'* post and ongoing code-quality warnings continue to land; Boris Cherny's `/simplify` and `/batch` skills are now in developers' daily loops; Simon Willison shipped **datasette-apps** and **datasette-agent-micropython**; Matt Pocock's skills repo passed **45K stars** and his AI Coding cohort v2 shipped; swyx framed Odysseus as the arrival of the personal-agent vision Soumith Chintala pitched 16 months ago; Thariq called dynamic workflows *'the biggest upgrade since skills and subagents'*; Jerry Liu's LlamaIndex shipped **Agent Workflows with ACP integration** and **LlamaSheets** beta; and yesterday's AGENTS.md-vs-CLAUDE.md standards war is still reverberating."
tags:
  - "Claude Code Dynamic Workflows — orchestration at scale"
  - "PewDiePie's Odysseus — self-hosted AI workspace goes viral"
  - "State of AI 2026 — the 54% threshold"
  - "Karpathy settles into Anthropic"
  - "Theo's Lakebed — agent-native by demonstration"
  - "steipete at MS Build + Codex QA assistant"
  - "mitsuhiko — Building Pi With Pi, code quality warnings"
  - "Boris Cherny — /simplify, /batch, and the 4% GitHub stat"
  - "Simon Willison — datasette-apps, agent-micropython, patterns guide"
  - "Matt Pocock — 45K-star skills repo, AI Coding cohort v2"
  - "swyx — Odysseus commentary, Latent Space, Cognition evals"
  - "Thariq — workflows are the biggest upgrade, Claude Code channels"
  - "Jerry Liu / LlamaIndex — Agent Workflows + ACP, LlamaSheets"
  - "LLMJunky — Gemma is Google's best model"
  - "AGENTS.md standards war (still ongoing from June 5)"
  - "Videos worth watching"
  - "News / longer reads"
---

# AI Roundup — June 6, 2026

The conversation has shifted from "can agents do the work?" to "how do you orchestrate them at scale?" Anthropic's dynamic workflows ship parallel subagent coordination into Claude Code; PewDiePie's Odysseus proves that self-hosted personal AI workspaces have mainstream appeal (44K stars in days); and the State of AI 2026 survey puts a number on the shift — 54% of developer code is now AI-generated, up from 28% last year. Meanwhile, the trust gap remains enormous: 96% of devs say they don't fully trust what the models write. The tension between speed and quality that mitsuhiko has been warning about all year is now the industry's central problem.

---

## Claude Code Dynamic Workflows — Orchestration at Scale

**The biggest Claude Code feature drop this week.** On June 2, Anthropic shipped [dynamic workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code) — a system that lets Claude dynamically write JavaScript orchestration scripts, break work into subtasks, and fan them out across **tens to hundreds of parallel subagents** in a single session.

Thariq [called it](https://x.com/trq212/status/2061907538741006796) **"the biggest upgrade to Claude Code's capabilities since skills and subagents"** and noted he's particularly excited about the non-technical tasks it enables. The system works by having Claude plan dynamically based on your prompt, generate a JS orchestration script on the fly, then execute it with full loop/branch logic while your session stays responsive. Adversarial agents attempt to refute findings, and the run iterates until answers converge.

Use cases: investigating widespread bugs, managing large migrations, conducting security audits, reviewing performance, and analyzing complex architectures. Progress is saved as the run goes — interrupted jobs pick up where they left off.

Available in research preview in Claude Code CLI, Desktop, and VS Code for Max, Team, and Enterprise plans, plus the API, Bedrock, Vertex AI, and Microsoft Foundry.

- Blog: [claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)
- Docs: [code.claude.com/docs/en/workflows](https://code.claude.com/docs/en/workflows)
- InfoQ coverage: [infoq.com/news/2026/06/dynamic-workflows-claude-code](https://www.infoq.com/news/2026/06/dynamic-workflows-claude-code/)

---

## PewDiePie's Odysseus — Self-Hosted AI Workspace Goes Viral

**The week's biggest crossover story.** PewDiePie launched [Odysseus](https://github.com/pewdiepie-archdaemon/odysseus), a free, open-source, self-hosted AI workspace — chat, agents, research, documents, email tools, memory, and local model support. The repo is MIT-licensed and hit **44,000+ GitHub stars** as of June 4.

swyx [framed it perfectly](https://x.com/swyx/status/2061256096719970337): *"just a small zoom out on the vibe shift: in Feb 2025 @soumithchintala was talking about his dream of personal, local, private agents, most people didn't believe him. it's June 2026 and @pewdiepie has just released his vibecoded @opencode wrapper that is a complete personal AI productivity suite including email, docs, and calendar."* It reached the top of Hacker News with over 1M views and 10K+ stars in a single day.

Key features: hardware-aware model recommendations across 270+ catalogued models, multi-turn chat plus autonomous agents, multi-step research that synthesizes sources into reports, and full MCP/web/shell/skills/memory support. The agent layer is built on opencode.

The honest caveat: much of the code was "vibecoded" — built by having AI write the code, parts reportedly written from a phone. The project's own site admits it was *"born from a prompt that refused to stop."* Similar to OpenClaw's early days, the security surface of vibecoded infrastructure is a real concern.

PewDiePie's message: *"The war on big tech has just begun."* The bigger story is control — your hardware, your data, your AI stack.

- GitHub: [github.com/pewdiepie-archdaemon/odysseus](https://github.com/pewdiepie-archdaemon/odysseus)
- Dev.to writeup: [dev.to/jenueldev/pewdiepie-built-an-open-source-ai-workspace](https://dev.to/jenueldev/pewdiepie-built-an-open-source-ai-workspace-and-the-point-is-bigger-than-the-hype-579m)
- Cybernews: [cybernews.com/ai-news/pewdiepie-odysseus-artifcial-intelligence](https://cybernews.com/ai-news/pewdiepie-odysseus-artifcial-intelligence/)

---

## State of AI 2026 — The 54% Threshold

**The numbers are in and they're striking.** The [State of AI 2026 survey](https://2026.stateofai.dev/en-US) — 7,258 developers, run April 8 to May 8 — reports that the proportion of AI-generated code has jumped from **28% in 2025 to 54% in 2026**, with the 75%+ segment seeing the highest growth. AI-assisted coding's transition from early-adopter experiment to standard practice is now well underway.

The trust paradox: despite ChatGPT having the edge in sheer popularity, **Claude is the model developers actually pay for the most.**

A separate [Sonar State of Code survey](https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding) found that AI accounts for **42% of committed code** today and is expected to reach 65% by 2027 — but **96% of developers do not fully trust AI-generated code**, and only 48% always verify it before committing. The "verification bottleneck" is real: 38% of devs say reviewing AI code takes more effort than reviewing human-written code.

- Full results: [2026.stateofai.dev](https://2026.stateofai.dev/en-US)
- Analysis: [d4b.dev/blog/2026-05-23-what-the-state-of-ai-2026-survey-says-about-developer-work](https://www.d4b.dev/blog/2026-05-23-what-the-state-of-ai-2026-survey-says-about-developer-work)

---

## Karpathy Settles into Anthropic

The reverberations from Karpathy's May 19 move continue. He [announced](https://x.com/karpathy/status/2056753169888334312): *"Personal update: I've joined Anthropic. I think the next few years at the frontier of LLMs will be especially formative. I am very excited to join the team here and get back to R&D."* The post drew nearly 3M views within an hour.

He's building a team focused on **using Claude to accelerate pre-training research** under team lead Nick Joseph. The trajectory: OpenAI co-founder → Tesla FSD/Autopilot lead → back to OpenAI → Eureka Labs (AI+education startup) → Anthropic. He remains passionate about education and plans to resume that work in time.

His recent intellectual arc is worth tracking: the [Sequoia Ascent fireside](https://x.com/karpathy/status/2049903821095354523) where he argued LLMs enable categories of products classical code couldn't attempt (menugen, .md skills replacing .sh scripts, LLM knowledge bases); his endorsement of [Farzapedia](https://x.com/karpathy/status/2040572272944324650) as the right model for AI personalization (explicit, file-based, portable); and his [autoresearch](https://x.com/karpathy/status/2030371219518931079) project — nanochat stripped to a single GPU, 630 lines, with the human iterating on the training run config while the machine trains.

- CNBC: [cnbc.com/2026/05/19/anthropic-hires-openai-cofounder-andrej-karpathy](https://www.cnbc.com/2026/05/19/anthropic-hires-openai-cofounder-andrej-karpathy-former-tesla-ai-lead.html)
- TechCrunch: [techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/)

---

## Theo's Lakebed — Agent-Native by Demonstration

Theo is building **Lakebed**, a full-stack framework/runtime/cloud designed from the ground up to be agent-native. The most telling anecdote: he [added a new feature](https://x.com/theo/status/2059397972073533710) to Lakebed without announcing it or telling anyone. *"Woke up today with Sherlock shipping a new app on top of the new feature. His agent discovered it and used it perfectly to spec."* That's agent-native design validated by an actual agent in the wild.

He also ran a [big early access test](https://x.com/theo/status/2058743917345194190) that *"went unbelievably well"* and thanked the community for pushing Lakebed to its limits.

On the broader AI front, Theo launched the [State of AI for Web Devs 2026 survey](https://x.com/theo/status/2041715755306389780) and continues to argue that AI coding tools are **widening the gap between great and poor developers** — reframing "agentic coding" hype around cognitive debt. His current setup centers on GPT-5.5 and the Codex harness, with a simplified prompting philosophy where two-sentence requests produce production-ready code.

And yesterday's [AGENTS.md standards war](https://x.com/theo/status/2062741740910702764) is still echoing (covered in full in yesterday's roundup).

---

## steipete at MS Build + Codex QA Assistant

Peter Steinberger spoke at **Microsoft Build** (June 2-3) with a talk titled **"Build the thing that builds the thing"** — exploring how agentic engineering fundamentally changes software development from writing code to orchestrating intelligent agents. He [posted the video](https://x.com/steipete/status/2062390654022332691).

The more interesting technical development: steipete has been [teaching Codex to be his QA assistant](https://x.com/steipete/status/2061208638027395490). For every commit, it creates a user-test scenario and uses **webVNC (Crabbox)** and **computer/browser use (Peekaboo/McPorter)** to test OpenClaw like a human QA person would. This runs in the background and opens PRs with fixes.

He also called [autoreview](https://x.com/steipete/status/2059453909819654554) *"the most impactful skill I've added to my stack"* — it automatically reviews code before landing a PR and *"finds so many edge cases. Sometimes it runs for hours."*

The scale is staggering: steipete runs **~100 Codex instances** in the cloud and [racked up $1.3M in API costs in a single month](https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/) (603B tokens, 7.6M requests). His framing: *"How would we build software in the future if tokens don't matter?"*

- Talk: [x.com/steipete/status/2062390654022332691](https://x.com/steipete/status/2062390654022332691)
- Peekaboo: [github.com/openclaw/Peekaboo](https://github.com/openclaw/Peekaboo)

---

## mitsuhiko — Building Pi With Pi, Code Quality Warnings

Armin Ronacher's [Building Pi With Pi](https://lucumr.pocoo.org/2026/5/24/pi-oss/) (May 24) examines how his project uses automated agents for tasks like issue analysis, while acknowledging they're *"quite far from where Bun and OpenClaw already are in terms of fully detached, automated software engineering."*

His ongoing code quality crusade remains the essential counterweight to the 54%-AI-code narrative. Earlier this year he wrote [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/) and has consistently warned about a *"massive degradation of code quality"* that organizations are *"increasingly only catching way too late."* His diagnosis: automation bias and review fatigue — developers drowning in AI-generated PRs stop reading code carefully.

He also noted *"so much slop in my Twitter mentions and on GitHub"* — many issues and PRs are complete slop, and *"in some cases the humans did not even realize that they created them."*

- Blog: [lucumr.pocoo.org](https://lucumr.pocoo.org/)
- Agent Psychosis: [lucumr.pocoo.org/2026/1/18/agent-psychosis](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)

---

## Boris Cherny — /simplify, /batch, and the 4% GitHub Stat

Boris Cherny, head of Claude Code, [introduced two new built-in skills](https://x.com/bcherny/status/2027534984534544489): **/simplify** (runs parallel agents reviewing changed code for reuse, quality, and efficiency in one pass) and **/batch** (automates code migrations in parallel using dozens of agents with full git-worktree isolation, testing work before putting up PRs). Together they automate much of the work of shepherding PRs to production and executing parallelizable migrations.

The macro stat: **Claude Code writes 4% of all GitHub commits**, and daily active users doubled last month. Boris has discussed achieving [100% AI-generated code for 2 months](https://x.com/GenAI_is_real/status/2016721096377245962) with zero manual edits and 20+ PRs a day.

His `/loop` feature allows scheduling recurring tasks for up to a week at a time — he personally runs loops like `/loop 5m /babysit` to auto-address code review and auto-rebase PRs, and `/loop 30m /slack-feedback` to automatically put up PRs for Slack feedback.

- How Boris uses CC: [howborisusesclaudecode.com](https://howborisusesclaudecode.com/)
- Lenny's interview: [lennysnewsletter.com/p/head-of-claude-code-what-happens](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens)

---

## Simon Willison — datasette-apps, Agent MicroPython, Patterns Guide

Simon Willison shipped several releases this week:

- **datasette-apps 0.1a0** (June 4) — the latest in his datasette ecosystem
- **datasette-agent-micropython 0.1a0** (June 2) — MicroPython in a WASM sandbox as a tool for Datasette Agent, allowing it to generate and execute Python code safely
- **micropython-wasm 0.1a1** (June 2) — Python library for running a MicroPython sandbox via WebAssembly

His [Agentic Engineering Patterns](https://simonw.substack.com/p/agentic-engineering-patterns) guide — coding practices for getting the best results from agents like Claude Code and Codex — continues to be a reference document. He also published his [May 2026 newsletter](https://simonwillison.net/2026/Jun/1/may-newsletter/) on June 1.

On the philosophical side, he shared a post about AI projects spiraling beyond their original intent, describing the technology as *"a thermonuclear ADHD amplifier"* — a sentiment that rhymes with mitsuhiko's friction-and-rate-limiting thesis.

- Releases: [github.com/simonw/simonw/blob/main/releases.md](https://github.com/simonw/simonw/blob/main/releases.md)
- Blog: [simonwillison.net](https://simonwillison.net/)

---

## Matt Pocock — 45K-Star Skills Repo, AI Coding Cohort v2

Matt Pocock's [Claude Code skills repo](https://github.com/mattpocock/skills) passed **45,000 GitHub stars** — 21 structured skills spanning planning (PRD writing, issue breakdown), development (TDD loops, architecture improvement, bug triage), tooling (pre-commit hooks, git guardrails), and knowledge management. His "grill me" skill — where AI structures a Q&A session on any topic — is reportedly the most popular among users.

He evolved his course from "Claude Code For Real Engineers" to **"AI Coding For Real Engineers"** with [version 2](https://x.com/mattpocockuk/status/2056447804537741327): 2,500+ students in the first cohort, now supporting any coding agent (not just Claude Code), with updates for every skill. The [AI Coding Dictionary](https://github.com/mattpocock/dictionary-of-ai-coding) — jargon explained in plain English — is a useful companion resource.

- Skills: [github.com/mattpocock/skills](https://github.com/mattpocock/skills)
- Dictionary: [github.com/mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding)
- AI Hero: [aihero.dev](https://www.aihero.dev/)

---

## swyx — Odysseus Commentary, Latent Space, Cognition Evals

Beyond the Odysseus framing above, swyx has been busy. Yesterday he [announced](https://x.com/swyx/status/2062611218196771017) *"the first eval ship from Cog"* — Cognition's private enterprise evals running up to **100 hours** (vs METR's ~16), backed by an **AI Productivity Guarantee** funding usage up to $10M if Devin underdelivers. The rallying cry: *"stop maximizing tokens and start maximizing productive output."*

The latest [Latent Space episode](https://latent.space/p/andon) with Andon Labs covers dollar-denominated evals and why *"Reality is humanity's real last exam."* The podcast is up to episode 207, with recent coverage of video models and AI agents/infrastructure.

swyx's broader thesis: the shift from personal agents being a dream (Soumith Chintala, Feb 2025) to mainstream reality (PewDiePie's Odysseus, June 2026) happened in 16 months.

---

## Thariq — Workflows, Channels, and @ClaudeDevs

Thariq ([@trq212](https://x.com/trq212)) has been the primary voice for Claude Code feature announcements:

- [Dynamic workflows](https://x.com/trq212/status/2061907538741006796) are *"the biggest upgrade to Claude Code's capabilities since skills and subagents"*
- [Claude Code Channels](https://x.com/trq212/status/2034761016320696565) — control Claude Code sessions through MCPs, starting with Telegram and Discord. Message Claude Code directly from your phone
- [@ClaudeDevs](https://x.com/trq212/status/2044893583308918787) — the official channel for all Claude Code and Claude platform updates
- His workflow tip: start with a minimal spec, ask Claude to interview you using AskUserQuestion, then make a new session to execute the spec

His earlier [Lessons from Building Claude Code: Prompt Caching Is Everything](https://x.com/trq212/status/2024574133011673516) remains essential reading — long-running agentic products are made feasible by prompt caching reusing computation from previous roundtrips.

---

## Jerry Liu / LlamaIndex — Agent Workflows + ACP, LlamaSheets

Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0)) and LlamaIndex shipped several features this week:

- **Agent Workflows with ACP integration** — filesystem tools, MCP servers, persistent memory, and pre-built document agent templates for instant deployment
- **LlamaSheets** (beta) — intelligently interprets formatting, layout, and semantic relationships inside .xlsx files to produce clean parquet outputs. Powered by a multi-stage pipeline for feature extraction, region classification, and hierarchical table reconstruction
- **Vibe-coding document extraction** — a new approach to document parsing

Earlier in 2026, LlamaIndex shipped **Workflows 1.0** (lightweight framework for agentic systems), **LiteParse** (open-source local document parser), and **ParseBench** (first document OCR benchmark for AI agents).

- Blog: [llamaindex.ai/blog](https://www.llamaindex.ai/blog)

---

## LLMJunky — Gemma Is Google's Best Model

LLMJunky made a bold claim yesterday: [*"Google's best models are, ironically, the open source Gemma models."*](https://x.com/LLMJunky/status/2062687372748234893) (18K views). Pushed on whether a Gemini 3.5 Flash price cut would change his mind, he [held the line](https://x.com/LLMJunky/status/2062751872553718156): *"they're genuinely making some of the best small models available. That's the difference."*

The honest caveat from the replies: Gemma quality is great but *"underwhelming on the agentic side… probably due to context window limits"* — the same wall NVIDIA's Nemotron 3 Ultra (Mamba-Transformer MoE hybrid for long-running agents) is trying to climb over.

He also shipped [Remote Control for the Codex App on Linux](https://x.com/LLMJunky/status/2062285530662846615) and noted [Codex models got much better at Convex](https://x.com/LLMJunky/status/2062689964756766970).

---

## AGENTS.md Standards War (Still Ongoing from June 5)

Yesterday's loudest thread continues to echo. Theo [declared](https://x.com/theo/status/2062741740910702764) *"There is a standard. It's Agents.md. Anthropic refuses to use the standard."* — then [immediately conceded](https://x.com/theo/status/2062742064769782090) why he keeps two files: *"Claude models need SO much handholding… my CLAUDE.md is 4x longer and much dumber."*

The pragmatist consensus: `ln -s claude.md agents.md` until the dust settles. The fact-check Theo skipped: Claude Code already reads AGENTS.md as a fallback. Full coverage in [yesterday's roundup](2026-06-05-agents-md-standards-war-cogs-10m-guarantee-cloudflare-swallows-vite.md).

---

## Videos Worth Watching

- **steipete: "Build the thing that builds the thing"** — MS Build talk on agentic engineering and how it changes software development. [x.com/steipete/status/2062390654022332691](https://x.com/steipete/status/2062390654022332691)
- **Matt Pocock: Full Walkthrough — Workflow for AI Coding** — end-to-end demo of his Idea → PRD → Kanban → Ralph Loop → Manual QA pipeline. [youtube.com/watch?v=-QFHIoCo-Ko](https://www.youtube.com/watch?v=-QFHIoCo-Ko)
- **Karpathy's Sequoia Ascent fireside** — LLMs as new product categories, jaggedness explained via RL data distributions, agent-native economy. [x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)
- **Boris Cherny at AI Engineer World's Fair** — speed run through the evolution of coding UX since the 1950s and where it's headed. [x.com/bcherny/status/1932652135549972935](https://x.com/bcherny/status/1932652135549972935)
- **PewDiePie: "MY trillion $Dollar Project is finally OUT!"** — Odysseus launch video. [youtube.com/@PewDiePie](https://www.youtube.com/@PewDiePie)
- **Latent Space + Andon Labs** — dollar-denominated evals, Claude calls the FBI, price cartels, and Luna. [latent.space/p/andon](https://latent.space/p/andon)

---

## News / Longer Reads

- **Microsoft ships MAI-Code-1-Flash at Build** — their first model that generates source code from written descriptions. Also introducing MAI-Thinking-1 for high-efficiency reasoning. [cnbc.com/2026/06/02/microsoft-unveils-new-ai-models](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html)
- **Anthropic's 2026 Agentic Coding Trends Report** — comprehensive data on how coding agents are reshaping development. [resources.anthropic.com](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)
- **Cognition's AI Productivity Guarantee** — if Devin delivers less engineering value than you're paying for, Cognition funds your usage up to $10M. Found via swyx. [x.com/swyx/status/2062611218196771017](https://x.com/swyx/status/2062611218196771017)
- **Armin Ronacher: Building Pi With Pi** — how his project uses AI agents while staying honest about the distance from full automation. [lucumr.pocoo.org/2026/5/24/pi-oss](https://lucumr.pocoo.org/2026/5/24/pi-oss/)
- **Sonar State of Code 2026** — 96% of devs don't fully trust AI code, 38% say reviewing it takes more effort than human code. [sonarsource.com/blog/state-of-code-developer-survey-report](https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding)
- **Karpathy's Wiki LLM / Farzapedia** — the case for explicit, file-based AI personalization over opaque model memory. [x.com/karpathy/status/2040572272944324650](https://x.com/karpathy/status/2040572272944324650)
- **OpenClaw, OpenAI and the future** — steipete's blog post on running 100 agents and the philosophy behind it. [steipete.me/posts/2026/openclaw](https://steipete.me/posts/2026/openclaw)

---

## Non-AI / Off-Topic

- **Cloudflare acquires VoidZero** (Vite, Vitest, Rolldown, Oxc) — the JS build layer consolidation continues. All projects remain MIT-licensed. (Covered in full in yesterday's roundup.) [x.com/voidzerodev/status/2062520542121304146](https://x.com/voidzerodev/status/2062520542121304146)
- **GitHub Copilot billing switch** — as of June 1, all Copilot plans bill on GitHub AI Credits (usage-based), with user-level budgets and a Copilot Max upgrade path. The end of per-message billing that Theo exposed as structurally broken last month.
