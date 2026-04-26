# AI Roundup — 2026-04-26

A quieter Saturday after a week of model launches, but the agentic-orchestration debate kept going. Matt Pocock published a detailed AFK Day-Shift/Night-Shift playbook in response to "AFK agents are a myth" pushback, Steipete's ClawSweeper kept melting GitHub's servers (they upgraded the OpenClaw maintainers to Enterprise on a weekend), Cursor's Pontus pushed back on broad parallelism in favor of going deep, Jerry Liu's ParseBench numbers landed on GPT-5.5, and LLMJunky put Codex on a Tamagotchi.

## The AFK / parallel-agents debate

### Matt Pocock: "Day Shift / Night Shift" AFK playbook

Pushback that "AFK agents are a myth" prompted Matt Pocock to write up the actual workflow he uses to ship `evalite`, `sandcastle`, and `software-factory`. The full breakdown:

- **Day Shift (planning):** `/grill-me` to align with the AI, then `/to-prd` and `/to-issues` to produce a PRD plus parallel-grabbable implementation tickets.
- **Night Shift (AFK):** A planner agent reads tickets, decides what's unblocked, kicks off multiple sandboxed agents (via his Sandcastle library), and an automated reviewer agent inspects each commit against the PRD before opening PRs.
- **Day Shift part 2 (QA):** Manually QA the branches the night shift produced and create follow-up issues. This often takes as long as planning.

