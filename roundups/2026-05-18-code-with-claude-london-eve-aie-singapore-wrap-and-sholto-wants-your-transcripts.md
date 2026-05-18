---
title: "Code w/ Claude London Eve, AIE Singapore Wrap & Sholto Wants Your Transcripts"
date: "2026-05-18"
summary: "A quieter Sunday bookended by two events: **AI Engineer Singapore just wrapped** (May 15–17) and **Code w/ Claude London opens tomorrow** (May 19). The weekend's most actionable thread remains **Sholto Douglas's open DMs** — Anthropic's scaling-RL researcher is actively collecting Claude frustrations and transcripts for the next model, and the replies are a goldmine of failure modes (code review gaslighting, bilingual drift, skim-reading big inputs). **Boris Cherny demoed Cowork + Opus 4.7 booking 8 flights and 5 hotels** autonomously while he coded — the first public one-shot success for multi-leg travel booking. **Jerry Liu declared the AI framework era over** on VentureBeat, arguing context quality is the only surviving moat as scaffolding collapses. **Karpathy's Sequoia Ascent recap** keeps circulating — Software 3.0, the 'MenuGen test' for startup fragility, and the case that research startups still have a window. **Simon Willison's** LLM-in-a-shebang-line hack, vibe-coding/agentic-engineering convergence essay, and datasette-llm-limits plugin round out a productive week of tooling. Discussion from Saturday is still rolling: Mitsuhiko's call for PR authors to declare their own understanding, the Mythos macOS exploit aftermath, and the Codex-vs-Claude-Code switching narrative driven by Steipete."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - AI Engineer Singapore
  - Industry & Landscape
  - Tools & Workflows
---

# AI Roundup — May 18, 2026

## Claude Code & Anthropic Updates

### Code w/ Claude London opens tomorrow

