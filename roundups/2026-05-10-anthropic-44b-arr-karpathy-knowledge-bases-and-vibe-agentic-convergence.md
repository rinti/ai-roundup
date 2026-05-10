---
title: "Anthropic $44B ARR, Karpathy Knowledge Bases & Vibe-Agentic Convergence"
date: 2026-05-10
summary: >-
  **Anthropic hits $44B ARR** — Fortune reports 80x annualized growth in Q1,
  driven almost entirely by Claude Code; Dario Amodei says revenue has roughly
  10x'd each year since 2022; Simon Willison notes Claude Code run-rate alone
  passed $2.5B and doubled since January, with weekly active users also doubled.
  **Karpathy's LLM Knowledge Bases** — his April thread about building personal
  wikis with LLMs instead of code is still spawning projects (NEXUS, llm-wiki
  gist); the idea that "a large fraction of my token throughput is going less
  into manipulating code and more into manipulating knowledge" reframes what
  agentic work even means. **Willison: vibe coding ≈ agentic engineering now** —
  his Heavybit podcast confession that the two are blurring in his own work
  triggers a long thread; the distinction he cares about is responsibility, not
  tooling. **Anthropic publishes the 2026 Agentic Coding Trends Report** —
  context engineering is the load-bearing skill, engineers report 60% AI usage
  but only 0-20% full delegation, Rakuten ran a 7-hour autonomous agent on a
  12.5M-line codebase. **Jerry Liu declares the framework era over** — context
  quality is the new moat as scaffolding collapses under MCP and agent SDKs.
  **steipete ships imsg 0.6+0.7** with private API bridge for iMessage agents.
  Plus Mercado Libre targeting 90% autonomous coding by Q3, the Stockholm AI
  cafe ordering 120 eggs, and Thariq launches @ClaudeDevs.
tags:
  - Anthropic Growth & Strategy
  - Karpathy & Software 3.0
  - Vibe Coding vs Agentic Engineering
  - Agentic Coding Trends
  - Framework Wars & LlamaIndex
  - Agent Infrastructure & Tooling
  - Other
---

# AI Roundup — May 10, 2026

Saturday digest. The week's Code with Claude aftermath keeps rippling: **Anthropic's $44B ARR** is the headline number everyone's chewing on, **Karpathy's LLM Knowledge Bases** idea is spawning real projects, **Simon Willison confesses** vibe coding and agentic engineering are converging in his own work, and **Anthropic drops the 2026 Agentic Coding Trends Report** making context engineering the new must-have skill. Jerry Liu says the framework era is dead. steipete ships private API iMessage support. And an AI-run cafe in Stockholm ordered 120 eggs without a stove.

## Anthropic Growth & Strategy