His honest reality checks: AFK agents produce bad code when (a) the plan was wrong, (b) the plan didn't account for unknowns, (c) "the AI just shat the bed", or (d) the codebase has weak feedback loops. He runs day and night shifts in parallel because he can't plan further ahead than working code. — [@mattpocockuk](https://x.com/mattpocockuk/status/2048159313357598989)

Earlier in the week he sketched the underlying daemon ("Sandstorm"), an always-running scheduler that builds a DAG of PR branches and resolves dependencies before kicking off implementation agents. — [@mattpocockuk](https://x.com/mattpocockuk/status/2047783938702082114)

### Pontus (Cursor): depth, not breadth

Cursor's [@potetotes](https://x.com/potetotes/status/2048092593087721736) argued the opposite framing — value comes from going *deeper* on a single problem rather than running ten unrelated agents:

- best-of-N races to find the best solution
- adversarial review
- multiple agents trying to repro a reported issue
- different models for different workloads

He framed the bottleneck as "me trying to remember and keep in my own context window what my agents work on" and analogized agent management to people management: low trust = micromanage, high trust = delegate up the perspective ladder. He explicitly cited Pocock's "code is not cheap".

[@swyx](https://x.com/swyx/status/2048125100437000512) echoed it as "another engineer on the 'code is not cheap' train", linking Matt Carey's [AI Engineer talk "Every API is a Tool for Agents"](https://youtu.be/YBYUvGOuotE).

### Pocock's harness wishlist: types-first file reads (cont.)

Continuing Friday's pitch, Pocock again argued harnesses should pre-compile a file and surface only type signatures + comments first (essentially `.d.ts` view), and only unwrap function bodies on demand. With `tsgo` it would be instant and would let agents explore far more aggressively per token. — [@mattpocockuk](https://x.com/mattpocockuk/status/2047947189163335885)

## ClawSweeper aftermath

After Friday's first-day sweep closed ~4,000 OpenClaw issues, the queue continued draining over the weekend:

- A community member [@cherry_mx_reds](https://x.com/cherry_mx_reds/status/2048042549772742834): "Went to bed with OpenClaw at almost 9,000 open PRs. Woke up to nearly half that. clawsweeper is inevitable."
- [GitHub upgraded the OpenClaw maintainer team to Enterprise on a weekend](https://x.com/steipete/status/2048185940267380815) so they could "keep doing god's work without hard rate limits".
- Steipete signaled phase two: "closing what's fixed was the pre-clean. intent-based clustering is the second strike." [Project Clowfish](https://x.com/steipete/status/2047992836176425470) is already running to find clusters of related issues/PRs alongside the "terminator claw".
- The bensen Skynet pastiche made the rounds: ["ClawSweeper goes online on April 24, 2026… It becomes self-aware at 12:14 p.m. CET, April 25th. In a panic, some try to send even more slop PRs. ClawSweeper fights back."](https://x.com/bensen/status/2047991203367375304)

### The unglamorous half: 35% token-usage cut

In the same orbit, [@cherry_mx_reds](https://x.com/cherry_mx_reds/status/2048063265314340932) detailed engineering work that landed around the Apr 7 OpenClaw release: they intentionally cut aggregate OpenRouter token usage by **~35%, down to ~400B tokens**. No single trick — multiple paths agents hit constantly:

- oversized tool results (cherry_mx_reds)
- cache boundaries and fingerprints (Vincent Koc)
- deterministic tool ordering and cache-preserving compaction (Boris)
- subagent light context and nearby context-shaping (Ayaan)

The post is a useful counterpoint to the more visible "50 codex agents in parallel" headlines — most of the wins are in the boring tool-result and cache plumbing.

## GPT-5.5 reactions, day 2

### Jerry Liu: ParseBench numbers

LlamaIndex ran GPT-5.5 through their ParseBench OCR benchmark over enterprise documents, comparing mid-thinking and zero-thinking modes against GPT-5.4 (0 thinking) and Opus 4.7 (adaptive thinking):

- **GPT-5.5 wins on tables and visual grounding**
- **GPT-5.5 0-thinking does worse on charts than GPT-5.4 0-thinking**
- **Higher thinking does worse on content faithfulness and semantic formatting**
- **Opus 4.7 wins overall on content faithfulness and semantic formatting**
- **Cost: 13c/page mid-thinking, 5.93c/page zero-thinking — ~5x competitive OCR solutions**

His verdict: "one of the better frontier models on pure accuracy, but def not pound for pound w.r.t price." Their commercial LlamaParse wins on every dimension except faithfulness vs Opus, at 1.25c/page. — [@jerryjliu0](https://x.com/jerryjliu0/status/2047803921037656389) · [parsebench.ai](https://www.parsebench.ai/)

### Theo: GPT-5.5 still cheaper than Sonnet on AAI

[@theo](https://x.com/theo/status/2048134278760857949) on the Artificial Analysis Index numbers: despite the price hike, **GPT-5.5 (xhigh) still came out cheaper than Sonnet**. Only "barely" more than 5.4. The 5.5 (medium) tier is closer to a mini-model price with 5.4-xhigh-level performance. He also noted [the more interesting framing](https://x.com/theo/status/2048136595258159307): all the arrow-marked models tied for 2nd place.

### "Write code by hand again"

[@theo](https://x.com/theo/status/2048149434651799841) RT'd Sam Hogan's claim that "All the best programmers I know are starting to write code by hand again" with a co-sign: "Yep. You should do this. Especially if you're my competitor." Reads as either earnest pivot or psyop — your call.

## Codex on every device

LLMJunky had a busy day:

- **Codex Marketplace adds Apple-ecosystem skills:** [Dimillian's library of macOS/iOS Skills is now installable from codex-marketplace.com/skills](https://x.com/LLMJunky/status/2048117627294277832). Auto-install needs them in a `/skills/` folder; he confirmed Dimillian is moving them.
- **Codex Mobile App teased:** ["Already exists. And it's coming soon."](https://x.com/LLMJunky/status/2047902126672638031)
- **Codex on a Tamagotchi:** ["Is this a world's first?"](https://x.com/LLMJunky/status/2048169523946180877) — a Tamagotchi running Codex, posted as a hardware demo.
- **Cursor on iOS via cloud agent:** RT'd [Numman Ali's how-to](https://x.com/nummanali/status/2048136393201709102) — Cursor's cloud agent runs on its own remote machine with screenshots, full diff view, voice + image input. Effectively "24/7 SWE in your pocket".

## Steipete's tool drops

A weekend of small-tool releases:

- **[Summarize 0.14.0](https://github.com/steipete/summarize/releases/tag/v0.14.0)** — GPT-5.5 Fast mode via `--fast`, Reddit thread extraction in the browser extension, local PDF `--extract`, fixes for auto model config and Meta site compatibility.
- **[CodexBar 0.23](https://github.com/steipete/CodexBar/releases/tag/v0.23)** — Mistral support, Claude Designs / Daily Routines usage, Cursor Extra usage, GPT-5.5 pricing, cleaner widgets.
- **[wacrawl 0.1.0](https://github.com/steipete/wacrawl/releases/tag/v0.1.0)** — Read-only CLI that snapshots local macOS WhatsApp Desktop SQLite DBs and gives chat/message listing + FTS search. No extra auth.
- **[acpx 0.6.0](https://github.com/openclaw/acpx/releases/tag/v0.6.0)** — Control Codex/Claude via agents. Claude system-prompt controls, session pruning, embeddable turn handles, `--no-terminal`, persistent-session fixes, WSL cwd translation.

## Misc

- **Sam Altman framing:** ["we still get looksmaxxed on frontend a little but we IQmog hard now"](https://x.com/sama/status/2048160404376105179) — RT'd by Theo, who [followed up with "take the alcohol away from him"](https://x.com/theo/status/2048168881227731184).
- **Mitsuhiko Pi-agent extension:** A weekend game jam started working better after they began drawing to Pi as a quick-and-dirty extension; he later [found someone had built `@ogulcancelik/pi-sketch`](https://x.com/mitsuhiko/status/2048152236409201151) doing similar before. Repo: [github.com/earendil-works/pi](https://x.com/mitsuhiko/status/2048150887516836080).
- **Free Pi+Ollama+Parallel CLI agent:** Mitsuhiko RT'd [@p0's blog post](https://parallel.ai/blog/free-CLI-agent) showing a fully free CLI agent built from Pi agent + Ollama (Gemma 4) + Parallel's free web search MCP.
- **simonw on DeepSeek V4 local:** [Asking](https://x.com/simonw/status/2047844236142497850) if anyone has DeepSeek-V4-Flash running on a Mac (512/256/128GB or smaller). No public answers yet — V4-Flash is 284B/13B-active so 128–256GB Mac unified memory should be enough at 4-bit, but throughput is the open question.
- **swyx 2026 thesis:** ["2025 was coding agents. 2026 is coding agents breaking containment to do everything else."](https://x.com/jacobeffron/status/2047756585770836249)
- **leerob on Cursor /multitask:** ["*way* easier to run many agents at the same time… across many repos (e.g. frontend and backend)"](https://x.com/leerob/status/2047766830832316491). Pontus added that [/multitask now lets you pick the model per subagent](https://x.com/potetotes/status/2047767152145654005) — useful for adversarial review or planner/executor splits.
- **Theo on Claude Code lock-in:** ["Remember the era where people were so obsessed with Claude Code specifically that they would modify it to use other models? That was cute"](https://x.com/theo/status/2048256252439146679). The OpenClaw fork has clearly shifted his framing.
- **Pocock skill update:** [`/improve-codebase-architecture`](https://github.com/mattpocock/skills/blob/main/improve-codebase-architecture/LANGUAGE.md) now ships with a glossary of good/bad codebase terminology.

## Videos & talks

- **Matt Carey — "Every API is a Tool for Agents"** at AI Engineer. [YouTube](https://youtu.be/YBYUvGOuotE).
- **Theo — GitHub stars hidden economy.** [@theo](https://x.com/theo/status/2048122499834036340) pinned a video on how GitHub stars went from popularity signal to "a way for companies to trick VCs into investing".

## Off-topic

- **Theo's Nerd Snipe podcast** is now the [75th biggest tech podcast in the world](https://x.com/theo/status/2047880044823916821), up from #170 on Wednesday.
- **Mitsuhiko:** ["Barbie time. No agents today."](https://x.com/mitsuhiko/status/2048092632128139693) Saturday well spent.
