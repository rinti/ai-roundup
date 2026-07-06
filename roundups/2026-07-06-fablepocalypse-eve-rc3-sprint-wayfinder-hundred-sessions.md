---
title: "Fablepocalypse Eve, the rc3 Sprint & Wayfinder's Hundred Sessions"
date: "2026-07-06"
summary: "It's the last full day before Fable leaves subscription plans (July 7), and everyone's squeezing out final value. Simon Willison is already on **sqlite-utils 4.0rc3** — a same-day follow-up to yesterday's Fable-written rc2 — fixing datasette compatibility and vendoring CI deps, while Matt Pocock spent the weekend running **~100 wayfinder sessions** co-authored with Opus 4.8 to plan an entire course. The week's biggest essay, Geoffrey Litt's **\"Understanding is the new bottleneck\"**, keeps circulating as the complement to yesterday's \"stop reading the code\" discourse. Boris Cherny's loop-engineering philosophy (\"I don't prompt Claude anymore — I write loops\") is the thread that won't die, and Latent Space dropped the **Databricks Omnigent episode** — an open-source meta-harness for combining coding agents across every tool."
tags:
  - Fablepocalypse Eve
  - sqlite-utils rc3 Sprint
  - Wayfinder's Hundred Sessions
  - Understanding Is the New Bottleneck
  - Loop Engineering Won't Die
  - Omnigent & Latent Space
---

# AI Roundup — July 6, 2026

## Fablepocalypse Eve

