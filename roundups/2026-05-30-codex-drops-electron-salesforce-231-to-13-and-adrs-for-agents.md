---
title: "Codex Drops Electron, Salesforce Ships 231 Days in 13 & ADRs for Agents"
date: "2026-05-30"
summary: "A quieter day after the Opus 4.8 triple-drop, but the threads got sharper. Boris Cherny surfaced **Salesforce's agentic Claude Code writeup** — a migration scoped at 231 days that shipped in 13 — and the replies turned into a clinic on what those numbers actually mean (and how you review a 21-endpoint PR). Matt Pocock made the case for **ADRs as the thinnest doc layer agents need**, drawing out a sharp sub-debate about ADR staleness and 'policy artifacts agents can read but can't rewrite.' Theo spotted that **Codex's desktop app appears to have dropped Electron** for OpenAI's in-house 'OWL' layer lifted from the Atlas browser, then turned a cancellation-threat thread into a **$7,370 open-source donation spree** (with a pointed gift to ccusage to troll Anthropic). Plus Steipete relitigates 'clanker,' OpenClaw posts another perf sweep, LlamaIndex pushes LiteParse into the browser via WASM, and Simon Willison flags Anthropic's historically unprecedented revenue ramp."
tags:
  - Agentic Coding in Production
  - Docs, ADRs & Context Engineering
  - Codex Drops Electron for OWL
  - OpenClaw, Clanker & the Ecosystem
  - Open Source, Donations & Tooling Culture
  - Industry & Economics
  - Document AI & LlamaIndex
  - Around the Ecosystem
---

# AI Roundup — May 30, 2026

A lighter news day on the heels of Thursday's Opus 4.8 / Dynamic Workflows / $65B raise triple-drop — but the discussion threads were unusually substantive. The throughline today: people are past "is it fast" and arguing about *what the speed costs you* — review surface, doc rot, framework lock-in, and where the bottleneck actually moved.

## Agentic Coding in Production

