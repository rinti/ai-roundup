---
title: "Theo Writes the Sol Playbook, Opus 5 Countdown Begins"
date: "2026-07-14"
summary: "Theo follows up his 36-minute GPT-5.6 review with a written deep dive — \"this article could have been a video\" — laying out a concrete playbook for slashing Codex token burn by 80%, while the Opus 5 rumor mill enters a new gear: Anthropic's third Fable extension (now through July 19) lines up suspiciously with the \"Honeycomb EAP\" model that briefly surfaced in Cursor, fueling bets that Opus 5 drops the moment the promo expires. Simon Willison posts a new TIL on cache-friendly uvx in GitHub Actions, Thariq's Field Guide to Fable talk keeps circulating, and the three-way model race between Fable 5, GPT-5.6 Sol, and the freshly shipped Grok 4.5 sharpens further."
tags:
  - Theo's Sol Playbook
  - Opus 5 Countdown
  - Fable 5 Extension Fallout
  - Simon Willison
  - Thariq's Field Guide
  - Model Wars
  - Quick Hits
---

# AI Roundup — July 14, 2026

## Theo's Sol Playbook

After yesterday's 36-minute video review and the back-and-forth with Codex lead Tibo Sottiaux, **Theo published the written version** — ["This article could have been a video"](https://x.com/theo/status/2076589141740159464) — a deep dive on how to maximize GPT-5.6-sol usage on Codex subscriptions. The core advice, distilled from burning over $200K in tokens:

- **Set reasoning to High, not Ultra.** High hits the cost-to-intelligence sweet spot; Ultra torches 37.5% of a weekly quota in a single prompt.
- **Edit `agent.md` to restrict sub-agents.** The unfinished v2 subagent layer copies the full context window into each spawn — at 372K tokens, that compounds fast.
- **Embed an explicit stop condition in every prompt.** Sol is "incredibly determined" and will run for a day without a `/goal` unless you tell it when to stop.
- Together, these three levers cut token consumption by **80%+**.

