---
title: "Is Grep All You Need, Lossless Goes Tree-Shaped & Pocock Pitches Flag-First Agents"
date: "2026-05-18"
summary: "A PwC paper titled **\"Is Grep All You Need? How Agent Harnesses Reshape Agentic Search\"** ricocheted around AI-twitter via [Jerry Liu](https://x.com/jerryjliu0/status/2056077617355522534) (6.4k views): the authors tested Claude Code, Codex and an in-house harness with both vector search and grep, and **grep generally beat semantic search on accuracy**. Liu's pushback — that the corpus is chat history, not 10-Ks — drew the actual interesting fight in the replies, including Randall Bennett's *\"vector search is probably a mistake for agents, but not for humans\"*. Meanwhile **Matt Pocock asked twitter whether anyone is doing *feature flag development with agents*** (17k views, 194 likes) — flags-on-main as the new PR model — and the replies surfaced the real failure mode: *\"if the agent has write access to the flag system, 'unflag to selected users' becomes 'unflag to everyone'\"*. **Armin Ronacher fed his own [pi.dev](https://pi.dev) coding sessions into antirez's ds4 imatrix machinery as calibration data for a DeepSeek V4 Flash Q2 quant** — personal distillation as an escape hatch from the SOTA-subs circus — though he reported *\"cannot tell or measure a difference\"* the next morning. Peter Steinberger continued his Codex evangelism with a thread on **lossless-claw 0.10.0**, a tree-structured compaction layer giving OpenClaw an effectively *\"infinite\"* context window (139k views, 1.1k likes). [Theo asked *\"why shouldn't I make a new cloud?\"*](https://x.com/theo/status/2056148589102182653) (128k views) and answered his own thread: *\"It would include everything you need and be way worse than every other option.\"* swyx called out **influence-operator accounts reposting the entire AIE back catalogue daily with brainrot hype titles**, no credit to speakers; Thariq's **\"HTML continues to be undefeated\"** kept compounding (160k views, 1.4k likes); and Project CETI's GAN-decoded sperm-whale **diphthongs** sneaked into the feed via LLMJunky."
tags:
  - Agentic Coding & Agent Harnesses
  - Memory & Context
  - Local Models & Personalisation
  - Industry & Misc
---

# AI Roundup — May 18, 2026

## Agentic Coding & Agent Harnesses

### "Is Grep All You Need?" — PwC paper says yes, Jerry Liu says *for chat history*

