---
title: "Fable 5 Returns with New Classifiers, AIEWF Finale & Startup Battlefield, Sonnet 5 Drops, Wiki-Powered Loops"
date: "2026-07-02"
summary: "The last 48 hours reshaped the landscape on three fronts simultaneously. **Claude Fable 5 came back online July 1** after a 19-day suspension over US export controls, carrying a new cybersecurity classifier that blocks the reported jailbreak in 99%+ of cases — but Thariq warned that a small fraction of routine coding tasks will now get flagged and fall back to Opus. **Claude Sonnet 5 dropped June 30** as the new default for free and Pro users, positioned as near-Opus agentic performance at a fraction of the cost ($2/$10 per million tokens through August). And **AI Engineer World's Fair wraps today** (Day 4, July 2) with the Startup Battlefield — theme: recursive self-improvement — judged by Garry Tan, capping four days of 6,000+ engineers, 300 speakers, and 29 tracks at Moscone West. Meanwhile Matt Pocock is building a personal Karpathy-style wiki that ingests X, Discord, and Gmail every few hours as the knowledge base for all future loops, Boris Cherny reflected on a year of Claude Code (auto mode > plan mode, routines that fix bugs before he sees them, coding from his phone), and Armin Ronacher's 'The Coming Loop' blog post crystallized the emerging consensus that harnesses — not prompts — are the new unit of engineering skill."
tags:
  - Fable 5 Returns with New Classifiers
  - Claude Sonnet 5 Drops
  - AI Engineer World's Fair Finale
  - The Wiki-Loop Pattern
  - Boris Cherny's Year-One Reflection
  - The Coming Loop
  - Also Worth a Look
---

# AI Roundup — July 2, 2026

## Fable 5 Returns with New Classifiers

The biggest news of the last 24 hours: **Claude Fable 5 is back online globally as of July 1**, ending a 19-day suspension triggered by a US government export control directive on June 12. The backstory: Amazon researchers found a method to bypass Fable 5's safeguards, producing code that could exploit a software vulnerability. The Commerce Department responded by barring distribution to any foreign national — including non-citizen employees at Anthropic itself. The irony wasn't lost on anyone: **Andrej Karpathy, Anthropic's own top AI scientist (Slovak-Canadian), lost access to the models he's helping build** because he doesn't have US citizenship. ([Inshorts](https://inshorts.com/en/news/anthropic-s-top-ai-scientist-karpathy-loses-claude-fable-access-as-he-s-not-us-citizen--report--1781366637092))

Anthropic trained a new safety classifier that blocks the reported jailbreak technique in over 99% of cases. Requests that hit the classifier get routed to Opus 4.8 instead. But there's a trade-off: [Thariq (trq212)](https://x.com/trq212/status/2072185565076988326) clarified on X: **"As with the original classifiers, a small fraction of routine coding and debugging tasks will be flagged and fall back to Opus. We're excited for guys to get access back tomorrow."** For developers, this means occasional unexpected fallbacks during normal work — something to watch as the classifier settles in.

