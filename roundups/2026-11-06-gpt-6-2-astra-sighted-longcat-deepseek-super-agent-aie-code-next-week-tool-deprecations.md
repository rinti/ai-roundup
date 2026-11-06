---
title: "GPT-6.2 Astra Sighted, LongCat-2.5 & DeepSeek Super-Agent Launch, AIE Code Next Week & Upcoming Tool Deprecations"
date: "2026-11-06"
summary: "A lighter day after Thursday's acquisition blitz. **GPT-6.2 Astra** showed up in Codex usage logs though OpenAI hasn't announced it, and The Information reported GPT-6.2 Sol and Astra could ship as early as this week. **Meituan** launched **LongCat-2.5**, a 1.6T-parameter model built for long-horizon agentic coding, with open weights promised but not yet delivered. **DeepSeek** released **Super-Agent**, an MIT-licensed prototype coding agent that watches team chats and GitHub for bugs unprompted. **Mistral Large 4** claims the open-model crown for agentic coding and cyber defense. On the tools side, **Claude Code v2.1.318** landed with mod controls and cloud-session options, while **Codex CLI v0.166** adds queue --resume. Deprecation notices: **Opus 4.8 fast mode** goes away November 30, and **GitHub Copilot** drops Claude Opus 5, Opus 4.8 and GPT-5.6 Terra on November 16. **AIE Code** runs next week in San Francisco (Nov 10-12), and **Matt Pocock** is reshaping Sandcastle v1 ahead of his software factory course starting November 9."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Codex & OpenAI
  - Models & Research
  - Other Interesting Stuff
---

# AI Roundup — November 6, 2026

A quieter day following Thursday's wave of acquisitions and announcements. This issue covers Thursday afternoon through Friday morning.

## Agentic Coding & Agent Harnesses

### AIE Code in San Francisco next week

swyx's AI Engineer Code Summit [runs Nov 10-12](https://www.ai.engineer/code/2026) at the Hilton San Francisco Union Square. The announced tracks include "Fighting Slop in Software Factories", "System One models making smart software" and "Raising Ambition, including Grand Rewrites". The [final track](https://x.com/swyx/status/2117679157035602065) features Thariq, Jarred Sumner, Armin Ronacher and Dex Horthy. swyx also [posted](https://x.com/swyx/status/2118169736563589350) a full rundown of the sessions. AIE Shanghai [kicked off](https://x.com/swyx/status/2118246851136909731) on Thursday.

