---
title: "Bugs Grow Up, Mandiant Ships the Blueprint & Codex Hits 20M"
date: "2026-08-22"
summary: "Boris Cherny says the bugs AI writes have changed — 'less off-by-ones, more system design, UI usability, missing broader context' — and recommends adversarial review loops as the countermeasure. Google's Mandiant team published the blueprint for its Agentic Vulnerability Discovery Harness after finding 100+ critical true-positive vulnerabilities in 48 hours and earning 12 CVEs. Codex crossed 20M active users and Tibo handed every user a banked reset. Harvey shipped Tenet, a legal AI model post-trained on Kimi K3 open weights — the first time the OpenAI-backed startup chose an open base over a frontier API. Linear's aggregated data shows AI now authors just under half of all issues created, up from fewer than one in a thousand two years ago. Copilot Autofix introduced a shell-injection vulnerability into Snowflake's repo that Wiz's autonomous red-team agent discovered and weaponized within five days. Meanwhile, CISA gave feds three days to patch an actively exploited RCE in the Ray framework used by Amazon, Apple, and OpenAI. Claude Academy launched as a free learning hub, and Anthropic confirmed Sonnet 5's promotional pricing ends August 31. (Same nitter/xcancel sourcing constraints as yesterday — social feeds remain behind bot walls.)"
tags:
  - Agentic Coding & Security
  - Claude Code & Anthropic Updates
  - OpenAI & Codex
  - Industry Data & Deals
  - Deep Reads
---

# AI Roundup — August 22, 2026

## Agentic Coding & Security

### Boris Cherny: AI bugs are getting harder, not fewer

