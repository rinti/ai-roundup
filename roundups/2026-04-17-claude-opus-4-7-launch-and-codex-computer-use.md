# Apr 17 Roundup: Claude Opus 4.7 Launches Alongside Codex Computer Use

Anthropic and OpenAI shipped on the same day. Opus 4.7 is the dominant story across every feed, Codex Desktop with computer use is the counter-punch, and a local Qwen model quietly embarrassed both on a creative benchmark.

## Agentic & Code AI

### Claude Opus 4.7: What Actually Changed

Anthropic rolled out Opus 4.7 in Claude Code, Cursor, and via API. Boris Cherny (Claude Code lead) framed it as "more agentic, more precise, and a lot better at long-running work," with cross-session context continuity and better handling of ambiguity.

Boris's [prompting-tips thread](https://x.com/bcherny/status/2044847848035156457) is the best one-stop for how to actually use the new model:

- **Auto mode**: A safer alternative to `--dangerously-skip-permissions`. A classifier model decides whether a given bash/MCP command is safe to auto-approve. Available now for Max/Teams/Enterprise. Shift-tab to enter. Enables parallelizing multiple Claudes without babysitting.
- **`/fewer-permission-prompts`** skill scans session history to recommend commands to add to your allowlist.
- **Recaps** (shipped earlier in the week): short summaries of what the agent did + what's next for when you return to a long-running session.
- **Focus mode** (`/focus`): hides intermediate work, shows only the final result. Boris says the model is now trustworthy enough to skim.
- **Effort levels replace thinking budgets**: adaptive thinking with new `xhigh` tier between `high` and `max`. `/effort` to configure; Boris personally uses xhigh by default, max for hardest tasks.
- **Verification is more important than ever**: backend → Claude starts your server; frontend → use the Chromium extension; desktop → computer use. Boris's personal `/go` skill runs end-to-end tests, then `/simplify`, then opens a PR.

