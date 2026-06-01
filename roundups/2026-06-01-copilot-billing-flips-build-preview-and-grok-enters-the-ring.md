---
title: "Copilot Billing Flips, Build Preview & Grok Enters the Ring"
date: "2026-06-01"
summary: "The broader landscape around today's tweet drama. **GitHub Copilot's usage-based billing goes live today** — flat-rate subscriptions are dead, replaced by AI Credits at $0.01 each, and devs are already panicking about 'meter shock.' **Microsoft Build 2026 opens tomorrow** in San Francisco with Satya's keynote on Windows as the agent platform, steipete on agentic engineering, and a homegrown coding model aimed squarely at dethroning Claude Code in enterprise. **xAI shipped Grok Build**, an 8-parallel-subagent CLI with Arena Mode that scores 70.8% on SWE-Bench — the third serious entrant in the terminal-agent race. Meanwhile Anthropic's **Project Glasswing reports 23K vulnerabilities** found by Claude Mythos in its first month, **Boris Cherny says auto mode is the #1 Claude Code tip**, and the **State of AI 2026 survey** says 54% of web dev code is now AI-generated (up from 28% last year). Plus: Karpathy's autoresearch vision goes distributed, mitsuhiko blogs about post-AI open source, and Uber already blew its entire 2026 AI tools budget by April."
tags:
  - GitHub Copilot Billing Change
  - Microsoft Build 2026 Preview
  - xAI Grok Build
  - Anthropic & Claude Code Updates
  - Project Glasswing & Claude Mythos
  - State of the Industry
  - Around the Accounts
---

# AI Roundup — June 1, 2026

A day where the individual tweet storms (covered in the [companion daily roundup](2026-06-01-workflow-is-cursed-theo-flips-on-opus-48-and-pewdiepie-sets-the-bar.md)) sit on top of three tectonic shifts that went live or got previewed this weekend: GitHub's pricing model flips, Microsoft positions Build as its agent counter-offensive, and xAI finally shows up to the coding-agent race. This dispatch focuses on that broader landscape.

## GitHub Copilot Billing Change

**Today, June 1, GitHub Copilot switches every paid plan to usage-based billing.** The flat-rate era is over. Here's what changed:

