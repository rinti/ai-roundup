---
title: "The Ox Alpha Mystery, Codex Hits 20M & Hard Languages Get Easy"
date: "2026-08-23"
summary: "The weekend's best story is a whodunit: a stealth model called **Ox Alpha** started slaughtering benchmarks, Theo merged 8 PRs on its say-so without reading the code (3,598 likes), and the crowd's forensics (Tim Dettmers on inference speed, teortaxesTex on style) converged on a GLM-5.3 derivative rather than a new giant — with DeepSeek's surprise V4-Flash-Vision-Exp release resolving at least part of the confusion. OpenAI's Thibault Sottiaux announced **Codex passed 20M active users**, handed every Codex and ChatGPT Work user a banked reset (3.1M views), and clarified that the users seeing drained limits were mostly running sub2api to resell subscription tokens as API traffic. GPT-5.6 Sol got a 20%+ price cut on top. Two strong weekend essays: Latent Space's **\"The Evolution of the Agent Harness\"** argues models keep absorbing the harness into their weights (Anthropic deleted 80% of Claude Code's system prompt) until what's left is an interface to human attention, and Armin Ronacher's **\"Fast and Hard Code\"** observes that LLMs have made language choice cheap enough that people now pick Rust and Zig for the marketing — and ship DWARF parsers and eBPF programs that used to be gatekept. Plus: Linus Torvalds crediting (and out-stubborning) his AI helper in an xe driver commit, Simon Willison's llm 0.33, tptacek's \"Stop Making TUIs,\" vLLM fixing RL logprob mismatch with bitwise-deterministic inference, and Theo's model tier list video (74k views)."
tags:
  - Models & Benchmarks
  - Codex & OpenAI Updates
  - Agentic Coding & Agent Harnesses
  - Deep Reads
  - Videos
  - Releases & Infrastructure
---

# AI Roundup — August 23, 2026

## Models & Benchmarks

### Ox Alpha: the stealth model everyone spent Friday reverse-engineering