**Salesforce went agentic with Claude Code, and the numbers are eye-watering.** Boris Cherny ([@bcherny](https://x.com/bcherny/status/2060390852619272526)) highlighted a Salesforce writeup: a migration scoped at **231 days shipped in 13**, one PR delivered **21 endpoints at 100% test coverage**, and quality went *up* alongside output — even with more PRs shipping, total incidents dropped 5%. In follow-ups he framed the lesson as deleting steps, not speeding up handoffs: big migrations and refactors are "the easiest to push off to a better time," and that's exactly the work agents unlock.

The 2,800-like reply thread is the interesting part — it's a clinic in healthy skepticism:
- **"100% coverage is doing a lot of heavy lifting in that sentence."** ([@HeathGerrald](https://x.com/HeathGerrald/status/2060394579594006785)) — and several others pushed on how you actually *review* a 21-endpoint PR. Dr. Xi Zeng ([@xiz25](https://x.com/xiz25/status/2060404690920349827)): "who can actually see what changed without reading the whole machine's mind?"
- **The task shape matters.** Guilherme O'Tina ([@guilhermeotina](https://x.com/guilhermeotina/status/2060453810334494863)): "endpoint translation with a defined target spec is almost mechanical… the open question is how this holds up when the output spec is vague and verification needs a domain expert in the loop."
- **It's a different *kind* of migration.** Jatin Garg ([@jatingargiitk](https://x.com/jatingargiitk/status/2060558398291333420)): "231 to 13 is impossible on a serial task. Those numbers only happen when the migration stops being a sequence and starts being one spec that fans out. Salesforce didn't speed up their migration, they ran a different kind of migration." — which dovetails neatly with Thursday's Dynamic Workflows pitch.
- And the recurring meta-point, from Niko ([@shipitniko](https://x.com/shipitniko/status/2060415084732551439)): "coding is starting to become more about clear thinking than writing code fast."

## Docs, ADRs & Context Engineering

**Matt Pocock makes the case for ADRs as the doc layer that survives the agent era.** "[Writing ADRs for agents has been such a good decision](https://x.com/mattpocockuk/status/2060454199838544079)… It's the thinnest layer of docs that captures the stuff code can't." When asked whether he keeps feature specs and design docs too, he was blunt: "Absolutely not, that's cruft. Kill it and write ADRs instead." A few operational details he dropped in replies:
- **One stack of ADRs per bounded context** ([here](https://x.com/mattpocockuk/status/2060454870830797230)).
- **Don't dump them all into context** — "I allow the user to explore them as needed via filenames" ([here](https://x.com/mattpocockuk/status/2060623956533514297)), a direct answer to the "won't this blow the context window" worry.

The replies sharpened it into a real design conversation. The dominant concern was **staleness**: Guilherme O'Tina ([@guilhermeotina](https://x.com/guilhermeotina/status/2060491935400284481)) warned agents treat ADRs "as immutable gospel… yesterday's good decision becomes tomorrow's constraint," and argued for a freshness check baked into the loop. The sharpest reframe came from Darshan Yadav ([@DarshanSays](https://x.com/DarshanSays/status/2060643825245438053)): "ADRs pull double duty — memory for devs and guardrails for agents. Decisions an agent shouldn't override need to live somewhere it can read but can't rewrite. ADR as **policy artifact**, not just design record." And Nox ([@noxfield405](https://x.com/noxfield405/status/2060513124348764212)) drew a useful line: software ADRs capture *design intent*; agent ADRs should capture *what to do when the agent stops following it* — failure paths, lost context, garbage tool returns.

Related from Pocock this cycle: a note that the **"smart zone" is also a token-saving move** — staying out of the dumb zone means you're not shipping 600K tokens on every request ([here](https://x.com/mattpocockuk/status/2060389049681014871)) — and a breakdown of **Cursor's new `/thermo-nuclear-code-review`** skill, billed as "the TOUGHEST AI code review possible" ([thread](https://x.com/mattpocockuk/status/2059934011124826124), [skill source](https://x.com/mattpocockuk/status/2059934053160144928)).

## Codex Drops Electron for OWL

**Theo thinks the Codex desktop app quietly stopped using Electron.** His read ([@theo](https://x.com/theo/status/2060472145831174194), 152K views): the owl emoji teasers were a hint — the custom architecture behind OpenAI's ChatGPT Atlas browser is called **"OWL" (OpenAI's Web Layer)**, and it now appears to back the Codex app, which shipped computer use on Windows, mobile-on-Windows, and "small improvements everywhere" in the same update.

The discussion was a good one:
- **It's near-zero marginal cost for OpenAI specifically.** Nanei ([@4nanei](https://x.com/4nanei/status/2060578989840687309)): "the team-size framing undersells it. OpenAI already ships a browser, so they own a chromium layer no matter what. Reusing OWL for Codex is near-zero marginal cost — you can't copy that without first building a browser."
- **It may be a partial move / fork.** Multiple repliers reported lingering **Electron traces** and a leftover `owl-electron-app.json` with `"runtimeName": "owl"` ([haro](https://x.com/harobuilds/status/2060472701517517293)), and a Windows Codex computer-use skill that crashed with an *Electron* error ([@NAM37](https://x.com/NAM37/status/2060531294660870292)).
- **Theo himself is staying on Electron** ([here](https://x.com/theo/status/2060490148664807715)): "Electron is great. If you have a large team of platform-specific engineers you MIGHT make something marginally better… We have fewer employees total than they have Windows devs 🙃"
- Best framing, again from Guilherme O'Tina ([@guilhermeotina](https://x.com/guilhermeotina/status/2060489685923693011)): "Electron optimizes for human UX… OWL optimizes for agent UX: deterministic DOM access, programmatic action recording, crash isolation. Different primitives for fundamentally different users."

## OpenClaw, Clanker & the Ecosystem

**Steipete relitigated the "clanker" debate** after his linked Mitsuhiko-blog musings annoyed people: "[clanker is not a slur. 'vibe coding' is.](https://x.com/steipete/status/2060371944168358250)" His running gag through the replies — "a slur against whom? weights?" — and the thread split predictably ("both, tbh"). Best anecdote, from Patrick Skinner ([@PSkinnerTech](https://x.com/PSkinnerTech/status/2060372876901913055)): he walked a Unitree G1 around Austin and ~50 high-schoolers chased them screaming "CLANKER!"

On the OpenClaw side:
- **Another perf sweep:** cold agent turns 2.9× faster, warm turns 2.5× faster, tarball 59% smaller, deps down 42% from the monthly high ([via @openclaw](https://x.com/openclaw/status/2060126177734295860)). Steipete noted part of the work was rebuilding leaner dependencies — proxyline.dev, fs-safe.io, and a rasterizer ([here](https://x.com/steipete/status/2060133435423789092)) — and that "every claw release spins up hundreds of CI machines to QA test."
- **Garry Tan** ([@garrytan](https://x.com/garrytan/status/2060387204774633720)): "Opus 4.8 is fucking awesome with OpenClaw — much more clear about its fixes, what it's thinking, and how it works with you."
- Steipete also welcomed **Vince** to the team and dropped a joke takedown target: [clawd.rip](https://x.com/steipete/status/2060294413377519808).

## Open Source, Donations & Tooling Culture

**Theo turned a cancellation-threat thread into a $7,370 open-source donation spree.** After tallying 737 replies as "cancellations" ($10 each), he committed the total to OSS and live-narrated where it went:
- **$2,000 to [@heyandras](https://x.com/theo/status/2060494740433571955)** for open-source alternatives to the Codex App and Claude Desktop (and a shout-out to Coolify as "the coolest open source hosting option for people exiting platforms like Vercel").
- **$500 to ryoppippi (creator of ccusage)** explicitly "in the spirit of trolling Anthropic" ([here](https://x.com/theo/status/2060496307530461473)).
- **$420.69 to Svelte**, **a 4-digit donation to pnpm / zkochan** ("thankless work… essential to the web dev ecosystem"), and **$1,000 to the Zen browser** ([thread](https://x.com/theo/status/2060497767651569679)).

Elsewhere in tooling:
- **LLMJunky introduced Lynk** ([@LLMJunky](https://x.com/LLMJunky/status/2060405049277272326)), "a brand new way to interact with your favorite harnesses on the go" — compatible with OpenClaw, Hermes, Codex, and local edge models.
- **The Codex 2× usage window is closing May 31.** LLMJunky called it "the end of an era" ([here](https://x.com/LLMJunky/status/2059751503460483545)), with a note that **$200 ChatGPT Pro may keep 2× limits** past the cutoff ([here](https://x.com/LLMJunky/status/2059769048783577446)).

## Industry & Economics

**Anthropic's revenue ramp may be historically unprecedented.** Simon Willison ([@simonw](https://x.com/simonw/status/2060170727433830536)) flagged Axios's Jim VandeHei saying he "could not find any company — in any industry, in any era — that has scaled" the way Anthropic's self-reported run-rate growth implies. (Simon also walked back the viral "Uber blew its AI budget" story this week, calling it [thinly sourced](https://x.com/simonw/status/2060209010486493500).)

The critical takes kept coming too:
- **Mitsuhiko** ([@mitsuhiko](https://x.com/mitsuhiko/status/2059650414832759236)): "'I'm selling you the tool that will accomplish great economic gains and all for the cheap price of unemployment and inequality' is definitely a choice."
- **Antirez** (RT'd by steipete, [here](https://x.com/antirez/status/2060053548692296102)) argued Anthropic made a strategic error by benchmarking Opus 4.8 against competitors instead of its own prior models — a tell that the gap has narrowed.

## Document AI & LlamaIndex

**LiteParse now runs in the browser.** Following last week's Rust rewrite, Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0/status/2060395856860455265)) shipped a **WASM package that parses PDFs in milliseconds anywhere** — Cloudflare Workers, mobile runtimes, the edge — with a "this video is at 1×" speed demo ([here](https://x.com/jerryjliu0/status/2060401682610262424)). LlamaIndex also announced a **document-parsing collaboration with the Google/Gemini team** ([here](https://x.com/jerryjliu0/status/2060444683747422582)) and an auto-updating **ParseBench leaderboard on Kaggle**.

On models: LlamaIndex benchmarked **Opus 4.8 on document understanding** vs 4.7 ([thread](https://x.com/jerryjliu0/status/2060196252642648427)) — "it wasn't explicitly posttrained" for docs, with slight gains on tables, semantic formatting, and layout, and slight regressions on charts and content extraction.

## Around the Ecosystem

- **Cursor / coding-agent data:** Lee Robinson ([@leerob](https://x.com/leerob/status/2060063336385966490)) posted a 15-minute video on new Cursor data covering how coding agents are changing software engineering, including "why lines of code is an imperfect [metric]."
- **swyx's "wait, how??" of the day** ([@swyx](https://x.com/swyx/status/2060044644193624253)): "Developers can update Claude's instructions mid-task without breaking the prompt cache or routing the update through a user turn." A genuinely interesting Opus 4.8 / Claude Code capability that nobody's fully explained yet.
- **pi 0.76.0** shipped (Mitsuhiko, [here](https://x.com/mitsuhiko/status/2059730277367189528)) with workarounds for codex transport issues in Asia and Europe; he also noted pi running a 20-minute session on DeepSeek Flash via DwarfStar4 without him noticing, and the project moving to **trusted publishing**.
- **llama.cpp** now has an official site at [llama.app](https://x.com/ggerganov/status/2060394400237109567) (RT'd by Mitsuhiko).
- **Karpathy** stayed quiet post-Anthropic-move; nothing new in the last 24h.

---

*Sources: RSS + thread scans of the accounts in `TASK.md`. Note: `@potetotes`'s Nitter RSS feed was unavailable across multiple retries today (returned an error page rather than feed XML), so that account is not represented in this issue.*
