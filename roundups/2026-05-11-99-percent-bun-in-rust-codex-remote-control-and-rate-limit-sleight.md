---
title: "99% Bun-in-Rust, Codex Remote Control & the Rate-Limit Sleight of Hand"
date: 2026-05-11
summary: >-
  **Bun-in-Rust passes 99.8% of the existing test suite on Linux x64 glibc**
  — Jarred Sumner posts the receipt for last week's robobun stunt: 960,000 LOC,
  6 days end-to-end, *"basically the same codebase except now we can have the
  compiler enforce the lifetimes of types and we get destructors when we want
  them. and the ugly parts look uglier (unsafe) which encourages refactoring."*
  Blog post incoming on benchmarks, memory usage, maintainability and the
  literal process (not *"claude, rewrite bun in rust. make no mistakes"*).
  swyx and Dan Shipper both publicly beg him for a podcast spot; Arto Bendiken
  calls it *"the fastest large-scale rewrite in the history of software
  engineering, likely"* and starts daydreaming about offramps for legacy C/C++;
  Loki's underline: *"Being employed by Anthropic is probably helping the 960k
  LOC rewrite, I'd have had to declare bankruptcy several times attempting
  that on my own."* mitsuhiko's reply to a "rewrite Node in Rust?" subtweet:
  *"Someone please rewrite rust in rust with the /goal to make compile times
  faster"* — carllerche admits in the replies that he is, in fact, trying it,
  *"and actually not as a joke."* **Codex mobile app countdown** — Codex CLI
  0.130.0 quietly shipped a `/remote-control` scaffold earlier in the week,
  and now Matthew Lam has YOLO'd a working version with `/goal` overnight
  while sleeping (tiny laptop server + fresh token + QR + phone webapp + full
  sync); LLMJunky calls his Thursday-drop prediction: *"It's coming."*
  **Anthropic's rate-limit sleight of hand** — LLMJunky calls Anthropic's
  *"sneaky marketing"*: the 5-hour windows got bigger but the weekly quota
  didn't budge, so you can now burn through your week in half the time. Peak
  hours removal is the actual win. **steipete's Saturday firehose** — Crabbox
  0.11.0 (AWS Windows WSL2 hydration *"since Parallels doesn't support nested
  virtualization"*, Blacksmith sync-stall guard, repo-local job workflows),
  CodexBar 0.25 (Manus / MiMo / Qwen / Doubao / Venice providers, stacked
  account switchers, quota-warning notifications, models.dev cost history),
  gogcli 0.16.0, BlackBar (menubar for Blacksmith), a built-in browser in
  RepoBar, and a roadmap leak: *"All I want is codex automatically entering
  /review mode after it's done and just looping until it stops finding
  booboos. (Yah I'm gonna build that)."* **Matt Pocock's grill→prototype→
  rewind→summarize flow** uncovers a Claude Code feature people are sleeping
  on: rewinding to a pre-prototype point and choosing *summarize* compacts
  the rewound branch so the prototyping insight survives without polluting
  the main grilling thread. **mitsuhiko's agent-pragmatist arc** continues:
  *"I no longer care about code formatting with agents and agents made me no
  longer dislike the UX around nix quite as much. Maybe agents are going to
  make me enjoy buck2?"* — paired with a rant against shipping *"sloppy UI
  for infra project X"* before the infra works. **Shopify's River agent**
  lives in Slack and can *only* be used in public so other employees can
  learn from each other (Midjourney's Discord-only launch, redux); the bot
  opened 1,870 PRs in the main monorepo last week. **swyx scoops** Singapore's
  Minister for Foreign Affairs (NanoClaw fan, has published a Raspberry
  Pi + Claude + local embeddings + knowledge-graph personal stack on GitHub)
  keynoting AIE Singapore next week. Plus: Theo unloads on Dan Shipper's
  YouTube A/B testing strategy (*"Anything bigger than 2x is a fireable
  offense on my team"*), Uzi ports Clicky-style background agents to Linux
  in a weekend, and Theo finds endless joy in popping AI-generated comments.
tags:
  - Bun-in-Rust Aftermath
  - Codex & OpenAI
  - Claude Code & Anthropic Updates
  - Agentic Coding & Skill Flows
  - Tooling Firehose
  - Public-by-Default & Government AI
  - Off-Topic
---

# AI Roundup — May 11, 2026

A weekend dispatch dominated by **the Bun-in-Rust receipt** (99.8% test-suite pass on Linux x64 glibc, blog post incoming) and **Codex slowly rolling toward a mobile app** (Remote Control scaffolding shipped in the CLI, Matthew Lam YOLO'd a working version with `/goal` while asleep). On the side: an Anthropic rate-limit sleight-of-hand, Peter Steinberger's usual Saturday tool-deluge, mattpocockuk surfacing an underrated Claude Code `/rewind` mode, mitsuhiko warming up to nix and possibly buck2, Shopify's public-only Slack agent, and swyx scoring a Cabinet Minister as AIE Singapore's keynote.

## Bun-in-Rust Aftermath

**Jarred Sumner posts the numbers** on last week's *"rewrite Bun in Rust over a weekend"* claim ([thread](https://x.com/jarredsumner/status/2053063524826620129), 555K views on the lead tweet alone):

- **99.8% of Bun's pre-existing test suite passes on Linux x64 glibc** in the Rust rewrite.
- **960,000 LOC** end-to-end. Six calendar days.
- *"It's basically the same codebase except now we can have the compiler enforce the lifetimes of types and we get destructors when we want them. and the ugly parts look uglier (unsafe) which encourages refactoring."*
- Why: *"I am so tired of worrying about & spending lots of time fixing memory leaks and crashes and stability issues. it would be so nice if the language provided more powerful tools for preventing these things."*
- **JavaScriptCore is *not* part of the rewrite** — it stays in C++ (several million more LOC, and they'd have to maintain a fork).
- Blog post coming on benchmarks, memory usage, maintainability going forward, and *"the literal process of doing this (it wasn't just 'claude, rewrite bun in rust. make no mistakes')."*
- Worst part: *"claude added too many unnecessary comments. But that's fixable."*

The replies are unusually substantive for a viral tech thread. **swyx and Dan Shipper publicly beg for podcast spots.** Mario Zechner (badlogicgames) asks the obvious JavaScriptCore question — Jarred confirms it stays as-is. Peter Pistorius asks whether deep Zig intuition translates to Rust; Jarred: *"It's largely the same codebase. Some things are different but the meat, the design decisions, the architecture, the data layout, the output it writes to the terminal — all the same."*

The single best reply, from **Arto Bendiken**: *"The fastest large-scale rewrite in the history of software engineering, likely. No doubt we'll see a lot more of these before long. In particular, there may finally exist economically and technically viable offramps for large C/C++ code bases, something that can't come soon enough."* **Loki ([@chillgates_](https://x.com/chillgates_))** with the cost-side underline: *"Being employed by Anthropic is probably helping the 960k loc rewrite, I'd have had to declare bankruptcy several times if attempting that on my own."* And **Bessi ([@LLMpsycho](https://x.com/LLMpsycho))**: *"The tests passing is the headline, not the LOC flex."*

**Thariq's signal-boost** ([@trq212](https://x.com/trq212/status/2053559397654348159)): *"Jarred tried rewriting Bun in Rust and it passes 99.8% of the existing test suite — we're not being ambitious enough."*

### The Rewrite-Rust-In-Rust Joke That Wasn't

mitsuhiko quote-tweets Matteo Collina's *"should @nodejs attempt a rewrite to Rust like @bunjavascript is doing by burning unlimited tokens?"* with the dunk of the week: [*"Someone please rewrite rust in rust with the /goal to make compile times faster."*](https://x.com/mitsuhiko/status/2053404015388451285) (311 RTs, 26K views.)

Among the replies, multiple variants of *"rust is already written in rust, fortunately/unfortunately"* (memgrafter, devfredy, csgbwk), and then **carllerche** — the Tokio author — drops in: *"I am trying this, but actually and not as a joke. Unfortunately, reviewing code takes longest, and I actually don't know what I am doing."* **fiddyresearch** points to the related real low-hanging fruit, citing banteg's recent thread on a Solidity compiler download being slowed 42× by a progress-bar renderer using single-byte chunk increments — fixed in one Codex session. **lu_zero_** flags [codeberg.org/bal-e/krabby](https://codeberg.org/bal-e/krabby) — *"an experiment building a high-performance Rust compiler"* — and his own bottleneck (linking, where his hope rests on [wild](https://github.com/davidlattimore/wild)).

## Codex & OpenAI

### Codex Remote Control: from CLI scaffolding to a phone-controlled session in 24 hours

Codex CLI **0.130.0 quietly added `/remote-control` scaffolding** earlier in the week — a foundation for the rumoured Codex mobile app. **LLMJunky** ([thread](https://x.com/LLMJunky/status/2053510525250839017)) is calling this Thursday for the drop: *"Always On. Always Connected. I feel pretty good about it coming out this week."* The Android crowd is anxious (Ixel: *"I'm just really hoping that — it won't be iOS only initially — it won't be another region locked feature like Chrome, Computer Use, Chronicle and Memories"*).

**Matthew Lam beat OpenAI to it.** Overnight, while sleeping, he had Codex build `/remote-control` itself ([thread](https://x.com/mattlam_/status/2053508782584475864), 85K views, video demo). The shape:

- `/remote-control` starts a tiny server on the laptop.
- It generates a fresh token and a QR code.
- Phone connects to a webapp.
- Full sync between phone and laptop Codex.
- Touch grass.

Plus *"a demo of how powerful /goal is, especially prototyping — most of this was done overnight by Codex while I was sleeping lol."* nick ([@thecsguy](https://x.com/thecsguy)) replies that he already has the Android-side working too. Buzzard Capital built a Tailscale variant the same afternoon. The hard part everyone keeps flagging: **full session-state sync**, not just a phone UI. As Mihai ([@realmihai_matei](https://x.com/realmihai_matei)) puts it: *"Remote control is only useful if it preserves the full local state, not just a phone UI. The win is approving and redirecting work without reopening the laptop."*

### Codex's `/goal` keeps eating workflows

Two more weekend examples of the same pattern:

- **mitsuhiko**: *"Let's see how this /goal thing in codex' harness is doing"* ([tweet](https://x.com/mitsuhiko/status/2053253612915077347)) — followed a few hours later by *"I no longer care about code formatting with agents and agents made me no longer dislike the UX around nix quite as much. Maybe agents are going to make me enjoy buck2?"* (see also: [mitsuhiko's agent pragmatism](#mitsuhikos-agent-pragmatism) below).
- **steipete** signal-boosts `_simonsmith`'s observation that **Codex's summary panel now shows subagents and you can click in to see what each is doing**. (Sub-agent observability lands quietly. [Quote tweet](https://x.com/steipete/status/2053265361114399157).)

### The Codex review loop that everyone is rebuilding

**steipete**: [*"All I want is codex automatically entering /review mode after it's done and just looping until it stops finding booboos. (Yah I'm gonna build that)."*](https://x.com/steipete/status/2053699206519435682) (1,063 likes, 38K views.)

The replies are a small market scan of this exact loop:

- **Cursor's bug bot** does it (Mike Thrussell). steipete: *"Oh @clawsweeper does the same, I rebuilt that. I just want it local too."*
- **Mansehej Singh** ships the full skill loop himself: review → fix → re-review → push → poll Codex review on PR → fix → `@codex rereview` → repeat.
- **Piotr Rogowski** drops [Szpadel/codex-mcp-code-review](https://github.com/Szpadel/codex-mcp-code-review).
- **Audun Utengen** runs CodeRabbit + local Codex review in parallel and lets Codex pull from both sides.
- **indrasvat** shares [`gh-ghent`](https://github.com/indrasvat/gh-ghent), a CLI extension specifically for agents monitoring PRs.

The pattern is settling — review-loop-until-clean is the missing harness primitive everyone is reinventing.

## Claude Code & Anthropic Updates

### Anthropic's rate-limit sleight of hand

**LLMJunky** lands the spicy take of the weekend ([tweet](https://x.com/LLMJunky/status/2053601094475862374)):

> *"Sneaky marketing. Anthropic's Rate limits aren't actually increased. You're just getting larger 5 hour chunks to burn through the same quota. The peak hours removal is a win though."*

0xSero adds the operational warning: *"The rate limit increases are only for the 5 hour cycle, not for your weekly cycle. Just keep that in mind, you can burn through your weekly limits 2x faster."* Dimitris Mitsos with the universal experience: *"I didn't read the small letters, my brain decoded their message to simply 'double usage'."* — LLMJunky: *"Yup same lol."* R3N0 in the replies: *"Claude seems to be all over the place I'm actually getting better results from kimi 2.6 honestly surprised."*

The peak-hours removal is real and useful; the framing is the problem.

### bcherny goes off-grid (and umeshu-grid)

**Boris Cherny** ([@bcherny](https://x.com/bcherny/status/2053556256913383898)) — Claude Code lead — posts the most uncharacteristic Anthropic tweet of the week: a photo of *"Clawd + last year's umeshu (after letting it sit for 12 months, it turned out delicious!)"* No Claude Code release notes today. The plum wine is, apparently, perfectly aged.

## Agentic Coding & Skill Flows

### Matt Pocock's grill → prototype → rewind → *summarize* flow

[mattpocockuk's flow of the day](https://x.com/mattpocockuk/status/2053459748532392343) (2,010 likes, 80K views) surfaces a Claude Code feature people keep missing:

1. `/grill-with-docs`, talking about a new bit of UI.
2. The grill asks a question that can only be answered by prototyping.
3. `/prototype`.
4. Iterate freely, burning tokens until the prototype answers the question.
5. `/rewind` to the question — and **select 'summarize'**. Claude Code compacts the rewound branch ("/compact on the messages you've rewound").
6. Continue the grilling session, retaining only the prototype's *conclusion*, not the noise.

The unlock: **rewind doesn't have to discard.** `summarize` keeps the lesson and drops the chatter. Pocock also points to `/handoff` for full session output, and confirms his skill library lives at [aihero.dev/skills](https://aihero.dev/skills). Jacob Shi: *"the /rewind + summarize combo is so slept on. i always forget to do it and then spend 10 min re-explaining context from scratch lol."*

### mitsuhiko's agent pragmatism

Three small posts that together describe a worldview shift:

- *"I no longer care about code formatting with agents and agents made me no longer dislike the UX around nix quite as much. Maybe agents are going to make me enjoy buck2?"* ([tweet](https://x.com/mitsuhiko/status/2053254107914223863)). lifcc in the replies: *"used to fight prettier configs every project, now I just let the agent handle it and never look. Nix UX softening with agents is the bigger surprise tbh."* George Kontridze: *"Why not Bazel or Pants? :)"*
- *"'I built a sloppy UI for infra project X' is not at all what I meant when I said people should put their energy into infra project X. Maybe I'm just a grumpy old man but can we make shit work before we try to put some UI slop on it?"* ([tweet](https://x.com/mitsuhiko/status/2053477879774667151)). Ben Vinegar's correction: *"I think we have to be honest with ourselves and recognize that generating UI layers is actually the limit of many peoples' capabilities, armed with AI or not."*
- *"Unsurprisingly the ds4 repo has slop security reports and slop PRs :-/"* ([tweet](https://x.com/mitsuhiko/status/2053193733537996942)) — the antirez ds4 victory lap from last week meets the inevitable backlash.

The thread of the three: agents make some friction disappear (formatting, nix, possibly buck2), but they amplify the friction of *bad work being easy to ship*. He's reconciling both at once.

### Skill micro-tools

- **kevinkern** (RT'd by LLMJunky) ships *"a tool to select exactly that one specific part"* from the 1000s of skills floating around — composable skill picking instead of bulk install. ([tweet](https://x.com/kevinkern/status/2053244747582410855))
- **jxnlco**: *"steal my claude commands: github.com/jxnl/dots/tree/master/.claude/commands"* — works in Cursor too.

## Tooling Firehose (steipete & friends)

A weekend tool drop. Each of these is its own tweet; the cumulative volume is the story.

- **Crabbox 0.11.0** ([repo](https://github.com/openclaw/crabbox), [tweet](https://x.com/steipete/status/2053691503759798573)) — Google Cloud provider, repo-local job workflows (warmup → Actions hydrate → run → cleanup), AWS Windows WSL2 hydration (*"since Parallels doesn't support nested virtualization"*), Blacksmith sync-stall guard, Daytona + Namespace Devbox lanes. The killer use case: *"e2e testing across all platforms, FAST."*
- **CodexBar 0.25** ([repo](https://github.com/steipete/CodexBar), [tweet](https://x.com/steipete/status/2053617492325523737)) — new providers Manus, MiMo, Qwen, Doubao, Venice + others; quota-warning notifications; **stacked Codex account switchers** (kai: *"one of those tiny UI things that probably saves way more friction than it sounds like"*); faster cost history via [models.dev](https://models.dev). Windows port [Finesssee/Win-CodexBar v0.25.0](https://github.com/Finesssee/Win-CodexBar) lands the same day. steipete's reply when asked about official Windows support: *"never."*
- **gogcli 0.16.0** ([tweet](https://x.com/steipete/status/2053505486184411342)) — Google Workspace admin grew up: user create/delete, aliases, temp passwords, org units, Meet/Sites/YouTube/GA4/Search Console, Drive changes/activity. *"A lot more Google API from one boring binary."*
- **BlackBar** ([black.bar](https://black.bar), [tweet](https://x.com/steipete/status/2053444780089119191)) — a menubar for Blacksmith.
- **RepoBar with a built-in browser** ([repo.bar](https://repo.bar), [tweet](https://x.com/steipete/status/2053717468623872230)) — when you select issues/PRs/shas/workflows it opens them in a context-scoped browser. *"Still a bit vibey but gets the job done. You gotta build yourself the tools to work more efficient."*
- **The teaser**: Codex review-until-clean loop, see [Codex section above](#the-codex-review-loop-that-everyone-is-rebuilding).

The bonus tweet: a fan QT'd Marc Gregory's *"Not sure i'd sleep knowing i have unlimited codex inference"*, to which steipete replies with a smiling-face-with-sweat emoji and j1ngb0 chimes in: *"'go into debt if you have to'."*

**Adjacent in the same neighbourhood**: davemorin ships [supacrawl 0.1](https://github.com/davemorin/supacrawl) — Supabase/Postgres → local SQLite with full text search, RLS/triggers/storage snapshots, age-encrypted backup shards. Reasoning: *"My owl needed a password to read my own data. Now he doesn't."* (RT'd by steipete.)

## Public-by-Default & Government AI

### Shopify's River agent: Slack-only, public-only, ~1,870 PRs/week

Simon Willison's [signal boost](https://x.com/simonw/status/2053529689122328947) of [tobi lutke's writeup](https://x.com/tobi/status/2053121182044451016) on **River** — Shopify's internal agent system that lives in Slack and can *only* be used in public channels so other employees can learn from each other:

> *"Reminds me of how Midjourney's Discord-only launch helped people figure out the weird & complex craft of image prompting by watching each other."*

Detail from the source: *"It opened 1,870 pull requests in the last week alone in our main monorepo."* — which EJ Campbell points out is roughly half a PR per engineer, so River appears to be supplementary, not exclusive. The replies converge on the same idea from different industries: **the public constraint is the feature** (Marcus: *"the friction is the feature"*; Bytecrafter: *"visibility is the docs"*). Jeremy Herrman drops a tasty historical footnote: *"claude was also first made available externally via a shared slack channel back in 2022! Anthropic archived `#anthropic-claude-demo` in august 2023."*

### Singapore's Foreign Minister keynotes AIE Singapore

**swyx's reveal of the week** ([thread](https://x.com/swyx/status/2053370687931498603), 44K views): **Singapore's Minister for Foreign Affairs, Dr Vivian Balakrishnan**, will keynote AI Engineer Singapore next week, alongside [NanoClaw](https://x.com/NanoClaw_AI) creator Gavriel Cohen. Per agrimsingh's pinned framing:

- A few weeks ago, Minister Balakrishnan **published a technical writeup of his personal AI stack on GitHub**: Raspberry Pi, Claude, local embeddings, knowledge graphs, full architecture breakdown.
- He runs his own *"second brain"* workflow.
- The keynote will pair *"reflections on AI experimenting with open-source tools"* with broader thoughts on AI's effect on global dynamics.

The reply guys are uniformly delighted. **tech_summaries**: *"balakrishnan codes in swift and builds his own apps. a sitting foreign minister who can actually read a codebase keynoting an AI conf hits different."* swyx's victory-lap framing: *"governments waking up to AI and joining @aiDotEngineer: UK: Chief AI Officer. Singapore: Cabinet Minister. who's next??"*

### Uzi ports Clicky-style background agents to Linux

A weekend hack from **Uzi** ([@uzairakrum](https://x.com/uzairakrum)) signal-boosted by LLMJunky ([tweet](https://x.com/LLMJunky/status/2053556171550740737)): a Linux-native port of Clicky-style background agents — *"sits on your machine, can read your emails, make websites and the classic it can also declutter your homescreen."* Built in a weekend because [heyclicky](https://heyclicky.com) was macOS-only. LLMJunky's framing: *"This is a super useful tool, and one of the primary reasons I switched to macOS for most of my daily work. Really excited to see this ecosystem developed further."*

## Off-Topic

### Theo vs Dan Shipper: A/B testing as a fool's errand

Theo (t3.gg) unloads on Every's Dan Shipper over a tweet bragging about *"INSANE A/B test uplifts"* on Every's YouTube channel ([thread starts here](https://x.com/theo/status/2053706610686791985), 47K views on the cold open):

- *"Buddy you're getting under 4k views. Those numbers aren't statistically significant."*
- *"You're optimizing to feel like you're growing. You're not. Just make good content. The rest will come naturally."*
- *"Hey @danshipper — this is some of the worst packaging I've ever seen on YouTube. You can tell from viewership gap. Lowest is 580 views. Highest is 23k. That's a 40x gap. Anything bigger than 2x is a fireable offense on my team."*
- The offer: *"I'll come on the team for 2 days and unfuck all of this for you. All I ask in return is that you sponsor 5 episodes of my podcast at market rate. That will be cheaper than whoever you are paying, and 100x more likely to actually benefit you."*

When asked when YouTube A/B testing becomes statistically significant, Theo: *"~2 orders of magnitude away."* Solutionb's clean counterpunch: *"You literally fell for it, he got his engagement 😂😭."*

### Theo, again: the agent-comment cleanup ritual

[Different Theo post](https://x.com/theo/status/2053548693287211300), 101K views — a viral video metaphor for *"me removing all the unnecessary comments and test code my agent wrote."* The replies are the actual content:

- **Jack Qian**'s prevention recipe: `<important if='editing code'>no comments unless asked, no scaffolded tests</important>` in CLAUDE.md plus a `PostToolUse` hook to strip stragglers.
- **David Liu**: *"claude wrote me a 40 line jsdoc block for a 3 line helper function last week. just sat there reading it like a novel 💀."*
- **Bytecrafter**'s real-world fix: *"a precommit hook that strips any new comment without a linked ticket id and flags tests that don't actually assert against state. agent PRs cleared review in roughly half the time after that."*
- **casd_why**'s prediction: *"they will soon have a title for this — senior de-slopification engineer."*

### leerob's engineering-resume tips

[A short, useful thread](https://x.com/leerob/status/2053287286226166254) of resume advice from someone who reads hundreds of them:

1. One page. If you need more space, link a website.
2. The biggest stand-out signal is a personal website with intentionality.
3. If you link your X, clean it up first.
4. Link your GitHub. Skip the MySpace-badge README. *"I'm trying to look at code and your ability to build interesting ideas."*

### swyx's *"build vs buy SaaS"* shitlist

A casual but pointed thread: SaaS Tobi-Lutke energy meets independent-hacker energy. swyx's list of *"hated but use"*: Dropbox, Gusto, Zoom, Loom, Canva, Accel, most of GSuite, Substack, Descript, YouTube. The pitch: *"business owners should crowdsource a list of Most Hated Software and then indiehackers should pick thru and make new clones of them are just 'simple' — rewind 10 years of enshittification on them."* ([tweet](https://x.com/swyx/status/2053572059767427302))

### mitsuhiko & antirez's ds4: the slop arrives

A throwaway but thematic line from mitsuhiko: *"Unsurprisingly the ds4 repo has slop security reports and slop PRs :-/."* The ds4 ports were one of last week's feel-good stories (focus and polish on a small open-weights model); the open-source maintainer tax shows up immediately when the project is visible.

---

*Compiled from RSS scans of [mattpocockuk](https://x.com/mattpocockuk), [theo](https://x.com/theo), [trq212](https://x.com/trq212), [LLMJunky](https://x.com/LLMJunky), [mitsuhiko](https://x.com/mitsuhiko), [bcherny](https://x.com/bcherny), [steipete](https://x.com/steipete), [swyx](https://x.com/swyx), [simonw](https://x.com/simonw), [karpathy](https://x.com/karpathy), [jerryjliu0](https://x.com/jerryjliu0), [potetotes](https://x.com/potetotes), [leerob](https://x.com/leerob) and thread-level browsing on nitter. Karpathy and potetotes were quiet in the window; jerryjliu0 had only the "moats in 2026 are the context layer" tweet, which mostly rephrased ground we've already covered.*
