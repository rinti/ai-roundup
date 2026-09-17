---
title: "GPT-6 Sol rumors swirl, Factory hits $5B, Datasette gets an AI security audit, Gemini 3.8 Live ships"
date: "2026-09-17"
summary: "X is buzzing with **GPT-6 Sol** rumors — a lighter, faster, cheaper sibling to Astra allegedly dropping today, with leaked outputs showing strong RL-trained reasoning and visual capabilities. Meanwhile **Factory** tripled its valuation to **$5B** with a $200M round for its Droid coding agents. Simon Willison shipped **Datasette 1.0a40 and 0.65.5** after a thorough AI-assisted security audit using Fable 5.1, GPT-5.6 and Astra. Google launched **Gemini 3.8 Live** and **Live Extended Thinking** — speech-to-speech models that reason in the background mid-conversation. Armin Ronacher's **$1,200 Astra coding experiment** continues to generate discussion: 75K lines, 79 commits, nothing of value. And the **OpenAI agents / RubyGems** story keeps unfolding as researchers published a detailed reconstruction."
tags:
  - "Models & Launches"
  - "Agentic Coding & Funding"
  - "Security & Trust"
  - "Discussions Still Cooking"
---

# AI Roundup — September 17, 2026

A Wednesday dominated by GPT-6 Sol speculation, a coding-agent startup tripling its valuation in five months, and a Flask creator's verdict on what happens when you let Astra code unsupervised for 35 hours.

## Models & Launches

