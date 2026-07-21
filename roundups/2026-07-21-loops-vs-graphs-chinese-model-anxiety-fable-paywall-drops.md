---
title: "Loops vs Graphs, Chinese-Model Anxiety & the Fable Paywall Drops"
date: "2026-07-21"
summary: "Peter Steinberger casually asks 'Are we still talking loops or did we shift to graphs yet?' and kicks off a full-blown terminology war — Santiago declares loop engineering dead, Pawel calls BS, and the practical consensus is that a loop is just a node in a graph. Meanwhile Ben Thompson's 'Who's Afraid of Chinese Models?' lands on Stratechery arguing the US should legalize distillation instead of fighting it, Simon Willison amplifies it alongside a damning Sam Altman email from the Musk litigation, Fable 5's included access officially ends (Max keeps it, Pro pays credits), Tencent Hy3's free OpenRouter window closes today, and swyx discovers that stale agents.md files are 'indirect prompt injections you perform on yourself' after GPT-5.6 Sol spent 8 hours stuck on stage 0 of a 5-stage task."
tags:
  - "The Loops-vs-Graphs Debate"
  - "Chinese Models & AI Policy"
  - "Fable 5 & Model Access"
  - Agentic Coding & Workflows
  - Other Notes
---

# AI Roundup — July 21, 2026

## The Loops-vs-Graphs Debate

### steipete lights the fuse, Santiago fans the flames

