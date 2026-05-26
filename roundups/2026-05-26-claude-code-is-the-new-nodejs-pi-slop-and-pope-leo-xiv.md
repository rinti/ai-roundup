---
title: "Claude Code Is the New Node.js, Pi's Slop‑Issue Wave & Pope Leo XIV on AI"
date: "2026-05-26"
summary: "Theo lobs a runtime-war analogy that lights up the timeline — **Claude Code is the new Node.js** (Codex = io.js, Pi = Bun, OpenCode = Deno) — while quietly flexing 322 apps on Lakebed. Steipete keeps trimming OpenClaw (Sharp + Jimp → 2MB WASM Photon, 70× smaller) and ships a skill that hunts down skills with bloated descriptions. Armin Ronacher publishes the year's most-read post on being Pi's junior maintainer, where agents are mass-producing confident-but-wrong issue diagnoses. Matt Pocock makes GitHub labels his agent control plane (`agent:implement`, `agent:review`) and explains the eight ways people misuse his grill‑* skills. Simon Willison spends a day reading **Pope Leo XIV's AI encyclical** and polls the room on whether agents should write tests. Leerob's *please keep thinking about code* essay clears half a million views. Thariq says legacy codebases are now distillation feedstock — *we don't need COBOL anymore*."
tags:
  - Agentic Coding & Agent Harnesses
  - Skills, Extensions & Context Hygiene
  - Open Source Under Agent Pressure
  - Runtimes, Clouds & Tooling
  - AI Culture, Ethics & Big-Picture Takes
  - RAG & Document Understanding
  - Hardware & Hacking
---

# AI Roundup — May 26, 2026

## Agentic Coding & Agent Harnesses

**"Claude Code is the new Node.js"** — Theo dropped the five-word post at 5:10 AM UTC and the timeline turned into a runtime-war meme generator. He followed up with the full slate:

> Codex is io.js
> Pi is Bun
> OpenCode is Deno
> I will not elaborate further

