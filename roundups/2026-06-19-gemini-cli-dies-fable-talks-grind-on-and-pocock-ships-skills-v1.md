---
title: "Gemini CLI Dies, Fable Talks Grind On & Pocock Ships Skills v1"
date: "2026-06-19"
summary: "Google pulled the plug on Gemini CLI on June 18, replacing it with **Antigravity CLI** (`agy`) — a closed-source Go binary that drops free-tier requests from 1,000/day to ~20 and silently breaks CI/CD pipelines, Git hooks, and cron jobs across the ecosystem. The developer backlash was immediate: GitHub Discussion #27274 filled with pleas to keep Gemini CLI alive, and IBM's Arnaud Le Hors cited it as the first public exhibit of the Linux Foundation's Model Openness Tool framework failing on *operational independence*. Meanwhile the **Fable 5 export ban** entered day six with Anthropic opening a Seoul office and international chief Chris Ciauri telling reporters he's *'very confident'* both models return *'in the coming days'* — hours after Trump called the negotiations *'going fine'* from the G7 sidelines. On the craft side, **Matt Pocock shipped mattpocock/skills v1** with a 63% token-cost reduction and a new split between model-invocable and user-invocable skills, then introduced **decision maps** — short grilling sessions that map the *'frontier of decisions'* before fanning out into parallel research/prototyping. **Simon Willison** announced **Datasette Apps**, letting you host sandboxed HTML applications inside Datasette (inspired by Claude Artifacts but LLM-free), one day after writing up **GLM-5.2** as the most powerful text-only open-weights LLM. And **LlamaIndex** presented **ParseBench** at CVPR 2026 — *'an agent can't act on a doc it can't correctly read.'*"
tags:
  - Gemini CLI Dies — Antigravity Lands, Pipelines Break
  - Fable 5 Export Ban Day Six — Seoul Office, "Models Back in Days"
  - Pocock Ships Skills v1 & Introduces Decision Maps
  - Willison's Datasette Apps & GLM-5.2 Write-Up
  - Also Worth a Look
---

# AI Roundup — June 19, 2026

## Gemini CLI Dies — Antigravity Lands, Pipelines Break

**The shutdown.** On June 18, [Google sunsetted Gemini CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) for all free, Google AI Pro, and Google AI Ultra accounts. Every CI/CD pipeline, shell script, cron job, Git hook, and GitHub Actions workflow that called the `gemini` command stopped receiving responses. The replacement: **Antigravity CLI** (`agy`), a closed-source Go binary built for asynchronous multi-agent workflows that Gemini CLI's single-agent TypeScript architecture couldn't support. Enterprise customers with Gemini Code Assist Standard or Enterprise licenses keep uninterrupted access; everyone else migrates or breaks.

