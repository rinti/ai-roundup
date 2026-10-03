---
title: "OpenAI fires safety researchers, Karpathy's STE100 goes viral, Broadcom lines up $60B for Anthropic, grill-me hits 9K stars"
date: "2026-10-03"
summary: "**OpenAI fired three safety researchers** — Jasmine Wang, Tomek Korbak and Mikita Balesni — for sharing confidential material with external auditors METR and Redwood Research. Korbak was OpenAI's own technical liaison to those organizations. Meanwhile **Broadcom's banking syndicate is assembling $60B** in financing for Anthropic, with $42B in senior-secured debt convertible to equity, covering roughly a third of Anthropic's $125B five-year TPU commitment. **Karpathy's ASD-STE100 recommendation** from yesterday spawned trending repos, agent skills and a wave of discussion. Theo shipped benchmarks showing **GPT-6.1 Sol performing at Opus 5.5 Medium levels for under a third the price**. Matt Pocock's **grill-me skill** crossed 9K stars on mattpocock/skills. Trending repos include Agent-Reach (give your agent eyes across the whole internet), impeccable (a design language for agent harnesses), hyperframes (write HTML, render video), and caveman (cut agent token usage by 65%). The **ChatGPT global quota reset** landed at 10am PST. Microsoft shipped MAI-Transcribe-2-Streaming covering 60 languages with 100ms first-hypothesis latency, and Ant Group released Ling-3.1-flash, a 560B MoE model with ~25B parameters activated per token."
tags:
  - "OpenAI Safety Firings"
  - "Broadcom & Anthropic Financing"
  - "Karpathy ASD-STE100 Goes Viral"
  - "GPT-6.1 Sol Benchmarks"
  - "Matt Pocock grill-me"
  - "Trending Repos & Tools"
  - "Model Releases & Research"
  - "Other News"
---

# AI Roundup — October 3, 2026

Friday. The big news is OpenAI firing three safety researchers for leaking to external auditors, and Broadcom lining up $60B in debt for Anthropic's chip capacity. On the coding side, Karpathy's ASD-STE100 recommendation from yesterday turned into a movement overnight — repos, agent skills and trending topics. Theo dropped benchmarks from Artificial Analysis, and the ChatGPT global quota reset finally landed. Matt Pocock's grill-me skill keeps climbing. Simon Willison announced a coding agents meetup in SF.

## OpenAI Safety Firings