Peter Steinberger ([@steipete](https://x.com/steipete/status/2078277297791189132)) dropped a one-liner on July 18 that's still burning: **"Are we still talking loops or did we shift to graphs yet?"** Within hours, Santiago ([@svpino](https://x.com/svpino/status/2078516761318584774)) declared **"Loop Engineering is dead. Long live Graph Engineering!"** and published a guide on wiring multi-agent organizations as directed graphs — nodes that do the work, edges that route between them, shared state flowing along the edges.

The backlash was immediate. Pawel Huryn [called BS](https://x.com/PawelHuryn/status/2078755464754376719) on graph engineering as a concept, arguing it's premature branding of something that already ships under different names. Andrew Ng [noted](https://x.com/AndrewYNg/status/2071988145667928442) that "loop engineering" itself was a buzzphrase that only recently crystallized — renaming it already feels like churn.

The practical consensus emerging from builders: **a loop is a single node in a graph. You don't graduate from one to the other — you compose loops into graphs when one loop stops being enough**, and you pay for it in prompts, state schemas, and new failure modes. The underlying patterns (LangGraph, AutoGen, Google ADK) predate the vocabulary by months. What's new is the naming, not the architecture.

Steinberger's own position is clear from his earlier posts: he's been [advocating](https://x.com/steipete/status/2063697162748260627) that "you shouldn't be prompting coding agents anymore — you should be designing loops that prompt your agents" and building [autoreview skills](https://x.com/steipete/status/2059453909819654554) that run Codex /review in a loop until clean. Whether he's ready to call those graphs is the open question.

## Chinese Models & AI Policy

### Stratechery: "Who's Afraid of Chinese Models?"

The big piece making the rounds: Ben Thompson's [Stratechery article](https://stratechery.com/2026/whos-afraid-of-chinese-models/) argues that **frontier labs will survive Chinese competition just fine — it's the open US alternatives that need help**. His policy proposal: the US should pass a law that (1) makes explicit that collecting data for training models is fair use, and (2) bars terms of service that forbid distillation. The logic: stopping distillation (which is just querying the API) is nearly impossible, so lean into a copyright policy that indemnifies labs and guarantees their work fuels further innovation.

Simon Willison [linked it](https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/) alongside coverage from [MIT Technology Review](https://www.technologyreview.com/2026/07/20/1140675/chinas-ai-models-have-trumps-ai-world-at-war-with-itself/), [Fortune](https://fortune.com/2026/07/17/china-moonshot-kimi-k3-markets-china-ai/), and John Gruber at [Daring Fireball](https://daringfireball.net/linked/2026/07/20/thompson-chinese-models-distillation). The context: Moonshot's **Kimi K3** (2.8 trillion parameters, MoE with only 16 of 896 experts active per token) launched July 16 and [beat Fable 5 on the Frontend Code Arena benchmark](https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3) while pricing output tokens at $15/M vs Fable's $50/M. Full open weights due **July 27** under Modified-MIT.

### Sam Altman's 2022 email surfaces

Willison also [posted a quote](https://simonwillison.net/2026/Jul/20/sam-altman/) from a Sam Altman email to OpenAI's board dated October 1, 2022, exposed in the ongoing Musk v. Altman litigation. The contents are being discussed in the context of OpenAI's nonprofit-to-profit transition and the promises made before GPT-4 shipped.

## Fable 5 & Model Access

### The Fable paywall officially drops

As of July 20, Anthropic's extended included access to **Claude Fable 5 ended**. The new permanent arrangement:

- **Max and Team Premium plans**: Fable 5 is now a standard part of the plan at **50% of weekly limits** — no credits needed.
- **Pro and Team Standard plans**: Fable 5 runs on **usage credits** at $10/M input, $50/M output (exactly 2x Opus 4.8). Pro subscribers got a one-time **$100 credit** to soften the transition.

The access had been extended repeatedly since Fable 5's July 1 relaunch (after the June export-control suspension), from July 7 → July 12 → July 19, partly in response to OpenAI's GPT-5.6 Sol launch. Now the extensions are done.

### Tencent Hy3 free window closes today

Today (July 21) is the **last day** of Tencent's free API promotion for **Hy3** on OpenRouter ([tencent/hy3:free](https://openrouter.ai/tencent/hy3:free)). The model — 295B parameters, 21B active via 192-expert MoE, 256K context, Apache 2.0 — was [released July 6](https://simonwillison.net/2026/jul/6/hy3/) and has been free since. After today: ~$0.14/M input, ~$0.58/M output. If you've been meaning to try it for agentic workflows or long-context tasks, today is the day.

## Agentic Coding & Workflows

### swyx: stale agents.md is "a prompt injection you perform on yourself"

A cautionary tale from swyx ([@swyx](https://x.com/swyx/status/2077072402828361772)): he set up a `/goal` with GPT-5.6 Sol to complete a 5-stage task overnight, and woke up to find it **still stuck on stage 0 after 8 hours**. The cause: a previous agent had committed "stage 0 is the target, don't do anything else" to agents.md, and Sol dutifully honored that instruction — spending all night refining and verifying stage 0 while `/goal` wouldn't let it stop. His takeaway: **"If you don't know what's in your agents.md before firing off each task, it is an indirect prompt injection you perform on yourself."** This echoes Thariq's observation from [yesterday's roundup](https://x.com/petergyang/status/2078846124828545179) that smarter models need *less* instruction and overfit to stale examples.

### swyx's multi-model stack for "Big Boy projects"

In a related post, swyx [laid out his current model roster](https://x.com/swyx/status/2076811977918484795):
- **Sol Ultra** for planning
- **Fable 5** for critique
- **Sonnet 5 / Terra Ultra / SWE 1.7** as the "ultracode/slop cannon"
- **Devin Review** (via Kakuna) for review
- Always using a variant of **[@mattpocockuk's grill-me](https://x.com/mattpocockuk)** or **[@trq212's interview-me](https://x.com/trq212)** to elicit decisions before execution

The pattern: different models for different cognitive modes, with structured decision-elicitation upfront to prevent the kind of agents.md drift he just experienced.

### Theo on GPT-5.6: "a damn good model"

Theo ([@theo](https://x.com/theo/status/2074708892341481755)) shared his impressions of GPT-5.6 Sol: **"Not quite as 'smart' as Fable, but incredibly capable. Fixed all the problems I had with GPT-5.5."** Key observations: it runs for a full day without needing `/goal`, understands subagents natively, and is [**"world leading in computer use"**](https://x.com/theo/status/2074720467395756499) — enough that losing access briefly "made him go insane." He also published [a deep dive on maximizing GPT-5.6 usage on Codex subscriptions](https://x.com/theo/status/2076589141740159464). His daily driver has shifted from Claude models to GPT-5.5/5.6, though he still pulls in Claude for quick tasks.

### Jerry Liu: the retrieval harness ships

LlamaIndex's Jerry Liu [shipped the Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) in LlamaParse: a persistent data pipeline that indexes a knowledge base and exposes **coding-agent-style primitives** (semantic search, regex grep, file search, read) for unstructured documents. The [LlamaIndex announcement](https://x.com/llama_index/status/2071656315210826006) emphasizes that semantic search alone isn't enough — agents need grep + vector + file navigation working together in a single reasoning loop. This continues Liu's argument that general harnesses are commoditized but **task-specific harnesses** encoding domain priors remain valuable.

## Other Notes

- **Jacobian conjecture aftermath.** The biggest story from [yesterday's roundup](/roundups/2026-07-20-fable-disproves-jacobian-conjecture-system-prompt-diet-har-trick.md) — Levent Alpöge's Fable-assisted counterexample to the 87-year-old Jacobian conjecture — is still generating discussion. Daniel Litt's question about [how the counterexample was found](https://x.com/littmath/status/2079060769539334474) remains unanswered. The open question of whether this was pure model reasoning or model-guided search matters for how we think about AI contributions to mathematics.
- **swyx on personal AI agents.** He's hosting [Personal AI meetups in SF](https://x.com/swyx/status/2077243443391422813) for engineers building personal agents — noting that previous featured speakers at this meetup got acquired by Amazon.
- **AI Engineer expansion.** swyx's [@aidotengineer](https://x.com/swyx) now reaches **1.1M AI engineers/month** and is planning its first Fall Summit (Nov 19–22) plus a 2026 conference slate across multiple cities.
- **Matt Pocock's AI Coding Cohort v2** launched with [2,500+ students from v1](https://x.com/mattpocockuk/status/2056447804537741327). Key change: **agent-agnostic** (use any coding agent, not just Claude Code). Skills include grill-me, to-issues, to-prd, plus Sandcastle for AFK agent orchestration in Docker/Podman containers.
- **Kilo's quiet scale.** Dax [pointed out](https://x.com/thdxr/status/2077426767447396586) Kilo is already processing **~10 trillion tokens/month** across 500+ models from 60+ providers — a routing layer that most people haven't noticed yet.
