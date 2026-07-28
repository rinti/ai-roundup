---
title: "Karpathy's Bio Scare, Cherny Deletes 80% of Claude Code's Prompts, Kimi K3 Weights Drop & the Open-Weight Alliance Doubles"
date: "2026-07-28"
summary: "Karpathy changes his X bio and half the internet decides he quit Anthropic 68 days in — he calls it 'strange misinformation' and stays put, but the timing against Anthropic's absence from Jensen Huang's open-weights letter makes the rumor stick for a full news cycle. Boris Cherny drops a Startup School talk revealing Anthropic **deleted 80% of Claude Code's system prompt** for Opus 5 and the model got smarter — plus the claim that Opus 5 rewrote the entire Bun runtime (100k+ lines of Zig → Rust) in 11 days with thousands of parallel agents. Moonshot ships **Kimi K3 open weights** a day early — 2.8T parameters, 1.4TB on disk, the largest open-weight model ever released — while Jensen Huang's open-weights letter doubles from 25 to 50 signatories (Anthropic still absent). Mitsuhiko writes about Codeberg banning AI-generated code and the 'Tower of Babel' problem with vibecoded projects, Simon Willison questions whether AI-enhanced browsers are dead after Atlas retirement, and the MCP final spec with Tasks and Apps extensions is due today."
tags:
  - Karpathy & Anthropic
  - Claude Code & the System Prompt Diet
  - Kimi K3 Open Weights
  - The Open-Weight Alliance
  - Agentic Coding Practice
  - Other Notes
---

# AI Roundup — July 28, 2026

## Karpathy's Bio Scare

