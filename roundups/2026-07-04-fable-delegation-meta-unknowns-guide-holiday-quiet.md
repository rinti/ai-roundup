---
title: "Fable's Delegation Meta, Thariq's Unknowns Guide & a Holiday-Quiet Timeline"
date: "2026-07-04"
summary: "Independence Day slowed the timeline to a simmer, but three pieces of craft-level content stood out. Simon Willison blogged ['Fable's judgement'](https://simonwillison.net/2026/Jul/3/judgement/) — a persistent instruction that tells Fable to spawn cheaper subagents for coding tasks while keeping judgment in the main loop, reporting his Fable allowance now 'shrinking less quickly.' Thariq published ['A Field Guide to Fable: Finding Your Unknowns'](https://x.com/trq212/status/2073101078145724589) — eleven worked examples showing how to discover what you don't know *before* prompting, built as interactive HTML artifacts. And Willison's quieter July 2 post on [using DSPy to evaluate Datasette Agent's SQL prompts](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/) showed systematic prompt optimization catching a real bug: the system prompt's 'don't call describe_table' advice was causing column-name guessing loops. Meanwhile the Fable subscription countdown hit T-minus-3 days, Sakana's Fugu multi-model orchestrator drew mixed early reviews, and Steipete defended OpenClaw's independence after a wave of open-source vitriol."
tags:
  - The Delegation Meta
  - Thariq's Unknowns Guide
  - Prompt Engineering as Science
  - Fable Countdown & Ecosystem
  - Also Worth a Look
---

# AI Roundup — July 4, 2026

*A quiet holiday edition — the US timeline went to the barbecue, but the craft-level posts kept coming.*

## The Delegation Meta

