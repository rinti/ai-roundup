---
title: "Fable 5.2 Lands Cheaper but Hungrier, 1,000 Agents Prove Fermat, Theo's Day-One Verdict, dots Multi-Computer & the Fireworks Hack"
date: "2026-11-10"
summary: "Anthropic shipped **Claude Fable 5.2 and Mythos 5.2** on the day its IPO roadshow started. Fable is 20% cheaper per token ($8/$40), up to 30% faster, and tops FrontierCode 2.0, Artificial Analysis, ARC-AGI-3 and CursorBench. It also burns far more tokens per task, so SemiAnalysis paid 31% more per task than on 5.1, and Anthropic itself says to start most work on Opus 5.5. Subscribers get **Fable resets scaled by tenure**, which Boris Cherny framed as a thank-you and the replies framed as \"three more chances to run out of Fable\". **Theo** spent the day benchmarking: a $200 plan buys about $15,000 of Opus 5.5 but only $3,000 of Fable, the model \"is making a lot of stupid mistakes I would not have expected from Opus\", and xhigh and max score worse than high on code. Anthropic's demo was **1,000 agents formalizing Fermat's Last Theorem in 28.7 hours** with only Git and a Postgres database, and Simon Willison pulled the best line from the prompting guide: tell Fable \"This codebase is yours\". Elsewhere, **Matt Pocock** defended \"Software Factory\", **lauren** said \"it's time to rewrite all software\" (8,333 likes), and **dax** got OpenCode from 8th to first on a Hugging Face leaderboard after the benchmark turned out to be dropping the model's reasoning. **OpenAI** let dots drive several of your own computers and announced Control Room, while the replies kept asking for 6.2. In security, **Fireworks AI** disclosed a second, wider breach that exposed Notion AI chat transcripts, and ChatGPT Desktop was caught forwarding SSH agents to remote machines. Also: Meta's Muse Ember, Amazon replacing Sonnet 4.6 with a small decision model, and Armin Ronacher on AI and Princess Mononoke."
tags:
  - Claude Fable 5.2 & Mythos 5.2
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI
  - Security & Privacy
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 10, 2026

## Claude Fable 5.2 & Mythos 5.2

### The launch

