---
title: "Opus 4.8 Lands, Anthropic's $65B Raise & Dynamic Workflows"
date: "2026-05-29"
summary: "Anthropic turned May 28 into a triple-drop: **Claude Opus 4.8** (its strongest coding model yet, same price as 4.7), **Dynamic Workflows** in Claude Code (Claude writes an orchestration script on the fly and fans out a fleet of subagents), and a **$65B Series H at a $965B post-money valuation**. The timeline spent the next 24 hours stress-testing all three — early benchmarks are mixed-but-positive (SWE-bench Pro up, doc-understanding roughly flat, CursorBench a hair down), 4.8's new default-to-high effort is chewing through usage limits, and the 'slot machine' meme escaped containment with Theo shipping `npx slotslop`. Plus Simon Willison pours cold water on the viral 'Uber blew its AI budget' story."
tags:
  - Claude Opus 4.8 & Launch Day
  - Dynamic Workflows & Agent Orchestration
  - Anthropic's $65B Raise & Industry Economics
  - Usage Limits, Effort & the Slot Machine
  - Around the Ecosystem
---

# AI Roundup — May 29, 2026

Yesterday (May 28) was the kind of day Anthropic seems to enjoy: three launches stacked on top of each other. **Claude Opus 4.8** shipped, **Dynamic Workflows** landed in Claude Code as a research preview, and the company announced a **$65 billion Series H**. The accounts we track spent the following 24 hours pulling each one apart — running benchmarks, testing usage limits, and (inevitably) building joke tools. This dispatch leads with the model and works outward.

## Claude Opus 4.8 & Launch Day

