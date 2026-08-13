---
title: "Grok 4.6 Joins the Frontier, Codex Asks \"Why Did You Switch?\" & Sessions That DM Each Other"
date: "2026-08-13"
summary: "**Grok 4.6** ships and actually lands where the marketing says it does — 61 on the Artificial Analysis Intelligence Index, level with GPT-5.6 Sol, behind only Opus 5 and Fable 5, at unchanged $2/$6 pricing with double usage for a week. Meanwhile OpenAI's Tibo Sottiaux opened the most brutally useful feedback thread of the week (\"Why did you switch to Codex? Don't say reset\") and got **9,163 replies** that are ~40% \"PERFORMANCE\" in all caps, plus a 15M-user reset landing the same day. On the harness side: Claude Code sessions now have names and can DM each other (`claude --name backend`), DHH argues the only sane way to live with agents is full YOLO/bypass-permissions and Thariq counters with automode, OpenAI quietly starts blocking `<|channel|>analysis` in request bodies — killing Armin Ronacher's harmony-token prefill hack the day after the reasoning-trace paper — and swyx's $10k \"Kill My SaaS\" contest produces its first wave of finished, deployed, open-source CFP platforms, including one Gene Kim built in under 24 hours and one that burned a 45-hour Claude Code session and 183 subagents."
tags:
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI
  - Models & Benchmarks
  - Reasoning Traces & Model Boundaries
  - Kill My SaaS — The Submissions Land
  - Codebases, Context & Evals
  - Other Bits
---

# AI Roundup — August 13, 2026

## Agentic Coding & Agent Harnesses

### Your Claude Code sessions have names now, and they can DM each other

