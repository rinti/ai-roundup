---
title: "DeepSeek V4.1 Flash Drops, Coxon Quits Anthropic & OpenAI Claims Navier-Stokes"
date: "2026-09-10"
summary: "DeepSeek launches V4.1 Flash today with a new architecture claiming to surpass V4 Pro at 427 tokens per second. Jacob Coxon resigns from Anthropic with a seven-part thread warning both labs are racing to self-improving superintelligence without safeguards, racking up 76 million views overnight. OpenAI claims 10,000 coordinating AI agents produced a proof of finite-time blowup for the forced Navier-Stokes equations in 88 hours, though mathematicians immediately point out it solves the wrong variant for the Millennium Prize. Armin Ronacher publishes a blog post calling AI engineering involution and reverting to GPT-5.6 for real work because Astra writes horrific Python. Simon Willison ships LLM 0.35 with Astra support. The Fable 5.1 vs Astra debate continues to dominate developer conversation."
tags:
  - Model Releases & Benchmarks
  - AI Safety & Industry
  - Agentic Coding & Tools
  - Other Interesting Stuff
---

# AI Roundup — September 10, 2026

A big news day. DeepSeek drops V4.1 Flash, an Anthropic researcher's resignation goes massively viral, and OpenAI's claim about solving a Millennium Prize problem lands with equal parts awe and skepticism. Meanwhile the developer conversation is still digesting Astra vs Fable 5.1 a week in, and Armin Ronacher puts the whole AI engineering treadmill into a single Chinese word.

## Model Releases & Benchmarks

### DeepSeek V4.1 Flash launches today

