# 2026-04-29 — GitHub Exodus Goes Public, Claude Code Ships 50+ Fixes & Codex-On-Every-Commit

## Mitchell Hashimoto: Ghostty is leaving GitHub

The "I'm so tired of this" rumblings from yesterday hardened into an actual exit. Mitchell Hashimoto published [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github) — and it's the most-shared dev essay of the day, RT'd by both [mitsuhiko](https://x.com/mitsuhiko) and [steipete](https://x.com/steipete).

> ["Ghostty is leaving GitHub. I'm GitHub user 1299, joined Feb 2008. I've visited GitHub almost every single day for over 18 years. It's never been a question for me where I'd put my projects: always GitHub. I'm super sad to say this, but its time to go."](https://x.com/mitchellh/status/2049213597419774026) — `@mitchellh`

The trigger was simple reliability data: Mitchell tracked GitHub outages for a month and marked nearly every day with an "X." Money quote from the post: *"This is no longer a place for serious work if it just blocks you out for hours per day, every day."* He's in talks with multiple replacement providers (commercial and FOSS), Ghostty's GitHub URL stays as a read-only mirror, and his personal projects stay put for now — only Ghostty is moving. Notably he calls out that the issues/PRs/Actions infra matters more than git itself.

## Armin Ronacher's "before GitHub" obituary

Mitchell's post pushed [@mitsuhiko](https://x.com/mitsuhiko/status/2049236229124755844) to finally publish [a piece he'd been drafting since the Zig→Codeberg move](https://lucumr.pocoo.org/2026/4/28/before-github/):

> ["The post by @mitchellh gave me the final push to finish my GitHub 'obituary'. I originally started writing it after the Zig to Codeberg move. It's just a retelling of how I remember OpenSource pre GitHub and what it gave us."](https://x.com/mitsuhiko/status/2049236229124755844) — `@mitsuhiko`

Armin's argument is sharper than the typical GitHub-bashing thread: GitHub *accidentally* became the archive of open source by centralizing activity, and as projects scatter to alternatives that archival function disappears with them. He worries we are about to recreate "the old web of broken tarball links and abandoned Trac instances" — and that the trust signals GitHub provided (which made the explosion of micro-dependencies tolerable) have no successor. Distributed VCS, he notes, paradoxically *enabled* the centralization.

The combined Hashimoto + Ronacher essays are setting up what looks like the dev-narrative of Q2 2026: the platform-flight story has gone from grumbling to roadmap.

Side-note from steipete that helps explain *why* the agent-tooling crowd is feeling this acutely: ["I'm again rate limited on GitHub, but codex just opened the browser and clicks around GitHub as workaround"](https://x.com/steipete/status/2049035044702843053) and follow-up ["Will experiment with brunoborges/ghx since I constantly run into GitHub rate limit issues. ... Agents just HAMMER their API."](https://x.com/steipete/status/2049244352057094645). The agent era is genuinely breaking GitHub's API quotas.

## Anthropic ships 50+ Claude Code fixes — recovery posture

After two weeks of Theo-level public souring, Anthropic answered with a release thread. [@ClaudeDevs](https://x.com/ClaudeDevs/status/2049228273813750030) (RT'd by [@bcherny](https://x.com/bcherny)):

> "In the last four Claude Code CLI releases, we've shipped 50+ stability and performance fixes. Faster resume, stable auth, lower memory, fewer hangs."

Thariq adds detail on what's coming next ([@trq212](https://x.com/trq212/status/2049234228290961690)):

> "we're doing a lot more of this, hunting down some of the most annoying bugs in Claude Code — let me know if you have any white whales"

Two specifics from his replies:
- ["a big part of this is we're working on making the no flicker renderer excellent so we can ship it as the default renderer"](https://x.com/trq212/status/2049234229926695188)
- ["my white whale is when CC sometimes looks like it hangs during big file writes, I think we found it 😭"](https://x.com/trq212/status/2049252080892973563) — i.e. the long-standing "is it frozen or just writing?" mystery may finally be fixed

Read this against yesterday's Theo blowup: Anthropic's response is "ship the unsexy reliability fixes and stop talking about pricing." Whether the user-perception flywheel actually reverses is the open question.

## Steipete: codex now reviews every commit landing on main

Today's most ambitious agent-pattern of the day, deployed live in OpenClaw:

> ["codex now runs on each commit we land, reviews it - and if a booboo is found, a new codex spins up and (if still relevant) makes a PR for the fix. Then a review agent spins up. If an issue is found, another agent will fix the issues. (up to 5 loops)"](https://x.com/steipete/status/2049356949523730699) — `@steipete`

Earlier that night, the proof point: ["I'm now spinning up a codex instance on every commit landing on main, looking for booboos (regressions, security issues). It's live for 10 min and already found one of mine."](https://x.com/steipete/status/2049290741013262522)

This is the natural endgame of "AFK agents" — closing the loop end-to-end so reviews land as PRs without a human starting them. Up to 5 loops of fix-then-review-the-fix. Repo: `github.com/openclaw/clawsweeper`.

Adjacent OpenClaw perf win: [contributor `@shakker` shipped](https://x.com/shakker/status/2049011134426906635) a refactor where "OpenClaw's first output dropped from 1s to 43ms. Plugin bootstrap went from 265ms to 8ms ... For most of OpenClaw's history, the plugin system was carrying core, instead of the other way around."

## Cursor 3 `/multitask` — four frontier models, one prompt

[@potetotes](https://x.com/potetotes/status/2049203366673400213) shipping the meme of the week:

> "use the best models for the task in cursor 3! try /multitask"

Quoted Kieran Klaassen: ["Yes, running Multitask is amazing, I can now use Opus 4.7, Composer 2, Gemini 3.1 Pro and GPT-5.5 At the SameTIMEeE??"](https://x.com/kieranklaassen/status/2049202285335679146)

Follow-up ([@potetotes](https://x.com/potetotes/status/2049314798819758111)): *"in the next version of Cursor 3, you can multitask with a horde of goblins"* — the goblin meme has fully eaten Cursor's marketing. Cursor also pushed a new [Endor Labs benchmark](https://x.com/jediahkatz/status/2049212952381731188): "Cursor's optimized harness once again coming out on top" for correctness + security across coding agents.

Counter-vibe from steipete's camp ([RT'd from @dhruvtwt_](https://x.com/dhruvtwt_/status/2048840934050419025)): *"codex has gotten insanely polished over the past few weeks and gpt-5.5 just gets things done. wild that people still think claude code with opus-4.7 is better."* Three-way harness war: Cursor / Codex / Claude Code each picking up devotees in different camps.

## Warp goes open-source

Quietly big news, surfaced through Theo's "This is good!" RT: [Warp is now open-source.](https://x.com/warpdotdev/status/2049153766977421444) Worth watching how this changes the AI-terminal landscape — Warp had been the default "AI-native terminal" recommendation for the last year and now competing efforts (and forks) get an obvious base.

## mattpocockuk's `/skills` repo: top of GitHub trending

[Matt's skills repo](https://github.com/mattpocock/skills) is still #1 GitHub trending. Today's update: [skills now work with any issue tracker](https://x.com/mattpocockuk/status/2049155323047407869) — GitHub, Jira, Linear, or local files — via `npx skills@latest add mattpocock/skills` then `/setup-matt-pocock-skills`. He's also [renaming `/domain-model`](https://x.com/mattpocockuk/status/2049052205655699846) to something like `/grill-with-docs` because "it's a drop-in replacement for /grill-me that's better when you're working with code." And [livestreaming videos tomorrow Theo-style](https://x.com/mattpocockuk/status/2049223959074250806).

## LlamaIndex drops ParseBench

[@jerryjliu0](https://x.com/jerryjliu0/status/2049189752159764784) launches [ParseBench](https://www.kaggle.com/benchmarks/llamaindex-org/parsebench) — a doc-OCR benchmark for AI agents on Kaggle. The pitch ([thread](https://x.com/llama_index/status/2049139409316946011)):

> "Bold. Italics. Superscripts. Strikethroughs. The visual cues humans rely on... existing OCR benchmarks completely ignore. '$199' struck through next to '$149' isn't decoration. It's the meaning."

2k verified pages of real enterprise documents. The framing — that downstream agents semantically *need* the formatting cues, not just the raw text — is the part that's worth borrowing.

## LLMJunky's Goodhart's-law-on-leaderboards rant

Echoes simonw's recurring "vibes are real" point but lands hardest:

> ["Goodhart's law has eaten model leaderboards. The moment a benchmark becomes the target, training optimizes for the metric instead of the thing we actually care about: which is whether engineers ship better code with it. 'Vibes' sounds like a meme, but the truth is, its the actual criterion most engineers use to decide which model stays in their lineup. The model you keep open in a tab isn't necessarily the one topping a leaderboard."](https://x.com/LLMJunky/status/2049197846793220265) — `@LLMJunky`

## Mitsuhiko's agent-as-accessibility-engineer micro-essay

Buried in his timeline, but maybe the clearest articulation of agent value beyond code-completion this week:

> ["My oldest showed his game to his friends who said it's too hard. Instead of making it easier I was wondering how hard it is to have the agent build a really good visual assist mode and a practice mode where it respawns. I love that about agents."](https://x.com/mitsuhiko/status/2049036230273179948) — `@mitsuhiko`

The point: agents make difficulty-tuning a *feature work* problem instead of a *design tradeoff* — you can ship both modes for free.

---

## Other notable

- **Theo's new pinned video — ["Picking 'what to learn' has never been harder"](https://x.com/theo/status/2049209629499150596)** — career-positioning take in a fast-moving stack. He's "really, really proud of this video." Worth a watch if you're recalibrating.
- **Theo on xAI**: ["I legitimately believe xAI might have a crazy comeback"](https://x.com/theo/status/2049059831219384827) — no elaboration but interesting given Theo's recent Anthropic disillusionment arc.
- **simonw on VibeVoice STT**: [follow-up uv one-liner](https://x.com/simonw/status/2048913350860685395) for running the 5.71GB 4-bit MLX conversion locally — `uv run --with mlx-audio python -m mlx_audio.stt.generate --model mlx-community/VibeVoice-ASR-4bit ...` — about 9 mins to transcribe an hour of audio on M5.
- **karpathy RT'd talkie**: ["Vintage models should help us to understand how LMs generalize (e.g., can we teach talkie to code?)"](https://x.com/status_effects/status/2048878495539843211) — note: project is co-authored by Alec Radford and David Duvenaud. The Hassabis-style framing: could a 1911-cutoff model independently re-derive General Relativity?
- **leerob's three-rule perf primer**: [How to improve any software system](https://x.com/leerob/status/2049126177210499387): (1) do less work, (2) do the work faster, (3) do it in parallel. With concrete DB and web-infra examples in the thread.
- **Latent Space pod — Applied Intuition deep-dive**: [The $15B Physical AI company](https://x.com/latentspacepod/status/2049141596742975819) — 4 stack rewrites, end-to-end RL, neural sim, L4 driverless trucks in Japan.

## Off-topic but flagged

**Theo's Mercury love letter**: [unpaid hype tweet](https://x.com/theo/status/2049200440039088569) about the banking startup, with the kicker that [Mercury just got OCC conditional approval to become an actual chartered bank](https://x.com/mercury/status/2048831790882943233). Not AI-relevant but a Theo moment of the day.
