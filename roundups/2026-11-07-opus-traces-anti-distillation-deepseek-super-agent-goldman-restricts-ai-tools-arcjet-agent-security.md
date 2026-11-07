---
title: "Opus Traces as Anti-Distillation, DeepSeek's Super-Agent, Goldman Restricts AI Tools & Arcjet Ships Agent Security"
date: "2026-11-07"
summary: "A quieter day after yesterday's packed edition. **Theo** floated a conspiracy theory that Opus 5.5's reasoning traces are deliberately garbled to disrupt distillation — \"they read like a shitty quantized open weight model then SOMEHOW the right answer comes out.\" **DeepSeek** open-sourced **Super-Agent**, a coding agent that takes tasks from GitHub issues and team chat and ships pull requests, positioning it as their answer to Claude Code and Codex. **Goldman Sachs** pulled Claude Code and GitHub Copilot from traders and bankers, limiting access to its ~12,000 engineers. **Arcjet** announced Runtime Security for Coding Agents, including discovery, policy enforcement and an endpoint agent that blocks unmanaged AI connections. **Claude Code v2.1.319** shipped with MCP background task execution and spend tracking in `/usage`. **swyx** wrapped **AI Engineer Shanghai** and posted \"$0 to $100B ARR in 2.5 years\" — still processing the conference. The **model drought** continues: Gemini 4 Carbon and Fable 5.5 remain unavailable to developers."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Models & Research
  - Agent Security
  - Other Interesting Stuff
---

# AI Roundup — November 7, 2026

## Agentic Coding & Agent Harnesses

### Theo's Opus 5.5 anti-distillation theory

