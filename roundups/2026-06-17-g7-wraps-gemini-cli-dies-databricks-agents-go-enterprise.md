---
title: "The G7 Wraps With AI CEOs at the Table, Gemini CLI Dies Tomorrow & Databricks Shows Agents Going Enterprise"
date: "2026-06-17"
summary: "The G7 summit in Evian closes with Altman, Amodei, and Hassabis seated together for the first time — discussing a **\"trusted partners\" framework** to carve out exemptions from the US export restrictions that killed Fable, while Europe frets about American AI dominance with no local alternative in sight. Tomorrow brings a **concrete deadline**: Google's Gemini CLI and Gemini Code Assist consumer tiers go dark on June 18, pushing developers to the closed-source Antigravity CLI — *\"Google just admitted the terminal is an agent interface, then locked it behind enterprise pricing.\"* Meanwhile in San Francisco, **Databricks Data+AI Summit Day 3** wraps with 30K+ attendees and an agentic-AI track featuring Anthropic, LlamaIndex, LangChain, and Replit, all showing production agent architectures, not demos. Claude Code shipped **v2.1.178–179** over the weekend with Tool(param:value) permission syntax and nested .claude/skills support — the kind of plumbing that makes loop engineering real rather than theoretical. Boris Cherny's \"one year on\" retrospective keeps echoing: *\"I haven't written a line of code by hand in eight months\"*; Jerry Liu argues the **framework era is over** and context quality is the new moat; and Simon Willison quietly ships datasette-agent 0.3a0 with --unsafe mode for direct DB writes, datasette-tailscale, and a blog post making the case that Fable's \"jailbreak\" was just asking an AI to fix bugs."
tags:
  - G7 Summit Wraps With All Three AI CEOs
  - Gemini CLI Dies Tomorrow
  - Databricks Agents Go Enterprise
  - Claude Code Ships Permission Plumbing
  - The One-Year Retrospective That Won't Stop Echoing
  - Simon Willison Keeps Building
  - Also Worth a Look
---

# AI Roundup — June 17, 2026

## G7 Summit Wraps With All Three AI CEOs

