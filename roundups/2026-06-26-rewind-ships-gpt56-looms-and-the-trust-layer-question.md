---
title: "/rewind Ships, GPT-5.6 Looms & the Trust Layer Question"
date: "2026-06-26"
summary: "Claude Code shipped **/rewind** in v2.1.191 — undo /clear, restore prior context, ~37% CPU savings from coalesced streaming — landing the same week the **Skill Hell** and **no-op wars** are still raging in Pocock's replies. **GPT-5.6 is now at 83% on Polymarket** for a pre-June-30 drop, with leaked specs pointing at a 1.5M-token context window, stronger agentic coding, and Playwright-style browser testing baked in. The **Claude Tag aftermath** entered its trust-layer phase — the excitement-to-skepticism arc landed on the hard question: *who owns the context?* Meanwhile **Sakana Fugu** shipped a multi-agent orchestrator that routes across frontier models, LLMJunky called the early results 'not great,' and **Simon Willison** quietly turned Mozilla's browser-compat-data into a SQLite database with a Claude Code script. The loop debate kept maturing — **Ronacher's 'The Coming Loop'** post is still circulating, **Mitchell Hashimoto's agent-psychosis warning** ($350, 4 hours, 75x worse than hand-written) is the canonical counterpoint, and Pocock shipped a new **/loop-me** skill to help you find what to delegate."
tags:
  - Claude Code /rewind & v2.1.191
  - GPT-5.6 Watch
  - Claude Tag Day 3 — The Trust Layer Question
  - Loop Engineering Matures — Psychosis, Verifiers & /loop-me
  - Also Worth a Look
---

# AI Roundup — June 26, 2026

## Claude Code /rewind & v2.1.191

Claude Code v2.1.191 shipped on June 25 with a headline feature that's been requested since the early agent days: **/rewind**. The command lets you roll back both code and conversation to any earlier checkpoint — undo a `/clear`, restore prior context, or just back out of a bad turn. Before every change Claude makes, it saves a snapshot; `/rewind` puts everything back. You can also hover any prior message and click "Rewind to here," choosing whether to restore code, conversation, or both. The rewind menu also adds **"Summarize up to here"** for context compression without losing recent turns.

Beyond /rewind, the release includes **~37% CPU savings** from coalesced streaming updates, a fix for background agents restarting after stop, and patched comma-separated hook matchers. Quiet but meaningful infrastructure work for anyone running long sessions or overnight loops.

