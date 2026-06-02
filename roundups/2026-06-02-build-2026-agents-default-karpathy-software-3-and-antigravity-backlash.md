---
title: "Build 2026 Makes Agents the Default, Karpathy's Software 3.0 & Antigravity Backlash"
date: "2026-06-02"
summary: "Microsoft Build 2026 opened today with agents as the organizing principle: **Agent Mode is now default in Office 365 Copilot**, Copilot Workspace went GA, and **Project Polaris** — Microsoft's in-house model — will replace GPT-4 Turbo in GitHub Copilot by August. Meanwhile Karpathy's Sequoia Ascent talk keeps rippling through the discourse with his **Software 3.0** framework (*don't ask what AI builds faster — ask what it makes unnecessary*), Simon Willison argued **Anthropic and OpenAI have found product-market fit** with $2,180/month in personal agent spend as Exhibit A, and Google's decision to replace the open-source Gemini CLI with the **closed-source Antigravity CLI** (June 18 deadline) drew furious developer backlash. Plus: Matt Pocock's AI Coding cohort v2 kicked off, PewDiePie's self-hosted Odysseus workspace hit 10K stars in a day, and the State of AI 2026 survey says developers now write **54% of their code with AI** — up from 28% last year."
tags:
  - Microsoft Build 2026 Goes All-In on Agents
  - Karpathy's Software 3.0 Framework
  - Anthropic & OpenAI Hit Product-Market Fit
  - Claude Code Updates & Community
  - Google Antigravity CLI Controversy
  - Broader AI Ecosystem
---

# AI Roundup — June 2, 2026

Microsoft Build 2026 kicked off today in San Francisco and the message was unmistakable: agents are no longer a feature — they're the default. But the more interesting conversation is happening in the replies and blog posts around *what it means* when agents become the assumed mode of work. Karpathy's Sequoia Ascent talk (still generating threads a week later) reframed the question entirely: stop asking what AI builds faster and start asking what it makes unnecessary. Simon Willison put a dollar figure on the shift — $2,180/month in personal agent spend — and argued the labs have finally found product-market fit. And Google reminded everyone that "open source" can be a temporary state by sunsetting Gemini CLI for a closed-source replacement.

## Microsoft Build 2026 Goes All-In on Agents

**Microsoft opened Build 2026 with agents as the default, not a feature toggle.** Satya Nadella's keynote ([streaming from 9:30 AM PT](https://www.notebookcheck.net/Microsoft-Build-2026-What-to-expect-from-the-June-2-keynote.1311546.0.html)) made three major moves:

