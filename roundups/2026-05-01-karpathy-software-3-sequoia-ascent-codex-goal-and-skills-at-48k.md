# 2026-05-01 — Karpathy Recaps Sequoia Ascent: Software 3.0, Codex Gets /goal & Skills Hits 48K Stars

## Karpathy: Sequoia Ascent 2026 fireside chat recap

The big new thread today. Karpathy posted a long recap of his fireside chat at Sequoia AI Ascent 2026 (the event itself was ~a week ago, the recap thread is from today). The first theme: **LLMs are about a lot more than just speeding up what existed before.** Three examples of "new horizons":

1. **menugen** — an app that takes a photo of a restaurant menu and generates images of the dishes. Punchline: it became completely obsolete when Gemini could simply take the photo and overlay images directly via Nanobanana — no app needed. The lesson: entire apps can be swallowed by a single model capability upgrade.
2. **LLM Knowledge Bases** — his viral post from April 3 (16M+ views, 5,000+ GitHub stars on the gist). The LLM acts as a "compiler" that reads raw source documents and produces a structured, interlinked markdown wiki. ~100 articles, ~400K words on a single research topic. His most provocative claim: **RAG is unnecessary for personal knowledge management** — a typical personal knowledge base fits inside a modern context window without embeddings or vector search.
3. **Autoresearch** — AI agents running ML experiments in a loop, keeping only changes that beat the current best result. You describe research directions in a markdown file and point a coding agent at the repo.

The meta-framework from the talk: **"Traditional software automates what you can specify. AI automates what you can verify."** The verifiability of the output is what determines whether you can trust the agent.

On **vibe coding vs. agentic engineering**: vibe coding raises the floor (anyone can build software by describing what they want), agentic engineering raises the ceiling (using agents while preserving professional quality). "The best engineers will not be the ones who write every line of code. They will be the ones who can direct agents without letting quality collapse."

On education: "When AI gets better, the temptation is to learn less. Understanding becomes the bottleneck — you still need enough depth to direct the system and know what to ask, what to inspect, what to reject, and what matters."

