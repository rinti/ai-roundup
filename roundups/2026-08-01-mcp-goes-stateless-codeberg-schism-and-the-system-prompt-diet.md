---
title: "MCP Goes Stateless, the Codeberg Schism & the System-Prompt Diet"
date: "2026-08-01"
summary: "The **MCP 2026-07-28 spec** ships the protocol's biggest overhaul yet — a stateless core, extensions framework, hardened OAuth, and cacheable tool lists — with AWS already running it in AgentCore Gateway the same week. Meanwhile the open-source world is polarized: **Codeberg's 358-to-144 vote banning vibe-coded projects** drew a 38-minute rebuttal from Theo, a \"very bad move\" verdict from Armin Ronacher, and a contrast with Linus Torvalds' quiet AI embrace. On the tooling front, **Thariq reveals Anthropic cut ~80% of Claude Code's system prompt** for Opus 5 and Fable 5 with zero eval loss — a context-engineering lesson that sent developers rewriting their own CLAUDE.md files. Plus: Fable 5's $100 promotional credit expires tomorrow, Theo teases a T3 Code update that will \"leapfrog\" competitors, LlamaIndex ships a filesystem-style Retrieval Harness for agentic RAG, and the NSA/CISA frontier-model benchmarking deadline formally arrives."
tags:
  - MCP Goes Stateless
  - The Codeberg Schism
  - Claude Code's System-Prompt Diet
  - Fable 5 Credits — Last Call
  - T3 Code's Leapfrog Promise
  - Other Notes
---

# AI Roundup — August 1, 2026

## MCP Goes Stateless

The [MCP 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) landed this week, and it's the protocol's most significant overhaul since launch. The headline: **MCP moves from a bidirectional stateful protocol to a stateless request/response core**. Servers can now deploy on serverless and edge infrastructure — a remote MCP server that previously needed sticky sessions, a shared session store, and deep packet inspection at the gateway can now run behind a plain round-robin load balancer.

Key changes beyond statelessness:

- **Extensions framework.** MCP Apps and Tasks ship under a versioned extensions system, giving developers a formal path to add capabilities (interactive UIs, long-running work) without touching the core protocol. Tasks move from experimental core into the `io.modelcontextprotocol/tasks` extension.
- **Authorization hardening.** Closer alignment with enterprise OAuth 2.0 and OIDC practices. Dynamic Client Registration is formally deprecated in favor of CIMD; it still works but will be removed in a future version.
- **Cacheable tool lists.** Clients can cache `tools/list` responses for as long as the server's `ttlMs` permits, and change notifications move to a single `subscriptions/listen` stream that clients opt into per notification type.
- **Header-based routing** via `Mcp-Method`, and multi round-trip requests.

