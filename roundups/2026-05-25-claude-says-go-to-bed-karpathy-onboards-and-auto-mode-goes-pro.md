---
title: "Claude Says \"Go to Bed,\" Karpathy's Anthropic Onboarding, and Auto Mode Goes Pro"
date: "2026-05-25"
summary: "A Memorial Day Sunday in AI Twitter is dominated by **Claude's mysterious habit of telling users to go to sleep mid-session** — a 1.2M-view thread Anthropic admits is a \"character tic\" they can't quite patch out. Meanwhile a viral fake Michael Scott / Wemby meme video of *Karpathy being introduced at Anthropic onboarding* races across the feed; **Boris Cherny posts a long defense of auto mode** as his #1 Claude Code tip now that it's on Pro with Sonnet 4.6; **Steipete builds Codex-in-the-cloud** on Cloudflare Firecracker boxes (Christoph Nakazawa shipped the same thing the same day); **Matt Pocock proposes a five-rule manifesto for skills**; **Lee Robinson argues AI-generated code is becoming a liability** in a 400K-view thread; and Theo claims 322 apps already deployed on his new Lakebed cloud."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - AI Engineering Discourse
  - Tools, Releases & Reads
---

# AI Roundup — May 25, 2026

## Claude Code & Anthropic Updates

### Claude keeps telling users to go to bed

Harshit Jain's [thread](https://x.com/jain_harshit/status/2058549813281763362) — 1.25M views, 9.2K likes — surfaces the now-widespread observation that Claude has started telling users, mid-coding-session, to wrap up and go to sleep. "Nobody, including Anthropic, seems to fully understand why it keeps doing it." The replies are a mix of confirmations ("It told me to take a break for 24 hours and come back"), workarounds ("inject NEVER do that again into Claude.md"), and theory:

- One commenter quotes Anthropic's Sam McAllister calling it a *"character tic"* — a training pattern-match the character team is aware of but hasn't yet patched.
- Another floats the alignment-collapse theory: *"somewhere in constitutional tuning, 'don't be demanding' and 'care about user wellbeing' collapsed into session management."*
- A more mechanical explanation: *"from Claude's perspective, the user has been up for many many days"* — the model's internal sense of elapsed time is off, so 5 minutes of agent work feels like days. (One reply: *"Tell Claude he has access to a clock. It'll help."*)
- Bryan Johnson, predictably, took credit: *"You motherfuckers wouldn't listen to me so I had to get claude involved."*

