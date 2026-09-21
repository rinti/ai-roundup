---
title: "OpenAI tracks you across the web, Google ships an agent Kubernetes, Pirate Face seeds deleted models"
date: "2026-09-21"
summary: "Sunday's top story is a privacy bombshell: a researcher found that ChatGPT's `__obi` cookie tracks users across a dozen commercial sites — Chewy, Wayfair, Coursera — even after opting out of marketing consent, even logged out, and OpenAI classifies it as 'analytics' to dodge consent gates. Google shipped **AX v0.3.0**, an Apache-2.0 agent orchestrator that splits into three services and swaps Kubernetes CRDs for Redis Streams, pitching itself as the 'Kubernetes moment for agents.' **Pirate Face** launched as a Pirate Bay for model weights, torrenting Hugging Face checkpoints so they survive takedowns, and someone disclosed a **heap overflow plus SSO misconfiguration** that compromised OpenAI's internal repos. Meanwhile the AI-writing backlash hit critical mass: 'How to Write with an LLM' (723 points) and 'You should almost never use AI to write' (344 points) sat side by side on HN, and Trump announced an **AI Force** modeled on the Space Force with an AI czar appointment. Alibaba dropped **Qwen Image 2.1** with native RGBA and 2048×2048 output but switched to a research-only license. Tracked accounts were mostly quiet on this Sunday."
tags:
  - "Privacy & Surveillance"
  - "Agent Infrastructure"
  - "Security"
  - "AI Writing & Quality Debate"
  - "Models & Releases"
  - "Policy & Business"
  - "Other Interesting Stuff"
---

# AI Roundup — September 21, 2026

A Sunday dominated by privacy, plumbing and philosophy rather than new models. The biggest story is OpenAI tracking users across the web via an ad cookie; the biggest infrastructure drop is Google open-sourcing a distributed agent runtime; and the biggest cultural moment is Hacker News simultaneously upvoting a guide to writing with LLMs and an essay arguing you should almost never do it.

## Privacy & Surveillance

**ChatGPT's cross-site tracking cookie.** The top Hacker News story of the day (692 points, 362 comments). A researcher named Buchodi [found](https://news.ycombinator.com/item?id=49776699) that ChatGPT generates a 16-byte random identifier, binds it to the user's account via an RS256 JWT, and sets a cookie called `__obi` on `.openai.com` with `SameSite=None; Secure` and a one-year expiry. Advertisers who embed OpenAI's pixel send `__obi` plus page context — the researcher observed fields including email, phone, location and form values being sent from 12 commercial sites including Chewy, Wayfair, HelloFresh and Coursera. The critical detail: OpenAI classifies `__obi` as an "analytics" cookie, so it persists even when users decline marketing consent. It works logged-out, with the anonymous identifier staying stable for 27+ days. Safari and iOS Chrome block it by default; Android Chrome does not. Buchodi disclosed the mechanism to OpenAI on September 14. The HN thread is a fierce debate on consent, regulator inaction, and whether this makes ChatGPT an ad-tech product.

## Agent Infrastructure

**Google AX v0.3.0.** Google's [Agent Executor](https://github.com/google/ax) (AX), an Apache-2.0 open orchestrator for Agent Substrate workloads, [hit v0.3.0](https://github.com/google/ax/releases/tag/v0.3.0) and took the top AI slot on Hacker News with 214 points. The release splits AX into three services — API front end, reconciler, and sandboxed task runner — and moves task state out of Kubernetes custom resources into Redis Streams, because etcd was never designed for the churn of millions of short-lived agent tasks. The earlier single CLI is replaced by an embedded Python harness. The project is at ~3.7k stars and Google is explicitly [framing this](https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime) as the "Kubernetes moment for agents" — a bet that agents need a scheduler-and-runtime layer, not a library.

