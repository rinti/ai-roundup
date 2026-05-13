---
title: "PyCon AI Track, LLM 0.32a2 Reasoning & Supply-Chain Aftershocks"
date: "2026-05-13"
summary: >-
  **PyCon US 2026 kicks off today in Long Beach** with brand-new AI and
  Security tracks — the first time PyCon has dedicated full track days to
  either. simonw releases **llm 0.32a2** yesterday, switching
  reasoning-capable OpenAI models to the `/v1/responses` endpoint so you
  can now see reasoning tokens streamed to stderr in a different color;
  plus his TIL on using `llm` in a shebang line turns plain English into
  executable scripts. The **Shai-Hulud supply-chain fallout** keeps
  rumbling — SecurityWeek flags a "TrustFall" attack pattern showing how
  AI coding agents can be manipulated into stealthy supply-chain
  compromises, and mitsuhiko's call to use fewer dependencies gets fresh
  traction. **Theo responds to ThePrimeagen** on the AI economy: *"it's
  not just money, it's about compute."* Simon Willison's **GitLab Act 2
  analysis** and **Shopify River** deep-dive continue generating
  discussion — GitLab is flattening management, re-orging R&D into ~60
  small teams, and betting the company on the "agentic era," while
  Shopify's public-Slack-only agent had 5,938 employees using it in 30
  days with a 77% merge rate. ServiceNow ships **Build Agent GA** across
  Cursor, Windsurf, Claude Code, and Copilot. Plus: Karpathy's "LLM
  Wiki" idea-file concept keeps spawning implementations, and the
  vibe-coding-vs-agentic-engineering convergence debate rolls on.
tags:
  - PyCon US 2026
  - Developer Tooling
  - Supply Chain & Security
  - AI Economy & Compute
  - Agentic Coding & Enterprise
  - Vibe Coding vs Agentic Engineering
---

# AI Roundup — May 13, 2026

## PyCon US 2026 Starts Today

