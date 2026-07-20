---
title: "Fable Disproves the Jacobian Conjecture, Claude Code's 80% System-Prompt Diet & the HAR-File Trick"
date: "2026-07-20"
summary: "The story of the day is a genuine math bombshell: Harvard number theorist Levent Alpöge posted a **counterexample to the Jacobian conjecture** — a famous open problem since 1939 — crediting \"my close friend fable for working during the World Cup final.\" The three-polynomial map is small enough that replies verified it (and generalized it to an infinite family) within hours, while Daniel Litt's *how was it found?* went unanswered. Meanwhile Anthropic's Thariq reveals Claude Code's system prompt was **cut by 80%** because smarter models are constrained by examples, in a Peter Yang episode covering /loop, /goal, and workflows; Dax popularizes a trick where agents record browser traffic to a **HAR file and derive a native API client** for any website; Jerry Liu argues the future is task-specific harnesses and ships grep/find/read primitives in LlamaParse; and both Armin Ronacher and Simon Willison independently notice their feeds filling with suspiciously coordinated content."
tags:
  - "Math Breakthrough: Fable vs. the Jacobian Conjecture"
  - Agentic Coding & Claude Code
  - OpenAI & ChatGPT Work
  - Other Notes
---

# AI Roundup — July 20, 2026

## Math Breakthrough: Fable vs. the Jacobian Conjecture

### "hello there the jacobian conjecture is false"

The post everyone in this roundup's orbit retweeted (Armin Ronacher, Thariq, Peter Steinberger all boosted it): Harvard number theorist **Levent Alpöge** [announced a counterexample to the Jacobian conjecture](https://x.com/__alpoge__/status/2079028340955197566) (1.4M views, 3.9k likes in ~10 hours), thanking "my close friend akhil for asking about it and my other close friend **fable** for working during the world cup final."

The counterexample itself fits in a tweet: a polynomial map ℂ³→ℂ³ with constant Jacobian determinant −2 that sends three distinct points to the same point — directly violating the conjecture (open since 1939) that constant nonzero Jacobian implies injectivity. That's what makes this credible in a way most "AI solved math" claims aren't: **anyone can verify a counterexample by hand**, and the replies did exactly that within hours. Highlights from the thread:

