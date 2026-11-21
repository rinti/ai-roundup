---
title: "Devin Bots, Token Fraud & Apple Builds an Agent"
date: "2026-11-21"
summary: "Cognition launched **Devin Bots** — persistent manager agents that supervise teams of Devin coders across multi-week projects, positioning against Anthropic's Duet and OpenAI's Dots. Simon Willison flagged a **token fraud** video by ChatPRD's Claire Vo showing industrial-scale abuse of AI free trials, and separately surfaced mathematician Levent Alpöge's claim about Claude and the Riemann Hypothesis. **LangChain shipped Tool Gateway** in public beta, centralizing MCP credentials and audit for coding agents. Bloomberg broke that **Apple is building an agentic assistant** for coding, browsing, and device control — while also locking down macOS against third-party agents. Matt Pocock teased porting his AI Coding Crash Course to non-coding work. Armin Ronacher's AI Engineer CODE talk argued for improving the workshop before scaling the factory. Boris Cherny's CNN profile dropped, framing him as the engineer behind Anthropic's biggest hit and coining 'loop engineering.' Theo's T3 Code hit in-app UI customization via agents in nightly builds. Reva.AI launched a security layer for coding agents."
tags:
  - Agentic Coding & Agent Harnesses
  - Models & Benchmarks
  - Security & Trust
  - Industry News
  - Tools & Infrastructure
  - Other Bits
---

# AI Roundup — November 21, 2026

## Agentic Coding & Agent Harnesses

### Cognition launches Devin Bots: persistent agents managing teams of agents

Cognition [launched Devin Bots](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/) on November 17 — persistent manager agents that break large projects into tasks, spawn individual Devin sessions, and merge changes after CI and Devin Review pass. They keep memory across a project and are aimed at multi-week work.

Early-access customers include Decagon, Fireworks AI, and Reducto. Cognition cites 1,134 merged PRs over 44 days from its internal deployment, though that number hasn't been independently verified. The product incorporates tech from the Interaction Company (the startup behind AI assistant Poke), which Cognition acquired in July.

