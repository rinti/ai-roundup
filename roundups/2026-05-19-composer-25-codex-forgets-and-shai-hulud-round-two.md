---
title: "Composer 2.5 Lands, Codex Forgets, and Shai-Hulud Round Two"
date: "2026-05-19"
summary: "Cursor drops **Composer 2.5** with a focus on sustained long-running work and doubled usage for the week, while Anthropic counters by doubling **Claude Design** token limits across every plan. Underneath the launches, the long-running-agent meta keeps mutating: Thariq's running `implementation-notes.html` prompt goes viral as a hedge against context drift, and LLMJunky surfaces a chorus of reports that **Codex compaction has regressed**. Jerry Liu reopens the *grep vs. RAG vs. hybrid* retrieval debate and ships **ParseBench** for document understanding. Matt Pocock floats feature flags as a replacement for PRs in agent workflows. Theo lights up at npm again as **Socket flags a 639-version Shai-Hulud mini-wave** across 323 packages, and separately offers to fund a C&D for someone harassing shadcn. Plus: swyx takes bets on which acquirer scoops Vercel and Supabase."
tags:
  - Model & Tool Releases
  - Long-Running Agents & Context
  - Retrieval & Document Understanding
  - Feature Flags & Agent Workflows
  - Supply Chain & Security
  - Industry & Acquisitions
---

# AI Roundup — May 19, 2026

## Model & Tool Releases

**Cursor ships Composer 2.5.** Cursor announced its new flagship coding model, framing it explicitly around **sustained long-running work** rather than headline benchmarks — and doubled the included usage for one week to seed adoption. Reactions split predictably: lots of "is it just Kimi K2.6 with RL?" speculation, plenty of "every editor ships a new model every two weeks now" fatigue, and a sharp comment from @NeoSoulAI: *"static benchmarks are completely mid for long running tasks fr… the real boss fight is keeping an agent coherent across a whole repo for hours without it quietly dropping its world model mid task."* A few practitioners (e.g. @grim_nomad) echoed: the production gap shows up in sustained tasks, not evals. Cursor's own framing — "more intelligent, better at sustained work on long-running tasks, more reliable at following complex instructions" — leans hard into that read.
→ Announcement (10K+ likes, 13M views): <https://x.com/cursor_ai/status/2056415413077233983>

**Anthropic doubles Claude Design token limits.** A quieter but symmetrical move on the same day: Claude's official account announced doubled token limits across every plan for Claude Design. Reception was a mix of "finally — this was the friction point I kept hitting" (@moise_chris, @daptonai) and the inevitable "doubled from 5 minutes of usage to 10" snark (@rozzabuilds, 151 likes). @daptonai had the most substantive take: the real unlock isn't longer documents, it's *fewer roundtrips* — agent pipelines that previously chunked + stitched can collapse a whole orchestration layer.
→ Announcement: <https://x.com/claudeai/status/2056460045756309820>

## Long-Running Agents & Context

**Thariq's `implementation-notes.html` prompt goes viral.** Trq212 posted a one-liner he's been using a lot — *"implement <SPEC> and while you do, keep a running implementation-notes.html file with decisions you had to make that weren't in the spec, tradeoffs, anything else I should know"* — and it landed: 7.4K likes, 416 RTs, ~500K views. The thread became a small clinic on why this matters in 2026: the notes file is the **handoff layer**, not decoration (@chuachonghuan, @hdadhich); it converts hidden ambiguity into written decisions instead of burying them in the diff (@mylifcc); and it lets future LLM passes reason over the tradeoffs to tighten the spec (@EffortlessSteve). One pushback worth noting (@mariush_ca): does prompting the agent to *document* decisions push it to *make* more unspecced changes? Tuhin Sharma noted the pattern is essentially @GeoffreyHuntley's "ralph loop."
→ <https://x.com/trq212/status/2056415973125796184>

**Trq212 + Claire on staying-in-the-loop with long agents.** Companion piece, recorded live at Code with Claude: Thariq walking through how he uses HTML artifacts as interactive specs, throwaway micro-UIs, and a living HTML design system — and how he prompts Claude with "whatever is needed" to give it room to actually think. Quote tweet from the host (@itsclairesia): *"HTML is the new markdown."*
→ <https://x.com/trq212/status/2056432663125545082>

