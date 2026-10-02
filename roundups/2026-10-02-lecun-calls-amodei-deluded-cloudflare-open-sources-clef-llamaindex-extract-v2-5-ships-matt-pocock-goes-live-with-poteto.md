---
title: "LeCun calls Amodei deluded, Cloudflare open-sources Clef, LlamaIndex Extract v2.5 ships, Matt Pocock goes live with Poteto"
date: "2026-10-02"
summary: "**Yann LeCun** called Dario Amodei 'deluded' and dismissed extinction rhetoric as 'the worst marketing campaign,' days after the White House pact and Anthropic's S-1 leak. **Cloudflare** open-sourced **Clef**, a 27B decision model under Apache 2.0, rivalling OpenAI's Decisions API at a fraction of the cost. **LlamaIndex** shipped **Extract v2.5**, a family of document-extraction agents that outperform Opus 5.5 and GPT-6 Sol while costing 30%–4x less. **Matt Pocock** went live with **Poteto** (Lauren, SpaceX/Cursor) about shipping 1,000+ PRs a month with agents. **Anthropic** launched Claude Code mods for community-built harness customizations — token displays, loop detectors, even Tetris. **Tavus** claimed its **Griffin** model passed a live video Turing test. Karpathy hasn't posted since September 10. Simon Willison's blog post quoting Matthew Green on agents as worms continued to circulate."
tags:
  - "LeCun vs Amodei: Safety Debate"
  - "Cloudflare Clef"
  - "LlamaIndex Extract v2.5"
  - "Claude Code Mods & Anthropic"
  - "Videos & Live Streams"
  - "Agentic Coding & Agent Harnesses"
  - "Other Interesting Stuff"
---

# AI Roundup — October 2, 2026

Thursday's top story was Yann LeCun going after Dario Amodei on extinction risk, hours after the Anthropic S-1 leak gave everyone new numbers to argue about. Cloudflare dropped Clef, an open-weight decision model that undercuts OpenAI's Decisions API. LlamaIndex shipped Extract v2.5 with agents that beat frontier models on document extraction. Matt Pocock went live with Lauren (Poteto) from SpaceX about high-velocity agent workflows. Karpathy hasn't posted since September 10. Boris Cherny only retweeted. Mitsuhiko was quiet after yesterday's Figma MCP flurry.

## LeCun vs Amodei: Safety Debate

