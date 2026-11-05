---
title: "Theo Leaves Anthropic, OpenAI Buys Pierre, Meta Grabs Conductor & DeepSeek Open-Sources Super-Agent"
date: "2026-11-05"
summary: "**Theo** announced his last day at Anthropic after months of public criticism, saying he'll share what's next soon. **OpenAI** announced it will acquire Pierre Computer Company to fold Code Storage into Codex, challenging GitHub. **Meta** acquired Conductor, the Mac app for running parallel coding agents — cloud shuts down Nov 20. **DeepSeek** open-sourced Super-Agent, a coding agent prototype that monitors team chats and proactively submits PRs. **Simon Willison** shipped llm 0.37 (adds GPT-6.1 Sol/Terra), 0.37.1 (bugfix), and datasette-llm 0.1a10. **Matt Pocock** found a paper evaluating his /retro skill on arXiv, and his Software Factories course launches Nov 9. A **fake T3 Code clone** is being recommended by ChatGPT, and Theo is investigating. The **Anthropic IPO** inches forward with an S-1 amendment filed Nov 2."
tags:
  - Agentic Coding & Agent Harnesses
  - Acquisitions & Industry Moves
  - Claude & Anthropic
  - Open Source & Local Models
  - Other Interesting Stuff
---

# AI Roundup — November 5, 2026

Covers Tuesday November 3 through Wednesday November 5.

## Acquisitions & Industry Moves

### Theo leaves Anthropic

