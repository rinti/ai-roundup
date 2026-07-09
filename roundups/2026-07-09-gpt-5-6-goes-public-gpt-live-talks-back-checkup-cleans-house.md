---
title: "GPT-5.6 Goes Public, GPT-Live Talks Back & /checkup Cleans House"
date: "2026-07-09"
summary: "OpenAI's biggest day in months: the full **GPT-5.6 family** (Sol, Terra, Luna) rolls out publicly at $5/$30 → $1/$6 per MTok, hours after **GPT-Live** replaces Advanced Voice Mode with full-duplex conversation that delegates hard questions to 5.5 behind the scenes — Simon Willison calls it *very impressive*. On the Anthropic side, Boris Cherny ships **`/checkup`** for Claude Code — a single command that dedupes your CLAUDE.md, kills slow hooks, prunes unused plugins, and pre-approves read-only commands — while **Fable 5's July 12 API-only cliff** looms three days out and the rate-limit complaints haven't stopped. Theo drops his **AIE closing keynote** 'What do we build now?', Thariq's **Field Guide to Fable** crosses 2M views with its unknowns framework still driving conversation, and swyx's **AI Engineer World's Fair** wraps with 6,000 attendees and 300 speakers."
tags:
  - GPT-5.6 Goes Public
  - GPT-Live Arrives
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - AI Engineer Community
  - Quick Hits
---

# AI Roundup — July 9, 2026

## GPT-5.6 Goes Public

**Sol, Terra, and Luna roll out to the world today.** After yesterday's embargo lift and Theo's first-look review, OpenAI's full GPT-5.6 family [launches publicly on July 9](https://techmymoney.com/2026/07/08/openai-gpt-56-public-rollout-july-9-sol-terra-luna/) across three tiers: **Sol** (flagship reasoning and long-horizon agentic work, $5/$30 per MTok), **Terra** (balanced everyday model at GPT-5.5-competitive performance for half the cost, $2.50/$15), and **Luna** (fast and cheap, $1/$6). Sol also [launches on Cerebras at up to 750 tok/s](https://explainx.ai/blog/gpt-5-6-release-date-features-benchmarks-2026) — frontier intelligence at unprecedented speed.

**Theo's verdict from yesterday still frames the conversation.** His [first-look thread](https://x.com/theo/status/2074708892341481755) called GPT-5.6 "not quite as 'smart' as Fable, but incredibly capable" — determined enough to run for a day without a `/goal`, excellent at subagent orchestration, and [world-leading in computer use](https://x.com/theo/status/2074720467395756499). For many tasks, `gpt-5.6-sol` is now his default. The reply-section debate centers on what "Fable" even means anymore — [the actual rate-limited version users can access, or the mythical multi-day Fable nobody gets to use](https://x.com/0xPectations_/status/2074753430392840683)?

**The timing against Fable's July 12 cliff is the subtext.** One reply [computed the Bayesian probability that Anthropic extended Fable out of fear of the 5.6 launch at "100%"](https://x.com/jackson_lo58573/status/2074551384238616948). With Fable going API-only at $10/$50 per MTok in three days, the pressure on Anthropic to announce a longer-term plan is mounting.

## GPT-Live Arrives

