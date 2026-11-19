---
title: "Fable 5.2 Lands, Software Factories Ship & Karpathy Vibes HackerTube"
date: "2026-11-19"
summary: "Anthropic shipped **Claude Fable 5.2 and Mythos 5.2** on November 9, claiming the #1 spot on Artificial Analysis's Intelligence Index and cutting token prices ~20%. **Matt Pocock's Software Factories for Real Engineers** cohort kicked off November 9 on AI Hero — the evolution of his earlier AI Coding course. **Andrej Karpathy** built HackerTube (6,454 HN-curated videos) in ~2 hours with Claude Opus 5.5 and followed up with TristanTube in 3 minutes. **Simon Willison** shipped a flurry of LLM CLI releases (0.37–0.37.3) plus provider plugins for the new Claude and Gemini models. **Armin Ronacher** spoke at AI Engineer Code Summit on 'The Software Atelier' and blogged 'AI and Irontown.' **Theo** hit a T3 Code usage milestone. **Peter Steinberger** posted about agents writing their own code at OpenAI. And **Thariq** left Anthropic after helping build Claude Code."
tags:
  - Models & Releases
  - Agentic Coding & Courses
  - Tools & CLI
  - AI Engineer Code Summit
  - Vibe Coding Projects
  - Industry News
---

# AI Roundup — November 19, 2026

> **Note:** nitter.net and x.com were unreachable from this session's network environment. Content was gathered via web search and secondary sources — some post dates and exact wording may be approximate.

---

## Models & Releases

### Claude Fable 5.2 and Mythos 5.2 (November 9)

Anthropic released **Claude Fable 5.2** alongside the restricted **Mythos 5.2** on November 9. Key details:

- **Benchmarks:** Artificial Analysis reported Fable 5.2 took the **#1 spot on its Intelligence Index v5** (score 65), led by gains in science, knowledge, and coding.
- **Pricing:** Token prices cut by ~20%, with Fable 5.2 at **$8/M input tokens**. A new Fast mode promises up to 2.5× faster generation.
- **Specs:** 1M token context window, 128K max output, June 2026 knowledge cutoff.
- **Mythos 5.2** is restricted to verified organizations only.
- Anthropic claims **over 90% of changes merged into its core codebase are now written by Claude** with human guidance.

