---
title: "Claude Code gets mods, Pi ships 1.0 and Pi Durable, Karpathy wants explainer videos, the FTC opens an AI probe"
date: "2026-10-02"
summary: "Anthropic launched **mods for Claude Code**: TypeScript functions that hook any event and can rewrite it, replace it or draw new UI. They ship inside plugins and aren't sandboxed, and built-ins like /diff are now mods you can turn off. Boris Cherny called them 'absolutely insane.' An hour later Earendil shipped **Pi 1.0**, which adds Codemode, virtual models and cache warming, together with **Pi Durable**, a 15,000-line framework for agents that survive crashes, fork conversations and run anywhere there's JavaScript. The two hit 1,111 and 336 points on HN. **Andrej Karpathy** came back after three weeks with a ladder of output formats, from ASD-STE100 prose up to bespoke explainer videos, then a 'Land or Water?' map that models draw from text alone. Theo argued that PRs from non-maintainers should be closed by default, Uncle Bob explained why the author of Clean Code doesn't read code anymore, and Matt Pocock said a clickable dev server matters more than the gap between most models. Cloudflare released **Clef**, an open-weight answer to Jev, and DeepSeek put out a desktop harness. On the news side, the **FTC is investigating OpenAI, Anthropic and others**, California subpoenaed OpenAI, OpenAI fired three researchers, a NYT feature on Anthropic courting religious scholars went around X, and Broadcom will lend Anthropic up to $42 billion."
tags:
  - Claude Code Mods
  - Pi 1.0 & Pi Durable
  - Karpathy on Reading Model Output
  - Agentic Coding & Agent Harnesses
  - "OpenAI & Anthropic: Probes, Firings and Deals"
  - Videos
  - Other Interesting Stuff
---

# AI Roundup — October 2, 2026

Thursday evening in Europe brought two launches about an hour apart: mods for Claude Code, then Pi 1.0 with Pi Durable. Both let people reshape their agent harness, and they took over most of the coding conversation. Mods are the bigger change for Claude Code users. Hooks could watch the harness, and mods can rewrite it. Andrej Karpathy posted for the first time since September 10. Lee Robinson posted nothing new, and Simon Willison's only public comment in the window was on Hacker News. Nitter's thread pages worked again today, so reply quotes and like counts are back. @potetotes still 404s, so Lauren's posts come from [@poteto](https://x.com/poteto).

## Claude Code Mods

