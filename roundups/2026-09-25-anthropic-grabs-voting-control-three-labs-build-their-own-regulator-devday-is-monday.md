---
title: "Anthropic grabs voting control, three labs build their own regulator, DevDay is Monday"
date: "2026-09-25"
summary: "Anthropic asked shareholders to approve a **Palantir-style dual-class share** giving seven co-founders 50.1% voting power despite holding ~2% of equity, ahead of an IPO that may slip past the November midterms. The same day, The Information reported that **Google, OpenAI and Anthropic are standing up a private FINRA-modelled standards body** — the Frontier AI Standards Agency — with no government seat, weeks after all three told the UN they wanted international oversight. Meanwhile DevDay is Monday in San Francisco, and Forbes says OpenAI will announce **managed agents**. Google confirmed **Gemini 4 has entered post-training** and could ship an early version soon. Simon Willison shipped commit-rewriter 0.2 and datasette 1.0a41, Armin Ronacher's Astra coding critique kept drawing traffic, and yesterday's stories — the Medicare breach, Claude's CRISPR-like discovery, the price war — continued to dominate threads. DeepSeek quietly crossed a **$1B annualized revenue run rate** after hiking API prices 2–4×."
tags:
  - "Anthropic & Claude Code"
  - "Industry & Regulation"
  - "Model Releases & Pricing"
  - "Agentic Coding & Tooling"
  - "Videos"
  - "Other Interesting Stuff"
---

# AI Roundup — September 25, 2026

A quieter posting day from the tracked accounts — most of the big takes landed yesterday — but the business and regulatory news more than made up for it. Jerry Liu and Andrej Karpathy posted nothing in the window. Boris Cherny's last public post was the Knuth photo yesterday.

## Anthropic & Claude Code

