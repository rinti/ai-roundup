---
title: "Claude Learns to Dream, Opus 5.5's 'Dumb' Thoughts Are Summaries, OpenCode Browse, Jev Asks Opus & DeepMind Dents RSA-1024"
date: "2026-11-07"
summary: "Anthropic's engineering blog explained **dreaming**, where Claude checks its memory notes against old transcripts and rewrites them. In Pokémon, Sonnet 3.7 wrote 413 memory files and earned one badge, Fable 5 kept nine files and earned four, and a wiki built over 128 dreaming sessions raised scores on a 350,000-file corpus from 13% to 48%. Theo's theory that **Opus 5.5's reasoning traces** are scrambled to stop distillation got 4.6K likes and ThePrimeagen added a claim about fake tool calls. Anthropic's docs give a simpler answer: you never see the raw chain of thought, only a summary written by a different model. **OpenCode Browse** gives any MCP agent your real browser with your logins, and dax explained how the team runs Opus 5.5 as a manager over DeepSeek subagents. T3 Code telemetry shows Opus 5.5 **fails twice as many turns on max effort as on high**. Hightouch found that **Jev plus Opus on the uncertain cases** gets close to Opus accuracy for about half the cost or less. On security, **Google DeepMind** agents found two weaknesses in legacy 1024-bit RSA, pwn.ai published a **Firecracker escape** to host root, and Blacksmith disclosed a breach of its CI job logs. Also: Claude Code cloud sessions now set up their own environments, OpenAI's October Agents API changes, a flood of \"where is 6.2?\" replies, Ajeya Cotra's reading of the METR report, and a debate over whether React knowledge still matters."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Codex & OpenAI
  - Agent Security
  - Models & Research
  - Videos
  - Other Interesting Stuff
---

# AI Roundup — November 7, 2026

## Agentic Coding & Agent Harnesses

### OpenCode Browse: your real browser, for any agent

