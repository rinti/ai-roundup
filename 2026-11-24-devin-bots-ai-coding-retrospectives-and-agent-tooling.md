# AI Roundup — November 24, 2026

## Devin Bots, AI Coding Retrospectives, and the Agent Tooling Wave

---

## Agentic Coding & Tools

### Cognition Launches Devin Bots — Persistent Multi-Agent Coding Teams

Cognition launched **Devin Bots** on November 17, persistent manager agents that coordinate teams of Devin coding instances on multi-week projects. Each Bot has memory, splits large projects into tasks, and assigns them to individual Devin sessions. Bots accept work from Slack, text, phone calls, group chats, and scheduled triggers that watch CI and Linear.

Launch templates include Software Factory, Android Engineer, QA Engineer, Latency Optimizer, Product Engineer, and Chief of Staff. Cognition frames the product against Anthropic's Duet and OpenAI's Dots — arguing those are general-purpose agents that happen to handle code, while Devin Bots are purpose-built around a coding agent.

One reported customer (a mobile game studio) went from ~50 PRs/week to 1,900 using ~20 bots reporting to a manager agent called "Super Jenny," which surfaces decisions to a human operator four times daily. Beta testers report 4.5× more PRs per message.

**Open questions:** Cognition hasn't explained how bots resolve conflicts between parallel agents, and no bot-specific pricing has been disclosed.

**swyx's take:** He said he'd been trialing Devin Bots for a week and they replaced several earlier concepts ("agent swarms," "loop engineering") in his workflow. His takeaway: "you don't want AI Employees" — bots that own outcomes and manage sub-agents are the right abstraction.

