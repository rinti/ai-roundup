---
title: "Pocock Interviews the Pi Creators, Qwen4-Max Preview Opens, Harness Choice Swings Cost 17x & Apple Cuts Developer AI Budgets"
date: "2026-11-16"
summary: "A quiet Monday after a loud conference week. **Matt Pocock** is doing a live interview today with **Armin Ronacher** and **Mario Zechner**, the creators of Pi, at 4:20PM UTC. **Alibaba's Qwen4-Max preview** is open through November 25 on the Token Plan, with no benchmarks, no weights and no per-token price yet. The **FrontierHarness Eval** keeps circulating: same model across nine agent harnesses, pass rates within 17 points, but median cost per pass varied 17.5x — $1.05 on Exo versus $18.34 on Claude Code. **Apple** reportedly cut engineers' daily AI token budgets from $300 to $200 and is moving to a six-week dev cadence for iOS 28. **United Airlines** is still generating discussion after banning unauthorized AI agents from booking flights on November 11. Weekend threads from **Yegge** (slow down, build your own factory), **poteto** (quick fixes considered harmful) and **dax** (ghost teammates, a $60 Rust rewrite of OpenCode Browse) are still drawing replies. Also: Lightning Labs shipped **pi402** so agents can pay for inference with Bitcoin over Lightning, and a study found **Claude Opus 5.5**-written robot programs completed 221 of 240 physical trials without an AI in the execution loop."
tags:
  - Agentic Coding & Agent Harnesses
  - Models & Releases
  - Apple & Industry
  - Other Interesting Stuff
---

# AI Roundup — November 16, 2026

**Note:** nitter.net and all social media domains (x.com, twitter.com) were unreachable from this session's network environment. This roundup is assembled from web search results and cross-referenced against the previous days' roundups to avoid duplication. Links to X posts are included where search results surfaced them, but the posts themselves could not be read directly.

## Agentic Coding & Agent Harnesses

### Matt Pocock interviews the Pi creators today

