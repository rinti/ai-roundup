---
title: "Grok Build Enters the Ring, AIE Singapore & the Great Migration"
date: "2026-05-16"
summary: "xAI launched **Grok Build**, its first CLI coding agent — 8 parallel agents, Grok 4.3 beta with a 2M-token context window, $300/mo for SuperGrok Heavy subscribers ($99 intro). It's the biggest new entrant since Codex went agentic. Meanwhile **AI Engineer Singapore** kicked off its second day with 2,000+ attendees and speakers from OpenAI, Google DeepMind, and Cursor. The Claude Code cancellation wave from Thursday continued to reverberate: **MarkTechPost published benchmark rankings** confirming Claude Code still leads SWE-bench Verified at 87.6%, but user sentiment is split — half the replies are migration screenshots to Codex or Grok. **Boris Cherny** demoed Cowork with Opus 4.7 one-shotting 8 flights and 5 hotels, and Karpathy's '4 rules' repo crossed **120K GitHub stars** in two weeks. Google's Sundar Pichai confirmed **75% of all new code at Google is now AI-generated** — up from 25% eighteen months ago."
tags:
  - Grok Build & xAI
  - AI Engineer Singapore
  - Claude Code & the Migration
  - Agentic Coding & Benchmarks
  - Karpathy & the Vibes
  - Skills & Workflows
---

# AI Roundup — May 16, 2026

## Grok Build & xAI

### xAI ships Grok Build — first CLI coding agent

