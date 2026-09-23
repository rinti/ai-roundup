---
title: "Opus 5.5 and GPT-6 Sol & Luna drop on the same day — prices halve everywhere"
date: "2026-09-23"
summary: "Tuesday September 22 produced the most concentrated frontier model drop of the year. Anthropic shipped **Claude Opus 5.5** at $4/$20 per MTok — 40% cheaper than Opus 5, 30% faster, and beating Fable 5.1 on agentic coding benchmarks — and roughly an hour later OpenAI countered with **GPT-6 Sol** at $2/$10 and **GPT-6 Luna** at $0.10/$0.50, slashing their own prices 50%. Boris Cherny revealed Opus 5.5 ported HAProxy from C to Rust in 9.5 hours, beating Fable's 12 hours for half the cost. Tibo Sottiaux announced the Sol/Luna launch with a permanent 50% API price cut and teased a Codex reset. Simon Willison called it 'a new price war' and announced a Birds of a Feather session on agentic engineering in SF. Theo asked 'how are we feeling about Sol and Luna?' and the community is still sorting the benchmarks out. Meanwhile: GPT-6 Astra broke a 1941 Enigma message, Alibaba shipped Qwen Image 2.1, the Pentagon blamed AI for a deadly missile strike, Foremerge launched to catch intent conflicts between parallel coding agents, and Heretic hit HN for automating censorship removal from open models."
tags:
  - "The Big Drop: Opus 5.5, GPT-6 Sol & Luna"
  - "Reactions & Benchmarks"
  - "Agentic Coding & Tooling"
  - "Other AI News"
---

# AI Roundup — September 23, 2026

The single busiest model-launch day of the year. Anthropic and OpenAI shipped within an hour of each other, prices fell across the board, and the agentic coding world kept building on top of it all. Karpathy and Cherny posted; Pocock and Ronacher were quiet; Jerry Liu's DocJev from the weekend is still making rounds.

## The Big Drop: Opus 5.5, GPT-6 Sol & Luna

