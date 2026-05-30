---
title: "Opus 4.8 Aftermath, the Trillion-Dollar Race & Autotriage Agents"
date: "2026-05-30"
summary: "Day two of the Opus 4.8 rollout: the model lands in **GitHub Copilot** same-day, **Dynamic Workflows** gets its first real-world stress tests (Klarna finds dead code at scale; one tester watches 47 parallel agents partially fail over five hours), and deeper benchmark dives confirm 4.8 is **4x more honest about its own mistakes** than 4.7. The bigger story may be the balance sheet — Anthropic's **$65B Series H at $965B** officially makes it **more valuable than OpenAI** for the first time, with a **$47B revenue run rate** that has analysts calling it the fastest organic revenue scale in any industry, ever. steipete ships an **autotriage skill** that lets Codex autonomously close issues matching a project's VISION.md, and endorses **cmux** as his preferred terminal for multi-agent workflows — Lawrence Chen (cmux creator) credits steipete's 'just talk to your agents' philosophy. Matt Pocock drops a deep-dive video on his **/handoff skill** (an alternative to /compact for multi-agent context passing) and pushes the **AI Coding for Real Engineers v2** cohort starting June 1. Armin Ronacher flags Opus 4.8's **mid-conversation system messages** as the most interesting API addition for harness builders."
tags:
  - Opus 4.8 Day Two & Real-World Testing
  - Dynamic Workflows Under Load
  - Anthropic vs OpenAI — The Trillion-Dollar Race
  - Autotriage, cmux & Multi-Agent Workflows
  - Skills, Handoff & Pocock's Cohort v2
  - Armin on Mid-Conversation System Messages
---

# AI Roundup — May 30, 2026

Yesterday's triple-drop (Opus 4.8, Dynamic Workflows, $65B raise) dominated the timeline. Today the conversation shifts from announcements to stress tests: people are running 4.8 on real codebases, pushing Dynamic Workflows past its comfort zone, and digesting what a near-trillion-dollar Anthropic means for the ecosystem. Meanwhile, the agentic-coding crowd keeps building — autotriage, better terminals, and skills that pass context between agents instead of compacting it away.

## Opus 4.8 Day Two & Real-World Testing

**GitHub Copilot ships 4.8 same-day.** Claude Opus 4.8 is [now generally available for GitHub Copilot](https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot/) Pro+, Business, and Enterprise users — a notably fast turnaround that signals how central Claude has become to GitHub's multi-model strategy.

**The honesty number holds up.** Multiple independent testers are validating Anthropic's claim that 4.8 is roughly **4x less likely than 4.7 to let flaws in its own code pass unremarked**. The [INCRYPTED deep-dive](https://incrypted.com/en/ai-can-doubt-testing-claude-opus-4-8/) frames this as "the AI that can doubt" — 4.8 flags uncertainty more often and makes fewer unsubstantiated claims. For agentic loops where a false "done" costs you a full debug cycle, this is the real upgrade.

**Extended benchmarks solidify the picture:**
- **SWE-bench Pro:** 69.2% (up from 64.3 on 4.7, well ahead of GPT-5.5's 58.6%)
- **USAMO 2026 math:** 96.7% (up from 69.3% — a 27-point jump)
- **GraphWalks long-context F1 at 1M tokens:** 68.1% (up from 40.3%)
- **Artificial Analysis Intelligence Index:** 61.4, leading the index (+4.1 over 4.7, +1.2 over GPT-5.5)

Per [Artificial Analysis](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks), Opus 4.8 is now the #1 model on their composite index. The math and long-context jumps are particularly striking — these aren't incremental.

**Simon Willison's measured take.** Willison published his [usual thorough notes](https://simonwillison.net/2026/May/28/claude-opus-4-8/) on the release, calling it "a modest but tangible improvement" (borrowing Anthropic's own framing). He highlighted **mid-conversation system messages** as the sleeper feature — more on that below.

## Dynamic Workflows Under Load

The research preview is getting its first real stress tests, and the results are both exciting and sobering:

**Klarna's discovery win.** Alessio Vallero (Senior Engineering Manager at Klarna) described Dynamic Workflows as especially valuable for **discovery tasks across large codebases** — specifically citing dead-code identification and cleanup opportunities that traditional static analysis missed. When your codebase is large enough that no human has a complete mental model, fan-out search becomes genuinely useful.

