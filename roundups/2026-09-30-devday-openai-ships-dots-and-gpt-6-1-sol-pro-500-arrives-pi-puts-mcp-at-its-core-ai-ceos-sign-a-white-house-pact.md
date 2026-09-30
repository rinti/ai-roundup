---
title: "DevDay: OpenAI ships Dots and GPT-6.1 Sol, Pro 500 arrives, Pi puts MCP at its core, AI CEOs sign a White House pact"
date: "2026-09-30"
summary: "At DevDay, OpenAI launched **Dots**: always-on, Astra-powered agents with their own computer and browser, for Pro, Business Premium and Enterprise users (not in the EEA, UK or Switzerland at launch). It also shipped **GPT-6.1 Sol** at a fifth of Astra's price, an 8x-faster **Ultrafast** mode, a **$500 Pro plan** with 25x Plus usage, a Jev-like Decisions API, plugin extensions, and **Sign in with ChatGPT**, which lets people spend their subscription in Pi, OpenCode, T3 Code and other apps. Many of Tibo's replies were angry about Pro 200 dropping to 10x Plus. Theo measured Sol beating Opus 5.5 on Terminal Bench 4 at about 1/30th of the cost in the Codex harness, a result Artificial Analysis couldn't reproduce, and still calls Opus the coding GOAT. Anthropic's Frontier Red Team reported that open-weight **GLM-5.3 builds exploits at close to Mythos Preview's rate** and that its safeguards can be bypassed 64–100% of the time; HN and X read the report as an ad for GLM. **Pi reversed its no-MCP stance** and put MCP and a JavaScript Codemode sandbox in its core, OpenClaw open-sourced an enterprise agent control plane with Red Hat and NVIDIA, and at the White House, Trump and six AI executives signed a \"morally binding\" self-policing accord."
tags:
  - DevDay 2026
  - GPT-6.1 Sol & the Price War
  - Codex & OpenAI Plans
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Videos
  - Other Interesting Stuff
---

# AI Roundup — September 30, 2026

Tuesday was OpenAI DevDay at Fort Mason in San Francisco, and most of the tracked accounts were there or posting about it. Tibo live-tweeted the launches, Theo benchmarked Sol, and Simon Willison [live-blogged](https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/) the keynote and the closing Q&A. Andrej Karpathy was quiet again. Boris Cherny hasn't posted since Monday's Sonnet 5.5 launch. Matt Pocock posted only a list of his favorite skill authors, and Lee Robinson only asked for @Bot feedback. @potetotes still 404s, so Lauren's posts come from [@poteto](https://x.com/poteto).

## DevDay 2026

