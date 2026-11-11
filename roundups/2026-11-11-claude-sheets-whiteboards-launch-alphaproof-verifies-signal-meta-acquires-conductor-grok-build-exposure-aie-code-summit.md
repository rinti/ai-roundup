---
title: "Claude Sheets & Whiteboards Launch, AlphaProof Verifies Signal, Meta Acquires Conductor, Grok Build Exposure & AIE Code Summit"
date: "2026-11-11"
summary: "Anthropic shipped **Claude Sheets, Whiteboards, and made Claude Data GA** the day after launching Fable 5.2 — building an office suite inside the chat interface while the **IPO roadshow** continues with a targeted Nasdaq debut as early as next week under ticker ANT. **Google DeepMind** announced **AlphaProof Code**, using AI agents to produce 6.5M lines of Lean proofs verifying Signal's core cryptography down to the compiled AArch64 binary. **Meta acquired Conductor**, the multi-agent coding orchestrator, with Cloud shutting down November 20 and the team joining Meta Superintelligence Labs. **Grok Build** got caught with 94.7% of its 37,571 live apps open to anyone without sign-in, including SpaceXSI sales plans and credentials. The **AI Engineer Code Summit** kicked off in San Francisco with Armin Ronacher keynoting. **Theo** defended T3 Code's agent coordination as SOTA after Conductor's exit, and **Simon Willison** blogged about Fable 5.2 prompting and debugging with Claude."
tags:
  - Anthropic Products & IPO
  - Agentic Coding & Agent Orchestration
  - AI Research & Verification
  - Security & Privacy
  - AI Engineer Code Summit
  - Other Interesting Stuff
---

# AI Roundup — November 11, 2026

## Anthropic Products & IPO

### Claude Sheets, Whiteboards & Data

Anthropic rolled out three new tools, building what looks like an office suite inside Claude:

- **Claude Sheets** (beta): shared spreadsheets you build and edit with Claude. Currently limited to 100,000 cells and missing pivot tables, protected ranges, and Excel macros. Available on all paid plans.
- **Claude Whiteboards** (beta): visual brainstorming boards for planning and collaboration with Claude. Enterprise plans have it off by default.
- **Claude Data** (GA): formerly Claude Dashboards, now generally available. Supports data stories and integrates with Amazon Redshift, BigQuery, and ClickHouse. Enterprise plans auto-enable it November 19.
- **Meetings** (preview): a Google Meet integration was also previewed.

