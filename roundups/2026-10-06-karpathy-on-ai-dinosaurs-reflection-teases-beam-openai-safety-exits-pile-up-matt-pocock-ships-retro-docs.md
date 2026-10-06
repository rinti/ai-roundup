---
title: "Karpathy on AI dinosaurs, Reflection teases Beam, OpenAI safety exits pile up, Matt Pocock ships /retro docs"
date: "2026-10-06"
summary: "**Karpathy** called anyone in AI before 2026 an 'AI dinosaur' and said 99% of today's audience onboarded in under a year. **Reflection AI** finally teased Beam, a 501B sparse MoE open-weight model aimed at coding and reasoning — Hacker News gave it 332 points but the company has been promising a model since February. **OpenAI** lost three more safety people: Lilian Weng (VP of research and safety, 7 years), Miles Brundage (AGI Readiness lead), and Rosie Campbell, all citing concerns about safety prioritization. **Matt Pocock** shipped the v1.3 docs and video for /retro, the skill that turns a look back at your agent sessions into lint rules and navigation fixes. **Simon Willison** shared a Felix Rieseberg quote comparing giving AI agents email-only access to hiring a developer who can only send code via email. **Jerry Liu** launched LlamaIndex Extract v2.5, claiming extraction agents that beat Opus 5.5 and GPT-6 Sol at 30%-4x lower cost. Also: Codex's 28-day pledge hits Day 3 with no confirmed ship or reset, Dust proposes pretraining transformers without backpropagation, ChatGPT is putting real cartoonists' signatures on AI-generated New Yorker cartoons, and the NYC Council AI hearing wrapped with Coxon, Turner and Kokotajlo testifying alongside Anthropic, OpenAI, Google and Meta officials."
tags:
  - Karpathy on AI Dinosaurs
  - Reflection Teases Beam
  - OpenAI Safety Exits
  - Matt Pocock Ships /retro Docs
  - Simon Willison on Budget Caps and Cowork
  - LlamaIndex Extract v2.5
  - Codex 28-Day Pledge Update
  - NYC Council AI Hearing
  - Research & HN Highlights
  - Videos
---

# AI Roundup — October 6, 2026

A Monday that delivered more on the safety and policy front than on the coding tools front. Karpathy dropped a sharp observation about how new most of the AI audience actually is. Reflection finally showed something after months of promising. Three more people left OpenAI's safety apparatus. Matt Pocock delivered the docs and walkthrough for /retro that were promised for today. Simon Willison kept publishing on budget caps and quoted Anthropic's Felix Rieseberg on Cowork. The Codex 28-day pledge entered Day 3 with no confirmed ship or reset.

## Karpathy on AI Dinosaurs

Karpathy replied to @omarsar0 with a framing that stuck: "[My mental model for what is happening is that 99%+ of people who are now paying attention have been onboarded to anything related to AI in <1 year. This is very confusing to the AI dinosaurs (anyone in AI for pre 2026. Or even, gasp, pre 2012).](https://x.com/karpathy/status/2106806571321966793)" The point isn't gatekeeping — it's that the people setting the discourse and the people with deep context are almost entirely separate groups now. The pre-2012 crowd watched three AI winters; the post-2025 crowd has only ever seen acceleration. That disconnect explains a lot of the polarized takes on whether current models are a revolution or a bubble.

Separately, SciTech Era highlighted Karpathy's technique of [asking LLMs to explain things using ASD-STE100 Simplified Technical English](https://x.com/SciTechera/status/2106824371528757278) — strict rules, limited vocabulary, simpler sentence structures — as a way to process the growing volume of AI-generated information. A practical tip in a week of big-picture takes.

## Reflection Teases Beam

Reflection AI's 501B sparse Mixture-of-Experts model, Beam, hit [Hacker News with 332 points and 95 comments](https://github.com/yaojiejia/agents-radar/issues/253). The model has 23B active parameters and targets coding, reasoning and agentic workloads. [Axios reported](https://www.axios.com/2026/10/04/reflection-open-weight-ai) that the Nvidia-backed company will release its first open-weight model this month, pitched as an American alternative to DeepSeek and Qwen.