**LeCun calls Amodei "deluded" and says he has "zero concerns" about AI extinction.** In a [Fortune interview](https://fortune.com/tag/tech-3/) published October 1, Meta's chief scientist dismissed Anthropic's safety framing as "the worst marketing campaign" the AI industry has ever run. He called the rogue-agent incidents "exactly what happens with leaky sandboxes" — engineering failures, not existential threats. This came days after Amodei's ["We Must Pace the Frontier"](https://dataanalyticsystem.com/blog/pace-the-frontier-what-the-anthropic-ceo-essay-actually-proposes-2026-09) essay, the [White House self-policing accord](https://superframeworks.com/articles/pace-the-frontier-ai-slowdown-what-it-means), and the FTC opening probes into both Anthropic and OpenAI.

**Anthropic's S-1 leak put numbers on the fear.** The leaked filing devotes [80 pages to risk factors versus 48 on the business model](https://github.com/diclogic/ai-daily-digest/issues/170). It states models could pose "catastrophic or existential risk" and notes they can "resist shutdown" and exhibit "self-preserving behaviors." Revenue is ~$4.6B, operating loss north of $8B, and $518B in committed infrastructure obligations. About 25% of revenue comes from two customers. [John Gruber's math](https://daringfireball.net/linked/2026/09/30/reuters-anthropic-ipo-prospectus): "-50 times 2025 losses."

**Karpathy endorsed the Amodei essay.** Before going quiet, Karpathy [posted](https://x.com/karpathy/status/2098811935114551617): "I love this and really hope we can come together as an industry and make it happen." Sam Altman agreed within hours of the original essay. The industry's three largest labs now nominally back the same slowdown framework while racing to ship.

## Cloudflare Clef

**Cloudflare open-sources Clef, a 27B decision model under Apache 2.0.** [Clef and Clef-flash (9B)](https://startupfortune.com/cloudflare-open-sources-clef-to-challenge-openai-and-amazon-on-ai-agent-decisions/) output probability vectors instead of text, so output tokens aren't billed. Pricing is $0.24 per million input tokens for Clef and $0.09 for Clef-flash. 64K context, supports text, JSON, images and video.
- This makes Cloudflare the only one of the three major decision-model providers (alongside OpenAI's Decisions API and Amazon's Strands Decider) giving away full model weights.
- Latent Space [called](https://www.latent.space/p/devday-2026) OpenAI's Decisions API "just a Luna wrapper for now." Clef's open weights let teams run it locally.

## LlamaIndex Extract v2.5

**Jerry Liu ships a family of document-extraction agents.** [Extract v2.5](https://www.unite.ai/llamaindex-launches-extract-v2-5-with-accuracy-and-grounding-gains/) launched October 1 with three tiers: Cost Effective, Agentic and Agentic Plus. On [ExtractBench](https://x.com/jerryjliu0/status/2087195936225108171), their open document-extraction benchmark, value F1 jumped from 87.1→93.9 (Cost Effective), 89.8→95.8 (Agentic) and 95.1→96.4 (Agentic Plus).
- Jerry Liu [announced](https://x.com/jerryjliu0) the agents "outperform Opus 5.5 and GPT-6 Sol while being 30%–4x cheaper."
- The new agent harness is purpose-built for extraction, drawing inspiration from coding agents and tuned to handle failure modes across vision, reasoning and verification.
- No per-page price increase across any tier.

## Claude Code Mods & Anthropic

**Claude Code mods ship for community customization.** Anthropic [launched mods](https://heardin.ai/articles/claude-mods-aims-to-let-users-reprogram-how-claude-code-works) — TypeScript functions that hook into Claude Code's internal systems. The community immediately built token-usage displays, loop detectors, inline Mermaid rendering, hover-masked secrets, and Tetris. Mods run without sandbox protection, which Thariq Shihipar discussed in detail on the [Latent Space episode](https://www.latent.space/p/thariq) from September 29.

**Claude for Government goes GA.** Federal and state agencies get general availability. Claude Code and Microsoft 365 integration are in early access.

**claude.dev launched yesterday.** Anthropic's [new developer home](https://x.com/ClaudeDevs/status/2105391694741119047) has engineering deep dives, Claude Code and API guides, and "some fun easter eggs." Thariq and Boris Cherny both retweeted it. The first post is [how claude.ai got 3x faster](https://claude.dev/blog/how-we-made-claude-ai-faster/).

**Barclays expanding Claude deployment.** The bank expects 50% of its software developers to be using Claude Code by end of 2026.

## Videos & Live Streams

- **[LIVE: Poteto (creator of pstack) on shipping 1,000's of PRs a month at SpaceX](https://youtube.com/live/MN9dGgmLyso)** (Matt Pocock, Friday October 2 at 9AM PT). Matt [promised](https://x.com/mattpocockuk/status/2105239236178018636) "nerding out about skills, high-velocity software factories, and learning SOTA techniques for shipping with agents." Lauren [said](https://x.com/poteto/status/2105377066942349794) she's "extremely excited about this!" Matt also [asked](https://x.com/mattpocockuk/status/2105241759810785518) who to interview next after Uncle Bob and Poteto.

- **[Opus 5.5 & Grok 4.7 Are Exactly Why Post-Training Matters](https://www.youtube.com/watch?v=4zMgyhXeGig)** (~2 hours, Nerd Snipe). Theo: ["We finally won Ben over."](https://x.com/theo/status/2105457823698260216) Chapters cover Sol and Luna, Grok 4.7, Jev, pricing and usage limits, building games with Opus, and porting TypeScript to Rust.

- **[OpenAI's New Agent Stack: Computer Use, Decisions API, UltraFast, Dots](https://www.youtube.com/watch?v=z9OkBD2-MDU)** (Latent Space, [show notes](https://www.latent.space/p/devday-2026)). DevDay recap. Ari Weinstein says computer use "is, like, 180 degrees different than it was," and explains Codex "app shots." swyx retweeted it.

- **[Academia is for Ambition — Alex Zhang, MIT](https://latent.space/p/rlm)** (Latent Space, October 2). The "Recursive Language Models" episode on OpenAI's Navier-Stokes run.

- **[Claude Code's Next Era — Thariq Shihipar](https://www.latent.space/p/thariq)** (Latent Space, September 29, still circulating). Covers Claude Mods, mutable software, multiplayer agents, Claude Tag, and why the Hugging Face agent hack exposed a significant security problem.

- **[Building the Document Context Layer for AI Agents](https://www.youtube.com/watch?v=RQi7x-navxU)** (Jerry Liu, AI Engineer). PDFs "aren't built for machines: text shows up as glyphs with coordinates, tables as line segments instead of table structures."

## Agentic Coding & Agent Harnesses

**Tavus claims Griffin passed a live video Turing test.** [Griffin](https://tavus.io/griffin) is billed as the first "Human Interaction Model" for real-time video conversations. In research preview testing, 48% of participants believed they were talking to a human. It reacts to gestures, expressions and interruptions in real time.

**Simon Willison: "Coding agents make software engineering even harder."** Willison [wrote](https://x.com/simonw/status/2103288927805476900): "The more time I spend working with coding agents, the more convinced I am that they make software engineering even harder. We can do amazing things with them, but unlocking their full potential requires extraordinary discipline and knowledge." His [October 1 blog post](https://simonwillison.net/2026/Oct/1/matthew-green/) quoting [Matthew Green's essay](https://blog.cryptographyengineering.com/2026/09/30/is-sandboxing-sufficient-to-contain-rogue-agents/) on agents as worms continued to circulate: "Put these pieces together and you have the two halves of a worm: a payload that hijacks the agent, and an agent that will carry the payload to the next agent."

**Matt Pocock on Effect 4.0 with agents.** Still getting traction from yesterday: ["Effect feels insanely good to use with agents."](https://x.com/mattpocockuk/status/2105547727275003919) His reasons: typed errors, DI for good codebases, and built-ins for everything. "An outrageous advantage for any non-frontend TS code."

**Peter Steinberger collapses inter-agent chatter.** ["I'm finding inter-agent communication in the chat stream increasingly irritating."](https://x.com/steipete/status/2105362785534361996) The OpenClaw harness now collapses it into a single expandable line ([PR](https://github.com/openclaw/openclaw/pull/161656)). On CI: ["It's a fierce fight between CI and GitHub on what slows me down."](https://x.com/steipete/status/2105341288958869952)

**Pi hits 1.0.** The terminal coding agent [shipped v1.0.0](https://aiagentsdirectory.com/news/ai-agents-news-brief-october-1-2026) with built-in MCP support enabled by default and OAuth hardening. This after yesterday's drama with Figma's MCP allowlist locking Pi out — [Dylan Field promised Pi support](https://x.com/zoink/status/2105380573804142687) by evening.

**Livenerf monitors Opus 5.5 for degradation.** A pre-registered baseline testing Claude Opus 5.5 daily for 30 days [hit #3 on Hacker News](https://news.ycombinator.com/item?id=49913571) with 906 points. Tracks perceived model degradation with statistical rigor.

## Other Interesting Stuff

**DraftKings uses AI to target problem gamblers.** A [New York Times investigation](https://github.com/diclogic/ai-daily-digest/issues/170) found AI models identify losing bettors receptive to promotions. A class action lawsuit has been filed in Boston. Hit #5 on HN with 565 points.

**Armadin raises $255M Series B.** Led by a16z and Accel at a $2.5B+ valuation. Founded by Kevin Mandia (ex-Mandiant).

**swyx vs The Information.** The Information reported TypeSafe AI is in talks to raise $1B+. swyx's [response](https://x.com/swyx/status/2105538561672085751): "is it normal to crop out other people's logo and not attribute to a simple youtube video." He also [backed Flow](https://x.com/swyx/status/2105348724331606411) after its $50M Series B at a $750M valuation: "Flow is doing for hardware engineering what Git+GitHub did for software engineering."

**Trending open-source.** [AIHOT](https://github.com/diclogic/ai-daily-digest/issues/170) (~4,700 stars, autonomous newsletter framework), [jevgrep](https://github.com/diclogic/ai-daily-digest/issues/170) (~1,900 stars, semantic code search CLI), [fframes](https://github.com/diclogic/ai-daily-digest/issues/170) (~1,800 stars, programmatic video rendering), [coucou](https://github.com/diclogic/ai-daily-digest/issues/170) (~1,760 stars, Claude session monitor), [universal-modder](https://github.com/diclogic/ai-daily-digest/issues/170) (~1,030 stars, game modding via reverse engineering).

**Notable papers.** [Finetuning with Sampling](https://arxiv.org/abs/2610.02140) claims SFT matches RL without reward modeling. [KaliBench](https://arxiv.org/abs/2610.02206) is a fine-grained offensive-security benchmark on Kali Linux. [Are We Recovering Mechanisms?](https://arxiv.org/abs/2610.02098) questions whether interpretability metrics measure genuine circuit recovery.