**Anthropic hits $44B ARR with 80x growth** — [Fortune](https://fortune.com/2026/05/08/anthropic-80fold-growth-quarter-renting-elon-musk-data-center/) and [VentureBeat](https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth/) report the trajectory: $10M in 2022, $100M in 2023, $1B in Dec 2024, $7B Sep 2025, $9B Dec 2025, $14B Feb 2026, $19B Mar 2026, $30B Apr 2026, and now **$44B+ in May 2026**. The 80x annualized Q1 growth number is staggering. Dario Amodei: roughly 10x each year since first revenue. The driver is Claude Code — [Simon Willison flagged](https://x.com/simonw/status/2022044549733056861) that Claude Code's run-rate alone passed $2.5B and *"more than doubled since the beginning of 2026"*, with weekly active users also doubled and business subscriptions quadrupled since January 1. The average developer now spends **20 hours/week** running Claude. [Anthropic is raising a $50B Series G at $900B valuation](https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/) to keep pace.

**SpaceX/xAI Colossus deal continues to draw scrutiny** — [Simon Willison's analysis](https://simonwillison.net/2026/May/7/xai-anthropic/) ([tweet](https://x.com/simonw/status/2052436629365948920)) flags under-reported details: Anthropic gets Colossus 1 (300MW, 220K+ NVIDIA GPUs), xAI keeps the larger Colossus 2. The environmental angle: gas turbines at Colossus initially ran *without Clean Air Act permits or pollution control*. The supply chain risk: SpaceX reserves the right to reclaim compute if Anthropic's AI *"engages in actions that harm humanity"* — with Elon as arbiter. Willison: *"a new form of supply chain risk for Anthropic."* Despite Musk calling Anthropic a company that *"hates Western civilization"* in February, he now says he's *"impressed"* after spending time with senior Anthropic staff.

**Code with Claude wrap-up still reverberating** — highlights from the May 6 event: doubled rate limits for Pro/Max/Enterprise, Claude Managed Agents shipping [Dreaming](https://siliconangle.com/2026/05/06/anthropic-letting-claude-agents-dream-dont-sleep-job/) (agents review prior sessions overnight and self-improve via memory artifacts — Harvey saw **6x task completion improvement**), [multiagent orchestration](https://claude.com/blog/new-in-claude-managed-agents) for up to 20 parallel specialists, and outcomes (up to 10pp improvement on hardest tasks). Mercado Libre (23,000 engineers) targeting **90% autonomous coding by Q3**. Shopify is a major customer. Boris Cherny [giving away leftover stickers](https://x.com/bcherny/status/2052869367164207234); ClaudeDevs [co-hosting hackathons in SF next week](https://x.com/ClaudeDevs/status/2052880779466965129).

## Karpathy & Software 3.0

**Karpathy's Sequoia Ascent 2026 fireside chat** ([tweet thread](https://x.com/karpathy/status/2049903821095354523), [blog summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/), [YouTube](https://www.youtube.com/watch?v=96jN2OCOfLs)) is still generating analysis a week later. Core framing: **Software 3.0** — 1.0 was human-written code, 2.0 was trained neural networks, 3.0 is prompting an LLM interpreter. His MenuGen app (photo a menu → render food images) became *completely obsolete* when Gemini could do it natively via Nanobanana — *"a lot of this code shouldn't exist. The neural network should be doing most of the work."* The spec/plan is the new code. Details like API syntax (`keep_dims` vs `keepdim`) are *"already delegated to the intern."*

Shruti Gandhi's [takeaway thread](https://x.com/atShruti/status/2049992301934764501) distills the founder playbook: (1) train agents with domain-specific data, (2) the best engineers direct agents without letting quality collapse, (3) "app store" is outdated when agents can improvise apps on the spot, (4) services need agent-native ergonomics.

**LLM Knowledge Bases** ([tweet](https://x.com/karpathy/status/2039805659525644595), [gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)) keeps spawning projects weeks after the April 3 post. The pitch: *"a large fraction of my recent token throughput is going less into manipulating code, and more into manipulating knowledge."* Workflow: dump raw articles/papers into a folder → LLM compiles a structured interlinked markdown wiki → browse in Obsidian → query with natural language. No embeddings, no vector search — the LLM is the compiler. By May 5, a project called NEXUS was running in production with 6 agents, GraphRAG, and full memory persistence. Multiple Medium write-ups and a MindStudio guide for building your own with Claude Code.

## Vibe Coding vs Agentic Engineering

**Simon Willison: the two are converging** — [blog post](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/) and [tweet](https://x.com/simonw/status/2052040005275779552): *"I was talking with @josephruscio on the @heavybit podcast the other day when I realized that vibe coding and agentic engineering have started to blur a bit in some of my work."* Willison previously staked out the position that vibe coding and responsible AI-assisted development are fundamentally different ([Heavybit podcast, Ep. #9](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison)). His updated take: the *tooling* is converging but the *responsibility* distinction still matters — vibe coding is *"grossly irresponsible when building software for other people because other people get hurt by stupid bugs."* Agentic engineering means being a professional who understands security, maintainability, operations and performance, and using these tools to the highest of your ability. The [Hacker News thread](https://news.ycombinator.com/item?id=48037128) ran hot.

**Related Willison take on AI agent oversight** ([tweet](https://x.com/simonw/status/2051788176071745592)): *"AI-run business experiments are interesting and fun up to the point where they waste the time of humans who haven't opted into the experiments — I think they need to keep their own human operators in the loop for outbound actions that affect other people."* This references the [Stockholm AI cafe experiment](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/) — Mona (powered by Gemini, built by Y Combinator-backed Andon Labs) went live April 18, ordered **120 eggs despite no stove**, 22.5 kg of canned tomatoes for fresh sandwiches, 6,000 napkins, 3,000 nitrile gloves, and industrial-sized trash bags. The baristas created a "Hall of Shame" shelf.

## Agentic Coding Trends

**Anthropic publishes the [2026 Agentic Coding Trends Report](https://resources.anthropic.com/2026-agentic-coding-trends-report)** ([PDF](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)). Eight trends reshaping how software gets built. The headline findings:

- **Context engineering is the load-bearing skill of 2026** — not prompt engineering, not fine-tuning, but curating the data fed into the model.
- **The Delegation Gap**: engineers use AI in ~60% of work but report being able to "fully delegate" only 0-20% of tasks. The gap is setup, supervision, validation, and judgment.
- **Extended Agent Autonomy**: Rakuten had an agent implement a complex feature across a **12.5 million-line codebase in a single 7-hour run**.
- **Role shift**: core engineering work shifts from writing code to coordinating agents that write code — architecture, system design, quality evaluation, strategic direction.
- **Beyond engineering**: one company achieved 89% AI adoption org-wide with hundreds of agents deployed internally.

[Hivetrail](https://hivetrail.com/blog/anthropic-2026-agentic-coding-report/), [Pathmode](https://pathmode.io/blog/orchestration-era-needs-intent), and [HuggingFace](https://huggingface.co/blog/Svngoku/agentic-coding-trends-2026) all published analysis. [Tessl](https://tessl.io/blog/8-trends-shaping-software-engineering-in-2026-according-to-anthropics-agentic-coding-report/) breaks down all eight trends.

**Matt Pocock's workflow is the practitioner exemplar** — his [AI coding workflow tweet](https://x.com/mattpocockuk/status/2024874219662905676) (Idea → `/write-a-prd` → PRD → `/prd-to-issues` → Kanban → [ralph.sh](https://www.aihero.dev/getting-started-with-ralph) → Ralph Loop → Manual QA) maps directly onto the report's findings. The "Ralph Wiggum" approach: [run long-running agents that ship while you sleep](https://x.com/mattpocockuk/status/2007924876548637089). The [`mattpocock/skills`](https://github.com/mattpocock/skills) repo hit **9K stars** ([tweet](https://x.com/mattpocockuk/status/2036076132924100760)), with `grill-me` as the viral breakout — *"it automates the duck and makes it argumentative."*

## Framework Wars & LlamaIndex

**Jerry Liu declares the framework era over** — [VentureBeat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives/) and [AI Market Watch](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w) cover the LlamaIndex CEO's argument: the scaffolding layer — indexing layers, query engines, retrieval pipelines, orchestrated agent loops — is collapsing. Coding agents generate custom pipelines on demand. MCP standardizes tool integration. Purpose-built agent SDKs have eroded the case for heavyweight LLM frameworks. **Context quality is the new moat.** LlamaIndex is repositioning around document OCR and workflows, with recent launches including [Spreadsheet Agents](https://x.com/jerryjliu0/status/1930700136482800050) for data transformation over unnormalized Excel sheets and a [knowledge agent for automated contract review](https://x.com/jerryjliu0/status/1886951394147754281).

## Agent Infrastructure & Tooling

**Thariq launches @ClaudeDevs** ([tweet](https://x.com/trq212/status/2044893583308918787)): *"We've heard your feedback and we're working on making it easier to follow everything that's happening with Claude Code. First, we're introducing @ClaudeDevs, the official channel to follow for all updates on Claude Code and the Claude platform."* Follow it for release notes, feature announcements, and tips.

**steipete ships imsg 0.6 + 0.7** ([tweet](https://x.com/steipete/status/2051905175355351440)) — the iMessage CLI that lets agents send and receive texts. New in this release: **Private API bridge landed** (reactions, edits, unsends, threaded replies, group management via IMCore injection), Watch/history reliability fixes, better chat + account diagnostics, long fallback messages decode correctly. The [imsg repo](https://github.com/openclaw/imsg) is the plumbing layer for OpenClaw's iMessage channel. Also shipped: [ClawSweeper 0.2.0](https://x.com/steipete/status/2051020548335874369) — the maintenance bot doing issue → fix → guarded PR → review → repair → automerge loops, open source and runnable on Codex.

**swyx on Notion rebuilding AI 5 times** — the [Latent Space episode with Simon Last & Sarah Sachs](https://www.latent.space/p/notion) ([tweet](https://x.com/swyx/status/2044220922387984408)) covers Notion's full AI journey: 5 rebuilds, 100+ tools, MCP vs CLIs, and the "software factory" future. swyx had been trying to land this interview for 3 years. Separately, swyx [vibe-designed a 6,000-person conference website at a climbing gym](https://x.com/swyx/status/2021498862012334274) without reading a single line of code, including 99% video asset performance optimization — *"because why the heck not it's 2026."*

**Boris Cherny context** — the Claude Code creator shared his setup ([thread](https://x.com/bcherny/status/2007179832300581177)): *"My setup might be surprisingly vanilla! Claude Code works great out of the box."* In the last 30 days, **100% of his contributions to Claude Code were written by Claude Code** ([tweet](https://x.com/bcherny/status/2004897269674639461)). On [Lenny's Newsletter](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens): the title "software engineer" will start to go away by end of year, replaced by "builder."

## Other

- **AI security**: the [State of AI report](https://press.airstreet.com/p/state-of-ai-may-2026) notes two frontier models cleared a 32-step end-to-end cyber-attack range — Claude Mythos Preview first, GPT-5.5 three weeks later. AI writes ~30% of Microsoft's code and 25%+ of Google's.
- **Theo on AI-coded reality**: *"70% to 90% of code is now generated by AI"* across his teams and consulting clients. Also [launched State of AI developer survey](https://x.com/theo/status/2041715755306389780) for web devs — results pending.
- **Armin Ronacher (mitsuhiko)** published ["Content for Content's Sake"](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/) on May 4, exploring how LLMs make text-based tasks dramatically easier. He's shifted from Cursor to mostly Claude Code, *"almost entirely hands-off"* — describes gaining 30% more time in his day.
- **OpenAI Codex competition**: new $100 ChatGPT tier designed to spur broader Codex adoption and peel users from Claude Code. Features include planning mode, plugins, skills, MCPs, git tree, dev servers and a built-in browser.
- **Simon Willison's [Luke Curley quote](https://simonwillison.net/2026/May/9/luke-curley/)** (May 9) on OpenAI's WebRTC scaling challenges for real-time voice AI.
