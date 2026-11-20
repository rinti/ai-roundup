---
title: "ANT Opens at $111, Apple's Agent Job Listing, Replit Missions Ships, and CNN Profiles the Man Behind Claude Code"
date: "2026-11-20"
summary: "**Anthropic's first day on Nasdaq** ended up 17% from the IPO price: ANT opened at $111.50, dipped below $100 in the first 20 minutes, and closed at $97.17, putting the fully diluted market cap somewhere between $1.5T and $1.76T depending on who counts. **Apple** is hiring a senior engineering manager for an agentic assistant that can browse the web, control apps, and write code — Bloomberg spotted the listing and TechCrunch reported that macOS 27.3 beta already warns users before granting third-party agents Mac control. **Replit shipped Missions** on November 17, an agent-swarm system where you set an objective and a budget and a swarm plans, builds, and tests toward it — Replit says a swarm built their internal monitoring tool in two days on $3,000, and on NumPy benchmarks 32 agents hit 19x speedups. **CNN profiled Boris Cherny**, the engineer behind Claude Code, as Anthropic went public. **Simon Willison** released LLM 0.37.3, a fix for SQLite 3.54.1 breaking his logging code, and linked Daniel Stenberg on the wave of AI-generated curl rewrites in Rust. **Matt Pocock's** Software Factories for Real Engineers cohort is mid-run. **swyx** has been testing Devin Bots for a week and handed off his AEO and QA workflows. The **No AI Slop Manifesto** from AIE Code Summit passed 330 signatures."
tags:
  - Anthropic IPO Day One
  - Apple's Agentic Ambitions
  - Replit Missions
  - Agentic Coding & Harnesses
  - Simon Willison's Corner
  - People & Profiles
  - Security
  - Videos & Podcasts
---

# AI Roundup — November 20, 2026

## Anthropic IPO Day One

**ANT's first trading day is in the books.** After pricing at $83 on November 18 — above the $70–$78 range, on 980 million shares for about [$81.3B raised](https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/) — Anthropic started trading on Nasdaq yesterday under the ticker ANT. The stock [opened at $111.50](https://www.foxnews.com/live-news/anthropic-claude-ai-ipo-nasdaq-11-19-26), soaring 34% above the IPO price, then [dipped below $100 within 20 minutes](https://finance.yahoo.com/technology/live/anthropic-ipo-live-anthropic-stock-begins-trading-in-record-81b-raise-with-15t-valuation-192410598.html). It [closed at $97.17](https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html), up about 17% from the IPO price. CNN [reported a fully diluted valuation of $1.76 trillion](https://www.cnn.com/2026/11/19/business/live-news/anthropic-ipo); CNBC put it closer to $1.8T. The offering [drew nearly $500 billion in orders](https://finance.yahoo.com/markets/stocks/articles/anthropic-ipo-drew-nearly-500-141323478.html) for the $81B of stock, making it the largest IPO by proceeds, ahead of SpaceX's $75B listing.

