# 2026-05-02 — Karpathy's Sequoia Ascent Recap, GPT-5.5 Lands & the Skills Evolution

## Karpathy: Sequoia AI Ascent 2026 fireside chat recap

Karpathy posted a long thread summarizing his fireside chat at Sequoia AI Ascent 2026 (from ~a week ago). He also published a companion blog post. The three big themes:

1. **LLMs are about more than speeding up coding.** He gave three examples of "new horizons" — the first being **menugen**, an app he built that lets you photograph a restaurant menu and generates images of the dishes. The punchline: menugen became instantly obsolete when Gemini could simply overlay images onto the photo directly via Nanobanana — no standalone app needed. The lesson: entire app categories get "engulfed" by frontier models.

2. **Vibe coding vs. agentic engineering.** Karpathy distinguishes these clearly now. Vibe coding raises the floor — a non-technical person can now build apps, websites, tools, automations. But agentic engineering is different — it's about using agents while preserving professional quality. December 2025 was the inflection point where coding agents went from "helpful but messy" to consistently producing correct chunks of code.

3. **The "idea file" replaces the repo.** In the era of LLM agents, sharing the specific code/app matters less — you share the idea, then the agent builds it. He published an "idea file" as a GitHub gist laying out the full architecture and philosophy.

Shruti Gandhi (Array VC) pulled out the founder-relevant takeaways: train your agents on domain-specific data, the spec/plan is the new code, and "everything is automatable" because even writing quality can be verified through LLM judge councils.

