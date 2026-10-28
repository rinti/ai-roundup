---
title: "Torvalds' Claude-written kernel patches hit a race condition, Stanford professors' books were pirated for Claude training, Thariq starts building an AI-native macOS dock, Liquid AI ships LFM3"
date: "2026-10-28"
summary: "**Linus Torvalds** used Claude Code to write Linux page cache patches claiming 23x throughput gains; a reviewer [found a race condition](https://thenewstack.io/torvalds-claude-code-kernel/) within four hours that the AI-written tests had missed. The **Stanford Daily** [reported](https://stanforddaily.com/2026/10/27/professors-books-pirated-to-train-claude/) that pirated copies of Stanford professors' books were used to train Claude, hitting 416 points on Hacker News. **Thariq**, days after leaving Anthropic, [showed](https://x.com/trq212/status/2115135857669881939) an AI-native macOS dock with agent-customizable modes. **Liquid AI** [released LFM3](https://www.liquid.ai/blog/lfm3), a multimodal model for specialized intelligence. **Anthropic** published [early results](https://www.anthropic.com/research/early-progress-drug-development) on using Claude for drug development, targeting neglected diseases. **Broadcom** CEO Hock Tan [personally intervened](https://www.wsj.com/finance/broadcom-ceo-intervened-to-seal-63-billion-anthropic-debt-deal-c807754f) to close a $63B debt deal financing Anthropic's chip supply. **Replit** CEO Amjad Masad said the company has dropped Anthropic for OpenAI in a deal worth $100M+/year, though insiders say Claude models are still available. **swyx** posted about his Anthropic bag fumble, and **Simon Willison** blogged about running a Game Boy emulator on the GitHub Universe badge."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Models & Benchmarks
  - Security & Legal
  - Other Interesting Stuff
---

# AI Roundup — October 28, 2026

## Agentic Coding & Agent Harnesses

### Linus Torvalds used Claude Code on the Linux page cache. Reviewers found a race.

