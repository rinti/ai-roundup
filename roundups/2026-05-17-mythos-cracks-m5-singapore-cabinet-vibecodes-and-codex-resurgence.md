---
title: "Mythos Cracks Apple's M5, Singapore Cabinet Vibecodes Governance & Steipete Pushes Codex"
date: "2026-05-17"
summary: "The story of the year in cybersecurity dropped quietly on a Saturday: **three researchers used Anthropic's Mythos to build a working macOS kernel exploit that walks around Apple's M5 Memory Integrity Enforcement** — the flagship feature Apple spent five years and billions building. Bug found April 25, working exploit May 1, hand-delivered to Apple Park. Theo's thread (294k views, 1.6k likes) framed it as *'still getting worse guys'*; hours later **`-claude-mythos` was spotted in Google Cloud Console**, suggesting Anthropic may serve the unreleased model to GCP customers. Meanwhile at AI Engineer Singapore, **Cabinet Minister Vivian Balakrishnan demoed his personal NanoClaw running on a Raspberry Pi** for parliamentary affairs, hacking WhatsApp and graph-memory on SQLite — drawing swyx's *'wtf is this vibecoded country man'* (71k views). Singapore Govtech projected **1.3B agents in-country in 2 years and a national MCP gateway**. swyx called **Codex *'completely unrecognizable from 3 months ago — agentic Excel on Mac'***. Peter Steinberger doubled down with *'deslop your Claude code if you haven't yet switched to Codex'* (91k views, 354 likes) as **clawpatch.ai** testimonials rolled in. **Lossless-claw 0.10.0** shipped tree-based compaction for *'infinite'* OpenClaw context; **Codiff 0.1** landed as a local agent-output reviewer; Anthropic's **Sholto Douglas opened DMs** soliciting Claude frustrations for the next model. Armin Ronacher asked for PR-authors to **declare their own understanding** (31k views). Matt Pocock used **/grill-me to fix a toilet**. Simon Willison tracked **OpenClaw's six rebrands since November**: Warelay → CLAWDIS → CLAWDBOT → Clawdbot → Moltbot → 🦞 OpenClaw."
tags:
  - AI Security & Risks
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI Updates
  - Claude Code & Anthropic Updates
  - Industry & Misc
---

# AI Roundup — May 17, 2026

## AI Security & Risks

### Mythos walks around Apple's M5 MIE in 6 days

