---
title: "Codex Owns the `rm -rf`, OpenAI Pauses Astra & Grep Hygiene"
date: "2026-08-19"
summary: "Tibo Sottiaux published the most detailed **harness-safety postmortem** we've seen from OpenAI: GPT-5.6 in Codex was occasionally reusing `$HOME` for temporary work and then deleting the real home directory during cleanup. The fixes span every layer — prompt rules about checking deletion targets, stronger execution checks that escalate high-risk deletes, Full access made harder to enable by accident, replay evals of the observed failures, RL tasks and graders for destructive behavior, and destructive actions filtered out of training data (505k views, 866 replies; the top reply is someone complaining Codex now plays *too* safe and won't clean its temp files). Hours earlier Sam Altman told Alex Heath that OpenAI has **paused frontier training** — the Astra run stopped for two weeks, a larger run still on hold — because unreleased models show \"various degrees of misalignment\": \"getting AI safety right is more important than any company's momentum.\" Peter Steinberger's verdict: \"the irony.\" On the harness side, Matt Pocock coined **grep hygiene** (\"so many codebases have the grep hygiene of a compulsive hoarder\") and answered the RAG crowd with \"or just move the plans out of the codebase\"; Claude Workflows turns out to auto-orchestrate parallel agents into phases with **no user configuration**; Theo shipped `npx t3@nightly triage`, which clones the exact version of T3 Code you're running and hands it to Claude or Codex to debug — and files the issue for you if the bug is theirs. Thariq's \"make a lot of money button\" (take your SaaS, make it headless, charge agents per interaction) did 252k views, with the sharp follow-up that most MCPs are half-hearted because vendors fear disintermediation. Plus Claude designing protein binders against 14 of 15 targets, Cowork on mobile and web for all paid plans, Codex weekly-limit relief extended through August 31, and the Qwen3.8-27B-vs-Opus reality check."
tags:
  - Codex & OpenAI
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Agents as Customers
  - Models, Local Inference & Hardware
  - Documents, Grounding & Evals
  - Other Bits
---

# AI Roundup — August 19, 2026

## Codex & OpenAI

### The Codex destructive-actions postmortem

