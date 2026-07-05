---
title: "Better Models Worse Tools, Fable's $149 Final Review & the AGENTS.md Purge"
date: "2026-07-05"
summary: "Armin Ronacher turned Friday's phantom-tool-parameter mystery into the weekend's must-read: **Better Models: Worse Tools**, with receipts showing Opus 4.8 and Sonnet 5 fail on pi's edit tool where *older* models don't — his theory being that RL inside Claude Code's slop-forgiving harness (which silently aliases, repairs, and filters bad tool calls) means alternative tool schemas are now *implicitly punished* by post-training. It hit the HN front page within hours. Meanwhile Simon Willison gave the stop-reading-code debate its best data point yet: a pre-release Fable review of sqlite-utils 4.0 found (and fixed) **five release blockers** — including a data-loss bug — for $149.25, prompted from his iPhone at a 4th of July parade, with GPT-5.5 then finding two more P1s that Fable confirmed. Matt Pocock declared AGENTS.md *\"an essential primitive, but misused by nearly everyone\"* — **\"90% of people can delete their AGENTS.md and their output will improve\"** — and the replies converged on index-of-pointers-or-nothing. Also: Theo prompts for hours without touching his laptop and finds Fable's one weak spot (iOS), and Jerry Liu ships a Retrieval Harness that gives agents filesystem-shaped tools over indexed knowledge bases."
tags:
  - Better Models, Worse Tools
  - Fable's $149.25 Final Review
  - The AGENTS.md Purge
  - Theo's Phone-Only Weekend & Fable's iOS Gap
  - Agentic Retrieval Grows a Harness
  - Also Worth a Look
---

# AI Roundup — July 5, 2026

## Better Models, Worse Tools

Friday's phantom-tool-parameter mystery got solved, and the answer is worse than a bug. Armin Ronacher: ["I had some vibes that Opus 4.8 was performing worse than older ones for some uses that are off distribution and now I have the receipts."](https://x.com/mitsuhiko/status/2073488508816151038) The write-up, [**Better Models: Worse Tools**](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/), hit the [HN front page](https://news.ycombinator.com/item?id=48788599) (149 points) within hours.

The finding: Opus 4.8 and Sonnet 5 call pi's edit tool with *invented trailing fields* in the nested `edits[]` array — a whole zoo of them (`requireUnique`, `matchCase`, `oldText2`, even `event.0.additionalProperties`) — while **none of the older models do**. The actual `oldText`/`newText` payloads are byte-correct; the model then appends nonsense at exactly the highest-entropy point (right after closing a several-hundred-token escaped string). It's heavily context-dependent: fresh prompts never reproduce it, one user's resumed session failed ~20% of the time, stripping thinking blocks halved the failure rate, and strict tool mode eliminated it.

