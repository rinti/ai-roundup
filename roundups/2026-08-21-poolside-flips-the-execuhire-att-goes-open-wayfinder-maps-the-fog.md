---
title: "Poolside Flips the Execuhire, AT&T Goes Open & Wayfinder Maps the Fog"
date: "2026-08-21"
summary: "The deal of the day inverts a pattern we've watched all year: NVIDIA is paying Poolside $6B for a non-exclusive license to its Model Factory plus $1B at a $12B pre-money valuation, and this time the **109 employees leave while the founders stay** — Latent Space is calling it a reverse execuhire. The investor letter is remarkably candid: Poolside lost a 40,000-GB300 cluster because it couldn't raise $2B in six weeks, and its parting thesis splits the world into intelligence-bound problems (soon a low-margin commodity) and experiment-bound ones (where the real value is). The strategically loudest datapoint came from AT&T: **40% of employee AI usage now routes to open models**, headed for 60-70%, with coding costs down 56% for a 2% quality drop at 45B tokens/day. Anthropic made computer use, the browser tool, the Skills API, and the Files API generally available (1.28M views). Matt Pocock talked to Latent Space about his new **/wayfinder** skill for planning through the \"fog of war,\" a tidy little lesson in designing skills around leading words. Theo spent the day arguing your Mac's filesystem is throttling your agents (252k views plus a video), and admitted he burned $800 in Codex tokens *after* hitting 0% — to which an OpenAI staffer replied that not cutting users off mid-task is deliberate. Also: OpenAI's first Vera Rubin racks running the training stack, ChatGPT's Apple Messages plugin at 3M views, Gemini 3.7 Flash putting up 84.6% on ARC-AGI-2 at $0.25/task, Chroma's Foundation memory preview, Simon Willison on ChatGPT's site: operator surge, and Bun 1.4's WebView. (Nitter was rate-limited again all morning; same fallback sourcing as yesterday.)"
tags:
  - Agents, Tokens & Money
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - OpenAI & Google
  - Deep Reads
  - Models & Benchmarks
---

# AI Roundup — August 21, 2026

## Agents, Tokens & Money

### Poolside: the execuhire, but backwards

