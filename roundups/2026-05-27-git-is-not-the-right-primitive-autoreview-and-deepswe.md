---
title: "Theo Declares Git Dead, Autoreview Runs for Hours & DeepSWE Splits the Field"
date: "2026-05-27"
summary: "Theo opens a second front in his *AI psychosis* campaign — after fixing clouds for agents, he wants someone to fix source control, arguing **GitHub is dying and git is not the right primitive**. The 77K-view thread becomes a design doc for agent-native version control, with replies converging on a single idea: 30–40 micro-commits per session means *the audit trail needs to be semantic, not line-by-line*. Steipete ships **autoreview**, a pre-merge review skill that *sometimes runs for hours* — and the replies immediately connect long review loops to everyone's Codex usage-limit complaints (*the billion-token reviewer*). Datacurve's **DeepSWE** benchmark lands at 840K views, claiming to show where top models actually diverge in day-to-day work. Matt Pocock's Sandcastle 0.6.1 adds structured output plus Cursor-CLI and Copilot-CLI support — and he confirms he's switching Claude→Codex over pricing. Thariq's *put files in a folder and let it write scripts + HTML* tip clears 215K views. Plus: Theo's agent quietly discovers an unannounced lakebed feature overnight, Chris Olah speaks at the Pope's encyclical presentation, and Armin keeps poking the *clanker* hornet's nest."
tags:
  - Rethinking Source Control for Agents
  - Agentic Coding & Agent Harnesses
  - Skills, Code Review & Token Economics
  - Models & Benchmarks
  - Clouds & AI Infrastructure
  - AI Culture, Ethics & Big-Picture Takes
---

# AI Roundup — May 27, 2026

## Rethinking Source Control for Agents

**"GitHub is dying and git is not the right primitive."** Theo kicked off a midnight manifesto: *"I'm going to use my AI psychosis to fix clouds for agents. Someone else needs to use their psychosis to fix source control."* The thread (1.1K likes, 77K views) reads like a half-formed RFC, and it touched a nerve. His four complaints:

1. **"Open source" shouldn't mean 100% of code is public 100% of the time** — think of all the energy spent preventing `.env` leaks, the security fixes sitting unpublished because they'd be exploited the moment they hit the tracker, the in-flight PRs you can't hide, the private sub-packages that force a monorepo split. [Tweet](https://x.com/theo/status/2059428863135174829)
2. **Commits are a bad primitive; branches are worse.** *"jj gets much closer to 'right' here. Work is constantly staged as it is done… We should be able to just edit the code. We can worry about how it is tracked later."* [Tweet](https://x.com/theo/status/2059429257038987375)
3. **Worktrees are an abomination.** *"Why do we have to implement copy-on-write ourselves? Why can't I check out the same branch in 2 places at the same time?… Our agents deserve better."* [Tweet](https://x.com/theo/status/2059429524581085647)
4. **Source control shouldn't require a real OS + filesystem.** In a world with tools like `just-bash`, reading and updating files should be doable with simple API calls, not a full kernel. [Tweet](https://x.com/theo/status/2059429875367411927)

His closer: *"git isn't perfect. It's barely even good. We've dealt with it for decades so it's hard to see the cracks. Be more introspective. We can do so much better."* [Main post](https://x.com/theo/status/2059428277786468407) · [closing thought](https://x.com/theo/status/2059430240796184840).

The replies are where it gets good, because practitioners running agents at scale converged on the same diagnosis from different angles:

- **The problem isn't git, it's the human-review assumption.** `@pothuLabs`: *"Git isn't the problem. The assumption that humans read diffs is. Agents don't need branches and merge commits, they need an event log they can replay. We're bolting AI onto a workflow built for human memory."*
- **The history is already noise.** `@DevaBuilds`: *"Every Claude Code session I run ends with 30–40 micro-commits. The history is immediately noise… The audit trail primitive needs to be semantic, not line-by-line."* `@bytecrafter_1` runs a triage agent that *"makes 80+ tiny commits a PR. We had to add a diff-condensation pass before any human reads it."*
- **Track intent, not diffs.** `@mukparekh`: *"Git works when humans are the unit of change. Once agents are doing work, I want to see goal, plan, edits, and confidence as the primitive."*
- **Git as publication, not workspace.** `@imrobertjames`: *"We need automatic snapshots, capability-scoped workspaces, private proposals and API-native code operations. Git can be the publication layer, not working area."*

The lone, sharp counterpoint — `@themmyleke`: *"GitHub may be insufficient but git is great for agents because they still require a human in the loop. For work where we do not trust agents 100% yet, git is perfect."* Whether or not Theo (or anyone) actually ships a git-killer, the thread is the clearest snapshot yet of why daily agent users feel friction with a 20-year-old, human-shaped primitive.

## Skills, Code Review & Token Economics

**Steipete: autoreview is the most impactful skill in my stack.** *"It automatically reviews your code before landing a PR. Finds so many edge cases. Sometimes it runs for hours."* (906 likes, 61K views.) The skill is open-source in the OpenClaw [agent-skills repo](https://github.com/openclaw/agent-skills/blob/main/skills/autoreview/SKILL.md). [Tweet](https://x.com/steipete/status/2059453909819654554).

The reply thread turned into a referendum on the cost of long review loops:

- `@the_rza_`: *"This might be why so many people are complaining about Codex usage limits. If they set up a skill like this and it has long runs fixing issues, then lots of tokens are consumed."*
- `@mattstallone`: *"I call mine the billion-token reviewer."* `@kevins8`: *"also does wonders for tokenmaxxing 😇."*
- The believers held the line — `@E_Scoropisov`: *"the skill that runs for 4 hours and finds the one bug you'd have shipped is worth more than 10 skills that answer in 5 seconds."*
- Useful pointer from `@paulbettner` to Cloudflare's *"thermonuclear code review"* skill as a similar tool that's been working well.
- And a real bug caught in public: `@jj_web_dev` warned that steipete *"left a couple of absolute paths to your local installation"* in the published skill — a reminder that even the skill-hygiene crowd ships the occasional hardcoded `/Users/...`.

**Steipete's dependency purge keeps going.** Two more OpenClaw extractions overnight: [libopus-wasm](https://github.com/openclaw/libopus-wasm) (vibed his own replacements for octoscript and opus-native because *"all the deps around opus are old or terrible"*, claiming modern WASM on V8 is ~equivalent to native — now your claw can take meeting notes), and [Rastermill](http://rastermill.com), a portable WASM+Rust image-processing library *"especially useful if you want to ensure small hacked images don't explode your process."* He's also [hiring for the OpenClaw Foundation](https://x.com/steipete/status/2059421603268608302) and asking the room about SSO/SCIM/endpoint-security stacks for 2026. [libopus tweet](https://x.com/steipete/status/2059422568352714981) · [Rastermill tweet](https://x.com/steipete/status/2059423344961671290).

## Agentic Coding & Agent Harnesses

**Matt Pocock shipped Sandcastle 0.6.1 — and is switching Claude → Codex.** The release adds structured output via `Output.object`, plus support for the [Cursor](https://x.com/cursor_ai) CLI and [GitHub](https://x.com/github) Copilot CLI alongside *"a metric ton of bugfixes."* Asked directly whether he'll switch from Claude to Codex for his own Sandcastle usage given the pricing changes, his one-word answer: *"Yep, that's the plan."* It already works with GitLab too — *"just init with GitHub and get an agent to change the prompts."* [Tweet](https://x.com/mattpocockuk/status/2059301963590672713) · [Claude→Codex confirmation](https://x.com/mattpocockuk/status/2059303429399327096).

The structured-output replies make the case better than the changelog does — `@avlihachev`: *"Output.object is the missing piece for agent reliability… text-based agent output is unparseable in production. Structured output cuts retry rate by 3–4x in my pipelines."* And on how much design went in, Matt: *"A fuckton [of grilling sessions], plus some other dark arts techniques I haven't mentioned yet."*

**Thariq's non-technical Claude Code trick: "put a bunch of files in a folder and tell it [it] can write scripts + make HTML."** A simple line that hit 2.1K likes / 215K views. His expansion of where it applies: *image/video editing → write scripts; finances & tax → PDFs in, scripts, HTML out; medical advice → PDFs + data, HTML out; paperwork → scripts; reports & plans → HTML.* When pushed that this could burn a non-technical user's tokens, he clarified: *"HTML and scripts is how it gets the work done, you still have to decide what task you want done — and yeah, generally it's easier if you're technical because you have a rough understanding of how the agent might be working."* The recurring pain point in the replies (`@toastinshell`): Claude Code defaults to Markdown output, which *"is a strain on the eyes" — so people ask for HTML just to view the output comfortably.* A direct continuation of Karpathy's *"ask for HTML"* thesis from earlier this month. [Thread](https://x.com/trq212/status/2059363113963540788) · [follow-up list](https://x.com/trq212/status/2059363115146395965).

## Models & Benchmarks

**DeepSWE: a new agentic-coding benchmark from Datacurve.** Serena Ge's launch post pulled 3.8K likes and a remarkable 840K views. The pitch: *"On public leaderboards, top models often look relatively close in capability. DeepSWE shows where they actually diverge, reflecting the realistic experience of developers in their day-to-day work."* It was re-shared by both steipete and `@LLMJunky`, the latter adding a strong vibe-check endorsement: *"This feels much closer to reality overall… there are things Opus is better at as well, so these benchmarks are highly nuanced. But generally speaking, I find [GPT-]5.5 to be overwhelmingly excellent."* The early reply thread is mostly congratulatory; the interesting open question (asked by several) is harness sensitivity — *would scores change a lot using Cursor / Copilot / Claude Code instead of the mini-SWE-agent harness?* Worth watching as independent results come in. [DeepSWE launch](https://x.com/serenaa_ge/status/2059308218564890875) · [LLMJunky's take](https://x.com/LLMJunky/status/2059365097990947303).

**Model-wars one-liners from Theo.** A few jabs as the price/perf debate rages: on the rumored frontier model, *"It's gonna be really funny when Mythos drops and is roughly on par with GPT-5.5 at 10x the price"* ([tweet](https://x.com/theo/status/2059499667122164198)); a dig at token efficiency, *"I wonder how much of Anthropic's revenue comes from their models costing 4x more for real work due to massive token inefficiency"*; and a pointer to Qwen3.7 Max debuting at #4 in Code Arena (Frontend) — the top-ranked Chinese lab, on par with Opus 4.6 on agentic web-dev tasks — which he flagged as a *good* bench for reference ([tweet](https://x.com/theo/status/2059409974133129577)). The throughline of the day: capability is converging; price-per-real-task is the axis people are actually arguing about.

## Clouds & AI Infrastructure

**Theo's agent-discovers-a-feature story.** He added an unannounced feature to his cloud (lakebed) one night. By morning, someone else's agent had *discovered* it and shipped an app against it perfectly to spec — a curated badlogic reading/viewing list at `badlogic-list.lakebed.app`, *"and yes there's an RSS feed."* (444 likes, 79K views.) Lakebed is in *"iykyk alpha mode"*; one tester hit a `lakebed_quota_exceeded` error (10,206 / 10,000 requests) and Theo comped them a free paid-tier boost on the spot. Also, for the record: *"No part of this is on Vercel. I just registered the domain there."* The anecdote is a tidy proof point for the agent-native-platform thesis — agents will probe and adopt new capabilities faster than you can write the announcement. [Tweet](https://x.com/theo/status/2059397972073533710) · [iykyk alpha](https://x.com/theo/status/2059399166833647699).

**swyx: "AI infra is going VERTICAL."** Riffing on his earlier *"everyone in AI infrastructure is finally getting filthy rich… just 'boring' infra"* post, swyx is tracking a wave of infra decacorns (Fireworks et al.) in the latest Latent Space [AINews issue](https://www.latent.space/p/ainews-new-ai-infra-decacorns-fireworks). Separately, the AI Engineer World's Fair CFP closes in ~4 days, and this year adds preprint poster sessions for research papers. [Tweet](https://x.com/swyx/status/2059463182297747527).

## AI Culture, Ethics & Big-Picture Takes

**Anthropic's Chris Olah spoke at the presentation of Pope Leo XIV's AI encyclical.** A day after Simon Willison's notes on *Magnifica humanitas*, Boris Cherny surfaced Olah's remarks, which lean unusually candid on model interpretability and welfare: *"…we keep finding things that are mysterious, even unsettling. We find structures that mirror results from human neuroscience. We find evidence of introspection. We find internal states that functionally mirror joy, satisfaction, fear, grief, and unease."* The ask: *"We need more of the world — religious communities, civil society, scholars, governments… to take this seriously… We need moral voices that the incentives cannot bend."* [Full remarks](https://www.anthropic.com/news/chris-olah-pope-leo-encyclical) · [bcherny tweet](https://x.com/bcherny/status/2059217407386771911).

**Armin keeps poking the "clanker" discourse.** After last week's blog post drew an *"80% of the comments were about the word 'clanker'"* reaction on Hacker News, Ronacher published a follow-up — *"More musings after some people got upset about the word clanker"* — and admits he went and downloaded TikTok to study the *"certain vibe"* of clanker content. A small but telling read on how fast anti-AI slang is calcifying into culture. [Tweet](https://x.com/mitsuhiko/status/2059266709144371345) · [post](https://lucumr.pocoo.org/2026/5/26/clankers/).

**leerob's recommended watch: Andy Matuschak's new talk.** Matuschak argues coding agents could finally break us out of two cages — *"the app model, which traps computing in one-size-fits-all silos; and programming as a specialization, which has crowded out cultures of imagination and domain insight."* A more optimistic, capabilities-expanding counterweight to the week's *"AI code is a liability"* discourse. [Tweet](https://x.com/leerob/status/2059095943190913214) · [talk](https://andymatuschak.org/tat).

**Quote of the day**, via Paul Graham (re-shared by Simon Willison): *"I have never knowingly finished reading an email signed by a human but written by AI. It feels like being lied to, and who would stand for that?"* [Tweet](https://x.com/paulg/status/2058855820121498037).

---

*Scanned 13 accounts; `@potetotes` was unavailable on the mirror at fetch time. Coverage focuses on activity from ~May 26–27, 2026.*