- **Agent Mode is now the default** across Office 365 Copilot products including Word, Excel, and PowerPoint. Microsoft is shifting from synchronous assistants to "async coworkers that can execute long-running tasks across key domains" ([Technobezz](https://www.technobezz.com/news/microsoft-opens-build-2026-in-san-francisco-with-agent-mode-as-the-default-for-office-365-copilot)).
- **Copilot Workspace went GA** — GitHub's agentic programming environment where Copilot reasons across a full repository, proposes multi-file edits, runs tests, interprets results, and iterates autonomously. GitHub Copilot is now positioned not as a "pair programmer" but a **"peer programmer"** capable of being assigned bugs, features, and maintenance independently ([GitHub Build page](https://github.com/resources/events/github-microsoft-build26)).
- **Project Polaris** was unveiled — Microsoft's in-house AI coding model that will replace GPT-4 Turbo as the default for GitHub Copilot subscribers starting August 2026. This is Microsoft cutting the OpenAI cord for its flagship dev tool ([ChatForest recap](https://chatforest.com/builders-log/microsoft-build-2026-recap-windows-agent-platform-project-polaris-copilot-workspace/)).

Other Build highlights: the Azure AI Foundry Agent Service is now GA, Windows local AI got a dedicated track, and NVIDIA RTX Spark for Arm PCs was announced — a push to bring datacenter-class inference to laptops.

## Karpathy's Software 3.0 Framework

**Karpathy's Sequoia Ascent fireside chat from ~2 weeks ago continues to generate discussion.** He [posted a recap](https://x.com/karpathy/status/2049903821095354523) and [published a blog post](https://karpathy.bearblog.dev/sequoia-ascent-2026/) laying out his **Software 3.0** framework. The core argument:

> *Don't ask what AI helps you build faster. Ask what AI makes unnecessary.*

His go-to example is **MenuGen** — a traditional web app that OCRs a restaurant menu, generates dish images, and renders them in a UI. In the Software 3.0 version, you hand a photo to a multimodal model and it renders images directly onto the menu. Most of the app *disappears*. The lesson: "some apps should stop existing as apps."

Key takeaways from the talk ([summarized by Philipp Dubach](https://philippdubach.com/posts/karpathys-software-3.0-playbook/)):

- **Agent-native installation**: "The installation is just a block of instructions for an agent. The agent reads them, looks at your computer, understands what's missing, runs commands, sees errors, and adapts. Much more powerful than a rigid script."
- **Verifiability framework**: "Traditional software automates what you can specify. AI automates what you can verify."
- **Education matters more, not less**: "Understanding becomes the bottleneck. You still need enough depth to direct the system."

This came shortly after [Karpathy joined Anthropic's pre-training team](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) on May 19 — working under Nick Joseph to help launch a team that uses Claude itself to accelerate pretraining research. He also spoke at Sequoia alongside Boris Cherny (Claude Code), Demis Hassabis, Jim Fan, and others ([Sequoia AI Ascent 2026 page](https://sequoiacap.com/article/ai-ascent-2026/)).

## Anthropic & OpenAI Hit Product-Market Fit

**Simon Willison argued that the AI labs have finally found PMF — and his credit card statement is Exhibit A.** In his May 27 blog post ["I think Anthropic and OpenAI have found product-market fit"](https://simonwillison.net/2026/May/27/product-market-fit/) (692 upvotes on [HN](https://news.ycombinator.com/item?id=48296794)), he laid out the numbers:

- His personal May spend: **$1,199.79** on Claude Code and **$980.37** on OpenAI Codex — $2,180 total, against only $200 in subscriptions.
- Both companies shifted to usage-based pricing (Anthropic in November 2025, OpenAI in April 2026), signaling confidence in engagement.
- November 2025 was the inflection: GPT-5.1 + Opus 4.5, combined with their coding agent harnesses, "got good enough for reliable work."
- Anthropic is rumored to hit **$10.9 billion in Q2 2026 revenue**, potentially achieving profitability — explosive growth from $4B cited in August 2025.

Willison also published his [May 2026 newsletter](https://simonwillison.net/2026/Jun/1/may-newsletter/) on June 1, and recently wrote about [Google I/O and the Antigravity controversy](https://simonwillison.net/2026/May/20/google-io/).

## Claude Code Updates & Community

Several Claude Code stories bubbled up across the accounts this week:

**Boris Cherny (Claude Code creator)** continues to be his own best case study — [100% of his contributions to Claude Code in the last 30 days were written by Claude Code](https://x.com/bcherny/status/2004897269674639461). Lauren Reeder noted he ["hasn't written a line of code himself in 2026"](https://x.com/laurenmhreeder/status/2051351487515902247) and averages 20+ PRs/day. He spoke at [Sequoia AI Ascent](https://x.com/sequoia/status/2052065803303059470) alongside Karpathy. The headline stat: Claude Code now writes **4% of all GitHub commits**.

**Thariq Shihipar (@trq212)** has been active on Claude Code usage patterns:
- ["HTML is the new markdown"](https://x.com/trq212/status/2052811606032269638) — he's stopped writing markdown for almost everything and switched to Claude Code generating HTML directly.
- [Announced doubling of 5-hour rate limits](https://x.com/trq212/status/2052065936585457982) with SpaceX compute partnership: "Excited to partner with SpaceX to bring you more compute."
- Published lessons on [how Claude Code uses skills](https://x.com/trq212/status/2033949937936085378) and [prompt caching](https://x.com/trq212/status/2024574133011673516).

**Matt Pocock's AI Coding For Real Engineers v2** [kicked off June 1](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w) — a 2-week cohort at $995. Version 1 had [2,500+ students](https://x.com/mattpocockuk/status/2056447804537741327). The big change: v2 is agent-agnostic ("use any coding agent you like") vs. v1 which was Claude Code-specific. Live office hours with Matt on June 1, 8, and 12.

## Google Antigravity CLI Controversy

**Google announced the open-source Gemini CLI will stop working on June 18, replaced by the closed-source Antigravity CLI.** This has generated intense developer backlash:

- The [official Google Developer Blog post](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) frames it as a transition, but the community sees a bait-and-switch. Google accepted **6,000+ merged pull requests** from external contributors over nearly a year — and now the successor is closed source ([The Register](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605)).
- Simon Willison [noted on HN](https://news.ycombinator.com/item?id=48196867) that the Antigravity CLI GitHub repo "contains a changelog, a README, and an animated GIF demo. No source code."
- Antigravity CLI is built in Go, supports multi-agent orchestration in the background, and is marketed as snappier — but it's not open source ([OSTechNix](https://ostechnix.com/google-is-replacing-gemini-cli-with-google-antigravity/)).
- Enterprise users on Gemini Code Assist Standard/Enterprise aren't affected — the pain falls on free users and individual developers.

**Armin Ronacher (mitsuhiko)** has been commenting on related supply-chain issues — he [flagged a RedHat npm supply-chain compromise](https://x.com/mitsuhiko/status/2061455504912646493) with his recurring critique that "OIDC did jack shit to prevent anything." He's also been vocal about [AI-generated code quality degradation](https://x.com/jeremyphoward/status/2036507393337729404) and the growing "slop" problem.

## Broader AI Ecosystem

**PewDiePie launched Odysseus** — a free, open-source, self-hosted AI workspace ([GitHub](https://github.com/pewdiepie-archdaemon/odysseus)). Released May 31 via a video titled "MY trillion $Dollar Project is finally OUT!", it hit [top of HN with 10K+ stars in a day](https://x.com/swyx/status/2061256096719970337). Features include local-first chat, autonomous agents, 270+ open-source models via a hardware-aware "Cookbook" engine, deep research, and email handling — all with no telemetry. swyx declared the vibe shift complete: "if your Knowledge Work Agents startup can't beat pewdiepie you might as well pack up and go home" ([Dexerto coverage](https://www.dexerto.com/youtube/pewdiepie-just-launched-his-answer-to-chatgpt-and-its-completely-free-3370091/)).

**State of AI 2026 survey** results dropped ([2026.stateofai.dev](https://2026.stateofai.dev/en-US)): developers now generate **54% of their code with AI** (up from 28% in 2025), the 75%+ segment saw the highest growth, and **Claude is the model developers pay for the most**. 7,258 respondents; survey ran April 8 – May 8. Theo [noted](https://x.com/theo/status/2041715755306389780) over half of respondents watch his videos.

**swyx's Latent Space podcast** released an episode on **video agent models** with Ethan He (former xAI Grok Imagine lead, ex-NVIDIA Cosmos): ["Why Video Agent models are next"](https://www.latent.space/p/video-agents). The thesis: text-to-video is "only the autocomplete phase" — the next frontier is agentic video models with "a camera, editor, timeline, and tool belt." swyx also flagged that Microsoft + NVIDIA are pushing to put datacenter-class chips (Grace + Blackwell) in laptops.

**Peter Steinberger (steipete)** continues building at OpenAI after [joining in February](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) as creator of [OpenClaw](https://github.com/openclaw/openclaw) (200K+ GitHub stars). OpenClaw moved to a foundation to stay open and independent. He's been teaching Codex to run full QA loops — per-commit user-test scenarios via browser-use (webVNC/crabbox), auto-opening fix PRs. His line of the week: ["Languages don't really matter anymore. Ecosystems do."](https://x.com/steipete/status/2061476523618754694)

**Jerry Liu (LlamaIndex)** recently announced [Spreadsheet Agents](https://x.com/jerryjliu0/status/1930700136482800050) for data transformation and QA over unnormalized Excel sheets, and a [knowledge agent for automated contract review](https://x.com/jerryjliu0/status/1886951394147754281). LlamaIndex also shipped LiteParse v2 with bounding-box audit trails for agent document processing. He's speaking at the Data + AI Summit in SF on June 15-18.