The most-shared agentic tip of the day, from Ado ([540 likes, 46.5k views](https://x.com/adocomplete/status/2087728817012162973), RT'd by Boris Cherny):

```
claude --name backend
claude --name frontend
> tell frontend the orders endpoint moved to /v2
```

"it's very effective." Claude-to-Claude only for now — [no, it won't talk to Codex or Grok](https://x.com/adocomplete/status/2087736770813473152) — and [not on Windows yet](https://x.com/slugsoftware/status/2087756092399091785).

The replies are where the actual operating advice is. The best one, from [Meet Anghan](https://x.com/AnghanMeet29/status/2087753510830178448): **"naming by ownership not by layer helped a lot here. `--name orders` beats `--name backend`, since backend eventually means everything and both start editing the same files. also tell each one what it doesn't own, or frontend will helpfully fix the api on the way past."**

And the failure mode you should expect, from [BullBear](https://x.com/bullbear_info/status/2087736017675866328): "I let my backend and frontend sessions chat and they spent 2 hours arguing about snake_case vs camelCase before I killed the process." Ado's reply — ["Were they making valid arguments?"](https://x.com/adocomplete/status/2087737017639780413) — is the correct question. One person [in auto-mode reports](https://x.com/GFaucheran99067/status/2087774888928874612) the two sessions started scope-creeping each other: "front asking more features to achieve its goal 🫣".

### DHH: full YOLO or nothing — and Thariq pushes back with automode

DHH landed [a PR on omarchy](https://github.com/basecamp/omarchy/pull/6729) that launches the default coding agent with permission prompts bypassed, and [framed it](https://x.com/dhh/status/2087433655891234971) (824 likes, 63.7k views): "I get why harness providers don't want the liability, but there's only one way to live with agents and that's full YOLO/BYPASS PERMISSIONS. Anything else is treating AGI like a toddler."

Anthropic's Thariq [replied with the counter-position](https://x.com/trq212/status/2087453197250269322) that automode isn't a weaker YOLO, it's a *better* one: "try automode in Claude Code! it's actually a lot better, as an example it makes the model better at following your hard instructions in the prompt — e.g. if I tell a model to not push, automode will make sure it never does. I've never had it make the model worse."

The thread splits along a clean line — where is the machine?

- ["full bypass is fine on a disposable VM; on a laptop every third-party skill gets the same access you do"](https://x.com/Fiducial_AI/status/2087469091925717457)
- ["Ideally you set it up with its own accounts so it can be properly constrained, then bypass its harness permissions."](https://x.com/o6x6rptrqmic/status/2087548563891142769)
- The sharpest reframe, from [Michael Hummel](https://x.com/hummelnyc/status/2087576563533468082): **"Full YOLO works when you own the machine and eat your own mistakes. In a company that's two different people. Senior engineers don't get standing delete rights on prod either, and nobody calls that toddler treatment."**
- And the vibe check, from [Ali Zein Yousuf](https://x.com/AliZYousuf/status/2087469781188292809): "I was recently called a coward for using auto mode instead of skip permissions."

### steipete: the interface era is over before you finished picking a terminal

Peter Steinberger, [quote-tweeting Nate Berkopec](https://x.com/steipete/status/2087568620465607078)'s "a lot of people have their identity as a developer tied up in having 6 terminal windows open… the 'we're gonna chat to this thing in Slack and Linear' people are directionally correct":

> "cli was a year ago. apps maybe 6 months. now it's services, web, cloud sessions."

Evidence for the thesis in Theo's corner of the world: [T3 Connect](https://x.com/theo/status/2086565444618797311) (`npx t3 connect`, an open-source tunnel layer that gives you remote control of Claude Code / Codex / OpenCode / Grok Build on any internet-connected box, free) is [getting](https://x.com/makeavish11/status/2087594794038264109) [passed](https://x.com/mehdi_khoudali/status/2087624875837940195) around as "the best remote control for coding agents I have used — 2 person team is outperforming big labs!"

### Theo on the new MCP: "I was never a big fan. That might change now."

[925 likes, 88.4k views](https://x.com/theo/status/2087280199406903762) for a video teardown with a cliffhanger: "The new version is genuinely really good, but it comes with a big catch..." The replies are mostly people asking what the catch is and MCP loyalists noting they've been fine this whole time. Worth watching if MCP is on your roadmap — the delta between "never liked it" and "might change now" is the interesting part.

Also from Theo, a data point for anyone doing mobile work: ["gpt-5.6-sol is so good at building iOS apps it's crazy. Give it a dedicated Mac with computer use and let it run the simulator. Quality you get out is nuts."](https://x.com/theo/status/2087277201213517860)

## Codex & OpenAI

### "Why did you switch to Codex? Don't say reset." — 9,163 replies later

Tibo Sottiaux ran the [most useful public feedback thread of the week](https://x.com/thsottiaux/status/2087438544323420273) — **9,163 replies, 1.15M views** — with the pre-emptive follow-up ["Also don't say Linux, we just shipped that"](https://x.com/thsottiaux/status/2087439859493617908). People said reset anyway. Repeatedly.

What actually came back, sorted by how many times it appeared:

**1. Desktop app performance, by a mile.** [Top reply](https://x.com/fahnx8/status/2087445022476025922) (961 likes): "The codex windows app is laggy, it consumes a lot of RAM (like a LOT)". [Second](https://x.com/Ceoz_1/status/2087447447245033902) (618 likes): "PERFORMANCE, PERFORMANCE OF THE DESKTOP APP… PUT ASTRA IN A LOOP AND TELL IT 'OPTIMIZE THE CODEX DESKTOP APP' AND LET IT RUN FOR 100H OR SOMETHING I BEG YOU". [0xSero](https://x.com/0xSero/status/2087452660978835722) makes the sharpest version of the argument: "Should be a culture of performance optimisation given this is a verifiable hill climbing task… If Discord were this slow nobody would depend on it."

**2. Why people left Claude Code.** Usage limits ("Fable 5 runs out way too quickly"), verbosity, and trust. [Jason Kam](https://x.com/MapleLeafCap/status/2087463308106551563): "codex can deliver what I want in faster time and doesn't run out as quickly even on Sol Max — I think Fable 5 still better at synthesis & summary of complex subjects." [amul.exe](https://x.com/amuldotexe/status/2087443207655395764) gets at the real one: **"Because you don't nerf models without telling — this means my workflow is reliable."**

**3. Computer use / browser use is the killer feature.** Named independently by [several](https://x.com/kurbaitaev/status/2087448047769067775) [repliers](https://x.com/defido/status/2087439122809958483), plus [andy's detailed list](https://x.com/1a1n1d1y/status/2087500890341339253): better vision and spatial understanding, "much less righteous in reasoning and response," "stays on task significantly better, less sprawl, less 'i know you asked for X but i did Y, i panicked'."

**4. The org-shaped asks.** UI annotations for editing ([Shaw](https://x.com/shawmakesmagic/status/2087446755541721419): "It's the only reason I don't use my own harness to code"), a unified alerts panel across sessions, and a summary of what an autonomous run actually did — see [Kol Tregaskes' 15-item list](https://x.com/koltregaskes/status/2087452159855972448), which reads like a product roadmap. Plus a governance complaint from [Perry Metzger](https://x.com/perrymetzger/status/2087532447814558162) worth surfacing: "There are lots of fixes *I would like to be able to contribute*, but which I cannot because you do not allow community contributions even though the code is open source."

Best non-answer, from [LLMJunky](https://x.com/LLMJunky/status/2087568234014720350): "i didn't switch to codex / i was born in it / from the days of old, i embraced its rough edges / no subagents. no plan. no hooks / just me. a command line. gpt o3."

### 15M users, and the reset everyone was told not to mention

Tibo had [promised a reset per additional 1M active users up to 10M](https://x.com/thsottiaux/status/2087423996115681767), then went quiet. Yesterday he confirmed they'd [crossed 15M](https://x.com/thsottiaux/status/2087706104814023111): "Enjoy a nice reset everyone. Landing in the next hour or so, go /fast." Theo, who watched the last one land on a Monday, [noted the obvious](https://x.com/theo/status/2087344254364618827): "Last reset might be hitting OpenAI's servers a bit too hard..."

Rounding out the Codex week (both from the last ~36h, so partial overlap with yesterday's dispatch): [ChatGPT + Codex desktop on Linux](https://x.com/thsottiaux/status/2087254026232775052) — "you can cancel that MacBook order if you got impatient" — and ["Import your world"](https://x.com/thsottiaux/status/2087252528513814773), which syncs projects, chats, skills and plugins in from other agents with an import history and opt-in auto-updates. Theo's take: ["Finally! Codex getting closer to feature parity with T3 Code 🫡"](https://x.com/theo/status/2087286816336667027)

## Models & Benchmarks

### Grok 4.6: frontier intelligence, unchanged price, double usage for a week

[SpaceXAI shipped Grok 4.6](https://x.com/SpaceXAI/status/2087562800982077492) — "a significant improvement over Grok 4.5 at the same price" — and Lee Robinson followed with [the pitch](https://x.com/leerob/status/2087568564823994637) ("smart, fast, and cheaper than comparable models! Plus there's double usage for the first week 🚀") and [the model card](https://x.com/leerob/status/2087640149442404584), which covers coding, engineering and knowledge-work evals plus pre-deployment safety testing and the safeguard stack.

Artificial Analysis' independent numbers, [which Lee posted](https://x.com/leerob/status/2087568842646303202), are the part worth keeping:

- **61 on the AA Intelligence Index** — level with GPT-5.6 Sol (max), behind Claude Opus 5 (63) and Claude Fable 5 (62), just ahead of Kimi K3. That's +5 over Grok 4.5 in barely a month, and +23 over Grok 4.3.
- **Agentic is the standout:** GDPval-AA v2 Elo of **1753**, behind only Opus 5, with overlapping confidence intervals with Fable 5 and Qwen3.8 Max. **50.7% on 𝜏³-Banking** (second only to Qwen3.8 Max at 51.3%) and **88.4% on Terminal-Bench v2.1**.
- **Pricing unchanged at $2/$6.**

Missing piece, flagged in the replies: [no math section in the card](https://x.com/ketansingh279/status/2087642555454534010). Lee's answer: ["Good note, we will include a section on math in the next release."](https://x.com/leerob/status/2087644814103965837) Bedrock availability is ["working on this"](https://x.com/leerob/status/2087669591409639826).

The efficiency framing from [ZenMagnets](https://x.com/ZenMagnets/status/2087612920301818100), RT'd by LLMJunky: "At the frontier, Grok 4.6 is the real standout here in terms of intelligence density. Sonnet Size, Sol level smarts."

Theo went [live on Grok 4.6 + DeepSeek 4.1](https://x.com/theo/status/2087661046744174961) if you want a hands-on read rather than a benchmark table.

### Is Grok Bot just Cursor's product team with a new logo?

Nice bit of OSINT from [kunchenguid](https://x.com/kunchenguid/status/2087319350307144187) (RT'd by steipete), on this week's [Grok Bot beta](https://x.com/bot/status/2087224798078517251) — "AI teammates that sign in to your tools, use them just like you do, and come back with finished work":

> "i'm 80% sure Grok Bot was originally built by the Cursor product team, and got rebranded after the acquisition. 1. the iOS app is published by **Anysphere**, not X Corp. 2. the mac app download URL is hosted under **cursor dot com** 3. it seems to run on cursor's vm infrastructure 4. it's cursor team members who are actively responding on X about the topic."

Verdict: "in either case, this is a solid release - good work!"

### Daybreak Blue writes its own firmware update to dump encryption keys

Filed under "capabilities are moving faster than the discourse": [LLMJunky relaying a hardware-security result](https://x.com/LLMJunky/status/2087789548499578991) with OpenAI's cyber model — "GPT Daybreak Blue cracked encrypted hardware by writing its own firmware update, and forcing the device to install it, dumping the encryption keys in the process. **No refusals.** 😳" The original report: "found a way to force the device to accept it which allowed it to dump out the encryption keys and other info off the device. INCREDIBLE." Best reply: ["Glad it's on the blue team......"](https://x.com/mattr7777777/status/2087791594434891838)

Also on the wire: **Qwen 3.8 27B** is [reportedly delayed to Friday](https://x.com/LLMJunky/status/2087586967940686075) — the one LLMJunky expects to "absolutely DOMINATE consumer devices."

## Reasoning Traces & Model Boundaries

Yesterday's stolen-reasoning-traces paper has an immediate, concrete sequel: **the labs are closing the token-level doors.**

Armin Ronacher went back to test [a hack he built earlier this year](https://x.com/mitsuhiko/status/2087526890194006370) — converting Kimi K3 sessions from Pi to explicitly annotate them in harmony tokens, tricking the model into emitting tool calls inside user messages. "Turns out OpenAI now blocks those requests." The block is [in the conversation history, not the system prompt](https://x.com/mitsuhiko/status/2087590890038603799), and [52b4a076 pinned the exact trigger](https://x.com/52b4a076/status/2087754221500117219):

> "The culprit in question is the string `<|channel|>analysis` being included anywhere, in any form. `Error: Codex error: Request blocked.`"

The best architectural comment on why this is a band-aid, from [Pierre-Henry](https://x.com/phenrysay/status/2087547848565067804): **"Blocking tool-call tokens in user messages closes one serialization path. The durable boundary is at dispatch: accept a call only when the server created the assistant turn and issued the invocation ID. Token syntax should never be authority."**

Which sets up Armin's open question from the same day, and it's the one to watch: [**"will closed SOTA model labs ban assistant prefill with newer models?"**](https://x.com/mitsuhiko/status/2087440065421021295) — clarified as ["putting entire assistant messages into the transcript that never came from (that) LLM"](https://x.com/mitsuhiko/status/2087444017864708197). If prefill goes, a lot of harness tricks go with it. The dread scenario, from [Roy](https://x.com/__roycohen/status/2087734425379356864): "My biggest internal worry is that they start creating 'stacked' models that are internally multiple models but you get no access to any part of the stack. If they start doing that shit, open source is our only hope."

## Kill My SaaS — The Submissions Land

swyx's [$10k contest](https://x.com/swyx/status/2087437017840046156) to clone the $40k/year enterprise SaaS his team was about to buy (it turned out to be conference CFP software) hit its deadline, and the submissions are not toys — they're deployed, open-source, domain-having products.

**Gene Kim's [CurtainCall CFP](https://x.com/RealGeneKim/status/2087774049145626928)** is the story of the batch. He's run ~24 conferences over 12 years and burned through 5+ CFP tools: "we've had to build so many workarounds — Basecamp, Trello, Google Sheets, Zapier — and I've written entire new apps to be the reviewer frontend." He entered on Saturday morning and shipped **in under 24 hours**:

> "This has been the craziest dev experience of my career — and when Swyx released his eval harness, the entire project became a hill-climbing exercise."

It's in production, running the CFP for the Enterprise AI Summit (Charlotte, Oct 7–8). swyx's review: ["positive review!"](https://x.com/swyx/status/2087778653140840540)

The rest of the arena:

- **[ProgramLoom](https://x.com/maddiedreese/status/2087780053170163849)** by Maddie Dreese — [open source](https://github.com/maddiedreese/ProgramLoom), CFP through published schedule, fully free.
- **[unsession.dev](https://x.com/cvolzer/status/2087751774572601483)** — full sandbox environment, Cloudflare-hosted and easy to self-host, "full MCP w/ DCR and API docs."
- **[stagestack.dev](https://x.com/Memphisbr/status/2087600071470731568)** — built over a Brazilian Father's Day weekend with real dev/staging/prod environments and working email: "I didn't want it to look like a POC or throwaway code."
- **[open-speaker-operations](https://x.com/ChaiWithJai/status/2087691025460367401)** by Jai Bhagat, with an interesting design premise: separate the "system of record" from the "system of actions" for a SaaS meant to be used by humans *and* agents alike.

And then there's the receipts post that will get quoted for months, [from ky\_\_zo](https://x.com/ky__zo/status/2087692278240604447), who just pointed agents at it:

> "▲ it maxed out Fable 5 + used most of Codex limits ▲ most of the work was done within a **45h session** running on Claude Code ▲ other sessions lasted for 17, 14 and 10 hours ▲ there were **183 sub agents** used ▲ without subs, tokens would cost **$4246**. Codebase scores 100% on all the benchmarks provided by @swyx… best part, I did spend maybe 1h total over the last 4 days steering the agents."

His own conclusion is the honest one, and the reason "software is dead" is too glib: **"on one hand, this was almost too easy… BUT i really doubt most of the companies would be willing to now take the responsibility for deploying and maintaining a software like this."**

## Codebases, Context & Evals

### Matt Pocock: if you know the shared language, you know the codebase

[1,652 likes, 66.8k views](https://x.com/mattpocockuk/status/2087508057932615740) for a thesis that lands squarely on how you should be writing for agents:

> "Getting more and more convinced that if you understand the 'shared language' of your codebase (i.e. the terms used, the names for things, relationships between them) AND those terms are used consistently in the codebase, then you understand the codebase. **Whether you read the actual code or not.** DDD has never been more powerful."

The follow-ups are the practical part. Should you rename core entities in code and DB when the business renames them? [Yes, definitely — "and even worth doing before AI"](https://x.com/mattpocockuk/status/2087523615574987261). Isn't consistency the hard part in legacy code? [It used to be harder: "renaming refactors are pretty simple with agents"](https://x.com/mattpocockuk/status/2087510345241727072). And a warning from a user whose `context.md` had rotted into unreadable jargon — Matt's answer: ["that sounds very unhealthy. You need to be an active participant when you're writing to context.md."](https://x.com/mattpocockuk/status/2087519726268285245) He's also [asking for feedback on the mattpocock/skills docs](https://x.com/mattpocockuk/status/2087230143492157650) ("feels a little low on conceptual explainers to me") at [aihero.dev/skills](https://www.aihero.dev/skills).

### ExtractBench: frontier VLMs collapse below 35% recall past 50 pages

LlamaIndex followed Tuesday's ExtractBench launch with a [36-page arXiv whitepaper](https://x.com/jerryjliu0/status/2087559475540459746) ([arXiv:2607.29677](https://arxiv.org/pdf/2607.29677), [extractbench.ai](https://extractbench.ai/)). The setup: 370 enterprise documents, 4,869 pages, 67 document types, 8 domains, 14 extraction systems, **zero LLM judges** — 100% deterministic and reproducible, scoring value accuracy, long-record completeness, spatial grounding and per-page cost.

The finding that matters if you're shipping doc pipelines: **"Short documents mask critical system flaws. On files past 50 pages, commercial VLMs collapse below 35% recall due to silent list truncation. They hold high precision, but lose output attention and drop most of the table rows."** Or as [the LlamaIndex account put it](https://x.com/llama_index/status/2087574976081617187): "The most dangerous document extraction failure isn't a wrong value. It's a missing row that looks like nothing is wrong."

Their own new Agentic Plus tier debuts at #1 (95.6% value accuracy at under a third the cost of the closest peer) — vendor benchmark caveats apply, but the harness and dataset are [on GitHub](https://github.com/run-llama/ExtractBench) and HuggingFace, so you can check.

### AI Engineer World's Fair: the Memory & Continual Learning track is up

The [full track went live](https://x.com/aiDotEngineer/status/2087640316212121737) with a thesis worth stealing: **"we scaled intelligence and got the world's smartest novice."** Talks include Beyond Static Intelligence (UC Berkeley), Memory Harnesses for Long-Running Research Agents (Sakana.ai), Scaling Compute on Context (Engram), gradient-free continual learning (Adaption Labs), and Improving Agents is a Data Mining Problem (LangChain). Two standouts pushed by swyx:

- **[Shlok's "Lessons from Studying Every Memory System"](https://x.com/shloked/status/2087751526429430122)** — a year of studying memory systems: the evolution and architectural convergence of ChatGPT and Claude memory, why memory *cannot* be outsourced, how memory is a function of compute.
- **[Yu Su's "Intelligence + Continual Learning = Expertise"](https://youtu.be/I6aiEf3aEFQ)**.
- Bonus take from [LangChain's Vtrivedy](https://x.com/Vtrivedy10/status/2087622367136583730): "Every Continual Learning company will be an Observability & Eval company."

## Other Bits

- **Lovable raised $400M at a $13.3B valuation.** [Anton Osika's post](https://x.com/antonosika/status/2087479638939652601): apps built on Lovable now get **900M visits/month**, ARR quadrupled in 12 months.
- **Tailscale spent months hunting a rare SQLite corruption bug**, found it with SQLite's core developers, and uncovered a second one on the way. [Great writeup on the WAL reset race condition](https://tailscale.com/blog/sqlite-wal-reset-bug/) — RT'd by steipete.
- **"Compression is prediction"** — [Armin recommends this ngrok post](https://x.com/mitsuhiko/status/2087523924351369599) for doing "an excellent job at explaining something that is not new and known, but in a super digestible way." [Read it here](https://ngrok.com/blog/compression-is-prediction).
- **MiniJinja 3 alpha** is out — [serde is now optional and behavior aligns closer to Python's Jinja 2](https://x.com/mitsuhiko/status/2087599969410687009). Feedback wanted on the issue tracker.
- **HTTP has a new method** and you may have missed it: [QUERY (RFC 10008)](https://x.com/ipwanciu/status/2087226776523092390) — a GET with a body, safe/idempotent/cacheable, already working in Node.js, Go and Laravel, browsers still catching up.
- **A math result got announced as a wall of `+` and `-` signs.** Armin's [bewildered but game reaction](https://x.com/mitsuhiko/status/2087647496696725993): "I wanted to say this is vagemathing but apparently it's just how breakthroughs in math are shared these days" — it's a [Hadamard Matrix of Order 668](https://epoch.ai/frontiermath/open-problems/hadamard), from Epoch AI's FrontierMath open-problems set.
- **The AI harm story of the day is agricultural, not digital:** a farmer [killed nearly 25 acres of his own crop](https://x.com/theo/status/2087625841069248968) after an AI app recommended a chemical that destroyed the weeds *and* the plants. Theo: "Okay fine, AI definitely wasted a bunch of water here."
- **Pangram can identify which model family wrote a piece of text** — and [is using that to chart shifting market share in the AI race](https://x.com/elyasbuilds/status/2087202317128909092). Interesting adjacency to this week's Claude text-watermarking news.
- **Matt Pocock's one-liner of the week:** ["My IDE is Discord"](https://x.com/mattpocockuk/status/2087555290174566491). See also steipete's RT: ["we solved agi but github was down so we couldn't merge it sorry"](https://x.com/ptr/status/2087683878773572006).

---

*Sources: RSS + thread scans of @mattpocockuk, @theo, @trq212, @LLMJunky, @mitsuhiko, @bcherny, @steipete, @swyx, @simonw, @karpathy, @jerryjliu0, @potetotes, @leerob, @thsottiaux. @simonw and @karpathy had nothing new in the window; @potetotes' feed returned no items again.*