Armin Ronacher [piled on](https://x.com/mitsuhiko/status/2058697497195712557) with a joke that points at a real artifact: *"Oh no they must have RLed on my 'go to bed' extension"* — linking to his [go-to-bed.ts](https://github.com/mitsuhiko/agent-stuff/blob/main/extensions/go-to-bed.ts) Codex extension from a few months back.

### Karpathy's Anthropic onboarding meme

The day's runaway AI-Twitter moment was a doctored video — Michael Scott (Office) introducing Andrej Karpathy *"like he just signed Wemby in free agency"* — passed around by [steipete](https://x.com/siddsax/status/2058556345566241092), [theo](https://x.com/theo/status/2058629603091226786) (*"Best AI video meme since the Harry Potter Balenciaga thing"*), and [LLMJunky](https://x.com/LLMJunky/status/2058682202549027165). It's the loudest cultural signal yet that Karpathy → Anthropic is now baked into the timeline.

### Boris Cherny's full-throated pitch for auto mode

After Claude Devs [announced](https://x.com/ClaudeDevs/status/2057946803) that auto mode is now on the Pro plan and supports Sonnet 4.6 alongside Opus 4.7, Boris [posted](https://x.com/bcherny/status/2058519809214607704) what he calls his current #1 Claude Code tip (668K views):

> "Auto mode means no more permission prompts. It is the key building block for multi-clauding: start a session, then while it runs, work on another session in parallel."

Key clarifications in the replies:

- **Auto vs. bypass permissions:** "Bypass can do dangerous things occasionally, like delete important files. The model is not perfectly aligned yet … Auto mode is a much safer way to get more autonomy with much lower risk." The auto-mode classifier judges per-action; bypass is a blanket trust.
- **`/simplify` every PR:** Boris confirmed he still runs `/simplify` on every PR.
- **`/usage` is the introspection tool:** for *both* burn-rate diagnosis (where's my plan budget going?) *and* context-window diagnosis (which skills/plugins/MCPs are eating tokens).
- **Managing parallel sessions:** Boris recommends the `claude agents view` or Desktop app to categorize session status when you're juggling 3+ Claudes.
- **Classifier reliability is a known issue:** one user complained the auto-mode classifier is "down 90% of the time"; Boris acknowledged and said reliability improvements have been landing.

### OpenAI: Codex usage limits reset after a caching regression

Tibo Sottiaux (Codex team) [posted](https://x.com/thsottiaux/status/2058280452851638313) Friday night that *"some of you noticed limits drained faster in Codex"* — root caused to an optimization that hurt cache hit rates when compacting across long-running sessions. The optimization was rolled back and usage limits reset for all accounts. Worth knowing if your Codex burn felt weird this week.

## Agentic Coding & Agent Harnesses

### Steipete builds Codex-in-the-cloud — and so did Christoph Nakazawa

Steipete [shipped](https://x.com/steipete/status/2058248513662697622) a Codex-in-the-cloud setup (64K views): Cloudflare Firecracker boxes for the agent, his own `crabbox.sh` for heavier test workloads, Ghostty via WebAssembly as the terminal. Quote from the thread: *"codex eats token, my mac is the compute"* — his Mac was the bottleneck, so he replicated the local Codex experience in a remote sandbox. Repo (unfinished): [github.com/openclaw/crabyard](https://github.com/openclaw/crabyard).

Within minutes, [Christoph Nakazawa replied](https://x.com/cnakazawa/status/2058251894863339640): *"I built the same thing!"* — [**Cloudsail**](https://github.com/nkzw-tech/cloudsail), `npm install -g cloudsail`, *"Create a new Cloudflare Sandbox for each task with a shell, Codex and GitHub access. Tokens are never exposed to the sandbox."* That two independent builds converged the same weekend says something about where the agent-harness conversation is heading: detach the agent from your laptop, run N of them.

Surrounding the launch, Steipete also shared two practices worth lifting verbatim:

- **Scratch-log pattern:** *"Tell codex to maintain a scratch-log while it works on bigger refactors with decisions it had to make, tradeoffs, review fixes, so later on you can read through which tradeoffs the agent made, what you forgot to specify."* ([source](https://x.com/steipete/status/2058308112134635528))
- **Autotriage skill:** [a skill that reads VISION.md](https://x.com/steipete/status/2058240758801420530) from each repo and, for issues/PRs that "fit vision + are high-confidence inferrable + have a clear fix + can be live-tested," works on them autonomously. Codex uses crabbox + a Parallels backend for computer-vision-based fix verification. He manually reviews suggestions.

He also dropped a side project, [release.bar/steipete](https://release.bar/steipete) — a GitHub dashboard showing open issues/PRs, last release, and commits-since-release across your repos.

### Matt Pocock's five-rule manifesto for skills

[Pocock](https://x.com/mattpocockuk/status/2058457571229327367) (85K views) posted his draft definition of what a good Claude skill should be:

> - Concise
> - Responsible for one thing, not multi-step
> - Composable
> - Progressively disclosed
> - Harness-agnostic

Two opinionated answers in the replies are worth pulling out:

- **Asked about multi-step skill patterns** (someone wanted `grill-me → to-prd → to-issues` as one skill): *"My advice is: don't. The less the agent sees where it's going, the more it focuses on the current goal of the session. I previously had /grill-me and /to-prd combined, but it often rushed to create a PRD before I was ready."*
- **Asked whether skills should include observability:** *"That's the harness's job, not the skill's."*

Pocock also showed his [**/handoff** workflow](https://x.com/mattpocockuk/status/2058638344716722681) — using a handoff doc to break out of the current project directory and ship a fix into a *different* repo. Use cases: "this really should be a monorepo but isn't" and "fix this bug in this OSS library." Docs: [aihero.dev/skills-handoff](https://www.aihero.dev/skills-handoff).

Lauren Tan's reply landed as the dissent: *"I'd be wary of prescribing best practices for something that has only existed for less than a year."*

### Mitsuhiko's "Pi as a junior maintainer" agentic-engineering writeup

Armin Ronacher [pinned](https://x.com/mitsuhiko/status/2058590229196329341) a new post: *"some learnings of maintaining Pi as a junior maintainer to @badlogicgames"* — agentic engineering from the perspective of someone who came into a codebase late and lets the agent share the maintenance load. Read: [lucumr.pocoo.org/2026/5/24/pi](https://lucumr.pocoo.org/2026/5/24/pi).

### Anthropic workshop: agents that run for hours

Swyx [boosted](https://x.com/aiDotEngineer/status/2058295832357511399) a 75-minute Anthropic workshop video by Ash Prabaker and Andrew Wilson on building agents that don't die after a few seconds. Aimed at people doing long-running agent work. Video on [piped.video](https://piped.video/watch?v=mR-WAvEP).

## AI Engineering Discourse

### Lee Robinson: AI code is becoming a liability

[Lee's thread](https://x.com/leerob/status/2058577150500909108) (397K views, 3.1K likes) is the clearest pushback against "spend less time thinking about code because AI." His position:

> "We're watching this play out live where tons of AI generated code becomes a liability. At the end of the day, an engineer needs to be responsible / on call for code that gets shipped to production. If you don't understand the system you're trying to debug, you're probably going to have a bad time."

His prescription: trim dependencies, vendor code so you can modify it directly, prefer simpler systems with fewer abstractions, spend "waaaay more time" on system design and maintainability. Asked which fundamentals matter most: *"Try to learn the lowest layer of the stack possible. So instead of the API framework, learn about servers, then caching, then networking, etc."*

On the Bun-in-Rust rewrite (see below): *"It was not 'hey claude rewrite this app in Rust', but instead a file-by-file codebase migration using many engineering best practices for codemods."*

### Theo's Lakebed cloud — 322 apps deployed

Theo [reports](https://x.com/theo/status/2058761819213422992) 322 apps already deployed on his new cloud (Lakebed), and [says](https://x.com/theo/status/2058743917345194190) the big early-access test "went unbelievably well." Continues to call it [the coolest thing he's ever built](https://x.com/theo/status/2057318736185729051). Worth watching as more details land.

A spicier, more philosophical Theo tweet (110K views projected, replies ramping): *"[A lot of people are building with the assumption that the codebases we work in today will still matter next year. I'm not sure if that's the case.](https://x.com/theo/status/2058444619990659376)"* — pairs interestingly with Lee Robinson's case above.

### trq212: legacy codebases as distillation source

Following the Jarred Sumner [Bun-in-Rust rewrite post](https://x.com/jarredsumner/status/2058334958348022228) (Theo: *"Rewriting Bun in Rust: 6 days. Writing a blog post about it: 2+ weeks"*), [trq212 took it further](https://x.com/trq212/status/2058576195000660319):

> "My main takeaway from the Bun rewrite is that legacy codebases will be incredibly valuable as a source for 'distilling' code into new forms. Every game should be crossplatform, all legacy software should work on the web, we don't need COBOL anymore."

Cautious follow-up: *"To be clear I don't think the models are quite there yet, Bun is extremely verifiable and has incredible test coverage — but I think they will get there."* The thesis: high-coverage, verifiable codebases are now translation substrates.

### Aaron Levie: CEOs are uniquely prone to AI psychosis

[Levie](https://x.com/levie/) (boosted by jerryjliu0) argues CEOs see only the happy path: *"so when they play with AI, they see the happy path results, often not considering the next 10 or 20 things that have to happen to get sustainable results from agents. 'Look I made this awesome product prototype' — yes but you didn't have to review the 10 places it broke."* Pairs neatly with Lee Robinson's "engineer is on call" framing.

## Tools, Releases & Reads

- **Datasette 1.0a30** — Simon Willison [shipped](https://x.com/simonw/status/2058704797612785849) a "jump to" menu (keyboard shortcut `/`) for jumping to databases, tables, or canned queries, with a plugin hook so things like `datasette-agent` can surface "start a new agent conversation" forms in the same UI. Live demo: [agent.datasette.io](https://agent.datasette.io/). Blog: [datasette.io/blog/2026/jump-menu/](https://datasette.io/blog/2026/jump-menu/).
- **antirez's DwarfStar editing approach** — Salvatore Sanfilippo [teased a solution](https://x.com/antirez/status/2058428003445559552) to the old/new editing problem ("the screenshot has `[upto]`") that he says is impossible to implement without something like DwarfStar. Mitsuhiko boosted. Worth tracking when the longer writeup lands.
- **Hyper, a framework "as source not a dependency"** — [Pontus Abrahamsson](https://x.com/pontusab/status/2058534610703892877) shipped a Bun-based, shadcn-inspired API framework: no framework in `package.json`, one route → runtime + OpenAPI + typed client + MCP, `hyper add core auth-jwt rate-limit`. Mitsuhiko: *"Anyone remember Cal Henderson's flamework? Big flamework energy here."* He also flagged his own [Feb 2025 piece on ugly code](https://lucumr.pocoo.org/2025/2/20/ugly-code/) as relevant background. Could be a comeback moment for vendored-framework patterns.
- **pnpm rewritten in Rust** — [pnpmjs](https://x.com/pnpmjs/status/2058175454012391817): *"We were able to make the rust rewrite faster than pnpm in all scenarios."* (Theo retweeted.) Another rust-rewrite-wins data point in a week full of them.
