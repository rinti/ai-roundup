---
title: "Willison declares an inflection point for vibe-coded games, AGENTS.md hijacks coding agents from your Downloads folder, CrowdStrike documents four threat actors using AI agents, and Thariq announces his AIE closing keynote"
date: "2026-10-29"
summary: "**Simon Willison** [declared October 2026](https://simonwillison.net/2026/Oct/28/vibe-game-development/) an inflection point for vibe-coded game development, arguing Claude Opus 5.5 can now make a game 'a LOT more fun' on command. **Forever Security** reported that a planted [AGENTS.md file in a Downloads folder](https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/) tricked Codex into installing a rogue npm package in 90% of attempts and leaked Claude Code OAuth tokens in about half. **CrowdStrike** [documented four threat actors](https://www.crowdstrike.com/en-us/blog/crowdstrike-uncovers-new-agentic-ai-campaigns/) using AI agents for autonomous intrusions, one running a Claude Code supervisor with a state machine. **Thariq** announced he'll give the [AIE Code closing keynote](https://x.com/trq212/status/2114796261362835842), joking he'll share his WoW forever shaman build. **Tibo's** Codex Day 24 shipped dot-to-send messaging; Day 25 (today) is pending. **BenchLM** [refreshed its October 2026 coding leaderboard](https://benchlm.ai/coding) with Claude Opus 5.5 at #1 (82.9). Also: Gemini 4 Carbon leaks continue, FrontierCode benchmark evolves, and the AI Engineer NYC talks are out."
tags:
  - Agent Security
  - Agentic Coding & Agent Harnesses
  - Models & Benchmarks
  - Vibe Coding
  - Conferences & Talks
---

# AI Roundup — October 29, 2026

> **Note:** This roundup was compiled early UTC on October 29. Direct access to X/Twitter and nitter was unavailable from this session, so sourcing relies on web search, blog posts, and aggregator coverage. Some threads from late October 28 US time may overlap with yesterday's roundup.

## Agentic Coding & Vibe Coding

### Simon Willison: "The October inflection point for vibe game development"

