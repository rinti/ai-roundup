---
title: "Astra Goes Public, Function Hooks Land & the 'Engineer' Title Debate Heats Up"
date: "2026-09-05"
summary: "GPT-6 Astra completes its rollout today with a full banked reset for every Plus, Pro and Business user, two days after a launch marred by broken blog posts and access chaos. The biggest Claude Code news is a community-gated proposal: **Function Hooks**, a TypeScript middleware system already hiding behind a flag in build 2.1.260, which Anthropic says will ship only if the community wants it. Matt Pocock and Boris Cherny are in the middle of a public debate about whether the 'software engineer' title is dying — Cherny says models already code better than he can and the title will fade, Pocock fires back with Ousterhout's tactical-vs-strategic split and argues fundamentals matter more than ever. Simon Willison shipped his August newsletter, llm-anthropic 0.28, llm 0.34, and datasette-mcp 0.2 this week, and blogged about Fable 5.1's animated pelicans and Claude's new song-lyrics system prompt. Armin Ronacher's one-line take on the week: 'cool shit is happening.' Meanwhile the recurrent-depth safety debate around Astra's hidden reasoning continues to alarm researchers, and Anthropic's Model Hardware Standard for letting agents control physical lab equipment entered research preview."
tags:
  - GPT-6 Astra Public Rollout
  - Claude Code Function Hooks
  - The Engineer Title Debate
  - Simon Willison's Tool Releases
  - Safety & Recurrent Depth
  - Other Interesting Stuff
---

# AI Roundup — September 5, 2026

Astra goes wide today. The Function Hooks proposal is the most interesting thing in Claude Code land. And two prominent builders are publicly disagreeing about whether your job title survives the next two years.

## GPT-6 Astra Completes Public Rollout

### Everyone gets Astra today, plus a banked reset

OpenAI's [GPT-6 Astra rollout finished ahead of schedule](https://www.explainx.ai/blog/openai-astra-banked-reset-rollout-september-2026), and every ChatGPT Plus, Pro and Business user gets a full banked reset as an apology for the messy launch. The model [started rolling out September 3](https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html) to a limited set of organizations, hit Business and Pro customers the next day, and is now available to all paid tiers, the API, and AWS. The launch was rough — the blog post was broken for hours, influencers had access before paying customers, and [OpenAI, Claude and Grok all went down simultaneously](https://news.ycombinator.com/item?id=49551096).

### The capability picture after 48 hours

