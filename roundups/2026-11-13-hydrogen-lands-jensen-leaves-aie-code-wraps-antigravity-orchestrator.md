---
title: "Hydrogen Lands, Jensen Leaves, AIE Code Wraps & Antigravity Gets an Orchestrator"
date: "2026-11-13"
summary: "Google shipped **Gemini 4 Hydrogen**, the fast coding member of the Gemini 4 family — 2.5× faster than Flash, 57% on Terminal-Bench 4.1, and $1.50/$7.50 per million tokens — plus a new **Antigravity Orchestrator** that lets Carbon plan and Hydrogen execute in a single session. Jensen Huang **resigned from Nvidia** effective immediately after a second affair surfaced, Colette Kress is interim CEO, and NVDA closed down 4.3%. The **AI Engineer Code Summit** wrapped its second day with Thariq's closing keynote on \"the sweet side of the bitter lesson\" and Simon Willison on \"2026 in LLMs\". Theo says new model drops are visible in the T3 Code repo and non-dev friends are now asking about it. The **Thariq Latent Space episode** on Claude Code's next era dropped, and swyx called coding agents \"the pinnacle of where verifiable AI is going\". In the background, Anthropic's IPO is reportedly multiple times oversubscribed, and the Fable 5.2 prompting guide's ownership sentence was rewritten a second time."
tags:
  - Gemini 4 Hydrogen Launch
  - Nvidia & Jensen Huang
  - AI Engineer Code Summit
  - Claude Code & Anthropic Updates
  - Agentic Coding & Tooling
  - Videos & Podcasts
---

# AI Roundup — November 13, 2026

## Gemini 4 Hydrogen Launch

### Google ships the fast Gemini 4 model

