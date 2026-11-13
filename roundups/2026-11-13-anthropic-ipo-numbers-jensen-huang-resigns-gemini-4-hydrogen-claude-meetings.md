---
title: "Anthropic's IPO Numbers, Jensen Huang Resigns, Gemini 4 Hydrogen & Claude Meetings"
date: "2026-11-13"
summary: "Anthropic put its IPO site live with **$17.0B in Q3 revenue** (up more than 12x), a $23.3B net loss that is mostly a non-cash charge, a Nasdaq listing as ANT expected November 19, and a roadshow claim that Mythos ported Claude to AMD chips in three days. The same morning **Jensen Huang resigned from Nvidia** effective immediately, and the timeline spent the day calling it a coup while employees petitioned for a return. Google shipped **Gemini 4 Hydrogen** at $1.50/$7.50 with a new Antigravity **Orchestrator** that swaps between Hydrogen and Carbon mid-task. Simon Willison notes the cheap model is only 25% cheaper than its big siblings, and Theo calls its speed garbage. Anthropic also launched **Claude Meetings** in beta and a private beta of **self-hosted Claude Managed Agents**, while OpenAI published how it runs 500+ persistent OpenClaw agents internally and Tibo asked how Codex could improve without anyone saying *model*. Also inside: will depue's GPU-fingerprint forensics on six Chinese models, ADEMark v1 benchmarking 15 agent desktop apps, Theo's all-nighter on T3 Code latency, OpenCode in Rust, Matt Pocock's Home Repo write-up, the AI Engineer Code Summit closing with Thariq writing code by hand in an IDE, and a ParseBench-2 fight between LlamaIndex and Reducto."
tags:
  - Claude Code & Anthropic Updates
  - Gemini 4 Hydrogen & Orchestrator
  - Agentic Coding & Agent Harnesses
  - AI Engineer Code Summit Day Two
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 13, 2026

## Claude Code & Anthropic Updates

### The IPO site is live

