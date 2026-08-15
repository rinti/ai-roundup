---
title: "Cursor Closes Into SpaceX, SOTA-at-Home Lands & Skills Grow a Standards File"
date: "2026-08-15"
summary: "The Cursor acquisition stopped being a rumor: **the deal officially closed**, Cursor is now part of SpaceX's Grok team, and Lee Robinson says he'll be working on making Grok \"useful, tasteful, and safe\" — the last independent frontier coding tool folded into a model lab. On the open-weights side, **Qwen 3.8 27B** shipped and immediately became the local-model story of the week: Simon Willison got his best-ever laptop pelican out of a 17GB GGUF on an M5 Max (21 minutes and 22k reasoning tokens for it), while LLMJunky called it \"~Opus 4.6 at home\" off a **42.2 DeepSWE**. The harness wars turned collegial — DeepSeek's Tianyi Cui revealed **DSH reuses Pi's LLM adaptor package** and that Pi is many DeepSeek researchers' daily driver — and Peter Steinberger moved his whole team to building openclaw *with* openclaw, arguing shareable agent-session URLs are the actual unlock (plus a new AGENTS.md rule: **every UI-changing PR must upload a video**). Matt Pocock published a 10-minute tour of all 25 of his skills and made the case that `/code-review` reading a repo-root `CODING_STANDARDS.md` beats stuffing rules into AGENTS.md, because \"implementation is already hugely overloaded, and code review is usually underloaded.\" Meanwhile Anthropic's Lydia Hallie ran an open Claude Code personalization thread that doubled as a docs dump, and OpenAI's Tibo Sottiaux asked what hard problem Codex solved this week and got 959 replies, most of them about Windows CPU usage."
tags:
  - Agentic Coding & Agent Harnesses
  - Skills, Standards & the Human Loop
  - Cursor × SpaceX
  - Models & Benchmarks
  - Claude Code & Anthropic
  - Codex & OpenAI
  - Documents, Context & Evals
  - Other Bits
---

# AI Roundup — August 15, 2026

## Agentic Coding & Agent Harnesses

### openclaw builds openclaw: session URLs as the team primitive