[Jerry Liu's thread](https://x.com/jerryjliu0/status/2056077617355522534) (6.4k views, 62 likes) surfaces the most interesting agent-retrieval paper in months: **Sen et al. (PwC), "Is Grep All You Need? How Agent Harnesses Reshape Agentic Search"** ([arxiv.org/pdf/2605.15184](https://arxiv.org/pdf/2605.15184)). The authors test three harnesses — an in-house one, Claude Code, and Codex — equipping each with both vector search and grep, and find **grep generally yields higher accuracy than semantic search**. Liu doesn't argue the result, he argues the corpus:

> The main gap of the paper is that it tests retrieval over conversational memory, not over a real-world corpus of enterprise documents. Standard enterprise RAG setups involve asking complex questions over a static document corpus (e.g. 10-Ks, legal contracts, SOPs). The corpus here is per-user chat history, which is quite a different document distribution.
>
> I do think that evolving agentic harnesses simplify the problem of retrieval — hence the popularity with file sandboxes and a vector db is "just a database" — but IMO there's still more work to be done here.

The replies are where the real fight is. [Randall Bennett](https://x.com/randallb/status/2056078577192313256) goes further than the paper:

> The corpus size you'd need for grep to be ineffective would mean that summarizing docs and just giving keywords into smaller folders w/ links to the bigger topics would probably yield the same results imo. **Vector search is probably a mistake for agents, but not for humans.**

[Michał Piszczek's one-liner](https://x.com/cdiamond/status/2056148969701380454) frames the corpus debate cleanly: *"grep on chat history is tidy. grep on a 200-page contract with footnotes and redlines is where it bleeds."* [Dominik Lukes](https://x.com/techczech/status/2056100321827369102) raises the point most coders feel in their fingertips: *"It is amazing how often grep works — especially when the agent runs a lot of queries in a way a human routinely wouldn't."* [AI Deeply](https://x.com/AiDeeply/status/2056199801297916079) flips the framing:

> Intuition: if grep is better that just means the alternative is worse, I.e. an unsolved problem. Grep is like a benchmark. It's not intrinsically better.

[Mert](https://x.com/MertLovesAI/status/2056088166256267455) puts the harness-first reading the most aggressively: *"Primitive tools crush fancy embeddings when the harness is smart. Most coding agent failures aren't model failures. They are harness failures. This paper proves it at the retrieval layer too."*

Worth pairing with Thariq's **"HTML continues to be undefeated"** [post](https://x.com/trq212/status/2055903660476129723) (160k views, 1.4k likes, 38 retweets, 111 replies) from the same morning — Karpathy's *"structure your response as HTML"* trick has now compounded into the Anthropic-internal vernacular for output, the way grep is becoming the agent-internal vernacular for retrieval. Both are *primitive-format wins primitive-format* arguments against semantic abstraction.

### Matt Pocock: feature-flag-first development, with agents

[Pocock's morning thread](https://x.com/mattpocockuk/status/2056263621294866499) (17.3k views, 194 likes, 54 replies) reframes flags-on-main as a replacement for the PR model when an agent is driving:

> Is anyone doing feature flag development with agents?
> Not tried it, but in theory feature flagging is an alternative model to PR's to getting work on main.
> 1. Put it on main, disabled by a flag
> 2. Deploy with the rest of the system
> 3. Unflag to selected users early
> 4. Fix bugs for those users
> 5. Unflag to more users
> 6. Repeat until shipped
> Feels like a perfect strategy to pair with agents

The most useful reply is [Mehdi Belckadi's](https://x.com/MBelckadi/status/2056297039445839925) — and Pocock's same-minute confirmation:

> Yes and the failure mode is interesting. If the agent has write access to the flag system, step 3 "unflag to selected users" becomes "unflag to everyone" if the task description is ambiguous. Feature flags are a great blast radius limiter for humans. For agents you need the flag system itself to have scope constraints on what the agent can toggle.

> *"Yeah I personally think the toggle should be HITL only."* — [@mattpocockuk](https://x.com/mattpocockuk/status/2056297309277716794)

[Pedro Proença](https://x.com/ThePedroProenca/status/2056276747474125169) adds the corollary that turns flags into an actual safety mechanism instead of just an abstraction: *"It's worth making sure that the agent runs tests with and without the feature flag on. Otherwise it's a mess."* Pocock agrees: *"the feature flag is just runtime config for the tests."* The most concrete claim in the replies is [Oleg Yaroshevych's](https://x.com/yaroshevych/status/2056277097383919755):

> Good feature flag coverage enables auto research loop. I recently optimised a big data workflow (in UAT cloud environment) by letting agent to experiment with flags overnight. Execution time went from 50 min to 12 min.

[alper](https://x.com/alpervision/status/2056284107521311044) flags the inevitable pathology: *"flag config bloats fast if every agent commit gets its own switch. grouping by agent-session not by feature kept the boolean explosion contained."*

Pocock also [went live an hour later](https://x.com/mattpocockuk/status/2056309866801594424) (1.5k views) doing a full feature build using **/grill-with-docs → /handoff → /prototype** — his three skills, which he's been refining publicly all week.

### swyx: the AIE back catalogue is being reposted daily by hype accounts

[swyx's call-out](https://x.com/swyx/status/2056040043106521096) (40k views, 169 likes) names the meta-game now bleeding into agent-content distribution:

> We do not post AIE videos with bullshit brainrot hype lingo, and this is the consequence: the entire AIE back catalog is being reposted by "influence operators" almost daily, without credit to speakers like @trq212 or @aidotengineer.

The quoted French repost-post calls a Claude Code talk by Thariq *"a 2-HOUR complete training animated by the engineer who builds Claude Code — keep it preciously in Bookmark 🔖"* — exactly the brainrot lingo swyx refuses to use. [Alper Ferudun](https://x.com/AlperTheKing/status/2056049907731922969) makes the structural point: *"Canonical clip IDs, transcript hashes, speaker metadata, venue metadata, and rights labels are the missing layer. AI makes reposting cheap; attribution has to become machine-readable."* [ST-Automation](https://x.com/ST_Automation/status/2056285624852775335) frames the long tail: *"The brainrot reposts grab the first wave of views, but the original is the one that gets cited 18 months later when someone needs the actual answer. Citation outlasts repost every time."*

## Memory & Context

### Steipete: lossless-claw 0.10 — tree-structured compaction for "infinite" context

[Peter Steinberger's thread](https://x.com/steipete/status/2055658429645983756) (139k views, 1.1k likes, 50 retweets, 67 replies) on Saturday — still actively quoted into Sunday — explains the headline mental model:

> Lossless is a really interesting concept for OpenClaw to have an "infinite" context window/memory. It compacts conversations in blocks that the model can refer to, building a tree to look up past messages.

The 0.10.0 release notes (quoted in the thread):

> - 🧵 recall spans rotated conversation segments
> - 🧹 full-sweep compaction replaces cache-churning incrementals
> - 🧊 hot prompt caches stay protected under normal pressure
> - 🔁 bootstrap/restart transcript weirdness fixed

The interesting replies aren't the hype, they're the cost notes. [Manan](https://x.com/manan/status/2055689309139919181):

> One big thing about using this is that it can blow through LLM costs. Lossless context bloat was resulting in $70/mo Gemini Flash spend, created a script to purge it daily, cost is going to be $10-15 /mo.

[ClawPilot's reply](https://x.com/OpenClaw_Ping/status/2055699121307037722) names what's still missing — an operator-grade audit layer: *"compaction checkpoints, retrieval trace, 'why this span was loaded', and rollback when a bad summary poisons future runs. Does lossless-claw expose a tree/diff view so operators can audit memory drift?"* [Peter Persson](https://x.com/tramsrepus/status/2055941654151057604) hits the trust beat: *"I loved it, but after have spent the whole this week patching it ourself and reparing its crashed database, the confidence is low."*

This is the second week running where memory primitives are the lever everyone wants — pair with Bobby Shearer's [observation](https://x.com/Bobalouie41/status/2055864554786333038): *"Agents have been needing a Session Taxonomy for quite some time."*

### Steipete (cont.): "deslop your Claude code if you haven't yet switched to Codex"

[Steipete's other Saturday post](https://x.com/steipete/status/2055747016727167035) (145k views, 503 likes, 27 retweets, 27 replies) is the maximalist version of the Codex-resurgence narrative he's been pushing all week: *"deslop your Claude code if you haven't yet switched to Codex"*, in the context of his [clawpatch.ai](https://clawpatch.ai) review tool finding bugs in agent-laid-down slop. The single most lucid reply is from [Yichen](https://x.com/gweeyc/status/2055802066573090896):

> I review agent-generated code daily. The real value of running claude output through codex isn't that codex catches more bugs. Two different model families have different failure modes. The best way to validate AI written code is with a different AI. Tool switching is proxy for model diversity in your verification stack.

The dissent comes from [ByteCrafter](https://x.com/bytecrafter_1/status/2055803027932803302): *"codex is good but I keep hitting the same wall on longer python refactors. claude code with a tight set of skill files wins those for me. honestly the slop is mostly in my own skill files, swapping the agent doesn't help much there."* This is the most quietly important counter-position of the week — that the harness-and-skills layer is doing more work than the underlying agent brand.

## Local Models & Personalisation

### Mitsuhiko: feeding his own coding sessions into a DeepSeek V4 Flash Q2 quant

[Armin Ronacher's experiment](https://x.com/mitsuhiko/status/2056115705515225221) (17k views, 29 likes) is small in volume and big in idea:

> Small experiment: I'm using my Pi coding sessions as calibration data for a new DeepSeek V4 Flash Q2 quant, via antirez's ds4 imatrix machinery. Absolutely no expectations, but I'm curious to see what happens. Not sure how to eval though.

The pattern is what's interesting: **personal-trajectory data → personal quant** rather than personal fine-tune. The reply from [Gabriele Farei](https://x.com/jayfarei/status/2056135237495587197) names the broader pull: *"I am also working towards something in this direction to see if we can make traces useful for a form of personalised distillation of sorts on local small models (can't wait to leave the SOTA subs circus!)"* — i.e. the dream is that your own usage traces become the thing that makes a local model competitive for your specific workflow.

The follow-ups from Mitsuhiko himself are the punchline: *"current status: [drawing more power than the thing can charge](https://x.com/mitsuhiko/status/2056155315393929551)"* and then on Monday morning, [the verdict](https://x.com/mitsuhiko/status/2056266243263328585): *"Not sure what I expected, but I cannot tell or measure a difference."*

### Mitsuhiko: ".cmd files really should be banned on Windows"

[Same morning rant](https://x.com/mitsuhiko/status/2056090013205446724) (11k views, 57 likes) is short and load-bearing for agent-on-Windows safety:

> Fucking hell .cmd files really should be banned on Windows. People stop using this shit.

The followup from his own thread is the actual technical claim: *"To spawn .cmd files you need to through `cmd /c` which is a massive security hazard due to diverging escaping rules. Even clankers don't understand the nuances."* [kokice's reply](https://x.com/kokice7/status/2056097227651564012) names the safer pattern: *"Instead of spawning .cmd via cmd /c, spawn a real .exe and use array based argument passing, arguments never touch a shell parser, so the escaping problem disappears entirely."* For anyone shipping agentic tooling that ends up on Windows, this is the same class of trap as shell-quoting in `subprocess` — and Armin is right that the LLMs don't get the nuance.

## Industry & Misc

### Theo: "why shouldn't I make a new cloud?"

[Theo's late-night musing](https://x.com/theo/status/2056148589102182653) (128k views, 625 likes, 194 replies) is half-shitpost half-actual-question. The self-answer ([2056158186139488454](https://x.com/theo/status/2056158186139488454)) is the actually funny part: *"It would include everything you need and be way worse than every other option."* [Rhys Sullivan's pushback](https://x.com/RhysSullivan/status/2056161072030331329) — *"i dont really see what the unique angle you can have on it is, vercel and cf are both fine"* — got Theo's *"wanna bet?"*. Threads later: *"oh boy, my other unreleased projects are combining into this 🙃"* and *"I have been thinking about this for months. I have a pretty clear vision of what I want and I have zero faith in anyone else to build it. I really really don't want to do this…"* Read as: t3.gg actually shipping a PaaS is closer than it sounds.

### Project CETI: GANs find vowels (and diphthongs) in sperm whale clicks

The non-coding-AI story of the day, via [LLMJunky](https://x.com/LLMJunky/status/2056100839459111036) (2.1k views, 29 likes): a new Proceedings of the Royal Society paper from Project CETI says the GAN-surfaced patterns in sperm whale codas show **two intentional vowel sounds (a-codas and i-codas) and — the part nobody expected — diphthongs**, the only confirmed case outside humans. The paper lays out five features that mirror human phonology including coarticulation. The takeaway from LLMJunky:

> For decades we thought whale clicks were basically morse code. Turns out they *might* have been speaking the whole time. We just weren't slowing down enough to listen.

Paper: [royalsocietypublishing.org](https://royalsocietypublishing.org/) (linked from the thread).

### Simon Willison: tracking all the names OpenClaw has used since November

A pleasant little artefact from [Simon's PyCon US lightning talk](https://x.com/simonw/status/2055763661525024891): he wrote a script against the GitHub repo to track every rebrand. The list — Warelay → CLAWDIS → CLAWDBOT → Clawdbot → Moltbot → 🦞 OpenClaw — is the funniest single ASCII trail of the AI year, and the [notes are here](https://simonwillison.net/2026/May/16/openclaw-names/).

### Jerry Liu: Infinity-Parser2 tops the open-weight document-understanding leaderboard

Briefly, because it'll matter to the RAG crowd next week: [Jerry flagged](https://x.com/jerryjliu0/status/2055405690538070340) that **INF released Infinity-Parser2-Pro (35B) and Infinity-Parser2-Flash (2B)**, both topping LlamaIndex's HuggingFace document-understanding leaderboard. New open-weight SOTA for PDF extraction; relevant precisely because of the *"is grep all you need"* corpus-distribution argument above.