Thread: [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)
Blog post: [https://karpathy.bearblog.dev/sequoia-ascent-2026/](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
Video: [https://www.youtube.com/watch?v=96jN2OCOfLs](https://www.youtube.com/watch?v=96jN2OCOfLs) (full fireside chat)
Shruti's takeaway thread: [https://x.com/atShruti/status/2049992301934764501](https://x.com/atShruti/status/2049992301934764501)

## GPT-5.5 ships, OpenAI expands AWS partnership

OpenAI released GPT-5.5, its most capable model to date, with state-of-the-art agentic coding benchmarks. It's rolling out to Plus, Pro, Business, and Enterprise users in ChatGPT and Codex, with API access now available. Performs especially well in agentic coding, computer use, and scientific research workloads.

Same week, OpenAI expanded its AWS partnership — GPT-5.5, Codex, and a new Bedrock Managed Agents offering are coming to Amazon's cloud infrastructure in limited preview.

Industry stat that pairs with this: 84% of developers now use AI coding tools, but AI-generated code produces 1.7x more issues than human-written code, and developer trust in AI output sits at only 29%.

Source: [https://trewknowledge.com/2026/05/01/ai-this-week-the-agents-have-jobs-now/](https://trewknowledge.com/2026/05/01/ai-this-week-the-agents-have-jobs-now/)

## Matt Pocock: /grill-with-docs and the skills ecosystem keeps growing

Pocock shipped `/grill-with-docs` and called it **"MAGICAL"** — it powers up `/grill-me` by forcing you to define the random jargon your project uses, so every grilling session afterwards is "magically aligned with the thoughts you have." He connects it to DDD concepts but draws a clear line: use DDD to *document* the app (Ubiquitous Language, Bounded Contexts, ADRs) but don't prescribe the shape of the app (Entities, Value Objects, Aggregates, Domain Events).

His skills repo passed 23K stars. Based on community feedback he's now working on:
- A docs site for the skills
- Plugin for auto-updates
- Newsletter for skill change notifications
- Support for different backlog managers (GitHub, Linear, Beads)

He also ran an AI coding course for ~2,000 people and reported the biggest takeaway: people are dissatisfied with frameworks like BMAD, GSD, Spec-Kit — "giving away control of context to a framework makes things a lot harder to debug." His advice: own the process.

/grill-with-docs thread: [https://x.com/mattpocockuk/status/2049554929862283341](https://x.com/mattpocockuk/status/2049554929862283341)
Skills improvements thread: [https://x.com/mattpocockuk/status/2048675153815445686](https://x.com/mattpocockuk/status/2048675153815445686)
23K stars thread: [https://x.com/mattpocockuk/status/2048490818848075846](https://x.com/mattpocockuk/status/2048490818848075846)
AI coding course feedback: [https://x.com/mattpocockuk/status/2044029094942159126](https://x.com/mattpocockuk/status/2044029094942159126)

## Simon Willison: agent safety lessons and Codex /goal

Simon posted a pointed take on the viral JER/Railway agent-wipes-production story, pushing back on the popular conclusions: "The two lessons I see are: 1. Don't run agents anywhere they might be able to access production environment credentials — it's on you to know which credentials those are. 2. Keep tested backups that are independent from your production host." The thread remains active.

He also noted that Codex CLI 0.128.0 adds a `/goal` feature — Codex keeps looping until it evaluates that the goal has been completed or the token budget is exhausted.

On his blog (May 1), he published an inat-sightings.html app demo — small but notable as another example of vibe-coding a complete functional tool with Claude Code.

Agent safety thread: [https://x.com/simonw/status/2048598378171572332](https://x.com/simonw/status/2048598378171572332)
Blog: [https://simonwillison.net/](https://simonwillison.net/)

## Boris Cherny: /simplify and /batch coming to Claude Code

The Claude Code creator announced two new built-in Skills shipping in the next version: `/simplify` and `/batch`. He's been using both daily. Combined, they automate the work of (1) shepherding a pull request to production and (2) performing straightforward, parallelizable code migrations. `/simplify` is the automated code review step between "it works" and "it's ready to merge" — not a linter, not a formatter.

He also shared 7 tips for working with Opus 4.7, noting it uses adaptive thinking instead of thinking budgets, and the new `xhigh` effort level lets you tune the model to think more deeply.

/simplify and /batch announcement: [https://x.com/bcherny/status/2027534984534544489](https://x.com/bcherny/status/2027534984534544489)

## Steipete: OpenClaw drama continues, CodexBar ships

The Anthropic-vs-OpenClaw saga continues. Key developments from the last week:

- Anthropic temporarily banned OpenClaw's creator from accessing Claude, then reversed course saying OpenClaw-style CLI usage is allowed again
- In practice, Anthropic still blocks parts of the system prompt, so behavior doesn't match the public statement
- OpenClaw shipped v2026.4.29 with messaging/automation improvements, memory enhancements with people-aware wiki functionality, and expanded provider/model coverage (NVIDIA onboarding, Bedrock Opus 4.7 thinking parity)

Steipete also quote-tweeted something with "very this" on April 26 — likely related to the ongoing harness/open-source debate.

Anthropic ban story: [https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/](https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/)
HN thread on reversal: [https://news.ycombinator.com/item?id=47844269](https://news.ycombinator.com/item?id=47844269)

## Mitsuhiko: "Before GitHub" essay and the exodus context

Armin Ronacher published "Before GitHub" (April 28) — a companion piece to the Mitchell Hashimoto/Ghostty GitHub exodus. The post argues that GitHub *accidentally* became open source's archive and there's no decentralization successor for that role, warning of a return to "broken tarball links and abandoned Trac instances."

He also moved his Pi-based `/review` extension into a public repo and posted about the lack of a German word for "equity" — "it explains a lot about the way people do business and transact here."

His earlier "Agent Psychosis" essay continues to be widely cited: AI agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output, and memoryful agents act as "dæmons" that validate impulses rather than collaborating critically.

Before GitHub: [https://lucumr.pocoo.org/2026/4/28/before-github/](https://lucumr.pocoo.org/2026/4/28/before-github/)
/review extension: [https://x.com/mitsuhiko/status/2044016195154665979](https://x.com/mitsuhiko/status/2044016195154665979)
Agent Psychosis: [https://lucumr.pocoo.org/2026/1/18/agent-psychosis/](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)

## swyx: Notion AI on Latent Space, AI Engineer conference scaling

swyx finally landed the Notion interview he'd been trying to do for ~3 years — Simon Last and Sarah Sachs on Latent Space. Key revelation: Notion has rebuilt Notion AI **5 times**. The episode covers "Token Town" (the team of AI Engineers and Model Behavior Engineers building AI for Notion), 100+ tools, MCP vs CLIs, and the "Software Factory Future."

He also posted about vibe-designing the 6,000-person AI Engineer conference website at a climbing gym "without reading a single line of code including 99% video asset performance optimization because why the heck not its 2026."

Notion episode: [https://x.com/swyx/status/2044220922387984408](https://x.com/swyx/status/2044220922387984408)
Full episode: [https://www.latent.space/p/notion](https://www.latent.space/p/notion)
Conference vibe-coding: [https://x.com/swyx/status/2021498862012334274](https://x.com/swyx/status/2021498862012334274)

## Jerry Liu: LiteParse everywhere, MCP vs Skills debate

Jerry Liu has been heavily promoting **LiteParse**, LlamaIndex's open-source document parser — no GPU required, processes ~500 pages in 2 seconds on commodity hardware. The latest push: LiteParse now plugs into **46+ different agents** (Claude Code, OpenClaw, Cursor, Warp) via a single `npx skills` command.

He also weighed in on the **MCP vs Skills** debate with a blog post based on building their own coding agent within LlamaCloud: "Skills are way easier to setup, but unreliable/hard to maintain."

The broader LlamaIndex thesis: 95% of their code is now generated by AI, with engineers "typing in natural language," and the company is laser-focused on being the document OCR layer for agentic AI.

LiteParse for agents: [https://x.com/jerryjliu0/status/2034790590572060848](https://x.com/jerryjliu0/status/2034790590572060848)
LiteParse spatial parsing: [https://x.com/jerryjliu0/status/2039730277786980833](https://x.com/jerryjliu0/status/2039730277786980833)
MCP vs Skills blog: [https://x.com/jerryjliu0/status/2018797672258490666](https://x.com/jerryjliu0/status/2018797672258490666)
VentureBeat interview: [https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)

## Other notable items

### Mistral ships Workflows

Mistral released Workflows in public preview — a production-grade orchestration system that lets engineers define multi-step AI processes in Python, mixing deterministic business logic with model-driven agentic steps.

### Warp terminal goes open-source

Warp, the AI-powered terminal, announced it's going open-source — opening up the AI-terminal market to community contributions.

Article: [https://aitoolly.com/ai-news/article/2026-05-02-warp-a-new-terminal-based-environment-for-ai-agent-development-emerges](https://aitoolly.com/ai-news/article/2026-05-02-warp-a-new-terminal-based-environment-for-ai-agent-development-emerges)

## Non-AI / off-topic

### Mitsuhiko: no German word for "equity"

Armin posted an observation that resonated: "I find it bizarre but also interesting that there is no German word for 'equity'. It explains a lot about the way people do business and transact here." This followed his blog post on the same theme.

[https://x.com/mitsuhiko/status/2047321138104045974](https://x.com/mitsuhiko/status/2047321138104045974)

### GitHub reliability woes continue

The GitHub exodus from late April is still reverberating. Mitchell Hashimoto's "Ghostty is leaving GitHub" post and the April 23 outage remain hot topics, with mitsuhiko's "Before GitHub" essay providing the historical context for why this matters.
