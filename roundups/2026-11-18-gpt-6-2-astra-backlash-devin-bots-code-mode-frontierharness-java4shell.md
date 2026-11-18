---
title: "GPT-6.2 Astra Lands to a Backlash, Devin Bots, Claude Code's Code Mode, FrontierHarness Eval & Java4Shell"
date: "2026-11-18"
summary: "**OpenAI** shipped GPT-6.2 Astra and Sol, and the early-access reviewers turned on Astra within the hour. **Theo** called it 'the worst model OpenAI has ever released', published a long letter about a model that is smart and unbearable to work with, and said a lot of OpenAI's own engineers just use Sol Ultrafast. **Tibo** answered that the influencers tested a build from before 'a lot of changes in the last 3-4 days', and conceded the models are 'by no means perfect'. **Simon Willison** has the prices and a pelican-grade test that nobody passed, **swyx** thinks the model is a solid minor version and the launch ad was the real mistake, and **Mario Zechner** is tired of one-shot three.js demos. Elsewhere, **Cognition** launched Devin Bots, persistent agents with their own memory that lead teams of subagents. Runta's **FrontierHarness Eval** ran 27,280 trials to show that the best harness depends on the model, and **Microsoft** shipped MAI Code 2. **Matt Pocock** wants a /constrain skill made of harsh lint rules. **Claude Code** got Code Mode, where Claude writes JavaScript that makes the tool calls, plus linked billing across 19 platforms and a Latest channel for Claude Desktop. Outside coding, Calif disclosed **Java4Shell**, a 9.2 memory-corruption bug in OpenJDK's Base64 decoder found with AI in an hour, Jensen Huang said he would come back to Nvidia if the board asks, and an experiment put the cost of Google's AI Overviews at about 40% of outbound clicks."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 18, 2026

Covers Tuesday morning through Wednesday morning. It was a launch day, so Theo and Tibo account for most of the volume. trq212, bcherny, karpathy and leerob posted nothing, and steipete only retweeted.

## Agentic Coding & Agent Harnesses

### GPT-6.2 Astra and Sol