[Anthropic](https://x.com/AnthropicAI/status/2120841731302154708) (9,859 likes) posted one line, "Our initial public offering: ipo.anthropic.com", and the [site](https://ipo.anthropic.com/us/) carries the numbers. [Hacker News](https://news.ycombinator.com/item?id=50465829) gave it about 910 points and 854 comments.

- **Q3 2026.** $17.0B revenue, up more than 12x year over year. More than 11,900 customers each bring in at least $100K of trailing twelve-month revenue. Adjusted operating margin is 15%. The net loss is $23.3B, and the site says it "includes a $21.9 billion non-cash charge related to a change in the fair value of convertible notes, derivative liabilities, and SAFEs".
- **Dates.** The FAQ expects pricing on November 18 and trading on November 19, on Nasdaq under ANT, with an estimated range of $70 to $78. Earlier roundups covered the roadshow start and the terms.
- **European retail.** A BaFin-approved prospectus opens the offering to retail investors in Denmark, Finland, France, Germany, Ireland, the Netherlands, Norway, Spain and Sweden, through brokers such as Nordnet, Trade Republic, DEGIRO and Revolut.
- **Reactions.** [Theo](https://x.com/theo/status/2120857265246986589) (3,585 likes) wrote "These numbers are insane." [@biscuitweb](https://x.com/biscuitweb/status/2120858595721871478) replied "my claude bill should count as pre-ipo shares". On HN, p-e-w was less charmed: "$23 billion quarterly net loss. Hundreds of billions in future liabilities. IPO valuation above $1 trillion. The lunatics are running the asylum."
- **Mythos ported Claude to AMD.** [madrobot.blog](https://madrobot.blog/2026/11/11/anthropic-mythos-claude-amd-chips-three-days/), found via [HN](https://news.ycombinator.com/item?id=50477800), pulled a claim out of the roadshow video. Co-founder Tom Brown says "In the past, bringing on a new chip platform took dozens of engineers months of work. This time we had Mythos try it out. It got Claude running on AMD in just three days with basically no human intervention." The footnote narrows it to prompt processing for one model on AMD MI355X GPUs "at a useful level of performance".

### Claude Meetings ships in beta

[Claude](https://x.com/claudeai/status/2120973994191094179) (58,045 likes): "Introducing Claude Meetings: add Claude to your team's video call and it builds docs, whiteboards, and other artifacts with you while you're still talking." It is rolling out on Team and Enterprise plans, "starting with Google Meet". The 11-11 roundup had it as coming soon.

The [article](https://claude.com/resources/articles/claude-meetings) fills in the rules. Claude joins as a visible participant and answers in writing by default. It uses each person's connected tools with their permission. "It saves a transcript, summary, and screen descriptions, not audio." It stays out of calls with outside guests unless an admin changes that. Top reply, from [@nortonbreads](https://x.com/nortonbreads/status/2120974685605445828) (4,761 likes): "Microsoft Teams devs looking at this".

### Self-hosted Claude Managed Agents

[ClaudeDevs](https://x.com/ClaudeDevs/status/2120938988165091693) (10,553 likes) opened a private beta: "You can host the agent harness, sandboxes, and session history, in your own cloud or on-premises, and choose where requests to Claude are sent." Per the [article](https://claude.com/resources/articles/self-hosted-claude-managed-agents), you run the server, database and workers yourself. Model requests can go to Anthropic, Bedrock, Google's Agent Platform, Microsoft Foundry or your own gateway. Vaults keep credentials out of the sandbox, an allowed-hosts list limits egress, and traces export over OpenTelemetry. [@TimJayas](https://x.com/TimJayas/status/2120939202875662371): "claude made their own vercel 💀".

### Claude Code 2.1.323 drops a setting people built on

A [GitHub issue](https://github.com/anthropics/claude-code/issues/109446), found via [HN](https://news.ycombinator.com/item?id=50477704), complains that "2.1.323 removed subagentStatusLine with no replacement: per-agent context, cost, model and effort are now invisible". The changelog line it quotes says subagent rows "always use the default look". Small, but it is the kind of removal that breaks custom setups without an error.

## Gemini 4 Hydrogen & Orchestrator

Google shipped the small model in the Gemini 4 family. [Sundar Pichai](https://x.com/sundarpichai/status/2120940236805169182) (8,280 likes) announced it, and the [Google post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) has the details ([HN](https://news.ycombinator.com/item?id=50471431), 519 points).

- **Price and scores.** $1.50 per million input tokens and $7.50 output, flat across the 1M context. Four thinking levels, with high as the default. Google reports 57% on Terminal-Bench 4.1 against 18.2% for Gemini 3.8 Flash, and says it is 2.5x faster.
- **Where it runs.** AI Studio, the Gemini API, the Gemini app, Search, and Antigravity for paid Pro and Ultra users.
- **Orchestrator.** The [Antigravity post](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) ([HN](https://news.ycombinator.com/item?id=50472260), 400 points) adds a model option that "takes a dynamic, bidirectional approach between Carbon and Gemini 4 Hydrogen within the evolution of a single trajectory." Google's claim is that "Orchestrator reached near-Carbon task success rates while, on average, consuming 24% less quota and completing 19% faster." On HN, vegardx compared it to Anthropic's advisor mode, and fuussssip was nervous about handing model choice to the tool.
- **Cursor.** [Cursor](https://x.com/cursor_ai/status/2120944639633211619) (2,013 likes): "At its default effort, it scores 54.3% on CursorBench, up from 39.6% for Gemini 3.8 Flash."
- **Simon Willison on pricing.** In the [llm-gemini 0.37 post](https://simonwillison.net/2026/Nov/12/llm-gemini/), linked from [X](https://x.com/simonw/status/2121039423441981444), Simon Willison points out that Carbon and Argon are both $2.00/$10.00 until November 30, so "Hydrogen, supposedly the cheap model, is currently only a 25% discount on its more capable peers." Compared with the small models elsewhere, "It's still considerably more expensive than Claude Haiku 5.5 and GPT-6 Luna - they're both $0.10/$0.50, so Hydrogen is 15x that." Hydrogen is also the new free tier model and will power AI features in Search.
- **Theo on speed.** [Theo](https://x.com/theo/status/2121030235248570537) (789 likes) quoted the "Built for speed" tagline and answered "Still garbage speeds compared to anything else on the market." [@PatrickToulme](https://x.com/PatrickToulme/status/2121040017355141571) asked for repros.
- **The names.** HN commenter jawns spoke for many: "Hydrogen -> Argon -> Carbon. What kind of ordering is that?!?"
- **A bug people liked.** [Mat Velloso](https://x.com/matvelloso/status/2121054265653576116) (2,050 likes) posted "This might be the coolest Gemini bug I have ever seen". The screenshot did not come through for me, but the replies describe the model leaking its own thinking into the answer. [@SebastianWolff](https://x.com/SebastianWolff/status/2121097458289918229) wants `</thoughts>` on a shirt.

## Agentic Coding & Agent Harnesses

### OpenAI on running 500 persistent agents

[Peter Steinberger](https://x.com/steipete/status/2121058770767982997): "My team wrote about how we run persistent agents inside OpenAI." The [post](https://developers.openai.com/blog/securing-persistent-agents-like-openclaw-at-openai), introduced by [Kevin S Lin](https://x.com/kevins8/status/2120962631788114377) (418 likes), is the most concrete thing OpenAI has published on this.

- "We now have over 500 agents that run proactively in the background doing meaningful work - everything from automatically opening PRs in response to product feedback to continuously running data experiments on new features."
- A trusted gateway sits apart from the untrusted agent process. Agents run in the Codex sandbox, never with full access, and web search goes through a cache.
- Each agent gets its own identity through a ChatGPT Service Account, and everything is logged.
- On approvals: "Constantly requiring human review creates review fatigue where humans are trained to blindly accept all permission prompts." Their answer is an automatic reviewer, with human sign-off kept for sensitive actions. Kevin S Lin's [example](https://x.com/kevins8/status/2121127504996139445) is "agent can read email but not send without approval".
- OpenClaw Enterprise, an "open source vendor neutral agent control plane", is due to reach 1.0 by the end of the year.

Steinberger then ran a [poll](https://x.com/steipete/status/2121042215619510584): "Would you enable yolo mode for dots, even if your dot might do sth unwanted?" With 3,206 votes, 75% picked "yolo beats approvals". [@derekblr](https://x.com/derekblr/status/2121042817090986102) explains why: "Dots is so so bad. Constantly blocking itself on permission issues that already should be green lit." [@elektrotimmy](https://x.com/elektrotimmy/status/2121053925948457408) wants the permission list inverted so you only name what the dot may not do.

Steinberger also [warned](https://x.com/steipete/status/2121009372470067544) (1,343 likes): "There's some new agent launching later this week and marketers offer a lot of money to say nice things about it on X. Keep a lookout on honest reviews 🫠". No name given, on purpose.

### Codex and dots

- [Tibo](https://x.com/thsottiaux/status/2121062974161092792) (6,436 likes, 8,934 replies) asked "How can codex be improved? Try not to say model." The top reply, from [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2121063169045192824) (4,421 likes), is "model". The useful ones are [@_ty13r](https://x.com/_ty13r/status/2121063726577008855) ("fix the memory leak 🙏", 2,336 likes), [@AndyoMp3](https://x.com/AndyoMp3/status/2121063123335708730) on cleaning up local storage and temp files, and [@TheHassanEffect](https://x.com/TheHassanEffect/status/2121065725213528436): "I don't need regression tests for regression tests to make sure that regression tests are properly testing regressive behavior."
- [Tibo](https://x.com/thsottiaux/status/2120999993079451919) (5,892 likes): "We shipped some good updates to dots today and the banked reset has been activated and should land in everyones accounts sometime soon!" The [ChatGPT post](https://x.com/ChatGPT/status/2120970988796170275) lists faster replies, less jargon, better follow-through and custom instructions. The replies under both mostly ask where GPT 6.2 is, or point out that dots still are not available in Europe.
- [Tibo](https://x.com/thsottiaux/status/2121036562058400200) (2,520 likes) also pointed to OpenAI's cybersecurity event: "We announced new tools we're developing for cybersecurity today across automated patching and automated red teaming." [@bijanbowen](https://x.com/bijanbowen/status/2121037444288053568) (93 likes) said these gated tools "give me protection racket vibes".

### T3 Code gets faster, and gets benchmarked

- [Theo](https://x.com/theo/status/2120855895471260049) (1,262 likes) opened with "T3 Code is still too slow. Working on it!" and then [told](https://x.com/theo/status/2120857707423182901) the people suggesting Rust that "The problem is the network layer. The problem is almost always the network layer."
- Nine hours later, [Theo](https://x.com/theo/status/2120995557468737904) (1,856 likes): "Progress. Was up til 6am working on this. Thank you Fable 5.2 🫡". [@dmarcosm98](https://x.com/dmarcosm98/status/2120995819835003273) read the screenshot as "2230ms -> 31ms". Theo's [method](https://x.com/theo/status/2120996173473624263): "I turned all my extreme cases into a hill climb with a bunch of fake devices and iOS simulators. Worked great :)"
- **ADEMark v1.** [@zqkrq](https://x.com/zqkrq/status/2121005921694556557) (509 likes) published [ademark.dev](https://ademark.dev), which runs 15 agent desktop apps against the bare CLI, all on one Mac mini with one model. "Did not expect most of them to use fewer tokens than the CLI on its own. Or one to sit at 16% CPU doing nothing." The site says "There is no overall winner." The bare CLI is ready 0.69 s after a cold start, and the apps need between 1.76 s and 11.4 s. [Theo](https://x.com/theo/status/2121018347215347802) called it "One of the only accounts actually measuring the tools we use every day." T3 Code was tested on 0.1.8 beta, before the latency fix, and zqkrq [promised](https://x.com/zqkrq/status/2121016909382492462) to rerun it first.
- Theo is also [fed up with GitHub](https://x.com/theo/status/2120833656566727022): "I seriously am prepared to churn from Github at this point."

### OpenCode

- [dax](https://x.com/thdxr/status/2120879234558439826) posted "opencode in rust" over [Simon Klee's](https://x.com/simonklee/status/2120877420089590028) (503 likes) demo of "a 1:1 port of the CLI, built on new OpenTUI bindings. It talks to the same TypeScript server."
- [Luke Parker](https://x.com/LukeParkerDev/status/2121026117129973896) (335 likes) showed an "early demo of native opencode desktop built on Rune", with an experimental option [planned](https://x.com/LukeParkerDev/status/2121032000069140908) for v2.
- [dax](https://x.com/thdxr/status/2121069247464112486) (403 likes) asked how plugins should work when "99% of people will vibe code" them, and whether Lua is the right embedded language. [@luizribeiro](https://x.com/luizribeiro/status/2121070398221713890) argued for WASM components, since "each plugin only gets the capabilities you grant it". [@im_bharat11](https://x.com/im_bharat11/status/2121075499980259573) argued for JS on QuickJS, because that is the language models write best.
- [dax](https://x.com/thdxr/status/2121097654453379349) (973 likes): "non-technical people are just discovering agents now and they're going straight into opus 5.5 and getting their minds blown".

### Home Repo, written up

[Matt Pocock](https://x.com/mattpocockuk/status/2120847219788308872) (1,757 likes) turned the pattern from two days ago into a video and an [article](https://www.aihero.dev/the-home-repo-pattern). "A Home Repo is one repository that holds your skills, your AGENTS.md and your shared docs. You run your agent in the Home Repo." Its AGENTS.md points at your other repos so the agent can open or clone them. The article includes a setup prompt you can copy, and suggests grouping the pointers into one file per area once you pass about 20 repos. In the replies, [Matt](https://x.com/mattpocockuk/status/2120860193324142830) confirms a whole team can share one.

Also from [Matt](https://x.com/mattpocockuk/status/2120795868509151239) (1,844 likes), who told an agent to "treat me like a tool call" and then judged the result. "So degrading". [@mdp_sec](https://x.com/mdp_sec/status/2120813292235206709): "least u get retried when u fail".

### Shorter items

- **Grok Bot.** [Grok Bot](https://x.com/bot/status/2120946968403095906) (6,752 likes): "Grok Bot on Mac can now use Messages, Mail, Notes, Reminders, Calendar, Location, and Contacts." [lauren](https://x.com/poteto/status/2120967515224609057) suggests asking it to read family messages and update your calendar. One reply asked whether messages are used for training.
- **Vercel UI SDK.** [Vercel](https://x.com/vercel/status/2120950032014963054) (1,553 likes) posted a bare link to [vercel-labs/ui](https://github.com/vercel-labs/ui), "A library of behaviors for agents to build the next generation of user interfaces." [Steinberger](https://x.com/steipete/status/2120974913679040680) (2,577 likes) quoted the README's best line: "Don't worry, you don't need to learn how to write this. Your agents will. And we made them really good at it." [@HarryTandy](https://x.com/HarryTandy/status/2120975348565237954): "then the skill becomes reading what they wrote back".
- **Jane Street interviews.** A [Jane Street post](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/), found on HN at 216 points, says some onsite rounds now "involve less code-writing, and lean more higher-level, focusing on software design, on verifying the quality, structure, and intention of code, and on using LLMs to produce code."

## AI Engineer Code Summit Day Two

- **Thariq closed the event by typing code.** [Turing Post](https://x.com/TheTuringPost/status/2121060997964431640) summarized the talk as "2026 was the industrial revolution of software. Now let's build its Renaissance." The argument is that models are now good enough to work the way people want, which reopens language, database and interface design. [@Evan_Oman](https://x.com/Evan_Oman/status/2121064369903845580) noted the demo: a game whose engine is "very agent owned" while a small DSL defines characters and abilities, edited by hand or with a tab model. [Thariq](https://x.com/trq212/status/2121067561915916575): "it's time to retvrn".
- **Lance Martin on multi-agent and memory.** [swyx](https://x.com/swyx/status/2120981552561844593): "lance starting out his keynote strong with fermat's proof" and "aie code is now aie math".
- **Cognition teaser.** [swyx](https://x.com/swyx/status/2120962735211233454) (124 likes): "play special attention to @walden_yan's keynote rn to get a preview of {BIG LAUNCH NEXT WEEK}".
- **Antigravity.** [Ivan Leo](https://x.com/ivanleomk/status/2121047741719814217): "We should instead shift to defining what good looks like and free our agents to explore."
- **Lydia Hallie's talk broke the event's record.** [swyx](https://x.com/swyx/status/2120925700534460775) says it "already got 200k views in 13 hours - highest day 0 count in the history of AIE!!" The link is under Videos.
- **Recap.** [Alex Volkov](https://x.com/altryne/status/2121114914429501842) wrote up the two days. The one complaint was the WiFi. The channel also passed a million subscribers and [got a cake](https://x.com/swyx/status/2121060183988486493).

## Videos & Podcasts

- [Rethinking Claude Code Best Practices](https://www.youtube.com/watch?v=vlfCjWuv4es), Lydia Hallie at AI Engineer, announced by [CJ Avilla](https://x.com/cjav_dev/status/2120914100146557122). The pitch is that "most of what we've added to our Claude Code setups over the past year is now holding them back."
- [Building the Claude API for the Frontier](https://www.youtube.com/watch?v=p2xvJAbF-i4), posted by [ClaudeDevs](https://x.com/ClaudeDevs/status/2120962481225146636) (1,094 likes). It covers changing effort mid-conversation without breaking prompt caching, measuring cost per task when you upgrade models, and "how Mythos and Fable use the same model weights with different safeguards".
- [Stop Picking The Wrong Model](https://www.youtube.com/watch?v=XtykeVoSmP8), Theo on what to use Opus 5.5 and Fable 5.2 for and how they work together.
- [AIE CODE day two livestream](https://www.youtube.com/watch?v=y9JtCCZP2MQ), with OpenAI, ArtCraft, Cognition, Exa, Anthropic and Amp.
- [Latent Space on ArtCraft](https://latent.space/p/artcraft/), the team that cloned Photoshop and now wants to "Rebuild Everything".

## Other Interesting Stuff

### Jensen Huang resigns from Nvidia

[Nvidia's release](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition), posted by [NVIDIA Newsroom](https://x.com/nvidianewsroom/status/2120876571829662014) (74,248 likes), says Jensen Huang "has resigned as President, Chief Executive Officer, and a member of the Board, effective immediately." CFO Colette Kress is interim CEO. This follows the affair reports covered on 11-09 and 11-12. The [HN thread](https://news.ycombinator.com/item?id=50467087) passed 3,400 points.

- [Wired](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/), found via [HN](https://news.ycombinator.com/item?id=50477231) at 495 points, reports that an internal post asking for Huang's return drew "more than 1,600 comments", and that "The crisis has cost the company $1 trillion in market value". One employee quote: "Nvidia is Nvidia because of Jensen".
- The tracked accounts mostly sided with Huang. [Steinberger](https://x.com/steipete/status/2120903527803564397) (12,822 likes): "Ousting Jensen feels rushed and not right." [Tim Sweeney](https://x.com/TimSweeneyEpic/status/2120913227651645932) replied "I agree." [dax](https://x.com/thdxr/status/2120880792742109630) (2,632 likes) was angrier, and [@ThePrimeagen](https://x.com/ThePrimeagen/status/2120906148106711171) (937 likes) answered "This is definitely opportunistic."
- [Armin Ronacher](https://x.com/mitsuhiko/status/2120901574071627805) (931 likes) took the other side: "Men will rather erase $2T USD in market cap than to be faithful to their wives."
- [dax](https://x.com/thdxr/status/2120945170795672054) later added that "the chinese govt actively blocks nvidia chips from entering the country", so "whatever is going on here is more complicated than what's being said".
- HN commenter qsymmachus: "You know the industry has concentrated too much power into too few people when one person's midlife crisis can wipe ~$600 billion in market cap".

### GPU fingerprints in Chinese model weights

[will depue](https://x.com/willdepue/status/2120992457630326841) (32,516 likes, 4.4M views) claims "conclusive forensic evidence that the top 4 Chinese AI labs—DeepSeek, Moonshot, MiniMax and Ant Group—have built their newest models on NVIDIA's most advanced Blackwell chips, which are barred from export to China."

The [report](https://unemploymentlabs.com/checkpoint-forensics) ([HN](https://news.ycombinator.com/item?id=50474883), 277 points) explains the mechanism. PyTorch's GPU random initializer splits work across threads, and the thread count depends on the chip, so the starting weights carry a pattern that survives training. will depue "searched more than six trillion combinations of chip layout and seed number" and matched six models released since April. The report is careful about one thing: "The fingerprint identifies how the weights were created and supports, without proving, the inference that Blackwell also performed the training."

Pushback came fast. [@dylan522p](https://x.com/dylan522p/status/2121002286470369669) (1,058 likes): "One can just look at the code that Moonshot and DeepSeek open sources and realizes it is only for Blackwell". HN commenters basiccalendar74 and flowerlad noted that renting Blackwell GPUs outside China is legal, which the fingerprint cannot rule out. [Theo](https://x.com/theo/status/2121008112694186144) still called it "fantastic research".

### ParseBench-2 and the judge fight

[Jerry Liu](https://x.com/jerryjliu0/status/2120921239619612921) (143 likes) launched ParseBench-2: 4.3k+ document pages, a new forms dimension, and severity scores for 330+ error types. Within hours Reducto's [Adit](https://x.com/aditabrm/status/2121002749555052796) posted "On their benchmark, one table scored 0 and another scored 100. Can you tell which is which?" and [Raunak](https://x.com/raunakdoesdev/status/2121005481250705656) added "There is no reason to be using rule-based benches anymore, LLM judge is the way."

[Logan Markewich](https://x.com/LoganMarkewich/status/2121028499528097963) replied that the example "was only annotated to look at formatting (bold, underline, strikethrough, etc.)", and that "Deterministic benchmarks allow us to audit and trace every measurement. I can't say the same for lower effort LLM-as-a-judge approaches." [@xujustinj](https://x.com/xujustinj/status/2121045536635843042): "LLM-as-a-judge for a discriminative task is such a weird hill to die on". Both sides sell parsers, so read each benchmark with that in mind.

### Local models and Apple

- [Edge0-145B](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) ([HN](https://news.ycombinator.com/item?id=50475713), 219 points) claims "80+ tokens/s and 28GB peak memory" on a laptop. HN commenter Zetaphor objected to the wording: "This is not open source, this is open weights".
- [smolmaxxing](https://github.com/hyperionaidev/smolmaxxing/) ([HN](https://news.ycombinator.com/item?id=50468888), 345 points) runs 8B and 16B mixture-of-experts models on about 1 GB of RAM by streaming weights from flash. The two test devices are a Xiaomi TV box and a 2013 iPad Air.
- Apple's [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) (HN, 197 points) "now extends to server models — like Claude, Gemini, and more — all through the same Swift API".
- [swyx](https://x.com/swyx/status/2120908176967237654) (231 likes) tried the new Siri: "oh sick, can you turn off all my alarms". It could not.
