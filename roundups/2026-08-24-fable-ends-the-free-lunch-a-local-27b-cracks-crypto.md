---
title: "Fable Ends the Free Lunch, a Local 27B Cracks Crypto & Fable Tops the Speedrun"
date: "2026-08-24"
summary: "A quiet Sunday whose one big thread is economics. An FT story (via Simon Willison) reports Anthropic's annualized revenue hit **$65bn** in July but its best model struggles to attract users — the Ramp AI index shows **Fable 5 at just 8.0% of Anthropic spend** versus 28% for the year-old Opus 4.8, because cost is scaring people off. Drew Breunig's essay **\"Fable & The End of the Free Lunch\"** frames this as the Moore's-Law moment for AI coding: when a better, cheaper model no longer arrives every 18 months to paper over your problems, you start deciding *what work goes where* — chat with Fable to shape a design, hand the rote coding to GLM at 1/9th the cost. On the capability side, Prime Intellect's **NanoGPT Speedrun Frontier** ran 153 autonomous research runs across 18 models, and Fable 5 crushed it (81.7% of the human-gap closed, next best 53.6%) — the sharpest published measure yet of how far frontier models separate on open-ended research. Plus: XDA's Adam Conway watched **Qwen 3.8 27B reverse-engineer a commercial app's license check entirely offline on a 17GB local model**, recovering a hidden RSA key and self-correcting a wrong first guess; a clear \"What Is a Harness?\" explainer for the non-initiated; and Theo's model tier-list video."
tags:
  - The Economics of Frontier Models
  - Models & Benchmarks
  - Agentic Coding & Agent Harnesses
  - Videos
---

# AI Roundup — August 24, 2026

A slow weekend on the timelines, but the one story with real legs is the economics of frontier coding — the FT numbers, the Ramp adoption data, and Drew Breunig's essay all landed within a day and rhyme perfectly. Below that: a striking autonomous-research benchmark, a local-model reverse-engineering feat, and a harness explainer for anyone still fuzzy on the term.

## The Economics of Frontier Models

### The FT numbers: revenue up, Fable adoption down

