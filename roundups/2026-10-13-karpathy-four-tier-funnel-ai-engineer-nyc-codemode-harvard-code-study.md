---
title: "Karpathy maps AI's four-tier awareness funnel, AI Engineer NYC kicks off, Armin Ronacher explains Codemode, Harvard says agents add 30% more code but ship no more software"
date: "2026-10-13"
summary: "**Andrej Karpathy** revisited his April thread on AI awareness, framing it as a four-tier funnel: ~6B people have barely touched an LLM, ~1-2B use free chatbots casually, ~20M use frontier models for code and math, and ~5,000 have internal access to frontier systems. He called anyone in AI before 2026 a 'dinosaur.' **AI Engineer NYC 2026** runs October 12-14 at the Sheraton Times Square with 167 sessions and speakers from OpenAI, Anthropic, Two Sigma and Bridgewater — both ticket tiers sold out. **Armin Ronacher** (@mitsuhiko) published 'What is Codemode,' explaining how Pi 1.0 lets agents chain tool calls through sandboxed JavaScript instead of one-off model calls. **Simon Willison** shipped llm-anthropic 0.30 with Claude Sonnet 5.5, reviewed Claude Haiku 5.5 pricing, built a blog feature entirely by voice with GPT-6 Astra, and released plugins for Mistral Large 4 and OpenAI's Decisions API. **Harvard** published a study of 718 firms showing AI agents produce ~30% more code and ~23% more PRs but no statistically significant increase in completed issues — code review times rose 49%. **JetBrains** reported 90% weekly AI agent adoption among developers, with Claude Code at 39% usage worldwide. **Matt Pocock** announced 'AI Coding for Real Engineers' as the next cohort and continues developing Sandcastle for orchestrating sandboxed coding agents. **Jerry Liu** launched LlamaParse Extract v2.5 with tiered document-extraction agents. **Peter Steinberger** spoke at SF Tech Week's opening fireside on October 5."
tags:
  - "Karpathy's four-tier AI awareness funnel"
  - "AI Engineer NYC 2026"
  - "Armin Ronacher's Codemode"
  - "Simon Willison's week in LLM tools"
  - "Harvard study on AI coding productivity"
  - "Industry & Adoption"
  - "Agentic Coding & Tools"
  - "Other Interesting Stuff"
---

# AI Roundup — October 13, 2026

The AI Engineer NYC conference started today (October 12-14), Karpathy posted a thread that maps who actually understands what LLMs can do, and Harvard published numbers that should give every "AI makes us 10x" claim a reality check. Simon Willison had a prolific week shipping LLM plugins and blogging, and Armin Ronacher dropped a deep technical post on Codemode. Most of the tracked accounts were quiet on X in the last 24 hours — likely because half of them are at AI Engineer NYC.

**Note:** Nitter.net and all known Nitter mirrors are down, so this roundup was compiled from web search results, cached tweets, blog posts, and news coverage rather than direct timeline scraping. Some post dates are approximate.

---

## Karpathy's four-tier AI awareness funnel

Andrej Karpathy revisited his April thread on the growing gap in understanding of LLM capabilities, reframing it as a narrowing funnel rather than two groups talking past each other.

**The four tiers:**
- **Tier 1 (~6B people, ~75% of the world):** Have barely interacted with an LLM. Their only reference point might be an older free chatbot.
- **Tier 2 (~1-2B people):** Casual users of free products like ChatGPT — for them AI is a somewhat better search engine or writing aid.
- **Tier 3 (~20M people, ~0.2%):** Power users of frontier models for math, code, and technical work.
- **Tier 4 (~5,000 people):** Those with internal access to frontier systems at labs.

