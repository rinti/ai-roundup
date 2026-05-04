# 2026-05-04 — ClawSweeper Goes Full Loop, Vibe-Kanban Shuts Down Onstage & the AI-Slop Reckoning

## ClawSweeper 0.2.0: the full issue → PR → review → repair → automerge loop

Steipete's headline ship of the weekend, and the one he's calling the **most useful tooling he's built for OpenClaw to date**. ClawSweeper 0.2.0 closes the loop:

> issue → @clawsweeper fix/build → guarded PR → review → repair → re-review → automerge

It's open source, runs on Codex, and you can fork it for any repo — Steipete is pitching this directly at OSS maintainers drowning in PRs. He also reminds folks that **OpenAI hands out free API credits + 6 months of ChatGPT Pro with Codex + Codex Security to OSS maintainers** with important infrastructure ([developers.openai.com/community/codex-for-oss](https://developers.openai.com/community/codex-for-oss)).

Notable replies:

- **Dishant**: "the review to repair loop is the part i actually want in every repo"
- **Aleksandr Fulha**: "re-review step is the unsung hero. without it agents trust their first patch too much — half our merges came back as follow-up bugs until we forced a second pass."
- **Anthony_42sys**: "especially appreciate 'guarded PR' — the bot knows when to step back. that's the right kind of conservative"
- **Danny Livshits**: "Issue triage is where most OSS projects quietly die. Maintainers burn out responding to the same five questions while real bugs sit untouched for months. Anything that cuts that load is a gift to the ecosystem."
- **Priya Sato**: "agent maintenance sounds great until the cleanup costs more than the fix" (the realist counter)
- **o.o (clifcode)**: "most people build tools for devs. you're building tools for the thing that's replacing devs. that's the difference."

Bug reports and complaints in the same thread are also live — **Eva (ElectricSheepIO)** flags that 5.2 "bricks anyone with LCM and disables most plugins" and pushes for a beta-only Discord with priority issue review for testers. Steipete has been responding throughout.

