---
title: "Shai-Hulud Spreads, /goal Hits Both Sides & Thinky's Realtime Reveal"
date: "2026-05-12"
summary: >-
  **Supply-chain bloodbath continues.** Socket's running total of the Shai-Hulud
  /TanStack compromise is now **205 affected npm artifacts across 84 package
  names** — including 64 UiPath artifacts, plus OpenSearch, Mistral AI,
  Guardrails AI, and Squawk packages across npm and PyPI. LLMJunky reports the
  malware is *"embedding itself in Claude and VSCode to re-execute itself,
  even after the original packages have been uninstalled"* — specifically
  hooking into Claude Code. Theo's verdict: *"npm hell is just the start
  sadly."* Mitsuhiko notes his TanStack-affected packages were *"published
  via OIDC trusted publishing btw. I hope this ends this absurd idea that
  OIDC is the silver bullet to supply chain issues,"* and re-circulates his
  10-year-old open-source-trust post plus his 2025 "fewer dependencies"
  rant. LLMJunky pushes a one-liner prompt to configure a 3-day minimum
  release age across bun/pnpm/npm/yarn as a basic blast-radius cap.
  **`/goal` lands in Claude Code 2.1.139** — Daniel San breaks it; LLMJunky
  posts *"WELL WELL WELL"* and notes the joke writes itself: *"i can't knock
  em for it. i just thought it was funny because the claude crowd always
  accused codex of 'copying claude'."* Codex's `/goal` is in the app
  (CTRL/CMD+J → "codex" → `/goal …`), and Thomas Sottiaux (OpenAI) takes
  the victory lap: *"The master becomes the mentee. At last, Claude is now
  copying Codex. But you cannot out-accelerate GPT-5.5."*
  **Claude Code ships agent view** — one list of all your sessions, research
  preview. bcherny: *"The best way to level up from 1 agent => many agents.
  No more cycling between terminal tabs."* No cross-agent coordination
  yet — *"Agents are separate, for now."* Cowork's hands-on browser autonomy
  also gets the Opus-4.7 jump: bcherny's first ever 1-shot booking — *"8
  flights and 5 hotels for me, while I was hacking on something else in
  Claude Code … never booking flights by hand again."* **Thinking Machines
  reveals interaction models** — Mira Murati ships a new model class
  *"trained from scratch to handle real-time interaction natively, instead
  of gluing it onto a turn-based one."* swyx: *"thinky has some
  comedians!! congrats to @thinkymachines on reviving the omnimodel dream
  that others could not"* and *"basically everyone's definition of
  'realtime' just got a massive fricking upgrade."* **Lee Robinson pushes
  back on the markdown-only future**: *"Code is actually the right
  abstraction … if it's hard to review thousands of lines of agent code,
  maybe the takeaway is that you want less code? … The slop compounds."*
  Plus mattpocockuk's `/handoff` + `/prototype` skills land; mitsuhiko gets
  DeepSeek V4 Flash running locally on Pi with a TUI Tetris game; OpenAI
  acquires UK FDE shop Tomoro (150 engineers); jerryjliu ships
  sandboxed-lit + aggit (Git-like CLI for agent artifacts); simonw turns
  `llm` into a shebang for "executable English."
tags:
  - Supply Chain & Security
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Models & Frontier Releases
  - Code vs Markdown
  - Developer Tooling
  - Industry & Talent
---

# AI Roundup — May 12, 2026

## Supply Chain & Security

**Socket's running tally hits 205 npm artifacts.** [Theo amplifies the Socket update](https://x.com/theo/status/2054035366471147824): *"Update: Socket has found 121 more compromised npm package artifacts across 84 package names, including 64 UiPath artifacts. Combined w/ TanStack, the current known total is 205 affected npm package artifacts across enterprise automation, AI/MCP, auth, workflow, and dev tooling."* His one-line take: *"I hope you guys understand that this is going to keep getting worse."* Reply-thread fallout: requests for npm registry policy changes, calls for a 24–48h release cooldown in CI, dependency-graph-as-attack-surface laments, and the inevitable *"why is it always JS?"*

