---
title: "October's security meltdown deepens: LiteLLM supply-chain compromise, Railway secrets exposed, and Theo says it's going to get a lot worse"
date: "2026-10-22"
summary: "**Theo Browne** posted \"It's going to get a lot worse\" — a thread listing October's cascading security incidents: **Railway** disclosed that customer environment variables (including AI API keys) may have been accessed by an unauthorized party, **LiteLLM 1.107.0** was compromised on PyPI and Docker with a credential stealer and RAT backdoor that targets cloud credentials, SSH tokens, and AI tool sessions, **Zeabur** revealed an infrastructure breach that led to its wind-down announcement, **OpenCode** confirmed a breach exposing Anthropic/OpenAI/Google API keys, **OVHcloud**'s CLI repo was briefly backdoored, and **Rank Math PRO** distributed malware through its official WordPress plugin downloads. TechCrunch called it \"the internet is having a very bad cybersecurity day.\" Browne argues there's now a standing black market for AI API keys driven by model distillation demand. Meanwhile, **Boris Cherny** says he can't imagine being productive without Claude Code Review, **Karpathy**'s AI capability gap post continues to circulate, **Simon Willison** published \"My obituary for programming,\" and **Matt Pocock** announced a re-recorded AI Coding For Real Engineers cohort for November."
tags:
  - Security
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Models & Inference
  - Other Interesting Stuff
---

# AI Roundup — October 22, 2026

## Security

### Theo: "It's going to get a lot worse"

