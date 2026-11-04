---
title: "Fable 5.5 Animation Rumors, /retro Skill Paper, Qwen Reads Weights & DeepSeek Super-agent"
date: "2026-11-04"
summary: "Unverified **Fable 5.5** animation demos circulate — one claims a 66-second film in a single HTML file — while Anthropic stays silent. **Matt Pocock** finds researchers wrote an arXiv paper evaluating his /retro skill and calls it \"the greatest issue report in history.\" **Simon Willison** posts that Qwen 3.8 27B can interpret model weights on his laptop, ships llm 0.37.1 and datasette-agent 0.5a0, and publishes his Census Bureau AI-adoption chart update. **Theo** quips that LLMs are now \"good at pretty much everything other than generating text,\" teases a T3 Code fix, and pokes fun at a product still running 2021-era models. **DeepSeek** open-sources a \"Super-agent\" prototype that monitors repos without being asked. A **Menlo Ventures** report puts Claude Code and Codex at 70% of the enterprise AI coding market. **Dataiku** ships Headless, connecting coding agents to governed AI. **Factory** claims Droid 1.0 beats Claude Code by 8 points on Terminal Bench 4."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Local Models & Open Weights
  - AI Coding Market
  - Other Interesting Stuff
---

# AI Roundup — November 4, 2026

Covers Monday through Wednesday morning. A quieter stretch after the HackerTube/lineread weekend, but the rumor mill and the research papers kept moving.

## Agentic Coding & Agent Harnesses

### Matt Pocock: "the greatest issue report in history"