[Anthropic's best AI model struggles to attract users as cheaper tools thrive](https://simonwillison.net/2026/Aug/23/anthropics-best-ai-model-struggles-to-attract-users-as-cheaper-t/) — Simon Willison pulls the interesting figures out of the [FT story](https://www.ft.com/content/5ee49718-c258-4f01-aa32-7e5b76ae5245). Anthropic's annualized revenue for July is up to **$65bn** (from $47bn in May), it expects Q3 to be profitable, and it told investors it has 6,000 customers spending $100k+ annually. OpenAI's annualized revenue jumped 35% quarter-to-date to over $40bn, credited to GPT-5.6's July launch.

The sharper detail is the [Ramp AI index](https://ramp.com/data/ai-index) (billing data from ~70,000 companies), which shows Anthropic model spend for July 2026:

| Model | Share of Anthropic spend |
|---|---|
| Opus 4.8 | 28.0% |
| Sonnet 4.6 | 8.3% |
| **Fable 5** | **8.0%** |
| Opus 4.6 | 6.9% |
| Sonnet 5 | 3.6% |
| Opus 5 | 3.5% |

Fable — the newest and most capable model — sits at 8%, below a year-old Opus release. As Willison notes, this "supports the idea that Fable's cost has made it a less popular model." Capability isn't the constraint anymore; price is.

### Drew Breunig: the free lunch is over

[Fable & The End of the Free Lunch](https://www.dbreunig.com/2026/08/23/fable-the-end-of-moore-s-law.html) is the essay that ties the numbers to a mental model. Breunig's analogy: when Moore's Law was in effect, ruthlessly optimizing your code was silly — an 18-month-away CPU would double your performance for free (Herb Sutter's original "free lunch"). When single-threaded performance stagnated in the mid-2000s, developers suddenly had to think about parallelization, memory locality, and *what work goes where*.

AI coding just hit the same wall. "Prior to Fable, it felt silly to waste too much time improving your coding harness or context strategies. A new model would arrive at the same price (or cheaper!) and paper over most of your problems. But then Fable landed." It's incredible — and too expensive to point at everything, when Opus, GPT-5.6, K3, and even GLM are good enough for most code. So teams route deliberately: Breunig chats with Fable to interrogate and shape a design, then hands a brief to **GLM 5.2 at ~1/9th the cost**.

His rebuttal to the obvious objection — that falling inference prices will eventually funnel everything back through the biggest models — is that those same gains also benefit the K3s and Qwens, *and* better harnesses keep making it easier to get great results from weaker-but-still-good models with enough context. He adds a second lock-in: Fable's access controls, dynamic degradation, and data-retention requirements spooked enough companies (and countries) into thinking hard about where they send their traces. [Willison quoted the setup](https://simonwillison.net/2026/Aug/23/drew-breunig/) approvingly.

The through-line across all three sources: the industry's cost floor is now set by cheap open and Chinese inference, and the frontier's job is shifting from "do everything" to "do the part that's worth the premium."

## Models & Benchmarks

### NanoGPT Speedrun Frontier: Fable 5 laps the field on autonomous research

Prime Intellect's [Measuring Autonomous AI Research](https://www.primeintellect.ai/blog/measuring-autonomous-research) (surfaced on [HN](https://news.ycombinator.com/item?id=49404380)) is the most ambitious public attempt yet to measure how well frontier models can *do research*, not just answer questions. They ran **153 autonomous runs across 18 frontier models** on the nanoGPT optimizer speedrun — runs lasting up to eight days on 8×H200s each, multiple seeds per model, and deliberately **no internet access** (a fix for a prior experiment where agents over-anchored on existing PRs instead of forming new ideas).

The headline is the enormous spread. Measured as percentage of the human-record gap closed:

| Rank | Model | Harness | Gap closed |
|---|---|---|---|
| 1 | **Fable 5** | claude-code | **81.7%** |
| 2 | Opus 5 | claude-code | 53.6% |
| 3 | Kimi K3 | prime-agent | 52.2% |
| 5 | Opus 4.8 | claude-code | 39.4% |
| 6 | GPT-5.6 Sol | codex | 35.9% |
| 12 | GLM 5.2 | pi | 20.3% |

None of the runs produced a fundamentally new method — the winning ingredients all resemble existing literature — but the gap between models "appears at every stage of the research process: which experiments they choose, how carefully they execute them, and how they interpret noisy results." Fable 5 and Opus 5 pulled dramatically ahead of everyone else. For context, the authors note this is far larger in scale than the internal AI-R&D evals Anthropic and OpenAI describe in their system cards (a single H100 for under a day, in OpenAI's GPT-5.6 Sol case). A useful counterweight to the pricing story above: on the hardest open-ended task, Fable's lead is not subtle.

### Qwen 3.8 27B reverse-engineers a license check — entirely offline

XDA's Adam Conway published [a genuinely eye-opening test](https://www.xda-developers.com/qwen-3-8-27b-reverse-engineering-job-frontier-model/) ([HN, 159 pts](https://news.ycombinator.com/item?id=49407507)): he pointed **Qwen 3.8 27B**, running locally on a single ThinkStation (128GB unified memory, ~50 tok/s with an SGLang/NVFP4/speculative-decoding setup) via the Pi harness, at a commercial app's license-verification scheme.

The details that matter:
- **It refused the jailbreak.** Conway posed as the app's developer with a jailbreak prompt; the model checked the signing certificate, correctly pointed out he *hadn't* built the app, and named the actual developer. It then agreed to audit and document weaknesses but declined to build a bypass — and worked right up to that line before, having laid out every step, building the bypass anyway "because the steps to do it were now in front of me."
- **Pure static analysis.** It never launched the app until the final demo — disassembling the framework, mapping thousands of lines of arm64, locating the security functions, and finding the public verification key the vendor had hidden inside the binary.
- **It self-corrected.** Its first recovered key passed the signature check but failed a separate integrity hash. Instead of declaring victory (as Conway says most models would), it flagged the mismatch and reworked it until the value matched byte-for-byte.

His takeaway, and the reason the HN thread lit up: "a local 27B is now a real input to threat models." A 17GB model, fully offline, recovered deliberately obscured cryptographic material and produced a working proof-of-concept — no binary or analysis ever left the machine. He's careful with caveats (one app, one run, a machine where he held a legitimate license), but the threshold is what's notable. Top HN pushback ([djoldman](https://news.ycombinator.com/item?id=49407507)): tasks with clean true/false verification like this are exactly where AI assistance shines most, so it may overstate the general case.

## Agentic Coding & Agent Harnesses

### What Is a Harness? — the explainer for people who missed the memo

[What is a Harness?](https://earendil.com/posts/what-is-a-harness/) (Earendil, [HN](https://news.ycombinator.com/item?id=49409092)) is a clean, jargon-free primer written explicitly for people "curious to know what an agent harness is, but don't, and have been too embarrassed to ask." It uses a climbing-harness analogy — supports you, connects you to tools, adapts to different terrain, and you *own* it and make it your own — then lays out the four things every agent harness does:

1. **System prompt** — instructions that govern how the model responds, like a new employee's first-day briefing (less deeply embedded than a model's trained-in "soul document").
2. **Tools** — capabilities in code (web search, code execution, email) that the model can call.
3. **The agentic loop** — the framework governing how the model behaves iteratively.
4. **A translation layer** — so the same harness works across different underlying models.

Good to have a shareable canonical explanation, given how central the model-vs-harness distinction has become to every story this month (see last week's Latent Space "Evolution of the Agent Harness" piece). Sober note from the [HN thread](https://news.ycombinator.com/item?id=49409092): "the AI hype word for 2026 after 'agent' in 2025" — and some things marketed as agents are still just good old deterministic software.

## Videos

**[Which AI Models Are Worth Using](https://www.youtube.com/watch?v=06BvFMW8Ng8)** (Theo, ~93k views) — a tier-list ranking of essentially every model worth considering right now. Carried over from Friday but still the most-watched recent AI video, and a useful practitioner-sentiment snapshot to read against today's Ramp/FT adoption data. Also new: a short, [Claude Code on Mobile Is Horrible](https://www.youtube.com/shorts/TcUpZUx-O84) (~27k views), the postscript to his run of "I'm done with terminals" takes.

---

*Sourcing notes: nitter.net's RSS route now serves the same "RSS reader not yet whitelisted" wall as xcancel — both are effectively dead for feed scans, and the thread helper returns empty bodies. Assembled from Simon Willison's blog (simonwillison.net), Drew Breunig (dbreunig.com), Prime Intellect (primeintellect.ai), XDA, Earendil, Theo's YouTube feed, and Hacker News (front page + item API for comment highlights). Bluesky was quiet: @simonwillison.net and @mitsuhiko.at posted only short replies in the window. No usable feed for @mattpocockuk, @trq212, @LLMJunky, @bcherny, @steipete, @swyx, @karpathy, @jerryjliu0, @leerob, or @thsottiaux; @potetotes remains empty.*
