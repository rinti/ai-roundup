---
title: "Anthropic IPO Fully Covered, Matt Pocock's /animatic Skill, ChatGPT Wallet Surfaces, Code Summit Aftermath"
date: "2026-11-14"
summary: "A quieter day after yesterday's avalanche. Anthropic's IPO book is **fully covered** before the roadshow even ends, with pricing set for November 18 and trading as ANT on November 19 — Bloomberg reports bankers expect to price above the $70–$78 range, pushing the valuation past $1.5 trillion. **China-based orders were rebuffed** under US export rules. Matt Pocock teased an **/animatic skill** that auto-generates explainer videos for important PRs, and announced a **live interview with the creators of Pi** (Armin Ronacher and Mario Zechner) for Monday. Simon Willison shipped **datasette-leaflet 0.3** and continued dissecting Gemini 4's confusing pricing tiers. Code references to a **ChatGPT Wallet** for agentic payments surfaced in the wild. The AI Engineer Code Summit wrapped with **swyx teasing a big Cognition launch next week** and the channel hitting one million YouTube subscribers. Continuing threads: the Nvidia employee petition for Jensen Huang's return, Theo debugging T3 Code latency, and Boris Cherny's Fable 5.2 subscriber loyalty resets."
tags:
  - Anthropic IPO Updates
  - Agentic Coding & Tools
  - AI Engineer Code Summit Wrap
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 14, 2026

## Anthropic IPO Updates

### The book is fully covered