**Latent Space** covered it in [an AINews post](https://latent.space/p/ainews-anthropic-successfully-completes-largest-ipo-in-history-valued-at-1-5t/). swyx reported the open-to-close numbers and placed the valuation at $1.5T. The deal is expected to formally close today (November 20).

## Apple's Agentic Ambitions

**Apple is hiring for a computer-using AI agent.** Bloomberg spotted a job listing for a senior engineering manager to oversee the creation of an AI assistant that can browse the web, control apps, and write code. [TechCrunch](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/) and [AppleInsider](https://appleinsider.com/articles/26/11/19/apple-ai-agents-are-coming-to-help-you-code-browse-perform-tasks) covered the listing on November 19. TechCrunch notes that macOS 27.3 beta already includes warning screens that ask users to reconsider before granting third-party agents control of their Macs — a sign Apple is thinking about the safety implications before it ships its own. No timeline was given; guesses in the coverage put a launch sometime in 2027.

This sits against the backdrop of [WWDC 2026](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/), where Apple opened Xcode 27 to models and agents from Anthropic, Google, and OpenAI via MCP.

## Replit Missions

**Replit shipped Missions on November 17** — an agent-swarm system where you define an outcome, set a budget, and a coordinated swarm of agents plans, builds, tests, and iterates until an AI judge says the success criteria are met.

- **How it works:** You set the goal, the budget (maximum Replit AI usage in USD), and boundaries (actions requiring approval). An independent AI judge evaluates the result against the agreed success criteria before you review it. ([Replit blog](https://replit.com/blog/introducing-replit-missions), [docs](https://docs.replit.com/features/chats-and-routines/missions))
- **Flagship demo:** Replit says it used Missions to build DataCat, an internal application monitoring platform (dashboards, alerts, tracing), in two days on a [$3,000 budget](https://replit.com/blog/introducing-replit-missions).
- **Scaling claims (Replit's own):** On 13 NumPy optimization tasks, a single agent hit up to 4x speedups. A 16-agent swarm reached 17x, and 32 agents reached 19x. Michele Catasta [shared the numbers](https://x.com/pirroh/status/2122810974579425680) and called agent swarms "the next scaling law in AI."
- **Pricing:** Unclear. The blog doesn't publish per-mission pricing. One source says Missions isn't on existing Core or Pro plans; another says enterprise users talk to sales. The budget cap examples conflict ($1,000 vs $3,000) across write-ups.
- **Competition:** A roundup from [Spiritt](https://spiritt.ai/resources/guides/replit-missions-alternatives) already lists six alternatives, and [The New Stack](https://thenewstack.io/replit-missions-agent-swarms/) covered it as a development in the broader agent-swarm trend.
- **Claude Code comparison:** One secondary source says [Replit claims Missions beat a Claude Code build 5x on traces](https://fourweekmba.com/ai-replit-says-missions-beat-a-claude-code-build-5x-on-traces/), though the methodology isn't clear from the summary.

## Agentic Coding & Harnesses

**swyx has been running Devin Bots for a week.** Per an [AI Builders Digest from November 19](https://buttondown.com/soumyo/archive/ai-builders-digest-thursday-november-19-2026/), swyx tested Cognition's new Devin Bot framework and liked the always-on, outcome-focused design. He's already handed off his AEO and QA workflows to Devin Bots. This follows yesterday's coverage of Rick Blalock's friction log, where porting Grok Bots to Devin cost about $300 and a "surprise me" routine burned through an entire ChatGPT allowance overnight.

**The No AI Slop Manifesto passed 330 signatures.** The manifesto, which came out of [AIE Code Summit 2026](https://ai.engineer/talks/no-more-slop-swyx) around November 13, defines slop as work where the producer puts in less effort than the consumer must spend understanding it. Signatories include Dex Horthy, Philip Kiely, and Kent C. Dodds. Anyone can sign via [Dex Horthy's GitHub gist](https://ai-tldr.dev/releases/aie-no-ai-slop-manifesto/index.md). swyx's talk "No More Slop" is in the manifesto's reading list. It [hit the front page of Hacker News](https://latent.space/p/ainews-the-no-ai-slop-manifesto/) and drew debate over whether the definition of slop is too restrictive.

**Matt Pocock's Software Factories cohort is mid-run.** The two-week course [Software Factories for Real Engineers](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m) started November 9 through AI Hero. It teaches engineers to build a "software factory" — shipping code at scale with a self-improving codebase. Enrollment is now closed, with a waitlist for the next run. This follows his [70-minute "watch me work" video](https://x.com/mattpocockuk/status/2123098316867051991) from yesterday where he built a 21,000-line PR using his skills repo. Pocock's take on setup: "Your codebase is your memory… Relentlessly prune your setup… You don't need a session-start skill."

**Reva.AI launched Coding Agent Security.** A [new product](https://securitybrief.asia/story/reva-ai-launches-security-tool-for-coding-agents) that lets organizations set central policies checking agent actions before they run, with a self-serve 15-day trial. It sits across different coding tools rather than being specific to one harness.

## Simon Willison's Corner

**LLM 0.37.3** ([Nov 16](https://simonwillison.net/2026/Nov/16/llm/)). A bug-fix release after SQLite 3.54.1 broke LLM's logging code — Homebrew's packaging of SQLite picked up the change first. This caps a busy month: [LLM 0.37](https://simonwillison.net/2026/Nov/2/llm/) landed November 2 with OpenAI model additions, [0.37.1](https://simonwillison.net/2026/Nov/3/llm/) was a quick bugfix, and [0.37.2](https://simonwillison.net/2026/Nov/11/llm/) on November 11 fixed a security issue where an OpenAI API key could be sent to another provider's endpoint. Plugin releases: [llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/) added newer Claude models, and [llm-gemini 0.36](https://simonwillison.net/2026/Nov/10/llm-gemini/) added Gemini 4 Carbon.

**Actual curl rewrites in Rust** ([Nov 18](https://simonwillison.net/2026/Nov/18/daniel-stenberg/)). Simon linked Daniel Stenberg commenting on the wave of AI-assisted Rust rewrites of curl, with Stenberg noting another batch of vulnerabilities handled and questioning whether the clones will keep up with curl's development pace. This is tagged under Simon's [vibe-porting](https://simonwillison.net/tags/vibe-porting) label — the practice of using coding agents to port code between languages. An earlier example in that tag: a Go port of JSONata built in 7 hours and $400 of token spend using an existing test suite.

**Gemini pricing confusion.** When Simon [released llm-gemini 0.38](https://simonwillison.net/2026/Nov/18/llm-gemini/) for Neon support, he noted that Gemini 4 pricing was already confusing and "Neon has somehow made this even worse" — Carbon is on a half-price promo until December 1, so Neon ($3/$15) currently costs more than Carbon ($2/$10).

## People & Profiles

**CNN profiled Boris Cherny**, the engineer who built Claude Code, in a [November 15 piece](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) timed to the IPO. Cherny, 35, is described as head of applications at Anthropic. The profile follows a [Station F talk from March 2026](https://stationf.co/news/boris-cherny) where he said he hadn't written a single line of code by hand since November (2025) and considers coding "largely solved" for common stacks like React and TypeScript. A [Lenny Rachitsky summary](https://x.com/lennysan/status/2024896611818897438) says Cherny ships 10 to 30 pull requests a day. His TypeScript background includes *Programming TypeScript* (O'Reilly, 2019) and [json-schema-to-typescript](https://github.com/bcherny?tab=repositories) (3,300+ GitHub stars).

**Thariq Shihipar ([@trq212](https://x.com/trq212))** continues to post after leaving Anthropic on October 24 — in yesterday's roundup he shared thoughts on his personal AI-native macOS dock and doubted most people will generate their own software: "good software is a set of strong opinions and I'd rather have something that's been really thought through by someone else." His exit, alongside Anthony Morris (Claude Code Desktop creator) and later product lead Cat Wu (who joined OpenAI), was [widely covered](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/).

**Andrej Karpathy** has been quiet this month. His most recent notable item was an October post arguing only about 5,000 people have truly seen what AI can do — the [AI capability gap is widening](https://dnyuz.com/2026/10/12/andrej-karpathy-says-this-ai-gap-is-widening/). He's been at Anthropic since May 2026, working on pre-training under team lead Nick Joseph, [per TechCrunch](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/).

## Security

**macOS 27.3 beta gates agent access.** Alongside the Apple AI agent job listing, TechCrunch reported that the [macOS 27.3 beta introduces warning screens](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/) that ask users to reconsider before granting third-party agents control of their Macs. This is the first OS-level friction specifically targeting coding agents.

**Simon Willison flagged an LLM API key leak path.** The [LLM 0.37.2 release](https://simonwillison.net/2026/Nov/11/llm/) on November 11 fixed a security issue where an OpenAI API key could be sent to another provider's endpoint when using OpenAI-compatible configurations. Reported by Daniel de Araujo.

## Videos & Podcasts

- **[Anthropic: Know Before You IPO](https://www.youtube.com/watch?v=wX8nDtGIfYA)** (Latent Space with Tanay Jaipuria). S-1 and roadshow breakdown, including the $9.9B compute and infrastructure bill.
- **Matt Pocock's 70-minute "watch me work"** ([tweet](https://x.com/mattpocockuk/status/2123098316867051991)). Building a 21,000-line PR with his skills repo, covering DDD with /grill-with-docs, /retro, and effective human review.
- **Zach Lloyd (Warp) on Software Factories** ([Latent Space podcast](https://www.thepodcastsummary.com/episodes/LL0YmIyBKSU/), Nov 3). How Warp cut its cost per pull request from $80 to about $15–$20.
- **Theo's recent AI takes** continue across his channel — recurring themes include judging models by worst-case reliability over long runs, refining AGENTS.md as higher-leverage work than writing application code, and T3 Code now using three labs at once (Fable for implementation, GPT-6.2 Astra as playtester, Gemini 4 Neon as copywriter).

## Other Interesting Stuff

- **Jerry Liu** announced [OCRia-1.5](https://x.com/jerryjliu0/status/2123103740710498448), LlamaIndex's second document-parsing model family in a month (2B cost-effective, 4B agentic), with table scores up from 86.5 to 90.1 on the agentic tier.
- **Peter Steinberger** ([@steipete](https://github.com/steipete)) has been quiet on the tracked front in November. Background: he joined OpenAI in February 2026, and his OpenClaw project moved to a foundation. His GitHub shows continued work on Tachikoma (Swift AI SDK).
- **Armin Ronacher** ([@mitsuhiko](https://x.com/mitsuhiko)) — his agent's 3 AM AirPlay verification stunt from yesterday's roundup remains the highlight. The result is [tvpipe](https://mitsuhiko.github.io/tvpipe/), a Rust binary for streaming video to AirPlay/Chromecast. His company Earendil maintains Pi, a minimal coding agent that primarily gives models bash access.

---

*Note: nitter.net, x.com, simonwillison.net, and latent.space were all blocked by this session's network policy, so this roundup was assembled from web search results rather than direct scraping. Some details may be less precise than usual.*
