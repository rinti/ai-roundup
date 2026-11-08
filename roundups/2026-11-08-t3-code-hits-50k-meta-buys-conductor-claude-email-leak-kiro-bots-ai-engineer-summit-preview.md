---
title: "T3 Code Hits 50K Stars, Meta Buys Conductor, Claude Code Email Leak, Kiro Bots Launch & AI Engineer Summit Preview"
date: "2026-11-08"
summary: "**T3 Code** crossed 50K GitHub stars as telemetry showed Opus 5.5 fails twice as often on max effort vs high. **Meta acquired Conductor**, the multi-agent coding app, with the team joining Meta Superintelligence Labs and Conductor Cloud shutting down this month. A **Claude Code privacy bug** leaked users' email addresses in User-Agent headers; Anthropic patched it in v2.1.317 but testers report mixed results. **AWS launched Kiro Bots** inside Kiro Crew for long-running autonomous coding agents with memory. The **AI Engineer Code Summit** starts Monday in San Francisco with speakers from Anthropic, Google DeepMind, Warp, Ramp, and Earendil. Simon Willison shipped **datasette-agent 0.5a0** and **llm 0.37**, and Karpathy's **HackerTube** project continues to draw discussion about harness engineering and letting agents do the work."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Codex & OpenAI
  - Models & Research
  - Industry News
  - Upcoming Events
  - Other Interesting Stuff
---

# AI Roundup — November 8, 2026

## Agentic Coding & Agent Harnesses

### T3 Code crosses 50K GitHub stars

Theo's [T3 Code](https://github.com/pingdotgg/t3code) hit 50,000 GitHub stars this week, growing from ~33,800 on Oct 31 to 45,475 on Nov 4 to 50.5K now. Theo [asked followers](https://x.com/theo/status/2118957431070085246) to push it to 50K and called the result "surreal." T3 Code is an open-source control plane for coding agents (Claude Code, Codex, Cursor, OpenCode, Grok Build, Google Antigravity) that lets you manage them all from your phone or browser.