Theo's earlier [written guide on avoiding limits](https://x.com/theo/status/2076079256027943397) had already crossed 700K views. Yesterday's [separate thread on how the usage failures stacked](https://x.com/theo/status/2076512403668488299) — where Tibo [publicly corrected the billing model](https://x.com/thsottiaux/status/2076543065045795309) — remains the best technical explanation of what went wrong with Sol's first week.

## The Opus 5 Countdown

The speculation is getting louder. Anthropic's **third extension of Fable 5 promo access — now through July 19** — has the community connecting dots:

- A mysterious model called **"Claude Honeycomb EAP"** [briefly appeared in Cursor](https://news.ycombinator.com/item?id=48842904) before being pulled. The spec sheet matched Fable 5's architecture: 1M-token context, extra-high-effort mode, safety classifiers falling back to Opus 4.8. One developer [managed two prompts before it disappeared](https://x.com/chetaslua/status/2075064406116065416).
- The **July 19 deadline** is now widely read as an Opus 5 launch window — [*"every extension buys Anthropic more time... they can't remove Fable and replace it with Opus 4.8, not while GPT-5.6 Sol is live"*](https://x.com/Bhavani_00007/status/2076645595138466203).
- [Forbes covered the extension](https://www.forbes.com/sites/tylerroush/2026/07/13/ai-model-wars-anthropic-extends-fable-access-again-after-openais-sol-release/) framing it as a competitive response: *"Anthropic blinks again."* A [separate Forbes piece](https://www.forbes.com/sites/sandycarter/2026/07/13/claude-fable-5-extends-to-july-19-7-days-7-power-moves/) ran "7 Days, 7 Power Moves" for developers making the most of the remaining promo window.
- Anthropic has **neither confirmed nor denied** Honeycomb or Opus 5. After Fable 5's credit pricing kicks in ($10/M input, $50/M output), the pressure to ship a subscription-tier successor is real.

Simon Willison's question from yesterday — [*"have Anthropic clarified how their relative naming scheme works yet?"*](https://x.com/simonw/status/2076440861253218399) — remains unanswered. The working consensus: Haiku < Sonnet < Opus < Fable/Mythos, with Opus 5 likely positioned as the "included with subscription" model that sits just below Fable 5 in capability.

## The Three-Way Model Race

The competitive picture is getting genuinely interesting. On the **Artificial Analysis Intelligence Index**, Fable 5 leads at 60, GPT-5.6 Sol trails by one point at 59. But on the **Coding Agent Index**, Sol tops at 80 vs. Fable 5's 77. And then there's the new entrant — **Grok 4.5**, the first joint model from SpaceXAI and Cursor, [shipped July 8](https://www.bloomberg.com/news/articles/2026-07-08/spacexai-cursor-unveil-grok-ai-model-for-legal-finance-tasks) — trained on Cursor's data flywheel. The SpaceX–xAI merger, the $60B Cursor acquisition, and Grok 4.5 represent a fully vertically integrated coding stack.

On **Terminal-Bench 2.1**, Codex CLI on GPT-5.5 leads at 83.4%, Claude Code on Fable 5 is at 83.1%, and Claude Code on Opus 4.8 sits at 78.9%. The gaps are tight enough that harness quality matters as much as raw model capability.

## Simon Willison: uvx in GitHub Actions

Simon Willison published a new TIL today — [**"Using uvx in GitHub Actions in a cache-friendly way"**](https://fedi.simonwillison.net/@simon/116915653538415821) — solving the annoyance of `uvx tool-name` re-downloading packages on every CI run. A niche but practical contribution to the Python tooling ecosystem he continues to build out. Recent releases in his orbit: [shot-scraper 1.11 and sqlite-utils 4.1.1](https://github.com/simonw) (July 12), [llm 0.31.1 and llm-meta-ai 0.1](https://github.com/simonw/llm/releases) (July 9), [datasette 1.0a36](https://github.com/simonw) (July 7).

## Thariq's Field Guide to Fable — Still Circulating

Thariq's AIE World Fair keynote, ["A Field Guide to Fable: Finding Your Unknowns"](https://www.youtube.com/watch?v=9fubhllmsBU), continues to generate discussion a week after the YouTube upload. The core framework — *the map is not the territory* — argues that your prompts, skills, and CLAUDE.md are a map, and the real codebase is the territory. Fable's autonomous reach is wide enough that it hits **unstated decisions** fast, so the most important skill is cataloging your own unknowns. Practical takeaways:

- Point Fable at `git diff`, Slack, or docs for richer maps
- Have Fable log deviations so you can see where the map failed
- Update CLAUDE.md or skills permanently based on those deviations
- Think of unhobbling as understanding Claude better, not configuring it harder

Latent Space [covered it in AINews](https://www.latent.space/p/ainews-the-field-guide-to-fable), and a community member already [published a skills repo](https://github.com/bozhouDev/finding-unknowns-skills) derived from the talk.

## Ongoing Threads

**Boris Cherny's five archetypes** — the Claude Code creator's [reflection on future engineering roles](https://x.com/bcherny/status/2071379474277613732) (Prototyper, Builder, Sweeper, Grower, Maintainer) continues getting pickup, including from [Yahoo Tech](https://tech.yahoo.com/ai/claude/articles/5-job-archetypes-future-according-141801028.html) and [The Neuron](https://x.com/theneurondaily/status/2071987325698253102). His point: these archetypes cut across job titles — designers, engineers, PMs, and data scientists all fall into the same five patterns, and Claude can assist with all of them to varying degrees.

**Jerry Liu and LlamaIndex's Retrieval Harness** — Jerry Liu's [announcement of the Retrieval Harness for agentic retrieval](https://x.com/jerryjliu0/status/2073407100642852871) is the 2026 version of RAG: a persistent data pipeline with filesystem-style tools (semantic search, regex grep, file search, read) rather than single-embedding lookups. The [legal-kb reference app](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/) demonstrates the pattern for domains where agents navigate large document sets.

**Karpathy at Anthropic** — Now two months into his new role leading a team that uses Claude to accelerate pretraining research, Karpathy's [autoresearch project](https://x.com/karpathy/status/2030371219518931079) — where a coding agent ran 700 unsupervised experiments and found 20 optimizations that cut training time by 11% — foreshadowed the kind of work he's now doing at scale inside Anthropic.

## Videos

- **Theo's GPT-5.6 written deep dive** (article format) — maximizing Sol usage on Codex subscriptions, the "80% token reduction" playbook — [via @theo](https://x.com/theo/status/2076589141740159464).
- **Thariq's "Field Guide to Fable"** (AIE World Fair keynote) — unhobbling Claude, capability overhang, finding unknowns with Fable 5 — [YouTube](https://www.youtube.com/watch?v=9fubhllmsBU).
- **Thariq's video editing live-tweet** — processing 60GB of raw AIE footage using Fable, transcription, and Python glue — [via @trq212](https://x.com/trq212/status/2074617786408845774).

## Quick Hits

- **Fable 5 after July 19**: credit-billing at $10/M input and $50/M output — [Anthropic's pricing page](https://www.anthropic.com/news/claude-fable-5-mythos-5). The 50% weekly-limit increase for Claude Code also expires on that date.
- **Cognition's SWE-1.7** scored 42.3% on FrontierCode 1.1 — a fourfold jump over SWE-1.6 — and ships free for paid Devin users with Cerebras "Lightning mode" at 1,000 tok/s — [via @cognition](https://x.com/cognition/status/2074897516252856536).
- **Grok 4.5 is live**: the first joint SpaceXAI–Cursor model, trained on Cursor's 1.5T-token code corpus, launched July 8. Cursor's iPhone/iPad app [dropped at AIE](https://9to5mac.com/2026/06/29/cursor-releases-iphone-and-ipad-app-following-recent-acquisition-by-spacex/).
- **steipete's autoreview loop** — the most impactful skill in his stack — runs `/review` in a loop until there are no issues, [sometimes for hours](https://x.com/steipete/status/2059453909819654554). Now part of OpenClaw's [agent-skills repo](https://github.com/openclaw/agent-skills/blob/main/skills/autoreview/SKILL.md).
- **Matt Pocock's Sandcastle** is going pluggable — [thinking about moving off Docker](https://x.com/mattpocockuk/status/2042548410264264973) to become an orchestrator that works with any coding agent (Claude Code, Codex, OpenCode) in any sandbox (Docker, Podman, Vercel, local).
- **Armin Ronacher's Pi** — the minimal 4-tool coding agent at the heart of OpenClaw — now has a community-maintained [approval system article](https://x.com/mitsuhiko/article/2064060467975520341) and an [open-source guide](https://lucumr.pocoo.org/2026/5/24/pi-oss/) on building with it.