- Alpöge on why he braced before posting: the Jacobian conjecture "is like the **canonical crank graveyard**" ([reply](https://x.com/__alpoge__/status/2079029691638321188)) — a problem famous for attracting false proofs.
- One reply [generalized the counterexample to an infinite-dimensional family](https://x.com/Hayasi25252/status/2079091559942000743); another [proposed the hidden structure](https://x.com/ted80044/status/2079092531480953203) — the map is generically 3-to-1 via a cubic covering polynomialized by pole-zero cancellation at infinity.
- Fields-medal-adjacent skepticism is notably absent, but process questions abound: Daniel Litt asked ["Any info on how it was found?"](https://x.com/littmath/status/2079060769539334474) (unanswered so far), and [others](https://x.com/doomslide/status/2079059643041460261) want the transcript/prompts. One [asked whether it also falsifies the Dixmier and Poisson conjectures](https://x.com/BrunsJulian1541/status/2079073462560133469), which are known to follow from Jacobian.
- The meta-comedy of models reacting to it: "Fable is [losing its mind about this in CoT](https://x.com/_lyraaaa_/status/2079062569583587666)", "Claude is [freaking out and verifying the math in 5 different ways](https://x.com/Aizkmusic/status/2079075529760616567) because it can't believe it", and Wikipedia's Jacobian conjecture page was [updated within the hour](https://x.com/RyanBMoffat/status/2079052207610327141).
- If it holds up, this may be the first time a frontier model finds a counterexample to a major named open problem — "[Might be the first time a model makes headlines for a novel solution if true](https://x.com/washington90414/status/2079062328985682027)."

Open questions worth watching: whether the result was pure model reasoning or a model-guided computational search ([Rado Kirov's question](https://x.com/radokirov/status/2079059671873474854) — the coefficients are small enough that "why did no one just search?" is fair), and whether Alpöge publishes the session.

## Agentic Coding & Claude Code

### Thariq: Claude Code's system prompt was cut by 80%

Anthropic's Thariq appeared on [Peter Yang's podcast](https://x.com/petergyang/status/2078846124828545179) ([episode on YouTube](https://youtu.be/aVO6E181cNU)) covering how `/loop`, `/goal`, and workflows differ, live video-editing with Claude, and planning with HTML artifacts. The headline claim: **"We cut Claude Code's system prompt by 80%. As models have gotten smarter, they need less direction, fewer constraints, and fewer examples."** Examples in particular constrain newer models — "if you remove the examples, it can actually be more free-form" — so the advice is to *trim your context when a new model ships*. Also quotable: "One failure mode I see is that people glaze over AI's plans. You want to make sure it's something you read."

Thariq [says a written post is coming](https://x.com/trq212/status/2078901672441790818) (129k views) on how to apply the same trimming to your own skills and system prompts. The replies are full of confirmation from practitioners: CLAUDE.md files that only ever grow with "half the lines compensating for a model two generations old," and observations that Opus 4.8/Sonnet 5 overfit to even a single example.

### The HAR-file trick: record traffic once, derive a client forever

Dax ([@thdxr](https://x.com/thdxr/status/2078727284865827140), 410k views) popularized a trick he credits to James Long: instead of having an agent drive a browser every time, ask it to **record the network requests into a HAR file, then derive a native API client** from the capture — far more efficient than repeated browser automation. His demo: an Uber Eats CLI. The replies are a fun tour of the pattern's ecosystem — [cli-printer](https://github.com/mvanhorn/cli-printer) ("prints" a CLI for any site), someone doing the same via a [Caido](https://x.com/BanuelosLe65169/status/2078947915700281703) HTTP-proxy skill, a Chick-fil-A CLI, and the recurring practical question of how to handle cookies/auth refresh.

### Jerry Liu: general harnesses are a commodity, task-specific harnesses aren't

Two related posts from Jerry Liu: he [argues](https://x.com/jerryjliu0/status/2078893555330986008) there's little value left in building custom *general* harnesses, but "tremendous value in creating custom **task-specific harnesses**" where you encode domain priors to hit accuracy/cost/latency constraints. And LlamaParse is [shipping coding-agent retrieval primitives for documents](https://x.com/jerryjliu0/status/2078887562681430221): hybrid search (grep + vector), file grep with regex, `find`, and `sed`-style read — explicitly converging on the same primitives coding agents already use on repos, now aimed at unstructured docs.

### Codex agents talking to each other across threads

A tip circulating via LLMJunky: Codex threads working in the same codebase can be [given each other's session references](https://x.com/LLMJunky/status/2078624104949952680) and will "literally chat back and forth, wait for one another to finish, provide updates, request updates." Related and clever: you can [run Codex app-server in the cloud](https://x.com/BenjaminBadejo/status/2079026062391189666) (e.g. on Render) and put a "Sign in with ChatGPT" button in your product — users pay for the AI features with their existing flat-rate ChatGPT/Codex subscription, so the developer has no API cost.

## OpenAI & ChatGPT Work

Thibault Sottiaux's ChatGPT Work push continues from yesterday. The pitch is consolidating: [creating and hosting sites, managing your email, summarizing document mountains, producing docs/sheets/slides](https://x.com/thsottiaux/status/2078697631019303273), included in Plus/Pro/Business/Enterprise. His own workflow is telling — ["My job is basically delegating to ChatGPT Work now. Can't stop using dictation"](https://x.com/thsottiaux/status/2078697741455356367), including [dictating a request to triage his own Twitter DMs](https://x.com/thsottiaux/status/2078702412085498087) to assemble the 50–100-person early-access group he [called for](https://x.com/thsottiaux/status/2078642674572419435).

## Other Notes

- **Is the timeline astroturfed?** Two of the most level-headed accounts on the list asked the same question independently: Armin Ronacher noticed his feed turning [aggressively "pro data center"](https://x.com/mitsuhiko/status/2078851925919814017) over two days ("Is this organic? Where did it come from?"), and Simon Willison [asked what motivates the bot reply-guy accounts](https://x.com/simonw/status/2078906303674773577) that grow followers by mass-replying. Related: Ronacher was surprised his [Twitter analytics show a heavily skewed follower base](https://x.com/mitsuhiko/status/2078906990630195222).
- **Elon buys ~$50B of compute.** LLMJunky's [read](https://x.com/LLMJunky/status/2079036222530331113): hardware ownership is becoming the moat — "buy while you can."
- **Losing your own voice.** Jerry Liu [admits](https://x.com/jerryjliu0/status/2078881989785264368) he's "starting to have trouble understanding and articulating what AI generates" — a quiet but widely-felt confession, echoed in replies elsewhere about AI-generated code and prose outpacing human comprehension.
- **AI-hardware silliness watch:** discontinued OpenAI Micro keyboards are [selling for ~$1000 on eBay](https://x.com/LLMJunky/status/2078730044638220354), and even keyboard-agnostic swyx [was charmed](https://x.com/swyx/status/2079061713048199625) by the custom-keyboard scene.
