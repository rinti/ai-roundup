# 2026-05-03 — Karpathy's Software 3.0, Sandcastle's 889 Zero-Human Commits & the LLM Wiki Movement

## Karpathy: Sequoia Ascent 2026 fireside chat — "From Vibe Coding to Agentic Engineering"

Karpathy posted a summary thread of his Sequoia Ascent 2026 fireside chat, accompanied by a blog post and full YouTube video. The talk is the clearest articulation yet of his **Software 3.0** framework and where he thinks the industry is actually headed now that agents work.

Key highlights from the thread:

1. **LLMs are about much more than speeding up coding.** Three examples of new horizons:
   - **MenuGen**: Karpathy built an app that photographs a restaurant menu and generates food images. It became *completely obsolete* when Gemini could simply take the photo and overlay images directly via Nanobanana — no app needed. The interface layer itself is what gets eaten.
   - **AutoResearch**: an AI agent gets a small but real LLM training setup and experiments autonomously overnight — modifies code, trains for 5 minutes, checks if the result improved, keeps or discards, and repeats.
   - **LLM Knowledge Bases**: before AI, no software could take a messy pile of documents, understand them, restructure them, and turn them into a useful wiki. Now it can.

2. **Software 3.0 = prompting an LLM interpreter.** Software 1.0 was explicit code, 2.0 was trained neural networks, 3.0 is prompts + context + agents + tools + memory + verification. The context window is the new programming surface.

3. **The December 2025 inflection point.** Karpathy's coding ratio inverted from ~80% self-written in November to delegating ~80% to agents by December. "I can't remember the last time I corrected it."

4. **Vibe coding vs. agentic engineering.** Vibe coding raised the floor — anyone can build working software. Agentic engineering raises the ceiling — using agents while preserving professional quality.

5. **Verifiability is the key to automation.** AI automates fastest where output can be verified (math, code). "You can outsource your thinking, but you can't outsource your understanding."

Shruti Gandhi (Array VC) pulled out a nice summary of Karpathy's "obvious in 2026" for founders, highlighting that big labs trained AI on math and code but *not* on your industry knowledge — the opportunity is domain-specific training data.

