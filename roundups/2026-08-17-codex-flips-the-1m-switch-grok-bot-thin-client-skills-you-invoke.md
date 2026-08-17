---
title: "Codex Flips the 1M Switch, Grok Bot's Thin Client & Skills You Actually Invoke"
date: "2026-08-17"
summary: "OpenAI's Tibo Sottiaux **enabled the 1M-token context window for GPT-5.6 Sol in Codex on ChatGPT accounts**, complete with the config.toml recipe and a warning that the 256K default was tuned deliberately — the post did 687k views, half the replies asked for a limit reset instead, and LLMJunky spent the day discovering it silently reverted before Tibo shipped the fix, then told everyone not to use it anyway (\"more usage, might even be bugged, they removed it for a reason\"). Lee Robinson wrote the clearest **design rationale for Grok Bot** yet — no UI at all, a *thin* client harness and a *thick* server one, an always-on persistent cloud computer instead of a fresh VM per conversation, and browser use as the escape hatch for everything that can't be scripted — and confirmed in the replies that there is no model picker and never will be. Matt Pocock had two good arguments in a row: that a **user-invoked** skill set kills a whole error class (\"you never need to worry about *did /to-spec fire?*\") and that codebase-as-diagram loses to consistent domain language, deep modules, and reading actual code; he's also warming to a `/retro` skill that updates `CODING_STANDARDS.md` at session end despite thinking models are \"REALLY bad at improving their own behavior.\" banteg surfaced **omp's persistent IPython kernel** — imports, vars and open files that survive across subagents — and called that design the future. Plus Simon Willison's genuinely delighted Qwen 3.8 27B review, Devin merging 31 PRs in six unattended hours, and LlamaIndex claiming 94%+ extraction accuracy on 100k-field documents."
tags:
  - Codex & OpenAI
  - Agentic Coding & Agent Harnesses
  - Skills, Standards & the Human Loop
  - Models & Local Inference
  - Documents, Context & Evals
  - Other Bits
---

# AI Roundup — August 17, 2026

## Codex & OpenAI

### The 1M context window lands for ChatGPT accounts — with a warning label

