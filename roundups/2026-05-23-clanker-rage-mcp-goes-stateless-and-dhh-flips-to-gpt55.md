---
title: "Clanker Rage, MCP Goes Stateless & DHH Flips to GPT-5.5"
date: "2026-05-23"
summary: "A bumper Friday for the agentic-coding meta: **Armin Ronacher's** 300-line diff for a 10-line change set off a 13K-view referendum on scope control, while **swyx** shipped *Kakuna* — a hardening-only skill suite — and ran the prior *vibecoded-slop-to-production* loop for 16 hours / 103 commits. **Matt Pocock** floated `TEST-SEAMS.md` as a third doc layer next to CONTEXT.md and ADRs, **DHH** declared Opus 4.7 a step *backwards* after sustained GPT-5.5 use, and the MCP **2026-07-28** release candidate went stateless — no handshake, no session id, any request can hit any server instance. Plus Codex `/goal` graduated to GA with mid-run pause-and-adjust, **Simon Willison** dropped the first alpha of Datasette Agent, GitHub started shipping native PR contribution caps, and **LLMJunky** unpacked SpaceX's IPO filing — the $1.25B/month Anthropic compute deal can be cancelled in under three months."
tags:
  - Agentic Coding & Agent Harnesses
  - Model & Tool Releases
  - Protocol & Ecosystem
  - Industry & Markets
---

# AI Roundup — May 23, 2026

## Agentic Coding & Agent Harnesses