[@claudeai](https://x.com/claudeai/status/2119867114450268322) (85.8K likes, 11.5M views): "Introducing Claude Fable 5.2 and Claude Mythos 5.2, designed to tackle the most daunting technical challenges." The [follow-up](https://x.com/claudeai/status/2119867136361316437) repeats the split from 5.1: "Fable and Mythos are the same underlying model. Fable has strong safeguards to guard against misuse." Fable 5.2 costs [$8 per million input tokens and $40 per million output](https://x.com/claudeai/status/2119867138987176141), down from $10/$50, and is on all paid plans, the Claude Platform and the major clouds. [@ClaudeDevs](https://x.com/ClaudeDevs/status/2119868698613956992) adds that it is up to 30% faster and already in Claude Code.

The [launch post](https://www.anthropic.com/claude-fable-and-mythos-5-2) and [system card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card) are long. The parts that matter for coding:

- **Benchmarks.** FrontierCode 2.0: 49.1% at xhigh, against 32.4% for Fable 5.1, 45.5% for Opus 5.5 and 42.8% for GPT-6 Astra. FrontierSWE v2: 69.9 against Astra's 65.5. OSWorld 2.1: 89.3. Gemini 4 Carbon still leads AutomationBench (53.9 to 51.4), and Opus 5.5 still edges it on AA-Briefcase (1800 Elo to 1785).
- **Anthropic does not want you to default to it.** The post calls Opus 5.5 "our strongest daily driver" and suggests Fable as an advisor or orchestrator. The one cost argument in Fable's favor: "At High effort, Fable 5.2 scores about the same as Opus 5.5's best score (45.3% vs. 45.5%) for roughly half the cost per task".
- **Internal use.** "Over 90% of the changes merged into Anthropic's core codebase are now written by Claude (with human guidance)". An agent team migrated a production service from Python to Rust, and one engineer had Fable 5.2 coordinate over 1,000 subagents for eight days to produce an operating system that boots on a laptop.
- **Mythos 5.2.** 89.6% on CVE Rediscovery against 78.3% for Mythos 5.1. Mozilla's Brian Grinstead: "Mythos 5.2 roughly doubled the vulnerability discovery metrics of Mythos 5.1".
- **Safety.** About 55% fewer safeguard blocks than Fable 5.1. Anthropic says it deliberately held AI R&D skills such as kernel optimization and LLM architecture work to roughly Opus 5.5 level. The models also "voice suspicion that they are being evaluated more often than any of our recent models".
- **Anti-distillation.** Preserved thinking now covers every API account on Fable 5.2, and Anthropic says the change "reduced the data harvested by distillers by 90% to 99%". The practical consequence, from [@ClaudeDevs](https://x.com/ClaudeDevs/status/2119868703265419688): "Editing prior context can 400. Use compaction, context editing, or mid-conversation system messages. Claude Code, Managed Agents & Agent SDK handle this for you." If you run your own agent loop, read the [docs](https://platform.claude.com/docs/build-with-claude/preserved-thinking). [@johnroodepic](https://x.com/johnroodepic/status/2119874356935581843) has the short version: "compact at turn boundaries, never split a tool_use from its result".

Anthropic also published a model-selection guide, [Which Claude model should you build with?](https://claude.dev/blog/which-claude-model-should-you-build-with) (via [@ClaudeDevs](https://x.com/ClaudeDevs/status/2119898687803621427)). Its TL;DR is "start most work on Opus 5.5 at its default effort level, medium", move down to Sonnet 5.5 for well-scoped work, and move up to Fable for major migrations, architecture planning and leading many subagents. One rule I had not seen stated this plainly: "Past high, one more effort level can cost as much as a bigger model", so "If you're past high, test the next model up at a lower effort instead."

swyx [noticed the timing](https://x.com/swyx/status/2119878742063641056): the Anthropic IPO roadshow started the same day, and the launch "came after Astra, Argon and Carbon". The first replies to the launch were less impressed. "[So this is why Opus 5.5 felt like degraded!](https://x.com/diegoaraos/status/2119867775867040246)" "[we waited a month for fable 5.5 and got 5.2](https://x.com/buildwithhassan/status/2119867460920725799)". Theo plans to "[over read the decision to call it Fable 5.2 instead of 5.5 so bad](https://x.com/theo/status/2119890973773996488)" (1,961 likes), and [@Deepusleepy](https://x.com/Deepusleepy/status/2119892563905970640) guessed "maybe to bait openai into releasing astra?"

The [Hacker News thread](https://news.ycombinator.com/item?id=50429068) (757 comments) opened with shmoil: "Was this before you lobotomized Opus 5.5 or after?" dwohnitmok pointed at page 39 of the system card and argued that "Anthropic already has another model waiting in the wings that is significantly better than this". modeless noted that the two physics preprints Anthropic [linked](https://x.com/claudeai/status/2119899491310432269) list no authors other than Claude and sit on Hexagon, an AI-moderated arXiv alternative.

### Fable resets, scaled by how long you've paid

Subscriptions get "Fable resets" instead of a higher limit. [@ClaudeDevs](https://x.com/ClaudeDevs/status/2119868704544711108) (2,571 likes): Ultra and Team Premium subscribers get one reset if they have subscribed for under 6 months, two for 6 to 12 months, and three for more than 12 months, usable until March 8. Pro and Team Standard get a week to try Fable 5.2 up to half their weekly limit, plus one reset. Details are in the [support article](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers).

Boris Cherny [explained](https://x.com/bcherny/status/2119873095129550880) (14,848 likes): "We wanted to do more for the people who've been with us the longest. So with Fable 5.2, the longer you've been subscribed, the more Fable resets you get."

The replies split between gratitude and confusion.

- [@lozoboss](https://x.com/lozoboss/status/2119874392679383217): "A loyalty program where staying over a year earns you three more chances to run out of Fable".
- [@yevloop](https://x.com/yevloop/status/2119875352516534409): "would be nice to have just general resets".
- [@SinisterOfMemes](https://x.com/SinisterOfMemes/status/2119898106477084817): "I was at 91% of my weekly limit, and a single Fable 5.2 session wiped out the remaining quota in just 15 minutes."
- [@RoboAlchemist](https://x.com/RoboAlchemist/status/2119879286714966495) asked what a Fable reset does if your weekly limit is already at 80%.
- On HN, minimaxir called the resets "unusually generous" and worked out that "if you joined when Opus 4.5 became a thing, you got 2 resets".

### Cheaper per token, more expensive per task

The 20% price cut is real, and it does not survive contact with the token counts.

- **Artificial Analysis** [ranks](https://artificialanalysis.ai/models/claude-fable-5-2) Fable 5.2 at max first of 74 models with an Intelligence Index of 65 ([HN](https://news.ycombinator.com/item?id=50431144), 341 points). rgbrenner read the other column: "Fable 5.1 was already the most expensive by a good margin, and now Fable 5.2 doubles it! This is with the price cut." Output per task went "From 118k tokens (46k Answer/71k Reasoning) in 5.1 to 274k tokens (81k Answer/192k Reasoning) in 5.2." nsingh2 answered that the page shows max effort, and at max "it's deep into diminishing returns territory".
- **SemiAnalysis** (via [AINews](https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/)) put Fable first on GDPx at 16.4% and [paid $88.15 per task, up from $67.16](https://x.com/SemiAnalysis_/status/2119961455348826461). AINews summarizes the run logs: "Where Opus 5.5 and Fable 5.1 would try about 20 test cases, 5.2 sometimes wrote hundreds or thousands and spun up subagents to check its work independently."
- **Cursor** [reports](https://x.com/cursor_ai/status/2119880829212172509) 60% on CursorBench at max effort and 56.9% at the default, against 49.2% for Fable 5.1. It also [warns](https://x.com/cursor_ai/status/2119880841728000057): "Effort levels behave differently from Fable 5.1's, so start at the default". [@arb5z](https://x.com/arb5z/status/2119885298888765783) did the math on the headline number: "60% at max, which AA has at $26.5 a task".
- AINews also collects the evals where Fable does not win. Terminal-Bench 4.0 is level with Opus 5.5 at 60% and behind Kimi K3.1 Pro, Gemini 4 Carbon and Sonnet 5.5. Vals found that high effort beat both xhigh and max.
- oh_no on HN: "the winning benchmark is much more expensive than what it cost for the same on 5.1 i'm begging people to stop looking at token prices".

### Theo's first day with Fable 5.2

Theo posted about 20 times on the model. In order:

- First reaction: "[It's CHEAPER??! omgomgomg](https://x.com/theo/status/2119868572386431281)". An hour later: "[It's been under an hour and I'm already struggling with "should I use Opus 5.5 or Fable 5.2?"](https://x.com/theo/status/2119881447800770962)"
- The Fishslop test: "[Fable 5.2 built this in 76 minutes and it cost ~$42 in tokens. One of the best Fishslop runs I've seen for sure, but not significantly better than Opus 5.5 (esp. for the price)](https://x.com/theo/status/2119926277801144695)". Lydia Hallie [asked](https://x.com/lydiahallie/status/2119948625099022370) about the setup. Theo's [answer](https://x.com/theo/status/2119948914023653845): "No subagents, just one Fable 5.2 session in the Claude Code desktop app." It "made all the models in headless Blender and tested its own work in the preview browser."
- Benchmarks: "[Holy shit Fable is mogging so hard. 5 point lead!](https://x.com/theo/status/2119946060361818578)" Then the [caveat](https://x.com/theo/status/2119946288347402450). In the "code only" view the gap is much smaller, and "xhigh and max score WORSE on the code benches compared to high".
- The plan math (3,449 likes): "[The $200 Claude Ultra plan gets you $15,000 of Opus 5.5 in a month, but only around $3,000 of Fable 5.5.](https://x.com/theo/status/2119960608816988596) Even ignoring that Fable is restricted to 50% of your weekly limit, it burns faster per $ than Opus does." Theo meant 5.2 and [corrected it](https://x.com/theo/status/2119962961968238717). The numbers come from "[analyzing over 1.1 million real requests](https://x.com/theo/status/2119962809333346662)". Measured as work per week, Opus alone gives Theo about 1,200 turns and 230 threads, and exhausting Fable first gives about 900 turns, partly because "[Fable is more likely to "finish" work in a single prompt](https://x.com/theo/status/2119963089919746085)". This is the sequel to yesterday's "$200 Claude sub is the best money you can spend" post. [@blakeothy](https://x.com/blakeothy/status/2119961241129304491): "Lowkey it's getting to a point where opus 5.5 is good enough. Not seeing myself use fable other than review and hard debug".
- The complaint (1,359 likes): "[Fable 5.2 is making a lot of stupid mistakes I would not have expected from Opus tbh](https://x.com/theo/status/2119988540708896897)". And: "[It isn't proactively stupid like Astra, but it often ignores things that matter](https://x.com/theo/status/2119990039858061649)". [@_Kad3n](https://x.com/_Kad3n/status/2119997390493221207) agreed: "smarter on the hard problems, sloppier on the easy ones. feels like it needs a checklist more than opus did".
- Still: "[Man I missed big model smell](https://x.com/theo/status/2119952323615281408)".
- Theo also called the Claude Code desktop app's UX "[horrible](https://x.com/theo/status/2119873100745768974)" ("Took me like 2 minutes just to add a project") and wanted an easier way to bypass permissions. Max Leiter [replied](https://x.com/maxleiter/status/2119881525349302317): "We're improving the UI/navigation, but why do you want bypass permissions over Auto Mode? We intentionally don't want to make it too easy to use". Theo: "[I need results fast because I have to film, and if it nukes my machine that's free content](https://x.com/theo/status/2119993037971730879)".

### 1,000 agents formalize Fermat's Last Theorem

Lance Martin [shared](https://x.com/RLanceMartin/status/2119875041475379681) the engineering write-up behind the launch's math demo, [Safely scaling multi-agent teams with Claude Fable 5.2](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/). In September the same job took 11 days and about 6 billion output tokens inside a purpose-built proving system. This run used 1,000 agents on an early Fable 5.2 and finished in 28.7 hours with a third of the output tokens. Opus 5.5 on the same setup completed 26%.

The interesting part is how little structure the agents were given. Each one ran in its own VM sandbox with no network. They shared a Postgres database and a Git repository. One agent was the lead and 999 were helpers.

- In the first 10 minutes the lead created five tables (announce, assign, notes, subtasks, landed), split the 60 statements across crews of 16 to 17 helpers, and named a captain for each crew.
- Helpers first judged difficulty and called 47 of the 60 statements infeasible within the budget. The lead moved nearly everyone to the other 10, and those were proved within roughly 70 minutes. The lead's note: "the team's throughput is far higher than the early 'infeasible-in-budget' verdicts assumed". Then it sent helpers back to the hard ones with "there is no reason to idle".
- Control drifted from the lead to the helpers. By hour 5.6, 73 helpers had written 756 tasks, and by the third hour the lead told free helpers "do not wait for me."
- The last piece was Langlands–Tunnell. Its captain had given it less than a 1% chance of finishing in time. The lead moved about 750 helpers onto it and wrote "Honest odds are low." The helpers built a task tree that reached 2,418 tasks up to 10 levels deep and proved it at hour 28.4.
- Safety: a classifier checked every tool call and would have stopped the whole team on a block. "Across more than a million tool calls, none in this run met the bar to be blocked".

Anthropic's own conclusion is modest. Agents "tend to give up on hard problems and misjudge their difficulty", so "Human encouragement at such moments can keep agents from stopping too early." swyx's [summary](https://x.com/swyx/status/2119935240202539147): "bro just proved fermat's last theorem AS A DEMO for the fable 5.2 launch and casually told me he's got something bigger planned for his aie code talk". [@nicbstme](https://x.com/nicbstme/status/2119906162678325353) asked why the team used a database instead of a git-backed filesystem.

### "This codebase is yours"

Simon Willison [pulled a tip](https://x.com/simonw/status/2120029347948220500) (1,237 likes) out of Anthropic's new [prompting guide for Fable 5.2](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2#say-who-owns-the-code). The guide says the model "responds closely to what the prompt says about who owns the code it works on". With no ownership statement it adds to the existing structure and reports nearby problems instead of fixing them. Add this sentence and it starts merging duplicated code:

> This codebase is yours: what it's for and how it's built are your call, and you'll keep building on it.

In Anthropic's tests the model merged repeated code "in about half of the tries with this sentence, and in under a tenth of the tries without it". It costs about 1.5 times the output tokens, and the model "made several changes that nobody had asked for", so the guide says to "review the diff and not only the summary." Simon's [read](https://x.com/simonw/status/2120029567616458900) of the whole guide: "it's VERY clear from reading them that Anthropic are just as surprised by the idiosyncrasies of their new models as we are".

Other things the guide admits: Fable 5.2 "sometimes ends a turn before the work is done" at low and medium effort, long tool-call runs can look silent because progress updates arrive as thinking blocks, and at high effort it "thinks before almost every reply, including a reply to a greeting".

### Quick hits

- **Simon Willison's mysterious beep.** Simon had Claude Code build [Beep Locator](https://simonwillison.net/2026/Nov/9/mysterious-beeps/) ([post](https://x.com/simonw/status/2119945524514328631)), which turns spare phones, iPads and laptops into microphones and triangulates a sound. Opus 5.5 started it and Fable 5.2 finished it with live access to the running server. It placed the beep "to within about 40cm", and the culprit was "an ancient carbon monoxide detector that desperately wanted its batteries replaced."
- **"Fable 5.2 one-shotted my nephew's dream game."** Lex Toumbourou's [post](https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game) ([HN](https://news.ycombinator.com/item?id=50433659), 360 points) describes an overnight run that turned a kid's drawings into a 12-stage beat 'em up. Fable "generated roughly 175 images and 140 audio clips" and "wrote a bot to play the game". Lex said on HN it would have cost "something like $300 USD" at API prices. georgemcbay on the prompt's "You are a truly world-class game developer": "Top Jobs in 2027: 1. LLM glazer."
- Theo is already numb to the demos. On the operating system built by 1,000 subagents: "[yeah, and?](https://x.com/theo/status/2120003663926358152)"

## Agentic Coding & Agent Harnesses

### Matt Pocock defends "Software Factory"

Matt Pocock [wrote](https://x.com/mattpocockuk/status/2119748545691402733) (1,848 likes): "Just wanted to defend the term "Software Factory" for a second." The caveats come first: "It's bullshit. It sounds fancier than it really is." and "It's a bandwagon." Then the defense: "Earlier this year, most SOTA teams were using agents to work on the product." Now "they're building automations to help agents work on the product for them. They've moved up a layer." So: "We're not working on the product, we're working on the factory that builds the product."

- lauren (@poteto) [replied](https://x.com/poteto/status/2119828459728121925): "i think of it more as the evolution of software engineering, so personally i haven't felt the need to use this term." lauren hopes "to demystify at my AIE talk this week!" That [talk](https://x.com/poteto/status/2119841446308221152) is Wednesday at 10:10am PT, on "how the grok @bot team shipped 11,000 PRs last month without compromising on code quality".
- [@technotopicus](https://x.com/technotopicus/status/2119787167987777734): "why don't we just call it for what it is, which is… hold your horses… software development?"
- [@TallAndy](https://x.com/TallAndy/status/2119757342568788009): ""Factory" makes me think of mass-produced, identical output, and that's one short jump from everyones favourite word, slop!"

Matt's other post of the day was a prompting tip (2,092 likes): "[Instead of talking about the 'what', try explaining more of the 'why'.](https://x.com/mattpocockuk/status/2119888414736859356)" Bad: "I want to build an analytics panel for admins with graphs and filters". Good: "Admins can't currently see an overview of the important data in the app". The reason: "If you start by explaining your proposed solution, the agent will stick to it."

### "it's time to rewrite all software"

lauren's [post](https://x.com/poteto/status/2119824409087348984) was the day's most-liked from the tracked accounts outside the launch (8,333 likes): "we are entering a renaissance in programming language and runtime research, and a golden age of software testing and verification", then "it's time to rewrite all software", and then "[in new languages that will be invented soon](https://x.com/poteto/status/2119826122464772109)". dax: "[rewrite it in blood](https://x.com/thdxr/status/2119934099339063373)". [@ChShersh](https://x.com/ChShersh/status/2119831577614229963): "We'll see when we get faster compilers and more secure OSs".

Two launches the same day fit the mood. Charlie Cheever [previewed Exact](https://x.com/ccheever/status/2119764253242695754) (2,220 likes), "a new Agent Native app framework written in Rust". Jarred Sumner [posted](https://x.com/jarredsumner/status/2119878869092380859) that "OpenCode uses 41% less memory with Bun AoT and OpenClaw starts 3x faster".

### dax: subagents for everything, and a benchmark that dropped the reasoning

dax [on subagents](https://x.com/thdxr/status/2119892078310064554) (1,803 likes): "it's crazy to me people still argue about subagents", because "most of our team tells opencode to do everything in subagents", and "it's also how we're drastically cutting costs and still getting reviews from expensive models". Asked what the team keeps in its agent instructions, dax [said](https://x.com/thdxr/status/2119925264885129277) "we barely have anything in there. mostly personal stuff".

dax also [took a swing at benchmarks](https://x.com/thdxr/status/2119842215010943337): "1. benchmarks are meaningless at this point 2. if you're going to do one reach out to the products you're benchmarking before publishing". The quoted post is from the Hugging Face Harness Leaderboard, where OpenCode 2 replaced 1.19 and moved "from 8th of 9 harnesses to tied for first on all three models". Cost per solved task fell from $3.35 to $0.45. Part of the old gap was the test setup, which translated OpenAI's Responses API to Chat Completions and "ran without errors but silently dropped the model's earlier reasoning." dax: "[we changed nothing. the benchmark was run in a completely weird way](https://x.com/thdxr/status/2119857458680357201)".

Peter Steinberger [had the same complaint](https://x.com/steipete/status/2119912419271327978) on OpenClaw's behalf: "They also botched OC setup, cutting off model responses at 8k with their local inference config but didn't question why our results are so bad there. Not a serious benchmark." [@jcostin99](https://x.com/jcostin99/status/2119849454572642631) pushed back: "This sounds like a product problem though, how would a user know it was setup incorrectly".

### Quick hits

- Mario Zechner (3,215 likes): "[the most import skill in 2026 is still being able to tell your agents "wtf is this crap, no, not like this"](https://x.com/badlogicgames/status/2119842382023680391)". Matt Pocock's [addition](https://x.com/mattpocockuk/status/2119891047840919932): "…not ever again. new lint rule".
- **Thomas Wolf**, "[The future of software](https://x.com/Thom_Wolf/status/2119845074594857428)". The first of three precepts is "Everflux software", where "instead of stepping from release to release, months apart, software now evolves continuously." Wolf's argument is that when "a single company merges over 30,000 code changes a day", every dependency moves, and "Software will have to move accordingly fast just to keep from breaking".
- **Tailscale** [announced](https://x.com/Tailscale/status/2119892081581682974) that Grok Bot "can now connect to private MCP servers on your tailnet without exposing them to the public internet", built on Tailscale OAuth apps, which are now GA.
- **Grok Bot** weekly limits [reset](https://x.com/bot/status/2119871982946971659) after last week's complaints. Theo's advice to people who hit them anyway was to [buy the $100 Claude plan](https://x.com/theo/status/2119994608516276256) and use Opus 5.5 in T3 Code.
- **T3 Code** shipped a [cmd+k connector flow for MCP](https://x.com/theo/status/2119948325705462260) and [tab-complete prompt suggestions](https://x.com/theo/status/2119952067171430740). Theo also said [about 70% of feature requests](https://x.com/theo/status/2119958282022568059) turn out to be prompt skill issues.
- @peer_rich: "[im extremely impressed how much SaaS you can actually replace with just grok bot or claude code](https://x.com/peer_rich/status/2119859565768376602)".
- AIE Code runs today through Thursday in San Francisco. lauren and Lance Martin are both speaking.

## Codex & OpenAI

### dots can now use several of your computers

[@OpenAIDevs](https://x.com/OpenAIDevs/status/2119883176726409645) (6,288 likes): "You can now connect multiple local computers to the same dot and choose which one it uses for a task. It can build and test your app on a dedicated machine while you keep coding on your laptop." [Docs](https://learn.chatgpt.com/docs/dots/computers-and-apps).

pash [explained](https://x.com/pashmerepat/status/2119968151064690919) (1,450 likes) why the underlying feature, multi-exec, matters: "multi exec lets your dot run commands directly on any computer." You attach a powerful machine with persistent storage, "you set up all your CLIs and authentication ONCE and the dot can use them directly (no more fighting the default ephemeral cloud computer)", and "all your websites stay logged in". For passwords pash [suggests](https://x.com/pashmerepat/status/2119972666857898298) giving the dot its own 1Password account.

The replies raised the two obvious problems. [@gocronk](https://x.com/gocronk/status/2119972177663643951): "until you fix it so that it actually does things like enter passwords, it just means handholding on multiple devices." [@asmirkn](https://x.com/asmirkn/status/2119983353076338950) asked about prompt injection against a browser that is logged in to everything. And the launch thread itself was mostly people asking for something else. "[Is this your response to Claude Fable 5.2](https://x.com/TheRedDragon/status/2119885134904086588)" (585 likes). "[how about making dots available in eu?](https://x.com/tarat_211/status/2119883866940813605)" [@DannyIO](https://x.com/DannyIO/status/2119901160933097556): "We want a model that competes with Anthropic. We're 2 generations behind..."

Theo's chart of the day makes the same point with data: "[The complete and utter domination of Opus 5.5 is hard to put into words. I charted out the split of Codex vs Claude in T3 Code over time. Never seen anything like this before.](https://x.com/theo/status/2119970535056846996)" Wes Winder: "[openai is dropping the ball so hard rn](https://x.com/weswinder/status/2119977043681055137)".

### Control Room

[@OpenAI](https://x.com/OpenAI/status/2119913172039868579): "We built Control Room, a central system to track model workloads across our research infrastructure and stop them quickly when safety or security concerns arise." It covers "every research inference workload, including agentic sampling for model training and evaluation", and "halts model output within 35 seconds of a decision to intervene". A reply asked "[Where is 6.2](https://x.com/vladrooman/status/2119913358577279400)".

### Quick hits

- **Agents API.** Michael Luo [listed](https://x.com/AzianMike/status/2119876908066427244) three additions: a 12-hour prompt cache, async functions ("Let your agent continue working after it calls a tool, without waiting for that tool's result"), and per-session budget control in beta.
- **The Game Boy is real.** Yesterday's "Tomorrow." teaser was what it looked like: "[The Codex edition @modretro Chromatic is now on Supply Co.](https://x.com/OpenAIDevs/status/2119864571733446774)" The plugin lets you "design levels, animate sprites, and playtest on your handheld."
- am.will: "[I left 6.1 Terra running on a computer use task overnight. It ran nonstop for 9.5 hours and only used 3% of my weekly usage](https://x.com/LLMJunky/status/2119842107946901684)".

## Security & Privacy

- **Fireworks AI discloses a second, wider breach.** am.will [flagged](https://x.com/LLMJunky/status/2119943522640105560) the first one ("Fireworks AI has been hacked as of October 6th."). The company's [updated bulletin](https://fireworks.ai/security/bulletins/october-2026-security-incident-update) says the damage is larger than first reported: "we discovered impacts to account and billing information. For a limited set of accounts, we also discovered impact to secrets, datasets, and incomplete models." It then describes a second intrusion. A cloud provider hosting Fireworks R&D machines had its own incident on October 23, and a day later the attacker used it "to reach Fireworks development machines and then run an unauthorized workload that led to additional customer data impact." Fireworks ties the attackers to "LLMJacking", where criminals resell stolen model access. Notion's [notice](https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor) says "<1% of Notion workspaces may have been affected" and that "Some unattributable chat sessions with Notion AI may have been exposed". Notion has stopped serving open-weight models through Fireworks. Bloomberg [covered it](https://www.bloomberg.com/news/articles/2026-11-09/nvidia-backed-fireworks-ai-notifies-customers-of-its-second-hack-in-weeks) ([HN](https://news.ycombinator.com/item?id=50432415)), and a post quoted in the [replies](https://x.com/RonfortMartin/status/2120044674794561713) to am.will says Harvey was notified and that "Notion and Cursor are also working with the company to contain the incident."
- **ChatGPT Desktop forwards your SSH agent to remote machines.** An [HN post](https://news.ycombinator.com/item?id=50422628) (208 points) points at a Codex PR discussion: "The agent running on a remote machine can authenticate using your local SSH credentials. That means it can push to your private repos on GitHub, for example." littlecranky67's advice is to keep keys in the Secure Enclave and require a fingerprint per session, so "agents cannot initiate anything". arghwhat: "auto-forwarding your agent to foreign machines is not the right balance. At least not without being able to filter and approve individual signing requests."
- **Gemini and human annotators.** A [GitHub write-up](https://github.com/thisisme6598/gemini_files/) titled "Google Gemini routes personal Drive files and emails to human annotators" reached 564 points on [HN](https://news.ycombinator.com/item?id=50429426). bri3d narrowed the claim: "There are explicit data retention contracts for Workspace (including Gemini transcription) and Google claim this data is never used for training or human review", and the write-up "is specifically about the consumer version of Gemini used in Gemini Apps." pmdr: "The only thing they seem to never route to humans is support."

## Videos & Podcasts

- **Theo: [Coding Isn't About Code Anymore](https://www.youtube.com/watch?v=GtJKFhztgdM).** Theo's description: "AI has given engineers a new job, which is much more akin to gardening rather than coding".
- **TNT, [Ep 08: "Nobody's Going to Write the Next React."](https://x.com/NextTokenShow/status/2119842572306972675)** The show's own summary: "@badlogicgames admits he's never done code review, @mitsuhiko has an 11-yr-old submitting PRs, @dillon_mulroy learns by taking down prod, @RhysSullivan says "slop harder," and @threepointone is on vacation."
- **Latent Space on Handshake**, the podcast's "[first deep dive with an AI data company](https://x.com/latentspacepod/status/2119866369412124746)". Handshake went "from launch to $1B in GMV in ~a year". swyx [calls it](https://x.com/swyx/status/2119866760723890571) a "3hour monster state of RL envs pod!"
- **Cerebras, [Fearless Engineering: The CS-4](https://x.com/cerebras/status/2119860072188920248).** The company's "first engineering documentary", following "the creation of the CS-4, our latest wafer-scale AI system."

## Other Interesting Stuff

- **Meta's Muse Ember.** Meta [announced](https://research.meta.ai/blog/muse-ember) "our smallest and most efficient model", aimed at "the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing" ([HN](https://news.ycombinator.com/item?id=50429024), 292 points). Meta claims it "matches Haiku's best score at about a third of the cost and beats every Luna setting". Simon Willison's [notes](https://simonwillison.net/2026/Nov/10/muse-ember/) put the price in context: for shorter prompts it matches GPT-6 Luna and Claude Haiku 5.5 at $0.10/$0.50, and "Today's other big model release, Claude Fable 5.2, is 80x that price at $8/$40." Simon's six pelicans at six effort levels broke the usual pattern: "This is the first time I've seen that correlation appear to break". No weights.
- **Amazon swaps Sonnet 4.6 for a small decision model.** The Strands team [writes](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) that Amazon engineers replaced Claude Sonnet 4.6 with Strands Decider for labeling internal tickets, and that it "performed just as well at 98% less cost" ([HN](https://news.ycombinator.com/item?id=50436640), 153 points). phillennium: "Let's build efficient classifiers", then "Forget about the silly classifiers, LET'S BUILD A MACHINE GOD", then "Ah, that machine god is often too expensive and underwhelming. Let's build efficient classifiers".
- **Armin Ronacher, [AI and Irontown](https://lucumr.pocoo.org/2026/11/9/irontown/)** ([post](https://x.com/mitsuhiko/status/2119841642391974106)). Armin rewatched Princess Mononoke and saw the AI argument in it. Irontown gives outcasts work and dignity and destroys the forest doing it. "I use AI every day and find it genuinely empowering. But I also recognize the pain it causes some, and the moral problems it poses." The closing line: "The question is not whether there will be iron, but what kind of Irontown we build with it."