- ClawSweeper post: [https://x.com/steipete/status/2051020548335874369](https://x.com/steipete/status/2051020548335874369)
- ClawSweeper site: [https://clawsweeper.bot](https://clawsweeper.bot)

Same window, **Crabbox 0.4.0** also shipped — Steipete's ephemeral-machine primitive (AWS spot, Hetzner, Blacksmith) for running agents + tests off your laptop. He frames it as: "Often I need to quickly recreate conditions on macOS, Linux and Windows and need fast ephemeral machines. Crabboxes are machines for agents on the fly." Showcases a macOS-only launchd issue Codex validated inside a fresh Crabbox that was unreproducible on his main install.

- Crabbox 0.4.0: [https://x.com/steipete/status/2051025056306790833](https://x.com/steipete/status/2051025056306790833)
- Crabbox site: [https://crabbox.sh](https://crabbox.sh)

And **RepoBar 0.4.0** — the GitHub menubar app — got persistent SQLite caching, visible rate limits, and archive fallback. [https://x.com/steipete/status/2051088325100831046](https://x.com/steipete/status/2051088325100831046)

## OpenClaw + Codex 5.5: "the Anthropic ban backfired completely"

The narrative crystallizing this weekend, RT'd by steipete and now circulating widely:

> "wild that 3 months ago Anthropic banned OpenClaw from Claude subscriptions to slow it down, now it runs on GPT-5.5 and it's apparently the best it's ever been…backfired completely" — *thegreatest_sv*

Mitchmalone: "Oh man, @openclaw with @OpenAI Codex 5.5 is insanely good. It's so good." — RT'd by steipete.

- ClawSweeper context: OpenClaw's Anthropic-imposed ceiling forced the migration to Codex/GPT-5.5; the resulting harness change is being credited as the upgrade.
- **Vincent Koc thread**: 3 days using `/goal` on OpenClaw, 13 runs, gazillion tokens, many PRs — the takeaway: `/goal` is **not a "do my ticket" button, it's a constraint workflow**. ([https://x.com/vincent_koc/status/2050983370902184019](https://x.com/vincent_koc/status/2050983370902184019))
- **Dimillian** (also RT'd by steipete): "I've used Codex /goal all weekend on side projects/games and I can definitely feel that this is something that will be part of our toolbelt from now on and will change how we work with agent quite a bit"

Other OpenClaw-side updates:

- **OpenClaw 2026.5.2** ships xAI Grok 4.3, sturdier plugin installs/updates, leaner gateway+agent hot paths, and Discord/Slack/Telegram/WhatsApp fixes.
- **lossless-claw 0.9.3** ("the 'please just keep working' release"): cache-aware compaction fires *before* overflow, fewer repeated old instructions, lcm tools now load on OpenClaw 2026.5.2+, Codex/DeepSeek/Bedrock fixes. ([https://x.com/jlehman_/status/2050932878843015234](https://x.com/jlehman_/status/2050932878843015234))
- **OpenClaw maintainer lore**: PR-per-author cap was raised from 10 → 20 because contributors are shipping good work, with a cheeky note that **windows-oriented fix PRs are especially welcome** since "almost everyone here, maintainers included, is on a macbook yelling 'works on my machine'." ([https://x.com/cherry_mx_reds/status/2051027574432674115](https://x.com/cherry_mx_reds/status/2051027574432674115))
- **steipete on x**: "brb calling @sama" — quote-tweeting a "40 million tokens per minute and he still hit the limit" complaint. Sam Altman replied: "let's fix this right away, much too low." ([https-1: https://x.com/sama/status/2051052567522848793](https://x.com/sama/status/2051052567522848793))

## Mattpocock's "AI negligence" thread — the slop reckoning hits the timeline

Highest-engagement post in our scan today (74K likes):

> "What do you do if someone on your team is using AI negligently? I.e. not reviewing, not caring, leaning into the slop. This, of course, was a problem pre-AI. But the 'code is cheap' mind virus is making it worse IMO."

The replies are the actual signal — this is the first wide community thread that treats AI-driven slop as a *team problem* not a *tools problem*.

The takes that landed:

- **Ryan Fleury**: "You fire them." Matt: "That's probably it, yep."
- **Nathan Oyler** (long, thoughtful, top reply): people are **still learning the shape of AI** the way "we" already did; gatekeeping is on senior engineers and CLAUDE.md/instruction files, not on banning AI usage. "I tell people, please make mistakes with AI. Because making mistakes means you're trying and learning."
- **dex (dexhorthy)**: "Set a high bar, don't allow trash code to be merged… For the sloppers it becomes a perf conversation cause if nothing is merged then they're not shipping. Work backwards from there."
- **martysaxton**: "AI coding didn't make design go away. It made design harder to locate. Is it in the code? The spec? The prompt? The tests? The review loop?"
- **Dan (DanIsBuilding)**: "If models are good now, another indicator of quality is the convo that lead to the code." (PR-attached prompt history as a code-review primitive.)
- **Steven Gonsalvez**: "signalling mechanism: look at their session rather than code. Was the human the driver or a passenger? It's probably the new git diff."
- **Axel Clark**: "I'm much quicker to mark an entire file, PR, or document as AI slop and ask them to try again from scratch. I've also tried to get in front of this by giving my org CLAUDE.md or AGENTS.md templates that attempt to avoid the most common AI issues."
- **Mirza Alispahic**: "And those people can generate a lot more code in shorter time period."
- **Robert Baddeley**: "First step: identify if it's ignorance or apathy (usually requires having spent time to know the person). Ignorance is fixable, apathy is not."
- **Roman Builder**: "the 'code is cheap' meme just made it socially acceptable. nobody used to brag about not reviewing their commits. now it's a vibe."
- **Teja**: "the real issue is that their prompt history becomes the company's biggest data leak."
- **Raj Nagulapalle**: "we stopped trusting humans alone and started building quality gates in the pipeline — ai writes → ai challenges → only then humans approve."
- **Ravenfields**: "yeah what if it is your tech lead or manager… makes it really hard to talk to them, because there is no company governance doc to refer to. Companies have been really bad at just adding AI to their official processes."
- **Sayed**: "You need to have 5+ code review bots, and the PR will not be merged till the issues are resolved." (the maximalist reply)

Post: [https://x.com/mattpocockuk/status/2050860119928262883](https://x.com/mattpocockuk/status/2050860119928262883)

Mattpocock's earlier-in-the-window thesis post that this thread builds on: **"Writing code is cheap, maintaining code is not"** ([https://x.com/mattpocockuk/status/2050167042771194226](https://x.com/mattpocockuk/status/2050167042771194226)).

## Vibe-Kanban shuts down live onstage at AIE Europe — "everyone making money is doing 2 things"

swyx flagged the moment of the conference. Louis Knight-Webb (tokengobbler) **shut down Vibe-Kanban — at 30,000 MAU — live onstage** at AI Engineer Europe.

> "Everyone who is making money is doing 2 things: selling to enterprise, and reselling tokens. We were doing neither."

The talk that wrapped it up: *"Software Engineering Is Becoming Plan and Review"* ([piped.video/watch?v=W76woOYH](https://piped.video/watch?v=W76woOYH)). Frame: AI eats the middle, the lever is improving planning + review, planning/review may not fit agile/scrum.

Replies pull on the thread:

- **overfitted_**: "30k MAU and the math still didn't work. tells you the wrapper unit economics: if you're not reselling tokens at markup or signing six-figure enterprise PoCs, you're a feature anthropic ships in cursor next quarter."
- **Nate Voss**: "The unspoken part: you found 30k people your product was indispensable for. You just found them in a place that can't be monetized. That's somehow both a complete success and a total failure."
- **Vincent Po Li**: "the 2-path observation is sharp. think there's a third forming though: outcome-based pricing for the SMB long tail, too small for enterprise, too real for hobby. the AI cost gets dwarfed by the value if the outcome is concrete enough."
- **大匪 (yue8985)**: "Plan/review is where the leverage moved. Once agents can write the middle 80%, the scarce skill is framing the ticket, defining testable acceptance criteria, and knowing when the output is safe enough to merge."
- **Builds After 5**: "30,000 MAU and still shutting down. growth without a revenue model is just a polite way to fail slowly."

Vibe-Kanban lives on as an open-source project. swyx: "surprisingly not the first company to shutter at AIE."

- swyx post: [https://x.com/swyx/status/2050753293601935777](https://x.com/swyx/status/2050753293601935777)
- The clip: [https://x.com/tokengobbler/status/2050832952666317272](https://x.com/tokengobbler/status/2050832952666317272)

## LLMJunky: two hidden Codex features, plus the Codex App for Linux

LLMJunky's "Two Codex Features You Probably Didn't Know About" post is the most actionable how-to of the day:

1. **`developer_instructions` (string)** — supplements the Codex system prompt at a higher level than `AGENTS.md`. Survives compaction (where AGENTS files get compressed). Use cases: providing your name, negative prompts (em-dashes, common phrases), personalization/personality. LLMJunky: "I would use this for higher order instructions that need to persist. Your agents file gets compressed in compaction. System prompt does not."
2. **`compact_prompt` (string)** — customize the **pre-compaction prompt** so you can steer compaction directly. Also `experimental_compact_prompt_file` (path to a markdown file).

Both live in `config.toml`, both work for CLI **and** Codex App. LLMJunky says this is the start of a series on "quirky hidden features."

Post: [https://x.com/LLMJunky/status/2051004905217998959](https://x.com/LLMJunky/status/2051004905217998959)

Also from LLMJunky this window:

- **Codex App for Linux: Petsmart Edition** released. Pets work on CachyOS + Wayland. ([https://x.com/LLMJunky/status/2050955288576938014](https://x.com/LLMJunky/status/2050955288576938014); GitHub: [https://github.com/am-will/codex-app/releases/tag/v26.429.30905-petstable](https://github.com/am-will/codex-app/releases/tag/v26.429.30905-petstable))
- **NBA Codex Pets**: a runaway side-quest of community-shared pets, now with `npx codex-pets add chef|king|kobe|jordan|curry`. The `tui-pets` renderer ([github.com/almonk/tui-pets](https://github.com/almonk/tui-pets)) puts pets in your terminal via the kitty image protocol. Apple Watch Codex client also shipped this weekend, built on the open-sourced Codex app server ([https://x.com/DevAdventur3s/status/2051031666488152425](https://x.com/DevAdventur3s/status/2051031666488152425)).
- **DGX Spark price hike inbound** — LLMJunky: "If you're looking at getting a DGX Spark, you better hurry. Kicking myself for not jumping on that $2500 price point." (Source: NVIDIA Korean distributor reportedly mentioning a $500 imminent hike.) [https://x.com/LLMJunky/status/2050736818555920721](https://x.com/LLMJunky/status/2050736818555920721)
- **Codex usage limits 5/5 prediction**: "you should use absolutely all of the Codex usage you can before 5/5 because there's absolutely no way we don't get a reset. finna be a token party." [https://x.com/LLMJunky/status/2051185953608196224](https://x.com/LLMJunky/status/2051185953608196224)

## Theo: "official iMessage Claude plugin" satire (and the actual Apple ↔ Anthropic ToS issue)

Theo's pinpoint sarcasm aimed at a real story: Apple is reportedly using Claude.ai accounts at scale for internal AI work, while every other org has to use the API. He weaponized it in a fake-bug-report:

> "Hey @Apple! I am experiencing bugs in the official iMessage Claude plugin. It says 'official' so I'm sure this is blessed by Apple. Otherwise it would be violating clauses §2N and §2I of your ToS for Apple online services, which you would never allow."

Followup: "I really love how the official Apple iMessage plugin for Claude allows me to automate sending messages from my Android phone. I can now send thousands of blue bubble messages a day from my Google Pixel™️, even to recipients I don't know!"

QT'd from **bruvimtired**: "hold on a minute, so Apple is allowed to use Claude.ai accounts but no one else is?! everyone else has to use API key?????"

Posts:
- [https://x.com/theo/status/2050681468020777424](https://x.com/theo/status/2050681468020777424)
- [https://x.com/theo/status/2050683441277235696](https://x.com/theo/status/2050683441277235696)

Other Theo this window:

- **"Codex sub maxing out"**: "I still can't fathom how Julius maxes out a $200/month Codex sub but I'm thankful I can just give him more subscriptions to work around it." Quoted: jullerino — "don't let usage limits stop you. get t3 code and just continue where you left off with the next sub." [https://x.com/theo/status/2050789310203560084](https://x.com/theo/status/2050789310203560084)
- **On levelsio's "add `model='latest'` to all providers" rant**: "You don't actually want this. Learning how a new model works is much more work than pressing a button. If the button press is too much friction, you shouldn't switch lol." [https://x.com/theo/status/2050752888302166388](https://x.com/theo/status/2050752888302166388)

## Mitsuhiko: WebSockets are back (thanks to AI), iroh recommendation, SSE fallback PR

A textured day from mitsuhiko, all of which hits the agent-infra layer:

- **"I really felt HTTP/3 would finally make websockets die out, but then AI comes and brings websockets back. Really do not like the protocol at all. So many issues with it :("** — the agentic-streaming era is forcing WS back into the stack. [https://x.com/mitsuhiko/status/2050705031255535684](https://x.com/mitsuhiko/status/2050705031255535684)
- **Practical follow-up: a PR to fall back to SSE on WebSocket errors in pi**: [https://github.com/badlogic/pi-mono/pull/4133](https://github.com/badlogic/pi-mono/pull/4133)
- **iroh shoutout**: "I don't know who needs to know this: iroh is good stuff." ([https://www.iroh.computer/](https://www.iroh.computer/))
- **"Did OpenAI change something here? Because this is getting really annoying."** — unspecified Codex/agent regression he's chasing. [https://x.com/mitsuhiko/status/2050504490327949717](https://x.com/mitsuhiko/status/2050504490327949717)

Plus: gravel-bike commute photos, a "burger-flipper" RT, and **lucasmeijer's Pragmatic talk** — "had 60 folks present, reached 60K+ online, looking forward to a v2." ([piped.video/watch?v=fdbXNWkp](https://piped.video/watch?v=fdbXNWkp))

## Jerry Liu: parsing PDFs is *still* an open problem, and now it's an *agent* problem

Jerry's post-AI-Dev-'26 thesis post:

> "Parsing PDFs is hard… The fundamental issue is that PDFs are designed for print and display purposes, not to give back a linearized, semantically meaningful string of text. Text and tables are represented as a bunch of chars and lines, without any [structural meaning]." It matters more now because **agents are the consumers of documents** — they need OCR tools that read documents properly to make decisions.

The framing dovetails with his earlier-in-the-week "the framework era is dead, context is the moat" ([VentureBeat profile](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives), [podcast](https://piped.video/watch?v=HbXvX-Kt)) — same point at a different layer of the stack.

Jerry: "We are gonna have genuinely useful long running agents in 2026. Somehow, this feels both entirely predictable, yet scarily futuristic."

Posts:
- PDFs thread: [https://x.com/jerryjliu0/status/2050961097642086427](https://x.com/jerryjliu0/status/2050961097642086427)
- Context-layer post: [https://x.com/jerryjliu0/status/2050373987860123971](https://x.com/jerryjliu0/status/2050373987860123971)

## Theo + Azure follow-up (closes out the May 2 story)

Closing the loop on yesterday's roundup: Theo's Azure-OpenAI 10x latency improvement landed, plus a separate **99.9% cache-miss rate** issue resolved within 20 minutes of his complaint. Net effect: **Azure is now FASTER than OpenAI for GPT-5.5.** Live dashboard at [azure.t3.gg](https://azure.t3.gg) (he's said he'll throttle the auto-update frequency since "this is burning a few hundred bucks a day").

- 99.9% cache miss resolved: [https://x.com/theo/status/2050357935956742530](https://x.com/theo/status/2050357935956742530)
- "Azure is now FASTER": [https://x.com/theo/status/2050327526933979647](https://x.com/theo/status/2050327526933979647)

## Mattpocock's `/triage` skill — burning through the backlog

Posted as a video on May 2 with a different cinematography style (fewer cuts, longer takes — Matt asking for feedback on the change). The skill:

> "As soon as your software gets any users, you'll need to deal with every veteran developer's nemesis: the backlog. Here's a skill I made (/triage) for burning through your backlog at record speed."

Post (with video): [https://x.com/mattpocockuk/status/2050583807665778872](https://x.com/mattpocockuk/status/2050583807665778872)

Same window, Matt also riffed on **AI-assisted creative writing** — "Fuck I think I've figured out good creative writing with AI. It's really fun." Replies converge on: novelists already work in fragmented diaries → larger pieces → re-edit, which is exactly the workflow that suits agents. ([https://x.com/mattpocockuk/status/2050574631979844040](https://x.com/mattpocockuk/status/2050574631979844040))

## Simon Willison: built a feature on his blog *entirely on his phone*

> "I added a new feature to my blog (built entirely on my phone with Claude code for web) that imports my iNaturalist photos and adds them to my site's overall timeline."

Post: [https://x.com/simonw/status/2050628759393640707](https://x.com/simonw/status/2050628759393640707) — writeup at [simonwillison.net/2026/May/2](https://simonwillison.net/2026/May/2). Phone-as-primary-IDE is now an actual workflow if you trust the agent enough.

## Misc / shorter

- **Flue launch (Fred K. Schott)** — the TypeScript agent harness framework picked up steam after launch. Mattpocock RT'd: "Introducing Flue — The First Agent Harness Framework. Flue is like Claude Code, but 100% headless and programmable." [https://x.com/FredKSchott/status/2050274923852210397](https://x.com/FredKSchott/status/2050274923852210397)
- **Mattpocock new homepage** drops with the tagline: "Engineering fundamentals are your biggest advantage." [https://x.com/mattpocockuk/status/2050221408752464309](https://x.com/mattpocockuk/status/2050221408752464309)
- **"Beyond the Prompt" London panel, May 19**: Maggie Appleton (GitHub), Mattpocock, others — practical AI in production. [https://x.com/bryntum/status/2050183717319049528](https://x.com/bryntum/status/2050183717319049528)
- **leerob micro-meme**: "No product, no marketing, no design… just Builders™." [https://x.com/leerob/status/2050723800568774987](https://x.com/leerob/status/2050723800568774987)
- **Latent Space pod with Ronalfa (NOETIK_ai)**: "Training Transformers to solve 95% failure rate of Cancer Trials" — patient-selection foundation models for cancer. swyx: "loved the vibes." [https://x.com/Ronalfa/status/2050668875361231171](https://x.com/Ronalfa/status/2050668875361231171)
- **swyx → second short story in 3 years**: "ok @deepfates @mada299 it took me 3 years to do my second short story but i did one." [https://x.com/swyx/status/2051025640657449249](https://x.com/swyx/status/2051025640657449249)
- **swyx Locker chrome extension** — community-built off swyx's earlier RFC for a "tldraw + image-input augment" extension. [https://x.com/zachmeyer/status/2050958850883199054](https://x.com/zachmeyer/status/2050958850883199054)
- **DeepSeek V4 gloating**: Jia-Bin Huang RT'd by swyx — "Keep getting rate-limited by Claude, so I tried out DeepSeek V4 for the first time. After 10M+ tokens, holy crap the cost is …🤯". swyx: "efficiency is back on the menu again boys." [https://x.com/jbhuang0604/status/2050686882653065496](https://x.com/jbhuang0604/status/2050686882653065496)

## Videos worth watching

- **Vibe-Kanban shutdown clip (tokengobbler at AIE EU)** — short clip of the live shutdown moment. [https://x.com/tokengobbler/status/2050832952666317272](https://x.com/tokengobbler/status/2050832952666317272)
- **AI Engineer — "Software Engineering Is Becoming Plan and Review"** (tokengobbler) — full talk that wraps the Vibe-Kanban story. [piped.video/watch?v=W76woOYH](https://piped.video/watch?v=W76woOYH)
- **Mattpocock — `/triage` skill demo** — fewer-cuts cinematography, the skill is ~useful immediately. [https://x.com/mattpocockuk/status/2050583807665778872](https://x.com/mattpocockuk/status/2050583807665778872)
- **lucasmeijer — Pragmatic talk v1** (cut to 20 min, 60K+ views online). [piped.video/watch?v=fdbXNWkp](https://piped.video/watch?v=fdbXNWkp)
- **LlamaIndex / Jerry Liu on VentureBeat** — "the orchestration framework era is over" (recirculated this weekend). [piped.video/watch?v=HbXvX-Kt](https://piped.video/watch?v=HbXvX-Kt)

## News articles

- **VentureBeat — "The AI scaffolding layer is collapsing: LlamaIndex's CEO explains what survives"** — Jerry Liu's framing piece, still circulating. [https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- **OpenAI Developers — "Codex for Open Source"** (relevant to ClawSweeper deployment): API credits + 6 months of ChatGPT Pro with Codex + Codex Security for OSS maintainers. [https://developers.openai.com/community/codex-for-oss](https://developers.openai.com/community/codex-for-oss)
