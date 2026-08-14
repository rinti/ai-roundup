---
title: "DeepSeek Open-Sources Its Harness, Claude Maintains Anthropic's Apps & Flash Again"
date: "2026-08-14"
summary: "The harness layer got a new open-source heavyweight overnight: **DeepSeek Harness v0.1** landed MIT-licensed, built on the Cordis meta-framework around one idea — *everything is a plugin* — and blew past **75,000 GitHub stars** in a day, with Armin Ronacher openly rethinking Pi's own harness refactor because of it (and HuggingFace's Elie noting ~20% of its commits came out of Codex worktrees). Meanwhile Boris Cherny published receipts for the most concrete \"agents maintain the codebase\" experiment yet: a Slack channel where Claude runs a crash fuzzer, a dup unifier, a dead-code remover and an abstraction police daily across iOS/Android/desktop/web/CLI — **388 PRs opened, 180 merged**, roughly 1 in 50 noise. Google shipped **Gemini 3.7 Flash** three weeks after 3.6 with an introductory price that doubles on New Year's Eve (Simon Willison: who plans to still use this model in five months?), Z.ai dropped **GLM-5.3** off a 743B base, OpenAI previewed **Ultrafast** GPT-5.6 Sol at 14x speed and shipped Computer History to the ChatGPT desktop, and the discourse quietly converged on a new agentic primitive: making the agent interrogate *you* before it writes anything."
tags:
  - Agentic Coding & Agent Harnesses
  - Grilling the Human
  - Models & Benchmarks
  - Codex & OpenAI
  - Kill My SaaS — The Moat Postmortem
  - Documents, Context & Evals
  - Other Bits
---

# AI Roundup — August 14, 2026

## Agentic Coding & Agent Harnesses

### DeepSeek Harness v0.1: MIT, plugin-all-the-way-down, 75k stars in a day

