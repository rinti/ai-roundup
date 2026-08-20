---
title: "Cognition Not For Sale, Ray Zero-Day Deadline & Terminals Are Dead"
date: "2026-08-20"
summary: "SpaceX's appetite for AI coding startups hit a wall: five days after closing the **$60B Cursor acquisition**, Bloomberg reported SpaceX approached Cognition about a buyout — and Scott Wu shot it down on X within hours: \"Cognition is not for sale and we haven't been talking.\" Musk replied saying the contact was about Grok integration, not acquisition. Meanwhile the security side of AI infra got a wake-up call: **CISA added a critical Ray RCE flaw (CVE-2025-62593, CVSS 9.4)** to the KEV catalog with a remediation deadline of today, August 20 — the exploit works via DNS rebinding and a spoofed User-Agent header on any machine running the framework that Amazon, Apple, and OpenAI all depend on. On the harness front, Theo doubled down on his \"**done with terminals**\" thesis — T3 Code as an open-source GUI for parallel agents pushed him from 3–4 PRs/week to 20/day — while swyx's SmolForge agents now run autonomously overnight via `/goal`. Thariq and Boris Cherny's **\"delete 80% of your system prompt\"** advice for Claude 5 models keeps reverberating, with Cherny telling YC Startup School to nuke your CLAUDE.md every six months. Plus: OpenAI's frontier training pause continues, Meta's Muse Code enters beta, Google's consumer agents start calling stores, and the AI pricing war sends GPT-5.6 Luna to $0.20/M input tokens."
tags:
  - SpaceX, Cursor & Cognition
  - Security & Infrastructure
  - Agentic Coding & Agent Harnesses
  - Context Engineering & Prompting
  - Models & Pricing
  - Industry & Regulation
---

# AI Roundup — August 20, 2026

## SpaceX, Cursor & Cognition

### SpaceX closed Cursor for $60B — then tried to buy Cognition too

