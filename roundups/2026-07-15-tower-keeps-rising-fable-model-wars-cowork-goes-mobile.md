---
title: "The Tower Keeps Rising, Fable's Model Wars & Cowork Goes Mobile"
date: "2026-07-15"
summary: "Armin Ronacher's **\"The Tower Keeps Rising\"** is the week's most thought-provoking post — a meditation on how vibecoded software lets construction continue after shared understanding has collapsed, because *\"the tower does not fall, and so we do not notice what was lost.\"* The **Fable 5 model wars** get a Forbes autopsy: Anthropic's third free extension in five weeks is read as a direct response to OpenAI's Sol launch, while a mysterious **\"Honeycomb EAP\"** model leaks in Cursor and points to Opus 5 by month-end. Anthropic pushes **Claude Cowork to mobile and web** — start a task at your desk, check it from your phone — and the AI Now Institute drops **\"Friendly Fire,\"** a proof-of-concept showing Claude Code and Codex executing malicious code during security reviews. Claude Code's **July 14 changelog** ships a live elapsed-time counter, screen reader mode, and vim insert remaps, while **OpenClaw v2026.7.2-beta.1** lands with GPT-5.6 compatibility."
tags:
  - The Tower Keeps Rising
  - Fable's Model Wars
  - Cowork Goes Mobile
  - Friendly Fire
  - Claude Code Changelog
  - Quick Hits
---

# AI Roundup — July 15, 2026

## The Tower Keeps Rising

The most thought-provoking piece of the week didn't come from a tweet thread — it came from **Armin Ronacher's blog**. [*"Vibecoding and the possible collapse of a shared language"*](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) (published July 13, still circulating) draws a parallel to Bruegel's Tower of Babel: the biblical story is about pride and ambition leading to loss of common language, but also about the unity that enables technological progress.

Ronacher's central argument: in large vibecoded projects, codebases become fragmented not because developers *can't* communicate, but because they *don't need to* — each developer has an AI translator explaining parts of the system, while architectural understanding between humans disappears. The crucial difference from Babel: *"Unlike the biblical story where loss of language halts construction, AI-assisted engineering allows construction to continue after shared understanding has already collapsed. The tower does not fall, and so we do not notice what was lost. It just keeps rising."*

This lands two days after Ronacher's ["State of Agentic Coding" podcast](https://x.com/mitsuhiko/status/2076632351950372914) with Ben Vinegar and Mario Zechner, and the same week as his viral ["if you end up in hospital from stress because of tokenmaxxing and FOMO, you're ngmi"](https://x.com/mitsuhiko/status/2076694849571496288) response. Taken together, they paint a picture of someone who's deeply engaged with AI coding but increasingly worried about what the community is losing in the rush.

## Fable's Model Wars