**The 47-agent failure.** One early tester [described a session](https://www.technology.org/2026/05/29/anthropic-claude-opus-4-8-dynamic-workflows/) where Claude attempted to launch 47 concurrent agents, successfully launched 25, and made errors over a five-hour run that required human review to catch. This is the expected failure mode for a research preview — the orchestration script is real and inspectable (you can `cat` it), but the error surface grows with the number of subagents.

**The Bun→Rust showcase.** The headline case study remains Jarred Sumner using Dynamic Workflows to help port Bun from Zig to Rust: **750,000 lines of Rust**, 99.8% test suite passing, 11 days from first commit to merge. Anthropic [clarified](https://securitybrief.co.nz/story/anthropic-launches-dynamic-workflows-in-claude-code) the version is not yet used in production, but as a proof of scale it's hard to argue with.

**bcherny's usage advice** (from yesterday, still circulating): save Dynamic Workflows for your biggest jobs — migrations, refactors, perf optimization, batch bug fixes — because it's token-intensive. Default to auto mode so it doesn't stall on permissions. [Blog: Introducing Dynamic Workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code).

## Anthropic vs OpenAI — The Trillion-Dollar Race

The $65B raise got the headlines yesterday. Today the analysis pieces landed, and the throughline is: **Anthropic is now worth more than OpenAI**.

[CNBC](https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html), [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-28/anthropic-raises-at-965-billion-valuation-eclipsing-openai), and [Axios](https://www.axios.com/2026/05/28/anthropic-ai-fundraising-openai) all frame it the same way: Anthropic's **$965B post-money** overtakes OpenAI's **$852B** from their March round. The revenue velocity makes it defensible — **$47B run rate**, up from $30B earlier this year, up from $10B in annual revenue last year.

Brad Gerstner (Altimeter Capital, round lead): the round *"resets the entire frontier-lab cost-of-capital benchmark."* Sequoia's take: *"We've watched a fifteen-year SaaS playbook compress into thirty months. The IPO is the formality."*

**IPO season approaches.** Multiple reports suggest SpaceX could go public as early as June, OpenAI targeting a September window, with Anthropic expected to follow. The private-market valuation race may be moot within months.

**Simon Willison's PMF thesis** (from May 27, still being discussed): [he argued](https://x.com/simonw/status/2059675701838774352) that April 2026 was the month both OpenAI and Anthropic found genuine product-market fit — *"2x API pricing on the latest models coinciding with enterprise deals locking big companies into those prices."* He explicitly discounted ChatGPT's earlier consumer growth: *"because almost nobody was actually paying for it!"*

Jerry Liu's deadpan from yesterday's announcement captures the mood: *"if you replace billions with millions, this sounds like any other high-growth startup fundraise announcement 😉"* ([tweet](https://x.com/jerryjliu0/status/2060068247773614238)).

## Autotriage, cmux & Multi-Agent Workflows

**steipete ships autotriage.** Peter Steinberger built an [autotriage skill for Codex](https://x.com/steipete/status/2058240758801420530) that reads VISION.md from his repos and autonomously works on issues/PRs that: fit the project vision, are inferrable in code with high confidence, have a clear fix, and can be live tested. This is the next step beyond auto-review — issues that meet a confidence threshold get *worked on*, not just triaged. The "build the thing that builds the thing" philosophy made concrete.

**cmux gets the steipete endorsement.** Peter [endorsed cmux](https://x.com/steipete/status/2058093406874689770) as his coding terminal, describing his current split: **Codex Mac app** for knowledge work, learning, reading; **cmux + Codex CLI** for coding. Lawrence Chen (cmux creator) [amplified this](https://x.com/lawrencecchen/status/2058117720017932607), crediting steipete's philosophy: *"You just have to talk to your agents. So it's super important to know when and where an agent wants to talk to you!"* The blue notification pane in cmux — showing which agent needs attention — is the UX primitive that makes multi-agent development feel manageable rather than chaotic.

**cotypist for autocomplete everywhere.** steipete also [recommended cotypist](https://x.com/steipete/status/2057040636449116222) — autocomplete that works across every app, not just your IDE. The stack picture emerging: cotypist for inline completions, cmux for agent orchestration, Codex for the heavy lifting, CodexBar for usage tracking across 16 providers.

## Skills, Handoff & Pocock's Cohort v2

**The /handoff deep-dive.** Matt Pocock published a [video walkthrough](https://x.com/mattpocockuk/status/2057411932710166657) of his /handoff skill — an alternative to /compact that preserves more context when passing work between agents. The workflow: *"Think of an idea, handoff to another agent to implement. Grill, handoff to prototype, handoff BACK."* Where /compact throws away context to fit the window, /handoff serializes it into a structured document that another agent can pick up cold. For anyone running multi-session workflows, this solves the "agent amnesia" problem at the skill level.

**AI Coding for Real Engineers v2 launches June 1.** Pocock [announced](https://x.com/mattpocockuk/status/2056447804537741327) the second cohort of his AI coding course, renamed from "Claude Code for Real Engineers" to ["AI Coding for Real Engineers"](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w) — now agent-agnostic. 2,500+ students in v1 built real apps with AFK agents and software fundamentals. V2 adds support for any coding agent, updated skills, and live office hours through June 12. The rename reflects the market: the techniques matter more than the specific harness.

**Pocock's /grill-me shows up in a Google demo.** In a delightful crossover, Pocock [noted](https://x.com/mattpocockuk/status/2056817486255755726) that Google's Antigravity product demo used his /grill-me skill: *"Clearly Antigravity is not SOTA, still using /grill-me and not /grill-with-docs. Side note — pretty wild to see a skill I cooked up being used in a Google product demo."* The skills repo is now at 23K+ stars.

## Armin on Mid-Conversation System Messages

The most interesting API addition in Opus 4.8, per the harness-building crowd: **mid-conversation system messages**. Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko/status/2060099799488012383)) flagged it directly: *"If we see more models supporting this (and tool changes) that might be very interesting."*

The mechanic: Opus 4.8 accepts system messages immediately after a user turn in the messages array, letting you append updated instructions mid-conversation without restating the full system prompt. This preserves prompt cache hits on earlier turns and reduces input cost on agentic loops. For harness builders running long sessions (Pi, OpenClaw, cmux), this is a real ergonomics win — you can steer a running agent without paying the cache-invalidation tax.

Armin's startup Earendil continues building Pi (the agent toolkit) in the open. Pi 0.76.0 shipped with transport workarounds for Codex in Asia and Europe, and the team [moved their /review extension](https://x.com/mitsuhiko/status/2044016195154665979) into a public repo. The broader Earendil thesis — open agent tooling with durable execution on Postgres — keeps accumulating surface area.

## The Uber AI Budget Story (Continued)

The viral "Uber burned through its entire 2026 AI budget in four months" story continues to circulate. The core facts: Uber rolled out Claude Code to its engineering org in December 2025; by March 2026, 84% of engineers were classified as agentic coding users (up from 32% in February). COO Andrew Macdonald said on a podcast: *"If you're not actually able to draw a direct line to how much useful features and functionality you're shipping to your users, that trade becomes harder to justify."*

Simon Willison [dug into the sourcing](https://x.com/simonw/status/2060209010486493500) yesterday and found it *"built on very shaky foundations"* — a useful corrective as these AI-disappointment narratives become a genre unto themselves. The truth is probably more boring: usage grew faster than the budget assumed, which is a planning failure, not a technology failure.

## Quick Hits

- **LlamaIndex's LiteParse v2** (Rust rewrite) continues drawing benchmark pushback — two-column PDF reading order is still a known weakness, but the 100x CPU speed gain is shifting the build-vs-buy math for document pipelines. ([tweet](https://x.com/jerryjliu0/status/2059710330016817501))
- **Code with Claude London** (May 19) shipped two notable announcements still rippling through the ecosystem: **self-hosted sandboxes** (public beta) and **MCP tunnels** (research preview) for Claude Managed Agents. Self-hosted sandboxes let you run agent tool calls on your own infra; MCP tunnels connect agents to private MCP servers without exposing them to the public internet. ([announcement](https://claude.com/blog/claude-managed-agents-updates))
- **Theo's `npx slotslop`** — yesterday's joke CLI that randomizes your agent + model + effort — hit 1,295 likes and spawned the quote of the day: *"Love that we've reached 'spin the wheel to pick the AI that spins the wheel for you' era of development."* ([tweet](https://x.com/theo/status/2060199299632472494))
- **LLMJunky on Fast mode pricing**: *"We need to rally Anthropic to allow fast mode to just use more usage, not charge credits. That kinda defeats the purpose."* The token-economics debate isn't going away. ([tweet](https://x.com/LLMJunky/status/2060103493755482183))

---

*Scanned 11 accounts; `@karpathy` had no new posts in the 24h window (quiet first full weeks at Anthropic). Coverage focuses on activity from May 29–30 and continuing discussions from the Opus 4.8 launch.*
