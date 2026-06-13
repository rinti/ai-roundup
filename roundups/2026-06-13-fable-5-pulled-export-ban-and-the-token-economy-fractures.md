---
title: "Fable 5 Pulled: Export Ban, Boris Cherny's Agent Fleet & the Token Economy Fractures"
date: "2026-06-13"
summary: "The US government dropped a bombshell on June 12: Commerce Secretary Howard Lutnick ordered Anthropic to suspend all access to Fable 5 and Mythos 5 under export controls, citing a jailbreak demonstration. Anthropic complied by disabling both models for **everyone**, not just overseas users — three days after they'd already apologized for secret capability guardrails. Meanwhile Boris Cherny's Fortune Brainstorm Tech run produced headline after headline: he hasn't written code by hand in 8 months, manages tens of thousands of agents daily, and Claude Code is on a $2.5B ARR trajectory. The community keeps reckoning with the Fable pricing cliff (June 22): Theo wants a $1,000/month tier, Jerry Liu says it's a packaging problem, and swyx coined **\"Loopcraft\"** — the Salty Lesson for agents. Simon Willison shipped Datasette Agent 0.2a0 and called Fable **\"relentlessly proactive,\"** steipete's 5-minute Codex maintenance loop hit 417K views, and LlamaIndex presented ParseBench at CVPR."
tags:
  - Fable 5 Export Ban
  - Boris Cherny & Claude Code
  - The Token Economy
  - Loopcraft & Agent Harnesses
  - Tools & Releases
  - Other Bits
---

# AI Roundup — June 13, 2026

## Fable 5 Export Ban — The Big Story