Separately, swyx [wrote](https://x.com/swyx/status/2118066424996651505) that if you can build a category-leading open source project in AI engineering right now, "the market acquihire rate is ~$10-$100m per AI engineer. You do not need to figure out a business model, you do not need GTM, you do not need funding." Thursday's [four acquisitions](https://x.com/thdxr/status/2118046411912630477) were the obvious evidence.

### Matt Pocock: Sandcastle v1 and the factory course

Matt Pocock [posted](https://x.com/mattpocockuk/status/2116805878187794740) about putting "a ton of work into Sandcastle v1", his open-source TypeScript framework for orchestrating multiple sandboxed coding agents in parallel. Sandcastle supports Claude Code, Codex, Pi, Cursor, OpenCode and Copilot, each configurable with model, reasoning effort and permission modes, across Docker, Podman and Vercel sandbox providers.

His [Software Factories for Real Engineers](https://www.aihero.dev/boss/software-factories-for-real-engineers-xdy1m) cohort starts November 9 — a two-week course where work goes in as tickets and comes out as reviewed pull requests. Matt [described his latest experiment](https://x.com/mattpocockuk/status/2117570433134313951) as a local orchestrator thread attached to a software factory "with sandboxed implementers".

### Android Studio: Bring Your Own Agent

Android Studio Rabbit 2 now supports "Bring Your Own Agent", allowing developers to install and switch among more than 40 coding agents, including Claude Agent and OpenAI Codex. Google also released Android CLI plugins for Claude Code and Codex.

## Claude & Anthropic

### Claude Code v2.1.318 and upcoming deprecation

The [latest Claude Code release](https://releasebot.io/updates/anthropic/claude-code) (v2.1.318, first seen November 4) adds sign-in status details, cloud-session options, mod controls and VS Code code-block syntax coloring. The v2.1.308-through-2.1.318 cycle also includes sandbox and permission-check fixes and a new `permissions.blockWritesOutsideWorkingDirectories` setting.

**Deprecation notice:** Fast mode on Opus 4.8 is being removed on November 30. Users should move to Opus 5.5 to keep the speedup.

### Claude Code for SEO

Anthropic has [extended](https://emergent.sh/news/claude-code-seo-new-ai-tool-automates) its Claude Code platform into search engine optimization with the launch of Claude Code for SEO, a specialized tool for technical SEO workflows. Dated November 6.

### Quick hits

- Team and Enterprise admins can now set plugins to [auto-connect](https://x.com/bcherny/status/2117693181651542387) for teammates through MCP servers that accept Claude as a trusted issuer.
- Applications are open for the [Anthropic Residency](https://x.com/AnthropicAI/status/2117343929960112486) until November 22. "No ML background is required."

## Codex & OpenAI

### Codex CLI v0.166 and GPT-6.2 Astra sighting

Codex CLI has moved to [v0.166.0](https://www.morphllm.com/comparisons/codex-vs-claude-code) in early November. Notable additions:
- `codex queue --resume` — resumes unloaded threads after queueing a message
- `codex doctor --network-only` — focused connectivity diagnostics
- v0.165.0 added Vertex AI as a built-in provider
- v0.163.0 moved to the GPT-6 family and added `/config search`, mid-turn steering and parallel read-only tools

**GPT-6.2 Astra:** Codex users [spotted](https://www.cometapi.com/es/gpt-6-2-astra-codex-sightings/) a `gpt-6.2-astra` identifier in usage logs around November 1. OpenAI has not announced the model — no model card, pricing or release date exists. Per The Information, GPT-6.2 Sol and Astra [could ship as soon as this week](https://x.com/testingcatalog/status/2118068217151463867), but that's unconfirmed. Polymarket traders give a new Sol model (v6.2+) a ~60% chance by November 15 and ~75% by year-end.

### Dots: privacy meets compute costs

Fortune [reported](https://fortune.com/2026/11/05/openais-dots-are-coming-up-against-the-price-of-privacy-and-the-price-of-compute/) on the tension between Dots' always-on agents and their pricing and privacy challenges. OpenAI has not published ongoing Dots allowance or pricing for additional dots. The first dot is included with ChatGPT Pro and Business Premium plans, and OpenAI says additional dots and upgrades to speed or workload are coming.

### Quick hits

- **GitHub Copilot model removals:** Claude Opus 5, Claude Opus 4.8 and GPT-5.6 Terra are [being removed from Copilot on November 16](https://devshot.co/blog/ai-coding-tool-changes-tracker).
- The Codex app is [giving back RAM](https://x.com/ajambrosino/status/2118028125707923513) — local threads could grow memory usage as they became long.

## Models & Research

### Meituan LongCat-2.5: 1.6T parameters for agentic coding

Meituan [launched](https://explainx.ai/blog/longcat-2-5-1-6-trillion-agent-model-2026) LongCat-2.5 around November 1-2, a 1.6T-parameter multimodal model built for long-horizon coding agents. Key claims:

- Built on Chinese-designed chips, reportedly rivaling GPT-5.6 on several benchmarks
- Development focused on long task sequences rather than isolated prompt responses
- 1M context window, with a limited-time price of $0.30/M input and $1.20/M output tokens
- Currently available through Meituan's API platform, with [open weights promised](https://explainx.ai/blog/meituan-longcat-2-5-launch-api-1m-context-10-million-free-tokens-anthropic-compatible-endpoint-2026) but not yet delivered on GitHub or Hugging Face

Benchmark claims are company-reported and not independently verified. The earlier LongCat-2.0 is [already open](https://hub.baai.ac.cn/view/59293) under the MIT licence.

### DeepSeek Super-Agent: open source prototype

DeepSeek [released](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) Super-Agent around October 31-November 1, an MIT-licensed coding agent prototype aimed at Claude Code and Codex. Unlike reactive coding bots, it [monitors team chats and GitHub activity](https://www.analyticsinsight.net/news/deepseek-unveils-open-source-agent-that-fixes-code-before-you-ask) to spot bugs and propose solutions without being summoned.

Caveats: DeepSeek calls it a "research prototype" and "not an official DeepSeek product". The [underlying model weights remain proprietary](https://oodaloop.com/briefs/technology/deepseek-launches-open-source-super-agent-coding-tool-to-rival-anthropic/) — only the harness logic and integration loops are MIT-licensed. The public prototype also differs from DeepSeek's internal implementation, with some designs described in their paper still unimplemented in the released code.

### Mistral Large 4: aiming for the open-model crown

Mistral [released](https://fortune.com/2026/10/29/mistral-releases-new-model-large-4-and-claims-top-open-model-for-agentic-coding-and-cyber-defense/) Large 4 on October 29, a 1T-parameter model available on Hugging Face that they describe as "the best open model built in the West." Mistral claims it narrowly tops all other open models on Artificial Analysis' Coding Agent Index and ties with China's GLM-5.3 on Terminal-Bench 4.0. These are vendor-reported claims.

### Nanbeige 33B

Nanbeige [released](https://completeaitraining.com/news/nanbeige-releases-open-33b-model-for-agentic-coding/) a 33B open-weight coding model under the Apache 2.0 license with a reported 512K context window. Only one outlet covered it, so treat the benchmark claims with caution.

## Other Interesting Stuff

- **Armin Ronacher** on AI and software quality: [posted](https://x.com/mitsuhiko/status/2113207589978636646) "As fun as AI is, we built so much bad software over the last 30 years, and now the universe is punishing us for our sins." He's been building a [kids' programming game](https://hachyderm.io/@mitsuhiko) with an embedded coding agent that also maintains interactive documentation linked to the code.
- **OpenAI GPT-6 Cyber** remains in limited alpha. The model was [reported](https://thenextweb.com/news/openai-gpt-6-cyber-preview-fortune) as imminent in late September through the Daybreak Red program. It would be OpenAI's fourth cybersecurity-focused model this year after GPT-5.4, 5.5 and 5.6 Cyber. Thursday's announcement about [948 Linux kernel root bugs](https://openai.com/index/a-thousand-fewer-paths-to-root/) for $1.2M used "an upcoming cyber model" — possibly this one.
- **Thariq** (formerly Claude Code) [reflected](https://x.com/trq212/status/2117305792923889731) after a week away from Anthropic: "you don't need unlimited tokens to do great work, the $200 plans are amazing and this is the most expensive intelligence will ever be."
- **Jerry Liu** (LlamaIndex) [bought a Mac mini](https://x.com/jerryjliu0/status/2117799968815915440) for AI work, noting "codex remote > claude remote" but "opus 5.5 is a much more token-efficient daily driver."

---

*Note: This roundup was compiled from web search results. Direct access to X/Twitter and several blogs (simonwillison.net, hachyderm.io, dev.to, nitter.net) was blocked by the cloud session's network policy, which may have caused some stories to be missed.*