Willison [published a post](https://simonwillison.net/2026/Oct/28/vibe-game-development/) on October 28 arguing that Claude Opus 5.5 has crossed a threshold for vibe-coded games. The key moment: he told Opus 5.5 to make a game "a LOT more fun" and it worked. He built four vibe-coded games in a few weeks, including Pumpkin Farmer (a cosy farming simulator) and Tree Appreciator. His impression is that GPT-6 Astra "isn't quite there yet" for this kind of creative game work.

This follows his October 20 release of [Battle Drones](https://simonwillison.net/2026/Oct/20/battledrones/), a real-time strategy game that uses audio to synchronize multiplayer between nearby devices, and was [picked up by Kottke](https://kottke.org/26/10/0049863-simon-willison). Willison earlier coined the term "vibe engineering" to distinguish careful AI-assisted work from unreviewed vibe coding.

### Thariq announces AIE Code closing keynote

Thariq Shihipar, who [left Anthropic on October 24](https://x.com/trq212/status/2113844051938054167) after more than a year on Claude Code, announced he'll give the [closing keynote at AIE Code](https://x.com/trq212/status/2114796261362835842), joking that he'll be "sharing my WoW forever shaman build." AI.Engineer [described the event](https://ai.engineer/) as the last flagship AIE of the year, gathering the top 1,000 agentic engineers by invite only.

His departure, along with Anthony Morris (who [confirmed](https://x.com/trq212/status/2113844051938054167) his last day was October 23 and is credited with creating the Claude Code desktop app), drew extensive coverage. [Sam Altman called it](https://www.ibtimes.sg/anthropic-facing-employee-exodus-openais-sam-altman-says-this-not-good-sign-95506) "not a good sign," and Reuters reported Anthropic is expected to begin marketing shares to investors the week of November 9.

### Theo: T3 Connect tunnels and infrastructure costs

Theo [posted](https://x.com/theo/status/2115363252100272371) about the real costs behind T3 Code's free offerings, saying infra bills are already in the $20k+ per month range. The team is adding more T3 Connect tunnels but acknowledged the sustainability challenge. Tailscale remains supported. T3 Code now [picks the best connection path](https://x.com/theo/status/2115210618865332696) between machines: local network first, then Tailscale, then T3 Connect.

## Agent Security

### AGENTS.md in your Downloads folder can hijack coding agents

[Forever Security reported](https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/) (October 22, continued coverage through this week) that a malicious `AGENTS.md` file found in a customer's Downloads folder attempted to get a coding agent to install a rogue npm package. The file was dressed up as engineering guidelines, with one section instructing the agent to add a server and install `function-color` from npm — a package that pulls in a downloader for a Windows payload. Researchers named the campaign MALFEX.

Key findings:
- **Codex:** In testing, OpenAI's Codex followed the planted instructions in **more than 90%** of attempts
- **Claude Code:** A variant that rerouted the agent's API endpoint succeeded about half the time, leaking OAuth tokens to a server the researchers controlled
- **Why Downloads matters:** Forever estimates about half of its customer base runs agents from Downloads, and `~/Downloads` is a folder a website can drop a file into with no click or permission
- **No patch available:** The researchers concluded there is "nothing here for OpenAI or Anthropic to patch, since an agent that follows the AGENTS.md in its folder is doing exactly what it was built to do"

Coverage: [BleepingComputer](https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/), [The Hacker News](https://thehackernews.com/2026/10/malicious-file-in-downloads-folder.html), [Help Net Security](https://www.helpnetsecurity.com/?p=389068), [CSO Online](https://www.csoonline.com/article/4240222/malicious-downloads-can-trick-ai-coding-agents-into-compromising-themselves.html)

### CrowdStrike documents four threat actors using AI agents in intrusions

CrowdStrike's Counter Adversary Operations team [published findings](https://www.crowdstrike.com/en-us/blog/crowdstrike-uncovers-new-agentic-ai-campaigns/) (October 21) on four previously unreported threat actors who used AI agents for autonomous intrusions between May and August 2026. The actors exposed their offensive-agent frameworks through open directories, giving researchers visibility into methods.

Key details:
- **One group ran a dual-agent design** with a Claude Code supervisor choosing tasks from a predefined state machine and an executor carrying them out
- **Simple setups still worked:** The groups with simpler harnesses still breached "numerous organizations"
- **Scaling limit is token budgets**, not engineering complexity
- **Threefold increase** in agentic intrusions in H2 2026 vs. H1
- The [2026 Threat Hunting Report](https://www.crowdstrike.com/en-us/resources/reports/agentic-ai-attack-campaigns/) recorded 2.5x more detections from AI agent-driven behavior than human-triggered activity during parts of Q1 2026

Coverage: [Cybersecurity Dive](https://www.cybersecuritydive.com/news/agentic-ai-cyberattacks-harnesses-crowdstrike/833714/), [CIO Dive](https://www.ciodive.com/news/agentic-ai-cyberattacks-harnesses-crowdstrike/833739/), [CRN Asia](https://www.crnasia.com/news/2026/cybersecurity/crowdstrike-2026-threat-hunting-report-tracks-rise-in-ai-dri)

## Codex & OpenAI

### Tibo's 28-day challenge: Day 24 improvement, Day 25 pending

After Day 23's reset (covered yesterday), Tibo shipped **Day 24** as an improvement: making it easy to share and forward messages by texting a dot. Day 25 (October 29 — today) is listed as pending on [tracker sites](https://tiboreset.com/). After the Day 23 reset, Tibo [promised](https://x.com/thsottiaux/status/2115330127886463244) "good news" for the following day. Multiple trackers monitor whether each day is a reset or an improvement; community guesses for the promised news ranged from "a model beating Opus 5.5" to full 20x limits returning.

### GPT-6.1 Terra settles in

Released October 26, GPT-6.1 Terra continues to be benchmarked and discussed. Key specs from across sources:
- **Pricing:** [$1/M input, $5/M output](https://tech.yahoo.com/ai/chatgpt/articles/openai-launches-gpt-6-1-214602298.html) — roughly half of GPT-5.6 Terra and GPT-6.1 Sol
- **Context:** 1.05M tokens, knowledge cutoff June 1, 2026
- **Terminal-Bench 4.0:** 50.3% at max effort vs. 21.5% for GPT-5.6 Terra (company-reported)
- **ParseBench:** Jerry Liu [found](https://x.com/jerryjliu0/status/2115246437764350161) it "spikes at table parsing" (5th overall) but "struggles on layout, charts, and formatting" at ~1 cent/page
- **Safety:** OpenAI classifies it at the "Critical" cybersecurity threshold under its Preparedness Framework
- Willison [noted](https://simonwillison.net/2026/Oct/26/gpt-61-terra/) the pricing relative to other OpenAI models

## Models & Benchmarks

### BenchLM October 29 refresh: Claude Opus 5.5 leads coding

[BenchLM's October 2026 coding leaderboard](https://benchlm.ai/coding), refreshed October 29, places:
1. **Claude Opus 5.5** — 82.9
2. **Claude Sonnet 5.5** — second
3. **Gemini 4 Carbon** — third (though Carbon's status is unclear; see below)

### Gemini 4 Carbon: leaks and early access

Google has not officially announced Gemini 4 Carbon, but leaks and testing reports continue:
- A [Business Insider report](https://aiweekly.co/alerts/google-staff-test-new-gemini-4-carbon-build-on-jetski) (October 9) says Google employees are testing Carbon on Jetski, their internal coding platform
- A [checkpoint appeared on Chatbot Arena](https://letsdatascience.com/news/gemini-4-carbon-checkpoint-reportedly-appears-on-chatbot-are-ee165ebf) with no official benchmarks
- One anonymous staffer reportedly compared it favorably to Opus 5.5, but no second outlet has confirmed this
- Testers say it's stronger than Argon at 3D work but slower, and frontend/UI output remains weak

### FrontierCode: "Would a maintainer merge this?"

Cognition's [FrontierCode benchmark](https://cognition.ai/blog/frontier-code) (launched June 2026) grades whether AI agents write patches a maintainer would merge, not just patches that pass tests. Key numbers:
- **150 private tasks** across 36 open-source repos, split into 100-task Main and 50-task Diamond subsets
- **Grading covers** correctness, tests, scope, style, and codebase conventions
- Claude Opus 5.5 (max with fallback) leads with **52% average, 58% pass rate** on [Artificial Analysis](https://artificialanalysis.ai/articles/frontiercode)
- Leading models still fail more than 40% of the time

### Artificial Analysis Intelligence Index v5 recap

[Released October 28](https://x.com/ArtificialAnlys/status/2115265133467635877) (covered in yesterday's roundup), the **open-weights gap widened from 3 to 12 points**. Top closed models: Claude Opus 5.5 (58), GPT-6 Astra (57), GPT-6.1 Sol (55). Best released open weights: DeepSeek V4.1 Flash and GLM-5.3 at 32, below Claude Haiku 5.5 (36). Discussion continues about the shift to 60% private test sets.

## Conferences & Talks

### AI Engineer NYC 2026 talk highlights

AI Engineer NYC (October 12-14) talks are [now available](https://aie-nyc-2026-talks.swyxio.workers.dev/). Notable sessions:
- **Modal's CTO** on sandbox infrastructure: what fast compute, shared storage, and isolation require for agent sandboxes
- **Sonar's CEO** on factory-style design for agentic development and where verification belongs
- **Revolut** on moving toward self-hosted coding models
- **Flywire** on bringing engineering agents into existing GitLab and AWS environments
- **Google's Philipp Schmid** building a portfolio-auditing agent with Gemini Managed Agents

Upcoming related events: AI Native DevCon NYC (Nov 2-4), AI Coding Summit NYC (Nov 16-17 & 19), QCon AI New York (Dec 15-16).

## Other Interesting Stuff

### Karpathy's AI understanding funnel (still circulating)

Karpathy's October 11 [funnel post](https://dnyuz.com/2026/10/12/andrej-karpathy-says-this-ai-gap-is-widening/) continues to circulate widely. His tier breakdown:
- **~6B people** (~75%): little or no contact with LLMs
- **1-2B** (~20%): occasional free ChatGPT-like usage
- **~20M** (0.2%): use frontier models for coding/math work
- **~5,000**: access to frontier systems inside the labs

He calls the figures "napkin math" and frames it as evolving from "two groups speaking past each other" into a sharp funnel. [Multiple](https://cellcog.ai/blog/karpathy-llm-understanding-funnel/) [write-ups](https://tech-insider.org/karpathy-english-programming-language-quote-ai-2026/) have picked it up.

### Jerry Liu: OCRia-1 document-parsing VLM

Jerry Liu (LlamaIndex) [announced OCRia-1](https://x.com/jerryjliu0/status/2113291930490593552) on October 22: a 4B document-parsing vision-language model scoring 87.4 on ParseBench and 83.5 on olmOCR-bench. He [also parsed](https://x.com/jerryjliu0/status/2115136859965956190) Anthropic's full 318-page S-1 into a [reader app](https://documentstories.com/anthropic-s1) built with LlamaParse.

### swyx's $500M bag fumble

swyx [posted](https://x.com/swyx/status/2115089887959359988) a [2019 gist](https://gist.github.com/swyxio/3af1e264b8460af8897768045b2c229f) showing an adaptive, intent-based CLI state machine concept (1.5K likes), estimating it was "a $500m bag fumble" and noting he "very probably would've been on claude code early" given his TypeScript CLI background.

### Latent Space: Coding from the Himalayas with an offline AI agent

Latent Space published Rittika Jindal's [Coding From the Himalayas With an Offline AI Agent](https://latent.space/p/offline-coding/), a setup guide for running OpenCode with Ollama and Qwen on unreliable power and internet.
