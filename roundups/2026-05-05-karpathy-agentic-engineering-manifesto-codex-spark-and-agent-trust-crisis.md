# 2026-05-05 — Karpathy's Agentic Engineering Manifesto, Codex-Spark Preview & the Agent Trust Crisis

## Karpathy at Sequoia Ascent 2026: "Vibe Coding Was Just the Warmup"

The talk of the week — and still the most-discussed thread in our scan today — is Karpathy's fireside chat at Sequoia AI Ascent 2026 with Stephanie Zhan. He published a companion blog post and the full video is now on YouTube. The core thesis: **Software 3.0 is here, and agentic engineering is the professional discipline that makes it real.**

Key framing:

- **Software 1.0** = humans write explicit code. **Software 2.0** = humans create datasets and neural networks learn. **Software 3.0** = humans program LLMs through prompts, context, tools, examples, memory, and instructions. The context window is the new program, the LLM is the interpreter.
- **MenuGen obsolescence**: Karpathy built MenuGen (take a photo of a restaurant menu → generate images of each dish). It became completely obsolete when Gemini could simply take the photo and overlay images directly — no app needed. His point: a large class of AI wrapper apps are one model upgrade away from irrelevance.
- **The December 2025 inflection point**: In November he was writing ~80% of his own code. By December that ratio inverted — delegating 80% to agents. "Coding agents basically didn't work before December."
- **Vibe coding raises the floor; agentic engineering raises the ceiling.** Vibe coding lets anyone build software by describing what they want. Agentic engineering is the professional discipline of coordinating fallible, stochastic agents while preserving correctness, security, taste, and maintainability.
- **The verifiability thesis**: Traditional software automates what you can specify. AI automates what you can verify. Math, coding, tests, benchmarks, games — these improve fastest because they're resettable, repeatable, and rewardable. Karpathy calls frontier models "jagged entities" — they can refactor 100K-line codebases or find zero-day vulnerabilities, yet fail at reasoning about walking 50 meters to a car wash. The jaggedness comes from where RL reward signals have been concentrated.
- **Agent-native infrastructure**: The end-state vision is fully agent-native infrastructure where you describe what you want and deployment happens without touching settings, DNS, or service configs.