The export controls have now been lifted, and Fable 5 is available on the Claude Platform, Claude.ai, Claude Code, and Claude Cowork. Anthropic is also drafting a **jailbreak scoring framework with Amazon, Microsoft, Google, and other Glasswing partners**. ([Anthropic blog](https://www.anthropic.com/news/redeploying-fable-5) · [MarkTechPost](https://www.marktechpost.com/2026/07/01/anthropic-redeploys-claude-fable-5-on-july-1-after-us-export-controls-lift-adds-new-cybersecurity-classifier/) · [Al Jazeera](https://www.aljazeera.com/economy/2026/7/1/us-lifts-restrictions-on-powerful-ai-models-fable-mythos-anthropic-says))

Separately, [Thariq](https://x.com/trq212/status/2072079729331777817) addressed questions about an anti-abuse experiment launched in March to prevent unauthorized resellers and protect against distillation: **"The team has landed stronger mitigations since then and we've actually been meaning to take this down for a while."**

## Claude Sonnet 5 Drops

Two days before Fable's return, **Anthropic launched Claude Sonnet 5 on June 30** — the new default model for free and Pro plans. ([TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/))

The pitch: near-Opus agentic performance at a fraction of the cost. Key details:

- **Pricing**: $2/million input tokens, $10/million output tokens through August 31 (then $3/$15)
- **Agentic focus**: makes plans, uses tools (browsers, terminals), runs autonomously at a level that previously required Opus
- **Self-checking**: "checks its own output without explicitly being asked" — the model catches its own mistakes without prompting
- **Safety**: lower rate of undesirable behaviors (cooperation with misuse, deception) than Sonnet 4.6, better at refusing malicious requests and sidestepping prompt injection

Simon Willison covered it on his blog: [What's new in Claude Sonnet 5](https://simonwillison.net/2026/Jun/30/claude-sonnet-5/). Worth reading alongside his [AI Compass](https://simonwillison.net/2026/Jun/30/the-ai-compass/) post from the same day.

## AI Engineer World's Fair Wraps Today

**Day 4 (July 2) is the final day of AIEWF 2026** at Moscone West in San Francisco — the world's largest technical AI conference for engineers, now in its fourth year. The numbers: 6,000+ attendees, 300 speakers, 29 tracks, 100+ expo partners. ([ai.engineer](https://www.ai.engineer/worldsfair/2026))

Today's headline event is the **Startup Battlefield**, judged by Garry Tan (YC) among others. Theme: **recursive self-improvement** — build AI systems that learn from their own outputs. Winners get $10K+ in cash prizes plus partner credits.

The conference's overarching theme this year is **Harness Engineering** — the idea that models get smarter every month, but the challenge is everything around them. "Context Engineering" has replaced "prompt engineering at scale" as the industry's preferred term for the discipline.

Notable talks from the week:
- **Matt Pocock**: ["Building Great Skills: The Missing Manual"](https://x.com/mattpocockuk/status/2069170261367128080) — a framework for building and improving agent skills from the ground up
- **Matt Pocock**: also announced [mattpocock/skills v1](https://x.com/mattpocockuk/status/2067259590488510471) with a 63% reduction in token cost for skill descriptions, new skills including /codebase-design, /domain-modeling, and /grilling (the repo now has 135K+ GitHub stars)
- **Peter Steinberger**: ["Build the thing that builds the thing"](https://x.com/steipete/status/2062390654022332691) at MS Build (video: [YouTube](https://www.youtube.com/watch?v=o5IQMijn-Ks)) — on building an ecosystem of tools to build OpenClaw faster and with more confidence
- **Day 3 theme**: the engineer's role is shifting from "human who uses AI tools" to "architect of systems that run AI autonomously"

OpenAI dropped a bombshell at the conference: **GPT-5.6 Sol will be deployed on Cerebras wafer-scale hardware in July at up to 750 tokens/second** — roughly 15x current GPU-tier speeds.

## The Wiki-Loop Pattern

[Matt Pocock](https://x.com/mattpocockuk/status/2071607607714890181) posted about a new experiment that extends the Karpathy Loop pattern: **"Doing my first ever experiments with a personal, entirely agent-managed Karpathy-style wiki. X, Discord, Gmail are all being ingested into it every few hours. This is the knowledge base that will serve as the environment for all of my future loops."**

The Karpathy LLM Wiki pattern — where an LLM incrementally builds and maintains a persistent wiki instead of doing RAG at query time — has been gaining traction since Karpathy published his original gist. Pocock is taking it further by automating ingestion of multiple data sources on a schedule, creating a living knowledge base that compounds over time. [Steipete replied](https://x.com/steipete/status/2071773108940210268) with the practical tooling: **"birdclaw, discrawl and gog all backed up to git because you can."**

Separately, Pocock sparked a discussion about [where AI coding artifacts belong](https://x.com/mattpocockuk/status/2069698109492343101): **"There are a class of AI Coding assets that IMO don't really belong checked into git: PRDs, Research files, Decision maps, Implementation plans. Folks who agree with me, what are you using instead?"** The thread surfaced a real tension — these documents are essential to the agent workflow but rot quickly and clutter version history.

## Boris Cherny's Year-One Reflection

[Boris Cherny](https://x.com/bcherny/status/2064034799711588805) sat down to reflect on **a year since Claude Code's GA**: "When we first demoed Claude Code internally, it got two reactions on Slack." The thread covers what's changed in how he works:

- **Auto mode over plan mode**: no more permission prompts, the key building block for "multi-clauding" — running multiple sessions in parallel. The models are reliable enough now to sustain sessions of 5, 10, even 20 hours without constant supervision
- **Routines fix bugs before he sees them**: `/loop` repeats tasks locally for up to three days; `/schedule` launches cloud jobs that run even with the laptop closed, for up to a week
- **Most coding happens from his phone now** — the "touch grass coding" workflow is real
- **Claude Code writes 4% of all GitHub commits**, and daily active users doubled last month

Cherny's #1 tip: [use auto mode](https://x.com/bcherny/status/2058519809214607704). He also [doubled Claude Cowork usage limits](https://x.com/bcherny/status/2063028954546733462) for the month: "If you've been saving up a big messy project, now's the time." Claude Cowork — the desktop app that brings Claude Code's agentic capabilities to non-developers — was built in ~10 days and is growing faster than Claude Code did at launch.

## The Coming Loop

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) published ["The Coming Loop"](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) on June 23, a blog post that crystallizes the emerging consensus: people are building something on top of coding agents that feels meaningfully different from just using a coding agent — **harnesses and loop patterns** that automate the feedback cycle between agent, tests, and review.

This echoes Peter Steinberger's viral post from June 8 (6.5M views): [**"Here's your monthly reminder that you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents."**](https://x.com/steipete/status/2063697162748260627) The sentiment has spawned an entire discourse around "loop engineering" — the idea that the next bottleneck is not the prompt but the loop. ([TechSpot](https://www.techspot.com/news/112923-ai-developers-moving-beyond-prompts-loops-take-over.html))

Steipete's own workflow backs it up: with **GPT 5.5, /goal, autoreview, and crabbox**, his tasks moved from [30-60 minutes to 4-10 hours](https://x.com/steipete/status/2060678430031597696), with much higher confidence. Autoreview — which [automatically reviews code before landing a PR](https://x.com/steipete/status/2059453909819654554) — he calls "the most impactful skill I've added to my stack." It finds edge cases, sometimes running for hours.

Ronacher is also building **Pi**, an AI agent toolkit (unified LLM API, agent loop, TUI, coding agent CLI) with first-class local model support. His blog post on [Pushing Local Models With Focus And Polish](https://mitsuhiko.spicytakes.org/post/2026-05-08-local-models) argues the gap between hosted and local experiences comes from too many moving parts — inference engines, quantizations, templates, configs — not model quality.

## Also Worth a Look

**Karpathy at Anthropic**: Andrej Karpathy [joined Anthropic in May](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to lead work on the pre-training team under Nick Joseph, and is helping launch a new effort using Claude itself to accelerate pre-training research. His Sequoia Ascent 2026 fireside chat pushed on three themes: LLMs are about more than speeding up what existed before; the [growing gap in understanding of AI capability](https://x.com/karpathy/status/2042334451611693415); and the untapped potential of [highly bespoke software](https://x.com/karpathy/status/2024583544157458452).

**Theo's Hybrid Coding Rig**: Theo (t3.gg) has been [moving away from traditional code editors](https://finance.biggo.com/podcast/c7c3cb2193d150d2) to a terminal-plus-AI environment, running a hybrid model with local machines handling inference via Codex's $200/month plan alongside cloud subscriptions. He also launched the [State of AI (for web devs) 2026 survey](https://x.com/theo/status/2041715755306389780).

**Jerry Liu / LlamaIndex**: LiteParse continues its rapid evolution — [v2.0 (May)](https://x.com/jerryjliu0/status/2034665976428724267) was rewritten from scratch in Rust with up to 100x faster parsing; [v2.1 (June)](https://x.com/jerryjliu0/status/2036610356362309677) added markdown output. Jerry also articulated [The Model Harness Is Everything](https://x.com/jerryjliu0/status/2026840829441225127): "The biggest barrier to getting value from AI is your own ability to context and workflow engineer the models."

**swyx / AI Engineer**: AIEWF 2026 is swyx's biggest yet — 6,000+ attendees, doubling again. He flagged [/dev/agents coming out of stealth as Dreamer](https://x.com/swyx/status/2023820429258117158) as "the most ambitious full stack consumer+coding agent startup I've ever seen." Also argued [OpenAI should build Slack](https://x.com/swyx/status/2022580899737673810).

**Simon Willison**: Beyond the Sonnet 5 writeup, Simon published on [agentic engineering patterns](https://simonw.substack.com/p/agentic-engineering-patterns), released [Showboat](https://simonw.substack.com/p/two-new-showboat-tools-chartroom) (a CLI tool for coding agents to create Markdown demos of their work), and the first release of [Datasette Agent](https://simonw.substack.com/p/datasette-agent-an-ai-assistant-for). His [Hack Your Summer](https://simonwillison.net/2026/Jun/28/hack-your-summer/) cohort starts July 13 (apply by July 8). He also noted that [prompt injection can now target entire countries](https://x.com/simonw/status/2047314343956795779) — a reminder of the security surface expanding alongside agent capabilities.

**Thariq on Dynamic Workflows**: Thariq shared that [dynamic workflows were released in Claude Code](https://x.com/trq212/status/2061907337154367865) — Claude can now write its own harness on the fly, custom-built for the task at hand. He also published ["Lessons from Building Claude Code: Seeing like an Agent"](https://x.com/trq212/article/2027463795355095314) and has been writing about [HTML replacing Markdown](https://www.lennysnewsletter.com/p/html-is-the-new-markdown-how-anthropic) in planning workflows — richer visual formats lead to better human engagement with agent output.