- [Claude Code changelog](https://code.claude.com/docs/en/whats-new)
- [Claude Code releases on GitHub](https://github.com/anthropics/claude-code/releases)

## GPT-5.6 Watch

The rumor mill is running hot. **Polymarket prices a GPT-5.6 release before June 30 at 83%**, and the leaked spec sheet — if you trust it — reads like OpenAI's answer to the Fable-shaped hole in the market:

- **1.5M–2M token context window** (up from 1M in GPT-5.5)
- Stronger agentic coding and reasoning allocation
- Improved frontend/UI generation and SVG output
- **Playwright-style browser testing** integrated more directly into ChatGPT
- Faster, cheaper agents via Codex UltraFast
- Three variants rumored: Mini, Pro, and Long Context

OpenAI has not officially announced anything, and leaked model observations from Pro subscribers are the main evidence. But the timing — right as Claude Tag dominates the conversation and Fable remains export-banned — would be strategic.

- [GPT-5.6 rumors roundup — eWeek](https://www.eweek.com/news/gpt-5-6-openai-coding-agent-rumors-neuron/)
- [GPT-5.6 rumored specs — Windows News](https://windowsnews.ai/article/gpt-56-rumored-for-june-22-launch-with-developer-focused-mini-pro-and-long-context-variants.428724)

## Claude Tag Day 3 — The Trust Layer Question

Claude Tag launched June 23 and dominated the timeline for two days straight. By day 3, the conversation has shifted from "wow, Claude is in my Slack" to the harder question: **who owns the context?**

The excitement arc is well-documented — [Karpathy calling it "the 3rd major redesign of LLM UIUX"](https://x.com/karpathy/status/2069547676849557725) (2.15M views), [Cherny's 65% internal code stat](https://x.com/bcherny/status/2069474683372839253), [Thariq's best-practices thread](https://x.com/trq212/status/2069474335656694003) that even [Slack's official account called "a masterclass."](https://x.com/SlackHQ/status/2069506088186061019) But the skepticism has crystallized around a few threads:

**The context-ownership worry.** [Alex Milenkovic's framing](https://x.com/CuriaCEO/status/2069550652037181937) captured it: "It's an entity whose values, culture, and taste are set by Anthropic and **intentionally cannot be steered by the user anymore.** A coworker you can't influence through corporate pressure, social pressure, or hierarchy pressure." This became the seed of a [DEV Community post titled "Everyone's Excited About Claude Tag. Nobody's Built the Trust Layer"](https://dev.to/dannwaneri/everyones-excited-about-claude-tag-nobodys-built-the-trust-layer-1ohp) and a [Substack piece arguing "The Real Claude Tag Question Is Context Ownership."](https://alphasignalai.substack.com/p/the-real-claude-tag-question-is-context)

**The OpenClaw comparison won't die.** The "this is just OpenClaw with a logo" line continued to circulate, with open-source advocates pushing back on locking company memory into a single lab. [Karpathy's rebuttal](https://x.com/karpathy/status/2069601818540392669) — "it's not even OpenClaw adjacent, it's a different way of working entirely… **I work from Slack now**" — was quoted as much for its conviction as for the fact that he now works at Anthropic.

**The infrastructure strain.** The launch coincided with [elevated error rates across Claude models on June 23](https://status.claude.com/), with Anthropic acknowledging demand growth outpacing infrastructure. The bill anxiety from [Eric Pate](https://x.com/Eric_P8/status/2069561427409400007) — "We're gonna see token bills like you people have never seen" — hasn't gone away.

**Thariq interview incoming.** [Peter Yang announced](https://x.com/petergyang/status/2069956492900610435) he's interviewing Thariq on Friday to walk through his Claude Code setup, `/goal`, `/loop`, and dynamic workflows — worth watching for the next iteration of the proactive-agent playbook.

## Loop Engineering Matures — Psychosis, Verifiers & /loop-me

The loop conversation has moved past the "should agents run unattended?" stage into three distinct camps: the builders, the skeptics, and the trust-engineers.

**The builders.** [Boris Cherny at WorkOS Acquired Unplugged](https://fourweekmba.com/claude-code-loops-boris-cherny-next-paradigm/) (June 2): "Every night I have hundreds, sometimes thousands of agents running in loops for 5, 10, 20 hours straight. **This is just how engineering is done now.**" [Sam Willis's `/goal make postgres multithreaded`](https://x.com/samwillis/status/2069147163255312392) — 1K commits, 124K lines, 786 files, 10 days and still running — remains the flex receipt of the month.

**The skeptics.** [Mitchell Hashimoto's "agent psychosis" thread](https://x.com/mitchellh/status/2060088112257372610) is the canonical counterpoint. He ran an agent loop optimizing a renderer for 4 hours ($350 in tokens), getting frame times from 88ms to 2ms. Sounds great — except his hand-written renderer does the same work in **0.020ms with zero allocations**, roughly 75x better. His point: "if you don't understand the system, you'll accept the agent result as incredible." He followed up with a broader warning: ["I strongly believe there are entire companies right now under heavy AI psychosis."](https://x.com/mitchellh/status/2055380239711457578) [Gergely Orosz amplified it](https://x.com/GergelyOrosz/status/2060279326134747518): "Sensible voices are (finally) breaking through."

**The trust-engineers.** The middle path — loops are real, but only with verification — is where the consensus is forming. [lauren/poteto's "Loops You Can Trust" post](https://x.com/poteto/status/2069824386283319343) (boosted by Lee Robinson) anchored the framing: split the agent that writes from the agent that checks, because a model grading its own work is too forgiving. The refrain echoing across the timeline: **"Never loop without verifiers."** [swyx](https://x.com/swyx/status/2069937175899275475) pointed at the infrastructure consequence: "we are going to have to **Rebuild So. Much. Infra. for the age of Software Factories.**"

**Ronacher's "The Coming Loop."** [Armin Ronacher published a long-form post](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) (June 23) on loops, harnesses, and why even loop skeptics may end up with them. He's also maintaining a [GitHub repo of agent prompts for agentic loops](https://github.com/mitsuhiko/agent-prompts). His own agent "Gramps" keeps introducing regressions, and he [conceded with a wink](https://x.com/mitsuhiko/status/2069543605451014433): "Gramps correctly identified that I'm not chill enough on regressions ;)"

**Pocock's /loop-me.** Matt Pocock shipped a new skill, [/loop-me](https://github.com/mattpocock/skills/blob/main/skills/in-progress/loop-me/SKILL.md), that interviews you about your work and finds opportunities for delegating to AI. It's the logical next step after his Skill Hell thread — stop writing bloated skills, start identifying what actually should loop.

## Also Worth a Look

- **Sakana Fugu launched June 22** — a multi-agent orchestrator from Tokyo-based Sakana AI that routes tasks across an "agent pool" of frontier models, grounded in two ICLR 2026 papers (TRINITY and the Conductor). Two tiers: Fugu for everyday tasks, Fugu Ultra for accuracy-critical work. [LLMJunky's early review was blunt](https://x.com/SakanaAILabs/status/2068862344684581023): a ThreeJS coding task came back "notably worse than GPT 5.5" and needed seven or eight fix rounds. "Early impressions…not great." — [Sakana Fugu release](https://sakana.ai/fugu-release/)

- **Simon Willison turned Mozilla's browser-compat-data into a SQLite database.** Inspired by Mozilla's new MDN MCP service, he wrote a [Claude Code for web (Opus 4.8) generated script](https://simonwillison.net/2026/Jun/24/browser-compat-db/) using sqlite-utils to convert the entire mdn/browser-compat-data repo into a ~66MB SQLite file, downloadable via GitHub CDN with open CORS headers. Explore it with Datasette Lite. He also flagged a friction point with cloud agents: ["Claude Code for web just started saying 'GitHub is blocked by egress policy'"](https://x.com/simonw/status/2069856334305230902) — a growing pain as sandboxes tighten.

- **ParseBench at CVPR 2026.** [Jerry Liu presented ParseBench](https://x.com/llama_index/status/2062525204262236266), LlamaIndex's document-parsing benchmark: ~2,000 human-verified enterprise document pages, 167K+ test rules, evaluating across tables, charts, content faithfulness, semantic formatting, and visual grounding. His argument: "an agent can't act on a document it can't correctly read." He also benchmarked [Mistral OCR](https://x.com/jerryjliu0/status/2069825393201483849), finding it "wins on semantic formatting" and, with annotation features for charts, lands "ahead of GPT-5.5 and just behind Gemini 3.1 Pro." — [ParseBench on GitHub](https://github.com/run-llama/ParseBench)

- **Theo on Google and SpaceX.** [Theo](https://x.com/theo/status/2069573191182500257) continued dunking on Google ("can't help but snatch defeat from the jaws of victory") while needling Anthropic over the still-unresolved Fable export ban: ["Okay but seriously, where the hell is Fable?"](https://x.com/theo/status/2069951171784269947) His SpaceX one-liner: ["SpaceX is worth approximately 2,143x Figma right now."](https://x.com/theo/status/2070023803204407416)

- **AI adoption by the numbers.** A Black Duck Security study found **97% of developers now use AI coding tools**, but only one-third have full governance frameworks. GitHub Copilot leads at 83% adoption; Claude Code has reached 63% among respondents. The gap between adoption and governance is the story.

- **Lee Robinson at Cursor.** [Robinson's move from Vercel to Cursor's ML team](https://x.com/leerob/status/2069775531831161063) (6.7K likes) is still generating discussion. His explainer of what "improve model personality" means — SFT for style, RL for behavior nudging, RLHF for preference training, "taxing" the model for overuse of bold text — is the clearest plain-English pass on post-training published this week. GLM-5.2 is now [live in Cursor via Fireworks](https://x.com/leerob/status/2069904679551611080).
