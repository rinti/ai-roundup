---
title: "Grok Build Enters the Ring, AIE Singapore Wraps & PyCon's AI Track"
date: "2026-05-17"
summary: "The biggest uncovered story of the week finally gets its entry: **xAI launched Grok Build into early beta** on May 14, a terminal-based CLI coding agent with 8-way parallel agents, Arena Mode that scores competing outputs, and a Plan Mode differentiator that proposes step-by-step plans before touching files — all for $99/mo introductory pricing (normally $300). It reads your AGENTS.md, plugins, hooks, skills, and MCP servers out of the box. Meanwhile the two conferences that bookended the week wrap today: **AI Engineer Singapore Day 3** closes with OpenAI's Ralphthon hackathon and the Day 2 livestream (Google DeepMind, OpenClaw, Cloudflare, Robot Company) now on YouTube, while **PyCon US Day 3** finishes in Long Beach with Simon Willison running open spaces on agentic engineering. On the blog side, Willison posted **'Not so locked in any more'** extending Mitchell Hashimoto's *'languages aren't lock-in'* argument, plus shipped **datasette-llm-limits** — per-user spending caps for LLM usage inside Datasette. Boris Cherny reached out to DavidKPiano asking *'what can we do better?'* about Claude Code, and the **karpathy-skills CLAUDE.md repo** continues its extraordinary run at 120K+ stars and 28 consecutive days atop GitHub Trending."
tags:
  - Agentic Coding & Agent Harnesses
  - AI Engineer Singapore
  - Claude Code & Anthropic Updates
  - PyCon US & Dev Community
  - Industry & Misc
---

# AI Roundup — May 17, 2026

## Agentic Coding & Agent Harnesses

### Grok Build enters early beta — xAI's first CLI coding agent

