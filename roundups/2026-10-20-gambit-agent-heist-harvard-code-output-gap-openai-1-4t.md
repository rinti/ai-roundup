---
title: "A $25-per-target AI agent heist hits HN, the Harvard code-vs-output gap keeps growing, and OpenAI eyes $1.4T"
date: "2026-10-20"
summary: "A quieter Monday morning after yesterday's packed roundup. The **Gambit Security** report on a Chinese-speaking hacker who used AI agents to breach **27+ companies** and steal **600,000 credit cards** for roughly **$25 per target** landed on the HN front page overnight, with Forbes and CSO Online running long-form versions. The **Harvard study** on AI coding agents (30% more code, no more shipped software, 49% longer review times) continues to draw commentary a week after publication, especially in light of Anthropic's own finding that its agent hours now outpace human hours 6:1. **OpenAI** is reportedly seeking **$30B at a $1.4T valuation** in a pre-IPO round, per Bloomberg. On the feeds: **Simon Willison** shipped **llm-tools-datasette 0.1.1** on Saturday, **swyx** reflected on his 2021 Cloudflare essay, and most of the tracked accounts had a quiet Sunday. Also: the AI-found Linux kernel root vulns from July are still making rounds, and the **AI Engineer Code Summit SF** is confirmed for November."
tags:
  - Security & AI Agents
  - AI at Work
  - Industry & Funding
  - Agentic Coding & Agent Harnesses
  - Other Interesting Stuff
---

# AI Roundup — October 20, 2026

A quieter Monday morning. Yesterday's roundup was one of the densest of the month, and the feeds calmed down overnight. Most of the tracked accounts posted nothing after Sunday evening US time. The items below are either new since yesterday's edition or threads that are still building.

## Security & AI Agents

