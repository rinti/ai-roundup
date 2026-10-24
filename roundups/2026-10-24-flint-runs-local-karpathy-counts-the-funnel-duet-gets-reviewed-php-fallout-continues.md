---
title: "Flint runs local, Karpathy counts the funnel, Duet gets its first reviews, and PHP fallout continues"
date: "2026-10-24"
summary: "**Recursive** shipped **Flint**, a 40B mixture-of-experts coding model under Apache 2.0 that runs on a MacBook and was largely built by the company's own AI research system. OpenHands and LM Studio had day-zero support, but the benchmark claims remain self-reported and independently unverified. **JetBrains** released **Mellum2.1**, a 12B open coding-agent model that jumps from 2% to 47% on SWE-bench Verified through scaled-up RL in real repos. **Karpathy** revisited his AI capability gap post and reframed it as a \"sharp funnel\": 6B people have barely touched an LLM, ~20M use frontier models for code, and ~5,000 have internal lab access. **Every** published the first hands-on review of **Claude Duet**, Anthropic's always-on personal agent: strong on work triage, weak on email drafts, no real voice mode yet. **Simon Willison** blogged about **Kimi K3.1 Pro** and released four LLM plugins in a week. The **PHP2Shell** story entered its aftermath phase: Amazon confirmed exploitation on Oct 17, four days before disclosure, Cloudflare's CTO reported early attacks, and governments worldwide issued patch-now advisories. Also: Anthropic pledged 5% of shares to a public benefit fund, the Anthropic IPO moved closer, **T3 Code** hit 0.1.0 stable, **Matt Pocock** previewed a re-recorded AI Coding course, and **steipete** described pushing Codex agent tasks from 30–60 minutes to 4–10 hours."
tags:
  - Models & Releases
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Security
  - Other Interesting Stuff
---

# AI Roundup — October 24, 2026

Two open-weight coding models, an AI capability census, and the first real review of Anthropic's personal agent.

## Models & Releases

### Recursive ships Flint: a laptop coding model built by AI