DeepSeek [officially releases V4.1 Flash](https://technode.com/2026/09/09/deepseek-v4-1-flash-multimodal-limited-beta/) around September 10 Beijing time, the smallest model in its new architecture family. The headline number is [427 tokens per second](https://www.geeky-gadgets.com/deepseek-v4-1-flash-review/), making it one of the fastest models available. DeepSeek claims it has [comprehensively surpassed V4 Pro](https://panews.io/articles/01a0856e-2bce-75c8-bca5-2be6af74ffd9) across performance, cost, speed and total time after internal and external testing. The model natively supports multimodal capabilities and is aimed at time-sensitive work like 3D modeling, game development and coding. DeepSeek is also [cutting V4 Flash pricing](https://cellcog.ai/blog/deepseek-v4-1-flash-release-date/) from today.

### The Fable 5.1 vs Astra verdict keeps settling

Theo's [tweet](https://x.com/theo/status/2097192907023458473) from the weekend continues to be the reference summary: "GPT-6 Astra has done incredible things I never thought a model could do. It has also done some of the stupidest things I've ever seen a model do. Generally speaking, Fable 5.1 just does what I ask." The [benchmarks tell the same story](https://artificialanalysis.ai/models/comparisons/gpt-6-astra-vs-claude-fable-5-1): Fable 5.1 leads on Artificial Analysis's Intelligence Index (66 vs 61) and Coding Agent Index (70 vs 67), but Astra takes computer use, terminal workflows and long-context retrieval. On speed, Fable 5.1 generates 67.3 tokens/sec vs Astra's 52.0, and cache reads are four times cheaper ($0.25 vs $1.00 per million tokens). The practical consensus: pick Fable 5.1 for long agents, retrieval and research; pick Astra for computer-use automation, math and security work.

### Simon Willison ships LLM 0.35

Simon Willison [released LLM 0.35](https://simonwillison.net/2026/Sep/7/llm/) on September 7, adding Astra support to his CLI tool. He [tweeted](https://x.com/simonw/status/2084792341572001871) about the release: "Big new release of my LLM CLI tool and Python library for talking to hundreds of different LLMs." This follows [LLM 0.34](https://simonwillison.net/2026/Sep/2/llm/) from September 2 which added Gemini 3.8 Flash support, and [LLM 0.32](https://simonwillison.net/2026/Aug/4/new-release-of-llm/) from August 4 which was described as the most significant release since launch, bringing reasoning traces, OpenAI Responses API support, server-side tools (WebSearch and CodeInterpreter for OpenAI models; WebSearch, WebFetch, CodeExecution and AnthropicMCP for Claude), and redesigned content-addressable SQLite logging. Two major releases in five days tells you how fast the model landscape is moving.

## AI Safety & Industry

### Jacob Coxon resigns from Anthropic, warns of extinction risk

Jacob Coxon, a 27-year-old pretraining researcher who worked at both OpenAI and Anthropic, [resigned on September 8](https://deadline.com/2026/09/anthropic-jacob-coxon-resignation-artificial-intelligence-1237072134/) and posted a seven-part thread on X that [hit 76 million views overnight](https://www.newsweek.com/anthropic-researcher-quits-warns-ai-could-kill-everyone-12418798). His core claim: "They are racing straight to self-improving superintelligence and gambling with our lives." He [told the Wall Street Journal](https://finance.yahoo.com/technology/ai/articles/gambling-lives-ai-researcher-quits-050000528.html) he no longer believes any single lab can safely build the systems his employer is racing to build, and that "by the end of next year things could be out of control already." This follows a pattern of safety-focused departures from frontier labs, and the timing alongside OpenAI's Navier-Stokes claim (below) made the contrast especially stark.

### OpenAI claims 10,000 AI agents solved Navier-Stokes in 88 hours

OpenAI [announced on September 8](https://qz.com/openai-ai-navier-stokes-millennium-prize-math-090826) that an internal AI system produced a proof of finite-time blowup for the forced 3D Navier-Stokes equations, using roughly [10,000 coordinating agents working for 88 hours](https://runtimewire.com/article/openai-10000-ai-agents-navier-stokes-proof). If verified, this would be among the most consequential results ever attributed to an AI system. But the caveats came fast. The [Clay Mathematics Institute's Millennium Prize](https://forkast.news/openais-10000-agent-navier-stokes-claim-solves-the-wrong-problem-and-the-right-one-has-a-provenance-controversy/) is defined for the *unforced* equations; OpenAI's result addresses the forced version, so the prize remains unclaimed. The proof has [not been publicly released](https://www.coindesk.com/tech/2026/09/09/openai-says-10-000-ai-agents-solved-a-usd1-million-math-problem-now-mathematicians-are-fighting) for independent verification. And a competing team led by Anima Anandkumar at Caltech released a zero-viscosity solution on September 7 using a physics-informed neural network, adding a provenance controversy. The math community is skeptical but watching closely.

## Agentic Coding & Tools

### Armin Ronacher: AI engineering is involution

Armin Ronacher published ["Astra for Coding: Why Are We Doing This Again?"](https://lucumr.pocoo.org/2026/9/7/astra-why/) on September 7, arguing that all of AI engineering is "Neijuan" (内卷) — the Chinese term for a system that demands ever more effort and competition without improving output, borrowed from Clifford Geertz's concept of agricultural involution where productivity per square meter rises while productivity per head stays flat. His assessment of Astra: "an incredibly impressive model" that is "amazing at computer use, understands images and complex topics, and it's relentless in its pursuit of completion." But for actual software engineering, he [reverted to GPT-5.6](https://x.com/mitsuhiko/status/2097318251403395471), calling it "the first time I feel like this is a genuine regression on an OpenAI model release for my day to day workflows." The specific complaint: when Astra writes code that is ["one step removed" from normal code, it writes weird Python slop](https://x.com/mitsuhiko/status/2096720787998650453) and "the unittests it writes are absolutely horrific." His theory is that Astra is greatly rewarded for succeeding on long-horizon tasks with very little punishment for bad code quality. This echoes a broader theme from his work at Earendil (the company he founded after leaving Sentry) with colleague Cristina Poncela Cubeiro: that frictionless AI-assisted coding can erode human judgment, encourage skipped reviews and create security or maintenance risks.

### Thariq Shihipar on Claude Code as a game engine

Thariq Shihipar (@trq212), a Claude Code engineer at Anthropic, has been sharing details about the [Claude Code rendering rewrite](https://x.com/trq212/status/2001439019713073626) that reduced terminal flickering by roughly 85%. The interesting technical detail: most people's mental model of Claude Code is "it's just a TUI" but it is [closer to "a small game engine"](https://x.com/trq212/status/2014051501786931427), with a pipeline that constructs a scene graph with React, layouts elements, rasterizes them to a 2D screen, diffs against the previous frame, and generates ANSI sequences, all within a ~16ms frame budget. The [rewrite shipped to everyone](https://x.com/trq212/status/2014051499798831291) after a rollback and fix cycle, with only about 1/3 of sessions seeing any flicker at all. His recent interview with Ryan Peterman about how Anthropic engineers actually work with Claude Code [is on YouTube](https://youtu.be/2Kch3tWMnw8).

### Matt Pocock Skills v1.2.0 and Sandcastle

Matt Pocock's [skills repository](https://www.aihero.dev/skills) continues its run as the most-starred agent skills collection on GitHub (135,000+ stars, 11,700+ forks). The [v1.2.0 release](https://aitoolly.com/ai-news/article/2026-09-05-matt-pocock-releases-skills-repository-a-collection-of-real-world-engineer-agent-tools) includes two new skills: /handoff for passing context between agents and /prototype for building throwaway prototypes to test design decisions, plus a Wait What skill for managing Opus verbosity. He also previewed a /show-me skill that pushes agents toward diagrams and annotated diffs instead of long prose explanations. His related [Sandcastle](https://github.com/ai-hero-dev) TypeScript framework orchestrates multiple sandboxed coding agents in parallel using git worktrees and Docker containers on separate branches.

### Peter Steinberger on agent loops at OpenAI

Peter Steinberger, creator of [OpenClaw](https://en.wikipedia.org/wiki/OpenClaw) (346k+ GitHub stars) who [joined OpenAI in February](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) to build next-generation personal agents, has been advocating that developers should stop prompting coding agents directly and instead design loops that prompt their agents. He was [announced as a speaker at Startup School 2026](https://x.com/ycombinator/status/2062942526856941994). OpenClaw remains an independent open-source platform with roughly half a million systems running it worldwide.

## Other Interesting Stuff

### swyx on tiny teams and the end of code review

swyx continues to push his thesis that the "Final Boss of Agentic Engineering" is killing the code review bottleneck. He has been [dogfooding an agentic GitHub clone](https://x.com/swyx/status/2080500752183960017) with built-in CI/CD, and recently [open-sourced The Coding Career Handbook](https://swyx.io/) (August 18). At AI Engineer conferences he has been highlighting the "tiny teams" trend: companies generating millions in revenue with fewer employees, enabled by AI agents. He also [vibe-designed a 6,000-person conference website](https://x.com/swyx/status/2021498862012334274) at the climbing gym "without reading a single line of code."

### Jerry Liu makes GTA 6 at home

Jerry Liu (LlamaIndex CEO) [made GTA 6 at home](https://x.com/jerryjliu0/status/2096702098570097045) "out of FOMO" during the Astra 3D modeling craze. He has also been focused on LlamaIndex's enterprise pivot, with recent work on LiteParse v2.1 (fastest PDF to markdown parser) and the argument that [the AI framework era is over](https://www.linkedin.com/posts/conorbronsdon_the-ai-framework-era-is-over-why-context-activity-7467986927149879297-LQYV) and the agent harness ate the abstraction layer.

### Karpathy at Anthropic

Andrej Karpathy, who [joined Anthropic in May 2026](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to work on pretraining under Nick Joseph, was quiet on X this window. His recent public appearance was at [Sequoia AI Ascent 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/) where he discussed the framework of "verifiability" in determining what AI can automate and how AI capability is unevenly distributed across domains.

### Boris Cherny still not writing code

Boris Cherny, head of Claude Code at Anthropic, was also quiet on X this window. For context: as of June 2026 he [hasn't written a line of code by hand in eight months](https://fortune.com/2026/06/11/anthropic-claude-boris-cherny-doesnt-write-code-by-hand-anymore/), ships dozens of PRs a day from his phone, and predicts the title "software engineer" will start disappearing by end of 2026, replaced by "builder." Anthropic's internal productivity has grown [almost 70% per engineer](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) thanks to Claude Code, and [4% of all public GitHub commits](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) are now authored by Claude Code with a prediction of 20% by year end.

### NSA, CISA and FBI warn of Chinese AI distillation campaigns

A joint advisory [warned](https://aiweekly.co/ai-news-today) that Chinese AI companies are conducting "industrial-scale" distillation campaigns targeting frontier model outputs.

*Sources: Web searches across x.com, simonwillison.net, lucumr.pocoo.org, techcrunch.com, fortune.com, qz.com, technode.com, artificialanalysis.ai, deadline.com, and various AI news aggregators. Direct Nitter/X access was blocked by the egress proxy; tweet content reconstructed from search engine excerpts and cached snippets. @bcherny, @karpathy and @simonw had no identifiable posts in the September 9-10 window; @LLMJunky's 3D/SVG Astra tips thread from the previous day's roundup was still active.*