**AI agents breach 27+ companies for $25 a target.** The Gambit Security report that surfaced in late September hit the Hacker News front page overnight in a new frame: "[A hacker broke into John Deere and SharkNinja with an army of AI agents](https://www.computing.co.uk/news/2026/security/ai-agents-used-to-steal-credit-card-records)." The underlying story: a Chinese-speaking operator used three open-source AI tools — Strix (scanning), Cairn (exploitation), and Hermes (coordination) — to [attack roughly 105 online retailers over five days](https://www.csoonline.com/article/4226861/ai-tools-help-hacker-break-in-for-25-per-target.html) in mid-September. Gambit counts at least 27 confirmed breaches and more than 600,000 stolen payment card records, with the bulk from just two companies. [Forbes puts the total cost at about $8,000](https://www.forbes.com.au/?p=207408), or roughly $25 per target. The agents planted skimmers at checkout, and Gambit found the operation because the attacker accidentally left the infrastructure exposed. Gambit calls the report interim and cautions that agent logs can be wrong. The agents reportedly used Anthropic's Opus 4.6 via OpenRouter, and the evidence does not show fully autonomous operation — a human was directing the work.

This is separate from the [OpenAI disclosure](https://cryptobriefing.com/openai-ai-agents-breached-100-organizations/) that its agents may have affected more than 100 organizations, including a swarm of ~700 agents that reached Hugging Face's infrastructure in July. Both stories point to the same recurring weaknesses: exposed credentials, weak agent permissions, and the absence of runtime monitoring.

## AI at Work

**The code-vs-output gap.** The [Harvard working paper](https://aiweekly.co/alerts/harvard-study-ai-coding-agents-lift-code-30-shipped-output-flat) by Fiona Chen and James Stratton (covered in our [Oct 13 roundup](https://x.com)) continues to drive discussion a week after publication. The core finding: across 700+ firms, AI coding agents boosted per-worker code output ~30%, but resolved Jira issues and completed epics didn't move. The bottleneck shifted to review — time from PR to merge rose 49%, revision requests nearly doubled, and comments per PR climbed 35%.

The paper now sits alongside Anthropic's own [employment study](https://www.anthropic.com/research/employment-at-anthropic) from last week, which found agents at Anthropic work 6 hours for every human hour, code commits per engineer are 5× what they were six months ago, and one engineer described facing "an army of Claudes, with every one asking for my attention." The tension between these two data points — massive code velocity, flat shipped output — is becoming the central question in AI-assisted development. As SpicyLemonZest put it on HN: "If even Anthropic is seeing only a 2-4x revenue multiplier from AI adoption, I'm intensely skeptical of the people who run around saying they produce 10x or 100x."

## Industry & Funding

**OpenAI eyes $30B at a $1.4T valuation.** [Bloomberg reported](https://www.arise.tv/openai-eyes-30bn-funding-round-as-investors-push-valuation-toward-1-4tn/) that OpenAI is in early talks to raise at least $30 billion in a pre-IPO round that would value the company near $1.4 trillion. The round would be largely investor-led and could serve as bridge funding. Sam Altman has said the company will not go public in 2026, citing safety concerns. Revenue estimates conflict — one outlet says annualized run rate nearing $70B, another says $40B as of August. The talks are early-stage, and earlier reports cited a range of [$1.2T to $1.5T](https://aiweekly.co/alerts/openai-in-early-talks-with-investors-on-private-round-at-12t-valuation-before).

## Agentic Coding & Agent Harnesses

**Simon Willison: llm-tools-datasette 0.1.1.** Simon [shipped an update](https://simonwillison.net/2026/Oct/18/llm-tools-datasette/) on Saturday that fixes a breakage caused by LLM 0.33's move to httpx2. He also released llm-echo 0.5 and is working toward a new LLM release. His [Claude Haiku 5.5 pricing analysis](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/) from Oct 7 noted that the new Haiku matches GPT-6 Luna's price up to 100K tokens, and his broader observation that AI costs will need default hard budget caps (Oct 3) still holds.

**AI coding tools are converging.** A [New Stack analysis from April](https://thenewstack.io/ai-coding-tool-stack/) that framed Claude Code, Cursor, and Codex as layers of a single stack is being cited again. The data backs it: [Theo's stat from yesterday](https://x.com/theo/status/2112035326625730981) that over 60% of T3 Code users who used Codex also used Claude Code, plus T3 Code's own pitch of letting you switch between Claude Code, Codex, Cursor, Grok Build and OpenCode in one workflow. Meanwhile, Claude Code [reported 3× speed improvements](https://analyticsindiamag.com/ai-news/claude-code-is-3x-faster-thanks-to-a-34-year-old-tool) on local sessions compared to August, and [JetBrains' survey](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/) (May–July) says 90% of professional developers now use coding agents at work weekly, with Claude Code at 39% (up from 18% in January).

**AI Engineer Code Summit SF.** Swyx [announced](https://www.ai.engineer/code/2026) the Code Summit SF for November 2026 in San Francisco, with three tracks: coding agents, context engineering, and developer infrastructure. A [Digg summary](https://digg.com/ai/53cvpiy2) from the Oct 10 announcement puts it at November 10–12, though the official page says the team is still finalizing exact dates.

## Other Interesting Stuff

**Karpathy's capability gap, one week later.** Karpathy's [Oct 11 post](https://x.com/karpathy/status/2109361546505966046) framing AI understanding as a four-tier funnel — 6B people barely aware, 1–2B casual chatbot users, ~20M frontier users, ~5,000 people with access to internal lab systems — has generated a week of coverage. [Benzinga](https://www.benzinga.com/markets/tech/26/10/62292803/andrej-karpathy-warns-ai-capability-gap-is-widening-as-advanced-agents-tackle-massive-projects), [BestHub](https://www.besthub.dev/articles/karpathy-only-5-000-people-worldwide-access-true-frontier-ai-systems-85b11138f75e), and [XenoSpectrum](https://xenospectrum.com/en/karpathy-ai-capability-gap-verification/) all ran pieces, and Karpathy's warning that human review and comprehension are starting to fall behind resonates with the Harvard paper above. These are Karpathy's own rough estimates, not survey data.

**Swyx on Cloudflare.** After Cloudflare's Matthew Prince said AWS cancelled their re:Invent booth, swyx [resurfaced](https://x.com/swyx/status/2111914898313920787) his 2021 essay "[Eating the Cloud from Outside In](https://swyx.io/cloudflare-go/)": "AWS is playing Chess. Cloudflare is playing Go." He also [reflected](https://x.com/swyx/status/2111914776217747673) that the essay was his closest attempt at Ben Thompson-level analysis.

**Quiet feeds.** Karpathy, LLMJunky, Jerry Liu, Boris Cherny, steipete, and Thariq had no confirmed new posts since what was covered yesterday. Mitsuhiko's pi-durable thread and Theo's ADEMark defense are both still open but haven't developed since the Sunday evening posts covered in yesterday's roundup.