The planner–coder–judge pattern from [yesterday's Hashimoto thread](https://x.com/mitchellh/status/2072715852944957531) found its next evolution: let Fable itself decide when to delegate.

**Simon Willison's "Fable's judgement."** [Blog post (July 3)](https://simonwillison.net/2026/Jul/3/judgement/): Willison added a persistent instruction to his Claude Code setup — *"For all coding tasks use your judgement to decide an appropriate lower power model and run that in a subagent."* The approach: Fable evaluates every coding task, spawns a subagent with Sonnet for substantive implementation or Haiku for trivial/mechanical edits, then reviews the result in the main loop before committing. Design, auditing, data synthesis, and anything judgment-heavy stays with Fable. The reported result: "a ton of work done and my Fable allowance shrinking less quickly than before." The tip came out of a fireside chat with the Claude Code team, where the advice was to let Fable use its own judgement on testing strategy rather than dictating specifics — the model knows what matters if you let it decide. This pairs directly with [Armin Ronacher's observation from yesterday](https://x.com/mitsuhiko/status/2072512908047892745) that "harness really matters" — delegation *is* harness design.

**The emerging stack.** Between Hashimoto's explicit planner–coder–judge pipeline, Tyler Laprade's [`fableplan` override](https://x.com/TylerCLaprade/status/2072759988146061669), Theo's [T3 Code cross-provider subagents](https://x.com/theo/status/2072869036615155735), and now Willison's self-delegating Fable — the pattern is converging fast: **use the frontier model for judgment, route everything else down.** The only question left is whether the harness or the human decides when to route.

## Thariq's Unknowns Guide

**"A Field Guide to Fable: Finding Your Unknowns."** [Thariq (July 3)](https://x.com/trq212/status/2073101078145724589): *"I've found the most important part of working with Fable is discovering my own unknowns so I can prompt it better."* The article — [hosted as interactive HTML artifacts](https://thariqs.github.io/html-effectiveness/unknowns/) — walks through eleven self-contained examples for discovering unknowns before, during, and after implementation. Each page shows the exact prompt at the top and the artifact Claude produced below it. The central concept: *"the map is not the territory — the gap between them is your unknowns."* This is the complement to yesterday's [Geoffrey Litt "understanding is the bottleneck" argument](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html) — Litt says you need understanding to participate; Thariq says here's how to *get* understanding by surfacing what you don't know you don't know.

This continues Thariq's HTML-as-the-new-markdown thesis from his [Lenny's Newsletter piece](https://www.lennysnewsletter.com/p/html-is-the-new-markdown-how-anthropic) — the artifacts themselves are the argument.

## Prompt Engineering as Science

**Simon Willison uses DSPy to optimize Datasette Agent's SQL prompts.** [Blog post (July 2)](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/): Willison applied Stanford's DSPy framework to systematically evaluate and improve the system prompts used by Datasette Agent's SQL-generation feature. Rather than hand-tuning prompts by feel, DSPy runs automated evaluation loops. Fable chose to test using GPT 4.1 mini and nano, and found several promising directions — the most actionable: the schema listing gives only table names, and the prompt's *"don't call describe_table if you already have the information"* advice was causing column-name guessing and error-retry loops in baseline traces. The fix: either include column names in the schema listing or soften the advice. This is the methodical version of what most people do by vibes — and the fact that it caught a real prompt-induced bug loop makes the case that prompt optimization deserves tooling, not just intuition.

**Also from Willison (July 2):** his [llm-coding-agent 0.1a0](https://simonwillison.net/2026/Jul/2/llm-coding-agent/) shipped with edit/execute/list tools, `--yolo` and `--allow "pytest*"` permission flags, and a Python `CodingAgent` API. Already on PyPI: `uvx --prerelease=allow --with llm-coding-agent llm code`. In a demo, he ran it in yolo mode to create a SwiftUI CLI app for displaying time in ASCII art — GPT-5.5 ultimately delivered a working app despite initially noting SwiftUI wasn't suitable for true CLI applications.

## Fable Countdown & Ecosystem

**T-minus-3 to the subscription cliff.** The July 7 Fable cutoff continues to dominate the discourse. [Thariq's reassurance from July 2](https://x.com/trq212/status/2072814903170408784) — *"we aim to restore Fable as a standard part of our subscriptions as soon as capacity allows"* — generated 1.08M views but hasn't calmed the replies. [Boris Cherny endorsed Fable as *"the best model I have used for coding, by a wide margin"*](https://x.com/bcherny/status/2064402671898075579), noting it enables *"less prompts and steers, more efficient token use, better code quality, better tool use, more intelligent self-verification, longer running sessions."* The [Bleeping Computer reporting](https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/) confirmed the move to usage credits isn't intended to be permanent, but Anthropic has shared no timeline or capacity targets.

**Sakana Fugu draws mixed early reviews.** [Sakana AI's Fugu](https://sakana.ai/fugu/) — a multi-agent orchestration system delivered as a single foundation model that dynamically routes to specialized models from a pool — launched claiming benchmark parity with Fable and Mythos. [LLMJunky's early verdict](https://the-decoder.com/sakana-ais-fugu-orchestrates-multiple-llms-to-match-anthropics-fable-and-mythos-benchmarks/) was harsh: he blew through his entire five-hour quota on the $20 plan with a single prompt, and a ThreeJS coding task came back *"notably worse than GPT 5.5,"* needing seven or eight fix rounds. Code reviews were a bright spot, roughly matching Opus 4.8 or GPT 5.5. The $200/month plan reportedly gives less than three hours a week — a tough value prop when Fable is still on subscriptions for three more days.

## Also Worth a Look

- **Steipete defends OpenClaw's independence.** [Peter Steinberger (July 1)](https://x.com/steipete/status/2071972239734616146) pushed back on open-source vitriol: *"OpenClaw wasn't acquired by OpenAI and isn't an OpenAI product. It's an open, independent project under the OpenClaw Foundation."* OpenAI sponsors token usage; Steinberger works there. The [iOS 26 Liquid Glass PR](https://github.com/openclaw/openclaw/pull/98452) — modernizing the app with native Liquid Glass chrome, updated snapshot coverage, and raised Xcode floor to 26.x — also merged this week.

- **Theo's local inference fleet architecture** remains the tease of the week. His AI coding workflow has undergone a [complete transformation](https://finance.biggo.com/podcast/c7c3cb2193d150d2) — he's running a multi-machine on-prem inference cluster with a custom `ccusagefleet` command that polls all machines on his network to aggregate inference volume, using a hybrid of cheap cloud inference for capacity and local inference for latency and control. Detailed technical walkthrough was promised for the content week starting June 30 but hasn't dropped yet.

- **Claude Sonnet 5 now default for Free and Pro.** Anthropic's [June 30 launch](https://www.anthropic.com/news/claude-fable-5-mythos-5) made Sonnet 5 the default model for every Free and Pro user starting July 1. It scores 63.2% on SWE-bench Pro equivalent — a 5-point improvement over Sonnet 4.6, with a 6-point gap to Opus 4.8.

- **State of AI survey results.** The [2026 State of Web Dev AI survey](https://survey.devographics.com/en-US/survey/state-of-ai/2026) (7,258 responses) found devs now generate **54% of their code with AI** (up from 28% last year). Claude Code leads in positive sentiment among coding agents at 42.3%. Hallucinations remain the top pain point. [Swyx helped promote the survey](https://x.com/theo/status/2041715755306389780) earlier in the cycle.

- **Karpathy at Anthropic.** For anyone who missed it in the Sequoia Ascent 2026 discussion: [Karpathy joined Anthropic on May 19](https://x.com/karpathy/status/2056753169888334312) to lead a team focused on using Claude to accelerate pretraining research. His Sequoia fireside chat framing — *"vibe coding raised the floor, agentic engineering raises the ceiling"* — continues to be the most-cited line of the month.