[Benzinga's writeup](https://www.benzinga.com/markets/tech/26/08/61134309/anthropics-boris-cherny-says-ai-coding-bugs-are-getting-harder-less-off-by-ones-more-system-design-problems) of a post by Anthropic's Head of Claude Code: **"LLMs still produce bugs, but those bugs are different than what they used to be. Less off-by-ones and more about system design, UI usability, missing broader context."** The implication is that as models get better at mechanical correctness, the remaining failure modes are architectural — the kind of bugs that only surface when you understand the whole system, not just the function. Cherny's recommended countermeasure: adversarial code review loops. His example prompt: *"adversarial test every edge case in an iOS simulator."* This is the same direction yesterday's harness-continual-learning paper pointed at — the hard bugs are now in the gap between what the model sees and what the system needs.

### Google Mandiant publishes the agentic vulnerability discovery blueprint

[The Google Cloud blog post](https://cloud.google.com/blog/topics/threat-intelligence/staying-ahead-of-adversarial-ai-through-agentic-source-code-review) describes the **Agentic Vulnerability Discovery Harness (AVDH)**, which has been running inside Mandiant for ten months: **100+ critical true-positive vulnerabilities found in 48 hours**, tens of millions of lines of code scanned, 12 assigned CVEs so far. The architecture is a staged pipeline — Threat Modeling → Entry Point Discovery → Context Gathering → Hypotheses Generation → Hypothesis Validation — with every confirmed finding going to a human before it counts. [Help Net Security](https://www.helpnetsecurity.com/2026/08/19/google-mandiant-avdh-ai-vulnerability-discovery-tool/) and [GBHackers](https://gbhackers.com/google-mandiant-ai-agents-find-over-100-critical-vulnerabilities/) have good summaries. The publication is explicitly framed as a blueprint for defenders — and a warning that attackers are building the same thing.

### Copilot Autofix wrote a bug, Wiz's AI agent exploited it in five days

[Wiz's red-team writeup](https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug): on June 18, a Copilot Autofix change to Snowflake's open-source connector repo **replaced sanitized input with raw string interpolation in a GitHub Actions workflow**, creating a shell-injection hole. Five days later, Wiz's autonomous red-team agent discovered and exploited it, exfiltrating Jira credentials that granted read access to Snowflake's internal engineering and security tracking. [Forbes](https://www.forbes.com/sites/timkeary/2026/08/17/github-copilot-missed-a-vulnerability-that-wizs-ai-agent-found/) notes the irony: GitHub's own Advanced Security — which integrates Copilot Autofix — reviewed the PR and didn't flag it. The incident is a clean case study for why adversarial testing (per Cherny above) matters: your AI fix pipeline can introduce the exact class of bug your AI scanner misses.

### CISA: Ray framework RCE under active exploitation

[The Register](https://www.theregister.com/security/2026/08/18/cisa-gives-feds-3-days-to-fix-actively-exploited-ray-rce-bug/5289007): CISA added CVE-2025-62593 to the Known Exploited Vulnerabilities catalog on August 17 and **set a three-day remediation deadline**. The bug (CVSS v4 9.4) is a code-injection flaw in Ray, the distributed computing framework used by Amazon, Apple, and OpenAI for ML workloads. It's exploitable via DNS-rebinding through Firefox or Safari against local or network-adjacent Ray instances. Fixed in Ray 2.52.0.

## Claude Code & Anthropic Updates

### Claude Academy launches

[Anthropic's blog post](https://claude.com/blog/anthropics-approach-to-teaching-and-learning-ai): **Claude Academy** is a free learning hub built around how Anthropic trains its own staff. Courses range from Claude 101 to API deep-dives, with tracks for developers, students, educators, and nonprofits. The design bet is practice-embedded tutorials over feature checklists. No paywall on core content.

### Claude Code: concise mode, self-hosted environments, and pricing notes

From [Releasebot's changelog](https://releasebot.io/updates/anthropic/claude-code): Claude Code shipped a **built-in "Concise" output style** (leads with results, skips narration — selectable in `/config`), plus tighter MCP and plugin security, improved startup speed, and memory leak fixes. Separately, **self-hosted environments** for Claude Code entered public beta — teams can run sessions on their own infrastructure with internal network access and compliance controls, available for Team and Enterprise plans. And a pricing note: **Sonnet 5's promotional $2/$10 per million tokens ends August 31**; standard pricing of $3/$15 takes effect September 1.

### Thariq on context engineering for Claude 5 (still trending)

[Thariq's article](https://x.com/trq212/article/2080710971228918066) from late July continues circulating: Anthropic **removed over 80% of Claude Code's system prompt** for Claude Opus 5 and Fable 5 with no measurable loss on coding evaluations. They call it "unhobbling" — many guardrails were for older model behavior that Claude 5 no longer needs. The six shifts: rules → judgment, examples → interface design, upfront context → progressive disclosure via skills, duplicated instructions → consolidation, manual memory → auto-memory, simple specs → rich references (code + test suites). [The i-scoop summary](https://www.i-scoop.eu/context-engineering-claude-5/) is a good quick read.

## OpenAI & Codex

### Codex crosses 20M active users, everyone gets a banked reset

[Tibo's announcement](https://x.com/thsottiaux/status/2090766694897619318): **Codex plus ChatGPT Work hit 20 million active users**, and to celebrate, every user gets a **banked reset** they can spend on their own schedule. This is the successor to the "reset for every 1M users" promise he made earlier, except now it's a lump gift instead of incremental milestones. Two years from launch to 20M on a product that costs $200/mo at the Pro tier — that's meaningful signal about how sticky agentic coding has become.

### Harvey ships Tenet: legal AI on open-weight Kimi K3

[Harvey's blog post](https://www.harvey.ai/blog/post-training-update-harvey-tenet) and [Dataconomy's coverage](https://dataconomy.com/2026/08/21/openai-backed-harvey-launches-new-legal-model-based-on/): Harvey — traditionally an OpenAI API customer — **post-trained Kimi K3 (Moonshot AI's open-weight model) via Fireworks AI** to build Harvey Tenet, a legal reasoning model they claim achieves state-of-the-art on complex legal tasks. The strategic shift is clear: rather than renting frontier intelligence from US labs, Harvey is building proprietary domain intelligence on open bases. Over the past six months they've been working toward letting law firms **build and own their own specialized models**. This is the enterprise playbook AT&T described yesterday (40% open-model usage), but in a domain where the proprietary layer is legal expertise, not cost savings.

## Industry Data & Deals

### Linear: AI now authors ~half of all issues

[Linear's data dashboard](https://linear.app/data): **AI authors just under half of all issues created** on the platform, up from fewer than one in a thousand two years ago. At the current pace it will soon author more than people and integrations combined. This is one of the clearest single metrics for how deeply AI agents have embedded themselves in development workflows — issue creation is upstream of code, not downstream.

### CellCog's August harness rankings

Claude Code holds **#1 for agent harness depth** (hooks, subagents, dynamic workflows), recommended as the default for long autonomous coding sessions. Codex CLI takes the cloud-based pull-request autonomy spot. Cursor leads on in-editor agent workflows. Gemini CLI and GitHub Copilot round out the top five.

### Cloudflare's agent infrastructure week continues

[Cloudflare's Kitesurf announcement](https://blog.cloudflare.com/kitesurf/) from earlier this month keeps getting discussed: a **Rust-based browser for AI agents** running in V8 isolates on Workers, using 3–7x less CPU and memory than Chromium, passing 235k+ web platform tests. Paired with **Cloudflare Wallets and the x402 protocol** for autonomous agent payments — over 20 companies already participating. The stack is: Kitesurf browses, x402 pays, Workers orchestrates. Infrastructure for the agent economy, built at CDN scale.

## Deep Reads

### Matt Pocock's skills repo: still trending, now analyzed

[AIToolly's August 22 analysis](https://aitoolly.com/ai-news/article/2026-08-22-matt-pocock-unveils-skills-repository-a-practical-look-at-ai-agent-configurations-for-engineers) of the skills repo that's been sitting atop GitHub Trending: **21 structured Claude Code skills** spanning planning (PRD writing, issue breakdown, interface design), development (TDD loops, architecture improvement, bug triage), tooling (pre-commit hooks, git guardrails), and knowledge management (Obsidian vault, ubiquitous language). Notable individual skills: `/grill-me` (pressure-tests a plan before you build), `/handoff` (saves full context for session continuity), `/diagnose` (debugs like a senior engineer), `/caveman` (cuts token costs by 75%). [The Latent Space interview](https://www.latent.space/p/wayfinder-skill) about his `/wayfinder` skill (planning through "the fog of war") is still the best deep read on his design philosophy.

### Simon Willison: ChatGPT search's site: operator surge + Bun WebView

Two posts from August 20 worth revisiting. [ChatGPT search now uses site: at scale](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/): fanout queries with `site:` jumped from 0.37% to **16.8% on August 8** (a 46x increase), right on the GPT-5.6 rollout. Reddit's share as a search source dropped sharply after August 18. The emerging "GEO" (Generative Engine Optimization) industry is the new SEO. And: [a shot-scraper-style JSON API on Bun 1.4's WebView](https://simonwillison.net/2026/Aug/20/bun-webview-json-api/) — browser automation as a runtime feature, not a dependency tree, tested to ~192–256 MB for complex pages.

### The Copilot Autofix → Wiz red-team chain, in full

If the Copilot/Snowflake story above caught your eye, [Cyber Kendra's detailed walkthrough](https://www.cyberkendra.com/2026/08/copilot-autofix-snowflake-jira-github-actions.html) traces the full chain: Copilot Autofix change → unsanitized `${{ github.event.issue.title }}` in a `run:` block → Wiz red-team agent discovers it → crafted issue title executes arbitrary commands → Jira credentials exfiltrated → Snowflake internal systems accessed. The attribution question is messy (the vulnerable lines were in a squash merge co-authored by Copilot, but the commit history doesn't prove Copilot wrote the specific vulnerable code), but the lesson isn't: **AI-generated fixes need the same adversarial review as AI-generated code**.

---

*Sourcing notes: nitter.net, xcancel.com, x.com, and twitter.com are all blocked by the environment's egress proxy. Assembled from web search results, blog posts, news articles, Releasebot changelogs, and Latent Space recaps. No direct social feeds were accessible for @mattpocockuk, @theo, @trq212, @LLMJunky, @mitsuhiko, @bcherny, @steipete, @swyx, @simonw, @karpathy, or @jerryjliu0. @mitsuhiko and @LLMJunky had no surfaceable new content for today. Armin Ronacher's latest indexed content is from July 2026 (harness loops for production code). @trq212's context engineering post from late July continues to circulate but nothing new today.*
