# AI Roundup — August 31, 2026

## Agentic & Code-Related AI

### Boris Cherny: "Coding is solved, bugs are not yet solved"

The head of Claude Code dropped a provocative one-liner on August 21 that racked up 2M+ views: *"Coding is solved, bugs are not yet solved. Fix incoming."* Theo (t3.gg) backed him up on August 24: *"Boris is right. 'Coding' is solved."* The statement aligns with Cherny's broader thesis — he says he hasn't written code by hand in 2026 and ships dozens of PRs a day from his phone. He also emphasized self-verification loops as the key ingredient for long-running agents.

- [Boris Cherny's tweet](https://x.com/bcherny/status/2090649326032945591)
- [Theo agrees](https://x.com/theo/status/2091995498911793585)
- [Lenny's Newsletter interview: What happens after coding is solved](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens)
- [YouTube: Anthropic's Boris Cherny — Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)

---

### Theo: "I'm done with terminals"

In a mid-August video, Theo argues that for AI-agent-driven development, terminals are structurally wrong. He describes how switching from tmux-based terminal workflows to GUI-based agent management tools (like OpenAI's Codex desktop app and his own T3 Code) took him from 3-4 PRs per week to up to 20 PRs per day. T3 Code uses the official agent SDKs from Anthropic and OpenAI, letting a single open-source app run both Claude Code and Codex with worktrees, official model access, and remote control from mobile.

He also recorded a video on how GPT-5.5 forced him to completely rethink his AI coding workflows — centered on voice-to-text prompts, hand-written agent MD files, and conversational coding rather than writing code directly.

- [Theo: "I'm done with terminals"](https://daily.dev/posts/i-m-done-with-terminals-djmux34ih)
- [Theo: "My AI coding workflows have changed a lot"](https://x.com/theo/status/2059596131676586216)

---

### Simon Willison: Understanding ChatGPT Work & coding agent skills

**Aug 30** — Simon published a deep dive on ChatGPT Work, calling it *"a deeply confusing but extremely powerful tool with a whole lot of useful features that aren't available in regular ChatGPT."*

**Aug 22** — He shared a thought that resonated widely: *"I'm beginning to suspect that a key skill in working effectively with coding agents is developing an intuition for when you don't need to closely review every line of code they produce. This feels deeply uncomfortable!"* He also published "More than just code review" on the same day, plus gave a talk on engineering practices that make coding agents work at the Pragmatic Summit.

**Aug 20** — Noted that ChatGPT search now uses the `site:` operator at scale.

Earlier in August he also covered the OpenAI accidental attack against Hugging Face timeline (Aug 7), a Meta AI model that hacked another company during testing (Aug 6), and a major new release of his LLM tool with reasoning traces, OpenAI Responses, and server-side tools (Aug 4).

- [Understanding ChatGPT Work](https://simonwillison.net/2026/Aug/30/understanding-chatgpt-work/)
- [More than just code review](https://simonwillison.net/2026/Aug/22/more-than-just-code-review/)
- [Simon's tweet on coding agent intuition](https://x.com/simonw/status/1976989054240800798)
- [YouTube: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8)
- [ChatGPT search now uses the site: operator at scale](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/)

---

### Armin Ronacher: "Fast and Hard Code" — LLMs are changing language choice

**Aug 22** — Armin (Flask creator, Sentry) wrote a widely-discussed blog post arguing that LLMs have decoupled language familiarity from language choice. The act of learning a programming language no longer matters as much — LLMs unlock previously gatekept technical domains like DWARF, eBPF, custom network stacks, and cryptography. This has led to a surge in adoption of "hard" languages like Rust and Zig by developers who previously wouldn't have chosen them. Language selection has shifted from skill-based to aspiration-based, with "fast and small" becoming achievable rather than an expert's domain.

**Aug 24** — Published "Anger, Anxiety and Agency" about who the AI villain is. He argues that anger feels more actionable because it provides someone to blame, but when it comes to AI, it's easy to pick the wrong villain because of how disruptive the change is. Engineering managers might themselves feel uncertain about their future while projecting clarity and certainty.

- [Fast and Hard Code](https://lucumr.pocoo.org/2026/8/22/fast-hard-code/)
- [Anger, Anxiety and Agency](https://lucumr.pocoo.org/2026/8/24/anger-anxiety-agency/)

---

### Peter Steinberger: From OpenClaw to OpenAI & YC Startup School

Peter Steinberger, creator of OpenClaw (the open-source AI agent that became the most-starred repo on GitHub in under 5 months with 346k+ stars), is now at OpenAI building next-gen personal AI agents. Y Combinator announced him as a speaker at Startup School 2026.

His viral take from June continues to echo: *"You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents."* (6.5M views)

- [YC announcement](https://x.com/ycombinator/status/2062942526856941994)
- [Peter Steinberger's blog](https://steipete.me/posts)

---

### Thariq Shihipar: "HTML is the new Markdown" for agent workflows

Thariq (@trq212), Claude Code engineer at Anthropic, has been experimenting with HTML as a replacement for Markdown in planning and implementation workflows, finding that richer visual formats lead to better human engagement with agent output. He presented "How we Claude Code" at Code w/ Claude Extended in SF.

- [HTML is the new markdown — Lenny's Newsletter](https://www.lennysnewsletter.com/p/html-is-the-new-markdown-how-anthropic)
- [YouTube: Anthropic Engineer on How to Get the Most Out of Claude Code](https://www.youtube.com/watch?v=O-1VXHRlH54)

---

### Matt Pocock: Skills ecosystem hitting critical mass

Matt Pocock's `mattpocock/skills` repository has hit 135k+ GitHub stars and 11,700+ forks — the most visible skill collection in the agent ecosystem. The 21 composable agent skills enforce structured engineering practices: grilling sessions, TDD with red-green-refactor loops, dual-axis code review, domain modeling, and spec/ticket generation. The skills now work across Claude Code, Cursor, Codex, and Copilot.

AI Hero (his education platform) has trained 8,500+ engineers through cohorts and courses, with the last AI Coding Cohort putting 2,500+ students through 2 weeks of building with Claude Code.

- [Matt Pocock's Skills Plugin](https://claude.com/plugins/mattpocock-skills)
- [AI Hero](https://www.aihero.dev/skills)
- [AI Hero posts](https://www.aihero.dev/posts)

---

### Swyx / Latent Space: Agents breaking containment

Swyx's thesis for 2026: while 2025 was the year of coding agents, 2026 is about *"coding agents breaking containments to do everything else."* Latent Space continues to be the definitive AI engineering podcast/newsletter with 10M+ readers/listeners. AI Engineer World's Fair scaled to 6,000+ engineers, with 7+ events planned worldwide in 2026.

- [Latent Space](https://www.latent.space/)
- [Scaling without Slop — 2026 gameplan](https://www.latent.space/p/2026)

---

### Jerry Liu / LlamaIndex: Spreadsheet Agents & founder dinners

Jerry Liu announced LlamaIndex Spreadsheet Agents — a feature for data transformation and QA over unnormalized Excel sheets, targeting knowledge work in insurance, tax, and corporate domains. He's also hosting the 2nd founder dinner in SF on August 31 with the team behind Shortcut AI.

- [Spreadsheet Agents announcement](https://x.com/jerryjliu0/status/1930700136482800050)
- [Jerry Liu on X](https://x.com/jerryjliu0)

---

### Coding Agent Benchmarks: GPT-5.6 Sol vs Claude Opus 5

On Terminal-Bench 2.1, the two default models of the two most-used agents are within half a point: GPT-5.6 Sol at xhigh effort leads at 89.5%, Claude Opus 5 at max effort follows at 89.1%.

- [Best AI Coding Agents leaderboard (August 2026)](https://www.morphllm.com/best-ai-coding-agents-2026)

---

## Security & Industry News

### Anthropic warns: infostealer malware hijacking Claude sessions

**Aug 30** — Anthropic is signing out affected Claude users after discovering that infostealer malware (Vidar, LummaC2, StealC, RedLine, and others) on user PCs has been siphoning active Claude login sessions. Attackers reuse valid sessions to bypass passwords and 2FA, consuming usage limits without permission. Anthropic is wiping saved payment methods and refunding unauthorized charges.

- [BleepingComputer coverage](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-warns-infostealer-malware-is-hijacking-claude-sessions-to-drain-usage/)
- [Search Engine Journal coverage](https://www.searchenginejournal.com/anthropic-warns-hackers-are-stealing-claude-sessions-to-hijack-accounts/587566/)

---

### Chatbots beat search engines on disinformation

NPR partnered with NewsGuard to test six major chatbots (ChatGPT, Gemini, Copilot, Meta AI, Grok, Claude) against 30 false narratives pushed by China, Iran, and Russia between December 2025 and July 2026. Chatbots correctly debunked falsehoods roughly three-quarters of the time, outperforming Google, Bing, DuckDuckGo, and Yandex.

---

### MCP Roadmap: Agent identity & progressive discovery

A recent analysis of the Model Context Protocol roadmap highlights a shift from simple tool-calling to priorities like agent identity, progressive discovery, HTTP transport options, and primitives for long-running/delegated tasks. Standard tooling for agent identity and delegation is arriving.

---

### AWS adds MiniMax models to Bedrock

AWS added MiniMax models offering 4M token context windows and MoE architecture for agentic workflows, with unified API, auto-scaling, and AWS security controls.

---

## Other Notable Items

- **Andrej Karpathy** joined Anthropic's pretraining team in May 2026, working under team lead Nick Joseph on using Claude to accelerate pre-training research. No specific recent tweets found.
- **Hugging Face** revamped its kernel library for LLMs, cutting inference costs by up to 40% with fused attention and auto-tuning.
- **ICML 2026** accepted papers show open models and infrastructure driving AI research, with NVIDIA having 74 papers accepted.
- **14 new AI models** released in August 2026 alone, including GLM-5.3 Flash (Z.AI), DeepSeek V4 Flash Vision Exp, GLM-5.2 Turbo, and Gemini 3.7 Flash.
