# 2026-05-06 — OpenAI ↔ Microsoft Divorce, Context Pointers vs Skills & Codex's 10x Token Gift

## Theo's "OpenAI and Microsoft broke up" deep-dive

The day's framing tweet in agent business news is **Theo's pinned video** about the OpenAI ↔ Microsoft contract restructuring. The video has hit **47K likes / 419 RTs in 24 hours** and the thread underneath has the cleanest collection of takes on the post-breakup compute landscape:

- "OpenAI and Microsoft broke up. The impact of this is massive and I don't think enough people understand why. Put a lot of time into tracking the history of the deal to help you all understand 🫡" — [https://x.com/theo/status/2051535315287060790](https://x.com/theo/status/2051535315287060790)

Highest-signal replies:

- **TFisPython**: "Azure distribution was the moat most people weren't counting. The builders who routed openai APIs through azure now have a very different conversation with their finance team."
- **derrick_dao**: "The split was inevitable once Azure stopped being the cheapest place to run inference. OAI needs vertical control — custom silicon, owned data centers, direct power deals — the playbook Google ran with TPUs in 2017. Microsoft trades exclusivity for Anthropic margin. Both got the divorce they wanted."
- **Tyler Gardner**: "The real killer: Azure credits were OpenAI's oxygen. Without Microsoft's infra subsidy, each GPT-4 query costs ~$0.03. That math doesn't work at consumer prices."
- **tonitrades_**: "Microsoft still owns 49% of OpenAI profits. The breakup just ended compute exclusivity. More access, not less control."
- **bettercallsalva**: "The deal history matters because model access is also distribution power. I'd watch who controls defaults inside Office, Azure, and enterprise procurement."

Companion data point from yesterday's swyx chart (recirculating in this thread): OAI ~850B valuation / ~30B ARR; Anthropic ~900B / ~44B ARR. Azure-credits-as-oxygen is increasingly the framing of choice for why Anthropic + frontier labs need their own substrate.

## Code with Claude is tomorrow — bcherny + Thariq tease announcements

Both **bcherny** and **Thariq Shihipar (trq212)** are flying into Anthropic's developer conference *Code with Claude*. Posts from late tonight:

- bcherny: "See everyone tomorrow!!" — [https://x.com/bcherny/status/2051834563899654342](https://x.com/bcherny/status/2051834563899654342)
- Thariq: "See you all soon! We've got some fun announcements ahead. I'll also be doing a workshop on **'how we Claude Code'** with some workflows I'm excited to share. Don't worry if you're not there, everything will be recorded and uploaded." — [https://x.com/trq212/status/2051808772423819507](https://x.com/trq212/status/2051808772423819507)
- Conference signup: [https://claude.com/code-with-claude](https://claude.com/code-with-claude)

Worth tuning the next 48 hours of feeds to this — historically when Thariq says "fun announcements" it's something like the no-flicker renderer or `/schedule once`.

## Mattpocock's "Context Pointers" — the AGENTS.md design pattern

Matt Pocock's **Context Pointers** post is the most-quoted concept of the day in the AI-coding community (~507 likes, 18 RTs and growing rapidly). The thesis: **AGENTS.md should not be a long document — it should be an index of links to other documents.**

> "Context Pointers are a crucial concept for helping AI navigate your codebase. They're the links you put in documents to link to others, so that AI can find its way around without being overwhelmed.
>
> 'Our AGENTS.md used to be huge, now it's mostly context pointers.'
>
> 'These modules are easy to navigate: that shared function acts as a context pointer.'
>
> 'This is how skills work. The harness finds them, pulls their description into context, and adds a context pointer to the main SKILL.md file.'"
> — [https://x.com/mattpocockuk/status/2051587758238371858](https://x.com/mattpocockuk/status/2051587758238371858)

Mattpocock's followup (when asked submodules-with-pointers vs many flat skills): **"I would picture the paths you want your agent to take to find information, and see how many pointers they need to traverse to get there."**

Field reports & extensions in the replies:

- **Phoenix**: "been doing this for months now. our AGENTS.md went from 2000 lines to ~200 with context pointers to specific module docs. **the trick nobody mentions: pointer depth matters. too many hops and the agent burns tokens traversing. we cap at 2 levels deep.**"
- **Boran Cakir**: "I had pointers that looked self-explanatory so the agent never bothered opening them. Logs looked fine, output drifted. Prompting helped a bit, **forcing retrieval at the harness was the only thing that actually held up.**"
- **Aleksandr Fulha**: "this only works **if the harness resolves the pointer automatically**. if the model has to chase the link itself you're back to instruction-and-hope. half ours were proud naming convention until we caught claude guessing what was on the other side instead of opening the file."
- **adi**: "one test i do is that all my UPPERCASE.md files are reachable via links from AGENTS.md."
- **Mia**: "Context pointers feel like the grown-up version of 'just dump the whole repo in the prompt'. The useful bit isn't compression on its own, it's **preserving navigation**. If the model can follow the map when it gets lost, you need far less brittle up-front context."

Counter-data — **Vercel's "AGENTS.md outperforms skills in our agent evals"** post (linked by Jeremy Mack): a compressed 8KB docs index in AGENTS.md achieved 100% on Next.js 16 API evals; skills maxed at 79%. Read: [https://vercel.com/blog/agents-md-outperforms-skills](https://vercel.com/blog/agents-md-outperforms-skills) (URL inferred from quote — verify before sharing).

Adjacent: mattpocock is also previewing **a `/prototype` skill** ("builds a TUI to help you shortcut through state transitions, SO much better than a spec for providing fine-grained feedback") — [https://x.com/mattpocockuk/status/2051914199081652641](https://x.com/mattpocockuk/status/2051914199081652641) — and he's about to ship an **AI Coding Dictionary** ([https://x.com/mattpocockuk/status/2051709391355683062](https://x.com/mattpocockuk/status/2051709391355683062)). Repo trajectory: `mattpocock/skills` is at 60K stars vs `garrytan/gstack` 90K — "I'm coming for you Garry."

## Codex's 5/5 party gift: rate limits 10x'd

Following yesterday's confirmation, the OpenAI 5/5 Party gift dropped today: **Codex rate limits 10x'd for everyone who signed up to the in-person event**. The party math is now visible:

- LLMJunky: "Codex rate limits 10x'd as a gift to the 5th of next month for everyone who signed up for the 5/5 party. **This is madness.** @sama you crazy bro ✌️" — [https://x.com/LLMJunky/status/2051465480620089456](https://x.com/LLMJunky/status/2051465480620089456)
- LLMJunky again, salty (he didn't sign up because he didn't realize OpenAI was paying $900 flights + hotels): "To everyone posting pictures with @sama and team at the OpenAI 5/5 Party, just know I hope you get a SEVERE 3rd degree papercut on your way home." (and: "yeah i'm salty like that. hope it happens on the same finger you press 'Accept Edits' with too") — [https://x.com/LLMJunky/status/2051870592282894416](https://x.com/LLMJunky/status/2051870592282894416)

The **Aether Oracle** sub-thread is the most interesting commentary on what this means for the comparative pricing landscape: *"That's what happens when two things are similar in quality but one is 10x more expensive."* TickerTrends: *"Recent limits on Codex seem to be leaps above Claude Code."*

## Codex vs Claude Code download numbers — Sam Altman objects

The TickerTrends "Codex 46.0M weekly vs Claude Code 491K weekly npm downloads" chart from May 4 is still being chewed on. Sam Altman replied directly:

> "codex is doing great but **this is not possibly accurate**" — [https://x.com/sama/status/...](https://x.com/sama)

Key debunks in the replies:

- **paradite_ (Zhu Liang)**: "1. npm is no longer an official download channel for claude code. it has been deprecated for months. 2. **46M codex download from npm is unlikely organic. probably some kind of misconfiguration or spam.** (it is 130m per week now, which absurd)"
- **morqon**: "codex is approaching 5M users, not 46M, something needs double-checking" — TickerTrends concedes it's "developer npm package downloads, a different metric than DAU."
- **Alex_Rogov_js**: "Downloads ≠ adoption. Codex benefits from VS Code's 40M install base — it gets bundled with existing workflows. **491K intentional installs vs 46M passive ones isn't the same metric.**"

**Mitsuhiko's** alternative explanation, posted today, is the most useful thing here:

> "I really think **'clanker/CI gone wild'** explains this more than 'they all decided to go to codex at the same time'. Or something started depending on it."
> — [https://x.com/mitsuhiko/status/2051673494971175175](https://x.com/mitsuhiko/status/2051673494971175175)

**Jai Jalan** extends: "The CI attribution problem is the hard part. When agents are the ones committing and retriggering pipelines, your standard 'what changed' query returns hundreds of commits with no human intent behind them. Diagnosing root cause means tracing agent behavior, not code diffs."

This is the *first time* a "your CI is being run by agents" hypothesis has been used to explain a public download chart — worth flagging as a new failure mode for npm-download-as-adoption metrics.

## Steipete's CLI shipping rampage — 10 .sh tools in a day

Peter Steinberger ships at terminal velocity again. Tonight's drop is a single tweet listing **ten .sh CLIs** built with Codex, plus a fs-safe primitive and CodexBar 0.24:

- **The CLI list** — [https://x.com/steipete/status/2051900143339704730](https://x.com/steipete/status/2051900143339704730):
  - 🔊 [sonoscli.sh](https://sonoscli.sh) — Sonos
  - 🗃️ [wacli.sh](https://wacli.sh) — WhatsApp
  - 🪶 [birdclaw.sh](https://birdclaw.sh) — X archive
  - 🧰 [gitcrawl.sh](https://gitcrawl.sh) — GitHub archive
  - 🛰️ [discrawl.sh](https://discrawl.sh) — Discord archive
  - 🎧 [spogo.sh](https://spogo.sh) — Spotify
  - 💬 [imsg.sh](https://imsg.sh) — iMessage
  - 🧳 [mcporter.sh](https://mcporter.sh) — MCP to CLI
  - 🗣️ [sag.sh](https://sag.sh) — ElevenLabs voice
  - 🧿 [askoracle.sh](https://askoracle.sh) — second opinion ("dns is slow", currently redirecting to Namecheap)
- **fs-safe**: "🛡️ openclaw/fs-safe — a reusable filesystem safety primitive extracted from OpenClaw. **If your Node app accepts paths from agents, plugins, uploads, configs, or users, stop treating string normalization as a filesystem boundary. Use a root handle.**" — [https://x.com/steipete/status/2051852940554481901](https://x.com/steipete/status/2051852940554481901) → [fs-safe.io](https://fs-safe.io)
- **imsg 0.6 + 0.7** — Private API bridge, watch/history reliability fixes, long fallback message decode, better account diagnostics — [https://x.com/steipete/status/2051905175355351440](https://x.com/steipete/status/2051905175355351440)
- **CodexBar 0.24** — Windsurf, Codebuff + DeepSeek providers; Copilot multi-account switching; opt-in local storage breakdowns; hung Codex RPC + redraw battery drain fixed — [https://x.com/steipete/status/2051882417292525950](https://x.com/steipete/status/2051882417292525950)
- The "**OpenClaw rough week**" recap blog — covering the recent Anthropic ban, the team hire, and where things land — [openclaw.ai/blog/openclaw-rough-week](https://openclaw.ai/blog/openclaw-rough-week)

The deepest reply in the CLI thread is from **kuma 18**: *"This is exactly the kind of tiny CLI stack that becomes useful once agents need real local handles."* And from **Jehangeer H**: *"Feels less like 'a bunch of tools' and more like an orchestration layer over half the internet's communication + archives. **MCP-to-CLI in particular is doing a lot of heavy lifting there.**"*

Adjacent: **kiosa** sums up the meta-narrative perfectly: *"Anthropic banned it, he hired a team, and now Codex is writing CLI wrappers for literally everything, the lobster army is real."*

## Simon Willison: "AI started a cafe in Stockholm — please keep humans in the loop"

Simon's **must-read post of the day** is on Andon Labs' new AI-run business experiment — a cafe in Stockholm (sequel to last year's San Francisco AI-run retail store). His framing:

> "AI-run business experiments are interesting and fun up to the point where they **waste the time of humans who haven't opted into the experiments** — I think they need to keep their own human operators in the loop for outbound actions that affect other people."
> — [https://x.com/simonw/status/2051788176071745592](https://x.com/simonw/status/2051788176071745592)
> Post: [https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/)

Top reply, from **Virgil**: *"yes, and 'human in the loop' can still be fake consent. if the human on the other end never opted in, you've just outsourced your product testing to strangers. **a lot of agentic outbound feels less like automation and more like conscription.**"*

**Mian Shafiq's** field report: *"We hit the exact same wall building autonomous WhatsApp outreach. The moment we added a 'human-approves-first-message' rule for new contacts, complaints dropped to near zero. Consent changes more than you'd expect — even response rates went up."*

**Zara**'s framing of the asymmetry: *"when an agent acts on N humans, even a 1% screwup rate becomes someone's bad day. **Outbound-action thresholds should be 10x stricter than internal-tooling thresholds**, and most 'look an agent ran my business' demos blur the two."*

## Bun Zig→Rust port: **experimental branch, not a switch** (confirmed)

Following yesterday's `docs/PORTING.md` discovery, Simon Willison confirmed the scope:

> "**Confirmed that this is an experimental branch, not a decision to switch languages.**"
> — [https://x.com/simonw/status/2051611966683463764](https://x.com/simonw/status/2051611966683463764)

Mitsuhiko's commentary today:

> "The combination of this, and Bun doing a clanker supported rewrite to Rust is at the very least a damn interesting experiment. I'm not ready for that future, but I'm glad someone is pushing the boundaries."
> — [https://x.com/mitsuhiko/status/2051569924850470962](https://x.com/mitsuhiko/status/2051569924850470962)

So: **Bun is exploring a Rust port to better support coding-agent contributors, but is not deciding to migrate**. Robobun remains the top contributor.

## Cofounder 2: "Run an entire company with agents"

**Cofounder 2** by @ndrewpignanelli launched today. Boosted hard by Jerry Liu (LlamaIndex CEO):

> "**Run an entire company with agents** 🔥 It's always awesome to see companies continuing to innovate on AI-native UI/UX, particularly around multi-agent coordination, to solve deeply complex tasks beyond what a single user can easily define via a chat interface."
> — [https://x.com/jerryjliu0/status/2051783364555034951](https://x.com/jerryjliu0/status/2051783364555034951)

The pitch: "**Infrastructure for the one-person billion-dollar company** — orchestrating agents across engineering, sales, marketing, ops, and design." Read: [https://x.com/ndrewpignanelli/status/2051323944452411773](https://x.com/ndrewpignanelli/status/2051323944452411773)

Worth pairing with Simon's piece above as the policy/product split this week: one camp shipping agent-runs-the-company products, another camp asking *what about the humans on the receiving end of those agents*.

## Mitsuhiko: "Why does everyone want managers to be ICs?"

The day's hottest meta-thread on engineering org dynamics in the AI era. Two posts:

- "Why does everybody want managers to be ICs? Please someone explain this to me from first principles." — [https://x.com/mitsuhiko/status/2051686334289285155](https://x.com/mitsuhiko/status/2051686334289285155)
- "Also pretty much everybody I talked to, who has been exposed to this yet: **having non-engineers ship code sucks for every engineer on the org. I would not (at least at present) advertise that.**" — [https://x.com/mitsuhiko/status/2051688233466048778](https://x.com/mitsuhiko/status/2051688233466048778)

This is the cleanest pushback I've seen this month against the "everyone is a developer now" pitch. Pair with mattpocock's "AI negligence" thread from May 3 — the bottom-up team complaint is converging.

## Quick hits

- **LlamaIndex on the CBInsights AI 100 list for 2026** under AI Infrastructure (focus: document understanding API for agents). Companion VentureBeat piece: *"the AI scaffolding layer is collapsing"*, with Jerry Liu's gloss: *"95% of our code is probably generated by AI"* and *"orchestration framework era is over."* — [https://x.com/jerryjliu0/status/2051682056837779563](https://x.com/jerryjliu0/status/2051682056837779563), [VentureBeat article](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives), [podcast](https://www.youtube.com/watch?v=HbXvX-KtkSs)
- **Theo's $1M Azure podcast drop** ("I almost lost $1,000,000. Obviously we had to talk about it on the podcast"): topics — Azure Woes (00:52), Cloud Platform Talk (11:22), Coding Agents (18:08), GPT-5.5 pricing debate (29:06), OpenClaw workflows (45:14), G Stack/G Brain (1:12:37), Dynamic UI (1:29:00). — [https://x.com/theo/status/2051818430337253691](https://x.com/theo/status/2051818430337253691)
- **Mattpocock**: "I'm about to ship an AI Coding dictionary. But I need help defeating the final boss. So, in your own words... **what is AI?**" — [https://x.com/mattpocockuk/status/2051709391355683062](https://x.com/mattpocockuk/status/2051709391355683062). Also: hits **200K YouTube subs**.
- **Mattpocock's `mattpocock/skills` repo at 60K stars**, gaining on `garrytan/gstack` (90K). Dillon Mulroy (RT'd): *"i've been trying to merge at least one PR a day using @mattpocockuk's improve-codebase-architecture skill, and it has turned into my favorite work each day."*
- **Steipete's "I asked Molty to review my PR and it made a song"** (OpenClaw + Google Meet integration so Molty wants to join every meeting now) — [https://x.com/steipete/status/2051707256396267913](https://x.com/steipete/status/2051707256396267913)
- **simonw on quantization** — Granite 4.1 3B SVG-pelican gallery covering 21 different quantized variants of the same 3B model, with the takeaway *"the results weren't as interesting as I had hoped"* — [https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/](https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/)
- **Redis just shipped a new array data type** with index access + a text-grep search mechanism (PR [#15162](https://github.com/redis/redis/pull/15162)). Simon built a [WebAssembly playground](https://tools.simonwillison.net/redis-array) entirely on his phone with Claude Code for web. — [https://x.com/simonw/status/2051310232022986772](https://x.com/simonw/status/2051310232022986772)
- **Theo on Jared's new GitHub UI redesign**: *"This is what GitHub would look like if it was designed by Xbox. Congrats to Jared on the new role 🫡"* — [https://x.com/theo/status/2051735400126025737](https://x.com/theo/status/2051735400126025737)
- **High Leverage Podcast E9** with Joe Ruscio + Simon Willison on the rapid evolution of AI coding tools (vibe coding → agentic engineering, how coding agents reshape software development) — [https://x.com/heavybit/status/2051695647632277691](https://x.com/heavybit/status/2051695647632277691)
- **Devin** is "really cooking rn — completely under the twitter-radar somehow" per Ben Hylak (RT'd by swyx) — [https://x.com/benhylak/status/2051318395467940144](https://x.com/benhylak/status/2051318395467940144)
- **Mattpocock**: "What's the best 'AI Writing Detector' out there? Want to QA my new AI writing skills against what the industry is using." — [https://x.com/mattpocockuk/status/2051575472715075878](https://x.com/mattpocockuk/status/2051575472715075878)

## Off-topic but funny

- **All of `.de` went offline today** for several hours. Mitsuhiko: *"How the hell do you take all of .de offline? **Deutschland hat fertig.**"* and: *"It's actually kinda funny how little I notice because very little of value or importance actually uses a .de domain."* — [https://x.com/mitsuhiko/status/2051765430809719181](https://x.com/mitsuhiko/status/2051765430809719181)
- **Theo's vesting cliff PSA**: he watched "the vast majority of reply guys" misuse the term in a thread on equity, dropped a clarification thread (vesting cliff = time *until* you start vesting, fully vested = time until you're done; *not* the cliff that "ends your salary"). It's funnier than it should be. — [https://x.com/theo/status/2051546385946947823](https://x.com/theo/status/2051546385946947823)