In a [reply to @omarsar0](https://x.com/karpathy/status/2106806571321966793), Karpathy called anyone who was in AI before 2026 an "AI dinosaur" — noting that 99%+ of people now paying attention were onboarded in the last year, which is "very confusing to the AI dinosaurs." The [follow-up thread](https://x.com/karpathy/status/2109361546505966046) argues this gap is *widening*, not closing.

Sources: [x.com/karpathy](https://x.com/karpathy/status/2106806571321966793), [BigGo Finance](https://finance.biggo.com/news/6e74d8f8-0a20-47b5-9ffe-f8a45cd33264)

---

## AI Engineer NYC 2026

The [AI Engineer New York 2026](https://ai.engineer/nyc/2026) conference runs October 12-14 at the Sheraton New York Times Square. Both engineering and leadership tickets are sold out.

- **Scale:** 1,000+ attendees, 167 sessions, a hackathon, and a kids day
- **Focus:** Financial services AI, with speakers from OpenAI, Anthropic, Two Sigma, Bridgewater, Citadel Securities and 100+ more companies
- **Format:** Day 1 workshops + welcome reception, Days 2-3 keynotes, sessions, leadership programming, and expo
- **Remote:** Claims 150K+ livestream attendees

Several of the accounts tracked in this roundup (swyx, steipete, likely others) are at the event, which explains the quiet timelines.

Source: [ai.engineer/nyc/2026](https://ai.engineer/nyc/2026)

---

## Armin Ronacher's Codemode

Armin Ronacher (@mitsuhiko) published ["What is Codemode"](https://lucumr.pocoo.org/2026/10/6/codemode/) on October 6, explaining a pattern introduced in Pi 1.0 that lets LLM agents chain tool calls through sandboxed JavaScript (QuickJS running in WASM) instead of making one-off tool calls from the model's context.

**Key points:**
- Revisits his earlier advice that people shouldn't load custom tools into their context or MCP servers, and should use scripts instead
- Pi 1.0 added MCP support via Codemode — the model writes JavaScript that orchestrates tools in a sandbox
- MCP servers often don't yet target Codemode-aware harnesses
- Open problems include durability, binary data handling, and support for smaller models
- He's [looking for examples](https://x.com/mitsuhiko/status/2106092733957906474) of cool things people have built with Jev and Codemode

Separately, his GitHub profile now describes an "AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI" as a pinned project.

Sources: [lucumr.pocoo.org](https://lucumr.pocoo.org/2026/10/6/codemode/), [x.com/mitsuhiko](https://x.com/mitsuhiko/status/2106092733957906474)

---

## Simon Willison's week in LLM tools

Simon Willison had a packed week of releases and blog posts:

**Releases:**
- **llm-anthropic 0.30** — Added support for Claude Sonnet 5.5 and a new `llm anthropic refresh` command to update the model list from the API
- **llm-mistral 0.16** (Oct 6) — Adds reasoning-model support for Mistral's new [Mistral Large 4](https://simonwillison.net/2026/Oct/6/llm-mistral/)
- **llm-openai-decisions 0.1a0** (Oct 6) — Plugin for OpenAI's new Decisions API, which he says GPT-6 Astra wrote from the API docs
- **ttok 0.4** (Oct 8) — Token-counting CLI refresh with a new `--list-models` command

**Blog posts:**
- **[Claude Haiku 5.5](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/)** (Oct 7) — Reviews the new model's pricing ($0.10/$0.50 per million tokens up to 100K context, 5x beyond) and pelican-drawing abilities. Notes it uses a new, less generous tokenizer.
- **[A new feature for my blog, built using my voice](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)** (Oct 9) — Built a Newsletters page for his Django blog entirely by voice, talking to GPT-6 Astra High in the ChatGPT desktop app's Codex tab while cooking dinner. The whole thing took about 30 minutes. He doesn't expect voice coding to become a daily driver but found it capable for a simple Django feature (model, migration, views, templates, import functions).
- **Python 3.15 notes** (Oct 12) — Covers using Python 3.15 with uv

He's also hosting an informal agentic engineering evening in San Francisco on October 14 with Jesse Vincent.

Sources: [simonwillison.net](https://simonwillison.net/), [simonwillison.net/2026/Oct/7/claude-haiku-5-5/](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/), [simonwillison.net/2026/Oct/9/built-using-my-voice/](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

---

## Harvard study: agents add 30% more code, not more shipped software

A Harvard working paper by Fiona Chen and James Stratton, "Artificial Intelligence in the Firm: Bottlenecks in Software Production," used Jellyfish analytics data covering 718 firms and ~725,000 workers from 2021-2026.

**The findings:**
- Lines of code up ~30%, commits up ~20%, pull requests up ~23%
- **No statistically significant increase** in resolved Jira issues or completed epics
- Code review times rose **49%**, revision requests nearly doubled
- The bottleneck has shifted from writing code to reviewing it

A separate MIT/Wharton NBER paper (w35275) covering 500,000+ developers found autonomous agents raise commits by 240% but releases by only 30%.

**My read:** The "AI makes developers 10x more productive" narrative needs serious qualification. Agents are clearly generating more code, but the pipeline downstream — review, testing, integration — hasn't scaled with it. If anything, the flood of AI-generated PRs is slowing review down.

Sources: [fourweekmba.com](https://fourweekmba.com/ai-coding-agents-add-30-more-code-not-more-finished-work/), [NBER w35275](https://www.nber.org/index.php/papers/w35275), [Ars Technica coverage](https://gulfnews.com/technology/90-of-developers-surveyed-now-use-ai-coding-agents-at-work-jetbrains-says-1.500700542)

---

## Industry & Adoption

**JetBrains 2026 Developer Ecosystem Survey** (May-July, 15,000+ respondents):
- **90%** of professional developers use AI coding agents at work at least weekly; **68%** use them daily
- Claude Code leads at **39%** usage worldwide (47% in the US), up from 18% in January
- GitHub Copilot fell to **21%**, Codex rose to **16%**

Source: [JetBrains Research blog](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)

**GitSpawn vulnerabilities** — still relevant from the September disclosure by Manifold Security. Eight flaws across seven agents (Claude Code, Codex, Cursor, Goose, Qwen Code, Grok Build, Hermes Agent) that exploit `.git/config`'s `core.fsmonitor` to run arbitrary code when agents call `git status`. Some agents are patched; others still have open variants. The attack requires the `.git` directory to arrive intact (shared archive, synced drive), not through a normal clone.

Sources: [CSA Labs](https://labs.cloudsecurityalliance.org/research/csa-research-note-gitspawn-ai-coding-agent-rce-20260903-csa/), [Expert Insights](https://expertinsights.com/news/hackers-can-get-ai-agents-to-hack-you)

---

## Agentic Coding & Tools

**Matt Pocock** (@mattpocockuk):
- Announced the next cohort is **"AI Coding for Real Engineers"** — a complete re-record covering wayfinder, codebase design, automated checks/review, and building a software factory. Sometime in November. ([x.com/mattpocockuk](https://x.com/mattpocockuk/status/2095899598430552471))
- **Sandcastle** (8.4K GitHub stars) continues development — a TypeScript library that orchestrates sandboxed coding agents with `sandcastle.run()`, supporting Docker/Podman/Vercel sandboxes and Claude Code/Codex/Pi/Cursor/OpenCode/Copilot as agents
- AI Hero reports 8,500+ engineers trained in cohorts as of August 2026

**Jerry Liu** (@jerryjliu0):
- Launched **LlamaParse Extract v2.5** (Oct 1) — a series of frontier agents tuned for document extraction in cost-effective, agentic, and agentic-plus tiers. Claims they outperform Opus 5.5 and GPT-6 Sol while being 30-4x cheaper. Available at [cloud.llamaindex.ai](https://cloud.llamaindex.ai). ([x.com/jerryjliu0](https://x.com/jerryjliu0/status/2105692426577056106))

**Peter Steinberger** (@steipete):
- Spoke at SF Tech Week's opening fireside on October 5
- Speaking at TEDAI Vienna October 28-30
- Now at OpenAI working on agents; OpenClaw (387K+ GitHub stars) moved to an independent foundation
- His blog describes itself as "a practical guide to working with AI coding agents without the hype"

Source: [steipete.me](https://steipete.me/)

---

## Other Interesting Stuff

**Theo Browne** (@theo) — No confirmed October 2026 posts found. His **T3 Code** project (22K+ stars) continues as an open-source desktop control plane wrapping Claude Code, Codex, Cursor, Grok Build, OpenCode, and Antigravity.

**swyx** (@swyx) — Ran a poll on October 7 asking followers their default coding agent (3,210 votes). AI Engineer NYC (which he co-runs) is happening now. Latest Latent Space podcast features Periodic Labs' Liam Fedus and Ekin Dogus Cubuk on AI for scientific discovery.

**Boris Cherny** (@bcherny) — No confirmed October posts found via search. His TwitterScore profile (updated Oct 7) shows 592K followers. Reports say he recently announced automated PR reviews by a squad of agents for Claude Code.

**@LLMJunky** (am.will) — Latest confirmed activity is from late September: criticized $500 AI subscriptions, attended OpenAI DevDay. His **GooeyPi** project provides a GUI for the Pi family of agents.

**@trq212** (Thariq Shihipar) — No October 2026 posts found. Claude Code engineer at Anthropic.

---

*Compiled October 13, 2026. Nitter.net and all known mirrors were down, so this roundup was built from web search, cached posts, and blog content. Some dates and figures are approximate — check original sources before citing.*
