---
title: "Fable 5.2 Drops, Meta Buys Conductor, Claude Code Exodus & Ripple-65B"
date: "2026-11-10"
summary: "Anthropic quietly ships Fable 5.2 and Mythos 5.2 as Simon Willison races to add plugin support; Meta acquires multi-agent coding startup Conductor for its Superintelligence Labs; the Claude Code team loses three key engineers — including head of product Cat Wu to OpenAI — weeks before a rumored IPO; Ricursive's Ripple-65B sets a new US open-weight coding benchmark for $32M; the AI Engineer Code Summit kicks off in San Francisco; and Matt Pocock launches his Software Factories cohort while Willison argues we should hide AI-generated PR descriptions behind `<details>` tags."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - LLM Releases & Model News
  - Developer Tools & Community
---

# AI Roundup — November 10, 2026

## Agentic Coding & Agent Harnesses

### Meta Acquires Conductor — Multi-Agent Coding Goes Corporate

Meta has acquired [Conductor](https://axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor), a startup that lets developers run multiple AI coding agents (Claude Code, Codex, Cursor, OpenCode) in parallel through a single interface. The team, led by CEO Charlie Holtz, joins Meta Superintelligence Labs. Axios broke the story on November 4; financial terms were not disclosed.

The catch: Conductor Cloud shuts down this month, and the desktop app only gets updates until early 2027. Holtz has promised a new product in early 2027, but it's unclear whether it will support the agents users rely on today. The deal dropped the same day OpenAI announced plans to acquire Pierre Computer, another dev tools startup.

- [Axios exclusive](https://axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor)
- [InfoWorld coverage](https://www.infoworld.com/article/4245065/meta-acquires-conductor-as-ai-coding-shifts-toward-multi-agent-development.html)
- [The Next Web](https://thenextweb.com/news/meta-acquires-conductor-ai-coding-agents-superintelligence-labs)

### Ricursive Ships Ripple-65B Preview — $32M Open-Weight Coding Model

Ricursive Intelligence released [Ripple-65B Preview](https://letsdatascience.com/news/ricursive-releases-ripple-65b-preview-apache-20-open-coding-7e90be63) on November 4 under Apache 2.0. The 65B dense model claims 80.52 on TerminalBench 2.1, edging out larger US open-weight models like Reflection Beam 501B (80.1). Ricursive says total R&D cost was about $32M — roughly one-tenth the prior open-weight coding leader's cost.

The model can reportedly run on a single NVIDIA DGX Spark in NVFP4. [swyx highlighted it](https://x.com/swyx/status/2118073650356384239) on X, noting the cost breakthrough for agentic coding. Caveats: scores are self-reported, the claim covers US open-weight models on one benchmark, and training data details are not published.

- [Developer's Digest deep dive](https://www.developersdigest.tech/blog/ripple-65b-open-weight-agentic-coding-dense-local-2026)
- [CryptoBriefing benchmarks](https://cryptobriefing.com/ricursive-ripple-65b-preview-coding-benchmarks/)

### UC Berkeley: Evolving Agent Teams Beat Single Agents on GPU Kernels

A [paper from late October](https://alphaxiv.org/abs/2610.36848) introduces "Evolving Agent Teams" — a supervisor agent that watches a team of coding agents and reorganizes them when progress stalls. The system achieved a 1.21x geometric-mean speedup over production FlashInfer kernels, beating the baseline on 36 of 47 workloads. In a revealing ablation: a static team of agents performed *worse* than a single agent working alone, suggesting that naive multi-agent setups can hurt more than help.

- [AlphaXiv abstract](https://alphaxiv.org/abs/2610.36848)
- [Towards Data Science write-up](https://towardsdatascience.com/ai-agents-beat-pytorch-writing-faster-cuda-kernels/)

### Matt Pocock's Software Factories Cohort Kicks Off

Matt Pocock's [Software Factories for Real Engineers](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m) two-week cohort started November 9 on AI Hero. The course teaches engineers to build a "software factory" where work goes in as tickets and comes out as reviewed PRs. Pocock says the group will spend a lot of time on the "brakes" — guardrails, automated checks, and review loops. He also recently asked on X about [which harness people use to run Claude Code from mobile](https://x.com/mattpocockuk/status/2119092778164519234), and replies pointed to T3 Code.

### AI Engineer Code Summit Opens in San Francisco

The [AI Engineer Code Summit 2026](https://www.ai.engineer/code/2026) runs November 10–12 at Hilton Union Square in San Francisco. It's an application-only, single-track summit focused on coding agents and developer tools. Confirmed speakers include Databricks' Ankit Mathur and Cognition's Walden Yan. Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) is listed as a featured speaker — he's been evangelizing his Pi agent and the concept of "codemode" (letting LLMs orchestrate complex operations on the harness side) through his [recent blog posts](https://lucumr.pocoo.org/2026/10/6/codemode/).

### Thariq on Agent Mania and Open-Source Distribution

Thariq Shihipar ([@trq212](https://x.com/trq212)) posted two thought-provoking threads in late October/early November before his Anthropic departure. One warns that there's ["a kind of mania you can get into with coding agents"](https://x.com/trq212/status/2115937378674372783) — where it feels like you're getting a lot done but nothing is really happening, often a form of avoidance. Another argues that open-source software needs a [new distribution model](https://x.com/trq212/status/2115188992861970693) where agent-driven modifications can be automatically merged upstream.

## Claude Code & Anthropic Updates

### Fable 5.2 and Mythos 5.2 Ship

Anthropic released Claude Fable 5.2 and Mythos 5.2 on November 9. Simon Willison's [llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/) plugin shipped same-day support. Willison benchmarked his "pelican riding a bicycle" SVG prompt across five reasoning levels. Separately, he shared a [quote from Anthropic's prompting guide](https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/) for Fable 5.2, noting how prompt wording affects whether the model reuses or restructures existing code.

### The Claude Code Exodus

Three key members of the Claude Code team left Anthropic within about 10 days in late October:

- **Cat Wu** — Head of product for Claude Code. Left October 30, [joined OpenAI](https://fourweekmba.com/ai-cat-wu-joins-openai-core-products-27-hours-after-exit-post/) to lead product management for Core Products just 27 hours later. OpenAI confirmed the hire to Business Insider.
- **Thariq Shihipar** — Engineer and prolific Claude Code evangelist. [Announced his departure](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/) October 24, said he's planning a break before starting something new.
- **Anthony Morris** — Creator of Claude Code's desktop app. [Departure reported](https://magica.com/news/anthony-morris-claude-code-desktop-leaves-anthropic) around the same time, though some outlets say it remains unconfirmed.

The timing has drawn attention because of Anthropic's rumored IPO plans. OpenAI CEO Sam Altman called it ["not a good sign."](https://www.ibtimes.sg/A000OqQ) Anthropic has not commented publicly.

- [Analytics India Mag: three members leave in 10 days](https://analyticsindiamag.com/ai-news/three-members-behind-claude-code-leave-anthropic-within-10-days)
- [FourWeekMBA tracker](https://fourweekmba.com/ai-4-anthropic-staff-posted-exits-in-12-days-2-joined-openai/)

### Willison: Hide Your Slop PR Descriptions

Simon Willison posted about [hiding AI-generated PR descriptions](https://simonwillison.net/2026/Nov/9/details-summary/) behind `<details><summary>` HTML tags. The argument: agent-generated descriptions are often verbose and unreviewed, and reviewers skip them anyway. Collapsing them keeps the signal-to-noise ratio sane while preserving the text for anyone who wants it. This follows his earlier signal-boosting of Kenton Varda's outright ban on AI-written change descriptions (July 2026).

## LLM Releases & Model News

### Meta Releases Muse Ember

Meta announced Muse Ember, its smallest and most efficient model yet in the Muse family. Simon Willison [noted](https://simonwillison.net/2026/Nov/10/muse-ember/) it's priced comparably to GPT-6 Luna and Claude Haiku 5.5, positioning it in the "cheap and fast" tier. The Muse lineup now spans from Ember (tiny) through Glimmer (30B open-weight), Spark, Code, and up to Wonder (frontier).

### Karpathy's AI Capability Gap Post Still Reverberating

Andrej Karpathy's [October post](https://x.com/karpathy/status/2109361546505966046) about the widening AI capability gap continues to draw discussion. His napkin math estimates ~6 billion people have barely used an LLM, while ~5,000 people inside frontier labs have access to capabilities the public hasn't seen. The middle tiers — ~20 million coders on frontier models and ~1-2 billion occasional ChatGPT users — are where the biggest misunderstandings live. Multiple outlets [covered the thread](https://thenewstack.io/karpathy-levie-ai-capability-gap/) into November.

## Developer Tools & Community

### Karpathy's HackerTube

Karpathy's [HackerTube](https://cryptobriefing.com/andrej-karpathy-launches-hackertube/) project continues to draw attention. Built in about 2 hours with Claude (Opus 5.5), it filters 43 million Hacker News comments down to 6,454 recommended YouTube videos across 150 topics. No login required — viewing history and recommendations live entirely in the browser. Karpathy's motivation: YouTube's homepage had become an "enshittified wall of slop."

- [HackerTube](https://hackertube.org)
- [Detailed write-up](https://www.dsebastien.net/2026-10-31-hackertube-karpathy-rebuilt-youtube-from-hacker-news-comments/)

### Simon Willison's Tooling Blitz

Beyond the Anthropic plugin, Willison had a productive weekend:

- **[Locating a mysterious beep with Claude](https://simonwillison.net/2026/Nov/9/mysterious-beeps/)** — A fun write-up about using Claude Code to help track down a mysterious beeping device.
- **[Yonkers Rises](https://simonwillison.net/2026/Nov/10/yonkers-rises/)** — An animated 3D diorama tool, one of his ongoing experiments with Fable 5.2 capabilities.
- **[Qwen 3.8 27B interpreting model weights](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)** — Earlier in the week, he demonstrated that a local 27B model can read and interpret neural network weights on a laptop.

### Boris Cherny's Claude Code Setup Goes Viral (Again)

Boris Cherny, creator of Claude Code, continues to shape how people use the tool. A [Miles Deutscher thread](https://x.com/milesdeutscher/status/2116922973961789769) (Nov 1) recirculated Cherny's "6-step framework" for Claude Code, which spread as paste-ready tutorials. Key advice from Cherny: talk to Claude like a colleague (no need for overly structured prompts), and periodically delete your CLAUDE.md, skills and hooks to test whether newer models have outgrown them.

- [i10x tutorial roundup](https://i10x.ai/news/claude-code-cherny-agent-tutorials)
- [Dev.ua: "Talk like a colleague"](https://dev.ua/en/news/druzhe-klod-1791451407)

### Theo Promotes T3 Code and the Mobile Coding Workflow

Theo ([@theo](https://x.com/theo)) has been pushing T3 Code as the bridge between coding agents and mobile workflows. He [described running](https://x.com/theo/status/2118620978632904721) ~40 agent experiments over 5 hours on GCP while walking around and talking into T3 Code on his phone. His pitch: if you have more than one AI subscription, more than one computer, or any desire to code from your phone, T3 Code is the only reasonable option. The open-source tool wraps Claude Code, Codex, Cursor, Grok Build, and others under a single web/desktop/mobile interface.

- [T3 Code deep dive (Flavio Copes)](https://flaviocopes.com/t3-code)
- [BetterStack guide](https://betterstack.com/community/guides/ai/t3-code/)
