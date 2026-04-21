# 2026-04-21 — Lovable's "public" confusion, Codex Side Quests & Kimi K2.6

## Lovable drama: public projects ≠ data breach

Polymarket and others framed it as a Lovable "breach" — AI chat histories, source code, and database credentials allegedly exposed. Lovable responded that no breach occurred: "public" projects had chat messages visible by design, and the documentation made that unclear. They've now removed chat visibility from public projects and added a new `published` tier (user-facing product) vs `public` (Lovable dashboard, inspirable by others).

- LLMJunky's reaction to the initial Polymarket post: [all your secrets just got leaked](https://x.com/LLMJunky/status/2046269574518063559)
- Lovable's original statement (RT'd by Theo): [Lovable was not hacked](https://x.com/Lovable/status/2046270357674299623)
- Theo siding with Lovable: [Lovable was not hacked](https://x.com/theo/status/2046275011665690714) and the follow-up defending the public/published distinction: [drama massively overblown](https://x.com/theo/status/2046319899983651067) — his read is that devs would understand "private → public" means "the chat is public", but non-devs on vibe-coding platforms wouldn't.
- Lovable's second, more complete statement: [Lovable's apology / timeline](https://x.com/Lovable/status/2046301006795870346) — early on they wanted public projects to be a "browse GitHub / Dribbble" style inspiration gallery, hence chat being visible.

Context for the day: RLS is a mistake — Armin Ronacher amplified [David Cramer's line](https://x.com/mitsuhiko/status/2046289668518633967) that Row-Level Security "was a mistake in Firebase, a mistake in Supabase, and will be a mistake in the next product too. You can't expose that complexity to less technical users." Directly relevant to the vibe-coding platform threat model.

## Codex 0.122.0: Side Quests

LLMJunky announced the [Codex 0.122.0 release](https://x.com/LLMJunky/status/2046350440875364564) with one headline feature:

- `/side` — creates an ephemeral fork that doesn't interfere with the main agent's task. You can have a side conversation mid-task and `ESC` back to the main thread.
- `/plan` mode — paired with guidance to **not** reset context between plan and implementation. LLMJunky's note: ["the model doesn't degrade anyway, you're just throwing away relevant context for no great reason"](https://x.com/LLMJunky/status/2046352937991991748).

The launch day also ended Codex's 100% uptime streak: a ~10-minute outage (mitigated by Tibo at OpenAI with a rate-limit reset as the apology). LLMJunky's victory lap: ["told you. hope you used some tokens"](https://x.com/LLMJunky/status/2046372864270500200) referencing [Tibo's incident tweet](https://x.com/thsottiaux/status/2046367145588916687).

## Kimi K2.6: open-source coding SOTA

Quoted by both [LLMJunky](https://x.com/LLMJunky/status/2046431243701506059) ("alright who's excited for composer-3") and [Theo](https://x.com/theo/status/2046322018824446054) asking for real-world feedback. Kimi K2.6 claims:

- Open-source SOTA: HLE w/ tools 54.0, SWE-Bench Pro 58.6, SWE-bench Multilingual 76.7, BrowseComp 83.2, Toolathlon 50.0.
- Long-horizon coding: **4,000+ tool calls over 12 hours of continuous execution**.

LLMJunky's framing — that this is the kind of open model that pressures Cursor to ship "composer-3" — tracks with the pattern of Cursor's composer line benchmarking against the open frontier.

## Claude Opus getting stricter (or just worse on infra)

Two threads worth pairing:

1. [Theo](https://x.com/theo/status/2046349336032776700): "I can't even do basic cryptographic challenges with Opus. I get that they're trying to limit it for safety but this is insane." Follow-up: [even Opus 4.6 has been hit](https://x.com/theo/status/2046350187887558909), and [the puzzle is literally just this pdf](https://x.com/theo/status/2046350215951663132).
2. Theo RT'd [@0xSero](https://x.com/0xSero/status/2046358473227853829) making the opposite point for self-hosting: "Almost all the issues I've seen people experience when self-hosting [Opus] is related to inference infra, settings, or harnesses. There's so much room for compounding errors, Nvidia is what they bench on and give to their insiders."

So: stricter refusals on Anthropic-hosted, and self-hosted regressions usually aren't the model.

## Simon Willison — more Opus 4.7 token data

Simon continues tracking the 4.6 → 4.7 token cost shift. New data points:

- [PDFs: 1.08x multiplier](https://x.com/simonw/status/2046224286474764790) (15MB, 30-page text-heavy PDF → 60,934 tokens on 4.7 vs 56,482 on 4.6). Significantly lower than the 1.46x he measured for raw text.
- [Images are effectively the same cost at the same resolution](https://x.com/simonw/status/2046065935786938378). The earlier "3x" figure was entirely because 4.7 can handle higher resolutions — at 682x318 it's 314 vs 310 tokens. Essentially: pay more for more resolution, not more per pixel.

He also [community-noted his own tweet](https://x.com/simonw/status/2046069532402610498) to clarify the image point, and published a [Datasette → Google Sheets TIL](https://x.com/simonw/status/2046059677633618123).

Bonus Qwen reasoning-trace gem he flagged from Qwen3.6-Max-Preview: ["a harmonious interplay of form and space, where each element finds its rightful place within the visual narrative. The pelican emerges as a central figure..."](https://x.com/simonw/status/2046239233371988460) — pelican bench reasoning has gone full poet.

## Context.ai / Delve self-audit continues

Armin's thread from yesterday continues to have legs. [Gergely Orosz confirmed](https://x.com/GergelyOrosz/status/2046220165080109201) that Context.ai was "audited" by Delve for SOC 2, and that `trust.context.ai` used to redirect to Delve themselves — now deleted. Armin's [original jab](https://x.com/mitsuhiko/status/2046113318000079198): "Of course it was SOC 2 Type II compliant." The pattern: SOC 2 compliance sold by compliance-automation platforms ≠ meaningful security review.

## Codex x Sky acquisition — swyx on "real" computer use

[swyx's take](https://x.com/swyx/status/2046362691606855700): the Codex x [@skybysoftware](https://x.com/skybysoftware) acquisition may be one of OpenAI's best deals in the last year. He's been waiting for "real" computer use since Romain Huet demoed ChatGPT App with 4o Vision at AIEWF 2024, and only now is it usable — referencing OpenAI's expansion of Codex memories.

Elsewhere swyx is at [AIE Miami](https://x.com/swyx/status/2046216133796143117) (~75% East Coast AI engineers, livestreamed on YouTube), where [@dexhorthy is quoting the Z/L continuum](https://x.com/swyx/status/2046222691418439689) from Alex Volkov's recent article — the frame (zero-shot ↔ long-horizon tradeoffs for agents) catching on in talks.

## Tim Cook out at Apple

Not AI-specific, but the timeline leaned into it:

- [Theo](https://x.com/theo/status/2046334201717231916): "Oh boy" on [Gurman's breaking news](https://x.com/markgurman/status/2046325832885432762) — Ternus to CEO.
- [sama](https://x.com/sama/status/2046330825265086712): "Tim Cook is a legend."
- [ajambrosino RT'd by LLMJunky](https://x.com/ajambrosino/status/2046391297133732278): "excited to welcome Tim Cook to the Codex team" — and a [Codex Avatars leak](https://x.com/testingcatalog/status/2046366630528143827) with 8 pre-made draggable desktop overlays and custom avatar support.

## Matt Pocock — `/grill-me` viral, Slopwatch build series

Pocock's [`/grill-me` skill has gone viral](https://www.aihero.dev/my-grill-me-skill-has-gone-viral). He's now leaning on the pattern for document generation: [split into two phases](https://x.com/mattpocockuk/status/2046150634756272527) — (1) a loose grilling session where you align on what you want (`/grill-me`), then (2) the actual creation (`/create-doc`). Going straight to `/create-doc` makes the LLM too eager to produce output and it skips crucial questions.

Pushback acknowledgement: ["For anyone annoyed by /grill-me asking them 200 questions: remember that you are the one in charge. Use the questions as a prompt to provide more information. It's a conversation, not an exam."](https://x.com/mattpocockuk/status/2046311556263371141)

He's also kicking off [Slopwatch](https://x.com/mattpocockuk/status/2046178010538078444) — filming an app being built from the ground up to teach AI coding tooling in practice, starting with `/grill-me` on language choice (Rust/Go vs Node/Bun).

## Steipete — CLI releases + the subsidy thesis

Shipping day at steipete labs:

- [wacli 0.6.0](https://x.com/steipete/status/2046375922031321401) — WhatsApp CLI security/reliability sweep: SQLite store hardening, sanitized search, sync/media panic recovery, `WACLI_STORE_DIR`.
- [gog 0.13](https://x.com/steipete/status/2046356596683411924) — Gmail forwarding with notes + attachments, autoreplies, full-body search, Markdown → Google Docs uploads, rendered Slides thumbnails, Sheets chart editing, commenter-only Drive shares, safer no-send controls.
- [MCPorter 0.9.0](https://x.com/steipete/status/2046192869497622529) — per-server tool filtering, sturdier stdio shutdowns, Windows OAuth URL quoting fix, schema-declared string coercion.
- [Tencent/QClaw collaboration](https://x.com/steipete/status/2046259696722465113) — evals to improve OpenClaw harness performance, fixes flowing back upstream.

His thought of the day: [["These highly subsidized subs are out there to get your code to improve their models. If you use AI for things useful to you, but not code, you are not valuable to them."](https://x.com/steipete/status/2046199257430888878)] — framing coding-assistant subs as an RLHF data funnel, not just a product.

## Mitchell Hashimoto back on Go

Quoted by Armin: [Mitchell's note](https://x.com/mitchellh/status/2046319366489407803) that `go doc` and `gopls` are "like agent superpowers" — he finds agents shockingly productive out of the box on Go vs other ecosystems including JS, and recommends Go + Zig as a stack. Another data point in the "typed, tooled languages ≫ JS for agentic dev" meta that's been running the past few months.

## Other things worth a click

- [Cowork live artifacts](https://x.com/claudeai/status/2046328619249684989) (RT'd by bcherny) — Claude dashboards/trackers connected to your apps and files, refreshing with current data.
- [Potetotes on Cursor CLI](https://x.com/potetotes/status/2046326217427870089) — "best harness in the terminal" is getting love; Cursor shipped CLI QoL improvements including `/debug` for reproducing tricky bugs.
- [Jerry Liu / LlamaIndex](https://x.com/jerryjliu0/status/2046389475077652527) — revamped site; the core mission is now explicitly "using AI to solve document OCR" across LlamaParse (commercial), LiteParse, ParseBench (OSS).
- [Theo on OpenCode](https://x.com/theo/status/2046322831588311495) — "Just installed the OpenCode update and immediately got flashbanged wtf??" i.e. default light mode. [LLMJunky clapped back](https://x.com/LLMJunky/status/2046331841406247013): "i will not stand for this light mode slander."
- [Jess Frazelle's tech-podcast-fatigue post](https://x.com/jessfraz/status/2046390266261831930) RT'd by Theo — naming Jarred Sumner, Charlie Marsh, Armin, DHH as the engineers she'd actually want to hear from.