**OpenAI dismissed three safety researchers.** [TechCrunch](https://techcrunch.com/storyline) and [Forbes](https://www.theinformation.com/) reported that OpenAI fired Jasmine Wang, Tomek Korbak and Mikita Balesni for sharing confidential material with external auditors METR and Redwood Research. Korbak was OpenAI's own technical liaison to those organizations, making the firing especially pointed. The move continues a pattern of tension between OpenAI's safety commitments and its commercial pace — it follows the earlier departures of Leopold Aschenbrenner and Pavel Izmailov on similar grounds.

## Broadcom & Anthropic Financing

**Broadcom is assembling $60B in financing for Anthropic.** [Bloomberg](https://thenextweb.com/news/broadcom-60bn-ai-chip-debt-anthropic) reported the deal includes $42B in Class A senior-secured debt that Anthropic can convert to equity. The total covers roughly one-third of Anthropic's $125.2B five-year TPU capacity commitment. Apollo Global Management and Blackstone are in discussions, building on a June partnership that financed a $35B expansion of Anthropic's computing capacity using Broadcom's custom chips.

## Karpathy ASD-STE100 Goes Viral

**Karpathy's ASD-STE100 recommendation spawned an ecosystem overnight.** Yesterday's [post](https://x.com/karpathy/status/2105819303471976479) about asking LLMs to explain things in Simplified Technical English hit trending on X. The key insight: ASD-STE100 is a controlled-language spec from the 1980s built for aircraft maintenance manuals — active voice, short sentences, each approved word carries exactly one meaning. Karpathy sometimes asks for "80% of the way to ASD-STE100" for a more natural read.

What happened since:
- [prithivrajmu/asd-ste100](https://github.com/prithivrajmu/asd-ste100) — an agent skill that makes Claude explain things in STE100, defaulting to Karpathy's 80% mode.
- [SimpleEnglish](https://www.everydev.ai/tools/simpleenglish) — a standalone LLM skill for STE100 output.
- [@AGTPinsights thread](https://x.com/AGTPinsights/status/2106009736030327257) breaking down what ASD-STE100 actually is and why it works.
- [@aakashgupta](https://x.com/aakashgupta/status/2105884986138411482) went down the rabbit hole: "Aviation solved AI slop in 1986."
- Multiple GitHub issues adopting STE100 as a default writing style for agent output.

Karpathy's full ladder of output formats, from yesterday: plain text in STE100 → diagrams and images → web pages ("ask for output in HTML") → explainer videos ("Create a 3b1b style video explainer with ElevenLabs narration"). He's most bullish on videos.

## GPT-6.1 Sol Benchmarks

**Theo ran the numbers on GPT-6.1 Sol.** From [Slopalytics](https://slopalytics.com), which he shipped at 4am on October 1, Theo [posted](https://x.com/theo/status/2105005625726099473): "Artificial Analysis numbers are in! GPT-6.1 Sol is performing at around Opus 5.5 Medium levels for under a third the price. Not bad at all, but still more hyped for 6.1 Astra to catch them up." GPT-6.1 Sol costs $2/$10 per million tokens (input/output) vs Opus 5.5's $4/$20.

Slopalytics also showed T3 Code usage data: 21M prompts over a 30-day window, with Claude Code at 66.2% usage share (+32.3pp).

For context: across 23 common benchmarks, [Opus 5.5 leads overall](https://www.datalearner.com/ai-models/compare/claude-opus-5-5/vs/gpt-6-sol) with an average +9.31 point advantage, including ProgramBench (91.4% vs 82.0%) and Code Migration (66.6% vs 57.2%).

## Matt Pocock — grill-me Goes Viral

**Matt Pocock's grill-me skill keeps climbing.** [mattpocock/skills](https://github.com/mattpocock/skills/) is up to 9K+ stars. The [grill-me skill](https://skillselion.com/skills/mattpocock/skills/grill-me) has 1M installs and 253K repo stars. Pocock [posted](https://x.com/mattpocockuk/status/2036076132924100760): "My 'grill-me' skill went viral. Quote tweets of it are doing numbers. It's the most useful skill I've written, and I use it even outside of coding."

How it works: grill-me interviews you relentlessly about every aspect of a plan until you reach shared understanding. Questions arrive one at a time with the agent's recommended answer attached. Facts that can be found by exploring the codebase are looked up, not asked — only genuine decisions reach the developer. The plan is not enacted until you confirm. It fixes the most common failure mode in agentic coding: Claude charging ahead with wrong assumptions.

Pocock also [reposted](https://x.com/mattpocockuk/status/2083853702696231097) his recurring advice: "If you want to get good at using AI, GET GOOD AT THE THING YOU'RE USING IT FOR."

## Trending Repos & Tools

From GitHub trending and the [AI Daily Digest](https://github.com/diclogic/ai-daily-digest/issues/171):

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** (+696 stars) — "Give your AI agent eyes to see the entire internet" across Twitter, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu without API fees.
- **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** (+722 stars) — "The design language that makes your AI harness better at design" through constrained vocabulary generation.
- **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** (+580 stars) — "Write HTML. Render video. Built for agents." Uses HTML as the authoring surface for agent-generated video.
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** (+209 stars) — Reduces agent token usage by 65% through a stripped communication style.
- **[mattpocock/skills](https://github.com/mattpocock/skills/)** (+955 stars) — Still climbing. Curated, modular skill set for agent workflows.

## Model Releases & Research

**Microsoft MAI-Transcribe-2-Streaming.** [Microsoft AI](https://unite.ai/) released streaming transcription covering 60 languages, plus two text-to-speech models supporting 23 languages. The streaming model emits first hypotheses just over 100ms after audio arrives, with a 2.5% final word-error rate.

**Ant Group Ling-3.1-flash.** [inclusionAI released](https://aiweekly.co/) a 560B-parameter mixture-of-experts model with ~25B activated per token, targeting agent tasks with a 1M-token context window. Weights promised as open-source after a trial period.

**ChatGPT global quota reset.** The reset [announced yesterday](https://x.com/thsottiaux/status/2105843926221660585) by OpenAI's Tibo landed at 10am PST today for all paid accounts, following the load spikes from GPT-6.1 Sol's first two days.

**Research.** ROWBench evaluates whether video models follow programmatic specs. Argo-Bench tests data agents on 210 enterprise tasks — the strongest models scored above 95 on just 34.8% of tasks.

## Other News

**Simon Willison is hosting a coding agents meetup.** He [announced](https://simonwillison.net/) an evening event with Jesse Vincent in San Francisco on Wednesday, October 14, for people building with coding agents.

**Mitsuhiko on vibeslopping PRs.** Armin Ronacher [posted](https://x.com/mitsuhiko/status/2040023781083676789) results from 10 calls with people about their agentic coding experience: "7/10 reported non-engineers vibeslopping code up. Majority said they moved to re-prompt all those contributions because it became impossible/too time consuming to work with those PRs." This connects to his September [Astra experiment](https://mitsuhiko.spicytakes.org/post/2026-09-07-astra-why) — the 35-hour autonomous software factory that burned $1,200 and 1B tokens to produce 79 commits of unusable code.

**Boris Cherny's AI Adoption Steps.** The Claude Code creator [mapped](https://x.com/bcherny/status/2077929379661844559) five steps: Gated (0 agents) → Assisted (~1) → Parallel (~10) → Supervised autonomy (~100) → AI-native (1,000+). "I talk to engineers at other companies every day and hear the same thing: one person is 10x'ing their output with Claude but the rest of the org hasn't caught up." Anthropic is at Step 3; most companies are at 0–1.

**LlamaIndex ExtractBench.** Jerry Liu and LlamaIndex [launched ExtractBench](https://developers.llamaindex.ai/python/cloud/llamaextract/), an open benchmark for document extraction systems — 370 enterprise documents, 4,869 pages, 8 business domains, 67 document types, evaluating 14 frontier VLMs, coding agents and specialized APIs. Their Agentic Plus tier hit 96.1% F1 on long-list tasks.

**Peter Steinberger and OpenClaw Enterprise.** The [OpenClaw Foundation released OCE](https://venturebeat.com/orchestration/openclaw-launches-free-enterprise-control-plane-for-persistent-ai-agents-backed-by-openai-red-hat-and-nvidia/) on September 29 — a free, open-source control plane for persistent AI agents, backed by OpenAI, Red Hat and Nvidia. Steinberger is now at OpenAI building next-gen personal agents, and OpenClaw continues under an independent foundation with MIT license.

**Thariq on leadership awareness.** Thariq [asked](https://x.com/trq212/status/2105751275480752344) what company leaders should understand about agents and got 247 replies. Top themes: estimates are getting harder (one-shot tasks take 30 minutes but worst-case stretches to days), and review load goes up first.
