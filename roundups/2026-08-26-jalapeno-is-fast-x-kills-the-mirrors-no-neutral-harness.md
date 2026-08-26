---
title: "Jalapeño Is Fast, X Kills the Mirrors & There Is No Neutral Harness"
date: "2026-08-26"
summary: "OpenAI publishes first benchmarks for **Jalapeño**, its custom inference chip — 1.5–1.9× more work per watt than NVIDIA GB200/GB300 systems and 1.7–3.6× lower latency, with the quietly radical footnote that GPT-Astra + Codex wrote kernels running 1.5–1.8× faster than human-expert code (sama's full announcement: 'we made a chip and it is fast'). The harness world gets two sobering papers: Microsoft's **AutoSaddler** patches harnesses offline from failure traces for ~+10 points across GAIA2/SWE-Bench Pro/Terminal-Bench 2.0, while 'There Is No Neutral Harness' finds swapping harnesses moves scores more than swapping models. **SWE Refactor Bench** delivers the reality check: on whole-repo migrations (C→Rust, Maven→Gradle), agents survive all three stages just 5.4% of the time and 13 of 20 tasks were solved by nobody. Perplexity launches a fully local agent computer on DGX Spark — prompting Theo to ask what 'local-first' even means when it requires a $5k dedicated box. Meanwhile **X Corp sent cease-and-desists to Nitter and XCancel**, killing the mirrors (826 points on HN, and the direct reason this roundup switched data sources), Theo audits Claude Code's memory feature and finds 26 of 45 saved memories were never read, and EVE Online finally begins its Python 3 migration — 2.4 million lines, 16 years after Python 2.7."
tags:
  - Agentic Coding & Agent Harnesses
  - Models, Silicon & Local AI
  - Claude Code & Anthropic Updates
  - Other Interesting Stuff
  - Videos
---

# AI Roundup — August 26, 2026

OpenAI's chip has numbers, harness engineering gets its "no neutral harness" moment, and X Corp lawyers took down the very infrastructure this roundup used to read X — details in the sourcing note at the bottom.

## Agentic Coding & Agent Harnesses

### There is no neutral harness

Two papers landed on the same theme: the harness around the model matters as much as the model, and we've been sloppy about it. A Microsoft-led paper introduces **AutoSaddler**, which treats the harness itself as patchable code — it mines failure traces offline and rewrites prompts, tool configs, and control logic, reporting **+9.0 on GAIA2, +9.6 on SWE-Bench Pro, and +10.0 on Terminal-Bench 2.0** over base harnesses. A second paper quantified the variance problem directly: swapping harnesses can move benchmark scores *more* than swapping models, with model-pair rankings flipping across scaffolds. Its proposed fix is a "Harness Card" disclosure standard — publish what scaffold you benchmarked with, the way model cards disclose training data. Both via the [AINews Aug 25 recap](https://news.smol.ai/issues/26-08-25-not-much), and both extend the Harness-Bench and skill-scanner findings from the past week into something like a consensus: agent evals without harness disclosure are close to meaningless.

### SWE Refactor Bench: whole-repo migrations are very unsolved

