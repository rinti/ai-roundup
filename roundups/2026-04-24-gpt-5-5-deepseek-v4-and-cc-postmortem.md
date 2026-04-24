# 2026-04-24 — GPT-5.5 lands, DeepSeek V4 undercuts everyone, and Claude Code ships a post-mortem

A real firehose day. OpenAI dropped GPT-5.5 plus a completely reworked Codex app, Anthropic published a post-mortem on the Claude Code quality slide that's been hovering over the last month, and then — just as Simon Willison was queuing up his Friday newsletter — DeepSeek V4 Preview shipped at prices that make everyone else look expensive. In the background: Codex Hooks going GA, Matt Pocock's Slack-based agent DAG, and Armin Ronacher quietly switching away from Claude Code.

## GPT-5.5 and the Codex app reboot

OpenAI [announced GPT-5.5](https://x.com/LLMJunky/status/2047377107085377983) mid-afternoon PT — now the default in ChatGPT and Codex. swyx did the [cleanest summary](https://x.com/swyx/status/2047378670986342685) of the numbers:

- **Context**: 400K in Codex, 1M in the API
- **API pricing**: $5/M input, $30/M output
- **Benchmarks**: 82.7% Terminal-Bench 2.0, 73.1% Expert-SWE (new internal eval), 58.6% SWE-Bench Pro, 84.9% GDPval, 98.0% Tau2-bench Telecom, 80.5% BixBench
- **First generation co-designed with GB200 and GB300 NVL72**
- **Codex improved its own inference speed 20%** — swyx: "lol"

Simon Willison had been [previewing it for weeks](https://x.com/simonw/status/2047386345245725008): "Had some great results from it running security reviews against code written using other models." He also [pointed out](https://x.com/simonw/status/2047406457302524397) that GPT-5.5 isn't in the regular API yet but is accessible via "the apparently approved-of Codex API backdoor."

The bigger story is the Codex *app* rebuild, which LLMJunky [retweeted from Andrew Ambrosino](https://x.com/ajambrosino/status/2047381565534322694):

- GPT-5.5
- Browser control
- Sheets & Slides
- Docs & PDFs
- OS-wide dictation
- Auto-review mode

swyx's [reaction](https://x.com/swyx/status/2047461691580195310): "Wow the codex app is unrecognizable… almost like it shouldve been Atlas the whole time." He also [argued](https://x.com/swyx/status/2047536499999346812) that "the most underrated part of today's launch is not GPT 5.5 at all" — it's the superapp consolidation. His Latent.Space writeup: [GPT 5.5 and OpenAI Codex Superapp](https://www.latent.space/p/gpt-55-codex).

Community early reads:
- [xeophon via steipete](https://x.com/xeophon/status/2047376944270860595): "IT DOES NOT CODE DEFENSIVELY AS MUCH!!! No more nested try/catch blocks that would only trigger for cosmic bitflips... Its code is so readable."
- [Noam Brown (OpenAI)](https://x.com/polynoamial/status/2047381460437635313): "I'm a manager at OpenAI, but with GPT-5.5 I'm a more effective IC than I've ever been. I can now write CUDA kernels like a pro."
- [davis7 via LLMJunky](https://x.com/davis7/status/2047414463595528467): hates the name (suggests 5.9), says use it on *low* reasoning — "99% of tasks don't need high."
- Codex [capacity paged at 1am](https://x.com/thsottiaux/status/2047235504933052856) — "shuffling capacity and bringing more compute online."

Theo put it all together in [his usual evening-video wrap-up](https://x.com/theo/status/2047424342447845537) with Ben, covering GPT-5.5, the Cursor/SpaceX meta, Kimi K2.6, GPT Image 2, and the Vercel hack.

## Claude Code post-mortem: the harness drifted, not the model

Boris Cherny (`@bcherny`) kicked off [a short thread](https://x.com/bcherny/status/2047375800945783056) announcing the post-mortem: [anthropic.com/engineering/april-23-postmortem](https://www.anthropic.com/engineering/april-23-postmortem). Three issues, all fixed in v2.1.116+, usage limits reset for all subscribers.

His own framing ([tweet 2](https://x.com/bcherny/status/2047376081767014703)):

> "In my time on the team, this has probably been the most complex investigation we've had. The root causes were not obvious, and there were many confounders."

And the tell for the next chapter ([tweet 3](https://x.com/bcherny/status/2047376371517964549)):

> "Separately, we've also heard reports of issues with Opus 4.7 in Claude Code. The team is working on those and we'll share more as we roll out improvements over the coming days."

So: the CC harness regression was root-caused and fixed; the Opus 4.7 feel-bad is a separate track still in progress.

The sharpest counter-take came from Mario Zechner (`@badlogicgames`), [retweeted by mitsuhiko](https://x.com/badlogicgames/status/2047373975706112450):

> "recommended reading. cool they are fixing things. but it's also a reason i switched away from CC. no control over the harness means having to wait for them to fix things. the model didn't change. the harness did."

This is the tension the whole Skills-vs-framework-vs-CLI debate has been circling — if the harness owns your feedback loop and you can't hot-patch it, a silent quality regression costs you a week before the vendor publishes a diagnosis. Worth holding onto the line for the next time the conversation turns up.

Context from [yesterday's pricing A/B](https://x.com/TheAmolAvasare/status/2046351019089948803): Anthropic ran a test on ~2% of *new* prosumer signups pulling Claude Code off the Pro plan. Existing Pro/Max subscribers weren't affected, but the perception damage was done. Fixing the quality slide and resetting limits is the right mop-up.

## DeepSeek V4 Preview: 1M context, open weights, price floor reset

[Dropped at 9pm Pacific on a Thursday](https://x.com/simonw/status/2047529388091359669). DeepSeek shipped:

- **DeepSeek-V4-Pro**: 1.6T total / 49B active params, "rivaling top closed-source models"
- **DeepSeek-V4-Flash**: 284B total / 13B active params
- **1M context** on both
- **Open weights** on HuggingFace
- Tech report: [huggingface.co/deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf)

Simon's [immediate notes](https://x.com/simonw/status/2047556978831208667) via [simonwillison.net/2026/Apr/24/deepseek-v4/](https://simonwillison.net/2026/Apr/24/deepseek-v4/): "the really big news is the pricing: both DeepSeek-V4-Flash and DeepSeek-V4-Pro are the cheapest models in their categories while benchmarking close to the frontier models from other providers."

His [pelican-on-a-bicycle](https://x.com/simonw/status/2047534175855759771) comparison ran both via OpenRouter — "These pelicans are kind of angry looking!"

Theo's [one-line take](https://x.com/theo/status/2047531119797490176): "Never taking vacation ever again."

If GPT-5.5 reset the *capability* ceiling this week, V4 reset the *cost floor*. Every coding agent that bills through model APIs is now looking at whether Flash-tier tasks route to V4-Flash by default.

## Codex Hooks GA + Matt Pocock's Slack-based agent DAG

Two agentic-workflow items that pair well:

**Codex Hooks hit stable**, per [LLMJunky's announcement](https://x.com/LLMJunky/status/2047539774706061543): pre/post tool-use hooks now receive `apply_patch` payloads, so you can "run deterministic scripts any time any file is edited by Codex." He's added 50+ hooks to [codex-marketplace.com](https://codex-marketplace.com). Companion Codex 0.124.0 notes: GPT-5.5 added, `ALT+,`/`ALT+.` keyboard shortcuts for reasoning level, Fast Service on by default for business/enterprise.

**Matt Pocock's full Slack-based flow** ([tweet](https://x.com/mattpocockuk/status/2047349861855482072)) is one of the cleanest concrete "what does my day look like" descriptions I've seen from a heavy user:

1. `/triage` in Slack → creates a discussion thread with agents for each issue needing triage
2. Resolve threads one-by-one until issues are marked ready
3. `/implement` → planning agent builds a DAG of PR branches with dependencies
4. Implementer agent works them all in parallel, each PR gets its own Slack thread
5. Re-running `/implement` recomputes the whole DAG to absorb new issues
6. Review and merge PRs while implementation continues
7. Periodic `/review` across the codebase for architectural drift

Driven by Sandcastle + Vercel's Chat SDK. "Slack, Claude Code, and the sandboxes are all swappable dependencies." His [framing tweet](https://x.com/mattpocockuk/status/2047351029537050916): "Nearly max concurrency and parallelism... Traditional review semantics... Collaborative UI for chatting to agents (thanks, Slack)."

The self-own of the day is also his ([tweet](https://x.com/mattpocockuk/status/2047200599234474017)):

> "spends the evening queuing up 15-20 tasks for AFK agents overnight / forgets to run the script that kicks them off / sigh."

## `/schedule` for Claude Code one-shots

Noah Zweben (Claude Code team, RT'd by trq212): [`/schedule` for one-time tasks](https://x.com/noahzweben/status/2047364243310416044). Examples:

- `/schedule cleanup this feature flag in 1 week`
- `/schedule give me a launch report for my feature in 2 days`

Available from the CLI or the Routines UI. This fills the gap between "run now" and "recurring routine" — useful for follow-up tasks you don't want to lose track of but don't need to check back on until X days pass.

## ParseBench on Kaggle

Jerry Liu [launched ParseBench](https://x.com/jerryjliu0/status/2047353082518831238) as a public Kaggle benchmark:

- 2,000 enterprise pages
- 167K+ test rules, 5 dimensions (tables/charts/content faithfulness/formatting/visual grounding)
- Benchmarks 14 methods including GPT-5 Mini, Gemini 3, Textract, and LlamaParse

He then [gave the sales pitch](https://x.com/jerryjliu0/status/2047353085350076627) for LlamaParse and [admitted](https://x.com/jerryjliu0/status/2047456270223815042) that Simon Willison's one-session browser port of LiteParse beat what his own team had been trying: "Shouldn't have doubted Claude. Claude knows best."

Simon's [LiteParse-in-browser](https://x.com/simonw/status/2047435105107656714) vibe-code is up at [simonw.github.io/liteparse](https://simonw.github.io/liteparse/) with a writeup on his blog.

## Cursor and SpaceX: the "are independent AI startups viable?" argument

swyx surfaced two analyses of yesterday's SpaceXAI ↔ Cursor IPO-deferred-acquisition deal:

- Russell Kaplan's [The Path Forward for AI Startups](https://x.com/swyx/status/2047359415309779354): is independent survival still possible, or must every AI startup eventually sell into a frontier lab?
- Kevin Kwok's [Cursor and SpaceX: In search of a complete loop](https://x.com/swyx/status/2047358601044357465): the AI-lab meta increasingly requires owning both product and model in coding — a complete feedback loop.

Both worth reading if you're building a coding tool. Matt Pocock's response is indirectly the strongest one: the harness/skills/marketplace layer is still a real place to own, as long as the labs keep shipping commodity models against which you can swap.

## Mitsuhiko's AGPL lol

Small but worth the laugh, from [Armin Ronacher](https://x.com/mitsuhiko/status/2047354951546888528):

> "Trololol. I had the agent start using ua-parser-js, then it read the AGPL license after adding it and backed out immediately. This is hilarious."

Follow-up ([tweet](https://x.com/mitsuhiko/status/2047390574064398484)): "I think the only thing agents are more afraid of than exceptions is GPL code." Either emergent good behavior or a really deep RLHF signal.

He also [noted](https://x.com/mitsuhiko/status/2047316490282537148): "Today is a hand writing code day. Codex is not vibing for me today." Sample size one, but from one of the more sober evaluators.

## Google Stitch open-sources DESIGN.md

LLMJunky [flagged](https://x.com/LLMJunky/status/2047462207999361422) that Stitch by Google open-sourced the draft spec for `DESIGN.md` — a cross-platform design-rules spec so agents "know exactly what a color is for and can even validate their choices against WCAG." The quote he surfaced: "Instead of guessing intent, agents know exactly what a color is for and can even validate their choices against WCAG accessibility rules."

If this gains traction, it's the same "portable schema" play `AGENTS.md` and `CLAUDE.md` each tried with varying success. Worth watching whether any of the frontier agent products adopt it before it dies on the vine.

## Tencent Hy3-Preview on OpenRouter

[OpenRouter announced](https://x.com/OpenRouter/status/2047356098764808289) Tencent Hunyuan's Hy3-Preview: 295B MoE (21B active), controllable reasoning effort, strong on coding agents, free on OpenRouter. A quieter drop than GPT-5.5 or DeepSeek V4, but another data point on the "large open MoE" trend.

## Non-agent sidebar

- **UAE "50% of government sectors will run on Agentic AI"** — simonw's [retort](https://x.com/simonw/status/2047314343956795779): "Within two years you'll be able to prompt inject an entire country."
- **LLMJunky spots a possible Codex mobile UI** — [screenshot via Ambrosino](https://x.com/LLMJunky/status/2047500283865866527). "Nice try" indeed.
- **OpenClaw got Azure credits** from GitHub's Secure Open Source Fund + MS for Startups, [per steipete](https://x.com/steipete/status/2047408665888432579). Also: 2026.4.22 makes gpt-image-2 the default OpenAI image path and picks up xAI image/TTS/STT/live transcription.
- **mattpocockuk on language and programming**: ["English has ALWAYS been the programming language that matters most."](https://x.com/mattpocockuk/status/2047260782505623731) and ["Software development is 'finding the right way to describe something that doesn't exist yet'. It's a language problem... And LLMs are GREAT at helping you with this."](https://x.com/mattpocockuk/status/2047252417025032318) Vintage Matt Pocock.
- **Matt Pocock rename watch**: [`/grill-me` → `/discuss`](https://x.com/mattpocockuk/status/2047291261975982357). Wise.
- **Cat Wu on Lenny's**: podcast [retweeted](https://x.com/_catwu/status/2047427510091366533) on how Claude Code maintains product velocity and the PM role in the AI era.

## Open questions

- How long before Opus 4.7 in Claude Code gets its own post-mortem? The Boris Cherny thread explicitly punts it to "coming days" — the delta between the harness fix landing and the model fix landing is the thing to track.
- Does GPT-5.5's "less defensive coding" hold up once it's running at scale in production harnesses, or do we get a wave of "AttributeError in prod" regressions?
- Is Matt Pocock's Slack-based DAG flow actually replicable for teams smaller than his, or does it need a bunch of infra (Sandcastle, Chat SDK, plumbing) that isn't OSS-practical yet?
- DeepSeek V4 Flash is the most interesting pricing event of the year so far. Do the US-based coding agents actually route fallback traffic to it, or does it become the de facto home-lab model and stay walled off from mainstream dev flows?
