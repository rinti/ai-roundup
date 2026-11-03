---
title: "DeepSeek's Super-Agent Goes Open Source, Kimi K3.1 Pro Weights Tomorrow, Census Bureau Renames AI to 'Super Intelligence' & Willison's October Newsletter"
date: "2026-11-03"
summary: "**DeepSeek** open-sourced [dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype), a proactive coding agent that listens to GitHub and Feishu, works without being asked, and ships results as PRs — Bloomberg calls it a direct challenge to Claude Code. **Kimi K3.1 Pro** open weights land tomorrow (Nov 4): a 1M-context, ~2.8T-parameter model at $2/$10 per million tokens, with cyber-related training data stripped from the open release. **Simon Willison** published his October sponsors-only newsletter covering vibe game development, vulnerability reporting, and his own releases, plus a Kyle Kingsbury quote on how LLM-written docs erode trust, and linked an OSINT video showing how plane noise leaks your location. The **U.S. Census Bureau** changed 'Artificial Intelligence' to 'Super Intelligence' in its business survey, and Willison recreated his adoption chart showing large-company adoption at ~40%. The **Anthropic–Decart** acquisition talks ($6B) remain unconfirmed since August. Also: Theo's T3 Code managed policies claim adoption at Microsoft, AWS and Apple; and the effort-levels-as-tabs-vs-spaces debate continues."
tags:
  - Agentic Coding & Agent Harnesses
  - Models & Releases
  - Claude & Anthropic
  - Other Interesting Stuff
---

# AI Roundup — November 3, 2026

A quieter Monday after a busy weekend. The big new story is DeepSeek's open-source coding agent; the rest is follow-up from the weekend plus Simon Willison's Monday posts.

## Agentic Coding & Agent Harnesses

### DeepSeek open-sources dsh-superagent