Theo Browne ([@theo](https://x.com/theo)) [announced](https://x.com/theo/status/2117927404027118027) on November 4: "Today was my last day at Anthropic. I am so thankful for the time I got to spend there. I couldn't be more thankful for the time I spent and the connections I made. Will be taking some time off as I prepare for my next thing. I'll share more soon :)" The departure comes after months of increasingly public criticism — in April he [wrote](https://x.com/theo/status/2049653251004662141) "A letter to my friends at Anthropic" explaining why he felt obligated to be harsh, and as recently as last week he was calling out unclear subscription limits. No word yet on where he's headed.

### OpenAI to acquire Pierre Computer

[OpenAI announced](https://openai.com/index/openai-to-acquire-pierre/) on November 4 that it will acquire Pierre Computer Company, the startup behind Code Storage, Trees, and Diffs — open-source developer tools that already power file browsing and change review in Codex. The plan is to integrate Code Storage directly into the Codex platform. Pierre's open-source projects will stay open source, and Code Storage customers can keep using it after closing. Financial terms weren't disclosed. The deal is pending regulatory approval. Coverage from [DevOps.com](https://devops.com/openai-acquires-pierre-computer-to-expand-codex-challenge-github), [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/openai-acquire-pierre-expand-codex-170249678.html), and [SiliconANGLE](https://siliconangle.com/2026/11/04/openai-to-acquire-developer-tooling-startup-pierre-computer/) frames it as a direct challenge to Microsoft-owned GitHub.

### Meta acquires Conductor

[TechCrunch reported](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/) on November 4 that Meta has acquired Conductor, the Mac app that lets developers run multiple coding agents in parallel workspaces. CEO Charlie Holtz said the team is joining Meta Superintelligence Labs. Conductor's cloud service goes read-only November 13 and shuts down November 20. [Axios](https://www.axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor) and [SiliconANGLE](https://siliconangle.com/2026/11/04/meta-acquires-ai-coding-startup-conductor-whose-app-runs-several-coding-agents-at-once/) also covered the deal. Terms were not disclosed. Conductor had raised a $22M Series A and claimed over 100,000 users.

### Anthropic IPO progress

The Anthropic IPO continues to move forward. Theo [noted](https://x.com/theo/status/2117936213269402058) the SEC filing: Anthropic filed its S-1 on October 26 and an amendment on November 2, with plans to list on Nasdaq under ticker ANT. Earlier reporting from [Reuters via Seeking Alpha](https://www.tradingview.com/news/seekingalpha:d5fb512eb094b:0-anthropic-s-ipo-plans-include-up-to-3-5b-share-sale-in-japan-report/) says Anthropic plans to sell up to ¥552.9B ($3.5B) in shares to Japanese investors. [Fortune](https://fortune.com/article/anthropic-ipo-could-create-millionaires-but-company-worried-about-money-over-mission-ai-firm-billionaire-ceo-dario-amodei/) puts the target valuation at $1.5–2 trillion.

## Agentic Coding & Agent Harnesses

### DeepSeek open-sources Super-Agent

DeepSeek released Super-Agent, an open-source coding agent prototype under MIT license. The key differentiator: it can proactively monitor group chats (Slack, GitHub webhooks) for developer discussions about coding issues and suggest solutions without being prompted. It dispatches parallel worker sessions through a router layer. [The Next Web](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent), [Digital Trends](https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/), and [Techzine](https://www.techzine.eu/news/applications/145461/deepseek-super-agent-is-an-open-source-alternative-to-claude-code/) covered it. Important caveat: DeepSeek itself calls it "a research prototype" and "not an official DeepSeek product." Only the harness code is open — model weights and backend API servers remain proprietary.

### Matt Pocock: /retro gets an academic paper

Matt Pocock [shared](https://x.com/mattpocockuk/status/2117588845864575397) on November 3: "This might be the greatest issue report in history — Some folks wrote a paper about my /retro skill assessing its effectiveness." The paper was posted on arXiv. His follow-up noted that the paper's finding about checking whether agent-suggested changes actually help later tasks means "we need to /retro whether our /retro changes actually made a difference." His [Software Factories for Real Engineers](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m) course launches November 9 — a 2-week cohort covering automated review, codebase design, DDD, mutation testing, and feedback loops. The [software-factory skill](https://github.com/mattpocock/skills/pull/1316) is also in progress in the skills repo.

### T3 Code: phishing clone promoted by ChatGPT

Theo [posted](https://x.com/theo/status/2117859423641272589) on November 4: "I've been digging into this throughout the day. I have no idea what these crypto scammers did, but their fake T3 Code scam clone gets recommended by ChatGPT constantly. Can anyone help us figure out wtf is causing this?" This follows the Day 32 announcement of [managed policies for enterprise](https://x.com/theo/status/2117142182415257643) ("Sorry unemployed folks, this one's not for you"), where IT teams can configure T3 Code across an organization. Theo claimed "internal adoption everywhere from Microsoft to AWS to Apple."

### Effort levels and workflow patterns

The "effort levels are the new tabs vs spaces" discussion from the weekend continued. [swyx](https://x.com/swyx/status/2116773135668404286) noted Karpathy uses "medium on Opus 5.5" and called strong opinions on effort levels "the tabs vs spaces of our time." This followed his earlier take that "low effort + critique loop > superultramaxhighwhatever." The Latent Space podcast [released](https://podcasts.apple.com/podcast/id1674008350) "Building Legal Agents When You Can't See the Data" with Jacob Lauritzen (CTO of Legora) on November 2.

## Claude & Anthropic

### Simon Willison: llm 0.37, 0.37.1 & datasette-llm 0.1a10

Simon Willison shipped three releases in three days:

- **[llm 0.37](https://simonwillison.net/2026/Nov/2/llm/) (Nov 2):** Added gpt-6.1-sol and gpt-6.1-terra model entries, plus a new `llm openai endpoint add` command for OpenAI-compatible endpoints. Switched the default model to gpt-6-luna (half the price of the previous default). He also noted that llm is "the project most affected by floods of AI-assisted PRs" but he's not finding it to be a problem, partly because he uses AI models to help triage them.
- **[llm 0.37.1](https://simonwillison.net/2026/Nov/3/llm/) (Nov 3):** Bugfix release with contributions from several authors.
- **[datasette-llm 0.1a10](https://simonwillison.net/2026/Nov/4/datasette-llm/) (Nov 4):** Fixes a bug where the set of available LLM models was not correctly restricted to just those in the configuration.

He also blogged about the [U.S. Census Bureau and "Super Intelligence"](https://simonwillison.net/) on Nov 2, and his October newsletter covered [the vulnerability apocalypse](https://simonwillison.net/2026/Nov/3/october-newsletter/), API credits for $100+/month subscriptions, and the October inflection point for vibe game development.

### Boris Cherny: Claude Code at one year

While nothing new surfaced from Boris Cherny ([@bcherny](https://x.com/bcherny)) in the Nov 3–5 window, his June 2026 thread reviewing Claude Code's first year of general availability continues to circulate. Key claim: 100% of his production code has been written by Claude since late 2025. He runs 5 Claudes in parallel and uses a shared file that records mistakes so the AI doesn't repeat them. His Sequoia Capital AI Ascent 2026 panel quote — "I have not written a single line of code by hand" — remains the most-cited line in the AI coding discourse.

## Open Source & Local Models

### Armin Ronacher / Pi 1.0

No new posts from [@mitsuhiko](https://x.com/mitsuhiko) in the Nov 3–5 window, but his weekend work continues to generate discussion. [Pi 1.0](https://www.trendingtopics.eu/pi-1-0-earendil-en/) shipped October 1 under MIT license from Earendil (Ronacher's public benefit company). The headline change: Pi now natively supports the Model Context Protocol through a feature called Codemode, after previously rejecting MCP. Pi Durable, an experimental package for long-running agents that can resume after a crash, shipped alongside it. The [lineread GPL-to-MIT discussion](https://x.com/mitsuhiko/status/2117029133418983576) from the weekend (covered in the Nov 2 roundup) continued with questions about whether AI-mediated "clean room" reimplementation is legally sound.

### Peter Steinberger / OpenClaw at OpenAI

[@steipete](https://x.com/steipete) has been quiet on the timeline since his [OpenAI DevDay 2026 talk](https://x.com/steipete/status/2107911769767440832) about teams using agents to work together. He joined OpenAI in February 2026 and has kept OpenClaw open source and independent. His June post that developers should "design loops that prompt your agents" rather than prompting agents directly remains influential.

## Other Interesting Stuff

### Fal raises $1.3B

Fal reportedly raised $1.3 billion in a Series F round on November 3, valuing the startup at $16 billion, according to [TechCrunch reporting](https://dev.to/technaom/seven-things-happened-in-ai-today-the-one-worth-your-attention-is-fal-5ehk).

### LlamaIndex OCRia-1 and BooBench

Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0)) was quiet in the Nov 3–5 window, but recent LlamaIndex releases include [OCRia-1](https://www.llamaindex.ai/blog), a document parsing model announced October 22, and [BooBench](https://x.com/jerryjliu0/status/2116589292562853989), a Halloween-themed benchmark with documents that push parsers into repetition loops. One model "saw 246 redaction x's on a page and wrote 23,004 of them."

### Thariq's game progresses

[@trq212](https://x.com/trq212) (Thariq Shihipar, Claude Code engineer at Anthropic) was last seen adding a taekwondo master character to his side project game and hoping to "have a vertical slice sometime next week."

### LLMJunky on RTX 5090 and Duet

[@LLMJunky](https://x.com/LLMJunky) (am.will) was relatively quiet in the window, but his weekend posts about [96GB RTX 5090 firmware unlocks](https://x.com/LLMJunky/status/2116609936247398640) (estimated $5K–$6K for the upgrade) and calling [Duet "the biggest letdown"](https://x.com/LLMJunky/status/2116586036084015606) in the personal agent space continued to circulate.

---

*Note: This roundup was compiled via web search. nitter.net and x.com are not directly accessible from this environment, so some accounts may have posts from November 3–5 that weren't indexed by search engines yet. Coverage is best for stories that got picked up by tech press.*