**OpenAI replaces Advanced Voice Mode with full-duplex conversation.** [GPT-Live launched July 8](https://openai.com/index/introducing-gpt-live/) with two models — GPT-Live-1 (paid tiers) and GPT-Live-1 mini (default for all ChatGPT users). The architecture is genuinely new: it listens and speaks simultaneously, uses filler words like "mhmm" and "yeah" to signal attention, and [delegates hard questions to GPT-5.5 behind the scenes](https://venturebeat.com/technology/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person/) while keeping the conversation flowing.

**Simon Willison [covered the launch](https://simonwillison.net/2026/Jul/8/introducing-gptlive/)** after having preview access for a few weeks: *very impressive*. The seamless multitasking — asking a complex question, getting a "let me think about that" while it dispatches to GPT-5.5, then getting the answer woven back into natural speech — is the standout feature.

**Early feedback is split on the "over-enthusiasm."** Testers [complain the filler words get distracting](https://finance.biggo.com/news/e3986ab2-abf9-4cee-b8dc-39349a6a6eaf) — too many "mhmm"s. No video or screen sharing at launch, which puts it behind Google's Gemini Live on features. API access coming soon for developers.

## Claude Code & Anthropic Updates

**Boris Cherny ships `/checkup` for Claude Code.** The Claude Code creator [announced on July 8](https://x.com/bcherny/status/2074997570317779038) a new maintenance command that performs a health check on your setup: clean up unused skills/MCPs/plugins to save context, dedup your local CLAUDE.md against the checked-in version, break up a bloated root CLAUDE.md into nested files and skills, turn off slow hooks, update Claude Code to the latest version, enable auto mode by default, and pre-approve frequently denied read-only commands. It confirms before making any changes. This arrives right after Matt Pocock's [system-prompt bloat purge](https://x.com/mattpocockuk/status/2074464823232888987) showed users carrying 70%+ unnecessary context — `/checkup` automates much of that cleanup.

**Fable 5's three-day countdown.** The [extension through July 12](https://www.androidauthority.com/claude-fable-5-free-extension-3685103/) bought time but didn't reset rate limits, leaving power users who burned their quota racing the original deadline still locked out. After July 12, Fable 5 becomes API-only at $10/$50 per MTok. Anthropic says it "plans to bring Fable 5 back to subscription plans as capacity allows" — but no timeline.

**Claude Code streaming watchdog now on by default.** The latest release enables the streaming idle watchdog for all providers — it aborts and retries when a response stream produces no events for 5 minutes. Also fixed: worktree-isolated subagents that sometimes ran shell commands in the parent checkout instead of their own worktree.

## Agentic Coding & Agent Harnesses

**Thariq's "Field Guide to Fable" crosses 2M views.** His [thread from July 3](https://x.com/trq212/status/2073100352921215386) keeps generating discussion a week later. The core insight: Fable 5 is the first model where output quality is bottlenecked by your ability to clarify its unknowns, not by the model's capabilities. He categorizes unknowns into four types — Known Knowns (explicit instructions), Known Unknowns (gaps you're aware of), Unknown Knowns (implicit unstated knowledge), and Unknown Unknowns (unforeseen issues) — and argues that closing the gap between "what you asked for" and "what actually needs to happen" is the real skill now. The thread [spawned a GitHub repo of agent skills](https://github.com/GreatMark/fable-field-guide-skills) and got [featured in Latent Space's AI News](https://www.latent.space/p/ainews-the-field-guide-to-fable).

**Simon Willison releases llm-coding-agent.** His [new Python tool](https://simonwillison.net/2026/Jul/2/llm-coding-agent/) implements a Claude Code-style coding agent built on his LLM library: `uvx --prerelease=allow --with llm-coding-agent llm code`. It supports `--yolo` mode and permission allowlists (`--allow "pytest*" --allow "git diff*"`), and works with any model his LLM framework supports. He demoed it building a SwiftUI CLI app with GPT-5.5 — which reasoned that "SwiftUI isn't suitable for a true CLI" before building it anyway.

**steipete's loop engineering continues to ripple.** His viral June post — ["You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents"](https://x.com/steipete/status/2023057089346580828) — hit 6.5M views and coined the term that LangChain, Addy Osmani, and dozens of blog posts have since expanded on. His latest contribution: a [codex-first skill](https://github.com/steipete/agent-scripts/blob/main/skills/codex-first/SKILL.md) that makes Fable delegate to OpenAI Codex as the workhorse — the multi-provider "planner brain + cheap hands" pattern getting a reusable form.

**Matt Pocock's Skills v1.1 ships.** New agent skills including [/wayfinder for planning](https://x.com/mattpocockuk/status/2072716979195326905), spec improvements, and TDD refactoring. His philosophy: ["The more I replace plans with prototypes, the better the outputs."](https://x.com/mattpocockuk/status/2052437310302462173) The AI Hero skills repo now has 135K+ stars and 11.7K+ forks on GitHub.

## AI Engineer Community

**Theo's AIE closing keynote: "What do we build now?"** Published today on [YouTube](https://www.youtube.com/watch?v=xUnRQ9vLXxo), Theo's closing keynote from the AI Engineer World's Fair 2026 provokes viewers to think wider, not just bigger. This follows his [28-minute monologue](https://finance.biggo.com/news/db0a972b55e92947) earlier this week dismantling the idea that open-weight frontier models can be run locally on consumer hardware — which drew a [substantive rebuttal from Sentdex](https://x.com/Sentdex/status/2074638244071764354) arguing that batching, tensor parallelism, and idle GPU power economics actually make the strongest case *for* local.

**swyx's AI Engineer World's Fair wraps.** The [2026 edition](https://www.ai.engineer/worldsfair/2026) at Moscone West featured 29 tracks, 300 speakers, 100 expo partners, and 6,000+ attendees — completely sold out. swyx's thesis for 2026: coding agents are "breaking containment to do everything else." Thariq's [60GB video-editing experiment](https://x.com/trq212/status/2074617786408845774) — where Fable transcribed, edited, and animated swyx's AIE keynote footage — is exhibit A.

**Karpathy's agents-vs-models warning reverberates.** Since joining [Anthropic's pre-training team in May](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/), Karpathy has been vocal that ["The biggest mistake in today's AI field is that people rush to make agents work without first fully understanding the underlying language models."](https://www.kucoin.com/news/flash/karpathy-warns-ai-developers-focusing-on-agents-before-models-is-a-mistake) His team at Anthropic is focused on using Claude to accelerate pre-training research itself — the recursive self-improvement loop.

## Quick Hits

- **Jerry Liu / LlamaIndex** — LlamaIndex [improved LlamaParse Cost Optimizer](https://x.com/llama_index/status/2074591206219157718): simple pages route to cheap parsing tiers, complex pages to agentic tiers. Also built the [fastest PDF-to-markdown parser](https://aiguerrilla.net/founders/jerry-liu/) that's more accurate than other open-source model-free parsers, and shipped [Spreadsheet Agents](https://x.com/jerryjliu0/status/1930700136482800050) for data transformation over unnormalized Excel sheets.
- **Armin Ronacher (mitsuhiko)** — Largely moved to [Bluesky](https://bsky.app/profile/mitsuhiko.at), continues arguing that AI-accelerated development is causing ["massive degradation of code quality"](https://x.com/jeremyphoward/status/2036507393337729404) and advocates for agent-first code review: "as more code is written by agents, it makes little sense to throw unfinished work at humans before an agent has reviewed it first."
- **LLMJunky's local benchmarks** — RTX 6000 Pro Blackwell results: [DeepSeek V4 Flash at 137 tok/s](https://x.com/LLMJunky/status/2074638378499293430) single-stream, [Hy3-NVFP4 at 25 tok/s](https://x.com/LLMJunky/status/2074730329898668112) (memory-constrained to 90K context). Also tracking [RTX 5080 SUPER leaks](https://x.com/LLMJunky/status/2074684168529662295): 24GB DDR7 at ~$1,300 as the budget 3090 replacement.
- **GLM-5.2 in Copilot** — Kimi K2.7 Code from Moonshot AI became the first open-weight model in GitHub Copilot's model picker, while GLM-5.2 scores 62.1% on SWE-bench Pro (above GPT-5.5's 58.6%).
- **Anthropic vs. Abnormal AI** — [Still simmering](https://x.com/steipete/status/2074739318103629979): Anthropic sued their own large customer over a slash-based logo, and the CEO [found out from a reporter](https://abnormal.ai/blog/abnormal-response-to-anthropic-lawsuit). Court of X leans toward Abnormal.
