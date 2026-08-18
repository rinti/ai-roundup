---
title: "Claude Code Learns to Design, Cursor Hosts Your Code & Everyone Wants to Replace Git"
date: "2026-08-18"
summary: "Anthropic shipped **`/design` as a research preview in Claude Code** — artboards from Claude Design, now in the CLI and Desktop, with the picked design carrying into the implementation step (Nate Parrott's launch did 341k views; Rasmus Andersson's reply — \"would be neat if this just opened Figma\" — is the sharpest critique, since designs made inside the harness are locked up there). The same night the CLI got **2x less CPU at p99** by teaching Bun's garbage collector to wait until the process is idle instead of firing on a timer mid-turn. **Cursor's Origin code hosting went live** to 19.2M views — during a GitHub outage, which Armin Ronacher refused to be impressed by (\"given how often GitHub is down these days I don't find the timing to be too impressive\") — and Zed answered Theo's \"git is not the right primitive\" thesis with **DeltaDB**, source control where every edit is an ordered delta stored *together with the conversation that produced it*. Theo posted \"I'm tired of terminals\" and Matt Pocock called \"one dev, many terminals\" an **awkward interregnum**, quoting Jared Palmer, who hasn't set up local dev since joining Cognition. Tibo Sottiaux opened the floor — *what obvious thing should we do with Codex that we haven't?* — and got 4,728 replies, the best of which want models that run **unsupervised**, a \"slow mode\" (cheap, overnight, don't care if it takes an hour), and no model picker at all. Plus lauren's ladder for eliminating agent corrections (\"your codebase is a form of memory too\"), Matt's AI Coding Crash Course launch with an Uncle Bob interview on deck, and swyx's Kill My SaaS hackathon closing at 69 finished submissions."
tags:
  - Claude Code & Anthropic Updates
  - Source Control & Code Hosting
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI
  - Skills, Standards & the Human Loop
  - Models, Local Inference & Creative Work
  - Other Bits
---

# AI Roundup — August 18, 2026

## Claude Code & Anthropic Updates

### `/design` lands in Claude Code as a research preview

