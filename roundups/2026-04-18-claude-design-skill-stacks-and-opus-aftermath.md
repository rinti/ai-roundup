# Apr 18 Roundup: Claude Design Lands, Skill Stacks Harden, Opus 4.7 Settles In

A day after the Opus 4.7 / Codex Desktop double-launch, the conversation splinters: Anthropic Labs ships Claude Design; Matt Pocock publishes a full Claude Code skill lineup; LLMJunky drops a Codex Linux app; and the community starts asking "okay, so what workflow *actually* works with 4.7?"

## Agentic & Code AI

### Claude Design Launches — And Eats Your Files

[Claude Design](https://x.com/claudeai/status/2045156267690213649), a new Anthropic Labs product, lets you make prototypes, slides, and one-pagers by talking to Claude. It's powered by Opus 4.7 (Anthropic's "most capable vision model") and rolls out to Pro, Max, Team, and Enterprise.

Early user reports were mixed:

- Armin Ronacher (mitsuhiko): *"[Really, really impressed by Claude Design. Did not expect that.](https://x.com/mitsuhiko/status/2045211697720316033)"*
- Theo, less patiently: *"[Really liking Claude Design so far. Except for the fact that it just wiped out my project after burning 10% of my usage.](https://x.com/theo/status/2045310884717981987)"* He was on the $200/month tier with 2 threads, one of which lost all its files; he was already at 50% usage by the time the problem surfaced.
- Theo later: *"[Took a bit of effort but you can absolutely get good designs out of Claude Design. Hats off to the team, I dig this.](https://x.com/theo/status/2045314903293182252)"*

The design tool shipping one day after Opus 4.7 — paired with Theo's "files are gone" bug — reinforces the undercurrent complaint ("Claude desktop team does not use Claude desktop") from yesterday's launch cycle.

### Matt Pocock's Full Skill Lineup

Matt [published his evolving Claude Code skill roster](https://x.com/mattpocockuk/status/2045110469426323900):

- `/domain-model` — replaces `/grill-me`, integrates DDD concepts, adds docs & ADR generation during the discussion
- `/to-prd` — turn a discussion into a PRD
- `/to-issues` — convert a PRD into issues with blocking relationships
- `/github-triage` — state machine-based labelling system for existing issues
- `/tdd` — structured test-first loop

This is the culmination of his "DDD is the answer to AI-age code" thesis from yesterday. Key framing shift: *"['Improve the way you prompt the agent'](https://x.com/mattpocockuk/status/2044684143414460858) has become a red flag. Commanding the agent isn't the right approach — collaborate with it, talk to it, reach consensus together."* `/grill-me` (and now `/domain-model`) is the artifact of that philosophy; [his aihero post](https://www.aihero.dev/my-grill-me-skill-has-gone-viral) describes the skill as asking "question after question until you reach a shared understanding," typical session ~45 min.

DDD scope limit per Matt: *GOOD: Ubiquitous Language, Bounded Contexts, ADRs. BAD: Entities, Value Objects, Aggregates, Domain Events.* i.e., [use DDD to document the app without prescribing its shape](https://x.com/mattpocockuk/status/2045090172451057985).

### Matt Pocock Announces "Slopwatch" — Coding Agent Observability

In the same livestream, Matt [announced a new project](https://x.com/mattpocockuk/status/2045172490121416710): **slopwatch**, a coding-agent observability platform. The [pitch](https://x.com/mattpocockuk/status/2045137391250206745): *"Install a plugin which uploads all your session data to a dashboard so you can compare trends over time."*

The meta-constraint: he'll only work on it while recording YouTube, explicitly to produce "watch me work" longform content. Complements the independent pi-trace visualization project [ClementDelangue announced with HuggingFace](https://x.com/ClementDelangue/status/2044834155125424326) — agent trace sharing is clearly crystallizing as a category.

### LLMJunky Ships Codex App for Linux, Champions Multi-Agent Workflows

[Codex App v26.415.20818 for Linux](https://x.com/LLMJunky/status/2044895360137465943) is live on [GitHub](https://github.com/am-will/codex-app) — community port of the OpenAI desktop client. Computer Use plugin not available (Wayland limits accessibility; LLMJunky [confirmed the same constraint](https://x.com/LLMJunky/status/2044833040535302520) for his GPT-5.4 demo).

On workflow: LLMJunky [POV-posted](https://x.com/LLMJunky/status/2045282661682278837) "engineering my new saas with a team of 16 codex subagents." He's been [advocating for multi-agent workflows](https://x.com/LLMJunky/status/2044883554492883061) since Codex got subagent support — same core argument as Matt's skill system but aimed at the orchestration layer rather than the ceremony layer.

Adjacent: Ahmad Osman's [retweeted take](https://x.com/TheAhmadOsman/status/2044971568061718672): *"If you buy a GPU you can basically have unlimited tokens while all your data stays private."* The Codex-first partisan camp is hardening — someone in LLMJunky's thread: *"You don't need to learn 1000 skills or download clunky dashboards to get started."*

### Simon Willison: LLMs Are Now Good For Legacy Code Too

Simon [pushed back on a common belief](https://x.com/simonw/status/2045204429281067161): *"Is there still a widespread belief that LLMs and coding agents are good for greenfield development but don't help for maintaining large existing codebases? I don't think that idea holds up any more."*

Evidence from his own blog: [Datasette 1.0a28 release notes](https://simonwillison.net/2026/Apr/17/) include the note *"Most of the changes in this release were implemented using Claude Code and the newly released Claude Opus 4.7."* — this is not greenfield; Datasette is ~9 years old. Good counter-narrative to the `/domain-model` camp's concern that AI agents choke on unmodelled codebases.

### Endor Labs: Cursor Is The Most Secure Harness (And Opus 4.7 Widened The Lead)

[Endor Labs ran an independent evaluation](https://x.com/jediahkatz/status/2045238206862356561) of coding harnesses on functional and secure code output. Result: Cursor wins across the board, and Opus 4.7 widened the gap this week. Lauren (potetotes, Cursor) promoted it with *"[cursor agents help you go further and be more ambitious](https://x.com/potetotes/status/2045230254063808984)!"* Cursor also launched Opus 4.7 with [50% off](https://x.com/cursor_ai/status/2044785960899236341) for a limited time.

### LlamaIndex ParseBench: Content Faithfulness Deep-Dive

Jerry Liu followed up yesterday's Opus 4.7 OCR numbers with [ParseBench's content-faithfulness methodology](https://x.com/llama_index/status/2045145054772183128): *"Did the parser capture all the text, in order, without making things up?"* Three grading failure modes for every parse. Useful companion to the headline accuracy numbers — enterprise document pipelines fail on hallucinated content before they fail on accuracy.

### Opus 4.7 Tuning Tips Keep Coming

Two new ones since yesterday:

- **Missing thinking summaries?** Numman Ali [flagged](https://x.com/nummanali/status/2045244751557820619) that Claude Code doesn't show thinking summaries for Opus 4.7 by default — the fix is `claude --thinking-display summarized`.
- **Default effort bumped silently**: Matt [PSA'd](https://x.com/mattpocockuk/status/2044802839709372798) that Anthropic raised default Claude Code effort from *medium* to *xhigh*, which is going to burn more tokens than people expect. *"Switch off the defaults and experiment to see what effort level suits your work best."*

### Anthropic's Safety Layer Over-Triggering Bans

Theo [flagged](https://x.com/theo/status/2045317666383204423): *"Looks like the Anthropic 'safety layers' aren't just blocking prompts anymore, they're erroneously banning entire orgs."* No firsthand screenshots in-thread, but worth monitoring — there's a steady pattern of Opus 4.7's aggressive injection-detection complaining about its own harness (e.g. [Peter Szilagyi's observation](https://x.com/peter_szilagyi/status/2044802212811931962) carried over from yesterday).

### Side Note: Server-Side Templates Are Back

Armin Ronacher, on the slop-induced simplification trend: *"[Now with clankers the right way to build a website once again turns out to be server side templates.](https://x.com/mitsuhiko/status/2045260893756281264)"* Consistent with his ongoing anti-frontend-complexity arc and the `/domain-model` school's preference for rigid structure over over-engineered flexibility when agents are the main consumer.

### AI Engineer Summit: The Slop Cannons vs. The Grown-Ups

Recap of yesterday's now-posted AI.Engineer talks:

- **[Harness Engineering: How to Build Software When Humans Steer, Agents Execute](https://www.youtube.com/watch?v=am_oeAoUhew)** — @_lopopolo (OpenAI). The 5 → 50 → 5000 agents-at-once frontier.
- **[Building pi in a World of Slop](https://www.youtube.com/watch?v=RjfbvDXpFls)** — @badlogicgames. Today's agents as "Merchants of Learned Complexity"; 3 ways humans still add taste.
- **[State of the Claw](https://www.youtube.com/watch?v=zgNvts_2TUE)** — steipete's OpenClaw retrospective: 60x more security reports than typical OSS, fastest-growing OSS of all time.
- **[Marc Andreessen on Latent Space](https://www.youtube.com/watch?v=knx2wrILP1M)** — argues old Nvidia chips are getting *more* valuable with age. swyx: *"That has never happened in computing history."*

## Non-AI / Other

- **Armin on Rust**: *"[I love Rust, but not unconditionally](https://x.com/mitsuhiko/status/2045393872881176964). The language has some obvious warts (compilation model, lack of self borrows, compile times) and I wish we could be all more adult about it."* A rare in-community criticism.
- **[PyCon US 2026](https://simonwillison.net/2026/Apr/17/pycon-us-2026/)**: Long Beach, May 15–17. First West Coast PyCon US since Portland 2017; includes new AI and security tracks. Simon encouraging late Californian RSVPs.
- **steipete's TED talk** on OpenClaw happened this week in Vancouver — prepared in a week while working on OpenClaw and OpenAI simultaneously ([context](https://x.com/bilawalsidhu/status/2045291456630509709)).
- **T3 Code crossed 50k users**: Theo [reported](https://x.com/theo/status/2045240330484850841) the milestone. [Stats](https://x.com/theo/status/2045274970780287306): 53% arm Macs, ~25% Windows, Linux is 5× more popular than Intel Macs.