Thread: [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)
Blog: [karpathy.bearblog.dev/sequoia-ascent-2026/](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
Video: [Andrej Karpathy: From Vibe Coding to Agentic Engineering (YouTube)](https://www.youtube.com/watch?v=96jN2OCOfLs)
Full playlist: [AI Ascent 2026 (YouTube)](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)

## Matt Pocock: Sandcastle hits 889 commits — none hand-coded

Matt Pocock posted a follow-up on Sandcastle, his open-source TypeScript framework for orchestrating sandboxed coding agents:

> "If you're looking for a project I've shipped with my skills, Sandcastle is a great example. Check the issue history for specs/tickets the AFK agents closed. 889 commits, none of them hand-coded."

This is a concrete proof-of-concept for the "dark software factory" pattern — a real, shipped project where the human writes specs and the agents do all the implementation. The recommended workflow is `/grill-with-docs` → `/to-prd` → `/to-issues`, then hand the issues to Sandcastle which spawns N parallel Claude/Codex agents in Docker sandboxes.

Meanwhile, Pocock is thinking about **making the sandbox pluggable** — moving off Docker-only to an orchestrator that works with any coding agent in any sandbox, local or remote.

Thread: [https://x.com/mattpocockuk/status/2049942742743019528](https://x.com/mattpocockuk/status/2049942742743019528)
Pluggable sandbox discussion: [https://x.com/mattpocockuk/status/2042548410264264973](https://x.com/mattpocockuk/status/2042548410264264973)
Repo: [github.com/mattpocock/sandcastle](https://github.com/mattpocock/sandcastle)

### Matt Pocock's Skills repo — TDD for agents

Related: Pocock's **skills** repo (open-sourced from his personal `.claude` directory) continues to gain traction. It's a collection of 21 structured Claude Code skills designed around the premise that AI coding tools are fast but unreliable. The headline skill is **TDD** — enforcing the red-green-refactor loop at the agent level so Claude Code can't write implementation before a failing test exists.

Danny Shmueli wrote up how he's using the skills inside Hermes to run sub-agents on multi-surface features — worth reading as a real-world integration example.

Repo: [github.com/mattpocock/skills](https://github.com/mattpocock/skills)
Danny's writeup: [dannyshmueli.com/2026/04/29/Matt-Pocock-Skills-Hermes-Subagents-Feature-Work/](https://dannyshmueli.com/2026/04/29/Matt-Pocock-Skills-Hermes-Subagents-Feature-Work/)

## Karpathy's LLM Wiki / Idea Files — still generating discussion

Karpathy's "LLM Knowledge Bases" concept from early April continues to ripple. The original tweet (17K+ likes, 3M+ views) described a system where raw source documents get dropped into a `raw/` directory and an LLM incrementally compiles them into a structured wiki — interlinked `.md` files with summaries, backlinks, and concept articles. Instead of shipping an app, he shared the whole thing as an **"idea file"** — a plain-text gist you hand to your own agent so it can build you a custom version.

The most interesting follow-on: **Farzapedia** — someone turned 2,500 diary entries, Apple Notes, and iMessage conversations into 400 detailed wiki articles via an LLM. Karpathy endorsed it as a good example of explicit, portable, composable personalization — your knowledge belongs to you, not to ChatGPT or Claude.

He also posted a sharp observation on LLM memory: *"One common issue with personalization in all LLMs is how distracting memory seems to be for the models. A single question from 2 months ago about some topic can keep coming up as some kind of a deep interest of mine with undue mentions in perpetuity. Some kind of trying too hard."* The LLM Wiki approach sidesteps this by making the knowledge artifact explicit and editable.

Original thread: [https://x.com/karpathy/status/2039805659525644595](https://x.com/karpathy/status/2039805659525644595)
Idea file follow-up: [https://x.com/karpathy/status/2040470801506541998](https://x.com/karpathy/status/2040470801506541998)
Farzapedia endorsement: [https://x.com/karpathy/status/2040572272944324650](https://x.com/karpathy/status/2040572272944324650)
LLM memory tweet: [https://x.com/karpathy/status/2036836816654147718](https://x.com/karpathy/status/2036836816654147718)

## Simon Willison: iNaturalist sightings built on phone via Claude Code for web

Simon Willison added a new feature to his blog that imports his iNaturalist wildlife photography — and built the entire thing on his phone using **Claude Code for web**. Sightings now show up on his homepage, date archive pages, and in site search. He also back-populated over a decade of iNaturalist sightings, so historical photos (lemurs from Madagascar, 2019) are now browsable on his blog.

Classic Simon move: a small, practical project that quietly demonstrates the state of the art in mobile-first agentic development.

Blog post: [simonwillison.net/2026/May/2/sightings/](https://simonwillison.net/2026/May/2/sightings/)

### Simon on agent security: "Don't run agents near production credentials"

Still reverberating from late April — Simon's response to an agent-caused incident:

> "The two lessons I see are: 1. Don't run agents anywhere they might be able to access production environment credentials — it's on you to know which credentials those are. 2. Keep tested backups that are independent from your production host."

This fits his broader **Lethal Trifecta** framework (access to private data + exposure to untrusted content + ability to externally communicate = attacker can trick the system into stealing your data). Lenny Rachitsky recently amplified the concept on his podcast, calling it out as the key security mental model for the agent era.

Agent credentials tweet: [https://x.com/simonw/status/2048598378171572332](https://x.com/simonw/status/2048598378171572332)
Lethal Trifecta explainer: [simonw.substack.com/p/the-lethal-trifecta-for-ai-agents](https://simonw.substack.com/p/the-lethal-trifecta-for-ai-agents)

## steipete: OpenClaw-Anthropic drama continues, new releases

The OpenClaw vs. Anthropic saga is still the background hum of the ecosystem. Quick recap for context: in April, Anthropic told subscribers they could no longer use Claude subscriptions with third-party harnesses like OpenClaw. steipete's account was temporarily banned. After massive backlash, it was reinstated within hours.

steipete's sharpest take: *"Funny how timings match up, first they copy some popular features into their closed harness, then they lock out open source."*

More recently, steipete has been focused on **OpenClaw's MCP integration** — the next version of OpenClaw is itself an MCP, meaning you can use it instead of Anthropic's message channel MCP to connect to a wider range of message providers. He also demoed Chrome DevTools MCP support, where Codex drives a live browser session to navigate sites like Microsoft Foundry without the developer needing to take screenshots.

OpenClaw continues to ship at pace (316K+ GitHub stars). The latest releases include expanded provider support, reliability improvements, and the `--channel dev` flag for bleeding-edge users.

"Lock out open source" tweet: [https://x.com/steipete/status/2040209434019082522](https://x.com/steipete/status/2040209434019082522)
OpenClaw as MCP: [https://x.com/steipete/status/2037715163562815817](https://x.com/steipete/status/2037715163562815817)
Chrome DevTools MCP demo: [https://x.com/steipete/status/2037177396315488627](https://x.com/steipete/status/2037177396315488627)
Anthropic ban story (TechCrunch): [techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/](https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/)

## Boris Cherny: Claude Code Review — multi-agent PR review

Boris Cherny announced **Code Review** for Claude Code — a team of agents that runs deep review on every PR. He notes that code output per Anthropic engineer is up 200% this year and reviews were the bottleneck.

How it works: when a PR is opened, Code Review dispatches a fleet of specialized agents that examine code changes in the context of the full codebase. They look for logic errors, security vulnerabilities, broken edge cases, and subtle regressions in parallel, then verify bugs to filter out false positives and rank by severity. The result lands as a single high-signal overview comment plus in-line comments for specific bugs.

On large PRs (1,000+ lines changed), 84% get findings averaging 7.5 issues. On small PRs (<50 lines), 31% get findings averaging 0.5 issues.

Cherny also shared his personal workflow: he runs 5 Claudes in parallel in his terminal *and* 5–10 Claudes on claude.ai/code in parallel with the local ones.

Code Review thread: [https://x.com/bcherny/status/2031089411820228645](https://x.com/bcherny/status/2031089411820228645)
How I use Claude Code thread: [https://x.com/bcherny/status/2007179832300581177](https://x.com/bcherny/status/2007179832300581177)
Lenny's Podcast episode: [lennysnewsletter.com/p/head-of-claude-code-what-happens](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens)

## swyx: Notion AI on Latent Space — 5 rebuilds, 100+ tools

swyx finally landed the Notion AI episode he'd been chasing for three years. Simon Last and Sarah Sachs from Notion told the full story of rebuilding Notion AI **five times**. The episode covers the evolution from early experiments to the current system with 100+ tools, the MCP-vs-CLI debate, and their vision of a "software factory" future.

Simon Last's key insight: *"Models are changing really fast, often in ways that will break your product and technical assumptions. There's no way around this — the only way forward is to relentlessly iterate."*

swyx's broader thesis for 2026: **coding agents are breaking containment**. 2025 was the year of coding agents; 2026 is the year they begin doing everything else. Coding agents continue to win because they generate software and software eats the world — transitive property: coding agents eat the world.

Notion episode: [latent.space/p/notion](https://www.latent.space/p/notion)
Video: [Notion's Sarah Sachs & Simon Last on Custom Agents, Evals, and the Future of Work (YouTube)](https://www.youtube.com/watch?v=ATt7QJgt-2k)

## Jerry Liu: ParseBench — first OCR benchmark for the agentic era

Jerry Liu and LlamaIndex open-sourced **ParseBench**, the first document OCR benchmark built for AI agents. It's a benchmark of ~2,000 human-verified enterprise document pages with 167K+ test rules across five dimensions: tables, charts, content faithfulness, semantic formatting, and visual grounding.

LlamaParse Agentic scored 84.9% overall (~1.2¢/page) — the only method competitive across all five dimensions. The pitch: as the scaffolding layer collapses (RAG pipelines, indexing layers, query engines all being absorbed by frontier models), the differentiator is **context** — being able to decipher real-world file formats accurately and cheaply.

Jerry also articulated LlamaIndex's broader vision: 2026 is the year agents go from workflows to employees — long-horizon agents with event triggers, persistent task backlogs, and inbox-style interfaces that autonomously maintain living documents over weeks.

ParseBench thread: [https://x.com/jerryjliu0/status/2043721536922955918](https://x.com/jerryjliu0/status/2043721536922955918)
Repo: [github.com/run-llama/ParseBench](https://github.com/run-llama/ParseBench)
VentureBeat on scaffolding collapse: [venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives/)

## mitsuhiko: code quality degradation and "Agent Psychosis"

Armin Ronacher continues to be the ecosystem's most articulate skeptic-practitioner. His March tweet — *"There will be more of this. And as much as we're joking about it, we're seeing a massive degradation of code quality right now and we're increasingly only catching it way too late"* — was RT'd by Jeremy Howard and keeps circulating.

His longer-form **"Agent Psychosis"** essay (from January) argues that AI agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output. AI-generated PRs are cheap to create but expensive to review, and the asymmetry is becoming untenable.

From the Pragmatic Engineer podcast with Mario (Pi creator) and Armin:
- *"More junior engineers and product managers deploy agent-scripted counterarguments when a senior colleague kicks an idea to the curb. This makes decision-making exhausting, and more bad ideas make it into production."*
- Automation bias: once devs confirm an agent can produce acceptable code, they review its output less — even though agents can and do produce slop.

Code quality tweet (RT'd by Jeremy Howard): [https://x.com/jeremyphoward/status/2036507393337729404](https://x.com/jeremyphoward/status/2036507393337729404)
Agent Psychosis essay: [mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis)

## Other notable items

### Thariq: Claude Code voice mode at 100%, prompt caching hotfix

Voice mode is now rolled out to 100% of Claude Code users including Desktop. The pitch: closing the 3.7x gap between speaking (~150 wpm) and typing (~40 wpm) for input to coding agents. Separately, Thariq pushed a hotfix in 2.1.62 for a prompt caching bug that was consuming usage limits faster than normal, and reset rate limits for all users.

Voice mode: [https://x.com/trq212/status/2032632599429136753](https://x.com/trq212/status/2032632599429136753)
Hotfix: [https://x.com/trq212/status/2027232172810416493](https://x.com/trq212/status/2027232172810416493)

### Theo: T3 Code confirmed safe for Claude subscriptions

After weeks of uncertainty, Anthropic explicitly confirmed that tools wrapping Claude Code for local use are allowed. Theo: *"One piece of good news — T3 Code confirmed SAFE FOR CLAUDE SUBS. We FINALLY have explicit confirmation that tools wrapping Claude Code for local use are allowed."*

[https://x.com/theo/status/2040221237503561780](https://x.com/theo/status/2040221237503561780)

### Simon Willison: Agentic Engineering Patterns guide

Simon published a comprehensive guide to Agentic Engineering Patterns — coding practices for getting the best results out of coding agents like Claude Code and Codex. Key patterns include red/green TDD adapted for agent workflows, linear walkthroughs for code comprehension, and the principle that "code is now inexpensive" so preserve domain expertise by focusing agent activity on routine implementation.

Guide: [simonwillison.net/guides/agentic-engineering-patterns/](https://simonwillison.net/guides/agentic-engineering-patterns/)

### LLMJunky: today's models will look pedestrian in a year

Short but clean take: *"We're gonna look at today's models next year, and think the same way about them that we think about o1 and Sonnet 3.7 now. These same models so many are going crazy about will look pedestrian."*

[https://x.com/LLMJunky/status/2049638561406685396](https://x.com/LLMJunky/status/2049638561406685396)

## Off-topic / non-AI

### mitsuhiko on FastCGI's 30th birthday

Armin RT'd Andrew Ayer's piece arguing FastCGI sidesteps the security pitfalls baked into HTTP reverse proxying. mitsuhiko's gloss: *"What's old is new again. I'm not sure why FastCGI lost out to HTTP so much in recent years on backends but I would guess that people wanted websockets. Still a good protocol."*

[https://x.com/mitsuhiko/status/2049593120786911244](https://x.com/mitsuhiko/status/2049593120786911244)