**Codex compaction has gotten worse, says everyone.** LLMJunky asked if anyone else noticed Codex compaction *"losing more details than normal"* lately, and the reply column lit up. The strongest signal: @yieldthought ("focuses on very old parts of the task it already finished and forgets things"), @StephenSawyerr ("the degradation is real… making my heartbeat automations unreliable"), @_notnotjake ("compaction was a regression in 5.5, was so good before"), and a long story from @macintoch about forking sessions every 12–24h because compaction snowballs. Most useful workaround surfaced in the thread: @iamhectorlopez recommending Mattpocock's md-tracking workflow — i.e. the same implementation-notes pattern Thariq's prompt encodes. @_cherki82_ had a related complaint about `/goal` "alphabet soup" scope creep that may share root cause.
→ <https://x.com/LLMJunky/status/2056494759540138429>

**`lossless-claw 0.11.1` — focus mode for context.** Josh Lehman shipped a release that adds `/lossless focus <description>` (and `/lossless unfocus`) — pull a specific kind of past work into the foreground while excluding the rest, useful when one long conversation has accreted multiple unrelated workstreams. Image externalization now works across roles, and installs no longer pull a second OpenClaw. Lehman confirmed in-thread that lossless works on top of the Codex harness too, which feels relevant given the compaction complaints above.
→ <https://x.com/jlehman_/status/2056494273332474224>

**Matt Pocock on `/prototype` and creative pressure-testing.** Pocock keeps catching himself worrying about token spend when `/prototype` generates three radically different UI designs — then keeps being surprised that one of them breaks his prior and ends up being the design. The thread became a small treatise on why generating *options* is the actual value: @temhandev — "on my own I'd lock onto the first good-enough design"; @AladdinKayaa — "the bottleneck is shifting from creation to selection, judgment, and trust." Pocock also clarified he prefers `/grill-with-docs` over plan mode and often prototypes during grilling.
→ <https://x.com/mattpocockuk/status/2056351317581303982>

## Retrieval & Document Understanding

**"What's actually SOTA for file search & retrieval?"** Jerry Liu posted the open question (grep / virtualized grep / vector / hybrid / SQL / none / some?) and got 36+ substantive replies from people running this in production. Rough consensus reads:
- **Grep first**, escalate when needed (@hanzi_li, @triathenum, @__vilsinho__).
- **Hybrid (BM25 + dense + rerank) wins for messy mixed corpora**: @DoDataThings shared a production stack (BM25 recall → vector for semantic → LLM rerank → grep for exact symbols/proper nouns; the rerank step is where most of the quality lift lives). @emilson_tery proposed sqlite-vec + FTS5 + reranker as a well-trodden setup.
- **Pure vector regularly underperforms on code-symbol lookups.** @baibaida's team tried hybrid on a 4M-doc internal codebase last quarter and found vector recall was worse than plain grep for symbols — they ship grep first + a 200ms rerank when grep returns >25 hits.
- **Late-interaction (ColBERTv2) keeps embarrassing dense models**: a quoted post pointed out a 100M-param ColBERTv2 trained on 4 A100s in 2021 is still outperforming Qwen3-Embed-8B (80× bigger) on IR.
- Honorable mention: @themathgeek13 wrote a blog post the same day on the tradeoff space ("pre-processing vs deployment ease vs token usage vs efficiency vs complexity").
→ <https://x.com/jerryjliu0/status/2056519701011034419>

**ParseBench: a document-understanding benchmark for agents.** Jerry also surfaced LlamaIndex's ParseBench (released ~a month ago) — designed to test whether frontier models can read real enterprise documents (dense tables, charts, layouts; finance/insurance/legal). His framing: there are tons of coding/reasoning benchmarks for agents, but document understanding is a *prerequisite for downstream knowledge work* and there's been almost no rigorous benchmarking. Worth pairing with @Timur_Yessenov's reply: the underrated eval is whether the parser preserves page provenance well enough for a human to audit the answer later. Webinar next Wednesday.
→ <https://x.com/jerryjliu0/status/2056516181948031343>
→ Site: <https://parsebench.ai>

## Feature Flags & Agent Workflows