[Anthropic's own blog post](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude) details how they're bringing it to Claude, and [AWS published](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/) same-week support in AgentCore Gateway. [The Register called it](https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/) "preparing to break with its stateful past." The [beta SDKs](https://blog.modelcontextprotocol.io/posts/sdk-betas-2026-07-28/) had a 10-week validation window before the final release. [Microsoft also shipped v2.0 of the official MCP C# SDK](https://devblogs.microsoft.com/dotnet/announcing-v20-of-the-official-mcp-csharp-sdk/) aligned with the new spec. MCP has now surpassed 400M monthly SDK downloads — a 4x increase in 2026.

## The Codeberg Schism

[Codeberg's community vote](https://www.omgubuntu.co.uk/2026/07/codeberg-bans-ai-generated-code) on banning vibe-coded projects closed on July 22 at **358 for, 144 against, 14 abstentions** (~71% in favor, on ~50% turnout). A second motion also passed committing Codeberg to never training AI models on hosted code or user data. [The policy](https://www.theregister.com/ai-and-ml/2026/07/23/codeberg-gives-vibe-coded-projects-the-toss-promotes-human-floss/) bans projects that are "mostly" AI-generated, though no percentage threshold is defined and enforcement will be complaint-driven by volunteers who are already stretched.

The economic rationale: Codeberg says SSDs that once cost the platform ~€700 now run €3,700 each, with vibe-coded projects consuming CI/CD and storage budget far beyond their user base — ["We do not believe it is reasonable for Codeberg to invest our precious donation money into hosting of large ghost projects."](https://www.explainx.ai/blog/codeberg-bans-vibe-coded-projects-llm-tou-2026)

The reactions split hard:

- **Theo delivered a [38-minute breakdown](https://finance.biggo.com/podcast/19180516b763524a)** on July 28, characterizing the ban as a politically driven, anti-progress stance. He [contrasts Codeberg's move with Linus Torvalds' recent embrace of AI as a production tool](https://www.xda-developers.com/codeberg-takes-its-side-in-the-open-source-scenes-ai-debate-by-banning-vibe-coded-projects/) and argues the ban will widen the gap between proprietary and open-source software.
- **Armin Ronacher** ([blog post, July 24](https://lucumr.pocoo.org/)): "I think this is a very bad move, and the people behind Codeberg should re-consider their stance." His companion piece — ["Codeberg drew a democratic, but suboptimal line"](https://x.com/mitsuhiko/status/2040209547097194526) — is the more nuanced take: the vote was democratic, but the line it drew is unenforceable and sends the wrong signal.
- **Enforcement skepticism** is the common thread across both camps. [Linux Stans asked the obvious question](https://linuxstans.com/codeberg-says-no-more-ai-slop-but-can-anyone-actually-prove-it/): "Can anyone actually prove it?" steipete's quip about GCC's parallel ban in [last roundup](https://x.com/steipete/status/2083019629379612728) — "How would they even proof that? Silly." — applies doubly to a volunteer-driven platform.

Related: Armin Ronacher also published ["Vibecoding and the possible collapse of a shared language"](https://lucumr.pocoo.org/) (July 13) and ["About an aggravating tool-calling regression in newer Claude models"](https://lucumr.pocoo.org/) (July 4) — both worth reading if you follow his thinking on AI-assisted development.

## Claude Code's System-Prompt Diet

[Thariq revealed](https://x.com/trq212/status/2080710986697990552) that Anthropic **removed ~80% of Claude Code's system prompt** for Opus 5 and Fable 5 — cutting it from ~800 tokens to ~164 — with no measurable loss on coding evaluations. [Boris Cherny RT'd](https://x.com/bcherny/status/2080730786697990552) with implicit endorsement.

The takeaway that [developers ran with](https://www.geekjourney.dev/en/blog/claude-code-system-prompt-content-harness): newer models have internalized enough understanding to handle ambiguity and context without having every rule spelled out. The practical implication for your own CLAUDE.md files and system prompts: **less is more**, and the savings in context tokens translate directly to lower costs and faster responses. [IBTimes captured the nuance](https://www.ibtimes.sg/anthropic-says-claude-5-needs-shorter-prompts-developers-say-trade-offs-are-more-complicated-90853): developers pushed back that the trade-offs are more complicated than "just cut your prompt" — domain-specific constraints, edge-case guardrails, and team conventions still need explicit instruction.

Also from Thariq recently: a deep dive on [Claude 5 context engineering](https://explainx.ai/blog/claude-5-context-engineering-thariq-doctor-july-2026) and the `/doctor` debugging skill.

## Fable 5 Credits — Last Call

**Tomorrow (August 2) is the deadline** to claim Anthropic's one-time $100 promotional credit for Fable 5 usage. Since [July 7](https://www.digitalapplied.com/blog/claude-fable-5-usage-credits-july-7-pricing-guide-2026), Fable 5 on Pro and standard Team/Enterprise seats runs on **pay-as-you-go credits** rather than the subscription usage limit. The promotional balance expires September 17 regardless of when claimed, and it won't auto-renew into a paid tier.

Meanwhile, **Sonnet 5's promotional pricing** ($2/$10 per million tokens) [runs through August 31](https://platform.claude.com/docs/en/about-claude/models/overview), with standard pricing ($3/$15) taking effect September 1. And Anthropic [extended the temporary 50% weekly usage boost](https://releasebot.io/updates/anthropic/claude) for Claude Code subscribers through August 19.

## T3 Code's Leapfrog Promise

Theo's not slowing down. After [T3 Code went mobile](https://x.com/theo/status/2082613200441524514) and hit #5 on the App Store (covered last roundup), he's [teasing the next major update](https://x.com/theo/status/2079752200243560688): "T3 Code is one of the best agentic code tools right now. I genuinely believe we're about to leap frog the others with this next update. The 'end to end' vision is so close to realized."

The [76 PRs merged in one week](https://x.com/theo/status/2080776679035896166) tell the story: Sidebar v2 beta (a flat thread list where threads "settle" when done), thread snoozing, `t3.json` shared project config, remote server updates from the app, Opus 5 support, Claude Code skills in the composer, and auto-approve mode for both Claude Code and Codex. The [sidebar workflow](https://x.com/theo/status/2079892861689254129) is designed like an inbox — "when you're done with a thread, click the 'settle' button and it slides to the bottom." Theo says this helped him "finish" more work than ever before.

The strategic play is clear: ["Kind of wild that the best agentic coding experience available today is an open source app made by some youtuber"](https://x.com/theo/status/2080522617979871350). He's positioning T3 Code as the open-source VS Code for the agent era, built entirely in the open.

## Other Notes

- **NSA/CISA deadline.** August 1 is the formal deadline for the NSA and CISA to deliver a classified frontier-model benchmarking process and voluntary pre-release framework under the June 2 executive order.
- **LlamaIndex ships the Retrieval Harness.** [Jerry Liu announced](https://x.com/jerryjliu0/status/2073407100642852871) a comprehensive Retrieval Harness for agentic retrieval — a persistent data pipeline exposing filesystem-style tools (semantic/keyword search, regex grep, file search, read) that agents can use to autonomously crawl knowledge bases. The [legal-kb reference app](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/) demonstrates the pattern: instead of one embedding search per query, the agent gets four tools and decides its own retrieval strategy.
- **Claude for Open Source expanded.** [Anthropic broadened the program](https://x.com/ClaudeDevs/status/2074570404035993780) on July 8 — 6 months free Claude Max 20x (worth ~$1,200) for maintainers, core contributors, and critical-package authors. Eligibility requires 5,000+ GitHub stars or 1M+ monthly npm downloads with active contributions, or a written application via the new "Ecosystem Impact Track" for critical-but-less-visible packages. Capped at 10,000 recipients total.
- **Matt Pocock's skills repo crossed 176K stars** ([July 18](https://dailyaiworld.com/workflow/matt-pocock-skills-production-agent-workflows-2026)) — 15,000 forks, 7.5M downloads, and the most-installed skills pack for Claude Code. His [Full Walkthrough workshop](https://talksintel.ai/ai-ml/conferences/aie-eu-2026/full-walkthrough-workflow-for-ai-coding-matt-pocock/) (from AI Engineer Europe) remains the definitive guide: /grill-me → PRD → vertical-slice kanban → AFK agent loop with TDD → fresh-context review.
- **Boris Cherny on self-verification.** [His most important tip](https://x.com/bcherny/status/2064426115255730578): "Give Claude a way to verify its work — it will 2–3x the quality." In the age of powerful models that can run for long periods, self-verification loops are the key ingredient that enables longer runs delivering results closer to intent. Also: his [open-sourced code-simplifier agent](https://x.com/bcherny/status/2009450715081789767) is available via `claude plugin install code-simplifier`.
- **Meituan's LongCat-2.0.** [Open-sourced July 5 under MIT](https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips/) — a 1.6T-parameter MoE model (48B active per token) with 1M context, designed for agentic coding and trained entirely on a 50,000-card Huawei cluster. It had been leading OpenRouter under the anonymous codename "Owl Alpha" for two months before Meituan revealed its identity.

*Note: nitter.net and all tested alternative instances (xcancel.com, nitter.poast.org, nitter.privacydev.net) remain fully blocked from this environment (HTTP 403 or connection refused on every request, including RSS endpoints). x.com also returns 403. This dispatch was assembled from web search results, indexed tweet previews, and blog content. Coverage of reply threads and very-recent (same-day) posts is limited compared to RSS-sourced roundups.*