**The breaking changes are worse than the sunset.** [TechTimes documented the fallout](https://www.techtimes.com/articles/318660/20260618/gemini-cli-shutdown-takes-effect-ci-cd-pipelines-break-go-based-antigravity-cli-arrives.htm): free-tier requests drop from 1,000/day to roughly 20, one MCP config field fails silently without throwing an error, the migration script doesn't touch automation, and one widely used integration mode isn't present at launch. The replacement is not feature-equivalent on day one — plugin ecosystem maturity and live quota tracking are both missing.

**The community reaction.** [GitHub Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274) on the google-gemini/gemini-cli repo filled with developers explicitly asking for Gemini CLI to stay alive. The broader significance was captured by Arnaud Le Hors of IBM, who co-authored the Linux Foundation's Model Openness Tool framework: a tool can score highly on code availability and still fail on **operational independence** — the ability to actually run what you helped build. The Gemini CLI case became the framework's first public exhibit.

## Fable 5 Export Ban Day Six — Seoul Office, "Models Back in Days"

**The state of play.** Six days after the US Commerce Department [ordered Anthropic to suspend Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access) for all foreign nationals on June 12, the ban remains in effect. Anthropic dispatched senior engineers to Washington for the first face-to-face meeting with Commerce officials, described as a "crisis negotiation" aimed at presenting a technical remediation path for the jailbreak that triggered the directive.

**Seoul office launch.** On June 18, Anthropic [opened its Seoul office](https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem) — its third in Asia Pacific. At the press conference, international chief **Chris Ciauri** [told reporters](https://www.koreajoongangdaily.com/business/anthropic-confident-of-reenabling-mythos-fable-5-access-in-coming-days-executive/12727522): *"We are very confident that in the coming days, the models will become available again."* Hours earlier, President Trump [called the negotiations "going fine"](https://www.theglobeandmail.com/business/article-anthropic-trump-officials-deal-restore-fable-5-mythos-5/) from the G7 sidelines in Évian-les-Bains.

**The clock.** The refund deadline is June 20 — tomorrow. The June 22 free-trial pricing window is three days away. No confirmed restoration date exists.

## Pocock Ships Skills v1 & Introduces Decision Maps

**Skills v1.** [Matt Pocock announced mattpocock/skills v1](https://x.com/mattpocockuk/status/2067259590488510471) with a **63% reduction in token cost** for skill descriptions, achieved by splitting skills into model-invocable and user-invocable categories. New additions include `/codebase-design`, `/domain-modeling`, and `/grilling`, plus a rewritten `/writing-great-skills`. The [full changelog](https://www.aihero.dev/skills/skills-changelog-v1-announcement) details the routing architecture: model-invocable skills fire automatically when the agent recognizes a matching context; user-invocable skills only activate on explicit `/slash-command` invocation.

**Decision maps.** In a follow-up post, [Pocock introduced "decision maps"](https://x.com/mattpocockuk/status/2067602690725581067): *"1. Figure out the 'frontier' of decisions with a short grilling session. 2. Fan out to multiple grilling/prototyping/research sessions, uncovering the fog of war as you go."* He demonstrated the technique by grilling on three aspects of a large build in parallel — a practical extension of the `/domain-model` skill [he released earlier this month](https://x.com/mattpocockuk/status/2045568731678466224), which replaces `/grill-me` with a thin layer of docs and ADRs during ideation.

## Willison's Datasette Apps & GLM-5.2 Write-Up

**Datasette Apps (June 18).** [Simon Willison announced datasette-apps](https://simonwillison.net/2026/Jun/18/datasette-apps/) — a plugin that lets you host custom HTML applications inside Datasette. The idea started as a Claude Artifacts mechanism for Datasette Agent but grew into a standalone concept: sandboxed, self-contained HTML frontends backed by Datasette's JSON API. The plugin has **no LLM dependency**, but Willison notes these self-contained apps are *"the perfect shape to be written by a modern LLM."* You can try it at [agent.datasette.io](https://agent.datasette.io).

**GLM-5.2 write-up (June 17).** The day before, Willison [wrote up GLM-5.2](https://simonwillison.net/2026/Jun/17/glm-52/) as *"probably the most powerful text-only open weights LLM"* — it tops the Artificial Analysis Intelligence Index v4.1 at 51, ahead of MiniMax-M3 (44) and DeepSeek V4 Pro (44). The model is a 744B-parameter Mixture-of-Experts (~40B active per token) with a 1M-token context window, released under MIT license by Z.ai on Hugging Face and ModelScope.

## Also Worth a Look

- **LlamaIndex presents ParseBench at CVPR 2026.** [LlamaIndex announced](https://x.com/llama_index/status/2062525204262236266) their document understanding benchmark at CVPR: ~2,000 human-verified annotated pages spanning insurance, finance, and government docs, stratified across five dimensions (tables, charts, content faithfulness, semantic formatting, visual grounding). Jerry Liu's framing: *"An agent can't act on a doc it can't correctly read, and reading a real enterprise table is harder than it looks."*

- **steipete in Fast Company's AI 20.** [Fast Company profiled Peter Steinberger](https://www.fastcompany.com/91550800/how-peter-steinberger-built-openclaw) in their annual AI 20 list — the journey from bootstrapping PSPDFKit to a billion devices, exiting for €100M+, burning out for three years, then building OpenClaw to 214K+ GitHub stars before [joining OpenAI in February](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) to work on agent and multiagent systems across product teams including Codex.

- **Karpathy's Software 3.0 keeps reverberating.** His [Sequoia Ascent 2026 blog post](https://karpathy.bearblog.dev/sequoia-ascent-2026/) continues to generate discussion: Software 1.0 automates what humans can specify as rules, Software 2.0 what they can describe with training data, Software 3.0 what they can **verify** — if a correct answer can be checked by a test suite or formal proof checker, an LLM can produce it. He pinpoints December 2025 as the inflection: *"In November I was writing 80% of my own code. By December that ratio had inverted."*

- **Boris Cherny's loop engineering clip hits 700K views.** The Claude Code creator's line — [*"I don't prompt Claude anymore. I write loops that prompt Claude"*](https://thenewstack.io/loop-engineering/) — kept circulating this week, alongside the stat that Claude Code is now 100% written by Claude Code itself and 4% of all public GitHub commits are made by Claude Code.

- **OpenAI's 2025 financials leak.** Audited documents show OpenAI spent ~$34B in 2025 on $13B revenue, posting a **$38.53B net loss** — roughly 7.5x the 2024 loss of $5.09B.