**US government orders Anthropic to pull Fable 5 and Mythos 5.** On June 12 at 5:21pm ET, [Commerce Secretary Howard Lutnick sent a letter to Dario Amodei](https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html) ordering the suspension of all access to both models for foreign nationals under export controls. Rather than trying to enforce nationality-based access, [Anthropic disabled both models for everyone](https://www.anthropic.com/news/fable-mythos-access). The letter didn't detail the specific national security concern, but [an administration official told Axios](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) the action came after another company demonstrated a jailbreak on Mythos. Anthropic says it reviewed the technique and found it identified only "a small number of previously known, minor vulnerabilities." All other Claude models remain unaffected. This lands just three days after Anthropic's [apology for secret capability limits](https://gizmodo.com/anthropic-apologizes-for-one-of-the-guardrails-on-its-fable-5-model-and-will-change-it-2000770365) — the model was covertly throttling responses it believed were AI distillation attempts, with no user notification. Under the revised policy, queries that trigger the distillation guardrail now fall back to Opus 4.8 with a visible notification.

**Context:** Fable 5 launched June 9 as [Anthropic's first public Mythos-class model](https://www.anthropic.com/news/claude-fable-5-mythos-5) — 80.3% on SWE-Bench Pro, 1M token context, $10/$50 per million input/output tokens, designed for agentic tasks that run for days. It was included free on Pro/Max/Team plans through June 22. Now that window is even shorter — or possibly over entirely depending on how the export ban plays out.

## Boris Cherny's Fortune Brainstorm Tech Run

Boris Cherny ([@bcherny](https://x.com/bcherny)), head of Claude Code, had a string of Fortune interviews from Brainstorm Tech in Aspen that produced the week's most quotable material:

**"I haven't written a line of code by hand in 8 months."** [Fortune, June 11](https://fortune.com/2026/06/11/anthropic-claude-boris-cherny-doesnt-write-code-by-hand-anymore/) — He orchestrates fleets of AI agents that write, review, and conceive features autonomously. Claude Code now has subagents that are other Claudes in a hierarchical coordination structure.

**"Some days it is thousands, or tens of thousands."** [Fortune, June 8](https://fortune.com/2026/06/08/anthropics-boris-cherny-creator-of-claude-code-says-there-are-days-he-manages-tens-of-thousands-of-ai-agents-at-once/) — On the scale of agent management: "This morning I was managing maybe a few hundred. Some days it is thousands, or tens of thousands... the role of a builder is just totally changing." Claude Code is 100% written by Claude Code, and code output at Anthropic has grown 8x since the start of 2026.

**"You're comparing AI costs to the wrong thing."** [Fortune, June 9](https://fortune.com/2026/06/09/boris-cherny-claude-code-says-comparing-ai-costs-to-wrong-thing-anthropic/) — Cherny reframes the token-cost debate: stop comparing to zero (doing it yourself for free), compare to the value of what gets built. Claude Code is on a [$2.5B annualized revenue run rate](https://tech.yahoo.com/ai/claude/articles/anthropic-boris-cherny-creator-claude-205645586.html).

**Anthropic hiring bar: low ego is a must.** [Fortune, June 10](https://fortune.com/2026/06/10/architect-behind-claude-code-boris-cherny-reveals-three-things-anthropic-looks-for-good-hire-low-ego-must/) — Three traits Anthropic looks for: technical depth, low ego, and the ability to work with AI agents as collaborators rather than tools.

## The Token Economy & the June 22 Cliff

**Theo names his price.** [Theo](https://x.com/theo/status/2065306215312478322): "If Anthropic put out a $1000/month tier that gets 5x the $200 tier limits and also lets us keep Fable access, I'd do it in a heartbeat" — context: he's [burned over $10K in tokens in 11 days](https://x.com/theo/status/2065254673985294785), and Fable leaves subscriptions on June 22. The replies split between "shut up and take my money" and anxiety about [two-tier AI](https://x.com/pepedafrok/status/2065310587286966592): "now having money will actually be the same as having intelligence."

**Theo crowdsources the tokenmaxxing syllabus.** ["What advice do you have for someone new to tokenmaxxing?"](https://x.com/theo/status/2065253147686351348) pulled a useful playbook. Consensus pattern — Fable as the brain, cheap tokens as the hands: use Fable as planner/orchestrator/reviewer, not a pair-programmer; frontier tokens for judgment, cheap tokens for execution.

**Theo on the Claude Code vs Codex divide.** On his [t3.gg podcast](https://finance.biggo.com/news/2ce178fdcae7e994), Theo argued Claude Code is "engineered like a slot machine — optimized for Twitter screenshots and token-burning flash rather than pure productivity," while Codex takes a minimal-interface approach and Cursor is building verified cloud sandbox workflows. He also [questioned](https://x.com/theo/status/2065313488747233618) whether Karpathy joined Anthropic just to use Mythos for ML research without restrictions.

**Jerry Liu: it's a packaging problem.** [Jerry Liu](https://x.com/jerryjliu0/status/2065294273873063950) on Fable: "clearly the best model ever released, but imo the pushback around it is a product packaging issue" — fix auto-routing so users don't manually manage model tiers and the anger evaporates. Counterpoint: auto-routing is scary for automation — "recurring jobs need pinned model behavior."

**OpenAI counter-programs.** Codex users can now [save and bank rate-limit resets](https://x.com/theo/status/2065250261493600416) — Theo's reaction: "This might actually be a bit too generous. I am getting suspicious."

## Loopcraft & Agent Harnesses

**swyx coins the Salty Lesson.** [Latent Space op-ed: "Loopcraft: The Art of Stacking Loops"](https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking) — Sutton has the Bitter Lesson for models; agents now get the Salty Lesson: "Don't fix things yourself... If you don't figure out how to do this, don't be salty when you lose to those that do." He followed up: ["One might argue the entire game of the next century is to be able to stack loops as effectively as possible."](https://x.com/swyx/status/2065307558198567206) Best reply: the skill is knowing which loops to *collapse*, not just which to stack.

**swyx on the vibe shift.** Zooming out on how far things have moved: ["in Feb 2025 @soumithchintala was talking about his dream of personal, local, private agents, most people didn't believe him. It's June 2026 and @pewdiepie has just released his vibecoded @opencode wrapper"](https://x.com/swyx/status/2061256096719970337) — referring to PewDiePie's [Odysseus](https://dev.to/jenueldev/pewdiepie-built-an-open-source-ai-workspace-and-the-point-is-bigger-than-the-hype-579m), a self-hosted AI workspace that hit ~66K GitHub stars in 10 days.

**steipete's 5-minute maintenance loop goes viral.** [Peter Steinberger's post](https://x.com/steipete/status/2064998499780084154) (4.6K likes, 417K views): tell Codex to maintain your repos, wake every 5 minutes, direct work to threads. An orchestrator skill plus triage/autoreview/computer-use skills, so some work lands fully autonomously ([agent-scripts repo](https://github.com/steipete/agent-scripts)). The OpenClaw author cheerfully running Codex: "It finally got really damn good." He also published a [blog post about OpenClaw and OpenAI](https://steipete.me/posts/2026/openclaw), explaining his move to the Codex team while keeping OpenClaw independent under a foundation.

**Ona joins OpenAI.** [swyx congratulated "our friends @ona_hq"](https://x.com/swyx/status/2065176231453282777) — the Gitpod successor acqui-hired for Codex. The key insight from their talk: runtime and orchestration are solved; **coordination** — agents picking up tasks from each other — is not. GitHub is a poor coordination layer for hundreds of parallel PRs.

## Tools, Releases & Research

**Simon Willison's productive week.** Simon ([@simonw](https://x.com/simonw)) shipped a burst of releases:
- [Datasette Agent 0.2a0](https://simonwillison.net/2026/Jun/10/datasette-agent/) (June 10) — the moment LLM and Datasette finally converge into an extensible AI assistant for databases
- [LLM 0.32a3](https://letsdatascience.com/news/llm-releases-032a3-for-command-line-model-access-bfbb3c39) (June 9) — human-in-the-loop tool-calling with ask_user(), built with Fable 5's help
- [Datasette 1.0a33](https://simonwillison.net/2026/Jun/11/datasette/) (June 11) — most code written with Fable
- [datasette-agent-edit 0.1a0](https://simonwillison.net/2026/Jun/7/datasette-agent-edit/) (June 7) — storage-agnostic file-editing tools
- [datasette-agent-micropython 0.1a0](https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/) (June 2) — MicroPython in a WASM sandbox as an agent tool
- His [initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/) and the phrase of the week: [**"relentlessly proactive"**](https://x.com/simonw/status/2065216774992515342) — it spun up CORS servers and screenshot pipelines unprompted to chase a bug

**Matt Pocock's /teach goes viral.** [Matt](https://x.com/mattpocockuk/status/2065068530387591319) role-played a teacher wanting to build a scheduling app and let his /teach skill design the curriculum: interrogated him on his goals, started with git fundamentals, taught full-stack anatomy tied to his app, sent him to primary sources each lesson. "This is addictive, personalized, and infinite." Runs on Opus 4.8 medium, not Fable. His [skills repo](https://github.com/mattpocock/skills) (75K+ stars) continues to define the "real engineering" approach to AI coding — skills as constraints that keep agents in control. Also: ["Instead of waiting for a new model to fix your problems — why not just fix your problems."](https://x.com/mattpocockuk/status/2065063650797277665)

**LlamaIndex presents ParseBench at CVPR.** [Jerry Liu's LlamaIndex](https://x.com/llama_index/status/2062525204262236266) presented ParseBench at CVPR 2026 — the first comprehensive document understanding benchmark for VLMs, with 2K pages of real enterprise docs. Their pitch: "an agent can't act on a doc it can't correctly read, and reading a real enterprise table is harder than it looks." Jerry also posted a [thread on the research/product tension](https://x.com/jerryjliu0/status/2065280547153444902): research needs long bets that ignore customer feedback; product needs the opposite; for lab companies the tension never goes away.

**Armin Ronacher (mitsuhiko) on agent languages.** His February [blog post "A Language For Agents"](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/) continues getting discussed — the thesis that agents need purpose-built programming languages that handle exceptions and error recovery differently. His [agent commands repo](https://github.com/mitsuhiko) (commands he uses with agents, mostly Claude) was updated June 1. On the Sentry side, he gave a talk about [what he's learned programming with agents](https://speakerdeck.com/mitsuhiko/agentic-coding-the-future-of-software-development-with-agents).

**Thariq ([@trq212](https://x.com/trq212)) on Claude Code channels.** The Claude Code lead [announced Claude Code channels](https://x.com/trq212/status/2034761016320696565) — control Claude Code sessions through MCPs like Telegram and Discord, messaging Claude Code from your phone. He's also written about [prompt caching being everything](https://twitter.com/trq212/status/2024574133011673516) for Claude Code's architecture.

## Other Bits

- **OpenCode hits 161K stars.** The model-agnostic coding agent [launched June 2025](https://opencode.ai/) and became the [most-adopted open-source coding agent](https://blog.logrocket.com/ai-dev-tool-power-rankings/) with 7.5M monthly active users, displacing Cursor at #1 in LogRocket's power rankings.
- **GPT-5.6 watch.** [LLMJunky's update](https://x.com/LLMJunky/status/2065142103403868309): Polymarket has it dropping next week, "the boys say it's a very good model." The needle to thread: 5.5 isn't clearly better than Opus 4.8, so 5.6 either hits Fable parity or sits between at a much better price.
- **Cursor trains Composer with Composer.** [Earlier Composer generations now configure RL training environments for their successors](https://x.com/leerob/status/2065069068722241729) — "the better the model gets, the better it gets at creating the conditions to train its successor."
- **PewDiePie's Odysseus** hit ~66K stars and 8.1K forks within 10 days. A [self-hosted AI workspace](https://blog.jenuel.dev/blog/pewdiepie-odysseus-open-source-ai-workspace) with chat, agents, email, search — no subscriptions, no telemetry, all local.
- **Gemini CLI consumer access ends June 18.** Consumer access to [Gemini CLI and Code Assist IDE extensions ends](https://www.startuphub.ai/ai-news/technology/2026/anthropic-disables-fable-5-and-mythos-5-after-us-export-control-order) for AI Pro, Ultra, and free-tier users. Enterprise licenses keep access.
- **LLMJunky: Fable does mechanical engineering.** [Three prompts to a nitromethane RC car](https://x.com/LLMJunky/status/2065229625702109340) in Autodesk Fusion for $35 in tokens — drivetrain, suspension, motor. "A few months ago, you couldn't produce anything remotely like this with an LLM."
- **Karpathy is quiet.** Joined Anthropic on May 19 for pre-training research. No public posts since. His [Sequoia Ascent 2026 talk](https://karpathy.bearblog.dev/sequoia-ascent-2026/) remains the go-to reference: "vibe coding raised the floor; agentic engineering raises the ceiling."
