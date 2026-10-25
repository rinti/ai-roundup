---
title: "The Agents SDK drains Claude's 5-hour limits faster, Codex resets everyone, Matt Pocock's best year selling courses, Elvis's owners sue Anthropic"
date: "2026-10-25"
summary: "A quiet Sunday, mostly about usage limits. **Theo** [confirmed](https://x.com/theo/status/2114166439813017873) what T3 Code users suspected: \"All Agents SDK usage will drain your 5h limits faster than using Claude Code directly\" (1.9K likes). Theo's guess is that the recent boost to 5-hour limits never reached the SDK, and has reported it to Anthropic. Replies asked for a banked reset. **Tibo** gave Codex users exactly that: a full reset, \"all propagated\" by midnight PST (3.5K likes), plus \"Not a real improvement, put the reset in the bag\". A Claude Code privacy thread came back on HN: Claude had been putting **users' email addresses in User-Agent headers** when sites like the SEC ask agents to identify themselves. **Theo** also listed a \"slow month\" since Opus 5.5 (a TypeScript compiler in Rust, a Rust toolchain, an OS for agents, ~370 merged PRs) and shipped \"share with guest\" threads in T3 Code. **Matt Pocock** says this has been the best year yet for self-paced courses, while Total TypeScript sales \"have dropped off a cliff\". Matt also floated a tool that decides whether a refactor PR can be merged without review. **dax** ran 6.77T tokens through one GB300 rack in a day, and asked what happens to resold GPUs if token prices collapse. Also: **Authentic Brands Group** and other Presley rights holders sued Anthropic over 274 songs, Terence Tao's blog launched a community project to rewrite OpenAI's math write-ups, Dan Luu says \"we should be more ambitious with the software we build\", Apollo finds no AI payoff outside tech, and a paper argues AI text is hard to read because models are trained toward information density."
tags:
  - Claude & Anthropic
  - Codex & OpenAI
  - Agentic Coding & Agent Harnesses
  - Inference & Compute
  - Personal Agents
  - Security
  - Other Interesting Stuff
---

# AI Roundup — October 25, 2026

## Claude & Anthropic

### Theo: the Agents SDK drains 5-hour limits faster than Claude Code

