---
title: "Anthropic Meters Programmatic Usage, Mythos Cracks Cyber Ranges & Pocock Re-Grills"
date: "2026-05-14"
summary: "Anthropic dropped a policy bomb: starting **June 15**, `claude -p`, the Agent SDK, Claude Code GitHub Actions, and any third-party app built on the SDK get pulled out of the flat-fee subscription bucket and metered against a new \"dedicated monthly credit\" — $20 on Pro, up to $200 on Max. The community read it as a 10–40× cut disguised as a bonus: Matt Pocock said *\"time to try Codex,\"* Theo Browne announced a $10-per-screenshot bounty for cancelled subscriptions and threatened that *\"any statement from an Anthropic employee is a lie on a timer,\"* and Jeremy Howard pointed out the policy quietly redefines *interactive* to mean *\"using an Anthropic front-end.\"* Anthropic tried to sweeten it with a 50% weekly-limit bump through July 13. In parallel, Boris Cherny revealed **Claude Mythos Preview** is the first model to solve both of the UK AISI's end-to-end cyber ranges (including the never-before-cleared *Cooling Tower*), Steipete wired his claw to a data-centre Android phone over Tailscale so it could order him an Uber, and Matt Pocock retired `/grill-me` for code in favour of a docs-aware successor."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI Updates
  - Security & Supply Chain
  - Skills, Workflows & Dev Tools
  - Industry & Misc
---

# AI Roundup — May 14, 2026

## Claude Code & Anthropic Updates

### The $20-to-$200 programmatic credit — a rebrand or a 10× cut?

The thread that ate everyone's timeline. [@ClaudeDevs announced](https://x.com/ClaudeDevs/status/2054610152817619388) that from **June 15**, paid Claude plans get a **dedicated monthly credit** for programmatic usage, covering:

- Claude Agent SDK
- `claude -p`
- Claude Code GitHub Actions
- Third-party apps built on the Agent SDK

Matt Pocock's read ([218k views, 2.7k likes](https://x.com/mattpocockuk/status/2054637261388447956)):

> This is the clarity we've been crying out for. But it's a poisoned chalice. This is a 10X cut to `claude -p` disguised as a monthly bonus. Anthropic is discouraging any kind of programmatic usage. And that's fine — no subsidy lasts forever. But it's time to try Codex.

In follow-ups he noted he'd [been asking for clarity on this for nearly two months](https://x.com/mattpocockuk/status/2054673512841777603) and that he had built [a whole orchestration framework around `claude -p`](https://x.com/mattpocockuk/status/2054656711982559499). Other replies framed the same trade clearly: *"a cap on programmatic usage is the headline. For a team running 5 agents the new math is a 10-20x downgrade dressed up as a credit."* He went [live on YouTube](https://youtube.com/live/IrjUPc6taKo) to walk through the math.

### Theo: "any statement from an Anthropic employee is a lie on a timer"

