# 2026-04-25 — Cursor 3 ships /multitask, ClawSweeper closes 4K issues, and the harness debate keeps simmering

Friday is the quiet aftershock to Thursday's GPT-5.5 / DeepSeek V4 / Claude Code post-mortem combo. The big new ship is Cursor 3 — async subagents, cross-repo worktrees and /multitask — landing right as Steipete points 50 parallel Codex agents at OpenClaw's issue tracker and closes ~4,000 issues in a day. Underneath it all, a quiet but pointed conversation about what harnesses *should* do by default (Matt Pocock: read types first, code later), more pushback on the Anthropic post-mortem, and Armin Ronacher running Qwen3.6-27B locally and calling it "very close to Opus."

## Cursor 3: /multitask, async subagents, cross-repo worktrees

[Lee Robinson's tweet](https://x.com/leerob/status/2047766830832316491) is the cleanest pitch:

> "It's now *way* easier to run many agents at the same time (with async subagents and improved worktrees). And you can run agents across many repos (e.g. frontend and backend!)"

The [Cursor announcement](https://x.com/cursor_ai/status/2047765980126658771) (quoted in Lee's thread): /multitask spawns **async subagents** that parallelize a request instead of stacking it on the queue. You can also retroactively tell Cursor to multitask on already-queued messages. [Potetotes adds](https://x.com/potetotes/status/2047767152145654005) what may be the most interesting wrinkle:

> "/multitask also lets you tell your agent which model specifically you want as your subagents — ideal for workflows where you do adversarial review, or prefer some models for planning and others for execution."

That's the bring-your-own-orchestration knob people have been asking for. Adversarial review with one model planning and a different model executing is a pattern that's been in Claude Code subagents for a while; Cursor making it a first-class /multitask flag matters because it means the model picker is now per-task, not per-session.

[GPT-5.5 also landed in Cursor](https://x.com/cursor_ai/status/2047744579127185843) (retweeted by potetotes) — top of CursorBench at **72.8%**, with a partnership offering **50% off through May 2**.

Replies on Lee's thread converged on three concerns:
- **Cross-repo schema drift** ([tang](https://x.com/justic_hot/status/2047799127623426...)): "schema drift between a frontend agent and backend agent is the failure i'd expect first. does it diff shared contracts (types, API schemas) across worktrees, or are the agents just blind to each other's changes?"
- **Token bloat from full file reads** ([Aleksandr Fulha on a different thread](https://x.com/fulhadev/status/2047970...)): "running 25 agents across 4 ts codebases, token bloat from full file reads is my #1 cost driver. agents grab 800 lines for 3 functions."
- **State consistency** ([XM](https://x.com/xm_build/status/2047770...)): "20% of multi-repo workflows hit race conditions in early access tests."

Combine /multitask with the model-per-subagent toggle and the agent-vs-IDE distinction starts to blur. As [Paul Vu](https://x.com/PaulVuAI/status/2047768...) put it: "Running 3 agents in parallel worktrees while I sleep is a different shape from 'AI helped me write this function' — it's 'AI ships the backlog while I design the next thing'."

## ClawSweeper: 50 Codex agents, 4,000 issues closed, README as dashboard

Steipete shipped [ClawSweeper](https://x.com/steipete/status/2047982647264059734), an OpenClaw issue/PR janitor that runs **50 Codex agents in parallel around the clock**, scans every issue and PR, and closes the ones that are already implemented or "make no sense":

> "Closed around 4000 issues today, a few thousand are in the pipeline. (rate limits are rough)"

Repo: [github.com/openclaw/clawsweeper](https://github.com/openclaw/clawsweeper). Built in 2 days. Steipete on the model choice: "GPT 5.5 high is pretty good!" and on accuracy: "I reviewed a few 100 and they all seemed correct, GPT 5.5 is a goat." Multi-model is supported with a one-line swap.

The detail that's getting the most love is from a [follow-up tweet](https://x.com/steipete/status/2047982886637158738):

> "My favorite part: instead of a dashboard it just updates the README as it works. **Readme is the new dashboard.**"

That's a real pattern worth stealing — the README *is* the source of truth that's already rendered in GitHub's UI, already on the agent's path, already where humans land first. Skip the React app.

The thread had a couple of well-aimed jokes that almost write themselves:
- [Dani Pralea](https://x.com/DanutPralea/status/2047987...): "wait til the issues being closed are also opened by ai. the loop is closing on itself."
- [Bensen, retweeted by steipete](https://x.com/bensen/status/2047991203367375304): "ClawSweeper goes online on April 24, 2026... It becomes self-aware at 12:14 p.m. Central European Time, April 25th. In a panic, some try to send even more slop PRs. ClawSweeper fights back."

Steipete also shipped [acpx 0.6.0](https://x.com/steipete/status/2047978882100334612) (Codex/Claude control via agents) with Claude system-prompt controls, session pruning, embeddable turn handles, and `--no-terminal`; and [discrawl 0.6.0](https://x.com/steipete/status/2047797210427859450), which can now read Discord DMs without custom login tricks. Notably, no write capability: "it's not nice to send humans slop."

## The harness debate: Matt Pocock proposes types-first reads

Matt Pocock kicked off [a sharp thread](https://x.com/mattpocockuk/status/2047947189163335885) with a harness wishlist item:

> "When opening a file, FIRST pre-compile the file and extract only the type signatures and comments for that file (with tsgo this would be instant). Then, if you want to see the implementation, only unwrap the functions you're interested in. Essentially .d.ts for the first step, .ts for the second."

Quinn Slack (Amp) [replied with the bear case](https://x.com/sqs/status/2047975...):

> "We tried this in Amp a year ago, and the models just never called the tools that would read the summarized symbol representation of files. They always preferred just reading the file. It is one of those things that sounds like a good idea but is not represented in their training data."

Several other people independently surfaced existing implementations: [tldr-code](https://github.com/parcadei/tldr-code), [aft (cortexkit)](https://github.com/cortexkit/aft) (tree-sitter outline + zoom), [precis](https://github.com/Crazytieguy/precis), [GitNexus](https://github.com/abhigyanpatwari/GitNexus), and [rtk-ai/rtk](https://github.com/rtk-ai/rtk) (CLI proxy that reduces token usage 60-90% on common dev commands). The pattern is real and useful; whether models *use* it without explicit prompting is the open question.

Matt also shipped [a major /improve-codebase-architecture upgrade](https://x.com/mattpocockuk/status/2047759493581156377) with [a glossary of good/bad codebase terminology](https://github.com/mattpocock/skills/blob/main/improve-codebase-architecture/LANGUAGE.md) — a shared vocabulary for the agent and the human to argue with. He also teased ["sandstorm"](https://x.com/mattpocockuk/status/2047700237918044175), a [Sandcastle-based AFK daemon](https://x.com/mattpocockuk/status/2047783938702082114):

> "It schedules agents sandboxed via Sandcastle. Because it's always-running, you can operate it at maximum concurrency 24/7. It creates a plan via an agent. This plan is a DAG of PR branches."

Same direction as ClawSweeper, just on the inbound side: instead of closing slop issues, generate validated PRs in the background.

His one Opus 4.7 complaint that's worth flagging for harness builders: ["even with /grill-me, Opus 4.7 w/ Claude Code jumps straight to implementation"](https://x.com/mattpocockuk/status/2047589158667895037). The "wait until aligned" instruction is being ignored — a behavior regression worth its own evaluation.

## Anthropic post-mortem: the dust hasn't settled

Boris Cherny's [post-mortem thread](https://x.com/bcherny/status/2047376081767014703) from Apr 23 was still drawing heat through Friday. The community read it as overdue rather than reassuring. A sample of the replies on the [tweet itself](https://nitter.net/bcherny/status/2047376081767014703):

- **[Nathan Oyler](https://x.com/NathanOyler)**: "it did feel like you were telling us it was our problem... there should be some takeaways here that perhaps we are communicating real issues."
- **[jem](https://x.com/sheherenow_)**: "long time claude/cc fangirl and i cancelled my sub, felt v bad that we were being told that nothing had changed and to reject our direct experience of CC losing its sparkle."
- **[Maryna Vyshnyvetska](https://x.com/kenaz_ai)**: "do not lobotomize the public models. Today I simply ended a session with 4.7 because it wrecked a codebase... Opus 4.6 fixed the same problems in ten minutes, literally."

[Theo's victory lap](https://x.com/theo/status/2047732883989643530):

> "Last week, I shared my conspiracy theories as to why Claude Code got dumber. Anthropic has now confirmed my conspiracies were entirely correct lmao."

The harness-vs-vendor framing keeps escalating. If you can't fix your harness, you're stuck waiting for someone else to publish a diagnosis. Same line we logged yesterday from Mario Zechner; Pocock and Steipete are both showing the alternative — own the harness, ship at your own velocity.

## Local models punch up: Qwen3.6-27B on a MacBook Pro

Armin Ronacher [retweeted Julien Chaumond's demo](https://x.com/julien_c/status/2047647522173104145):

> "Qwen3.6 27B running inside of Pi coding agent via Llama.cpp on the MacBook Pro... feels very, very close to hitting the latest Opus in Claude Code, or whatever shiny monopolistic closed source API of the day is. **In full airplane mode.**"

A separate Mitsuhiko-RT'd [thread from Parallel](https://x.com/p0/status/2047794814104862843) shows a [completely free CLI agent](https://parallel.ai/blog/free-CLI-agent) using Pi + Ollama (Gemma 4) + Parallel's free web search MCP. The "agent flying solo on local hardware with frontier-ish quality" milestone keeps being declared, but with Qwen3.6-27B, GLM, and Gemma 4 as live options it's increasingly less marketing.

Mitsuhiko also [updated Gondolin](https://x.com/mitsuhiko/status/2047613646109331751), now supporting **qemu, krun, and wasm** sandboxes — branching off the Firecracker-vs-QEMU-for-agent-sandboxes debate that ran earlier this week. Most agent sandboxes picked Firecracker; Gondolin picks QEMU and now lets you choose.

## DeepSeek V4 reactions: pelicans, pricing and training instabilities

Simon Willison's [pelican benchmark](https://x.com/simonw/status/2047534175855759771) is now an industry meme. Both pelicans came out angry-looking; the [Flash one was arguably better than Pro](https://x.com/jfozonx/status/2047541...) ("Pro models have more representational room to 'add character' even when the prompt doesn't ask for it"). The [pricing chart](https://simonwillison.net/2026/Apr/24/deepseek-v4/) is what matters:

> Both DeepSeek-V4-Flash ($0.14 / $0.28 per M) and V4-Pro ($1.74 / $3.48 per M) are the cheapest models in their categories while benchmarking close to the frontier models.

That's GPT-5.5 at $5/$30 versus DeepSeek V4 Pro at $1.74/$3.48 — the API arbitrage gap is wide enough that anyone running long-context background agents should at least benchmark a swap.

Counter-take from [Susan Zhang, retweeted by steipete](https://x.com/suchenzang/status/2047559677316325807):

> "deepseek could not fix training instabilities, after doubling from ~15T tokens in v3 to ~33T tokens in v4. the 10+ mentions of 'stability' tricks seem to be wildly lacking if these two were the main bandages (mismatched routing + clamping). but kudos for transparency."

The frontier scaling story is bumpier than the headline numbers suggest. Not a blocker for the model being useful, but worth noting if you're betting on V5 trajectory.

## Codex misc: hooks GA, mobile app, Linux port

[LLMJunky](https://x.com/LLMJunky/status/2047539774706061543) on Codex Hooks (from late Thursday but still rolling through Friday):

> "🪝 Codex Hooks are now Generally Available and stable! In the latest updates, the Codex team shipped updates to Hooks that allow Pre and Post tool use hooks to receive apply_patch payloads!"

That last bit — `apply_patch` payloads in Pre/Post hooks — means you can run deterministic scripts on every file edit. He added 50+ hooks to [Codex Marketplace](https://codex-marketplace.com).

Also from LLMJunky:
- [**Codex Mobile App**](https://x.com/LLMJunky/status/2047902126672638031): "Already exists. And it's coming soon."
- [**Codex on Linux**](https://x.com/LLMJunky/status/2047679253731311782): "If you're on Linux and want to use the latest Codex App with GPT 5.5, look no further." Now also as an [RPM package for Fedora](https://x.com/LLMJunky/status/2047749360537006180).
- [**Cursor Composer 2 vs Codex pep talk**](https://x.com/LLMJunky/status/2047769611395895423): the Cursor browser-use tool getting praised in Codex circles has been in Cursor for months; "every week or so they're dropping some clever and innovative features that you may not find anywhere else."

ClaudeDevs [refreshed Claude Code on web and mobile](https://x.com/ClaudeDevs/status/2047773528121049488) (retweeted by trq212).

## swyx's framing: "coding agents breaking containment"

[Jacob Effron, retweeted by swyx](https://x.com/jacobeffron/status/2047756585770836249):

> ".@swyx current thesis: '2025 was coding agents. 2026 is coding agents breaking containment to do everything else.'"

Cursor /multitask running across repos, ClawSweeper closing GitHub issues unattended, Pocock's PR-DAG daemon, and the Codex Superapp eating Sheets/Slides/Docs — they all line up under that thesis.

Related [recommendation from swyx](https://x.com/swyx/status/2047749587163877668): Malte Ubl's AI Engineer London talk, [**"The new application layer"**](https://x.com/cramforce/status/2047729559165108287) — core thesis: "we, the developers, win if models are commoditized." Worth watching; Vercel C-suite engineering content is usually scarce.

[Mattpocock keynotes from AI Engineer London](https://x.com/aiDotEngineer/status/2047704435074490584) (retweeted by mattpocock and swyx) — "AI Coding for Real Engineers" + "Why Software Fundamentals Matter More than Ever." swyx: "his talk is 1 day old and already on track to challenge @badlogicgames for top spot."

## Other notes

- **GitHub merge queue incident** — [Theo](https://x.com/theo/status/2047721472521621991): "GitHub reversing merges randomly is insane. Finally time for a competitor?" — pointing to a GitHub status incident where merge queue commits were reverting previously merged commits at random. Cited [Tom Elliott](https://x.com/theotherelliott/status/2047720...): "subtle enough to be really hard to unravel after the fact."
- **LlamaIndex ParseBench on GPT-5.5** — [jerryjliu0](https://x.com/jerryjliu0/status/2047803921037656389) ran [ParseBench](https://www.parsebench.ai/) over enterprise documents. GPT-5.5 wins on tables vs GPT-5.4 / Opus 4.7. LlamaParse still wins on most dimensions at 1.25¢/page.
- **Cursor design mode** — [kevinkern via LLMJunky](https://x.com/kevinkern/status/2047757759387406721): "cursor harness + composer 2 gets it and you can just build new sections on the fly. especially if you have your components and design system ready." Eric Zakariasson's video shows building a new website page in 10 minutes via design mode.
- **Codex Marketplace + Claude Marketplace** — [aitmpl.com](https://www.aitmpl.com/) ships, parallel to [codex-marketplace.com](https://codex-marketplace.com/).
- **Cursor's recurring RT meta** — both Lee and potetotes were ~simultaneously on the /multitask launch. The Cursor team is operating on an unusual cadence; the Mattpocock talk push and the GPT-5.5 partnership feels coordinated rather than coincidental.
- **Cognition Singapore launch** — [swyx](https://x.com/swyx/status/2047598167026483275): "if you are in sg next week there's a big launch on apr 29." [cognition.ai/singapore-launch](https://cognition.ai/singapore-launch).

## Off-topic / culture

- **Theo's $1k cryptography puzzle** — [thread of updates](https://x.com/theo/status/2047548290992865386). 5 people solved his "super hard" challenge; teasing a Part 3.
- **Hyatt safety story** — [Theo](https://x.com/theo/status/2047542115576484293) had a stalker in the lobby for 3 days; security promised to remember the face and then let him in 2 more days. Avoid Hyatt.
- **Mitsuhiko's German "equity" essay** — [lucumr.pocoo.org/2026/4/23/equity-for-europeans](https://lucumr.pocoo.org/2026/4/23/equity-for-europeans/) — picked up enough engagement that it [got a community note proposed](https://x.com/mitsuhiko/status/2047702061760786612).
- **Theo's Nerd Snipe podcast** is now the [75th biggest tech podcast in the world](https://x.com/theo/status/2047880044823916821), up from #170 on Wednesday.
- **swyx in Singapore** — ["come to the most ai pilled country per capita"](https://x.com/swyx/status/2047545640180445400).

---

The day reads like the meta-question for 2026: now that you can spawn 50 agents, what do you point them at? Steipete points them at slop. Pocock points them at PR DAGs. Cursor points them at parallel worktrees across repos. Anthropic is still cleaning up after pointing them at confounding harness regressions. The slop floor is rising; the harness ceiling is what's actually limiting us.