[Recursive](https://recursive.ai/) released **Flint**, its first model, on October 21 under Apache 2.0. It's a 40-billion-parameter mixture-of-experts architecture with only 2.5B parameters active per token, designed to run locally. On an M4 Pro MacBook, Recursive reports ~131 tokens/sec — roughly double comparable models like Gemma 4 and Nemotron 3.5 Lightning.

The headline benchmarks are eye-catching: 89.7% on SWE-bench Pro v2, 74.2% on SWE-bench Verified, and 54.9% on Terminal-Bench 2.1. But these are self-reported and independently unverified. Recursive itself concedes Flint "needs more guidance than large paid coding assistants" and recommends splitting large tasks into smaller steps. Qwen3.8 27B still ranks ahead on Recursive's own six-test average.

The interesting angle is the build process: Recursive credits its **Eureka Machine**, an automated research system, with assisting at almost every development stage. Richard Socher says the system remains under human control. The model shipped in under four months.

Available on [Hugging Face](https://huggingface.co/recursive), free on [OpenRouter](https://openrouter.ai/recursive/flint-v1.0:free), and supported day-zero by [OpenHands](https://www.openhands.dev/blog/recursive-flint-on-openhands) and [LM Studio](https://lmstudio.ai/models/recursive-flint). Context window is 262K tokens; minimum ~24GB RAM.

Sources: [KuCoin](https://www.kucoin.com/news/flash/recursive-launches-flint-an-ai-built-laptop-coding-model), [FourWeekMBA](https://fourweekmba.com/ai-650m-backed-recursive-says-ai-helped-build-its-first-model/), [RuntimeWire](https://runtimewire.com/article/recursive-flint-local-coding-model-eureka-machine), [MarkTechPost](https://www.marktechpost.com/2026/10/21/recursive-flint-local-coding-model/)

### JetBrains open-sources Mellum2.1 for coding agents

JetBrains released **Mellum2.1** on October 8 — the next version of its 12B MoE coding model under Apache 2.0. The architecture is unchanged from Mellum2; all the gains came from post-training, with reinforcement learning scaled up in real repository environments.

The jump is dramatic: **47% on SWE-bench Verified**, up from 2% for Mellum2, plus 28% on the harder SWE-bench Pro. It also leads peers on LiveCodeBench v6 and BFCL v4, though Qwen3.5 (9B) still scores higher on SWE-bench Verified and Terminal-Bench 2.1. The Thinking variant (`Mellum2.1-12B-A2.5B-Thinking`) is the flagship checkpoint, with Base and Instruct variants also available. GGUF builds work with llama.cpp, Ollama, and LM Studio.

JetBrains also released a **Kotlin benchmark for coding agents**, a sign they're serious about agent-native evaluation beyond Python-centric suites.

Sources: [NYU Shanghai](https://rits.shanghai.nyu.edu/ai/jetbrains-ships-mellum2-1-a-12b-open-model-for-coding-agents/), [Tech-Insider](https://tech-insider.org/jetbrains-mellum-2-1-open-coding-model-2026/), [The Stack](https://www.thestack.technology/jetbrains-open-sources-coding-model-trained-from-scratch/)

### Kimi K3.1 Pro: Moonshot's latest, with open weights promised

Simon Willison [blogged](https://simonwillison.net/2026/Oct/23/kimi-k31-pro/) about Moonshot AI's **Kimi K3.1 Pro**, which launched on the API without open weights. Moonshot says full weights will follow by November 4. Artificial Analysis scored it at 55 on its Intelligence Index — ahead of most competitors but behind Claude Opus 5.5 at 58. Moonshot's own figures put it at 65.7% on Terminal-Bench 4.0, close to Opus 5.5's 66.4%.

### Simon Willison's LLM plugin week

Willison shipped four plugins in rapid succession:

- **[llm-gemini 0.35](https://simonwillison.net/2026/Oct/13/llm-gemini/)** — adds Google's Gemini 4 Argon. He flagged that Argon launched at the same price as GPT-6 Sol but is set to double on December 1.
- **[llm-echo 0.5](https://simonwillison.net/2026/Oct/18/llm-tools-datasette/)** — the debug plugin that echoes prompts now simulates token counts for tool calls, system prompts, and reasoning tokens.
- **[llm-tools-datasette 0.1.1](https://simonwillison.net/2026/Oct/18/llm-tools-datasette/)** — fixes a regression caused by LLM's move to httpx2.
- **[web-edit 0.1a1](https://simonwillison.net/2026/Oct/13/web-edit/)** — a folder-editing web app whose performance optimizations were written by Claude Opus 5.5 from a profiling report.

### Claude Haiku 5.5 and Sonnet 5.5 fill out the family

For anyone tracking the model ladder: **Sonnet 5.5** launched September 28 ($2/$10 per MTok, up to 30% cheaper per task than Sonnet 5), and **Haiku 5.5** followed on October 7 — on average ~75% cheaper than Haiku 4.5. Both complete the Claude 5.5 family alongside Opus 5.5.

Sources: [AI Indigo](https://aiindigo.com/blog/ai-arena-claude-sonnet-5-5-release), [DeepLearning.AI](https://www.deeplearning.ai/the-batch/claude-fills-out-its-model-family/), [Gradually.ai](https://www.gradually.ai/en/ai-models/claude-haiku-5-5/)

## Agentic Coding & Agent Harnesses

### Karpathy's sharp funnel: who actually uses AI

Andrej Karpathy [revisited](https://x.com/karpathy/status/2109361546505966046) his April post about "two groups of people speaking past each other" and reframed it as a **sharp funnel** (October 11, still generating discussion). His napkin-math tiers:

1. **~6 billion people** (~75%) have barely come in contact with LLMs
2. **~1–2 billion** (~20%) use free chatbots "a bit like a better Google search"
3. **~20 million** (0.2%) use frontier models to code
4. **~5,000 people** have access to the most advanced internal systems

He attributes the gap to ambition (problem size), jaggedness (AI excels where results are verifiable), and access. The post matters because Karpathy now works on Anthropic's pre-training team — he's describing the funnel from the narrow end.

Sources: [BestHub](https://www.besthub.dev/articles/karpathy-only-5-000-people-worldwide-access-true-frontier-ai-systems-85b11138f75e), [Aiera](https://aiera.blog/andrej-karpathy-ai-adoption-gap/), [dnyuz](https://dnyuz.com/2026/10/12/andrej-karpathy-says-this-ai-gap-is-widening/)

### Steipete: agents now run 4–10 hour tasks

Peter Steinberger, now at OpenAI building agents and stewarding the OpenClaw project, [noted](https://x.com/steipete) that his workflows have shifted from 30–60 minute agent tasks to routinely running **4–10 hour tasks** with Codex, using `/goal`, autoreview, and the crabbox sandbox. He also ships 300–600 commits per day. The interesting data point: he attributes the shift to prompt engineering ("my prompts moved from ~30-60min to often 4-10h tasks"), not to model improvements.

Sources: [steipete.me](https://steipete.me/), [The Neuron](https://www.theneuron.ai/shared/explainer-articles/openai-hires-openclaw-peter-steinberger-personal-agents/)

### T3 Code hits 0.1.0 stable

Theo's **T3 Code** shipped its [0.1.0 stable release](https://flaviocopes.com/t3-code/) on October 15, now running Codex, Claude Code, Cursor, Grok, OpenCode 2, and Pi through one local control plane across web, desktop, and mobile. The **Orchestrator V2** merge (October 3) brought provider switching, cross-model delegation, Pi support, and server-owned queues.

### Matt Pocock previews "AI Coding For Real Engineers" re-record

Matt Pocock [announced](https://x.com/mattpocockuk/status/2095899598430552471) the next AI Hero cohort: **AI Coding For Real Engineers**, a complete re-record covering wayfinder, codebase design, automated checks/review, and "building a software factory." Target date is November. His [skills collection](https://www.aihero.dev/skills-catalog) now includes 21 composable agent skills (TDD, code review, spec/ticket generation) with 135K+ GitHub stars.

## Claude & Anthropic

### Claude Duet gets its first real review

[Every's hands-on review](https://every.to/vibe-check/vibe-check-duet-anthropic-s-always-on-agent) of **Claude Duet** landed this week — the most detailed assessment since the October 21 waitlist launch. The verdict: strong as a work-triage tool, weaker elsewhere.

**What works:** Morning briefs across connected apps, periodic check-ins that message only when something needs attention, and an approval gate before consequential actions. It connects to 6,000+ apps and runs on Opus 5.5 at no extra charge (counts against plan limits).

**What doesn't:** Email drafts are "worse than Dot's," there's no real voice mode yet (just transcription), it can see Claude sessions on your machines but can't direct them, and scheduled runs can't reach custom connectors. Anthropic itself warns the app "might misread a thread or miscalibrate what's urgent."

US-only, Pro and Max subscribers, waitlist-only. No dates for wider availability.

Sources: [Thurrott](https://thurrott.com/a-i/anthropic/343121/anthropic-announces-claude-duet-a-personal-ai-agent), [CNBC](https://www.cnbc.com/2026/10/21/anthropic-preview-of-claude-duet-personal-ai-agent-take-on-muse-dots.html), [TestingCatalog](https://www.testingcatalog.com/claude-duet.md)

### Anthropic pledges 5% of shares to public benefit fund

Anthropic [announced](https://www.aljazeera.com/economy/2026/10/19/anthropic-says-it-will-commit-5-of-shares-to-public-benefit-fund) on October 19 that it will commit 5% of its shares to a new fund dedicated to the public good. With an IPO now widely expected before year-end (one outlet reported an $800B valuation is in play), this is real money — and a move that differentiates Anthropic from OpenAI's recent for-profit conversion.

## Security

### PHP2Shell aftermath: exploitation confirmed before disclosure

The PHP vulnerability story is still developing. Key updates since [yesterday's roundup](roundups/2026-10-23-claude-formal-verification-agent-skills-aaif-code-not-spec-bernie-pause-ai.md):

- **Amazon** confirmed it saw PHP2Shell **exploited on October 17** — four days before public disclosure. Cloudflare's CTO reported "early attacks emerging."
- **Governments worldwide** (US, UK, EU, Australia, Japan) issued patch-now advisories. The NSA recommended taking affected systems offline if immediate updates aren't feasible.
- **Scale of the problem:** PHP powers an estimated 70–75% of identified websites. The PHP Foundation called the delayed fix "a structural failure."
- **The AI angle:** Security firm Calif found the flaws in August using OpenAI's GPT-5.6 Sol through the Patch the Planet program. Multiple parties claim credit — [we covered the credit fight on October 22](roundups/2026-10-22-php2shell-credit-fight-railway-breach-litellm-again-claude-duet.md).

Sources: [Korea Times](https://koreatimes.co.kr/world/20261022/websites-go-dark-worldwide-as-ai-exposes-critical-security-flaws), [ABC News](https://abc7news.com/story/urgent-security-fix-issued-code-vital-estimated-70-websites/19965216/), [The National](https://thenationalnews.com/future/technology/2026/10/21/what-is-php-update-security), [BeInSure](https://beinsure.com/news/critical-php-vulnerabilities-trigger-global-security-alerts/)

### OpenCode breach: attackers ran up user AI bills

The [OpenCode Console breach](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/) continues to reverberate. Attackers broke into an older system and hit 1.4% of users on OpenCode's online platform, where some store API keys for AI services. The platform was still under "substantial stress from automated agents" as late as October 18.

## Other Interesting Stuff

### Latent Space: coding agents are breaking containment

Swyx's **Latent Space** podcast and newsletter continues to shape the discourse. In a 2026 crossover episode with Unsupervised Learning, he argued that 2025 was the year of coding agents and **2026 is when they start breaking containment** — doing things beyond code, from consumer agents to computer use. He also called Opus 5.5 "the best work estimator model I've ever used" (covered in [yesterday's roundup](roundups/2026-10-23-claude-formal-verification-agent-skills-aaif-code-not-spec-bernie-pause-ai.md)). **AIE CODE in SF** is scheduled for next month.

Sources: [Latent Space](https://www.latent.space/p/unsupervised-learning-2026), [AI Engineer](https://ai.engineer/speakers/swyx)

### Armin Ronacher (mitsuhiko): largely moved to Bluesky

For anyone wondering about mitsuhiko's Twitter silence: his [Hachyderm profile](https://hachyderm.io/@mitsuhiko) says the account is "largely inactive, moved to Bluesky." His January blog post "[Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1)" remains relevant reading. He was also quoted in the Wall Street Journal in June criticizing overuse of vibe coding.

### DeepSeek V4.1 Flash drops

**DeepSeek V4.1 Flash** (October 17) joined the growing field of fast inference models with open weights and a 1M context window. It slots in alongside MiniMax M3.1 Flash (weights released October 23) and Qwen 3.6 in the mid-range open-weight tier.

### Boris Cherny: formal verification and function hooks

The Claude Code creator has been busy beyond the Agent Skills donation. Recent posts include previewing **Function Hooks** (an unreleased extensibility layer for Claude Code), a `/checkup` command that removes unused skills and MCPs, and using **Opus 5.5 to formally verify the Claude Agent SDK using Lean**. He also appeared on the Y Combinator Lightcone to discuss Claude Code's journey.

Sources: [Y Combinator](https://x.com/ycombinator/status/2023774438798299479), [TechTwitter](https://www.techtwitter.com/profiles/bcherny)