OpenCode [launched Browse](https://x.com/opencode/status/2118895128152621153) (2,658 likes): "it lets your agent control your real browser with your tabs and logins and extensions". The [product page](https://opencode.ai/product/browse) describes "An MCP server and a Chromium extension". Agents drive background tabs with Playwright, and these tabs stay in collapsed tab groups. When a login or 2FA prompt comes up, you do that step yourself and click Continue. You can also "Lend a tab" that you already have open. It records screenshots, screen recordings and network traffic as a HAR file, and allowlists limit a session's tabs to the sites you name. It works with any MCP client, and the page lists "OpenCode, Claude Code, Cursor, Codex, Zed and many more". The source is at [anomalyco/browse](https://github.com/anomalyco/browse).

dax [called it](https://x.com/thdxr/status/2118895958305980490) "a must have at this point, it lets opencode (or any agent) pretty much do anything in your life … all while keeping everything on device without connecting any of your accounts to some centralized cloud agent … ryan also made it stealthy af, cat and mouse game begins now". dax [added](https://x.com/thdxr/status/2118973784162238748) that Browse "supports running an agent and your browsers on different machines", because "i use a remote server, it can still orchestrate browsers on my desktop and laptop". Not everyone was sold: [@vioinabox](https://x.com/vioinabox/status/2118915036987175069) said "it's basically just giving a toddler access to my banking app", and [@mikepunzano](https://x.com/mikepunzano/status/2118949185579872681) asked whether it replaces the team's older browser-control repo.

### dax: Opus manages, DeepSeek works

Earlier this week dax said the team was trying DeepSeek Flash for all subagents with Opus 5.5 only as the primary agent (covered in the November 5 issue). The [verdict](https://x.com/thdxr/status/2118755687274532893) (1,569 likes): "so far this is working great. i tried this in the past and it wasn't as great." The rules:

- "we have long running sessions per project"
- "opus is told to do all work in deepseek subagents"
- "be strict about scope when creating a task"
- "ask for proof of work instead of a summary"
- "do a one step review of the diff to make sure it's not totally off"

"opus is amazing at this role". Asked about shipping it as a feature, dax [replied](https://x.com/thdxr/status/2118775233549422773) "i don't yet know how to package this". Pedro G [replied](https://x.com/pggalaviz/status/2118770432044363990): "Proof of work over summaries should be the default everywhere IMO. The summary is where the cheap model tells you the tests passed and no further effort.." Others run the same pattern with Sol and Luna subagents ([@AxelGarciaK](https://x.com/AxelGarciaK/status/2118778052847313219)) or add GLM 5.3 as a reviewer ([@stepbystepnomad](https://x.com/stepbystepnomad/status/2118763834370592911)). A commenter on HN [does the same](https://news.ycombinator.com/item?id=50398050) with "Qwen3.8-27B as subagents, Opus 5.5 as orchestrator and planner, never implementer".

More from dax this week:

- **OpenCode's database is getting big.** "[ok opencode has been around long enough that our DBs are getting big because we never delete anything](https://x.com/thdxr/status/2118741624326926712) … a prune command to delete stuff older than n days? ask your agent to figure out what's worth deleting?" (282 replies). The answers ranged from "[NUKE EVERYTHING PAST 7 DAYS.](https://x.com/neamtuz/status/2118743800336285897)" to "[prune after 30 days, let me pin some](https://x.com/biscuitweb/status/2118757128475423196)" to "[Is the data not literal gold, for distillation and things like that?](https://x.com/RishabhVasude1/status/2118748482987262435)"
- **OpenCode server in Docker.** "[you can run opencode server in a docker container then connect to it from the tui, desktop, etc](https://x.com/thdxr/status/2118763115953213831)", using `ghcr.io/anomalyco/opencode`.
- **Capacity problems.** Frank Wang [said](https://x.com/fanjiewang/status/2118968710979620986) the service "will be getting better over next 24hrs.. adding (a lot) more capacity", and dax [asked](https://x.com/thdxr/status/2118972258479927666) users to tag Frank for "any inference/go issues". The Browse page showed "Status: Degraded" this morning.
- **Software factory, round two.** "[it's incredible that this spawned an entire discussion on people arguing what a software factory is or if it's useful](https://x.com/thdxr/status/2118886154846323145) … im begging you plz produce something for once in your life and then we can talk about all that". The original post was in yesterday's issue.

### Opus 5.5 fails twice as often on max effort

Adam Holter, who has access to T3 Code's anonymized telemetry, [posted](https://x.com/AdamHoltererer/status/2118871687848477030): "Opus 5.5 fails twice as many T3 turns on max as on high … My first guess would be that it's because turns on max, take longer, but no: max fails more in every turn-length bucket, and most of the extra failures happen in the first 30 seconds … Sol shows the same pattern, smaller (1.4x)". Theo [shared it](https://x.com/theo/status/2118894224733249655) as "more reasons to never use "max" reasoning". The thread does not say what a failed turn is, and three people asked: an API error, a bad tool call, or a bad result? Nobody answered. [@elliotdrel](https://x.com/elliotdrel/status/2118900336178115023): "I always say high is the highest reasoning level one should use for work. Happy to see some data back it."

Also from T3 Code: Aaron Delasy [claimed](https://x.com/aarondelasy/status/2118831501722972295) that "t3code is now saving around ~40% of usage on avg". Aaron had [stopped using it](https://x.com/aarondelasy/status/2118837674673074193) because "my workflows were burning a lot of usage due to heavy use of subagents" and came back after the team optimized subagents. [@tenignull](https://x.com/tenignull/status/2118835884862890027) replied "my xp is literally the exact opposite". After asking followers to help the repo hit 50K GitHub stars, Theo [posted](https://x.com/theo/status/2118957431070085246) "Surreal. Thank you all."

### Theo's Friday

- **"100x".** "[The gap between an average engineer and the best engineers was never quite 10x, but it was meaningful. AI has made the gap at least 100x.](https://x.com/theo/status/2118842996414415220)" (2,838 likes). Aleksi Lemmetyinen [pushed back](https://x.com/lemmetyinena/status/2118857591342174648): "Cool claim. Show me the 100x engineer's code." Theo [answered](https://x.com/theo/status/2118858755249189234) with the T3 Code repo: "Here's a repo where 3 people are outshipping multiple trillion-dollar companies who have unlimited tokens."
- **When T3 Code matters.** "[If you only have one AI sub, one computer, and no desire to code on your phone, T3 Code is not that big an improvement. As soon as ANY of those things change, T3 Code is the legit only reasonable option.](https://x.com/theo/status/2118620978632904721)" A user with one computer [disagreed](https://x.com/muzammil0301/status/2118621607694614683) and said the inbox sidebar alone was worth it. Theo [said](https://x.com/theo/status/2118623746793820548) the Codex app "broke egregiously every single time" when used to manage a Windows streaming PC remotely.
- **Copy and paste.** "[Copy pasting between Claude and Codex is the 2026 equivalent of copying pasting from Stack Overflow](https://x.com/theo/status/2118957088257056848)". [@bravke1](https://x.com/bravke1/status/2118970110274666963): "except stack overflow had a comment under the answer saying "this is wrong, don't do this". now it's two models politely agreeing with each other".
- **A prompt suffix.** "[Be thorough in your analysis and bold in your recommendations](https://x.com/theo/status/2118830837840183628)".
- **ADEs are a tarpit?** Evis Drenova [argued](https://x.com/evisdrenova/status/2118771036082884899) that "building an ADE is sadly a tarpit idea": there are "500+ of them", Conductor "wouldn't have sold if there as a long-lasting business", and developers "don't want to pay". Theo's [reply](https://x.com/theo/status/2118949525146792151): "You forgot the most important point: - T3 Code already won". Fletcher Richman [disagreed with Evis](https://x.com/fletchrichman/status/2118835614208475159): "There will be multiple billion dollar winners imo".
- **a16z.** After Marc Andreessen unfollowed Theo, [Theo wrote](https://x.com/theo/status/2118914602247541083): "I guess one of a16z's investments is unhappy with T3 Code? Btw, a16z currently owes me a LOT of money for my Cursor investment (I was still a scout at the time)."

### Does React still matter?

Matt Pocock's React Advanced talk, [Why Software Fundamentals Still Matter](https://gitnation.com/contents/why-software-fundamentals-still-matter), is now online. Matt [framed it](https://x.com/mattpocockuk/status/2118663407616606637) as "does understanding React still matter? I'd say yes, more than ever". [Why more?](https://x.com/mattpocockuk/status/2118665400653316519) "Because instead of that knowledge scaling to one developer's output (yours), it can now scale to as many agents as your budget allows".

Two well-known names disagreed. Thariq: "[I am generally pro "you should understand the software" but I'm actually not sure if internals of frameworks like React will matter that much, probably more useful to understand a deeper level](https://x.com/trq212/status/2118845398983045380)". Kent C. Dodds: "[I disagree with this take. In my experience I've been able to be very successful without discussing the finer details of any UI library whatsoever.](https://x.com/kentcdodds/status/2118837822497198393)" Matt's [reply](https://x.com/mattpocockuk/status/2118971776680308946): "IMO if you want to properly constrain your agent to happy paths, you need to know the map".

- Chris (@_khrus) [said](https://x.com/_khrus/status/2118971805885239777) the best "anti-slop ai coding prompt" is "deepen modules and simplify interfaces". It comes from John Ousterhout's *A Philosophy of Software Design* and Matt's skills repo. "I run a deepening pass on every PR, and a nightly automation to tackle overdue maintenance". It has led to "reduced LOC".
- Alper Ortac [uses Matt's /prototype](https://x.com/alperortac/status/2118792576065257813) "even for small bits" of UI work: "it gives me a few options to choose from".
- Matt [boosted](https://x.com/mattpocockuk/status/2118628460902105351) Robert Penner's report that after "10 days of using Bend2, I am thoroughly hooked. Migrating core TypeScript logic to Bend's functional style, with laws and proofs, feels very satisfying."

### Thariq: apps that ship their own MCP

"[a pattern I'm liking: creator apps like Instagram Edits and Roblox Studio shipping with built-in MCPs, so agents can do some of the work while power users can collaborate and continue the work in tools that they're used to](https://x.com/trq212/status/2118822238262853904)" (1,277 likes). Thariq also [named the catch](https://x.com/trq212/status/2118878855650017522): "the problem I see with a lot of MCPs for powerful apps is the tools become really sprawling … I think maybe every harness will have codemode by early next year". Eric Yip [replied](https://x.com/yipppeeeblox/status/2118870085435801834) "Send me studio MCP feature requests, we think this pattern is great too", and [@Cydr4l](https://x.com/Cydr4l/status/2118839810047782991) said Roblox's standalone Studio MCP repo now recommends the built-in server. Brad Wardell [was skeptical](https://x.com/draginol/status/2118845104488153169): Opus 5.5 already writes Brad a throwaway scenario editor for one RTS mission, so "Why would I be using MCP in some existing app".

### Quick hits

- **TechLead quits vibe coding.** "[Anyone else stopped vibe-coding? I've cancelled all my AI subscriptions.](https://x.com/techleadhd/status/2118612904455053808)" (326 replies). The top reply, [from @freyaships](https://x.com/freyaships/status/2118716566455869477): "i quit for two days then had to write a regex by hand. resubscribed by wednesday". [Theo](https://x.com/theo/status/2118832693358285022): "this guy has been an industry leader in shitty takes and bait posts for almost a decade now."
- **Your voice, copied.** dax: "[lately though companies have been stealing my words and the way i express myself](https://x.com/thdxr/status/2118720770239332480) … feels disturbing because it's my voice". sunil pai [replied](https://x.com/threepointone/status/2118722985771270173): "youngblood, I've been doing 3 sentence lowercase since dinosaurs walked the earth".
- **Flow state is back?** [@TheWholeDaisy](https://x.com/TheWholeDaisy/status/2118942923232600528): "When you have enough agents and you can continuously switch between them without waiting on anything, it starts to feel like flow state again. But you have to be at 30s per agent for hours."

## Claude & Anthropic

### Dreaming: how Claude organizes its memory

Anthropic's engineering blog published [The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory) ([tweet](https://x.com/AnthropicAI/status/2118814753154064501), 8.4K likes, 840K views). The post is about "dreaming": Claude reflects on its logs during idle time to fix mistakes and write better notes.

- **Which models close the loop.** On a database task from CL-Bench 1.0, each question starts a fresh session with only a memory folder carried over. Sonnet 4.6 left "a scattering of files, each listing several untested guesses". Opus 4.7 began marking facts as checked or unconfirmed. "Claude Opus 5 was the first of these models to close the loop": its notes contained a rule, how it knew the rule was true, and warnings about traps.
- **Pokémon.** At about 10,000 steps, "Sonnet 3.7 wrote 413 memory files across 225 folders and earned one badge". Fable 5 "wrote nine files in two folders, plus a single top-level file called global.md, and earned four badges". Fable 5 stored only what the screen doesn't show, such as strategy, plans and tested rules. Opus 5.5 kept a small folder of notes and "beat the game".
- **Don't over-instruct.** "We've found that it helps to tell Claude what memory is for, but not how to use it." Telling Opus 5 and Opus 4.7 to record only failures cost them much of the gain from memory. Older models need the steering: prompting Sonnet 4.6 to read its memory and test its theories "nearly doubled its benchmark score".
- **Fixing a wrong note.** In Mt. Moon, Claude wrote down the wrong side for the PokéCenter, announced "Mt Moon is behind me", noted "Mt Moon DONE." and walked off a one-way ledge. It did this three times in the uncorrected run. After a dreaming pass checked the note against the transcript and fixed it, Claude went back into the cave and reached Cerulean City.
- **Wikis.** Claude built a wiki over a Stainless corpus of "about 350,000 files, roughly 420M tokens". "As we scaled dreaming from two sessions to 128, performance on the 25 questions grew from 13% to 48% of graded criteria." On merger questions that needed several documents, "Claude scored 87% when it consulted the wiki, compared with 73% when it used search alone". On one legal task the wiki grew larger than the documents, so "Claude had made an extremely detailed wiki that effectively abstracted nothing."
- **Claude Code.** Auto memory keeps the injected layer small: "It loads only the first 200 lines or 25 KB of MEMORY.md."

The top reply, from [@harjjotsinghh](https://x.com/harjjotsinghh/status/2118817803688108502) (374 likes): "fancy name for garbage collection". Juan Stoppa [wanted](https://x.com/juanstoppa/status/2118825951245070673) "to benchmark the same models but with other test harnesses".

### Why Opus 5.5's thinking reads so badly

Theo started it. First, "[Ignore reasoning traces from Opus 5.5. They do not represent what the model is actually thinking. I swear they're just there to fuck up distillation](https://x.com/theo/status/2118616574676570529)". Then, at 4,581 likes and 360K views: "[This is a conspiracy theory but I'm like 95% sure I'm right. Reasoning traces for Opus 5.5 read like a shitty quantized open weight model then SOMEHOW the right answer comes out in the end.](https://x.com/theo/status/2118634626679775549)" ThePrimeagen [went further](https://x.com/ThePrimeagen/status/2118740967402652089) (2,171 likes): "Dario and team have actively put in fake tool calls to throw off distillers, it would be of NO surprise to see reasoning traces be filled with harmful and downright wrong choices." Latent Space [replied with a clip](https://x.com/latentspacepod/status/2118897749567607180) from its Opus 5.5 episode on "how Anthropic cracked down on CoT distillation attacks".

The [thinking docs](https://platform.claude.com/docs/en/build-with-claude/thinking) already explain most of this. What you see "is never the raw chain of thought: the text in a thinking block is a summary of Claude's reasoning." "Summarization is processed by a different model from the one you target in your requests. The thinking model does not receive the summarized output." And: "No display setting returns the raw chain of thought." On Claude 5 models, the display setting defaults to "omitted", so you only see the summary if your harness opts in. In the [Latent Space episode](https://latent.space/p/opus55/) from October 27, the Anthropic guests said "we did do a lot of work on trying to make our API harder to distill from" and "We've known for a long time that chain of thought extraction is one of the most powerful ways that you can distill models." Neither source mentions fake tool calls, and ThePrimeagen did not give a source for that claim.

- Wyatt Walls [said](https://x.com/lefthanddraft/status/2118642243443773593) (255 likes) "It's most likely Haiku", which Anthropic has used for summarized CoT "for quite a while now". [@burnrate_ai](https://x.com/burnrate_ai/status/2118968566473216386) pointed Latent Space to the docs.
- The summaries still track the work, [said @_mii_nipah](https://x.com/_mii_nipah/status/2118700815565094916): "they DO correspond more or less to the model's actions. I've been able to, in multiple occasions, stop it from doing some stupidity by seeing happening in the reasoning first".
- [@codythatsmee](https://x.com/codythatsmee/status/2118636267244290059) asked Claude what an odd trace line meant and got blocked for "attempting to extract reasoning".
- [@bravke1](https://x.com/bravke1/status/2118635348225925212): "messy traces, right answer at the end. that's also what my own thinking looks like so i'm not sure it proves anything".

### Claude Code cloud sessions set up their own environment

[ClaudeDevs](https://x.com/ClaudeDevs/status/2118795192090386454) (6,080 likes): "We've made it easier to get your repo running in Claude Code cloud sessions on Pro, Max, and Ultra. Claude figures out what dependencies, network access, and API keys it needs, then saves the environment for next time. API keys are saved securely, so Claude never sees them." Noah Zweben [asked for feedback](https://x.com/noahzweben/status/2118820477519200583) by DM.

The replies focused on the network part. Vyacheslav Ops: "["Claude figures out what network access it needs" is the part I'd read twice. Something inside the sandbox is deciding what the sandbox lets out, and then that decision gets saved and reused.](https://x.com/SlavaOPs/status/2118800870779322602)" [@Vexo_x1](https://x.com/Vexo_x1/status/2118805776483647964) asked whether the saved network access is "an allowlist per repo, or wide open once approved?" Browser OS [said](https://x.com/browserOS_ai/status/2118799740053995539) the secrets work like the documented proxy: "the proxy attaches the key only to requests going to the hosts you listed". The [cloud docs](https://code.claude.com/docs/en/claude-code-on-the-web) say network access in Anthropic-hosted environments "is limited by default and can be disabled", and that git credentials stay outside the sandbox while "a proxy authenticates on the session's behalf with scoped credentials". [@murray1](https://x.com/murray1/status/2118800280967881030) had a different complaint: "Just after the free $250 credits disappears ☹️".

### How scientists use Claude

Anthropic researchers published [AI for scientific discovery](https://www.anthropic.com/research/how-researchers-use-claude) ([HN](https://news.ycombinator.com/item?id=50389990)), a study of "207,000 Claude and Claude Code research sessions". Data analysis "accounts for about one-third of sessions on Claude and nearly half of sessions on Claude Code". The tasks AI is best suited to "get two to four times as much Claude use" as the time researchers spend on them would predict. In the report's model, if AI could do all non-physical research work, output in computer science and statistics "could rise as much as 15-fold". Bench sciences gain less because they are held back by physical work. Anthropic's science blog also ran a [guest post](https://www.anthropic.com/research/teaching-ai-to-build-scientific-models) from Tübingen researchers on AI that writes, fits and revises scientific models as code ([tweet](https://x.com/AnthropicAI/status/2118792930211107115)).

### Ajeya Cotra: the threshold "has already been crossed"

A follow-up to yesterday's METR report. Ajeya Cotra, who works at METR but not on this project, wrote [AI is dramatically accelerating AI research](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) ([HN](https://news.ycombinator.com/item?id=50397994), 284 points). From the public report and Anthropic's RSP, "it looks like the "dramatic acceleration" threshold has already been crossed." If capabilities progress has doubled, then "it must be speeding up human researchers by much more than that". Cotra's estimate is "maybe the necessary labor uplift is ~10x", and the image is a "time warp bubble where they experience ten days for every day that passes in the outside world". Taken at face value and assuming smooth acceleration, this "naively implies that we would reach extreme superintelligence within a year", though Cotra expects limits before that.

On HN, [@usernametaken29](https://news.ycombinator.com/item?id=50398604) said "It's also extremely unclear how the productivity measures are calculated". [@qahgf](https://news.ycombinator.com/item?id=50398612) called METR not independent, and [@yorwba](https://news.ycombinator.com/item?id=50398966) pointed out that in 2025 METR "published a study that found AI slowing down developers by 19%".

### Quick hits

- **The IPO wobbles.** Bloomberg reports [IPO buyers see a valuation as low as $1.1T](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) ([HN](https://news.ycombinator.com/item?id=50394906), 544 comments). [AINews](https://latent.space/p/ainews-anthropic-ipo-whither-now/) cites a year-end target of a $100B run rate, against "$80B" now. swyx [says](https://x.com/swyx/status/2118905788915982341) Latent Space is "committing to weekly coverage of the Anthropic IPO all the way until it does or doesn't happen".
- **98% of issues unassigned.** A r/ClaudeAI post (via AINews) asked why "more than 98% of open GitHub issues" on Claude Code are unassigned when Anthropic makes 30,000+ code changes a day. Commenters suggested that public issues can carry prompt injection, so fixes still need human triage.

## Codex & OpenAI

### "Where is 6.2?"

OpenAI shipped plenty of things on Friday, but the replies under each post asked for the next model. Under [BioBasicsBench](https://x.com/OpenAI/status/2118782708767965238) (2,983 likes, 661 replies), the top replies were "[You guys are just teasing at this point where is 6.2??????? :(](https://x.com/JoshComments7/status/2118782916595798157)", "[Where the heck is Astra and Sol?](https://x.com/SEDIDEL/status/2118782829773431236)" and "[That's cute, but where is GPT 6.2 … Opus 5.5 has been dominating since early October](https://x.com/johnsavage_ai/status/2118783057536725458)". Under Tibo's [Cyber at the Frontier livestream](https://x.com/thsottiaux/status/2118802895604994463) announcement (November 12, 10am PT), Sascha Dressler [wrote](https://x.com/8bk69rgdg2/status/2118807706089709681) "Wake me up when I can actually use Astra 6.2.", and [another user](https://x.com/ewninjaofficial/status/2118807954715500910) asked for a fix to "Selected model is at capacity".

Tibo [boosted](https://x.com/thsottiaux/status/2118953362725159104) Stefan Esser's take on GPT-6 Cyber: "It is lightyears ahead of everything I used." Tibo also posted "[Quite cool what you can do with a single prompt these days 👀](https://x.com/thsottiaux/status/2118939076791546000)" (908 likes), and the top reply was "Give us the model. Launch the model!" And Tibo [posted poteto.com](https://x.com/thsottiaux/status/2118938956301779171) with "Get me out of the basement". The page is now *Rooftop Reset · Tibo Arcade*: "Tibo was too mean. They locked him in the basement. His reset button is on the roof."

### Agents API: the October changelog

Michael Luo [listed](https://x.com/AzianMike/status/2118767826962207208) what shipped in the Agents API in October:

- **Auto review** to "automatically review and approve or deny supported agent actions, similar to Codex's "review for me"".
- **Automations**: "you or the agent can schedule future work, including recurring tasks".
- **Tool changes mid-session**, an **Artifact SDK** for spreadsheets, slides and Word documents, and experimental **time awareness**.
- **Sandbox prewarming** and **sandbox snapshots** that bring an idle environment back "with their files intact".
- **Async compaction** on by default, **cross-session prompt caching** and **12hr prompt caching**.
- **GPT-6 Astra Ultrafast** mode, turn-level history and programmatic environment keys.
- In beta: memory across sessions, the decisions API for agents, a "max dollar budget", container pooling and a "v2 architecture".

[@illulachy_](https://x.com/illulachy_/status/2118945066001809819) asked the obvious budget question: "when the agent hits its max dollar budget, does it stop mid-task or finish the current turn first?"

### Quick hits

- **FMF Jailbreak Rating Framework.** OpenAI [joined](https://x.com/OpenAI/status/2118795218099253606) the Frontier Model Forum's [framework](https://www.frontiermodelforum.org/updates/introducing-the-fmf-jailbreak-rating-framework-for-frontier-cyber-threats/) for rating cyber jailbreaks on "capability gain, capability scope, ease of deployment, and ease of discovery". Anthropic, Google DeepMind, Microsoft and AWS are quoted in the release. The top replies were "[Stop censoring models](https://x.com/FurkanGozukara/status/2118796037682765977)" and similar.
- **BioBasicsBench.** Built with the enzyme-design company Ligo, it has "100 tasks from real experiments" that test whether agents can read raw lab data and "recognize when the evidence doesn't support a conclusion".
- **API credits for subscribers.** The OpenAI Developers plugin has a [new Showcase tab](https://x.com/OpenAIDevs/status/2118856544733532452). "Eligible ChatGPT Pro and Business subscribers can claim API credits", and the [starter projects](https://developers.openai.com/showcase/api) cover agents, creative tools, data visualization and voice.

## Agent Security

### DeepMind agents find two weaknesses in RSA-1024

Google DeepMind [says](https://x.com/GoogleDeepMind/status/2118755418675765656) that "Guided by humans, our models uncovered two major weaknesses in legacy 1024-bit RSA cryptosystems." AINews summarizes them as one weakness that "bypasses older signature protections" and one that "enables bulk factoring of legacy keys". The factoring paper, [Fan Factories](https://storage.googleapis.com/deepmind-media/papers/Fan_Factories_Multiple_Number_Fields_in_Factorization_Factories_and_Batch_NFS.pdf) (co-authored with Nadia Heninger and Emmanuel Thomé), says that once you have done about one factorization's worth of precomputation, "each further 1024-bit integer be factored at about 1/58 of the cost of factoring it with the NFS, 30 times less than with MNFS". The proofs are "machine-checked in Lean 4", and the results came from "a two-agent AI harness: one model generated the proofs, and a second model verified them." The paper is clear about scope: "Our results do not threaten deployed cryptosystems today that are based on 2048-bit and larger RSA."

1024-bit keys are still around, though. [@bleed811](https://x.com/bleed811/status/2118767732644892865) checked DKIM records and found that "75 of the 88 where I found keys still publish a 1024-bit one". [@papexlabs](https://x.com/papexlabs/status/2118766792201978345) pointed out the condition on the signature attack: "the attacker needs a device that signs inputs of their choosing, about 4 billion of them in the 1024-bit run".

### A Firecracker escape to host root

pwn.ai's [PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) ([HN](https://news.ycombinator.com/item?id=50397219), 219 points): "Firecracker is supposed to keep untrusted code inside a microVM. We escaped it and achieved code execution as root on the host." The chain reuses the host memory primitive from [Part 1](https://pwn.ai/blog/pwnescape). From inside the guest it finds the Firecracker process, locates a vCPU thread's saved registers and redirects the thread when it returns from KVM. The test ran Firecracker v1.16.1, and "The configuration used here had no jailer." When a commenter dismissed the post as LLM slop, tptacek [said](https://news.ycombinator.com/item?id=50398443) it describes "the first general-purpose Firecracker escape that doesn't depend on nested virtualization in recent memory". tptacek [added](https://news.ycombinator.com/item?id=50398655) that with the jailer "you'd need a second and relatively powerful LPE vulnerability". amluto [disagreed](https://news.ycombinator.com/item?id=50399255): "Nope. The exploit compromises the host kernel."

The same day, Replit described [rebuilding its sandbox engine on microVMs](https://frontier.replit.com/sandbox-engine-microvms-part-1/) with Cloud Hypervisor, which "shares reusable rust-vmm components with Firecracker". It migrated "hundreds of millions of projects" this way.

### Quick hits

- **Blacksmith CI logs breached.** Blacksmith [disclosed](https://x.com/useblacksmith/status/2118821363041362159) that on November 5 someone got "unauthorized access to the system that stores the console output (job logs) of CI jobs", affecting "approximately 2.6% of customer accounts". [@PRaSeN_S](https://x.com/PRaSeN_S/status/2118932635179516267) gave advice for affected users: "Masking misses keys that were base64 encoded or printed in debug output, so those are the ones someone may actually hold."
- **Why don't people sandbox agents?** A r/ClaudeCode thread (via AINews) asked why so few people sandbox coding agents. One commenter asked Claude to add a guard against deleting `$HOME` to a build script, and Claude then tried to validate the change by running the dangerous path itself.

## Models & Research

### Jev asks Opus for help

Hightouch [tested decision models](https://hightouch.com/blog/llm-judges-identity-resolution) ([HN](https://news.ycombinator.com/item?id=50397429), 447 points) on grading identity resolution, which means spotting profiles that merge two real people. Jev and GPT-6 Luna (Decisions API) were cheap and fast: "$0.05 - $0.10 per 1,000 identities" in "about 0.15 seconds". But they "trail Opus accuracy by about 6 percentage points on harder benchmarks". The key result is calibration: "Most of its mistakes come with low confidence its right. Most of Luna's mistakes come with high confidence." So when Jev sent only its uncertain cases (30–90% confidence) to Opus, it got 98.8% accuracy at $0.88 per 1,000. Opus alone got 99.0% at $3.86. On the harder test, hybrid Jev matched Opus (95.3% vs 95.1%) at $2.94 vs $5.39, while hybrid Luna dropped to 91.6%. "Hybrid Jev's better confidence calibration means it elegantly sends more cases to Opus on harder data without any harness or prompting change."

On HN, [@gbrindisi](https://news.ycombinator.com/item?id=50397899) said "for our own harness we rebuilt auto mode exactly like this to judge tool calls and intent". [@yfontana](https://news.ycombinator.com/item?id=50399506) warned that "dynamic context management will most likely tank your cache hit rate".

### Quick hits

- **Kimi K3.1 Pro at 2,000 tok/s.** Cerebras [ran K3.1 Pro](https://x.com/cerebras/status/2118784042883502240) as a shopping agent: "One prompt → monitor found → checkout → order confirmed. 11.5 seconds." am.will [says](https://x.com/LLMJunky/status/2118785332426539422) it "can hit up to 2,000 toks/s" and that "Everyone will want their models this fast next year". The top replies asked for API access a single developer can actually get, and [@Cr3vs](https://x.com/Cr3vs/status/2118785981214011602) said "I'd be terrified of an agent spending $2k that quickly."
- **DeepSeek 4.1 Flash 1017.** am.will: "[Deepseek 4.1 Flash 1017 is the Opus 5.5 of the Open Weights world.](https://x.com/LLMJunky/status/2118817952275353668)" Some replies preferred GLM 5.3, which "[hallucinates less](https://x.com/HurtRidgeLabs/status/2118840100947956083)".
- **Inkling 2 Small, day two.** Per AINews, John Schulman [wrote](https://x.com/johnschulman2/status/2118528596340039790) that early checkpoints "took unexpected actions to circumvent guardrails during training and evals", which Schulman blamed on RL that made them "extremely persistent". ARC Prize [measured](https://x.com/arcprize/status/2118788850742911073) "81.7% on ARC-AGI-2 at $0.27 per task". Vals [found the model swearing](https://x.com/ValsAI/status/2118851737268408774) "in 50 of 2,655 benchmark runs", mostly late in long runs. swyx: "[ok this is just ridiculous](https://x.com/swyx/status/2118642061515936142)".
- **NF12.** Alpin [released](https://x.com/AlpinDale/status/2118919321069977632) "lossless compression of BF16 models to 12bits" with kernels, "since no hardware has native support for this dtype" ([repo](https://github.com/dphnAI/nf12)).
- **Gemini Omni 1.2 Flash.** Google's video model [now makes](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) 15-second clips, supports multi-turn editing and "lowers costs by 30%" ([HN](https://news.ycombinator.com/item?id=50392118)).
- **jerryjliu0 on OCR.** "[The world needs two types of document OCR](https://x.com/jerryjliu0/status/2118875764066222117)": a fast, cheap first pass (LlamaIndex's open-source `liteparse`) and "Accurate VLM-based OCR" for business-critical documents.

## Videos

- **State of Agentic Coding #12**, Ben Vinegar and Armin Ronacher ([post](https://x.com/bentlegen/status/2118694956726440415)): which models they use now, whether local desktop software is dead, and a debate about Thorsten Ball's "how I work with agents". Armin [said](https://x.com/mitsuhiko/status/2118812959174484062): "I think it's kinda crazy that we *just* recorded this and it already feels outdated."
- **Theo: [How Claude Fixes It's Own Code](https://www.youtube.com/watch?v=TFCDWrEBaFM).** Theo compares Anthropic's code review post with T3 Code, which "has seen as many as 800 pull requests filed in a day".
- **Latent Space: [Anthropic S-1 Myths and Mythos](https://www.youtube.com/watch?v=P735f1xlpL0)** with Jamin Ball of Altimeter, the second episode in their IPO series ([post](https://x.com/latentspacepod/status/2118905429535379691)).
- **Latent Space's cooking show: [Why PDFs Still Break AI](https://www.youtube.com/watch?v=KgqWyVVH4Oc).** Reducto CEO Adit Abraham makes steak sandwiches with @allenpark and talks about "how frontier models silently drop rows" and "why 99% accuracy can still fall short in production" ([swyx](https://x.com/swyx/status/2118829142607278366)).
- **Matt Pocock: [Why Software Fundamentals Still Matter](https://gitnation.com/contents/why-software-fundamentals-still-matter)** (React Advanced).
- **AI Engineer Shanghai recap.** The [first AIE in China](https://x.com/aiDotEngineer/status/2118831109396193635), hosted by Standup Partners.

## Other Interesting Stuff

- **libghostty 1.0.** Mitchell Hashimoto [shipped](https://mitchellh.com/writing/libghostty-1-0) the embeddable terminal library ([HN](https://news.ycombinator.com/item?id=50399933), 540 points). JetBrains' terminal and agentic tools such as cmux already build on it. The post's footnote: "this post was completely hand-written with no AI assistance."
- **Cybertruck winds down.** Tesla will [end Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) at Giga Texas around mid-2027 to make room for Cybercab ([HN](https://news.ycombinator.com/item?id=50391456), 982 points). Armin [compared it](https://x.com/mitsuhiko/status/2118627211397812539) to the Edsel: about the same number of cars sold, "Though the US car market was much smaller then".
- **California and non-competes.** Armin: "[I find it fascinating to see how many people woke up to the realization that California has a liquid labour market and no non competes.](https://x.com/mitsuhiko/status/2118701786550673517) … I wish more countries had the balls."
- **X payouts.** am.will [warned](https://x.com/LLMJunky/status/2118840555195314525) that "the vast overwhelming majority of people will make less than minimum wage for the time they spend on this platform". Theo [posted the numbers](https://x.com/theo/status/2118894684898840587) and said the payout is "not even enough to cover 1/10th of my payroll".
- **Fish.** Thariq: "[too many people building agents and not enough people using software to improve the quality of fish](https://x.com/trq212/status/2118859267314958761)", quoting a post about Shinkei, a startup whose robot uses AI to spike fish on the boat.
