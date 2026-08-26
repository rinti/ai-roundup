---
title: "\"Coding Is Solved\" Debate Heats Up, Fable Tops Theo's Tier List & Claude Code Goes Hackable"
date: "2026-08-26"
summary: "The week's loudest thread: Boris Cherny declared 'coding is solved' and Matt Pocock fired back calling it 'a raspberry ripple of bullshit' — then they had a surprisingly good-faith exchange about where the line between coding and engineering actually falls. Theo dropped a full model tier list putting Fable 5 alone in S+ and GPT-5.6 Sol in S, with a deliberately empty A tier and Gemini relegated to the basement. Thariq responded to Tobi Lutke confirming Claude Code is getting Agents.MD support and deeper system-prompt hackability. Mitsuhiko argued that LLMs have decoupled language familiarity from language choice, explaining the surge in Rust and Zig adoption. OpenClaw shipped GPT-5.6 Sol support in its latest beta. And LLMJunky's GooeyPi — an Electron-based GUI for local Pi agents — hit 300 stars in 18 hours."
tags:
  - Agentic Coding & Agent Harnesses
  - Models & Benchmarks
  - Claude Code & Anthropic Updates
  - Other Interesting Stuff
  - Videos
---

# AI Roundup — August 26, 2026

Boris Cherny and Matt Pocock had it out over whether coding is "solved," Theo ranked every model, and Claude Code is about to get a lot more hackable.

## Agentic Coding & Agent Harnesses

### "Coding is solved" — the debate

