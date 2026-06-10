---
title: "Fable Drops, Loops vs Queues, and Odysseus Rises"
date: "2026-06-10"
summary: "Claude Fable 5 launches and dominates the conversation — Karpathy calls it a step change, Simon Willison calls it a beast, Theo burns through his quota in hours, and Boris Cherny says he doesn't prompt Claude anymore. Matt Pocock argues agents need queues not loops, Mitsuhiko ships Fable support in pi and gets a WWDC shoutout, swyx highlights PewDiePie's Odysseus as proof that personal AI agents have arrived, and Jerry Liu finds Fable thinks document parsing is beneath it."
tags:
  - Claude Fable 5
  - Agentic Coding
  - Loop Engineering
  - Personal AI Agents
  - Benchmarks
---

# AI Roundup — June 10, 2026

## Agentic & Code AI

### Claude Fable 5 Drops — The Biggest Story of the Day

Anthropic released [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) on June 9 — a Mythos-class model "made safe for general use." It's state-of-the-art on nearly all benchmarks, with a 1M token context window, 128K max output, and pricing at $10/$50 per million tokens (2x Opus 4.8). Included free on Pro/Max/Team plans until June 22.

Here's how the accounts reacted:

**Andrej Karpathy** ([tweet, 1.6M views](https://x.com/karpathy/status/2064409694761054332)) called it "a major-version-bump-deserving step change forward," comparing it to the Claude 4.5 leap last November. He noted it peaks especially for "long problem-solving sessions on very difficult problems" and admitted "it's never felt this tempting to stop looking at the code at all." He also conceded the safety classifiers are "a little too trigger happy for launch." Karpathy recently [joined Anthropic](https://x.com/karpathy/status/2056753169888334312) (May 19) to work on pretraining research using Claude itself.

**Simon Willison** ([blog post](https://simonwillison.net/2026/Jun/9/claude-fable-5/), [tweet](https://x.com/simonw/status/2064501565738930433)) published detailed initial impressions: "something of a beast — slow, expensive and capable of crunching through pretty much everything I threw at it." He tested it on complex Datasette Agent work where Fable not only solved the problem but identified and implemented four issues in his underlying LLM library to support advanced pause-resume mechanisms. He also posted [pelican benchmarks per thinking-effort level with costs](https://x.com/simonw/status/2064502387952570853) and wrote a [TIL on tracking Fable 5 spending](https://til.simonwillison.net/llms/agentsview-custom-model-price) via agentsview before it lands in their pricing database.

**Theo (t3.gg)** put out a hands-on video: ["Fable 5 makes GPT 5.5 feel like a 'toy'"](https://www.youtube.com/watch?v=ir93tUo6jFw) — testing Fable against GPT-5.5, Codex, and Claude Code on his hardest coding prompts. He [asked his audience how Fable feels](https://x.com/theo/status/2064483335318213071) (641 replies) — consensus: real capability gains, multiple reports of it fixing bugs GPT-5.5 and Opus 4.8 couldn't, but it's slow and a "token monster." He [burned through his usage in hours](https://x.com/theo/status/2064442054772716020) and cheered when [Anthropic reset rate limits](https://x.com/theo/status/2064464102345626087) to celebrate the launch.

**Boris Cherny** (Claude Code creator) ([tweet, 535K views](https://x.com/bcherny/status/2064431111154053187)) said it's the biggest step up since Opus 4.5: "Claude has stepped up from being a coding agent to a thought and design partner. Fable has judgement, taste, and dimensionality." His key anecdote: Fable debugs methodically — taking measurements, adding logs, verifying the fix before declaring victory — with nothing in Claude Code's prompting telling it to do that. He [acknowledged the trigger-happy classifiers](https://x.com/bcherny/status/2064437836879929652) and said they're working on improving them.

**Thariq (@trq212)** from Anthropic [agreed](https://x.com/trq212/status/2064437561930682672): "it's time to be more ambitious." He's currently [at Code w/ Claude Tokyo](https://x.com/trq212/status/2064521202622960058), while a Claude Fable 5 Build Day in SF is [announced for June 13](https://x.com/ClaudeDevs/status/2064453497005978031) with a $150K credits prize pool.

**Mitsuhiko (Armin Ronacher)** [linked a video of the Fable project lead](https://x.com/mitsuhiko/status/2064425248892637228) ([YouTube](https://youtu.be/FutFcFhZ3E0)) while noting Anthropic has "a tendency and track record to over promise."

**Jerry Liu** (LlamaIndex) [shared ParseBench results](https://x.com/jerryjliu0/status/2064519456966205905): Fable crushes reasoning-heavy benchmarks but on document understanding it's roughly equivalent to Gemini 3 Flash at 10-15x the token cost. When asked, the model said it dislikes tasks "where the request is fully specified and the answer is fully known." He also quipped about the June 22 deadline: ["We've got 13 days to burn as much tokens as humanly possible on Claude Max plans"](https://x.com/jerryjliu0/status/2064408259184964036).

**swyx** [analyzed FrontierCode results](https://x.com/swyx/status/2064396531231510931): Fable is the first model whose effort-scaling actually works — both Opus 4.8 and GPT-5.5 fail to meaningfully scale with effort on FC Diamond, but Mythos/Fable post-training converts test-time compute into solving multi-hour-equivalent problems. He noted it's been just [34 days between Anthropic's NVIDIA deal and a Mythos-class GA](https://x.com/swyx/status/2064421542503797186) and [spotted the arbitrage](https://x.com/swyx/status/2064492823781789969): "insane amounts of alpha in telling Claude Code to 'review my code for issues' on Fable rn while it is not pay per use."

---

### Boris Cherny: "I Don't Prompt Claude Anymore"

At the [Fortune Brainstorm Tech](https://fortune.com/2026/06/08/anthropics-boris-cherny-creator-of-claude-code-says-there-are-days-he-manages-tens-of-thousands-of-ai-agents-at-once/) conference in Aspen (June 8), Boris Cherny revealed he hasn't handwritten a line of code in eight months. "This morning I was managing maybe a few hundred. Some days it's thousands, or tens of thousands" of AI agents. His workflow has shifted from manual prompting to writing autonomous loops: "I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops."

He also [landed nested subagent support in Claude Code](https://x.com/bcherny/status/2064327225504403752) (413K views) — agents kicking off agents to manage context, capped at depth 5. His experiment: add `fork:true` to a skill's frontmatter so it runs in its own context window. Sharpest reply: each subagent should return "a tiny receipt: what it tried, what changed, what it's unsure about — otherwise the parent agent inherits a mystery casserole."

Sources: [Fortune article](https://fortune.com/2026/06/08/anthropics-boris-cherny-creator-of-claude-code-says-there-are-days-he-manages-tens-of-thousands-of-ai-agents-at-once/), [Digg summary](https://digg.com/ai/v1igoqs7), [Addy Osmani on Loop Engineering](https://addyosmani.com/blog/loop-engineering/)

---

### Matt Pocock: Agents Need Queues, Not Loops

[Matt Pocock argued](https://x.com/mattpocockuk/status/2064339163155976491) (186K views): "Everyone's banging on about loops, when they should be thinking about queues." His model: your issue tracker is a queue of tasks; agents pick tasks off it and completed work enters a different queue — human review. He documented a [full-day experiment](https://x.com/mattpocockuk/status/2064328721230647608) using `/to-prd` → `/goal` with `autoCompactWindow: 180000` to stay in the "smart zone."

Best reply: [the bottleneck doesn't go away, it moves to the human-review queue](https://x.com/4nanei/status/2064389485379346732) that drains at the speed of one person reading diffs.

Separately, Pocock's `/teach` Claude skill [went viral](https://x.com/itsolelehmann/status/2064315451631681634) — a private AI tutor that builds a customized curriculum around you, drawing on his 10 years of teaching experience. Available via his [skills repo](https://github.com/mattpocock/skills).

---

### Mitsuhiko: pi Ships Fable Support, Gets WWDC Shoutout

Armin Ronacher [announced pi 0.79.1](https://x.com/mitsuhiko/status/2064461118680998034) with Fable support, a less annoying trust prompt, and more ([release notes](https://pi.dev/news/releases/0.79.1)). Fun milestone: [pi got mentioned in a WWDC 2026 talk](https://x.com/mitsuhiko/status/2064106253337416135) ([Apple video](https://developer.apple.com/videos/play/wwdc2026/232/)).

He also published a blog post ["Communities of Not"](https://lucumr.pocoo.org/2026/6/6/communities-of-not/) (June 6) exploring how communities that form around opposition (anti-AI, childfree, anti-car, etc.) can turn from constructive spaces about autonomy and quality into toxic identity-policing — relevant to the current AI discourse split.

---

### Karpathy at Sequoia Ascent: LLMs Are More Than a Coding Speedup

In a recent [fireside chat at Sequoia Ascent 2026](https://x.com/karpathy/status/2049903821095354523) ([blog summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/)), Karpathy pushed three themes:

1. **menugen**: Some apps should stop existing as apps. Take a menu photo, give it to a multimodal model, overlay dish images onto the menu — one prompt, one output, the entire app architecture disappears.
2. **Install .md, not .sh**: Why write complex bash scripts when you can write instructions in words and say "just show this to your LLM"?
3. **LLM knowledge bases**: Computation over unstructured data from arbitrary sources in arbitrary formats — impossible with classical code.

His core message: "LLMs automate forms of information processing that were not previously programmable."

---

## Other Notable Discussions

### swyx: PewDiePie's Odysseus and the Personal AI Shift

swyx [zoomed out on the vibe shift](https://x.com/swyx/status/2061256096719970337): in Feb 2025, Soumith Chintala dreamed of personal, local, private agents and most people didn't believe him. Now PewDiePie has released [Odysseus](https://github.com/pewdiepie-archdaemon/odysseus) — a self-hosted AI workspace with chat, agents, research, email, calendar, notes, and 270+ model support. Built on Python/FastAPI/SQLite, it hit 44K GitHub stars in days.

Sources: [Odysseus site](https://pewdiepie-archdaemon.github.io/odysseus/), [DEV Community writeup](https://dev.to/jenueldev/pewdiepie-built-an-open-source-ai-workspace-and-the-point-is-bigger-than-the-hype-579m), [Gizmodo](https://gizmodo.com/pewdiepie-is-here-to-offer-you-privacy-assurances-in-the-age-of-ai-2000765812)

---

### Uber Caps AI Coding Spend at $1,500/Month

[Uber capped employee AI spending](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/) at $1,500/month per agentic coding tool (Claude Code, Cursor, etc.) after blowing through their entire annual AI budget in four months. Each tool's budget is independent. Simon Willison [commented on this](https://simonwillison.net/2026/Jun/3/uber-caps-usage/) as a rational policy response.

---

### Theo: State of AI for Web Devs 2026

The [State of AI 2026 survey](https://2026.stateofai.dev/en-US) collected data from 7,258 developers. The proportion of AI-generated code jumped from 28% average in 2025 to **54% in 2026**, with the 75%+ segment seeing the highest growth. Theo also shared a [critical take on GPT-5.5](https://finance.biggo.com/podcast/7b0eaafb7d564d73) — calling it the "smartest ever made" while flagging persistent context window failures, frequent hallucinations, and excessive dependency on strict prompting.

---

### Jerry Liu: Agent Filesystems Are the New RAG

Beyond the Fable benchmarking, Jerry Liu argued that [agent filesystems are the new RAG](https://x.com/jerryjliu0/status/2064212493321543829) and shared [LiteParse](https://github.com/run-llama/liteparse), a Rust-based document parser that runs so fast Fable "doesn't believe it's real." He's also organizing a massive [pickleball tournament](https://www.ai.engineer/worldsfair/2026) at the AI Engineer World Fair (June 29 - July 2, SF) co-hosted by LlamaIndex, Braintrust, Cursor, Modal, and others.

---

### OpenClaw & Peter Steinberger

Peter Steinberger ([@steipete](https://x.com/steipete)) is now at OpenAI working on agents, while [OpenClaw](https://github.com/openclaw) — his open-source AI agent with 346K+ GitHub stars — moves to a foundation. A [security update via steipete RT](https://x.com/joshavant/status/2064447466078875653): enterprises can now register an executable that vets every plugin/skill before install — a gatekeeper hook for the agent plugin supply chain. He's also announced as a [speaker at Y Combinator's Startup School 2026](https://x.com/ycombinator/status/2062942526856941994).

---

### OpenCV 5 Released

Via [LLMJunky RT](https://x.com/mfranz_on/status/2064379347478163704): OpenCV 5 is the biggest update in years — new DNN engine with 80%+ ONNX coverage, built-in LLM/VLM support, and performance that often beats ONNX Runtime.

---

*Accounts scanned: [@mattpocockuk](https://x.com/mattpocockuk), [@theo](https://x.com/theo), [@trq212](https://x.com/trq212), [@LLMJunky](https://x.com/LLMJunky), [@mitsuhiko](https://x.com/mitsuhiko), [@bcherny](https://x.com/bcherny), [@steipete](https://x.com/steipete), [@swyx](https://x.com/swyx), [@simonw](https://x.com/simonw), [@karpathy](https://x.com/karpathy), [@jerryjliu0](https://x.com/jerryjliu0)*