Theo also [claimed](https://x.com/theo/status/2118842996414415220) (2,838 likes) that "the gap between an average engineer and the best engineers was never quite 10x, but it was meaningful. AI has made the gap at least 100x." When challenged to show the code, he [pointed](https://x.com/theo/status/2118858755249189234) to the T3 Code repo: "Here's a repo where 3 people are outshipping multiple trillion-dollar companies who have unlimited tokens."

On agent coordination, Theo [pushed back](https://x.com/theo/status/2118641861661446392) on a comparison chart saying T3 Code's agent coordination is "without question SOTA right now" and that the Gemini team contributed PRs to make their integration best-in-class.

Source: [T3 Code on GitHub](https://github.com/pingdotgg/t3code) · [Theo on X](https://x.com/theo)

### Opus 5.5 fails twice as often on max effort

Adam Holter, with access to T3 Code's anonymized telemetry, [posted](https://x.com/AdamHoltererer/status/2118871687848477030) that "Opus 5.5 fails twice as many T3 turns on max as on high." The extra failures happen in every turn-length bucket, with most occurring in the first 30 seconds. Sol shows the same pattern at 1.4x. Theo [shared it](https://x.com/theo/status/2118894224733249655) as "more reasons to never use 'max' reasoning." The thread doesn't define what counts as a "failed turn" — API error, bad tool call, or bad result — and nobody answered when asked.

### Meta acquires Conductor

[Meta acquired Conductor](https://axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor) on November 4, the startup whose app runs multiple AI coding agents in parallel on separate copies of your codebase. Co-founders Charlie Holtz (CEO) and Jackson de Campos (CTO) and the team are joining Meta Superintelligence Labs. Financial terms were not disclosed. Conductor's website claims over 100K users.

Conductor Cloud is [shutting down](https://www.infoworld.com/article/4245065/meta-acquires-conductor-as-ai-coding-shifts-toward-multi-agent-development.html) this month — reports disagree on whether it goes read-only on Nov 13 or shuts down entirely on Nov 20. New sign-ups and downloads have already halted. Meta launched its own coding agent Muse Code in August and claims over 10 million Muse users already.

Evis Drenova [argued](https://x.com/evisdrenova/status/2118771036082884899) that "building an ADE is sadly a tarpit idea" — there are 500+ of them and Conductor "wouldn't have sold if there was a long-lasting business." Theo's [reply](https://x.com/theo/status/2118949525146792151): "You forgot the most important point: T3 Code already won."

Sources: [Axios](https://axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor) · [InfoWorld](https://www.infoworld.com/article/4245065/meta-acquires-conductor-as-ai-coding-shifts-toward-multi-agent-development.html) · [SiliconANGLE](https://siliconangle.com/2026/11/04/meta-acquires-ai-coding-startup-conductor-whose-app-runs-several-coding-agents-at-once/)

### AWS launches Kiro Bots

AWS [made Kiro Bots generally available](https://venturebeat.com/technology/aws-launches-agentic-ai-kiro-bots-with-memory-and-support-for-recurring-development-jobs) on November 5 inside Kiro Crew, its multi-agent development workspace. Each bot keeps its own memory and sessions, so corrections to one don't affect others. Bots can run on a laptop, a Mac Mini, or an EC2 instance. AWS showed four example bots with different tool access and permissions.

Pricing: Kiro's Free tier includes 50 credits, Pro costs $20/month with 1,000 credits. An HFS Research analyst [warned](https://www.constellationr.com/insights/news/aws-kiro-launches-autonomous-agents-individual-developers) that growing bot autonomy could make decisions across sessions harder to trace. The launch post includes no comparative benchmarks.

Sources: [VentureBeat](https://venturebeat.com/technology/aws-launches-agentic-ai-kiro-bots-with-memory-and-support-for-recurring-development-jobs) · [InfoWorld](https://www.infoworld.com/article/4245120/aws-launches-kiro-bots-to-help-devs-coordinate-ai-coding-agents.html) · [The Letter Two](https://thelettertwo.com/2026/11/05/aws-kiro-bots-kiro-crew)

### dax: Opus as manager, DeepSeek as workers

dax [shared](https://x.com/thdxr/status/2118755687274532893) (1,569 likes) that running Opus 5.5 as the primary agent with DeepSeek Flash for all subagents is "working great." The rules: long-running sessions per project, Opus told to do all work in DeepSeek subagents, strict scope for each task, ask for proof of work instead of a summary, and a one-step review of the diff. Others are running variations — Sol+Luna subagents, GLM 5.3 as a reviewer, Qwen3.8-27B as subagents with Opus orchestrating.

Source: [dax on X](https://x.com/thdxr/status/2118755687274532893)

### Matt Pocock's Sandcastle and agent skills

Matt Pocock's [Sandcastle](https://github.com/mattpocock) library for orchestrating coding agents in isolated environments (managing branches, merging commits, Docker/Podman/Vercel sandbox providers) continues active development — GitHub shows updates as of Nov 6. His [mattpocock/skills](https://www.aihero.dev/open-source) library of reusable agent instructions (planning, specs, task breakdown, TDD, code review) has crossed ~316K GitHub stars and supports Claude Code, Cursor, Codex and Copilot. His AI Engineer 2026 workshop walked through a full workflow: rough client brief to PRD to Kanban to parallel agent implementation using Sandcastle.

Sources: [AI Hero open source](https://www.aihero.dev/open-source) · [Matt Pocock at AI Engineer](https://ai.engineer/speakers/matt-pocock) · [Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/ai-skills-with-matt-pocock)

## Claude & Anthropic

### Claude Code email leak in User-Agent headers

A [GitHub issue](https://dev.to/slabb/claude-code-was-mailing-your-email-address-to-every-website-it-visited-the-user-agent-leak-the-12k6) (#107757, filed Nov 5) reports that Claude Code v2.1.318 put the user's account email in the User-Agent HTTP header during web searches. Anthropic acknowledged the behavior and added a privacy check module (`cc-plugin-privacy`) in v2.1.317, with a promise to remove account emails from the model's context "early next week." However, testers [report mixed results](https://privacysavvy.com/news/privacy/claude-code-privacy-flaw-email-exposure) — the guard didn't block the behavior on Windows in some user tests, and some couldn't find the module at all. A separate, older issue (#81138 from July) describes the email appearing in the model's system prompt and was still open.

Sources: [DEV Community](https://dev.to/slabb/claude-code-was-mailing-your-email-address-to-every-website-it-visited-the-user-agent-leak-the-12k6) · [PrivacySavvy](https://privacysavvy.com/news/privacy/claude-code-privacy-flaw-email-exposure) · [AI Weekly](https://aiweekly.co/alerts/claude-code-bug-report-alleges-email-leak-in-user-agent-header)

### Game cloning restrictions relaxed in v2.1.317

Anthropic's Claude Code game development restrictions, first added in v2.1.314, were [loosened in v2.1.317](https://phemex.com/news/article/anthropic-loosens-claude-code-game-development-rules-permits-referencing-existing-games-for-gameplay-description-102362). Users can now name existing games when describing desired gameplay mechanics, and Claude builds an original game in that genre instead of refusing. Addy Osmani (Anthropic) acknowledged the initial rule went too far. Explicit requests to copy a game still get a counter-offer to build something similar.

Sources: [Phemex](https://phemex.com/news/article/anthropic-loosens-claude-code-game-development-rules-permits-referencing-existing-games-for-gameplay-description-102362) · [TechSpot](https://www.techspot.com/news/114423-anthropic-tells-claude-code-stop-recreating-existing-video.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-confirms-new-claude-code-limits-to-prevent-game-cloning-users-report-opus-5-5-is-also-actively-blocking-reverse-engineering-tasks)

### Claude Code team departures continue

Reports say [Cat Wu, head of product for Claude Code](https://finance.biggo.com/news/cb10b4fe-8759-41ec-bbd6-fc370013991b), is moving to OpenAI. This follows earlier departures of Thariq Shihipar and Anthony Morris (announced Oct 24). Coverage ties these exits to Anthropic's IPO filing. Thariq is [speaking at AI Engineer Code Summit](https://ai.engineer/code/2026) next week.

Sources: [BigGo Finance](https://finance.biggo.com/news/cb10b4fe-8759-41ec-bbd6-fc370013991b) · [X Trending](https://x.com/i/trending/2113887405459546296)

## Models & Research

### Karpathy on harness engineering and HackerTube

Karpathy's [HackerTube](https://news.ycombinator.com/item?id=50319510) project — a curated video site built from 6,454 Hacker News-recommended videos across 150 topics — continues to generate discussion. He reportedly built it in two hours using Claude Code with Opus 5.5, handling only the Google Cloud API key, VPS setup, and domain purchase himself. He [posted](https://x.com/RoundtableSpace/status/2118791779671806051) that "the biggest mistake in AI right now: people are forcing agents to work instead of mastering the harness engineering for the model first."

His workflow: he no longer writes code or runs terminal commands, only talks to Claude and has it execute. He uses Opus 5.5 on Medium effort as his default and prefers asking for diagrams or HTML explainers over written answers.

Sources: [HN thread](https://news.ycombinator.com/item?id=50319510) · [MindStudio on Karpathy's workflow](https://www.mindstudio.ai/blog/karpathy-claude-code-workflow) · [DEV Community](https://dev.to/wdsega/karpathy-agent-performance-gap-is-in-the-harness-not-the-model-199j)

### DeepSeek V4.1 Flash: "the Opus 5.5 of open weights"

In an [X thread](https://x.com/HurtRidgeLabs/status/2118840100947956083) tagged to @LLMJunky, a commenter called DeepSeek V4.1 Flash 1017 "the Opus 5.5 of the Open Weights world." The October 17 update (MIT-licensed, 552B parameters, 8B activated per token at prefill) is now the default behind DeepSeek's flash API alias. Others in the thread prefer GLM 5.3 for lower hallucination rates and are waiting for GLM 5.5.

Sources: [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017) · [FundaAI](https://fundaai.substack.com/p/deepllm-deepseek-v41-flash-1017-reaches)

## Simon Willison's Recent Output

Simon Willison's blog has been active this week with LLM tooling and Datasette releases:

- **Nov 7:** [datasette #3046](https://simonwillison.net/2026/Nov/7/link-rel-next/) — discovered that Datasette's `link: rel=next` HTTP headers caused Firefox to prefetch the next page of rows, wasting server renders for pages nobody clicks.
- **Nov 3-4:** Released [datasette-agent 0.5a0](https://simonwillison.net/2026/Nov/3/datasette-agent/), [datasette-llm 0.1a10](https://simonwillison.net/2026/Nov/4/datasette-llm/) (new tools for managing stored queries), and [datasette-apps 0.3a0](https://simonwillison.net/2026/Nov/4/datasette-apps/) (hosting custom HTML apps within Datasette).
- **Nov 3:** [Qwen 3.8 27B on my laptop can interpret model weights](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) — ran the Apache 2-licensed Qwen model locally via LM Studio's llm-lmstudio plugin to test if it could identify neural network patterns from raw weights.
- **Nov 2:** Released [llm 0.37](https://simonwillison.net/2026/Nov/2/llm/) with embeddings support for different binary content types.

Source: [simonwillison.net](https://simonwillison.net/)

## Upcoming Events

### AI Engineer Code Summit — Nov 10-12, San Francisco

The [AI Engineer Code Summit](https://ai.engineer/code/2026) starts Monday at the Hilton San Francisco Union Square. Headline keynotes from Melvin Johnson (Google DeepMind), Diogo Almeida (TypeSafe AI), and Jarred Sumner (Anthropic). Other announced speakers include Armin Ronacher (Earendil), Zach Lloyd (Warp), Lydia Hallie (Anthropic), Zach Bruggeman (Ramp), Fabian Hedin (Lovable), Quinn Slack (Amp), Thariq Shihipar, and Walden Yan (Cognition). The schedule page lists 108 sessions. Nov 10 is workshops, Nov 11-12 are single-track keynotes and sessions with an expo.

There's also a [hackathon](https://cerebralvalley.ai/e/aie-code-2026-hackathon) associated with the event.

Source: [ai.engineer/code/2026](https://ai.engineer/code/2026) · [Schedule](https://ai.engineer/code/2026/schedule)

## Latent Space Podcast

Recent Latent Space episodes this week:

- **Nov 7:** Deep dive on Anthropic's S-1 and Mythos with Jamin Ball of Altimeter (~102 min)
- **Nov 6:** Fabian Theis interview on controlling biology
- **Nov 4:** Behind Latent Space session from AIEi Shanghai
- **Nov 3:** Warp.dev on the 2026 software factory standard
- **Nov 2:** Jacob Lauritzen (Legora) on building legal agents

Source: [Latent Space](https://latent.space/) · [Podcast directories](https://www.listennotes.com/podcasts/latent-space-the-ai-engineer-podcast-PjNDalXm_GZ/)

## Other Interesting Stuff

### Theo joining OpenAI

Theo [announced](https://x.com/theo/status/2118140109044482245) (~108K views) that he is joining OpenAI to lead product management for Core Products. OpenAI has been supportive of T3 Code's development. No word yet on what happens to T3 Code — it's open source and maintained by three people.

### Copy-pasting between agents is the new Stack Overflow

Theo [quipped](https://x.com/theo/status/2118957088257056848): "Copy pasting between Claude and Codex is the 2026 equivalent of copying pasting from Stack Overflow." A reply: "except Stack Overflow had a comment under the answer saying 'this is wrong, don't do this'. Now it's two models politely agreeing with each other."

### Anthropic writes 90% of its own code

An IPO-related filing reportedly says Claude wrote over 90% of Anthropic's code in September. Boris Cherny, creator of Claude Code, has said he hasn't written a single line of code by hand since late 2025, shipping 10-30 PRs per day entirely through Claude Code.

Sources: [BigGo Finance](https://finance.biggo.com/news/e4c34f287f91e143) · [STATION F](https://stationf.co/news/boris-cherny)

### swyx: code review is the "Final Boss"

swyx called removing human code review [the "Final Boss" of Agentic Engineering](https://x.com/swyx/status/2028795270306079156), noting that PR volume and size is skyrocketing as agents do more work. He recently joined Cognition while keeping AI Engineer and Latent Space independent. His "Frontier Code" project at Cognition is described as "my baby."

Source: [swyx on X](https://x.com/swyx/status/2028795270306079156) · [AI Engineer](https://ai.engineer/speakers/swyx)

---

*Note: nitter.net, x.com, and simonwillison.net are not accessible from this cloud session's network. Content was gathered via web search and may miss posts from the last few hours. Some dates and details from aggregator sources may be approximate.*