Theo [floated a theory](https://x.com/theo/status/2118634626679775549): "This is a conspiracy theory but I'm like 95% sure I'm right. Reasoning traces for Opus 5.5 read like a shitty quantized open weight model then SOMEHOW the right answer comes out in the end." His implication: the traces are deliberately noisy to make distillation harder — you can read what the model "thought", but training on those traces won't reproduce the capability. Replies pointed to Haiku being used for summarized chain-of-thought, suggesting the visible traces may be a compressed representation rather than the model's actual reasoning path.

### DeepSeek open-sources Super-Agent

[DeepSeek released Super-Agent](https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/), an open-source coding agent that takes requests from GitHub issues and team chat and responds with pull requests. DeepSeek labels it a research prototype, but the positioning is clear: it's their answer to Claude Code and Codex. The agent works from existing developer workflows rather than requiring a separate IDE or terminal. Sources differ on the exact launch date — some say November 1, others late October — but coverage continued through this week. ([Technology.org](https://www.technology.org/2026/11/04/deepseek-super-agent-open-source-coding-agent-dsh-superagent/), [Digg](https://digg.com/ai/mmyx1gqw))

### Goldman Sachs restricts AI coding tools to engineers

[Bloomberg reported](https://www.newsquawk.com/headlines/goldman-sachs-gs-reportedly-restricts-access-to-advanced-ai-coding-tools-including-anthropics-claude-code-and-microsofts-msft-github-to-engineers-only-bloomberg-reports) that Goldman Sachs pulled Claude Code and GitHub Copilot from traders and bankers, confining access to roughly 12,000 engineers. The bank had let non-engineers use these tools for months — some reports tie the reversal to a review after the firm had praised trader "vibe coding" back in July. Goldman isn't banning AI: it still runs its own in-house assistant combining models from OpenAI, Anthropic and Alphabet. This follows an [April restriction](https://www.pulse.bot/ai/news/goldman-stops-bankers-using-anthropics-claude-in-hong-kong-88b616cd-3183-4252-9fb6-07fa59fd2df1/) of Claude access for employees in Hong Kong over concerns about confidential data leaving the firm. ([AI Weekly](https://aiweekly.co/alerts/goldman-sachs-pulls-claude-code-and-github-copilot-from-traders-and-bankers), [CrowdfundInsider](https://www.crowdfundinsider.com/?p=321098), [The Decoder](https://the-decoder.com/goldman-sachs-pulls-ai-coding-tools-from-traders-and-bankers/))

### Claude Code v2.1.319

A [daily agent-news digest](https://github.com/dboeter/daily-diff/issues/210) lists Claude Code v2.1.319 shipping today. Changes include MCP background task execution, spend tracking in `/usage`, and tweaks to auto-mode behavior when telemetry or feature flags are disabled.

### swyx wraps AI Engineer Shanghai

The [AI Engineer Shanghai](https://ai.engineer/shanghai/2026) conference ran November 5–6. swyx opened with a ten-minute video message and hosted an enterprise agents session. Afterwards he [posted](https://x.com/swyx/status/2118152585911869634): "i'm still processing. what an insane run. $0 to $100B ARR in 2.5 years." The Latent Space newsletter's [daily recap](https://latent.space/p/ainews-it-s-swapping-season/) from the same window covered OpenAI's GPT-Live outbound SIP calling going GA, Kimi K3.1 Pro's open weights, and the Foresight-SWE benchmark finding agents solve issues 60.7% of the time but only 14.8% when they must also avoid bugs developers later fixed.

## Agent Security

### Arcjet ships Runtime Security for Coding Agents

[Arcjet announced](https://www.prnewswire.com/news-releases/arcjet-launches-custom-ai-security-models-to-protect-ai-agents-302930835.html) Runtime Security for Coding Agents, a product that lets security teams discover which coding agents are in use across every developer endpoint and enforce policies on them. It works through coding agent hooks, OpenTelemetry, and provider APIs, with an optional endpoint agent that can block unmanaged AI connections. The [Arcjet Plugin](https://docs.arcjet.com/arcjet-plugin) is open source and adds security-aware coding rules, skills, and an MCP-based security analyst agent. Earlier this year, Arcjet introduced Guards for enforcement inside the agent loop rather than at an HTTP boundary — useful for prompt injection on tool results, where a proxy-based approach falls short. ([SharedContext](https://sharedcontext.ai/plugins/external/arcjet/arcjet-plugin-for-ai-coding-agents))

## Models & Research

### The model drought drags on

Yesterday Theo [listed the gap](https://x.com/theo/status/2118517082732310536): "Gemini 4 Carbon was announced over a week ago and still isn't available! Fable 5.5 has been 'this week™' for a month now!! We haven't seen an Astra tier model from OpenAI in OVER 2 MONTHS!!!" The situation hasn't changed. Gemini 4 Argon [is available](https://smartscope.blog/en/blog/gemini-4-carbon-availability-release-date-differences-argon-2026/), but Carbon remains limited to a subset of cyber defenders in Google's Fairwind Program. Fable 5.5 has no confirmed release date. The only new model this week was Thinking Machines' [Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/) (594B total, 17B active), covered yesterday.

### Foresight-SWE: can agents catch what humans miss?

The [Foresight-SWE](https://neurips.cc/virtual/2026/168192) benchmark, accepted at NeurIPS 2026, tests whether coding agents can anticipate edge cases that the task never states. Across 65 samples from 14 open-source Python repos, it defines an "anticipation gap" — the difference between how well agents pass the original task's tests vs. tests for edge cases discovered later. The related [Active-SWE](https://arxiv.org/pdf/2608.04682) benchmark (1,663 tasks, 8 languages) finds most state-of-the-art agents struggle with proactive bug-fixing.

## Other Interesting Stuff

- **Latent Space podcast.** Two new episodes this week: [Inkling 2 Small](https://latent.space/) (Nov 6) and a Fabian Theis episode on controlling biology (Nov 6), plus the [Zach Lloyd episode](https://www.youtube.com/watch?v=LL0YmIyBKSU) on the software factory infra stack (Nov 3), which ties into yesterday's factory backlash.
- **LlamaIndex teases parsing launch.** Jerry Liu [posted](https://x.com/jerryjliu0/status/2118419308472926477): "YOU CAN PARSE EVERYTHING" with a November 17 date. LiteParse v2.0 was rewritten in Rust with claimed 100x speedups, and [now plugs into](https://x.com/llama_index/status/2118433203526533150) MiniCPM-OCR.
- **Karpathy's graph lecture.** A [third-party recap](https://x.com/ai_explorer25/status/2117864671050953199) of a Karpathy lecture (Nov 4) argues that graphs — not prompts — are the durable layer: "LLMs → Prompts → Agents → Graphs."
- **Steipete's token bill.** Peter Steinberger (now at OpenAI) [reportedly spent](https://www.theregister.com/ai-and-ml/2026/10/21/openclaw-creator-says-he-spent-10-million-in-tokens-last-month/5304573) $10M in tokens in a single month running AI workloads on OpenClaw. A separate report puts a single month's API bill at [$1.3M](https://thenextweb.com/news/openclaw-peter-steinberger-1-3-million-openai-token-bill) across ~100 Codex instances.
- **Simon Willison's quiet week.** His latest blog posts: [datasette-llm 0.1a10](https://simonwillison.net/2026/Nov/4/datasette-llm/) bugfix (Nov 4), [Qwen 3.8 27B interpreting model weights](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) on a laptop (Nov 3), and [llm 0.37](https://simonwillison.net/tags/llm/) with 12 contributors — "almost all AI-assisted."