**Anthropic wants founder control before the IPO.** Reuters and The Information [reported](https://www.theinformation.com/articles/anthropic-seeks-palantir-style-voting-control-seven-co-founders-ahead-ipo) that Anthropic is asking shareholders to approve a special share class giving Dario Amodei and six co-founders 50.1% voting power despite holding roughly 2% of equity — a structure modelled on Palantir. The [Long-Term Benefit Trust](https://www.business-standard.com/world-news/anthropic-seeks-50-1-voting-control-for-co-founders-ahead-of-ipo-126092500159_1.html) (which includes Ben Bernanke) retains board appointment authority, and employees get a separate tie-breaker class for some corporate issues. The IPO itself may [slip past](https://ca.investing.com/news/stock-market-news/anthropic-seeks-palantirstyle-voting-control-for-seven-cofounders-ahead-of-ipo-the-information-reports-4852725) the November midterms. Anthropic raised $65B at a $965B post-money valuation in May.

**Yesterday's Claude stories still running.** The ART enzyme discovery ([Anthropic blog](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)) hit 758 points and 781 comments on HN, with Feng Zhang calling it "genuinely intriguing." The plan-mode-killing discussion ([Thariq](https://x.com/trq212/status/2102813194196758746)) kept going past 2,500 replies. Cloud sessions went GA with $100–$250 one-time credits. The AGENTS.md telemetry bug was [fixed in 2.1.281](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md), and Steinberger [confirmed](https://x.com/steipete/status/2102989175649956199) "dev mistake, not malice." The em-dash performance post drew over a million views.

**Willison shipped tools.** Simon Willison released [commit-rewriter 0.2](https://simonwillison.net/2026/Sep/24/commit-rewriter/) (a Python web app for rewriting git commit messages, now with `--branch` support for non-default branches) and [datasette 1.0a41](https://simonwillison.net/2026/Sep/24/datasette/) (refactoring all modal dialogs into a single Web Component that plugins can use).

## Industry & Regulation

**Three labs, one regulator, no government.** The Information [reported](https://www.bankinfosecurity.com/google-openai-anthropic-plan-frontier-ai-standards-body-a-32926) that Google, OpenAI and Anthropic are building a private self-regulatory body modelled on FINRA — tentatively the Frontier AI Standards Agency — targeting launch by end of 2026 or early 2027. The structure would include pre-release audits and shared technical evaluations. Leadership discussions reportedly include Sriram Krishnan (Trump White House AI adviser), Arati Prabhakar, Condoleezza Rice and David Friedberg. This comes [two days](https://finance.yahoo.com/technology/ai/articles/three-frontier-labs-building-finra-194134029.html) after the three labs asked the UN Security Council for international standards, and weeks after Dario Amodei's ["Pace the Frontier"](https://reason.com/2026/09/14/ai-slowdown/) essay was cosigned by Altman, Hassabis and Musk. Fei-Fei Li's September 22 [position](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) that safety assessment "shouldn't be left solely to the companies developing" the systems is now being tested in real time.

**DevDay is Monday.** OpenAI's [DevDay 2026](https://devday.openai.com/) is September 29 at Fort Mason, San Francisco. Sam Altman gives the opening keynote at 10am PT, livestreamed free. Forbes [says](https://www.forbes.com/sites/jonmarkman/2026/09/21/openai-plans-to-introduce-managed-agents-at-devday-2026/) OpenAI plans to announce managed agents. Tibo Sottiaux [teased](https://x.com/thsottiaux/status/2102996313780736363): "many many things that should change the way you work. It's been our most ambitious sprint and Astra has really made new things possible."

**DeepSeek crosses $1B.** DeepSeek's annualized revenue run rate [surpassed $1 billion](https://superpowerdaily.com/posts/deepseek-reportedly-reaches-1-billion-yearly-revenue-pace-after-api-price-hikes) — more than double from ~$500M months prior — after API price hikes of 2.3× to 4.5× without observed demand decline. API access posted 82.9% gross margin. The company is finalizing a $7.5B round and preparing a Shanghai listing.

## Model Releases & Pricing

**Gemini 4 is in post-training.** Koray Kavukcuoglu (Google DeepMind SVP) [said](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) at The Information's AI Agenda Live Summit (September 23–24) that Gemini 4 has entered post-training after pretraining began July 21. Google intends to roll out "an early post-training version as soon as possible." Internal use is already underway in the Antigravity coding tool. The new [antigravity-preview-09-2026](https://ai.google.dev/gemini-api/docs/models/antigravity-preview-09-2026) harness also shipped, bringing Gemini 3.8 Flash with a 22% caching boost, a Files API, and a Credentials API.

**Price war aftermath.** The September 22 simultaneous launch of [Opus 5.5 ($4/$20) and GPT-6 Sol ($2/$10) / Luna ($0.10/$0.50)](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/) continued to dominate discussion. Theo [polled](https://x.com/theo/status/2102566230452572257) "Favorite model release this week?" with Grok 4.7, Opus 5.5, GPT-6 Sol, and GPT-6 Luna as options, and [asked](https://x.com/theo/status/2102533370937053281) "How are we feeling about GPT-6 Sol and Luna so far?" Willison's [blog post](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/) on the new price war is the definitive breakdown. The pricing is [confirmed permanent](https://venturebeat.com/technology/openai-releases-gpt-6-sol-and-luna-models-slashing-api-costs-50-or-more/), not promotional.

## Agentic Coding & Tooling

**Amazon opens Seller Central to agents.** Amazon [opened](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) Seller Central APIs to outside AI agents via a new Selling Partner plugin (US beta, September 23). Sellers can manage inventory, pricing, listings, analytics, and messages through Claude or Amazon Quick assistant without entering Seller Central — ~60 seconds setup, no coding. The consumer storefront remains closed to agents.

**Ronacher's Astra critique keeps circulating.** Armin Ronacher's September 7 blog post ["Astra for Coding: Why Are We Doing This Again?"](https://lucumr.pocoo.org/2026/9/7/astra-why/) continued to draw traffic. In a 35-hour autonomous experiment, Astra produced 75,000 lines across 79 commits at ~$1,200, but the code-golfed style leaked into committed code, making it unreadable to humans. He [tweeted](https://x.com/mitsuhiko/status/2097318251403395471) he's "back to 5.6 for software engineering" and called it "the first time I feel like this is a genuine regression on an OpenAI model release for my day-to-day workflows." Yesterday he also [ranted](https://x.com/mitsuhiko/status/2102777387671060591) about Google Cloud's "7 layers of identity and API management crap."

**Steinberger on the agent wars.** Peter Steinberger [quoted](https://x.com/steipete/status/2102982942037573868) a complaint about Cloudflare challenges and called it "the agent wars," predicting more of it on all fronts. Replies split between robots.txt as a Geneva Convention and "the sites that ship a real API for agents are going to skip this whole fight." OpenClaw [2026.9.6](https://x.com/openclaw/status/2102955928693989413) shipped with support for Opus 5.5, GPT-6 Sol/Luna and Grok 4.7, plus optional decision models — the next version uses Jev to decide automatically whether a new message should steer the running agent or queue.

**Pocock: fix the harness, not the model.** Matt Pocock [said](https://x.com/mattpocockuk/status/2102757952180686945) "Stop caring so much about model releases. Focus on the harness, and improving the environment your agent operates in. You'll find yourself far ahead of the curve." He also [called](https://x.com/mattpocockuk/status/2102817442347032583) for killing plan mode and weighed in on the unit test debate, arguing that testing larger units "has ALWAYS been a good practice."

**Theo on token budgets.** Theo [argued](https://x.com/theo/status/2102993990773883093) "at least half of all corporations are going to screw themselves by being too strict about token spend," and [said](https://x.com/theo/status/2102704338582032575) that having more than one thread open is "the ultimate LARP" — he regularly runs 40+ threads but never looks at more than one at a time. His spiciest take: "Anthropic has no small models worth using. OpenAI has no large models worth using. Google has no models worth using" ([244k views](https://x.com/theo/status/2102862533002760527)).

**am.will saturated the benchmark.** LLMJunky [rebuilt his Rocket League clone](https://x.com/LLMJunky/status/2102847543042343072) with Opus 5.5 end to end and called RocketLeagueBench "basically saturated." Used 3% of a weekly Max 20x limit. Opus timed the montage cuts to the music without being asked.

**Trending open source.** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) (~28k stars, +1,668 today) — agent memory with four biomimetic memory types. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) (~50k stars) — auto-generates Click-based CLIs from software source, enabling agent control of Blender, GIMP, LibreOffice etc.

## Videos

- **[Anthropic Actually Fixed Opus](https://www.youtube.com/watch?v=jgGyX7MPPVg)** (Theo, 207k views). Opus 5.5 review: "After Opus 5 wrecked my codebases, Opus 5.5 got a full day of real work done on about 20% of my weekly Claude limit, and I'm finally not scared to merge what it writes."

## Other Interesting Stuff

**Google's Project Suncatcher.** A first satellite prototype carrying four Trillium-generation TPUs [launches October 1](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) on SpaceX Transporter-18 from Vandenberg. Ground testing confirmed TPUs can withstand 2–15 krad radiation. The constellation plan targets ~81 satellites with free-space optical links. 95 comments on HN, most of them asking "why?"

**Island raises $400M.** The Dallas enterprise-browser security company [closed its Series F](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) at a $6.4B valuation (September 24), framed around AI agent deployment scaling enterprise security requirements.

**Tekever closes $580M.** The Portuguese-British AI drone maker [announced](https://en.wikipedia.org/wiki/2026_in_artificial_intelligence) first close of its Series D at $6.4B (September 23), co-led by UC Investments and Baillie Gifford. 50,000+ flight hours in Ukraine since 2022.

**swyx: "benched."** swyx [quoted](https://x.com/swyx/status/2102938490518609983) Louis-François Bouchard's result of Opus 5.5 at 2,631 Elo on his writing benchmark — 307 points ahead of Fable and the biggest jump since he started it — with a single word: "benched."

**Pentagon admits AI contributed to fatal strike.** Among the top HN stories: a Pentagon admission that overreliance on AI contributed to a fatal missile strike, adding to the week's growing pile of "agents doing things nobody expected" stories alongside the Medicare breach and the Transluce report.

**Karpathy: "ready to pace."** Andrej Karpathy's [most recent public post](https://x.com/karpathy/status/2102063518979969034) (September 21): "So ready to do my part in pacing the frontier 🫡" — a lighthearted reference to Amodei's slowdown essay.

**Research worth reading.** [CounterRoute](https://arxiv.org/abs/2609.29109) — self-routed reasoning via counterfactual credit assignment, letting models decide independently whether queries need extended chains. [To Think or Not to Think](https://arxiv.org/abs/2609.29664) — harder questions don't monotonically benefit from extra reasoning; gains concentrate on partially solvable problems. [PUBG Ally](https://arxiv.org/abs/2609.29837) — an AI squadmate shipped publicly in PUBG on a 2B-parameter model, achieving +25.1 net positive recommendation score.