The weekend's biggest drama was a bio change. On July 26, [LLMJunky spotted](https://x.com/LLMJunky/status/2081114803834376218) that Anthropic-related info had vanished from Karpathy's X profile — just 68 days after [he joined to lead large-scale training](https://x.com/karpathy/status/2056753169888334312). The timing was brutal: Anthropic had just been conspicuously absent from [Jensen Huang's open-weights letter](https://www.forbes.com/sites/sandycarter/2026/07/25/huangs-open-weights-letter-doubled-to-50-without-amazon-and-anthropic/), and Karpathy is one of the most vocal open-source advocates in the field. The internet connected the dots at speed: philosophical rift, principled resignation, the works.

[Karpathy shut it down on July 27](https://x.com/karpathy/status/2081193667529003247): "weird misinformation to find circling on twitter, no." When [asked if a departure announcement wouldn't look different](https://x.com/karpathy/status/2081195664479068350), he joked: "I thought the way to announce such a thing was not to change your bio but to post the 10 paragraph essay that I just shared with the team?" [Gary Marcus confirmed flatly](https://x.com/GaryMarcus/status/2081200492810850343): "karpathy did not in fact leave anthropic."

The episode is worth noting not because anything happened, but because of what it reveals about the current atmosphere: Anthropic's open-weights stance is drawing enough heat that a *bio edit* becomes a 24-hour news cycle.

## Claude Code & the System Prompt Diet

[Boris Cherny appeared at YC Startup School](https://startup.whatfinger.com/2026/07/27/boris-cherny-building-claude-code/) alongside Diana Hu — fresh off the Opus 5 launch — and the headline number is striking: **Anthropic deleted 80% of Claude Code's system prompt for Opus 5, and the model performed better without it.** ([Video on YouTube](https://www.youtube.com/watch?v=qyPCVqFUyDo))

Cherny's thesis: today's frontier models are being hobbled by products designed for yesterday's weaker models. The biggest opportunity isn't more tokens or better prompts — it's giving the model harder tasks with fewer instructions. The intelligence of Opus 5 meant that behaviors which previously required explicit scaffolding were now inherent.

The headline demo: Opus 5, given a single instruction, **rewrote the entire Bun JavaScript runtime — 100,000+ lines of Zig — into Rust** in 11 days using thousands of parallel agents. He also cited Opus 5 hitting 30% on the ARC AGI benchmark, up from low single digits with prior models.

[Diana Hu's takeaway](https://x.com/sdianahu/status/2081791352065712350): "the big opportunity for startups is shipping products that use the inherent model capability nobody has explored yet — that's the product overhang."

This builds on Cherny's [Steps of AI Adoption framework](https://explainx.ai/blog/boris-cherny-steps-ai-adoption-claude-code-july-2026) from July 16 — five maturity levels from Gated (0) to AI-native (1,000+ agents) — which hit 251k+ views when Lance Martin reposted it.

## Kimi K3 Open Weights Drop

Moonshot AI [released the Kimi K3 open weights](https://qz.com/moonshot-ai-kimi-k3-open-weights-download-072726) on July 26 — a day ahead of the announced July 27 target — making it **the largest open-weight model ever released**: 2.8 trillion parameters, 1.4TB on disk in MXFP4 precision, under a Modified MIT license.

The architecture is mixture-of-experts: only 16 of 896 experts fire per token (~50B active parameters), so per-token compute resembles a mid-size model despite the massive parameter count. Context window stretches to 1M tokens.

Benchmarks place it in the tier below frontier — [it beats Claude Opus 4.8 and GPT-5.5 across most evaluations](https://theairankings.com/moonshot/kimi-k3/) but trails Fable 5 and GPT-5.6 Sol. The key story is that this is open-weight and roughly half the API cost of Opus 4.8. Simon Willison [wrote up his first impressions on July 16](https://simonwillison.net/2026/Jul/16/kimi-k3/) when the API went live, noting it was capable but expensive — his pelican SVG test burned 16,000+ output tokens (~$0.25).

The infrastructure requirements are real: [plan for 2.5-3TB free disk](https://aliteq.com/kimi-k3-open-weights-hardware-what-it-takes-to-run) when staging, cache, and operational copies are considered. The official Hugging Face repo went ungated with 96 weight shards.

## The Open-Weight Alliance Doubles

[Jensen Huang made his first-ever post on X](https://www.newsbytesapp.com/news/science/jensen-huang-debuts-on-x-and-champions-open-weight-ai/tldr) on July 24 to promote ["Open Weights and American AI Leadership"](https://blog.corenexis.com/open-weights-american-ai-leadership) — a letter arguing the US maintains its AI lead through an open model ecosystem, not by locking the best AI behind closed APIs. The post hit 11 million views in hours.

Original signatories: Nvidia, Microsoft, Meta, IBM, Dell, Palantir, a16z, Hugging Face, Y Combinator, Mozilla, Mistral, Replit, Perplexity, and the Linux Foundation among 25 total. Within 24 hours, [the list doubled to 50](https://www.forbes.com/sites/sandycarter/2026/07/25/huangs-open-weights-letter-doubled-to-50-without-amazon-and-anthropic/) — including OpenAI and Google joining.

**Amazon and Anthropic remain absent.** [Anthropic's silence is the loudest signal](https://startupfortune.com/anthropics-silence-on-nvidias-open-weights-letter-is-the-most-revealing-thing-about-it/) — Dario Amodei has consistently warned Washington that powerful open-weight models represent a national security risk, a position that conveniently aligns with their closed-API business model. This is the direct backdrop to the Karpathy bio scare above.

## Agentic Coding Practice

### Mitsuhiko on vibecoding's Tower of Babel

Armin Ronacher published ["Vibecoding and the possible collapse of a shared language"](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) (July 13, still generating discussion). His argument: when vibecoded projects scale up, they become like Babel — not because nobody can communicate, but because **nobody needs to**. Each developer has a tireless AI translator that can explain any corner of the code and make local alterations, while the architectural language that would let *humans* reason about the system together disappears. The key distinction: at Babel, loss of common language stops construction. In AI-assisted engineering, construction continues after shared understanding has already collapsed.

He followed up on July 24 with ["Codeberg Divides"](https://lucumr.pocoo.org/2026/7/24/codeberg-divides/) — Codeberg changed its terms to exclude AI-generated projects. Ronacher supports GitHub facing competition but argues: "democracy is a way of making a decision, not a guarantee that the decision is inclusive, wise, or even good for the people already depending on it. Codeberg drew a democratic, but suboptimal line."

### Simon Willison: AI browsers are dead, and the Claude Code team fireside

[Simon Willison questioned](https://x.com/simonw/status/2075661863757746535) whether the AI-enhanced browser category is coming to a close after OpenAI retired Atlas (shutting down August 9) in favor of the browser embedded in the ChatGPT app: "The security/privacy issues remain unsolvable IMO — I want my AI to use its own separate browser and stay out of the one I use."

His [fireside chat with Cat Wu and Thariq from the Claude Code team](https://simonwillison.net/2026/Jul/21/cat-and-thariq/) at AI Engineer World's Fair (published July 21) continues to circulate — key reveal: **Claude Tag (Claude Code via Slack) already lands 65% of the product engineering PRs** for the Claude Code team itself. The conversation covered Fable, coding agent security, evals, and tool design.

### Theo's GPT-5.6 deep dive

Theo published [a comprehensive GPT-5.6 review](https://finance.biggo.com/news/8696f3bca7cd59e8) — the headline: **GPT-5.6 Sol matches Fable at 1/38th the cost**, but it won't stop writing code. The model's eagerness to complete tasks leads to excessive generation: a five-line change becomes a 300-line rewrite plus 2,000 lines of tests. His recommendation: Sol on High reasoning for anything lasting more than ten minutes, Terra on Medium for shorter interactive work, Luna is designed to be orchestrated by smarter agents rather than used directly.

### Swyx / Latent Space: FLUX 3 and Databricks

[Latent Space covered Black Forest Labs' FLUX 3](https://www.latent.space/p/ainews-black-forest-labs-flux-3-multimodal) (released July 23) — a single set of weights trained on images, video, and audio simultaneously, then extended to predict robot actions. First major generative model where 20-second video with synchronized audio, image editing, and robotic control run through one backbone.

A recent episode also features Databricks cofounders Matei Zaharia and Reynold Xin discussing Omnigent, agent security, and why databases may matter more once AI agents start doing real work.

## Other Notes

- **MCP final spec due today (July 28).** The spec adds Tasks and MCP Apps extensions. [Amazon Bedrock's AgentCore](https://www.buildfastwithai.com/blogs/ai-news-today-july-27-2026), a declarative agent harness, is now GA — specify models, tools, and instructions while the runtime handles orchestration, memory, and error recovery. LangGraph 1.0 treats MCP tools as first-class nodes.
- **Nvidia's $250B data center play.** Nvidia is [in talks to provide ~$250B financial backstop](https://www.buildfastwithai.com/blogs/ai-news-today-july-27-2026) for OpenAI to lease a 10-gigawatt data center from SB Energy in Piketon, Ohio, plus a separate ~$350B for chip purchases.
- **Steipete at OpenAI.** Peter Steinberger (creator of OpenClaw, the open-source AI agent with 346k+ GitHub stars) is [speaking at Agentic AI Summit](https://github.com/steipete/speaking) August 1-2 in San Francisco, continuing his work at OpenAI building personal AI agents. His recent take: ["Agents are coming for all. We were just early."](https://www.techtwitter.com/profiles/steipete)
- **Matt Pocock's AI SDK v5 course.** Pocock published [57 exercises to master Vercel's AI SDK v5](https://github.com/ai-hero-dev) (updated July 23) as part of AI Hero, alongside the [Full Walkthrough: Workflow for AI Coding](https://www.youtube.com/watch?v=-QFHIoCo-Ko) workshop from AI Engineer — covering the "grill me" skill, the ~100k smart zone, and his Sandcastle harness for AFK parallel agent runs.