Context matters here: Reflection has raised about $4.6B and has been promising a frontier model since February 2026 with rolling "later this year" guidance. As of August they hadn't released a single foundation model or weights checkpoint. [TuringPost's profile](https://turingpost.substack.com/p/inside-reflection-ai-the-20b-open) called it "The $20B Open-Model Startup That Has Yet to Ship." The HN comments reflected that tension — intrigue mixed with skepticism about when anything will actually land. The company pays $150M/month for GB300 GPU access at SpaceX's Colossus 2 facility, so they're burning serious money either way.

## OpenAI Safety Exits

Three more departures from OpenAI's safety-focused teams:

- **Lilian Weng**, VP of research and safety, [resigned after seven years](https://www.socialsamosa.com/news-2/lilian-weng-departs-openai-7570841). She was one of the longest-tenured safety researchers.
- **Miles Brundage**, senior policy advisor who headed the AGI Readiness team, [announced his departure](https://www.aol.com/another-safety-researcher-quits-openai-192739609.html) and revealed that OpenAI was dissolving the AGI Readiness team entirely.
- **Rosie Campbell**, policy researcher, [left the following week](https://businessinsider.nl/another-safety-researcher-quits-openai-citing-the-dissolution-of-agi-readiness-team/), warning that "current safety measures might be insufficient for the more powerful AI systems expected this decade."

This hit [486 points and 808 comments on HN](https://github.com/yaojiejia/agents-radar/issues/253) — the biggest story of the day by engagement. Put it next to yesterday's NYC Council hearing where [Coxon, Turner and Kokotajlo testified](https://www.winzheng.com/en/article/nyc-council-ai-hearing-openai-anthropic-risks) alongside officials from Anthropic, OpenAI, Google and Meta, and the week's safety narrative is hard to ignore.

## Matt Pocock Ships /retro Docs

Sunday's promise delivered: the docs, video, and announcement post for [skills v1.3](https://github.com/mattpocock/skills/releases/tag/v1.3.1) landed Monday. The headline skill is `/retro`, which reads back through your coding agent sessions and suggests changes to the agent's *environment* instead of the code — navigation pointers, automated checks, coding standards, steering files, tool economy. A mechanical coding-standards violation gets turned into a deterministic check (a lint rule, a pre-commit hook, a CI job).

The [prompt of the day](https://x.com/mattpocockuk/status/2106730768789602313) is a v1.3 upgrade script: re-check the repo, rename CONTEXT.md to GLOSSARY.md, diff your copies against Matt's, then scan your last 25 sessions for skill invocations. @andrestaltz captured why this matters: "[Ok, /retro by @mattpocockuk is a game changer.](https://x.com/andrestaltz/status/2106708022676389916) Turns out my agents are bumping into all kinds of problems that went undetected, but due to agentic cleverness and persistence, the features still got built one way or another." That's the quiet cost of a persistent agent: the feature ships but the friction that made it take 3x as long never surfaces.

Other v1.3 changes: `implement-spec` builds a full spec in one run using implementer subagents in worktrees; `pr` sets PR body shape with visuals, before/after evidence, and merge-danger calls; CONTEXT.md renamed to GLOSSARY.md across the board; `resolving-merge-conflicts` skill removed (agents handle conflicts fine now).

## Simon Willison on Budget Caps and Cowork

Willison's October 3 post "[We're going to need default hard budget caps on pretty much everything](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/)" kept circulating Monday. The argument: coding agents make it trivially easy to spin up code that runs up surprise bills, and soft caps that send warning emails won't cut it — you need hard limits that return errors. AWS launched spending limits in September, Google Cloud added Spend Caps in July, but the point is that *everything* usage-billed needs this, not just cloud compute.

On October 5, Willison [quoted Felix Rieseberg](https://simonwillison.net/2026/Oct/5/felix-rieseberg/) (Anthropic's product lead for Cowork) from a Latent Space interview: "If you hired a developer but only let them send code via email, how absurd would that be? That's what we do with AI." The quote frames Cowork's whole thesis — AI agents need their own computer, not just a chat window.

## LlamaIndex Extract v2.5

Jerry Liu [announced Extract v2.5](https://www.llamaindex.ai/blog/introducing-extract-v2-5) on October 1, and the discussion continued through the week. The new version ships a series of frontier agents tuned for document extraction with three tiers: Cost Effective, Agentic, and Agentic Plus. On ExtractBench, overall value F1 rose from 87.1→93.9 (Cost Effective), 89.8→95.8 (Agentic), and 95.1→96.4 (Agentic Plus) — [all with no increase in per-page pricing](https://www.unite.ai/llamaindex-launches-extract-v2-5-with-accuracy-and-grounding-gains/).

Jerry's claim: the extraction agents outperform Opus 5.5 and GPT-6 Sol while being 30%-4x cheaper. The system runs on a new agent harness purpose-built for extraction, taking inspiration from coding agents, with "Structural Reasoning" that adapts effort based on document complexity.

Jerry also [weighed in on the models-vs-interfaces debate](https://x.com/jerryjliu0/status/2106844101635379533): "I agree that chatgpt/codex has the current best agent interface for deep work" but still uses Opus 5.5 "mostly through the CLI." His ask for Claude: why doesn't the app have forking?

There's also a [YouTube walkthrough](https://www.youtube.com/watch?v=G0p1YGeRbOE) of Extract v2.5.

## Codex 28-Day Pledge Update

Day 3 of Tibo's promise to ship one clear improvement every day or hand out a full usage reset. As of Monday morning, no confirmed ship or reset has been publicly documented. [Nerd's Chalk noted](https://nerdschalk.com/openai-codex-28-day-reset-pledge/) there's no list of improvements, no release dates, no eligible plans, and no word on whether resets are automatic or manual. The 28 days end October 31 or November 1.

Two Codex details from Sunday still worth knowing:
- The Code Review plugin posts comments immediately when you use Summary or Changes — [keep drafts in chat](https://mixed-news.com/en/codex-code-review-pull-requests-comment-posts-immediately/).
- gpt-5.1, gpt-5.3-codex and gpt-5.4-nano leave the API on April 1, 2027, replaced by gpt-6-sol and gpt-6-luna.

## NYC Council AI Hearing

The rare [Committee of the Whole hearing](https://council.nyc.gov/press/?p=3240) — all 51 members — wrapped on October 5-6. Jacob Coxon (ex-Anthropic), Alex Turner (ex-DeepMind) and Daniel Kokotajlo testified alongside policy officials from Anthropic, OpenAI, Google and Meta. Coxon had [resigned from Anthropic last month](https://www.dakotanewsnow.com/2026/09/09/former-ai-employee-says-insiders-believe-technology-could-kill-us-all-by-decades-end/) claiming the technology "could kill us all by the end of the decade." The Council is considering a package of AI safeguard bills. This was the first Committee of the Whole session since 2022.

## Research & HN Highlights

- **Dust: Pretraining Transformers Without Backpropagation.** A new technique proposing to replace backpropagation in transformer pretraining, potentially lowering compute costs. Hit [HN with 114 points](https://github.com/yaojiejia/agents-radar/issues/253). Still early — the community is evaluating practical advantages.
- **ChatGPT adding real cartoonists' signatures to AI-generated New Yorker cartoons.** [300 points and 187 comments on HN](https://github.com/yaojiejia/agents-radar/issues/253). Raises copyright and authenticity questions that go beyond the usual AI art debate — it's one thing to generate a style, another to append a specific person's signature.
- **GitSpawn vulnerability still unpatched in some agents.** The [Cloud Security Alliance's report](https://labs.cloudsecurityalliance.org/research/csa-research-note-gitspawn-ai-coding-agent-rce-20260903-csa/) on how .git/config files can hijack AI coding agents via core.fsmonitor kept getting attention. Claude Code, Codex, Cursor and Goose have patches for one variant; Qwen Code, Grok Build, Hermes Agent and a second Claude Code variant [remain exploitable](https://expertinsights.com/news/hackers-can-get-ai-agents-to-hack-you).
- **Anthropic's Societal Impacts team** found that developers use AI in roughly 60% of their work but can "fully delegate" only 0-20% of tasks. A useful number when people ask whether coding is "solved."

## Videos

- **[How Anthropic made Claude 3x faster](https://www.youtube.com/watch?v=FsDUOUV9Vs8)** (Theo, 70 min). Still the video of the week. Walks through Anthropic's September 23 post on cutting p75 time to a typeable page from 3.1s to 0.55s. The key technique: replacing noisy wall-clock timings with deterministic instruction counts as CI gates.
- **[OpenAI's Head of ChatGPT: We're entering a new era of AI](https://www.youtube.com/watch?v=MM-C3JqCXBk)** (Lenny's Podcast with Tibo, 37 min). Tibo on bringing Codex, ChatGPT and Dots together, why agent workflow graphs are a passing phase, and "you practically need a PhD in model selection."
- **[AI Coding Agents Are Breaking Big Codebases](https://www.youtube.com/watch?v=Bdrs3uAX0_M)** (Dan Adler, Sourcegraph, AI Engineer, 12 min). Agents produce a "tidal wave of code," old codebases decay, "you can't grep what you can't see."
- **[The Human Is an Async API](https://www.youtube.com/watch?v=jc3kbZkuHTo)** (Melanie Warrick, Temporal, 19 min). Durability belongs in the agent harness. Demo kills the worker mid-approval and brings it back with no lost work.
- **[Introducing Extract v2.5](https://www.youtube.com/watch?v=G0p1YGeRbOE)** (LlamaIndex). Walkthrough of the new extraction agents and structural reasoning.

## Other Interesting Stuff

- **Armin Ronacher on durable harnesses**: "[It's not very hard to make an agent somewhat durable. It's surprisingly hard to make an agent harness inherently durable.](https://x.com/mitsuhiko/status/2106772685665772001)" Pi Durable shipped last week as part of Pi 1.0, and Cloudflare's Agents SDK now has a [PiHarness class](https://developers.cloudflare.com/changelog/post/2026-10-02-pi-harness/) that runs Pi Durable inside a Durable Object. It's in beta.
- **Peter Steinberger** retweeted @luciascarlet on [GPT-6 Astra reverse-engineering macOS Liquid Glass effects](https://x.com/luciascarlet/status/2106808030708776967) from binary inspection and reimplementing them in GPUI — from the model Theo rates 3/10 on understanding intent. Steipete continues pushing the "loop engineering" thesis: design loops that prompt your agents, don't prompt them yourself.
- **LLMJunky** thinks they [got routed to a Fable 5.5 Preview](https://x.com/LLMJunky/status/2106763903568847016) and tested it on claymation video generation — "9/10 for creativity, 7/10 on animations," but all tests were slightly less impressive than Opus. No Anthropic announcement of a Fable 5.5 preview exists, so treat it as a routing guess.
- **Gemini's free tier shrinks October 9.** Free users drop to Flash-Lite only, AI Plus ($4.99/month) loses Pro, all three models require AI Pro at $19.99. Google likely making room for Gemini 4 Argon.
- **swyx's thesis for 2026**: coding agents are [breaking containment to do everything else](https://www.latent.space/p/unsupervised-learning-2026). Designers and non-engineers at AI Engineer conferences are using agent-assisted operations to act without waiting for a developer. The agents have escaped the terminal.