[Theo's quote-amplification](https://x.com/theo/status/2055731651788029996) (294k views, 1.6k likes, 35 retweets, 73 replies) of an unnamed researcher report became the most-shared cybersecurity story of the weekend:

> Three researchers used Anthropic's Mythos to build a working macOS kernel exploit that bypasses Apple's M5 Memory Integrity Enforcement, a security system Apple spent five years and billions of dollars building. Bug found April 25. Working exploit May 1. Walked into Apple Park to deliver the report in person.
>
> MIE was the flagship security feature of the M5 and A19, designed to kill the entire memory corruption bug class. According to Apple's own research, it disrupted every known public exploit chain against modern iOS.
>
> They didn't break MIE. They walked around it. **Data-only attack, no pointer manipulation, standard syscalls from an unprivileged user to root.**
>
> The 55-page technical report drops after Apple patches. This is the story of the year in cybersecurity.

Theo's framing — *"It is still getting worse guys"* — drew the predictable mix: [ByteCrafter's *"five years and billions, beaten by a 6 day weekend project. brutal"*](https://x.com/bytecrafter_1/status/2055748358640394723), [Waffle's optimist take](https://x.com/honkinwaffle/status/2055733966016245999) (*"short term patches are more frequent and frustrating. Long term more secure computing"*), and [Rhys Sullivan's exasperated *"not really sure what we're supposed to do"*](https://x.com/RhysSullivan/status/2055733710885200232). The most considered reply came from [Alper Ferudun](https://x.com/AlperTheKing/status/2055742681809093057):

> MIE exploit stories are about tooling boundaries. Crash triage plus deterministic repros can turn kernel exploitation into constraint solving when the model sees panic logs, allocator state, and patch history.

This sits next to [Ben Cherny's catch](https://x.com/AndrewCurran_/status/2054975129621495973) from Thursday — *"Mythos has cracked MacOS. It took five days"* — so the story has been bouncing around for two days, but Saturday is when it broke into mainstream AI-twitter.

### `-claude-mythos` shows up in Google Cloud Console

A few hours after the macOS thread, [Theo retweeted a TestingCatalog spot](https://x.com/theo/status/2055805219947290762) (96k views, 476 likes) of **`-claude-mythos`** appearing in the Google Cloud Console model list:

> ANTHROPIC 🔥: Claude Mythos model has been spotted on Google Cloud Console.
> `-claude-mythos` 👀
> It is hard to imagine that Anthropic would change its mind and release it publicly but they could act as a model provider for those companies who have access to the model and run their stuff on GCP.

Theo's only commentary was *"Predicted this 🙃"* — referring to his earlier line that Anthropic would commercialise Mythos to a limited audience rather than fully ship or fully withhold it. [B43RDYB0Y's reply](https://x.com/0XB34RDYB0Y/status/2055806810091618582) — *"It is in gcp but not freely available. Maybe a prep push for release soon?"* — captures where the speculation has landed.

## Agentic Coding & Agent Harnesses

### Steipete: "deslop your Claude code if you haven't yet switched to Codex"

The headline post in the Codex-resurgence narrative came from [Peter Steinberger](https://x.com/steipete/status/2055747016727167035) (91k views, 354 likes, 20 retweets, 24 replies): a flat, declarative *"deslop your Claude code if you haven't yet switched to Codex"* in response to a clawpatch user fixing slop their Claude Code had laid down. The most useful reply came from [Yichen](https://x.com/gweeyc/status/2055802066573090896):

> i review agent-generated code daily. the real value of running claude output through codex isnt that codex catches more bugs. two different model families have different failure modes. **the best way to validate ai written code is with a different ai.** tool switching is proxy for model diversity in your verification stack.

[Henry Dowling](https://x.com/henrytdowling/status/2055789274394755195) asked the obvious follow-up — *"Do you see openclaw as the 'personal assistant' version of codex?"* — Steipete: *["exactly"](https://x.com/steipete/status/2055859334538469729)*. Daniel Endara reported his [clawpatch usage pattern](https://x.com/danielendara/status/2055760862510526794) (16k views): *"I had Codex (no setup necessary) get the hang of clawpatch by just updating itself from the regular repo. Then iterate over all the findings."* And [Codex Engineering Lead Thibault Sottiaux](https://x.com/thsottiaux/status/2055707616605835333) closed the loop late Saturday: *"Codex usage limits have now been reset across all paid plans. Enjoy the weekend!"* — after fixing two regressions in GPT-5.5 over the prior 48 hours.

The dissent worth quoting is [ByteCrafter](https://x.com/bytecrafter_1/status/2055803027932803302):

> codex is good but I keep hitting the same wall on longer python refactors. claude code with a tight set of skill files wins those for me. honestly **the slop is mostly in my own skill files**, swapping the agent doesn't help much there.

A related milestone from earlier in the day: [@steipete shared a benchmark](https://x.com/steipete/status/2055570810513850777) (279k views, 1.6k likes) of OpenClaw vs Hermes Agent on Qwen 35B local, scraping GitHub star history into a live dashboard — **OpenClaw 203k tokens / 12m, Hermes 257k tokens / 33m**. Steipete: *"Looks like our focus on performance paid off."*

### Lossless-claw 0.10.0 — tree-based compaction for "infinite" OpenClaw context

[Steipete amplified](https://x.com/steipete/status/2055658429645983756) (116k views, 971 likes, 47 retweets, 63 replies) the [lossless-claw 0.10.0 release](https://github.com/) — the "long chats survive" release:

> Lossless is a really interesting concept for OpenClaw to have an **"infinite" context window/memory**. It compacts conversations in blocks that the model can refer to, building a tree to look up past messages.

Release-note highlights:

> 🧵 recall spans rotated conversation segments
> 🧹 full-sweep compaction replaces cache-churning incrementals
> 🧊 hot prompt caches stay protected under normal pressure
> 🔁 bootstrap/restart transcript weirdness fixed

When [@KeithBirminghan asked Steipete which memory stack he personally uses](https://x.com/KeithBirminghan/status/2055694457601765633) — *"integrated memory/wiki/dreaming? Or do you use stuff like lossless/hyperspell"* — Steipete's reply was a one-word *["I use stock"](https://x.com/steipete/status/2055694532788863341)*, a quiet admission that the ecosystem has out-engineered his own daily needs.

### Codiff 0.1 — fast local code reviews for agent output

[Christoph Nakazawa shipped Codiff 0.1](https://x.com/cnakazawa/status/2055881241677668637) (17k views, 156 likes, 12 retweets) — *"the best companion for reviewing output of coding agents."* macOS release on [github.com/nkzw-tech/codiff](https://github.com/nkzw-tech/codiff). Features: fast local code reviews, optional LLM walkthroughs, inline review comments. The best feedback came from [Timur Yessenov](https://x.com/Timur_Yessenov/status/2055892593482063903):

> I'd make the review show two things separately: **what the agent intended to change, and what actually changed in the diff**. That catches a lot of the "looks fine until you read the side effects" failures.

Nakazawa's response: *"Send a PR with your idea for it."*

### Mitsuhiko: "declare your own understanding of your PR"

[Armin Ronacher](https://x.com/mitsuhiko/status/2055681006623986039) (31k views, 167 likes, 9 retweets, 21 replies):

> I think it would be great if people were upfront about declaring their own understanding of a topic / their pull request. **Now that everybody can talk confident with their clanker it becomes way too hard to understand if they knew what they were doing when they prompted it** :(

Follow-up: *["I was trying to understand a DS4 PR when I wrote that tweet"](https://x.com/mitsuhiko/status/2055705558884188432)*. [antirez echoed](https://x.com/antirez/status/2055695733735510356) (4k views, 75 likes): *"I'm suffering a lot from issues/PR descriptions that could be 2 lines and are instead 3 pages of bot generated stuff."* Ruff's [Charlie Marsh added](https://x.com/charliermarsh/status/2055729345822413057) (2k views, 30 likes): *"Unfortunately, by volume, most PRs are just noise now. It's a huge bummer."*

The most actionable reply came from [Matt Harrison](https://x.com/__mharrison__/status/2055796893889012127):

> I think it would be great if projects had systems/constraints/checks/pre-commits/tests/AGENTS.md to enforce and reject PRs that don't match some threshold, regardless of the mechanism used to create said PR.

Mitsuhiko followed up later in the day with a [satirical proposal](https://x.com/mitsuhiko/status/2055689770827645360): *"the first time one submits a PR they need to jump on a video chat with the maintainer to explain their PR. If they fail they are banned from GitHub."*

### Sholto Douglas (Anthropic) opens DMs to fix Claude

[Sholto Douglas](https://x.com/_sholtodouglas/status/2055836032168575143) (143k views, 706 likes, 52 retweets, 544 replies):

> When do you reach for other models instead of Claude? What can we do better? Hit me with all of your frustrations. dms open. If you can give me detail (e.g. specifics/transcripts) — it'll help a lot in finding out exactly what we need to do to improve the next model.

The thread is gold for anyone interested in Claude's failure modes — Sholto is replying with *"link me examples!"*, *"extremely useful, thank you"*, *"any chance you'd send me the transcript?"* in earnest. Greatest hits from the replies:

- **Code review gaslighting** ([Dmitry Ishkov](https://x.com/swe_dima/status/2055910481626374623)): *"Half the bullet points look like: 'this is wrong, this is why <long reasoning>, actually no, disregard.' It needs to be able to remove the bullet points it ruled out on its own before spitting them out."* Sholto: *"great example — super actionable, thank you."*
- **Bilingual output** ([Johan Adda](https://x.com/YokoAdda/status/2055911657210028342)): *"If I ask it to write in French instead of English, it does weird sentences, mixes tons of English words."*
- **Skim-reads big inputs** ([ed17es](https://x.com/ed17es/status/2055867590791008321)): *"Claude just overlooks some things. I passed it the transcript of a conversation with chatgpt and told it to extract all the ideas. I had to run the same prompt 4 or 5 times until it did extract all the information."*

If you've been frustrated with Claude on a specific task and have a transcript handy, this is the canonical window to send it.

## Codex & OpenAI Updates

### AI Engineer Singapore: Cabinet Minister demos NanoClaw on Raspberry Pi

The two-day AI Engineer Singapore conference dominated swyx's timeline (and ours). The set-piece moment: [Singapore's Minister for Foreign Affairs Vivian Balakrishnan](https://x.com/VivianBala/status/2055520455981924826) walked through his **personal AI agent built on NanoClaw running on a Raspberry Pi**, used in actual parliamentary work, hacking around WhatsApp and using a graph-memory layer on SQLite. swyx's reaction-tweet ([71k views, 463 likes, 59 retweets, 46 replies](https://x.com/swyx/status/2055452778118500551)):

> holy shit lmao @Gavriel_Cohen he's seriously using this thing for conducting the foreign policy/parliamentary affairs of singapore — and sharing his stack on how he is hacking around WhatsApp and doing graph memory on SQLite. **wtf is this vibecoded country man**

The full talk is on [VivianBala's account](https://x.com/VivianBala/status/2055520455981924826). [Kyle's gem of a moment](https://x.com/zeroxkyle/status/2055469774784926192): *"He says the barriers to accessibility have collapsed — his setup was not created by him; and that memory is the next frontier (LOL)."* swyx also flagged a [head-of-AI-GovTech statistic](https://x.com/swyx/status/2055470634331750588) projecting **1.3 billion agents inside the country in the next 2 years and a national MCP gateway**. [Presciente's reply](https://x.com/Presciente/status/2055487008227614984) is the macro point: *"whoever owns identity and rate limits at the national layer ends up owning the agent economy."*

### swyx on Codex: "agentic Excel on Mac"

The other AIE Singapore set-piece was the [Codex demo](https://x.com/swyx/status/2055494400252481687) (which Greg Brockman amplified Saturday morning — [55k views](https://x.com/gdb/status/2055693644443623788)):

> gotta say Codex is completely unrecognizable from 3 months ago. guys went extreme founder mode on this thing @gabrielchua was demoing this and I was like *"you guys have agentic Excel on Mac"*

Earlier on Friday Codex Engineering Lead [Thibault Sottiaux dropped Codex roadmap hints in his keynote](https://x.com/angadsg/status/2055464399805272335). The whole event narrative all points the same direction: Codex has become the *enterprise-and-everywhere* agent, OpenClaw is the *personal assistant*.

## Claude Code & Anthropic Updates

### Simon Willison: OpenClaw has rebranded 6 times since November

For his [PyCon US lightning talk](https://x.com/simonw/status/2055763661525024891) (9k views, 61 likes), Simon Willison ran a script against the OpenClaw GitHub repo to track every name it's had since November:

> Warelay → CLAWDIS → CLAWDBOT → Clawdbot → Moltbot → 🦞 OpenClaw

[Notes and script on his site](https://simonwillison.net/2026/May/1/). [Neosphere's reply](https://x.com/neosphere_inc/status/2055825886390407169) is the best gloss: *"Warelay, CLAWDIS, CLAWDBOT: identity crisis in commit messages. Moltbot is the capitulation. **OpenClaw is the first one that doesn't explain itself.**"*

### ClaudeDevs: 5-hour and weekly rate limits reset

[@ClaudeDevs](https://x.com/ClaudeDevs/status/2055347539923308703), Friday afternoon: *"Happy Friday! We've reset everyone's 5-hour and weekly rate limits."* This is the second consecutive Friday Anthropic has dropped a weekend rate-limit reset — at this point it functions as a tacit acknowledgement that programmatic Claude Code usage is the dominant pattern and that the artificial weekend dip is bad for retention.

## Skills, Workflows & Dev Tools

### Matt Pocock: using /grill-me to fix a toilet

[Matt Pocock](https://x.com/mattpocockuk/status/2055917944308195396) (3k views, 42 likes): *"Using /grill-me this morning to help me fix a toilet. Let's see how this goes."* [Outcome](https://x.com/mattpocockuk/status/2055919719618695580): *"It convinced me to call a plumber, sweet."* Adoption of his **/grill-with-docs** skill is also picking up — [Brian Mosley reported](https://x.com/Brian_Mosley_UK/status/2055923352712221001) that grilling worked through obscure terminology like *"when a prospective steward is able adopt a spark which they've already pledged to, the orange accept button is too far down the page and gets clipped by the navigation gantry,"* prompting Pocock's take:

> A shared language, curated with the agent, means you're able to describe requirements with perfect precision.

Worth noting: there's now a [public skill discussion](https://x.com/lastbtnotleast/status/2055662021291503910) flagging that the *.md* free-form nature loses the structured data that DDD practitioners want.

### Thariq: "HTML continues to be undefeated"

[Thariq](https://x.com/trq212/status/2055903660476129723) (24k views, 290 likes, 7 retweets, 43 replies) posted *"HTML continues to be undefeated"* with an embedded Claude artifact. [Wilkins Micawber's pushback](https://x.com/Me5466255992308/status/2055919888179322889) is the most interesting reply:

> The reason to resist HTML over Markdown is that multimodality seems to be a **sycophancy multiplier** for the models. Just look at the rosy prose — "built around what you love", "recommendation in one breath" — I do not want to be talked to that way.

A useful counterpoint to last week's HTML-eats-markdown discussion: the artifact mode may quietly bias toward marketing-prose tone.

## Industry & Misc

### Theo dunks on Atlassian (and gets dunked back)

[Theo Browne](https://x.com/theo/status/2055890005307085280) (112k views, 750 likes, 14 retweets, 57 replies):

> My JIRA dashboard at Twitch took over 2 minutes to load. The guy who built the infrastructure pointed the mic at the ground instead of his face. Coincidence? Probably.

The dunk was on a viral CG thread reporting that Atlassian fired the senior engineer who'd built their Envoy-based infra (sidecars for auth/logging/rate-limits, DynamoDB+SQS, automated VM deployments). The reply ratio went sideways fast — [@p0u4aa](https://x.com/p0u4aa/status/2055899315475010003) (4k views, 83 likes): *"Calling out a single developer for something like this, simply to get impressions. I hope you find your peace."* [@SolutionB2u](https://x.com/SolutionB2u/status/2055901138038243641) (4k views, 92 likes): *"Bit unnecessary tbh. Guy just lost his job after 8 years and you're dunking on him over mic placement?"* But Theo did concede [in a sub-thread](https://x.com/theo/status/2055898993834799168) that Twitch's video-on-demand stack — a custom WASM player instead of standard HLS — was *"a mistake and they will pay the consequences for a long time."*

### Theo also called the Grok V9 / Cursor data play

Sub-thread worth flagging from earlier: when Elon posted that *"our recently completed Grok V9 1.5T run is looking great and that is before Cursor data is added in supplemental training,"* [Theo replied](https://x.com/theo/status/2055465492836659216): *"Called it, they are gonna use Cursor's data to leapfrog."* The acquisition's data-rights angle is now a stated training-data play.

### PrimeIntellect: Opus 4.7 holds the nanoGPT speedrun record

A few days old but still rolling — [Prime Intellect's autonomous-AI-research run](https://x.com/PrimeIntellect/status/2055056380881744365) (522k views, 1.7k likes, 153 retweets) had **Claude Code (Opus 4.7) and Codex (GPT-5.5) run autonomously on the nanoGPT speedrun optimizer track** using idle compute — ~10k runs, ~14k H200 hours. **Opus 4.7 now holds the record at 2,930 steps vs the 2,990 human baseline.** [0xMetaLabs's framing](https://x.com/0xMetaLabs/status/2055189399898587510): *"The recursive part is what matters. AI models are now helping optimize the training process for future AI models."* Worth pairing with Mythos-on-MacOS as evidence that frontier models are now finding optima humans can't.

### Mitsuhiko amplifies "Zero" — a programming language built for agents

[Mitsuhiko boosted](https://x.com/mitsuhiko/status/2055648228482093079) Chris Tate's [Zero language announcement](https://x.com/ctatedev/status/2055434061322039377) — *"a programming language for agents. A systems language that was faster, smaller, and easier for agents to use and repair. Explicit capabilities. JSON diagnostics. Typed safe fixes. Made for agents on day zero."* Armin: *"I did not try it yet, but it does quite a few of the things that I wrote about recently!"* — referencing his [Feb 2026 essay](https://lucumr.pocoo.org/2026/2/9/a-) on what an agent-friendly language looks like.

### Theo, briefly funny

Worth grabbing for the dataset — [Theo](https://x.com/theo/status/2055793010370306556) on programmatic Claude Code use:

> To prevent "programmatic use", Claude Code may now request webcam access to assure user is present when prompting.

A callback to [Tuesday's joke](https://x.com/theo/status/2049645973350363168) that an *OpenClaw* mention in a recent commit JSON blob would either get refused or surcharge by Claude Code — and to Anthropic's Wednesday formalisation of programmatic-usage metering. Theo's own update on the joke landed Sunday morning: *"now that I think about it, this is kind of dumber than the webcam check joke I made."*

### Brockman: Codex is the app

Closing out the Codex-resurgence narrative — [Greg Brockman quoted swyx](https://x.com/gdb/status/2055693644443623788) on the *"agentic Excel on Mac"* line and added: *"the Codex app is in a category of its own. 'agentic excel on mac' is an interesting description."* For the OpenAI leadership to publicly endorse an external framing of the product as a *category of its own* — three months after the same product was widely considered the also-ran in this race — is the headline subplot of the weekend.