The product that sat behind [yesterday's Grok V9 1.5T training completion story](2026-05-16-mitchell-warns-ai-psychosis-steipete-token-millions-and-openai-reorgs.md) is now available. [xAI announced Grok Build on May 14](https://x.com/xai/status/2054993285152989373) — a terminal-based autonomous AI coding agent for SuperGrok Heavy subscribers:

> An early beta of Grok Build, an agentic CLI for coding, building apps, and automating workflows is now available for SuperGrok Heavy subscribers. Through this early beta, we will improve the model and product based on your feedback.

The feature set is designed to compete directly with Claude Code and Codex CLI:

- **Plan Mode** — the headline differentiator. When you give Grok Build a task, it proposes a step-by-step plan before writing or modifying any code. Users can approve, comment on individual steps, or rewrite entirely before execution begins. Every change shows up as a clean diff. ([source](https://x.ai/news/grok-build-cli))
- **8-way parallelism** — up to 8 concurrent AI agents simultaneously planning, searching documentation, and writing code, powered by Grok 4.3 beta using a 16-agent Heavy architecture with a 2 million token context window.
- **Arena Mode** — scores and ranks competing outputs before a developer reviews them.
- **Ecosystem compatibility** — reads your AGENTS.md, plugins, hooks, skills, and MCP servers out of the box. Picks up conventions when started in your repo.

Pricing: SuperGrok Heavy is normally $300/month, but [xAI is running an introductory deal at $99/month for the first 6 months](https://x.com/cb_doge/status/2055017857352913319) — timed perfectly against the Anthropic credit-policy backlash. [Steve Derico's upgrade path](https://x.com/stevederico/status/2055011502369996932): subscribe to SuperGrok for $30/mo, click Upgrade Plan, claim the $99/mo offer.

A [desktop app is also being prepared](https://x.com/testingcatalog/status/2052532305990672670) for macOS, Windows, and Linux with planning mode, Git tree, dev servers, and a built-in browser — though that's not yet available.

**Developer reactions** are cautiously interested. The consensus from early coverage ([DevOps.com](https://devops.com/xai-enters-the-coding-agent-race-with-grok-build/), [DEV Community](https://dev.to/devtoolpicks/xai-just-launched-grok-build-should-indie-hackers-switch-from-claude-code-5dna), [Dataconomy](https://dataconomy.com/2026/05/15/xai-launches-grok-build-coding-agent-for-developers/)): Plan Mode is genuinely differentiated, but the ecosystem is thinner than Claude Code or Codex CLI, and the team building Grok Build is reportedly smaller following SpaceX's acquisition of xAI in February. The practical read: if you need production-ready today, Claude Code and Codex CLI have tighter IDE integrations and longer histories; but Grok Build as a credible third entrant historically accelerates feature development across all three.

Worth pairing with [yesterday's Theo call](https://x.com/theo/status/2055465492836659216) — *"they're gonna use Cursor's data to leapfrog"* — and [LLMJunky's read](https://x.com/LLMJunky/status/2055315558166401340): *"Elon in the past has not sugarcoated Grok models not being the strongest when it comes to coding. This change in tone bodes well."* The coding agent race is now officially a three-body problem.

### Karpathy-skills CLAUDE.md: 120K+ stars, 28 days trending

The single-file repo derived from [Karpathy's January 2026 observations on LLM coding pitfalls](https://x.com/karpathy/status/2015883857489522876) continues its extraordinary run. As of mid-May it has [crossed 120,000 stars](https://x.com/PrajwalTomar_/status/2053770348353724666), held the #1 spot on GitHub weekly Trending for 28 consecutive days, and sits at position 94 globally by stars. The four principles — Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution — address Karpathy's core complaint: *"The models make wrong assumptions on your behalf and just run along with them without checking."*

[YouTube coverage](https://www.youtube.com/watch?v=EeYkZloXIww) is now circulating of the repo at 130K stars. Important attribution note: the repo is authored by [Forrest Chang](https://github.com/forrestchang/andrej-karpathy-skills), not Karpathy himself, who has not publicly endorsed it.

## AI Engineer Singapore

### Day 3: conference wraps, Ralphthon hackathon

[AI Engineer Singapore](https://www.ai.engineer/singapore) closes its three-day run today (May 15–17) at The Capitol Kempinski. The final day features the **Ralphthon @SG**, [a full-day hackathon sponsored by OpenAI](https://luma.com/4hx7p0vs) running 9am–8pm at Meteora Office with co-hosts Team Attention, Superteam SG, and Network School.

The [Day 2 livestream is now on YouTube](https://www.youtube.com/watch?v=m12vGjfbNlo) featuring talks from Google DeepMind, OpenClaw, Adaption, Arize, Cloudflare, and Robot Company. Also now published: [Minister for Foreign Affairs Dr Vivian Balakrishnan's full speech from May 16](https://www.mfa.gov.sg/newsroom/press-statements-transcripts-and-photos/minister-for-foreign-affairs-dr-vivian-balakrishnan-s-speech-at-ai-engineer-singapore--16-may-2026/) — the first sitting Cabinet Minister to speak at an AI Engineer event, and [as swyx noted yesterday](https://x.com/swyx/status/2055446633706631653), the first to present not just as a politician but as an AI user.

Recap of the week's key reveals from the conference (covered in [yesterday's roundup](2026-05-16-mitchell-warns-ai-psychosis-steipete-token-millions-and-openai-reorgs.md)): swyx called Codex *"completely unrecognizable from 3 months ago"*, Singapore Govtech projected **1.3 billion agents in the country in 2 years** with a **national MCP gateway**, and Google DeepMind + OpenClaw both had stage time on Day 2.

## Claude Code & Anthropic Updates

### bcherny: "What can we do better?"

[Boris Cherny responded to DavidKPiano on X](https://x.com/bcherny/status/2053950964126921024): *"Hey, Boris from the team here. What can we do better?"* — a direct outreach from Claude Code's creator to a prominent developer voicing friction. The exchange is part of a broader pattern: Cherny has been [increasingly active on X](https://x.com/bcherny/status/2003916001851686951) soliciting feedback, responding to bug reports, and shipping fixes sourced from community input. His standing offer: *"Feel free to tag me with Claude Code feedback or bug reports."*

This lands in a week where the Anthropic credit-policy backlash ([May 14](2026-05-14-anthropic-meters-programmatic-mythos-cyber-and-pocock-regrills.md), [May 15](2026-05-15-theo-cancels-bun-defects-to-rust-and-languages-arent-lock-in.md)) sharpened the question of whether Anthropic is listening. The contrast between policy-level decisions (metered credits, rate limits) and product-level responsiveness (Cherny's DMs and rapid iterations) is increasingly visible.

### Code with Claude heads to London and Tokyo

Anthropic is taking **Code with Claude to London (May 20–21) and Tokyo (June 5–6)** — the event that Simon Willison [live-blogged on May 6](https://simonwillison.net/2026/May/6/code-w-claude-2026/) when it ran in SF. API volume is reportedly up **17x year-on-year** on the Anthropic platform. Worth watching for announcements that might address the credit-policy frustration.

## PyCon US & Dev Community

### PyCon US Day 3 — simonw chairing, open spaces

[PyCon US 2026](https://us.pycon.org/2026/schedule/) wraps its core talks today (May 15–17) in Long Beach, California. This is PyCon's first West Coast edition since Portland 2017 and its first California event since Santa Clara 2013. The two new dedicated tracks — [AI on Friday](https://us.pycon.org/2026/tracks/ai/), Security on Saturday — were the headline additions this year.

Simon Willison is serving as in-the-room chair for the AI track and [plans to spend time in open spaces on agentic engineering and Datasette](https://simonwillison.net/2026/Apr/17/pycon-us-2026/). The AI track covered running LLMs on consumer hardware, building real-time voice agents, edge inference, and AI-powered education. Watch Willison's blog and TIL stream in the coming days for the richer writeups that typically follow his conference appearances.

### simonw blog: "Not so locked in any more"

[Posted May 14](https://simonwillison.net/2026/May/14/not-so-locked-in/) — Willison extends Mitchell Hashimoto's argument from the Bun-to-Rust rewrite that [programming languages used to be lock-in and increasingly aren't](2026-05-15-theo-cancels-bun-defects-to-rust-and-languages-arent-lock-in.md). The post references Hashimoto's point that *"Bun has shown they can be in probably any language they want in roughly a week or two"* and a similar conversation Willison had at a conference. The post is brief but sits at the intersection of two major threads this week: the Bun rewrite and the agent-friendliness-as-selection-criterion argument from [Steipete's Svelte thread](https://x.com/steipete/status/2055402519841411165) and [Pocock's AX framing](https://x.com/mattpocockuk/status/2055267400308654319).

### simonw ships datasette-llm-limits

[Posted May 15](https://simonwillison.net/) — a new plugin that works with datasette-llm and datasette-llm-accountant to let you configure **per-user (or global) spending limits** for LLM usage inside Datasette. Configuration supports rolling time windows and USD-denominated caps. This is the infrastructure-layer version of the *"how do you control AI spend"* question that Steipete's $1.8M thread made personal and that Anthropic's credit policy made organisational.

## Industry & Misc

### Shopify's River: 5,938 employees, 1 in 8 PRs

A few days old but still actively discussed. [Simon Willison flagged](https://x.com/simonw/status/2053529689122328947) Shopify's internal coding agent **River**, which lives in Slack and can only be used in public channels — no DMs — so that other employees can learn from watching:

> Reminds me of how Midjourney's Discord-only launch helped people figure out the weird & complex craft of image prompting by watching each other.

The numbers: in the last 30 days, **5,938 employees used River**, authoring **one in eight merged pull requests**. River enables employees to read code, run tests, write code, and open PRs directly from Slack conversations. Willison's [blog writeup](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/) frames the public-only constraint as a simple design decision with outsized cultural impact — learning by osmosis rather than hidden chats.

### Jerry Liu: "the AI framework era is over"

[Jerry Liu](https://x.com/jerryjliu0), LlamaIndex CEO, has been making the case that agent loops are now capable enough that **context quality** is the new competitive advantage, not scaffolding. LlamaIndex's pivot is visible in their recent shipping: **LiteParse**, their open-source model-free document parser, is now described as pluggable into [46+ different agents](https://x.com/jerryjliu0/status/2034790590572060848) with one command (`npx skills`), processes ~500 pages in 2 seconds on commodity hardware, and provides spatial text parsing with bounding boxes for audit trails back to source documents. The framing: the value isn't in the agent framework — it's in the document-understanding layer that every agent needs. ([VentureBeat coverage](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives))

### Brief: GitLab Act 2

[Simon Willison posted on May 11](https://simonwillison.net/2026/May/11/gitlab-act-2/) about GitLab's workforce reduction and structural decisions with respect to the agentic era — framed as *"structural and strategic decisions"* rather than simple cost-cutting. Worth reading alongside the Shopify River story as two different enterprise responses to the same question: what does an engineering org look like when agents author a meaningful fraction of the code?