- **AI Credits replace unlimited requests.** [1 AI credit = $0.01 USD](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/), billed on token consumption (input + output + cached) at per-model API rates. Code completions and next-edit suggestions stay unlimited and free on all paid tiers.
- **Plan pricing stays the same — but the meaning changed.** Pro+ ($39/mo) includes $39 in credits; Business ($19/user/mo) includes $19; Enterprise ($39/user/mo) includes $39. Overages are at published rates unless an admin sets a hard cap.
- **The developer reaction is not warm.** [Visual Studio Magazine captured the mood](https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx): "You will get less, but pay the same price." [Windows Forum threads](https://windowsforum.com/threads/copilot-to-usage-billing-june-1-2026-ai-credits-token-costs-and-meter-shock.420900/) are calling it "meter shock." The worry: agentic workflows (Copilot Agent Mode, multi-step coding sessions) burn tokens fast, and the included credits may run dry mid-month.
- **Context:** this is partly a response to Claude Code overtaking Copilot in enterprise developer adoption. GitHub is simultaneously unveiling a homegrown coding model at Build (see below) to reduce dependence on OpenAI models.

Boris Cherny's recent [warning about Opus 4.8's token appetite](https://x.com/mweinbach/status/2060055143886766532) — "the ultracode workflow in Claude Code with Opus 4.8 will use ~70% of your 5-hour window in around 30 minutes on a $100 plan" — applies equally here. The cost-consciousness era for AI coding is real.

## Microsoft Build 2026 Preview

**Build 2026 opens tomorrow (June 2–3) at Fort Mason Center, San Francisco**, and the entire conference is organized around one thesis: *agents are the new applications.* Here's what to watch:

- **Satya's keynote** will focus on [Windows as the platform for AI agents](https://windowsforum.com/threads/microsoft-build-2026-windows-becomes-the-platform-for-ai-agents.420503/), including a Windows Agent Framework with new APIs for autonomous AI agents.
- **Copilot Agent Mode** — a new autonomous mode for GitHub Copilot capable of multi-step coding workflows in VS Code, positioned as Microsoft's answer to Claude Code and Codex.
- **Homegrown AI models.** [Microsoft will unveil a suite of in-house models](https://chatforest.com/reviews/microsoft-build-2026-preview/), including a coding-specialized model for Copilot, reducing dependence on OpenAI.
- **Speaker lineup includes steipete** (Peter Steinberger) talking about how agentic engineering changes how we build software — shifting from writing code to orchestrating intelligent agents. Simon Willison and Chip Huyen are also on the roster.
- **Steipete is moving to SF** — [he got his visa and is timing the move to Build](https://x.com/steipete/status/2061031509088231640), with an OpenClaw × GitHub after-hours event on the 3rd.

The competitive backdrop: Anthropic's Claude Code run-rate revenue reportedly surpassed $2.5B and is doubling since January. Microsoft needs Build to reassert that the VS Code + Copilot + Azure stack is still the enterprise default.

## xAI Grok Build

**xAI launched Grok Build on May 14 — the third serious CLI coding agent after Claude Code and Codex.** [It's now available to all SuperGrok ($30/mo) and X Premium+ ($40/mo) subscribers](https://devops.com/xai-enters-the-coding-agent-race-with-grok-build/) as of May 24.

Key differentiators:
- **8 parallel subagents** working through plan → search → build stages simultaneously
- **Arena Mode** — an automated evaluation layer that scores and ranks competing outputs before a developer reviews them
- **Local-first** — no source code transmitted to xAI's servers
- **70.8% on SWE-Bench Verified** with the grok-code-fast-1 model (built from scratch on programming-heavy training data)
- **2M token context window**

The [reviews are mixed but respectful](https://chatforest.com/reviews/xai-grok-build-coding-agent-cli-review-2026/). It trails Claude Code and Codex on maturity and ecosystem, but the Arena Mode concept — having agents compete on your task before you review anything — is genuinely novel. The $30/mo price point also undercuts Claude Code Pro significantly.

## Anthropic & Claude Code Updates

Several significant Claude Code developments from the tracked accounts this week:

**Boris Cherny's top tips.** The Claude Code creator shared two key recommendations:
- **"[Use auto mode](https://x.com/bcherny/status/2058519809214607704)" is his #1 tip** — no more permission prompts, and it's the key building block for multi-clauding (running multiple sessions in parallel). "Start a session, then while it runs, work on another session in a different terminal."
- **On Opus 4.8 effort levels:** "[4.8 defaults to high effort, which spends about the same tokens as 4.7's default on coding but performs better. For hard problems and long-running async work, switch to xhigh](https://x.com/bcherny/status/2060048875918930045)."

**Opus 4.8 in the ecosystem.** [GitHub announced Opus 4.8 is now generally available in GitHub Copilot](https://x.com/github/status/2060050235754242178), and [Wes Bos spotted it in the Agent SDK on npm](https://x.com/wesbos/status/2060030710614839532): "The most capable Claude model to date. Highly autonomous and state-of-the-art for long-horizon agentic work."

**Claude Code's new skills.** Boris [previewed /simplify and /batch](https://x.com/bcherny/status/2027534984534544489) — "I have been using both daily" — and highlighted [/loop and /schedule](https://x.com/bcherny/status/2038454341884154269) for running Claude automatically at set intervals for up to a week at a time.

## Project Glasswing & Claude Mythos

**Anthropic's restricted cybersecurity initiative reported first-month results, and the numbers are striking.** [Project Glasswing](https://www.anthropic.com/glasswing) gives ~50 vetted partners (AWS, Apple, Cisco, Google, JPMorgan Chase, Microsoft, NVIDIA, CrowdStrike, Cloudflare, Mozilla) access to Claude Mythos Preview for defensive security work.

- **23,019 issues found** across 1,000+ open-source projects scanned, of which [6,202 were high- or critical-severity vulnerabilities](https://www.helpnetsecurity.com/2026/05/26/anthropic-project-glasswing-update/), with 90%+ validated as true positives
- **Headline find:** Mythos autonomously discovered and exploited a [17-year-old remote code execution vulnerability in FreeBSD](https://thehackernews.com/2026/05/claude-mythos-ai-finds-10000-high.html) (CVE-2026-4747) that allows root access via NFS
- **wolfSSL vulnerability:** Mythos found a flaw in a crypto library used by billions of devices and constructed an exploit that forges certificates
- **Not publicly available** — access is restricted to Glasswing partners only, with Anthropic explicitly stating "no company — including Anthropic — has developed safeguards strong enough to prevent such models from being misused"

LLMJunky and several other accounts have been tracking Claude Mythos leaks — [it appeared briefly in Claude before being pulled](https://x.com/pankajkumar_dev/status/2058551416332165458), and references to Sonnet 4.8 were found in the Claude Code source that was [accidentally published via npm on March 31](https://x.com/pankajkumar_dev/status/2057832457655959664).

## State of the Industry

**State of AI 2026 Survey** — Theo's [State of AI developer survey](https://2026.stateofai.dev/en-US) ran April 8 to May 8 with 7,258 responses:
- AI-generated code jumped from **28% average in 2025 to 54% in 2026**, with the 75%+ segment seeing the fastest growth
- Despite ChatGPT's popularity edge, **Claude is the model developers actually pay for most**
- AI-assisted coding's transition from early-adopter experiment to standard practice is complete

**Enterprise cost reality check.** [Fortune reported](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/) that Microsoft's own internal data shows AI tool usage is frequently more expensive than human employees. [Uber's CTO revealed](https://www.digitalapplied.com/blog/agentic-coding-h2-2026-what-ships-next) the firm burned through its entire 2026 AI coding tools budget in four months after pushing adoption via internal leaderboards.

**Anthropic approaching profitability.** Anthropic told investors it could post its first quarterly operating profit in Q2 2026, projecting revenue of at least $10.9B for the quarter — more than double the prior quarter.

**Karpathy at Anthropic.** [Joined May 19](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to lead a research team focused on pre-training and autoresearch. His [autoresearch project](https://x.com/karpathy/status/2030371219518931079) — a loop where AI agents iteratively improve model training — found ~20 changes that improved validation loss and transferred to larger models. His vision: [make it "SETI@home style" — massively collaborative distributed research](https://x.com/karpathy/status/2030705271627284816) emulating an entire research community, not a single PhD student.

## Around the Accounts

- **Matt Pocock's AI Coding Cohort v2 starts today.** [2,500+ students took v1](https://x.com/mattpocockuk/status/2056447804537741327); v2 is agent-agnostic ("use any coding agent you like") and runs June 1–12 via [AI Hero](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w) ($995). His [skills repo hit 101K+ stars](https://github.com/mattpocock/skills) — the /grill-me skill (which interviews you exhaustively about your plan before the agent builds anything) [went viral](https://x.com/mattpocockuk/status/2036076132924100760) and became a reference for how to constrain agents with engineering discipline.
- **Mitsuhiko's "Building Pi With Pi."** Armin Ronacher published a [blog post on learnings from post-AI open source](https://lucumr.pocoo.org/2026/5/24/pi-oss/) (May 24) exploring how AI changes open source dynamics. His earlier essay "[Agent Psychosis](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis)" — arguing AI agent workflows create dopamine-driven loops producing low-quality output — remains widely cited.
- **swyx flagged the evals-to-learning-platform shift.** "[Every evals/analytics startup is going through a one-time generational upgrade into a continual learning platform in 2026](https://x.com/swyx/status/2061206120233054327)." He also interviewed Simon Last of Notion on [Latent Space](https://x.com/swyx/status/2044220922387984408) — Notion has rebuilt Notion AI five times, and the conversation covers the full arc. Recent Latent Space episode on [Railway and agent-native infrastructure](https://www.latent.space/podcast) is worth a listen for anyone building hosted agent services.
- **Simon Willison shipped datasette 1.0a31** (May 29) and **llm-anthropic 0.25.1** (May 28). His tools [Showboat and Rodney](https://github.com/simonw) help coding agents test and demonstrate their software. Also: his [Codex Desktop "Copy as Markdown" saga](https://x.com/simonw/status/2061158636311958005) (181K views) — a beloved transcript export feature vanished in an update, then was confirmed coming back.
- **Jerry Liu's Claude tab consolidation gripe** (81K views) [turned into a referendum on Anthropic's product surface](https://x.com/jerryjliu0/status/2060807138172416406) — Mikey Krieger reportedly called the Claude AI / Code / Cowork separation "a broken abstraction we need to fix." Liu's LlamaIndex vision for 2026: agents go from "workflows" to ["employees" that continuously monitor events and collaborate autonomously](https://www.llamaindex.ai/blog/long-horizon-document-agents).
- **LLMJunky flagged MiniMax's open-weights drop** as "[pretty impressive](https://x.com/LLMJunky/status/2061271119647129727)" — the open-weights camp still competing with frontier closed models.

---

*Note: Nitter RSS and direct X.com fetching were blocked from this environment (host allowlist restrictions). Data sourced via web search of recent posts and threads from the tracked accounts. For tweet-by-tweet thread coverage with direct quotes, see the [companion daily roundup](2026-06-01-workflow-is-cursed-theo-flips-on-opus-48-and-pewdiepie-sets-the-bar.md).*