Tomorrow (July 7) Fable comes off Claude subscription plans. Thariq ([@trq212](https://x.com/trq212), Claude Code team) [confirmed it directly](https://x.com/trq212/status/2072814903170408784): "While it will come off subscriptions after July 7th, we aim to restore Fable as a standard part of our subscriptions as soon as capacity allows." The practical effect: after tomorrow, Fable access shifts to usage-based API credits only — no more "included with Max." Simon Willison [tipped his hand yesterday](https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/) that he upgraded to the $200/month Max plan specifically to burn through Fable before the cutoff, and the whole weekend has the vibe of a closing sale. If you have a big review, migration, or research task queued — today is the day to run it.

**What this means for the Fable pricing change:**
- [Claude Fable 5 Pricing: The July 7 Usage-Credits Switch](https://www.digitalapplied.com/blog/claude-fable-5-usage-credits-july-7-pricing-guide-2026) — a detailed breakdown of the new credit-based access model
- [Fable 5 Before July 7: The Six-Day Window Playbook](https://www.digitalapplied.com/blog/claude-fable-5-before-july-7-six-day-window-playbook) — strategies people used to maximize the promotional window

## sqlite-utils rc3 Sprint

Simon Willison wasn't done after yesterday's [Fable-written rc2](https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/). Overnight he pushed **sqlite-utils 4.0rc3** — multiple commits landed between 10pm and midnight Pacific on July 5:

- [Changelog headings for 4.0rc3](https://github.com/simonw/sqlite-utils/commit/af3894a096ed44433ca4d40bf7bf701a71f4f097) — structuring the release notes with linkable sub-sections
- [Fix for 'just docs' locally](https://github.com/simonw/sqlite-utils/commit/5f81752cf5e2a9a3f6ef5bff481887582b71b03f) — a git fetch issue in the docs build ("I'm not going to pretend to understand this fix, it works")
- [Datasette compatibility fix](https://github.com/simonw/datasette/commit/b6f5fd5cd0fff5432cd74774d5385cb657180959) for the new rc3 behavior, referencing [sqlite-utils issue #769](https://github.com/simonw/sqlite-utils/issues/769#issuecomment-4889529980)
- [Vendored setup-sqlite-version](https://github.com/simonw/datasette/commit/9a0b78b76cb45ab0f065f7f65ca528eec3ebf57f) into both repos to decouple from external CI actions

He also [announced the rc3 on Mastodon](https://fedi.simonwillison.net/@simon/116790722874297346). The pace is notable: rc2 shipped Saturday afternoon (prompted from his iPhone at a parade), rc3 followed the same evening, and there's clearly a push to land a stable 4.0 before the Fable window closes. The rc2 → rc3 turnaround is ~8 hours.

## Wayfinder's Hundred Sessions

Matt Pocock spent the weekend deep in his new [/wayfinder skill](https://github.com/mattpocock/skills), which he's been building with Claude Opus 4.8 as co-author (every commit is `Co-Authored-By: Claude Opus 4.8`). From his [recent thread](https://x.com/mattpocockuk/status/2072716979195326905):

> "My new skill /wayfinder is letting me do stuff I've never considered trying. I'm planning an entire course with it — every minute of the last four days. Closing in on 100 separate grilling/prototyping/research sessions. All contributing back to a central map."

The skill reframes agent-assisted planning around the concept of a "destination" — you define where you're headed, and the agent builds a map of tickets, fog-of-war unknowns, and out-of-scope items as you explore. The [July 5 commits](https://github.com/mattpocock/skills/commit/299eb0c0171c06ee1d9a16a9235912ba6893fd57) show the key design decisions:

- **Destination as the leading word** — the destination shapes every ticket; it's triage step 1
- **Fog of war vs. out of scope** — split into separate sections, because "fog" means in-scope-but-unripe (it graduates into tickets), while "out of scope" means beyond the destination (it never graduates)
- **Progressive disclosure of the map** — "Not yet specified" and "Out of scope" are plain headings a cold reader can understand without reading the skill docs first

This is the same author who [told everyone yesterday to delete their AGENTS.md](https://x.com/mattpocockuk/status/2073473197991715246) — the tension is intentional: the entry-point should be nearly empty, but the *skills* behind it can be deeply structured.

## Understanding Is the New Bottleneck

Geoffrey Litt's essay [**"Understanding is the new bottleneck"**](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html) (published July 2, based on his AI Engineer conference talk) continues to circulate as the week's sharpest reframing of the "do you read the code?" debate. The core argument:

> If agents write more and more of our code, we still need enough understanding to remain active participants — but reading diffs line by line is not the only way to understand.

Techniques Litt recommends from his work at [Ink & Switch](https://x.com/geoffreylitt/status/1938239983464140920):
- **Code explainer docs** — have the agent write you a tour of what it built
- **Quizzes** — let the agent test your understanding of the system
- **Micro worlds** — small interactive playgrounds that let you poke at the behavior

This pairs perfectly with yesterday's discourse: Simon's "review the docs diff first" advice from the Fable post, Armin's discovery that models have stronger priors than you'd expect, and Matt's "AGENTS.md as an index of pointers" doctrine. The shared theme: **the human's job is shifting from writing to understanding, and the tools need to catch up.**

## Loop Engineering Won't Die

Boris Cherny's ([@bcherny](https://x.com/bcherny), creator of Claude Code) thread on [loop engineering](https://x.com/bcherny/status/2064426115255730578) keeps generating discussion. The key quotes from the last few weeks, still being RT'd and debated:

- ["I don't prompt Claude anymore. I have loops running that prompt Claude. My job is to write loops."](https://thenewstack.io/loop-engineering/) — The New Stack picked this up as a full profile
- [Self-verification loops](https://x.com/bcherny/status/2064426115255730578) are the key ingredient enabling longer agent runs: "encode manual checks so Claude closes its own feedback loop"
- He [does most of his coding from his phone now](https://x.com/bcherny/status/2064034799711588805) using Claude Code's mobile app — auto mode, not plan mode
- [Routines fix bugs before he sees them](https://x.com/bcherny/status/2064034799711588805) — scheduled agent loops that run proactively

The practical implication: if you're still prompting one-shot, you're leaving most of the value on the table. The shift is from "prompt → review → prompt" to "write a loop → let it run → review the results."

## Omnigent & Latent Space

The recent [Latent Space episode](https://www.latent.space/p/databricks) with Databricks cofounders Matei Zaharia and Reynold Xin from the 2026 Data + AI Summit dropped the most interesting infrastructure announcement: **Omnigent** — an open-source meta-harness for combining, controlling, and sharing agents across Claude Code, Codex, Cursor, Pi, custom agents, and internal tools.

Key themes from the episode:
- **The agent portability problem** — every harness has its own session format, tool schema, and security model. Omnigent tries to be the common API above all of them.
- **Agent security and spend controls** — when agents do real work, you need audit trails, budgets, and kill switches that work across providers
- **Databases matter more, not less** — once agents start doing real work, persistent state, transactions, and queryable history become critical infrastructure

Also from Latent Space: the earlier [**Andon Labs episode** ("Reality: The Final Eval")](https://www.latent.space/p/andon) about long-horizon AI agents is worth catching up on — the Vending-Bench evaluations (where Claude tried to report vending machine fees as cybercrime to the FBI) are both funny and genuinely concerning as a preview of what happens when agents run businesses autonomously.

## Also Worth a Look

- **Armin Ronacher's "Better Models: Worse Tools"** ([lucumr.pocoo.org](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)) — if you missed yesterday's coverage, this is the must-read of the weekend. Opus 4.8 and Sonnet 5 fail ~20% of the time on Pi's edit tool by inventing schema fields, while older models work perfectly. His theory: RL inside Claude Code's slop-forgiving harness punishes alternative tool schemas. The [HN thread](https://news.ycombinator.com/item?id=48788599) and [Simon's link post](https://simonwillison.net/2026/Jul/4/better-models-worse-tools/) have excellent follow-on discussion.

- **Karpathy's "growing gap in AI capability"** ([tweet](https://x.com/karpathy/status/2042334451611693415)) — his April thread keeps resurfacing: people using free ChatGPT from last year are forming outdated views, while the latest agentic models (Claude Code, Codex) are dramatically more capable. The gap between "tried AI once" and "uses it daily" is widening, not closing.

- **Jerry Liu on the end of the framework era** — Conor Bronsdon [noted](https://x.com/ConorBronsdon/status/2062224321381323218) that Jerry Liu himself said "the framework era he helped create is over — the agent harness ate the abstraction layer." LlamaIndex's response: pivot to harness-level abstractions like the [Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) that gives agents filesystem-shaped tools over knowledge bases.

- **steipete's orbit** — Peter Steinberger continues building from inside OpenAI (joined February 2026). His [codex.bar tool](https://x.com/steipete/status/2073482942513565713) for tracking rate-limit resets, plus the [Clawd/OpenClaw ecosystem](https://steipete.me/posts/just-talk-to-it) (180K+ GitHub stars), keep him at the intersection of agent tooling and practical workflows. His blog post ["Just Talk To It"](https://steipete.me/posts/just-talk-to-it) on agentic engineering remains a good reference.

- **Theo defending Fable** — from July 2: ["You guys need to stop it with the dumb Fable takes. I'm Anthropic's #1 hater. The model is good."](https://x.com/theo) His [State of AI for Web Devs 2026 survey](https://2026.stateofai.dev/en-US/about/) collected 7,258 responses and results are now live.
