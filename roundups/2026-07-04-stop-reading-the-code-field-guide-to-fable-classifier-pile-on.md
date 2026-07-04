---
title: "Stop Reading the Code, Thariq's Field Guide to Fable & Sholto's Classifier Pile-On"
date: "2026-07-04"
summary: "Theo lit the July 4th fuse with *\"How much better do the models have to get before you'll stop reading the code?\"* (**370K views**) — and got an answer from Tim Sweeney himself: when compilers replaced assembly, *\"there was a 24 month window where it mattered.\"* Meanwhile the how-to-actually-use-Fable canon thickened: Thariq's **A Field Guide to Fable: Finding Your Unknowns** did **1.2M views** arguing the model is now bottlenecked by *your* unknowns, not its own, while Simon Willison's counterintuitive tip — tell Fable to *\"use your judgement\"* and pick its own cheaper subagents — racked up 227K views, and LLMJunky got **40,000 LOC out of a single $20 Pro session** by having Fable plan and orchestrate GPT-5.5 workers in parallel worktrees. On the feedback side, Sholto Douglas asked what to improve and got a pile-on about safety classifiers blocking biology, medicine, and even *\"center a div\"* — plus a controlled experiment showing Fable delivering its step-function quality at **$268 vs Codex's $11** on the same task. Also: Armin Ronacher chases phantom tool parameters that only appear in resumed sessions, Matt Pocock declares skill evals *\"unbelievably hard,\"* Steinberger gives his agent its own Mac VM, and Lee Robinson asks why no model can write."
tags:
  - The "Stop Reading the Code" Fight
  - Field Guide to Fable & the Orchestration Meta
  - Sholto's Feedback Thread & the Classifier Pile-On
  - Harness Corner: Phantom Tool Params & Skill Evals
  - Agents Get Their Own Computers
  - The Creative Writing Gap
  - Also Worth a Look
---

# AI Roundup — July 4, 2026

## The "Stop Reading the Code" Fight