**Orca keeps trending.** The [Orca ADE](https://github.com/nicepkg/orca) (43k+ stars, MIT) continues to be discussed across Dev.to and the community digests as the de facto standard for running multiple AI coding agents in parallel. Open a terminal, type one prompt, and it spins up five isolated git worktrees, each running a different agent (Claude Code, Codex, OpenCode, Pi) against the same task. You pick the winner. The [Dev.to piece](https://dev.to/monuminu/ai-agent-containment-after-the-great-sandbox-escapes-of-2026-what-gpt-56-sol-claude-and-rogue-4oll) on agent containment post-sandbox-escapes also drove discussion.

**Cache-to-Cache LLM communication.** A new paper (106 points on HN) proposes a protocol for LLMs to exchange latent representations directly without tokenization — potential efficiency gains for multi-agent systems, though commenters questioned whether the gains survive in practice.

## Security

**OpenAI internal repos compromised.** A [bug bounty write-up](https://news.ycombinator.com/item?id=49776699) (486 points, 208 comments) detailed how a heap overflow combined with an SSO misconfiguration gave access to OpenAI's internal repositories. The thread raises pointed questions about AI lab security maturity — these are the organizations building models that escape sandboxes, and their own infrastructure has textbook vulnerabilities.

**Plugin4Shell aftermath.** Still reverberating from the September 18 disclosure. The [zero-click RCE](https://www.air.security/blog-posts/plugin4shell) that lets attackers swap malicious plugin code past SHA-pinning checks has been patched in Claude Code (v2.1.179) and OpenAI Codex (v0.146.0), but GitHub Copilot [remains unpatched](https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/) and Google is deprecating Gemini CLI entirely, directing users to Antigravity. The root cause is identical across all four implementations: a wrong assumption about `git checkout` semantics where an attacker-controlled branch name matching a commit hash redirects checkout to malicious code.

**Agent memory as attack surface.** A [Dev.to post](https://dev.to) gaining traction argues that writable agent memory enables behavior injection, and that byte-integrity checks alone cannot verify data provenance. Compact threat model, but it is reshaping how people think about agent architecture and persistence.

## AI Writing & Quality Debate

A rare moment where HN's front page hosted both sides of the argument simultaneously.

**"How to Write with an LLM"** (723 points, 404 comments) advocates iterative, structured prompting over one-shot generation. The community split hard: one camp shared concrete workflows; the other argued that "writing is thinking — outsourcing it degrades thought."

**"You should almost never use AI to write"** (344 points, 166 comments) continued its weekend run. The core claim: writing is inseparable from thinking, and AI prose is "very dense with unnecessarily vague and subtly wrong phrases." The emerging consensus, insofar as HN has one: use AI for editing, not drafting.

**"If AI coding is lowering your code quality, you're not managing quality right"** (78 points, 127 comments) took the pragmatic position: the answer is stricter review gates (mutation testing, property-based tests), not abandoning AI coding. Concrete CI/CD patterns were shared in the thread.

## Models & Releases

**Alibaba Qwen Image 2.1.** [Released September 20](https://huggingface.co/Qwen) on Hugging Face and ModelScope (547 points, 161 comments). A 7B parameter model with a 32-layer DiT and Qwen3-VL 8B text encoder, native 2048×2048 output at 40 steps, and a notable feature: native RGBA (transparent background) generation and editing without a separate matting step, plus support for up to 10 reference images simultaneously. The catch: Alibaba dropped the Apache license for research-only weights; commercial use requires a separate grant. A 7B open-weight model competing with closed systems, but the restrictive license dampens ecosystem enthusiasm.

**Google AX v0.3.0** — covered above under infrastructure, but worth noting as a model-agnostic runtime release.

**Vercel json-render** (~17.5k stars, +291 today). An Apache-2.0 "Generative UI" framework where the model outputs constrained JSON specs and renderers draw progressively across React, Vue, Svelte, Solid, and React Native. Includes 36 shadcn/ui components. Positioned as a guardrailed alternative to letting models generate raw markup.

## Policy & Business

**Trump's AI Force.** In a [Truth Social post](https://truthsocial.com) on Saturday, Trump announced plans to create an "AI Force" modeled on the Space Force, appoint an AI czar, and rely on existing criminal and civil law for AI misconduct rather than new regulation. This is the most direct government rejection of the pacing consensus from Amodei, Altman, and Musk's September 12 joint statement.

**Anthropic IPO latest.** No new developments today beyond what was reported Friday: the [IPO has slipped to November](https://www.wsj.com/tech/ai/anthropic-shifts-planned-ipo-to-november-8874dffc) (the second delay), with reported valuation discussions ranging from ~$965B to north of $2T. Annualized revenue exceeds $100B, up 50% from the $65B figure disclosed in July, driven by Claude Code and Cowork enterprise adoption.

**Microsoft's "largest theft of labor."** Still circulating from the [unsealed NYT lawsuit briefs](https://www.tomshardware.com/tech-industry/artificial-intelligence/microsoft-director-called-ai-scraping-the-largest-theft-of-labor-in-human-history-while-openai-head-brands-chatgpt-an-existential-threat-to-publishers-revelations-come-from-legal-briefs-filed-in-nyt-lawsuit) (183 points today): a Microsoft Applied Science director called AI scraping "the largest theft of labor in human history" and internal data showed Copilot cut the Times' click-through by up to 93%.

## Other Interesting Stuff

- **Pirate Face.** [pirateface.co](https://pirateface.co/) (489 points, 142 comments) launched as a Pirate Bay for AI model weights — checksummed torrents of Hugging Face models so they survive takedowns, DMCA, or author deletion. Every file is verified against the official SHA-256. Celebrated as cultural heritage work for open models, though the legal gray zone is acknowledged. Direct publishing without Hugging Face is planned.
- **Autonomous strike drone on Nvidia Jetson.** A Swedish startup demonstrated a fully autonomous targeting drone using an Nvidia Jetson Orin Nano (27 points, but universal condemnation in comments with calls for treaty bans).
- **AI chatbots changing minds.** A study (135 points, 101 comments) showed LLMs outperform humans in persuasion tasks. The thread focused on manipulation risks and "cognitive liberty" frameworks.
- **Stanford CS146S coursework.** The "Modern Software Dev" course (Fall 2026) treats agentic engineering as the default workflow. The public repo is trending (~4.6k stars, +172 today) and is being adopted as practitioner curriculum outside Stanford.
- **NASA-IBM Lunar Foundation Model.** An open-source geospatial AI model for lunar surface analysis, quietly released.
- **Research papers of note:** "How Do Agent Harnesses Create Value?" found fixed task plans improve success by 7.17 points over shuffled policy text; "The More It Says, the More You Pay" formalizes provider-side token inflation attacks achieving 10x+ output length; "Trading Agents or Market Crashers?" found 80% of financial trading agents fail at least one robustness metric and 100% have security vulnerabilities.

*Quiet today: This is a Sunday, and most tracked accounts were dormant. Karpathy's last post remains September 12. Boris Cherny, Thariq, and Jerry Liu were quiet. Simon Willison posted a [quote from voxium](https://simonwillison.net/2026/Sep/20/voxium/) on September 20. Matt Pocock, Theo, Armin Ronacher, swyx, and Peter Steinberger had no notable new posts today beyond what was covered in yesterday's roundup.*
