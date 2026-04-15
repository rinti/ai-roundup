# AI Roundup — April 15, 2026

## Big Releases & Product News

### Claude Code Desktop Redesign + Routines

The biggest news of the day: **Anthropic shipped a rebuilt Claude Code desktop app** and **Claude Code Routines**.

The desktop app has been redesigned from the ground up for parallelizing work — run multiple Claude sessions side by side from one window with a new sidebar to manage them all. Boris Cherny ([@bcherny](https://x.com/bcherny)) commented: "We've been working on this for a while. Can't wait to hear what you think." — [announcement](https://x.com/amorriscode/status/2044129923644961155)

**Claude Code Routines** let you configure a templated agent (prompt + repo + connectors) that runs on a schedule, from an API call, or in response to a GitHub event — all on Anthropic's web infrastructure, so you don't need your laptop open. Internally at Anthropic they've been using them for docs and backlog maintenance. Limits: Pro users get 5 routines/day, Max 15, Team/Enterprise 25. — [details](https://x.com/noahzweben/status/2044093913376706655), get started at [claude.ai/code/routines](https://claude.ai/code/routines), [docs](https://code.claude.com/docs/en/routines)

Press coverage: [9to5Mac](https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/) | [SiliconANGLE](https://siliconangle.com/2026/04/14/anthropics-claude-code-gets-automated-routines-desktop-makeover/) | [The Register](https://www.theregister.com/2026/04/14/claude_code_routines)

### Cursor Ships CLI Updates + Sentry Automations

Cursor shipped quality-of-life improvements to Cursor 3 including split agents for multi-tasking (like tmux for agents). Their **Automations now support Sentry event-based triggers** — set up agents that auto-respond to issues, investigate root causes, open PRs, and post summaries to Slack. Lauren ([@potetotes](https://x.com/potetotes)): "agents can now prompt you back" — [Cursor Automations announcement](https://x.com/cursor_ai/status/2044097171071611338)

### Cognition Releases SWE-check

Cognition released **SWE-check**, a specialized bug detection model RL-trained with Applied Compute that matches frontier performance on in-distribution evals while running **10x faster**. Swyx ([@swyx](https://x.com/swyx)) commented on the broader pattern: "AI Engineering is about pushing AI Pareto Frontiers — first capabilitymaxx, then distil." — [announcement](https://x.com/cognition/status/2044174496312242544)

### GitHub Stacked PRs (Private Preview)

GitHub is rolling out **stacked PRs** in private preview. Jared Palmer announced the waitlist at [github.github.com/gh-stack/](https://github.github.com/gh-stack/). Shared by [@steipete](https://x.com/steipete). — [announcement](https://x.com/jaredpalmer/status/2043760006185525257)

---

## Agentic Coding Discussion

### Karpathy on the AI Perception Gap (still buzzing)

Karpathy's thread from a few days ago is still driving discussion everywhere. The core argument: there's a growing gap between people who tried free-tier ChatGPT last year and people using frontier agentic models (Codex / Claude Code) professionally. The latter group is experiencing "AI Psychosis" because the improvements in coding/research domains have been "staggering." Meanwhile, OpenAI's voice mode still fumbles basic questions because it runs on a GPT-4o era model. Simon Willison added: "I think it's non-obvious to many people that the OpenAI voice mode runs on a much older, much weaker model." — [Karpathy's thread](https://x.com/karpathy/status/2042334451611693415)

### Matt Pocock: "Own the Process" — Stop Using AI Coding Frameworks

After running an AI coding course for ~2,000 people, Matt Pocock shared the top feedback: **people are dissatisfied with frameworks like BMAD, GSD, and Spec-Kit**. "Giving away control of context to a framework makes things a lot harder to debug. My advice: own the process." — [post](https://x.com/mattpocockuk/status/2044029094942159126)

He also proposed a new skill pattern — asking the agent to "go up a layer of abstraction, give me a map of all the relevant modules and callers" when you don't know an area of code well. Lauren ([@potetotes](https://x.com/potetotes)) responded by open-sourcing `/how`, a skill that helps both you and agents understand architecture: [github.com/poteto/how](https://github.com/poteto/how) — [discussion](https://x.com/mattpocockuk/status/2043948993105867082)

Another tip from Matt: "Want to put something in CLAUDE.md? Stick it in CODE_STANDARDS.md instead. Then pass it to a reviewer agent that runs on every PR. Save tokens during implementation, spend them during review." — [post](https://x.com/mattpocockuk/status/2043320548776681627)

### Mid-Turn Steering is Underrated

[@LLMJunky](https://x.com/LLMJunky) highlighted mid-turn steering as an underrated feature: "I love how you can just talk to the agents as they're working, asking them either to pivot or to provide an update... The fire and forget era is over. Steering makes working with agents on long-horizon tasks a truly collaborative experience." — [post](https://x.com/LLMJunky/status/2044226674984657085)

### Context Window Quality: Claude vs GPT 5.x

LLMJunky reported seeing **no context degradation through large context or compaction** with Claude models, calling it "the biggest QoL update" — but noted GPT 5.x models are an exception. — [post](https://x.com/LLMJunky/status/2044128351103717656)

Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko)) was more blunt about GPT: "gpt 5.4 is bread, but it's so damn talkative bread. No personality but so damn chatty." — [post](https://x.com/mitsuhiko/status/2044176088041914449)

### Claude Performance Backlash Hits the Press

A major story that blew up over April 13-14: multiple outlets reported on **growing user backlash over perceived Claude quality decline**. The core issue: Anthropic quietly reduced the model's default "effort" level to "medium" to economize on tokens. Boris Cherny ([@bcherny](https://x.com/bcherny)) confirmed the change was in response to feedback that Claude was consuming too many tokens per task, but many users complained the change wasn't communicated transparently. Thariq ([@trq212](https://x.com/trq212)) had earlier posted about adjusting 5-hour session limits during peak hours to manage growing demand.

The controversy is particularly pointed because Anthropic has built its brand on transparency. There's also speculation about compute capacity constraints after adoption soared. On April 13, Claude also experienced intermittent 500 errors across claude.ai, the API, and Claude Code.

Coverage: [Fortune](https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/) | [VentureBeat](https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance) | [The Register](https://www.theregister.com/2026/04/13/claude_outage_quality_complaints/) | [The Register (cache confusion)](https://www.theregister.com/2026/04/13/claude_code_cache_confusion/)

---

## Tools & Open Source

### Sandcastle 0.4.1 — Sandboxed Agent Orchestration

Matt Pocock shipped **Sandcastle 0.4.1** with support for OpenCode, Pi, Codex, Podman, Daytona, and Vercel. "It's becoming the simplest way to run any agent, sandboxed anywhere." He's also considering making the sandbox fully pluggable (not just Docker). — [release](https://x.com/mattpocockuk/status/2043773444416770285), [repo](https://github.com/mattpocock/sandcastle), [pluggable sandbox RFC](https://github.com/mattpocock/sandcastle/issues/250)

### Open Agents — Cloud Coding Agent (Open Source)

Nico Albanese open-sourced **Open Agents**, a coding agent that runs in the cloud. "It's since written every line of code I've shipped, including itself." Retweeted by Matt Pocock. — [announcement](https://x.com/nicoalbanese10/status/2043745569278251112)

### OpenClaw 2026.4.14

Peter Steinberger ([@steipete](https://x.com/steipete)) and team shipped **OpenClaw 2026.4.14** with smarter GPT-5.4 routing and recovery, Chrome/CDP improvements, subagent fixes, and Slack/Telegram/Discord improvements. Steipete is prepping for his TED talk in Vancouver. Also notable: the new **"pi contribution model"** from @badlogicgames — auto-closing all PRs/issues unless the contributor has been pre-approved, to combat AI-generated slop in the issue tracker (30-50 slop issues/day). — [release](https://x.com/openclaw/status/2044042546976883063)

### lossless-claw 0.9.0

The "stop touching my cache" release: compaction now defers while the Anthropic cache is hot, plus a new `/lcm rotate` command to split bloated sessions on demand. — [release](https://x.com/jlehman_/status/2044059925341687834)

### Armin Ronacher's pi Ecosystem

Armin released a **public /review extension for pi** at [github.com/earendil-works/pi-review](https://github.com/earendil-works/pi-review), and an **interactive pi tutorial**: `pi -e git:github.com/earendil-works/pi-tutorial`. He also shared slides from his AI Engineer talk: [mitsuhiko.github.io/talks/ai-engineer-talk/](https://mitsuhiko.github.io/talks/ai-engineer-talk/) — [tutorial post](https://x.com/mitsuhiko/status/2043820824168116345)

### Claude Code /ultraplan

Thariq ([@trq212](https://x.com/trq212)) announced **/ultraplan** — Claude builds an implementation plan on the web, you can edit it, then run it on web or back in terminal. "Planning can happen in the cloud since it's mostly about reading code & understanding intent." Docs at [code.claude.com/docs/en/fullscreen](https://code.claude.com/docs/en/fullscreen). — [announcement](https://x.com/trq212/status/2042671370186973589)

---

## Benchmarks & Research

### ParseBench — OCR Benchmark for the Agentic Era

Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0)) from LlamaIndex released **ParseBench**, a comprehensive OCR benchmark for real-world enterprise documents (financial filings, contracts, insurance docs). Key findings: increasing compute budget yields diminishing returns; charts are the most polarizing dimension; VLMs are great at visual understanding but terrible at layout extraction; no method crushes all 5 dimensions. LlamaParse leads at 84.9% overall. — [blog](https://www.llamaindex.ai/blog/parsebench), [paper](https://arxiv.org/abs/2604.08538), [website](https://parsebench.ai)

### Claude Mythos First to Complete AISI Cyber Range

The UK AI Security Institute conducted cyber evaluations of Claude Mythos Preview and found it's **the first model to complete an AISI cyber range end-to-end**. Retweeted by Boris Cherny. — [announcement](https://x.com/AISecurityInst/status/2043683577594794183)

---

## Videos & Podcasts

### Latent Space: The Full Story of Notion AI

Swyx finally got Simon Last and Sarah Sachs on Latent Space to tell the complete story of **Notion AI's 5 rebuilds**. Covers: how to eval agent usefulness (not just correctness), MCP vs CLI tradeoffs, why they build for "top of the class" rather than dumbing down AI, and Simon's take on the ideal "software factory." — [listen](https://latent.space/p/notion)

### ThursdAI: Vincent Koc on OpenClaw

Alex Volkov ([@altryne](https://x.com/altryne)) interviewed Vincent Koc, the #2 behind OpenClaw, on the ThursdAI podcast at AI Engineer. — [watch](https://x.com/altryne/status/2044102556490903863)

---

## Local LLM Corner

### MiniMax M2.7 Benchmarks on Dual RTX 6000s

[@LLMJunky](https://x.com/LLMJunky) ran side-by-side benchmarks of **vLLM vs SGLang** for MiniMax M2.7 NVFP4 on two RTX 6000s. Running with full 16-bit KVCache at 140K context window (200K possible with vLLM but slower). Results were surprisingly non-linear. — [benchmarks](https://x.com/LLMJunky/status/2044155081767997730)

### Codex Mobile/iPad Hints

LLMJunky also flagged hints from Tibo (@thsottiaux) about a **Codex app for Mobile/iPad** coming. — [post](https://x.com/LLMJunky/status/2044188756538741209)

---

## Other Notable Mentions

- **Thariq** asking about the new Claude Code NO_FLICKER renderer — `CLAUDE_CODE_NO_FLICKER=1 claude` — [post](https://x.com/trq212/status/2043814646600348046)
- **Apple silently rolled out automated app review** to handle the vibe coding app surge — auto-rejecting apps that use attribution SDKs (flagged as ads) or Firebase anon auth (flagged as login). Shared by steipete. — [post](https://x.com/seraleev)
- **ClawCon at UMich** — 2300+ builders, the biggest one yet — [event](https://x.com/davemorin/status/2044077496673673341)
- **Gemini CLI headless mode** bug: Google cuts you off for "automated queries" even though headless mode is literally for automation. Shared by steipete. — [post](https://x.com/airkatakana/status/2043701124423938262)