Matt Pocock [discovered](https://x.com/mattpocockuk/status/2117588845864575397) that a group of researchers wrote an arXiv paper assessing the effectiveness of his `/retro` skill for agent self-improvement. He called it "the greatest issue report in history" and joked that he should use /retro to test whether his own /retro changes made a difference — meta-retrospectives all the way down. The paper is part of a growing wave of academic work on evaluating agent skills, including [OpenSkillEval](https://arxiv.org/abs/2605.23657), which found that "skill availability does not guarantee effective skill usage" and that popular open-source skills don't consistently outperform base agents without skills.

Separately, Matt [asked](https://x.com/mattpocockuk/status/2117157362700058671) for the "aha moment" about Foldkit — "I want to fall in love but I'm scared" — drawing about 89K views.

### Theo: LLMs are bad at text now?

Theo [posted](https://x.com/theo/status/2117493401402953774): "Crazy how Large Language Models have gotten good at pretty much everything other than generating text." A tongue-in-cheek observation that models now excel at code, reasoning, and tool use, while their plain-text output quality still draws complaints.

Other Theo posts from the same window:
- [Teased](https://x.com/theo/status/2117213819491762322) a fix coming to T3 Code: "This may or may not be fixed for T3 Code. 🤐"
- [Mocked](https://x.com/theo/status/2117116387516878874) a product demo: "How did he find a product that's using models from 2021? I'm impressed."

### DeepSeek open-sources a "Super-agent" prototype

DeepSeek released [dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype), an MIT-licensed TypeScript prototype of a proactive coding agent that monitors a GitHub repo and proposes fixes without being asked. The design uses a two-layer architecture with event-driven processing, multi-channel interaction, and an external watchdog. The README is refreshingly honest: "It is not identical to our internal version," some designs are "directions for future development and are not implemented," and "much of the code was written by coding agents, so it may be buggy." Coverage from [Bloomberg](https://tech.yahoo.com/ai/claude/articles/weeks-ahead-expected-anthropic-ipo-084600736.html) and [Digital Today](https://www.digitaltoday.co.kr/en/view/122265/deepseek-unveils-super-agent-autonomous-coding-agent-targeting-claude-code) frames it as targeting Claude Code.

### Factory claims Droid 1.0 beats Claude Code by 8 points

[Factory says](https://finance.biggo.com/news/8bea3baefc4c3b61) its Droid 1.0 agent outperforms Claude Code by 8 percentage points on Terminal Bench 4 while running identical models, arguing that the harness, not the AI, is the differentiator. This is a vendor claim and has not been independently verified.

### Dataiku ships Headless

[Dataiku announced](https://tribune.net.ph/2026/11/03/dataiku-brings-ai-powered-development-to-claude-code-codex) Dataiku Headless on November 3, connecting coding assistants like Claude Code, OpenAI Codex, and Cursor to Dataiku's governed AI platform. The pitch: let agents write code while enterprise guardrails handle compliance.

## Claude & Anthropic

### Fable 5.5 animation rumors: impressive demos, no official word

Unverified demos of what users call "Fable 5.5" [trended on X](https://x.com/i/trending/2117348368376590626) over the past few days. The most viral claim, from a poster named Chetaslua, describes [a 66-second animated short](https://x.com/AGTPinsights/status/2117236071062802765) built as a single HTML file — 1920x804 at 24fps, with "every frame and every sound" generated from code, no image or video models involved.

What we actually know:
- **No official announcement.** Anthropic has not confirmed Fable 5.5 or given a release date. The model directory [still lists Fable 5.1](https://kingy.ai/blog/claude-fable-5-5/) as the latest Fable.
- **A "Mythos 5.5" string** appeared in the HTML source of Anthropic's website on November 1, and a `claude-fable-5-5` entry was [added to LiteLLM](https://decrypt.co/382390/claude-mythos-fable-5-5-gpt-6-2-astra-leaks).
- **The demos are unverified.** The animation clips could be from any model or even hand-crafted. No Anthropic spokesperson has commented.

Treat this as rumor until Anthropic publishes something official.

### Boris Cherny: formal verification of the Agent SDK with Lean

Several aggregator sites report that Boris Cherny (Head of Applications at Anthropic, creator of Claude Code) used Opus 5.5 to [formally verify the Claude Agent SDK in Lean](https://explainx.ai/blog/boris-cherny-opus-5-5-lean-tla-formal-verification-sdk-2026). One summary counts [16 pull requests, 24 bugs found, and 1,529 theorems](https://digg.com/ai/2witwwji) with "zero gaps." Cherny reportedly said he doesn't know either Lean or TLA+ well and that Claude did the formal modeling. A [third-party Claude Code skill](https://pi.dev/packages/agent-formal-verify) now implements the same verification method. The numbers are unverified — check Cherny's own posts or Anthropic's release notes before citing them.

## Local Models & Open Weights

### Simon Willison: Qwen 3.8 27B interprets model weights on a laptop

Simon Willison [posted](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) about running Qwen 3.8 27B locally through LM Studio and finding it can interpret neural network weights as text — building on a paper on reading and editing model weights directly. The post is titled "Qwen 3.8 27B on my laptop can interpret model weights, too," linking to the "Weight Space Should Be a First-Class Generative AI Modality" [position paper](https://icml.cc/virtual/2026/poster/67057) presented at ICML 2026.

### Simon Willison: llm 0.37 and other releases

A productive few days from Willison:
- **[llm 0.37](https://simonwillison.net/2026/Nov/2/llm/)** (Nov 2): switched the default model to gpt-6-luna (half the price of the previous default), added OpenAI-compatible endpoint support, and landed contributions from 12 authors — "almost all AI-assisted" — with less review burden than expected. Followed by **llm 0.37.1** (Nov 3) with fixes.
- **[datasette-agent 0.5a0](https://github.com/simonw)** (Nov 3) and **datasette-apps 0.3a0** (Nov 4) shipped on GitHub.
- **[Census Bureau AI adoption chart](https://simonwillison.net/2026/Nov/2/census-bureau-super-intelligence/)** (Nov 2): regenerated with October 22 data, adjusting for the Bureau changing the survey question.
- **[October sponsors-only newsletter](https://simonwillison.net/2026/Nov/3/october-newsletter/)** (Nov 3): covering vibe-coded game development, security, and LLM releases.

## AI Coding Market

### Menlo Ventures: Claude Code and Codex take 70% of enterprise AI coding

A [Menlo Ventures report](https://fourweekmba.com/ai-menlo-claude-code-and-codex-now-take-70-of-34b-ai-coding/) published November 3 estimates that Anthropic's Claude Code and OpenAI's Codex now account for $24 billion — about 70% — of a $34 billion enterprise AI coding market. This follows Menlo's earlier data showing Anthropic at [54% share of the coding segment](https://menlovc.com/?p=19192) and its enterprise LLM market report that put [enterprise LLM spend at $8.4B](https://natlawreview.com/press-releases/enterprise-llm-spend-reaches-84b-anthropic-overtakes-openai-according-new) with Anthropic overtaking OpenAI.

The [Goldman Sachs restriction story](https://thenewstack.io/ai-coding-agents-security) also landed: Goldman restricted Claude Code and GitHub coding tools for its engineers, while Replit's CEO argued that coding agents on employee devices are becoming a security risk.

## Other Interesting Stuff

- **Matt Pocock's course.** [Software Factories for Real Engineers](https://www.aihero.dev/boss/software-factories-for-real-engineers-xdy1m) starts November 9, a 2-week cohort covering wayfinder, codebase design, automated checks/review, and building a software factory. 5–8 hours per week, with live office hours.
- **OpenClaw releases.** Peter Steinberger's open-source agent [shipped v2026.10.9](https://www.theclawreport.com/) (maintenance and security hardening) and [v2026.11.5-beta.1](https://freedom.tech/posts/2026-11-04-openclaw-2026-11-5-beta-1/) on November 4. The weekly summary: 118 issues touched in 24 hours, 500 PRs updated, 221 merged or closed.
- **Steipete at XALT.** Steinberger spoke at the [XALT Enterprise AI Circle](https://github.com/steipete/speaking) in Munich on November 2 (invite-only), presumably on agents and enterprise workflows.
- **Plugin4Shell.** A [supply-chain vulnerability](https://dev.to/neticslabs/ai-coding-agents-now-ship-software-plugin4shell-shows-nobody-checks-the-package-2o46) affecting AI coding agents got fresh coverage. Claude Code is patched (v2.1.179+), but the disclosure highlights that "nobody checks the package" when agents auto-install dependencies.
- **LlamaIndex.** Jerry Liu's [OCRia-1](https://www.llamaindex.ai/blog), the "world's best document parsing model," continues to draw attention. LlamaIndex's strategic focus has [shifted to LlamaParse](https://vdf.ai/blog/best-rag-frameworks/), its commercial parsing platform, while the framework remains as an open toolkit.

---

*Note: nitter.net, x.com, and simonwillison.net are blocked in this session's network policy, so this roundup was compiled from web search results and cached snippets rather than direct profile reads. Some timestamps and engagement numbers may be approximate.*