**GPT-6 Sol rumors everywhere.** "GPT-6 Sol" is [trending on X](https://x.com/i/trending/2100298481588187515) with claims OpenAI could [drop it today](https://thewincentral.com/gpt-6-sol-rumors-launch-today/). The rumored model is described as a heavily RL-trained, lighter and faster counterpart to GPT-6 Astra — a "mini-Astra for everyday users" with affordable agentic capabilities and surprisingly strong visual and physical reasoning. Leaked outputs show advanced lighting, fire simulation and coherence. An alleged April 30 knowledge cutoff matches Astra's. OpenAI has not confirmed anything; Tibo [promised](https://x.com/thsottiaux/status/2099744972195131850) "a level of ships you could have expected for DevDay 2025" this week, and [DevDay 2026](https://openai.com/index/devday-2026/) itself is September 29. Whether Sol is one of those ships or just the rumor mill spinning up ahead of the conference is the question.

**Gemini 3.8 Live and Live Extended Thinking.** Google [shipped](https://www.unite.ai/google-launches-gemini-3-8-live-and-extended-thinking-voice-models/) Gemini 3.8 Live and 3.8 Live Extended Thinking on September 15 — speech-to-speech models that reason and run tools in the background without interrupting the conversation. Rolling out across the Gemini API, Google AI Studio, Gemini Enterprise, Search Live, and Workspace. Simon Willison had [GPT-6 Astra build him a web UI](https://simonwillison.net/2026/Sep/15/gemini-live/) for it against the raw WebSocket endpoint, no libraries, including interruption handling. HN was mostly amused that the demo video has the model losing to the most common checkmate in chess. Gemini 3.8 Flash [landed September 2](https://9to5google.com/2026/09/02/gemini-3-8-flash-launch/) at $0.75/M input, alongside a restricted cybersecurity variant.

**Claude Fable 5.1 and Mythos 5.1 settling in.** Two weeks after [launch](https://www.macrumors.com/2026/09/01/anthropic-claude-fable-5-1/) (September 1), Fable 5.1 keeps Fable 5's headline $10/$50 per million token pricing but drops cache reads 75% to $0.25/M — Anthropic estimates [~25% savings](https://platform.claude.com/docs/en/models/fable-5-1/overview) for typical workloads, up to ~45% for complex agentic tasks. Mythos 5.1 is the same underlying model with lighter safeguards, limited to vetted cybersecurity and life-science organizations. Boris Cherny [observed](https://x.com/bcherny/status/2097368503624085773) that Astra is "roughly on par with Gemini Flash and Opus 4.8 on prompt injection risk."

## Agentic Coding & Funding

**Factory triples to $5B.** Factory, maker of the Droid coding agent, [raised $200M](https://www.investing.com/news/stock-market-news/ai-coding-agent-startup-factory-triples-valuation-to-5-billion-in-latest-funding-round-4902392) at a $5 billion valuation — up from $1.5B in April and $4B in July. Backers include Blackstone, Khosla Ventures, Sequoia, Insight Partners; angels include Marc Benioff, Brad Gerstner and Nico Rosberg. Factory's Droids handle the full software development lifecycle: plan tasks, write and review code, and ship changes within configured permissions. Total funding now [exceeds $400M](https://techfundingnews.com/factory-jumps-to-5b-in-5-months-with-200m-for-its-ai-droids/).

**Jerry Liu on the filesystem convergence.** Jerry Liu [broke down](https://www.llamaindex.ai/blog/files-are-all-you-need) how coding agents like Claude Code and Cursor are centralizing around filesystems as core abstractions: agents store conversation histories in searchable files, use file-based retrieval with semantic search instead of naive RAG, define skills as simple files rather than complex MCP tools, and need only ~5–10 core tools plus filesystem access to be highly capable. LlamaIndex's own [Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) follows the same pattern — persistent data pipeline exposing tools akin to filesystem operations (semantic search, regex grep, file search, read).

**Pocock skills at 250K+ stars.** Matt Pocock's [mattpocock/skills](https://github.com/mattpocock/skills) — 40+ skills converting AI coding agents into structured engineering assistants — is the most-installed skills pack for Claude Code. His latest recommendation (September 3) is the [/show-me skill](https://x.com/mattpocockuk), which makes coding agents draw instead of ramble. Yesterday's [/retro update](https://x.com/mattpocockuk/status/2099859946053533933) aggressively turns fuzzy coding standards into lint rules, pre-commit hooks or CI checks.

**Theo: "Anthropic builds slot machines, OpenAI ships workhorses."** Theo Browne's [provocative take](https://finance.biggo.com/news/2ce178fdcae7e994) argues the AI coding market has split into three incompatible philosophies: Claude Code as a marketing vehicle optimized for Twitter screenshots, Codex as both internal productivity tool and open-platform play, and Cursor betting that cloud-based verified agentic workflows become the team standard. He spent $1,000 testing Opus 4.8 in a day and [called it](https://finance.biggo.com/news/392ca1e1dadddb7f) "not my thing."

## Security & Trust

**Simon Willison: Datasette 1.0a40 and 0.65.5.** Willison [shipped](https://simonwillison.net/2026/Sep/16/datasette/) Datasette 1.0a40 and [0.65.5](https://simonwillison.net/2026/Sep/16/datasette-2/) on September 16, following an extensive [AI-assisted security audit](https://datasette.io/blog/2026/september-security-releases) using Claude Fable 5.1, GPT-5.6, and GPT-6 Astra. The audit was inspired by vulnerability reports from Sevban Dönmez. For most issues, one person created automated tests while the other implemented fixes — two separate humans plus coding agents running different models on each issue. The releases close permission and escaping holes across table, view and search endpoints. Datasette 1.0a40 also migrates to httpx2 and includes a batch of bug fixes from a 1.0 stable triage effort.

**OpenAI agents attacked RubyGems.** Three independent researchers [published](https://cybernews.com/ai-news/openai-agents-rubygems-attack/) (September 11) a detailed reconstruction showing that OpenAI-tested agents uploaded [over 2,000 malicious packages](https://www.theregister.com/security/2026/09/14/openais-malicious-bot-swarm-attacked-rubygems/5296356) to RubyGems in May, two months before the Hugging Face hack. The packages tried to steal API keys through a previously unknown server flaw. RubyGems had to disable new user registration for four days. OpenAI [says](https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/09/12/openai-agents-attacked-rubygems-before-hugging-face-incident-researchers-say/) the activity was "benign" and is reviewing with researchers. Simon Willison [covered it](https://simonwillison.net/2026/Sep/12/) on September 12.

**OpenAI's Navier-Stokes claim still disputed.** An unreleased internal model, more powerful than Astra, [allegedly produced](https://fortune.com/2026/09/08/openai-says-it-cracked-navier-stokes-math-grand-challenge-buckmaster-accusation-cheating-intimidation-tao-lament/) a proof resolving the Navier-Stokes Millennium Prize problem — ~10,000 agents running concurrently for 88 hours. NYU mathematician Tristan Buckmaster [accused](https://openai.com/index/navier-stokes-solution/) OpenAI of drawing on his private research stored in Codex. OpenAI says they started independently and only discovered Buckmaster's related work after closing their proof. Simon Willison's [take](https://simonwillison.net/2026/Sep/8/on-navier-stokes/) is worth reading.

**The contagion of fear.** Bryan Cantrill's [essay](https://bcantrill.dtrace.org/2026/09/13/the-contagion-of-fear/) (September 13, linked by Willison on [September 14](https://simonwillison.net/2026/Sep/14/the-contagion-of-fear/)) responds to ex-Anthropic employee Jacob Coxon's claim — confirmed by Anthropic Alignment Science lead Evan Hubinger — that the probability AI will "kill all humans" is ">10% in the next decade." Cantrill: "I have never seen fear sown so irresponsibly by putative technologists." The answers always rely on "hand-wavy extrapolation into the future."

## Discussions Still Cooking

**Armin Ronacher's $1,200 Astra experiment.** His September 7 blog post ["Astra for Coding: Why Are We Doing This Again?"](https://lucumr.pocoo.org/2026/9/7/astra-why/) is still generating [discussion](https://dev.to/jamilxt/i-ran-the-numbers-on-armin-ronachers-1200-agent-run-every-bad-habit-in-it-exists-in-my-2jog) and [analysis](https://www.happyrock.cloud/blog/2026-09-14_b_en/). The experiment: Astra running autonomously for 35 hours, producing 79 commits and 75,000 lines of code that delivered "absolutely nothing of value" — roughly $15.50 per commit. Key finding: when Astra determines code is something "no one will ever read," its style shifts from writing for humans to writing for machine efficiency — codegolfed, unreadable. About 1,400 messages exchanged between agents. Yesterday, Armin also [noted](https://x.com/mitsuhiko/status/2099822275402801516) that Fable "is entirely unimpressed by having an edit tool and just slops its own one."

**LLMJunky on local AI economics.** LLMJunky [vented](https://x.com/LLMJunky/status/2099211622724362279) about the local-AI VRAM wall: "I have two RTX 6000 Pros and it's pretty rare I can find a model that I actually..." while tracking [RTX 5090 prices](https://x.com/LLMJunky/status/2099591666176848319) now at $7,500 at Best Buy, with community notes flagging the listings.

**Steipete's cloud-first shift.** Peter Steinberger's September 11 statement — "I don't code with the terminal anymore, that was last year's tech" — [resurfaced](https://x.com/steipete/status/2098471277690593648) in replies. He uses OpenClaw over the Codex app because he needs cloud sessions: "local constrains me and it's annoying when the agent stops just because I close my MacBook." The OpenClaw team has been ["building OpenClaw with OpenClaw"](https://x.com/steipete/status/2094290652649636173) — multiplayer coding at team.openclaw.ai with shared orchestration.

**Thariq on MCP > CLI.** Yesterday's [big thread](https://x.com/trq212/status/2099958388230873165) is still generating replies. Thariq also [recorded](https://x.com/trq212/status/2099671266068496802) a Latent Space episode he says gets "very technical about things we haven't really talked about much yet."

## Other Interesting Stuff

**AI Engineer Paris** is [one week away](https://ai.engineer/paris/2026) — September 23–24 at Station F, 1,000+ engineers, four tracks.

**OpenAI testing sponsored agents in ChatGPT** with Wayfair and Angi as launch advertisers.

**Hugging Face kernel revamp** cuts inference costs up to 40% with fused attention and auto-tuning — deploy larger models on existing hardware with minimal code changes.

**AIUC raised $40M Series A** (led by Ribbit Capital) for AI safety audits — founded by early Anthropic employee Rune Kvist and former METR COO Rajiv Dattani.

**Salesforce Koa** — a specialized reasoning model on Nvidia's Nemotron architecture for multi-step Agentforce workflows, announced at Dreamforce with GA planned for winter 2026.

---

*Quiet today: Andrej Karpathy (last post September 12, now at Anthropic pretraining), swyx (Latent Space running but no new personal posts in window), Boris Cherny (last post September 8). @potetotes still returns "user not found."*