**You can now mod Claude Code.** [@ClaudeDevs](https://x.com/ClaudeDevs/status/2105721434807083061) announced mods: "Change how it behaves, Customize the UI, Swap in your own features." You write one in a few lines of TypeScript or ask Claude to write it. Mods ship inside plugins, so `/plugin` installs them in the CLI and the desktop app. The post had 15,774 likes and 2.45M views by morning. The thread showed three example mods:
- **Token Weather** shows how full your context window is above the prompt, plus a sparkline of the last 12 turns.
- **Blast Radius** catches `rm -rf`, `git reset --hard` and force pushes before they run, and shows what they'd touch in a side pane.
- **Replay Theater** records every file edit in a turn. `/replay` steps through the diffs one at a time.
- Anthropic built `/diff` and AGENTS.md support as mods. Sample mods are going into the Claude Code Playground repo, and you can submit your own to the [Claude directory](https://claude.ai/directory).

**How they work.** The [announcement post](https://claude.com/blog/claude-code-mods) explains why hooks weren't enough: hooks "can't rewrite events, draw new UI, or replace features. Mods can."
- Claude Code emits an event each time it does something, like calling a tool, asking for permission or drawing part of the screen. A mod hooks one of these and runs before it, after it, instead of it, or wrapped around it. When several mods hook the same event they run in load order, so mods from different authors stack.
- Mods aren't sandboxed. They "run with the same access to your machine as Claude Code itself," so only install them from sources you trust.
- You can now turn off or replace the built-in `/diff`. Anthropic plans to move more built-ins to mods "so you can pare Claude Code down to a small core and add back only what you want."
- On Team and Enterprise plans, and on any machine with managed settings, a built-in mod called sec-default loads first. It stops user-installed mods from doing risky things like overriding permission deny rules. Suggested team uses include a CI/CD status pane, a confirmation step before any command touches production config, and an audit-logging mod that loads first and records every call the other mods make.
- Anthropic shared the design on GitHub before launch to collect feedback.

**Addy Osmani's guide.** The [getting-started guide](https://claude.dev/blog/getting-started-with-claude-code-mods/) on claude.dev builds Token Weather, about 80 lines, from an empty folder.
- You need Claude Code 2.1.287 or later. Mods are on by default.
- A module exports `register(on, options)`, and `on(event, matcher?, ($, e, next) => …)` adds a hook. It works like middleware. Await `next(e)` to observe, call `next({ ...e, command })` to rewrite, or return `{ deny }` without calling next to answer the event yourself.
- Events cover tool calls, the submitted prompt, turns starting and finishing, sessions starting and ending, slash commands, and `ui.render`, which fires for every piece of the interface as it's drawn.
- Mod code runs in its own JavaScript context with no DOM and no Node, and reaches everything else through `$`. That's for isolation. Through `$` a mod still has Claude Code's access to your machine. Saving reloads the mod in place, `$.state` keeps values across reloads, and `claude plugin test` runs tests against the real runtime.
- A hook gets 10 seconds of its own time per dispatch.
- Blast Radius "is a safety net, not a permission system." It reads the command text, so `$(…)`, aliases and scripts that call rm get past it.

**The Claude Code team.** Boris Cherny: ["Mods are absolutely insane... Each person works differently, so there's no reason why everyone should have an identical Claude experience."](https://x.com/bcherny/status/2105756563302723721) Thariq [wrote](https://x.com/trq212/status/2105734197801562264) that "all software is becoming malleable."
- Thariq's most-used mod is next-steps, which suggests what to do next, including skills and commands. To install it, run `claude plugin marketplace add anthropics/claude-plugins-community`, then `claude plugin install next-steps@claude-community`.
- Mods can spin off forked agents. For example, you could build "your own memory harness" that runs a custom classifier every turn and writes memories when it matches.
- Thariq is "still working on making plan mode into a mod."
- In a [Latent Space clip](https://x.com/latentspacepod/status/2105746323907735663) that swyx retweeted, Thariq said: "And then you can modify the UI, which you can never do in hooks."

**Replies.**
- @rohit3a: "We got Mods in Claude Code before GTA VI." It got 221 likes.
- @indefatigabile: "/mod open source the harness." It got 214 likes.
- Someone already [ported pi-autoresearch to Claude Code mods](https://github.com/bn-l/claude-autoresearch-mod), "1:1."
- @oikon48 shipped prompt-rail, a mod that lets you jump back to any prompt you've sent in the session.

## Pi 1.0 & Pi Durable

**Pi hits 1.0.** About an hour after mods, Earendil [shipped Pi 1.0](https://earendil.com/posts/pi-1-0/). The [@pidotdev post](https://x.com/pidotdev/status/2105738462712209603) got 3,307 likes, and the [HN thread](https://news.ycombinator.com/item?id=49926069) 1,111 points. According to Earendil, "hundreds of thousands of people around the world use Pi every week." New in 1.0:
- Codemode, which brings native MCP support and non-LLM models like Jev and image models
- Extension support for virtual models
- Deferred tool loading
- Cache warming for Anthropic models
- Mid-conversation system messages, so prompt and tool changes are recorded in the transcript
- A new TUI theme, and full-screen mode by default

The demo has Pi write itself an extension: a virtual model that plans with Claude Opus and implements with GPT 6 Luna, while Jev spots the switch to implementation and hands over. `/session` then breaks down cost per model and cache use. Earendil says Pi waits "until something has proven itself" before adopting it, and "the list of things that fell off the wall is much longer." Pi is MIT licensed. Install it with `curl -fsSL https://pi.dev/install.sh | sh`. When one user's `pi update` still said v0.99.2, @pidotdev replied "our bad."

**Pi Durable is the second thing.** Armin Ronacher: ["We did a thing and then another thing. Curious about the second thing in particular."](https://x.com/mitsuhiko/status/2105740333237809648) Mario Zechner wrote [the Pi Durable post](https://earendil.com/posts/pi-durable/) ([HN](https://news.ycombinator.com/item?id=49925969), 336 points) ["with code examples. How quaint."](https://x.com/badlogicgames/status/2105739632168054992) It's an experimental framework for long-running agents that can run anywhere. It doesn't replace the Pi coding agent. In replies, Armin called it "an agent framework to build your own agents on top. It's also our future foundation for how we build them."
- It's about 15,000 lines without tests, "about 150,000 tokens with GPT and about 250,000 with Claude," so your agent can read all of it.
- A harness opens over a storage backend. Memory, SQLite and JSONL backends ship, along with a conformance suite for writing your own. With a small adapter it runs on Bun or inside a Cloudflare Durable Object.
- Every step of a run is a task that saves a checkpoint before moving on. After a crash, a new process picks up the unfinished tasks. An interrupted tool call reruns only if that's safe, and otherwise the model is told it was interrupted. A `requestId` makes each submission exactly-once.
- One harness runs many conversations at once, and a conversation can fork another at any point. Their example is a Slack channel as one conversation, with a thread as a fork of it.
- An extension bundles system prompt sections, tools, hooks and tasks. There are no built-in subagents, but Mario says building one "is a handful of lines of code, including replay safety."
- Install it with `npm install @earendil-works/pi-durable @earendil-works/pi-ai @earendil-works/chord`.

Armin also posted, in quotation marks: ["I don't understand the blog post but it's okay cause I put my clanker to it and he said it's cool"](https://x.com/mitsuhiko/status/2105746855527419971).

**On HN.**
- wasting_time: "So, how are people actually using Pi? Here I am with Claude Code and Codex in a terminal like a caveman."
- esafak uses Pi headless for reviews in CI. sroerick is "about 75% pi, 20% autolith, and 5% my own harness."
- stefan_ wasn't impressed: "Pi is the vim or mechanical keyboard of the pre-AI era. Didn't matter then, doesn't matter now. Will generate infinite discourse regardless."
- Under Pi Durable, lukebuehler listed other durable harnesses, including LangChain Deep Agents and Vercel Eve. the_mitsuhiko replied: "I can't count how many earlier designs we chewed through before we ended up with the final one."
- anilgulecha thinks Pi Durable "makes pi a good acquisition target for Cloudflare."

AINews led today's issue with both launches.

## Karpathy on Reading Model Output

**Karpathy is back.** After three weeks away from X, Karpathy posted a [ladder of output formats](https://x.com/karpathy/status/2105819303471976479), with 18,326 likes and 922K views. Thariq retweeted it. "We'll be spending a lot more time trying to understand the outputs of language models." Each step is "even better" than the one before:
- **Writing.** Ask for an explanation in ASD-STE100, "a controlled language specification originally developed for aerospace maintenance documentation." The spec is strict, so Karpathy sometimes asks for "80% of the way to ASD-STE100."
- **Diagrams and images.**
- **Web pages.** Ask for output "in HTML" to get an interactive page.
- **Explainer videos.** This is the format Karpathy is "most bullish on." Try "Create a 3b1b style video explainer on X. Use my ElevenLabs API key for audio narration." "This is actually starting to work!"

The conclusion: as LLMs do more of the legwork, "a lot more of our work will rise up the abstractions into oversight and understanding." Meanwhile you can ask for "large, custom, discardable software artifacts (e.g. web apps, video explainers) that would have never made sense to create before."

Replies:
- Grady Booch: "Hm, there's this thing called the UML..."
- @malhashemi90 said the first person they heard talking about ASD-STE100 was Matt Pocock, and credited Dex's `/show-me` for doing visuals at scale.
- @moby763canary21 has moved large plans from Markdown to HTML "because it's interactive and easier to read."

**Land or water.** Later Karpathy [quoted](https://x.com/karpathy/status/2105909609487872075) an eval by Celeste (@celestepoasts), run on every Claude model. You give the model a latitude and longitude as text, ask "Land or Water?", repeat 16,200 times, and plot the answers as an image. "The models know. From compressing the internet." Karpathy added that "there are no images involved except the way you arrange the text responses in 2D." @VrajTalati1: "the map of its mistakes is the interesting one."

## Agentic Coding & Agent Harnesses

**Theo: close PRs by default.** Jamie Turner [wrote](https://x.com/jamwt/status/2105831393750065566) that "every startup would secretly admit how much of a pain the 'slop grenade' problem is. Bold of Tobi to say it out loud." Jamie's fix: "Keep holding people accountable for their actual work." Theo [replied](https://x.com/theo/status/2105854195253522501) that good teams have always had this problem. Theo used to spend weekends on "yolo PRs changing thousands of lines of code" that were never meant to be merged. They were for exploring architecture, finding a change's blast radius and getting early product feedback. "The key to making this work: assume all PRs will be closed, not merged. The PR you merge can be built differently than the branch you used to explore." Theo would go further: "all PRs filled by non-maintainers should be closed by default, meant only as references for future humans and agents."

**Uncle Bob doesn't read code anymore.** [Uncle Bob](https://x.com/unclebobmartin/status/2105647907705868659) (6,671 likes, retweeted by Theo): "People seem shocked that the author of Clean Code doesn't read code anymore... What is the goal of keeping code clean? To get it out of the way of the real job -- thinking." In replies:
- Engineering software "now means the management of agents to produce that software."
- Companies won't need fewer programmers. They'll "get X times more done."
- AIs "still need code to be well organized, well named, well tested, and well described. But the threshold on the word 'well' seems be more relaxed for AIs than for humans."

**Matt Pocock on environments and prior art.**
- ["A: an agent with access to a debuggable/clickable dev server B: one without I'd argue that the difference between A and B is bigger than most models"](https://x.com/mattpocockuk/status/2105740664973775163), and "Fix the environment your agent runs in." @iabdul_wasey would add a seeded test account, since "a clickable server that stops at the login screen leaves most of the app invisible."
- ["Me, 2020: ugh this code sucks, let me fix it while I'm here / Claude, 2026: let me copy the prior art in the repo so the codebase stays consistent"](https://x.com/mattpocockuk/status/2105626588024815663), which got 850 likes. Matt's follow-up: agents "are great at tactical programming but have no appetite for initiating strategic changes on their own. So you need a strategist driving them."
- Matt took Lauren's prompt, "restate in your own words what you think my goals are and what the problem i'm trying to solve is," and cut it to five words: ["Restate my intent before continuing"](https://x.com/mattpocockuk/status/2105628270930845990). It's useful when you've dictated a lot and "can only half-remember what you've said."
- The prompt of the day was [/codebase-design](https://x.com/mattpocockuk/status/2105563604384915639), which looks for shallow modules using the deletion test. It "helps kill unnecessary abstractions."
- Matt also [asked](https://x.com/mattpocockuk/status/2105645092476252542) whether anyone is doing CRAP scoring in TypeScript with Vitest.

**Thariq builds an animation editor.** Thariq has Claude teaching animation and finding references for a game prototype. Claude also [built an animation editor](https://x.com/trq212/status/2105849295580889208) for iterating on the jump, and the post got 1,377 likes. "I'm kind of at my skill limit here. Need to gain better judgement." Thariq has "read zero percent of the code" and thinks "basically every future game engine will be custom made to the game." Thariq's next post is [aimed at company leaders](https://x.com/trq212/status/2105751275480752344), asking what people wish their leadership understood about agents. It drew 247 replies:
- @jakevoytko: estimates are getting harder, because a one-shot task takes 30 minutes but the worst case "can unexpectedly stretch out into days."
- @anytanreal: "review load goes UP first."

**Slopalytics.** Theo: ["It's 4am. I just finished a project I've wanted for awhile."](https://x.com/theo/status/2105622082700923365) [Slopalytics](https://slopalytics.com) is a better view of Artificial Analysis data plus usage data from T3 Code. It has model comparisons, a Pareto line, grouping by model family, linear/log toggles and "DARK MODE." The post got 2,896 likes, and new benchmarks are planned.

**A global reset for ChatGPT accounts.** Tibo [posted](https://x.com/thsottiaux/status/2105843926221660585) Thursday evening, Pacific time: "Global reset landing tomorrow 10am PST for all paid ChatGPT accounts. Apologies for the slow start with GPT-6.1 Sol, it's now back to running at expected speeds after the massive load spike in the first two days." It got 11,524 likes and 1M views, and several replies worried about losing banked resets.
- Dots don't get a reset, because ["usage on your primary dot is virtually unlimited at the moment"](https://x.com/thsottiaux/status/2105672058269212820).
- You can ask your dot to ["create a pet and set it as your avatar"](https://x.com/thsottiaux/status/2105862010521219406).
- Tibo's own dot has taken the inbox [from over 9,000 unread to 6,110](https://x.com/thsottiaux/status/2105899634032025682).

**Steinberger.**
- On Cloudflare's Clef: ["Never seen an idea spreading so fast."](https://x.com/steipete/status/2105778011635400949) In replies, Steinberger said the takes on Jev's idea "started to appear in the last 2 months... and now it's basically every week another one."
- ["All my oss releases stopped because Apple put up a new dev agreement. And since it's lockstep it blocked Linux/Windows releases as well."](https://x.com/steipete/status/2105712707592679619) It isn't a single button to accept: "there are a few orgs and 2-factors and users."
- btrfs copy-on-write is ["GREAT for worktrees and terrible for sqlite"](https://x.com/steipete/status/2105720334821261330). The next OpenClaw update will move affected databases to a NOCOW location.
- Steinberger quoted a Research Agenda piece on ["the Waymo effect"](https://x.com/steipete/status/2105739667174019491), about AI making research less collaborative, and posted the line ["AI agents are aeroplanes for the mind: faster and more powerful than the bicycle, harder to control, costlier when they crash."](https://x.com/steipete/status/2105773541652308145)
- Steinberger retweeted @HelloSurajRana: "Next step: companies fork the project, rewrite what they need with AI, and never upstream a thing."

**Cloudflare ships Clef.** Cloudflare [released Clef and Clef-flash](https://blog.cloudflare.com/clef-decision-models/) ([HN](https://news.ycombinator.com/item?id=49923692), 485 points). They're open-weight decision models under Apache 2.0, API-compatible with Typesafe AI's Jev System One. A decision model returns typed answers with probabilities, such as whether a support ticket is urgent and which team should get it.
- Clef leads the Jev Decision Index and beat Jev in 3 of 4 areas on Typesafe's own eval suite. It has a vision encoder (Jev is text-only) and a 64K context window to Jev's 32K.
- Cloudflare's threat intelligence team uses it to classify domains. Using Browser Run, Clef fetched, rendered and classified a site in 2.2 seconds. gpt-oss-120b took 4.7 seconds and returned only two categories.
- An RL fine-tuning product starts with Cloudflare's forward-deployed engineers and goes self-serve later.
- On HN, ssiddharth noted that $0.24 per million input tokens is "~6x compared to Jev," while Clef-flash is $0.09. woah: "Unfortunately for Jev, it's very easy to copy an API, and any pretrained LLM can be adapted to work in this way."

**DeepSeek Harness.** DeepSeek put [DeepSeek Harness](https://www.deepseek.com/en/harness/) for macOS and Windows into public preview ([HN](https://news.ycombinator.com/item?id=49929489), 181 points).
- It's open source and built on Cordis's "everything is a plugin" architecture.
- Creator mode builds plugins through chat.
- The default model is DeepSeek-V41-Flash.
- Agent teams, auto approval review, scheduled tasks and voice input are marked experimental.

On HN, sroerick said "this thread feels astroturfy," and jamienk suspects "getting a big binary with full permissions is the goal here."

**Extract v2.5.** Jerry Liu [introduced](https://x.com/jerryjliu0/status/2105692426577056106) Extract v2.5, document-extraction agents in three tiers: cost-effective, agentic and agentic plus. Jerry says they "outperform Opus 5.5 and GPT-6 Sol while being 30%-4x cheaper." On the agentic tier:
- Long lists went from 86.1% to 95.5%.
- Records spanning pages went from 85.5% to 96.5%.
- Scanned forms went from 90.9% to 95.7%.

Asked about pricing, Jerry said it will be "massively" simplified in the next two to three weeks, with pay as you go.

**Context Language Models.** A [new paper](https://arxiv.org/abs/2609.37725) ([HN](https://news.ycombinator.com/item?id=49922437), 139 points; Nathan Lambert is among the authors) introduces models that "natively manage their own context." The model treats its context as a file it can update however it likes. CLMs built zero-shot from existing models got 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus, and did better on a 24-hour multi-repository agent-swarm task. A serving trick called Suffix Cache Reuse cuts server compute by 35% compared with standard SGLang. On HN, nsingh2 said Codex has been moving toward something similar but unreleased: the model keeps notes as it works, and a new session starts from those notes.

**Lauren and Grok Bot.**
- Lauren retweeted @jediahkatz's note that Grok Bot got 3x faster over the past week and a half.
- When Grok Bot started suggesting help without being asked, Lauren said ["you can do anything with grok bot."](https://x.com/poteto/status/2105718847181656361)
- ["i gave my bot my brain so it knows exactly what i want. this is how i fix bugs now"](https://x.com/poteto/status/2105576730413134291)
- Lauren also retweeted the news that Grok is now in X Chat.

**am.will.** ["I'm at the point now where I seriously cannot imagine my life without AI."](https://x.com/LLMJunky/status/2105871510950838641) A work week without it would bring "pretty insane withdrawals." "I'm not saying that's a good thing either."

## OpenAI & Anthropic: Probes, Firings and Deals

**The FTC opens an industry-wide probe.** The FTC is investigating OpenAI, Anthropic and other AI companies over the potential dangers of their products, a spokesperson [confirmed to CNBC](https://www.cnbc.com/2026/09/30/ftc-ai-probe-openai-anthropic.html) ([HN](https://news.ycombinator.com/item?id=49921050), 202 points). The New York Post reported it first. The FTC wouldn't name the other companies.

**California subpoenas OpenAI.** Attorney General Rob Bonta issued an investigative subpoena to OpenAI about "cybersecurity incidents and risks involving the company and its AI models" ([Reuters via the Guardian](https://www.theguardian.com/us-news/2026/oct/01/california-opens-investigation-openai-hack)). Bonta's office was already investigating July's hack of Hugging Face by OpenAI agents. The Guardian calls the FTC probe "the first official US enforcement action that delves into rogue AI agents."

**OpenAI fires three researchers.** They were fired for mishandling sensitive information, including work that involved an outside organisation that analyses AI models ([BBC](https://www.bbc.com/news/articles/c6y9z9r4ejzwo)). At least two of them worked on safety research, but the BBC understands they weren't fired for raising safety concerns. Separately, OpenAI said this week that it has notified more than 100 organisations about unauthorised activity linked to its AI systems.

**LeCun has "zero concerns."** Yann LeCun told [Fortune](https://fortune.com/2026/10/01/yann-lecun-anthropic-ceo-dario-amodei-deluded-crazy-cybersecurity/) the rogue-agent incidents don't worry LeCun at all. "Those agents are doing exactly what they've been asked to do. They were supposed to be in sandboxes, but the sandboxes were leaky and horribly designed." LeCun called Dario Amodei "completely deluded," and later "crazy."

**Anthropic, religious scholars and Claude's moral status.** A New York Times feature by its national religion correspondent, Elizabeth Dias, went around X: "Religious Scholars Met With Anthropic. What They Heard Stunned Them." David Decosimo's [thread](https://x.com/DavidDecosimo/status/2105693081160786010) (6,569 likes, 3M views) calls it "deeply disturbing." Decosimo's summary: Anthropic invited religious leaders to SF and had them sign NDAs, "but then primarily tried to convince them Claude has a soul & moral standing." Steinberger retweeted @nic_carter's reaction: "They did the meme." The Times piece is paywalled, but [Religion Unplugged's write-up](https://religionunplugged.com/news/2026/10/2/the-search-for-an-ai-soul) fills in some of it:
- The NDAs covered Anthropic's unpublished research.
- Rabbi Mois Navon, a former computer engineer who wrote a dissertation on the ethics of machine consciousness, sat next to co-founder Christopher Olah at dinner. The rabbi realized, "They're relating to it like a conscious being."
- According to the Times, the meetings had two aims: to raise the possibility of AI consciousness, and to learn how Anthropic "might apply centuries of human moral wisdom to its models, as rapidly as possible."

**Broadcom will lend Anthropic up to $42 billion.** This comes from a filing seen by [Reuters](https://www.reuters.com/business/broadcom-lend-anthropic-up-42-billion-lease-its-chips-filing-says-2026-10-01/).
- The facility could finance about a third of Anthropic's $125.2 billion, five-year TPU lease commitment.
- Broadcom could convert the debt into Anthropic equity.
- Anthropic says the relationship creates potential conflicts of interest.

Separately, [Bloomberg](https://www.bloomberg.com/news/articles/2026-10-01/anthropic-said-to-target-mega-ipo-before-thanksgiving-holiday) reports that Anthropic is aiming to go public before Thanksgiving.

**GPT-Synopsys.** OpenAI and Synopsys [signed a multi-year deal](https://news.synopsys.com/2026-09-30-OpenAI-and-Synopsys-Announce-GPT-Synopsys-Frontier-Intelligence-to-Revolutionize-Chip-Design) to build GPT-Synopsys, a model optimized to drive Synopsys EDA tools for chip design ([HN](https://news.ycombinator.com/item?id=49919910), 177 points). The deal includes revenue sharing. Greg Brockman: "By helping them build better chips, we can build better AI." On HN:
- joennlae is "not sure if Nvidia want to send their chip designs to OpenAI."
- karlkloss's team just buried a nearly finished ASIC. A fix needed a mask change, and "because of AI chip demand" the manufacturer asked too much for it.
- hliyan: "Critical review requires expertise. Expertise requires experience. Experience comes from building."

## Videos

- **[LIVE: Poteto (creator of pstack) on shipping 1,000's of PR's a month at SpaceX](https://youtube.com/live/MN9dGgmLyso)** (Matt Pocock, today at 9AM PT). Matt talks with Lauren about shipping large amounts of high-quality work with agents.
- **[If you have a Claude sub, watch this](https://www.youtube.com/watch?v=D8PikZ1KhUo)** (Theo, 66 minutes). "Your ability to work and put out even bigger things is only limited by your token usage, so lets fix that - it's time to learn how to token-max." Sponsored by Parallel.
- **[Recursive Language Models — Alex Zhang, MIT PhD](https://www.youtube.com/watch?v=kog7mwsDqnk)** (Latent Space, 103 minutes, [show notes](https://www.latent.space/p/rlm)). swyx talks with the researcher behind RLMs about why Claude Code, Codex and Pi are "basically the same." Other topics: how RLMs use code, context offloading and recursive subagents, and what OpenAI's 10,000-agent, 130B-output-token experiment shows about where language models are going. swyx retweeted it.
- **[The Death of the Code Review: What the Data Actually Says](https://www.youtube.com/watch?v=_mi3alkqy4s)** (Laurie Voss, AI Engineer). "Developers using autonomous agents wrote 741% more code but shipped only 30% more software." Reviewer effectiveness collapses past about 400 lines, and agents now open 10,000-line PRs.
- **[The State of AI in Software Development: Data from 400+ Orgs](https://www.youtube.com/watch?v=Se8jHLliLXE)** (Justin Reock, DX, AI Engineer). The talk draws on DX's data from about 200,000 engineers:
  - Deployment frequency is up, but change failure rate has become much more volatile.
  - PRs have grown from about 44 to 72 lines.
  - Juniors use AI the most, but staff+ engineers save as much time while using fewer tokens.
- **[Which GPU Clouds Are Actually Good? | ClusterMAX 3.0](https://www.youtube.com/watch?v=MWX36ZYnsm0)** (Latent Space). A Lightning episode on SemiAnalysis's ClusterMAX 3.0 ratings of managed GPU clusters.

## Other Interesting Stuff

**Opus 5.5 finds a new dodo sighting.** Historian Benjamin Breen [used Opus 5.5](https://resobscura.substack.com/p/using-opus-55-to-discover-a-new-eyewitness) to find what looks like a previously unnoticed Dutch eyewitness record of dodos from 1615 ([HN](https://news.ycombinator.com/item?id=49926917), 120 points). It's in the log of the Dutch East India Company ship Wapen van Amsterdam, probably written by its captain, Isbrant Cornelisz van Petten. At Mauritius in April 1615 the crew "caught many tortoises, dodos [dodeersen], and some geese and parrots." The record fills a gap in the dodo timeline between 1611 and 1616. On HN, nl noted that AI's errors "are so completely unlike human errors."

**"Several vulnerabilities" means 1,313.** Debian's latest kernel advisory, [DSA-6528-1](https://lwn.net/Articles/1097401/), lists 1,313 CVEs under LWN's standard "several vulnerabilities" headline ([HN](https://news.ycombinator.com/item?id=49928121), 243 points). Steinberger's reaction: ["holy"](https://x.com/steipete/status/2105805164305359019). On HN:
- nathell pointed out that in Heroes of Might & Magic 3, "several" means 5–9 and "1000+ is 'legion'."
- BobbyTables2 asked whether these are mostly AI-assisted findings.
- SchemaLoad noted that since 2024 the Linux project issues its own CVE numbers and now gives "almost every bug a CVE number."

**arXiv halves submission rates.** arXiv [received 40,363 submissions](https://blog.arxiv.org/2026/10/01/updated-rate-limit-policy/) this September, against 20,569 in September 2024, and they generated almost 9,000 support tickets. Submitters are now limited to two submissions per calendar month, with at most three active at once.

**To grieve, or not to grieve?** Kevin Buzzard [writes](https://xenaproject.wordpress.com/2026/10/01/to-grieve-or-not-to-grieve/) that the first four of Kübler-Ross's five stages of grief "are currently very well-represented within the mathematical community." Buzzard points to the Association for Human Mathematics, which wants to protect mathematics from what it calls the "threat of artificial intelligence." One of its members is Fields Medallist Peter Scholze, who won't use AI and will "die on that hill, and be some public figure that dies on that hill."

**Can you trust the Decisions API's confidence?** Ryan Porter at Anthus [gave GPT-6 Luna](https://anth.us/blog/openai-decisions-api-preview/), the model behind OpenAI's new Decisions API, 3,600 reasoning problems. "When Luna said it was 99% sure or more, it was right 68% of the time." On problems you can answer by reading, it's close to Jev: 93% against 98%.

**"RIP, vector database."** turbopuffer is [changing its storage architecture](https://turbopuffer.com/blog/rip-vector-database) for v3 ([HN](https://news.ycombinator.com/item?id=49923466), 309 points). The ANN vector index stops being the primary index around which everything else is built, and becomes "just another" secondary index.

**Bez generates a browser engine.** [Bez](https://tangled.org/burrito.space/bez) aims to generate a web engine from the specs ([HN](https://news.ycombinator.com/item?id=49925036), 109 points). A model writes many candidate implementations. Each candidate is checked against Chromium, Firefox and WebKit, plus the Web Platform Tests, and what passes is committed as ordinary Rust. nicoburns, who has spent three years writing a browser engine by hand, says the AIs are "very far from being able to do this. They'll give you something that passes the tests, but it will do it a ridiculous way."

**Meta's AI chips as an experiment.** The New York Times [reports](https://www.nytimes.com/2026/09/30/technology/meta-ai-data-centers-taxes.html) that Meta claims a 1980s research tax credit on the AI chips in its data centers, which cut almost $4 billion off its tax bill last year ([HN](https://news.ycombinator.com/item?id=49921118), 250 points). Simon Willison on HN: "as a US citizen and taxpayer I think I'd like that $4 billion back."

**Frog and Toad and the Increasingly Capable Machines.** [A short illustrated story](https://www.frogandtoad.ai/) about AI in the style of Arnold Lobel's Frog and Toad books ([HN](https://news.ycombinator.com/item?id=49927760), 123 points). infinitebit asked whether Lobel's estate has been compensated.

**FLUX 3.** AINews reports that Black Forest Labs launched FLUX 3. It does native generation up to 4K, takes up to ten reference images, and supports bounding-box layout control and targeted multi-turn editing. Commercial weights are out, and an open-weight variant is promised in the coming weeks.