Theo spent the night of the 4th deliberately starting a fire: [**"How much better do the models have to get before you'll stop reading the code?"**](https://x.com/theo/status/2073219809790263786) (**370K views, 653 replies**), followed by ["At this point I'm genuinely convinced most of you would have kept reading the assembly code after C got popular"](https://x.com/theo/status/2073235998750933273) and the confession that ["I'll be honest, I barely even read the code back when I wrote it by hand..."](https://x.com/theo/status/2073227226234114310)

The replies are the best part:

- **Tim Sweeney** (Epic Games) gave the historical anchor: ["Moving from assembly language to compilers, there was a 24 month window where it mattered."](https://x.com/TimSweeneyEpic/status/2073286447453311252) Theo: "This checks out."
- **Glauber Costa** (Turso) took the other side: ["for database or OS code, I will expect that never. A lot of us still routinely read assembly code..."](https://x.com/glcst/status/2073233073856979334)
- **David Cramer** (Sentry) set the bar at ["two orders of magnitude with actual real verification capabilities"](https://x.com/zeeg/status/2073220114410074144) — to which Theo shot back "Bold coming from someone whose code is gpt-3.5 level."
- A recurring pragmatist position from the replies: read only what breaks — "i stopped reading most of it two models ago. now i read the parts that broke. its the best way to learn what the model can and can't do yet."

Theo says [a video is coming](https://x.com/theo/status/2073291309423673462) on the "you should still read your code" debate that will "piss both sides off" — a direct sequel to Geoffrey Litt's "understanding is the new bottleneck" thread from AIE that dominated Thursday's discourse.

## Field Guide to Fable & the Orchestration Meta

Three days into the Fable re-release, the "how to actually drive this thing" genre produced its biggest hits yet.

**Thariq's Field Guide.** Anthropic's Thariq (Claude Code team) published [**A Field Guide to Fable: Finding Your Unknowns**](https://x.com/trq212/status/2073100352921215386) (**1.2M views, ~5K likes**) — an X article arguing "the map is not the territory": Fable is the first model where the quality of your output is bottlenecked by *your own unknowns*, so the job is discovering what you don't know before prompting. Techniques include having Fable quiz you before merging and using [HTML artifacts to surface unknowns](https://thariqs.github.io/html-effectiveness/unknowns/) ([examples thread](https://x.com/trq212/status/2073101078145724589)). He credits Geoffrey Litt's AIE discussion for the quiz idea — this is the practitioner's companion to Litt's "understanding is the new bottleneck" thesis. Notable pushback in the replies: multiple people asking Anthropic to publish these on an agent-accessible site instead of X articles, since you can't feed an X article to Claude.

**Simon's "use your judgement" tip.** Simon Willison shared [the most interesting Fable tip he's heard](https://x.com/simonw/status/2073117641020215566) (**227K views**): tell it *"For all coding tasks use your judgement to decide an appropriate lower power model and run that in a subagent"* — and let Fable be the router. More notes [on his blog](https://simonwillison.net/2026/Jul/3/judgement/). The replies became a mini-survey of delegation patterns:

- [Dave Thomas Jr](https://x.com/davethomasjnr/status/2073185624593457405): "Fable dispatched Sonnet 5 but then didn't like the result so sent it off again with a bit of a slap on the wrist."
- [Morgan Linton](https://x.com/morganlinton/status/2073179343199838638) builds the model *and effort level* selection into the plan itself, with pre-populated model-switch commands.
- The counter-experience from [Dominik Lukes](https://x.com/techczech/status/2073327084571619732): Fable let Sonnet 5 loose for 6 hours and "produced garbage" — it worked only after explicit instructions (plan better first, Opus for code, Fable for judgement).
- The inverse pattern also has fans: [use Opus/Sonnet for everything and spin up a Fable subagent only for architectural specs](https://x.com/ProdbyKissFist/status/2073238929969692680).

**40K LOC on a $20 plan.** LLMJunky posted [the most concrete orchestration receipt of the week](https://x.com/LLMJunky/status/2073163605323710846): Fable proposed ten improvements to his StarSwap app, he picked seven, had Fable write independent plans, delegate each to GPT-5.5 High via Codex Exec in its own worktree, review/fix the results, and merge — **40,000 LOC written using 96% of a single 5-hour session on the Claude Pro $20 plan**. Best reply, on the "working out of the box" claim: "The metric I'd watch the next morning: how many files you can still explain... Parallel worktrees are magic until merge debt shows up." LLMJunky: ["whats regression? /s"](https://x.com/LLMJunky/status/2073188754831876492)

**Theo's effort-level guide.** Theo published [a one-image guide to maximizing Fable usage](https://x.com/theo/status/2073312248710496421) whose effort-tier taxonomy tops out at "mental illness" (xhigh/max users happily self-identified in the replies). Consensus in the thread: medium/high is the sweet spot, xhigh+ is for benchmarks, and the pros pair Fable-as-planner with Codex as the workhorse — ["Plan and review with Fable, give it tools to drive Codex. 1% used per hour."](https://x.com/kcosr/status/2073330331604721754) One cautionary tale: ["fable setting off 19 fables in a swarm ate a full 5 hr max 5x limit in under 10 minutes."](https://x.com/AndreBuckingham/status/2073339680343339418)

**Matt Pocock's taxonomy crisis.** Related: Matt Pocock asked [how anyone categorizes models now](https://x.com/mattpocockuk/status/2072996604018143557) — "I used to put models in the bucket of Opus-like, Sonnet-like, or Haiku-like. But now we have Fable. Now Sonnet 5 behaves like Opus." Best answers: ["Fable is Opus-like, Opus is Sonnet-like, Sonnet is Sonnet-like"](https://x.com/spion/status/2073132951101968549), and the pragmatic ["I treat different effort levels as different models"](https://x.com/CzezaryG/status/2073011293250810056). Matt's own follow-up: effort levels make everything harder, and on models vs harness he calls it [50/50](https://x.com/mattpocockuk/status/2073345532282446059).

## Sholto's Feedback Thread & the Classifier Pile-On

Anthropic's Sholto Douglas [asked for feedback](https://x.com/_sholtodouglas/status/2073116800754287067) post-Fable-jump: "what axes do you feel like we've made great progress on, and what do we need to improve on?" The thread turned into a remarkably consistent bug report, and the dominant axis wasn't capability — it was the **safety classifiers**:

- [xjdr](https://x.com/_xjdr/status/2073289475204211183): "the risk classifier is making it impossible to use... even basic 'center a div in this react codebase' [fails] on safety grounds... *any* indication as to why so I can adapt my prompt" would help.
- A parade of scientists: near-100% refusals on [neuroscience](https://x.com/DavidBeniaguev/status/2073322618858475870), [computational neuroscience](https://x.com/RCorwhatever/status/2073139815512486209), [aging research](https://x.com/Aging_Scientist/status/2073292390446907449) ("What good is a model that can't do biology?"), a genealogist [blocked from helping an adoptee find her biological parents](https://x.com/MarjovanLier/status/2073119640578900272), and one user whose *résumé* [cascades failures down to Sonnet because "biosecurity" is in his job title](https://x.com/rahulvrane/status/2073271896528007418).
- The other big axes: keep-it-on-subscriptions pleas (a proposed $500 tier came up twice), **writing quality** ("incredible at math, physics, finance, coding... terrible at writing"), vision as the verification bottleneck, and needle-in-haystack web research where GPT-5.5 Pro still wins.

Buried in the replies, the best data point of the day — [Shrivu Shankar's controlled /goal+ultracode experiment](https://x.com/ShrivuShankar/status/2073145132007018508), one hard task (replicate an image as a 3D scene) across three stacks:

| Stack | Time | Cost | Result |
|---|---|---|---|
| Codex, GPT-5.5 xhigh | 19m 31s | $11.09 | OK-ish |
| Claude Code, Opus 4.8 ultracode | 1h 48m | $62.64 | broken |
| Claude Code, Fable 5 ultracode | 4h 23m | $268.18 | "not bad, but still far from the goal" |

His conclusion: Fable is still a step function above the other two, but it's "very eager to fan-out to more fables and $$$" — which reinforces the value argument for Codex and explains why the orchestration meta above exists at all.

Honorable mention: Danielle Fong is building ["DJ Claude"](https://x.com/DanielleFong/status/2073138310298718367) — Opus 4.8 fast-mode execution plus Fable with variable thinking, in tmux, with **the faders on her DJ deck controlling the thinking level**. "Perfect kind of 4th of July weekend project."

## Harness Corner: Phantom Tool Params & Skill Evals

**Armin's phantom parameters.** Armin Ronacher has [a genuine mystery on his hands](https://x.com/mitsuhiko/status/2073176773894840377): a handful of pi users report Anthropic models injecting *extra tool parameters* into edit calls, and he can't reproduce it — except that [a user-supplied session, when continued, does show it](https://x.com/mitsuhiko/status/2073182739180712415). Replies point at context-prefix effects in resumed sessions; it's [an open issue](https://github.com/earendil-works/pi/issues/6278) if you have ideas. This follows his AIE-prompted post on [pi's intentionally-strict edit tool](https://x.com/mitsuhiko/status/2072955230862332106) and the related observation that ["Fable really likes its comments. Damn."](https://x.com/mitsuhiko/status/2073053722708410729)

**Skill evals are unbelievably hard.** Matt Pocock, replying to the Effect team: ["Evals on skills are hard" is the understatement of the year](https://x.com/mattpocockuk/status/2073140298671091947). His escalation ladder: ["Evals on a classifier is trivial. Evals on a coding agent is extremely hard. Evals on a harness-agnostic skill is unbelievably hard"](https://x.com/mattpocockuk/status/2073142499204366474) — and it's [a data problem, not a token problem](https://x.com/mattpocockuk/status/2073141475454390440). David Cramer pushed back (no harder than any high-value eval). Two useful concretes from the thread: David K's baseline strategy ("does the skill produce better results vs no skill at all, per rubric?") and [Will Hampson actually benchmarking the 57K-star ponytail plugin on DeepSWE](https://x.com/hampsonw/status/2073154414840516788): double the baseline's solved problems, 26% fewer LOC, 12% fewer tokens, 10% cheaper, 7% faster.

## Agents Get Their Own Computers

Peter Steinberger: ["Give your agent its own computer to REALLY end to end test stuff"](https://x.com/steipete/status/2073214429655883814) (**136K views**) — a macOS VM via [crabbox.sh](https://crabbox.sh) (which has a Parallels backend), with the killer feature in all caps: ["IT WILL CLICK ON ALL THE ANNOYING MACOS ALERTS FOR YOU."](https://x.com/steipete/status/2073216049567449444) For mobile, he says [Codex + computer use "works amazing."](https://x.com/steipete/status/2073221331139838119) The replies are full of people converging on the same pattern — VMs as ephemeral, security-isolated E2E environments, and one user's ["minions": one pulls CI, the rest test it with computer-use end-to-end](https://x.com/xlcizor/status/2073216108778471760).

In the same spirit, LLMJunky [moved his Codex Plugin Marketplace off Vercel onto his Hetzner box](https://x.com/LLMJunky/status/2073188262462542026) by just asking Codex: "Migration, DNS, auto-deploy, SSL, traefik, etc. Codex deftly handled it all via SSH and Chrome in 12 minutes with minimal guidance."

## The Creative Writing Gap

Lee Robinson — now doing ML at Cursor — asked the weekend's best non-coding question: [Are current LLMs incompatible with great creative writing?](https://x.com/leerob/status/2073232794868756851) Even council-of-models grading ten drafts yields "lowest common denominator slop," because coding has verifiable rewards and writing doesn't. His darker follow-up: ["You can't help but wonder if we already have the best writer of all time sitting in the weights, but it just gets fried with RL and inference optimizations."](https://x.com/leerob/status/2073238336630612050)

The standout reply came from [Karina Nguyen](https://x.com/karinanguyen/status/2073248122307002413) (ex-OpenAI/Anthropic): non-fiction is fixable — the gap comes from *conflicting RL objectives*, since chat-pleasant traits fight the precision/density/restraint good technical writing needs (they fixed this for a GPT-4o version). True creative writing is a different problem entirely: coherent worlds and emotional arcs over hundreds of pages, with no training data capturing the *process* ("hard to simulate Pixar's braintrust process for AI") and no lab investing because it's unmeasurable and low-value economically.

Jerry Liu offered the practical 70% solution: [a writing-style skill hill-climbed against your real writing samples](https://x.com/jerryjliu0/status/2073256229866963361) — which fixes style but not "the inherent ability to articulate clear, differentiated insights, which is probably an inherent posttraining problem."

## Also Worth a Look

- **[pxpipe](https://github.com/teamchong/pxpipe)** — ~60% Fable cost cut by "transparently turning the code into an image and having the model OCR it." Steipete, retweeting: ["WILD idea. also hilarious."](https://x.com/MiTypeScript/status/2073068605944610898)
- **swyx on tools for thought** — ["'tools for thought' people spent like a decade making cool pretty demos with canvases and then got completely mogged by low contrast poorly designed CLIs just winning because they do commodity thinking for you"](https://x.com/swyx/status/2073220591684096087). Sharpest reply: "places to think vs things that think."
- **AIE World's Fair session index** — individual talk videos aren't out yet, but there's a [timestamped index of all three days of main-stage recordings](https://wfsf.gopicreations.com/) ([via](https://x.com/gopikori/status/2073157099568378068)), so you can jump straight to any session.
- **Video: Fable 5 UltraCode game playthrough** — [full playthrough of a game where every asset was generated by Fable](https://x.com/bijanbowen/status/2073188980384784696), from the reviewer who also made his own one-image Fable usage guide.
- **The roast meme** — Theo [had Fable roast him based on an old codebase](https://x.com/theo/status/2073235998750933273) ("It kinda cooked me"), and Steinberger escalated: ["I fed Fable 80,000 of my tweets so it could roast me even more. 💀"](https://x.com/steipete/status/2073295890857758810)
- **Open-source realtime voice** — Thomas Wolf (Hugging Face): ["Most people should probably update their priors on the state of open-source speech-to-speech"](https://x.com/Thom_Wolf/status/2072825424800006350) — a fully open-source realtime voice demo built with Cerebras.
- **Robert Miles' bar for software** — ["If your software product doesn't have a text box where I can write a feature request and have it show up in a few minutes, I'm going to constantly be tempted to get Claude to replace you"](https://x.com/robertskmiles/status/2073225686404489382) (RT'd by steipete).
