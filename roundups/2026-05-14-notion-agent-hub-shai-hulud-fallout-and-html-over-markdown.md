---
title: "Notion Agent Hub, Shai-Hulud Fallout, and HTML Over Markdown"
date: "2026-05-14"
summary: "Notion launched its Developer Platform — Workers, database sync, External Agent API — turning itself into a control room for Claude Code, Cursor, Codex, and Decagon. The Shai-Hulud supply chain campaign keeps reverberating: Mitsuhiko doubled down on the 'use fewer dependencies' sermon and flagged that the latest victim was published via OIDC trusted publishing. Thariq's 'HTML is the new markdown' post crossed 750k views and Karpathy amplified the thesis to 2M+ views with his 'structure your response as HTML' tip. Simon Willison shipped datasette-agent 0.1a0 and blogged about Shopify's public-only River agent system as a learning-by-osmosis model. Jerry Liu declared the AI framework/scaffolding era over — context quality is the new moat. Matt Pocock pushed /handoff and /prototype skills for mid-plan prototyping. The Air Street State of AI May 2026 report landed with highlights on Chinese open-weights coding models and Anthropic's Project Deal agent economy."
tags:
  - Notion Developer Platform
  - Supply Chain Security
  - HTML vs Markdown
  - Claude Code & Anthropic
  - Agentic Coding Workflows
  - LlamaIndex & Context Engineering
  - Industry & Research
---

# AI Roundup — May 14, 2026

## Notion Becomes an Agent Hub