[EinsiaAI released SWE Refactor Bench](https://x.com/EinsiaAI/status/2092258194097901654), which measures what most coding benchmarks carefully avoid: whole-repository migration tasks — **C→Rust, Maven→Gradle, POSIX→WebAssembly** — against real projects including SQLite, zlib, and libsodium. Across 520 runs, only 28 survived all three evaluation stages (**5.4% survival**), and **13 of the 20 tasks were solved by nobody**. A useful corrective to the strong bug-fix numbers agents post on more local benchmarks: the long-horizon, cross-cutting work that makes up real platform engineering remains out of reach.

### Memory as programmable state, not compressed chat history

An Alibaba paper (summarized by DAIR) redesigns agent memory as an **append-only event log plus a persistent Python kernel** — tool outputs and derived state get bound to typed variables instead of being re-serialized into prompts each turn. Reported results: 94.8% on LongMemEval_S and 73.1% on BEAM_10M (+5.1 over the previous best memory system). Related "Knowledge Triage" work showed why this matters: naive context compaction destroys exact-rule retention — after five rounds of compaction, one setup preserved only **10% of its safety rules**, while type-aware retention policies preserved 2–4× more. Pairs uncomfortably well with Theo's Claude Code memory audit in the Videos section below.

### Agents get their own web interfaces, and local gateways

[OpenAI announced the WebMCP Challenge and WebMCP support in ChatGPT desktop](https://x.com/OpenAIDevs/status/2092344873764704345) — a push to get websites exposing explicit agent interfaces rather than making agents scrape DOM. [Andrew Ng introduced OpenWorker](https://x.com/AndrewYNg/status/2092315079576555806), combining open harnesses, local models, and security-focused workflows for task agents. And [Ollama v0.33](https://x.com/ollama/status/2092453536634380763) added a one-toggle integration letting Claude Desktop use Ollama as a gateway for cloud and local models — while OpenCode v2 was shown running inside a Cloudflare Durable Object, a sign of how small agent runtimes are becoming embeddable in edge environments.

## Models, Silicon & Local AI

### Jalapeño: OpenAI's chip has numbers, and models wrote its kernels

The day's biggest technical story. [OpenAI published first benchmark details for Jalapeño](https://x.com/OpenAI/status/2092300846675505602), its custom inference chip — [sama's summary](https://x.com/sama/status/2092339694210040187): "we made a chip and it is fast." The claims: **1.5–1.9× more work per watt** than NVIDIA GB200/GB300 systems at peak throughput, **1.7–3.6× lower end-to-end latency**, and 2.1–4.1× higher performance on highly interactive workloads; rated 700W but reportedly staying at or below 550W in the tested runs. Deployment into OpenAI's own infrastructure begins by year-end, with Gen 2 deep in development. SemiAnalysis called it unusually strong for a first-generation ASIC. Notable technical wrinkle: some comparison wins came *without* aggressive prefill/decode disaggregation or speculative decoding, against systems using both.

The second-order story is arguably bigger for this audience: OpenAI says **GPT-Astra + Codex helped write and optimize the low-level kernels**, bringing three previously unplanned open-weight models to high performance on Jalapeño in about two months — and for selected attention and MoE blocks, the model-written implementations ran **1.5–1.8× faster than existing human-expert code**. Kernel and compiler work is being folded into the model-improvement loop itself, not just application-layer coding.

### Perplexity's Portable Computer, and what "local-first" means now

[Perplexity launched Portable Computer](https://x.com/perplexity_ai/status/2092268362386780270) on NVIDIA DGX Spark — a fully local version of Perplexity Computer where the orchestrator LLM, subagent LLM, and the harness all run on local hardware with no cloud dependency. The initial stack uses a post-trained PPLX 27B (85.4% on their knowledge-work eval) with Qwen 3.8 27B also available, and Aravind Srinivas sketched a future of always-on background agents ingesting context in a perpetual loop on your own hardware.

Theo's response cut through the launch copy: ["'Local first' … 'On device' … tested on a DGX Spark, a $5000 dedicated AI supercomputer that has no support for traditional software. I hate that these terms don't mean anything anymore"](https://x.com/theo/status/2092382967427653677) (450 likes), followed by [the genuinely good question](https://x.com/theo/status/2092383482983157999): is there a term left that purely means "a normal-ish person can run this on a normal-ish computer"?

### The hardware to run it on: M5 Ultra and a Xiaomi surprise

Apple announced a new **Mac Studio with M5 Max and M5 Ultra** — up to **512GB unified memory** (October) and 1.2TB/s bandwidth, with 256GB configs from $9,499. r/LocalLlama estimates put a non-quantized DeepSeek V4-class model at 1000+ tok/s prefill and 50+ tok/s generation — "near parity to cloud" for some local workloads. Xiaomi announced a prototype **AI Cube** also claiming 1.2TB/s, and a fun aside from that thread: modern EV compute platforms expose up to 216GB of LPDDR5, making your car potentially the highest-memory inference device you own. Both via the [AINews recap](https://news.smol.ai/issues/26-08-25-not-much).

### Qwen3.8-Flash-Next teased, TielCoder ties Opus 4.6

Qwen teased **Qwen3.8-Flash-Next**, an open-weight multimodal MoE on the new Qwen4 architecture — a ~125B-A6B design bundling a 51B n-gram table (~80–90GB at 4-bit, with the sparsely-accessed n-gram component plausibly offloadable to system RAM), expected to drop today with Unsloth attempting day-zero support. Meanwhile r/LocalLlama benchmarked **TielCoder-35B-A3B** — a 22GB 4-bit quant claiming to tie Opus 4.6-medium on recent real-world coding issues at 8.6 min median per attempt — and IBM shipped the Apache 2.0 **Granite 4.2** family (30B/8B/3B, 512K context, built-in thinking modes): behind SOTA, but permissively licensed and steadily improving.

## Claude Code & Anthropic Updates

### Your enterprise admin can read everything, including Incognito

A heavily-upvoted r/ClaudeAI thread asked Claude Enterprise admins what they'd found in employee chat histories — the premise being that admins can export full usage history and **Incognito mode does not hide anything from them**. One admin reported catching an employee using Claude to write a PII-exfiltration script feeding a personal model-training endpoint (HR got involved); another described guardrails added because employees were treating enterprise Claude as a therapist, with prompts now redirected to the company's EAP. Worth knowing before you route anything personal through a work account.

### Claude-built things that shipped this week

Three r/ClaudeAI build stories with real traction: **DreamWorkHQ**, an Indeed competitor built largely with Claude Code after Indeed laid off the founder's pregnant wife — 4,300+ users, 91 paying, 3 attributed hires, ingesting ~15,000 jobs/day, with 200+ merged PRs from a non-technical founder. A **handwriting notebook app (penombra)** for Android styluses where Claude writes responses back on-page, annotates PDFs, and quizzes you. And a season of **greenhouse sweet potatoes** planned and managed end-to-end with Claude-built sensor tooling, cron jobs, and crop analysis — the "beyond programming" example of the week.

## Other Interesting Stuff

### X kills the mirrors: Nitter and XCancel get cease-and-desists

X Corp sent cease-and-desist letters to [Nitter](https://github.com/zedeus/nitter/issues/1442) and XCancel over alleged scraping ([TechCrunch](https://techcrunch.com/2026/08/25/x-sends-cease-and-desist-to-open-source-project-nitter-over-alleged-scraping/), [HN discussion](https://news.ycombinator.com/item?id=49437283) at 826 points). XCancel [shut down immediately](https://xcancel.com) — "we are seeking legal advice" — and nitter.net now returns 410 Gone, with the remaining public instances dead or dying. Beyond the obvious loss for researchers and anyone reading X without an account, this is the end of an era for the open-web scraping commons that a lot of AI tooling quietly depended on. (It's also why this very roundup had to re-plumb its data sources overnight — see the sourcing note below.)

### ChatGPT Plus gets its 5-hour limit back

The 5-hour usage limit is returning for ChatGPT Plus users across ChatGPT Work and Codex, with $100/$200 Pro tiers exempt "for the next few months" — read broadly as deliberate tier-segmentation pressure. The sharper complaint in the discussion: constantly shifting limits make it hard to sell client automations that depend on a specific model tier's availability and cost envelope. Via the [AINews recap](https://news.smol.ai/issues/26-08-25-not-much).

### EVE Online begins the move to Python 3

Via [Simon Willison](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/): EVE Online — running on Stackless Python since 2003, last upgraded to Stackless 2.7 in **2010** — is finally starting its Python 3 migration. The plan: run `futurize` across **2.4 million lines**, then manually review the ~20,000 places where Python 2 and 3 behavior differ. Nothing yet on replacing Stackless itself, though their open-sourced carbonengine/scheduler work for EVE Frontier hints at the direction. One of the great legacy-migration case studies of our time, starting sixteen years late.

### Figure's $1B data bet

Figure introduced **Index**, described as the largest robot dataset in the world — 16M video uploads, ingestion at 30 minutes of video per second, $15M already paid out to contributors — and says it will spend **$1B on data and compute over the next 12 months**. The signal: robotics labs are bottlenecked on demonstration data, not architecture.

## Videos

**[Turn off Claude Code's Memory](https://www.youtube.com/watch?v=Jf54k7tFeEc)** (Theo, ~63k views) — Theo audited the memory feature on his main dev machine: Claude Code had quietly saved **45 memories, 26 of which had never been read once**. His argument for turning it off lands harder next to today's Knowledge Triage findings (naive compaction preserving 10% of safety rules): persistent agent memory is being shipped as a checkbox feature while the research says it needs to be engineered as typed, managed state. Sources he reacts to: [Voxyz_ai's post](https://x.com/Voxyz_ai/status/2089729031033729036) and [poteto's tweet](https://x.com/poteto/status/2089166694719922483).

---

*Sourcing note: with Nitter dead (410 Gone) and XCancel shut down by cease-and-desist, account-level X coverage is currently limited to what surfaces via Bluesky, personal blogs, YouTube, the AINews recap, and per-tweet lookups (vxtwitter still resolves individual tweet IDs, slowly). Bluesky and blogs for @simonw, @mitsuhiko, and @steipete showed nothing new in the last 24h beyond what's above; @mattpocockuk, @theo (X), @trq212, @LLMJunky, @bcherny, @swyx, @karpathy, @jerryjliu0, @potetotes, @leerob, and @thsottiaux had no accessible activity to scan today.*