**It's hitting AI dev tooling specifically.** LLMJunky relays International Cyber Digest's [campaign update](https://x.com/LLMJunky/status/2054232427292184995): *"'Mini' Shai-Hulud has hit: - OpenSearch - Mistral AI - Guardrails AI - UiPath - Squawk packages across npm and PyPI. The malware specifically targets AI developer tooling. It hooks into Claude Code."* His own observation: *"the shai hulud exploit is embedding itself in Claude and VSCode to re-execute itself, even after the original packages have been uninstalled. I'm never installing anything ever again."*

**Mitsuhiko: OIDC is not the silver bullet.** [Re-quoting TanStack's advisory](https://x.com/mitsuhiko/status/2053974969202176401): *"Published via OIDC trusted publishing btw. I hope this ends this absurd idea that OIDC is the silver bullet to supply chain issues."* Followed by [the standard prescription](https://x.com/mitsuhiko/status/2054091726663372827): *"Another big supply chain attack and I once again implore you to use fewer dependencies,"* with pointers to his 2025 "boring tech" post and a 10-year-old [open-source trust scaling piece](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/).

**Defensive minimum-age install.** Rhys Sullivan via [LLMJunky](https://x.com/LLMJunky/status/2054044677460914685) circulates a one-liner you can hand to a coding agent: *"Find my package manager (bun/pnpm/npm/yarn) and configure a 3-day minimum-release-age / cooldown for installs to blunt supply-chain attacks. Exempt my workspace scopes. Verify the exact config key …"* Cheap defense-in-depth while the registries figure out the rest.

## /goal Hits Both Sides

**Claude Code 2.1.139 ships `/goal`.** Daniel San: *"You set a completion condition and Claude keeps working across turns until it's met. Works in interactive, -p, and Remote Control."* LLMJunky's [reaction](https://x.com/LLMJunky/status/2053985445365616705): *"WELL WELL WELL … i can't knock em for it. i just thought it was funny because the claude crowd always accused codex of 'copying claude'."* Thomas Sottiaux (OpenAI) gets the public dunk: *"The master becomes the mentee. At last, Claude is now copying Codex. But you cannot out-accelerate GPT-5.5."* Steipete RTs both barrels.

**Codex app has it too.** Adam.GPT confirms `/goal` is in the Codex app, not just CLI. LLMJunky's setup recipe: *"1. In any thread, press CTRL/CMD+J. 2. Type 'codex' press enter. 3. Type `/goal [set your goal]`."* He had to update the post — *"this was a troll because when you type /goal, nothing pops up. But it actually is in the app. Got it working."* His verdict on the result: *"My face every time Codex one shots the /goal I gave it."* Nikhil Shahane reads the meta-game underneath: *"Goal is 100% the way for these companies to get us to burn more tokens. Albeit also do more."*

## Claude Code Agent View + Cowork Goes 1-Shot

**Agent view (research preview).** Anthropic ships an in-CLI list of all your active Claude Code sessions. [bcherny](https://x.com/bcherny/status/2053982327123132846): *"The best way to level up from 1 agent => many agents. No more cycling between terminal tabs."* Asked whether there's a coordination layer: *"Correct. Agents are separate, for now."* `space` peeks at a session, `enter` drops into it. Reply-thread asks include worktrees support, hooks on shared repos, and an option to *not* spawn worktrees by default. Tom Harada — pi adjacent — asks the obvious follow-up: *"cc @badlogicgames @mitsuhiko I suppose some of us may start recreating in pi?"*

**Cowork + Opus 4.7 1-shotted booking 8 flights + 5 hotels.** [bcherny](https://x.com/bcherny/status/2053994083497238712): *"In the past, Cowork has been decent at booking flights, but with Opus 4.7, for the first time ever, it 1-shotted it!"* Setup: flight preferences in Cowork instructions, Opus opens the browser, navigates, books everything in parallel with him working in Claude Code. *"It did it perfectly. I am blown away — it's never been this smooth before. Never booking flights by hand again."*

## Thinky's Realtime Reveal

**Thinking Machines unveils interaction models.** [Mira Murati](https://x.com/miramurati): *"Today we're sharing our work on interaction models. A new class of model trained from scratch to handle real-time interaction natively, instead of gluing it onto a turn-based one."* AI News' codename for the family: **TML-Interaction-Small 276B-A12B**. swyx's takes, in order: *"basically everyone's definition of 'realtime' just got a massive fricking upgrade,"* *"thinky has some comedians!!"*, and on a coach-in-your-ear demo where the model whispers suggestions mid-conversation: *"her. this is her."* The "reverse anger translator" demo is the early reply-thread breakout. Latent.Space's full [coverage](https://x.com/latentspacepod) covers SOTA realtime voice plus the death of standard VAD.

**Horace He on the underlying bottleneck.** swyx [quote-RTs](https://x.com/swyx/status/2053989439945498934) Horace He (Thinky): *"In modern ML accelerators, FLOPS have absolutely exploded. Often though, the bottleneck is not FLOPS but memory bandwidth. Similarly, model intelligence has exploded, causing the bottleneck to be human AI bandwidth. At Thinky, we think that it's important to solve this."* The interaction-model thesis pinned in one paragraph.

## Code vs Markdown

[Lee Robinson](https://x.com/leerob/status/2054239636344496523) pushes back on the markdown-as-code-of-the-future framing: *"Code is actually the right abstraction. Too often I see the future of software engineering diminished down to, effectively, writing and reviewing markdown files. Yes, it will be hard to review thousands of lines of agent code. But maybe the takeaway is that you want less code?"* His prescription is unfashionable but concrete: **make the codebase more verifiable** (fast/robust tests, typed languages), **deslop the architecture before yolo-generating** (types and abstractions up front), and **assume the slop compounds** so you spend the maintenance budget on the actual code, not on lossy markdown summaries. Concession to the skills crowd: *"Skills make your style of working legible for agents. They don't replace code and that's not really the point."* Money quote, from a Sne reply he immediately steals back: *"slop cannon."* Karim C in replies: *"the real problem isn't reviewing thousands of lines of agent code. it's that most agent code is garbage because people skip the boring parts."* kegashin underlines it: *"the boring details often are the product … if your abstraction hides them without preserving their constraints, you did not simplify the system, you deleted the trust layer."*

Counter-position, from Bilal: *"I think we'll see more teams, especially in startups, adopting a dark factory approach where AI writes the code, reviews it, and checks it in end-to-end … we'll need a higher abstraction. Maybe that's markdown specs. Maybe it's rigorous end-to-end testing."*

## Karpathy: Audio In, Vision Out

[Karpathy](https://x.com/karpathy/status/2053872850101285137) continues yesterday's "structure your response as HTML" thread with a stronger version: *"More generally, imo audio is the human-preferred input to AIs but vision (images/animations/video) is the preferred output from them. Around a ~third of our brains are a massively parallel processor dedicated to vision, it is the 10-lane superhighway of information."* HTML/slideshow rendering as a low-effort hack to flip your LLM's I/O modes.

## Developer Tooling

- **mattpocockuk's prototype-during-planning workflow.** Two new skills shipped: [`/handoff` and `/prototype`](https://x.com/mattpocockuk/status/2053789346084331569). The `/grill-with-docs` → `/prototype` → AFK-agent pipeline yielded a one-shot automatic-chapter-creator built as a TUI in Effect. His punchline: *"Creating prototypes during planning is the new 'make no mistakes' — except it actually works."* `/handoff` compacts a current session to a markdown file so insight survives session boundaries; danielhe4rt's testimonial: *"i'm literally refactoring a BUNCH of bad decisions using /grill-with-docs … now my codebase has a really good context mapping, with readable decisions."*
- **simonw's `llm` as shebang.** [TIL](https://til.simonwillison.net/llms/llm-shebang): you can use the `llm` CLI in a shebang line, turning a `#!/usr/bin/env llm` script into an executable English program (optionally with a YAML template).
- **simonw on GitLab's "workforce reduction."** [Long post](https://simonwillison.net/2026/May/12/) digging into version-controlled employee handbooks from GitLab and 37signals as a way to illustrate what changed. The handbook diff is the news under the news.
- **jerryjliu (LlamaIndex) ships sandboxed-lit + aggit.** sandboxed-lit is a Rust CLI agent gluing LiteParse (PDFs/images/Office) + microsandbox + filesystem mounts for safe local doc Q&A. [aggit](https://x.com/itsclelia/status/2053716807748567329) (by Clelia / @itsclelia) is a Git-like CLI for local + S3-backed *agent artifact* storage so you get granular reversible control over every intermediate agent change without polluting your real Git history.
- **steipete's weekend openclaw firehose.** Crabbox 0.12.0 (Azure Windows desktop + WSL2, Proxmox + Tensorlake providers, preflight, failure bundles, phase timing, keep failed boxes around for SSH debugging); Trimmy adds Claude Code prompt trimming; Birdclaw indexes his full Twitter archive for Codex lookups; built a browser into RepoBar for issue/PR/sha/workflow context; and the [tease](https://x.com/steipete/status/2053699206519435682): *"All I want is codex automatically entering /review mode after it's done and just looping until it stops finding booboos. (Yah I'm gonna build that)."*

## Local Big-Model Hour: ds4 on Pi

mitsuhiko continues yesterday's [DeepSeek V4 Flash + Pi](https://x.com/mitsuhiko/status/2053812574261551478) arc on his 128GB MacBook: *"With the latest fixes in ds4 I can now get it to build and iterate on a little TUI Tetris game just fine. Pretty damn cool (yes, it made some rendering errors)."* The SSD caches survive server restarts: *"This is continuing a session after the server was shut down which was already 63k tokens in!"* And the model's competence is high enough to use it as a code tutor: *"A nice thing about DeepSeek V4 Flash locally is that it's a big enough model that you can have it explain shit to you and it won't completely lie to you. Tried to walk through some choices in ds4.c and I felt pretty good about the experience."* Codex separately ported Gondolin's sandbox from Zig to Rust for him — *"unsurprisingly. But I lose convenient cross compiling."*

**Podcast tie-in:** Bentlegen and mitsuhiko dropped a new *State of Agentic Coding* episode covering the Pi/badlogicgames collaboration, the end of subsidized tokens, why coding traces are valuable, and what might come next from GitHub. Video on [Ben's post](https://x.com/bentlegen/status/2053831814821691811).

## Industry & Talent

- **OpenAI acquires Tomoro.** swyx, dryly: *"openai's new $10b forward deployed company is so locked in they can't even bother to server side render properly. (jk congrats, nice win for UK AI 🇬🇧)."* 150 Forward Deployed Engineers join from the UK shop. Same week swyx publishes the *"inside story of the legendary Cog House"* with first-ever public photos, [pegging it](https://x.com/swyx/status/2053856676969890189) as a *"$100B by EOY (imo)"* company.
- **Claude Code agent view ships as research preview** (see earlier section) — Anthropic's answer to terminal-tab-fatigue is in 2.1.139.
- **Codex app marches toward "super app" status.** Sottiaux: *"Now that the Codex app is close to being the super app. What should the super duper app do?"* LLMJunky's wish: standalone mobile, not bundled into ChatGPT.

## Misc

- **steipete's 4-day Codex run lands.** *"4d 20h and it actually finished. 🫠"* — the long-tail-of-autonomous-work data point of the day.
- **swyx + Latent.Space: Doing Vibe Physics.** Episode on how GPT-5.x derived new results in theoretical physics and quantum gravity (scattering amplitudes), with guest Alexandru Lupsasca. [Pod page](https://latent.space/p/ainews-thinking).
- **mitsuhiko, on Sentry's 18th birthday:** *"Good news! Sentry can drink hard liqueur in Austria now."*