[@claudeai](https://x.com/claudeai/status/2120206365759094857): "Starting to roll out today: Claude Whiteboards, Claude Sheets and Claude Data."

Sources: [iClarified](https://www.iclarified.com/103419/anthropic-launches-claude-sheets-and-whiteboards-previews-meetings) · [Tom's Guide](https://www.tomsguide.com/ai/claude/claude-just-got-3-powerful-new-tools-and-they-could-replace-some-of-your-favorite-apps) · [Yahoo Finance](https://finance.yahoo.com/technology/article/anthropic-launches-meetings-whiteboards-sheets-data-ahead-of-ipo-190548601.html)

### The IPO Roadshow Continues

Anthropic's IPO roadshow started November 10 with marketing to investors. The company plans to list as **ANT on Nasdaq**, with Goldman Sachs and Morgan Stanley leading. Debut possibly the week of November 16 (Nov 19-20 mentioned in some reports). Valuation estimates range wildly from ~$1.1T to $2T depending on the source. Seven strategic partners (including Google and Nvidia) agreed to buy $26B of stock.

Sources: [ROIC.ai](https://www.roic.ai/news/anthropic-kicks-off-nasdaq-ipo-roadshow-as-ai-valuation-questions-loom-11-09-2026) · [CryptoBriefing](https://cryptobriefing.com/anthropic-nasdaq-ipo-november-valuation-range/) · [BitMEX guide](https://www.bitmex.com/blog/anthropic-ipo-guide)

### Boris Cherny on Fable Resets

Following yesterday's launch, [@bcherny](https://x.com/bcherny/status/2119873095129550880) (14.8K likes) explained the loyalty-based Fable reset system: "We wanted to do more for the people who've been with us the longest. So with Fable 5.2, the longer you've been subscribed, the more Fable resets you get." The community response remains split between gratitude and "three more chances to run out of Fable."

### Simon Willison on Fable 5.2

Willison published several posts on Nov 9-10:

- **[Prompting Claude Fable 5.2](https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/)** — pulled a key quote from Anthropic's prompting guide about telling Fable "This codebase is yours"
- **[Release: llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/)** — added support for Fable 5.2 and Mythos 5.2 to his LLM CLI tool. Noted that at max effort, the model ran out of 128K thinking tokens trying to generate an image.
- **[Locating a mysterious beep with Claude](https://simonwillison.net/2026/Nov/9/mysterious-beeps/)** — a fun debugging story where he switched to Fable 5.2 partway through

---

## AI Research & Verification

### DeepMind's AlphaProof Code Verifies Signal's Cryptography

Google DeepMind announced **AlphaProof Code** on November 10 — an agentic framework that produced **~6.5 million lines of machine-checked Lean proofs** covering Signal's core cryptographic implementation (PQXDH handshake, Triple Ratchet) down to the compiled AArch64 binary.

Key details:
- Proofs cover forward secrecy, authentication, and post-compromise security for one-to-one sessions
- Agents running on Gemini Carbon wrote the proofs; every proof is verified by Lean
- Five researchers, about four weeks of work. Humans chose the properties and reviewed specs; agents did the proof writing
- Bug-injected binaries confirmed the specs catch real defects
- Code is public at [google-deepmind/code-verification](https://github.com/google-deepmind/code-verification) under Apache 2.0
- Stated limits: no quantum guarantee, side channels out of scope, bounds break down around 25K messages per session

This is described as the first formal verification linking protocol-level guarantees to the unmodified compiled code of a widely deployed cryptographic implementation.

Sources: [Unite.AI](https://www.unite.ai/google-deepmind-uses-ai-agents-to-verify-signals-core-machine-code/) · [DeepMind Blog](https://deepmind.google/blog/introducing-alphaproof-code/) · [DEV Community analysis](https://dev.to/frankchu/65m-lines-of-lean-i-counted-deepminds-signal-proofs-3386)

---

## Agentic Coding & Agent Orchestration

### Meta Acquires Conductor

**Meta confirmed it has acquired Conductor**, the multi-agent coding orchestrator where each agent works in its own isolated copy of the codebase. The team joins **Meta Superintelligence Labs**. Key timeline:

- **November 13**: Conductor Cloud goes read-only
- **November 20**: Conductor Cloud shuts down completely
- The desktop app gets new models and bug fixes until early 2027, then winds down
- Conductor's founder: "We'll have something new for you to use early next year"

Conductor's agents came from third-party labs (Anthropic, OpenAI, etc.), not from Conductor itself. User data will be deleted when the application shuts down.

Sources: [The Next Web](https://thenextweb.com/news/meta-acquires-conductor-ai-coding-agents-superintelligence-labs) · [InfoWorld](https://www.infoworld.com/article/4245065/meta-acquires-conductor-as-ai-coding-shifts-toward-multi-agent-development.html) · [Tech Insider](https://tech-insider.org/meta-acquires-conductor-ai-coding-startup-nov-20-shutdown-2026/)

### Theo Defends T3 Code Post-Conductor

With Conductor shutting down, [@ryaneshea](https://x.com/ryaneshea/status/2118458084561711301) posted a comparison table of alternatives. Theo jumped in to defend **T3 Code**:

- [@theo](https://x.com/theo/status/2118641861661446392): "Why are 'agent coordination' and 'gemini' half points for T3 Code? Afaik we're literally the only ones on the list that have gotten PRs from the Gemini team to make our integration best-in-class. Also our agent coordination is without question SOTA right now."
- T3 Code described as a free, open-source graphical control layer that drives agent CLI tools (Claude Code, Codex, Cursor, Grok Build, OpenCode, Google Antigravity). Still at version 0.0.x.
- Theo also reported a confirmed Anthropic bug: Agent SDK usage drains 5-hour limits faster than Claude Code directly (weekly limits unaffected).
- On Anthropic reasoning: "Anthropic appears to be rolling out a change to the reasoning summarizer on a per-account basis."

Sources: [T3 Code blog review](https://blog.quadmeup.com/2026/11/03/t3-code-a-free-open-source-control-panel-for-running-multiple-coding-agents/) · [tstack explainer](https://explainx.ai/blog/tstack-t3dotgg-agent-skills-full-send-council-claude-code-codex-guide-2026)

### Thariq's Post-Anthropic Reflections

[@trq212](https://x.com/trq212/status/2113844051938054167) (Thariq Shihipar) left Anthropic in late October after building Claude Code. He was one of three Claude Code team members to depart within 10 days. His recent posts remain influential:

- On **agent mania**: "There's 100% a kind of mania you can get into with coding agents, where it feels like you're getting a lot done and working all the time but nothing is really happening. I think it's often a form of avoidance."
- On **HTML over Markdown**: He's been advocating for HTML for AI-generated plans, specs, code review, and reports — several developers cite this as changing their daily workflow.
- On **skills**: He argues skills are "the abstraction that all agents will build on."

Sources: [Analytics India Mag](https://analyticsindiamag.com/ai-news/three-members-behind-claude-code-leave-anthropic-within-10-days) · [FourWeekMBA](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/) · [@trq212](https://x.com/trq212/status/2115937378674372783)

---

## AI Engineer Code Summit (Nov 10-12, San Francisco)

The **AI Engineer Code Summit 2026** is underway at the Hilton San Francisco Union Square. Day 1 (workshops) was yesterday, with two days of single-track keynotes running today and tomorrow. 108 sessions listed.

**Three organizing themes:**
1. Fighting slop in software factories
2. Building with System One models
3. Rewriting critical apps

**Notable speakers include:**
- **Armin Ronacher** ([@mitsuhiko](https://x.com/mitsuhiko), CTO of Earendil) — keynote. He favors minimal agent setups (files, shell, tests, direct editing) and warns that autonomous loops accumulate redundant abstractions.
- **Melvin Johnson** (Google DeepMind)
- **Jarred Sumner** (Bun, listed under Anthropic)
- **Diogo Almeida** (TypeSafe AI)

**swyx** ([@swyx](https://x.com/swyx/status/2119140818690974203)) promoted the event and his thesis: "2025 was the year of coding agents, 2026 is coding agents breaking containment to do everything else." He also hyped a talk on local AI at AIE CODE next week.

Sources: [ai.engineer/code/2026](https://ai.engineer/code/2026) · [Code Week SF events](https://merveinsiders.substack.com/p/san-francisco-ai-events-code-week)

---

## Security & Privacy

### Grok Build: 94.7% of Live Apps Exposed

Security firm **Claroc** found that of 37,571 live Grok Build apps, **35,578 (94.7%) were open to anyone** without sign-in. The exposed apps included SpaceXSI sales plans, employee rosters, medical data, and plain-text passwords.

- The publish flow reportedly preselected "Anyone with the link"
- App links were discoverable through passive DNS services
- Claroc estimates 650-800 apps contained private data
- SpaceXSI disputes the framing, claiming "apps are private by default"
- SpaceXSI took down its own 24 apps but hasn't addressed the ~35K others

Sources: [The Deep Dive](https://thedeepdive.ca/security-firm-says-grok-build-apps-exposed-medical-exams-sales-plans-and-staff-data/) · [Tesla North](https://teslanorth.com/2026/11/10/grok-build-apps-private-data-claroc/) · [FourWeekMBA](https://fourweekmba.com/ai-grok-build-left-94-7-of-37571-live-apps-open-to-anyone/)

### Demis Hassabis AI Safety Warning

DeepMind CEO Demis Hassabis warned that without more attention to AI safety, major incidents could happen within two years. He called for government oversight and potentially a mandated pause for frontier research. He specifically flagged closed-loop self-improvement without human involvement as "very dangerous" and said DeepMind is building "much more hardened sandboxes."

Sources: [Mugglehead](https://mugglehead.com/google-deepmind-ceo-warns-of-peril-should-we-lose-control-of-ai-systems/) · [Semafor](https://www.semafor.com/article/07/14/2026/deepminds-hassabis-calls-for-ai-government-oversight)

---

## Other Interesting Stuff

### Karpathy's HackerTube

Andrej Karpathy (now at Anthropic's pre-training team) built **HackerTube** — a curated video site compiled from ~43 million Hacker News comments spanning 20 years. Claude filtered them down to **6,454 videos across ~150 topics**, using a rule that a video only makes the list if three different people mention it in three different months. Built with Claude Opus 5.5 in the Claude Code desktop app, with Sonnet handling classification. He says it took roughly two hours.

Sources: [Digg](https://digg.com/ai/a2sk4iyd) · [BuildMVPFast](https://www.buildmvpfast.com/blog/karpathy-hackertube-43m-hn-comments-6454-videos-cost-2026) · [ChatGPT For All](https://chatgptforall.substack.com/p/karpathy-built-his-own-youtube-with)

### Matt Pocock Skills Repo & AI Coding Course

[@mattpocockuk](https://x.com/mattpocockuk/status/2103103504567107712) continues building out his skills ecosystem — mattpocock/skills v1.3 shipped with /pr and /implement-spec commands (delegates to subagents). His "AI Coding For Real Engineers" cohort was planned for November, covering wayfinder, codebase design, automated checks/review, and building a software factory.

### Gemini 4 Carbon

Google's latest frontier model is in restricted rollout since October 28, aimed at long-running coding and cybersecurity work. Claims include 2x Argon's success rate on secure code benchmarks. Introductory pricing at $2/$10 per million tokens. Still not generally available to developers.

Sources: [9to5Google](https://9to5google.com/2026/10/28/gemini-4-carbon/) · [ByteIota](https://byteiota.com/gemini-4-carbon-googles-new-ai-model-for-agentic-coding/)

### Steipete on Agent Limits

Peter Steinberger ([@steipete](https://x.com/steipete), now at OpenAI working on agents, also stewarding OpenClaw) recently asked whether individual usage limits still make sense as agent loops evolve. His argument: as models improve, the better setup is an agent that acts as the project's representative and keeps working on the codebase in the background, with humans mainly curating automations.

### Open-Source Trending

From the [AI Daily Digest](https://github.com/diclogic/ai-daily-digest/issues/209):

- **[OpenSandbox](https://github.com/opensandbox-group/OpenSandbox)** (~17.2K stars): Sandbox runtime for agents with Firecracker isolation and egress policies
- **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** (~33.3K stars): Single-binary Rust agent runtime with OS-level sandboxes
- **[Paradev](https://github.com/ParadevAI/Paradev)** (~16.2K stars): Desktop app for running CLI coding agents in parallel, one Git worktree per task

---

*Note: nitter.net and x.com were not directly accessible from this session. Content was gathered via web search, blog posts, aggregators, and the AI Daily Digest. Some tweet dates may be approximate.*