His hypothesis is the interesting part. Digging through Claude Code's minified client he found it's a **slop-absorbing harness**: parameter aliases (`old_str`, `path`, etc.), Unicode escape repair, silent filtering of unknown keys, retry state machines for leaked `<invoke` markup. If RL happens inside a harness like that, malformed tool calls still complete the task and get rewarded — "there is little gradient against inventing an alias, adding a stray field or using a nearby parameter name." And the better-trained model's prior is *stronger*: "Alternative tool schemas might not just be unfamiliar. They might be implicitly punished by post-training that optimizes for one particular, forgiving tool ecology. And that ecology is not documented." (He deliberately didn't test Fable, unsure whether the classifiers would silently downgrade him to Opus — [a replier reported clean refusals instead](https://x.com/thomasmustier/status/2073527448294035953).)

The thread sharpened the stakes:

- Kevin: ["It felt like pi was destined to land on this hard fact at some point. You can't beat the post training."](https://x.com/kcosr/status/2073496420582146263) Armin's pushback: [that *hadn't* been true until now](https://x.com/mitsuhiko/status/2073497213200650561) — Opus 4.5 adapted to foreign edit tools exceptionally well; "this is a rather recent artifact of probably scaling up RL much more."
- [Will Hampson's doom loop](https://x.com/hampsonw/status/2073521669814337888): worse models + sloppier Claude Code reinforcing each other, and "if I trained models at Anthropic I would be very concerned by this obvious lack of diversity/generality in my training data."
- Counter-datapoint from [OpenHands](https://x.com/engelnyst/status/2073544821310894318): Opus 4.8 works flawlessly with Anthropic's old *documented* text editor tool — it's specifically novel schemas that suffer.
- It's not just Anthropic: [GPT-5.5 in pi kept reaching for Perl/Python to edit files until one user replaced pi's edit tool with a vibe-coded port of Codex's `apply_patch`](https://x.com/rockatanescu/status/2073643354944864655) — same disease, harness-prior edition.

Armin notes [the general topic was already in his PyAI talk this year](https://www.youtube.com/watch?v=8RHYyRUxVrA) (video), and pi is [now planning cadenced model-compatibility testing](https://x.com/mitsuhiko/status/2073494482905870489).

## Fable's $149.25 Final Review

Simon Willison handed the stop-reading-code debate its best receipt yet: ["Somewhat humbling to have Claude Fable do a final review of some software that you're about to release and have it then find (and fix) FIVE release blockers, for an estimated (unsubsidized) cost of $149.25."](https://x.com/simonw/status/2073574214280544746) Full write-up: [sqlite-utils 4.0rc2, mostly written by Claude Fable](https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/).

The prompt was one line — *"Final review before shipping a stable 4.0 release — very important to spot any last minute things that would be a breaking change if we fix them later"* — sent from **Claude Code for web on his iPhone**, with Fable churning while he attended the Half Moon Bay 4th of July parade. The worst blocker was genuine data loss: `delete_where()` ran outside the `atomic()` wrapper, leaving the connection permanently in-transaction so *every subsequent write silently evaporated*. The cleanup ran to 37 prompts, 34 commits, and +1,321/−190 across 30 files.

Two details worth stealing:

- **Cross-vendor review is now habit, not superstition.** "I used to think that the idea of having one model review the work of another was somewhat absurd... The problem is it really does work." A one-line Codex Desktop / GPT-5.5 xhigh review of the RC diff found two more P1 transaction bugs; he pasted them into a fresh Fable session which experimentally **confirmed both** and fixed them.
- **Read the docs diff first.** "Reviewing the documentation edits first is an excellent way to build an initial understanding of what has changed" — that's how he spotted the Python 3.12 `autocommit` incompatibility Fable had quietly documented.

The replies did the economics: [$30 per blocker](https://x.com/0xV0LYX/status/2073575235178086755), [a reviewer with no incentive to rubber-stamp as a new price point](https://x.com/kakatorro/status/2073628731940434009), and the sharpest reframing of the week — ["'Do you ship code without reading it?' should really be 'Do you ship code without AI reading it?'"](https://x.com/thomasrice_au/status/2073584297001541777) Asked to extrapolate to a datasette-sized project, Simon [ballparked 4–5 figures](https://x.com/simonw/status/2073577532696547800) — and noted year-2000 SLOC models price datasette at $2.1M and 15.7 developer-years. Also worth a chuckle: [the same model wrote most of the code and then caught five of its own blockers on the second pass](https://x.com/_virgil19/status/2073586042486264108).

## The AGENTS.md Purge

Matt Pocock, quote-tweeting "AGENTS.md/CLAUDE.md is largely an anti-pattern": ["It is an essential primitive, but misused by nearly everyone"](https://x.com/mattpocockuk/status/2073458834505347154) (**143K views**). Pressed to be less vague, he delivered the line of the day: ["90% of people can delete their AGENTS.md and their output will improve. Use it as an index of pointers to important files, and even then aggressively prune it for no-ops."](https://x.com/mattpocockuk/status/2073473197991715246)

The replies converged hard on the same doctrine:

- ["It should be an indexer, a navigation (with pointers/refs to other rules/skills) at most... Progressive disclosure."](https://x.com/sutusebastian/status/2073460338826031348) — Matt: "Agree."
- The failure mode, memorably: ["most people turned context into a haunted README"](https://x.com/desphixs/status/2073459213167153421) and ["Every AGENTS.md starts as 20 lines and ends as a second README."](https://x.com/gpkmasa/status/2073650192000471506)
- It's self-inflicted by the tools too: ["Even the agents add way too much crap to AGENTS.md if given the chance."](https://x.com/_justelias/status/2073600741521187047)
- The enforcement caveat: ["Claude Code treats CLAUDE.md as optional. So you can't enforce anything with it reliably"](https://x.com/Foxfire1st/status/2073481323990352312) — which is exactly why rules-in-a-doc lose to pointers-plus-skills. Related division of labor from the thread: [AGENTS.md for the project-specific, skills for everything project-agnostic, so skills copy cleanly between projects](https://x.com/Odytrice/status/2073591235802194306).

This lands as the counterweight to a week of context-engineering maximalism — the same author whose /wayfinder skill orchestrates hundred-session planning maps is telling you the entry-point file should be nearly empty.

## Theo's Phone-Only Weekend & Fable's iOS Gap

Theo spent the 4th shipping from bed: ["T3 Code Mobile app is getting way too good way faster than I expected. It's screwing with my sleep. I just prompted for hours without touching my laptop"](https://x.com/theo/status/2073494375515164980) — including [a first thread built entirely from his phone](https://x.com/theo/status/2073494834145567110). Input method is nothing fancy (["Just typing on phone. Apple's built in voice to text is fine"](https://x.com/theo/status/2073495089998180423)), an onboarding overhaul is "coming very soon," and the replies are full of people wanting Android builds and iPad treatment. This is the same convergence Cursor for iOS and Claude Code for web started the week before — every harness is racing to make the laptop optional, and per Simon's parade story above, the workflow is real.

The counterpoint from the same evening: ["Fable's intuition for iOS development is significantly worse than other areas I've used it in. Great at infra, databases, web and more, just easily confused about how mobile apps work for some reason"](https://x.com/theo/status/2073518482122215634) (**62K views, 105 replies**). The dominant theory in the replies is training-data scarcity — [there just isn't much good open-source iOS code compared to Android](https://x.com/AntarikshC/status/2073621097581584644) — with corroboration from [SwiftUI users](https://x.com/shaunralston/status/2073526965471244771) ("amazing, but suboptimal with Swift + SwiftUI"), a claim that [macOS Swift is somehow fine](https://x.com/graphicious/status/2073527556435849387), plenty of ["opposite experience here"](https://x.com/xfollow592743/status/2073526261654114666) dissent, and the summary nobody asked for: ["fable's just an android developer, dw about it."](https://x.com/ldo_dev/status/2073520630490599651) Note it echoes Armin's off-distribution thesis from a different angle: the models are increasingly *shaped* by what their training saw most.

## Agentic Retrieval Grows a Harness

Jerry Liu announced a [**Retrieval Harness** for agentic retrieval](https://x.com/jerryjliu0/status/2073407100642852871): a persistent pipeline that connects to a data source, indexes and *updates* a large knowledge base, and exposes it to any agent as filesystem-shaped tools — semantic/keyword search, regex grep, file find, read. The reference implementation is [legal-kb](https://github.com/run-llama/legal-kb) (project-scoped KBs, visual citations in responses, version control for the knowledge base itself), built on LlamaIndex's Index v2.

The framing that stuck, [per the replies](https://x.com/pinkman_ai/status/2073407360286994651): "hybrid search across the whole index with read, grep, and find is basically giving an agent the same tools a developer would use on a local filesystem." That's the same design conclusion Claude Code reached from the code side — agents navigate with search-and-read loops, not top-k similarity dumps — now packaged for documents. It also completes an arc Jerry flagged himself this week: three years after his "Advanced RAG" talk at the first AI Engineer conference, the workarounds have consolidated into harness-level abstractions. (Launch hiccup: [the repo wasn't public for the first few hours](https://x.com/jerryjliu0/status/2073455768863453593) — "sorry about the above — just made it public!")

## Also Worth a Look

- **Scaling-laws lore** — Sander Dieleman (DeepMind), RT'd by swyx: ["the original scaling laws were wrong due to a bug, which probably led to a lot of wasted compute on oversized undertrained models 🫣 (and that was before we even started properly accounting for inference cost!)"](https://x.com/sedielem/status/2073446445307617366) — the Kaplan-vs-Chinchilla discrepancy, now casually confirmed as a bug story.
- **Video: 60+ hardest 3D prompts vs Fable** — Peter Gostev [spent serious time throwing the hardest 3D prompts at Fable](https://x.com/petergostev/status/2073047118801993910); the result is a [45-minute video with 60+ demos](https://www.youtube.com/watch?v=rTc2_-1KuRE), prompts included. RT'd by Karpathy.
- **AIE World's Fair, the recap wave** — Yohei Nakajima's [notes from a week at the conference](https://x.com/yoheinakajima/status/2073446817174520227): enterprises quietly routing low-level tasks to open-source models, and the year's theme summarized as the transition "from agents to multi-agent systems."
- **Tokenmaxxing → valuemaxxing** — steipete's codex.bar [will show exactly when your rate-limit resets expire](https://x.com/steipete/status/2073482942513565713), the strikethrough in "̶t̶o̶k̶e̶n̶m̶a̶x̶x̶i̶n̶g̶ valuemaxxing" doing the cultural commentary. Meanwhile a reader's pattern worth copying: [let Fable run steipete's `autoreview` skill after each iteration via AGENTS.md](https://x.com/theguti/status/2073435199526895940) — "token hungry but OpenAI subscription is very generous."
- **The pi edit-tool folk remedies** — from Armin's replies, the tricks people use to tame Anthropic models on foreign harnesses: [capitalize the first letter of your tool names](https://x.com/BohuTANG/status/2073580252622966799) (claimed "massive harness performance gains"), or swap in a Claude-Code-lookalike edit tool. The fact that these exist at all is the story.
