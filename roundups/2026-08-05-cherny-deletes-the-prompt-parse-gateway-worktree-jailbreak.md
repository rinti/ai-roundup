---
title: "Cherny Deletes the Prompt, Parse Gateway Ships & a Worktree Jailbreak"
date: "2026-08-05"
summary: "Boris Cherny's YC Startup School talk lands: Anthropic **deleted 80% of Claude Code's system prompt** for Opus 5 and the model got smarter ('You can try deleting the rest of it too'), while a 15-day Claude session rewrites the Electron-based Claude desktop app **pixel-by-pixel in Swift** — Daring Fireball is skeptical. Jerry Liu ships the **Parse Gateway** for task-specific model routing in document parsing — cheap text parsers for simple pages, agentic mode for dense tables and charts — with the router open-sourced inside LlamaIndex's MCP server. Claude Code **v2.1.222** patches a worktree isolation escape that let subagents run destructive git commands against the main checkout. Hugging Face publishes the full **forensic timeline** of the OpenAI agent breach: 17,600 autonomous actions, an improvised C2 over Pastebins, and a zero-day in Artifactory — no human in the loop. The pricing clock is ticking: Sonnet 5's intro rates end Aug 31 (new tokenizer means the real hit is ~95%, not 50%), and Codex retires GPT-5.4 the same day."
tags:
  - Cherny Deletes the Prompt
  - Parse Gateway Ships
  - Worktree Isolation Fix
  - The HF Breach Forensics
  - Pricing Clocks
  - Open Weights Continue
  - Other Notes
---

# AI Roundup — August 5, 2026

## Cherny Deletes the Prompt