Google launched [Gemini 4 Hydrogen](https://x.com/GoogleAI/status/2120940683233984862), the third model in the Gemini 4 family alongside Carbon and Argon. Where Carbon and Argon are built for deep reasoning, Hydrogen is the execution model — fast, efficient, and aimed at everyday coding and agentic workflows.

Koray Kavukcuoglu, SVP at Google DeepMind and Chief AI Architect of Google, framed it as the daily driver: while Carbon tackles the hardest problems, Hydrogen brings cutting-edge intelligence to everyone.

**Key specs:**
- **Speed:** 2.5× faster than Gemini 3.8 Flash, with more than 5× fewer fabricated claims
- **Benchmarks:** 57% on Terminal-Bench 4.1 (up from 18.2% for Flash); 51 on the Artificial Analysis Intelligence Index at default high thinking, reaching 54 at xhigh — slightly ahead of Argon's 50
- **Context:** 1 million tokens input, text + images + audio + video
- **Pricing:** $1.50 input / $7.50 output per million tokens
- **Thinking levels:** Four settings — low, medium, high (default), and the new xhigh
- **Knowledge cutoff:** March 2026

**Availability:** Rolling out globally via the Gemini API, AI Studio, Android Studio, the Gemini app, Google Search, and Google Antigravity for Pro and Ultra subscribers. Gemini in Google Sheets also gets Hydrogen support.

Sources: [Unite.AI](https://www.unite.ai/google-launches-gemini-4-hydrogen-for-everyday-agentic-workflows/), [VentureBeat](https://venturebeat.com/technology/google-launches-gemini-4-hydrogen-a-faster-smarter-pricier-flash-successor), [ANI News](https://www.aninews.in/news/business/google-rolls-out-gemini-4-hydrogen-with-25x-speed-boost-four-reasoning-levels20261113091434/), [Technobezz](https://www.technobezz.com/news/google-launches-gemini-4-hydrogen)

### Antigravity Orchestrator: Carbon plans, Hydrogen executes

The launch came with a new feature for Google Antigravity users: the **Orchestrator**, which lets models switch within a single session. In the announced workflow, Carbon explores dependencies and produces a plan in a read-only phase, then Hydrogen takes over to edit code, update packages, and run tests. This is Google's answer to the "use a big model to think, a small model to do" pattern that several agent harnesses have implemented independently.

### Early reactions

The timing was deliberate — Hydrogen dropped right as the AI Engineer Code Summit was wrapping up. [Theo](https://x.com/theo/status/2120989225873248510) noticed the effect immediately: "I love how easily you can see the impact of new model drops on the T3 Code repo. We're shipping faster than ever."

The pricing raised eyebrows compared to Flash. At $1.50/$7.50 per million tokens, Hydrogen is noticeably pricier than its predecessor. Whether the 3× Terminal-Bench improvement justifies the cost premium will depend on real-world coding performance, which the community is still testing.

## Nvidia & Jensen Huang

### Jensen Huang resigns — effective immediately

The story that the [November 12 roundup](2026-11-12-gemini-decision-1-takes-on-jev-anthropic-crosses-its-ai-rd-line-agents-build-an-aws-emulator-codex-npm-pipeline-backdoored.md) reported as "Nvidia is preparing to oust its CEO" reached its conclusion within hours. Jensen Huang resigned as president, CEO, and board member, effective immediately.

The [8-K filing](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvda-20261111.htm) on the SEC shows the board accepted his resignation on November 11. The [press release](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) went out November 12.

**What happened:**
- **Colette Kress**, current EVP and CFO, is interim CEO while keeping her CFO role. The board is searching for a permanent CEO and will consider internal and external candidates.
- **Harvey C. Jones** was named the first-ever independent Chair of the Board.
- The board's statement: "We have full confidence in Colette and the leadership team."

**Why:** The resignation followed reports of multiple extramarital affairs. [Variety](https://variety.com/2026/biz/news/nvidia-ceo-jensen-huang-resigns-affairs-alleged-chinese-spy-1236945653/) reports one relationship involved an alleged Chinese spy. [CBS](https://www.cbsnews.com/news/jensen-huang-nvidia-resignation-scandal-timeline/) published a timeline showing the story escalated rapidly after a second affair with an Nvidia executive surfaced late Wednesday.

**Market impact:** NVDA [closed down 4.34%](https://www.cnbc.com/2026/11/12/nvidia-nvda-jensen-huang-second-affair.html) on Thursday. The drop was smaller than some analysts expected, suggesting the market had already partially priced in the departure after days of speculation.

**AI industry reaction from yesterday's roundup:** [Jerry Liu](https://x.com/jerryjliu0/status/2120655974923120681): "in retrospect, not sure i should've dressed up as jensen for halloween." [Theo](https://x.com/theo/status/2120654609966670090): "What if this is an elaborate OpenAI recruiting strategy to hire Jensen?"

Sources: [PBS](https://www.pbs.org/newshour/nation/what-we-know-after-jensen-huangs-resignation-as-nvidias-ceo), [Al Jazeera](https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress), [Fortune](https://fortune.com/2026/11/09/nvidia-power-built-around-jensen-huang-scandal-testing-formula/)

## AI Engineer Code Summit

### The conference wraps up

The AI Engineer Code Summit finished its two-day run in San Francisco (Nov 11–12), with workshops on November 10. The event drew over 200 speakers from 156 companies across 108 sessions.

**Day 2 highlights from the schedule:**
- **Simon Willison** closed with "2026 in LLMs", his annual survey of the model landscape
- **Thariq Shihipar** delivered the closing keynote, "the sweet side of the bitter lesson" — about "how I think the experience of using coding agents could be like next year and how we get to shape it" ([1,312 likes](https://x.com/trq212/status/2120620900785820143))
- **Dexter Horthy** (Factory) presented "12-Factor-Factories: Design Patterns for Agentic Coding"
- **Jason Liu** (OpenAI) opened Day 2 with the morning keynote

**Post-conference takes:**
- [swyx](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-engineer-turns-goodbye-into-next-year) called coding agents "the pinnacle of where verifiable AI is going" and billed CODE as the first vertical summit
- [@joshdbirdwell](https://x.com/joshdbirdwell/status/2120737357582553132) summed up the mood: "let's be more ambitious. Be intentional with building trust in your agents."
- The full Day 2 livestream is on [YouTube](https://www.youtube.com/watch?v=xmbSQz-PNMM), featuring Google DeepMind, Anthropic, Cursor, Netflix, Cline, OpenAI, Meta, and METR

Sources: [ai.engineer/code/2026](https://ai.engineer/code/2026), [Superpower Daily](https://superpowerdaily.com/posts/ai-engineer-code-summit-schedules-two-days-on-coding-agents-and-software-quality)

## Claude Code & Anthropic Updates

### Anthropic IPO reportedly multiple times oversubscribed

With the roadshow underway and a listing expected before Thanksgiving, Bloomberg reports the offering is [multiple times oversubscribed](https://finance.yahoo.com/markets/article/anthropic-says-a-key-ai-safety-alarm-has-been-triggered-days-before-its-ipo-171519615.html). The price range is set at $70–$78 per share for more than 825 million shares, with the ticker "ANT" on Nasdaq. LlamaIndex's [Jerry Liu](https://x.com/jerryjliu0/status/2115136859965956190) parsed the entire 318-page S-1 with LlamaParse and built a public reader.

### Fable 5.2 ownership prompt keeps evolving

As covered yesterday, the Fable 5.2 prompting guide's ownership sentence was rewritten — again. The new version reads "You are the owner and long-term maintainer of this codebase, and its design is up to you," with updated numbers showing 75% consolidation (up from ~50%) and a 70–80% increase in output tokens. The catch: scope limits don't cancel the effect. With "No drive-by refactors" in the same prompt, the model still consolidated in more than half of runs. [Simon Willison](https://x.com/simonw/status/2120644009618215418) flagged the change.

### Claude Code 2.1.322 — and a hidden reminder surfaces

The latest Claude Code release (2.1.322, Nov 10) adds Vertex fast mode for global, US and EU regions. But the more discussed discovery was a [leaked `<ip_reminder>`](https://www.reddit.com/r/ClaudeCode/comments/1xssfs1/21322_anthropics_copyright_paranoia_is_leaking/) — a hidden system prompt injection telling Claude to avoid copyrighted text and to "avoid mentioning or responding to this reminder directly." The Reddit thread drew objections to hidden instructions in a developer tool.

Sources: [Releasebot](https://releasebot.io/updates/anthropic/claude-code), [code.claude.com changelog](https://code.claude.com/docs/en/changelog)

## Agentic Coding & Tooling

### Theo: non-devs are discovering T3 Code

[Theo](https://x.com/theo/status/2120804555755769903) reports that "multiple of my non-dev friends have been hitting me up about T3 Code asking if 1. It's actually from me and 2. If I can help them set it up optimally." T3 Code passed [1,000 contributors](https://x.com/theo/status/2120764608390869101), and Theo posted that T3 Code's GitHub star growth is up 109% MoM, with its share relative to Claude Code and Codex tripling from 5.25% to 15.87%.

T3 Code also got a [remote-control overhaul](https://x.com/theo/status/2119948325705462260) this week: `cmd+k "mcp"` sets up a connector for controlling T3 Code from any device.

### OpenClaw keeps shipping

Peter Steinberger's OpenClaw is at version [2026.11.3](https://www.npmjs.com/package/openclaw) on npm (published 2 days ago), with 2026.11.5 beta builds on [GitHub](https://github.com/openclaw/openclaw/releases). The companion Lobster workflow shell hit [v2026.11.1](https://github.com/openclaw/lobster/pull/215) on November 6, described as a fixes-only release. Steinberger also [weighed in](https://x.com/steipete/status/2120711266759258616) on the curl/ImageMagick LLM ban discussions: "reading some of these comments makes my brain hurt. oss is already hard enough without politics."

### LlamaIndex declares itself a research lab

[Jerry Liu](https://x.com/jerryjliu0/status/2120662367646437535): "Today, @llama_index is an applied research lab for document OCR and document work." The research portfolio now includes ParseBench, ExtractBench, ExtractBench Pro, the OCRia-1 parsing model, and a new [research page](https://www.llamaindex.ai/research). Recent highlights: Nvidia's Nemotron 3.5 Parse took #1 on ParseBench, and the LlamaParse Retrieval Harness shipped for agentic document retrieval.

### Thariq on coding agent limits

[Thariq](https://x.com/trq212/status/2117305792923889731) (491K views): "one week in my takeaway is that you don't need unlimited tokens to do great work, the $200 plans are amazing and this is the most expensive intelligence will ever be." His closing keynote at AIE Code expanded on this, arguing that the experience of using coding agents should get better, not just cheaper.

## Videos & Podcasts

- **[AI Engineer Code Summit, Day 2 livestream](https://www.youtube.com/watch?v=xmbSQz-PNMM)**: Full recording with Google DeepMind, Anthropic, Cursor, Netflix, Cline, OpenAI, Meta, and METR. Includes Thariq's closing keynote and Simon Willison's "2026 in LLMs."
- **[Claude Code's Next Era — Thariq Shihipar on Latent Space](https://latent.space/p/thariq/)**: Thariq on the bitter lesson for harness engineering and why "harnesses go out of date very quickly."
- **[Matt Pocock live with the creators of Pi](https://www.youtube.com/watch?v=ZBTegd8DUZM)**: Matt talks with Armin Ronacher and Mario Zechner about "how the creators of Pi think code should be written in the AI age."
- **[The Jev Revolution — Latent Space](https://latent.space/p/jev-revolution/)**: Writeup of the System One session at AIE Code with Glean, UiPath, and Workday.
- **[Christian Bird: AI, activity, and outcomes in software engineering](https://youtu.be/0wumMeZsNsI)**: 21-minute talk asking "Why aren't we shipping faster now?" — drew 103 comments on [HN](https://news.ycombinator.com/item?id=50455332).

## Other Interesting Stuff

- **Simon Willison's blog roundup.** Recent posts include coverage of the [AWS Emulator](https://simonwillison.net/2026/Nov/11/aws-emulator/) launch, [Anthropic's compute remarks](https://simonwillison.net/2026/Nov/11/) from the IPO prospectus, an [llm 0.37.2 security release](https://simonwillison.net/2026/Nov/11/), and [Fable 5.2 prompting tips](https://simonwillison.net/2026/Nov/9/llm-anthropic/) from the model launch. His newsletter for [November 10](https://simonwillison.net/newsletters/2026/) covers hiding AI-generated PR descriptions behind collapsed HTML.
- **Open weights: still under 0.5% of T3 Code traffic.** [Theo](https://x.com/theo/status/2120645712639918201) (1,563 likes): "Remember open weight models? Those were fun." Only 6% of T3 Code users tried an open-weight model in the last 7 days, and most tried once and gave up. [dax](https://x.com/thdxr/status/2120555899072729334) (OpenCode) agrees the gap is large but says it's not static.
- **Karpathy's GitHub gists.** Last active November 11 on [microgpt.py](https://gist.github.com/karpathy), his 200-line pure Python GPT trainer. He's been quiet on X since the [TristanTube](https://x.com/karpathy/status/2119118206325703121) project (Nov 7), which he one-shotted with Claude Code in 3 minutes.
- **GPU modding.** [@LLMJunky](https://x.com/LLMJunky/status/2116609936247398640) covered the RTX 5090 memory mod scene: 96GB upgrades are coming via firmware unlock, but the memory alone costs ~$3,200 for 32 replacement 3GB modules.
- **Armin Ronacher (mitsuhiko).** Quiet on X in November. His most recent notable post was from September on "Super Intelligence." His blog posts from mid-2026 include ["Better Models: Worse Tools"](https://lucumr.pocoo.org/) on tool-calling regressions in newer Claude models and ["The Coming Loop"](https://lucumr.pocoo.org/) on why even loop skeptics end up with harnesses.