**Claude Opus 5.5.** Anthropic [launched](https://www.anthropic.com/claude-opus-5-5) Opus 5.5 on September 22, the first model in the 5.5 family. The pitch: Fable 5.1-level capability at a lower price and faster speed. Key numbers:

- **Pricing:** $4/$20 per MTok (down from Opus 5's $5/$25), cache reads at $0.20/MTok — a 60% decrease
- **Speed:** 30% faster output than Opus 5
- **Terminal-Bench 4.0:** 66.4% at extra-high effort, ahead of Astra (57.9%), Fable 5.1 (55.8%), and Opus 5 (52.3%)
- **CursorBench:** Beats GPT-5.6 Sol by 11 points at roughly a third the cost
- At default effort, Opus 5.5 beats Opus 5 at max effort for about a fifth of the cost

Sonnet 5.5 and Haiku 5.5 are promised "in the coming weeks." Anthropic also increased five-hour usage limits on Pro, Max, Team, and Enterprise plans and introduced a bankable rate-limit reset. Available on AWS, Google Cloud, and Microsoft Azure. The [HN thread](https://news.ycombinator.com/item?id=49803892) (1,160 points, 790 comments) was broadly positive. The Benzinga coverage noted Anthropic [scrapped the five-hour caps](https://www.benzinga.com/markets/private-markets/26/09/61933271/anthropic-launches-claude-opus-5-5-cuts-costs-40-and-scraps-5-hour-usage-caps) entirely.

**GPT-6 Sol and Luna.** Roughly an hour after Opus 5.5, OpenAI [shipped](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/) GPT-6 Sol and GPT-6 Luna — faster, cheaper siblings to the flagship Astra:

- **Sol:** $2/$10 per MTok (down from GPT-5.6 Sol's $4/$20) — a straight 50% cut
- **Luna:** $0.10/$0.50 per MTok (down from $0.20/$1.20) — among OpenAI's cheapest models ever
- Both share a 1.05M-token context window and up to 128k output tokens
- Sol targets complex coding and agentic workflows; Luna is for high-volume focused tasks

Tibo Sottiaux [announced](https://x.com/thsottiaux/status/2102463847714247142): "GPT-6 Sol and Luna are out. Not only are they a very significant improvement across the board, but also in writing and general 'you know when you try it' quality. We are also permanently reducing the API price by 50%." The [HN thread](https://news.ycombinator.com/item?id=49805509) (1,124 points, 587 comments) ran hot, and Tibo teased a Codex reset for the occasion. WCCFTech noted Sol [undercuts both Opus 5.5 and DeepSeek V4.1 Flash](https://wccftech.com/openai-unleashes-a-new-price-war-with-gpt-6-sol-and-gpt-6-luna-now-priced-below-claude-opus-5-5-and-deepseeks-v4-1-flash-respectively-negating-the-rationale-for-open-weight-models/).

**Simon Willison's price-war post.** Simon [wrote up](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/) the day as "Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and a new price war." He's now using Sol and Opus 5.5 as his default models in Codex and Claude Code, and upgraded the Datasette Agent demo to Luna.

## Reactions & Benchmarks

**Boris Cherny on Opus 5.5.** Cherny [tweeted](https://x.com/bcherny/status/2102439069053747549): "Opus 5.5 is a really good model. It's been my daily driver the last few weeks. We had Opus 5.5 and Fable 5.1 each port HAProxy from C to Rust. Both passed nearly all of HAProxy's tests, but Opus 5.5 finished in 9.5 hours compared to Fable 5.1's 12 hours, and for 51% less cost." A concrete data point that aligns with the benchmark story — same capability, materially cheaper and faster.

**Theo on Sol and Luna.** Theo [asked](https://x.com/theo/status/2102533370937053281): "How are we feeling about GPT-6 Sol and Luna so far?" (145k views). He was [previously excited](https://x.com/theo/status/2096086696156921955) about Sol specifically and his earlier recommendation was "just use Sol." The community is still sorting through real-world performance versus the benchmarks, especially after his brutal Grok 4.7 review the day before.

**Karpathy's visual riff.** Karpathy engaged with the Opus 5.5 launch and riffed on the idea of turning historical images or video into custom GTA-style worlds you can walk through — continuing his "ephemeral GTA of X on demand" thesis from the Lord of the Rings three.js demo he built with Opus 5 [earlier](https://x.com/karpathy/status/2083749667410727319).

**Peter Steinberger on OpenClaw security.** Steipete [announced](https://x.com/thsottiaux/status/2102292452329820272) that Trail of Bits' security audit via OpenAI's "Patch the Planet" initiative found nothing critical in OpenClaw. Tibo's reply: "Huge!!" This follows the Nat Friedman "built from scratch, heavily inspired" confirmation from earlier this week and the Muse 0-day that Patrick Wardle found.

## Agentic Coding & Tooling

**Simon Willison: BoF on Agentic Engineering.** Simon [announced](https://simonwillison.net/2026/Sep/23/bof-agentic-engineering/) a Birds of a Feather session on agentic engineering, co-hosted with Jesse Vincent in San Francisco on October 14. The pitch: "celebrating strange and interesting things people are building with coding agents — not product pitches but much earlier explorations, leaning into the weirdness."

**Foremerge: intent conflicts for parallel agents.** [Foremerge](https://github.com/naw103/foremerge) hit the [HN front page](https://news.ycombinator.com/item?id=49789356) on September 22. It's a coordination protocol built above Git where agents publish intent and claim semantic scopes before writing code, so incompatible plans collide in a queryable store instead of at merge time. Written in Rust, uses SQLite, deterministic conflict rules. A neat complement to Pocock's Sandcastle, which solves parallel agents via Docker isolation.

**Thariq on AGENTS.md.** Earlier in the week, Thariq [shipped](https://x.com/trq212/status/2101009392611278961) AGENTS.md support in Claude Code (v2.1.277): if there's no CLAUDE.md in a folder, Claude checks for and uses AGENTS.md. Togglable in /config. His other theme this week: "use big pictures and few words" — pushing artifacts over console output.

**Unreal Agent.** A new open-source agent framework for game/3D workflows with Unreal Engine integration [hit HN](https://news.ycombinator.com/item?id=49805748) (124 points, 72 comments). Early adopters report strong spatial reasoning but rough edges in tool-calling stability.

**Jerry Liu's DocJev still making rounds.** Jerry Liu's [DocJev](https://x.com/jerryjliu0/status/2101738281046294552) from September 20 — a lightning-fast OSS library for document classification and splitting with Jev — continues circulating. It's 6x faster than GPT-5.6 Luna with equivalent accuracy, at 182.5ms median for classification versus Luna's 785.4ms.

## Other AI News

**GPT-6 Astra breaks a 1941 Enigma message.** Carter Leffer directed Astra to attempt the unbroken messages on the Crypto Cellar Research archive. It [decoded](https://www.schneier.com/blog/archives/2026/09/gpt-6-astra-breaks-an-old-enigma-message.html) a 1941 German Army radio message (MVUEH, 82 characters) using ROSENOW as a crib. The plaintext was routine logistics: "Please specify route of march." The authors emphasize Astra didn't "break Enigma" — it applied known WWII-era methods via generated Python/C++ code. The [HN thread](https://news.ycombinator.com/item?id=49801324) (551 points) was suitably impressed. Bruce Schneier covered it.

**Pentagon blames AI for deadly strike.** An unreleased Pentagon review [concluded](https://yournews.com/2026/09/21/7200962/pentagon-probe-finds-overreliance-on-ai-staff-cuts-contributed-to/) that overreliance on a Palantir AI tool, outdated intelligence, and cuts to civilian-harm specialists contributed to the [Minab school attack](https://en.wikipedia.org/wiki/2026_Minab_school_attack) in February. The HN thread (383 points, 204 comments) was the most-discussed non-model story of the day.

**Qwen Image 2.1.** Alibaba's Qwen team [released](https://www.marktechpost.com/2026/09/21/alibaba-qwen-releases-qwen-image-2-1/) a 7B image generation and editing model on September 20. Key feature: native transparent PNG output directly from a text prompt instead of a background-removal pass, plus editing with up to 10 reference images. Research-only licence. The [HN thread](https://news.ycombinator.com/item?id=49775499) hit 734 points.

**Heretic.** The tool for [fully automatic censorship removal](https://github.com/p-e-w/heretic) from transformer language models via directional ablation keeps trending — [266 points on HN](https://news.ycombinator.com/item?id=49783101). `pip install heretic-llm`, run it on a model, get back a version with reduced refusals in 20–30 minutes. No post-training required.

**Meta's Muse 0-day.** A local hijack in Meta's Muse agent was [found by Patrick Wardle](https://news.ycombinator.com/item?id=49802030), hotfixed by Meta. Amazon separately [blocked Muse from shopping](https://news.ycombinator.com/item?id=49789982) on amazon.com (141 points, 148 comments on HN).

**Latent Space AINews.** swyx's [AINews roundup](https://www.latent.space/p/ainews-claude-opus-55-the-new-default) crowned Opus 5.5 the new default model for their AI summarisation pipeline, covering the price war and the community reactions in detail. The Jev podcast episode from the weekend continues circulating.