The arc in three Theo tweets: ["This model is slaughtering all our internal benchmarks. What the actual fuck is it??"](https://x.com/theo/status/2090657271827312727) (2,058 likes, 128k views), then ["I just merged 8 PRs without reading the code because ox alpha said they were good to go"](https://x.com/theo/status/2090669658483691539) (3,598 likes, 239k views). Kimmonismus [cited](https://x.com/kimmonismus/status/2090718270202528215) >80% on 10 DeepSWE tasks versus 65% for Fable and 52% for GPT-5.6 Sol. Distribution happened fast through Hermes Agent, OpenCode, OpenRouter, and [Cline](https://x.com/cline/status/2090854216399220985).

Then the forensics, which are the fun part. [Tim Dettmers](https://x.com/Tim_Dettmers/status/2090866380484608066) read the inference profile (fast output, weak partial prefill) as fewer active params than a 1T+ monster. [scaling01](https://x.com/scaling01/status/2090662468833976582) guessed a bigger teacher distilled into 5.3-class models, and [teortaxesTex](https://x.com/teortaxesTex/status/2090732403685818583) kept narrowing on GLM-5.3/5.4 Vision from the writing style. The consensus read per [Latent Space's recap](https://www.latent.space/p/ainews-10-worse-100x-cheaper-10000x): post-training plus infra beats sheer size.

Part of the mystery resolved itself when **DeepSeek shipped [V4-Flash-Vision-Exp](https://x.com/deepseek_ai/status/2090730032574631962)**: multimodal support on top of V4-Flash's text capability, claimed multimodal-agent performance close to Opus-4.8, images billed at 117-384 tokens each at Flash pricing, plus a new Files API for reusable image uploads. Observers noted the mystery model in some tests had likely been this "blinded VLM." The DeepSWE jump of ~4 points over the 0731 release drew the most skeptical attention on Reddit. Weights not yet on Hugging Face; API-only for now.

Backing the "post-training > params" thesis: [ZhihuFrontier's GLM-5.3 analysis thread](https://x.com/ZhihuFrontier/status/2090731537037987931) attributes the gains to the *same 743B base as GLM-5.2*, improved by scaled post-training, better sandboxes, and SAO for finer credit assignment on long-horizon agent tasks.

### NVIDIA AVO on ARC-AGI-3, with the Chollet asterisk

[NVIDIA announced](https://x.com/NVIDIAAI/status/2090786258981466231) AVO solved all 183 levels across 25 public ARC-AGI-3 environments. [François Chollet's caveat](https://x.com/fchollet/status/2090838046937645398): that's the public demo/tutorial set, not the full benchmark. Read both before repeating the headline.

## Codex & OpenAI Updates

### 20M users, a banked reset, and the sub2api story

[Thibault Sottiaux](https://x.com/thsottiaux/status/2090766694897619318) (19,879 likes, **3.1M views**): Codex passed **20M active users** this week, and to celebrate, every Codex and ChatGPT Work user got credited a "banked reset" to spend whenever they like. [Theo saluted](https://x.com/theo/status/2090767966187200739).

The more interesting half is the [quoted clarification](https://x.com/thsottiaux/status/2090675027670978569) on the "usage limits draining faster" complaints that have been simmering all week. OpenAI investigated and found many affected users were running **sub2api** — converting a subscription into API traffic to re-serve or share across many users, which trips fraud-prevention systems. Signing in with your ChatGPT account through official clients or OSS harnesses like Pi and OpenCode is explicitly fine; reselling your subscription as an API is not. That's a notably diplomatic way to say "the limits didn't change, you were pooling accounts."

### Sol gets 20% cheaper, and you can finally cap spend

[OpenAI cut GPT-5.6 Sol pricing by over 20%](https://x.com/OpenAI/status/2090885187634905500) for three months across the API and credit products. It stacks with product promos: VS Code's 50% Copilot discount through Sept 3, and [Cognition's math](https://x.com/cognition/status/2090908912534933731) that Sol on Devin nets out to 76% off list through Oct 3. Cheap Chinese inference is clearly setting the reference price now.

Alongside: [per-API-key usage tracking and hard monthly org/project spend limits](https://x.com/OpenAIDevs/status/2090903221636338057). Overdue, given the whole point of agentic workloads is that you don't know in advance how many tokens they'll take. Last week's roundup had Theo burning $800 *past* his limit; now at least orgs can draw the line themselves.

Sentiment datapoint: [Mercury's immad](https://x.com/immad/status/2090829882070880572) suggests Anthropic's startup share may have peaked in Q1, with Sol and Codex "turning the tide back."

## Agentic Coding & Agent Harnesses

### The evolution of the agent harness

**[The Evolution of the Agent Harness](https://www.latent.space/p/attention-interface)** (Latent Space, Dan McAteer) is the weekend's best essay on why agents suddenly started working around Christmas 2025. The argument: two curves — what the harness asks of the model, and what the model can deliver — finally crossed. AutoGPT asked for autonomy when models compounded errors (95% per-step reliability over 20 steps is a 36% success rate); Cursor retreated to human-in-the-loop; Claude Code was the first product to hand the loop back *at the right time*, built for the next model's capabilities rather than the current one.

The present is co-training: Harness-Bench ran one model across harnesses and got a 23.8-point spread (52.4 to 76.2) with zero model change, and RL now happens inside the harness environment. Models then absorb harness tricks into their weights (GPT-5.1-Codex-Max was "natively trained to operate across multiple context windows through compaction") and engineers delete the scaffold that got absorbed — Anthropic's Thariq Shihipar says the team recently deleted **80% of Claude Code's system prompt**. The endpoint he predicts: everything computer-facing gets absorbed, and what remains is the human-facing part — permissions, identity, trust — a "harness for human attention." His concrete bet: within a year every agentic AI company ships a human attention policy surface the way everyone shipped AGENTS.md. Given how much of my day is now triaging agent interrupts, I believe it.

### Simon Willison: verification isn't the same as reading every line

**[More than just code review](https://simonwillison.net/2026/Aug/22/more-than-just-code-review/)** — short and quotable: "The key skill required to make productive use of coding agents is being able to confidently instruct them on how to make changes and then confidently verify that those changes have been applied in the correct way. Sometimes this involves reviewing every line of code they have written, but there are other ways to achieve that goal." Eyeballing every line was never the most effective validation anyway. (A pointed counterexample to Theo's merge-8-PRs-because-Ox-Alpha-approved approach above — confidence in verification has to come from *somewhere*.)

The perfect companion piece landed the same day: [Linus Torvalds' commit message](https://simonwillison.net/2026/Aug/22/linus-torvalds/) for an xe driver fix, describing "a debug session from hell, enormously helped by an AI doing much of the grunt-work." The AI declared the bug impossible and unsolvable several times and suggested just writing a report; Linus pushed, it kept faithfully adding debug code and analyzing, and they got there. "I suspect those things have been trained by people who may not be quite as stubborn as I am." He let the AI write the commit message as credit.

### Agents move into Slack, environments become the training data

[GitHub rolled out collaborative agent workflows into Slack and Teams](https://x.com/SlackHQ/status/2090874396739092779) — the agent picks up tasks, opens PRs, and loops in design inside the shared channel. Agent-in-the-channel is quickly becoming the enterprise default shape.

On the training side, the recap's throughline was environments over prompts: Google's EnvHarness/EnvRigger adapts static training environments with a plugin layer (up to +9 points held-out, 9.8% fewer steps), FACET generated 6,078 validated executable terminal tasks from agent skills, and SWE-bench Science has even Claude Code + Opus-5 under 50% pass@1 on 119 scientific software tasks. Benchmarks are finally getting harder faster than models are getting better at them.

### Armin on agents and Zig

[Quick Bluesky note from Mitsuhiko](https://bsky.app/profile/mitsuhiko.at/post/3mtpclhibx22g): agents aren't amazing at Zig, mainly because Zig constantly changes — but since they just read code, in-context learning gets them good enough. Also a fun one: [his oldest has spent two days self-directed burning GPT tokens](https://bsky.app/profile/mitsuhiko.at/post/3mtoacejrgs2h) making Minecraft mods with pi, most recently trying to change a dragon boss's behavior.

## Deep Reads

### Fast and Hard Code (Armin Ronacher)

**[Fast and Hard Code](https://lucumr.pocoo.org/2026/8/22/fast-hard-code/)** — LLMs make language choice much less consequential, so people now choose languages based on marketing, and the beneficiaries are the *hard* ones. Rust is getting shipped by people who'd never have picked it; even Zig benefits, despite its core community being cool on AI — Cloudflare's new Artifacts service runs a pure-Zig git-protocol engine compiled to a ~100KB WASM module, and Vercel released fx, a Zig coding agent. His sharper observation: people are doing previously gatekept work — DWARF files, eBPF, custom network drivers, custom crypto — because you no longer need years of tribal knowledge to get started. "Maybe the world will have more slop, but it might also have more developers in it that want things to be fast and small." The optimistic read on the same phenomenon everyone else is doomposting about.

### Stop Making TUIs (via Simon Willison)

[Willison boosts Thomas Ptacek's argument](https://simonwillison.net/2026/Aug/21/stop-making-tuis/) that coding agents have made real native GUIs nearly free, so stop settling for terminal UIs on personal tools. Willison's vibe-coded macOS menu bar apps from March are still in daily use. tptacek: "If you haven't tried your hand at turning one of your 500 throwaway CLIs into a native app, you're doing yourself a disservice." Interesting tension with the whole industry building terminal harnesses — see also Theo's "I'm done with terminals" arc from last week.

### Why simulation is taking over

[Latent Space's Friday feature](https://www.latent.space/p/ainews-10-worse-100x-cheaper-10000x) traces how every component of the model-production pipeline has flipped from human-made to model-made since 2022: first the reward signal (InstructGPT, RLAIF), then training data (Phi, WRAP), then the teacher (Alpaca distillation), and now full RL environments and AI-researcher loops. The frame that ties it together: all of it is increasingly ambitious *human simulation* — "10% worse, but 100x cheaper and 10,000x faster." Pairs with their Simile podcast (8 billion digital twins) from Friday.

## Videos

**[Which AI Models Are Worth Using](https://www.youtube.com/watch?v=06BvFMW8Ng8)** (Theo, 74k views in a day) — a tier-list ranking of essentially every model you'd reasonably use today. Useful as a snapshot of practitioner sentiment the same week the Ox Alpha episode showed how fast that sentiment moves.

**[Claude Code on Mobile Is Horrible](https://www.youtube.com/shorts/TcUpZUx-O84)** (short, 18k views) — SSH is great until you introduce it into agentic workflows, where it falls apart. A postscript to his SSH-kinda-sucks arc.

## Releases & Infrastructure

**[llm 0.33](https://simonwillison.net/2026/Aug/22/llm/)** — Willison's CLI upgrades to the OpenAI Python library 3.x and swaps httpx for httpx2, the proper fix after [0.32.1](https://simonwillison.net/2026/Aug/21/llm/) hotfixed fresh installs breaking when openai dropped its httpx dependency out from under him. A tidy little case study in transitive-dependency risk. Also [llm-openrouter 0.7](https://simonwillison.net/2026/Aug/21/llm-openrouter/): reasoning traces, the Responses API, and OpenRouter's server-side Shell/WebFetch/WebSearch tools.

**[vLLM IsoExec](https://x.com/vllm_project/status/2090815806297063661)** — fixes rollout/training logprob mismatch in RL caused by floating-point non-associativity by enforcing bitwise parity across TP/EP/SP layouts. On Qwen3.5-35B-A3B with DAPO on 8xH100, logprob diff dropped from 1.6e-2 to 6.7e-7 for 25.3% overhead. Niche but load-bearing for anyone doing RL on served models.

**[Marin 535B-A23B started training](https://x.com/percyliang/status/2090918065634684997)** — Percy Liang's fully-open run: 18.75T tokens on 11× GB200 NVL72 over ~3 months, kept open as usual.

**[FreeToken](https://x.com/Yuchenj_UW/status/2090857982385066474)** (UC Berkeley) — 753B GLM-5.2 at 14.9 tok/s on a single RTX PRO 6000, Qwen3.6-35B at 39.3 tok/s on an 8GB RTX 4060 laptop, claiming 2-4x Ollama throughput on consumer GPUs. The local-inference floor keeps dropping.

**Compute stays tight**: [saranormous](https://x.com/saranormous/status/2090655089077977130) on good AI companies being growth-limited by compute, and [David Sacks](https://x.com/DavidSacks/status/2090790063047168473) on Harvey using open-source Kimi K3 for legal SOTA at lower cost — his argument being that restricting open models would mostly hurt US application-layer companies. [Ollama added Kimi K3](https://x.com/ollama/status/2090906360808411568) to Pro/Max subscriptions the same day.

---

*Sourcing notes: nitter.net now returns "RSS feed is disabled" outright (a new failure mode — not the usual 429), xcancel still demands per-reader whitelisting, and poast/privacyredirect/lightbrd remain behind bot walls. Assembled from Bluesky (@mitsuhiko.at active; @simonwillison.net quiet), blogs (simonwillison.net, lucumr.pocoo.org), Theo's YouTube feed, the fxtwitter API for individual tweets, and Latent Space's AINews recap. No thread replies could be read, and no usable feed for @mattpocockuk, @trq212, @LLMJunky, @bcherny, @steipete, @swyx, @karpathy, @jerryjliu0, @leerob, or @thsottiaux (his 20M-users post reached via the recap + fxtwitter); @potetotes remains empty.*