Nate Parrott [announced it](https://x.com/nateparrott/status/2089470636796059754) (2,096 likes, 75 replies, **341.1k views**):

> "Today we're releasing an early preview of the /design command in Claude Code! from CC Desktop or CLI, try something like '/design a few options for {feature}' before you build — pick your fave artboard, edit it and implement."

The [ClaudeDevs framing](https://x.com/ClaudeDevs/status/2089471692762673408) is that this brings Claude Design's artboard workflow into the CLI, built on artifacts. Boris Cherny [passed it along](https://x.com/bcherny/status/2089537919795212565) with a plain "Let us know what you think!", and trq212 was [blunter about it](https://x.com/trq212/status/2089529798850969805): "go into CC and type /design <something you want to design> — do it rn".

The useful detail is in the replies. Asked whether the artboard survives into the build step or you end up re-describing the layout in a prompt, Parrott [confirmed](https://x.com/nateparrott/status/2089500780445216990):

> "carries over! (Remember to press Save for now; we'll get rid of the need to press it soon). Ofc it's up to the model to adhere to the design but they're getting better and better at this"

The best critique came from Rasmus Andersson ([47 likes](https://x.com/rsms/status/2089493694932304197)):

> "Would be neat if this just opened Figma! I feel like any design made here would be locked up inside there, with a limited life and thus limited usefulness."

It's a research preview and it shows — multiple people report `/design` still printing `Usage: /design consent | /design revoke` after updating, and artboards [rendering weirdly in the CLI](https://x.com/SagarSiwach14/status/2089565759232217320). Also unanswered so far: whether it works on CC web, and what the recommended flow is when you're designing a new screen *inside* an existing large project rather than [starting from zero](https://x.com/_arnold_moya_/status/2089539092027437516).

### The boring perf fix that moved p99

[ClaudeDevs](https://x.com/ClaudeDevs/status/2089509659090780193) (3,872 likes, 151 replies, **270.1k views**):

> "Perf win of the day: Claude Code CLI now uses 2x less CPU at p99. Bun's garbage collector was running on a fixed timer, so it would kick in mid-turn and steal CPU right when Claude Code was busiest. Now it waits until the process is idle."

Ziang Gao [drew the generalizable lesson](https://x.com/ZetsubosenseiG/status/2089568238275318036) for anyone building a harness: "run GC when it is least disruptive, such as while the process is idle or waiting for the model response, rather than simply every N seconds." Boris Cherny [added](https://x.com/bcherny/status/2089538781909332210): "Small quality of life improvements like this add up. More on the way."

The reply section, meanwhile, was almost entirely people asking for a usage-limit reset so they could test the fix — plus [a request](https://x.com/shawnthetechie/status/2089518344172953722) to drop the 50% Fable 5 cap for Max subscribers ("I think people are exhausted").

## Source Control & Code Hosting

### Cursor's Origin is live — during a GitHub outage

[Cursor](https://x.com/cursor_ai/status/2089399057659596847) (20,570 likes, 1,285 replies, **19.2M views**):

> "Origin, our code hosting platform, is now live. It's fast, easy to use, and deeply integrated with Cursor. Get started by syncing your repos from GitHub."

swyx's entire commentary was ["is live!"](https://x.com/swyx/status/2089467492163010836). Armin Ronacher was less easily impressed ([post](https://x.com/mitsuhiko/status/2089420729997513167)):

> "People are saying Cursor has great timing to launch Origin but given how often GitHub is down these days I don't find the timing to be too impressive :P"

He spent the day mining the outage for material — ["Didn't we all ask for a bit of friction and back pressure? GitHub is providing it!"](https://x.com/mitsuhiko/status/2089372027056476295) — and used the moment to [point at his tangled account](https://x.com/mitsuhiko/status/2089374335387463907) (`tangled.org/mitsuhiko.at`).

The replies are the real signal on whether Origin lands: it's asking for payment before you can move repos over, which people compare unfavorably to GitHub being free ([1](https://x.com/AsherWeisberger/status/2089406810469851513), [2](https://x.com/rikkarth/status/2089443615747481635)); $200 Ultra subscribers [report not having access](https://x.com/adolandev/status/2089418857580482633); and the recurring question is simply whether Cursor integration is enough to move anyone ([Kien Pham](https://x.com/kienbuilds/status/2089400333781131325): "We have GitHub, then GitLab...and now Origin"). Several people concede the outage helps: ["After what happened with GitHub today, I suspect more people will give this a shot"](https://x.com/likelyck/status/2089465823081451932).

### Zed's DeltaDB: source control where the conversation is part of the commit

Theo has been arguing that "GitHub is dying and git is not the right primitive," and explicitly asked someone else to go fix source control while he fixes clouds for agents. Zed [took the invitation](https://x.com/zeddotdev/status/2089418150831869981) (1,146 likes, 126 replies, **183.3k views**):

> "We've got you @theo. (you're invited). We spent our psychosis building Delta on a different primitive: every edit recorded as an ordered delta, together with the conversation that produced it."

Early access at [zed.dev/deltadb](https://zed.dev/deltadb). Theo's response was [three eyeball emoji](https://x.com/theo/status/2089439166295838739) (129 likes) and, separately, ["This is a really good tweet"](https://x.com/theo/status/2089531402945745012). The thread itself is mostly Zed staff hand-issuing invites in the replies, so there's no design detail beyond the one-liner yet — but "the diff and the prompt that produced it are the same object" is the most concrete answer anyone has given to the post-git question, and it's a natural fit for a world where most edits are made by an agent.

## Agentic Coding & Agent Harnesses

### "I'm tired of terminals"

Theo posted [a video](https://x.com/theo/status/2089487653741949073) under exactly that title (505 likes, 62 replies, 40.3k views) — the pitch being T3 Code, his open-source browser-based harness, over TUIs. He's been leaning hard on the remote-first angle all day: [T3 Code on a bad network](https://x.com/theo/status/2089546517199941911) is "legit trippy... You forget the connection is terrible until you alt-tab back to your browser and everything is slow again," prompted by someone reporting it working fine on [Delta's non-Starlink wifi](https://x.com/just_some_dev/status/2089535513216581969).

He also [conceded the field to Codex](https://x.com/theo/status/2089475101658099795) on remote — "Codex is far ahead of the other labs with their remote stuff" — while arguing T3 Code goes further on project creation, multi-PC management and remote configuration. That was in response to Federico Viticci's notable claim ([quoted in Theo's post](https://x.com/theo/status/2089475101658099795)) that Codex Remote for iOS is the only remote-control product with a full *start-from-iOS* flow (Claude and Cursor make you start from a Mac), near-desktop parity, and a voice mode that can dispatch to individual threads, load desktop context and plugins, and reopen threads on screen. Corey Quinn, no horse in the race, [called T3 Code "freaking transformational"](https://x.com/QuinnyPig/status/2089581739887014376).

The replies push back usefully. [Dima](https://x.com/dimavollo/status/2089488117476495870): "what's the alternative you actually want, not another wrapper that reopens a terminal underneath". [Josh McK](https://x.com/joshuamck/status/2089517399867543627) thinks the missing piece is "a more semantic terminal protocol that avoids making cells the unit of interaction, rather than trying to bake apps on top of the 50 years of spec tower of babel." And [Madeline Fox](https://x.com/maddofox/status/2089491717305303086) gave the most honest version of the argument:

> "Moving away from living in the terminal has honestly been one of the bigger mindset shifts I've had to make with agentic coding... my reliance on my terminal was increasingly making me the bottleneck. I still use it and use it most days, but far less."

[Daniil](https://x.com/hey_daniil/status/2089571449254396154) sketched the likely end state: a split between hands-on steering work (cognitively heavy, burns you out if it's all you do) and fully offloaded background work you check via task trackers and PR review, time-boxed instead of context-switched.

### "One dev, many terminals" as an awkward interregnum

Matt Pocock [quoted](https://x.com/mattpocockuk/status/2089592149385822686) Jared Palmer — who hasn't set up his laptop for local development since joining Cognition and works with Devin in Slack and the webapp instead — with:

> "It me. We'll look back on 'one dev, many terminals' as an awkward interregnum"

Best exchange in the thread: told this only works "until your provider silently reroutes you to a weaker model," Matt [replied](https://x.com/mattpocockuk/status/2089596460358566354) "What if your provider is you". One reply [pushed back on the whole ADE-wrapper category](https://x.com/yiin1/status/2089598770916765845) — forking a webapp harness like T3 Code and molding it to your needs beats adopting Herdr, since "there doesn't seem to be anything I can do on herdr that I can't on webapp" — and [another](https://x.com/ssharptake/status/2089608568106287144) thought "awkward interregnum" was generous: "more like the dev setup dark ages."

Meanwhile Gergely Orosz [summarized the era](https://x.com/GergelyOrosz/status/2089453926990983571) in one line: "If you've not built your own AI coding harness by now, are you even a serious tech company?"

### Podcast: State of Agentic Coding #9

Armin Ronacher and Ben Vinegar are [back for episode 9](https://x.com/bentlegen/status/2089346117179773187): how agents are getting more autonomous, "the subsidies will continue until morale improves," Herdr and VC-funded terminal apps, and vibe coding from your car.

## Codex & OpenAI

### Tibo asks what OpenAI is obviously missing — 4,728 replies later

[Tibo Sottiaux](https://x.com/thsottiaux/status/2089500941842342287) (3,731 likes, **4,728 replies**, 510.7k views):

> "What is an obvious thing that we should do with Codex, API or our models that we should just do but haven't yet? What is 100% within reach, but we just seem to be missing?"

Filtering out the reset-my-limit jokes (there are thousands), the substantive asks cluster into a few themes:

- **Unsupervised reliability above everything.** [ephe explorer](https://x.com/epheexplorer/status/2089565705805189537): "please make sure that all models that are released are good at running unsupervised. every time i need to steer or check if the model is doing okay, or not doing needless things is time wasted."
- **A "slow mode."** [zsilver92](https://x.com/zsilver92/status/2089525152010645583) (487 likes): the inverse of fast mode — fire a prompt off before bed, don't care whether it takes a minute or an hour, and charge a *fraction* of normal usage the way fast mode charges 1.5x. Easily the best new product idea in the thread.
- **Kill the pickers.** [Colin Devroe](https://x.com/cdevroex/status/2089508275179987329) (271 likes): "I should never have to pick a mode or a model. ChatGPT/Codex should just know what I am trying to do and choose everything for me to be as efficient as possible." (Compare Grok Bot's no-model-picker stance from [yesterday](https://x.com/leerob/status/2089169319099777364).)
- **Worktrees from `origin`, not stale local main.** [Dafydd](https://x.com/dafzthomas/status/2089605393055924460): new-worktree-from-main usually branches off an outdated local copy.
- **Tell me what the update button updated.** [1kuaikuaide](https://x.com/1kuaikuaide/status/2089505780336898303) (85 likes): "After I click that blue update button, let us know what has been updated. Most obvious one."
- **Remote is painful.** [Chris Laupama](https://x.com/chrislaupama/status/2089502005551374479) (241 likes) describes the app's remote system as a mission to reach, slow to connect, and constantly disconnecting — worth reading against Viticci's glowing iOS review above. The [ChatGPT desktop app stuttering on high-end hardware](https://x.com/congitive_/status/2089501774881378470) (716 likes) got the second-most traction of any reply.

Tibo also [posted a scorecard](https://x.com/thsottiaux/status/2089149255382438340) for Codex — "Almost 100% reliable / Occasional resets / Open-source / (will have Astra)" — which Theo amplified.

### Video: agents beyond code authoring

Databricks [published a conversation](https://x.com/databricks/status/2089365270691234301) with OpenAI's Peter Steinberger and Tibo Sottiaux, hosted by Databricks co-founder Patrick Wendell, on what happens as agents move past writing code into observability, operational work, and long-running responsibilities across software and data systems. Databricks' pull quote: "With coding agents, you're putting this jetpack on and going 10,000 miles an hour, doing things you were never able to do before." [Full webinar](https://www.databricks.com/resources/webinar/agents-work-shipping-agentic-apps-scale).

## Skills, Standards & the Human Loop

### The ladder for eliminating agent corrections

lauren (React Compiler core contributor, now at Cursor) [posted the most reusable thing of the last two days](https://x.com/poteto/status/2089067865098113024) (751 likes, 49 replies, 36.4k views):

> "every time you intervene and correct your agent, you should think about how to eliminate it entirely. in order of value:
> 1. categorically eliminate the problem through better architecture or choice of data structures
> 2. turn it into a lint rule or test so CI catches it
> 3. turn it into a skill or rule
> 4. have humans review the code to catch it (ngmi)"

Note the ordering: skills and rules are *third*, below architecture and CI. Asked whether a memory layer with similarity recall would help instead, lauren's [answer](https://x.com/poteto/status/2089166694719922483) was the line of the day:

> "your codebase is a form of memory too"

Theo pulled out [a related quote](https://x.com/theo/status/2089439000050442689) from her: Cursor's internal framework "actually bans useEffect outright and only exposes it indirectly through framework-provided hooks. Highly recommend setting something like that up for yourself!" — level 1 of the ladder, applied to React. Same thread also confirms Cursor has largely completed its **Solid → React migration**, converted all its scss and Tailwind to StyleX, and that the new agents window is 99% React; the motivation was perf and maintainability, since "it is actually quite easy to create perf footguns for yourself in signal based approaches when reactivity causes a large amount of accidental fan out in large and complex apps."

### Matt Pocock's course, and Uncle Bob on fundamentals

Matt [launched](https://x.com/mattpocockuk/status/2089408899858256121) his AI Coding Crash Course ($199 this week) with a framing that's more diagnostic than salesy — can you get it to build the thing you wanted, stop it making the same mistakes every time, schedule huge chunks of work, "or are you hanging on by your fingernails?" [Contents](https://x.com/mattpocockuk/status/2089408906090991947): the smart zone/dumb zone, compaction vs clearing vs handoff, steering with AGENTS.md and skills, and building specs and tickets to tackle huge projects. [Link](https://www.aihero.dev/s/YkXWCF). An early student [reported](https://x.com/xAleAguilar/status/2089516881170276461) cutting starting context 40% to 16k tokens off the fundamentals section alone.

The companion argument: ["If your code sucks, your agent will too. So, software fundamentals matter more than ever."](https://x.com/mattpocockuk/status/2089336734530109837) — which is why he's [interviewing Robert C. Martin live on YouTube this Wednesday](https://www.youtube.com/watch?v=zcLPGC-tvgk).

He also added a `/handoff` command to Sandman [for spawning new Discord threads](https://x.com/mattpocockuk/status/2089291938868457688).

Adjacent, from Armin Ronacher, on why conventions calcify: ["People come up with elaborate explanations of why things are like they are, but then they are just because of some weird decision"](https://x.com/mitsuhiko/status/2089355671900709099) — his example is the C habit of cargo-culting common prefixes on struct fields, which only exists because those fields used to be globals. Worth keeping in mind before you write it into a standards file.

## Models, Local Inference & Creative Work

### Qwen 3.8 27B, day two

Simon Willison's [review](https://x.com/simonw/status/2089112517796827439) is still the best writeup ("I can't remember the last time I've had this much fun playing with a local model that runs on my own computers"), and he added a nice coda: he pointed Pi at Qwen 3.8 27B and [had it build a script to convert its own `.jsonl` transcripts to Markdown](https://x.com/simonw/status/2089120083499245921) — then used that tool to share the transcript of it being built.

LLMJunky added [the hardware angle](https://x.com/LLMJunky/status/2089432140672856169):

> "the fact that a 27B model finds itself squarely between Opus 4.6 and Opus 4.7 Max Reasoning on Artificial Analysis is insane... On a single 5090 or RTX 6000 Pro, you can get around 200 TPS... As these models improve, consumer hardware will become increasingly difficult to buy. There's not going to be a cheaper time to get hardware than right now."

His practical tip matches Simon's overthinking complaint: use Medium reasoning, for everything.

### Coding models are eating diffusion's creative lunch

trq212 [updated his priors](https://x.com/trq212/status/2089415712007938315):

> "all of the recent proc gen art, video editing and 3d game demos recently have made me update towards LLM coding models being better at a lot of creative work than diffusion models"

His [reason](https://x.com/trq212/status/2089415713098522688) is the one that matters for tooling: "the nice thing about code is that it is easier to edit and nudge in the directions you want and export to work with existing tools." A live example the same day — LLMJunky is [building an agent-integrated video tool](https://x.com/LLMJunky/status/2089479686380466559) (mockups, custom backgrounds, text, audio, 3D models, transitions, multi-clip) precisely because you can tweak the agent's output in a UI instead of accepting the slop: "GPT 5.6 Sol made me this video in seconds."

## Other Bits

- **Kill My SaaS closed at 69 submissions.** swyx's $10,000 solo-organized hackathon wrapped; there's now a [visual field-notes index](https://kill-my-saas-field-notes.swyx.chatgpt.site/) of all 69 competitor-built conference products with their AI tools, tech and build economics. [Conor Bronsdon's verdict](https://x.com/ConorBronsdon/status/2089520281316626654): "Confirmed: you can vibe code your way to replacing a SaaS" — his entry, an open-source speaker/CFP manager, is at [callboardhq.com](https://callboardhq.com/) ([repo](https://github.com/conorbronsdon/callboard-app)).
- **Two AI Engineer videos worth the time.** Ronak Malde of Trajectory on [scaling continual learning](https://www.youtube.com/watch?v=zL1kLftVTlo) — why GRPO isn't enough, why they had to go on-policy, and the mess that follows when you do; swyx [rates their taste highly](https://x.com/swyx/status/2089393073327653344). And a [context engineering workshop](https://www.youtube.com/watch?v=WP3hjUXd918) on compaction, memory and cost, built around an open-source AI tutor: the two root problems (finite window, stateless model) and the full compaction toolkit — truncation, trimming, tool-result clearing, summarization, offloading to files — with when each actually helps.
- **"Ideas are the new bottleneck."** A [summary](https://x.com/gokulr/status/2089034609191456802) of Latent Space's interview with OpenAI's Akshay Nathan (productivity pillar — ChatGPT Work and Codex): once anyone can build, the scarce inputs are ideas and taste, and the old proxies for productivity stop telling you anything. The warning for managers is that AI makes *activity* nearly free while progress still costs the same discipline — "the motion trap."
- **YouTube is changing what counts as a view** (from 8/24, the moment playback begins, no minimum watch time). Theo [doesn't like it](https://x.com/theo/status/2089441199862198521) — "YouTube view counts are the only view counts that mean anything" — but [gets why](https://x.com/theo/status/2089441684094644394): he lost a brand deal to someone half his price "getting 70,000 views" on X, where a view counts as an API response with your post ID.
- **Slop of the day.** LLMJunky: ["30 agents and 22,000 lines of slop — all i asked was to center a div"](https://x.com/LLMJunky/status/2089593523506921676). Adjacent, from Jarrod Watts: ["POV: You try Codex Ultra mode (143 agents have spawned and only written tests so far)"](https://x.com/jarrodwatts/status/2089437607767822558).
- **Framework authors got AI-pilled early.** trq212 [noticed](https://x.com/trq212/status/2089085004966207679) that the creators of Django (Simon Willison), Flask (Armin Ronacher) and Rails (DHH) were all early adopters — "it says a lot."

---

*Notes on sourcing: nitter.net intermittently returned "user not found" HTML for several accounts and needed retries; xcancel.com now requires RSS-reader whitelisting and is no longer usable as a fallback. Karpathy had no posts in the window.*