[Theo Browne's reaction post hit 494k views](https://x.com/theo/status/2054731856248283318):

> I can't help but feel personally burned by the Claude Code changes announced today. We put so much work into wrapping the (atrocious) Claude Agent SDK in T3 Code… Now our users are getting their rate limits cut by 40x, despite us doing everything right.
>
> Until we see significant change, it is safe to assume any statement from an Anthropic employee is a lie on a timer.

He followed up with a [$10-per-cancelled-subscription bounty for open source](https://x.com/theo/status/2054734057368621176) (cap: $20,000) and posted that [*"Anthropic just freed up a bunch of compute by blocking open source devs and apps from using Claude Code"*](https://x.com/theo/status/2054728187498946969). [He also corrected the narrative on T3 Code](https://x.com/theo/status/2054746015161569477) — T3 makes no money on it; users bring their own inference (Codex / Claude Code / Cursor / OpenCode) and T3 just gives them a better UI on top. He says [Zed users will be hit too](https://x.com/theo/status/2054792412569243934) because ACP won't work with subscription limits, forcing them back to the terminal app.

Jeremy Howard's [add-on community note](https://x.com/jeremyphoward/status/2054682882753597603) made the structural point that's resonating with critics:

> This policy redefines the term "interactive" to mean "using an Anthropic front-end". If you use `claude -p` or Agent SDK to do something interactively, it now uses credits, not your subscription limits.

[Armin Ronacher just sighed](https://x.com/mitsuhiko/status/2054658058727432229): *"This at least makes their policy consistent."* And [Simon Willison's one-liner](https://x.com/simonw/status/2054782039841460302) — *"Doing this is a great way to make a bonfire of your reputation"* — felt like it landed in the same crater.

### The sweetener: weekly limits +50% through July 13

[Claude Devs posted](https://x.com/ClaudeDevs/status/2054639777685934564) that Claude Code weekly limits are increasing 50% through July 13 for Pro, Max, Team, and seat-based Enterprise. The interactive pool is unchanged; the new credit is the programmatic pool. Several replies pointed out this only sharpens the implicit deal: **interactive in the Anthropic-blessed UI is still subsidised, anything else is metered**.

### Mythos Preview clears the AISI Cooling Tower

Boris Cherny, who leads Anthropic's offensive-AI program Glasswing, [shared a Mythos Preview update](https://x.com/bcherny/status/2054617810253615147) (122k views):

> The UK AISI found Mythos Preview is the first model to solve both their cyber ranges end-to-end. No model had ever solved the AISI's "Cooling Tower" cyber range before. We're getting it to defenders as fast as we responsibly can.

The quoted background thread says Mythos cleared every AISI task estimated >8 hours within the deliberately low 2.5M-token cap; XBOW called the precision *"token-for-token, unprecedented"*, and Glasswing partners report finding *"sometimes double what they'd normally find in a year"* in high/critical vulns. Reports: [XBOW](https://xbow.com/blog/mythos-offensive-security) · [UK AISI](https://aisi.gov.uk/blog/how-fast-is-ai-getting-at-cyber).

### `/goal` as the third autonomy rung

Boris also previewed the [`/goal` slash command in Claude Code](https://x.com/ClaudeDevs/status/2054351031279186040), framed as the AI-evaluated tier of autonomy. Swyx [tied it together neatly](https://x.com/swyx/status/2054378390891933804):

> increasing levels of autonomy:
> `/skill`: preset prompts
> `/plan`: human-refined inputs
> `/goal`: AI-evaluated outputs

Replies dug into the tension — *"each rung loses a class of guarantee. `/skill`: deterministic. `/plan`: reproducible. `/goal`: probabilistic — no two runs need match. The hard problem isn't autonomy itself, it's that you stop being able to ask 'did it work' and have to ask 'did the distribution shift'."*

## Agentic Coding & Agent Harnesses

### Steipete's claw orders an Uber over Tailscale

Peter Steinberger [streamed an Android phone from a data centre to his Mac](https://x.com/steipete/status/2054647734418756012) via Tailscale + [scrcpy](https://github.com/genymobile/scrcpy), then drove the screen with his claw via [Peekaboo](https://peekaboo.sh) (127k views, 1.6k likes). *"Now my claw can order me an Uber."* When skeptics called it overengineered, he replied: *"How many services are not available on the web but exist as app…"* — including [payments, if you disable biometrics](https://x.com/steipete/status/2054653914830541055). Adjacent: he showed [Codex resolving a Telegram token rotation](https://x.com/steipete/status/2054433442821980521) by using Peekaboo to drive the Telegram Mac app and talk to BotFather.

He also shipped [**Crabbox 0.13.0**](https://x.com/steipete/status/2054690836613324997): Modal sandbox runs, full resync for stale workdirs, native Windows script support, clearer SSH/sync error hints. Repo: [github.com/openclaw/crabbox](https://github.com/openclaw/crabbox/releases).

### T3 Code, OpenCode, and the harness exodus

Theo [rebuilt the T3 Code marketing page](https://x.com/theo/status/2054666621059563759) to emphasise its BYO-inference model and asked for testimonials. Tone of replies is uniformly *"already migrated, never going back."* Many of Matt Pocock's commenters echoed this: *"Codex run is coming for everyone whether they like it or not."*

### Theo: CLI vs desktop, and "impossible to paste images over SSH"

A couple of zoomed-out posts worth their own bullet:

- [*"Just learned it's literally impossible to paste images into Claude Code over SSH. How do you CLI people live like this??"*](https://x.com/theo/status/2054787567095283940)
- [*"Are you still using the CLI versions of your preferred agent instead of desktop apps like Codex App, Conductor, or T3 Code? Tell me why below."*](https://x.com/theo/status/2054790562570772792)

## Codex & OpenAI Updates

### Codex's in-app browser learns viewport switching

[LLMJunky highlighted](https://x.com/LLMJunky/status/2054393623005823116) a small but telling Codex update: the in-app browser can now resize the viewport to test mobile / tablet / desktop breakpoints, take screenshots at key points, and even hide the IAB to disable animations and run testing 1–2× faster. *"You can tell they really use and love these products internally."*

### GPT 5.5 in Cursor

[*"GPT 5.5 in Cursor is honestly cracked. The psychosis got me good tonight,"*](https://x.com/LLMJunky/status/2054811769659441449) reported am.will — light on detail but the replies (*"the codebase indexing and all features are very helpful"*) suggest GPT-5.5 has settled into Cursor as the default option people are reaching for after the Claude Code wobble.

### A Codex plugin for daily dependency vuln-scanning

A retweet via [@joe_lgtm / @LLMJunky](https://x.com/joe_lgtm/status/2054584048002138257) describes a scheduled Codex plugin that *"inventories dependency manifests, checks exact package/version exposure through OSV, pulls current vulnerability intelligence from CISA KEV, NVD, RSS feeds, and optional X recent search"* — i.e. a daily cron that knows your supply chain. Practical pattern worth stealing.

## Security & Supply Chain

### Shai-Hulud, open-sourced and then re-buried

[am.will reported](https://x.com/LLMJunky/status/2054434262082871645) that the Shai-Hulud worm — the npm-spreading exploit that hit 170+ packages and 400+ repos — was open-sourced on GitHub. GitHub removed the repo; vx-underground apparently mirrored it. Quote-tweet sentiment: *"It can no longer be studied… unless there was someone who collected this sort of thing and has a local copy."* Don't run the code, but the post-mortem fuel is now in the wild.

### GitHub's Advisory DB incorrectly flagged Puppeteer as malware

Mathias Bynens (via [an @mitsuhiko RT](https://x.com/mathias/status/2054635394671542322)) flagged that GitHub's [Advisory Database mis-listed Puppeteer as malware](https://github.com/github/advisory-database/issues/7684), blocking new releases. A precise illustration of how automated supply-chain defences eat their own when the truth-of-record turns out to be a low-quality list.

### Claude vs a 12-year-old locked Bitcoin wallet

[LLMJunky surfaced](https://x.com/LLMJunky/status/2054668094119854448) a viral story of someone using Claude to recover $400,000 of their own BTC from a wallet they hadn't been able to access for 12 years. Not strictly *security* in the defensive sense, but a nice reminder that interactive frontier-model coding remains absurdly powerful on niche, well-scoped reverse-engineering problems.

## Skills, Workflows & Dev Tools

### Matt Pocock retires `/grill-me` for code

[Matt Pocock](https://x.com/mattpocockuk/status/2054808143041908936) (35k views) says `/grill-me` is his most popular skill ever — and he's stopped using it for code:

> /grill-me is my most popular skill ever. I get 5-10 messages a day about how it's changed people's workflows for the better. But… I've stopped using it for code. Here's the improved version.

Replies framed the evolution clearly: *"grilling is opinion, adversarial review is architecture — it asks 'what breaks this in prod' not 'what would I do differently.'"* The successor, `grill-with-docs`, is referenced in a follow-up. Skills index: [aihero.dev](https://www.aihero.dev/s/nEn3WV).

### swyx on what model-router data reveals

[Swyx browsed the latest Vercel AI Gateway numbers](https://x.com/swyx/status/2054720201070190632) and called out a few counterintuitive splits *for that subset of traffic*:

- Gemini leads in **education** and **personal assistants**
- Anthropic leads in **vibecoding**, **coding**, and **back office**
- OpenAI leads in **recruiting outreach**

Best reply, from Danny Livshits: *"Those category splits hint at procurement gravity: Gemini rides Workspace, Anthropic rides IDE plugins, OpenAI rides sales stacks. Distribution is shaping model share more than evals."*

### Mitsuhiko / Pi: killing dependencies, why not Rust

Armin Ronacher's working-out-loud thread on his Pi project is a useful counterweight to the *"agents make language choice irrelevant"* take:

- [Killing dependencies in Pi](https://x.com/mitsuhiko/status/2054483288807370790) — *"because reasons."*
- [Why not Rust/Go for Pi](https://x.com/mitsuhiko/status/2054519228456198565): *"Extensibility is key to it. That leaves Ruby, Python, JS, PHP for the most part unless you want to ship an interpreter. None of those languages have any benefit over Node."*
- [Stowaway QuickJS](https://x.com/mitsuhiko/status/2054547599705715043): Pi was unknowingly shipping a WASM-compiled QuickJS interpreter because `proxy-agent` supports PAC scripts. *"Does anyone need PAC?"*

## Industry & Misc

### Theo's *Anthropic vs xAI* podcast (and a Bun-in-Rust update)

Theo dropped [a podcast episode](https://x.com/theo/status/2054764915966329112) covering Anthropic/xAI, the OpenAI lawsuit, the Bun-in-Rust port (still progressing — recall the 99% milestone from a few days ago), security, and — yes — pottery. Useful single-listen for catching up if you haven't been following the threads.

### *"Code is actually the right abstraction"*

[Lee Robinson, two days back but still circulating](https://x.com/leerob/status/2054239636344496523):

> Too often I see the future of software engineering diminished down to, effectively, writing and reviewing markdown files. Yes, it will be hard to review thousands of lines of agent code. But maybe the takeaway is that code remains the right abstraction.

A useful rebuttal to the *"specs replace code"* drift in agentic-engineering discourse.

### Document parsing without a model

[Jerry Liu shipped **LiteParse**](https://x.com/jerryjliu0/status/2054328239297106137), an open-source, *model-free* document parser for AI agents — 50+ document types, clean text out in seconds, with a self-hostable HTTP server (`liteparse-server`) for fully local stacks. Worth a look if you've been paying Claude/GPT tokens just to OCR PDFs.

### Coolify's bot-bait trap

A retweet via [@theo / @heyandras](https://x.com/heyandras/status/2054512710017298463) describes a fun defensive trick: *"We made a fake repo with fake bounties, and the bots are applying fake PRs, so we know who is fake, and we can ban them from the Coolify repo."* Honey-pot OSS contribution detection. Cheap, mean, effective.
