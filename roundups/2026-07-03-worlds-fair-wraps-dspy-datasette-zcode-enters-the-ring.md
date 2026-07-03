---
title: "World's Fair Wraps, DSPy Meets Datasette, ZCode Enters the Ring"
date: "2026-07-03"
summary: "The **AI Engineer World's Fair closed out its fourth day in SF** with a Harness Engineering keynote and a Startup Battlefield that drew 6,000+ attendees across 29 tracks — swyx's conference newspaper stuck around, and the hallway track ran hot on loops, classifiers, and tokenizer math. **Simon Willison shipped the most interesting post of the week** — [using DSPy to evaluate and improve Datasette Agent's SQL prompts](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/), a rigorous research write-up where DSPy agents invoke Datasette Agent's actual tool implementations against a live in-process Datasette, uncovering that the schema listing's lack of column names was causing error-retry loops. **Anthropic launched richer admin analytics for Claude Enterprise** — usage-and-cost dashboards by group and user, an analytics chat that produces exportable charts, a programmatic Analytics API, model-level entitlements, and spend-threshold alerts. **Z.ai (formerly Zhipu AI) dropped ZCode**, a free agentic desktop IDE built around GLM-5.2 that directly challenges Cursor, Claude Code, and Copilot — with MIT-licensed open weights, BYOK support, and pricing starting at $16.20/mo. **Steipete merged GPT-5.6 support into OpenClaw** alongside an iOS 26 Liquid Glass redesign. And **Ornith-1.0** — the first open-weights self-scaffolding coding model — continued generating buzz after Simon Willison's write-up, with its 397B variant beating Claude Opus 4.7 on Terminal-Bench."
tags:
  - AIE World's Fair Closes Out
  - Simon Willison's DSPy + Datasette Agent Research
  - Claude Enterprise Gets Admin Analytics
  - ZCode Enters the Coding Agent Race
  - OpenClaw Ships GPT-5.6 and Liquid Glass
  - Still Running — Ornith, Loops, and the State of AI Survey
---

# AI Roundup — July 3, 2026

## AIE World's Fair Closes Out

