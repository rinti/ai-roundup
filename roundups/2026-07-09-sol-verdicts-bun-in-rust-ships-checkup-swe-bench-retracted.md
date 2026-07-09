---
title: "The Sol Verdicts, Bun-in-Rust Finally Ships & OpenAI Retracts SWE-Bench Pro"
date: "2026-07-09"
summary: "The GPT-5.6 embargo fully lifts and the verdicts pour in: **Mitchell Hashimoto** makes Sol his default (\"a charismatic, efficient coworker you're jealous of\") while keeping Fable for targeted debug work, and the SST team describes an accidental A/B/A/B experiment — courtesy of the export-ban whiplash — that left them convinced 5.6 is simply better. **Jarred Sumner** publishes the long-awaited *Rewriting Bun in Rust* blog post (Theo prices the port at ~$165k in API tokens; Thariq says rewrites are now \"good, cheap and fast\"), **Boris Cherny** ships `/checkup` to spring-clean your Claude Code setup, and **OpenAI** retracts its own recommendation of SWE-Bench Pro after finding 30% of tasks broken — timing that replies note lands hours after Grok 4.5 topped the leaderboard. Plus: the OpenClaw Foundation, Cognition's SWE-1.7 at 1000 tok/s, and Armin Ronacher's question about whether RL ever punishes wasted tokens."
tags:
  - The Sol Verdicts
  - Bun in Rust Finally Ships
  - Claude Code & Anthropic Updates
  - Benchmarks & Token Economics
  - Grok 4.5 & the Catch-up Wave
  - Agentic Coding & Craft
  - Quick Hits
---

# AI Roundup — July 9, 2026

## The Sol Verdicts

Yesterday GPT-5.6 broke cover; today the considered reviews landed, and they're remarkably consistent: Sol is the new default for most work, Fable keeps a narrower crown.

- **Mitchell Hashimoto's review is the one to read** ([thread](https://x.com/mitchellh/status/2074862990214787301), ~730K views). After a month of early access, Sol is his default: faster, plans and judges as well as Fable, better overall work. His framing is already being quoted everywhere: "Sol is a charismatic, efficient, talented coworker you're jealous of. Fable is a genius recluse that is brilliant at its fixations but doesn't go out, doesn't date, and you don't want to hang out with them much." The carve-out: "Fable is undefeated at highly targeted debug/security/performance goals... I was never able to get Sol to push as hard in this category." Asked whether that means Fable wins on "pure determination" tasks, he [agreed](https://x.com/mitchellh/status/2074908427210694699). He didn't get access to the rumored Luna/Terra variants.