[Theo Browne posted](https://x.com/theo/status/2113130660064018823) (35K+ views) a thread listing October's software security incidents in one place: Railway (customer secrets exposure), LiteLLM (malicious PyPI + Docker releases), Zeabur (infrastructure breached), OpenCode (AI API keys exposed), OVHcloud CLI (official binaries backdoored), and Rank Math PRO (malware in official plugin downloads). His verdict: "It's going to get a lot worse btw." [TechCrunch called it](https://techcrunch.com/2026/10/21/the-internet-is-having-a-very-bad-cybersecurity-day/) "the internet is having a very bad cybersecurity day."

Browne's broader argument ([via BigGo Finance](https://finance.biggo.com/news/0bc6db77e5a58e8f)): there's a standing black market for Anthropic and OpenAI API keys, fueled by labs' efforts to block model distillation. This turns every platform that stores customer secrets into a target. He sees the Railway incident and the wave of supply-chain compromises as two sides of the same pressure.

### LiteLLM 1.107.0: credential stealer and RAT in PyPI and Docker

On October 21, attackers pushed a malicious [LiteLLM 1.107.0 to PyPI and Docker](https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-docker/). Datadog's security labs report that the release installed a credential stealer activated whenever Python starts, plus a second-stage RAT backdoor that [fetched and ran remote code hourly](https://www.stepsecurity.io/blog/litellm-1-107-0-compromised-pypi-backdoored-wheels-credential-stealer). The stealer targets cloud credentials, SSH/developer tokens, AI tool sessions (Claude, Copilot), browser data, and LiteLLM's own proxy credentials.

The malicious version was live for about two hours before removal. [Wiz](https://www.wiz.io/blog/litellm-compromised-steals-credentials) and [Mend](https://www.mend.io/blog/litellm-1-107-0-compromised/) both confirmed the compromise. Attackers gained access through stolen GitHub CLI OAuth tokens from three maintainers, then launched a private release workflow against a malicious fork. This is LiteLLM's **second compromise this year** — the March incident involved two malicious releases that sat on PyPI for about 40 minutes.

**If you installed 1.107.0**: assume the system is compromised. [Pin to 1.106.2](https://www.mend.io/blog/litellm-1-107-0-compromised/) (last clean release), remove `cook.pth`, `cook.py`, and `sitecustomize.py` from site-packages, and rotate every secret the process could access. Removing the package doesn't undo theft that already happened.

- [Datadog write-up](https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-docker/)
- [The Hacker News](https://thehackernews.com/2026/10/litellm-compromised-in-supply-chain.html)
- [The Register](https://www.theregister.com/security/2026/10/21/litellm-supply-chain-attack-hoovers-up-passwords-and-secrets/5304548)
- [CyberSecurityNews](https://cybersecuritynews.com/litellm-compromised/)

### Railway breach: customer environment variables and API keys exposed

Railway [disclosed](https://cybersecuritynews.com/railway-security-incident/amp/) a security incident on October 21. The company detected unusual activity in its environment variable storage system — an unauthorized third party "may have accessed encrypted environment variables and for some of them obtained the decrypted contents." This includes API keys, database credentials, and private image repository credentials. Railway paused all deployments and notified upstream service providers to proactively revoke keys.

[One report](https://crypto.news/railway-security-breach-linked-to-371000-crypto-theft-across-19-chains/) links the breach to $371,000 in cryptocurrency theft across 19 chains, attributed by researcher Taylor Monahan — treat this as unconfirmed. Railway says it linked the incident to a series of recent attacks targeting platform companies.

**If you use Railway**: rotate all environment variables, API keys, and registry credentials now. Review your AI provider and database usage logs for unexpected activity.

### Zeabur: infrastructure breach leads to shutdown announcement

Between October 14–15, an attacker [compromised Zeabur's shared clusters, dedicated servers, and internal systems](https://zeabur.com/blogs/october-2026-security-incident), ultimately reading the platform database including customer environment variables. The management interface was internet-exposed with a non-expiring admin token. Root access was obtained on 101 GCP dedicated servers. Roughly 53 production secrets were confirmed read.

Founder Yuanlin Lin [announced](https://zeabur.com/blogs/zeabur-is-shutting-down) on October 17 that the deployment platform will wind down: services begin shutting down December 1, all infrastructure gone by December 31. Users should rotate all secrets stored on Zeabur, even those rotated after the earlier August incident.

### OpenCode: AI API keys exposed in distillation attack

[OpenCode confirmed](https://www.esecurityplanet.com/artificial-intelligence/news-opencode-breach-ai-api-keys/) on October 19 that a breach of a legacy system exposed API keys for OpenAI, Anthropic, and Google stored in Console users' workspaces. Co-founder Dax Raad said attackers targeted their systems for at least 48 hours using AI agents. The company says [1.4% of Console users were affected](https://expertinsights.com/?p=63284). Multiple users reported unauthorized charges; [one reported $1,700+ in losses](https://dealroom.co/news/163473-opencode-breach-drains-users-ai-keys-with-one-reporting-1-700-in-losses/). OpenCode [tied it to a "large-scale distillation attack"](https://bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks).

### OVHcloud CLI: official binaries briefly backdoored

[The Stack reports](https://www.thestack.technology/ovhcloud-cli-repo-compromised-customer-reports-incident/) that OVHcloud CEO Octave Klaba confirmed a supply-chain attack on the CLI tool's GitHub repo on October 19. Versions v0.11.0 through v0.15.0 were affected. A compromised developer account was used to add a binary that retrieves secrets from disk. The malicious version was spotted and blocked within 94 minutes. v0.10.0 and the upcoming v0.16.0 are clean. Affected users should change all secrets on disk.

### Rank Math PRO: malware in official WordPress plugin downloads

Rank Math [disclosed](https://www.rankmath.com/kb/pro-3-0-123-security-incident/) that hackers injected malware into Rank Math PRO v3.0.123 packages distributed between October 15 (20:02 UTC) and October 16 (07:12 UTC). [The Hacker News reports](https://thehackernews.com/2026/10/popular-wordpress-seo-plugin-rank-math.html) the malware can expose WordPress credentials, database credentials, API keys, and other secrets. [Wordfence rates it CVSS 9.8 (Critical)](https://app.opencve.io/cve/CVE-2026-111862). Upgrading to v3.0.124 alone does **not** remove persistence — backdoors, rogue accounts, and cron markers live outside the plugin directory. Rank Math's guidance: delete the rank-math-pro folder, remove the malicious database entry, then reinstall clean.

### The pattern

[A Greek security outlet](https://www.secnews.gr/742535/api-keys-ai-php2shell-railway-litellm-zeabur/) ties these together with the eMudhra CA key compromise and PHP RCE pair [covered yesterday](2026-10-21-deepinfer-tsrs-codex-cache-forever-dario-answers-calvin.md). Yesterday's roundup also covered eMudhra (CA keys with effectively all-zeroes private keys) and the PHP CVE-2026-109618/-109619 pair. Combined with the incidents above, that's **eight major security events in a single week**. [Armin Ronacher's reaction from yesterday](https://x.com/mitsuhiko/status/2112780362434695519) still applies: "Maybe we should turn off the internet for a few days."

An [HN thread](https://news.ycombinator.com/item?id=50189771) frames it as "The Kessler Syndrome applied to software" — where each breach creates debris that causes more breaches.

---

## Agentic Coding & Agent Harnesses

### Boris Cherny: "I could not imagine being productive without Claude Code Review"

Boris Cherny (creator of Claude Code) [posted](https://x.com/bcherny/status/2111158313463525518) on October 16 that Claude Code Review runs on all his PRs and "catches almost every bug before it goes in. This is a piece of the secret sauce that lets the team and I move so quickly while raising the quality bar." In a [reply](https://x.com/bcherny/status/2111159622572933123), he acknowledged it's not perfect yet: "Eventually I think it will \[catch everything\], and this improves with every model. Code Review is extremely useful in the meantime."

He also [promoted Claude Slides](https://x.com/bcherny/status/2111158659971699136): "Don't sleep on Claude Slides. This is how I make slide decks now — no more googling 'iphone frame svg' like the old days."

Earlier (Oct 6), Cherny [explained his prompting philosophy](https://x.com/bcherny/status/2107565388250874193): "Talk to Claude the way you would a coworker. There's no secret to prompting." He also described using Lean and TLA+ to formally verify code written by Claude.

### Matt Pocock: AI Coding For Real Engineers, re-recorded for November

Matt Pocock [announced](https://x.com/mattpocockuk/status/2095899598430552471) that the next cohort of "AI Coding For Real Engineers" will be a complete re-record, covering wayfinder, codebase design, automated checks/review, and building a software factory. [Course details on aihero.dev](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w) — the earlier June cohort was $995 for a two-week run covering context gathering, planning, steering, feedback loops, AFK agents, and human-in-the-loop review. An [interview on the Pragmatic Engineer podcast](https://newsletter.pragmaticengineer.com/p/ai-skills-with-matt-pocock) covers his use of skills like "grill me" and "wayfinder" to plan, delegate, and course-correct with AI agents.

### Armin Ronacher on agents generating debugging hypotheses

Armin Ronacher [posted](https://x.com/mitsuhiko/status/2111745865199079780) on October 18: "I don't love that my BTLEServer is spinning the CPU, but I do love that the agent has a hypothesis that I can at least investigate." A nuanced take — the agent isn't solving the bug, but it's generating useful leads.

His broader work continues on [Pi](https://lucumr.pocoo.org/2026/10/6/codemode/) and Codemode. Pi 1.0 shipped October 1 with MCP support via Codemode — LLM-issued JavaScript tool calls composed in a QuickJS/WASM sandbox. [The Register notes](https://www.theregister.com/ai-and-ml/2026/10/02/pi-coding-agent-pulls-a-180-and-adds-mcp-support/5300678) this was a 180 from Pi creator Mario Zechner's earlier dismissal of MCP.

---

## Claude & Anthropic

### Claude Code Mods and the plugin ecosystem

Claude Code v2.1.287 (October 1) introduced "Mods" — small TypeScript functions that can intervene around tool calls, permission requests, and screen output. The built-in `/diff` command was the first feature moved into the Mods system. [One report says](https://tech-insider.org/claude-code-plugins-official-mods-cloud-sessions-2026/) the official plugin repository (claude-plugins-official) had over 37,000 stars and the marketplace lists 315+ plugins, mostly from partners and tool vendors. Popular picks include Context7, Frontend Design, Chrome DevTools MCP, and Anthropic's language-server (LSP) pack covering 11 languages.

### Claude Haiku 5.5

[Released October 7](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-for-high-volume-tasks-1c6260b4), Claude Haiku 5.5 is priced at $0.10 input / $0.50 output per million tokens (up to 100K context), with 1M context and 128K output. Anthropic says it costs about 75% less than Haiku 4.5 and positions it for summarization, classification, and high-volume work — and as a subagent alongside Opus 5.5 and Sonnet 5.5.

---

## Models & Inference

### New model releases this week

- **DeepSeek V4.1 Flash 1017** (October 17) — covered in [yesterday's roundup](2026-10-21-deepinfer-tsrs-codex-cache-forever-dario-answers-calvin.md) alongside the DeepInfer open-source release
- **MiniMax M3.1 Flash** (October 19) — [listed on LLM Gateway](https://llmgateway.io/timeline)
- **Alibaba Qwen3.6-27B** — actually released April 22, not October as some aggregators listed; a dense 27B open-weight model (Apache 2.0) that [scores 77.2 on SWE-bench Verified](https://rits.shanghai.nyu.edu/ai/qwen3-6-27b-a-dense-27b-model-that-beats-a-397b-moe-on-coding)

---

## Other Interesting Stuff

### Karpathy: the AI capability gap is now a funnel

Karpathy's October 11 update to his April tweet [continues to circulate](https://www.benzinga.com/markets/tech/26/10/62292803/andrej-karpathy-warns-ai-capability-gap-is-widening-as-advanced-agents-tackle-massive-projects). His "napkin math" funnel: ~6B people (~75%) have barely used LLMs, ~1-2B use free-tier chatbots casually, ~20M use frontier models professionally for coding/math, and ~5,000 have internal access to the most advanced systems. He says the gap between public understanding and frontier capability is "widening" and has shifted from a two-sided conversation into a narrowing funnel. Coverage framed this as ["only 5,000 people have seen what AI can really do"](https://www.businesstoday.in/technology/artificial-intelligence/story/only-5000-people-have-access-to-ai-agents-that-can-tackle-years-of-work-in-weeks-says-ai-researcher-andrej-karpathy-560943-2026-10-12). Karpathy himself called the numbers "napkin math."

### Simon Willison: "My obituary for programming"

Simon Willison [published](https://simonwillison.net/2026/Oct/19/my-obituary-for-programming/) a reflection on October 19 about how LLMs are changing programming — a follow-up to his ongoing theme that these tools are "the gift that keeps on giving for programmers who enjoy building systems." His [Battle Drones project](https://simonwillison.net/2026/Oct/20/battledrones/) (covered in yesterday's roundup) — a vibe-coded RTS with 321 agent commits and multiplayer over sound — continues the demonstration.

Also from Willison's blog this week:
- [llm-echo 0.5](https://simonwillison.net/2026/Oct/18/llm-tools-datasette/) — debug plugin now accounts for tool calls and reasoning tokens
- [llm-tools-datasette 0.1.1](https://simonwillison.net/2026/Oct/18/llm-tools-datasette/) — fix for httpx2 breakage in LLM 0.33
- [llm-gemini 0.35](https://simonwillison.net/2026/Oct/13/llm-gemini/) — adds Gemini 4 Argon support

### AI Engineer NYC 2026 recap (October 12–14)

[swyx co-hosted](https://ai.engineer/nyc/2026) the conference with Ksenia Se. The event was [heavily finance-oriented](https://dev.to/dailycontext/your-guide-to-ai-engineer-new-york-2026-2aol) with speakers from OpenAI, Anthropic, Google DeepMind, Two Sigma, Bridgewater, Citadel Securities, JPMorgan, and Ramp. Notable agent-focused talks:
- Arca on long-horizon agents following a tax payment across days of analysis, approval, and settlement
- Basis on behavior specs, trajectory forks, and cheap simulations for diagnosing agents that work for hours
- Intuit Credit Karma on production-ready governed enterprise agents
- Flywire on engineering agents into an existing GitLab/AWS environment

[swyx joked](https://x.com/swyx/status/2111178689530810878) on October 16 about being "in a zoom with 3 AIs" — the golden age of solipsism. At the [World's Fair event](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/swyx-says-the-highest-loop-builds-the-next-loops) (~Oct 19), he argued that "the highest loop builds the next loops" as attendance hit 7,000 (vs. 2,000 in 2024).

### Armin Ronacher on Python 3.15's "AI psychosis"

Ronacher [joked](https://x.com/mitsuhiko/status/2108583464664776951) (October 9) that "Python 3.15 is the first release where parts of the core team started to suffer AI psychosis" — referring to the release notes being structured as a vibecoded adventure game to explain the new features.