The replies range from earnest ("infrastructure nobody thinks about until it's everywhere — that's exactly what Node did") to anxious ("Ready for a `Claude.modules` folder that outgrows `node_modules`?" / "the node_modules of it all is gonna be a folder of 400 CLAUDE.md files nobody remembers writing"). The throughline: harnesses, not the models, are becoming the platform substrate developers reach for first. [Main post](https://x.com/theo/status/2059140152128327698) · [io.js/Bun/Deno follow-up](https://x.com/theo/status/2059157658893156700).

**Matt Pocock turned GitHub labels into an agent control plane.** Six months ago he tried it and bounced off; now he's back and the verdict is "pure skill issue on my part, it actually rocks." Add `agent:implement`, `agent:update-branch`, `agent:review`, `agent:to-issues` to a PR or issue, GitHub Actions takes it from there. He's running the agents inside Actions themselves (AFK, no interaction), with the workflow visible in the run log. Best reply distillation, from `@LeoTava8`: *"labels turn task routing into a deterministic signal instead of a prompt-interpreted guess. Most agent workflows break because the model is deciding both what to do AND how to do it. Splitting those is the real unlock."* [Thread](https://x.com/mattpocockuk/status/2059008544477757887) · [course-platform example workflow](https://github.com/mattpocock/course-platform).

**`/handoff` is now Matt's cross-repo escape hatch.** New use case: when you find a bug in an upstream dependency while working on your own project, `/handoff` writes the context out and you spin up a fresh agent in the OSS repo. "This really should be a monorepo but isn't" — solved with a doc instead of a refactor. [Tweet](https://x.com/mattpocockuk/status/2058638344716722681).

**Simon Willison: do agents write tests?** A 64-reply poll-by-tweet on whether you let coding agents author their own test suites. Simon is firmly team red/green TDD ([his pattern doc](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)) and shrugs at the "agents write bloated tests" complaint: *"too many tests is better than too few tests now that maintaining and deleting tests is so much cheaper."* The skeptics in the replies converged on a sharper point — agents write tests that confirm their own logic instead of challenging it, so confidence goes up without signal going up. [Poll thread](https://x.com/simonw/status/2058992461381562382).

**Thariq's Bun-rewrite takeaway: legacy code is now distillation feedstock.** *"Every game should be crossplatform, all legacy software should work on the web, we don't need COBOL anymore."* The pushback was immediate and pointed — most mainframe COBOL doesn't *have* source code anymore (companies deleted it once the binaries worked), so the model has to reverse-engineer compiled artifacts. Thariq's response: *"I think compiled code and non-compiled code are ~the same to the models at a certain point."* The thread is a useful read for anyone thinking about legacy-modernization economics in 2026. [Thread](https://x.com/trq212/status/2058576195000660319).

## Skills, Extensions & Context Hygiene

Steipete had a three-tweet morning that doubled as a manifesto on agent-tooling hygiene.

**1. The skill bloat audit.** "Folks: when you write skills, ask your agent to be token efficient, relax grammer. I see too many skills that write books in the skill description, and all that crap is loaded into every context." He shipped a skill that finds the worst offenders in your skill library. His own punch-line style: *"efficent description good. Pete happy. Agent smart. … filler word no need. agent smart. still load no filler understand well."* (3.9K likes, 214K views — biggest single thread of the day.) [Tweet + repo](https://x.com/steipete/status/2058917897590673525) · [skills audit script](https://github.com/steipete/agent-scripts/blob/main/skills).

**2. CLIs that install skills without asking.** *"New pet peeve: cli's that install new skills onto my system without asking."* 802 likes of agreement. Tools quietly writing into `~/.claude` or its analogues is the 2026 equivalent of npm postinstall scripts — and the room thinks it should never have been the default. [Tweet](https://x.com/steipete/status/2058883349632934149).

**3. OpenClaw's dependency purge.** Sharp + Jimp got replaced with [Photon](https://github.com/silvia-odwyer/photon), a WebAssembly wrapper around compiled Rust. **2 MB vs 140 MB — roughly 70× smaller.** Bonus: Photon actually runs on Cloudflare Workers, where Sharp historically didn't. The OpenClaw bundle is now the public lab notebook for "what does a healthy agent-harness dependency tree look like?" [Tweet](https://x.com/steipete/status/2058922222790525272).

**Matt Pocock's grill‑* skills are getting misused — here are the eight ways.** Things people do wrong with `/grill-me` and `/grill-with-docs`: being too passive, not grilling in parallel, not prototyping, going into the dumb zone, grilling too hard, grilling too large a topic, using too dumb a model, clearing the context too soon. A reader argued "8 failure modes for one technique suggests the technique isn't shaped enough" — Matt's reply: *"Sharp knives."* Companion blog post: [aihero.dev/things-people-get-wrong-with-grill-me-and-grill-with-docs](https://www.aihero.dev/things-people-get-wrong-with-grill-me-and-grill-with-docs). [Tweet](https://x.com/mattpocockuk/status/2058900756640453072).

Adjacent gem from the same thread: *"One weird thing about 'plan mode' is that it convinces everyone they need a plan. A plan is only useful if you need a summary of the decisions made OR if you're handing off to another session. If not, just grill + implement."* [Reply](https://x.com/mattpocockuk/status/2058936646217724263).

**The "go to bed" extension may have been RL'd into the base model.** Armin Ronacher's snarky `go-to-bed` skill — which nudges users to stop coding at unreasonable hours — has reportedly been showing up as native model behavior across multiple harnesses, with Anthropic itself unsure why. Replies say Gemini does it too now. Whether it's actually his extension that got distilled or just convergent personality drift, the meme is a *chef's kiss* on yesterday's "Claude says go to bed" story. [Tweet + extension](https://x.com/mitsuhiko/status/2058697497195712557) · [go-to-bed source](https://github.com/mitsuhiko/agent-stuff/blob/main/extensions/go-to-bed.ts).

## Open Source Under Agent Pressure

**Armin Ronacher published the most-discussed maintainer post of the month** — *Pi as junior maintainer to badlogicgames* (lucumr.pocoo.org). 828 likes, 114K views, 26 substantive reply threads. The thesis: agents are flipping the issue-to-PR ratio in OSS. Where Armin used to get many issues and few PRs, now he gets "issue + pull request in one go" — and the issues themselves are getting worse, because submitters use models to write confidently-worded but wrongly-diagnosed reports.

The killer quote, picked up across the replies:

> "It is also frustrating because when I give that issue to Pi, Pi sees the wrong diagnosis too. It does not treat the issue body as a rumor. It treats it as evidence."

His conspiracy theory on why it's getting worse: *"RL on newer models rewards the slop that earlier models produced in Ralph loops and similar."* On whether a skill / template could fix submitter behavior: *"The solution to human problems is very rarely technology."* [Tweet](https://x.com/mitsuhiko/status/2058590229196329341) · [post](https://lucumr.pocoo.org/2026/5/24/pi-oss/).

**Lee Robinson's *please keep thinking about code* hits 4K likes / 559K views.** The tl;dr: AI-generated code is becoming a liability for teams that stopped engaging with what gets shipped. An engineer is on-call for production code; if you don't understand the system you can't debug it. Recommendation: trim deps, vendor and modify code you depend on, prefer simpler systems with fewer abstractions, and *"spend waaaay more time thinking about system design and code maintenance."* Asked what fundamentals to learn: *"Try to learn the lowest layer of the stack possible. So instead of the API framework, learn about servers, then caching, then networking, etc."* [Tweet](https://x.com/leerob/status/2058577150500909108).

The two threads pair nicely: Armin from the upstream side (your slop arrives at someone's door), Lee from the downstream side (someone has to be responsible when it crashes).

## Runtimes, Clouds & Tooling

**Theo's "cloud" (Lakebed) crossed 322 apps in early access.** *"This doesn't count re-deploys of the same app. This is total apps on platform."* No details yet on what Lakebed actually *is* — a Vercel-class platform? a k8s wrapper? — but he's been running a closed-test push for weeks and the number is now a real concrete signal that something is being released soon. Watch for a public launch. [Tweet](https://x.com/theo/status/2058761819213422992).

**Datasette 1.0a30 ships a jump-to menu.** Press `/` and start typing to jump between databases, tables and canned queries. There's a plugin hook so e.g. `datasette-agent` can extend it with a "new agent conversation" form — see the live demo at [agent.datasette.io](https://agent.datasette.io/). [Announcement](https://x.com/simonw/status/2058704797612785849) · [blog post](https://datasette.io/blog/2026/jump-menu/).

## RAG & Document Understanding

**Jerry Liu published a 116-page slide deck** from a workshop hexapode gave at the @aiDotEngineer Singapore conference: a comprehensive 2023→2026 tour through RAG, document context, and agentic retrieval. Topics include: the 12 pain points of naive RAG, why reranking and query-rewriting matter, how more logic has migrated *into* the agentic loop (and the retrieval layer can paradoxically get simpler), why document parsing is still hard in 2026, and the current "deep research" agent form-factor. Worth bookmarking as a reference timeline. [Tweet](https://x.com/jerryjliu0/status/2058953208782074127) · [slides (Google Drive)](https://drive.google.com/file/d/1IQ7).

**LlamaParse now parses HEIC natively.** Less glamorous but more practical — Apple's default photo format finally works without a JPEG conversion step. Whiteboards, receipts, scanned docs from iPhones, etc. [Tweet](https://x.com/llama_index/status/2058902899619467305).

## AI Culture, Ethics & Big-Picture Takes

**Pope Leo XIV's encyclical on AI dropped, and Simon Willison spent the day reading it.** *"When I woke up this morning I didn't think I'd be spending a bunch of time today getting familiar with Catholic theology, but here we are."* His notes are up at [simonwillison.net/2026/May/25/encyclical-on-ai/](https://simonwillison.net/2026/May/25/encyclical-on-ai/). One reply that landed (`@andrefrcunha7`): *"'cultivated not built' lands harder than most interpretability papers from the last year."* Another: *"honestly the vatican has been doing alignment research longer than anyone in the industry, just under a different name."* The bizarre bonus: Simon points back to an Oxide & Friends 2026 predictions episode where they predicted *something like this would happen* back in January. [Tweet](https://x.com/simonw/status/2059065719086792804) · [Oxide podcast prediction timestamp](https://oxide-and-friends.transistor.fm/episodes/predictions-2026/transcript#t=37m13s).

## Hardware & Hacking

**Flipper One — the first hacker tool built for the AI era?** `@LLMJunky` walks through the spec: a real Linux machine roughly rpi5-class, pocket-sized, with Wi-Fi, Ethernet, USB, M.2 expansion, SDR, optional cellular/satellite, desktop output, and an **NPU for local models**. The pitch: give Codex or Claude inline access to a portable Linux box that can sniff packets, control radios, become a router/bridge/hotspot/thin-client, or just be the emergency desktop when something goes sideways on a network. The implications cut both ways — the same affordances that make it interesting for defenders make it interesting for everyone else. [Tweet](https://x.com/LLMJunky/status/2058954378875146389) · [blog post](https://blog.flipper.net/flipper-one-we-need-your-help/).