The biggest thread of the past few days started with [Boris Cherny stating](https://x.com/bcherny/status/2090649326032945591) "Coding is solved, bugs are not yet solved. Fix incoming." Matt Pocock [didn't hold back](https://x.com/mattpocockuk/status/2091434155561107647): "I've been thinking about this quote for a solid 24 hours. It's like a raspberry ripple of bullshit. A vanilla ice cream of VC funding, stirred with a little pinch of turd."

What makes this thread worth following is that it turned productive. [Boris responded](https://x.com/bcherny/status/2091589188298891264) with a genuine timeline of where he sees things: (1) models code better than he can, (2) models do coding-adjacent engineering better than he can — debugging, profiling, system design, UI design, idea generation — and (3) the remaining hard parts are taste, judgment, and orchestration. In a [follow-up to Matt](https://x.com/bcherny/status/2091636827727986748), Boris drew the line: "Coding/programming: the act of writing code. Engineering: everything else in addition to that." He noted Anthropic is "starting to automatically maintain our apps" — implying the boundary is moving fast.

Matt's framing via John Ousterhout's tactical/strategic programming distinction is the more useful lens for practitioners: if you're still writing code by hand, make it strategic. The debate isn't academic — it maps directly to how you should be spending your time with agent harnesses right now.

### GooeyPi: a GUI for local model agents

[LLMJunky (@am.will) launched GooeyPi](https://x.com/LLMJunky/status/2087984540828807349), an Electron-based desktop workspace for the Pi family of local agents (Pi, Oh-My-Pi, and Prime Agent). The motivation is practical: if you run local models, constantly switching harness configs between them and cloud models is painful. GooeyPi unifies them under one GUI with an agentic browser, realtime voice agent, voice transcription (local or API), computer use, agent-to-agent messaging, git control, and a terminal. [GitHub repo](https://github.com/am-will/gooey-pi) — hit 300+ stars in 18 hours. BETA on macOS, Linux, and Windows.

### Claude Code ELI5 skill goes viral

[Thariq shared an internal Anthropic skill](https://x.com/trq212/status/2090884854590382515) (~2.2M views): `/eli5 <topic>` explains any concept using an HTML artifact with big pictures and few words, aimed at "someone who knows nothing about this topic." The engagement was high enough that Anthropic is [debating making it an official plugin](https://x.com/trq212/status/2090884855798407576) — in the meantime you can install it via `claude plugin marketplace add anthropics/claude-plugins-community` then `claude plugin install eli5@claude-community`.

## Models & Benchmarks

### Theo's model tier list: Fable alone at the top

[Theo dropped a full AI model tier list](https://x.com/theo/status/2091277536600969276) ranking every major model. The headline: **Fable 5 sits alone in S+ tier**, GPT-5.6 Sol in S tier, and there's a deliberately empty A tier separating these two from the rest of the field. Google's entire Gemini lineup gets relegated to a dedicated "Google tier" at the bottom — he specifically called out Gemini 3.5 Flash for token inefficiency ($1.50/M input, $9/M output) that often costs more than Pro at similar quality.

Theo's central argument: raw capability is no longer the differentiator. Token efficiency, real-world cost per task, vision support, and integration into coding workflows determine actual value. His recommendation: "Use Fable for code you care about merging, Sol for everything else, and treat the rest of the field as specialized tools for narrow niches."

The emergence of what he calls a "two-tier elite" — Fable 5 and GPT-5.6 Sol operating in a fundamentally different mode from everything else — is the key takeaway. These models let you delegate entire tasks and review finished PRs rather than micromanaging implementation.

### OpenClaw 2026.8.1-beta.3: GPT-5.6 Sol support

[Peter Steinberger shipped OpenClaw 2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3) on August 24, adding GPT-5.6 Sol, Terra, Luna, and Ultra reasoning support across OpenClaw and the Codex runtime. Also new: Puppeteer-compatible CDP relay for paired Chrome sessions, compact SQLite backup/restore, and a first-run setup flow that wires through model verification into Custodian. The timing lines up with the Sol API price drop mentioned in yesterday's roundup — OpenClaw users can now access Sol at the new $4/M input rate.

## Claude Code & Anthropic Updates

### Claude Code is getting Agents.MD and system prompt hackability

[Thariq responded to Tobi Lutke](https://x.com/trq212/status/2092302273099796842) confirming that the team is working on making Claude Code more hackable — specifically including the ability to use Agents.MD and make other system prompt modifications. "We are working on making Claude Code more hackable, which will include being able to easily use Agents.MD or make other system prompt modifications. I'll share more here when it's ready to roll out." This is a direct response to feedback from Shopify's CEO about wanting more control over Claude Code's behavior, and signals a meaningful shift toward letting power users customize the agent's system prompt rather than being locked into Anthropic's defaults.

### Context engineering for Claude 5 models

Still generating discussion: [Thariq's article on the new rules of context engineering](https://x.com/trq212/article/2080710971228918066) for Claude 5 models. The team [removed ~80% of Claude Code's system prompt](https://x.com/trq212/status/2080710971228918066) for the newest models with no measurable loss on coding evaluations — the models came out smarter without the guardrails. The practical upshot for anyone writing skills or CLAUDE.md files: write less, trust the model more, and match the style of surrounding code rather than imposing rigid formatting instructions.

## Other Interesting Stuff

- **[Fast and Hard Code](https://lucumr.pocoo.org/2026/8/22/fast-hard-code/)** — Armin Ronacher (mitsuhiko) argues that LLMs have decoupled language familiarity from language choice. The result: a surge in adoption of "hard" languages like Rust and Zig by developers who previously wouldn't have touched them, because LLMs reduce the barrier to entry. "The act of familiarizing yourself with a language no longer matters" — what matters is whether the language's properties (performance, safety, expressiveness) fit your problem. A companion piece to his [Anger, Anxiety and Agency](https://lucumr.pocoo.org/2026/8/24/anger-anxiety-agency/) post (covered yesterday) about converting AI uncertainty into curiosity.

- **Matt Pocock's skills repo hits v1.2.3** — The [mattpocock/skills](https://github.com/mattpocock/skills) repo now ships 25 skills as a versioned plugin (v1.2.3, Aug 6). The repo description swapped `.claude` for `.agents`, dropping the vendor lock-in framing. At 176K+ stars and 7.5M downloads, it's the de facto standard skill library for coding agents. Matt also posted a [10-minute overview of every skill](https://x.com/mattpocockuk/status/2088290952704151671) in the repo.

- **LlamaIndex ExtractBench** — [Jerry Liu introduced ExtractBench](https://x.com/jerryjliu0/status/2087195936225108171), a benchmark for information extraction from complex enterprise documents. Tested 14 systems across 370 enterprise docs (4,869 pages, 67 document types). Key finding: on files past 50 pages, commercial VLMs collapse below 35% recall due to silent list truncation. LlamaIndex's new Agentic Plus tier leads at 95.6% value accuracy. Also shipped: [LiteParse v2.1](https://x.com/jerryjliu0/status/2067679507126124858), billed as "the fastest PDF → markdown parser in the world" at 4ms for 200 pages.

## Videos

**[Ranking Every AI Model (Currently)](https://x.com/theo/status/2091281511924502940)** (Theo) — The full video behind the tier list above. Worth watching for the methodology: Theo walks through why token efficiency and cost-per-task matter more than benchmark scores, and why Gemini's pricing makes it actively worse than cheaper alternatives in practice.

**[He's right.](https://www.youtube.com/watch?v=0wemf5SZkW4)** (Theo) — "Boris was ahead of us all again." A look at what Boris Cherny is signaling next, and why the "coding is solved" framing — however provocative — reflects where the Claude Code team is actually building.

---

*Sourcing notes: nitter.net, xcancel.com, and x.com are blocked by the egress proxy in this environment. Content assembled from web search snippets, blog RSS (lucumr.pocoo.org, simonwillison.net), GitHub releases (openclaw/openclaw), YouTube metadata, and cross-referenced against yesterday's roundup to avoid duplication. Tweet content is reconstructed from search result titles and snippets; thread replies could not be fully read. @karpathy and @swyx had no confirmed posts in the last 24 hours.*