Thariq (Anthropic PM) also [shipped a guide](https://x.com/trq212/status/2044833566471970926) with his own prompting flow.

Rate limits were [reset and bumped](https://x.com/bcherny/status/2044839936235553167) for subscribers since 4.7 uses more thinking tokens. Users are already [reporting fast quota burn](https://x.com/maxreturns_/status/2044862049125212200) — 15% consumed in 2 hours.

### Theo's Live-Testing Verdict: Planning Much Better, Execution Still Wobbly

Theo [live-dumped his thoughts](https://x.com/theo/status/2044891578695811311) as he tested. Headline: "liking the plans it writes significantly more than expected." His large-codebase modernization bench ran for 32 minutes and put together a reasonable migration plan — but missed the Next.js Link component changes and at one point "modernized" by downgrading to a Next.js version from over a year ago.

Multiple replies echoed the split verdict: plans are noticeably better, but the model can be lazy in execution, drift, or take "sensible-looking shortcuts that aren't." One rep from [@filligerr](https://x.com/filligerr/status/2044907042717282389): "adaptive thinking doesn't seem to work for me at all… way too eager to complete a task immediately, instead of doing it properly."

Theo's [one-line summary](https://x.com/theo/status/2045027987108835544) the next morning: "Is Opus 4.7 the best model from Anthropic? No, that's Mythos. It's the best model released today I guess?"

### Simon Willison: A 21GB Local Qwen Beat Opus 4.7 on the Pelican Test

Simon Willison ran his pelican-riding-a-bicycle SVG benchmark and [reported a "shocking result"](https://x.com/simonw/status/2044830134885306701): Qwen 3.6-35B-A3B running locally on his laptop produced a better pelican than Opus 4.7. He also ran the previously-secret flamingo-on-a-unicycle test to kill benchmaxxing accusations — Qwen still won (with a bowtie and a cigarette, no less).

- The local model is ~21GB (Q8_K_XL quant), runs fine on a 32GB machine.
- [Blog post with images](https://simonwillison.net/2026/Apr/16/qwen-beats-opus/).
- Best reply in the thread: *"benchmark a model on vibes long enough, the weights catch up."*

### OpenAI Counter-Punch: Codex Desktop + Computer Use

OpenAI dropped a massive Codex update the same afternoon. [LLMJunky's demo](https://x.com/LLMJunky/status/2044826617776570620) shows GPT 5.4 Computer Use on Linux controlling arbitrary apps via accessibility tools. The full Codex update per Anthropic-alum Tibo Sottiaux (now OpenAI): "Computer use, in-app browser, image generation and editing, 90+ new plugins, multi-terminal, SSH into devboxes, thread automations, rich document editing."

Peter Steinberger retweeted [AriX](https://x.com/AriX/status/2044847117043388444): "This is the first time I've ever seen an LLM operate a GUI as fast as a person, and it's surreal."

Windows/Linux support is the limiting factor — Wayland in particular makes accessibility fragile. Mac is the best experience today. LLMJunky also [flagged the sensitive-content disclaimer](https://x.com/LLMJunky/status/2044857654854520889) X auto-applied to the Codex desktop app screenshot (meme fuel), and a [Linux version](https://x.com/LLMJunky/status/2044895360137465943) shortly after.

### ParseBench: Opus 4.7 Improves on Documents But Stays Expensive

Jerry Liu (LlamaIndex) [ran Opus 4.7 through ParseBench](https://x.com/jerryjliu0/status/2044902620746363016), their OCR/document-understanding benchmark:

- General improvement over Opus 4.6; charts jumped from **13.5% → 55.8%** (+42.3pp).
- Still trails Gemini 3 Flash on tables.
- Wins on content faithfulness across all techniques.
- **~7¢ per page** — vs LlamaParse agentic at ~1.25¢ and cost-effective at ~0.4¢.
- Anthropic's headline "80.6% on Document Reasoning (up from 57.1%)" doesn't translate one-for-one to "parsing documents for agents" — LlamaParse Agentic still leads at 84.9% overall.
- [Github repo](https://github.com/run-llama/ParseBench).

Takeaway from replies: Opus 4.7 is "the best OCR model you can't afford to run at scale" — great for high-value pages, still needs model routing for enterprise-scale extraction.

### Anthropic Launches @ClaudeDevs + Dedicated "What's New" Docs

Thariq (Anthropic) [acknowledged](https://x.com/trq212/status/2044893583308918787) the long-standing complaint that Claude Code ships so fast that daily users miss half the changes. Three fixes:

1. New [@ClaudeDevs](https://x.com/ClaudeDevs) X account — the official channel for changelogs, API releases, deep dives. Confirmed to be interactive (Q&A welcome).
2. Curated ["What's New" section in docs](https://code.claude.com/docs/en/what-s-new) as a weekly digest.
3. Monthly "what we shipped" webinars.

Several commenters asked for an RSS feed of @ClaudeDevs so their agents can monitor it.

### Opus 4.7 in Cursor: Cross-Harness Validation

Cursor [added Opus 4.7](https://x.com/cursor_ai/status/2044785960899236341) the same day, calling it "impressively autonomous and more creative in its reasoning." Lee Robinson (Vercel) [put it well](https://x.com/leerob/status/2044813242455740905): "I really like this model for general agentic work outside coding. The personality/soul is still underrated."

Lauren (potetotes) [observed](https://x.com/potetotes/status/2044824938633466228) that model-routing is the real unlock: "the best part about cursor is using all the models. many of my skills and automations specify specific models for specific types of tasks."

### Matt Pocock: DDD Is the Answer to AI-Age Code

Matt Pocock [argued](https://x.com/mattpocockuk/status/2044723788743360833) that Domain-Driven Design addresses the three core AI-coding problems:

- Model not doing what you want? → Shared language.
- Can't navigate a massive codebase? → Bounded contexts with a global mapping.
- Don't know why a decision was made? → ADRs.

His expansion: *"DDD is essentially the practice of turning language into software. That's the central problem of the AI age."* Some pushback on whether DDD itself becomes slop-multiplier if applied heavily, with Matt noting any AI-aware implementation must be "super-light." Replies from teams already doing de-facto DDD (glossary.md, bounded-context repo maps, materialized ADR snapshots) were positive. Good companion reading to the Claude Code session-management guides.

### Harness Engineering vs. Slow Down: The AI Engineer Split

swyx [framed the current fault-line](https://x.com/swyx/status/2044939001405350235) in AI engineering with two AI.Engineer talks posted today:

- **[Harness Engineering: How to Build Software When Humans Steer, Agents Execute](https://piped.video/watch?v=am_oeAoU)** — @_lopopolo (OpenAI), exploring scaling from 5 → 50 → 5000 agents working 24/7.
- **[Building pi in a World of Slop](https://piped.video/watch?v=RjfbvDXp)** — @badlogicgames, arguing today's agents are still "Merchants of Learned Complexity" and giving 3 specific ways humans still add taste/value: slow down and read the code.

swyx: *"putting the slop cannons on talks day 1 and the grown ups on talks day 2 is working out pretty well for faithfully representing the most impt split in AI engineering right now."*

### pi 0.67.4 Adds Opus 4.7 Support

Armin Ronacher (mitsuhiko) [shipped pi 0.67.4](https://x.com/mitsuhiko/status/2044808515454218730) which connects to Opus 4.7 via API prices or Claude subscription overages. Caveat: Anthropic subscriptions don't allow other harnesses to use the model under the base quota — everything routes to extra usage. Armin: "I still hope they get around to find something that makes it work for pi, but I'm not expecting anything."

Several users asking about the new `xhigh` thinking level mapping and whether the "after provider response" hook (which he flagged as "a HUGE deal" in replies) unlocks new workflows.

### Dogfooding Critique of the Day

Andy Fang's [viral quote](https://x.com/andyfang/status/2045005453256778213), retweeted by Theo: *"Claude desktop team does not use Claude desktop. You can feel it in how buggy the product is. Same with codex CLI."* — aimed squarely at both vendors on the day of their biggest launches. Dovetails with several complaints in Thariq's thread about the Code app being unstable (CLI 10-20GB memory blowups, iOS app issues).

### Lee Robinson's Coding Agents Course

Lee [published a free 30-minute course](https://x.com/leerob/status/2044540647298761025) on coding agents (rewritten three times, per [his admission](https://x.com/leerob/status/2044889315059064915)). Covers planning features, fixing bugs, reviewing/testing code end-to-end. Good starter resource to point new devs at.

## Odds & Ends

- **ClawCon Michigan**: steipete [reported ~2000 attendees](https://x.com/steipete/status/2044935917417205796) at the OpenClaw community conference.
- **"Claude-mas" meme**: Several people, including bcherny via RT, used "Merry Claude-mas!" as shorthand for the Opus 4.7 launch energy.
- **Prompt-injection self-own**: Peter Szilagyi [noted](https://x.com/peter_szilagyi/status/2044802212811931962) Opus 4.7 immediately started complaining that it was being prompt-injected — "by what appears to be Anthropic's own harness."
- **Codex-vs-Claude partisanship watch**: LLMJunky [RT'd](https://x.com/LLMJunky/status/2044900349924700182) a "I only use Codex these days, it's superior" take. The two camps are hardening.
- **Armin Ronacher's slop forecast** (quoted by antirez): *"The folks who should push for democratization of AI tools are too focused on denying AI itself. Frontier models available only to the rich is one of the worst outcomes."*
- **Slop-coded infra meme**: mitsuhiko: *"Is 2026 the year where everybody is going to slop code their own google meet/zoom replacement?"*

## Non-AI / Other

Nothing significant outside AI from this cohort in the last 24 hours — Opus 4.7 + Codex Desktop consumed essentially all the oxygen.