Cognition is pitching Bots against OpenAI's Dots (~Sep 29) and Anthropic's Duet (~Oct 21), arguing those are general-purpose agents that happen to handle code, while Devin Bots are built around a coding agent from the ground up. [The New Stack notes](https://thenewstack.io/cognition-devin-bots-management/) that Cognition hasn't explained how Bots handle conflicts between parallel agents on the same project.

**Source:** [Fortune exclusive](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/), [The New Stack](https://thenewstack.io/cognition-devin-bots-management/), [AI Weekly](https://aiweekly.co/alerts/cognition-launches-devin-bots-persistent-manager-agents-supervising-teams-of)

### Theo's T3 Code: agents can now restyle the app live

Theo Browne [announced](https://x.com/AGTPinsights/status/2121513186448818195) that T3 Code now supports in-app UI customization — you ask your agent to redesign the interface, and it updates on the fly. The catch: it's nightly-only for now, with no date for stable. T3 Code continues to absorb up to 800 PRs a day with a three-person core team, and Theo described a "Full Send" skill where 27 of 32 invocations merged without human review.

Separately, the team [shipped managed policies](https://dev.to/arshtechpro/t3-code-a-free-open-source-control-panel-for-claude-code-codex-and-other-coding-agents-1p10) on Nov 2 — the first feature aimed at company IT teams rather than individual developers.

**Source:** [AGTP on X](https://x.com/AGTPinsights/status/2121513186448818195), [Digg](https://digg.com/ai/dsypwf9p), [DEV Community](https://dev.to/arshtechpro/t3-code-a-free-open-source-control-panel-for-claude-code-codex-and-other-coding-agents-1p10)

### Armin Ronacher at AI Engineer CODE: improve the workshop before scaling the factory

Armin Ronacher (CTO of Earendil, creator of Flask/Ruff) [spoke at AIE CODE](https://ai.engineer/code/2026/talks/armin-ronacher) on Nov 12. His argument: improve the workshop before maximizing the output of the software factory. He described how his coding agent has grown much more capable while its core harness has barely changed — a point for minimal, file-and-shell-grounded harnesses over elaborate scaffolding.

In a [podcast with Matt Pocock](https://saurabh-kumar.com/til/1795004231/) (listed Nov 18), Ronacher and Mario Zechner (co-creators of the Pi coding agent) discussed writing agent code that holds up. Ronacher's take: agents are worth trusting where something can check their work, but people should keep design and understanding for themselves. He also noted that writing a Lean proof for parts of Pi just gave the agent one more file to read rather than a real constraint.

**Source:** [AI Engineer](https://ai.engineer/code/2026/talks/armin-ronacher), [saurabh-kumar TIL](https://saurabh-kumar.com/til/1795004231/)

### Matt Pocock: AI Coding Crash Course can port to non-coding work

Matt Pocock [posted on Nov 19](https://x.com/mattpocockuk/status/2123341910559318124):

> "Reading back through the AI Coding Crash Course, it is insane how much of it can be directly ported to non-coding work. Giving me some ideas..."

His "Software Factories for Real Engineers" cohort launched Nov 9 on [AI Hero](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m), teaching with Claude Code. His [mattpocock/skills](https://github.com/mattpocock/skills) repo crossed 327k GitHub stars, and a [69-minute walkthrough](https://www.aihero.dev/watch-me-ship-a-21-000-line-feature-with-mattpocock-skills~ez95n) (updated Nov 18) shows him shipping a 21,000-line feature end to end.

Earlier, on Nov 16, he posted a [brief history of AI coding since November 2025](https://x.com/RoundtableSpace/status/2122486199893778917) — from Opus 4.5 to the skills explosion to "most top devs haven't written a line of code in months."

**Source:** [Matt Pocock on X](https://x.com/mattpocockuk/status/2123341910559318124), [AI Hero](https://www.aihero.dev/)

## Security & Trust

### Simon Willison flags token fraud video — and a Riemann Hypothesis claim

Two posts from Willison on Nov 20:

1. **Token fraud:** He [linked to a YouTube video](https://simonwillison.net/2026/Nov/20/token-fraud-is-here-and-its-bad/) by Claire Vo of ChatPRD describing industrial-scale abuse of AI free trials — groups reselling tokens, running commercial operations on trial accounts. Vo is [winding down free trials entirely](https://lennysnewsletter.com/p/how-i-fight-token-fraud-as-a-solo). This connects to Willison's longstanding coverage of token abuse; in July he [wrote about](https://simonwillison.net/2026/Jul/26/) the market for reselling pooled API keys at a discount.

2. **Riemann Hypothesis:** He [surfaced a quote](https://simonwillison.net/2026/Nov/20/levent-alpoge) from mathematician Levent Alpöge claiming to have found a proof of the Riemann Hypothesis working with Claude. Important context: Anthropic [published a result in August](https://www.anthropic.com/research/riemann-zeta) where Claude improved the lower bound on critical-line zeros from 41.6% to 67.2% — a significant advance but explicitly *not* a proof of RH. Alpöge was one of the Anthropic mathematicians who examined that work. Any full proof claim would need independent verification.

**Source:** [simonwillison.net (token fraud)](https://simonwillison.net/2026/Nov/20/token-fraud-is-here-and-its-bad/), [simonwillison.net (Alpöge)](https://simonwillison.net/2026/Nov/20/levent-alpoge), [Anthropic research](https://www.anthropic.com/research/riemann-zeta)

### Reva.AI launches coding agent security tool

[Reva.AI shipped](https://securitybrief.asia/story/reva-ai-launches-security-tool-for-coding-agents) Coding Agent Security — a product that lets organizations set central policies for agents that edit files and run shell commands. It comes with a 15-day self-serve trial. As agents get more access to production systems, this space (agent guardrails and audit) is heating up fast.

**Source:** [SecurityBrief Asia](https://securitybrief.asia/story/reva-ai-launches-security-tool-for-coding-agents)

## Tools & Infrastructure

### LangChain ships Tool Gateway in public beta

LangSmith Tool Gateway [entered public beta](https://langchain.com/blog/langsmith-tool-gateway) on Nov 19 — a managed layer between agents and MCP servers that centralizes credentials, access policies, and audit traces. The caller authenticates only to LangSmith and never holds the server's token or API key.

Works with MCP clients including Claude Code, Cursor, and LangChain's own agents. Available on Plus and Enterprise plans across GCP US/EU/APAC and AWS US. Rate limit: 100 req/s with bursts up to 1,000.

**Source:** [LangChain blog](https://langchain.com/blog/langsmith-tool-gateway), [LangSmith docs](https://docs.langchain.com/langsmith/tool-gateway)

### Simon Willison's LLM tooling updates

A busy November for Willison's `llm` CLI:

- **llm 0.37** (Nov 2): Big release making gpt-6-luna the default model at half the previous price. Added gpt-6.1 models.
- **llm 0.37.2** (Nov 11): Patched two security issues that could leak an OpenAI API key to other providers.
- **llm-anthropic 0.31** (Nov 9): Added Fable 5.2 and Mythos 5.2 support. Ran the pelican-on-a-bicycle test at five reasoning levels.
- **llm-gemini 0.37/0.38** (Nov 12/18): Added Gemini 4 Hydrogen and Neon. Criticized Google's confusing pricing — Carbon at half price with a scheduled doubling on Dec 1.
- **datasette-llm 0.1a11** (Nov 14): OpenAI-compatible endpoints, so Datasette Agent can run on local models via LM Studio, Ollama, or llama.cpp.

**Source:** [simonwillison.net releases](https://simonwillison.net/tags/llms/)

## Industry News

### Apple building an agentic coding/browsing assistant

Bloomberg [reported](https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-control-apps-browsing-and-coding) (Nov 19) that Apple is building an AI agent that will write code, browse the web, control apps, and navigate devices on a user's behalf. No launch date. The same report notes Apple is making it harder for third-party agents to control a Mac, with [new warning screens](https://appleinsider.com/articles/26/11/19/apple-ai-agents-are-coming-to-help-you-code-browse-perform-tasks) asking users to reconsider granting that access.

**Source:** [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-control-apps-browsing-and-coding), [AppleInsider](https://appleinsider.com/articles/26/11/19/apple-ai-agents-are-coming-to-help-you-code-browse-perform-tasks)

### Boris Cherny profiled by CNN — "loop engineering" enters the mainstream

CNN [published a profile](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) (Nov 15) of Boris Cherny, Head of Applications at Anthropic and creator of Claude Code, calling him the engineer behind Anthropic's biggest hit product. Key takeaways:

- He says he no longer writes prompts but loops — automated procedures that keep Claude working on its own. The term "[loop engineering](https://thenewstack.io/loop-engineering/?p=22826354)" has taken hold.
- He advised [deleting your CLAUDE.md, skills, and hooks every six months](https://charliehills.substack.com/p/delete-your-claudemd) to see what the latest model can do without them — then adding lines back only when a failure keeps recurring.
- Anthropic reportedly removed ~80% of Claude Code's own system prompt — scaffolding the model had outgrown.

**Source:** [CNN](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny), [The New Stack](https://thenewstack.io/loop-engineering/?p=22826354), [Charlie Hills](https://charliehills.substack.com/p/delete-your-claudemd)

### AI Engineer CODE Summit recap (Nov 10-12, SF)

The [second annual AIE CODE](https://ai.engineer/code/2026) ran in San Francisco. swyx closed the event calling coding agents "the pinnacle of where verifiable AI is going." Sessions covered agent evaluation, software factories, and post-IDE form factors. Speakers included Armin Ronacher, Jerry Liu (LlamaIndex), and others from across the agent ecosystem.

swyx's [Latent Space](https://latent.space/) continues to be the default podcast for the space. His speaker bio now lists him at Cognition, working on coding-agent evaluation and codebase understanding through Codemaps.

**Source:** [AI Engineer](https://ai.engineer/code/2026), [StartupHub](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-engineer-turns-goodbye-into-next-year)

## Models & Benchmarks

### November 2026 model landscape

The model leaderboards shifted again this month:

- **Claude Fable 5.2** shipped Nov 9 and leads most coding leaderboards. [One ranking](https://www.buildmvpfast.com/articles/best-llms-2026-guide/coding-ai) puts it at a coding index of 50.0, followed by Claude Opus 5.5 (47.3) and GPT-6.2 Astra (46.4).
- **Claude Opus 5.5** remains the pick for long, autonomous agent work. Terminal-Bench 4.0 scores: Claude Sonnet 5.5 (70.6%), Claude Opus 5.5 (66.4%).
- **Claude Sonnet 5.5** is the value pick at $2/$10 per million tokens.
- **Gemini 4 Carbon** hit GA on Nov 10, marketed for long-horizon agentic tasks. Pricing confusion continues (Willison [criticized](https://simonwillison.net/2026/Nov/12/llm-gemini/) the half-price-then-double scheme).
- **Kimi K3.1 Pro** published weights in early November.
- **Ricursive's Ripple-65B** claims best US open-weight model for agentic coding per [Latent Space](https://latent.space/p/ainews-it-s-swapping-season/).

**Source:** [MorphLLM](https://www.morphllm.com/best-ai-model-for-coding), [BuildMVPFast](https://www.buildmvpfast.com/articles/best-llms-2026-guide/coding-ai), [Latent Space](https://latent.space/p/ainews-it-s-swapping-season/)

## Other Bits

- **Karpathy's weekend hacks:** Built [HackerTube](https://x.com/karpathy) (~Nov 1) — Claude filtered HN comments into 6,454 recommended videos using Opus 5.5 in ~2 hours. Followed up with TristanTube (~Nov 7) — 47K videos, TV mode, one-shotted with Claude Code in 3 minutes.
- **Replit Missions:** Launched an agent swarm that runs under a fixed budget. [AI Agent Store](https://aiagentstore.ai/ai-agent-news/this-week)
- **Thariq (trq212):** The Claude Code co-creator [departed Anthropic](https://x.com/i/trending/2113887405459546296) ahead of the company's mid-November IPO. No recent posts found from his account.
- **Daniel Stenberg quote** (surfaced by Willison, Nov 18): On agents converting curl's C code to Rust. [simonwillison.net](https://simonwillison.net/2026/Nov/18/daniel-stenberg)

---

*Note: This roundup was compiled from web search results as nitter.net and direct social media sites were unreachable from this environment. Some details come from secondary sources and aggregators — treat specific numbers and quotes as reported rather than independently verified.*