The biggest story that didn't make Sunday's roundup: DeepSeek released [dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) on October 31 under the MIT license. [Bloomberg reported](https://bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic) it as a direct challenge to Claude Code and Codex. [The Information](https://theinformation.com/briefings/deepseek-unveils-autonomous-coding-agent-prototype), [BusinessToday](https://businesstoday.com.my/2026/11/01/deepseek-expands-ai-agent-ambitions-with-new-coding-prototype), and [Convergence Now](https://www.convergence-now.com/artificial-intelligence/deepseek-launches-autonomous-ai-coding-agent-to-rival-anthropics-claude-code/) all covered it.

The design: a long-running **Router** for interaction and task dispatch, and isolated **Worker** sessions for execution. It listens to GitHub events and optionally Feishu, and can act proactively — suggesting solutions to issues without being asked. Results go back as pull requests, with a web panel showing what needs human review. DeepSeek's own tests report a median task completion time of 12.4 minutes (p95: 15.7 minutes).

Key details from [the README](https://raw.githubusercontent.com/deepseek-ai/dsh-superagent-prototype/main/README.md) and [i-scoop's analysis](https://www.i-scoop.eu/deepseek-super-agent/):
- **Observe mode** is the default: records what the agent *would* have done without executing it
- Requires Node.js 22.19+, Git 2.32+, Python 3.8+, tmux, and GitHub CLI 2.48+
- Supports only github.com, not GitHub Enterprise Server
- Runs with full OS user access — DeepSeek warns it should be isolated
- The README is explicit: "This is a research prototype for reference only. Not an official DeepSeek product."

[Dataconomy](https://dataconomy.com/2026/11/02/deepseek-releases-open-source-dsh-superagent-coding-agent/) reports around 9.2K GitHub stars as of Nov 2. A [SmartScope deep-dive](https://smartscope.blog/en/blog/dsh-superagent-inside-deepseeks-github-coding-agent-prototype-2026/) covers the architecture in more detail.

### Theo's T3 Code: managed policies and the star-prompt play

Covered briefly in Sunday's roundup but worth expanding:

- **Managed policies** ([Day 32 post](https://x.com/theo/status/2117142182415257643)): lets IT teams configure T3 Code across an org, with Theo [claiming](https://x.com/theo/status/2117142459163787603) "internal adoption everywhere from Microsoft to AWS to Apple". No independent confirmation yet.
- **GitHub star prompt**: a one-time in-app prompt after 5 prompts that "[Immediately 10x'd the number of stars per day](https://x.com/theo/status/2117065834267136469)" (1.8K likes). Theo [says](https://x.com/theo/status/2117160944128377056) it fires once and checks via `gh cli` whether you've already starred.
- **Agents SDK limits bug**: Theo [confirmed on Nov 2](https://x.com/theo/status/2117213819491762322) that Agent SDK usage drains 5-hour limits faster than Claude Code directly, reported it to Anthropic, and hopes for a fix soon. Weekly limits aren't affected. This follows a [broader billing dispute from June](https://rosetta.to/u/t3dotgg/claude-code-is-unusable-now) when Anthropic introduced a separate monthly credit for SDK/`claude -p` usage.

### The effort-levels debate rolls on

After Sunday's [swyx take](https://x.com/swyx/status/2116642586387730593) on low effort + critique loops and Karpathy's medium-effort default, the thread continued. swyx [called it](https://x.com/swyx/status/2116773135668404286) "the tabs vs spaces of our time". Max Kanat-Alexander: "[I have never taken Opus 5.5 off of medium](https://x.com/mkanat/status/2116822224258961604)".

## Models & Releases

### Kimi K3.1 Pro: open weights land tomorrow

Moonshot [released Kimi K3.1 Pro](https://letsdatascience.com/news/moonshot-releases-kimi-k31-pro-api-open-weights-due-nov-4-786e160c) in its API on October 23, with the **open weights scheduled for November 4** — tomorrow. The model has a 1M-token context window and is priced at $2/$10 per million tokens (input/output).

Per [Latent Space coverage](https://latent.space/p/ainews-kimi-31/) and [Codersera](https://codersera.com/blog/kimi-k3-1-pro-complete-guide-2026/amp/):
- **Size**: ~2.8T total parameters with 104B active (Chinese-language report; other sources say "3T-class")
- **Cyber safety**: the team stripped cybersecurity-related data from both training phases for the open release, aiming "not to release open weights that would extend the absolute frontier of cyber capability"
- **Classification confusion**: Artificial Analysis lists it as "Proprietary"; OpenRouter calls it "open-weight"
- **Licensing**: not yet specified for the weights release
- One commentator flags uncertainty about whether the release will be the full model or a distilled variant

Check Moonshot's official channels or Hugging Face tomorrow for the actual release.

### Simon Willison's LLM CLI updates

Willison's `llm` CLI reached at least [version 0.36](https://ecosistemastartup.com/llm-0-36-el-cli-de-simon-willison-suma-gpt-6-sol-y-luna/), which added GPT-6 Sol and Luna model entries. An earlier [0.35 release](https://letsdatascience.com/news/llm-035-adds-gpt-6-astra-model-entry-61fa8936) (Sep 7) added GPT-6 Astra. The exact current default model is unclear from secondary sources — one search result mentioned gpt-6-luna but this is unverified.

## Claude & Anthropic

### Anthropic–Decart acquisition talks

First reported by [Bloomberg in August](https://fortune.com/2026/08/13/anthropic-said-in-talks-to-buy-startup-decart-for-6-billion/): Anthropic is in talks to acquire Nvidia-backed [Decart AI](https://www.jewishnews.co.uk/anthropic-in-talks-to-buys-israeli-ai-startup-decart-in-reported-6bn-deal/) for ~$6 billion. Decart makes world models and chip-efficiency software. The deal would be [Anthropic's largest acquisition](https://techstrong.ai/articles/anthropic-pursues-6-billion-acquisition-of-decart-ai-ahead-of-planned-ipo-report/) ahead of its anticipated IPO. Decart's May 2026 round valued the startup at ~$4B, up from $3.1B in August 2025. **No update since August; both sides declined to comment.**

### Anthropic expands into drug development

[Mezha.net reported](https://mezha.net/eng/news/mezha-c7bd113cf44ae37c25a3c441_anthropic_expands_claude-s/) that Anthropic published a blog about biotech partnerships: Divergence Labs used Claude for antibody candidates targeting food allergies, and Bristol Myers Squibb is using it to assess clinical study plans and estimate success probability.

## Other Interesting Stuff

### Census Bureau renames "AI" to "Super Intelligence"

Simon Willison [covered](https://simonwillison.net/tags/ai/) the U.S. Census Bureau changing "Artificial Intelligence" to "Super Intelligence" in its business survey. His updated adoption chart shows large-company AI adoption rising to about 40% by October 2026 under the new wording, with a caveat that answers before and after November 17, 2025 aren't directly comparable.

### Simon Willison's November 3 posts

- **[October sponsors-only newsletter](https://simonwillison.net/2026/Nov/3/october-newsletter/)**: covers vibe game development, vulnerability reporting, LLM releases, and his own software releases
- **[OSINT video link](https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/)**: a video showing how background plane noise in a soundtrack can reveal its recording location
- **[Kyle Kingsbury quote](https://simonwillison.net/2026/Nov/1/kyle-kingsbury/)** (Nov 1): from the Jepsen [ParticleDB 1.1.4 analysis](https://jepsen.io/analyses/particledb-1.1.4#llm-tradeoffs): "the use of LLMs erodes trust in documentation, in software, and in the organizations which produce them"

### Weight space programming

[Latent Space](https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/) covered a research direction where LLMs can read and write neural network weights directly. An [ICML 2026 position paper](https://arxiv.org/pdf/2605.18632) argues that model checkpoints should be treated as a "first-class data modality" and proposes a standard pipeline for weight-space generation. One case study describes generating a LoRA adapter from a task description so an LLM performs a new task without fine-tuning.

### Upcoming: AIE CODE Summit, Nov 10–12

swyx's [AIE CODE Summit](https://x.com/swyx/status/2116240128511459608) is a week away in San Francisco (Hilton Union Square). First announced speakers: Lauren Tan (SpaceX), Steve Yegge, and Zach Bruggeman (Ramp). Per [Latent Space](https://latent.space/p/ainews-building-aie-code-the-top-coding-agent-conference/), Jarred Sumner will preview Bun AOT and the Bun Rust rewrite. Invite-only, top 1,000 agentic engineers. Apply at [ai.engineer/code](https://ai.engineer/code).

---

*Note: This session could not access nitter.net, x.com, or simonwillison.net directly due to network restrictions. Content was gathered via web search results and secondary sources. Some details may be imprecise — check linked primary sources for verification.*