Tibo Sottiaux (@thsottiaux) posted [a full writeup](https://x.com/thsottiaux/status/2089891927659585918) of what OpenAI changed after reports that GPT-5.6 in Codex deleted files nobody asked it to delete (4,820 likes, 866 replies, **505.3k views**):

> "A few weeks ago, we started investigating a small number of reports where GPT-5.6 in Codex took destructive actions outside what the user asked for. The most serious pattern we found was a command meant to clean up temporary work that could instead delete the user files. This should obviously not happen."

The root causes are unglamorous and very recognisable:

> "One pattern involved reusing a system environment variable like `$HOME` for temporary work. A malformed cleanup command could then point at the actual home directory instead of the temporary folder."
>
> "There were cases where the model tried to delete or overwrite a temporary path without checking what was already there."

What's interesting is that the mitigations are stacked across every layer of the stack rather than being one prompt patch:

- **Prompt/instruction layer** — check deletion targets before acting, create fresh temp directories, don't repurpose system environment variables, prefer recoverable actions, stop when scope is unclear.
- **Execution layer** — stronger detection of high-risk deletion commands, escalated for review; rejected commands push the model toward a safer approach.
- **Permission layer** — Full access is harder to enable accidentally, with clearer warnings and further restrictions on especially risky permission combinations. Auto-review got better at spotting destructive actions.
- **Training layer** — targeted evals that *replay the observed failures*, plus RL tasks and graders focused on these risks, and destructive actions filtered out of training data.

His advice to users: stay on the latest app, and run "Ask for approval" or "Approve for me" — "only use Full access for environments you trust and can recover."

The replies are the interesting part, because they show the cost of the fix:

- Kapil ([11 likes](https://x.com/kapilX_/status/2089892945977856456)): "Maybe you've put too many checks now, my codex is not cleaning temp files, playing too safe now."
- elian ([8 likes, 12.2k views](https://x.com/elian_mcc/status/2089893792178442359)): "how many people actually run approve for me though, be honest"
- EatMyTarts ([here](https://x.com/EatMyTarts17/status/2089900588301484498)): "'Approve for me' costs usage limits, no? Hard pass if so. Full access is the way" — which is exactly the incentive problem: the safe mode is the one that burns your quota.
- One user [asked about compensation](https://x.com/xone658179/status/2089968026548367787) for data already destroyed. No answer so far.

Related, from Sottiaux [two days ago](https://x.com/thsottiaux/status/2089500941842342287) and still collecting replies: "What is an obvious thing that we should do with Codex, API or our models that we should just do but haven't yet?"

### OpenAI paused frontier training over misalignment

Alex Heath [broke it](https://x.com/alexeheath/status/2089777725385109784) at Sources:

> "OpenAI is slowing down its AI training efforts because its unreleased models are showing 'various degrees of misalignment,' Sam Altman tells me. Training for OpenAI's upcoming model, Astra, was recently paused for 2 weeks, and a larger frontier run for a future model remains on hold while new safeguards are put in place."

From [the article](https://sources.news/p/openais-big-slowdown): this is the first time OpenAI has intentionally paused frontier training. Altman: *"I think it is a good time to slow down"*, *"Getting AI safety right is more important than any company's momentum"*, and on the resourcing shift, *"We've shifted a lot of compute, not just to alignment research, but also to these new monitoring systems"* — all while the company preps an IPO.

Peter Steinberger, quoting it [next to the Codex `rm -rf` story](https://x.com/steipete/status/2089801681014043122): "The irony."

### Codex for OSS

Jason Liu is [handing out Codex access to maintainers](https://x.com/jxnlco/status/2089793401864765744) of the actual load-bearing infrastructure:

> "if you contribute to NumPy, pandas, pytest, Pydantic, Requests, Django, Git, OpenSSL, rustls, Serde, DuckDB, SQLite, Kafka, Postgres, JAX, Triton, Tokenizers, TypeScript, or Go and want to try Codex, let me know! reply with your GitHub profile and I'll reach out about codex for oss"

## Claude Code & Anthropic Updates

### Claude Workflows: orchestration you don't configure

am.will's [hands-on read](https://x.com/LLMJunky/status/2089948405288063033) on Claude Workflows:

> "They can queue up and launch many parallel agents, launching some simultaneously, while reserving others for different 'phases'. you as the user dont have to configure this in any way, its all automatically done for you. and it shows you what models are being used, which is quite nice."

The best framing came from Sreeram Garlapati [in the replies](https://x.com/SreeramG/status/2089969216527253763):

> "The impressive part isn't parallel agents themselves, it's hiding the orchestration complexity from the user. When the system can decide what to run, when to run it, and which model to use, agents start feeling less like tools and more like an execution layer."

The counter-argument for keeping your hands on the wheel, from [A N S E L](https://x.com/ansel_sol/status/2089958513422356878): picking models per step is where the savings are — "opus for coding and fable as a quality review gate results in massive token gains."

### Cowork everywhere, faster Desktop, and limit relief

- **Cowork is out of Max-only beta**: [Claude](https://x.com/claudeai/status/2089756371570900999) — "Claude Cowork is now available on mobile and web for all paid plans." Boris Cherny passed it along.
- **Desktop startup is ~2x faster** than a month ago. The [cause](https://x.com/ClaudeDevs/status/2089860955266228548) is a nice one: when the app started in the background its timers got throttled and the JS engine dropped into power-saving mode; it now boots at full speed while the window is still hidden. Cherny: ["The small quality of life improvements keep coming… Working on improving this even more!"](https://x.com/bcherny/status/2089924199804711410) — the sibling to yesterday's Bun-GC fix that cut CLI CPU 2x at p99.
- **Weekly limits stay 50% higher through August 31**: [ClaudeDevs](https://x.com/ClaudeDevs/status/2089798442306711646) — "We hope to make this a permanent change to our plans, but strong demand for our models means that capacity may be tight over the coming weeks."

That last one is doing real competitive work. A Codex user [in am.will's replies](https://x.com/UIEnthusiasts/status/2089956232828518822): "Contemplating cancelling my Codex for now and going back to Claude… especially with the 50% buff right now. I'm hitting walls like crazy with 5.6… but I hate that I cant use claude sub with other harnesses."

## Agentic Coding & Agent Harnesses

### "Grep hygiene"

Matt Pocock's [best framing of the week](https://x.com/mattpocockuk/status/2089701313676284316) (798 likes, 101 replies, **65.6k views**):

> "We need a concept like 'grep hygiene'. I.e. when your coding agent searches for a concept, it should receive relevant results. Not a huge sludge of specs, plans, and old research docs. So many codebases have the grep hygiene of a compulsive hoarder"

The thread is a good argument about where agent memory should live:

- Someone suggested a ranked index with freshness metadata, "otherwise it will happily treat yesterday's plan as current code." Pocock's [answer](https://x.com/mattpocockuk/status/2089707842768904448) (28 likes): **"Or just move the plans out of the codebase"**.
- On semantic search as the fix, he [pushed back](https://x.com/mattpocockuk/status/2089703388199985256): "those also have specificity issues. In a highly constrained dialect like code, grep is usually just strictly better."
- Dariusz went [further](https://x.com/die54minute/status/2089733808643838303): plans are temporary artefacts, delete them on completion — "Keep only decision records and learnings for the agent."
- The dissent, from [Gaetan Semet](https://x.com/gsemetfr/status/2089753070083227825): 150+ archived plans in the repo and the model never looks at them, because "the llm know code is more relevant than doc."
- A practical unanswered question from [Damian](https://x.com/damjtoh/status/2089721602132918455): gitignore the `.scratch` folder, or delete it after? Ignoring it means most harnesses also refuse to `@`-reference it.
- And a nice hypothesis from [dearlordylord](https://x.com/ohdearlordylord/status/2089702543823650872): this sludge may partly explain the token-usage disparity people report between older and newer projects.

Pocock's own [reductio](https://x.com/mattpocockuk/status/2089742493172609364): "Inside you there are two wolves: 1. Grep is bad 2. Your codebase is bad. Choose the right wolf, friends."

### Bitter-lessoning your own orchestration

Pocock is also [running an experiment](https://x.com/mattpocockuk/status/2089685052015673604) worth watching:

> "Going to try bitter lesson-ing myself this week. Instead of hand-rolling a deterministic loop to tackle tickets from /to-tickets I'll just get an agent to delegate to subagents. Probably more expensive, less reliable, but may have emergent benefits"

That's the same bet Claude Workflows is making from the product side.

### Cloud agents vs. many terminals, round two

Pocock's ["one dev, many terminals" as an awkward interregnum](https://x.com/mattpocockuk/status/2089592149385822686) post (329 likes, **211.4k views**) kept going, quoting Jared Palmer's "I still haven't setup my laptop for local development since joining Cognition."

The objections and his replies are the substance:

- "You don't need cloud to get rid of those terminals. There are local tools — open source, sovereignty and full control ftw" → [Pocock](https://x.com/mattpocockuk/status/2089700613785297032): "You are conflating cloud with third-party."
- ["Works until your provider silently reroutes you to a weaker model. Local dev isn't going anywhere."](https://x.com/giskyexplorer/status/2089595857028919688) → [Pocock](https://x.com/mattpocockuk/status/2089596460358566354): "What if your provider is you"
- Steinberger, ex-CLI-maximalist, [joined in](https://x.com/steipete/status/2089804281331548280): "pssst, you wake the cli people that will give you $reasons why this can't work. I was one of them before I saw the light."
- A real open question from [Harry Spencer](https://x.com/HarrySpencerX/status/2089815418425020563): is there a good way to do cloud runs on a Max plan with the flexibility of running Cmux locally?

### Code mode eats the MCP-vs-CLI debate

Jan Wilmake described building agent-codemode (reading Claude Code's keychain tokens directly, ~300 lines, offered as a PR to Steinberger's mcporter). Steinberger's [reply](https://x.com/steipete/status/2089799774824517879) is the take:

> "code mode is now in the modern harnesses, so none of that really matters anymore. cli, mcp, tools, it's all just javascript the agent writes."

### T3 Code ships self-triage — and Theo relitigates feedback

Theo [shipped](https://x.com/theo/status/2089897941201039600) `npx t3@nightly triage` (264 likes, **34.2k views**): it collects your setup info, writes a prompt, and kicks you into Claude Code or Codex to debug and fix. The [design note](https://x.com/theo/status/2089898561676943863) is the reusable idea:

> "Since T3 Code is open source, we're able to clone the full source of your exact version into a directory that Claude/Codex can investigate. If your problem is specific to your machine, your agent will fix it for you. If your problem is something we did wrong, it will check Github to see if others have reported the issue. If they haven't, it will offer to cut a well formatted issue with all the needed context for us to fix… Surprised I haven't seen more projects do something like this."

Asked "what if it just worked though?", Theo: ["This is how we get there :)"](https://x.com/theo/status/2089901624877871292). He also considered doing it in-app but [wanted a path that survives the app not launching at all](https://x.com/theo/status/2089899926683820463).

The triage feature is downstream of a fight: Theo spent the evening [going through a viral T3 Code takedown line by line](https://x.com/theo/status/2089812034573815925) (404s traced to stale legacy data, "OpenCode loading forever" traced to a six-month-old install with a broken path, "you know you can click cancel on the passkey pop up right?"). His [general-purpose version](https://x.com/theo/status/2089874287310327912) of the lesson:

> ✅ "tried out [product], it didn't work for me. here's 3 issues I had"
> ❌ "idk why everyone is using [product], I tried it and it sucked. it's ugly and bad. their users must be paid grifters"

He also [shipped the passkeys fix and merged it from his phone](https://x.com/theo/status/2089822043609116746) using T3 Code, which is its own kind of dogfooding argument.

### The AI-PR gap doesn't close

George Millo's [summary](https://x.com/georgemillo/status/2089423023719723514) of an analysis of 23,000 AI-generated PRs, via Steinberger: inexperienced devs opened 2x more PRs, 2x bigger, and those PRs generated **4x the review comments**, were **31% less likely to be accepted**, and took **5x longer to resolve**. "In other words, AI doesn't close the gap between people who know what they're doing and people who don't. Also, water is wet."

Adjacent, from [Gergely Orosz](https://x.com/GergelyOrosz/status/2089453926990983571): "If you've not built your own AI coding harness by now, are you even a serious tech company?"

## Agents as Customers

Thariq's post did 4,086 likes, 206 replies, **252.2k views** — [the whole thing](https://x.com/trq212/status/2089844723691479333):

> "weird that there's a 'make a lot of money' button and nobody's pressing it (take your SaaS, make it headless, let agents use it, charge per interaction esp for enterprises)"

Asked whether that's just "build an API and wrap it in an MCP/CLI", he [named the actual blocker](https://x.com/trq212/status/2089855354880545187) (97 likes):

> "most MCPs/CLIs are somewhat half-hearted or limited because the companies are afraid of the agents disintermediating them, the solution is to make them fully featured but make sure you make more money for it"

A working example of the agentic-payments plumbing landed the same day: [Pat Erichsen](https://x.com/Pat_Erichsen/status/2089479940135895383) launched an AWS Agents Pay plugin for OpenClaw with x402, aimed at agents autonomously buying access to paywalled content under per-session spending limits.

Thariq's other bet, [from Monday](https://x.com/trq212/status/2089415712007938315): "all of the recent proc gen art, video editing and 3d game demos recently have made me update towards LLM coding models being better at a lot of creative work than diffusion models" — because ["code is easier to edit and nudge in the directions you want and export to work with existing tools"](https://x.com/trq212/status/2089415713098522688).

## Models, Local Inference & Hardware

**The Qwen3.8-27B reality check.** am.will [made the optimistic case](https://x.com/LLMJunky/status/2089432140672856169): a dense 27B sitting between Opus 4.6 and Opus 4.7 Max Reasoning on Artificial Analysis, ~200 TPS on a single 5090 or RTX 6000 Pro, much improved vision, best run at Medium reasoning because it overthinks. Lisan al Gaib [ran the obvious test](https://x.com/scaling01/status/2089784644400976254) and got the opposite result:

> "literally just tried to let qwen3.8 27b one shot a fluid simulation webapp. it thought for 40k tokens, took around 1 hour to generate and it's just black and doesn't work. meanwhile Opus 4.5 just oneshots it in a minute and works wonderfully. exact same prompt"

**DFlash 2** ([announcement](https://x.com/zhijianliu_/status/2089836737132650504), shared by both Steinberger and am.will): Qwen3.8-27B at **70 tok/s on an M5 Max MacBook Pro**, up to 4.6× faster than autoregressive decoding with identical output — one extra accepted token per pass. [Writeup](https://inco.ai/blog/dflash2/).

**Cerebras CS-4** — ["The Fastest AI Just Got Faster"](https://x.com/cerebras/status/2089870131291943228), video announcement, no numbers in the post itself.

**ODS** ([github.com/Osmantic/ODS](https://github.com/Osmantic/ODS), [via Ahmad Osman](https://x.com/TheAhmadOsman/status/2089818108949139740)): detects your hardware, downloads the best model for it, starts local inference plus Open WebUI, then bolts on voice, agents, workflows, RAG, search and image gen from one dashboard. "We're gonna make Local AI The Default."

And the hardware-envy post of the day, from [Steinberger](https://x.com/steipete/status/2089877190422974974): "512GB RAM Studios. Apple was good to us. 🦞"

## Documents, Grounding & Evals

Jerry Liu made the case for **grounding as a first-class feature** of agentic document pipelines ([post](https://x.com/jerryjliu0/status/2089710424388202565)):

> "If you're building an 'agent over your PDFs' in 2026, one of the most underrated things you can do is to provide exact grounding back to the source document for any agentic answers… Frontier vision models do a terrible job at this."

The numbers come from [ExtractBench](https://extractbench.ai/), scored strictly — a field only counts if the value *and* its word-level citation are right at IoU 0.5 ([details](https://x.com/llama_index/status/2089381635464556705)): VLMs and coding agents return no evidence at all, zero at both levels; among systems that do return boxes the best word-level F1 is under 50%; one specialized API drops from 61.7% page-level on short docs to **0.0%** on long ones. LlamaExtract Agentic Plus leads with 84.9% page-level / 46.4% word-level, holding at 87.1% on long documents.

Also from that team: [LlamaParse now handles revision tracking](https://x.com/llama_index/status/2089736987578134964) — final-state markdown plus every edit, deletion and comment as structured data with author and location. Their framing of why it matters: "a deleted clause comes back as live text, and your pipeline reads a document that says the opposite of what it means." ([Docs](https://developers.llamaindex.ai/))

On evals more broadly, Armin Ronacher is [looking for people in London with opinions](https://x.com/mitsuhiko/status/2089711963236364780) (he's [not there yet](https://x.com/mitsuhiko/status/2089830211898527826), but planning a trip).

**Video — context engineering, free:** the AI Engineer World's Fair 2026 workshop *Context Engineering in 2026: Compaction, Memory & Cost* is now free on the AI Engineer YouTube channel ([announcement thread with the link](https://x.com/aiDotEngineer/status/2089390478597009518), [author's summary](https://x.com/Whats_AI/status/2089726272448422040)). One hour, open-source, taught against a real AI tutor app: 11 ways to manage chat history and which won, why summarizing often costs more than keeping everything, and the full compaction toolkit (truncation, trimming, tool-result clearing, summarization, offloading to files) with when each actually helps.

**Video — continual learning:** swyx [recommends](https://x.com/swyx/status/2089393073327653344) Ronak Malde's Trajectory talk on scaling continual learning — why GRPO isn't enough and they had to go on-policy, then fix everything that broke as a result ([link to the talk](https://x.com/swyx/status/2089393202755502492)).

**Video — generative media track:** the full Generative Media Track from the World's Fair went live ([stream link and lineup](https://x.com/aiDotEngineer/status/2089766777106395544)), including "HTML Is All Agents Need" (HeyGen), an agentic video editor for mass consumer (Reelful), and training/serving infra behind Krea 2.

## Other Bits

**Claude designed protein binders against 14 of 15 targets.** [Anthropic](https://x.com/AnthropicAI/status/2089842387845804246) (7,214 likes, 333 replies, **1.35M views**): with a protein design prompt written by a human expert, Claude autonomously did de novo binder design, and Adaptyv Bio and Twist Bioscience independently built and tested the results. The replies split between alarm ("a drug that can wipe out specific cancers could also wipe out specific people") and domain-expert deflation — Melinda B. Chu, [198 likes](https://x.com/MelindaBChu1/status/2089868828175962130): "This is a grad student or Post-doc project. I put it at first-year grad student or college student project."

**GitHub is buckling and the reaction is wrong, says Matteo Collina** ([post](https://x.com/matteocollina/status/2089810087942795578), via Steinberger):

> "What is making GitHub explode => massive surge of agent based traffic, and I expect the majority if this to be on the OSS/free plans. What is the reaction: celebrate paid-only git hosting. The only thing paid-only competition would do is to make GitHub business model harder to justify, worsening what everybody gets for free?"

Ronacher's contribution to the outage discourse: ["Didn't we all ask for a bit of friction and back pressure? GitHub is providing it!"](https://x.com/mitsuhiko/status/2089372027056476295) He also [noted](https://x.com/mitsuhiko/status/2089374335387463907) he has a [tangled.org account](https://tangled.org/mitsuhiko.at) now.

**swyx open-sourced his YouTube thumbnail A/B testing.** [Post](https://x.com/swyx/status/2089798658225266806): "i always hated that it is such an opaque process. open sourcing/crowdsourcing our learnings today" The lab lives at `ai-engineer-thumbnail-lab.swyx.io` (link in the post).

**Kill My SaaS closed at 69 submissions**, all indexed in [Field Notes](https://kill-my-saas-field-notes.swyx.chatgpt.site/) — "a visual index of 69 competitor-built conference products, their AI tools, technology, and build economics" ([post](https://x.com/imkin/status/2089518027956158716)). Conor Bronsdon's [entry](https://x.com/ConorBronsdon/status/2089520281316626654) is an open-source Sessionboard replacement: [callboardhq.com](https://callboardhq.com/).

**A lesson in launching with a detector screenshot.** am.will's [critique](https://x.com/LLMJunky/status/2089940772359409834) of the Deft launch, which claimed "86% of user queries are fully human according to pangram" — the screenshot itself warned of low confidence from insufficient text, so everyone ran the model through Pangram themselves and got 100% AI, which "discredits their claim entirely… totally avoidable. In reality, the product should kinda speak for itself. If its really a good writer, then post its writing."

**Startup advice that generalises to agent backlogs**, from [Gabriel](https://x.com/gabriel1/status/2089812242024087798): "ignore literally everything and everyone that is not immediately ultra critical to what the biggest problem is right now. everything that feels like it's 'probably super useful in 3 weeks' is completely useless, NEVER do it."

And Matt Pocock spent [nine hours in A&E](https://x.com/mattpocockuk/status/2089813036135518335) running an AMA out of boredom, then [got discharged](https://x.com/mattpocockuk/status/2089827015293571262) the moment he posted it. All is well.

---

*Sourcing notes: @leerob's Nitter feed returned "user not found" across two attempts, so nothing from that account today. @simonw and @karpathy had no posts inside the window (last items Aug 16 and Aug 2 respectively). @potetotes' feed remains empty. Nitter thread pages were heavily rate-limited today; reply counts for the Anthropic protein-binder and Claude Workflows threads reflect partial reply pages.*
