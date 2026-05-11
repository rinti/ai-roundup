# 2026-05-11 — Code with Claude Ships Dreaming, Karpathy Declares Software 3.0 & the Scaffolding Layer Collapses

## Anthropic's Code w/ Claude 2026 conference (May 6–7): the big drops

The headline event of the week. Anthropic held their developer conference in San Francisco (with London and Tokyo dates upcoming). No new model announcement — the message was "today is about how we are making our products work better for you." But the product drops were substantial:

**Dreaming** — a new system that lets managed agents learn from their own past sessions. It's a scheduled process that reviews agent sessions and memory stores, extracts patterns across them, and curates memories so agents improve over time. It surfaces recurring mistakes, workflows that multiple agents converge on independently, and team-wide preferences. Harvey (legal AI) saw task completion rates increase ~6x after implementing it. Wisedocs cut document review time by 50%. Available now in research preview.

- Anthropic announcement: [New in Claude Managed Agents: dreaming, outcomes, and multiagent orchestration](https://claude.com/blog/new-in-claude-managed-agents)
- VentureBeat coverage: [Anthropic introduces "dreaming," a system that lets AI agents learn from their own mistakes](https://venturebeat.com/technology/anthropic-introduces-dreaming-a-system-that-lets-ai-agents-learn-from-their-own-mistakes)
- The Decoder: [Claude's new "Dreaming" feature is designed to let AI agents learn from their mistakes](https://the-decoder.com/claudes-new-dreaming-feature-is-designed-to-let-ai-agents-learn-from-their-mistakes/)

**Multi-agent orchestration and outcomes** moved from research preview into public beta for all developers.

**Claude Code on Desktop** — a full-screen GUI surface with rich previews and image output for those who want more than the terminal.

**Remote Agents** — control your laptop from your phone.

**Rate limits doubled** across the board — Claude Code's five-hour limits doubled for Pro, Max, Team and Enterprise. Peak-hours throttling on Pro/Max dropped. Opus API limits raised considerably. API volume is up 17x year-on-year.

**Mercado Libre spotlight**: 23,000 engineers running Claude Code, 500,000+ PRs reviewed with human oversight, aiming for 90% autonomous coding by Q3 2026.

- Simon Willison's live blog: [Live blog: Code w/ Claude 2026](https://simonwillison.net/2026/May/6/code-w-claude-2026/)
- Recap: [Code with Claude SF 2026: What Anthropic Actually Shipped](https://blakecrosley.com/blog/code-with-claude-sf-2026-recap)
- YouTube playlist: [Code w/ Claude Developer Conference](https://www.youtube.com/playlist?list=PLf2m23nhTg1P5BsOHUOXyQz5RhfUSSVUi)

## The Anthropic × SpaceX / xAI Colossus deal

Announced at the conference and dominating the discourse since. Anthropic signed a deal to use the entirety of xAI's Colossus 1 data center in Memphis — over 220,000 NVIDIA GPUs and 300+ megawatts of compute capacity. Musk said he spent time with Anthropic's senior team and "no one set off my evil detector." SpaceX/xAI had already moved training to Colossus 2. Anthropic also flagged interest in orbital AI compute with SpaceX.

TechCrunch is feeling cynical about the optics: [We're feeling cynical about xAI's big deal with Anthropic](https://techcrunch.com/2026/05/10/were-feeling-cynical-about-xais-big-deal-with-anthropic/)

- Anthropic blog: [Higher usage limits for Claude and a compute deal](https://www.anthropic.com/news/higher-limits-spacex)
- CNBC: [Anthropic, SpaceX announce compute deal](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html)
- Simon Willison's notes: [Notes on the xAI/Anthropic data center deal](https://simonwillison.net/2026/May/7/xai-anthropic/)

## bcherny (Boris Cherny) on Opus 4.7 and new Claude Code skills

Boris Cherny, head of Claude Code, has been posting about Opus 4.7 throughout the week:

- **Opus 4.7 in Claude Code**: "It's more agentic, more precise, and a lot better at long-running work. It carries context across sessions and handles ambiguity much better." ([x.com/bcherny](https://x.com/bcherny/status/2044802532388774313))
- **Opus 4.7 tips**: "Opus 4.7 feels more intelligent, agentic, and precise than 4.6. It took a few days for me to learn how to work with it effectively." ([x.com/bcherny](https://x.com/bcherny/status/2044822408826380440))
- **Rate limits bumped**: "Opus 4.7 uses more thinking tokens, so we've increased rate limits for all subscribers to make up for it." ([x.com/bcherny](https://x.com/bcherny/status/2044839936235553167))
- **Known issues acknowledged**: "We've also heard reports of issues with Opus 4.7 in Claude Code. The team is working on those and we'll share more as we roll out improvements over the coming days." ([x.com/bcherny](https://x.com/bcherny/status/2047376371517964549))

**New Skills — /simplify and /batch**: Boris announced these are coming in the next version of Claude Code. `/simplify` spawns three parallel review agents to check your recent changes for code reuse, quality issues, and efficiency improvements — then fixes them automatically. `/batch` handles large-scale parallelizable code migrations by planning interactively, spawning dozens of isolated agents in separate git worktrees, each testing its own work before opening a PR. ([x.com/bcherny](https://x.com/bcherny/status/2027534984534544489))

## Karpathy at Sequoia AI Ascent 2026: Software 3.0 and the end of vibe coding

Karpathy's fireside chat with Stephanie Zhan is the most-discussed talk of the week. Key themes:

**Software 3.0**: LLMs are an interpreter. Software 1.0 = explicit code, 2.0 = trained neural networks, 3.0 = prompting an LLM. The context window is the new programming surface — prompts, tools, memory, examples, and instructions are the levers.

**"LLMs are about much more than speeding up coding"** — three examples of new horizons: (1) MenuGen, an app that generates images of restaurant menu dishes from a photo, which became obsolete when Gemini could just do it natively; (2) Autoresearch, his self-improving training loop; (3) broader software categories that couldn't exist before.

**Agency > Intelligence**: Agency is "significantly more powerful and significantly more scarce." But agent networks with shared scratchpads create "a complete mess of a computer security nightmare at scale."

**The December inflection**: Around late 2025, coding agents stopped being helpful autocomplete and started producing large useful chunks that just worked. "I've never felt this much behind as a programmer."

- Karpathy's tweet thread: [x.com/karpathy](https://x.com/karpathy/status/2049903821095354523)
- Video: [Andrej Karpathy: From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs)
- Blog summary: [karpathy.bearblog.dev/sequoia-ascent-2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- Full keynote video: [This is AGI: Sequoia AI Ascent 2026 Keynote](https://www.youtube.com/watch?v=LRo33rnv6rQ)

Karpathy also posted about **programming languages and formal methods**: "LLMs change the whole constraints landscape of software completely" — pointing to rising momentum behind porting C to Rust and growing interest in formal verification. ([x.com/karpathy](https://x.com/karpathy/status/2023476423055601903))

## Simon Willison: vibe coding and agentic engineering are converging

Published May 6, this post captures a shift Willison noticed in his own work — the line between "vibe coding" (fully giving in to the vibes, forgetting the code exists) and "agentic engineering" (professional engineers wielding AI tools with full understanding of security, maintainability, and ops) is blurring.

His key distinction remains: vibe coding is "grossly irresponsible when building software for others" — other people get hurt by bugs. Agentic engineering demands the same responsibility as always, just with radically different leverage.

Also at the conference on May 6–7, and published a live blog of the keynotes.

- Blog post: [Vibe coding and agentic engineering are getting closer than I'd like](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)
- Podcast: [The AI Coding Paradigm Shift with Simon Willison — Heavybit High Leverage Ep. #9](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison)

## Thariq (trq212) — Claude Agent SDK and building beyond code

Thariq, who works on Claude Code at Anthropic, has been sharing how the team uses Claude Code as a general-purpose agent, not just for coding:

- **"Claude Code is All You Need"**: "When I first joined Anthropic I was surprised to learn that lots of the team used Claude Code as a general agent, not just for code. I've since become a convert!" ([x.com/trq212](https://x.com/trq212/status/1944877527044120655))
- **Deep Research demo for Claude Agent SDK**: Spawns multiple AI agents to research a topic in parallel, then synthesizes findings into a report. Reports 90.2% improvement over single-agent Opus on internal research evals. ([x.com/trq212](https://x.com/trq212/status/1988690675542675536))
- **Email Agent**: Building in public — an open-source local email agent using the Claude Code SDK, starting with agentic search. ([x.com/trq212](https://x.com/trq212/status/1968405908301709582))
- Video: [Claude Agent SDK Full Workshop — Thariq Shihipar, Anthropic](https://www.youtube.com/watch?v=TqC1qOfiVcQ)

## Matt Pocock — AI + DDD and the AI Hero skills workflow

Matt Pocock weighed in on how Domain-Driven Design applies in the AI era:

> "I don't want to go too deep on AI + DDD. My current thinking: GOOD: Ubiquitous Language / Bounded Contexts / ADR's. BAD: Entities / Value Objects / Aggregates / Domain Events. Essentially, use DDD to document the app but don't prescribe the shape of the app."

([x.com/mattpocockuk](https://x.com/mattpocockuk/status/2045090172451057985))

He also shared his full AI coding workflow earlier in the week: Idea → /write-a-prd → PRD → /prd-to-issues → Kanban Board → ralph.sh → Ralph Loop → Manual QA. His `mattpocockuk/skills` set addresses four failure modes in AI coding: misaligned requirements, redundant outputs, broken code, and debugging difficulty. ([x.com/mattpocockuk](https://x.com/mattpocockuk/status/2024874219662905676))

- AI Hero skills: [aihero.dev/skills](https://www.aihero.dev/skills)

## Armin Ronacher (mitsuhiko) — the AI slop reckoning continues

Ronacher continues to be one of the sharpest critics of AI code quality. His "Agent Psychosis" essay from January is still circulating and being RT'd:

> AI agent workflows are creating a dopamine-driven loop that feels productive but often produces low-quality output. AI-generated PRs are cheap to create but expensive to review, and the asymmetry is becoming untenable.

He's been calling out "so much slop" in his Twitter mentions and on GitHub, and warns of a "massive degradation of code quality right now" with issues caught too late.

He's building at Earendil, his new company focused on coding agents — so he's not anti-AI, just anti-slop. Gave a talk "Leaning In to Find Out" at PyAI SF in March.

- Agent Psychosis essay: [mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis)
- Earendil: [earendil.com](https://earendil.com)

## Peter Steinberger (steipete) — OpenClaw at OpenAI and the agentic engineering wave

Steipete joined OpenAI in February to "bring agents to everyone," with OpenClaw moving to an independent foundation. OpenClaw continues its meteoric rise — nearly 30,000 commits, 2,000 contributors in five months.

**OpenClaw May updates** include broader agent/CLI/voice/plugin upgrades, a people-aware memory layer with person cards and relationship graphs, and new model catalog support. He's speaking at **OMR Festival** (May 6) and **Microsoft Build** (June 2–3) about how agentic engineering fundamentally changes software development.

- Blog: [OpenClaw, OpenAI and the future](https://steipete.me/posts/2026/openclaw)
- TechCrunch: [OpenClaw creator Peter Steinberger joins OpenAI](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/)

## swyx — Notion AI rebuilt 5 times, and AI Engineer Europe

Swyx published what he calls a long-awaited episode on Latent Space: **Simon Last and Sarah Sachs from Notion** telling the full story of Notion AI's five rebuilds — "the first time Simon has told the entire story." Covers their custom agents, 100+ tools, MCP vs CLIs, and the "software factory" future.

- Latent Space episode: [Notion's Token Town: 5 Rebuilds, 100+ Tools, MCP vs CLIs and the Software Factory Future](https://www.latent.space/p/notion)
- swyx's announcement: [x.com/swyx](https://x.com/swyx/status/2044220922387984408)

Swyx also shared observations from his time at Cognition: AI agents were increasing productivity by making work more enjoyable — "more animations, polish, and overall output" — shifting the metric from lines of code to augmented human output.

## Jerry Liu (jerryjliu0) — "the AI scaffolding layer is collapsing"

LlamaIndex CEO Jerry Liu argued that the AI framework era is over. Agent loops are now capable enough that **context quality** — curating and structuring the data fed into models — becomes the key competitive moat, not the scaffolding around the models.

> "As the scaffolding layer collapses, the competitive moat moves to context engineering."

He's been demonstrating this with practical examples: a knowledge agent for automated contract review, a form-filling agent powered by LlamaParse + Opus 4.5, and real-time document processing pipelines.

- VentureBeat: [The AI scaffolding layer is collapsing. LlamaIndex's CEO explains what survives.](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- Jerry Liu on context in the post-MCP world: [x.com/jerryjliu0](https://x.com/jerryjliu0/status/1932208932879212723)

## Theo — State of AI for Web Devs 2026 survey

Theo announced the **State of AI (for web devs) 2026** survey is open (ran April 10 – May 10). This is the Devographics community survey, same team behind State of JS / State of CSS.

- Survey: [survey.devographics.com/en-US/survey/state-of-ai/2026](https://survey.devographics.com/en-US/survey/state-of-ai/2026)
- Theo's announcement: [x.com/theo](https://x.com/theo/status/2041715755306389780)

Key stats from the 2025 edition that set the baseline: 78% of devs use AI tools in development (up from 62%), but 96% don't fully trust AI-generated code's functional accuracy. 59% say AI tools are integral to their workflow and made them "a lot more productive," yet 60% also agree relying on AI tools "will make for less skilled developers overall."

---

## Other notable news this week

**OpenAI acquiring Astral** (announced March, still reverberating): The makers of uv, Ruff, and ty (Python's fastest toolchain) are joining OpenAI's Codex team. OpenAI wants to control the developer experience for AI coding agents. All tools remain open source. Codex has 2M+ weekly active users with 3x user growth and 5x usage since January. Simon Willison wrote thoughtful notes on the implications: [Thoughts on OpenAI acquiring Astral](https://simonwillison.net/2026/mar/19/openai-acquiring-astral/)

**Anthropic revenue**: Actual Q1 2026 growth far outpaced internal plans — they had projected 10x annual growth; annualized revenue and usage grew 80x instead.

**Pragmatic Engineer on AI impact**: Gergely Orosz published a deep look at how AI is actually affecting software engineers in 2026: [The impact of AI on software engineers in 2026: key trends](https://newsletter.pragmaticengineer.com/p/the-impact-of-ai-on-software-engineers-2026)