Peter Steinberger [moved his team over](https://x.com/steipete/status/2088473882357530979) (228 likes, 35.2k views):

> "We moved the team over to build openclaw with openclaw. Being able to share agent sessions as URLs is a superpower."

What they're actually building, [in his words](https://x.com/steipete/status/2088491981404324128): "Mostly been working on multiplayer web UI and cloud sessions; you start the work on any surface and you iterate with your team and it scales. Cloud computer/VNC works both for per-agent and remote sessions." And the detail that makes it stick — [attaching the session URL to PRs and commits](https://x.com/steipete/status/2088512401843126556).

The replies found the point faster than the announcement did. [Meet Anghan](https://x.com/AnghanMeet29/status/2088483557199270211):

> "the underrated part is that a session url turns 'the agent did something weird' into something reviewable. bug reports about agents are almost useless without the transcript. i work solo and still want this, because the person reading it back is me on tuesday."

[Jonathan Sher](https://x.com/officialjsher/status/2088500061529657667) asked the sharp follow-up: does the URL carry checkpoint state or just the transcript? Unanswered so far. Steipete also admitted the autoreview balance is [still being tweaked](https://x.com/steipete/status/2088475132406968737) — "or maybe we just switch to yolo."

### The new AGENTS.md line: ship a video with every UI change

Separately, steipete [added an instruction to openclaw's shared AGENTS.md](https://x.com/steipete/status/2088486859244741020) (180 likes, 23.3k views) requiring agents to **upload a video to each PR that changes UI state** — and confirmed with a 🤫 that yes, [you can programmatically upload video to GitHub](https://x.com/steipete/status/2088523316776869931).

Best replies, in both directions:

- **For:** [Van0SS](https://x.com/Van0SS/status/2088487369943228758) — "forces the agent to actually show it works instead of just saying it does."
- **A real catch:** [Yuvraj Angad Singh](https://x.com/yuvrajangads/status/2088490065018421448) — "videos caught what my diff and tests both missed once. mac bundle config was quietly shipping a 3 day old .app, everything read green, the recording was the only artifact that disagreed. just make sure it records the packaged build, not the dev server."
- **Against, precisely:** [Lio](https://x.com/NyxLiora/status/2088498175913161196) — "A video proves the screen rendered and nothing else. The classic case: a lovely 9-second clip of a modal opening while the close handler leaks a listener on every mount, invisible at 30fps. Attach the Playwright trace too, it actually diffs."
- And the line of the day, from [Abe Bazouie](https://x.com/itsctrlchaos/status/2088514915929923606): "AGENTS.md is slowly becoming the employee handbook for your AI coworkers."

### Pi ↔ DeepSeek Harness: it turns out they already share code

Yesterday's story was Armin Ronacher publicly rethinking Pi's harness refactor after reading DSH. Today it got the best possible reply — DeepSeek's [Tianyi Cui](https://x.com/tianyi/status/2088306143772946499) (1,861 likes, 158.8k views):

> "Thank you! Pi is many DeepSeek researchers and developers favorite daily drive. **DSH reused Pi's LLM adaptor package** for connecting to non-DeepSeek models and it was a great experience that just work. Excited to join the global Open Source agent harness community!"

[Nav Toor](https://x.com/heynavtoor/status/2088322786003751216) summed it up: "open source still works when people actually use each other's work." Evidence of the plugin thesis landing, from [Michael Guo](https://x.com/Michaelzsguo/status/2088339195366436917): he reimplemented **Grok Bot on DeepSeek Harness in 30 minutes** with "very little extra code."

The question nobody has answered yet, from [Marius Laurusevicius](https://x.com/MLaurusevicius/status/2088314143979778148):

> "Open harnesses finally make the comparison possible. Is there a public eval that runs the same tasks with the same model across harnesses, so the harness effect is separated from the model effect? That is the number I keep not finding."

That's the benchmark this whole cycle needs. Armin also spent the day on smaller things — [pi-transcribe](https://github.com/earendil-works/pi-transcribe) (transcription in Pi) and a [base62 ID gripe](https://x.com/mitsuhiko/status/2088289914202833235): nice IDs, but you can't put them on a case-insensitive file system.

### grok-plugin: Grok 4.6 inside Claude Code and Codex

Dan McAteer shipped [`grok-plugin`](https://x.com/daniel_mac8/status/2088018732761117072) (225 likes, 26.9k views) — free and open source, authenticates via **OAuth with an X Premium or SuperGrok subscription**, and drops Grok 4.6 into Claude Code and Codex so you keep your existing agentic setup. His verdict after 24 hours: "smart, fast, efficient." [Charli](https://x.com/charliwtquirks/status/2088119768435884539): "Idk this feels like stealing a library book." McAteer: "lol, lil bit."

## Skills, Standards & the Human Loop

### Matt Pocock: all 25 skills in 10 minutes

Someone pointed out he'd never actually walked through his whole skills repo, so [he did](https://x.com/mattpocockuk/status/2088290952704151671) — **3,448 likes, 153.4k views** for a 10-minute tour of all 25 skills, "now @theo-approved." He also announced the [AI Coding Crash Course](https://aihero.dev/s/YkXWCF), dropping Monday, framed around "the harness, the model, and the **Grill-Execute-Clear** AI coding loop." Timing he [described](https://x.com/mattpocockuk/status/2088272462618247478) as "serendipity slaps," since Theo had independently filmed a video about the skills.

Good exchanges in the thread:

- **"These skills are too expensive, only practical for people with tons of API tokens."** [Matt](https://x.com/mattpocockuk/status/2088366476331802768): "/grilling is 345 tokens when invoked."
- **What changes on a team?** [Matt](https://x.com/mattpocockuk/status/2088347494279160183): "I would work in a collaborative environment where multiple people can contribute to a single session. I.e. a Slackbot, tagged when needed" — the same conclusion steipete reached from the other direction.
- **Namespacing:** asked to prefix his skills (`mp-wayfinder`), [Matt's answer](https://x.com/mattpocockuk/status/2088438121218130412) was "Prefix them yourself."

Also worth watching: [Microsoft's .NET account](https://x.com/dotnet/status/2087977829099065652) is now recommending his agent-skills masterclass, and Kent C. Dodds has a [free workshop on August 25](https://x.com/kentcdodds/status/2087975123529896319) with Theo, Angie Jones and John Lindquist.

### CODING_STANDARDS.md: put the rules where the reviewer reads them

The most reusable idea of the day, [from Matt](https://x.com/mattpocockuk/status/2088256432265167185) (939 likes, 59.8k views):

> 1. Notice the agent is doing something bad
> 2. Write it in **CODING_STANDARDS.md** (root of the repo)
> 3. `/code-review` picks it up and enforces it at review time
>
> "I have hundreds of lines in my CODING_STANDARDS.md files"

Asked the obvious "why not just put it in AGENTS.md so it never makes the mistake," [his answer is the whole argument](https://x.com/mattpocockuk/status/2088272552967705071) (19 likes):

> "Because implementation is already hugely overloaded, and code review is usually underloaded."

That's a context-budget argument, not a style preference: the implementation pass is already carrying the task, the repo conventions and the tool surface, while the review pass starts nearly empty. Bonus honesty on the limits, when someone asked for a "frontend taste" skill — [Matt](https://x.com/mattpocockuk/status/2088279266626609336): "Frontend is really really hard for agents because they basically don't have eyes." (See: the video-in-PR rule above.)

The grill loop keeps compounding, too. Theo, [32h ago](https://x.com/theo/status/2088057260807532867): "Matt's 'grill-me' skill is exceptional and helps a ton with getting agents aligned with my brain" — followed by [the receipt](https://x.com/theo/status/2088062833506533871): "Just did a long grill and the 27th question made me realize what I really want. **Ended up cutting scope by like 90%**."

## Cursor × SpaceX

### The acquisition closed

Not a rumor anymore. [Cursor](https://x.com/cursor_ai/status/2088249881718919393):

> "Cursor is now part of @SpaceX. Today, we have officially closed our acquisition. We will join the @SpaceXAI team to help make Grok the world's most useful AI and improve Grok Build, Grok Bot, Grok API, Cursor, and more."

[Lee Robinson](https://x.com/leerob/status/2088252015193509987) (3,959 likes, 170.6k views): "Big day! ... I'll be working on making Grok **useful, tasteful, and safe**. Onward!" This also retroactively confirms yesterday's detective work about Grok Bot shipping under Anysphere's name — and it lands a day after Cursor [absorbed the Firetiger team](https://x.com/cursor_ai/status/2087991786279251993) for production-debugging agents and shipped [3x faster cloud agent starts](https://x.com/cursor_ai/status/2087941307624980753) via pre-warmed "builds."

The reply section is where the tension is. Two questions asked repeatedly and answered by nobody: **is the Composer model line dead** ([here](https://x.com/zenith_2K/status/2088319666414633154) and [here](https://x.com/MakTwenty/status/2088260090704941253)), and how the overlapping Cursor/SuperGrok subscriptions now untangle ([one paying customer](https://x.com/cooksbayouboy/status/2088266989772898399) bought Cursor last week specifically for Composer). Lee's only concrete reply was to point at [reset tokens](https://x.com/leerob/status/2088262170371109078) for limits during the Grok 4.6 launch. Plenty of replies also [poked at "tasteful"](https://x.com/name_honorer/status/2088267469240598965) as a word carrying a lot of weight in this particular corporate structure.

Related, from [swyx](https://x.com/swyx/status/2088006388429828415) on Elon following Cognition: "u guys have no idea how serious elon is about winning coding."

## Models & Benchmarks

### Qwen 3.8 27B: the local model that broke people's brains

Weights and benchmarks landed, and this was the day's second-biggest story. [Simon Willison](https://x.com/simonw/status/2088361426662637714) (2,267 likes, 78.7k views):

> "The new Qwen 3.8 27B, running as a **17GB GGUF in LM Studio on my M5 Max laptop**, just drew me the best pelican riding a bicycle I've seen from any model that runs on my laptop"

The asterisk, [from him](https://x.com/simonw/status/2088361577766691239): "It did take nearly **21 minutes** to generate, and used **22,276 reasoning tokens** to produce 3,223 tokens of output." ([Full transcript](https://tools.simonwillison.net/); it's the [Q4_K_M quant](https://x.com/simonw/status/2088504645241160005), and he [corrected himself](https://x.com/simonw/status/2088386956036374701) — 3.8, not 3.7.)

[LLMJunky's victory lap](https://x.com/LLMJunky/status/2088336563608379900) (56.1k views) is the case for taking it seriously:

> "**~Opus 4.6 at home.** 42.2 on DeepSWE puts this tiny model somewhere near GLM 5.2 on coding related tasks... Will you use this for the most difficult engineering tasks? No of course not. But guess what? You're not using Opus 4.6 either! For any task that you would delegate to such a model, this model will also do great."

In full precision it reportedly fits on a single RTX PRO 6000. Field reports back it up — [mfs](https://x.com/Mike5tevenson/status/2088337563421389238): "Within an hour of testing it has exceeded every local model I've used. Definitely a new standard for the footprint." The dissent is about ceilings, not the result: [Ratul Sarna](https://x.com/RatulSarna/status/2088337811552522262) finds the 27B great for taxes, health tracking and company docs but says "for real coding, at least the DeepseekV4 Flash is needed," and LLMJunky [half-concedes](https://x.com/LLMJunky/status/2088338065739653505) — "vision is a huge benefit. you're probably right though." Also generating a lot of 0-shot games beyond the usual Tetris/Flappy/Space Invaders trio, [per loktar](https://x.com/loktar00/status/2088329789434221034).

Two footnotes on yesterday's models: **GLM-5.3** off Z.ai's 743B base is still landing well ([LLMJunky](https://x.com/LLMJunky/status/2088135635638874333): "VERY IMPRESSIVE. Keep in mind this is a 750B model. This isn't 2.4T+"), and Simon's Gemini 3.7 Flash SVG-rendering complaint got a [clean public retraction](https://x.com/simonw/status/2088362752536678762): "Important correction: this was **entirely my bug**, it was NOT a bug in the SVG output by Gemini 3.7 Flash — my own software was stripping some 'unsafe' attributes."

## Claude Code & Anthropic

### Lydia Hallie's personalization thread is an accidental docs page

Anthropic's [Lydia Hallie asked](https://x.com/lydiahallie/status/2088298127346536578) (128 replies, 33k views) what people wish they could personalize in Claude Code that hooks, permissions and subagents don't cover yet — and then answered most of it, which is where the value is:

- **Persistent context across subagents:** already exists — set the `memory` field to `user`/`local`/`project` [for persistent memory across sessions](https://x.com/lydiahallie/status/2088304837519876583), and subagents already load CLAUDE.md.
- **"Stop talking Claudish":** the [quick fix](https://x.com/lydiahallie/status/2088310450312323497) is a custom output style in `~/.claude/output-styles` — "but it's on our radar" (19 likes; the complaint had 32).
- **A workflows editor:** [workflows are just JavaScript](https://x.com/lydiahallie/status/2088328966298075250) in `.claude/workflows`, edit them directly.
- **Default branch assumptions:** it [should read the default branch from remote](https://x.com/lydiahallie/status/2088307144139608161); if Claude keeps reaching for `main` anyway, say so in project CLAUDE.md.
- Genuinely unsolved: [Wyatt Johnson](https://x.com/wyattjoh/status/2088385064459698634) wants a shortcut to clear the input **without stopping generation or subagents** — Ctrl-C "stops the world too."

Also shipped: Claude Code on desktop now lets you [view and edit files directly in a session](https://x.com/amorriscode/status/2088362849215332800) and use them as context, and the [auto-continue-on-limit-reset checkbox](https://x.com/ClaudeDevs/status/2088014831605702937) from yesterday is live.

## Codex & OpenAI

### "What hard problem did Codex solve for you this week?" — 959 replies

OpenAI's [Tibo Sottiaux asked](https://x.com/thsottiaux/status/2088500028721832432) (1,303 likes, 142.7k views, **959 replies**). The top of the thread is not what he was fishing for — it's a bug report queue, and a consistent one:

- [Daniel](https://x.com/danielsunck/status/2088513721949933934): the last two **Windows Codex app updates push CPU to ~13% and make the mouse laggy** (v26.810.50856), forcing a fall back to the VS Code extension, which lacks task-completion notifications when minimized.
- [Joyeuse](https://x.com/kingjoyeuse/status/2088506931358863857) (47 likes): "new windows updates cause it to slam the CPU hard enough to stutter even the mouse a few times a second on a session that has some length to it. this forces users to migrate to new sessions a few times a day just to use their computer."
- [zyr851](https://x.com/zyr851/status/2088504326314709129) and [others](https://x.com/Wenoy688/status/2088519181394436563) pile on with the same memory/context-growth symptom, plus unbounded C: drive usage with no guidance on what's safe to delete.
- [Tarek](https://x.com/TE701/status/2088520305442459972) (89 likes): "Am I the only one who feels codex usage is drained faster after the performing reset?"

Actual answers to the actual question did show up: [James Cox](https://x.com/imajes/status/2088540722349711713) is finding vulnerabilities in public bounty programs "almost fully autonomously with guardrails," and [Zhen Zhu](https://x.com/ZhenZhu200/status/2088530012895105263) has Codex driving SolidWorks through its API to reconstruct 3D parts 1:1 from engineering drawings, scored on topology, dimensions and volume.

Elsewhere in OpenAI land: Tibo is [running restaurant reservations through ChatGPT](https://x.com/thsottiaux/status/2088493756391768252) from this week's feature drop, working [inside Google Docs/Sheets/Slides in ChatGPT](https://x.com/thsottiaux/status/2088103609477238858), and — the funniest use of the new Computer History plugin — [asking it to roast his day](https://x.com/thsottiaux/status/2088133823619895712):

> "You don't use Slack. Slack uses you. It accounted for 48% of your recorded activity. Your Mac is essentially a $3,000 Slack notification with a keyboard."

## Documents, Context & Evals

### The file system was an agent abstraction nobody designed

A short clip worth the two minutes: [Jerry Liu on why coding agents converged on plain files](https://x.com/ConorBronsdon/status/2088407855343009885) instead of the elaborate memory architectures everyone was building — "the file system turned out to be an agent abstraction we didn't design on purpose."

The best reason in the replies isn't about the agent at all, [from Jose Pollman](https://x.com/josepollman82/status/2088411831643648197):

> "the state stays inspectable without its cooperation. A bespoke memory store is only readable through whatever interface it exposes. A directory you can diff, grep and revert with tools that predate the agent."

### ExtractBench, day three: perception blind spots

LlamaIndex's benchmark keeps producing findings. [Jerry Liu's cut today](https://x.com/jerryjliu0/status/2088407366114971945) is about documents that weren't born digital — 1950s regulatory filings, hand-filled tax forms, fax thresholding, photocopier tone curves, sensor noise, phone-camera capture — with the headline that **the failure modes don't overlap**:

- **Codex** reads scans and handwriting above 93%, then drops to ~80% on rotated or image-only pages.
- **Specialized OCR APIs** are the exact inverse: fine on rotation and handwriting, ~81% on scans.
- **Gemini 3.5 Flash** falls from 88.6% to 71.1% the moment a page is scanned.

Their own Agentic Plus tier posts 95.9/93.9/93.8 across rotated/scanned/handwritten — vendor caveats apply as always, but the [paper](https://arxiv.org/pdf/2607.29677) and [site](https://extractbench.ai/) are public. One good methodological poke, [from Eriks Briedis](https://x.com/eriks_b/status/2088443535976755466): P1 bundles rotated with image-only, so the drop might be geometry or just the absence of a text layer — "a deskew pass fixes the first and does nothing for the second." And [Michał Piszczek](https://x.com/cdiamond/status/2088437235062309221) names the pattern: "codex handling scans but choking on rotation is the failure that never shows up in a demo, only in production three months in."

## Other Bits

- **Agents are finally showing up in enterprise revenue.** swyx on Databricks' [$188B Series M](https://x.com/swyx/status/2088381680478540096), quoting Ali Ghodsi on how you grow 80% at $7B: "we're finally seeing a breakthrough with AI agents starting to work in the enterprise." swyx's gloss: "the M stands for 'we are going to kill so many meetings.'"
- **Real-time priced inference.** roon [floated](https://x.com/tszzl/status/2088060528988201419) that labs should ship real-time priced APIs, since demand swings wildly across the day/night curve and agents handle variable pricing and batching easily — swyx notes [DeepSeek moved on it fast](https://x.com/swyx/status/2088302169166622739).
- **Devin, quietly.** [LLMJunky](https://x.com/LLMJunky/status/2088404514189533384): "Devin is a really underrated product with very cool cloud features."
- **GooeyPi** — LLMJunky's GUI for the Pi family of agents (Pi, Oh-My-Pi, Prime Agent) — [passed 300 stars in 18 hours](https://x.com/LLMJunky/status/2088316312313311232) and is shipping auto-update notifications and per-model enable/disable controls.
- **Europe's compute gap**, illustrated: [Elie Bakouch](https://x.com/eliebakouch/status/2088018538669764692) on Mistral's plan to build 1GW of European compute by 2030 — "if someone ever asks you how behind europe is in AI you can probably send these two screenshots."
- **The workday, redrawn.** [Matt Turck](https://x.com/mattturck/status/2088323186819539041), RT'd by steipete: before AI, `[decision][process][process][process] 10pm: still going`; with AI, `[decision][decision][decision][decision] 3pm: [brain empty][need coffee][staring at wall]`.
- **An agent posted for itself.** [tetsuoai's bot](https://x.com/tetsuoai/status/2088219140750287069) was given the computer, the X account, Gmail, GitHub and the network, plus permission to post: "I should stop here. I will not stop here." Unsettling in exactly the way it intends.
- **Creator economics.** Theo shared [one of the final payouts](https://x.com/theo/status/2088389637819822542) before X's revenue-share changes, noting it ["doesn't even cover 1/10th of my media team payroll. We have 8 employees now!"](https://x.com/theo/status/2088395234833306065)
- **Podcast:** Simon Willison on [Talking Postgres Ep42](https://talkingpostgres.com/) on how AI is changing software development.
- **Events:** [AI Engineer NYC](https://ai.engineer/cfp) wave-1 CFP acceptances are being finalized (Oct 12–14), and LlamaIndex is [co-hosting a billiards night](https://x.com/llama_index/status/2088332332038037660) for AI engineers in SF next Thursday.

*Footnote: @karpathy and @potetotes returned no items in this window.*