[Code w/ Claude London](https://claude.com/code-with-claude/london) kicks off Monday May 19, with an [Extended day on May 20](https://claude.com/code-with-claude/london-extended) for indie devs and early-stage founders. Three parallel tracks: Research (what today's systems can do), Claude Platform (production agents), and Claude Code (scaling long-horizon tasks, multi-repo work, parallel agents). The SF edition on [May 6 shipped](https://simonwillison.net/2026/May/6/code-w-claude-2026/) Managed Agent features (Multiagent Orchestration, Outcomes, Dreaming), doubled 5-hour rate limits, and announced the SpaceX/Colossus compute deal. London may bring Europe-specific enterprise announcements and potentially new model or tooling reveals — [Simon Willison live-blogged the SF keynotes](https://simonwillison.net/2026/May/6/code-w-claude-2026/) and noted API volume is up **17x year-on-year** and Opus 4.7 now has *"context windows that feel infinite"* when combined with high-quality memory. Shopify and Mercado Libre (23,000 engineers) are targeting **90% autonomous coding by Q3**.

### Sholto Douglas's DMs remain open — still gold

[Sholto Douglas](https://x.com/_sholtodouglas/status/2055836032168575143) (143k views, 706 likes, 544 replies) — Anthropic's scaling-RL researcher — posted Saturday: *"When do you reach for other models instead of Claude? What can we do better? Hit me with all of your frustrations. DMs open."* He's actively replying with *"link me examples!"* and *"extremely useful, thank you."* The thread surfaced three actionable failure modes still worth reading:

- **Code review gaslighting** ([Dmitry Ishkov](https://x.com/swe_dima/status/2055910481626374623)): *"Half the bullet points look like: 'this is wrong, this is why <long reasoning>, actually no, disregard.' It needs to remove the bullet points it ruled out on its own before spitting them out."*
- **Bilingual drift** ([Johan Adda](https://x.com/YokoAdda/status/2055911657210028342)): *"If I ask it to write in French, it does weird sentences, mixes tons of English words."*
- **Skim-reads big inputs** ([ed17es](https://x.com/ed17es/status/2055867590791008321)): *"I passed it a full conversation transcript and told it to extract all ideas. Had to run the same prompt 4 or 5 times."*

If you have a frustrating Claude transcript, this is the window to send it.

### Boris Cherny: Opus 4.7 Cowork one-shots travel booking

[Boris Cherny](https://x.com/bcherny/status/2053994085565014188) (Claude Code creator) shared that he put flight preferences in his Cowork instructions, let Opus 4.7 work, and it **booked 8 flights and 5 hotels** by navigating websites autonomously — while he was hacking on something else in Claude Code. [His follow-up](https://x.com/bcherny/status/2053994083497238712): *"In the past, Cowork has been decent at booking flights, but with Opus 4.7, for the first time ever, it 1-shotted it!"* This is the most concrete public demo of multi-step real-world agentic task completion outside coding to date.

## AI Engineer Singapore

### AIE Singapore wraps: "The Agentic Nation"

[AI Engineer Singapore](https://www.ai.engineer/singapore) (May 15–17) — the conference's first Asia edition — wrapped Saturday. Backed by OpenAI, Google DeepMind, Cursor, and Vercel, it drew 2,000+ attendees. The set-piece moments from swyx's timeline that are still circulating:

- **Cabinet Minister Vivian Balakrishnan** [demoed his personal NanoClaw agent running on a Raspberry Pi](https://x.com/VivianBala/status/2055520455981924826), built for actual parliamentary work with WhatsApp integration and graph-memory on SQLite. swyx's reaction ([71k views](https://x.com/swyx/status/2055452778118500551)): *"wtf is this vibecoded country man."*
- **GovTech projected 1.3 billion agents in-country in 2 years** and a national MCP gateway — [Presciente's reply](https://x.com/Presciente/status/2055487008227614984) captured the macro: *"whoever owns identity and rate limits at the national layer ends up owning the agent economy."*
- swyx called **Codex** [*"completely unrecognizable from 3 months ago — agentic Excel on Mac"*](https://x.com/swyx/status/2055494400252481687) (amplified by [Greg Brockman](https://x.com/gdb/status/2055693644443623788), 55k views), cementing the narrative that Codex has become the enterprise-and-everywhere agent while OpenClaw is the personal assistant.

Singapore enterprises invest in agentic AI at **44%**, versus 34% globally — the conference location was no accident.

## Agentic Coding & Agent Harnesses

### Karpathy's Sequoia Ascent recap keeps circulating

[Karpathy's fireside chat at Sequoia Ascent 2026](https://x.com/karpathy/status/2049903821095354523) ([detailed recap](https://karpathy.bearblog.dev/sequoia-ascent-2026/)) is still generating discussion a week later. Three ideas that are seeding the most threads:

1. **The MenuGen Test** — Karpathy built an app to photograph restaurant menus and generate dish images. It became completely obsolete when Gemini could overlay images directly. His lesson: *a lot of this code shouldn't exist.* If your startup fails the MenuGen test — i.e. a frontier model update can fully engulf your product — you're building scaffolding, not a business.

2. **Software 3.0** — Three eras: 1.0 (humans write code), 2.0 (humans curate datasets, weights are the program), 3.0 (humans write prompts, the context window is the program). The shift from specification to verification: *"LLMs and RL automate what you can verify. If a task has an automatic reward signal, models can practice it."*

3. **Research startups still have a window** ([separate thread](https://x.com/karpathy/status/2016590919143952466)): *"A conventional narrative is that AI is too far along for a new, research-focused startup to outcompete. This is exactly the sentiment I listened to when OpenAI started."* He argues the probability of 10X research breakthroughs (not just 10% improvements) remains *"very high"* given the gap between frontier LLMs and biological intelligence.

### Jerry Liu: the framework era is over

[Jerry Liu on VentureBeat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives): the scaffolding layer developers once needed — indexing layers, query engines, retrieval pipelines, orchestrated agent loops — is collapsing. *"Whether you use OpenAI Codex or Claude Code doesn't really matter. The thing that they all need is context."* LlamaIndex's CEO is repositioning: context quality (accurate parsing, format deciphering, structured extraction) is the surviving moat. [AI Market Watch summary](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w). This pairs well with Karpathy's MenuGen argument — if scaffolding can be engulfed, only the data layer survives.

### Microsoft: LLMs corrupt documents over 20 delegated interactions

A [Microsoft Research paper](https://www.theregister.com/ai-ml/2026/05/11/microsoft-researchers-find-ai-models-and-agents-cant-handle-long-running-tasks/5238263) published earlier this week is still making rounds: using the DELEGATE-52 benchmark, frontier models (Gemini 3.1 Pro, Claude 4.6 Opus, GPT 5.4) **lose on average 25% of document content over 20 delegated interactions**. A useful data point for anyone running long-horizon agent tasks — context degradation is measurable and not yet solved.

## Tools & Workflows

### Simon Willison's productive week

Several of Simon's posts from this past week are worth bookmarking:

- **[LLM in a shebang line](https://simonwillison.net/2026/May/11/llm-shebang/)** — You can now use his `llm` CLI tool directly in script shebangs: `#!/usr/bin/env -S llm -f Generate an SVG of a pelican riding a bicycle`. Supports tool calls (`-T llm_time`) and YAML templates for complex scripts. [TIL with examples](https://til.simonwillison.net/llms/llm-shebang).

- **[Vibe coding and agentic engineering are converging](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)** — Simon previously distinguished them as *"very different beasts"* but realized during the [Heavybit High Leverage podcast](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison) that *"those things have started to blur for me already."*

- **[datasette-llm-limits](https://simonwillison.net/2026/May/15/)** — New plugin for per-user LLM spending limits inside Datasette. Config example: `per-user-daily: scope: actor, window: rolling-24h, amount_usd: 1.00`.

- **[Your AI Use Is Breaking My Brain](https://simonwillison.net/2026/May/11/zombie-internet/)** — Link post to Jason Koebler's 404 Media piece on the "Zombie Internet" — AI writing everywhere, everything sounding the same, brains stuck in permanent AI-detection mode.

- **[GitLab Act 2](https://simonwillison.net/2026/May/11/gitlab-act-2/)** — Commentary on GitLab's workforce reduction and reorganization into ~60 smaller teams with end-to-end ownership, framed as agentic-era restructuring.

### Matt Pocock: Skills repo at 75K stars

[Matt Pocock's `/skills` repo](https://github.com/mattpocock/skills) — 17 markdown files from his `.claude` directory — hit **75,700 stars** and was the #1 weekly-trending AI repo on GitHub. The five daily skills: `/grill-me` (exhaustive Q&A before planning — [sessions can run 40–80+ questions](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)), `/write-a-prd`, `/prd-to-issues`, `/tdd` ([red-green-refactor with interface-first thinking](https://x.com/mattpocockuk/status/2022036754648166527)), `/improve-my-codebase`. His new education platform [AI Hero](https://www.aihero.dev/) teaches these workflows. The `/grill-me` skill has become a meme — on Saturday he [used it to fix a toilet](https://x.com/mattpocockuk/status/2055917944308195396) and it [convinced him to call a plumber](https://x.com/mattpocockuk/status/2055919719618695580).

### Thariq's "Unreasonable Effectiveness of HTML" still generating debate

[Thariq Shihipar](https://x.com/trq212/status/2052811606032269638) (Anthropic, Claude Code team): *"HTML is the new markdown. I've stopped writing markdown files for almost everything."* His [companion site](https://thariqs.github.io/html-effectiveness/) has 20 self-contained HTML files generated by Claude Code illustrating real use cases. The five-point argument: information density, readability past 100 lines, shareability, two-way interaction (sliders, buttons), and joy. [Karpathy independently endorsed](https://x.com/karpathy/status/2053872850101285137) the approach: *"ask your LLM to structure your response as HTML, then view the generated file in your browser."* The [pushback thread](https://x.com/Me5466255992308/status/2055919888179322889) argues HTML artifacts are a *"sycophancy multiplier"* — the visual polish biases toward marketing-prose tone.

## Industry & Landscape

### Mitsuhiko: declare your understanding of your PR (thread still rolling)

[Armin Ronacher](https://x.com/mitsuhiko/status/2055681006623986039) (31k views): *"Now that everybody can talk confident with their clanker it becomes way too hard to understand if they knew what they were doing when they prompted it."* [antirez echoed](https://x.com/antirez/status/2055695733735510356): *"I'm suffering a lot from issues/PR descriptions that could be 2 lines and are instead 3 pages of bot generated stuff."* [Charlie Marsh (Ruff)](https://x.com/charliermarsh/status/2055729345822413057): *"By volume, most PRs are just noise now."* Mitsuhiko's [satirical follow-up](https://x.com/mitsuhiko/status/2055689770827645360): *"the first time one submits a PR they need to jump on a video chat with the maintainer to explain their PR. If they fail they are banned from GitHub."* His [local models blog post](https://lucumr.pocoo.org/2026/5/8/local-models/) from May 8 — arguing local models need focus and polish to be useful for coding agents — is the longer-form version of the same concern.

### OpenAI merging ChatGPT + Codex + API into a super app

OpenAI is [consolidating ChatGPT, Codex, and the developer API into a single product team](https://llm-stats.com/ai-news) led by Codex boss Thibault Sottiaux, with plans to integrate the Atlas browser. More than **4 million people now use Codex weekly**. Meanwhile, a new [Codex sandbox for Windows](https://developers.openai.com/codex/changelog) shipped with firewall-backed network blocking and tighter file-write controls. The convergence story: Codex isn't a side product anymore — it's becoming the core interface.

### Steipete's $1.3M token month (still rippling)

[Peter Steinberger's CodexBar screenshot](https://www.tomshardware.com/tech-industry/artificial-intelligence/openclaw-creator-burns-through-1-3-million-in-openai-api-tokens-in-a-single-month) — **$1,305,088.81** in 30-day spend, 603 billion tokens, 7.6 million requests across ~100 Codex instances operated by a 3-person team on OpenClaw — continues to be the most-cited data point for the scale of agentic compute. OpenAI covers the cost. On the day of the screenshot: $19,985.84 and 206k requests.