**New AI and Security tracks.** [PyCon US 2026](https://us.pycon.org/2026/about/pycon/) runs May 13–19 in Long Beach, California — the first time on the West Coast since Portland 2017. The big addition this year: a **dedicated AI track on Friday** (chaired by Silona Bonewald of CitableAI and Zac Hatfield-Dodds of Anthropic) and a **Security track on Saturday** with 11 Python security experts covering everything from Software Bill-of-Materials to FedRAMP to Rust interop. simonw [blogged about it](https://simonwillison.net/2026/Apr/17/pycon-us-2026/) and is attending. Tutorials run today and tomorrow; core talks are Friday–Sunday.

## Developer Tooling

**simonw ships llm 0.32a2.** [Released May 12](https://simonwillison.net/2026/May/12/llm/) — the headline change is that most reasoning-capable OpenAI models now hit the `/v1/responses` endpoint instead of `/v1/chat/completions`, enabling interleaved reasoning across tool calls for GPT-5-class models. You can now see summarized reasoning tokens streamed to stderr in a different color. Use `-R` / `--hide-reasoning` to suppress them. This follows the [major 0.32a0 refactor](https://simonwillison.net/2026/Apr/29/llm/) from April 29 that overhauled the internals for responses-API compatibility.

**`llm` as a shebang.** simonw's [TIL from May 11](https://til.simonwillison.net/llms/llm-shebang): you can use the `llm` CLI in a shebang line (`#!/usr/bin/env llm`), turning a plain-English file into an executable script — optionally with YAML template syntax. "Executable English" is the punchline.

**ServiceNow Build Agent goes GA.** [ServiceNow announced](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-Build-Agent-now-works-inside-every-major-AI-coding-tool-governed-by-default/default.aspx) that Build Agent is now available in ServiceNow Studio and extended into **Cursor, Windsurf, Claude Code, and GitHub Copilot** — so devs can build from any environment with full ServiceNow AI Platform context and governance baked in. Enterprise agentic coding keeps consolidating around a handful of harnesses.

## Supply Chain & Security (Ongoing)

**Shai-Hulud aftershocks continue.** Yesterday's roundup covered Socket's tally hitting 205 npm artifacts across 84 package names. The discussion hasn't died down — SecurityWeek published a piece on ["TrustFall" attacks](https://www.securityweek.com/ai-coding-agents-could-fuel-next-supply-chain-crisis/) showing how AI coding agents specifically can be manipulated into launching stealthy supply-chain compromises, making the npm/PyPI worm worse by automating the install-and-spread loop.

**mitsuhiko's "fewer dependencies" call still circulating.** His [tweet](https://x.com/mitsuhiko/status/2054091726663372827) — *"Another big supply chain attack and I once again implore you to use fewer dependencies"* — continues to get engagement alongside the OIDC critique: *"Published via OIDC trusted publishing btw. I hope this ends this absurd idea that OIDC is the silver bullet to supply chain issues."* Pointers to his [2025 boring-tech post](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/) and the decade-old open-source trust scaling piece.

**AI slop meets OSS maintainers.** Broader context: RedMonk's ["AI Slopageddon and the OSS Maintainers"](https://redmonk.com/kholterhoff/2026/02/03/ai-slopageddon-and-the-oss-maintainers/) piece, which mitsuhiko has referenced, documents how AI-generated code is "ripping up the social contract between maintainers and contributors." Ghostty has a zero-tolerance ban policy; cURL shut down its bug bounty after six years due to AI-generated submissions.

## AI Economy & Compute

**Theo on AI economy constraints.** [Theo's response](https://x.com/theo/status/2052114791045668894) to ThePrimeagen's AI economy video: *"I wanted to clear up some common misconceptions about the issues AI companies are facing. tl;dr — it's not just money, it's about compute."* He also posted a [YouTube video](https://www.youtube.com/watch?v=VDPMXSAxiWk) titled "Prime is (mostly) right about AI" going deeper on the compute bottleneck thesis. Related: the [xAI/Anthropic Colossus deal](https://simonwillison.net/2026/May/7/xai-anthropic/) from last week — Anthropic gets Colossus 1 but xAI keeps the larger Colossus 2, and simonw [flagged](https://x.com/simonw/status/2052436629365948920) the environmental concerns: Colossus 1's gas turbines ran without Clean Air Act permits.

## Agentic Coding & Enterprise

**GitLab "Act 2" restructuring.** simonw's [analysis](https://simonwillison.net/2026/May/11/gitlab-act-2/) of GitLab's [announcement](https://about.gitlab.com/blog/gitlab-act-2/) keeps generating discussion. The restructuring: reduce countries by up to 30% where they have small teams, flatten management by up to 3 layers, and re-org R&D into ~60 smaller teams with end-to-end ownership. CEO Bill Staples: *"The agentic era affords GitLab the largest opportunity in their history."* GitLab's stock dropped on the news. The handbook-diff-as-news angle — simonw dug into version-controlled employee handbooks — is the under-reported story.

**Shopify's River: public-only agent in Slack.** simonw's [post](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/) and [tweet](https://x.com/simonw/status/2053529689122328947): Shopify's internal coding agent River operates **exclusively in public Slack channels** — it politely declines DMs and suggests public channels instead. The design creates a "Lehrwerkstatt" (teaching workshop) where employees learn by watching each other's interactions. **5,938 employees** used River across 4,450 channels in 30 days. River authored **1 in 8 merged PRs**, and its merge rate improved from 36% to 77% over two months through collective learning. simonw's comparison: *"Reminds me of how Midjourney's Discord-only launch helped people figure out the weird & complex craft of image prompting by watching each other."*

## Vibe Coding vs Agentic Engineering

**The convergence debate continues.** simonw's [May 6 post](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/) — *"Vibe coding and agentic engineering are getting closer than I'd like"* — keeps generating thread activity. His core admission: as coding agents get more reliable, he's stopped reviewing every line even for production code. *"If you ask Claude Code to build a JSON API endpoint that runs a SQL query and outputs the results as JSON, it's just going to do it right."* The line between vibe coding ("just ship it") and agentic engineering (disciplined agent-assisted work) is blurring faster than anyone expected.

**Lee Robinson's counter** (from yesterday's roundup, still active): *"Code is actually the right abstraction … maybe the takeaway is that you want less code?"* His prescription: make the codebase more verifiable (fast tests, typed languages), deslop the architecture before yolo-generating, and assume the slop compounds.

## Still Active Threads

**Karpathy's "LLM Wiki" / idea-file concept.** His [April tweet](https://x.com/karpathy/status/2040470801506541998) about sharing "idea files" instead of code keeps spawning implementations — the [GitHub gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) lays out a three-layer architecture (raw sources → LLM-maintained wiki → schema) that has people building self-updating knowledge bases in Obsidian. His research wiki grew to ~100 articles and 400k words. The broader point: *"In this era of LLM agents, there is less of a point/need of sharing the specific code/app, you just share the idea."*

**bcherny on coding as "effectively solved."** [Lauren Reeder's interview](https://x.com/laurenmhreeder/status/2051351487515902247): bcherny *"hasn't written a line of code himself in 2026"* and has been dogfooding Opus 4.7. Claude Code now writes 4% of all GitHub commits with DAU doubling last month. The [Lenny's Newsletter](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) deep-dive covers the "what happens after coding is solved" question.

**mattpocockuk's skills ecosystem.** His [skills repo](https://github.com/mattpocock/skills) (21 Claude Code skills from his `.claude` directory) keeps getting traction — a [May Medium post](https://adityakumarpuri.medium.com/matt-pococks-5-claude-code-skills-made-me-rewrite-how-i-work-with-ai-agents-d71853c3056c) analyzes the top 5. The workflow: `/write-a-prd` → `/prd-to-issues` → agent loop → manual QA. His [AI Hero cohort](https://www.aihero.dev/cohorts/claude-code-for-real-engineers-2026-04) teaching this to engineers in a 2-week sprint.

**swyx: agents breaking containment.** His thesis that 2026 is coding agents expanding to "everything else" (beyond code) is the throughline of his [Agents for Everything Else](https://tldrecap.tech/posts/2026/aie-europe/ai-engineers-agent-productivity/) talk and the [AIE Europe debrief](https://www.latent.space/p/unsupervised-learning-2026). Real-world example: a designer presenting a Figma page, swyx hooking up Devin, and the designer in Indonesia prompting Devin with redlines overnight — asynchronous human-agent collaboration across timezones.

**jerryjliu: the scaffolding layer is collapsing.** Jerry Liu's [VentureBeat interview](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives) argues that as agent loops get smarter, the competitive moat moves from frameworks to **context quality** — curating and structuring the data fed into models. LlamaIndex is betting on agentic document processing via OCR as the surviving layer.

---

*Note: Nitter.net and all tested alternative instances returned 403 for all accounts today. This roundup was compiled via web search, cached tweet URLs, and blog post indexing. Direct tweet content from May 13 was sparse — likely still early in the day for most accounts.*