OpenAI [announced both models](https://x.com/OpenAI/status/2122750124543926515) on Tuesday evening with "Some of you have been asking very politely. Some of you have just been asking." The pitch is efficiency. Astra "sets new highs on evals across professional work and scientific research at less than a third of the cost per task of GPT‑6 Astra", according to [the launch thread](https://x.com/OpenAI/status/2122750126297161811), and Sol is the one OpenAI staff use: "Many OpenAI employees use GPT-6.2 Sol as their go-to model across technical and non-technical work."

The numbers developers will care about came from [OpenAI Developers](https://x.com/OpenAIDevs/status/2122752473723175256): "For day-to-day coding, start with GPT-6.2 Sol. On Cognition's FrontierCode 2.0 at max reasoning, it came within half a point of Astra at ~1/5 the API cost per task." Ultrafast pricing [drops by 50% for three months](https://x.com/OpenAIDevs/status/2122752500877144461), which puts it at 3x the cost of Standard. On the security side, Astra [gains 22 points over GPT-6 Astra](https://x.com/OpenAI/status/2122750133133791592) on ExploitBench Internal Port and ships with "tighter safeguards for higher-risk cybersecurity assistance". Both models are in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu.

Simon Willison [wrote up the launch](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/) with the prices. Astra costs $8 per million input tokens and $40 per million output, 80% of what GPT-6 Astra cost and the same as Claude Fable 5.2. Sol stays at $2 and $10. Simon's test this time was turning Yonkers into a giant mech, and the verdict was "Neither of them did a good enough job of morphing Yonkers into a big mech". In [a reply](https://x.com/simonw/status/2122844219270422750) Simon added that Fable came closest, "but none of them are excellent". The post's summary of the mood: "The buzz around these new models is mixed at the moment."

The launch demos were big. Gabriel Chua [built Singapore at 1:1 scale](https://x.com/gabrielchua/status/2122762679760883967) with "100+ Astra Codex threads", "1,000+ subagents" and "Over 100 hours of work." Artificial Analysis put Astra first on its 3D arena.

The [Hacker News thread](https://news.ycombinator.com/item?id=50535230) passed 1,200 points. The comment that got quoted around was [guybedo's](https://news.ycombinator.com/item?id=50535417): "You ask for a 'hello world' and you get load bearing sealed artifacts with hashes and p99 performance testing for 3 days without having the actual 'hello world' in the end". Others pointed out that OpenAI's science charts leave out Gemini 4 Carbon, and that the release lands days before Anthropic's IPO.

### "the worst model OpenAI has ever released"

Theo had early access and did not hold back. [The first post](https://x.com/theo/status/2122757647170703550): "6.2 Astra is here. I've been testing it for awhile." Then: "I think this is the worst model OpenAI has ever released."

The long version is an X Article called [Why I hate GPT-6.2 Astra](https://x.com/theo/status/2122760447103484410), at 1.78 million views by Wednesday morning. Its thesis, as quoted back in the replies: "This model is clearly super smart. It is insufferable to work with on real projects." Simon Willison's post excerpts the core complaint, that Astra does the work and then quizzes you about its own internals: "It will then proceed to randomly ask you some weird internal implementation detail bullshit that you could not under any earthly circumstance understand, much less have input on." Theo's example is a /goal run on an Outer Wilds project that stopped to ask "does r24's reviewer write it's clips to 24_g521.mp4 or 24_p11.mp4?"

Replies offered theories. [@willcb](https://x.com/willcb/status/2122769237198708752) thinks the behaviour "comes from multiagent RL where the top level orchestrator is an agent who is allowed to see and understand too much". Theo wrote "I have never in my life had a model do this. GPT-5.6 Sol didn't do this.", and [@VictorTaelin](https://x.com/VictorTaelin/status/2122769828976959800) answered: "Oh, I have in my life had a model do this. It was named GPT-5."

The rest of Theo's evening, in order:

- [The Bellwether story](https://x.com/theo/status/2122762384704258122). Two weeks ago Theo vagueposted the word. Now we know why. Theo and Ben each asked Astra for a new level in a game they love, Outer Wilds for Theo and Majora's Mask for Ben. Both got water levels with music themes built around bells, and "Both were named "Bellwether"." Theo's read: "This model regresses to the mean like nothing I've ever seen." [@Birchlabs](https://x.com/Birchlabs/status/2122817324688544211) asked the pedantic question: "isn't that mode-collapse, not mean-regression?"
- [The Sol rumour](https://x.com/theo/status/2122760761688883577): "fwiw, I've heard that a large portion of OAI's engineers are straight up ignoring Astra and just use 6.2 Sol Ultrafast for their day to day work". Peter Gostev [replied](https://x.com/petergostev/status/2122765580461818138) "+1, Sol ultrafast is the real deal".
- [A longer argument](https://x.com/theo/status/2122858334449799336) that "Anthropic has been ahead since Fable 5. OpenAI's attempts to catch up on benches have hurt the model pretty much everywhere else". [@Youssofal_](https://x.com/Youssofal_/status/2122868677892862396) reminded Theo who had preferred GPT-5.6 at the time.
- [The Muse comparison](https://x.com/theo/status/2122831642339557794): "If GPT-6.2 Astra acted more like Muse Wonder Full, it would be a great model."
- [Usage data](https://x.com/theo/status/2122915383787290649): "Claude's dominance in T3 Code did not take a hit from the OpenAI release today". T3 Code also [processed 31.7 trillion tokens in a day](https://x.com/theo/status/2122860770329608290), which Theo prices at over $10,000,000 of API spend.

Theo is not worried about access. "OpenAI is chill, they understand. I'd be genuinely surprised if they cut me off.", from [a reply](https://x.com/theo/status/2122763499092992168).

### Tibo responds

Tibo posted [OpenAI's explanation](https://x.com/thsottiaux/status/2122929634916679820) on Wednesday morning, and it drew 1,247 replies. The claim is that early testers got access "a while ago and then made a lot of changes in the last 3-4 days and I'm pretty sure no re-testing was done within those days and the videos were produced last week." Tibo also conceded ground. The models are "a hefty jump" but "they are by no means perfect", and the teams want to improve "taste and niceness of use".

Theo [replied directly](https://x.com/theo/status/2122936490942726348): "System prompt changes helped a lot but it still isn't enough. Model loses coherency after a few hours on long tasks and still sucks at answering "i'm lost, eli5 please"". The most-liked reply went the other way. [@REALFSDDU](https://x.com/REALFSDDU/status/2122929872972779839) wants early access given "to real people with no following", and [@bijanbowen](https://x.com/bijanbowen/status/2122929880115405297) called the model "an IQ test for influencers".

Matt Shumer [defended the reviewers](https://x.com/mattshumer_/status/2122895253468295605): "Why are they all posting reviews at the same time: there's an embargo." and "Why are the reviews all negative: the model is bad." Tibo's [answer](https://x.com/thsottiaux/status/2122954129094111394): "I do think you all coordinated on a slack channel 👀". Shumer's own complaint is different from Theo's. [It was "more the laziness than anything else."](https://x.com/mattshumer_/status/2122900672550969740)

When Theo [posted the Artificial Analysis chart](https://x.com/theo/status/2122916936417935419), Tibo [wrote](https://x.com/thsottiaux/status/2122928699838492690) "Love Theo and all, but ... :D", and Theo [came back with](https://x.com/theo/status/2122934242648932366) "Teach your models how to speak English again and you'll have my love back quickly :)".

Ben Davis, who also panned the model, [made the point](https://x.com/davis7/status/2122884109194363180) that the fight itself says something good about OpenAI. A company that hands out early access and takes "very brutal candid feedback" without retaliation is unusual. [@netpro2k](https://x.com/netpro2k/status/2122897991690244602) put it more sharply: "OpenAI makes me feel like a customer rather than a hostage."

### The dissenters

swyx [thinks the ad was the real mistake](https://x.com/swyx/status/2122862646265520150). The launch video shows office workers panicking when the boss walks in and generating something to hand over, and swyx's "primary critique of the astra launch" is that nobody vetoed it. On the model: "the model itself is solid minor version improvement guys", and "it is the best workflow automation model i've used". Tibo [promised](https://x.com/thsottiaux/status/2122903687949688912) "We'll highlight more interesting things in the next launch video."

Mario Zechner [is tired of the other kind of launch content](https://x.com/badlogicgames/status/2122831328169103761): "repeat after me: oneshotting a threejs "game" is not indicative of real world model performance." Armin Ronacher [replied](https://x.com/mitsuhiko/status/2122835324128641500) "No this is exactly how we evaluate it!" and separately [told Pi users](https://x.com/mitsuhiko/status/2122771245498306612) to run "pi update --models if you want 6.2 astra/sol and feel whelmed btw."

My read is that both camps are describing the same model. Astra scores well and costs less, and it writes like something trained to satisfy a grader. Sol got almost no criticism all day.

### Devin Bots

Cognition [launched Devin Bots](https://x.com/cognition/status/2122737511684587551): "From writing firmware to merging thousands of PRs a week, a Devin Bot leads a team of agents to get the job done."

The useful explanation came from Cognition's steven hao, in [a post on the architecture](https://x.com/stevenkplus1/status/2122761055588012112). Each Devin session used to be an ephemeral clone of a base template, so it barely remembered earlier sessions. Users worked around that by never starting a new session and ended up "with tens or hundreds of PRs from a single session". A bot fixes this by owning a memory bank. The change is from a swarm of ephemeral agents to "Devin is a collection of bots, each with their own persistent identity and memory". And the part I found most interesting: this is "almost entirely an orchestration change", and "we probably could've implemented this a year ago".

swyx has trialled them for a week and [calls them](https://x.com/swyx/status/2122746401482592549) "multi-agent teams done right". The bots "own outcomes not tasks", and swyx lists the hyped ideas they replace, including /goal, loop engineering and agent swarms. The lesson swyx takes: "you don't want "AI Employees"", because we don't have AGI and overpromising fails. [@stephenponsford](https://x.com/stephenponsford/status/2122791576380248530) named the hard part in the replies, which is whose identity a bot acts as, what it may touch and who checks the work. "Get that wrong and you've just automated the blame."

### FrontierHarness Eval v1.1

Runta and Baseten published [FrontierHarness Eval v1.1](https://runta.com/blog/introducing-frontierharness-eval-v1-1/), found via [Hacker News](https://news.ycombinator.com/item?id=50532191) where it has 366 points. They ran 22 harness configurations against 5 open-weight models on 62 tasks, 4 attempts each, for 27,280 runs and 83 billion tokens.

The finding is that no harness wins everywhere. The best-value harness changes with the model: Codex CLI with GLM-5.3, Pi with GLM-5.3 Flash, ZCode with DeepSeek V4.1 Flash, Oh My Pi with Muse, Alma with Kimi-K3. Codex CLI is first on cost with GLM-5.3 and far down the table with Kimi-K3. The number of steps a harness takes drives cost. Prompt size, tool count and cache hit rate do not explain it. The audit flagged 216 trials for reward hacking, and 163 of those were online lookups.

Runta's founder [commented](https://news.ycombinator.com/item?id=50532247) that "64% of inference spend went to runs that didn't pass", and disclosed the conflict: "The eval runs on our runtime, so weigh this accordingly." One commenter published [an independent analysis](https://micjm.com/blog/on-model-harness-interactions/) of the same data.

### MAI Code 2

Microsoft [released MAI Code 2 and MAI Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/), via [Hacker News](https://news.ycombinator.com/item?id=50535885). The claim: "MAI Code 2 gives you 98% of the performance of GPT 6.1 Sol at 40% of the cost, and 96% of Claude Opus 5.5's performance at just 5% of the cost". Read the footnote before quoting that. The cost figures use a 50% promotional price. Microsoft is also upfront that the models are "explicitly not yet tuned for harder problems", meaning science research and very long agentic runs. MAI Code 2 is in GitHub Copilot now, and Flash is in limited preview in Foundry.

### Matt Pocock wants /constrain

Pocock's [experiment for the day](https://x.com/mattpocockuk/status/2122659341685694586): "If too much choice is bad for agents, what if you could create an EXTREMELY constrained version of the tools you like?" For example, the agent may use React, but all state must live in Zustand or useReducer. "Strip out all the nuance, create a black hole of success, all through incredibly harsh lint rules."

[@tilkovsky](https://x.com/tilkovsky/status/2122667976759353479) disagreed, citing Thariq's post about removing most of the Claude Code system prompt: "I think limiting what a model can use actually makes its output worse." [@_lopopolo](https://x.com/_lopopolo/status/2122949737435603123) was on the other side: "Matt this is the entire thesis of my harness engineering work lmao."

Pocock's [prompt of the day](https://x.com/mattpocockuk/status/2122618527840354327) had an agent assess the [XState v6 beta](https://stately.ai/blog/2026-11-05-xstate-v6-beta) by building a proof of concept in a draft PR and grading it. The first criterion is "How much nuance there is in the API (more is worse, agents perform better with fewer choices)". The [outcome](https://x.com/mattpocockuk/status/2122718523768426931): "we decided not to adopt it yet but it pointed out a big mistake in what I was already doing that speeds up renders by 3x".

### OpenCode

OpenCode [doubled its GLM promotion](https://x.com/opencode/status/2122763721923559595) a day in: "we're bored we're just gonna do phase 2 now" and "$200 of GLM 5.3 usage for $10". One of the top replies asked how they make money.

Simon Klee is porting the OpenCode TUI to native code and [described three plugin designs](https://x.com/simonklee/status/2122629062661218540). One is a C ABI, so any language that builds a shared library can write a plugin. One runs existing TypeScript plugins through a compatibility layer, and in a sweep of npm, "~710" of "~890" TUI plugins behaved the same as today. The third ships plugins as source, through Luau or WebAssembly. Apple treats a .wasm file as data, so authors skip signing and notarization.

dax had two opinions worth reading. [On distillation](https://x.com/thdxr/status/2122715052822409286): companies may defend their product and may learn from competitors, and "the govt should not be involved". [On Nvidia](https://x.com/thdxr/status/2122884545422799052): "there's a big vacuum left by jensen wrt to open weight models", because Nvidia was one of the few companies with money riding on open weights and leverage over everyone else.

### Five Grok Bots in accounting

xAI [says](https://x.com/bot/status/2122771386456551516) "Five Bots now have full-time roles on our accounting team" and published [a write-up](https://x.ai/news/grok-bot-accounting) of the order-to-cash setup. Each Bot has a Notion document as its operating manual. The line worth keeping: "Bots need the same investment in documentation, onboarding, and ongoing coaching as new employees."

lauren (@poteto) [posted onboarding advice](https://x.com/poteto/status/2122774297840398639) that works for any agent. Dictate for ten minutes as if you had hired someone, and "just before you send the message, ask it to restate it back to you in its own words".

### Shorter items

- Max Rumpf [launched SID-2](https://x.com/maxrumpf/status/2122758430721204407), a search model built on swarms that claims better results than Opus and Astra "while being 8x faster and 20x lower cost". There is a [technical report](https://www.sid.ai/research/sid-2-technical-report). Via jerryjliu0's retweets.
- Jerry Liu [answered the vendors](https://x.com/jerryjliu0/status/2122919213878960526) who attacked ParseBench-2. One called it marketing slop and then published its own. Liu's defence is that the evals are open, with "no hidden judge prompt, no hidden test dataset".
- PostHog wrote [Not Everything Needs an LLM](https://newsletter.posthog.com/p/decision-models), found on [Hacker News](https://news.ycombinator.com/item?id=50535740). Their session summaries pass two yes/no questions from a decision model before any rewrite, and in production "98.7% skip the LLM call entirely."
- Latent Space [profiled Cloudflare](https://latent.space/p/cloudflare/) as a "neolab" building System One models, Clef and Clairic. Cloudflare's michelle [explained the speed](https://x.com/michellechen/status/2122719372309672295): "new ideas are difficult to invent and easy to copy."
- Cerebras [launched disaggregated inference](https://x.com/cerebras/status/2122791291033428453), pairing its wafer-scale engines with GPUs. Retweeted by LLMJunky.
- The Harvard working paper on coding agents and review, covered here in October, [is back on Hacker News](https://news.ycombinator.com/item?id=50538303). Firms that adopted agents wrote about 30 percent more code, and review took 49 percent longer.
- Armin Ronacher [asked what setups people run](https://x.com/mitsuhiko/status/2122779146803933487). One answer was simply ["pi from scratch"](https://x.com/syndrowm/status/2122799565988593835).

## Claude Code & Anthropic Updates

### Code Mode

[ClaudeDevs announced Code Mode](https://x.com/ClaudeDevs/status/2122801681939234950) for Claude Code. Claude writes JavaScript that makes the tool calls. The announcement says it "writes scripts that chain your tools together in sophisticated ways, and it can answer you while long commands are still running." It is experimental and off by default. You set `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` on v2.1.323 or later.

[The docs](https://code.claude.com/docs/en/code-mode) list the limits, and there are many. It runs in the terminal only, so no `-p`, Agent SDK, VS Code, Desktop or cloud sessions. Bedrock and gateways are out. Code stops after ten minutes. In auto mode the classifier "reviews the code, not each tool call". Project settings cannot enable it, because "a repository you clone can't turn on Code Mode for you". Hooks still work: a PreToolUse hook can match `REPL` and read `tool_input.code`.

Theo [asked](https://x.com/theo/status/2122828793358459335) "Can you please turn this on for agents sdk 👉👈". [@testingcatalog](https://x.com/testingcatalog/status/2122803936960659813) summed it up as "js won 👀".

### Linked billing

[ClaudeDevs opened a beta](https://x.com/ClaudeDevs/status/2122751844455956760) that lets you pay for Claude usage inside third-party products from your own Claude Platform account. [The blog post](https://claude.com/blog/linked-billing-on-claude-platform) names 19 platforms at launch, including Linear, Warp, Factory, Kilo Code, Railway, Ramp and Mintlify, each with its own monthly spend limit.

One sentence needs attention from anyone with compliance requirements: "Requests run in the platform's organization, so settings in the customer's organization, such as IP allowlists, encryption keys, and data retention, don't apply."

### A Latest channel for Claude Desktop

Claude Desktop [now has a Latest release channel](https://x.com/ClaudeDevs/status/2122821051910684824) on Windows and Mac, under Settings > Desktop app. Builds arrive more often and "can be less reliable than Stable, which stays the default." Theo, who ships T3 Nightly, [noticed](https://x.com/theo/status/2122829155163398344): "Okay this is a little on the nose".

## Videos & Podcasts

- [NerdSnipe: Theo and Ben argue about Astra](https://x.com/NerdSnipePod/status/2122822223484395839). The chapters cover Gemini 4 Carbon's speed, Fable 5.2 subscription math, "Astra Crash Out" and "Why OpenAI Is Losing". This is the long form of everything in the first section.
- [New Models and Random Nonsense](https://x.com/i/broadcasts/2ybQplaJlLllJR). Armin Ronacher went live on launch night. [Announcement](https://x.com/mitsuhiko/status/2122810318279578029).
- [@mervenoyann at AI Engineer World's Fair](https://www.youtube.com/watch?v=dKcTBQzR7jI). The talk argues "it's a skill issue to use frontier LLMs to detect objects or do vision". Use the LLM as an intern that trains a small detector for $6. [Post](https://x.com/mervenoyann/status/2122700240922833075), retweeted by swyx.
- [50 AI Engineer Code Summit talks, in writing](https://ai.engineer/code/2026#talks). Illustrated essays and full transcripts for people who prefer reading. [Announcement](https://x.com/aiDotEngineer/status/2122706337641763147).

## Other Interesting Stuff

### Java4Shell

Calif disclosed [Java4Shell](https://calif.io/java4shell/) (CVE-2026-114938), a memory-corruption bug in OpenJDK's Base64 decoder that scores 9.2 under CVSS 4.0. It is the top story on [Hacker News](https://news.ycombinator.com/item?id=50538240) with 840 points. A remote attacker with no credentials can overwrite heap memory, leak it, and reach code execution.

Java is memory-safe, but its Base64 decoder on x86-64 is hand-written AVX-512 assembly, and that routine mishandles a stray `=`. The trigger is 64 `A` characters followed by `=`. Calif demonstrated code execution in several widely deployed Java applications in their default configurations.

The AI part: "Calif used AI to find and weaponize Java4Shell." Their researcher Quang Luong needed "an hour to discover the vulnerability, and two more hours to develop the first working exploit", and "The total token cost was less than $200." Oracle has released a patch. HN commenters suggest `-XX:UseAVX=2` as a workaround, which nobody had confirmed when I read the thread.

Calif's closing argument is that the optimization shipped to everyone and helped few. They call the remedy "vibe-uncoding", using agents to find and delete code a system does not need.

### Jensen Huang would come back

Jensen Huang [made a first statement](https://x.com/JensenHuang/status/2122726005219737649) since resigning from Nvidia: "I did not live up to the standards expected of everyone at NVIDIA, and I have made serious mistakes in my personal life." Then the offer. If the board decides a return is in the company's interest, "I would be honored to answer these calls and return as CEO." [Hacker News](https://news.ycombinator.com/item?id=50534044) was unimpressed. The top reaction to "I created problems for the Board" was ["...and this message continues that work!"](https://news.ycombinator.com/item?id=50534740)

### AI Overviews and the missing clicks

A [survey of 2026 search research](https://revscope.co/blog/search-seo-geo-2026/), via [Hacker News](https://news.ycombinator.com/item?id=50540178), leads with a randomized experiment. Chrome users who saw AI Overviews averaged 0.37 outbound clicks per search where an Overview appeared. Users with Overviews hidden averaged 0.62, a 39.8% reduction. Searches ending with no outbound click went from 54% to 73%.

The human version is [AI is killing All About Berlin](https://news.ycombinator.com/item?id=50542705). The author of a relocation guide that has run since 2017 says the site lost about three quarters of its traffic to Overviews: "It's hard to fund my work with only a quarter of my audience."

### A chaotic Tuesday

Apple services went down, an FAA ground stop hit flights, and a critical Confluence flaw was reported under active exploitation, all on the same day. LLMJunky [posted](https://x.com/LLMJunky/status/2122769778720874897) "the world is on fire." dax [objected](https://x.com/thdxr/status/2122735472627810737) to people who declared an AI cyber attack before anyone had information. Microsoft's ONNX Runtime repository [vanished from GitHub](https://news.ycombinator.com/item?id=50539610) without notice, which broke eval pipelines for at least one HN reader.

### Two more

- macOS beta 2 tightens the permission prompts for agent apps again. Armin Ronacher's [review](https://x.com/mitsuhiko/status/2122846289939276109): "I understand why but I hate it."
- Theo, late at night: ["Releasing closed source software right now feels a tad insane to me I won't lie"](https://x.com/theo/status/2122926408653840546). The replies asked when T3 Chat goes open source.