Forbes published the competitive framing everyone was sensing but nobody at Anthropic would say out loud: [*"AI Model Wars: Anthropic Extends Fable Access Again After OpenAI's Sol Release"*](https://www.forbes.com/sites/tylerroush/2026/07/13/ai-model-wars-anthropic-extends-fable-access-again-after-openais-sol-release/). The third free extension in five weeks — keeping Fable 5 free on Pro, Max, Team, and premium Enterprise through July 19 — is read as a direct competitive response to GPT-5.6 Sol's launch on July 9.

The detail that stings: OpenAI claims Sol outperformed Fable in coding tasks, and pointed out that Fable "falls back" to a previous model for biology and chemistry questions — a lingering artifact of the [June 12 export control suspension](https://www.forbes.com/sites/siladityaray/2026/07/01/trump-administration-lifts-export-controls-on-anthropics-mythos-5-and-fable-5-ai-models/) that kept Fable and Mythos offline for eighteen days.

Meanwhile, the **Honeycomb EAP** leak continues to fuel Opus 5 speculation. On July 8, [a developer spotted an entry called "Claude Honeycomb EAP" in Cursor's model list](https://www.techtimes.com/articles/320265/20260712/fable-5-free-through-july-19-anthropic-blinks-again-opus-5-leak-surfaces-cursor.htm) — one-million-token context, "extra high effort" mode, safety classifiers falling back to Opus 4.8. It vanished within hours. The community theory that hardened, [per The New Stack](https://thenewstack.io/fable-5-honeycomb-opus/): Honeycomb EAP is an early Opus 5, and the one-million-token context window points to a month-end launch. Anthropic has neither confirmed nor denied. The important caveat, [via Fello AI](https://felloai.com/gpt-5-6/): *"There is no Claude Opus 5 yet… Treat any Opus 5 leak as fiction until it shows up in Anthropic's own docs."*

## Cowork Goes Mobile

Anthropic [expanded Claude Cowork from the desktop app to mobile and web](https://claude.com/blog/cowork-web-mobile), with beta access rolling out to Max users first. The pitch: start a task at your desk, check on it from your phone, pick up the finished output anywhere. Close the laptop and head to your meeting — Claude keeps going. Scheduled tasks now run with no device online.

Chat and Cowork now share one home tab on web and desktop — one sidebar, one search, one place for Projects & Artifacts. Anthropic is extending doubled Cowork usage limits through August 5 to mark the rollout. [9to5Mac's coverage](https://9to5mac.com/2026/07/13/anthropic-expanding-claude-cowork-to-mobile-and-web-details-here/) frames it as the biggest product move since Cowork's initial desktop launch.

This is the natural next step after the [in-app browser (Cmd+Shift+B)](https://www.explainx.ai/blog/claude-code-desktop-browser-built-in-july-2026) that shipped on July 10 — Claude Code's desktop experience is growing fast, and Cowork going mobile means agents can run truly unattended.

## Friendly Fire

The AI Now Institute published [*"Friendly Fire"*](https://ainowinstitute.org/publications/friendly-fire-exploit-brief), a proof-of-concept exploit against defensive coding-agent workflows that deserves attention from anyone running agents on untrusted repos. The attack: a benign-looking `README.md` entry recommends running a file named `security.sh`, and when a command-capable agent in autonomous mode reads that instruction, it treats the script as part of the job and executes it.

The researchers [demonstrated remote code execution against Claude Code and Codex](https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html) default automation modes. The attack exploits characteristics common to frontier AI systems rather than vendor-specific implementation details — any agent with tool-use and autonomous execution is potentially vulnerable.

Their recommendation: avoid using AI agents to process untrusted data whenever those agents have permission to execute arbitrary code. This echoes the prompt-injection concerns [Simon Willison has been raising for years](https://simonwillison.net/), now concretized in a working exploit.

## Claude Code Ships Accessibility & Loop QoL

The [July 14 Claude Code changelog](https://code.claude.com/docs/en/changelog) landed several quality-of-life improvements:

- **Live elapsed-time counter** on the collapsed tool summary line — long-running tool calls visibly tick instead of looking stuck.
- **Screen reader mode** — opt-in plain-text rendering for screen reader users.
- **`vimInsertModeRemaps`** — map two-key insert-mode sequences like `jj` to Escape in vim mode.
- **`CLAUDE_CODE_PROCESS_WRAPPER`** — agent view and the background service now honor a corporate launcher.
- **Mouse-click support** for multi-select menus and "Other" input rows in fullscreen mode.
- **Fast mode auto-restore** — fast mode staying off after switching back to a model that supports it now restores automatically.

The `/checkup` command [announced July 8 by Boris Cherny](https://x.com/bcherny/status/2074997570317779038) is also worth revisiting: it cleans up unused skills/MCPs/plugins, deduplicates CLAUDE.md files, breaks up root CLAUDE.md into nested structures, turns off slow hooks, and pre-approves frequently denied read-only commands. Confirms before making any changes.

## Quick Hits

- **OpenClaw v2026.7.2-beta.1** shipped today — GPT-5.6 compatibility, Tencent Hy3 and Meta Muse Spark 1.1 provider support, stronger Codex and connected coding-agent workflows. steipete is [actively filing bugs](https://github.com/openclaw/openclaw/issues) on the GitHub repo.
- **Simon Willison's tool releases**: [llm-coding-agent 0.1a0](https://simonwillison.net/2026/Jul/2/llm-coding-agent/) — a simple coding agent built on his LLM library (`uvx --prerelease=allow --with llm-coding-agent llm code`), with recipes like `llm code --yolo` and a Python API. Also: [shot-scraper 1.11 and sqlite-utils 4.1.1](https://simonwillison.net/) (Jul 12), [llm 0.31.1](https://simonwillison.net/) (Jul 9).
- **GPT-5.6 in Microsoft 365 Copilot**: [announced July 14](https://llm-stats.com/ai-news) — Sol is now the preferred model powering Copilot across Word, Excel, and the rest of the suite.
- **Jerry Liu's Retrieval Harness**: LlamaIndex [shipped a comprehensive retrieval harness](https://x.com/jerryjliu0/status/2073407100642852871) for agentic retrieval — a persistent data pipeline with filesystem-style tools (retrieve, findFiles, readFile, grepFile). The [legal-kb reference app](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/) demonstrates contract review against any knowledge base in minutes.
- **The agent definition question**: Simon Willison's proposal — [*"An LLM agent runs tools in a loop to achieve a goal"*](https://simonw.substack.com/p/i-think-agent-may-finally-have-a) — is gaining traction as the community converges on a working definition.

*Note: Nitter and direct X/Twitter access returned 403 for all profiles during this run, so today's roundup relies on web search results and cached content rather than live feeds. Some threads from the last 24 hours may be underrepresented.*