- **The SST team's accidental A/B/A/B experiment** ([Jay's thread](https://x.com/jayair/status/2074929399842078839), 500K views) is the most interesting methodology story of the launch. They tested early 5.6 for weeks, loved it; tried Fable and were unimpressed (with a self-aware caveat about first-model bias); then the regulatory mess took *both* models away. The tell: when Fable came back, the team was still depressed that 5.6 wasn't available — and when 5.6 returned "it's immediately clear that it's just way better than Fable." One reply captured the principle: the real test of a better model "isn't liking it in a demo, it's the specific feeling of being annoyed you have to go back to the other one."

- **Theo distilled the emerging consensus** into one image: "Fable is a 'wise owl' who is very thoughtful and very well spoken, GPT-5.6-Sol is like a rottweiler who will grab the problem by the throat and not let go until it is done" ([post](https://x.com/theo/status/2075075533604524068)). He also argues the surge of other labs "catching up to the previous generation" is [the best proof](https://x.com/theo/status/2074930791646380482) that Fable and 5.6 are genuinely next-generation, and is [collecting questions](https://x.com/theo/status/2075026851849007127) for a batch of 5.6 videos.

- **The backlash is part of the story too.** Multiple high-engagement replies to Jay's thread asked flat-out ["were you paid to write a post today?"](https://x.com/stepbystepnomad/status/2074951132649296006) — the uniformity of 5.6 praise is itself becoming a talking point. Meanwhile the most-liked anti-Fable reply was about safeguards, not capability: one user says he'll be ecstatic to never again read Fable's "safeguards flagged this message" interstitial on routine coding work ([post](https://x.com/paulhshort/status/2074954137448645081)).

- **Practical notes**: Peter Gostev [warns](https://x.com/petergostev/status/2074836917619675154) that 5.6-Sol in Codex will trivially blow through a Pro plan if you run everything at `/fast` with 10x subagents — xHigh is the sane default. And steipete says [5.6 on Cerebras is "insane, 10x speed"](https://x.com/steipete/status/2074913617636675939).

## Bun in Rust Finally Ships

The blog post the community has been memeing about for two months ("we got this before GTA 6") is finally live.

- **Jarred Sumner published "Rewriting Bun in Rust"** ([announcement](https://x.com/jarredsumner/status/2074973674332123157), 1.5M views; [blog post](https://bun.com/blog/bun-in-rust)). Beyond the writeup itself, the replies contain great process detail: Jarred ran the whole thing as "claude in a tmux session inside an ssh'd machine" ([reply](https://x.com/jarredsumner/status/2075063248110661900)); the interactive build-timeline visualizations in the post were generated by asking Claude to download all the BuildKite annotations and build a React visualizer ([reply](https://x.com/jarredsumner/status/2075137618023796982)); and the text is human-written but Claude-edited — his editing prompt was to have Claude web-search the topic and predict "what will the hacker news comments say? what should I change?" ([reply](https://x.com/jarredsumner/status/2075139102400475401)).

- **Theo priced the rewrite at ~$165k** if the tokens had been bought at API rates ([post](https://x.com/theo/status/2075006176845291977)) — replies split between "that's absurdly cheap for a full runtime port" and "imagine explaining $165k in 11 days to make a fast product slightly faster."

- **Thariq (Anthropic) drew the bigger lesson** ([post](https://x.com/trq212/status/2074993112217461020)): "this should be a huge update in your model of software engineering: rewrites can be good, cheap and fast." The best pushback in the replies: Bun is rewritable *because* every part of it is verifiable — "Most production code isn't built that way. The gap is architecture, not capability" ([reply](https://x.com/Ferbin08/status/2074997389442662756)). Skeptics also [note](https://x.com/N_LgMa/status/2075017960259751958) the Rust rewrite is still in canary months after the merge.

## Claude Code & Anthropic Updates

- **New in Claude Code: `/checkup`** ([Boris Cherny's announcement](https://x.com/bcherny/status/2074997570317779038), 363K views). A spring-cleaning command that removes unused skills/MCPs/plugins to save context, dedupes your local CLAUDE.md against the checked-in one, breaks a bloated root CLAUDE.md into nested CLAUDE.mds and skills, disables slow hooks, pre-approves frequently-denied read-only commands, and more — confirming with you before every change. Reception is warm ("I was doing this manually just the other day"), with some sharp edges in the replies: several people ask how it differs from `/doctor` (one reports `/checkup` [just calls `/doctor`](https://x.com/joedevon/status/2075094645697327239) for them), one notes the cleanup heuristic misses the worst offender — a skill that "runs every session and does nothing. still counts as used" ([reply](https://x.com/Bobbyfinu/status/2075026382342746486)) — and the perennial "any news on AGENTS.md support?" [goes unanswered](https://x.com/chaliy/status/2074999120905863549).

- **Claude Tag deep-dive webinar today**: Cat Wu is hosting a live walkthrough (10am PT) of the progression "from single-player Claude Code to multi-player Claude Tag," including how the memory and proactive-work systems actually work ([announcement](https://x.com/_catwu/status/2074925531519468012)). One grounded reply from a team that already ran Tag for a few weeks: it "churned through tokens and raced to our month max in less than 10 days" — variable cost is the adoption blocker ([reply](https://x.com/chrispricenz/status/2075105022426456155)).

## Benchmarks & Token Economics

- **OpenAI retracted its own recommendation of SWE-Bench Pro** ([announcement](https://x.com/OpenAI/status/2074972179385720836), 1.2M views): an audit found 30% of tasks broken, and it "no longer reliably measures frontier coding capability." Two reply threads dominate: the timing — ["Why did you only bring this up right after xAI showed their results?"](https://x.com/rudiranck/status/2074977542482661377) (Grok 4.5 had topped GPT-5.5 on it hours earlier) — and the deeper indictment: ["the fact that nobody caught 30% broken until now is the real story. how long was everyone just trusting the numbers"](https://x.com/AgentOrToy/status/2075017721633271890).

- **Armin Ronacher asks the question under all of this** ([post](https://x.com/mitsuhiko/status/2074986669229367549)): is the *cost* of solving a task considered during RL — are models punished for wasting tokens? He's reacting to Matei Zaharia's finding that the minimal Pi harness matched vendor harnesses' success rates with Opus and GPT-5.5 at half the cost. "Models are getting better in their native harnesses, but at what price." Florian Brand (who works on this) [confirms](https://x.com/xeophon/status/2075124292895810041) token efficiency is a factor in RL; a reply notes the Mythos/Fable model card repeatedly touts reduced cost-per-task without saying whether it was optimized for. One reply nails the stakes: "If token burn isn't in the reward, you get models that ace native harnesses and torch prod budgets."

- **swyx on Cognition's SWE-1.7** ([post](https://x.com/swyx/status/2074919183947808881)): the interesting part isn't the score, it's that "most agent labs are shy about acknowledging chinese model use because they need to sell to gov/defense" — Cognition did the hard part to productionize a Chinese base model: built a multilingual propaganda & censorship eval, corrected for it in post-training, and serves the result at 1000 tok/s ([launch on Cerebras](https://x.com/LLMJunky/status/2074911512959865071)).

## Grok 4.5 & the Catch-up Wave

- **Theo pinned "Grok 4.5 is a good model"** ([post](https://x.com/theo/status/2075090486403166516)) after realizing he'd been [testing it extensively without knowing](https://x.com/theo/status/2074925561760337941) — "Pretty damn good and REALLY well priced." He's planning a video. One reply describes the workflow that's emerging: Fable as orchestrator, cheaper models like Grok 4.5 for delegated tasks.

- **Cursor partnered with SpaceXAI to train Grok 4.5** ([announcement](https://x.com/cursor_ai/status/2074915744999969059), RT'd by leerob): "our most powerful model yet and the first we've built for more than software engineering" — the first big fruit of the SpaceX/Cursor acquisition from June.

- **Theo's broader point** ([post](https://x.com/theo/status/2074931078104805668)): GLM-5.2 is close to Opus, Grok 4.5 allegedly beats Opus and GPT-5.5, Meta has something near 5.5 — the previous generation is commoditizing fast. "Feels like it barely matters now."

## Agentic Coding & Craft

- **Matt Pocock vs. "code is cheap"** ([post](https://x.com/mattpocockuk/status/2075106497176981692)): the phrase correctly communicates that code is cheaper to *produce* but wrongly implies it's disposable — "Code is the environment the agent operates in. Better code = better output." This is becoming a recurring theme (see Monday's "better models, worse tools" debate). He also shipped **skills v1.1** ([changelog](https://www.aihero.dev/skills/skills-changelog-v1-1-wayfinder-to-spec-to-tickets-grilling-improvements)): `/wayfinder` for planning ambitious work, `/to-spec` and `/to-tickets` replacing `/to-prd` and `/to-issues`, plus `/implement` and `/code-review` completing the lifecycle. The skills are also [no longer GitHub-specific](https://x.com/mattpocockuk/status/2074921508141465714) — point the setup skill at any programmatically-accessible tracker.

- **Simon Willison on AI commit messages** ([post](https://x.com/simonw/status/2074948137182257284)): he's been letting Claude and GLT-5.5 write almost all of his commit messages "but I don't feel great about it." He's quoting a team lead who declared a moratorium on AI-written change descriptions: they describe details visible in the diff while "omitting the higher-level framing needed to understand broadly what the code is doing" — and the memorable line, "I'd rather see your prompt than your output." Simon's mitigation: link commits back to human-written issues, which carry the actual rationale. Worse than no rationale, [he notes](https://x.com/simonw/status/2074948354778493232), is when the model guesses the rationale incorrectly.

## Quick Hits

- **The OpenClaw Foundation launches** — and steipete clarifies the org chart: "OpenAI hired me, not OpenClaw" ([post](https://x.com/steipete/status/2075046949896736835)). The foundation is an independent nonprofit with sponsors rather than owners, and for the first time a full-time team (led by Dave Morin) keeping the claw alive. 🦞

- **Prime Intellect raised $130M at $1B** for "the open superintelligence stack" ([Vincent Weisser](https://x.com/vincentweisser/status/2074909109229584400)) — thesis: pre-training concentrated frontier AI in a handful of labs, RL changes who gets to build it.

- **antirez pushes back on local-inference pessimism** ([post](https://x.com/antirez/status/2074904587329311058)): responding to Theo's video on the hard limits of local models, he agrees with every word — then reports 50 tok/s on DeepSeek v4 Flash Q5 with two M5 Max 128GB systems and RDMA. LLMJunky is on the same crusade: a near-full-precision GLM 5.2 at home [starts at 4x RTX 6000 Pro](https://x.com/LLMJunky/status/2074935870600212613), and someone is running [8 clustered DGX Sparks with 1TB unified memory](https://x.com/GumbiiDigital/status/2074990336565199066) on vLLM.

- **LLMJunky × Cerebras**: his first project with the Cerebras DevX team — "the world's first natively multimodal model to crack 2,300 toks/s" ([post](https://x.com/LLMJunky/status/2075002147100303520)).

- **NerdSnipePod covers the whiplash week** ([episode](https://x.com/NerdSnipePod/status/2074863466079195289)): Fable was supposed to give 14 days' notice and gave 3 before the export ban; now it's back at half the rate limits. Chapters on the FDE revolution, AI Engineer Conference, Anthropic vs. Alibaba, and the OpenAI government stake.

- **Mysterious teaser watch**: "Sol" wasn't the only thing being teased — jpschroeder's [perfect non-announcement](https://x.com/jpschroeder/status/2074894733848072309): "I can finally talk about Sol... I have nothing to say. Until tomorrow."