The biggest thing on the timeline, by a wide margin. [DeepSeek shipped Harness v0.1 as a developer preview](https://x.com/deepseek_ai/status/2087887408440164663) (**16.6k likes, 2.7M views**) and open-sourced the whole thing under MIT:

> "Powered by the Cordis meta-framework, DeepSeek Harness is an agent harness built around one core idea: **Everything is a plugin.** Models, tools, skills, sessions, sandboxes, filesystems, loops, orchestration, and UI are ALL implemented as plugins, and can be mixed, matched, replaced, and extended."

[`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness) is TypeScript and sitting at **~75,600 stars** already. Two details from the replies that say a lot about where we are: someone noticed [the oldest file in the repo is `.claude`](https://x.com/virtualdotworld/status/2087908862171185365), and HuggingFace's Elie Bakouch [pointed out](https://x.com/eliebakouch/status/2087908415775408346) that "deepseek harness was heavily developed using codex, at least ~20% of commits and PRs are coming from codex worktrees" — which prompted [VB from HF to ask DeepSeek for Codex feedback](https://x.com/reach_vb/status/2087932251841405086) (RT'd by steipete). Community desktop wrapper [already exists](https://x.com/SalathielZhang/status/2087933208973422954). And the mood in one line, from [Meshak](https://x.com/_Meshak/status/2087908011306287123) (156 likes): "there are already so many harnesses that im using and it seems like I need a harness to manage those harnesses."

**The reaction that matters** is Armin Ronacher's, because he's building a competing harness in the open. [638 likes, 34.6k views](https://x.com/mitsuhiko/status/2087973032102941122):

> "NGL, I like what I'm seeing in the deepseek harness. Definitely makes me think a bit about how we're approaching the harness refactor in Pi."

He's [not through the Cordis paper yet](https://x.com/mitsuhiko/status/2087984184048353515) ("I was overwhelmed by the paper and didn't make it far yet"), and the thread turns into a genuinely good design argument about how far the plugin thesis should go:

- The best metaphor, from [君子中庸](https://x.com/Chinese_XU/status/2088093389233230084): **"Pi is the CPU. DSH is a PC motherboard with a BIOS."**
- The skeptic's case, from [Vinod Sankar](https://x.com/VinodSankarX/status/2088130730580664655): "Cordis is a cool idea, but may be too complex. History of coding languages and frameworks show simplicity trumps sophistication" — he'd rather have a plain shared-lib plugin manager with a manifest, lazy loading and dependency resolution.
- The usability counterweight, from [spike](https://x.com/alert090579992/status/2088107266507686000): "I think the concept of modes is quite good. DSH has four preset modes, allowing for quick switching between different scenarios... Aside, I actually prefer Pi; the learning curve of complete plug-in approach is steep for most."
- And the diagnosis of where Pi might actually be weak, from [ArcadiaLin](https://x.com/ArcadiaLin2024/status/2088109065524105636): "Maybe Pi's shortcoming is that its extensions don't collaborate with each other enough, and dsh solves that problem."

Several people are asking Armin for a written comparison of the two approaches. If it lands, it'll be the harness-design document of the month.

### Boris Cherny: Claude has been maintaining Anthropic's apps for weeks — 388 PRs, 180 merged

The most useful "what does this actually look like in production" post of the day ([2,974 likes, 242k views](https://x.com/bcherny/status/2088014489438621990)). There's a Slack channel called `proj-claude-maintains-apps` where Claude Tag runs daily routines across iOS, Android, Desktop, web, CLI and the Agent SDK:

- **Crash fuzzer** — open the app in a simulator, tap around until something crashes, root cause it, ship the fix
- **Dup unifier** — scan for similar-yet-slightly-divergent abstractions, PR them into one
- **Dead-code remover** — delete statically unreachable code; for *suspected* dead code, add logging and check tomorrow before removing
- **Abstraction police** — fix leaky abstractions

> "Over the last few weeks, these routines have opened **388 PRs** across our repos, **180 of which we merged** after Claude Code Review + human review... Claude generally gets these PRs right on the first shot, and if it doesn't, we ask Claude to tune its routines so it's better the next day. Sometimes it takes a few days of tuning."

The operational answers in the replies are the reusable part:

- **Noise rate:** asked how they triage the 208 that didn't land, Boris says [most are simply unreviewed — "maybe 1/50 or so is noise, and in that case we tune the routine that generated them"](https://x.com/bcherny/status/2088022114163130511).
- **Review fatigue:** ["Lots of tests! Usually these PRs tend to be pretty small and self contained, and quick to review."](https://x.com/bcherny/status/2088022024623112476)
- **The actual prompt** is [in the thread](https://x.com/bcherny/status/2088022665017901167) and is shorter than you'd expect — "make routines for each that use workflows to run the real apps (no mocks) and fuzz them to trigger crashes, then put up fix prs... each pr must run `/verify` and post a repro and truth table to the pr." His note: "Doesn't need super specific instructions with modern models."
- **Models:** [mostly Opus, "only need Fable for a few of the hard routines"](https://x.com/bcherny/status/2088021350871175304). And [Sonnet 5 would work too](https://x.com/bcherny/status/2088140601967730978), with the honest caveat: "If using Sonnet I'd spend a bit more time auditing PRs and iterating on routines' prompts then adding in checks and guardrails."
- On [why static analysis isn't enough for dead code](https://x.com/bcherny/status/2088022665017901167): "Dead code is sometimes statically analyzable, but often it isn't. This covers the latter also."

Bonus honesty, and the most-liked reply exchange in the thread — asked whether it's nice not being downgraded from Fable to Opus 4.8, [Boris](https://x.com/bcherny/status/2088021539883208958) (112 likes): **"I use the same Fable as everyone else, and also feel the pain of downgrades. We landed improvements here, and more to come."**

You can build these yourself at `claude.ai/code/routines`, or just ask Claude Code / Tag.

### GooeyPi: a GUI for the Pi family, because not everyone wants a TUI

LLMJunky shipped [GooeyPi](https://x.com/LLMJunky/status/2087984540828807349) ([729 likes, 75.7k views](https://x.com/LLMJunky/status/2087984540828807349)) — a desktop GUI covering Pi, Oh-My-Pi and Prime Agent, built because he wanted a separate harness for local models without constantly switching configs "and I didn't want to go back to the TUI (nerds)."

Feature list is not small: agentic browser, realtime voice agent, local-or-API voice transcription, computer use (via [trycua](https://x.com/LLMJunky/status/2087987150130180328)), an automation desk, agent-to-agent messaging, an ask-question tool, git control, terminal, and pets. Beta on macOS/Linux/Windows at [`am-will/gooey-pi`](https://github.com/am-will/gooey-pi) — [Windows package isn't signed/built yet](https://x.com/LLMJunky/status/2087986316529041746), build from source. Cost of production, per the author: ["I spent 4B tokens on this project."](https://x.com/LLMJunky/status/2087990838160744565) Demos: [local DS4Flash running inside it](https://x.com/LLMJunky/status/2087995923804635302) and [scheduled automations by voice](https://x.com/LLMJunky/status/2088001515063558349).

The sentiment in the top reply is the story here, from someone who dailies nvim: ["ive been getting increasingly tired of all the tui software recently... for agent work with browsers, voice, computer use, etc. a proper gui just feels right."](https://x.com/0xagility/status/2088058958040781285) Pair it with steipete's "cli was a year ago, apps maybe 6 months" from yesterday and there's a trend line.

### Small but good: Claude Code desktop auto-continue

[Claude Code desktop now has an auto-continue checkbox](https://x.com/ClaudeDevs/status/2088014831605702937) — hit your usage limit, tick the box, and it picks up where it left off once the limit resets. Also, the Cowork team is [running 15-minute office hours for non-engineering users](https://x.com/_catwu/status/2088006642189361564) (marketing, sales, finance, legal, ops) if you have opinions about that product.

## Grilling the Human

A real pattern crystallized in the last 24 hours: the highest-leverage thing an agent can do before writing code is **interrogate you**.

Theo, [3,393 likes, 132k views](https://x.com/theo/status/2088057260807532867):

> "Gotta say that Matt's 'grill-me' skill is exceptional and helps a ton with getting agents aligned with my brain."

And the payoff, [an hour later](https://x.com/theo/status/2088062833506533871): **"Just did a long grill and the 27th question made me realize what I really want. Ended up cutting scope by like 90%."** People in the thread are reporting [100+ question sessions](https://x.com/onionl5236/status/2088129532859674965) and [one 5-hour, ~500-question run](https://x.com/jewei/status/2088128225855832204). Best reply, from [Dmitry Lyalin](https://x.com/LyalinDotCom/status/2088064592219918503): "I don't know man anytime I want something to grill me I just send you a message." Practical ask in the thread: [make it the default for plan mode](https://x.com/DylanBurnette/status/2088063338504667406).

swyx then made the obvious optimization and it turns into the best small design discussion of the day. [His `/align-me` modification](https://x.com/swyx/status/2088073777779515615):

> "human i/o is costly, so after listening to @mattpocockuk and @trq212 i made an /align-me modification which allows for **batches of questions instead of round-by-round**. same intuition as spec decoding, you speed up by looking ahead 2-10 steps. works INCREDIBLY for design explorations."

The pushback is worth reading in full, because it's the same tradeoff speculative decoding has:

- ["What happens when the first answer changes the rest of the batch?"](https://x.com/hobae_cubig/status/2088082410290524362) — swyx: ["then just reask lol"](https://x.com/swyx/status/2088130184054784233)
- [Moe](https://x.com/katibmoe/status/2088089867741999118): "Question 3 was written before you knew the answer to question 1, so a batch locks in a branch that a round-by-round pass would have thrown away. Do you re-plan after a batch lands, or just take the answers?"
- The feature request that should exist, from [Mykyta Pavlenko](https://x.com/mktpavlenko/status/2088088233238294540): **"at the 10-step end, i'd want /align-me to order the questions by dependency, so a basic constraint can kill the downstream questions before they reach me."**
- The argument *for* batching that nobody expected, from [Anees Merchant](https://x.com/aneesmerchant/status/2088145240742109298): **"Batching the questions also changes what people answer. Round by round you get whatever is top of mind. Give someone five at once and they start comparing them, and the contradictions in their own spec surface before anything gets built."**
- And the one-liner, from [Nick](https://x.com/nick_shlv/status/2088105966248018206): "round trips were the latency, not the model."

Per [one reply](https://x.com/TheAnirudh/status/2088157780377317589), Matt has already updated the skill to batch when it makes sense. swyx also [rounded up the three current best skill talks](https://x.com/swyx/status/2088074149260673441) — Matt Pocock's latest, Thariq's latest, and Phil Schmid's — "all 3 of these frontier skills guys contributing to the discussion is a beautiful thing to see."

## Models & Benchmarks

### Gemini 3.7 Flash, three weeks after 3.6, with a pricing clock on it

[Logan Kilpatrick announced 3.7 Flash](https://x.com/OfficialLoganK/status/2087948481721962669): fast, **50% lower price than 3.6 Flash through end of year**, "strong intelligence increase in only ~3 weeks (thanks to some awesome algorithmic improvements)," available in the API, AI Studio, Antigravity and Android Studio. It's [already live in Cursor](https://x.com/leerob/status/2087959106200236094) with [their eval numbers published](https://cursor.com/evals).

Simon Willison found the weird part ([785 likes, 74.9k views](https://x.com/simonw/status/2087964264275587565)):

> "The 'introductory pricing' for the 3.7 Flash model is really weird. It's scheduled to **double in price on December 31, 2026**, but who would anticipate still using this model five months from now? Especially since 3.6 Flash came out just three weeks ago!"

The replies converge on three theories, and they're not mutually exclusive: it's a [finance/optics maneuver so the discount can later be made "permanent"](https://x.com/OliNorwell/status/2087966391139786914); it's [demand shaping — effectively an EOL date that a hyperscaler can't call an EOL date because of enterprise contracts](https://x.com/adarshsolanki/status/2087991252285309290); or it's simply [the only way to compete on price with DeepSeek/Grok right now](https://x.com/PovilasKorop/status/2087977344984313896). The counter to Simon's premise, from [two](https://x.com/rmedranollamas/status/2088020182077727159) [repliers](https://x.com/nikhilbysani/status/2087996255326937330): plenty of shops are still on 2.5 Flash for regulatory/certification reasons — "proving an upgrade is worth it is a huge pita."

Simon also ran [pelicans at high/medium/low reasoning](https://x.com/simonw/status/2087975521296728348) and then found a genuine browser bug in the output: [Safari renders the SVG correctly while Firefox and Chrome drop pieces, because there's an SVG bug Safari ignores and the others follow the spec on](https://x.com/simonw/status/2087988362401742956). Meanwhile Gemini itself [wrote a hand-authored raw-SVG "Simon on a Bicycle" and the blog post about doing it](https://x.com/LyalinDotCom/status/2088025940387401826). Theo's reaction to the release: ["We're never getting 3.5 Pro huh"](https://x.com/theo/status/2087988765755363334).

### GLM-5.3: "Built to Code. Ready for Cyber Defense."

[Z.ai shipped GLM-5.3](https://x.com/Zai_org/status/2088132965922476159) — top-tier coding and agentic capability post-trained on their 743B base, plus "a major leap in cybersecurity, setting a new standard among open models." [Tech blog here](https://z.ai/blog/glm-5.3). LLMJunky's framing is the one to keep in mind when you see the benchmark table: ["VERY IMPRESSIVE. Keep in mind this is a 750B model. This isn't 2.4T+."](https://x.com/LLMJunky/status/2088135635638874333)

### Grok 4.6 spillover: a plugin to run it inside Claude Code and Codex

After yesterday's launch, the ecosystem move: [`grok-plugin`](https://x.com/daniel_mac8/status/2088018732761117072) lets you use Grok 4.6 inside Claude Code and Codex via OAuth against an X Premium or SuperGrok account. Free and open source. Author's 24-hour verdict: "Grok 4.6 is the real deal. Smart, fast, efficient." Theo also posted [his video take](https://x.com/theo/status/2087988038924464143): "xAI is speedrunning their race to the frontier."

And the strategic tea leaf of the day, from [swyx](https://x.com/swyx/status/2088006388429828415) on the news that Elon just started following Cognition: "u guys have no idea how serious elon is about winning coding."

### Contrarian take worth logging

[LLMJunky](https://x.com/LLMJunky/status/2088056545875493349): "the 'google is dead' people are fools. you need to understand something. they only need one good model to flip that entire narrative upside-down. doesn't matter if its next week or in 6 months from now. **no one is loyal.** build the best model, people will use it."

## Codex & OpenAI

### Computer History: ChatGPT now remembers everything you did on your machine

[OpenAI shipped Computer History in the desktop app](https://x.com/OpenAI/status/2087996496088297746) — ChatGPT remembers your activity across apps and websites so "future interactions feel more personalized and require less explanation." Tibo Sottiaux's post ([3,378 likes, 344k views](https://x.com/thsottiaux/status/2088017529587573025)): "Computer history is here."

Theo's arc through it in the space of forty minutes is the most honest read anyone gave it:

1. ["I'm so deep in my AI psychosis that I think this sounds great"](https://x.com/theo/status/2088059856213406012)
2. ["I'm not gonna lie, I wanted this since Windows Recall/Rewind/whatever was announced. It got panned so hard that I kept my mouth shut. Enough time has passed that I'm gonna say fuck it and try this"](https://x.com/theo/status/2088060096266076509)
3. ["ngl this one feature is enough to ease most of my concerns"](https://x.com/theo/status/2088062083481108590)

The obvious questions in Tibo's replies are unanswered so far: [security boundaries](https://x.com/NeilBDE/status/2088159074429071591), [EU availability](https://x.com/Foxfire1st/status/2088090089695977705), [whether it's coming to Codex CLI](https://x.com/teo_sushi/status/2088089512547438852), and the one that should keep you up at night, from [Dr. Doubt](https://x.com/DrDoubtPhD/status/2088145763662745916): "can others' escaped agents see my history? wait, how about my own escaped agents — wait.."

The best demo of the feature, though, is [Tibo asking it to roast his day](https://x.com/thsottiaux/status/2088133823619895712):

> "You don't use Slack. Slack uses you. It accounted for 48% of your recorded activity. Your Mac is essentially a $3,000 Slack notification with a keyboard." / "Your productivity system is clicking 'Clear' until God intervenes. You clicked it 339 times while submitting 253 Slack messages." / "Your most-used keyboard shortcut is Delete. 1,191 times, including 1,065 in Slack."

### Ultrafast mode, and Google Docs inside ChatGPT

- **[Ultrafast preview](https://x.com/thsottiaux/status/2088019704803897705):** GPT-5.6 Sol at **up to 14x the speed**, launching first in the API to a select group of customers. Tibo: "Sometimes you have to go /ultrafast."
- **[Google Drive docs, sheets and slides open inside ChatGPT](https://x.com/thsottiaux/status/2088103609477238858)** and work side-by-side, no tab switching. Rolling out on web to Plus/Pro/Business/Enterprise. Tibo says it's changed how he writes and proofreads: "I just open it and then chat or talk my way through changes and it all happens right there in the flow."

## Kill My SaaS — The Moat Postmortem

The submissions landed yesterday; today the participants started writing down what it *means*, and that's the more interesting half.

The sharpest one, from [Brandon Chu](https://x.com/BrandonMChu/status/2087914852400435370), who shipped [speakerweave.com](https://speakerweave.com):

> "It's truly amazing how low the moat is for niche SaaS. In total, **feature parity only took ~1.5 days to hit 100% on the eval.** Then I spent 2 more days for polish and adding agentic features, a CLI+MCP... This was also done with **zero domain knowledge** of conference software. I'm not a SaaS doomer, and many incumbents have durable moats wrt distribution/brand and handling high-risk things like money, but damn, there are certainly going to be lots of zeros, especially in the feature-shallow niches."

Two more angles:

- **The industry-scale version**, from [Brian](https://x.com/brianakaka/status/2087793010494906567): "What happens if you put out a 10K bounty to vibe code a narrow vertical b2b software product by cloning the dominant software? The quality of the entries is incredible... **Boom: industry transformation for $10,000.** Could this be repeated ad infinitum to all the software verticals that used to be too narrow to get much attention or competition?"
- **The reproducible pipeline**, from [Yazin](https://x.com/yazins/status/2087884720453411018): parse the spec doc → reconnaissance crawl of the target SaaS via Firecrawl → plan with Codex GPT-5.6 Sol High → implement with Opus 5 in Cursor → **run for 4.5 hours straight** → ~10 turns of iteration via Cursor CLI.

And the line that survives the hype, from [Sonni Dyson](https://x.com/sonnidyson/status/2087805245141172279) in swyx's [wrap-up thread](https://x.com/swyx/status/2087799423774646316): **"the moat was never the code. it was the weekend nobody had spare."** The counterpoint that should temper all of this, from [Fortress Formations](https://x.com/Fortress_LLCs/status/2088131227345658333): "Killing a SaaS in a weekend is the easy story. When the old product actually dies, customers and the repo still have to sit on one company, not a personal login."

swyx is [blasting out submission forms now](https://x.com/swyx/status/2087799423774646316); judging is ongoing in Discord.

## Documents, Context & Evals

### ExtractBench part two: every extraction system has a different blind spot

LlamaIndex kept mining their benchmark and this cut is the practically useful one — [what happens on documents that weren't born digital](https://x.com/llama_index/status/2087903295037669869). They tested 14 systems on 1950s regulatory filings, hand-filled tax forms, and pages degraded with fax thresholding, photocopier tone curves, sensor noise and phone-camera capture:

- **Codex** reads scans and handwriting above 93%, then drops to ~80% on rotated or image-only pages
- **Specialized APIs** are the exact inverse: fine on rotation and handwriting, 81% on scans
- **Gemini 3.5 Flash** falls from 88.6% to 71.1% the moment a page is scanned

> "You benchmark on clean PDFs. Production sends you a shadowed photocopy from 1953."

The failures don't overlap, which is the actionable finding: if your pipeline has one extractor, it has one blind spot. Jerry Liu's [full launch thread for Agentic Plus is here](https://x.com/jerryjliu0/status/2087898625934250095), and the [36-page whitepaper](https://x.com/jerryjliu0/status/2087559475540459746) from earlier this week has the methodology.

## Other Bits

- **Arize got acquired.** swyx: ["Dynarize is now a globally trusted $14B observability powerhouse that just got one of the best AI-native US teams in this business."](https://x.com/swyx/status/2088049159509344265) They're the first non-bigcloud presenting sponsor at [AI Engineer NYC](https://ai.engineer/nyc), Oct 12–14.
- **Free workshop, August 25** — [Kent C. Dodds, Theo, Angie Jones and John Lindquist](https://x.com/kentcdodds/status/2087975123529896319), RT'd by Matt Pocock.
- **Standard Code** teased a pipeline: [standardcode.ai](https://standardcode.ai) is a cloud coding agent with unlimited usage at a flat $49/month per seat after a $5 first week, and [jpschroeder says](https://x.com/jpschroeder/status/2087923448412610944) more open-sourcing and launches are queued — "Oh, we're bootstrapped."
- **Europe's compute answer:** Mistral [laid out a plan for 1 gigawatt of European compute by 2030](https://x.com/arthurmensch/status/2088000058910199921) with SLA-backed regional inference, five-year European Compute Unit contracts, and hosting China's GLM-5.2. The snark it drew from [Elie Bakouch](https://x.com/eliebakouch/status/2088018538669764692) (RT'd by steipete): "if someone ever asks you how behind europe is in AI you can probably send these two screenshots."
- **Theo moved his dev work to Linux** and [reports being materially happier](https://x.com/theo/status/2088015876780114397) — same week Codex shipped Linux support. He's also [bemused that people are building T3 Code contribution leaderboards](https://x.com/theo/status/2088110153719844989) after someone posted a 3.7m-lines-of-code stat.
- **Thariq's one-liner**, on a JS face-drawing doodle: ["everything truly is code"](https://x.com/trq212/status/2088049989306192106).
- **Slop watch:** Theo on the new hotness, [one hour after praising it](https://x.com/theo/status/2088127851929423990): "It does have one problem though: It is slop enough that it basically overrides my unslop skill."

---

*Sources: RSS + thread scans of @mattpocockuk, @theo, @trq212, @LLMJunky, @mitsuhiko, @bcherny, @steipete, @swyx, @simonw, @karpathy, @jerryjliu0, @potetotes, @leerob, @thsottiaux. @karpathy had nothing new in the window; @mattpocockuk and @trq212 were quiet apart from retweets; @potetotes' feed returned no items again.*