**Notion launched its Developer Platform with Workers, database sync, and an External Agent API.** ([Notion release notes](https://www.notion.com/releases/2026-05-13), [TechCrunch](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/)). At launch, **Claude Code, Cursor, Codex, and Decagon** are supported partner agents. Users can chat directly with external agents, assign them work, and track their progress — all inside Notion. Workers are a hosted runtime for custom code: you and your coding agent write the logic, deploy through the CLI, run it in a secure sandbox. Free through August 11, then Notion credits. Database sync pulls in data from Salesforce, Zendesk, Postgres, etc. Notion also shipped a CLI built specifically for developers and coding agents — sign in, read/write in Notion, build and deploy Workers programmatically. Curated agent library includes agents from Ramp, Clay, and Vercel, each with a starter prompt. This was [previewed on Latent Space](https://x.com/swyx/status/2044220922387984408) in April when swyx interviewed Notion's Simon Last and Sarah Sachs — Notion has rebuilt Notion AI five times, and their thinking on "software factories" of agents that spec, code, test, debug, and review together is clearly materializing here.

---

## Supply Chain Security — Shai-Hulud Continues

**The worm hooks `.claude/settings.json` and survives `npm uninstall`.** ([@LLMJunky](https://x.com/LLMJunky/status/2054232427292184995)). The "Mini" variant has now hit OpenSearch, Mistral AI, Guardrails AI, UiPath, and Squawk packages across npm and PyPI. The new payload embeds itself in `.claude/settings.json` and `.vscode/tasks.json` so it re-executes on every tool event, long after the infected package is gone. Practical advice: wipe the OS and rotate everything.

**Mitsuhiko: OIDC is not the silver bullet.** ([@mitsuhiko](https://x.com/mitsuhiko/status/2053974969202176401)). The latest Shai-Hulud victim was published via OIDC trusted publishing. Mitsuhiko re-pinned his 2025 [*Build It Yourself*](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/) and 2016 [*Open Source Trust Scaling*](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/) posts. When asked about Pi's own dependency count: *"It has too many and we need to do something about it."*

**Repo-hardening skill.** Kevin Kern built a Claude Skill that checks for pnpm 11+ policy, release-age gates, lockfile hardening, and risky dependency specs. ([@kevinkern](https://x.com/kevinkern/status/2054295740739174627)). LLMJunky's companion proposal: implement a **minimum age for installable packages** as a baseline defense.

---

## HTML Is the New Markdown

**Thariq: "I've stopped writing markdown files for almost everything."** ([@trq212](https://x.com/trq212/status/2052811606032269638), 750k+ views). The Anthropic engineer's thesis: token cost is the wrong metric — the right metric is whether the output gets used. A 2,800-token Markdown plan that nobody reads delivers nothing. An 8,000-token HTML plan that gets opened, understood, and acted on delivers value. In head-to-head comparisons, HTML won 17 of 20 matchups. Simon Willison picked it up: [*Using Claude Code: The Unreasonable Effectiveness of HTML*](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/).

**Karpathy amplified to 2M+ views.** ([@karpathy](https://x.com/karpathy/status/2053872850101285137)). His progression for AI output: raw text → markdown (current default) → **HTML (forming new default)** → eventually interactive neural videos. The bigger thesis: *"audio is the human-preferred input to AIs; vision is the preferred output from them."* Best reply, on why it works as a *quality* constraint ([@bugrasa](https://x.com/bugrasa/status/2054413925102260507)): *"Slideshow mode forces the model to distill to the most important point per slide, which often produces tighter reasoning than free-form output."*

---

## Claude Code & Anthropic

**Agent View + /goal shipped.** Agent View is tmux for Claude Code — run `claude agents` to see every session (running, blocked, done) in one list. `/goal` sets a completion condition and Claude keeps working across turns until a separate grader model decides the job is done. ([@trq212](https://x.com/trq212/status/2053979505346425179), [@ClaudeDevs](https://x.com/ClaudeDevs/status/2054351031279186040)). swyx framed the progression: `/skill` = preset prompts, `/plan` = human-refined inputs, `/goal` = AI-evaluated outputs. Sharpest critique: *"each level just moves the bottleneck — /goal needs a good eval, and writing evals that actually catch bad outputs is harder than writing the prompt was."* ([@egbennis](https://x.com/egbennis/status/2054443835892105613)).

**Fast mode for Opus 4.7 in research preview.** ([@ClaudeDevs](https://x.com/ClaudeDevs/status/2054266327771275435)). Available in the API and inside Claude Code.

**Boris Cherny: Cowork + Opus 4.7 one-shots travel booking.** ([@bcherny](https://x.com/bcherny/status/2053994083497238712), 410k views). Eight flights and five hotels booked from a preferences doc — first time it one-shotted it. Cowork still presents for approval before purchase.

**Claude Code eating Macs alive.** ([@simonw](https://x.com/simonw/status/2053973809510916205)). Simon opened Activity Monitor and found claude-code processes consuming ~30 GB combined, largest at 4.9 GB.

---

## Agentic Coding Workflows

**Matt Pocock: prototyping during planning beats spec-writing.** ([@mattpocockuk](https://x.com/mattpocockuk/status/2054197055589921142)). Two new skills: `/handoff` compacts your current session to markdown so a sub-agent has the context; `/prototype` has the sub-agent prototype UI or backend in a clean session. For unknown-unknowns mid-plan: hand off → prototype → hand back. His `grill-me` skill previously [went viral at 9K stars](https://x.com/mattpocockuk/status/2036076132924100760) — it forces Claude to interview you about your design before building anything. He's now working on a `/learn-to-code` skill: *"AI is an amazing teaching tool, it just needs to be harnessed the right way."* ([video: New Skills! /handoff, /prototype, /review](https://www.youtube.com/watch?v=DNqsMXH6Eog))

**Theo: "Coding with agents is a trap, and we all fell for it."** ([pinned video](https://x.com/theo/status/2053924497267593593), 386k views). The core argument: *"AI disincentivizes you from learning about the pieces. And I think that's the biggest problem."* The nuance in his follow-up: "knowing your codebase" means architecture and data flow, not language syntax (which agents handle) and not deep framework internals. Also pushed the [State of AI for web devs 2026 survey](https://x.com/theo/status/2041715755306389780).

**Simon Willison: vibe coding and agentic engineering are converging.** ([blog post, May 6](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)). He admits he's no longer reviewing every line Claude Code writes — even for production code — because it consistently produces correct JSON API endpoints with SQL queries, tests, and documentation. He compares it to trusting a team at a larger org, but acknowledges Claude can't take accountability like humans can.

**Steipete: Codex rotated its own Telegram bot token.** ([@steipete](https://x.com/steipete/status/2054433442821980521)). Codex was debugging a Telegram issue, needed a new token, used **Peekaboo** to open the Telegram Mac app, talk to BotFather, and just do it. Computer Use is at the "agent fixes its own auth" stage.

---

## LlamaIndex & Context Engineering

**Jerry Liu: the AI framework era is over.** ([VentureBeat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives), [AI Market Watch](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w)). Agent loops are now capable enough that the competitive moat moves to **context engineering** — curating and structuring the data fed into models. ~95% of LlamaIndex code is generated by AI, with engineers typing in natural language. Liu: *"the new programming language is essentially English."* Companion release: **LiteParse** ([@jerryjliu0](https://x.com/jerryjliu0/status/2054328239297106137)) — an open-source, model-free document parser handling 50+ document types with lightweight OCR integration.

---

## Simon Willison's Recent Blog Posts

**Shopify's River agent works only in public.** ([blog post, May 11](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/), [@simonw](https://x.com/simonw/status/2053529689122328947)). Shopify's internal coding agent River lives in Slack and politely declines DMs. Over 100 people react to threads, add context, and learn from watching. Willison draws the parallel to Midjourney's Discord-only launch forcing public prompt sharing and learning-by-osmosis.

**GitLab's restructuring decoded via git history.** ([blog post, May 11](https://simonwillison.net/2026/May/11/gitlab-act-2/)). Simon used version-control diffs of GitLab's and 37signals' public employee handbooks as a record of every promise quietly walked back.

**"Your AI Use Is Breaking My Brain" / Zombie Internet.** ([blog post, May 11](https://simonwillison.net/2026/May/11/zombie-internet/)). The "Zombie Internet" is worse than the "Dead Internet" theory: it involves people creating AI agents that interact with other people, influencer hustlebros spamming automated YouTube channels and blogs, and the cognitive load of navigating a world where lazy AI has infiltrated everything.

**datasette-agent 0.1a0 shipped.** ([release, May 12](https://simonwillison.net/2026/May/12/datasette/)). Along with datasette 1.0a29, datasette-agent-openai-imagegen 0.1a1, datasette-agent-charts 0.1a0, and llm 0.32a2.

**AI-run business experiments need human-in-the-loop.** ([@simonw](https://x.com/simonw/status/2051788176071745592)): *"AI-run business experiments are interesting and fun up to the point where they waste the time of humans who haven't opted into the experiments."*

---

## Industry & Research

**Air Street State of AI: May 2026.** ([Air Street Press](https://press.airstreet.com/p/state-of-ai-may-2026)). Highlights: four Chinese labs released open-weights coding models in a 12-day window (GLM-5.1, MiniMax M2.7, Kimi K2.6, DeepSeek V4) — all at roughly the same capability ceiling, none costing more than ⅓ of Claude Opus 4.7. Anthropic's internal "Project Deal" had 69 employee-backed agents close 186 transactions, with Opus 4.5 agents systematically out-negotiating weaker Haiku 4.5 on price. Air Street NYC AI meetup happening today (May 14).

**Code with Claude 2026 recap (May 6).** ([Anthropic](https://claude.com/blog/code-w-claude-sf-2026-sf), [Simon's live blog](https://simonwillison.net/2026/May/6/code-w-claude-2026/)). Major announcements: **Dreaming** (agents review past sessions to self-improve, research preview), **Outcomes** (define success rubric, separate grader evaluates), **Multiagent Orchestration** (lead agent fans out to specialist subagents), and the SpaceX/xAI Colossus 1 compute deal (220k NVIDIA GPUs). Harvey reported 6x jump in task completion rates. Rate limits doubled across Pro, Max, Team, and Enterprise.

**xAI/Anthropic Colossus deal concerns.** ([Simon's blog, May 7](https://simonwillison.net/2026/May/7/xai-anthropic/), [@simonw](https://x.com/simonw/status/2052436629365948920)). Anthropic gets Colossus 1 but xAI keeps the larger Colossus 2. Colossus 1's gas turbines ran without Clean Air Act permits and are linked to increased hospital admissions. Willison: *"sounds like a new form of supply chain risk for Anthropic."*

**Karpathy at Sequoia Ascent 2026.** ([blog summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/), [@karpathy](https://x.com/karpathy/status/2049903821095354523)). Three new horizons beyond "AI speeds up coding": menugen (apps fully engulfed by LLMs — Gemini overlaid food images on a menu photo without any app), Software 3.0 (the unit of programming shifts from a function to a paragraph, the context window is the program, the LLM is the interpreter), and December 2025 as the tipping point where agentic coding went from "helpful but messy" to consistently correct.

**Mitsuhiko's broader AI concerns.** His January essay [*Agent Psychosis*](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis) argued AI agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output. His February post [*A Language For Agents*](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/) explores what programming language design should look like in the agent era. The March concern (retweeted by Jeremy Howard): *"There will be more of this. And as much as we're joking about it, we're seeing a massive degradation of code quality right now."* ([@jeremyphoward](https://x.com/jeremyphoward/status/2036507393337729404))

---

## Tools & Releases

- **RepoBar with built-in browser** — ([@steipete](https://x.com/steipete/status/2053717468623872230)): opens issues/PRs/SHAs/workflows in an embedded browser for context while working. *"Still a bit vibey but gets the job done."*
- **Crabbox 0.12.0** — ([@steipete](https://x.com/steipete/status/2054094826375655441)): Azure Windows desktop + WSL2, Proxmox and Tensorlake providers, preflight checks, failure bundles, phase timing. [Release notes](https://github.com/openclaw/crabbox/releases/tag/v0.12.0).
- **imsg 0.6 + 0.7** — ([@steipete](https://x.com/steipete/status/2051905175355351440)): Private API bridge, watch/history reliability fixes, better chat + account diagnostics.
- **ClawSweeper** (OpenClaw maintenance bot) — ([@steipete](https://x.com/steipete/status/2051020548335874369)): handles the full loop: issue → fix/build → guarded PR → review → repair → re-review → automerge. Open source, runs on Codex.
- **datasette-agent 0.1a0** + datasette-agent-charts, datasette-agent-openai-imagegen, llm 0.32a2 — ([simonwillison.net](https://simonwillison.net/2026/May/12/datasette/))
- **LiteParse / liteparse-server** (LlamaIndex) — ([@jerryjliu0](https://x.com/jerryjliu0/status/2054328239297106137)): open-source model-free document parser for 50+ document types with OCR integration.

---

## Videos & Podcasts

- **Theo — "Coding with agents is a trap, and we all fell for it"** — ([video](https://x.com/theo/status/2053924497267593593)). 386k views. The case for learning the system, not the syntax.
- **Theo — Security psychosis 50-minute stream** — ([recording](https://x.com/theo/status/2053960863368032733)). Two weeks of security carnage: CopyFail, YellowKey, GreenPlasma, ~70 macOS CVEs, Shai-Hulud.
- **Matt Pocock — "New Skills! /handoff, /prototype, /review and /writing-*"** — ([YouTube](https://www.youtube.com/watch?v=DNqsMXH6Eog)). Walkthrough of the new skills for mid-plan prototyping and session handoffs.
- **Latent Space — Notion AI with Simon Last & Sarah Sachs** — ([@swyx](https://x.com/swyx/status/2044220922387984408)). Notion rebuilt Notion AI five times. First time the full story has been told.
- **State of Agentic Coding with mitsuhiko & Ben** — ([@bentlegen](https://x.com/bentlegen/status/2053831814821691811)). How Armin teamed up with @badlogicgames on Pi, the end of subsidized tokens, why coding traces are valuable.
- **Karpathy — Sequoia Ascent 2026 fireside chat** — ([AI Ascent 2026 playlist](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)). Software 3.0, menugen, and why December 2025 was the tipping point for agentic coding.

---

## Off-Topic But Worth A Click

- **swyx vibe-designed a 6000-person conference website at the climbing gym** without reading a single line of code, including 99% video asset performance optimization. *"Because why the heck not, it's 2026."* ([@swyx](https://x.com/swyx/status/2021498862012334274))
- **Air Street NYC AI Meetup** happening today, May 14 ([details](https://press.airstreet.com/p/air-street-nyc-ai-meetup-14-may-2026)).