[Matt Pocock](https://x.com/mattpocockuk/status/2120554967035433183) announced a live interview today (Monday, 4:20PM UTC) with [Armin Ronacher](https://x.com/mitsuhiko) and [Mario Zechner](https://x.com/badlogicgames), the creators of [Pi](https://github.com/badlogic/pi-mono), the minimalist coding agent. Ronacher built Flask and co-founded Earendil; Zechner created Pi and joined Earendil in April 2026, bringing the agent with him. Peter Steinberger then made Pi the agentic core of OpenClaw.

The interview follows Zechner's well-received AI Engineer talk on Saturday, "[Building pi in a World of Slop](https://www.youtube.com/watch?v=RjfbvDXpFls)", which [swyx called](https://x.com/swyx/status/2121880533949116767) "one of the all time greats". In that talk Zechner argued that agents are destroying OSS and pleaded for people to slow down. Pocock's aihero.dev [skills repo](https://github.com/mattpocock/skills) is now at v1.3, which added `/implement-spec`, `/pr`, `/retro` and `GLOSSARY.md`.

### Harness choice swings cost 17.5x on the same model

The [FrontierHarness Eval](https://zeli.app/story/49538490) is still circulating after its September debut. The setup: Kimi K3 across nine agent harnesses, 360 trials, 30 tasks from Terminal-Bench and DeepSWE, every trial from an identical fresh checkpoint. Pass rates ranged from about 50% to 67% — within 17 points. But median cost per completed task ranged from **$1.05** (Exo) to **$18.34** (Claude Code).

The takeaway: harness choice matters far more for cost than for success rate. The [caveats](https://starlog.is/articles/ai-agents/frontier-harness-eval-eval) matter too: the benchmark uses only Kimi K3, so you can't tell whether certain harnesses pair better with specific models, and the cache-repricing methodology hasn't been published.

Sources: [Enterprise DNA](https://enterprisedna.co/resources/ai-pulse/ai-pulse-2026-09-02-harness-choice-swings-agent-cost-17-5x-on-the-same-task), [Starlog](https://starlog.is/articles/ai-agents/frontier-harness-eval-eval), [LibHunt](https://www.libhunt.com/posts/1536098-show-hn-frontierharness-eval-9-harness-same-model-cost-per-pass-varies-17x)

### Weekend threads still going

The Saturday and Sunday posts from the [November 15 roundup](./2026-11-15-yegge-says-slow-down-poteto-on-quick-fixes-lovable-apps-leak-data-codex-drops-plan-mode-antigravity-teamwork.md) were still drawing replies overnight:

- **Yegge's "slow down" thread** (1,663 likes) — the three hot takes about not going fast with AI, not buying a software factory, and expecting agent/agent office drama next year.
- **poteto on quick fixes** (3,804 likes) — asking an agent for the smallest change makes it copy the bandaid everywhere.
- **dax's four threads** — ghost teammates via unreleased Slack integration, the case for OpenCode cloud agents, the $60 Rust rewrite of OpenCode Browse (4.3 MB instead of 53–64 MB), and "the entire advantage of LLMs is they are incredibly flexible".

### Lightning Labs ships pi402: agents pay for inference with Bitcoin

[Lightning Labs](https://cryptobriefing.com/lightning-labs-pi402-ai-agents-bitcoin-inference/) released **pi402**, an open-source extension for the Pi coding agent that lets agents pay for their own model inference in Bitcoin over the Lightning Network. Announced November 12. The idea is that an agent with a Lightning wallet can autonomously buy compute without needing a human's credit card on file.

### Robot code from Claude runs 92% of trials

A study posted November 12 reported that robot programs written by **Claude Opus 5.5** completed **221 of 240 physical trials** with no coding agent in the execution loop. The code was generated by the agent, then handed to a robot that ran it autonomously. [Source: CryptoSlate](https://cryptoslate.com/robot-code-runs-without-ai-calling-the-shots)

## Models & Releases

### Qwen4-Max preview open through November 25

Alibaba's Qwen team opened a preview of **Qwen4-Max** on November 11. Access runs only through the Token Plan subscription (not pay-as-you-go), with a 1M-token context window. The preview window closes November 25 at midnight Beijing time, and any setup built on `qwen4-max-preview` will stop working after that.

No benchmarks, weights or per-token price have been published. The smaller **Qwen4-27B** is seen as the more likely open-weight release, though that isn't confirmed either.

Sources: [ai-tldr.dev](https://ai-tldr.dev/releases/qwen-qwen4-max-preview/), [XenoSpectrum](https://xenospectrum.com/en/qwen4-max-preview-specs-limitations/), [Magica](https://magica.com/news/alibaba-qwen4-max-preview-token-plan)

### Fable 5.2 one week in

Claude Fable 5.2 launched November 9 and has settled in as the top model on several agent benchmarks. Simon Willison's [llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/) added support on day one. Pricing landed at **$8/$40 per million input/output tokens** (down 20% from 5.1), with Anthropic claiming up to 30% faster output. The catch, covered in the [November 10 roundup](./2026-11-10-fable-5-2-lands-cheaper-but-hungrier-1000-agents-prove-fermat-theos-day-one-verdict-dots-multi-computer-fireworks-hack.md): it burns far more tokens per task, so the per-task bill can actually go up.

Armin Ronacher noticed something else: [Fable is "crazy good at writing code that paints"](https://x.com/mitsuhiko/status/2121608475037884570) — generating visual art through code rather than an image model.

### Model landscape snapshot (mid-November)

Aggregator rankings disagree, as usual:
- [BenchLM](https://benchlm.ai/best/agents) puts **Claude Fable 5.2** at #1 for agentic work (score 93.9/100).
- [O-mega](https://o-mega.ai/articles/best-llm-for-ai-agents-november-2026-ranking) names **Claude Opus 5.5** as the default frontier model for agents.
- Swyx's [Latent Space recap](https://latent.space/p/ainews-d-day-decision-models-day/) from November 12 put Fable 5.2 at #1 on Agent Arena, about 1.6x the score of Opus 5.5.
- **Gemini 4 Hydrogen** shipped November 13 at $1.50/$7.50 for everyday coding and agentic tasks.

## Apple & Industry

### Apple cuts engineers' daily AI budgets

[MacRumors](https://www.macrumors.com/2026/11/04/apple-reducing-employee-ai-spending/) reports that Apple has cut some engineers' daily AI token allowances from **$300 to $200**. Engineers have the largest budgets internally because using AI for coding consumes a large number of tokens. Separately, Apple is reportedly moving to a **six-week dev cadence** for iOS 28: six weeks for coding, exploration and feature development, followed by two weeks of convergence.

### App review under pressure from AI-generated apps

The flood of AI-generated ("vibe-coded") apps continues to strain Apple's App Store review process. Developers on [Apple's forums](https://developer.apple.com/forums/thread/837054) report review times stretching from under a day to several days or weeks. Apple says its median review time remains under 24 hours. The revised [App Review Guidelines](https://hackernoon.com/ai-slop-apps-are-becoming-a-problem-apples-latest-app-store-guidelines-send-a-message) from October 16 are the latest response. Some developers want a required declaration of AI involvement, similar to privacy labels.

### United Airlines AI booking ban still generating heat

United's November 11 [ban on unauthorized AI agents](https://skift.com/2026/11/11/united-airlines-moves-to-block-personal-ai-agents-from-booking-flights/) from booking, servicing or buying travel continues to draw coverage. Reservations that AI agents make or change can be cancelled without notice. Coverage differs on scope: one outlet says agents can still show fares but cannot complete purchases; another says even searching is restricted. The practical question — whether United can actually identify AI bookings made through Expedia or other intermediaries — remains unanswered.

Sources: [Skift](https://skift.com/2026/11/11/united-airlines-moves-to-block-personal-ai-agents-from-booking-flights/), [CBS News](https://cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights), [View From the Wing](https://viewfromthewing.com/united-airlines-ceo-scott-kirby-bans-ai-agents-from-booking-tickets-doesnt-want-another-middleman/)

## Other Interesting Stuff

### Jensen Huang / Nvidia situation

The Nvidia leadership situation continues to develop. The [November 13 roundup](./2026-11-13-anthropic-ipo-numbers-jensen-huang-resigns-gemini-4-hydrogen-claude-meetings.md) covered Huang's resignation. Since then: a [NewsBytes report](https://www.newsbytesapp.com/news/business/how-jensen-huang-handled-his-return-to-nvidia-headquarters/story) from November 11 says Huang returned to Nvidia's Santa Clara headquarters. An Nvidia [board statement](https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors) says it has started an independent investigation. A [SemiAnalysis report](https://www.tomshardware.com/tech-industry/artificial-intelligence/mass-smuggling-of-nvidia-ai-gpus-could-be-the-underlying-cause-of-jensen-huangs-departure-analysts-claim-more-than-1-5-gigawatts-of-banned-chips-tracked-to-china-despite-export-controls) covered in the Nov 15 roundup estimated over 1.5 GW of restricted hardware ended up in China. Nathan Lambert at [Interconnects](https://www.interconnects.ai/p/open-source-ai-without-jensen) argues the departure is "a major setback for the US development of an open model ecosystem."

### Peter Steinberger (@steipete) now at OpenAI

Background for regular readers: the PSPDFKit founder and prolific AI-coding advocate [joined OpenAI in February 2026](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code) to work on bringing agents to a broader audience. He created OpenClaw (now stewarded by the independent OpenClaw Foundation) and runs between 3 and 8 agents in parallel in a terminal grid. His argument: developers should stop manually prompting coding agents and [build programmatic loops instead](https://fooqux.com/article/182).

### Karpathy at Anthropic

[Andrej Karpathy joined Anthropic's pre-training team](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) in May 2026, working under Nick Joseph on using Claude to speed up pre-training research. His educational video "Deep Dive into LLMs like ChatGPT" passed [10.39 million views](https://dev.to/logitsolutionsai/karpathys-free-chatgpt-video-has-10m-views-heres-why-he-gives-it-all-away-55kb) on November 13. No new posts from his account surfaced in today's searches.

### Theo's tstack and T3 Code

[Theo Browne](https://x.com/theo) open-sourced [tstack](https://github.com/t3dotgg/tstack), an MIT-licensed set of nine agent skills for Claude Code and Codex that automate PR filing, CI monitoring, review and merging. He runs many agents in parallel from a remote Linux machine and uses one model to write code and a different model as a reviewer. His recent T3 Code work includes agent-driven restyling and a themes feature that [accidentally shipped the same day](https://x.com/theo/status/2121680917391700227) as Claude Code's own theme support.

### Jerry Liu / LlamaIndex: ParseBench-2 continues

[Jerry Liu](https://x.com/jerryjliu0/status/2121645971096707492) spent the weekend explaining ParseBench-2's table scoring methodology. The benchmark has "a taxonomy of 330+ error types" where errors carry different weights — swapping signs on a number in financial reporting is weighted much more severely than a minor formatting difference. Earlier critics [came around](https://x.com/vashishta2/status/2121676731761430825) after the explanation. LlamaIndex's extraction agents (announced October 2026) claim to handle tables spanning multiple pages.

### Simon Willison's tool releases

Simon Willison's blog had a productive early November:
- **[llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/)** (Nov 9) — added Fable 5.2 and Mythos 5.2 support.
- **[llm-gemini 0.36](https://simonwillison.net/2026/Nov/10/llm-gemini/)** (Nov 10) — added Gemini 4 Carbon support, noting pricing doubles to $4/$20 on December 1.
- **datasette-llm 0.1a11** (Nov 14) — latest alpha of the Datasette LLM integration.

His most discussed post of the weekend was the discovery that [Claude chat's auto mode takes your word for it](https://x.com/simonw/status/2121695097674981849) when you grant permission in a message — covered in yesterday's roundup.

### swyx wraps AI Engineer week

The AI Engineer Code Summit wrapped Friday. [swyx](https://x.com/swyx/status/2121896675048587765) reported the day 1 livestream crossed 100k views "in the fastest time ever" and that coding agent practices remain their strongest format. AI Engineer next returns to NYC in mid-October, with a London Europe event and a larger World's Fair planned for next year. His framing: coding agents are the clearest near-term verifiable AI use case.

Sources: [AI Engineer](https://ai.engineer/nyc), [Latent Space trends](https://latent.space/p/aiewf26trends), [StartuphubAI](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-engineer-turns-goodbye-into-next-year)