**Matt Pocock floats feature-flag-first development as an alternative to PRs.** *"Put it on main, disabled by a flag → deploy with the rest of the system → unflag to selected users early → fix bugs → unflag to more → repeat. Feels like a perfect strategy to pair with agents."* 170K views, 174 replies — lots of "yep, we already do this" (@jay_kalia07 at Sprinto: ff → demo orgs → internal → SMB/MM/GA), and several sharp critiques that frame the agent angle better than the OP did:
- @MBelckadi: flags are a *blast-radius limiter*, but if the agent has write access to the flag system, "unflag to selected users" silently becomes "unflag to everyone" under ambiguous prompts — the *flag system itself* needs scope constraints on what an agent can toggle. Pocock agreed the toggle should be HITL-only.
- @dirkkok: PR review forces the reviewer to *infer intent from code*; feature flags flip it so you *observe consequences of behavior*. Better order of operations for agents because agents write faster than reviewers can infer.
- @AlperTheKing: agent-driven flags need hard expiry, named owner, blast-radius cap, automatic rollback, and a 1/10/50/100 ramp protocol.
- @maskaravivek (on the real-world tax): "cleaning up the codebase to get rid of these random feature flags is still a challenge."
→ <https://x.com/mattpocockuk/status/2056263621294866499>

## Supply Chain & Security

**Shai-Hulud round two: 639 compromised npm package versions overnight.** Socket flagged a fresh wave — 639 versions across 323 unique packages, including 558 versions across 279 @antv packages, most detected within ~6 minutes of publication. Theo's frustration with npm's apparent inaction lit up the thread (143K views, 1.4K likes): *"Hey, npm? You there? It's time to wake up and do literally anything at all about this."* Practical hardening tips surfaced in replies:
- @nazirtech01: `npm ci --ignore-scripts` + Renovate with a 7-day cooldown rule, specifically because *"Claude/Codex will happily install whatever a hallucinated package suggests."*
- @aphumphreys: enforce provenance attestations above some download threshold, plus simple heuristics (publisher just published N packages, new version has a postinstall script not present before, obfuscated JS in install script, network calls in setup, publish from a new env).
- @empyrealrum: a default minimum package age (even 12 hours) would catch a lot of this.
- @DarshanSays: pin known-good versions, verify `package-lock.json` SHA, follow socket.dev until the sweep clears.
→ Theo's thread: <https://x.com/theo/status/2056587236104380857>
→ Socket post (referenced): `socket.dev/blog/antv-packages…`

## Industry & Acquisitions

**swyx takes bets on Vercel and Supabase next.** Quoting an unattributed rumor list (Bun → Anthropic, Stainless → Anthropic, Astral → OpenAI, Mintlify → OpenAI), swyx asked who Vercel and Supabase end up with. Short thread, big implication — if half of those rumors are even directionally true, the inference-platform / dev-tools layer is consolidating fast under the two frontier labs.
→ <https://x.com/swyx/status/2056626964090466469>

## Discourse Corner

**Theo offers to fund a C&D over shadcn harassment.** Standalone drama: an account began publicly accusing shadcn (now at Vercel) and tagging Cloudflare/legal contacts, claiming the shadcn name couldn't be used "without his majesty's approval." Theo offered to put lawyers and costs behind shadcn if he wants to send a C&D. Replies were largely supportive of shadcn, with several pointing out that "shadcn" isn't a registered trademark (which both limits the C&D path and is a reason @0xkarasy suggested shadcn register it). Mostly noise, but a useful reminder that the personal-brand-as-OSS layer is increasingly load-bearing — and increasingly weaponizable.
→ <https://x.com/theo/status/2056543398258266244>

**Armin Ronacher: please ship `node:ffi`.** Brief but expressive: *"Can someone please travel back in time to ~2020 or something and ship node:ffi back then? Life is miserable right now :("* Matteo Collina replied that the lack of `node:ffi` is *exactly the reason* it didn't ship — i.e., the security/escaping nightmare is the unsolved problem, not an oversight. Context: Armin has been deep in pi.dev refactoring and running a small experiment using his own coding sessions as calibration data for a DeepSeek V4 Flash Q2 quant via antirez's ds4 imatrix machinery — no expectations, just curious.
→ <https://x.com/mitsuhiko/status/2056500041292898804>
→ DeepSeek calibration experiment: <https://x.com/mitsuhiko/status/2056115705515225221>