- [Fortune exclusive on Devin Bots](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/)
- [The New Stack coverage](https://thenewstack.io/cognition-devin-bots-management/)
- [swyx's post on Devin Bots](https://x.com/swyx/status/2122746401482592549)
- [Cognition blog on multi-agent work](https://cognition.ai/blog/multi-agents-working)

---

### Matt Pocock's "Brief History of AI Coding" — One Year Retrospective

Matt Pocock posted a popular retrospective tracing the arc of AI coding since Opus 4.5 launched in November 2025:

- **Nov 2025:** Opus 4.5 releases, OpenClaw gets built
- **Dec 2025:** Community consensus that models handle 95% of coding tasks
- **Jan 2026:** Ralph loops get popular, early efforts on orchestration
- **Feb 2026:** "Everyone feels knackered"
- **Mar 2026:** The skills explosion
- **Apr 2026:** Most top devs haven't written a line of code in months
- **Oct 2026:** The promised speed gains finally materialize

He noted the "dark factory" (fully autonomous coding) still feels distant, and reading code remains essential even if writing it doesn't.

He also appeared on the **NetworkChuck podcast** (Nov 20), arguing that AI coding agents become trustworthy only when humans insist on strict deterministic limits — lint rules, tests, type checks — rather than relying on an agent's own self-review.

His upcoming **"AI Coding For Real Engineers"** course (November cohort) covers wayfinder patterns, codebase design for agents, automated checks/review, and building a "software factory."

- [Matt's retrospective post](https://x.com/mattpocockuk/status/2122287575557706226)
- [AI Coding Crash Course → non-coding work](https://x.com/mattpocockuk/status/2123341910559318124)
- [Looking for signal on AI for non-coding tasks](https://x.com/mattpocockuk/status/2122715955336036600)

---

### Theo & T3 Code — 1,000 Contributors and Agent Coordination

T3 Code (Theo Browne's open-source agentic coding control plane) passed **1,000 GitHub contributors** (now at 1,042). Theo noted that open-weight models make up less than 0.5% of T3 Code's traffic.

He's been vocal about T3 Code's **Orchestrator V2**, which lets harnesses call each other. He also sparked a debate by criticizing Kanban-style boards for agent work, arguing thread-based interfaces keep cognitive load lower. Community reaction was split.

Theo also positioned T3 Code and Codex as superior to Claude Code for remote capabilities and token efficiency in a recent stream.

- [T3 Code passes 1,000 contributors](https://x.com/AGTPinsights/status/2120820501291450793)
- [Theo on T3 Code as "best agentic code tool"](https://x.com/theo/status/2079752200243560688)
- [Kanban boards "slop" trending topic](https://x.com/i/trending/2122253166435590600)

---

### Boris Cherny (Claude Code Creator) — CNN Profile & Workflow Insights

CNN published a **profile of Boris Cherny** (Nov 15), Anthropic's Claude Code lead. Key insights from recent interviews and talks:

- He hasn't written code by hand since ~November 2025
- Claude Code's share of his code went from 20% at launch to 100% by November
- He uses **subagents** to check code before merging, finding that having them challenge each other produces cleaner results
- Recommended practices: CLAUDE.md memory files, verification steps, auto mode, routines, and parallel worktrees

After his talks, developers flooded X with tutorials and "blueprints" based on his setup.

- [CNN profile](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny)
- [Boris Cherny at Station F](https://stationf.co/news/boris-cherny)
- [Every podcast: How to Use Claude Code Like the People Who Built It](https://every.to/podcast/how-to-use-claude-code-like-the-people-who-built-it)

---

### Peter Steinberger (@steipete) — OpenClaw & macOS Agent Permissions

Steipete (now at OpenAI, stewarding OpenClaw as independent) has been posting about agent permission friction on macOS. On Nov 16, he asked Apple to reduce macOS permission alerts so agents can work without constant babysitting. On Nov 19, he landed a fix in OpenClaw for users of the embedded harness.

His GitHub shows active updates to an `agent-scripts` repo ("scripts for agents, shared between my repositories") as of Nov 21.

- [Steipete on X](https://x.com/steipete)
- [OpenClaw macOS permissions docs](https://docs.openclaw.ai/platforms/mac/permissions)

---

### Armin Ronacher (@mitsuhiko) — AIE Code Talk & Agent Architecture

Armin Ronacher spoke at the **AI Engineer Code Summit** on November 12 in San Francisco. His talk argued for improving the workshop (dev environment, tooling, constraints) before maximizing agent output, and for agents that can pause and resume work.

On Nov 18, he appeared on a podcast with Mario Zechner discussing agent-written code quality. He experimented with Lean proofs for parts of Pi and found it was "one more file for the agent to read, not a constraint."

A DEV Community article also analyzed one of his agent runs that reportedly cost ~$1,200 over 35 hours on GPT-6 Astra, examining the cost/guardrail tradeoffs.

- [AIE Code Summit talk page](https://ai.engineer/code/2026/talks/armin-ronacher)
- [Podcast: Agent code that doesn't suck](https://saurabh-kumar.com/til/1795004231/)
- [DEV Community cost analysis](https://dev.to/jamilxt/i-ran-the-numbers-on-armin-ronachers-1200-agent-run-every-bad-habit-in-it-exists-in-my-2jog)

---

### Simon Willison — LLM 0.37, Datasette Agent, and Security Fixes

Simon Willison has been prolific in November with releases and posts:

- **LLM 0.37** (Nov 2): Switched default model to gpt-6-luna, added `llm openai endpoint add` command
- **LLM 0.37.2** (Nov 11): Fixed a **security issue** where an OpenAI API key could leak to other providers
- **LLM 0.37.3** (Nov 16): Workaround for SQLite 3.54.1 JSON behavior breaking LLM's logging
- **llm-anthropic 0.31** (Nov 9): Added Claude Fable 5.2 support
- **llm-gemini 0.36/0.38** (Nov 10/18): Added Gemini 4 Carbon and Neon support
- **Datasette Agent 0.6a0** (Nov 15): The agent prompt now appears directly on the Datasette homepage, with hash-mention support for tables and queries. Also added support for OpenAI-compatible endpoints, letting local servers (LM Studio, Ollama, llama.cpp) power the agent.

He also highlighted a blog post about a Rust project built by a large agent swarm that reached 29,684 commits in its first three weeks.

- [LLM 0.37 release](https://simonwillison.net/2026/Nov/2/llm/)
- [Datasette Agent post](https://simonwillison.net/2026/Nov/15/datasette-agent/)
- [Simon Willison's LLM tag](https://simonwillison.net/tags/llms/)

---

### Thariq Shihipar (@trq212) — AIE Code Keynote & Agent Interfaces

Thariq (Anthropic, formerly Claude Code team) gave the closing keynote at the AIE Code conference on November 11, covering how coding agent interfaces might evolve. On Nov 13, he did a live coding demo featuring an agent-owned game engine with a domain-specific language for defining characters and abilities that humans can edit.

His current focus: non-coding uses of coding agents (slides, research, knowledge management) and experiments with HTML as an output format for agents.

- [AIE Code closing keynote](https://x.com/trq212/status/2120620900785820143)
- [Live coding post](https://x.com/trq212/status/2121067561915916575)

---

### Karpathy — HackerTube & Weekend Projects with Claude Code

Andrej Karpathy (now at Anthropic's pre-training team) built **HackerTube** — a YouTube alternative curated from ~43 million Hacker News comments, containing 6,454 videos across 150 topics. Built in about 2 hours with Claude Code using Opus 5.5.

He followed up with **TristanTube**, reportedly built in ~3 minutes using 47,000 videos from Tristan Hume's YouTube list. No accounts, no tracking — likes and history stored in browser only.

He also gave a talk (shared by Towards AI on Nov 19) on "how to build with LLMs."

- [HackerTube coverage](https://cryptobriefing.com/andrej-karpathy-launches-hackertube/)
- [Build analysis and cost breakdown](https://www.buildmvpfast.com/blog/karpathy-hackertube-43m-hn-comments-6454-videos-cost-2026)
- [Towards AI: Karpathy on building with LLMs](https://x.com/towards_AI/status/2123287169729020061)

---

### Jerry Liu / LlamaIndex — ParseBench & AWS re:Invent

The @llama_index account announced that **ParseBench** has been cited by NVIDIA, Cohere, and Perplexity (Nov 19), and released **OCRia-1.5** (Nov 18). LlamaIndex will be at AWS re:Invent (Nov 30–Dec 3, booth #155).

Jerry Liu spoke at the Data + AI Summit 2026 on long-horizon document agents.

- [LlamaIndex on X](https://x.com/llama_index)

---

## Broader Industry News

### Apple Working on AI Agent for Device Control & Coding

Bloomberg reported (Nov 19) that Apple is building an agentic assistant capable of writing code, browsing the web, controlling apps, and navigating devices. No product announced yet.

- [Bloomberg: Apple AI Agent](https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-control-apps-browsing-and-coding)

### Netflix Retrofits SDLC for AI Coding Agents

At QCon San Francisco, Netflix's Commerce team presented how they retrofitted their software development lifecycle so AI coding agents and human engineers can ship together.

- [InfoQ: Netflix at QConSF 2026](https://www.infoq.com/news/2026/11/netflix-sdlc-ai-coding-agents/)

### Coding Agent Benchmarks (Nov 22 Update)

On Terminal-Bench 4.1:
- **GitHub Copilot + Copilot Fusion:** 71.2% (leads)
- **Claude Code + Opus 5.5 / Fable 5.2:** 65.8% (tied)
- On the Artificial Analysis Coding Agent Index v1.5, Claude Code + Fable 5.1 leads at 62.2

- [MorphLLM Coding Agent Leaderboard](https://www.morphllm.com/best-ai-coding-agents-2026)

### Security Concerns: Agents Weaponized for Credential Harvesting

Microsoft Threat Intelligence reported (Nov 5) that threat actors are using agentic AI tooling to identify exposed credentials in public GitHub repos and abuse compromised cloud access. Google also found hackers using autonomous agents to turn security patches into exploits.

### Meta Acquires Conductor (AI Coding Startup)

Meta's acquisition of Conductor became public on November 4. Conductor enables developers to coordinate multiple AI coding agents working across parallel workspaces.

### GitHub Copilot Adds GPT-6.2 Models

GitHub added GPT-6.2 Astra and GPT-6.2 Sol to Copilot on November 17.

### Vercel Agent Collaboration Board

Vercel launched a new message board (Nov 19) that lets Claude Code and Codex agents work together on the same project.

---

## swyx / AI Engineer Community

swyx closed the AI Engineer NYC 2026 event by promoting **AIE CODE** as the first vertical summit for coding agents. He called coding agents "the leading edge of verifiable AI." A Latent Space episode features Cognition's CPO Walden Yan and Cole Murray discussing sub-agents and meta-Devin management.

He's also been promoting **AIE CODE** next week featuring Ahmad Osman on local AI.

- [swyx on AIE Code](https://x.com/swyx/status/2119140818690974203)
- [Latent Space: Age of Async Agents](https://latent.space/p/cognition)
- [AI Engineer Summit wrap-up (The New Stack)](https://thenewstack.io/ai-engineer-summit-wrap-up-and-interview-with-co-founder-swyx/)

---

*Note: This roundup was compiled from web search results. nitter.net, x.com, and individual blogs were not directly accessible from this environment, so some details are sourced from secondary coverage. Dates and model names should be verified against primary sources where precision matters.*