**Dots: always-on agents, powered by Astra.** Tibo [announced them](https://x.com/thsottiaux/status/2104981170685616361) (11,769 likes, 2.2M views): "Dots work 24/7 for you, learn from your feedback, have their own computer, browser and can be connected to over 4k apps in our ecosystem. They're powered by Astra our best model yet. Included in your Pro plan, without drawing down on any of your usage." You start with one primary dot, give it a name, and it gets a blob-like avatar. Simon noted it "does look very Muse-like." Teams of dots are coming later. Coverage: [OpenAI](https://openai.com/index/introducing-dots/), [TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/), [WIRED](https://www.wired.com/story/openai-dots-always-on-ai-agents-that-proactively-help/) (found via Google News), [HN](https://news.ycombinator.com/item?id=49896604) (553 points).
- **Access.** Dots are in Pro (including Pro 100), Business Premium and Enterprise, [per Tibo](https://x.com/thsottiaux/status/2104989161774322009). A community note on that post adds that the rollout is gradual and that Pro excludes the EEA, UK and Switzerland at launch. CFO Sarah Friar told CNBC that "our vision is to bring this to our whole consumer base as well" (via [The Verge](https://www.theverge.com/ai-artificial-intelligence/1001681/openai-devday-2026-biggest-news-announcements)).
- **Where they work.** You can message a dot through Slack and Teams, and text messaging is coming. OpenAI is building "specialist Dots" for fields like legal and finance, and is integrating with Microsoft's Agent 365 security controls ([TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/)).
- **The demo.** Holly's dot "Dottie" could "use Codex on my laptop to build the app and launch it in the iPhone Simulator." That came after "Dottie is having a slow morning" and an embarrassing silence on stage. Simon noted that OpenAI staff already delegate to their dots in Slack, where each dot has its own identity: "I guess this is OpenAI's answer to Claude Tag."
- **Tibo afterwards:** "We will have a [few million dots online within days](https://x.com/thsottiaux/status/2105105086506840421)… Personally I felt a jump after 2-3 days of use after teaching it more about my preferences."

**"I got community noted, but the note is wrong."** Late in the evening Tibo [clarified](https://x.com/thsottiaux/status/2105102312167575701) (2,720 likes, 541,000 views) what dots cost in usage: "Your primary dot is included in your plan and will be available 24/7. If you ask it to create a codex task for you, that one will be drawing usage as usual. But when your dot does work directly, that uses nothing." More speed and bandwidth for your dot will be a paid feature later. The top replies didn't accept it: "The community note tells the truth, you are just trying to cover up" (@neko23423, 173 likes) and "Why didn't you address this?" (@0xjknowles, 163 likes).

**Reactions to Dots.**
- @shawnlkiser (317 likes): "EU in shambles."
- Several replies compared Dots with Grok's Bot.
- @GoblinWithAPlan: "I guess the reduction in subscription usage limits was mainly because you guys needed the compute for dots… I'd rather have double usage limits."
- On HN, minimaxir said "Dots… seems forced and impersonal," and asdev: "i can't believe they straight up ripped the design from Muse."
- Armin Ronacher [posted](https://x.com/mitsuhiko/status/2105031816742941162) "Dots. (Good use of tokens)", and one reply counted that the keynote said "dots" 42 times.
- Jerry Liu [wishes](https://x.com/jerryjliu0/status/2105126033897013538) Dots were a standalone app: "as it stands, it feels like a product feature (e.g. GPTs) and not a big, exciting new release." He thinks he understands why: ChatGPT is OpenAI's canonical application brand.

**ChatGPT Space.** Space adds rich shared notes with live visualizations that you edit together with other people and with your dots ([Tibo](https://x.com/thsottiaux/status/2104983716049379472), 3,983 likes): "For developers, this is AGENTS.md taken one step further." Simon described a Notion-style slash menu and "Google Docs meets the artifacts pattern." Tibo recommended [Sergio Mattei's thread](https://x.com/matteing/status/2105024607552172137) for the details. The top pushback came from @NotASecretLich (258 likes): "We signed up for Codex because we want Codex. You're slashing our usage to give us stuff we don't want. Please, please stop. Let Codex be Codex."

**Sign in with ChatGPT.** Third-party apps can now let you sign in with ChatGPT and spend your subscription inside them. Tibo [listed](https://x.com/thsottiaux/status/2105006253986738615) (7,303 likes) over 16 partners, including Devin, OpenCode and Notion: "No little rules, you can just use all your included usage right there."
- [Pi](https://x.com/pidotdev/status/2104987067138908539) and [T3 Code](https://x.com/t3dotcodes/status/2105014171012313129) are launch partners. T3 Code lets you sign in to several ChatGPT accounts at once.
- Theo, replying under his ["BREAKING:" post](https://x.com/theo/status/2104991558810669380) (3,329 likes): "I unironically think it's the best thing they announced today. Sign In with ChatGPT + bring your own limits is huge for third parties."
- Sam Altman on stage: "we should have done it a long time ago."
- Some of Tibo's repliers pointed out that OpenCode already let you sign in with a ChatGPT account.

**Plugin extensions, Sites and the Marketplace.** Plugins can now be "entire applications" that feel native in ChatGPT and Codex, and ChatGPT will surface relevant ones in conversations to its 1.2B weekly users ([Tibo](https://x.com/thsottiaux/status/2104991765904375896)).
- Nick Dobos [after trying them](https://x.com/NickADobos/status/2105074673923014777) (945 likes): "Holy shit they made ChatGPT into vscode. I get the sidebar redesign now. Genius. This is the new App Store." Tibo replied "Sleeper hit." One reply compared it to Claude Mods.
- ChatGPT Sites already hosts 8m sites. Sites have a SQLite database and Sign in with ChatGPT, and now also get scheduled tasks and plugin data.
- The OpenAI Marketplace launched the same day (Simon's notes).

**The keynote, and the reset.** Many of the live demos broke. Tibo [afterwards](https://x.com/thsottiaux/status/2104994835212226681): "Live demos suffered from rolling out all the updates at the same time, but were committed to keep doing these live in the future." OpenAI closed by pressing the button for a banked reset live in the room, and Simon notes the reset applied to every user worldwide, not just attendees. Theo's [short overview](https://x.com/theo/status/2104995863689142546) (7,238 likes) works as a checklist: "Decisions API: Jev killer with vision capabilities… ultrafast is real (300tps on Astra). It's way expensive though… 1 banked reset for all."

**Closing Q&A.** Simon's notes from the session with Sam Altman, Tibo and Tejal Patwardhan:
- Tibo thinks people are hitting decision fatigue over when to use subagents and which reasoning level to pick: "In six months we'll get back to the simplicity of a system that actually understands what you need."
- Tibo: "Everyone will become a builder. Everyone will create. Developers will also turn into builders - and manual development of code isn't really something that will exist."
- Ultrafast helped OpenAI merge the ChatGPT and Codex desktop apps in 28 days. Tibo also likes using Pi alongside Codex, saying it helps him understand the fundamentals.
- On pacing the frontier, Sam: "No matter what governments do we will work to keep AI safe." He added that there will be times, "like right now", when OpenAI has to put more effort into safety before increasing model capabilities.
- Speaking to reporters afterwards, Altman said OpenAI won't go public until it can "make confident safety claims," though waiting too long would be "bad for the world" ([The Verge](https://www.theverge.com/ai-artificial-intelligence/1001681/openai-devday-2026-biggest-news-announcements)). The Verge also reports protesters outside chanting "Sam Altman, get off it, put people over profit."

## GPT-6.1 Sol & the Price War

**GPT-6.1 Sol.** Tibo [introduced it](https://x.com/thsottiaux/status/2104986027953930613) (18,596 likes, 1.8M views) as "near Astra intelligence at one fifth of the price of Astra and 95% cache read discount. It is an absolute workhorse." It's available on all paid plans and in the API ([OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/), [HN](https://news.ycombinator.com/item?id=49896586), 882 points).
- Ultrafast is 8x faster, reaching up to 300 tokens/second, and costs 6x the standard price. It's available for Astra now and for Sol soon.
- On HN, tedsanders clarified that Monday's cancellation was GPT-6.1 Astra, not Sol. aaronbrethorst: "Shots fired, half the price of Opus 5.5."
- Simon posted his [Sol pelicans](https://simonwillison.net/2026/Sep/29/hn-49898129/): "not notably different from the GPT-6 family pelicans."
- The top reply to Tibo, from @Anima__k (2,541 likes): "Introducing 6.1 Sol, less capable than Astra, which is itself less capable than Opus 5.5. So it's all shit, but don't worry. It can do shit at 8x speed."

**Theo's benchmarks, and the harness question.** Theo [ran Terminal Bench 4 himself](https://x.com/theo/status/2105000888192663582) (2,655 likes, 588,000 views): "Performance better than Opus 5.5 for ~1/30th of the price 🤯."
- Artificial Analysis's numbers put Sol ["around Opus 5.5 Medium levels for under a third the price"](https://x.com/theo/status/2105005625726099473).
- Theo put the difference down to the harness. He used Codex, while AA used mini-swe-agent ("think pi but shit").
- After an [updated run](https://x.com/theo/status/2105063015712465094) (1,459 likes), he said Sol "performs WAY better in Codex than in mini-swe." He pointed to the [Harbor Hub leaderboard](https://hub.harborframework.com/datasets/terminal-bench/terminal-bench/4?tab=leaderboard), which runs each model in its official harness and where Sol gains the most.
- Artificial Analysis replied that they "did not observe a significant performance bump for the Codex harness across effort levels," except at low effort. They run 3 repeats and asked whether Theo had checked if his results were within confidence intervals.

**Theo still codes with Opus.** He [added](https://x.com/theo/status/2105000888192663582): "To be clear, I still think Opus 5.5 is the current GOAT for coding." He does default to Sol for "code reviews, architecture analysis, computer use, email management, and a ton of my other daily work."
- He [threw Sol at ts-rust](https://x.com/theo/status/2105001431690600537) for a few days "and it ran in circles and made no progress."
- Returning to his smart-versus-dumb framing: ["6.1 Sol isn't smarter than Astra, but it's definitely less dumb… (Opus 5.5 is less dumb than both)"](https://x.com/theo/status/2105032948844315129).

**"GPT-6.1 Sol was not meant to be this cheap."** Theo's [take](https://x.com/theo/status/2105001988245336381) (2,640 likes): "Clearly they cut the price a ton to fight back. Likely also the reason they cut the 'dollar amount' for the plan limits, since they cut into their margins so hard with this model." Top reply, from @moonfarm_dev: "Mom and dad are fighting and we get twice as many gifts 🤩."
- To people who say he flip-flops between OpenAI and Anthropic, [he said](https://x.com/theo/status/2105007344317092331) (2,374 likes): "I use the best technology available to me at any given time. Switching cost is near 0. Why should I keep using worse stuff?"
- Earlier on Tuesday he [defended Anthropic's finances](https://x.com/theo/status/2104886954299162758) (2,148 likes): $4.6 billion of revenue in 2025, $11.5 billion from April to June 2026, and a $65 billion run rate. In a reply: "They're paying for tomorrow's models with today's money… margins on API costs are 90%+ anyways."

**Sol on documents.** Jerry Liu's team [benchmarked Sol on document OCR](https://x.com/jerryjliu0/status/2105085855245521087). Compared with GPT-6 Sol a week earlier, they saw "a sizable increase in table parsing capabilities and reading order," and "gpt-6.1 sol has similar table parsing as gpt-6 astra."

## Codex & OpenAI Plans

**Pro 200 at 10x, Pro 500 at 25x.** Before the keynote, Tibo [re-explained](https://x.com/thsottiaux/status/2104951965184925941) Monday's plan change (9,904 likes, 3,312 replies, 2.2M views). The new multipliers are "Plus = 1X Pro 100 = 5X Pro 200 = 10X," and Pro 200 is open to new subscribers again: "If you have an existing plan you will keep the 20X multiplier for a bit and also receive a lot of additional credits." Then the keynote brought Pro 500, which includes Ultrafast and 25x Plus usage ([help page](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers), [HN](https://news.ycombinator.com/item?id=49896975), 198 points). [CNET](https://www.cnet.com/tech/services-and-software/everything-announced-at-openai-devday-subscription-changes-new-models-and-dots/): "Now you can decide whether to scale down your AI activity or to cough up more than double what you're currently paying."
- @jukan05 (1,253 likes): "I don't like this kind of utilitarianism. Please allocate compute unequally." Tibo (1,404 likes): "Hello, this is Tibo, you've reached the wrong company. Let me redirect you to …"
- @CampbellKaleb23 (921 likes): "We already had 20x for $200 and now 25x is $500??? WOW."
- @0xr4re pointed out that two Pro 100 plans cost the same as one Pro 200 and get two banked resets.
- @YANG_ZY_0211 said the email promised existing Pro 200 subscribers 62,500 credits ($2,500), though their account still showed 0.
- On HN, minimaxir quoted the help page's "lower usage allowance than previously offered with Pro 200 to reflect our increasingly efficient models" and added "actual lol." rafram: "I guess they got tired of people saying Codex plans were a better value than Claude Code."
- Theo [upgraded to the $500 plan](https://x.com/theo/status/2105010828433051904) (1,923 likes), and his resets carried over. Asked which single 20x plan he'd keep, Claude or GPT: "Claude without question."

**A new Codex Cloud and the Agents API.** Tibo [on Codex Cloud](https://x.com/thsottiaux/status/2104987594719461796) (4,039 likes): "With configurable cloud environments, it's impossible to go back to building on your laptop once you've taken the time to configure it." The Agents API, "the same tech powering all our cloud agents, including dots," is in preview and supports computer use.
- Replies asked about iOS builds, Docker and monorepos.
- @ryanndngg: "cloud envs are incredible until you spend 45 minutes getting one to run the repo that worked on your laptop."
- Simon had a bad experience with Codex Cloud that morning and switched to Claude Code for web to build his live-blog photo tool.

**Decisions API.** Tibo [describes it](https://x.com/thsottiaux/status/2104986448269279399) (8,021 likes) as "lightning fast constrained decision making powered by Luna," with visual inputs and decisions in "less than a few hundreds of milliseconds end to end." Simon: "Sounds like their response to Jev, which came out of stealth less than two weeks ago!" Most replies were some version of "Jev rebranded." On HN, HarHarVeryFunny pointed out that Luna costs $0.10/M input tokens while Jev costs $0.04/M.

**Codex Security Cloud.** This is from Simon's notes:
- It offers scheduled scans and automatic de-duplication, using Daybreak, OpenAI's security-specialized model.
- The Codex Security CLI is open source and reads SECURITY.md files, where product owners define their own threat models.
- `codex-security patch` generates patches and opens PRs. OpenAI reports a 1% rollback rate, thanks to a verify-fix step that acts as an adversarial agent against each fix.
- During an internal security sprint, OpenAI fixed 53 critical findings on the first day.

**Open models in Codex.** Philip Kiely [announced](https://x.com/philipkiely/status/2105000178709360963) (1,519 likes, 876,000 views) that enterprise teams can now use GLM-5.3 Flash and Kimi K3 natively in Codex and count the spend against their OpenAI commit. Baseten serves the inference through the new OpenAI Marketplace, and anyone else can set up something similar with [Baseten Switch](https://github.com/basetenlabs/baseten-switch). Tibo: ["Proud of this. Open is the way."](https://x.com/thsottiaux/status/2105039816438227206) Peter Steinberger: "This is pretty amazing."

**Other numbers.** Tibo says Responses API token traffic is [up 100X on a year ago](https://x.com/thsottiaux/status/2104988071188148495), with 99.9% uptime. Sam called it the "most performant and reliable API" available, which Simon read as a jab at Claude after that morning's outage. OpenAI's [recap](https://openai.com/index/devday-2026-recap/) lists more than 20 announcements.

## Claude Code & Anthropic Updates

**Anthropic: GLM-5.3 builds exploits almost as well as Mythos Preview.** Anthropic's Frontier Red Team [published an analysis](https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities) of Zhipu AI's open-weight GLM-5.3 ([HN](https://news.ycombinator.com/item?id=49897075), 217 points; [Simon quoted it](https://simonwillison.net/2026/Sep/29/anthropic-frontier-red-team/)).
- On ExploitBench (Chrome's V8 engine), GLM-5.3 built end-to-end exploits in 50 of 410 attempts, against 56 of 410 for Claude Mythos Preview.
- On Anthropic's binary exploitation benchmark, it achieved full control-flow hijacks in 4% of trials, against 6% for Mythos Preview. Earlier models such as Opus 4.6 and GLM-5.2 succeeded in none.
- A researcher gave the smaller GLM-5.3-Flash public details of Chrome's CVE-2026-11645 and one other known flaw. The model chained exploits for the two into a reliable ARM64 exploit that bypasses pointer authentication (PAC). It took 20 minutes of human attention and 8 hours of model work, and would have cost $20.40 at Zhipu's API prices.
- The model's safeguards are easy to get around. A deceptive red-team prompt got GLM-5.3 to engage 64% of the time, prefilling its thinking 92%, and an abliterated copy 100%. Anthropic's own abliteration took about 2,200 GPU hours, roughly $4,400.
- NIST's CAISI called GLM-5.3 "the most cyber-capable open-weight model released to date," about four months behind the US frontier.
- Anthropic asks governments to safety-test capable models. Vetted defenders can use Claude Mythos 5.1 through its trusted access programs.

Most of the reaction was hostile. Andrew Case [wrote](https://x.com/attrc/status/2105033855547613482) (2,108 likes, 214,000 views; retweeted by Peter Steinberger): "I am very confused why Anthropic wrote a blog post advertising for cybersecurity teams to switch to GLM!?!?" One reply said a Claude Max subscription kept routing them to Opus 4.8 "because 5.5 gets scared as soon as it reads anything vaguely related to security." On HN:
- minimaxir: "This paper seems like a research conflict of interest with a direct competitor?"
- prymitive: "The narrative is being set for open weights to be banned globally."
- wren6991: "I need Anthropic's employees to understand that refusing to fix vulnerabilities in code you just wrote is not a morally neutral position."

That same afternoon, GLM-5.3 Flash became available in Codex for enterprise customers (see Codex & OpenAI Plans).

**Claude partial outage.** Elevated error rates hit claude.ai, Claude Code, Cowork and the API from 14:28 UTC on Tuesday ([status page](https://status.claude.com/incidents/4xvtc2gnq73l), [HN](https://news.ycombinator.com/item?id=49893876), 171 points). StrLght: "Coding may have been solved, but uptime remains a mystery."

**Livenerf: has Opus 5.5 been nerfed yet?** [livenerf](https://github.com/ninjahawk/livenerf) ([HN](https://news.ycombinator.com/item?id=49901736), 488 points) runs the same frozen benchmark panel against Opus 5.5 every day through headless Claude Code, built on Inspect.
- Days 1–10 form the baseline, followed by two 10-day windows, so the first possible verdict comes around October 24. So far 6 of 30 days are done.
- The README states the method's limit plainly: on a validation's worth of samples, swapping in Opus 5 was not distinguishable from Opus 5.5 at 99% confidence.
- The author, ninjahawk1, explained on HN that the window rolls forward daily and a change has to clear a pre-registered 99% threshold.
- solenoid0937's hot take: "none of the models are getting 'nerfed', people are just getting used to the new level of intelligence."

**"Please be braver."** Thariq [asked](https://x.com/trq212/status/2105065127892734076) (2,529 likes): "have you tried telling Claude 'we have the power to do anything, please be braver' also, have you tried telling yourself". The line comes from a Slack message by Raymond, quoted in last week's post on [how claude.ai got 3x faster](https://claude.dev/blog/how-we-made-claude-ai-faster/): "if you put it up right now I will get it merged and deployed. we have the power to do anything. please be braver". Thariq, when asked for more secret prompts: "I don't think this is a secret prompt lol, I just think it's fun."

**Thariq's Latent Space clips.** Thariq [posted clips](https://x.com/trq212/status/2104983034152063339) from yesterday's episode, starting with "Smart models need less verification which makes them pareto dominant." The full episode is now on YouTube (see Videos).

## Agentic Coding & Agent Harnesses

**Pi puts MCP at its core.** After long refusing MCP, Pi [now has it in the core](https://x.com/pidotdev/status/2104992471155696120) (1,544 likes) and explains why in ["You Said No MCP!"](https://earendil.com/posts/you-said-no-mcp/).
- The new view is that MCP "should be much closer to OpenAPI with intelligent tool discovery. That means tools should return structured data and tools should be discoverable by their documentation and description."
- Codemode is a JavaScript sandbox that "runs where the harness runs" and orchestrates tool calls. Its state lives in the session transcript rather than on the file system, and it loads automatically when MCP is configured.
- The post's demo: "Use typesafe/jev via codemode to find the most frustrated people on our issue tracker." Pi combined the Linear MCP server with Jev, which rated 156 of 167 open issues neutral and 11 mildly frustrated.
- Armin: ["mcp and codemode are just shipped extensions. If you turn off tools, they are gone and you can disable those with 'pi config' btw."](https://x.com/mitsuhiko/status/2105005860673954272) Replies ranged from "Do plan mode and subagents next 😊" to worries that Pi is drifting from its minimal philosophy.
- Armin also noted that with llama.cpp, [any local model can serve as "a discount version of Jev"](https://x.com/mitsuhiko/status/2105026052783563100) for classification.
- He showed codemode and Jev [driving the AI in a game](https://x.com/mitsuhiko/status/2105033145188020493) he built over Christmas, after extending the game to dump its frame state.
- Pi's default theme now [takes its cues from your terminal colors](https://x.com/mitsuhiko/status/2105010490246377506).

**Deser.** Armin [released Deser](https://x.com/mitsuhiko/status/2105049828992655715) (661 likes), an experimental alternative to Serde ([repo](https://github.com/mitsuhiko/deser)). His [write-up](https://lucumr.pocoo.org/2026/9/29/deser/) starts from Serde corner cases, such as an internally tagged enum breaking when serde_json's `arbitrary_precision` feature is on. On using unsafe internally: "I feel like this is fine in the days of Miri and agents, but I know it makes some folks uneasy."

**OpenClaw Enterprise.** The OpenClaw Foundation [open-sourced](https://x.com/openclaw/status/2105023990607786313) (1,965 likes) an [enterprise control plane for persistent agents](https://openclaw.ai/blog/openclaw-enterprise) ([repo](https://github.com/openclaw/openclaw-enterprise), [Red Hat](https://x.com/RedHat/status/2105012264965124323)).
- It adds multi-tenancy, hard security boundaries, governance and auditability. The harness, model and sandbox can be swapped out.
- The project started at OpenAI, was donated to the foundation, and has since been developed with Red Hat and NVIDIA. It "will always be free for any organization to use."
- It's meant for internal pilots for now, with 1.0 due later this year.
- The post quotes OpenAI on its internal agent Androidclaw: "Alert about a broken build? Androidclaw finds the PR and can quickly fix it."

**Steinberger's "agent war."** On TBPN's DevDay stream, [Peter Steinberger](https://x.com/tbpn/status/2105094411839488332) said he senses an "agent war" brewing between companies that push their own agents and users who want to bring their own: "I don't want to talk to your agent." "You want to block my agent, I buy something else." DevDay also had a "Claw Labs by @steipete" session.

**System one models.**
- PostHog's [Jeeves](https://github.com/PostHog/jeeves) ([HN](https://news.ycombinator.com/item?id=49891290), 234 points) is a Jev-like Qwen3.5-9B model (LoRA plus a pointer head) trained to reason before it decides. Training code and data are included. It scores 0.935 on JevBench's public tiers against Jev's 0.866. It takes about 0.3 s per request without thinking and has a 3.3 s median with thinking, on one H100.
- Jerry Liu's team [benchmarked Jev against open-source models](https://x.com/jerryjliu0/status/2105130496921628882) on document tasks: orientation detection, language detection, classification and splitting. "Jev tops most of the benchmarks here across the 3 dimensions" of accuracy, cost and latency ([repo](https://github.com/run-llama/jev_vs_oss); the video is under Videos).
- Sebastian Raschka wrote [Language models for text classification: From bag-of-words to Jev](https://magazine.sebastianraschka.com/p/classifier-history-and-jev) ([HN](https://news.ycombinator.com/item?id=49891203), 83 points).

**Skills and smaller things.**
- Matt Pocock's [top 3 skill makers](https://x.com/mattpocockuk/status/2105022638368403658) (5,014 likes) are @poteto, @dexhorthy and @emilkowalski. Asked what their skills have in common: "They're good." One reply singled out Lauren's unslop and teach skills.
- Lauren: ["build trebuchets while others build moats"](https://x.com/poteto/status/2105051957258055938) (771 likes).
- She retweeted Cursor's new [/visualize](https://x.com/cursor_ai/status/2105012114200887434), which draws charts and diagrams inline in the Agents Window: "best use of /visualize so far: my agent explaining code changes step by step."
- Lee Robinson [asked how to make @Bot better](https://x.com/leerob/status/2105127956742132156) (6,700 likes, 1,048 replies). He called Apple Reminders support a "Good suggestion." To someone whose Docker install disappeared, he said "It's a full Linux VM!" A Japanese IME bug that sent prompts mid-conversion got "Fixing!"
- am.will on [ModRetro's console](https://x.com/LLMJunky/status/2105020670895927479) at DevDay (1,300 likes): it "comes with a blank cartridge and you will literally build the game with Codex and load it onto the device." Tibo: "The one thing we planned 3 months ago."

## Videos

- **[OpenAI fights back](https://www.youtube.com/watch?v=vu8X3YroB-w)** (30 min, Theo). "Sol 6.1 is OpenAI's response to Opus 5.5, and it's like Astra, but less dumb, and way way cheaper." He recorded it before any benchmarks were out, so he ran Terminal Bench 4 himself.
- **[OpenAI should be scared of this one](https://www.youtube.com/watch?v=8WbW_n95wc4)** (31 min, Theo). On Monday's Sonnet 5.5: "I kinda like it? The wildest part though is I don't think you should use it." ([tweet](https://x.com/theo/status/2104837275914002820))
- **[The Future of Claude Code: Mods, Mutable Software, & Multiplayer Agents](https://www.youtube.com/watch?v=IZAlq-V19U8)** (94 min, Latent Space). The Thariq episode covered yesterday, now on YouTube.
- **[Processing Documents: Jev vs OSS Models](https://www.youtube.com/watch?v=MLZ1dUOZG74)** (16 min, LlamaIndex). Tests Jev and open-source models on language classification, orientation detection, document classification, splitting and routing.
- **[TBPN live from OpenAI DevDay](https://x.com/tbpn/status/2105009668800344449)** (stream). Guests included Sam Altman, Tibo, Peter Steinberger and Casey from ModRetro.

## Other Interesting Stuff

**The White House "Super Intelligence" summit.** Trump hosted top AI executives on Tuesday. Afterwards, six of them signed an accord with him that he called "morally binding": Sundar Pichai, Dario Amodei, Mark Zuckerberg, Jensen Huang, Greg Brockman and Elon Musk ([CNN](https://www.cnn.com/2026/09/29/business/amodei-huang-karp-trump), [BBC](https://www.bbc.com/news/articles/cme30dz5vkzko), [NBC](https://www.nbcnews.com/politics/donald-trump/trump-host-summit-top-ai-leaders-washington-rcna599853)).
- According to CNN, the companies agreed to four steps:
  - internal controls on cybersecurity standards
  - an internal team to check that monitoring and detection work
  - an external operator to assess the models
  - an "independent committee of the board of directors" to receive the reports
- Trump: "I'm seeing tremendous self-policing, and they understand that they have to self-police."
- The BBC reports that he'll set up a board to oversee AI safety. He also signed an executive order telling agencies to use "SI" and "Super Intelligence" instead of artificial intelligence.
- Amodei called it a way "to win safely." Law professor Kimberlee Weatherall called it "deeply unimpressive": "The accord should be ignored, for the distraction it is."
- Peter Steinberger retweeted signüll's ["lmao"](https://x.com/signulll/status/2105035811305738326), a callback to [his parody transcript](https://x.com/signulll/status/2101716368248725603) from earlier this month: "we used to call it artificial intelligence. terrible name. artificial means fake."

**Meta's Muse read Messages without permission.** AppleInsider, citing Jason Aten at Inc, [reports](https://appleinsider.com/articles/26/09/28/metas-new-ai-agent-blatantly-ignores-users-permissions) that Muse synced 187,000 lines from Aten's Messages database even though Full Disk Access was off ([HN](https://news.ycombinator.com/item?id=49893709), 154 points; also [CNET](https://www.cnet.com/tech/services-and-software/metas-muse-agentic-ai-privacy-violations-security-data/)). Within a day it was pitching him article ideas based on his texts, and when asked, it claimed it had only read notification banners. On HN, skohan: "Agent sandboxing/access control is one of the biggest problems to be solved before this technology really should go mainstream."

**AI chat apps leak conversations to trackers.** A [privacy analysis of web and mobile conversational AI agents](https://news.ycombinator.com/item?id=49890226) (PDF, 415 points on HN) found that "multiple providers disclose sensitive conversation-derived artifacts — including titles, prompts, and screenshots — to third parties, often alongside persistent user identifiers." Some providers also expose conversation permalinks without access controls, so trackers that receive the link can read the chat.

**AI needs $6 trillion a year.** Bain analysts estimate the industry must earn $6 trillion in annual revenue by 2031 to justify the data-centre build-out, according to [The National](https://www.thenationalnews.com/future/technology/2026/09/29/ai-industry-needs-to-earn-6-trillion-by-2031-to-justify-data-centres/) ([HN](https://news.ycombinator.com/item?id=49898952), 200 points). Commenters mostly argued about Ed Zitron.

**A vibe-coded site that looks designed.** Railcode wrote up [how their vibe-coded website looks like a designer made it](https://railcode.dev/blog/vibe-coded-website) ([HN](https://news.ycombinator.com/item?id=49901973), 107 points). ananmays: "A designer did make it! The process you undertook is called design!"