Linus Torvalds submitted a 10-patch series to the Linux kernel that targeted a long-standing page-cache reference-counting bottleneck, written with Claude Code. The patches [reported a 23x throughput gain](https://thenewstack.io/torvalds-claude-code-kernel/) in a synthetic benchmark on his Ryzen Threadripper. But kernel developer Kiryl Shutsemau [found a race condition](https://neurohive.io/en/news/linus-torvalds-claude-code/) within four hours of posting — one the AI-written tests had missed. Reviewers also raised memory-reclamation concerns.

Torvalds warned that real-world gains would be considerably smaller than the synthetic benchmark, and has handed further development to Shutsemau. A reworked version reportedly shows about 4.5x on ext4 with default security mitigations enabled. The patches have not been merged. The episode is a clean illustration of a pattern the agentic coding world keeps rediscovering: AI can write plausible kernel-level code at remarkable speed, but adversarial human review remains the bottleneck that catches the bugs that matter.

### Thariq is building an AI-native macOS dock

Days after [leaving Anthropic](https://x.com/trq212/status/2113898455080783924), Thariq [showed](https://x.com/trq212/status/2115135857669881939) what he's working on next: an AI-native macOS dock with custom modes (writing, building, etc.) that an agent can customize in real time. It uses "jev" to classify activity and notifications. He said it still has many edge cases and isn't ready to share yet. swyx [noted](https://x.com/swyx/status/2114805687226376267) the trajectory: "bro moved from Claude Code to AIE Code."

### Theo: T3 Code's daily improvements continue

Theo has been shipping a meaningful T3 Code improvement every day. The latest was [Day 23](https://x.com/theo/status/2114955692193054930): a complete overhaul of tool descriptions, hill-climbed against Sonnet, Sol and Opus using an 80-case eval built from real failures. The result: agents use T3 Code's tools 4x better while consuming 79% less context. It shipped in [T3 Code 0.1.3](https://x.com/theo/status/2114965299426640348).

He also [announced tstack](https://x.com/theo/status/2114623574371963360), a repo publishing his personal agent skills for Claude Code and Codex. And usage numbers continue climbing: [almost $5M/day in tokens](https://x.com/theo/status/2114897663821038017) going through T3 Code, nearly 750K installations, and what looks like over 50% of OpenRouter's traffic.

### Quick hits

- **Simon Willison** [blogged](https://simonwillison.net/2026/Oct/27/game-boy-color-on-my-conference-badge/) about running a Game Boy Color emulator on the GitHub Universe conference badge, and wrote a [detailed pricing post](https://simonwillison.net/2026/Oct/26/gpt-61-terra/) on GPT-6.1 Terra, noting it "sits in the same position as Sonnet in the Anthropic model collection."
- **Matt Pocock** argued the next great [language for agents](https://x.com/AGTPinsights/status/2114458115362160871) should combine Rust's speed, Go's small design space, and the strictest type system ever. He called Bend "an interesting first effort." (~112K views)
- **Survival LLM**, an offline AI assistant and emergency reference library that runs on your own computer, [hit 129 points on HN](https://www.brangus.io/survival-llm).
- **Ask HN**: "[T'was the night of Claude Reset and quota left: Funniest app you built?](https://news.ycombinator.com/item?id=50261396)"

## Claude & Anthropic

### Stanford professors' pirated books were used to train Claude

The [Stanford Daily reported](https://stanforddaily.com/2026/10/27/professors-books-pirated-to-train-claude/) that pirated copies of Stanford professors' books were included in Claude's training data. The story [hit 416 points on Hacker News](https://news.ycombinator.com/item?id=50261396). This adds to the existing legal picture: a federal judge [ruled in June 2025](https://www.news4jax.com/business/2025/06/24/anthropic-wins-ruling-on-ai-training-in-copyright-lawsuit-but-must-face-trial-on-pirated-books/) that AI training on written works qualifies as fair use, but also found that Anthropic's use of over 7 million pirated books from Books3, Library Genesis and the Pirate Library Mirror was not transformative and sent that issue to trial. Authors [argued in an October filing](https://www.mlex.com/mlex/amp/articles/2331357) that the piracy undermines the fair-use defense.

### Early progress on accelerating drug development with Claude

Anthropic [published results](https://www.anthropic.com/research/early-progress-drug-development) on using Claude to speed up drug development, hitting [73 points on HN](https://news.ycombinator.com/item?id=50261396). This builds on Claude Science, launched in June 2026 as a workbench integrating 60+ curated databases. The internal drug discovery program targets neglected diseases that traditional biopharma companies wouldn't pursue. Early partners include the Allen Institute, UCSF Brain Tumor Center, Manifold Bio and Novo Nordisk.

### Broadcom CEO personally closed the $63B Anthropic chip deal

The WSJ [reported](https://www.wsj.com/finance/broadcom-ceo-intervened-to-seal-63-billion-anthropic-debt-deal-c807754f) that Broadcom CEO Hock Tan personally intervened to seal a $63B debt deal to finance chips for Anthropic. Broadcom has also agreed to lend Anthropic up to $42B according to the S-1 filing. The total infrastructure commitment across seven contracts is about $630B, 70% non-cancellable (~$441B owed whether or not the capacity gets used). An earlier Broadcom-Apollo-Blackstone partnership financed a $35B expansion in June.

### Replit says it dropped Anthropic for OpenAI. Insiders dispute the scope.

Replit CEO Amjad Masad [said at TechCrunch Disrupt](https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/) that Replit was no longer working with Anthropic: "I think ChatGPT is better now." The Information [reported](https://aiweekly.co/alerts/the-information-replit-shifts-most-ai-spend-from-anthropic-to-openai-in) that OpenAI gave Replit more than 30% off to win a contract worth over $100M/year. But Masad [softened the framing](https://aiweekly.co/alerts/replit-ceo-says-company-dropped-anthropic-for-openai-but-insiders-dispute-the) within a day: OpenAI is now the preferred partner for Replit Agent, while Claude models remain available. A source told TechCrunch the Anthropic partnership is still in place, and Replit's docs still list seven Claude models. Replit had been a top-five Anthropic customer.

### Anthropic S-1 reactions continue

The S-1 filing dominated discussion through the weekend. New angles still surfacing:

- **swyx** [posted](https://x.com/swyx/status/2115089887959359988) about his Anthropic bag fumble at SpaceX's IPO: "I estimate this was a $500m bag fumble."
- Trading could start [as early as Nov 16](https://finance.yahoo.com/markets/article/anthropics-ipo-could-start-trading-as-soon-as-nov-16--heres-the-road-from-filing-to-first-trade-155405578.html) at an anticipated $1.8–2.0T valuation.
- A [Protos analysis](https://protos.com/anthropic-was-keeping-its-ipo-share-price-secret-footnote-reveals-71-43/) found a footnote suggesting a per-share value around $71.43.
- Employees and early investors [can sell shares on day one](https://www.cnbc.com/2026/10/26/anthropic-ipo-live-updates-ai-s-1-filing.html).
- Anthropic expanded its [GSA agreement](https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-october-28-2026/) to federal plus state and local governments, with a 40% discount.

## Models & Benchmarks

### Liquid AI releases LFM3 for multimodal specialized intelligence

Liquid AI [released LFM3](https://www.liquid.ai/blog/lfm3), described as "Every Modality for Specialized Intelligence." The release [hit 104 points on HN](https://news.ycombinator.com/item?id=50261396). Liquid AI, the MIT spinout, previously released LFM2.5-VL-3B in August 2026, a compact 3B-parameter model for image and text. LFM3 expands the multimodal scope. The architecture uses non-transformer foundations (liquid neural networks), which Liquid AI pitches as more efficient for specialized deployments.

### Also in models

- **NVIDIA Nemotron 3.5 Parse** took the #1 spot on LlamaIndex's ParseBench. Jerry Liu [congratulated](https://x.com/jerryjliu0/status/2113008819328700439) the team, noting it tops LlamaIndex's own OCRia-1 (which scored 87.4 a week earlier).
- **Armin Ronacher** [reflected](https://x.com/mitsuhiko/status/2113207589978636646) that "we built so much bad software over the last 30 years, and now the universe is punishing us for our sins."
- **Karpathy's AI Understanding Funnel** post from Oct 11 continues circulating (4.7M+ views): ~75% of people have barely interacted with LLMs, ~20% are casual free-tier users, ~20M are frontier power users, and ~5,000 have access to internal frontier systems.

## Security & Legal

### Stanford piracy adds to Anthropic's copyright woes

See the Anthropic section above. The Stanford Daily report, the existing Bartz lawsuit, and the new author filing all converge on the same question: does training on pirated copies undo the fair-use defense that held up for the training process itself?

### China's AI bubble has burst, analysts say

Yahoo Finance [published an analysis](https://finance.yahoo.com/markets/stocks/articles/analysis-china-ai-bubble-already-120038616.html) arguing that China's AI market is overheating and correcting. Chinese hedge funds have been [warning](https://fourweekmba.com/chinese-hedge-funds-ai-super-bubble-burst-warning/) about an AI super-bubble since mid-2026. The piece landed on HN amid the Anthropic IPO frenzy, serving as counterpoint to the $2T valuation excitement.

## Other Interesting Stuff

- **swyx** [announced](https://x.com/swyx/status/2114805687226376267) that **AIE Code** runs Nov 11–13 in San Francisco — "the last flagship AIE of the year for the top 1000 agentic engineers." Thariq will speak about what's now and what's next. swyx is also [hiring](https://x.com/swyx/status/2114805687226376267) writers, reviewers and reporters for the Latent Space editorial team.
- **Trump** reportedly said the government will move away from the term "AI."
- **OpenAI** is reportedly looking beyond Nvidia for more compute, with reports it plans to buy Google TPUs.
- **Apple** is putting an AI assistant inside its office apps, and **Google DeepMind** upgraded its world simulator.