Sources:
- [9to5Mac — Anthropic upgrades Claude with new Fable 5.2](https://9to5mac.com/2026/11/09/anthropic-upgrades-claude-with-new-fable-5-2-model-details-here/)
- [The New Stack — Anthropic Fable coding upgrade](https://thenewstack.io/anthropic-fable-coding-upgrade/)
- [Online Tech Tips — Fable 5.2 and Mythos 5.2](https://www.online-tech-tips.com/anthropic-claude-fable-5-2-mythos-5-2/)

### Simon Willison's LLM CLI and Plugin Releases

Simon Willison shipped a burst of releases in November:

- **LLM 0.37** (Nov 2): Major release covering ~2 months of features. Switched the default model to a cheaper option, added `gpt-6.1-sol` and `gpt-6.1-terra`, and a new `endpoint add` command for OpenAI-compatible providers.
- **LLM 0.37.1** (Nov 3) and **0.37.3** (Nov 16): Bugfixes, including a Homebrew packaging fix.
- **llm-anthropic 0.31** (Nov 9): Added the newest Claude models (Fable 5.2).
- **llm-gemini 0.36** (Nov 10) and **0.38** (Nov 18): Support for Google's Gemini 4 lineup. Willison noted that **Gemini 4 pricing is confusing**, and the Neon model variant has made it worse.

Sources:
- [LLM 0.37 release](https://simonwillison.net/2026/Nov/2/llm/)
- [llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/)
- [llm-gemini 0.38](https://simonwillison.net/2026/Nov/18/llm-gemini/)

### Other Willison Posts

- **Datasette in the browser** (Nov 17): Running the full server-side Datasette Python app in the browser with service workers and Pyodide.
- **datasette-llm 0.1a11** (Nov 14): Plugin that lets Datasette plugins share LLM configuration, now with OpenAI-compatible endpoint support.
- **SQLite JSON behavior** (Nov 16): Deep dive into SQLite's JSON handling quirks.

Source: [simonwillison.net](https://simonwillison.net/)

---

## Agentic Coding & Courses

### Matt Pocock: Software Factories for Real Engineers (November 9)

Pocock's latest AI Hero cohort, **"Software Factories for Real Engineers,"** kicked off November 9. This is the successor to his earlier "AI Coding for Real Engineers" course (which ran in June). The new course covers:

- Using engineering skills to **ship code at scale**
- Maintaining a **self-improving codebase**
- Building and running software factories

Enrollment has already closed; a waitlist is open for the next run.

He also recently posted about **TypeScript 7.1 beta** content mappers — the ability to import non-TS files (Markdown, Vue, Svelte), write a content mapper to extract types, and get full type inference with `tsc --runExternalCode`.

Sources:
- [AI Hero — Software Factories cohort](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m)
- [Matt Pocock on content mappers](https://x.com/mattpocockuk/status/2113507665733197892)

### Thariq (@trq212) Left Anthropic

Thariq, who helped build Claude Code, reportedly **left Anthropic** around late October. A widely-shared reply thread credited him with:

- Helping build Claude Code from early days
- Writing some of the most useful posts on working with coding agents
- His article arguing **HTML can be better than Markdown for AI-generated plans**

On November 16, he posted that **"software factories feel like a temporary problem. The models will learn to build them for you"** — suggesting the more interesting question is how to build workspaces where agents collaborate with people.

Sources:
- [Kai on Thariq's departure](https://x.com/hqmank/status/2113983310984556746)

### Boris Cherny (Claude Code Creator) — Ongoing Influence

No November posts found, but his earlier workflow tips remain highly referenced:

- Runs **5+ Claude sessions in parallel**, using system notifications for when one needs input
- At **100% AI coding** — hasn't written manual code in months
- Key principle: **give Claude a way to verify its work** — can double or triple quality
- The Claude Code team shares a **single CLAUDE.md** checked into git, updated multiple times per week

Sources:
- [Boris Cherny workflow thread](https://x.com/bcherny/status/2007179832300581177)
- [AlphaSignal on Cherny vs Karpathy](https://x.com/AlphaSignalAI/status/2016684779660595629)

---

## AI Engineer Code Summit (November 10–12, San Francisco)

The second annual **AI Engineer Code Summit** took place at the Hilton Union Square, focused on coding agents and developer tools.

### Armin Ronacher: "The Software Atelier"

Ronacher (CTO of Earendil, creator of Flask/Ruff toolchain) spoke on the main stage November 12. His talk argued for **improving the workshop before maximizing output**:

- Keeping agents able to **stop, suspend, restore, and resume** work
- Knowing when to **push back** rather than writing another isolated implementation
- The "atelier" metaphor: treat your dev environment as a craftsman's workshop, not a factory floor

He also published a blog post **"AI and Irontown"** (Nov 9) on lucumr.pocoo.org — described as a non-technical piece using a film analogy for reconciling incompatible needs around AI.

Sources:
- [AI Engineer Code Summit — Armin Ronacher talk](https://ai.engineer/code/2026/talks/armin-ronacher)
- [AI and Irontown blog post](https://lucumr.pocoo.org/)
- [AI Engineer Code Summit schedule](https://www.ai.engineer/code/2026/schedule)

---

## Vibe Coding Projects

### Karpathy Builds HackerTube and TristanTube with Claude Code

Andrej Karpathy shipped two curated video sites in early November:

**HackerTube** (~Nov 1):
- Filtered **43M Hacker News comments** (2007–2026) down to **6,454 recommended YouTube videos**
- Built in **~2 hours** using Claude Code with Opus 5.5 on the Mac desktop app
- Used Claude Code's Workflow feature with Sonnet to strip spam from comments
- Multiple news outlets covered it as a showcase of what Claude Code can produce

**TristanTube** (~Nov 7):
- Built from Tristan Hume's curated YouTube channel list — **47K "super nerdy" videos**
- Karpathy claims he **one-shotted it in 3 minutes** with Claude Code
- Includes a TV mode for laid-back watching

He also continued his thread on the **AI capability perception gap**, arguing that understanding of LLM capability is diverging — estimating ~6B people (~75% of the population) have barely come in contact with LLMs at all.

On small models, he's quoted saying: **"A 1B model can be much more effective than most current LLMs. 90% of current models waste a ton of capacity and money on remembering stuff that doesn't matter."**

Sources:
- [AI Weekly — Karpathy ships HackerTube](https://aiweekly.co/alerts/karpathy-ships-hackertube-in-2-hours-with-claude-opus-55)
- [Digg — HackerTube coverage](https://digg.com/tech/s5ob3c6a)
- [BuildMVPFast — HackerTube cost analysis](https://www.buildmvpfast.com/blog/karpathy-hackertube-43m-hn-comments-6454-videos-cost-2026)
- [Karpathy on capability gap](https://x.com/karpathy/status/2109361546505966046)

---

## Industry & People

### Theo (t3.gg): T3 Code Usage Milestone

Theo posted on November 18 that **T3 Code hit 31.7 trillion tokens in a single day** — claiming over **$10M in API spend in 24 hours**. Earlier in the month:

- **Nov 14:** Announced agents can now **customize T3 Code's UI on the fly** (nightly builds only, stable "soon")
- **Podcast episodes:** "AI Models: A Race To The Bottom" (Nov 3) and a Tailwind drama episode (Nov 10)

Sources:
- [Theo on T3 Code tokens](https://x.com/theo/status/2122860770329608290)
- [Digg — T3 Code agents redecorate](https://digg.com/ai/dsypwf9p)

### Peter Steinberger: Agents Writing Their Own Code

Steinberger (now at OpenAI, creator of OpenClaw) posted on **November 12** quoting a line about agents: **"Don't worry, you don't need to learn how to write this. Your agents will. And we made them really good at it."**

OpenClaw continues to be stewarded independently with 346K+ GitHub stars. His current focus at OpenAI is on multiplayer agent sessions and cloud-based coding.

Sources:
- [Steinberger Nov 12 post](https://x.com/steipete/status/2120974913679040680)
- [Y Combinator speaker announcement](https://x.com/ycombinator/status/2062942526856941994)

### Anthropic IPO Roadshow

Anthropic reportedly began its **IPO roadshow on November 11**, with Goldman Sachs and Morgan Stanley leading. Pricing was expected around November 18, with trading potentially starting November 19 (today). The amended S-1 (filed Nov 2) describes Claude Code as a coding agent already in market.

Sources:
- [The Neuron — AI digest Nov 12](https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-thursday-november-12-2026/)

### LlamaIndex: ParseBench-2

Jerry Liu's LlamaIndex published **ParseBench-2** (Nov 12), a document-parsing benchmark. The latest `llama-index-core` is at **0.14.26** (Nov 13) and now requires Python 3.11+.

Sources:
- [LlamaIndex blog](https://www.llamaindex.ai/blog)

---

## Other Notable Bits

- **Gemini 4 models** are starting to appear — Simon Willison added support in llm-gemini, noting confusing pricing across the Argon/Hydrogen/Neon variants.
- **xAI watermarking:** Starting November 7, xAI invisibly marks all Grok API text by default. Anthropic is extending its own text watermark to four older Claude models.
- **AI in job posts:** AI mentions appeared in **51.6% of November's Hacker News "Who is Hiring?" posts**, up from 30% two years ago.
- **Satya Nadella** (Nov 18) predicted AI agents will **"reshuffle the economics of the web."**
- **Agent security consolidation:** Cyera acquired Oasis Security (which manages AI agents' system access) for **$1 billion**.
- **swyx** continues across AI Engineer, Latent Space, and Cognition — contributed a video message to the AI Engineer Shanghai conference in early November.
- **@LLMJunky** — no November posts found via search. If you have direct access, worth checking their feed directly.