[Bloomberg](https://www.bloomberg.com/news/articles/2026-11-10/anthropic-targets-64-4-billion-ipo-nearing-spacex-s-record) reports that Anthropic's IPO is fully covered — all 825 million Class A shares have orders from prospective investors — and bankers expect to price above the filed $70–$78 range, which would push the valuation past $1.5 trillion. [Yahoo Finance](https://finance.yahoo.com/technology/article/anthropic-ipo-claude-maker-to-begin-trading-on-thursday-nov-19-173550865.html) confirms pricing is set for November 18, with trading starting November 19 on Nasdaq under ANT.

- **China shut out.** [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-13/anthropic-ipo-share-orders-from-china-are-said-to-be-rebuffed) reported that institutional investors in mainland China and Hong Kong have been excluded from placing orders, partly because of US arms-trade export rules.
- **Private placement.** Seven companies — including Nvidia, Google and Microsoft — have agreed to buy $26 billion of Class N stock in a concurrent private placement, bringing the total raise to about $90 billion.
- **Roadshow video highlights.** [Simon Willison](https://simonwillison.net/2026/Nov/11/anthropic-ipo-roadshow/) linked the roadshow transcript. The 42-minute video leads with compute strategy ("Anthropic Direct" leases chips and runs purpose-built data centers rather than relying solely on cloud). The key financials: 43% year-to-date compute margin, 85% gross margin, 12% adjusted operating margin, and positive free cash flow. [Constellation Research](https://www.constellationr.com/insights/news/anthropics-ipo-roadshow-video-takeaways-absurd-interesting) analyzed the word frequency — "compute" dominates, "safety" is second.

### Boris Cherny on Fable 5.2 loyalty resets

[Boris Cherny](https://x.com/bcherny/status/2119873095129550880) (Claude Code creator) announced a subscriber perk tied to the Fable 5.2 launch: the longer you've been subscribed, the more Fable usage resets you get. Pro users get one; Max, Ultra, and Team Premium users get up to three. A nod to retention in a market where everyone's fighting over the same power users.

## Agentic Coding & Tools

### Matt Pocock's /animatic skill

[Matt Pocock](https://x.com/mattpocockuk/status/2121156583979962734) is building an `/animatic` skill — the dream is for every important PR to be accompanied by a short video showing how the change works. Still early: "the problem at the moment is latency." If it ships, it would be the first agent skill to generate video artifacts from code diffs.

### Matt Pocock's Home Repo pattern gets traction

Yesterday's [Home Repo article](https://www.aihero.dev/the-home-repo-pattern) ([X post](https://x.com/mattpocockuk/status/2120847219788308872), 1,757 likes) is making the rounds. The idea: one repository holds your skills, AGENTS.md, and shared docs, with pointers to your other repos. The agent runs from the home repo and can open or clone anything it points to. The article includes a setup prompt that walks you through it. [Medium write-up](https://medium.com/@joe.njenga/i-tested-matt-pococks-home-repo-pattern-on-claude-code-fixes-agentic-coding-chaos-d81002cb4d11) from a tester says it "fixes agentic coding chaos." Discussion points: pointer drift when repos move, versioning across shared and local instructions, and how Claude Code loads CLAUDE.md from every parent directory (so the index follows you) while Codex only reads downward.

### Matt Pocock interviews Pi creators Monday

[Matt Pocock](https://x.com/mattpocockuk/status/2120554967035433183) announced a live interview with [Armin Ronacher](https://x.com/mitsuhiko) (@mitsuhiko, creator of Flask, now building at Earendil) and [Mario Zechner](https://x.com/badlogicgames) (creator of Pi) — Monday, 4:20 PM UTC. Topic: how the creators of Pi think code should be written in the AI age. Worth watching if you're interested in the intersection of minimalist agent design and production codebases.

### ChatGPT Wallet code surfaces

[RuntimeWire](https://runtimewire.com/article/exclusive-openai-is-building-a-chatgpt-wallet-for-agentic-purchases) found code in the Windows ChatGPT/Codex app pointing to an unreleased wallet for saving payment methods that agents can use during tasks. [Visa](https://www.paymentsjournal.com/chatgpt-adds-visa-integration-for-ai-assisted-purchases/) confirmed tokenized card credentials will power agent purchases inside ChatGPT. A teaser page reads "Your Wallet is on its way." OpenAI has confirmed nothing about timing. If this ships, it would be the first major agentic payment layer — Google is keeping Gemini read-only on Google Wallet for now.

### OpenAI's persistent agent architecture

Continuing from yesterday: [Peter Steinberger](https://x.com/steipete/status/2121058770767982997) shared [OpenAI's blog post](https://developers.openai.com/blog/securing-persistent-agents-like-openclaw-at-openai) on running 500+ persistent agents internally. The key design: a trusted gateway sits apart from the untrusted agent process, each agent gets its own ChatGPT Service Account, and an automatic reviewer handles approvals (because "constantly requiring human review creates review fatigue where humans are trained to blindly accept all permission prompts"). Steinberger's [poll](https://x.com/steipete/status/2121042215619510584) on yolo mode drew 3,206 votes — 75% prefer yolo over approval prompts.

He also [warned](https://x.com/steipete/status/2121009372470067544) (1,343 likes): "There's some new agent launching later this week and marketers offer a lot of money to say nice things about it on X. Keep a lookout on honest reviews." Likely related to swyx's Cognition tease (see below).

### Thariq on the $200 plans

[Thariq](https://x.com/trq212/status/2117305792923889731) (@trq212, formerly Claude Code at Anthropic): "One week in, my takeaway is that you don't need unlimited tokens to do great work. The $200 plans are amazing and this is the most expensive intelligence will ever be." He closed the AI Engineer Code Summit by [writing code by hand in an IDE](https://x.com/trq212/status/2121067561915916575) and arguing "2026 was the industrial revolution of software. Now let's build its Renaissance."

## AI Engineer Code Summit Wrap

The two-day event in New York wrapped yesterday. Key moments from the tracked accounts:

- **Cognition tease.** [swyx](https://x.com/swyx/status/2120962735211233454) (124 likes) hinted: "Pay special attention to Walden Yan's keynote right now to get a preview of {BIG LAUNCH NEXT WEEK}." Cognition's most recent ship was SWE-2 in September. Steinberger's "new agent" warning likely refers to this.
- **Lydia Hallie's talk.** [swyx](https://x.com/swyx/status/2120925700534460775) says it "already got 200k views in 13 hours — highest day 0 count in the history of AIE!" The talk argues that "most of what we've added to our Claude Code setups over the past year is now holding them back." [Watch it here.](https://www.youtube.com/watch?v=vlfCjWuv4es)
- **One million subscribers.** The AI Engineer YouTube channel crossed one million subscribers. [They got a cake.](https://x.com/swyx/status/2121060183988486493)
- **Lance Martin on multi-agent.** [swyx](https://x.com/swyx/status/2120981552561844593): "Lance starting out his keynote strong with Fermat's proof" and "AIE Code is now AIE Math."
- **Ivan Leo on evaluation.** [Ivan Leo](https://x.com/ivanleomk/status/2121047741719814217): "We should shift to defining what good looks like and free our agents to explore."

## Videos & Podcasts

- **[Rethinking Claude Code Best Practices](https://www.youtube.com/watch?v=vlfCjWuv4es)** — Lydia Hallie at AI Engineer. Why your Claude Code setup from six months ago is probably slowing you down.
- **[Building the Claude API for the Frontier](https://www.youtube.com/watch?v=p2xvJAbF-i4)** — ClaudeDevs. Covers effort switching mid-conversation, cost measurement across model upgrades, and how Mythos and Fable share weights with different safeguards.
- **[Stop Picking The Wrong Model](https://www.youtube.com/watch?v=XtykeVoSmP8)** — Theo on when to use Opus 5.5 vs Fable 5.2.
- **[AIE CODE Day Two Livestream](https://www.youtube.com/watch?v=y9JtCCZP2MQ)** — Full stream with OpenAI, ArtCraft, Cognition, Exa, Anthropic, and Amp.
- **[Latent Space on ArtCraft](https://latent.space/p/artcraft/)** — The team that cloned Photoshop and now wants to "Rebuild Everything."
- **[Latent Space: How Stanford Teaches AI-Native Engineering](https://latent.space/)** — Mihail Eric on Monaco, Stanford's AI-native engineering course.
- **[Latent Space: Jamin Ball on Anthropic's S-1](https://latent.space/)** — Breaking down the IPO numbers.

## Other Interesting Stuff

### Nvidia aftermath continues

The [Wired report](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) on Nvidia employees petitioning for Jensen Huang's return drew 1,600+ internal comments. "The crisis has cost the company $1 trillion in market value." [Armin Ronacher](https://x.com/mitsuhiko/status/2120901574071627805) (931 likes) took the other side: "Men will rather erase $2T USD in market cap than to be faithful to their wives."

The tracked accounts mostly sided with Huang: [Steinberger](https://x.com/steipete/status/2120903527803564397) (12,822 likes) said it "feels rushed and not right," Tim Sweeney agreed, and [dax](https://x.com/thdxr/status/2120880792742109630) pointed out that "the Chinese govt actively blocks Nvidia chips from entering the country — whatever is going on here is more complicated than what's being said."

### Simon Willison's blog: Nov 13

[Simon Willison](https://simonwillison.net/2026/Nov/13/datasette-leaflet/) shipped **datasette-leaflet 0.3**, fixing a referrer-policy conflict with OpenStreetMap tiles. He also continued his Gemini 4 pricing breakdown: Carbon and Argon are both $2/$10 until November 30 (then doubling), making Hydrogen at $1.50/$7.50 "only a 25% discount on its more capable peers" — and [still 15x more expensive](https://x.com/simonw/status/2121039423441981444) than Claude Haiku 5.5 or GPT-6 Luna at $0.10/$0.50.

Earlier in the week: he built a [Beep Locator](https://simonwillison.net/2026/Nov/9/mysterious-beeps/) with Claude Code to triangulate a mysterious beeping device (accurate to ~40cm), and proposed [hiding AI PR descriptions](https://simonwillison.net/2026/Nov/9/details-summary) behind `<details><summary>` since they're accurate but read like slop.

### Karpathy's curation projects

Andrej Karpathy's [HackerTube](https://hackertube.org) (built Oct 31 in ~2 hours with Opus 5.5) filtered 43M Hacker News comments down to 6,454 curated videos. He followed up with [TristanTube](https://x.com/karpathy/status/2119118206325703121) on Nov 7, built from ~47,000 videos on a developer's YouTube channel list — finished with Claude Code in about three minutes. His [take](https://x.com/karpathy/status/2015883857489522876): "Without a personal agent filtering out the slop, you will drown."

### Theo left Anthropic, goes all-in on T3 Code

[Theo](https://x.com/theo/status/2117927404027118027) announced on Nov 4 that it was his last day at Anthropic. He's been pulling all-nighters on [T3 Code](https://github.com/t3dotgg/t3-code) latency — one session got times from [2230ms down to 31ms](https://x.com/theo/status/2120995557468737904). The approach: "I turned all my extreme cases into a hill climb with a bunch of fake devices and iOS simulators." Also notable: [open-weight models make up less than 0.5%](https://x.com/theo/status/2120732020036993066) of T3 Code traffic.

### ParseBench-2: LlamaIndex vs Reducto

[Jerry Liu](https://x.com/jerryjliu0/status/2120921239619612921) launched ParseBench-2 (4.3k+ document pages, 330+ error types). Reducto's team immediately challenged the scoring methodology, and the thread turned into a debate about rule-based benchmarks vs LLM-as-judge. Both sides sell parsers — read accordingly.

### Foldkit: the new frontend framework Matt Pocock asked about

[Matt Pocock](https://x.com/mattpocockuk/status/2117157362700058671) asked "Can someone give me the 'aha' moment about Foldkit?" It's a TypeScript frontend framework built on [Effect](https://effect.website) and [Elm architecture](https://guide.elm-lang.org/architecture/) — one Model, one update function, DevTools that can rewind your UI to any state. Still young (v0.148.2 on npm, ~318 GitHub stars), but the "correctness-first" pitch is resonating with the TypeScript crowd.

---

*Sources for this roundup were gathered via web search on November 14, 2026. Direct Twitter/X access was unavailable due to network restrictions — all posts are sourced from search-indexed X links and secondary coverage. Some posts may be from Nov 12–13 but are included where they represent continuing discussions or weren't covered in the previous roundup.*