The biggest new entrant in the coding agent wars since Codex went agentic. [xAI announced Grok Build](https://x.ai/news/grok-build-cli) on Thursday, and Friday is the first full day of reactions.

Key specs:
- **8 parallel sub-agents** that simultaneously plan, search docs, and write code
- **Grok 4.3 beta** with a 16-agent Heavy architecture
- **2 million token context window** — can hold an entire large codebase in memory
- **Plan mode** that generates a task graph before executing, with human review at each node
- Available to SuperGrok Heavy subscribers at **$300/mo** ($99/mo intro for 6 months)

[Engadget's coverage](https://www.engadget.com/2173482/xai-coding-agent-grok-build/) notes that Elon Musk previously admitted xAI had "fallen behind its competitors when it comes to coding." Grok Build is the catch-up play. The [CIO Dive framing](https://www.ciodive.com/news/xAI-coding-agents-Grok-Build/820422/) is sharper: xAI is joining a "crowded race" — Claude Code, Codex, Cursor, Windsurf, Kiro, and now Grok Build all competing for the same terminal.

The plan mode is the most interesting differentiator: unlike Claude Code's supervised pair-programming model or Codex's autonomous cloud executor, Grok Build generates a full dependency graph of sub-tasks and lets you edit the plan before any code is touched. Whether the 8-agent parallelism actually produces better code or just faster slop remains to be seen — early beta testers are still getting access.

## AI Engineer Singapore

### Day 2 of the first Asia edition

[AI Engineer Singapore](https://www.ai.engineer/singapore) (May 15–17) is [swyx's](https://x.com/swyx) flagship conference's first Asia stop, running at The Capitol Theatre with **2,000+ in-person attendees** and ~50,000 online viewers. Headline sponsors include OpenAI, Google DeepMind, Cursor, and Vercel. Four tracks: software systems, design, robotics/foundation models, and leadership.

[swyx had previously teased](https://x.com/swyx/status/2045737217784684827) *"if you guys come to @aiDotEngineer Singapore I will personally lead a tour to the best cai fan I know!"* — so at minimum the food recs are good.

The timing is interesting: the conference lands in the middle of the Claude Code cancellation wave, which means the hallway track is likely dominated by "what are you migrating to?" conversations. With OpenAI, Cursor, and now xAI all launching or updating their agents this week, there's no shortage of options to discuss.

## Claude Code & the Migration

### Day 3 of the cancellation wave

The fallout from [Theo's pinned "I cancelled my Claude Code sub. I give up."](https://x.com/theo/status/2055022768262144102) (184k views, 1.5k+ likes) continued to compound. [Yesterday's roundup](2026-05-15-theo-cancels-bun-defects-to-rust-and-languages-arent-lock-in.md) covered the immediate blast; today the mood has shifted from anger to logistics. The migration destinations appearing most often in replies:

1. **OpenAI Codex** — now with [mobile supervision in the ChatGPT app](https://x.com/OpenAI/status/2055016850849993072) (2.68M views), start-approve-steer from your phone
2. **Grok Build** — brand new, $99/mo intro vs Claude Max's $200/mo
3. **opencode + local models** — the sovereignty play
4. **Running both** — Claude for complex architecture, Codex for grinding

[Boris Cherny](https://x.com/bcherny/status/2053950964126921024) was still engaging users on X, replying to [@DavidKPiano](https://x.com/bcherny/status/2053950964126921024): *"Hey, Boris from the team here. What can we do better?"* The tone is conciliatory, but the thread it sits under is rough.

Meanwhile, [an interview surfaced via Lauren Reeder](https://x.com/laurenmhreeder/status/2051351487515902247) where Cherny said he *"hasn't written a line of code himself in 2026"* and the team discussed *"why coding is effectively solved."* [Lenny Rachitsky's breakdown](https://x.com/lennysan/status/2024599384076509221) of the same conversation: *"100% of my code is written by Claude Code. I have not edited a single line by hand since November."* The gap between the team's lived experience and their users' rate-limited reality is the entire story right now.

### Cowork + Opus 4.7 one-shots flight bookings

On a brighter note, [Cherny demoed Cowork with Opus 4.7](https://x.com/bcherny/status/2053994083497238712) booking 8 flights and 5 hotels autonomously:

> I needed to book flights for a bunch of upcoming travel. As always, I used Claude Cowork to do it. In the past, Cowork has been decent at booking flights, but with Opus 4.7, for the first time ever, it 1-shotted it!

The demo puts [Cowork's flight preferences in instructions](https://x.com/bcherny/status/2053994085565014188), then lets Opus open a browser, navigate booking sites, and complete everything while you keep coding. [Skift called it "The Claude Effect"](https://skift.com/2026/03/02/the-claude-effect-is-coming-for-travel/) back in March; this is the first clean demo of the full loop working end-to-end.

## Agentic Coding & Benchmarks

### MarkTechPost benchmark rankings

[MarkTechPost published a benchmark-driven ranking of AI coding agents](https://www.marktechpost.com/2026/05/15/best-ai-agents-for-software-development-ranked-a-benchmark-driven-look-at-the-current-field/) on Thursday. Key numbers for Claude Code (built on Opus 4.7, released April 16):

- **SWE-bench Verified**: 87.6% (up from 80.8%)
- **SWE-bench Pro**: 64.3% (up from 53.4%)
- Rakuten: 3x more production tasks resolved on internal SWE-bench
- CodeRabbit: 10%+ recall improvement on complex PR reviews

Claude Code still leads on code quality metrics. The question users are asking isn't "is it good" but "can I actually use it before hitting the rate limit."

### Codex vs Claude Code: the numbers

[DevToolPicks' comparison](https://devtoolpicks.com/blog/codex-vs-claude-code-2026) lays out the split: Claude Code runs Opus 4.7 with 1M-token context and leads SWE-bench. Codex runs GPT-5.4 and uses roughly **4x fewer tokens** on the same task. If your bottleneck is quality, Claude wins. If your bottleneck is tokens-per-dollar, Codex wins. Most of the migration crowd is hitting the latter wall.

### Google: 75% of new code is AI-generated

[Sundar Pichai confirmed](https://www.fastcompany.com/91531519/google-ceo-says-75-of-the-companys-code-is-ai-generated) that 75% of all new code at Google is now AI-generated and approved by engineers — up from 50% last fall and 25% eighteen months ago. The important nuance: "AI-generated" means suggested by AI and accepted or edited by humans, not autonomous output shipping without review. Every commit still goes through human review and automated testing.

Meta has set internal targets for select teams to hit 75% by mid-2026. Snap says 65% of its new code is AI-generated. The enterprise pattern is clear: engineers are becoming reviewers.

## Karpathy & the Vibes

### The "4 rules" repo: 120K stars in two weeks

[Prajwal Tomar's thread](https://x.com/PrajwalTomar_/status/2053770348353724666) captured the wildest GitHub story of the month:

> Karpathy complained about Claude making mistakes, someone turned it into 4 rules, and it became the fastest-growing single-file repo in GitHub history. 120,000 stars. 60,000 bookmarks in two weeks. The 4 rules cut Claude's code mistakes from 41% to 11%.

The repo is a single CLAUDE.md file. No SDK, no framework, no application code. Just constraint-writing as a discipline. It's the same insight Matt Pocock's skills repo is built on — the agent is as good as the instructions you give it — but distilled to its most extreme form.

### Sequoia Ascent 2026 talk still reverberating

Karpathy's [fireside chat at Sequoia Ascent 2026](https://x.com/karpathy/status/2049903821095354523) continues to generate discussion. [The blog post summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/) covers his Software 3.0 framework:

- **Software 1.0**: humans write explicit code
- **Software 2.0**: humans curate datasets, train neural nets; weights are the program
- **Software 3.0**: humans write prompts; the LLM is the interpreter, context window is the program

His **MenuGen** example illustrates obsolescence velocity: he built an app to OCR restaurant menus and generate food images. Then Gemini could just take the photo and overlay images directly — no app needed. The app became obsolete before it shipped.

The [verifiability framework](https://x.com/atShruti/status/2049992301934764501) is the actionable takeaway for founders: LLMs and RL automate what you can verify. If a task has an automatic reward signal (math, tests, games), models improve fast. If verification requires human judgment, progress is slower. Build where verification is cheap.

### "Structure your response as HTML"

[Karpathy's simple tip](https://x.com/karpathy/status/2053872850101285137) — ask your LLM to *"structure your response as HTML"* then view in browser — continues spreading. [trq212 has been pushing the same idea](https://x.com/trq212/status/2052811606032269638) for Claude Code outputs, and [Matt Pocock's `/improve-codebase-architecture` skill](https://x.com/mattpocockuk/status/2054922772573303293) now ships HTML output. The pattern is clear: markdown is for humans reading in terminals; HTML is for humans reading analysis.

## Skills & Workflows

### Matt Pocock: /handoff and the session problem

[Matt Pocock's `/handoff` skill](https://x.com/mattpocockuk/status/2052489881088049407) addresses one of the most common AI coding friction points:

> /handoff might be my new favourite skill

[Kai's explanation](https://x.com/hqmank/status/2052739043591442884): *"One problem happens almost every day in AI coding: the session gets too full, and the next session has no idea where to continue. Matt Pocock's tiny /handoff skill fixes it: summarize the current chat into a handoff doc so a fresh agent can pick up the work."*

This pairs with [Pocock's broader workflow](https://x.com/mattpocockuk/status/2024874219662905676): Idea → `/write-a-prd` → PRD → `/prd-to-issues` → Kanban → Ralph Loop → Manual QA. The `/handoff` skill is the glue between sessions — agent-to-agent handoff without context loss.

### Mitsuhiko on DwarfStar4 and local inference

[Armin Ronacher fell in love with antirez's ds4](https://x.com/mitsuhiko/status/2052508753472143614) (now renamed DwarfStar4), a specialized inference engine for DeepSeek V4 Flash:

> I'm so in love with @antirez' ds4. Patched some slop on it to get better streaming, but I can just install a pi extension on a 128GB mac and it manages everything for me. No need for mlx-lm, ollama or lm studio or finagling pi configs.

[antirez (creator of Redis) built ds4](https://x.com/antirez/status/2052405820235678175) to run DeepSeek V4 Flash — a 284B MoE model — locally on high-end Macs through Metal, 2-bit quantization, and disk KV cache. [Bindu Reddy's take](https://x.com/bindureddy/status/2052982206344409242): *"Open source AI is literally unstoppable."* The local inference story keeps getting better — and the sovereignty argument gets stronger every time a cloud provider changes its pricing.

### Mitsuhiko on the Utah data center scale

[Armin also flagged](https://x.com/mitsuhiko/status/2052013442010148985) the sheer scale of Kevin O'Leary's approved Utah data center project:

> The scale of these data center buildouts is crazy. That Utah data center project is 40,000 acres (basically size of Liechtenstein). 9 GW of power, that is more than twice the total energy usage of all of Utah today. And somehow they want to produce all of that power on site.

The project was [approved by county commission despite opposition from hundreds of locals](https://x.com/MorePerfectUS/status/2051652965862092870). 2.5x the size of Manhattan, entirely off-grid, concentrated solar plus natural gas. The AI compute buildout is now a land-use and energy story, not just a chip story.

## Other Notable Threads

### Simon Willison on AI-run business experiments

[Simon Willison's take](https://x.com/simonw/status/2051788176071745592) on the AI-business-experiment trend:

> AI-run business experiments are interesting and fun up to the point where they waste the time of humans who haven't opted into the experiments — I think they need to keep their own human operators in the loop for outbound actions that affect other people.

A useful bright line: internal automation is fine, but the moment your AI agent sends an email, makes a call, or posts a comment that a human has to respond to, you need a human in the loop.

### Theo on AI economy misconceptions

[Theo's earlier thread](https://x.com/theo/status/2052114791045668894) responding to ThePrimeagen's AI economy video:

> I wanted to clear up some common misconceptions about the issues AI companies are facing. tl;dr — it's not just money, it's about compute.

The compute constraint is the thread that ties together the Utah data center, the token pricing wars, and why every provider is rate-limiting: there literally isn't enough GPU capacity to give everyone unlimited tokens at current model sizes.

### Jerry Liu on Skills vs MCP tools

[LlamaIndex published a comparison](https://x.com/llama_index/status/2032487366129233950) of Skills vs MCP tools for AI agents — MCP tools offer deterministic API calls with fixed schemas (precise, predictable, requires dev knowledge), while Skills offer natural-language-driven workflows (more flexible, less predictable). The framing maps onto the broader split in the coding agent space: structured tool-calling vs. freeform instruction-following.