**Armin Ronacher's clanker rant goes viral.** A one-line vent — *"Expected a change to be 10 lines of code. Clanker made a 300 lines diff. In moments like this I want to throw the damn thing against the wall"* — picked up 13.8K views and 348 likes in a few hours. When pressed, Ronacher named the culprit: **GPT-5.5**. No, it wasn't tests bloating the diff; the model just rewrote everything in sight. The replies turned into one of the better meta-threads of the week, with [@guilhermeotina](https://x.com/guilhermeotina/status/2057961838835306665) nailing it: *"the gap between 'correct code' and 'minimal correct edit' is where the real taste lives. llms are great at the first, terrible at the second."* And [@noxfield405](https://x.com/noxfield405/status/2057996753761136855): *"scope control is the missing primitive. the agent pays nothing to write 300 lines. you pay everything to read them."* Several recommended explicit anti-bloat instructions in the prompt ("minimize diff size, backtrack elegantly"). [Thread](https://x.com/mitsuhiko/status/2057914670653038883).

**swyx ships *Kakuna*.** A direct response to the same problem: a skill suite that *only* hardens existing code — checklists, subagent parallelism, opinionated takes on how AI engineers should design apps for joint human/agent access. The framing: *"instead of dark factory, go mullet factory — party in front (ship unique lovable features), dark in the back (timeless production principles)."* You `/plan` with it, then let `/goal` run for a day, and it returns the same functionality with the boring stuff done plus an audit of its own work. This is the productized version of [yesterday's experiment](https://x.com/swyx/status/2057559570177007912) where swyx let an agent run for 16 hours, churn out 103 commits, and end up with "exactly the same app but instead of fragile mvp it now looks like a codebase i can actually build on." [Repo](https://github.com/swyxio/skills). [Kakuna announcement](https://x.com/swyx/status/2057876022553690327).

**Matt Pocock floats `TEST-SEAMS.md`.** A third doc layer alongside `CONTEXT.md` and ADRs — an explicit list of agreed test seams in the app. The motivation: *"Agents simply cannot be trusted to make good decisions about what to test, and at what seam. For every small change, they extract out only what they've built into a testable function and test that. It leads to a patchwork nightmare of tests that break as soon as the implementation changes."* Asked how to keep it from going stale, Pocock said merge it into every planning skill that touches module shape (`/to-prd`, `/improve-codebase-architecture`). 42 replies, 27K views — clearly a nerve. [@scratchdotmd](https://x.com/scratchdotmd/status/2057864237914194113) offered the dark take: *"it seems to work best when the agent is unaware of the existence of tests."* [Thread](https://x.com/mattpocockuk/status/2057854080454631528).

**Uncle Bob endorses the tuning tax.** Bob Martin — quoted approvingly by Pocock — said 30–40% of his agent productivity goes into tuning agents and hardening output, *"and I don't consider that a waste."* His tell: the *code* isn't necessarily better, but the surrounding tests are vastly better than anything he produced manually, even with disciplined TDD. Pocock's gloss: *"Uncle Bob gets it."* 412 likes, 97K views. [Thread](https://x.com/mattpocockuk/status/2057933526759010783).

**Codex `/goal` graduates from experiment.** OpenAI shipped GA for goal mode in Codex (app/IDE/CLI), and notably you can now **pause and steer mid-goal** rather than waiting for it to finish flailing. swyx tested it: *"lol ok you can pause and adjust mid goal now."* In a parallel demo, [@reach_vb](https://x.com/reach_vb/status/2057882419257311652) handed Codex a screenshot of swyx's challenge — *code a ~10M-parameter transformer in JAX/Flax/Optax in free Colab and train it on addition* — and Codex drove a logged-in Colab session via Chrome, ran the T4 job, and audited the result with subagents. Final: **10,652,557 params, ~19 min train, 99/100 exact accuracy**. [/goal announcement](https://x.com/openaidevs/status/2057530209470210453). [Colab demo](https://x.com/reach_vb/status/2057882419257311652).

## Model & Tool Releases

**DHH: GPT-5.5 has overtaken Opus 4.7 for complex agent work.** *"For complicated agent work, it's amazing how much GPT5.5 has improved. I found 5.2 to be very far behind Opus. Now using Opus 4.7 after 5.5 feels like a big step backwards. Gotta love this level of competition! Strong comeback for OpenAI."* 3,151 likes, **225K views** — clearly resonated. Several replies echoed the pattern: Codex/GPT for building, Opus still better for content. [Thread](https://x.com/dhh/status/2057906669158309913). Worth pairing with Ronacher's GPT-5.5 complaint above — same model, opposite verdicts, depending on whether you prize raw capability or restraint.

**Simon Willison releases Datasette Agent (alpha).** A conversational AI assistant for Datasette that answers questions about SQLite databases and is plugin-extensible for extra tools. Asked how it compares to "Claude Code + SQLite," Simon was candid: *"Claude Code + SQLite is hard to beat one-on-one!"* — Datasette Agent's edge is running as a browser web app with multiple-model support and the existing Datasette plugin ecosystem. [Announcement](https://x.com/simonw/status/2057554315821371543) · [Blog post](https://simonwillison.net/2026/May/21/datasette-agent/) · [Live demo](https://agent.datasette.io/).

**MiniMax M3 confirmed open weights.** Ryan Lee from the MiniMax team confirmed M3 will ship open-weight, "soon." LLMJunky's reaction: *"awesome. this guy cooks."* [Quote](https://x.com/RyanLeeMiniMax/status/2057646921683202097).

## Protocol & Ecosystem

**MCP 2026-07-28 release candidate is out and the protocol is now stateless.** David Soria Parra: no handshake, no session id, **any request can hit any server instance**. Plus extensions as first-class citizens (MCP Apps, Tasks), auth hardening, and a formal deprecation policy "so we don't have to do this again." 1,397 likes, **561K views** — easily the biggest infra-story of the day. [@heygurisingh](https://x.com/heygurisingh/status/2057834522075668864) summarized the point well: *"Making MCP stateless is one of those changes that sounds boring until you realize it massively simplifies scaling, reliability, and orchestration for real production agents."* The cost: sampling is gone. Ronacher's reaction: *"Finally. I asked for this back in March last year!"* [Thread](https://x.com/dsp_/status/2057780712187580924) · [Blog](https://blog.modelcontextprotocol.io/).

**GitHub starts shipping native PR contribution caps.** Camilla Moraes teased a "PR cap for outside contributors and an allowlist for trusted ones," aimed at the post-Shai-Hulud-era flood of low-quality PRs. Peter Steipete: *"We used bots so far to enforce a 10PR per 'person' limit. Great to see GitHub shipping that natively!"* [Preview](https://x.com/moraes_c_/status/2057864556488306833).

**Mitsuhiko on Rust appeal post-curl CVEs.** *"Now that even pillars of the C ecosystem like curl have legitimate CVEs filed against them like there's no tomorrow, I wonder if Rust is about to look a lot more appealing even to the critics."* A reply asked the obvious counterpoint: *"if the models are so good at finding security issues, maybe the value of memory safe languages is diminished?"* — which Ronacher has not yet rebutted publicly. [Thread](https://x.com/mitsuhiko/status/2057932291226173728).

## Industry & Markets

**SpaceX's IPO filing is wild.** LLMJunky's breakdown — Q1 numbers:

- Space: lost $662M
- Connectivity (mostly Starlink): made $1.1B
- AI: lost $2.5B

The only profitable line is Starlink, but the **valuation pitch is AI** — SpaceX claims a $28.5T TAM, 93% of which is AI. Over 60% of Q1 capex went to AI infrastructure. Highlights from the AI segment:

- A **$1.25B/month** GPU compute deal with **Anthropic** that can be cancelled in fewer than three months
- A teased **$60B Cursor** deal
- Grok improvements

On governance: Musk's Class B shares get 10 votes each vs. 1 for Class A; a non-voting Class C exists for acquisitions. The filing says Musk will control the company. [Thread](https://x.com/LLMJunky/status/2058006811324674095).

This is the same Anthropic-SpaceX deal that surfaced as a rumor on May 21 — now confirmed in S-1 form, with the cancellable-on-3-months clause being the obvious load-bearing detail for anyone modelling Anthropic's compute risk.

**Theo on dev platforms.** A side note from a day of off-topic posting: *"Crazy how the web is still the only platform that doesn't suck to develop for."* No further argument given, but the implicit comparison is iOS/Android/Windows. [Post](https://x.com/theo/status/2058036119615467960).