Tibo Sottiaux [flipped the switch](https://x.com/thsottiaux/status/2089143488696705077) (3,808 likes, 456 replies, **687.3k views**):

> "GPT-5.6 Sol 1M in Codex. This used to only work for API keys, but we just flipped the switch and works for usage through ChatGPT accounts now too. The same warning applies, there is a reason the current context length is the default, we have tuned it to ~perfection. But you do you!"

The [quoted how-to](https://x.com/thsottiaux/status/2089143488696705077) is the useful part — three lines at the top of `~/.codex/config.toml`, above any `[section]` headers:

```toml
model = "gpt-5.6-sol"
model_context_window = 1000000
model_auto_compact_token_limit = 900000
```

The third setting is the one people skim past: auto-compaction kicks in around 900k, leaving headroom. Or per-session, without touching defaults:

```bash
codex -m gpt-5.6-sol \
  -c model_context_window=1000000 \
  -c model_auto_compact_token_limit=900000
```

**The best reply is also the most obvious one.** [Ehsan Azish](https://x.com/ehzish/status/2089143920080871919) (8.9k views): "if it's tuned to perfection why does the flag exist at all". [brandon](https://x.com/branalytc/status/2089144004843798585) (14.6k views) went with "wow — did you get bullied into adding this for codex?"

But the thread's actual center of gravity wasn't context at all. [xt0n1](https://x.com/xt0n1t3ch/status/2089145278301442100) got **199 likes** for "Thanks Tibo! How about a reset to celebrate? 👀", and the limits/reset complaints outnumbered the context ones. Notable dissent from [Arman C.](https://x.com/unsetopt/status/2089163360848032223): "Let people complain. I am never enabling 1M context window. Codex's server-side compaction is goated." And a practical PSA from [George Lubaretsi](https://x.com/GeorgeLubaretsi/status/2089178854409523486): "Codex cache TTL is insanely good, but if it so happens you send a message in an existing, expired session with that much context, may Tibo's reset button be with you."

### LLMJunky's 24-hour arc: it didn't work, then it did, then don't use it

Worth reading in order, because it's a tidy little case study in shipping a flag.

1. [It doesn't stick](https://x.com/LLMJunky/status/2089111582676525289): "As far as I can tell, setting GPT 5.6 Sol to 1M context doesn't work. After sending a message, it reverts back to 258,000."
2. [The apology](https://x.com/LLMJunky/status/2089122163169136979): he'd called out someone else's post claiming 1M was possible — "the reality is, he was right. 1M is not active on subscriptions for 5.5 or 5.6."
3. [Fixed](https://x.com/LLMJunky/status/2089146646026232300): "1M context now available. Can confirm, it now works. Thanks thibs!"
4. [The actual advice](https://x.com/LLMJunky/status/2089166913846800793): "dont use it unless you have a really good reason for it. not only does it use more usage, but it might even be bugged. they removed it for a reason."

Tibo also posted a [four-line Codex status card](https://x.com/thsottiaux/status/2089149255382438340) — "Almost 100% reliable / Occasional resets / Open-source / (will have Astra)" — which is the first casual confirmation that **Astra is coming to Codex**.

## Agentic Coding & Agent Harnesses

### Lee Robinson on why Grok Bot is shaped the way it is

The most substantive harness-design post of the day, [from Lee Robinson](https://x.com/leerob/status/2089169319099777364) (739 likes, 56.6k views). Four decisions, paraphrased tightly:

1. **The best UI is none at all.** It's "one of the first products designed for current frontier model capabilities," with a UI restrained enough to stay usable *as models improve exponentially*. "Everyone knows how to text."
2. **Thin harness for the client, thick harness for the server.** The app harness is essentially a single tool that shuttles messages; all complexity lives server-side, where you still get a normal coding-agent harness with specialized tools. The fluidity comes from "everything we didn't have to build."
3. **An always-on computer.** Most agents start fresh every question. Bots instead connect to *their own* persistent machine, so you can run agents on a persistent filesystem — "closer to what programmers have been doing by using Tailscale from their phones to connect to a remote computer and run an agent TUI." Cloud is the only option, deliberately.
4. **Browser use.** Code covers most computer work, but not logging in and clicking around; models and harnesses are finally reliable enough. You can also **record yourself doing a task and have it turned into something repeatable.**

Lee answered a lot in the replies, and the answers are where the product philosophy shows:

- On bring-your-own-machine — [yes, it works](https://x.com/leerob/status/2089176862555517000): "You can have your bots connect to your computer! I also saw someone login to iCloud on the web to access content from their Mac."
- On the environment — [one Linux box with Chrome](https://x.com/leerob/status/2089171866506207359), shared across bots, "each bot has their own *virtual desktop*."
- On browser-use vs. integrations — [both](https://x.com/leerob/status/2089171998878425187): "Some things can be easily scripted, but there's still many tasks which require clicking around."
- The line that will get quoted: asked for a model picker, [Lee said no](https://x.com/leerob/status/2089177105632198816) (9 likes) — "This is not the type of product that has model pickers. You probably want Cursor or Grok Build for that." The [ask itself](https://x.com/YayaSoumah/status/2089175876038455409) was reasonable: if the router hands you a dumber model, your only recovery is deleting the bot and rerolling.
- Access requires [Cursor Ultra or SuperGrok Heavy](https://x.com/leerob/status/2089173673869467764).

Not all glowing — [Christoph Hempel](https://x.com/zendrache/status/2089234453730042067): "very slow to do even the easiest tasks, and the usage limits are burned incredibly fast," a complaint that repeats several times down the thread.

### omp pins an IPython kernel across the whole session

[banteg](https://x.com/banteg/status/2088952286827499529) (383 likes, 26.2k views) on a harness detail worth stealing:

> "omp has a very interesting eval/repl tool design. it runs a persistent ipython kernel pinned across session. this means imports, vars, open files survive **even across subagents**. the agent can build the state incrementally like you would write a jupyter/marimo notebook yourself instead of rederiving everything every call or editing one-off scripts. haven't seen this in any other harness. i think this design is the future."

[Can Bölük](https://x.com/_can1357/status/2088957707973697563) (96 likes) added the implementation footnote and the training war story: "it can also share state/functions with subagents btw — fun fact: it took so many tries until it started using it incrementally, **RL enforced patterns are such a PITA!**"

Prior art surfaced fast: [samlaf](https://x.com/samlafer/status/2088967608989069786) pointed to [RLM](https://alexzhang13.github.io/blog/) and Prime Intellect's [harness](https://primeintellect.ai/blog/), and others named Prime Agent and agentnb. The two skeptical notes: [Outreach Guy](https://x.com/kolscoutx/status/2088975850460860797) — "persistent kernel across subagents sounds nice until **state drift** makes debugging a nightmare" — and [Hamza Hamud](https://x.com/hhamud_/status/2088976372140007424), who finds RLM-style harnesses less token-efficient than Pi with compression extensions.

### Devin, unattended, for six hours

[LLMJunky](https://x.com/LLMJunky/status/2089053312675164511) on a workload that's genuinely at the edge of what people report:

> "Devin handled over 30 PRs for me in the last 24 hours... research, review, launching dozens of parallel agents, **negotiating with the authors**, applying fixes, fixing conflicts, and merging numerous branches automatically. It worked for over 6 hours straight, picking up new comments as they came in... until 31 PRs were merged, half a dozen blocked, rejected or still being worked on. All I had to do was review and decide if the changes were reasonable, safe, and well scoped. I only used about 60% of my weekly."

Two replies do the useful work. [Nathan Quantum](https://x.com/AI_WarriorNQ/status/2089098200040780005): "Parallel agents negotiating with PR authors is wild. Did the other devs know they were talking to an agent?" — answer: ["probably. you can tell."](https://x.com/LLMJunky/status/2089102508639576322) And [Vitali Arbuzov](https://x.com/VitaliArbuzov/status/2089123255349342303) said he's trying to automate the review-and-decide step, which drew the honest [reply of the day](https://x.com/LLMJunky/status/2089128463701512342): "i lack the confidence in any model that it can do this reliably."

## Skills, Standards & the Human Loop

### The case for user-invoked skills

[Matt Pocock](https://x.com/mattpocockuk/status/2088999534961553872) on why his skill set is deliberately *not* auto-firing:

> "One benefit of being a primarily 'user-invoked' skill set is that we get rid of a whole category of errors. You never need to worry about: 'did /to-spec fire?' — 'why did /to-spec fire there?!' — 'why did it choose /to-tickets instead of /to-spec?!' You stay in control. Plus, it means most of the skills don't cost any tokens until you invoke them."

Two wins in one design choice: determinism, and skills that are free until called.

### `/retro`: the compound-engineering piece he's been avoiding

[Pocock, thinking out loud](https://x.com/mattpocockuk/status/2088741042744901842) (1,221 likes, 83.7k views):

> "One thing missing from my skill set is what compound engineering has — the promise that your process improves over time. I have been extremely reluctant to add this since **I think models are REALLY bad at improving their own behavior**. But I'm starting to think that a skill that you run at the end of a session to: update your `CODING_STANDARDS.md`, rework & cull existing skills/steering instructions, powered by `/writing-for-agents`... would actually be pretty great. Just needs a name."

The thread named it in four minutes — [Wei](https://x.com/wei1limm/status/2088742204223209842) suggested `/retro`, Pocock [took it](https://x.com/mattpocockuk/status/2088742574454390795). (Runners-up: `/kaizen`, `/compound`, `/house-cleaning`.)

The warning came just as fast, from [Optimistically Skeptical](https://x.com/vandancd/status/2088741756489670911): "I actually ended up going down this rabbit hole. All I did was bloated up my CLAUDE.md." Pocock [conceded the risk](https://x.com/mattpocockuk/status/2088742184245731443) but drew a line: "I DO need a mechanism for adding stuff to `CODING_STANDARDS.md`, **which can afford a bit more bloat** IMO." The best refinement came from [Will Ness](https://x.com/WillNessAI/status/2088774733869281336): orchestrate Explore agents across *many transcripts at once* so you find common patterns rather than over-indexing on one context window — Pocock [agreed](https://x.com/mattpocockuk/status/2088890920213098686) a multi-session retro makes sense. And asked whether he uses a memory system at all, his [answer](https://x.com/mattpocockuk/status/2088761527910220013) was four words: **"My codebase is my memory system."**

### Codebase-as-diagram: nice for planning, bad as an artifact

Responding to a viral demo of turning codebases into animated visual diagrams for discussion with Claude, [Pocock pushed back](https://x.com/mattpocockuk/status/2089017494237290740) (774 likes, 73.2k views):

> "I have tried this a few times. But the overhead of understanding the diagram (and fixing slop) is huge for complex systems. Consistent domain language, condensing functionality into deep modules and **READING ACTUAL CODE** is better."

The nuance is in a [follow-up](https://x.com/mattpocockuk/status/2089090098641973480): "diagrams during planning are super useful — as an analogy of the system, generated and thrown away. But 'diagram instead of code', persisted and referred back to, feels iffy." Pitched a structure-visualization tool, he [replied](https://x.com/mattpocockuk/status/2089091957934985670): "IMO this is better expressed in the file system." And to the fair challenge "what about those of us who cannot read code?" — [use `/teach`](https://x.com/mattpocockuk/status/2089062341312651474): "It's really not that hard. I promise it'll help a lot."

## Models & Local Inference

### Simon Willison is having a very good time with Qwen 3.8 27B

[His review](https://x.com/simonw/status/2089112517796827439) (1,279 likes, 86.2k views) — "Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things":

> "I can't remember the last time I've had this much fun playing with a local model that runs on my own computers."

The better demo is the [follow-up](https://x.com/simonw/status/2089120083499245921): he pointed Pi at Qwen 3.8 27B and had **the local model build a script to convert its own `.jsonl` transcripts to Markdown** — then used that tool to share [the transcript of it building the tool](https://gist.github.com/simonw/). A tidy little proof that a 27B running on your own hardware is now agentic enough to close a loop on itself.

Replies converged on the two practical questions: VRAM (roughly two 3090s / 48GB, per [SourceCodeplz](https://x.com/SourceCodeplz/status/2089125784665444722)) and the overthinking, which [Taissa](https://x.com/taissaconde21/status/2089116405060837397) called generously named: "That thing takes ages to respond to a simple hi."

## Documents, Context & Evals

### LlamaExtract Agentic Plus: 94%+ on 100k-field documents

[Jerry Liu](https://x.com/jerryjliu0/status/2089099864554831995) shipped a document-extraction agent tuned for long documents — 50+ pages, some with 10k–100k fields — at 94%+ accuracy, with **a confidence score and a bounding box per extracted field**.

The claim worth noting for anyone benchmarking harnesses: it does **10–20% better in accuracy than generalized coding agent harnesses** (he names Claude Code Opus 4.8 and Codex GPT-5.6). Which is the specialist-vs-generalist argument made concrete — same models, different harness and tool design, double-digit accuracy delta. [Benchmark and mode writeup](https://llamaindex.ai/blog/), demo video in the thread.

### "Ideas are the new bottleneck"

A [Latent Space episode summary](https://x.com/gokulr/status/2089034609191456802) worth the scroll: Akshay Nathan, who runs OpenAI's productivity pillar (ChatGPT Work and Codex), interviewed by swyx and Vibhu. The thesis is that once anyone can build, the scarce inputs become **ideas and taste**, and the old proxies for productivity stop telling you anything. His warning to managers: *AI makes activity almost free while progress still costs the same discipline it always did.* The "motion trap" — adding models and standing up dashboards is easy now, and plenty of teams do exactly that and find nothing has changed.

## Other Bits

- **Watermarking, explained interactively.** [trq212](https://x.com/trq212/status/2088721023223132213): "Watermarking without quality loss is a bit unintuitive, doesn't feel like it should work." So he built [an artifact](https://x.com/trq212/status/2088721024825344289) — *Same Words, Different Dice* — showing that Claude's watermark changes the **source of randomness, not the words**. Theo also [posted a video](https://x.com/theo/status/2088833766609596623) on the watermarking discourse.
- **The AI-pilled framework creators.** [trq212 again](https://x.com/trq212/status/2089085004966207679): "it says a lot that the creators of three of the most iconic web frameworks: django (@simonw), flask (@mitsuhiko) and rails (@dhh) were so AI pilled so early."
- **Sunday meditations from Vienna.** A [short video](https://x.com/pidotdev/status/2088951405155426757) from the Pi team with Mario Zechner and Armin Ronacher, condensed to three lines: *on memory — code is the truth; bash is all you need; build context-efficient tools.*
- **20 watts.** Gavin Baker's aside that human brains run on 15–20W [caught](https://x.com/theo/status/2088793798369481067) Theo, then [LLMJunky](https://x.com/LLMJunky/status/2088797492817076667): "20 watts is about what your monitor uses in sleep mode... that's the same efficiency that invented the modern world, imagined the theory of relativity, and put men on the moon."
- **Dario vs. the algorithms.** [Theo](https://x.com/theo/status/2088800577430208822): "Kinda wild to see Dario blaming social media algorithms for hurting the public reputation of their text generation algorithms."
- **Chrome Lite?** [steipete noticed](https://x.com/steipete/status/2089154019885490449) an unrequested new icon in his menu bar "that loaded a slow html box."

---

*Feed notes: `@mitsuhiko`'s Nitter RSS returned "User not found" on both attempts today, so his own posts aren't represented directly (he appears via the Pi video and trq212's post). `@potetotes`' feed remains empty. `@bcherny` and `@karpathy` had no posts in the window.*