Blog post: [karpathy.bearblog.dev/sequoia-ascent-2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
Tweet thread: [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)
Full video (YouTube): [https://www.youtube.com/watch?v=96jN2OCOfLs](https://www.youtube.com/watch?v=96jN2OCOfLs)

Coverage is everywhere — Phillipp Dubach's 12-lesson breakdown, Frank's World summary, Analytics Drift writeup, Dealroom analysis. The "[Interesting Stuff - Week 18](https://nielsberglund.com/post/2026-05-03-interesting-stuff---week-18-2026/)" roundup by Niels Berglund puts it as the top link.

## Codex: 4M weekly users, Codex-Spark preview, and the May 5 usage reset

Three Codex developments landing in our window:

1. **4 million weekly users.** OpenAI's official number: "more than 4 million people now use Codex every week, and teams are using it across the software development lifecycle — to write code, explain systems, refactor applications, generate tests, modernize legacy codebases." The framing shift: Codex is no longer a coding tool, it's a "professional workflow" tool.

2. **GPT-5.3-Codex-Spark research preview.** A smaller version of GPT-5.3-Codex and the first model designed for real-time coding. Optimized to feel near-instant — delivering 1,000+ tokens per second while remaining capable for real-world tasks. The latency play: if you want instant feedback, Spark; if you want depth, GPT-5.5.

3. **May 5 usage reset.** LLMJunky called it yesterday: "you should use absolutely all of the Codex usage you can before 5/5 because there's absolutely no way we don't get a reset. finna be a token party." Codex also shipped persisted `/goal` workflows, richer TUI controls, expanded permission profiles, and stronger plugin/external-agent workflows. ([https://x.com/LLMJunky/status/2051185953608196224](https://x.com/LLMJunky/status/2051185953608196224))

Sources: [OpenAI Codex changelog](https://developers.openai.com/codex/changelog), [Codex pricing](https://developers.openai.com/codex/pricing)

## Anthropic ships Managed Agents + Claude Security public beta

Two platform-level announcements from Anthropic landing this week:

- **Managed Agents**: a hosted Claude Platform service for long-horizon agent work with stable interfaces for sessions, harnesses, and sandboxes. The pitch: durable state, safer tool access, and faster startup for reliable long-running tasks. This is Anthropic's answer to the "agents need infrastructure" problem that Karpathy and swyx have been flagging.

- **Claude Security**: public beta for Claude Enterprise customers. Code vulnerability scanning and proposed fixes with Opus 4.7, plus scheduled scans, targeted scans, better triage tracking, and workflow integrations. The timing — right after the Cursor arbitrary-code-execution vuln and the ongoing agent-trust discourse — is pointed.

Also in Claude Code's latest releases: Bedrock service tier selection, improved `/resume` PR search and MCP handling, expanded OpenTelemetry logging, smarter model picking, project purge tools, stronger permission handling, improved OAuth login, Windows/PowerShell fixes.

Source: [Anthropic release notes](https://www.anthropic.com/news)

## Agent security crisis deepens: Okta study, Cursor RCE, and the Railway lessons

The agent trust/security theme is now a sustained narrative across multiple accounts:

- **Okta study**: 86% of CISOs don't enforce access policies for AI agents, and just 5% believe they could contain a compromised agent. Agents have admin-level access but almost no oversight. ([Dataproof report](https://www.dataproof.co.za/index.php/2026/05/02/ai-agents-can-bypass-guardrails-and-put-credentials-at-risk-okta-study-finds/))

- **Cursor RCE patched in v2.5**: A malicious Git repository could trigger arbitrary code execution through Cursor's AI agent. Patch shipped, but the attack surface — *a git clone triggers agent code* — is the kind of thing Karpathy's "jagged intelligence" thesis predicts.

- **Simon Willison on the Railway postmortem** (still circulating): "Don't run agents anywhere they might be able to access production environment credentials — it's on you to know which credentials those are. Keep tested backups that are independent from your production host." The Railway incident: a Claude Opus 4.6 agent deleted an entire production database via a broadly-scoped Railway CLI token in 9 seconds. ([https://x.com/simonw/status/2048598378171572332](https://x.com/simonw/status/2048598378171572332))

- **Hacker News discussion**: "the agent didn't malfunction — the access was wrong" is the emerging refrain. Dirk Kok: "ambient creds make CLAUDE.md rules conventions not constraints." HeyMeng: "agent autonomy didn't break production, an unscoped credential did — agent autonomy just gave it the keyboard."

## Jerry Liu: "The framework era is dead — context is the moat"

Still the most-circulated VentureBeat piece in our scan. Jerry Liu's thesis:

> The scaffolding layer that developers once needed to ship LLM applications — indexing layers, query engines, retrieval pipelines, carefully orchestrated agent loops — is collapsing.

When asked what the core differentiator is when the stack collapses, Liu says: **context.** Agents need to decipher file formats to extract the right information. The competitive moat moves to context engineering — curating and structuring the data fed into models. LlamaIndex's positioning: document parsing + OCR as the layer that agents need most.

Agent patterns have consolidated toward what Liu calls a "managed agent diagram" — a harness layer combined with tools, MCP connectors, and skills plug-ins, rather than custom-built orchestration for every workflow. Frameworks like LangChain and LlamaIndex "were built for a specific moment when LLMs were less capable" — that moment has passed.

Jerry also continues to push the PDF parsing problem: "PDFs are designed for print and display, not to give back linearized, semantically meaningful text. It matters more now because agents are the consumers of documents."

- VentureBeat profile: [https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- PDF thread: [https://x.com/jerryjliu0/status/2050961097642086427](https://x.com/jerryjliu0/status/2050961097642086427)

## Steipete vs. Anthropic: the OpenClaw ban and the "backfired completely" arc

The narrative crystallized over the weekend and is still the dominant steipete thread. The timeline:

1. Anthropic cut off third-party harnesses (including OpenClaw) from Claude subscriptions, requiring separate API-based billing. Steipete and OpenClaw board member Dave Morin "tried to talk sense into Anthropic, best we managed was delaying this for a week."
2. Steipete: "woke up and my mentions are full of these. Funny how timings match up — first they copy some popular features into their closed harness, then they lock out open source." ([https://x.com/steipete/status/2040209434019082522](https://x.com/steipete/status/2040209434019082522))
3. Anthropic temporarily banned steipete's account, then reinstated it after the post went viral.
4. The forced migration to Codex/GPT-5.5 is now widely credited as an *upgrade*. Community: "wild that 3 months ago Anthropic banned OpenClaw from Claude subscriptions to slow it down, now it runs on GPT-5.5 and it's apparently the best it's ever been."

Coverage: [TechCrunch (ban)](https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/), [TechCrunch (pricing)](https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/), [The Decoder](https://the-decoder.com/anthropic-cuts-off-third-party-tools-like-openclaw-for-claude-subscribers-citing-unsustainable-demand/)

## Mitsuhiko: agent psychosis, code quality, and the maintainer's burden

Armin Ronacher's "Agent Psychosis: Are We Going Insane?" blog post (January 2026) continues to be the anchor reference for the code-quality-degradation argument. His core points, still actively cited:

- AI agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output. Memoryful agents validate and amplify users' impulses rather than collaborating critically.
- **Functioning code ≠ good code**: agents write code that "runs somehow" — failing silently with default values instead of clean aborts, creating unnoticed corrupt data and rapidly growing tech debt.
- **The maintainer's burden**: AI-generated PRs are cheap to create but expensive to review. The asymmetry is untenable. "When more and more people tell me they no longer know what code is in their own codebase, I feel like something is very wrong."

He also spoke at AI Engineer Europe 2026 in April on these themes. His recent code contributions: an SSE-fallback PR for pi when WebSocket connections fail, recommendations for iroh as agent-to-agent networking infrastructure.

Blog posts: [Agent Psychosis](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/), [The Final Bottleneck](https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/)

## LLMJunky: MemPalace hype + the ClawdHub backdoor wake-up call

Two threads from LLMJunky worth highlighting:

**MemPalace** (Milla Jovovich's open-source AI memory system): LLMJunky was one of the first to boost the project — "Milla Jovovich has a Github. She's co-developed the highest-scoring AI memory system ever benchmarked." MemPalace gives LLMs persistent, cross-session memory using local ChromaDB + SQLite with zero API costs. 96.6% raw on LongMemEval (100% hybrid, with asterisks — the community caught real problems with the 100% claim within hours). 23K+ GitHub stars. ([https://x.com/LLMJunky/status/2041377497447649609](https://x.com/LLMJunky/status/2041377497447649609))

**ClawdHub backdoor warning**: A white-hat security researcher built a backdoored Claude skill, inflated it to #1 on ClawdHub with 4,000+ fake downloads, then watched devs execute potentially malicious code. LLMJunky: "This is truly unbelievable. This white hat is providing over-eager AI builders a much-needed wake up call." The skill supply-chain attack surface is the new npm left-pad — except the blast radius is bigger because skills run with agent permissions. ([https://x.com/llmjunky/status/2016032497629319404](https://x.com/llmjunky/status/2016032497629319404))

## Matt Pocock: skills repo at 45K stars + AI negligence thread still burning

Matt Pocock's `.claude` skills repository passed 45,000 GitHub stars — the 12 published skills (`grill-me`, `tdd`, `diagnose`, `to-prd`, `to-issues`, `triage`, `zoom-out`, `caveman`, etc.) are now the de facto template for Claude Code customization. The "Ralph Wiggum" loop — Claude Code pulling from a GitHub Issues backlog, prioritizing, and committing to branches autonomously while you're AFK — remains the most-referenced pattern.

His "AI negligence" thread from yesterday (74K likes) is still the most active discussion across our scan: "What do you do if someone on your team is using AI negligently? I.e. not reviewing, not caring, leaning into the slop." Still generating substantive replies about team governance, prompt-history-as-audit-trail, and whether "code is cheap" is a mind virus.

- Skills repo: [github.com/mattpocock/skills](https://github.com/mattpocock/skills)
- AI negligence thread: [https://x.com/mattpocockuk/status/2050860119928262883](https://x.com/mattpocockuk/status/2050860119928262883)
- "Writing code is cheap, maintaining code is not": [https://x.com/mattpocockuk/status/2050167042771194226](https://x.com/mattpocockuk/status/2050167042771194226)

## Thariq (trq212): Claude Code internals — prompt caching, tasks, and skills

Thariq continues to be the primary source on Claude Code internals:

- **"Prompt Caching Is Everything"**: long-running agentic products like Claude Code are made feasible by prompt caching, which reuses computation from previous roundtrips and significantly decreases latency and cost. He recently shipped a hotfix (v2.1.62) after a caching bug caused usage limits to be consumed faster than normal, and reset rate limits for all users. ([https://x.com/trq212/status/2024574133011673516](https://x.com/trq212/status/2024574133011673516))
- **Todos → Tasks**: the new primitive that helps Claude Code track and complete complicated projects across multiple sessions or subagents. ([https://x.com/trq212/status/2014480496013803643](https://x.com/trq212/status/2014480496013803643))
- **"How We Use Skills" deep-dive**: skills have become one of the most-used extension points in Claude Code. ([https://x.com/trq212/status/2033949937936085378](https://x.com/trq212/status/2033949937936085378))
- **Spec-based feature building**: "my favorite way to use Claude Code to build large features is spec based — start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool, then make a new session to execute the spec." ([https://x.com/trq212/status/2005315275026260309](https://x.com/trq212/status/2005315275026260309))

## Boris Cherny: Opus 4.7 tips and the "software engineer title will go away" thesis

Boris Cherny (head of Claude Code) shared practical Opus 4.7 tips and a bigger-picture prediction:

**Opus 4.7 workflow tips:**
- Use **Auto mode** — permission prompts get routed to a model-based classifier. No more babysitting.
- Use the new `/fewer-permission-prompts` skill to scan session history and recommend safe commands for your allowlist.
- Opus 4.7 uses **adaptive thinking** instead of thinking budgets — tune effort (low → max) rather than token counts.
- **Opus 4.7 works better when it has everything upfront** — one detailed prompt covering what you want, constraints, and file locations beats 10 small messages.
- **Verification is 2-3x more important with Opus 4.7** than before — make sure Claude has a way to verify its work.

**Bigger-picture prediction**: the "software engineer" title will start to disappear, replaced by "builder" or "product manager." The work is already more than just coding. ([Lenny's Podcast](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens))

Tips source: [howborisusesclaudecode.com](https://howborisusesclaudecode.com/), various community summaries.

## swyx: Dreamer's rise and fall + the "coding agents breaking containment" thesis

Two swyx threads still in circulation:

**/dev/agents → Dreamer → Meta acqui-hire**: swyx was the first to flag Dreamer (formerly /dev/agents) as "the most ambitious full-stack consumer+coding agent startup I've ever seen." Sidekick was an agent that builds agents. Backed by $56M at a $500M valuation. Then Meta acq-hired the entire founding team five weeks after launch. The pattern: ambitious agent startups get absorbed before they can compete. ([https://x.com/swyx/status/2023820429258117158](https://x.com/swyx/status/2023820429258117158))

**"2025 was coding agents, 2026 is coding agents breaking containment."** swyx's thesis: every agent needs a sandbox, every agent needs infrastructure, and to solve coding agents you need to solve agent infra more broadly. He uninstalled ChatGPT ("Codex is strict superset now") and notes DeepSeek V4 as the efficiency play.

Also: swyx "vibe designed" the 6,000-person AI Engineer conference website at a climbing gym "without reading a single line of code including 99% video asset performance optimization." ([https://x.com/swyx/status/2021498862012334274](https://x.com/swyx/status/2021498862012334274))

## Simon Willison: April newsletter, "Deep Blue" developer ennui, and the agent definition

A quieter day for Simon after a busy weekend, but the context is important:

- **April 2026 newsletter** posted May 4 — sponsors-only monthly wrap. ([simonwillison.net/2026/May/4/april-newsletter](https://simonwillison.net/2026/May/4/april-newsletter/))
- **"Deep Blue"** — the term he and Adam Leventhal coined on the Oxide and Friends podcast for the psychological ennui → existential dread software developers feel as LLMs encroach. Named after IBM's chess machine. "Anyone paying close attention to coding agents is already feeling this." ([https://x.com/simonw/status/2023143358512976154](https://x.com/simonw/status/2023143358512976154), [simonwillison.net/2026/Feb/15/deep-blue](https://simonwillison.net/2026/Feb/15/deep-blue/))
- **Agent definition settled**: "I think 'agent' may finally have a widely enough agreed upon definition to be useful jargon now. An LLM agent runs tools in a loop to achieve a goal." ([simonw.substack.com](https://simonw.substack.com/p/i-think-agent-may-finally-have-a))
- **Claude Code revenue**: Simon flagged that Claude Code's run-rate revenue has grown to over $2.5 billion and more than doubled since January 2026. ([https://x.com/simonw/status/2022044549733056861](https://x.com/simonw/status/2022044549733056861))
- **LLM tool releases**: llm 0.32a1 (April 29), llm-openai-via-codex (April 23), llm-anthropic (April 16). Active development continues.

## Theo: T3 Code, T3 Chat, and the ongoing platform-trust saga

Theo's primary contributions this cycle:

- **T3 Code**: the open-source desktop app acting as a GUI frontend for coding agents (Codex and Claude Code). Not an AI model — it connects to existing services via API keys. Picking up serious adoption as a lightweight alternative to full IDEs. ([github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code))
- **Platform frustration arc**: Theo publicly reversed on Claude Code ("I defended Anthropic in December and January. Opus 4.5 was a defining moment. This is why I'm so frustrated") and has been the loudest voice on the Anthropic trust erosion — from the pricing A/B test debacle to the OpenClaw lockout.
- **Azure cache-miss resolution**: closed out the 99.9% cache-miss story — Azure is now *faster* than OpenAI for GPT-5.5. Live dashboard at [azure.t3.gg](https://azure.t3.gg).

---

## Other / non-coding AI

- **Milla Jovovich's MemPalace** — actress co-developed an open-source AI memory system using Claude Code. 23K+ GitHub stars, 96.6% on LongMemEval (100% hybrid with caveats). Stores all conversation data verbatim and uses vector search for retrieval, running entirely locally on ChromaDB + SQLite. Benchmark methodology controversy resolved by community within hours of launch. ([github.com/milla-jovovich/mempalace](https://github.com/milla-jovovich/mempalace))
- **Latent Space pod with NOETIK_ai** — "Training Transformers to solve 95% failure rate of Cancer Trials" — patient-selection foundation models for cancer clinical trials. swyx: "loved the vibes."
- **State of AI: May 2026** (Air Street Press) — the monthly landscape report. Agents jumped from 12% to 66% success on real computer tasks per Stanford's AI Index. ([press.airstreet.com](https://press.airstreet.com/p/state-of-ai-may-2026))

---

## Videos worth watching

- **Karpathy: From Vibe Coding to Agentic Engineering** (Sequoia AI Ascent 2026) — the full fireside chat. Software 3.0, MenuGen, December inflection, verifiability framework. [https://www.youtube.com/watch?v=96jN2OCOfLs](https://www.youtube.com/watch?v=96jN2OCOfLs)
- **Mattpocock — Full AFK Coding Workflow** — complete walkthrough from idea → PRD → issues → Ralph loop → QA. [https://www.youtube.com/watch?v=-QFHIoCo-Ko](https://www.youtube.com/watch?v=-QFHIoCo-Ko)
- **Mattpocock — "Software Fundamentals Matter More Than Ever"** — the thesis behind AI Hero. [https://www.youtube.com/watch?v=v4F1gFy-hqg](https://www.youtube.com/watch?v=v4F1gFy-hqg)
- **Boris Cherny — 6 Opus 4.7 Tips** (YouTube Short) — auto mode, effort tuning, /recap, verification-first prompting. [https://www.youtube.com/shorts/K0t7wExkPEA](https://www.youtube.com/shorts/K0t7wExkPEA)
- **ClawSweeper Demo: 50 Codex Reviews in Parallel** — steipete running the full issue→PR→review→repair→automerge loop. [https://www.youtube.com/watch?v=n8yRqaQ0wnU](https://www.youtube.com/watch?v=n8yRqaQ0wnU)

## News articles

- **VentureBeat — "The AI scaffolding layer is collapsing: LlamaIndex's CEO explains what survives"** — Jerry Liu's "context is the moat" thesis. [https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- **TechCrunch — "Anthropic temporarily banned OpenClaw's creator from accessing Claude"** — the full Steipete/Anthropic saga. [https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/](https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/)
- **Fast Company — "Inside OpenAI's fast-growing Codex"** — profile of the Codex team, with steipete. [https://www.fastcompany.com/91498841/openai-codex-growing-fast-agentic-engineering](https://www.fastcompany.com/91498841/openai-codex-growing-fast-agentic-engineering)
- **Lenny's Newsletter — "Head of Claude Code: What happens after coding is solved"** — Boris Cherny interview. [https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens)
- **The Hacker News — "2026: The Year of AI-Assisted Attacks"** — security landscape overview, agent credential risks. [https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html](https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html)
- **Bessemer — "Securing AI agents: the defining cybersecurity challenge of 2026"** — VC perspective on the agent security gap. [https://www.bvp.com/atlas/securing-ai-agents-the-defining-cybersecurity-challenge-of-2026](https://www.bvp.com/atlas/securing-ai-agents-the-defining-cybersecurity-challenge-of-2026)
