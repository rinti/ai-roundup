# 2026-04-22 — Claude Code pricing fiasco, SpaceX ↔ Cursor, and GPT Image-2

Theo's [vacation summary](https://x.com/theo/status/2046767107178676636) captures the day: "Things that happened 1 month before my vacation: opus 4.7. Things that have happened since I got on the plane: vercel hack, gpt-image-2, claude code removed from pro, cursor might get bought by spacex, kimi k2.6." Most of those landed today.

## Anthropic pulls Claude Code from Pro — then un-pulls it

The lead story. Anthropic's pricing page quietly updated to show Claude Code as a Max-tier-only feature, kicking it off the $20/month Pro plan. No announcement. The internet noticed immediately.

- Simon Willison's [first note](https://x.com/simonw/status/2046732056995205620): "This is so confusing. Did Anthropic really just drop Claude Code from their $20/month plan? Why would they do that through a pricing page update without making a proper announcement?"
- Armin Ronacher: ["I really want to understand what Anthropic is thinking. They are now 'secretly' AB testing entry level pricing? Sorry folks, I love ya, but that is just weird."](https://x.com/mitsuhiko/status/2046736205643981224)
- Theo's [priors piece](https://x.com/theo/status/2046721490406510600): "I need to never take vacations again." And [the dunk](https://x.com/theo/status/2046750556048293944): "I swear they waited until I left SF to do this shit."
- LLMJunky summarized the pitchfork mood in one tweet: ["Sir anthropic just removed claude code from $20 pro subscriptions"](https://x.com/LLMJunky/status/2046735968259162292).

Anthropic's response was [Amol Avasare claiming it was a 2% A/B test](https://x.com/TheAmolAvasare/status/2046724659039932830): "For clarity, we're running a small test on ~2% of new prosumer signups. Existing Pro and Max subscribers aren't affected." RT'd by Boris Cherny.

Theo isn't buying it. His [follow-up](https://x.com/theo/status/2046765840477945942) is the spicy line of the day:

> "Anthropic said only 2% of new users would see the 'claude code requires max tier' change. 100% of users saw it. They were either lying or bad at coding. We have now confirmed it was the latter. Man, these guys are TERRIBLE at writing code."

He [signed up for a new Pro account himself](https://x.com/theo/status/2046759446312112525) and confirmed Claude Code still worked — the sign-up page, checkout page, and onboarding never flagged the restriction. Simon later [corroborated](https://x.com/simonw/status/2046799006370828745) that the bug was rolling the new pricing grid out worldwide instead of to the 2% test cohort.

OpenAI saw an opening and took it. Thomas Sottiaux: ["I don't know what they are doing over there, but Codex will continue to be available both in the FREE and PLUS ($20) plans. We have the compute and efficient models to support it. For important changes, we will engage with the community"](https://x.com/thsottiaux/status/2046740759056162816) (RT'd by Theo). Embirico amplified [the plan matrix](https://x.com/embirico/status/2046727802377076904): "You can use Codex on these plans: - Plus: $20 -- Go: $8 --- Free: $0!" Simon, dryly: ["Anthropic really did just hand this one to OpenAI on a plate."](https://x.com/simonw/status/2046749120443064645)

Anthropic eventually reverted the pricing page. Simon's [wrap-up](https://x.com/simonw/status/2046774737683325028): he was publishing a blog post about it *as* they reversed course, had to rewrite on the fly, and as of his last check [there was still no official communication](https://x.com/simonw/status/2046775873442111892) confirming Claude Code is back on Pro. His [hypothesis](https://x.com/simonw/status/2046735565555630512): "an ill-considered test which they didn't anticipate would be instantly spotted and cause (justified) uproar." The [buried reply from Amol](https://x.com/simonw/status/2046753821502931095) remains, per Simon, the only official confirmation that existing Pro subs were never in scope.

Steipete's [sub-thread on OpenClaw CLI blockage](https://x.com/steipete/status/2046685973233189375) added an adjacent story: Boris (Cherny) said CLI usage was allowed, OpenClaw added support, and they're blocked in practice anyway. "It is trivial to work around with a few renames, but I don't wanna play that game. So it's in a weird limbo where CLI use should work in theory but doesn't in practice." This was already blowing up on HN before the pricing page drama started.

## SpaceX ↔ Cursor: $60B acquisition option or $10B payout

Second headline: SpaceXAI and Cursor announced an exclusive partnership. From the [SpaceX tweet](https://x.com/SpaceX/status/2046713419978453374) (RT'd by leerob):

> "SpaceXAI and @cursor_ai are now working closely together to create the world's best coding and knowledge work AI. […] Cursor has also given SpaceX the right to acquire Cursor later this year for $60 billion or pay $10 billion for our work together."

swyx's [take](https://x.com/swyx/status/2046733194448216409): "personally this is the most exciting option pricing deal of the year, wow, kudos to both sides!!" His [followup](https://x.com/swyx/status/2046744203409989918): "rumors had pegged the fundraise at $50B so this basically values Cursor at $50B pre-money with a $10B revenue (11 figures!) exclusive model contract with xai." He also [resurfaced](https://x.com/swyx/status/2046791964759044504) LS's pre-PMF podcast with Aman Sanger as Cursor's first-ever interview ("listen back to baby @amanrsanger when they were 5 people and pre-PMF").

Cursor CEO Michael Truell's [framing](https://x.com/mntruell/status/2046719798596517952) (RT'd by potetotes): "Excited to partner with the SpaceX team to scale up Composer. A meaningful step on our path to build the best place to code with AI."

LLMJunky: ["SpaceX will be given the opportunity to buy Cursor 🤯"](https://x.com/LLMJunky/status/2046717627263840358).

The backdrop — Colossus, SpaceX's million-H100-equivalent training cluster — is what Cursor's Composer line gets in exchange for exclusivity. ScottWu46 tweeted ["here we go again"](https://x.com/ScottWu46/status/2046703502035149209), RT'd by swyx.

## GPT Image-2 / "ChatGPT Images 2.0" drops

OpenAI shipped a new image model today. The naming is, as usual, a mess — Simon [catalogued three names in OpenAI's own communications](https://x.com/simonw/status/2046695792782749862): "ChatGPT Images 2.0", "Image gen 2", and "gpt-image-2".

- **Simon's Waldo-raccoon benchmark**: ["Do a where's Waldo style image but it's where is the raccoon holding a ham radio"](https://x.com/simonw/status/2046689436004766011) — write-up at [simonwillison.net/2026/Apr/21/gpt-image-2/](https://simonwillison.net/2026/Apr/21/gpt-image-2/).
- **LLMJunky's VSCode prompt series**: [headline tweet](https://x.com/LLMJunky/status/2046695738847993957) — "GPT-Image-2 is an intelligent model. It's not just rendering an image, it's actually *thinking* about it." He ran the same template (screenshot of VS Code in dark theme, portrait 2:3, a named folder with a single `index.html`) for [Boids flocking](https://x.com/LLMJunky/status/2046695745781129455) (his favorite — "demonstrates domain knowledge in mathematics and programming (vector addition, normalization, and magnitude scaling)"), [Conway's Life](https://x.com/LLMJunky/status/2046695741935263944), [Matrix Rain](https://x.com/LLMJunky/status/2046695748771987948), a [3D rotating wireframe cube](https://x.com/LLMJunky/status/2046695752064467077), and a [Lorenz attractor animation](https://x.com/LLMJunky/status/2046695755008643304).
- **Theo shipped it into T3 Chat the same day** — ["gpt-image-2 is now available in the Canvas view in T3 Chat. Still by far my favorite way to do image gen, I use it every day."](https://x.com/theo/status/2046675376391545203)

If you want a deeper technical grounding, swyx [pointed at a Sander Dieleman talk](https://x.com/swyx/status/2046680414836715655) from AIE: "Building Generative Image & Video models at Scale" — Dieleman leads research on Veo and NanoBanana at GoogleDeepMind. swyx's pitch: "if you always felt out of the loop on the SOTA on Imagegen, today or otherwise, this is the best 40 minutes you will find on the internet, period." Talk is at [aiDotEngineer](https://x.com/aiDotEngineer/status/2046680094509297866).

## GPT 5.5 spotted in Codex App

LLMJunky: ["GPT 5.5 has been spotted in the Codex App. Release imminent"](https://x.com/LLMJunky/status/2046812561383866678), with [more evidence](https://x.com/TheAhmadOsman/status/2046802876924666297) in the reply. Given OpenAI's spree today (gpt-image-2, Codex Plus/Free guarantees, Euphony), this lines up.

## leerob vs antirez: frontend development in 2026

[leerob's long thread](https://x.com/leerob/status/2046788389937000576) is the substantive coding debate of the day. antirez had argued that React/Angular are "big-company-design stuff that became normal programming — like if every site runs on Kubernetes," and that framework-native frontend devs don't understand the underlying language or CSS. leerob counters:

- On frameworks: taking composition to its logical extreme for both small *and* very large JS apps is how you end up with streaming, Suspense, and metaframework niceties. You don't have to ditch React's composition model for simpler cases. **"Bun is one of the best realizations of this vision, where you can write React apps with a single toolchain."**
- On client/server split: "increasingly with AI, the client/server split is helpful for humans and agents to compartmentalize the codebase." The split helps agents, not just headcount.
- On "devs don't know JS internals": agents accelerate both directions. Same agent that generates React can deeply explain every abstraction layer. "There's no forgoing competence to be a great frontend engineer."
- The close: **"It's time for a lot of backend engineers to give the frontend peeps their flowers, acknowledge some of this frontend stuff is Very Hard, and begrudgingly accept that React has some good ideas."**

Separately, Dominic Gannaway (trueadm) [announced TSRX](https://x.com/trueadm/status/2046696157066264846) (RT'd by both potetotes and Theo): "the spiritual successor to JSX. We extracted it from Ripple, and made it framework agnostic. It can compile to React, Ripple and Solid, other frameworks to come soon. It's a TypeScript superset language, with a parser, compiler and a selection of plugins for editors + Prettier + ESLint, etc. Early alpha."

## Cursor engineering: 80% memory crash reduction

[Cursor's blog post](https://x.com/cursor_ai/status/2046654867889066190) (RT'd by potetotes): "We've reduced memory crashes in the Cursor desktop application by 80% since February. Here's how we detect, debug, and prevent OOMs at scale." Notable for an Electron-era desktop product shipping hard engineering wins rather than just features.

Relevant context: potetotes [notes a Claude for OSS billing bug](https://x.com/potetotes/status/2046633916585611655): "got accepted to Claude for OSS but still got charged 🙃 and Fin can't count lmao." Small but funnier-in-aggregate with the pricing page debacle.

## Simon: Opus 4.7 adaptive thinking is a bit broken, also GitHub Copilot

Two Simon threads worth flagging:

1. **Opus 4.7 adaptive thinking**: ["Claude Opus 4.7 with adaptive thinking via the API... am I missing something or is it not possible any more to force it to think? (Prompt hacks like 'think step by step' don't count here, I mean the equivalent of budget_tokens or effort: high in previous Claude models)"](https://x.com/simonw/status/2046659404217659467). He did eventually [get it thinking](https://x.com/simonw/status/2046740570140508252) with a config: `"thinking": {"type": "adaptive", "display": "summarized"}` plus `"output_config": {"effort": "max"}`. Still an ergonomics regression — the piece he was reading blamed Opus 4.7's bad pelican on this exact issue.

2. **GitHub Copilot pricing/signup changes**: ["Apparently my blog is mostly about token pricing now, here are some notes on the big changes GitHub Copilot just announced, including pausing new signups entirely"](https://x.com/simonw/status/2046795378905993524) — write-up at [simonwillison.net/2026/Apr/22/changes-to-github-copilot/](https://simonwillison.net/2026/Apr/22/changes-to-github-copilot/). Perfect counter-story to the Anthropic drama: another major coding assistant just hit the compute wall today.

## OpenAI Euphony vs simonw's Codex timeline

Simon [noticed](https://x.com/simonw/status/2046640420311142540) OpenAI's new Euphony tool works almost exactly like his own [codex-timeline viewer](https://tools.simonwillison.net/codex-timeline). His [hope](https://x.com/simonw/status/2046642204006031666): "I for one would be delighted to see OpenAI commit to maintaining a tool like this in the long-term, I'm already nervous about mine going stale." Case of convergent tooling on Codex transcripts.

## Matt Pocock — sycophancy, flaky tests, vibe-coding tools

Three Pocock posts worth noting:

- ["AI is sycophantic by nature. If you assert something, it will tend to agree."](https://x.com/mattpocockuk/status/2046542630973010201) — his fix is to force disagreement: **"Instead of '...am I right?' ask '...Give me the steelman case against what I just said.' Produces much more useful feedback."** Small prompt pattern with a lot of leverage.
- ["Crazy how costly flaky tests are now. They went from 'survivable but annoying' to 'FIX NOW AT ALL COSTS'"](https://x.com/mattpocockuk/status/2046675467470540858) — agent loops burn compute on flakes.
- ["What 'advanced' AI coding techniques are you using?"](https://x.com/mattpocockuk/status/2046529336941990283) — open-ended crowdsource, worth reading the replies.
- On vibe-coding tools: ["Do vibe coding tools (v0, Lovable, Replit) have any use for real engineers? Definitely — fast-iterating prototypes ALWAYS have a place in the dev cycle. Watch me try Claude Design while building"](https://x.com/mattpocockuk/status/2046498686973116443). He's linking his latest [newsletter](https://www.aihero.dev/s/LyWrkH).

## LLMJunky: the "sudo" problem

[LLMJunky](https://x.com/LLMJunky/status/2046630543031202038) flags a concrete unsolved harness problem: "Who's going to be the first coding agent harness to solve the 'sudo' problem? Right now, the only reliable way to get past this is to give your agent root access. Not ideal. I also don't necessarily want to give my agent the password either." He notes Codex *was* able to run sudo after giving it the code, "which I have literally never seen before in any agent." The ideal: one-time approval where the human enters the password into the agent's shell. Good product spec for the next harness iteration.

## Steipete: OpenClaw + discrawl ship days

- **OpenClaw 2026.4.21**: ["Small release, important fix: npm updates now repair bundled plugin runtime deps, with Docker E2E coverage so Telegram/Discord/Slack do not break after upgrade."](https://x.com/steipete/status/2046803162590335240)
- **discrawl 0.3.0**: ["Git-backed archive sync, so a Discord archive can be published to a private repo and queried locally without every user needing bot credentials. Also: auto-r..."](https://x.com/steipete/status/2046748122928263345)
- **CI time**: ["Got our CI times down from 8 to two minutes via some... parallelization. Kudos to the @useblacksmith folks for sponsoring + letting us melt their servers."](https://x.com/steipete/status/2046787353906167992)

## mitsuhiko: XDG considered harmful for dev tools

Armin Ronacher pushing back against platform standards: ["IMO XDG and following platform standards for config files for dev tools is horrible. It drives up complexities for everybody (now you need to update scripts, docs etc. for all platforms). Wish that standard would never have happened."](https://x.com/mitsuhiko/status/2046492175190351921) Follow-up [incident note](https://x.com/mitsuhiko/status/2046492496650207302): "(He said, after once again discovering that some people override XDG_DATA_HOME and his shit broke)." Also: ["I'm being bullied by an agent."](https://x.com/mitsuhiko/status/2046635517886771256)

## ParseBench: charts in enterprise documents

[Jerry Liu's thread on ChartDataPointMatch](https://x.com/jerryjliu0/status/2046725527806021937): ParseBench is now the first benchmark to include VLM chart understanding over *enterprise documents* (not charts in isolation). 568 pages with a mix of discrete series, continuous series, bar/point/line graphs, and charts without clear markers. Each chart has ground-truth datapoints bootstrapped with an initial model and verified through human annotators (with a tolerance). The LlamaIndex [framing](https://x.com/llama_index/status/2046586730879283227): "Agents need the actual numbers. That's the gap between 'OCR'd the text around the chart' and 'actually read the chart.'" Blog at [llamaindex.ai/blog/parsebench](https://www.llamaindex.ai/blog/parsebench), paper on [arXiv](https://arxiv.org/abs/2604.08538), interactive at [parsebench.ai](https://parsebench.ai/).

## Non-agent sidebar

- **Sam Altman tweeting under the influence**: sama's [self-report](https://x.com/sama/status/2046808114561974567) — "tonight i have had a couple of drinks" — RT'd by Theo with [his comms-lead take](https://x.com/theo/status/2046813015530430926): "If I was a comms lead at OpenAI, I would try to get Sam drunk at least once a week. This is incredible."
- **swyx × Gergely Orosz on the Pragmatic Engineer**: ["Tokenmaxxing, Productivity, & internal AI Platforms"](https://x.com/aiDotEngineer/status/2046670378546966686) — on whether AI productivity is real and how internal AI platforms are evolving.
- **Matt Pocock's newsletter**: the up-to-date [aihero.dev piece](https://www.aihero.dev/s/LyWrkH) riffs on Claude Design and vibe-coding prototyping.
- **Theo on the general tempo**: ["Most things can be solved with enough effort and intelligence. What happens when both become cheap?"](https://x.com/theo/status/2046756199836660004)

## Open questions going into tomorrow

- Will Anthropic publish an official postmortem on the Claude Code / Pro pricing mess, or is the revert all we get?
- When does GPT 5.5 land in Codex (LLMJunky says "imminent")?
- Does Cursor's SpaceX deal push Anthropic and OpenAI into counter-exclusivity plays, or is this a one-off?
- GitHub Copilot paused new signups today — is this compute-capacity-driven or pricing-model-driven?