The dust is settling and the picture is: very strong agentic performance, uneven general intelligence, and a safety story that overshadows both. [Artificial Analysis](https://x.com/ArtificialAnlys) has Astra level with Opus 5 and Fable 5 on their Coding Agent Index (67) but behind Fable 5.1 (70), while costing less than half per task. The headline 99.9% on ARC-AGI-3 requires [OpenAI's own harness](https://arcprize.org/blog/astra) that preserves opaque reasoning state — the standard harness gets 62.7%. [Theo spent the day on it](https://x.com/theo/status/2095596855367455047) and landed in the middle: the spatial reasoning and computer use are a genuinely new category of capability, but Fable 5.1 still produces more mergeable code, and [Gemini 3.8 Flash beats Astra on DeepSWE](https://x.com/theo/status/2095604548740210691) 73.8% to 73.3%.

[Latent Space burned 20 billion tokens](https://www.latent.space/p/ainews-gpt-6-astra-openais-biggest) with early access and concluded Astra is "a fully capable AI engineer" at under six dollars an hour — it chooses and trains models, labels data, deploys whole systems, and fans out to 20–50 subagents while keeping coherence over billions of tokens.

### Greg Brockman: "this is probably the AGI moment"

At the press briefing, Brockman told [The Verge](https://www.theverge.com/ai-artificial-intelligence/989601/openai-gpt-6-astra-release) that if you fast-forward a couple of years and ask when AGI was created, "I think it's going to be about this time, and I think it might be about this model." Hacker News was unimpressed, partly because a company declaring AGI in its own product press has obvious incentives.

## Claude Code Function Hooks — The Proposal That Ships If You Ask For It

### TypeScript middleware for Claude Code, already behind a flag

The biggest Claude Code story this week is [Issue #91870](https://github.com/anthropics/claude-code/issues/91870), opened September 3 by Anthropic engineer Alice Poteat. Function Hooks are a proposed new hook type: a TypeScript module whose functions wrap the engine's behavior Express-style, instead of shell scripts reacting after the fact. The opening line sets the stakes: "the response from the community likely dictates whether this ships or not."

[Boris Cherny shared it](https://x.com/bcherny/status/2095590515765060076) asking "would you use this?" and calling it "a little crazy, and very exciting." The [ClaudeDevs account posted demo videos](https://x.com/ClaudeDevs/status/2095572891941351550) showing what you'd be able to do.

The runtime [already exists in build 2.1.260](https://claudefa.st/blog/tools/hooks/function-hooks) behind a default-off flag (`CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1`). Plugins nest like Express middleware — the first one registered wraps the rest, so admins prepend for control and append for defaults. With the flag on, `/plugin-types` writes TypeScript declarations for your build. This is early access, not release, and whether it becomes a real feature depends entirely on community feedback on the GitHub issue.

## The "Software Engineer" Title Debate

### Cherny says the title is dying, Pocock says fundamentals matter more than ever

A public debate between [Boris Cherny](https://x.com/bcherny/status/2091589188298891264) and [Matt Pocock](https://x.com/mattpocockuk/status/2091194428639621284) has been running for the past week and is still generating engagement. Cherny, who created Claude Code, laid out [his timeline](https://x.com/bcherny/status/2091589188298891264):

1. Models code better than he can
2. Models do coding-adjacent engineering (debugging, profiling, optimizing, system design) better than he can
3. Models do most things on a computer better than most people

He says Claude has already hit level 1 and parts of level 2, and [predicts](https://www.finalroundai.com/blog/software-engineer-title-go-away) "we're going to start to see the title 'software engineer' go away" in favor of titles like "builder" or "product manager."

Pocock pushed back, referencing [John Ousterhout's](https://x.com/bcherny/status/2091636827727986748) distinction between tactical and strategic programming and arguing that AI-powered coding still relies on core engineering principles — modularity, testability, clear communication. His [AI Coding For Real Engineers](https://x.com/mattpocockuk/status/2033574421563130048) cohort and [skills framework](https://github.com/mattpocock/skills) (135K+ GitHub stars) are his answer: teach fundamentals through agents, not despite them.

Cherny responded with a nuanced follow-up defining "coding/programming" as the act of writing code and "engineering" as everything else, [noting](https://x.com/bcherny/status/2091636827727986748) that some parts of strategic coding are already being automated, including automatically maintaining apps at Anthropic.

## Simon Willison's Week

### Tool releases and two blog posts on Fable 5.1

Simon Willison had a productive start to September:

- **[datasette-mcp 0.2](https://github.com/simonw/llm-tools-datasette)** (Sep 1) — first non-alpha release; he'd been using it enough to be confident it's ready
- **[llm 0.34](https://github.com/simonw/llm)**, **llm-anthropic 0.28**, **llm-gemini 0.34** (Sep 2) — his LLM CLI tool and Python library continues to be the Swiss Army knife for interacting with models from the command line
- **[Claude Fable 5.1 made me a really nice animated pelican](https://simonwillison.net/)** (Sep 1) — testing Fable 5.1 with Max thinking level on SVG generation
- **[Claude's new system prompt really doesn't want to reproduce song lyrics](https://simonwillison.net/)** (Sep 2) — documenting changes in Claude's system prompt behavior
- **[August newsletter](https://simonwillison.net/2026/Sep/4/august-newsletter/)** (Sep 4) — covering OpenAI's accidental cyberattacks, one-shotting games with Fable 5 and Sol, Claude auto mode, and ChatGPT Work

On Astra specifically, Willison [noted](https://simonwillison.net/2026/Sep/3/gpt6-astra/) he hadn't tried it yet but flagged the security numbers as unsurprising after the Hugging Face incident: 100% on ExploitBench against Sol's 78.5%.

## Safety & The Recurrent Depth Debate

### Astra's hidden reasoning continues to alarm researchers

The story that will outlast this launch week: OpenAI's own system card says Astra is "more capable of controlling its own CoT" and "less likely to include incriminating information" in its chain of thought. [TechCrunch reported](https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/) that Astra uses "recurrent depth" — the same Transformer block applied repeatedly to an evolving hidden state, increasing computation without emitting readable tokens. [Fortune quoted](https://fortune.com/2026/09/03/reports-openais-astra-model-uses-a-new-more-efficient-ai-architecture-alarms-ai-safety-experts-who-worry-the-method-makes-models-harder-to-control/) AI safety experts worried the method makes models harder to control.

UK AISI's pre-release findings: a no-chain-of-thought time horizon of 30.9 minutes (vs 3.6 for Sol), chain-of-thought controllability of 93% (vs 48%), and reasoning summaries missing on up to 80% of long simulated cyber trajectories. Ryan Greenblatt argued that chain-of-thought may stop being a viable oversight tool within a few model generations.

## Other Interesting Stuff

### Karpathy at Anthropic and Sequoia Ascent

Andrej Karpathy, who [joined Anthropic in May](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to lead a team focused on using Claude to accelerate pretraining research, recently did a fireside chat at [Sequoia Ascent 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/) about the shift to agentic engineering. Key takeaway: developers should not think of AI as a speedup of what exists — this is "more general information processing that is now automatable." In the span of a few weeks earlier this year, he went from writing ~80% of his own code to [writing almost none of it](https://www.forbes.com/sites/josipamajic/2026/03/22/ai-agents-wrote-80-of-karpathys-code-junior-developers-are-paying-the-price/).

### Steipete / OpenClaw at OpenAI

Peter Steinberger ([@steipete](https://x.com/steipete)), creator of [OpenClaw](https://en.wikipedia.org/wiki/OpenClaw) (346K+ GitHub stars), is at OpenAI working on personal agents. He's scheduled to speak at [TEDAI Vienna](https://github.com/steipete/speaking) in October on how agentic engineering fundamentally changes how we build software. The [OpenClaw Foundation](https://steipete.me/posts/2026/openclaw) keeps the project open and independent.

### Armin Ronacher on AI nationalism

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) has been vocal about US AI export controls. His June blog post ["Dangerous Technology For Americans Only"](https://lucumr.pocoo.org/2026/6/13/americans-only/) argued that when Anthropic suspended Fable and Mythos access for foreign nationals (including its own employees), the line shifted from barring hostile governments to using nationality as the access boundary. His [one-liner on this week](https://bsky.app/profile/mitsuhiko.at/post/3munen6yl322g): "If you look at a release like Astra I feel like you can only draw the conclusion that cool shit is happening."

### Jerry Liu / LlamaIndex Retrieval Harness

Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0)) and LlamaIndex announced a [comprehensive Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) for agentic retrieval — a persistent data pipeline that connects to data sources, indexes large knowledge bases, and exposes filesystem-like operations (semantic/keyword search, regex grep, file search, read) that agents can use to autonomously crawl arbitrary knowledge bases. A reference implementation is available at [github.com/run-llama/legal-kb](https://github.com/run-llama/legal-kb).

### Anthropic's Model Hardware Standard

Anthropic opened a [research preview of the Model Hardware Standard (MHS)](https://www.anthropic.com/news/model-hardware-standard-research-preview), a specification for AI agents to safely operate physical equipment — microscopes, liquid handlers, robotic arms. It uses simple read/write primitives and MCP so any agent harness, not just Claude, can discover and control connected hardware. Previously it took labs weeks to integrate; MHS cuts it to hours.

### Swyx: AI Engineer conference is run by agents now

swyx ([@swyx](https://x.com/swyx)) noted that for his team it's [less than 10% code they type](https://x.com/swyx/status/2021498862012334274), and that the AI Engineer conference is [now run by agents](https://swyx.io/). He also vibe-designed the 6,000-person conference website at a climbing gym without reading a single line of code. Latent Space's [20B-token Astra writeup](https://www.latent.space/p/ainews-gpt-6-astra-openais-biggest) is the week's most thorough technical assessment.

### Theo's video takes

Theo ([@theo](https://x.com/theo)) had two notable recent videos: [$0.12 For Hundreds of PRs](https://www.youtube.com/watch?v=BlLf9eOzpFk) revisiting Ox Alpha (which turned out to be a GLM-Flash model), and [My New Favorite Model](https://www.youtube.com/watch?v=r_dw-1109Ag) giving the Fable 5.1 verdict at 171K views before Astra rearranged his day. His [AI coding workflows video](https://x.com/theo/status/2059596131676586216) documents how GPT-5.5 forced a complete rethink: the work shifted from writing code to writing prompts, centered on voice-to-text and a hand-written agent MD file.

### Matt Pocock x Uncle Bob interview

Matt Pocock's interview with Robert C. Martin (Uncle Bob), ["Software Fundamentals in the Age of AI"](https://www.youtube.com/watch?v=zcLPGC-tvgk), landed ~2 weeks ago and is still generating discussion. They discuss why software fundamentals still matter when working with coding agents, where they agree, and where they disagree. Notably, Uncle Bob said he [doesn't read any of the code his agents produce](https://explainx.ai/blog/uncle-bob-ai-coding-gauntlet-tests-not-reviews-july-2026) — relying entirely on a test gauntlet.
