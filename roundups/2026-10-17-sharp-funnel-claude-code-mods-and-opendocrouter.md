---
title: 'Sharp Funnel, Claude Code Mods & OpenDocRouter'
date: '2026-10-17'
summary: >-
  Karpathy's "sharp funnel" on the AI capability gap, Claude Code ships Mods
  (TypeScript plugin hooks), Jerry Liu launches OpenDocRouter, Theo claims 22
  years of work in 24 days, Simon Willison on hard budget caps and voice-driven
  dev, AI Engineer NYC wraps with 53 sessions
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Industry Discussion & Takes
  - Open Source & Tooling
  - Other Notable Items
---
# AI Roundup — October 17, 2026

## Agentic Coding & Agent Harnesses

### Boris Cherny: Claude Code v2.1.287 ships Mods
Boris Cherny (creator/head of Claude Code at Anthropic) announced **Mods** — a new plugin system for Claude Code that lets you write JS/TS hooks into the agent's execution pipeline. Mods aren't sandboxed; they run with the same permissions as the user, making them powerful but requiring trust. This effectively turns Claude Code into a platform — you can now build custom behaviors, enforce conventions, add integrations, or modify agent behavior without forking anything. The community response has been massive, with people already building review bots, automated PR workflows, and multi-agent squad setups on top of it.

- [Boris Cherny on X](https://x.com/bcherny)
- [Claude Code Mods guide on dev.to](https://dev.to/max_quimby/claude-code-mods-just-turned-agents-into-a-platform-5gc0)

### Matt Pocock: "AI Coding For Real Engineers" next cohort in November
Matt announced the next cohort of his course covering wayfinder patterns, codebase design for agents, automated checks/review, and building a "software factory." His `skills` repo (reusable agent skills for Claude Code) continues trending at v1.2.0. He's also still actively building **Sandcastle**, his TypeScript orchestrator for running coding agents in sandboxed environments.

- [Matt Pocock on X](https://x.com/mattpocockuk)
- [Skills repo on GitHub](https://github.com/mattpocock/skills)
- [Sandcastle repo](https://github.com/mattpocock/sandcastle)

### Theo: T3 Code and "22 years of work in 24 days"
Theo is building **T3 Code**, an open-source AI coding client, alongside **T3 Connect** for remote iOS simulator control. He made the bold claim of compressing "22 years of work into 24 days" using Opus 5.5. He also reviewed Meta's **Muse Wonder Full** model, calling it the first non-Anthropic/non-OpenAI model he'd use daily — though noted its reasoning ceiling is still below Opus 5.5. Other recent episodes covered OpenAI's October 2026 Codex subscription changes (new "Ultra Fast" inference mode) and a "Life after GitHub" piece arguing GitHub's decline stems from failing to adapt to rising compute costs.

- [Theo on X](https://x.com/theo)

### Simon Willison: Hard budget caps, AI-first code review, and building by voice
Simon has been on a tear with several threads: pushing for **hard budget caps** on AI API usage (a practical safety measure for teams), advocating for **AI-first code review** workflows, and demonstrating **building features entirely by voice** using speech-to-agent pipelines. Classic Simon — practical, opinionated, and building in public.

- [Simon Willison on X](https://x.com/simonw)

## Claude Code & Anthropic Updates

### Peter Steinberger: Anthropic's Scion source control hitting 30K merges/day
Peter Steinberger highlighted that Anthropic's internal source control system **Scion** is now handling 30,000 merges per day. The **Mononoke attribution dispute** continues — some in the community allege Scion borrows heavily from Meta's Mononoke (a Mercurial-based source control system) without proper attribution. The discussion is ongoing and contentious.

- [Peter Steinberger on X](https://x.com/steipete)

### Thariq Shihipar: Non-coding uses of coding agents
Thariq (on the Claude Code team at Anthropic) continues focusing on expanding coding agents beyond code — slides, research, knowledge management. His concept of **"HTML as output format for agents"** keeps reappearing in industry presentations. His Latent Space podcast episode "The Future of Mutable Software" (from September) on local-vs-cloud coding agents has racked up 603K views.

- [Thariq on X](https://x.com/trq212)
- [Latent Space episode: The Future of Mutable Software](https://www.latent.space/p/thariq)

## Industry Discussion & Takes

### Karpathy: The "sharp funnel" — AI capability gap is widening
Andrej Karpathy posted a thread on what he calls the **"sharp funnel"** — the idea that the AI capability gap is getting wider, not narrower. About ~5,000 people in the world are seeing frontier agent capabilities, while 6 billion people have barely touched LLMs at all. His argument: the top of the funnel (people who've tried ChatGPT once) is massive, but it narrows sharply to people who actually use agents productively, and even more sharply to people who are building on the frontier. The implication is that most discourse about AI is coming from people who haven't experienced what's actually possible.

- [Karpathy on X](https://x.com/karpathy)

### swyx: AI Engineer NYC wraps with 53 sessions
The **AI Engineer NYC** conference wrapped up with 53 sessions, including what's reported as the first **Claude Flows** workshop. swyx (Shawn Wang) has been active recapping highlights and engaging with the community around the conference.

- [swyx on X](https://x.com/swyx)

### Pi 1.0 adopts MCP via Codemode
After long resistance, **Pi 1.0** has adopted MCP (Model Context Protocol) through Codemode. This is notable as another major tool falling in line with the MCP standard, further solidifying it as the interop layer for AI tooling.

## Open Source & Tooling

### Jerry Liu: OpenDocRouter — unified API for 130+ document parsing models
Jerry Liu (LlamaIndex creator) launched **OpenDocRouter**, a unified API that provides access to 130+ document parsing models through a single interface. This is aimed at the growing need for structured document understanding in agentic workflows — receipts, invoices, contracts, research papers, etc. One API to route to the best parser for each document type.

- [Jerry Liu on X](https://x.com/jerryjliu0)

### Armin Ronacher: AI agent toolkit at Earendil Works
Armin Ronacher (creator of Flask, Jinja, etc.) continues building at **Earendil Works** — his AI agent toolkit features a unified LLM API, agent loop, TUI, and coding agent CLI, all in TypeScript. He also maintains MiniJinja (Rust template engine). No major October announcements surfaced but the project continues active development.

- [Armin Ronacher on X](https://x.com/mitsuhiko)

## Other Notable Items

### LLMJunky: M5 Ultra Studio costs
LLMJunky posted a comparison of **256GB M5 Ultra Studio** leasing costs versus Max subscription pricing across AI providers — relevant for anyone running local models and trying to decide between local hardware and cloud subscriptions.

- [LLMJunky on X](https://x.com/LLMJunky)

---

*Note: Nitter instances were unreachable during this scan. Content was gathered via web search and secondary coverage. Some accounts had minimal recent activity surfaceable through search.*