**A first: Altman, Amodei, and Hassabis at the same table.** The G7 summit in Évian-les-Bains, France (June 15–17) closes today with a remarkable guest list — Sam Altman (OpenAI), Dario Amodei (Anthropic), and Demis Hassabis (Google DeepMind) all appeared before world leaders for the first time together. [Macron extended a personal invitation to Altman](https://thenextweb.com/news/g7-ai-summit-altman-amodei-hassabis), his first G7. Hassabis and Amodei rarely share a stage; their labs pitch sharply different visions of how fast to move. The backdrop: the US export restrictions that [took Fable offline on June 12](https://simonwillison.net/2026/Jun/16/fable-5-export-controls/) and still haven't been lifted.

**The "trusted partners" framework.** The concrete agenda item: [G7 leaders discussed creating a vetted list of allied nations and approved companies](https://cryptobriefing.com/g7-trusted-partners-us-ai-models/) that would be exempt from the broad AI export restrictions. Europe's worry, per [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/europe-frets-about-us-ai-as-tech-world-flocks-to-france-for-g7-vivatech-4746481): "Europe's quest for technological sovereignty dominates discussions… policymakers and technology executives fret about American AI, with alternatives remaining scarce." The [G7 privacy regulators](https://www.techtimes.com/articles/318417/20260615/g7-privacy-regulators-head-paris-ai-enforcement-deadline-48-days-out.htm) are also pressing for an AI enforcement deadline in 48 days. Final communiqué still pending.

## Gemini CLI Dies Tomorrow

**The deadline everyone should have marked.** Starting June 18, 2026, [Google's Gemini CLI and Gemini Code Assist IDE extensions stop serving all consumer requests](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals) — AI Pro, AI Ultra, and free-tier users all lose access. Enterprise license holders keep their access. The replacement: [Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), a Go-based terminal agent built for multi-agent orchestration under Google's Antigravity platform.

**The reaction is what you'd expect.** [The Register](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605) called it "nudging devs toward a closed-source AI" replacement. The [migration guide from Digital Applied](https://www.digitalapplied.com/blog/gemini-cli-to-antigravity-cli-migration-june-18-2026-guide) walks through the transition. GitHub code reviews from the consumer Gemini Code Assist app [get deprecated tomorrow too](https://developers.google.com/gemini-code-assist/docs/deprecations/consumer-code-review), with full shutdown following on July 17. Google's framing: "Gemini CLI helped establish the terminal as an interface for agentic tasks" but "developer workflows have shifted toward multi-agent systems." Translation: the terminal is an agent interface, and now it's behind the enterprise paywall.

## Databricks Agents Go Enterprise

**30,000 people in a room talking about production agents.** The [Databricks Data+AI Summit 2026](https://www.databricks.com/dataaisummit) (June 15–18, Moscone Center, SF) hits Day 3 today with what [TechTimes called](https://www.techtimes.com/articles/318450/20260616/databricks-summit-2026-day-2-agentic-ai-catalog-federation-move-lab-enterprise.htm) the most practically scoped agentic-AI track yet — sessions from Anthropic, Cognition, CrewAI, LangChain, LlamaIndex, Lovable, OpenAI, and Replit. The theme is decidedly not "look what our model can do" — it's "which infrastructure lets PepsiCo, Mastercard, and AstraZeneca actually run AI agents in production."

**Jerry Liu on stage.** [LlamaIndex CEO Jerry Liu](https://www.databricks.com/dataaisummit/speaker/jerry-liu) is presenting on agentic AI production architectures. His broader argument, [via VentureBeat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives): the AI scaffolding era is over — "agent loops are now capable enough that context quality is the real competitive edge." LlamaIndex has leaned hard into agentic document processing: [automated contract review](https://x.com/jerryjliu0/status/1886951394147754281), [spreadsheet agents](https://x.com/jerryjliu0/status/1930700136482800050), and the recent insight that [coding agents are centralizing around filesystems as core abstractions](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w).

**The infrastructure play.** Databricks announced Unity AI Gateway — models, agents, tools, and MCPs under one governance layer — plus Glossary and Domains for shared, governed semantics usable by both humans and agents. The presence of AWS and Microsoft in co-presented sessions signals these infrastructure decisions will shape deployment roadmaps for years.

## Claude Code Ships Permission Plumbing

**Two releases over the weekend that matter for loop builders.** Claude Code [v2.1.178](https://code.claude.com/docs/en/changelog) (June 15) and [v2.1.179](https://code.claude.com/docs/en/changelog) (June 16) shipped back-to-back:

**v2.1.178 — the permission release:**
- `Tool(param:value)` syntax for permission rules — match a tool's input parameters with wildcards (e.g., `Agent(model:opus)` to block Opus subagents)
- Skills in nested `.claude/skills` directories now auto-load; closest agent/workflow wins on name collisions
- Improved auto mode: subagent spawns now evaluated by classifier before launch
- `/doctor` gets consistent flat tree layout; `/bug` now requires a description before submitting

**v2.1.179 — the stability release:**
- Fixed mid-stream connection drops (partial responses preserved instead of raw errors)
- Fixed spinner stuck at "running tool"
- Fixed sandbox `denyRead`/`allowRead` glob over large directory trees making sessions unusable on Linux
- Fixed mouse-wheel scrolling in WSL2 (regression from 2.1.172)
- Fixed flickering in JetBrains IDE terminals (IntelliJ, PyCharm, WebStorm) on 2026.1+ builds

The `Tool(param:value)` syntax is the quiet headline — it gives harness builders fine-grained control over what subagents can do, which is exactly the kind of plumbing [steipete's loop engineering](https://x.com/steipete/status/2063697162748260627) and [Pocock's skills architecture](https://github.com/mattpocock/sandcastle) need to work safely in practice.

## The One-Year Retrospective That Won't Stop Echoing

**Boris Cherny's "one year on" thread keeps rippling.** [Claude Code's creator sat down with Cat Wu](https://x.com/bcherny/status/2064034799711588805) on June 8 — the one-year anniversary of Claude Code's GA — and the numbers are still being passed around: "I haven't written a line of code by hand in eight months. Some days I coordinate tens of thousands of agents at once. Much of my work starts on my phone, right before I go to sleep." [Coverage from Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/4564/claude-code-boris-cherny-one-year-on-phone) walks through the workflow: auto mode over plan mode, routines that catch bugs before he sees them, and the claim that inside Anthropic, code output has grown **eightfold** with productivity per engineer up **~70%** while headcount tripled.

**The "I write loops, not code" thesis is now a movement.** Cherny's earlier line — ["I don't prompt Claude anymore. I have loops running that prompt Claude"](https://x.com/bcherny/status/2064885111477219664) — and [steipete's viral "design loops that prompt your agents"](https://x.com/steipete/status/2063697162748260627) (6.5M views) have crystallized into a term that now has its own [Medium essays](https://medium.com/jin-system-architect/loop-engineering-ai-coding-has-entered-the-systems-era-most-people-are-still-stuck-in-chat-fd2c49eab038), [conference talks](https://datasciencedojo.com/blog/agentic-loops-explained-from-react-to-loop-engineering-2026-guide/), and [dev.to guides](https://dev.to/max_quimby/loopcraft-stop-prompting-start-designing-loops-2lke). Addy Osmani [popularized it further](https://beyond.addy.ie/2026-trends/). [Latent Space covered it as "Loopcraft"](https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking). The term went from two tweets to an industry meme in under ten days.

## Simon Willison Keeps Building

**Three releases in three days.** While the timeline argues about export controls, Simon Willison shipped:

- **[datasette-agent 0.3a0](https://simonwillison.net/2026/Jun/15/datasette-agent/)** (June 15) — now supports `--unsafe` mode for direct database modification through prompts. The `execute_write_sql` tool requests human approval before writing, respecting user permissions.
- **[datasette-tailscale 0.1a0](https://simonwillison.net/tags/datasette/)** (June 16) — Tailscale integration for Datasette.
- **[datasette-apps 0.1a3](https://simonwillison.net/tags/datasette/)** (June 15) — continued iteration on Datasette's app framework.

**His Fable export-controls post landed the policy argument.** [Willison's blog post](https://simonwillison.net/2026/Jun/16/fable-5-export-controls/) (June 16) reframed the entire debate: "Defenders need to be able to ask AI to fix the bugs in a file, explain why the fix matters, and write tests that confirm the patch works. That is not a guardrail bypass." Combined with his [X thread](https://x.com/simonw/status/2066722034491789720) (95K views): "It's also a prompt I've been using every week for 2+ years."

## Also Worth a Look

- **Thariq's dynamic workflows deep dive.** [Thariq Shihipar](https://x.com/trq212/status/2061907538741006796) (Claude Code team) called workflows "the biggest upgrade to Claude Code's capabilities since skills and subagents" — Claude can now [write its own harness on the fly](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code), break work into subtasks, run them in parallel, and validate results. [InfoQ covered it](https://www.infoq.com/news/2026/06/dynamic-workflows-claude-code/) as parallel agent coordination. Thariq also demoed [Fable 5 editing its own launch video](https://explainx.ai/blog/fable-5-edited-own-launch-video-thariq-claude-code-2026) using Claude Code + Whisper + ffmpeg + Remotion + Figma MCP, with no traditional video editor.
- **Matt Pocock's Sand Castle.** [Sand Castle](https://github.com/mattpocock/sandcastle) — Pocock's TypeScript framework for orchestrating sandboxed coding agents in parallel — keeps getting referenced. It creates git worktrees, runs agents in Docker containers on separate branches, and coordinates planner/implementation/reviewer/merger agents. The [skills repo](https://github.com/mattpocock/skills) hit 101K+ stars.
- **Armin Ronacher building with agents.** [Armin Ronacher](https://x.com/mitsuhiko) (Flask creator, now at [Earendil](https://earendil.com)) has been [updating agent-related TypeScript and Rust repositories](https://github.com/mitsuhiko?tab=repositories) as recently as June 14, and his [open-weights survey](https://x.com/mitsuhiko/status/2066463578782052677) from June 16 (43K views) surfaced the most useful snapshot of the frontier-as-orchestrator / open-weights-as-implementer pattern.
- **Anthropic's billing reversal aftermath.** Two days after [pausing the June 15 credit split](https://thenewstack.io/anthropic-pauses-claude-agent-sdk-subscription-change/) hours before it was due to take effect, the community mood remains relief mixed with distrust. [LLMJunky](https://x.com/LLMJunky/status/2066703757312668035): "I don't trust them. At all." Anthropic says it's "reworking the plan to better support how users build with Claude subscriptions."
- **Karpathy at Anthropic.** Now a month in, [Andrej Karpathy](https://x.com/karpathy/status/2056753169888334312) is leading a pre-training research team at Anthropic. His [Sequoia Ascent 2026 fireside chat](https://karpathy.bearblog.dev/sequoia-ascent-2026/) keeps circulating — key theme: LLMs are about much more than speeding up coding; new horizons include apps that can be "fully engulfed by" AI.