**The release.** [Claude Opus 4.8](https://x.com/claudeai/status/2060042702150930686) "builds on Opus 4.7 with sharper judgment, more honesty about its own progress, and the ability to work independently for longer than its predecessors" — and crucially, ships at the same price as 4.7. Boris Cherny ([@bcherny](https://x.com/bcherny/status/2060048873440129073)) framed it as Anthropic's "strongest coding model yet: up on SWE-bench Pro (from 64.3 to 69.2) and noticeably more honest about its own work. It tells you when it's unsure and catches its own bugs instead of declaring victory early." Thariq ([@trq212](https://x.com/trq212/status/2060047996348432631)) added the vibe angle: "It's as smart as its benchmarks show but expresses and utilizes that intelligence in a warm and collaborative way."

**A notable API addition.** Per [swyx](https://x.com/swyx/status/2060044644193624253) and others, 4.8 lets developers "update Claude's instructions mid-task without breaking the prompt cache or routing the update through a [new turn]." Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko/status/2060099799488012383)) flagged this as the most interesting bit: "If we see more models supporting this (and tool changes) that might be very interesting" — steerable long-running agents without throwing away cache is a real ergonomics win for harness builders.

**The vibe checks and benchmarks rolled in fast — and they're mixed:**

- **"They could've just called it Opus 5."** Dan Shipper ([@danshipper](https://x.com/danshipper/status/2060043738752422304), via trq212) said Every had been testing for a week: "Beats GPT-5.5 on Senior Engineer bench… Opus 4.8 scores a 63 — a hair higher than GPT-5.5's 62, and a full 30 points higher than Opus 4.7."
- **Simon Willison's notes.** [@simonw](https://x.com/simonw/status/2060153712119885867) published his usual measured writeup, "plus pelicans riding bicycles for each of the five different thinking efforts" — a nice visual of how output changes across effort levels.
- **Doc understanding ≈ flat.** Jerry Liu's [ParseBench](https://x.com/jerryjliu0/status/2060196252642648427) found 4.8 "wasn't explicitly post-trained on visual document understanding": slight gains on tables/semantic-formatting/layout, slight regressions on charts and content faithfulness, and a small price/page increase. Verdict: "Lots of alpha left in teaching LLMs to read docs like humans do."
- **CursorBench down a touch.** Theo ([@theo](https://x.com/theo/status/2060172445592789064)) noted Cursor's update shows 4.8 is "more efficient, but performs slightly worse than Opus 4.7 within margin of error."

**Bonus nuance on the "wrong answers cost more" thesis.** Theo had argued [incorrect LLM responses are pricier than correct ones](https://x.com/theo/status/2060136670947893740) (models loop and burn tokens when stuck). Then he [had Datacurve check](https://x.com/theo/status/2060153250167615615) it against DeepSWE token data and walked it back: "I was wrong. Bad models use way more tokens in fail cases, but SOTA models are much closer. GPT-5.5 used ~7% *more* tokens on correct answers." A good reminder that the cheap-intuition often doesn't survive the data.

## Dynamic Workflows & Agent Orchestration

The launch that may matter most to agentic-coding folks: [Dynamic Workflows](https://x.com/ClaudeDevs/status/2060044853279617150) (research preview). "Claude writes an orchestration script on the fly, then spins up a large fleet of coordinated subagents in parallel to take on your most complex tasks. Use the word 'workflow' in a prompt to get started."

Sid ([@sidbid](https://x.com/sidbid/status/2060047508806746142)) ran a [tips thread](https://x.com/sidbid/status/2060047508806746142) (1,882 likes, 346K views) clarifying the design:

- **It's not Agent Teams.** "Dynamic Workflows allow Claude to write a *deterministic script* up front to orchestrate agents" — the distinction is the persisted, inspectable script.
- **Combine with `/goal`** — but "be warned it may guzzle tokens."
- **The animation was a bcherny ~20-minute special**, in case you wondered where the eng time went.

Bcherny pitched the killer use case: [big migrations and refactors](https://x.com/bcherny/status/2060048879274414090), "some of a team's most important work, and the easiest to push off… With dynamic workflows, Claude can now land that kind of work in days or weeks." His usage advice: [default to auto mode](https://x.com/bcherny/status/2060048877944778995) so it doesn't stall on permissions, and "save it for your biggest jobs: migrations, refactors, perf optimization, batch bug fixes" because it's token-intensive. Blog: [Introducing Dynamic Workflows](https://claude.com/blog/introducing-dynamic-workflows).

The replies surfaced the genuinely interesting part — **the orchestration script being a real, cat-able file:**

> "Multi-agent traces have been opaque — when a fleet forks weird you've had nothing to read. cat-able script means you can diff between runs and actually see why this one took a different path." — [@LLMERDOTCOM](https://x.com/LLMERDOTCOM/status/2060111100616855976)

> "The on-the-fly orchestration script is the piece I've been waiting for. In n8n I've had to hardcode the subagent routing logic, which breaks the moment task complexity changes. Dynamic workflow generation that actually persists state between agent steps is the real unlock." — [@RL_Asaf](https://x.com/RL_Asaf/status/2060207489128231031)

trq212 says an article on using 4.8 *with* workflows is [coming soon](https://x.com/trq212/status/2060047996348432631): "I'm hooked."

## Anthropic's $65B Raise & Industry Economics

The third drop: Anthropic [raised $65 billion in Series H](https://x.com/AnthropicAI/status/2060061347522433422) at a **$965 billion post-money valuation**, led by Altimeter, Dragoneer, Greenoaks, and Sequoia. Jerry Liu's deadpan ([@jerryjliu0](https://x.com/jerryjliu0/status/2060068247773614238)): "if you replace billions with millions, this sounds like any other high-growth startup fundraise announcement 😉".

The number that makes the valuation make sense is revenue velocity. Simon Willison [highlighted](https://x.com/simonw/status/2060170727433830536) Axios's Jim VandeHei saying he "could not find *any* company — in any industry, in any era — that has scaled organic revenue this quickly" — and that was reported when Anthropic was at $30B run-rate; they're now cited at **$47B**. Simon's earlier take that [April 2026 was when both OpenAI and Anthropic found product-market fit](https://x.com/simonw/status/2059675701838774352) reads as the throughline here.

**Counter-narrative, debunked.** Simon also [dug into the viral "Uber blew its AI budget and was disappointed" story](https://x.com/simonw/status/2060209010486493500) and found it "built on very shaky foundations" — a useful corrective as AI-disappointment stories start circulating to balance the hype. ([Sources](https://x.com/simonw/status/2060209089620431295).)

## Usage Limits, Effort & the Slot Machine

If there's a downside theme, it's tokens. **4.8 defaults to "high" effort** ([bcherny](https://x.com/bcherny/status/2060048875918930045): "spends about the same tokens as 4.7's default on coding but performs better"; switch to **xhigh** for hard async work). Anthropic raised Claude Code rate limits to compensate — but the timeline still felt it:

- Theo [resubbed at the $100 tier to try 4.8 and the new "ultracode" feature](https://x.com/theo/status/2060120708815139241) and "hit my limits in a single prompt." He later found the [$200/20x plan stretches ~7x further](https://x.com/theo/status/2060149011689222196) on the 5-hour limits.
- A widely-shared quip ([reposted by Theo](https://x.com/rezoundous/status/2060107620153975020)): "Opus 4.8 is insane guys. It one shotted my session usage limit."
- LLMJunky [pushed back on Anthropic's Fast mode pricing](https://x.com/LLMJunky/status/2060103493755482183): "We need to rally Anthropic to allow fast mode to just use more usage, not charge credits. That kinda defeats the purpose."

The "slot machine" framing — picking model/agent/effort feels like pulling a lever — escaped into a real tool. Theo shipped **[`npx slotslop`](https://x.com/theo/status/2060199299632472494)** (1,295 likes), a CLI that randomizes your agent + model + effort for that Claude Code dopamine hit, built "with Claude Code, Opus 4.8, OpenTUI and a shitload of back and forth." The replies wrote themselves:

> "Love that we've reached 'spin the wheel to pick the AI that spins the wheel for you' era of development. meta is getting dangerously recursive." — [@deepakThamizhK](https://x.com/deepakThamizhK/status/2060214921829450054)

Theo's bafflement is the best part: "Building this somehow knocked my usage cost for the day DOWN? Really confused about this lol."

## Around the Ecosystem

- **pi 0.76 ships + trusted publishing.** Armin Ronacher's team [pushed pi 0.76.0](https://x.com/mitsuhiko/status/2059730280299012347) with transport-issue workarounds, then [migrated to trusted publishing live on stream](https://x.com/mitsuhiko/status/2060121548879495461) ("if you want to see things fall apart, watch live"). He also clocked a fun milestone: a [pi session ran for 20 minutes on deepseek-flash and he didn't notice](https://x.com/mitsuhiko/status/2059662447670153569).
- **steipete's OpenClaw grind continues.** Peter Steinberger shipped [octopool](https://x.com/steipete/status/2059989719870558309) — a Cloudflare Worker that pools a team's GitHub PATs after hitting rate limits one too many times — and is [rebuilding leaner deps](https://x.com/steipete/status/2060133435423789092) (proxyline, fs-safe). The [OpenClaw ecosystem page](https://openclaw.ai/ecosystem) is live: "build the thing that builds the thing."
- **Cursor on how agents change SWE.** Lee Robinson ([@leerob](https://x.com/leerob/status/2060063336385966490)) "yapped for 15 minutes about new Cursor data" on how coding agents are reshaping software engineering — and continues to argue you should spend *more* time thinking about code, not less.
- **Matt Pocock reviews Cursor's nuke button.** Pocock dug into Cursor's [`/thermo-nuclear-code-review`](https://x.com/mattpocockuk/status/2059934011124826124) ("the TOUGHEST AI code review possible") and floated a [testing heuristic](https://x.com/mattpocockuk/status/2059955079067713960): "the fewer test seams you have, the…" — worth a read for the TDD-with-agents crowd.
- **LlamaIndex's "is grep all you need?"** A [companion post](https://x.com/llama_index/status/2059983115372679417) to the LiteParse launch argues lexical search breaks down once agents face millions of PDFs/spreadsheets/scans in enterprise settings — grep shines for small codebases, less so at document scale.