Video: [Andrej Karpathy: From Vibe Coding to Agentic Engineering — YouTube](https://www.youtube.com/watch?v=96jN2OCOfLs)
Full AI Ascent 2026 playlist: [YouTube](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)
Thread: [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)

## Simon Willison: RSS for vibe-coded apps

Simon's April 30 post argues that when vibe-coding accelerates app development, **shipping a tool or micro-app becomes less like launching a website and more like posting on a blog**. The natural distribution mechanism is RSS/Atom. He added an Atom feed to his `/elsewhere/tools/` page (populated by content from tools.simonwillison.net). The idea came from Matt Webb — if apps become abundant and personal, we need a subscription model for discovering them.

Blog: [simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/)

## Simon Willison: Andrew Kelley on detecting LLM-assisted PRs

Follow-up to yesterday's Zig anti-AI policy discussion. Simon shared a quote from Andrew Kelley (Zig creator): **"It's a common misconception that we can't tell who is using LLM and who is not."** He adds: "I'm sure we didn't catch 100% of LLM-assisted PRs over the past few months" — implying they caught the vast majority. This is an interesting data point for anyone following the "can you even detect AI code?" debate.

Blog: [simonwillison.net/2026/Apr/30/andrew-kelley/](https://simonwillison.net/2026/Apr/30/andrew-kelley/)

## Simon Willison: Codex CLI 0.128.0 adds /goal

OpenAI shipped `/goal` in Codex CLI — **you set a goal and Codex keeps looping until it evaluates that the goal has been completed, or the configured token budget is exhausted.** This is the same pattern as steipete's ClawSweeper review loops and Claude Code's `/loop`, but now a first-class primitive in Codex itself. The convergence is clear: all the major agent harnesses are landing some version of "run until done."

Blog: [simonwillison.net/2026/Apr/30/codex-goals/](https://simonwillison.net/2026/Apr/30/codex-goals/)
Codex changelog: [developers.openai.com/codex/changelog](https://developers.openai.com/codex/changelog)

## Matt Pocock's skills repo closes in on 50K stars

Matt's `.claude` directory of 21 skills — `/tdd`, `/diagnose`, `/grill-with-docs`, `/caveman` (ultra-compressed communication, 75% token savings), `/git-guardrails-claude-code`, and more — is now at **~48,700 stars** after going viral at 22K-in-24-hours earlier in the week. OSS Insight covered the phenomenon in a piece titled "50,000 Stars for One Person's Config File: The Personal AI Stack Phenomenon."

Matt tweeted asking what the community wants next: a docs site? A plugin marketplace for sharing skills across projects? The reply thread is worth reading for the ecosystem forming around shareable agent skill definitions.

Repo: [github.com/mattpocock/skills](https://github.com/mattpocock/skills)
Matt's tweet: [https://x.com/mattpocockuk/status/2048490818848075846](https://x.com/mattpocockuk/status/2048490818848075846)
OSS Insight analysis: [ossinsight.io/blog/personal-ai-stacks-2026](https://ossinsight.io/blog/personal-ai-stacks-2026)

## Ongoing threads worth following

### Anthropic vs. OpenClaw saga continues

For context: Anthropic blocked Claude subscriptions from powering third-party harnesses like OpenClaw on April 4. steipete (who joined OpenAI in February to work on agents) posted: *"Funny how timings match up, first they copy some popular features into their closed harness, then they lock out open source."* TechCrunch, VentureBeat, The Register, and TNW all covered it. The New Stack ran a developer-sentiment piece headlined "Anthropic's harness shakeup 'just fragments workflows.'"

steipete's latest stats on OpenClaw's AI-powered triage: **27K issues and 30K PRs closed since December**, with ClawSweeper (50 Codex instances running in parallel) closing 10K issues and 5K PRs in a single week.

- TechCrunch: [Anthropic temporarily banned OpenClaw's creator from accessing Claude](https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/)
- steipete on the lockout: [https://x.com/steipete/status/2040209434019082522](https://x.com/steipete/status/2040209434019082522)
- GitHub stats: [https://x.com/steipete/status/2048478136824738181](https://x.com/steipete/status/2048478136824738181)
- ClawSweeper repo: [github.com/openclaw/clawsweeper](https://github.com/openclaw/clawsweeper)

### Boris Cherny's Claude Code power-user tips still circulating

Boris's March 30 thread on hidden/under-utilized Claude Code features (2.3M views in 24 hours) is still making the rounds. Key highlights for anyone who missed it: mobile app for iOS coding, `claude --teleport` for session mobility, `/loop` and `/schedule` for recurring automation (auto-rebasing, shepherding PRs to production), deep git worktree support for parallel work, and hooks for dynamic context loading. The full thread was archived on GitHub at [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/tips/claude-boris-15-tips-30-mar-26.md).

Thread: [https://x.com/bcherny/status/2038454336355999749](https://x.com/bcherny/status/2038454336355999749)

### mitsuhiko open-sources Earendil's /review extension for Pi

Armin Ronacher (Flask creator, now building Earendil) made Earendil's `/review` extension for Pi publicly available on April 14. Separately, his March 24 observation about **"a massive degradation of code quality right now"** from AI-assisted development continues to resonate — Jeremy Howard RT'd it, and it aligns with the SlopCodeBench paper (arxiv.org/html/2603.24755v1) showing that human code stays flat while agent code deteriorates with each iteration.

- /review extension: [https://x.com/mitsuhiko/status/2044016195154665979](https://x.com/mitsuhiko/status/2044016195154665979)
- Code quality thread: [https://x.com/jeremyphoward/status/2036507393337729404](https://x.com/jeremyphoward/status/2036507393337729404)

### swyx: Notion rebuilt Notion AI 5 times

On April 14, swyx dropped a Latent Space episode with Simon Last and Sarah Sachs from Notion. The headline: Notion has rebuilt Notion AI five times. It's the first time Simon Last has told the entire story publicly. The episode covers Notion's "Token Town" — the team of AI Engineers and Model Behavior Engineers building AI for Notion.

Thread: [https://x.com/swyx/status/2044220922387984408](https://x.com/swyx/status/2044220922387984408)
Podcast: [latent.space](https://www.latent.space/)

### jerryjliu0: ParseBench and the filesystem-as-abstraction thesis

Jerry Liu open-sourced ParseBench — a benchmark of ~2,000 human-verified enterprise document pages with 167K+ test rules, organized around five dimensions (tables, charts, content faithfulness, semantic formatting, visual grounding). Separately, he's been articulating a thesis about coding agents centralizing around **filesystems as core abstractions**: agents store conversation histories in searchable files, use file-based retrieval with semantic search instead of traditional RAG, define skills as simple files rather than complex MCP tools, and need only ~5–10 core tools plus filesystem access to be highly capable. Pairs well with the Karpathy LLM Knowledge Base approach above.

ParseBench repo: [github.com/run-llama/ParseBench](https://github.com/run-llama/ParseBench)
Filesystem thesis tweet: [https://x.com/jerryjliu0/status/2042425532558819799](https://x.com/jerryjliu0/status/2042425532558819799)

## Off-topic / non-AI

### Microsoft Agent 365 launches today

Copilot Cowork brings autonomous multi-step task execution into Microsoft 365 — Excel, Word, and PowerPoint Agents are now generally available. Not coding-specific, but the "agent" language is now firmly mainstream enterprise vocabulary.
