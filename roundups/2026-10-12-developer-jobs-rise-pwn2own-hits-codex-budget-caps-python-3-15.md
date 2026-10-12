---
title: "Developer jobs rise despite AI coding tools, Pwn2Own hackers pop Codex on day one, Simon Willison wants hard budget caps everywhere, Python 3.15 ships with a JIT"
date: "2026-10-12"
summary: "Weekend roundup covering what landed since the last issue on Oct 9. **CNBC** reports US developer job postings are up ~15% since Claude Code launched, with 71% of growth in senior and AI-related roles. **Pwn2Own Ireland** wrapped up: 98 zero-days, $1.26M in prizes, and OpenAI Codex fell on day one to a single argument-injection bug (CVE-2026-19591). **Simon Willison** argues every pay-as-you-go cloud service needs a default hard budget cap — errors over surprise $10K bills. **Python 3.15** shipped October 9 with an experimental JIT compiler, frozendict, and UTF-8 as the default encoding, and Armin Ronacher jokes that parts of the core team are suffering 'AI psychosis' after the release notes featured a vibecoded adventure game. Theo says T3 Code feedback quality has skyrocketed. Matt Pocock is re-recording AI Coding For Real Engineers for November, covering wayfinder, codebase design, and building a software factory. Karpathy observes that 99%+ of people paying attention to AI were onboarded in under a year."
tags:
  - "Developer jobs vs. AI coding tools"
  - "Pwn2Own Ireland: Codex falls on day one"
  - "Simon Willison on hard budget caps"
  - "Python 3.15 and AI psychosis"
  - "Agentic Coding & Agent Harnesses"
  - "Other Interesting Stuff"
---

# AI Roundup — October 12, 2026

Weekend edition covering the tail end of the week since the last roundup on October 9. The big stories are a CNBC piece on developer hiring, Pwn2Own Ireland wrapping up with a headline Codex exploit, and Simon Willison's budget-caps essay continuing to make the rounds.

## Developer jobs vs. AI coding tools