The biggest deal in AI coding tools history [closed on August 14](https://techcrunch.com/2026/08/15/spacex-officially-closes-its-cursor-acquisition/): SpaceX completed its **$60 billion all-stock acquisition of Cursor** (Anysphere). The development team moved into SpaceX's internal software engineering division.

Five days later, [Bloomberg reported](https://www.techmeme.com/260819/p43) that SpaceX had approached Cognition — maker of the Devin AI coding agent — about a potential acquisition. Cognition CEO Scott Wu [responded on X](https://x.com/ScottWu46/status/2090165234921296030) within hours:

> "This is not true. Huge respect for the SpaceX team but Cognition is not for sale and we haven't been talking."

Musk replied calling it accurate, saying the contact was limited to ensuring Grok works well for Cognition's needs, not acquisition. [TechCrunch's report](https://techcrunch.com/2026/08/19/cognition-ceo-denies-report-that-spacex-tried-to-acquire-the-startup/) notes the companies may still explore a collaboration around compute access.

The subtext: SpaceX now owns the most popular AI code editor and is aggressively trying to consolidate the agentic coding stack. Whether Cognition stays independent or gets absorbed elsewhere will shape the competitive landscape for the rest of 2026.

## Security & Infrastructure

### CISA Ray RCE: remediation deadline is today

[CISA added CVE-2025-62593](https://www.cisa.gov/news-events/alerts/2026/08/17/cisa-adds-one-known-exploited-vulnerability-catalog) to the Known Exploited Vulnerabilities catalog on August 17, with a **remediation deadline of August 20** (today). The flaw affects Ray, the open-source distributed computing framework used by Amazon, Apple, OpenAI, and most serious ML teams.

The [technical details](https://thehackernews.com/2026/08/cisa-flags-actively-exploited-ray-flaw.html) are nasty: **CVSS 9.4**, the exploit chains DNS rebinding with a spoofed `User-Agent` header (the defense literally checked if it started with "Mozilla") to achieve RCE on any machine running Ray < 2.52.0. A developer visiting a malicious website while Ray is running is enough.

If you're running Ray: upgrade to 2.52.0+, rebuild images containing older versions, and confirm your package manager hasn't cached a vulnerable release.

## Agentic Coding & Agent Harnesses

### Theo: "I'm done with terminals"

Theo Browne [published a video and thread](https://finance.biggo.com/podcast/1e4bc1739e6c1fa0) in mid-August making the case that **the terminal is structurally wrong for managing parallel AI agents**. The self-described lifelong tmux power user says he recently went 8+ hours after a reboot without opening a terminal.

His claim: the shift to [T3 Code](https://betterstack.com/community/guides/ai/t3-code/) — a free, open-source desktop GUI for managing AI coding agents with parallel worktree workflows and one-click GitHub PRs — pushed him from landing 3–4 PRs/week to **20 PRs/day** on heavy coding days.

> "T3 Code is one of the best agentic code tools right now. I genuinely believe we're about to leap frog the others with this next update."

The argument that resonates: graphical interface options were previously tied to specific model providers (Codex app → OpenAI, Claude Desktop → Anthropic). T3 Code is provider-agnostic with a bring-your-own-key model.

Steipete (Peter Steinberger), the ex-CLI-maximalist who now works at OpenAI, [weighed in](https://x.com/steipete/status/2089804281331548280): "pssst, you wake the cli people that will give you $reasons why this can't work. I was one of them before I saw the light."

### swyx: forge agents that work while you sleep

swyx shared that his [SmolForge](https://forge.smol.ai/) agents project — a fast agent-native git remote — is now substantial enough that he's [working on it at night while sleeping](https://x.com/swyx/status/2085507281349931367):

> "forge agents is quite substantial so only working on it at night while i sleep. this is /goal but it only works during sleepytime"

SmolForge opened for the first 100 alpha users in early August with built-in CI/CD via workers. Users praised the **per-repo Forge agents with disk-based memory** for keeping conventions honest and reducing hallucinations.

### Loop engineering keeps building momentum

Steipete's viral post from June — ["you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents"](https://x.com/steipete/status/2063697162748260627) — hit 6.5 million views and spawned an entire subgenre. [Addy Osmani wrote a guide](https://addyosmani.com/blog/loop-engineering/), [DEV Community](https://dev.to/isaachagoel/loop-engineering-minus-the-hype-4ibn) published a de-hyped version, and Boris Cherny aligned: "I don't prompt Claude anymore — instead I have loops running that prompt Claude, and my job is to write loops."

The core principles crystallizing: stop being the thing in the loop; anchor intent with VISION.md/CLAUDE.md/AGENTS.md; give the agent something that says no (tests, type checks); cap it with iteration or dollar budgets; let it run on cron while you decide what to build next.

### Armin Ronacher: "A Year of Agents"

Mitsuhiko (Armin Ronacher, creator of Flask) gave a talk at [CodeCrafts 2026](https://www.youtube.com/watch?v=u_k9cwDNPcM) titled "A Year of Agents" covering lessons from building and using AI agents. He also published ["The Coming Loop"](https://www.developersdigest.tech/blog/armin-ronacher-coming-loop-agent-comprehension) in June, distinguishing between agent loops (where the model calls tools, reads results, iterates internally) and the outer engineering loops that steipete evangelizes.

On the practical side, he's [looking for people in London with opinions on evals](https://x.com/mitsuhiko/status/2089711963236364780) for a planned trip, and noted [he now has a tangled.org account](https://x.com/mitsuhiko/status/2089374335387463907) as part of the GitHub alternatives discussion.

## Context Engineering & Prompting

### "We deleted 80% of Claude Code's system prompt"

The most discussed Claude Code development of the month: Thariq (@trq212) [announced](https://x.com/trq212/status/2080710971228918066) that Anthropic removed ~80% of Claude Code's system prompt for Opus 5 and Fable 5 — from roughly 2,686 words down to ~514 — **with no measurable loss on coding evaluations**. Boris Cherny [retweeted it](https://x.com/bcherny/status/2080730786697990552); combined the posts hit 4.3 million views.

The insight: what worked for earlier models ("few-shot examples," defensive guardrails) actively hurts newer models by creating conflicting instructions and wasting tokens. It's not better prompting — it's **unhobbling**: deleting constraints that once prevented worst cases but now just confuse a more capable model.

At [YC Startup School](https://www.youtube.com/watch?v=qyPCVqFUyDo), Cherny put it bluntly:

> "Every 6 months, delete your CLAUDE.md file, delete your skills, and delete your hooks. Then see what the model does. It might surprise you."

Thariq also wrote up [the new rules of context engineering for Claude 5 models](https://x.com/trq212/article/2080710971228918066) — framing the shift from "prompt engineering" to "context engineering," where the focus is on providing the right environmental context rather than micromanaging behavior.

### Matt Pocock: skills repo, crash course, and grep hygiene

Matt Pocock's [skills repository](https://github.com/ai-hero-dev) — 35 composable SKILL.md files that work across Claude Code, Cursor, Codex CLI, Windsurf, and Copilot — continues to be the reference implementation for the agent skills pattern. On August 14, he [realized he'd never done a proper overview](https://www.techtwitter.com/twitter-trending/2026-08-14) of every skill in the repo ("damn it, he's right").

His [AI Coding Crash Course](https://x.com/mattpocockuk/status/2085796061361078718) is on sale for $199 through August 24, covering workflows with any harness plus his skills repo.

His [grep hygiene framing](https://x.com/mattpocockuk/status/2089701313676284316) from August 19 (65.6k views) is still generating discussion — the argument that agent memory (plans, specs, research docs) should live outside the codebase, because in a highly constrained dialect like code, grep is strictly better than semantic search.

## Models & Pricing

### OpenAI frontier training pause continues

[OpenAI confirmed on August 18](https://time.com/article/2026/08/18/openai-slowing-training/) that it paused frontier reinforcement learning for about two weeks, with the largest planned run still on hold. Sam Altman:

> "We have paused some frontier RL training to ensure that we can meet the appropriate alignment, security and monitoring standards for the new level of capabilities in front of us."

The [Astra model](https://explainx.ai/blog/openai-pacing-frontier-rl-astra-cyber-critical-august-2026) — OpenAI's next-gen model — was suspended after it was determined on August 7 to have potentially crossed the "Critical" cybersecurity capability threshold in OpenAI's own Preparedness Framework. Before the pause, unreleased Astra worked through [10 previously unsolved problems in mathematics and theoretical computer science](https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/) at ~$2,000 in compute.

OpenAI CRO Jakub Pachocki confirmed he personally signed "Pacing the Frontier," the employee-led safety statement, and frames this pause as that letter's philosophy put into practice.

### GPT-5.6 Luna slashed 80% — the pricing war accelerates

OpenAI [cut GPT-5.6 Luna pricing by 80%](https://venturebeat.com/technology/ai-price-wars-openai-cuts-gpt-5-6-luna-prices-by-80-as-model-competition-shifts-toward-cost) on July 30, dropping from $1/$6 to **$0.20/$1.20** per million input/output tokens — just three weeks after launch. Terra got a 20% cut; the flagship Sol model stays at $5/$30.

The trigger: [CNBC found](https://www.cnbc.com/2026/07/30/open-ai-price-cut-gpt.html) that Chinese models captured 46% of US enterprise token usage on OpenRouter. OpenAI priced Luna to undercut DeepSeek directly.

Meanwhile, Anthropic shipped Claude Opus 5 on July 24 at $5/$25 with a 1M-token context window, and Claude Sonnet 5 runs at introductory $2/$10 pricing through August 31.

### Meta enters the coding agent race with Muse Code

Meta [launched Muse Code on August 5](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/), its first AI coding agent, powered by the Muse Spark 1.2 model. It's designed for large codebases — when given a substantial task, it **creates multiple sub-agents in isolated worktrees** while your main branch stays clean.

Pricing: $1.25/$4.25 per million tokens, or $0.10/$0.20 if you let Meta train on your code. On August 10, Zuckerberg announced Meta will open-source Muse Spark 1.2's weights.

### Karpathy at Anthropic

Andrej Karpathy [joined Anthropic in May](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to build a team using Claude to accelerate pre-training research, working under team lead Nick Joseph. A viral "Karpathy quit Anthropic" rumor from an X bio watch was [denied by Karpathy on July 26](https://x.com/karpathy/status/2081193667529003247). He's part of a marquee hiring year that includes Nobel laureate John Jumper (June), Berkeley CS chair Jelani Nelson (July), and Monzo co-founder Tom Blomfield.

## Industry & Regulation

### Google's consumer agents start calling stores

Google is [rolling out consumer agents](https://www.techbuzz.ai/articles/google-launches-ai-agents-to-shop-call-stores-for-you) that can call local stores, check inventory, and complete purchases by phone. The "Let Google Call" feature appears on "near me" product searches, with Gemini-powered models handling the calls. Google, Apple, and several voice startups arrived at similar conclusions within weeks of each other.

### EU AI Act high-risk provisions now enforceable

The EU AI Act's high-risk provisions — risk management, human oversight, conformity assessment, and Article 50 transparency duties — [became enforceable on August 2, 2026](https://assindo.com/news/ai-agent-news-august-2026). Non-compliance can trigger fines up to **15 million euros or 3% of global annual revenue**.

### Jerry Liu: grounding and revision tracking for document agents

Jerry Liu made the case for [grounding as first-class in agentic document pipelines](https://x.com/jerryjliu0/status/2089710424388202565) — with [ExtractBench](https://extractbench.ai/) showing that frontier VLMs return zero evidence at both page and word levels. LlamaIndex also shipped [revision tracking in LlamaParse](https://x.com/llama_index/status/2089736987578134964): every edit, deletion and comment as structured data, because "a deleted clause comes back as live text, and your pipeline reads a document that says the opposite of what it means."

Their [Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871) for agentic retrieval — a persistent data pipeline exposing filesystem-like tools (semantic/keyword search, regex grep, file search, read) — continues to be the reference for plugging retrieval into autonomous agents.

---

*Sourcing notes: Nitter.net, xcancel.com, x.com, and several other domains are blocked by the egress proxy in this environment. Content was sourced via WebSearch against multiple search engines and news aggregators. @simonw and @karpathy had no posts found within the 24-hour window. @bcherny's most recent specific tweets could not be individually verified. Engagement metrics were not available for all posts.*