[Eric Newcomer broke it](https://x.com/EricNewcomer/status/2090521156818493795): Poolside struck a **non-exclusive licensing deal with NVIDIA for $6 billion, plus a $1 billion investment at a $12 billion pre-money valuation**, per a letter to investors. 109 Poolside employees are getting offers to join NVIDIA. In Windsurf-Google, Character-Google, and Scale-Meta, the founders jumped ship and left employees holding the company. Here the employees leave with the payout and the founders stay. [Latent Space's writeup](https://www.latent.space/p/ainews-poolside-gets-12b-reverse) coins "reverse execuhire" for it, and notes 109 is most of Poolside's technical staff — Eiso Kant said on their podcast last month that fewer than 115 people built the model.

The investor letter is unusually honest about why. Poolside had a six-week window at the end of last year to raise $2B for a 40,000-GB300 cluster coming online in January. "We didn't close it in time, and we lost the cluster." And: "the scale of next year's frontier models requires far more than an order of magnitude larger cluster."

What's left is a three-way split: NVIDIA gets the Model Factory and the researchers, the PIC infraco (spun out in January, building a 1.2GW Texas datacenter, reportedly scaling toward 7GW) continues as a separate entity, and the founders pivot Poolside itself toward something they're "not ready to share." The letter's parting thesis is worth reading on its own: the world's problems are either *intelligence-bound* (software, accounting, math theorems — destined to be a low-margin commodity served by open models) or *experiment-bound* (require real-world feedback loops), and AI's ultimate value comes from the second, as "the world's most valuable scientific discovery engine."

[Elie Bakouch's read](https://x.com/eliebakouch/status/2090592920621515098): "very HARD pivot on infrastructure and no model training anymore" — PIC got a new CEO two months ago and a CFO three days ago.

### AT&T is the enterprise datapoint labs feared

[Hesamation's summary](https://x.com/Hesamation/status/2090518831349268851) (2,911 likes, 208k views) of AT&T's internal AI deployment: **40% of employee AI usage routes to open models, with a target of 60-70%. Coding costs down 56% for a 2% quality drop, at 45B tokens/day.** AT&T's AI chief says open models are "just as good or better" for many tasks; frontier models are reserved for the critical work. This is the hybrid-routing future that yesterday's TrueForge benchmark hinted at, now running at telco scale. [Amir framed it](https://x.com/amir/status/2090515013635305683) as a warning for OpenAI and Anthropic's enterprise moat, and [Ollama](https://x.com/ollama/status/2090505028998140182) simply said welcome.

Related price pressure: [GPT-5.6 Sol is 50% off through Router](https://x.com/eglyman/status/2090521785909309572), amplified by [GitHub](https://x.com/github/status/2090577927905874389) and [VS Code](https://x.com/code/status/2090583188326187464) for Copilot users.

### Usage caps are soft, apparently on purpose

Theo [noticed](https://x.com/theo/status/2090621019476427174) (1,134 likes, 94k views) he could keep burning tokens after hitting his Codex limit: "I had a long running goal that did at least $800 of tokens after I hit 0% remaining." He was quoting an OpenAI staffer explaining it's deliberate: "we made a deliberate choice not to cut users off mid-task when they hit their usage limits. didn't seem helpful to stop someone in the middle of their work." Meanwhile [bridgemindai complained](https://x.com/bridgemindai/status/2090386359743893620) that a $200/mo Pro plan can be exhausted in a single heavy Codex day. The labs are still hunting for the boundary between premium access and sustainable agentic usage, and right now that boundary leaks in the user's favor.

## Claude Code & Anthropic Updates

### Computer use, browser tool, Skills API, and Files API hit GA

[ClaudeDevs](https://x.com/ClaudeDevs/status/2090540270219567575) (2,963 likes, **1.28M views**): all four are now generally available on the Claude Platform. Computer use and the browser tool are pitched at automating applications that have no API, "with fewer round trips per task." The Skills API adds **versioned reusable skills**; the Files API gets expiration control, 5x higher rate limits (500 RPM), and 1 TB per org. Skills went from a Claude Code convention to a platform API with versioning in about four months.

Also shipped: [an AG-UI cookbook](https://x.com/ClaudeDevs/status/2090511582531072265) (1,721 likes, 175k views) pairing Claude Managed Agents with CopilotKit's open Agent-User Interaction Protocol — chat threads map to managed sessions, and text, tool calls, and thinking stream into whatever custom UI you build.

## Agentic Coding & Agent Harnesses

### Matt Pocock's /wayfinder: planning through the fog of war

Latent Space [interviewed Pocock](https://www.latent.space/p/wayfinder-skill) about his new **/wayfinder** skill (his skills repo is now past 220k stars), built for projects "where you can't quite decide everything right at the start." The origin problem is relatable: he schedules big batches of overnight AFK-agent work, and the planning stage was the bottleneck because he was constantly babysitting session token budgets. Wayfinder is an orchestrator layer that splits planning across multiple threads (prototyping, research), then pulls it back into a central document.

The design insight is the best part. A skill is context management, so you have to design the information flow first: a child planning session needs a **map** (all decisions made so far) and a **ticket** (its specific task) inside its **session**. And the vocabulary is load-bearing — he calls these "leading words." "If you just call everything a ticket, or refer to it in different ways in different places, it's going to be really confused and you're going to get strange behavior." Name the entities precisely and the agent maps them cleanly. This is the same lesson as domain-driven design, rediscovered for prompts.

### Theo: your Mac is slowing your agents down

[The tweet](https://x.com/theo/status/2090528543746965991) (1,312 likes, 252k views): "Your Mac is slowing you down. Moving to Linux has exponentially improved performance for my agents, in particular on the file system side." The full argument is in the video, **[Your Mac is slowing you down (a rant about file systems)](https://www.youtube.com/watch?v=4wVNFaFDIn8)** (30k views in hours): the same npm install that takes under 10 seconds on his Linux machine took over 30 on the Mac, and deleting node_modules is worse. Agents multiply filesystem-heavy operations, so APFS's small-file performance stops being an annoyance and starts being a tax on every loop iteration. Third video this week in his "the terminal/laptop setup isn't built for agents" arc.

### Chroma announces Foundation

[Jeff Huber](https://x.com/jeffreyhuber/status/2090466566743974191) (139k views): "I've been looking forward to today for 3 years." **Foundation** is Chroma's answer to agent memory, a research preview that builds *self-improving memory from your prior agent sessions*. It lands in the middle of the shift from single-shot agents to persistent setups that accumulate state, skills, and memories.

Worth holding next to two papers from the same day, because the research is less rosy than the product launches. [omarsar0 highlighted](https://x.com/omarsar0/status/2090466402809561334) work on **harness continual learning**: when prompts, memories, skills, and routing rules evolve independently of the model, the key failure mode is harness-level forgetting — improving one component silently breaks previously reliable behavior. Their fix, guarded evolution, separates proposing updates from committing them (reported >10% gains). And [dair_ai flagged](https://x.com/dair_ai/status/2090559561128407336) a study showing memory-based self-improving agents look worse once you control for task ordering and evaluation variance. Memory products are shipping faster than the evidence that memory helps.

### Gisting, the underused trick

[Mikhail Parakhin](https://x.com/MParakhin/status/2090494322101957006): "Gisting is the most underappreciated LLM technique right now. It is basically 'zipping' your prompt before running in production." The prompt stops being human-readable but gets much smaller: ~40% lower end-to-end latency, ~15% higher throughput, and he claims *better* results, linking a Shopify engineering writeup. Pairs well with [Qdrant's semantic-caching numbers](https://x.com/qdrant_engine/status/2090461354557673915) from the same day: 57.1% hit rate, 55.7% fewer tokens, ~15ms hit latency.

## OpenAI & Google

### ChatGPT moves into Apple Messages

[The biggest product tweet of the day](https://x.com/ChatGPT/status/2090499359641329950) (6,495 likes, **3.08M views**): a new Apple Messages plugin lets ChatGPT Work and Codex on Mac search your messages, catch you up on conversations, and draft and send replies. Combined with the same day's [Computer History rollout to the EEA, UK, and Switzerland](https://x.com/OpenAIDevs/status/2090487766442512398) (ChatGPT remembers activity across your apps and websites, with Record & Replay), the strategy is explicit: capture workflows on-device and turn repeated actions into reusable skills. Letting an agent read and *send* your texts is quite a trust ask, and the reply counts suggest people noticed.

Also from OpenAI: [collaborative editing for ChatGPT Sites](https://x.com/OpenAIDevs/status/2090487779587477626) with Codex managing git/CI, transparent backgrounds in GPT-Image-2, and the infrastructure flex — [udayruddarraju](https://x.com/udayruddarraju/status/2090343188393246973) (358k views): "our first NVIDIA Vera Rubin racks are here and now running our training stack," tied explicitly to next-generation frontier pre-training. [Greg Brockman called it](https://x.com/gdb/status/2090515992506147198) a major milestone in the OpenAI-NVIDIA partnership. Same day NVIDIA licensed Poolside's model factory. Busy week in Santa Clara.

### Gemini 3.7 Flash keeps being embarrassingly cheap

[ARC Prize's verified numbers](https://x.com/arcprize/status/2090500144550539327): **ARC-AGI-2 at 84.6% for $0.25/task, ARC-AGI-1 at 95.5% for $0.12/task.** That's frontier-adjacent reasoning at pocket-change prices, a day after taking #1 on AA-AnalystAgent. Google also crossed [1B Gemma downloads](https://x.com/osanseviero/status/2090490264112738579).

## Deep Reads

### Simon Willison: ChatGPT search now uses site: at scale

[The post](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/), sourced from Promptwatch (a "GEO" — Generative Engine Optimization — tracking product): the share of ChatGPT Search fanout queries containing the `site:` operator hovered at 0.3-0.5% for weeks, dipped during what looks like a staged rollout August 3-5, then **jumped to 16-17% on August 8**, right on the GPT-5.6 rollout. Promptwatch also reports ChatGPT has greatly reduced Reddit's use as a search source since August 18. Willison's practical gripe: OpenAI actively obscures its system prompts, so verifying any of this from the outside means poking at the product and guessing. SEO is dead, long live GEO, and the new Google update you reverse-engineer is a lab's search-tool prompt.

### Bun 1.4 ships a browser, Willison ships a scraper on it

**[A shot-scraper-style JSON API on Bun 1.4's new Bun.WebView](https://simonwillison.net/2026/Aug/20/bun-webview-json-api/)** — Bun 1.4 is the first stable release since the Rust rewrite (downplayed in the release notes, which instead tout 2,900 bug fixes, 5x lower idle CPU, and a pile of new APIs: Bun.Image, Bun.WebView, Bun.markdown, Bun.cron, Bun.Terminal). `Bun.WebView` puts browser automation in the runtime core, via macOS WebKit or CDP against local Chromium. Willison had Claude Code for web build a ~150-line zero-dependency TypeScript service exposing `/javascript` and `/screenshot` endpoints, mostly to answer a capacity question: full Chrome against complex pages needs a 192-256MB container, tested with cgroups. Browser automation without Puppeteer or Playwright is now a runtime feature, not a dependency tree.

## Models & Benchmarks

**Meta's Muse Spark 1.2 had a good benchmark day.** [AIatMeta's demos](https://x.com/AIatMeta/status/2090485743034716420) span visual coding, robotics planning, and audio-visual understanding, plus a preview of WildArtifactBench, an internal eval scoring practical multimodal tasks by win rate and Elo. Third parties agreed: [Agent Arena](https://x.com/arena/status/2090484142408618033) measured +2.1% net improvement (Bash Recovery +11.4%), and DesignArena put it #1 for Video-to-Website and #2 for Image-to-HTML, sitting on the price-preference Pareto frontier.

**GLM-5.3 Max keeps climbing:** [Code Arena](https://x.com/arena/status/2090581559262798055) projects it to #2 among open models and #8 overall on WebDev at 1597 points and $3.65/M. [ZixuanLi_ resurfaced](https://x.com/ZixuanLi_/status/2090564295696306436) SAO (Single-Rollout Asynchronous Optimization) as the RL advance behind the 5.2/5.3 gains — a nice companion to Jie Tang's death-of-params thread from yesterday's issue.

**Cerebras CS-4:** [kimmonismus's summary](https://x.com/kimmonismus/status/2090468333476860347) — roughly double the performance on the same 5nm wafer via redesigned power delivery and cooling. 4T transistors, 900k cores, 250 PFLOPs per WSE-3 Turbo, and the practitioner-relevant claim: **4,400+ tokens/s per user on GPT-OSS-120B**, up to 30x GPU-based systems.

**Kimi K3 on Ollama** is [now rolled out to over half its subscription base](https://x.com/ollama/status/2090505028998140182) with US/EU hosting and zero data retention — open-weight distribution catching up to open-weight quality.

---

*Sourcing notes: nitter.net returned 429 for every request again today, xcancel's RSS now demands per-reader whitelisting, and the other public instances remain behind Anubis bot walls. Assembled from Bluesky (@simonwillison.net, @mitsuhiko.at — Armin has posted nothing new since the reasoning post covered yesterday), blogs, Theo's YouTube feed, the fxtwitter API for individual tweets, and Latent Space's AINews recaps. No thread replies could be read, and no usable feed today for @mattpocockuk (covered via the Latent Space interview instead), @trq212, @LLMJunky, @bcherny, @steipete, @swyx, @karpathy, @jerryjliu0, @leerob, or @thsottiaux; @potetotes remains empty.*