CNBC published a piece on October 11 that cuts against the "AI replaces developers" narrative: [US software developer job postings have risen about 15%](https://www.cnbc.com/2026/10/11/ai-software-developer-jobs.html) since Anthropic launched Claude Code in February 2025, even as overall job postings fell. The catch: 71% of the growth between May 2025 and May 2026 came from senior and AI-related roles. Indeed's economist says companies still need developers to oversee AI work, refine products, and help customers integrate the technology. Postings are still about 27.5% below pre-pandemic levels.

Meanwhile, [Chalkbeat reported](https://www.chalkbeat.org/philadelphia/2026/10/08/ai-forces-learn-to-code-programs-to-adapt/) that learn-to-code programs are adapting their curricula, shifting emphasis from syntax to system design and AI-assisted workflows.

Related stat: GitHub says AI agents are now involved in roughly [1 in 3 pull requests](https://aiagentstore.ai/ai-agent-news/this-week), up from fewer than 1 in 10 a year ago. A Greptile analysis across 65,000 orgs put the number at 27.6% as of April 2026, and a separate study found 83.8% of agent-assisted PRs are eventually merged.

## Pwn2Own Ireland: Codex falls on day one

[Pwn2Own Ireland 2026](https://www.bleepingcomputer.com/news/security/hackers-earn-1262000-for-98-zero-days-at-pwn2own-ireland/) wrapped up with 98 zero-day vulnerabilities and $1,262,000 in prizes. The headline for the AI crowd: [OpenAI Codex was exploited on day one](https://www.winzheng.com/en/article/pwn2own-ireland-2026-litellm-openai-codex-exploited) via a single argument-injection bug in how it passes parameters to git commands (CVE-2026-19591). Ikotas Labs collected $40,000 for the exploit and went on to win the whole event with $361,000 and 42.5 Master of Pwn points.

Also hit on day one: LiteLLM (breached twice) and Oracle's Autonomous AI Database. Vendors have 90 days to patch before public disclosure.

This is a reminder that AI coding agents are attack surface, not just productivity tools. If your agent can run shell commands, an argument-injection bug is a command-injection bug.

## Simon Willison on hard budget caps

Simon Willison's October 3 post [argues that pay-as-you-go services should ship with hard spending caps by default](https://simonwillison.net/2026/oct/3/default-hard-budget-caps). The idea: cut off service and return errors once a spending limit is hit, rather than sending a warning email nobody reads. Uncapped access becomes opt-in, with a checkbox that makes the user accept responsibility.

He points to Google Cloud's Spend Caps (launched July) and AWS's September spending limits as steps in the right direction, but wants the default flipped everywhere. His motivation is straightforward: coding agents and personal AI make it trivially easy to spin up expensive services, and most people would prefer errors to a surprise five-figure bill.

He'd previously [covered Uber's policy](https://simonwillison.net/2026/Jun/3/uber-caps-usage/) of limiting all employees to $1,500/month in token spending per AI coding tool, calling it a rational response to the problem.

Also from Willison this week: a [ttok CLI update](https://simonwillison.net/) with a `--list-models` command, and he's hosting an informal [agentic engineering chat in San Francisco](https://simonwillison.net/) on October 14.

## Python 3.15 and AI psychosis

[Python 3.15 shipped on October 9](https://phoronix.com/news/Python-3.15-Released) with headline features including an experimental JIT compiler that's faster than earlier versions, `frozendict`, UTF-8 as the default encoding, explicit lazy imports, and a new sentinel built-in type.

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko/status/2108583464664776951)) had the best reaction: "Python 3.15 is the first release where parts of the core team started to suffer AI psychosis. Welcome aboard!" — referring to the release notes featuring a vibecoded adventure game to explain new features. The post got ~248K views.

Ronacher has been one of the more thoughtful voices on AI coding. He [wrote earlier this year](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/) about spending two months "excessively prompting Claude, wasting tokens, and building tools he never used much," and on a podcast described building a startup where 90% of the code is AI-generated while noting Python's ecosystem makes life harder for AI agents.

## Agentic Coding & Agent Harnesses

**Matt Pocock** is [re-recording his AI Coding course](https://x.com/mattpocockuk/status/2095899598430552471) as "AI Coding For Real Engineers" for a November cohort, covering wayfinder, codebase design, automated checks/review, and building a "software factory." He also [posted](https://x.com/mattpocockuk/status/2097967205216379355) about a fear that it's hard to notice strategic mistakes when working with AI agents. AI Hero now reports 8,500+ engineers trained through its cohorts.

**Theo** says [quality of T3 Code feedback has skyrocketed](https://x.com/theo/status/2108473441569697858) in recent weeks, with users sharing detailed write-ups of everything broken or confusing. T3 Code is an open-source control plane for coding agents, now at v0.0.40 with an Android companion app.

**Karpathy** [observed](https://x.com/karpathy/status/2106806571321966793) that 99%+ of people now paying attention to AI were onboarded in under a year, which "is very confusing to the AI dinosaurs (anyone in AI for pre-2026. Or even, gasp, pre-2012)." He joined Anthropic's pretraining team in May 2026, working under Nick Joseph on using Claude to accelerate pretraining research.

**Claude Haiku 5.5** [launched October 7](https://aiweekly.co/alerts/introducing-claude-haiku-55) at $0.10/M input and $0.50/M output tokens (up to 100K context), with a 1M token context window and 128K max output. That's roughly a 75% price cut from Haiku 4.5, though a new tokenizer inflates prompt counts ~30%. It supports adaptive thinking and configurable effort levels. Claude Code [version 2.1.293](https://releasebot.io/updates/anthropic/claude-code) made it the default Haiku model.

**Namespace**, a Zurich startup building AI coding agent infrastructure, [raised a $42M Series B](https://aiagentstore.ai/ai-agent-news/this-week) on October 5.

## Other Interesting Stuff

**Nadella on AI safety.** In a September internal memo [reported by Business Insider](https://www.businessinsider.jp/article/2609-microsoft-satya-nadella-ai-safety-debate-internal-warning/), Satya Nadella argued AI must stay under human control and backed independent outside testing. He warned about AI power concentrating in a few large models and said companies shouldn't cut corners on safety. A [Bloomberg interview](https://news.bgov.com/artificial-intelligence/microsoft-ceo-on-how-ai-will-remake-every-company-including-his) covered similar themes.

**Steipete at TEDAI Vienna.** Peter Steinberger, creator of OpenClaw (now at OpenAI), is [speaking at TEDAI in Vienna](https://www.trendingtopics.eu/openclaw-creator-peter-steinberger-to-speak-at-tedai-2026-in-vienna/) October 28-30. His earlier [TED talk on OpenClaw](https://videohighlight.com/v/7rzYDM6vMtI) argued AI agents are a real shift, not just better chatbots: "The lobster is loose, and it's not going back into the tank." Geoffrey Hinton is also on the speaker list.

**OpenAI / Anthropic price war.** The pricing battle continues to intensify. An [OpenRouter analysis](https://pasqualepillitteri.it/de/news/22001/openai-ueberholt-anthropic-openrouter-preiskrieg-boerse) showed OpenAI models took >50% of combined spend in the week of September 7. List prices now show GPT-6 Luna and Haiku 5.5 at the same entry tier, and GPT-6.1 Sol and Sonnet 5.5 at the same mid tier. However, [Ramp data](https://gaiinsights.substack.com/p/wow-anthropic-now-expected-to-have) suggests the number of companies paying for Anthropic has surpassed those paying for OpenAI for the first time.

**AI Agent Accountability Act.** Senators Hawley and Murphy introduced a bipartisan bill requiring accountability frameworks for AI agents, per [aggregator reports](https://aiagentstore.ai/ai-agent-news/this-week).

**Security.** AI coding agents [exposed more than 13,000 internal images](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html) — including billing records — from developers at over 300 organizations on public GitHub repos. A late-September story, but worth flagging alongside the Pwn2Own results.

**Simon Willison's "2026 in LLMs (so far)."** His [September 27 roundup](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/) covers the year's major model releases including Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and the pricing war. Still worth reading if you haven't.

**Jerry Liu / LlamaIndex** continues to push the "context is the moat" thesis. In a [recent podcast](https://chainofthought.transistor.fm/episodes/the-ai-framework-era-is-over-why-context-is-the-moat-jerry-liu), he argued the framework era is over and that document infrastructure for agents is what survives as agent loops get good enough. LlamaIndex now positions itself as the document context layer for AI agents.