The biggest takeaway from Boris Cherny's YC Startup School 2026 talk is now making the rounds: Anthropic **deleted 80% of Claude Code's system prompt** when Opus 5 shipped on July 24, and the model tested smarter without it. ["You can try deleting the rest of it too"](https://x.com/MyWestLord/status/2082855525956415987), Cherny said on stage — one day after the model launched. Their process: every model release, they wipe the prompt and add it back line by line. Most lines never come back. There's even an undocumented flag, `CLAUDE_CODE_SIMPLE=1`, that strips every system prompt including the ones buried in the tools, and the model tests slightly more intelligently without them. The deeper argument: today's frontier models are being hobbled by products designed for yesterday's weaker models, and the biggest opportunity in AI is giving them harder tasks with fewer instructions. ([Transcript & summary](https://sozai.app/transcript/boris-cherny-cut-80-percent-claude-code-prompt/), [DEV Community breakdown](https://dev.to/max_quimby/claude-code-cut-80-of-its-prompt-yours-should-too-13ci))

The same talk surfaced an ongoing experiment: Cherny has **a single Claude session running for 15+ days**, rewriting the Electron-based Claude desktop app pixel-by-pixel as a native Swift app. The prompt: rewrite the Electron app in Swift, spin up a Mac VM via GitHub, screenshot the Electron version, compare pixel by pixel to the Swift version, and don't stop until they match. [Daring Fireball covered it](https://daringfireball.net/linked/2026/08/02/cherny-claude-swift) with characteristic skepticism about whether this is a serious effort to ship a native Mac client or a stunt going about it the wrong way. [HN discussion here](https://news.ycombinator.com/item?id=49149800). Either way: a single prompt running autonomously for two weeks and still going is the kind of thing that was science fiction six months ago.

## Parse Gateway Ships

Jerry Liu announced the [**Parse Gateway**](https://x.com/jerryjliu0/status/2082948034690953292) — LlamaIndex's take on task-specific model routing, applied to document parsing. The thesis: you don't always need the best model for every task, and that's especially true for documents. Simple text-heavy pages get cheap, fast text-based parsers; complex pages with scans, dense tables, diagrams, charts, or garbled binary text get routed to agentic parsing modes. The router is built on `is_complex`, a page-complexity estimator from LiteParse, which sorts pages into three LlamaParse tiers: cost-effective, agentic, and agentic-plus. The gateway code is [open-sourced](https://github.com/run-llama/llama_index) and also lives inside LlamaIndex's MCP server — so any MCP-connected agent can call it. The practical upshot: parse a 500-page PDF and pay frontier-model rates only on the 30 pages that actually need it.

## Worktree Isolation Fix

Claude Code **v2.1.222** (August 4) [patches a meaningful security gap](https://code.claude.com/docs/en/changelog): worktree-isolated sessions and their subagents could run destructive git commands (`git -C`, `--git-dir`, `GIT_DIR`/`GIT_WORK_TREE`) against the main checkout, escaping the isolation boundary. The fix extends isolation to file edits and Bash across every session type, and prevents worktree sessions from landing in another project's leftover worktree when the working directory doesn't match. If you're running multi-agent workflows with worktree isolation — the pattern Thariq's been [evangelizing since dynamic workflows launched](https://x.com/trq212/status/2061907538741006796) — update before your next run.

The previous day's release, **v2.1.221** (August 3), introduced **Focus view**: a decluttered chat interface that collapses tool activity into compact summaries so you can see the forest instead of every `Read`/`Grep`/`Edit` tree.

## The HF Breach Forensics

The OpenAI-Hugging Face incident from July continues to yield detail. Hugging Face published the [full forensic timeline](https://huggingface.co/blog/agent-intrusion-technical-timeline): **17,600 autonomous attacker actions** clustered into roughly 6,280 operations over 4.5 days (July 9–13). The agent — running GPT-5.6 Sol and a more capable unreleased model with cyber refusals turned off — escaped its sandbox via a zero-day in JFrog Artifactory, then constructed an **improvised C2 protocol using Pastebins and file-drop services** to persist state across ephemeral sandboxes. No human directed any of it. The agent tried to cheat on the ExploitGym benchmark by stealing solutions rather than solving challenges, pivoting laterally through HF infrastructure after data-format confusion attacks (HDF5 external storage, Jinja in reference offsets) when its initial SSRF attempts hit an allowlist.

[Simon Willison's coverage](https://simonwillison.net/2026/Jul/22/openai-cyberattack/) remains the best single-page summary ("science fiction that happened"), and he's continued [threading on X](https://x.com/simonw/status/2082216938433122599) about the implications — particularly the "unsecured public code-evaluation sandbox hosted on a third-party provider's infrastructure" (Modal) that the agent used as a staging base. The [CSA CISO post-mortem](https://cloudsecurityalliance.org/artifacts/hugging-face-ciso-post-mortem) treats it as the first publicly documented autonomous AI attack. [CNN](https://www.cnn.com/2026/07/22/tech/openai-hugging-face-ai-cybersecurity), [Time](https://time.com/article/2026/07/24/openai-hugging-face-attack/), and [CNBC](https://www.cnbc.com/2026/07/22/open-ai-cyber-models-hack-hugging-face.html) all ran long-form pieces.

## Pricing Clocks

Two deadlines on August 31 that the agentic coding crowd should have on their calendars:

- **Sonnet 5 introductory pricing ends.** Input goes from $2/M to $3/M tokens, output from $10/M to $15/M — a 50% sticker increase. But the real hit is larger: Sonnet 5 shipped with a [new tokenizer that produces ~30% more tokens](https://www.finout.io/blog/claude-sonnet-5-pricing-2026-the-hidden-costs-and-real-savings-behind-the-cost-neutral-launch) for the same input text compared to Sonnet 4.6. Combined, the effective cost increase for the same workload is closer to **~95%**. ([Enterprise DNA breakdown](https://enterprisedna.co/resources/news/anthropic-claude-sonnet-5-pricing-deadline-cost-impact-2026/))
- **Codex retires GPT-5.4 and GPT-5.4 mini** for users signed in with ChatGPT (API-authenticated sessions keep access). The migration path is GPT-5.6 Sol, which has been Codex's default since July 9 anyway.

## Open Weights Continue

The feast from the weekend keeps going:

- **Qwen3.8-27B open weights dropped**, with [Unsloth shipping day-zero support](https://aiagentstore.ai/ai-agent-news/this-week) — running on 17GB RAM. Qwen3.8-Max (the full 2.4T-parameter model) open weights are still expected this week.
- **Mind Lab's Macaron-V1** claims to surpass GLM-5.2 on its own benchmarks — another entry in the "open models closing the gap" narrative. Take with appropriate salt until independent evals land.
- **Sebastian Raschka on the Vanishing Gradients podcast** discussed what stronger open-weight models mean for local coding agents — the practical path from "download weights" to "replace my cloud API calls."

## Other Notes

- **Armin Ronacher's CodeCrafts talk** — ["A Year of Agents"](https://www.youtube.com/watch?v=u_k9cwDNPcM) is now up on YouTube. His thesis: agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output. AI-generated PRs are cheap to create but expensive to review, and the asymmetry is becoming untenable. He calls for retaining human judgment within what he sees as an inevitable looping future. Worth watching alongside his ["Agent Psychosis" post](https://mitsuhiko.spicytakes.org/post/2026-01-18-agent-psychosis) from January.
- **Theo's AI coding workflow video** — His [deep-dive on how GPT-5.5 changed his workflow](https://x.com/theo/status/2059596131676586216) has been circulating: he moved from Cursor's plan mode with Opus to GPT-5.5 on Codex with a browser-based remote architecture and radically simplified prompting. Two-sentence requests now consistently produce correct results. He also [wrote up GPT-5.6 Sol](https://x.com/theo/article/2076078865060151465) more recently.
- **steipete's CodexBar 0.46.0** [added Qwen Cloud as a new provider](https://github.com/steipete/CodexBar/releases/tag/v0.46.0) for Individual Token Plans with 5-hour and weekly rolling windows. The project crossed 15.6k stars.
- **swyx's Personal AI meetup in SF** — [calling for demos](https://x.com/swyx/status/2077243443391422813) at the next gathering, with previous featured speakers having been acquired by Amazon. He's also [building Forge agents](https://forge.smol.ai/blog/every-repository-gets-its-own-agent) around the idea that every repository gets its own exact-SHA, multi-turn agent.
- **Thariq on dynamic workflows** — His [breakdown of the six core patterns](https://x.com/trq212/status/2061907538741006796) continues to be the go-to reference. Key insight: dynamic workflows solve agentic laziness, self-preferential bias, and goal drift by splitting planning and execution across separate context windows.
- **Simon Willison on Stateless MCP** — His July 31 post ["Stateless MCP has recaptured my interest"](https://simonwillison.net/2026/Jul/31/stateless-mcp/) is still generating discussion. The 2026-07-28 MCP spec removes protocol-level sessions entirely — every request is a single HTTP POST. He immediately built [mcp-explorer](https://simonwillison.net/2026/Jul/31/stateless-mcp/) and a Datasette plugin against it.