The **AI Engineer World's Fair 2026** wrapped its final day on July 2 at Moscone Center in San Francisco — four days, 29 tracks, 300 speakers, 100+ expo partners, and north of **6,000 AI engineers, founders, and VPs of AI**. The closing day featured a **Harness Engineering keynote** and the **Startup Battlefield** results ($10K+ in prizes). [swyx](https://x.com/swyx)'s daily conference newspaper — paper, no algorithm — made it through all four days and became one of the more talked-about artifacts of the event. The hallway track on the final day reportedly centered on **context engineering** (which [got its own track this year](https://x.com/prukalpa/status/2072100003791671464)), the practical fallout from Fable 5's classifiers, and tokenizer economics after Sonnet 5's 30% token inflation.

[Thariq](https://x.com/trq212), fresh off the Fable on-call all-nighter, [delivered his talk on dynamic workflows](https://x.com/trq212/status/2061907337154367865) — Claude Code's biggest capability upgrade since skills and subagents — which lets Claude write its own orchestration programs on the fly and run them across many separate Claudes, each with a clean context window and one focused job. He called out **codebase audits, large migrations, and cross-checked research** as the prime use cases, and said he's [particularly excited about the non-technical tasks it enables](https://x.com/trq212/status/2061907538741006796).

- **Conference site:** [ai.engineer/worldsfair/2026](https://www.ai.engineer/worldsfair/2026)

## Simon Willison's DSPy + Datasette Agent Research

The most interesting technical post of the day: [**"Research: Using DSPy to evaluate and improve Datasette Agent's SQL system prompts"**](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/) (July 2). Simon built a rigorous evaluation harness where **DSPy agents invoke Datasette Agent's actual tool implementations and prompts against a live in-process Datasette**, with a gold-standard auto-generated dataset providing evaluation via custom metrics.

The findings are practical and worth stealing for anyone maintaining agent system prompts:

- The schema listing gives only **table names** — but the advice to "not call `describe_table` if you already have the information" was causing the agent to **guess column names** and fall into error-retry loops. Fix: either include column names in the prompt's schema listing or soften that advice.
- Testing was done against **GPT-4.1 mini and nano** to keep costs tractable.
- The methodology itself — using DSPy's optimization framework to systematically test prompt variations against a live tool environment — is a template for anyone who has agent prompts in production and wants to improve them with something more rigorous than vibes.

This follows his [Ornith-1.0 write-up](https://simonwillison.net/2026/Jun/29/ornith/) from a few days ago and the [Claude Sonnet 5 tokenizer analysis](https://simonwillison.net/2026/Jun/30/claude-sonnet-5/) that sparked the price-per-token debate.

## Claude Enterprise Gets Admin Analytics

On July 2, **Anthropic launched richer admin analytics, model-level entitlements, and spend alerts** for [Claude Enterprise](https://claude.com/blog/giving-admins-more-visibility-and-control-over-claude-usage-and-spend):

- **Usage dashboard** — now shows usage and cost broken down by group and user, with output metrics (artifacts created, files edited, skills and connectors used) displayed alongside cost.
- **Analytics chat** — admins can ask questions in plain language ("Which teams doubled their Claude usage this month?") and get exportable charts.
- **Analytics API** — usage and cost data available programmatically, integrating with Datadog Cloud Cost Management, CloudZero, and existing cloud-spend tooling.
- **Model-level entitlements** — admins set which Claude model new conversations default to across chat, Cowork, and Claude Code, so routine work doesn't default to the most expensive option.
- **Spend-threshold alerts** — notifications at 75% and 90% of org-level spend limits.

The timing isn't subtle — with Sonnet 5's tokenizer emitting ~30% more tokens and Fable 5 going credits-only after July 7, enterprises need exactly this kind of cost visibility.

## ZCode Enters the Coding Agent Race

**Z.ai** (the Beijing-based lab formerly known as Zhipu AI) [launched **ZCode**](https://venturebeat.com/technology/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding) on July 2 — a **free agentic desktop IDE** built around its flagship **GLM-5.2** model, available on macOS, Windows, and Linux.

Unlike editors that add a chat sidebar, ZCode takes a goal description, draws up a plan, edits files, and repeatedly reviews and revises. The pitch rests on three pillars:

1. **Deep first-party integration with GLM-5.2** that no third-party editor can replicate
2. **Aggressive pricing** — $16.20/mo for Lite, up to $144 for Max, with a 1.5× usage-quota bonus for GLM Coding Plan subscribers
3. **MIT-licensed open weights** allowing enterprises to self-host, eliminating regulatory kill-switch risk

It also supports **BYOK configurations** for third-party models. JPMorgan raised its 2026–2030 revenue forecast for Zhipu by 7–16% following the launch, projecting a 534% revenue surge for 2026.

This is the first serious Chinese-lab entry into the agentic IDE space, and the self-hosting angle is a direct play for enterprises worried about US-China AI export controls.

## OpenClaw Ships GPT-5.6 and Liquid Glass

[Steipete](https://x.com/steipete) had a busy couple of days:

- **July 2:** [OpenClaw v2026.7.1-beta.1](https://github.com/openclaw/openclaw/releases) shipped with **GPT-5.6 support** — OpenClaw now recognizes the GPT-5.6 model family across catalog, capability, and runtime selection paths. PR credited to `@steipete-oai`.
- **July 1:** [PR #98452](https://github.com/openclaw/openclaw/pull/98452) merged an **iOS 26 Liquid Glass redesign** — native Liquid Glass only for interactive chrome, quiet grouped surfaces for content, larger readable type, consistent concentric geometry, and a refreshed onboarding flow.

Between the OpenAI day job and the OpenClaw Foundation, steipete continues to ship at a pace that makes [Matthew Berman call him "one of the few people who consistently makes me feel behind"](https://digg.com/tech/7ifyvmb9).

## Still Running — Ornith, Loops, and the State of AI Survey

A few threads from the last week that are still generating discussion:

### Ornith-1.0: Self-Scaffolding Open-Weights Coding Models

[DeepReinforce's Ornith-1.0](https://ornith.site/) (released June 25) keeps drawing attention after [Simon Willison's write-up](https://simonwillison.net/2026/Jun/29/ornith/). The key innovation: instead of relying on human-designed harnesses, the model **jointly learns to generate both solution rollouts and the task-specific harnesses** that guide those rollouts. Four sizes (9B Dense, 31B Dense, 35B MoE, 397B MoE), all MIT-licensed:

- **Ornith-1.0-397B** hits **77.5 on Terminal-Bench 2.1** and **82.4 on SWE-Bench Verified**, surpassing Claude Opus 4.7
- **Ornith-1.0-9B** manages **43.1 on Terminal-Bench 2.1** and **69.4 on SWE-Bench Verified** — matching much larger models
- Built on pretrained **Gemma 4 and Qwen 3.5**, available on Hugging Face in FP8, GGUF, and bf16

The self-scaffolding concept — models that design their own agent loops during training — lands right in the middle of the **loop engineering** debate that [Armin Ronacher's "The Coming Loop"](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) kicked off, arguing that autonomous agent loops are coming whether developers want them or not.

### The Coming Loop (Still Hot)

[Armin Ronacher](https://x.com/mitsuhiko)'s June 23 essay [**"The Coming Loop"**](https://www.developersdigest.tech/blog/armin-ronacher-coming-loop-agent-comprehension) hit the Hacker News front page and is still generating replies. The core tension: what happens when the human engineer is no longer in the loop? Ronacher's answer is that opting out may not be an option — competitive pressure will force adoption — but he's explicit that **code porting, perf benchmarking, security scanning, and proof-of-concept generation** already work well in loop mode, while anything requiring deep domain comprehension does not. This pairs with [Matt Pocock's pushback on self-improvement loops](https://www.explainx.ai/blog/loop-engineering-mainstream-ai-skill-june-2026) — he trusts verification loops (retry until tests pass) but distrusts loops that let agents rewrite their own instructions.

### State of AI 2026 Survey

The [State of AI 2026 survey results](https://2026.stateofai.dev/en-US/) (7,258 responses, ran April 8 – May 8) are still being cited in conference talks:

- Developers now generate **54% of their code with AI** (up from 28% last year)
- **72%** say AI is an integral part of their workflow
- **Claude Code leads in positive sentiment** among coding agents at **42.3%**
- Code generation is still the main use case, but **code review is now almost level with learning and research**
- **Hallucinations remain the top pain point**

[Theo](https://x.com/theo) noted that [over half of respondents watch his videos](https://x.com/theo/status/1912883664007930314).

---

## Other News & Context

- **Claude in Chrome** went [generally available on July 1](https://claude.com/claude-for-chrome), up from beta — available to all paid plans.
- **OpenAI's Ona (ex-Gitpod) acquisition** ([announced June 11](https://andrew.ooo/answers/openai-acquires-ona-gitpod-codex-explained-june-2026/)) continues to get discussed — Codex now has 5M+ weekly users and needs production-grade cloud sandboxes for long-running agents.
- **Gemini 3.5 Flash computer use** went [public preview on June 24](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) — one agent can now see, reason, and act across browser, mobile, and desktop. 76.2% on Terminal-Bench 2.1.
- **Boris Cherny** [teased](https://x.com/bcherny/status/2021699851499798911) that the next Claude Code version will include `/usage` to see which skills, agents, MCPs, and plugins are consuming your tokens.
- **Jerry Liu** and LlamaIndex [presented ParseBench at CVPR 2026](https://x.com/llama_index/status/2062525204262236266) — the first document-parsing benchmark built for AI agents, covering ~2,000 human-verified pages from enterprise documents. No LLM-as-a-judge — all evaluation is deterministic and rule-based.