It started with DeepakNess, who [downloaded T3 Code](https://x.com/DeepakNesss/status/2113912028675162171) and hit the 5-hour limit on a Max plan for the first time: one session fixing payment bugs "emptied the whole 5-hour limit in ~30 mins". Theo [spent the day on it](https://x.com/theo/status/2114166439813017873) (1.9K likes, 122K views): "I confirmed it's a real bug on Anthropic's side. To be clear: this does not affect weekly limits. All Agents SDK usage will drain your 5h limits faster than using Claude Code directly. I have reported this to Anthropic, hoping for a fix soon."

Theo's theory is the [recent boost to 5-hour limits](https://x.com/theo/status/2114166577608478826): "Seems like they forgot to apply it to Agents SDK?" Claude [announced that boost](https://x.com/claudeai/status/2102435538120691886) alongside Opus 5.5. Theo [added](https://x.com/theo/status/2114166866579259501) that a GitHub issue "was opened just a few days later, so I'm like 95% sure I'm right here".

Replies:

- **It's not just T3 Code.** "[both amp and t3code drain faster than native cc](https://x.com/magikarptrades/status/2114275864737464479)". Casey James [ran it](https://x.com/MrCaseyJames/status/2114198710666313830): "The sdk seems to be treated differently than others." One user [dated it](https://x.com/_wannabeabaddie/status/2114168292969693675) to the update that added "extra $200 for credit for api usage for subs".
- **Weekly limits too?** hxky [pointed out](https://x.com/hxkoboi/status/2114238538393002266) that Theo's screenshot "doesn't prove it doesn't affect weekly", since the 2% weekly figure could be rounding. "Maybe a longer run that drains 10% of weekly could settle it." Another user [disagreed](https://x.com/C55077020L/status/2114258144981336411) that this explains the wider complaints: "If it doesn't impact weekly limits then it has nothing to do with what I experienced."
- **The jokes:** "[theo doing anthropic's billing qa on a saturday for free](https://x.com/LaireLaFlare/status/2114174951200899392)" and "[the agent spent 20 minutes proving the agent was being overcharged](https://x.com/mciabuca/status/2114170917492506904)".

### Claude Code put users' emails in request headers

A thread from Wednesday reached HN today ([HN](https://news.ycombinator.com/item?id=50219875)). Chris Lakin [found](https://x.com/chrislakin/status/2113358733548081528) that Claude Code was "exposing personal data in http headers because the sites it curled politely asked agents to identify their users", and that Claude said it had "shared my email 10+ times this month… including to the SEC" (2.9K likes, 299K views).

Rian Dolphin [noted](https://x.com/RianDolphin/status/2113498007802982892) that SEC EDGAR requires you to declare yourself in headers. Chris [replied](https://x.com/chrislakin/status/2113498886409253171): "yea and claude didn't ask for my permission". Jason H. [asked Claude](https://x.com/jhofmann/status/2113522715483054436) and found that a weather.gov User-Agent with their email had been copied to other services. "It also leaked my street name": "Four sensors put User-Agent: \"homeassistant-<streetname> (jason@*********.com)\" on their requests." The practical takeaway from Austin Mudd: "[time to add a snippet to agents.md...](https://x.com/muddsicle/status/2113425885483450587)". On HN, deaux linked [issue #53231](https://github.com/anthropics/claude-code/issues/53231), from April.

### Elvis Presley's owners sue Anthropic

[The Hollywood Reporter](https://www.hollywoodreporter.com/music/music-industry-news/anthropic-elvis-presley-lawsuit-ai-1236739617/), citing Billboard, reports a suit filed Friday over 274 Presley songs, including "Can't Help Falling in Love" and "Don't Be Cruel". Authentic Brands Group, which owns the rights to Presley, filed alongside other rights holders. Lead attorney Richard Busch says Anthropic "has built its entire business model based on copyright infringement at a scale never seen before". Per Rolling Stone, the complaint says that after "guardrails" went in, Claude was asked to recreate specific songs "for a modern audience" and admitted "These renders keep landing very close to the originals: same structure, same hooks reused with light rewording". Round Hill sued Suno and Anthropic in August, and Universal Music Publishing, Concord and others sued earlier over lyrics.

## Codex & OpenAI

### Tibo's Day 20: rest and reset

Tibo's [Day 20](https://x.com/thsottiaux/status/2114200152701575656) of Codex improvements was "Rest and reset", [by midnight PST](https://x.com/thsottiaux/status/2114200291319124163). Then: "[It is all propagated. Enjoy some mad codexing tomorrow. Fun week ahead too.](https://x.com/thsottiaux/status/2114237083652882932)" (3.5K likes, 320K views). When Theo claimed T3 Code had kept pace with the 28 days of Codex improvements, Tibo [answered](https://x.com/thsottiaux/status/2114228044072403055) "Not a real improvement, put the reset in the bag" (1K likes). Theo's reaction to the reset: "[Genuinely really needed this one 🫡](https://x.com/theo/status/2114218309055123866)".

The replies were about timing. "[Me hitting 0% usage at the same time as the reset.](https://x.com/SteveSchoettler/status/2114238976148312548)" (169 likes). "[Midnight PST is NOT now...](https://x.com/BrandonJimeno/status/2114240828977840480)". Bento [asked](https://x.com/_darkplates/status/2114248333082435883) for a banked reset instead: "it's been hard to sleep these pasts week with all the resets."

### Presets in Codex CLI 0.164.0

Felipe Coury [demoed presets](https://x.com/fcoury/status/2114084792350494876): "Save the prompts you repeat plus the model, reasoning and other settings you switch between, then recall them mid-task with Ctrl X P or /presets." The demo is a review → fix loop. Presets are "[unique per Codex CLI install](https://x.com/fcoury/status/2114222130267115905)", not per repo. One user [asked](https://x.com/easinxarafat/status/2114087456538812869) for a launch flag to start workers from a preset.

### A community hub to rewrite OpenAI's math write-ups

A guest post on Terence Tao's blog [announced oai-math-revised](https://terrytao.wordpress.com/2026/10/24/oai-math-revised-a-community-hub-for-revising-openais-math-write-ups/) ([HN](https://news.ycombinator.com/item?id=50222283)). Abhinav Nellore, Johannes Schmitt, Soledad Villar and Rachel Ward write that "OpenAI's math write-ups at https://github.com/openai/math can be difficult to understand and can have incomplete citations", and invite students, postdocs and professors to improve them at [mathcommunity/oai-math-revised](https://github.com/mathcommunity/oai-math-revised/). HN was cynical. vishna called it "OpenAI's etc version of getting unpaid internships from phd students". sebzim4500 asked "How does any of this benefit OpenAI? They already got the headlines". sdenton4 proposed a new truth state, "Verified-but-Unproven", for "results which we know to be true through formal verification, but without any coherent proof."

## Agentic Coding & Agent Harnesses

### Theo's "slow month" since Opus 5.5

Theo baited the timeline with "[It's been over a month since Opus 5.5 dropped and you still haven't shipped anything impressive with it](https://x.com/theo/status/2114177918226354678)", then [answered](https://x.com/theo/status/2114194770209947674) it (1.1K likes): "To be fair, I haven't shipped much since Opus 5.5 dropped." The list:

- **ts-rust**, "a complete rewrite of Typescript compiler in Rust that is 3x faster than the Go version", and **lust-lang**, "an alternative toolchain for a subset of rust that compiles 100x faster".
- **Slopalytics** for comparing models on benchmarks and usage, plus private analytics (Slophouse, fleethouse).
- **t3os**, "the start of my \"perfect os for agents\". Got 5 boxes running it already".
- In T3 Code: a `watch_pr` tool "so agents sleep on CI/reviews and cut GitHub API calls by 90% while babysitting", "early compaction for idle Claude threads before prompt cache expires", a `t3 thread` CLI, PR diff badges that split code, tests and docs, a usage dashboard by cache tier, speed and model, and "purged over 50% of our test suite". Plus "roughly 370 other merged PRs".

Theo then said "[Post your list](https://x.com/theo/status/2114194806608183752)". Kent C. Dodds [posted one](https://x.com/kentcdodds/status/2114225372812414986): migrating a web app to TanStack Start "(+193K / -157K in one PR)", self-hosted Kody, orgs, a 145-operation HTTP API, and "+1,044,061 / -567,098 lines". Ayman Khan [asked](https://x.com/AymanKhan90/status/2114202874381283591) whether Theo could still explain a project end to end in an interview. Theo: "[Depends on which project. I promise you I could still impress the interviewer and get the gig :)](https://x.com/theo/status/2114205513592578136)". The most honest reply: "[Everything I've built with it has been useless, but I've never shipped useless slop with such speed before](https://x.com/AidenAllred2/status/2114195748057149662)".

### T3 Code: share with guest, one improvement a day

- **Share with guest** ([919 likes](https://x.com/theo/status/2114238361967988747)), now in T3 Connect on nightly. "I'm so tired of copy pasting from a thread, sending it to a coworker, waiting for them to respond, screenshotting the context and sending it back to my agent. Now I just send them a link." The model is the Uber Eats/DoorDash group order: guests "can add whatever they want, but ultimately I decide if the order goes through or not." Opus 5.5 made the demo video. Replies: "[Inviting my buddy to watch as I fuck up his codebase live is going to go crazy](https://x.com/KCrabbII/status/2114241142372151735)". Rheosoph [warned](https://x.com/rheosoph/status/2114274231378969052) that "once two people drop conflicting context into one agent thread it usually turns into a mess faster than just sending a pr". When asked why to pick T3 Code over the Codex app, Theo said "[Opus 5.5 is a pretty good reason](https://x.com/theo/status/2114251798697714045)".
- **A daily ship streak.** Theo [made it official](https://x.com/theo/status/2114219096128750008): "Gonna ship one meaningful improvement to T3 Code every day for however long I'm capable". Bug fixes don't count: "[If they did then we have like 60+ a day on average 💀](https://x.com/theo/status/2114232246525931818)".
- **iOS from Ubuntu.** Theo [ran a thread](https://x.com/theo/status/2114267380818100402) on an Ubuntu machine ("[t3os in this case](https://x.com/theo/status/2114280776279994600)") that drove an iOS simulator on a connected Mac mini: "This is the best iOS dev experience I've ever had." A reply [recommended](https://x.com/incanescent/status/2114274754781688139) [Sim Slim](https://github.com/MobAI-App/simslim) for running several simulators without the unused daemons.
- **A UI hill climb.** Robin Ebers [keeps reinstalling it](https://x.com/robinebers/status/2114251890829443286) but can't get past "the fonts, the border radius, the icons, the font hierarchy". Theo [asked](https://x.com/theo/status/2114280056784921048): "Think I can turn T3 Code's UI into a hill climb for Opus?" kitze [agreed with Robin](https://x.com/thekitze/status/2114281145453969789) and quit partly because "the settings opened as a page and not as a dialog". The useful replies were about the grader: "[Have it judge pairs instead of scores](https://x.com/theshaheermalik/status/2114285315712339977)", and "[Lint for off-scale values … Opus can climb a number, it can't climb taste.](https://x.com/tuffbrownboy/status/2114284083773911544)"

### Theo's council gets a Gemini jester

Yesterday's council skill took the suggestion from its replies. Theo [added](https://x.com/theo/status/2114229780065464669) "a \"gemini the jester\" section to my council skill" and reports "Gemini hallucinates in over 80% of the runs" (840 likes). Keshav Jindal [added](https://x.com/Keshavatearth/status/2114231489215008919) that Gemini "just makes up links for sources for web related stuff. this is so 2024 behavior." Aurora Skye [pointed out](https://x.com/AuroraSkye21259/status/2114261558041956719) that Artificial Analysis rates Argon 4's hallucination rate the lowest ever at 15%, against 68% for Opus 5.5: "whole bench is just completely broken and misleading".

### Matt Pocock: can a refactor PR merge itself?

Matt [thinks](https://x.com/mattpocockuk/status/2114311664069718370) "It feels possible to me to check deterministically if a PR can be automerged or not", given strict constraints: "Only reorganises code", "Does not change the module graph", "Does not make test coverage worse". The [dream](https://x.com/mattpocockuk/status/2114313438218289172) is "refactorings in the source code which don't change the bundled output", which needs "No import.meta.glob or reading source code file positions at runtime" and "No global state". Then: "Probably not possible the more I think about it."

Theo [replied](https://x.com/theo/status/2114314552183799822) "By the time you get it working well, the models will be good enough to work around it (or not need it entirely)". Matt's line on review: "[If a PR is a one-way door (i.e. can't be reverted), a human has to review it IMO](https://x.com/mattpocockuk/status/2114313570628587744)". Lukas Huber [has done this with agents](https://x.com/lukhuber/status/2114313578614526146): "gate the tree that will land (branch + current main), not the branch. Two green PRs broke main together", and "treat a test that disappears as red". Dusan [warned](https://x.com/dusangran/status/2114313165777289545) that in Spring "moving a class to another package can drop it out of component scan. same code, the app just starts without that bean".

### Lauren: skills will shrink into saved prompts

Guillermo Rauch [wrote](https://x.com/rauchg/status/2114085432749347086) that managing over- and under-guiding the AI "is the #0 skill I look for". Lauren [pointed to](https://x.com/poteto/status/2114095305910280363) the pstack guide (1.8K likes). Asked whether Opus 5.5 changed things, Lauren [said](https://x.com/poteto/status/2114099131845423142): "the more capable models get, the less instructions they need. over time i expect the skills to shrink more and more, until they're basically just saved prompts".

dax made a similar point about tools: "[people doing great work can do it in vanilla claude code](https://x.com/thdxr/status/2113967877401251953)" (892 likes). One reply [compared it](https://x.com/nuttynux/status/2114071544347635877) to "the obsession with tweaking your dotfiles (to the exclusion of doing actual work)."

### Dan Luu: "We should be more ambitious with the software we build"

[Dan Luu's post](https://danluu.com/ambitious/) ([HN](https://news.ycombinator.com/item?id=50225695), 457 points) borrows the title from Michael Malis of pgrust. Luu built a regex engine, a ripgrep fork and other "works for me" projects in "a low single-digit number of hours of my time", work that would otherwise have taken "a year or more". The point is that "it doesn't even occur to people to do these things that are now easy". On HN, mindcandy wanted more "worked hard for months with AI's help to make something I would have never considered possible before" and fewer complaints about boredom. anonymous908213 noted that pgrust was "just yesterday" removed from ClickBench for "cheating the benchmark in three different ways". malisper (Malis) described the verification work: a compiler that turns C and Rust into Lean, then "an LLM write a proof that the C and Rust code behave identically", covering "~70k lines of C code" so far.

### Smaller items

- **Five Qwens vs Fable 5:** [GVS5H](https://github.com/slee-persis/GVS5H) claims five Qwen3.8-27B models match Claude Fable 5 on LiveCodeBench Hard ([HN](https://news.ycombinator.com/item?id=50228167), 165 points). vikramkr pointed out it's "a saturated coding benchmark from early 2025" with "essentially guarenteed contamination", and sams99 objected that the harness gives the model "an agentic loop of sorts" on a zero-tools benchmark.
- **Matt Pocock's stat line:** "[Thanks for 300K stars and nearly 30m installs.](https://x.com/mattpocockuk/status/2113920252593786989)" (1.7K likes).
- **A T3 Code convert:** "[i genuinely don't understand how people are still using terminals or any other app for agentic development](https://x.com/AtharvaIngle7/status/2114267747203039682)", citing the Orchestrator V2 sidebar. Maria [called it](https://x.com/maria_rcks/status/2114208300195623248) "pretty much this generations VS Code".

## Inference & Compute

### dax: 6.77T tokens on one rack

dax's team did its [first test run](https://x.com/thdxr/status/2111849415204065611) on a new GPU rack with a DeepSeek inference setup, and it beat "every single vendor that we've found" on price/performance. The [24-hour numbers](https://x.com/thdxr/status/2114176734056857916) (756 likes): "handled 6.77T tokens", "p50 TTFT was 1.16s", "p50 TPS was 143". p95 "isn't looking great because one of the trays is flakey". Michael Arnaldi [asked for context](https://x.com/MichaelArnaldi/status/2114280324158881968): "pretty impressive if the car is a Fiat Panda and pretty much irrelevant if it's a F1". It's a [GB300 NVL72](https://x.com/thdxr/status/2114280911978025349), and it is "[served identically to official deepseek api](https://x.com/thdxr/status/2114211145615626433)".

### Who gets left holding the GPUs?

Yuchen Jin [heard from a neolab friend](https://x.com/Yuchenj_UW/status/2114043133734637735): "Even if we fail to train the best model, we locked in GPU capacity early. H100/B200/B300 rental prices have since gone up 2–3x. We can just resell the compute and print money." dax: "[if token prices collapse there's going to be a glut of these](https://x.com/thdxr/status/2114220043932205453)", and "[every historical shortage has been followed by a glut](https://x.com/thdxr/status/2114221097742909938)". Replies: "[eth miners had this exact plan right up until the merge in 2022](https://x.com/sachinmour/status/2114234307573424392)", and "[A glut of chips is easy to imagine. A glut of powered, permitted sites is not](https://x.com/ares_mheinke/status/2114289531231015251)". One reply [framed the spread](https://x.com/Sidrisi786/status/2114237143912681525): "If the rental stays up 2x and the token price halves, who is holding the spread?"

### Cerebras: Kimi K3 on 59 wafers

Cerebras [explained](https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras) how it splits a trillion-parameter model across WSE-3T wafers ([HN](https://news.ycombinator.com/item?id=50227356), 187 points). Using Kimi K3 as the example: each wafer has 44 GB of on-chip memory, each layer needs about 16 GB at 4 bits, dense layers get a wafer each for KV cache, and linear-attention layers fit two per wafer. That makes "35 + 24 = 59 wafers", with activations passed over RDMA at "roughly 2 microseconds per hop". On HN, eulgro estimated about 4.1 J/token. zhyblife99 asked about failure domains: "one bad wafer takes the whole thing down".

## Personal Agents

Lauren [likes having](https://x.com/poteto/status/2114071326411690209) "our bots collaborate with each other! just add your bots to slack and work alongside them like teammates" (1.1K likes). Kent C. Dodds is [doing it in Discord](https://x.com/kentcdodds/status/2114083009897148489) with Tanner Linsley, whose Codex is "wired in too". Greg Tomaselli [noted](https://x.com/GregTomaselli/status/2114075548385489049) "They do use a lot of tokens this way though!"

Lee Robinson [paid out](https://x.com/leerob/status/2114144779613171916) the $100 Grok Bot feedback bounty. Coming soon: the bot will "better understand its own usage and be able to suggest improvements", the vault "will be able to de-dupe", better mobile UX for terminals, better group chat bot UX, and notes/health connectors. Two bugs were fixed: table scrolling and saved logins on iOS.

## Security

- **HTTP2Shell, day two.** Aikido [updated its post](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497) on the Brotli RCE (CVE-2026-111497) with patch versions: Python's Brotli and brotlicffi to 1.2.1, Bun 1.4.4, Envoy and Istio releases, and curl's Brotli dependency ([HN](https://news.ycombinator.com/item?id=50219177), 328 points). Apache's mod_brotli doesn't decode Brotli, so it isn't affected. On HN, flyingjoe noted the reversal on package cool-downs: "Now we're constantly overriding those because security incidents will be exploited immediately." cowsandmilk thinks Google changed the code in February without realizing it was a security fix.
- **A security guide.** Markets & Mayhem published [A Practical Guide to Improving Your Security in 2026](https://x.com/Mayhem4Markets/status/2114034035542352190): passwords, patching, segmentation, backups, "and a way to check who is really on the phone". am.will [recommends it](https://x.com/LLMJunky/status/2114050517940990303): "One of the most important skills you can learn rn is defensive cybersecurity."

## Other Interesting Stuff

### Matt Pocock: the best year for courses, and Total TypeScript sales "dropped off a cliff"

Mark Price [wrote](https://x.com/PlayUGC/status/2114047467310186683) that AI "destroyed my industry": "At one point I was earning 100k a month selling online coding courses. Today I can't make money with training videos if I wanted to." Matt [answered](https://x.com/mattpocockuk/status/2114264078889762990) with "an alternate data point. This has been my best year selling self-paced video courses, which has been 98% of my income since 2022."

Matt's view is that "course creation is curation", and what's worth teaching now are techniques that are "Harness-agnostic", "Model-agnostic" and "Language-agnostic". Matt "wouldn't make my \"Total TypeScript\" course now (sales have dropped off a cliff)", because it covers things "which are easy to ask agents about". "Instead, I'd make \"TypeScript for AI\", focusing on the actual things you need to know to make a productive TS codebase for agents". Matt also [credits](https://x.com/mattpocockuk/status/2114264371966648737) going viral on AI Engineer for "a new order of magnitude in my audience". Emil Kowalski [said](https://x.com/emilkowalski/status/2114274678705668376) "Same here, best year by far." Asked whether models will soon design custom courses, Matt [said](https://x.com/mattpocockuk/status/2114283908028068229) "what you don't get there is curation". Asked to ship the rules as a file for agents, Matt [said](https://x.com/mattpocockuk/status/2114299749918724383) "I prefer teaching people to fish than giving them fish".

### Economics

- **No payoff outside tech.** Apollo's Daily Spark: "[No Signs of AI Payoff Outside the Tech Sector](https://www.apollo.com/wealth/insights-news/insights/daily-spark/no-signs-of-ai-payoff-outside-the-tech-sector)" ([HN](https://news.ycombinator.com/item?id=50224463), 558 points), which finds "zero financial payoff to corporate America outside of tech". jstanley quoted Solow's 1987 line about the computer age showing up "everywhere but in the productivity statistics". tapoxi's explanation: "We can use a non-deterministic system because we have test suites that act as validation gates. Other industries don't". realusername: "the productivity return in my dayjob has been slightly negative so far."
- **Creative jobs.** Apricitas asks [how much of 200K lost media, film and arts jobs is AI](https://www.apricitas.io/p/ai-and-the-fall-of-the-creative-class) ([HN](https://news.ycombinator.com/item?id=50226419), 376 points). jalev argued some graphs "don't support the hypothesis".

### Research

- **Why AI text is hard to read.** [Clark, Martin and Mahowald](https://arxiv.org/abs/2610.29162) ([HN](https://news.ycombinator.com/item?id=50223647), 207 points) find that, compared with human writing, "all nine frontier and near-frontier models use more inanimate subjects with animate verbs and more low-frequency n-grams". Their hypothesis: models are "increasingly optimized for other goals like math, code, and reasoning", which push toward information density rather than successful communication. Fine-tuning under a length penalty reproduced the drift. On HN, trusche noticed the effect in long sessions, where the model invents its own jargon, and now prompts "summarize again without the jargon".
- **Dream-1.** Dream Labs came out of stealth with $90M and [Dream-1](https://dreamlabs.ai/research/dream-1/), "a World Action Model that controls robots it has never seen, performs tasks it was never shown, and runs from $3/hour" ([HN](https://news.ycombinator.com/item?id=50223785)). One HN tester asked it to move the elephant next to the ball, and it moved the ball next to the elephant.

### Also

- **Kimi's lesson.** am.will's [takeaway](https://x.com/LLMJunky/status/2114147108479725712) from the Kimi K3.1 Pro ad campaign: "If your model is really as good as the frontier, you don't need to advertise it". Arena [placed Kimi K3.1 Pro (Max)](https://x.com/arena/status/2114008313054527901) at #11 in its Agent Arena, which would make it the top open model there.
- **Latent Space is hiring** writers, reviewers and reporters for a [new editorial team](https://x.com/swyx/status/2114145315196711194), and takes [guest posts](https://x.com/swyx/status/2114149330135519730).
- **mitsuhiko** [found](https://x.com/mitsuhiko/status/2113939317567410269) that PWAs can't do much on the Duo yet, but flipping ViewportSegmentsAPIEnabled and DevicePostureAPIEnabled exposes `viewport.segments` and `navigator.devicePosture`.
