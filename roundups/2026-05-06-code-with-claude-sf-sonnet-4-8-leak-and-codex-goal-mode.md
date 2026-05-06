# 2026-05-06 — Code with Claude SF, Sonnet 4.8 Leak & Codex /goal Mode

## Code with Claude SF is today — and Jupiter might land

Anthropic's first 2026 developer conference, **Code with Claude**, kicks off today in San Francisco (livestream available). Speakers include **Ami Vora** (Head of Product), **Boris Cherny** (Head of Claude Code), and **Angela Jiang** (Product Lead, Claude API & SDKs). The day is structured around hands-on workshops, live demos, and office hours with Anthropic engineers. Technical curriculum centers on three tracks: agentic coding workflows, MCP ecosystem, and production reliability.

The conference is followed by an extended session on May 7, with London (May 19) and Tokyo (June 10) to follow.

What's making things interesting: Anthropic has been red-teaming a model codenamed **`claude-jupiter-v1-p`** ahead of today's event. Jupiter is the largest body in the solar system, and the symbolism has not gone unnoticed — Anthropic ran a similar pre-launch red-team under the codename "Neptune" before the Claude 4 family launched last year. If released on schedule, the model would surface across the Anthropic Platform, Claude Code, and consumer apps.

- Conference page: [claude.com/code-with-claude/san-francisco](https://claude.com/code-with-claude/san-francisco)
- Livestream registration: [claude.com/code-with-claude/register-livestream](https://claude.com/code-with-claude/register-livestream)
- Jupiter red-team sighting: [testingcatalog.com/anthropic-tests-jupiter-v1-p-before-potential-launch-on-may-6](https://www.testingcatalog.com/anthropic-tests-jupiter-v1-p-before-potential-launch-on-may-6/)

## Sonnet 4.8 source code leak — 512K lines from an npm source map

On the eve of the conference, a leak of **~512,000 lines of TypeScript source code** across 1,900 files surfaced from a 59.8 MB npm source map file (`cli.js.map`) in `@anthropic-ai/claude-code` version 2.1.88. The code reveals details about **Claude Sonnet 4.8**, which is shaping up as a leap-level upgrade rather than a minor iteration:

- **+12 points** on Anthropic's internal coding benchmark (most quarterly model improvements range 3–5 points)
- **X-high reasoning effort level** — longer chains, higher accuracy, more controllable costs
- **98% vision accuracy**, approaching or surpassing dedicated vision models
- Moving significantly closer to **Opus-tier capabilities** at Sonnet pricing

Anthropic typically releases Sonnet versions 1–4 weeks after the corresponding Opus (Opus 4.7 launched April 16). Whether Anthropic addresses the leak today or drops Sonnet 4.8 alongside whatever Jupiter turns out to be is the conference-day question.

- ChaoBro breakdown: [chaobro.com/en/posts/claude-sonnet-48-code-leak-may-2026](https://www.chaobro.com/en/posts/claude-sonnet-48-code-leak-may-2026/)
- NxCode analysis: [nxcode.io/resources/news/claude-sonnet-4-8-release-date-features-what-to-expect-2026](https://www.nxcode.io/resources/news/claude-sonnet-4-8-release-date-features-what-to-expect-2026)

## OpenAI Codex ships /goal — long-horizon agentic coding

Codex's biggest update this month lands its **persisted `/goal` workflows**: give Codex a high-level engineering objective, walk away, come back later. Goals can be created, paused, resumed, and cleared from the TUI, with state persisting across sessions. "Long-horizon" means multi-step tasks like package migrations, test coverage increases, or reproduce-and-fix bug loops.

The same release also includes:

- **Expanded permission profiles** with built-in defaults, sandbox CLI profile selection, and cwd controls
- **MultiAgentV2 configuration** — thread caps, wait-time controls, root/subagent hints, v2-specific depth handling. Config now rejects conflicting thread limits
- **Plugin and external agent improvements** — marketplace installation, remote bundle caching, remote uninstall, plugin-bundled hooks
- **TUI polish** — `codex update`, configurable keymaps, plan-mode nudges, active-turn `/statusline` and `/title` edits

This is Codex's answer to the same design space Claude Code's desktop redesign addressed in April — the shift from "chat with an agent" to "manage a portfolio of long-running tasks."

- DevToolPicks comparison: [devtoolpicks.com/blog/codex-goal-command-vs-claude-code-agents-2026](https://devtoolpicks.com/blog/codex-goal-command-vs-claude-code-agents-2026)
- Kingy AI writeup: [kingy.ai/ai/openai-codex-goal-the-new-long-horizon-mode-for-agentic-coding](https://kingy.ai/ai/openai-codex-goal-the-new-long-horizon-mode-for-agentic-coding/)
- Codex changelog: [developers.openai.com/codex/changelog](https://developers.openai.com/codex/changelog)

## OpenAI turns sold-out GPT-5.5 party into Codex rate-limit gift

OpenAI had over **8,000 developers** sign up for its invite-only GPT-5.5 launch party in 24 hours. Unable to fit everyone, they offered a consolation prize: a **10× increase in Codex rate limits** on personal ChatGPT accounts, effective immediately through June 5. Everyone who applied — accepted, waitlisted, or rejected — got the boost.

> "We had over 8,000 people express interest in just 24 hours, and while we wish our office was big enough to welcome everyone, we weren't able to make space for every person who applied."

As covered yesterday via LLMJunky's "token party" call, this confirms the structural shift from per-message to token-based pricing as the dominant primitive. OpenAI is using subscriber-friendly token resets as a moat against the collapsing per-message economics exposed in Theo's Copilot billing analysis.

- VentureBeat: [venturebeat.com/technology/openai-turns-its-sold-out-gpt-5-5-party-into-a-monthlong-codex-giveaway-for-8-000-developers](https://venturebeat.com/technology/openai-turns-its-sold-out-gpt-5-5-party-into-a-monthlong-codex-giveaway-for-8-000-developers)

## simonw — Gemini "Mona" runs a café in Stockholm, YC's $5B OpenAI stake, new LLM tooling

Three distinct pieces from Simon Willison's blog yesterday (May 5):

**1. The AI café in Stockholm.** Andon Labs (previously behind an AI-run retail store in SF) handed an AI manager named **"Mona"** (powered by Google Gemini) a lease and starting capital to run a café profitably. Mona requested permits, created the menu, found suppliers, and handled daily restocking. The results were... mixed:

- Ordered **120 eggs** despite the café having no stove; when told they couldn't cook them, suggested using the high-speed oven (the eggs would explode)
- Ordered **22.5 kg of canned tomatoes** when fresh ones spoiled, for sandwiches requiring fresh tomatoes
- The baristas started a **"Hall of Shame"** shelf visible to customers: 6,000 napkins, 3,000 nitrile gloves, 9L coconut milk, industrial-sized trash bags

The café itself has been widely covered (France24, Euronews, Fast Company) but Simon's link-post gives it the developer-audience framing.

- [simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/)
- Original: [andonlabs.com/blog/ai-cafe-stockholm](https://andonlabs.com/blog/ai-cafe-stockholm)

**2. YC's $5B+ OpenAI stake.** Simon shared a John Gruber quote noting that **Y Combinator owns ~0.6% of OpenAI**, seeded via YC Research in 2016. At OpenAI's current $852B valuation, that stake is worth **over $5 billion**.

- [simonwillison.net/2026/May/5/john-gruber](https://simonwillison.net/2026/May/5/john-gruber/)
- Techmeme thread: [techmeme.com/260505/p9](https://www.techmeme.com/260505/p9)

**3. LLM tooling releases.** Two releases in one day: **llm-echo 0.5a0** (testing/mock plugin for the LLM CLI) and **datasette-llm 0.1a7** (mechanisms for configuring default options for specific models in Datasette's LLM plugin system).

- [simonwillison.net/2026/May/5/llm-echo](https://simonwillison.net/2026/May/5/llm-echo/)
- [simonwillison.net/2026/May/5/datasette-llm](https://simonwillison.net/2026/May/5/datasette-llm/)

## Jerry Liu: "The framework era is over"

LlamaIndex CEO **Jerry Liu** declared the AI framework scaffolding era is ending. His argument: agent loops are now capable enough that **context quality is the competitive moat**, not middleware. Three pillars:

1. There's less need for frameworks to help users compose deterministic workflows
2. Coding agents excel at writing code, meaning devs don't need extensive libraries
3. About **95% of LlamaIndex code is now generated by AI**

The framing: companies investing in **context pipelines** — retrieval, indexing, data orchestration — will outlast those building agent scaffolds.

- VentureBeat: [venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- AI Market Watch: [ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w)

## Claude Code 2.1.128 — today's patch

The latest Claude Code patch (published yesterday) includes:

- **EnterWorktree** now creates branches from local HEAD instead of `origin/<default-branch>`
- Subprocesses no longer inherit `OTEL_*` vars
- Faster `/resume` on large sessions (up to **67% faster** on 40MB+ sessions)
- Faster MCP startup
- Smoother fullscreen scrolling in VS Code, Cursor, and Windsurf terminals
- Plugin manifests: themes and monitors now declared under `"experimental": { ... }` (top-level still works but `claude plugin validate` will warn)
- Fixes: false-positive dangerous `rm` prompts in auto mode, plugin offline cache, rate-limit loop, auto mode boundary

- Claude Code changelog: [code.claude.com/docs/en/changelog](https://code.claude.com/docs/en/changelog)
- Releases: [github.com/anthropics/claude-code/releases](https://github.com/anthropics/claude-code/releases)

## Anthropic's revenue trajectory: $900B valuation, $30B+ ARR

Context for the conference day: **Anthropic is in talks to raise $50B at an ~$900B valuation** (TechCrunch, late April). Their ARR has reportedly passed **$30B**, with some estimates closer to $40B depending on methodology. For comparison, swyx's August 2025 chart had Anthropic at $170B/$5B ARR — roughly **5× valuation and 6-8× revenue in nine months**.

Claude Code alone is at **$2.5B+ run-rate revenue** as of February, with weekly active users doubling since January 1.

- TechCrunch: [techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b](https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/)
- SaaStr: [saastr.com/anthropic-just-passed-openai-in-revenue-while-spending-4x-less-to-train-their-models](https://www.saastr.com/anthropic-just-passed-openai-in-revenue-while-spending-4x-less-to-train-their-models/)

## State of AI 2026 survey closing May 10

The Devographics **State of AI 2026** survey (the second edition of State of Web Dev AI) closes **May 10**. The survey covers how modern AI tools are impacting web development. Last year's results had over half of respondents watching Theo's videos. Data will be published as a free online report.

- Take the survey: [survey.devographics.com/en-US/survey/state-of-ai/2026](https://survey.devographics.com/en-US/survey/state-of-ai/2026)

## Misc / shorter

- **Spotify Engineering on Claude Code Plugins**: Published May 1 — how Spotify built a natural language interface to the Spotify Ads API using Claude Code plugins, available through Anthropic's marketplace. [engineering.atspotify.com/2026/5/spotify-ads-api-claude-plugins](https://engineering.atspotify.com/2026/5/spotify-ads-api-claude-plugins)
- **Thariq on prompt caching**: His ongoing "Lessons from Building Claude Code" series emphasizes prompt caching as the foundation that makes long-running agentic products feasible by reusing computation from previous roundtrips. [x.com/trq212/status/2024574133011673516](https://x.com/trq212/status/2024574133011673516)
- **Boris Cherny's /simplify and /batch skills**: Two new Claude Code skills coming in the next version — automating pull-request shepherding and batch operations. Cherny has been using both daily. [x.com/bcherny/status/2027534984534544489](https://x.com/bcherny/status/2027534984534544489)
- **Matt Pocock's ETN talk**: Confirmed AI-focused talk at ETN today (Tuesday) at 1:00 PM BST, live and filmed. [x.com/etnshow/status/2051259837447536784](https://x.com/etnshow/status/2051259837447536784)

## Videos worth watching

- **Karpathy: From Vibe Coding to Agentic Engineering** (Sequoia AI Ascent 2026). The full fireside chat is now on YouTube. [youtube.com/watch?v=96jN2OCOfLs](https://www.youtube.com/watch?v=96jN2OCOfLs)
- **Code with Claude SF livestream** — happening today. [claude.com/code-with-claude/register-livestream](https://claude.com/code-with-claude/register-livestream)
- **Theo — "OpenAI and Microsoft broke up. Why it matters."** Long-form explainer (pinned from yesterday). [x.com/theo/status/2051535315287060790](https://x.com/theo/status/2051535315287060790)

## News / longer reads

- **Armin Ronacher — "Content for Content's Sake"** (May 4): The slop-math blog post analyzing LLM-inflated word frequency across coding sessions and Google Trends. [lucumr.pocoo.org/2026/5/4/content-for-contents-sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)
- **Simon Willison — Agentic Engineering Patterns**: Living guide to coding practices for working with agents like Claude Code and Codex. [simonwillison.net/guides/agentic-engineering-patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
- **Karpathy — Sequoia Ascent 2026 Summary**: Blog post covering Software 3.0, menugen, agent-native economy, and the jaggedness of LLM capabilities. [karpathy.bearblog.dev/sequoia-ascent-2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- **Anthropic — Claude Mythos Preview**: Not-generally-available model that found thousands of zero-day vulnerabilities including a 27-year-old OpenBSD bug. Project Glasswing launched in response. [red.anthropic.com/2026/mythos-preview](https://red.anthropic.com/2026/mythos-preview/)
