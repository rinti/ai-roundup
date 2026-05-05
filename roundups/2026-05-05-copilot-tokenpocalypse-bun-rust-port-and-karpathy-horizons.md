# 2026-05-05 — GitHub Copilot Tokenpocalypse, Bun's Rust Port Hint & Karpathy's Three New Horizons

## Theo's GitHub Copilot $221-on-a-$40-plan exposé

The day's biggest story in agent economics: Theo sent **a single Copilot message that ran for ~7 hours, did 60M+ tokens, and consumed an estimated $221 of inference**. After 15 messages he had logged $221 of token cost on a $40/month plan — **1.6% of his quota used.**

> "I sent a single message on Copilot and it did over 60m tokens. It's still going. $30 of inference so far. In their current billing model, you get 1,500 messages, regardless of how expensive each is. I'm pretty sure I can do $45,000 of messaging on this plan."
> — [https://x.com/theo/status/2051218167780041147](https://x.com/theo/status/2051218167780041147)

His subsequent breakdown:

- "I'm at over $115 of usage so far (using generously low estimates with cache considered)… Worst case, I'm on pace to do **$14,375 of compute on my $40 plan** lmao." [https://x.com/theo/status/2051221089712517338](https://x.com/theo/status/2051221089712517338)
- "Holy shit I might break 1m down on this single message. Running for 7 hours. Wild." [https://x.com/theo/status/2051224947478106358](https://x.com/theo/status/2051224947478106358)
- The post-mortem tweet: 15 messages, $221 of tokens, 1.6% of plan used → "**It's obvious that GitHub couldn't keep this model for billing on Copilot.**" [https://x.com/theo/status/2051395816410210604](https://x.com/theo/status/2051395816410210604)
- The kicker: "Worth noting that they are **moving OFF of this billing model on June 1st**. The 'per message billing' model is dead. Some requests cost fractions of a cent, others cost 4 digits." [https://x.com/theo/status/2051218299384705037](https://x.com/theo/status/2051218299384705037)

This is the cleanest live demonstration to date that **per-message billing for agent products is structurally broken** — on a long-horizon agent, message-count is decoupled from cost by 3+ orders of magnitude. (Compare the OpenAI Codex/Claude Pro/Max pricing-postmortem cycles from the past 3 weeks; the wrapper-vs-substrate margin debate is converging on the same answer at every layer.)

## Bun's Rust port (?) — coding agents discover the smoking gun

Late Monday, **Luke Parker** spotted a commit in `oven-sh/bun` and fired the alarm:

> "what!? is Bun moving from Zig to Rust??? [github.com/oven-sh/bun/commit/9f3917e979fecd2dae1327e159c6b2fd258bb67f](https://github.com/oven-sh/bun/commit/9f3917e979fecd2dae1327e159c6b2fd258bb67f)" — [https://x.com/LukeParkerDev/status/2051431276205461635](https://x.com/LukeParkerDev/status/2051431276205461635)

**Simon Willison** confirmed by finding the actual coding-agent guide in the repo:

> "Sure looks like Bun is at least exploring a port from Zig to Rust given this **`docs/PORTING.md` guide for coding agents** [github.com/oven-sh/bun/blob/…/docs/PORTING.md](https://github.com/oven-sh/bun/blob/46d3bc29f270fa881dd5730ef1549e88407701a5/docs/PORTING.md)" — [https://x.com/simonw/status/2051476878712840407](https://x.com/simonw/status/2051476878712840407)

The fact that the migration is **shipped as instructions for agents to execute, not for humans** is the actual story. Robobun (Bun's autonomous-PR agent) has been the **top contributor to the project for months**, per Jared Sumner:

> "Robobun is the top contributor to Bun for months now. Even if we only merge a fraction of the PRs, it's worth it. We didn't have to write the code ourself or debug it ourselves. As long as the tests are good, the tests fail on main, and the fix is correct." — [https://x.com/jarredsumner/status/2051450571060867148](https://x.com/jarredsumner/status/2051450571060867148)

**Mitsuhiko** captured the surreal flavor of the resulting maintainer experience:

- "**Five minutes after reporting a bun bug.** Both cool and disturbing :D" [https://x.com/mitsuhiko/status/2051410782546436427](https://x.com/mitsuhiko/status/2051410782546436427)
- "And it pushed a PR up. now **one clanker is arguing with another clanker**. [github.com/oven-sh/bun/pull/30257](https://github.com/oven-sh/bun/pull/30257)" [https://x.com/mitsuhiko/status/2051416096289267862](https://x.com/mitsuhiko/status/2051416096289267862)
- "I am not sure how I missed this, but the whole bun repo at this point looks like **modern performance art**." [https://x.com/mitsuhiko/status/2051418854052528614](https://x.com/mitsuhiko/status/2051418854052528614)

Context for the Zig angle: Zig project leader Andrew Kelley recently issued a [blanket ban on AI-assisted contributions](https://simonwillison.net/2026/Apr/30) (covered in our Apr 30 roundup). If Bun does end up porting to Rust because the agent ecosystem has consolidated there, that's a much bigger story about **language ecosystems where coding agents will / won't be welcome**.

## Mitsuhiko's "Content for Content's Sake" — the slop math

Armin's blog post the same day is the empirical companion piece to mattpocock's "AI negligence" thread from yesterday. He took **90 days of his local coding sessions**, looked for medium-frequency words that were inflated relative to `wordfreq` baselines, then cross-referenced US Google Trends. Words that pop in agent output (like "substrate" and "capability") **also spike on Google Trends**.

The personal anxiety inside the post is the more interesting part:

> "I am increasingly worried that I'm starting to **write like an LLM** because I just read so much more LLM text. The first time I became aware of this was that I used the word 'substrate' in a talk… Since then, however, I am reading this word everywhere."

His thesis, in three pieces:

1. **Engagement farming**: "There are entire companies now that just exist to automate sending LLM-generated shit and people evidently pay money for it… real genuine human signal is losing out quickly."
2. **Speed Should Kill** (but doesn't): if quality won, slop would lose; instead, slop gets posted faster than thoughtful replies and **wins on the algorithm** anyway. Open Source has the same dynamic — projects get "remixed" with marketing sites within hours.
3. **Friction & Rate Limiting** is the missing primitive: "We have known for a long time that certain things should not be easy, because of the misuse that happens. We know it in engineering; we know it when it comes to governmental overreach. Now we are probably going to learn the same lesson in many more situations because LLMs make almost anything that involves human text much easier."

- Tweet: [https://x.com/mitsuhiko/status/2051299945542553860](https://x.com/mitsuhiko/status/2051299945542553860)
- Blog: [lucumr.pocoo.org/2026/5/4/content-for-contents-sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)

Adjacent: he also analyzed his pi (pi-mono) issue tracker and found that the bulk of slop tickets are agents acting on people's accounts without the human even being aware. "**One person, 4 tickets in 15 minutes, all useless slop. How did we end up here.**" [https://x.com/mitsuhiko/status/2051204508844196097](https://x.com/mitsuhiko/status/2051204508844196097)

## Karpathy's Sequoia Ascent fireside — three new horizons, jaggedness, agent-native economy

Karpathy posted his recap of the Sequoia Ascent 2026 fireside chat. His core argument: **LLMs are not just for speeding up existing things; they enable categories of products that classical code couldn't even attempt.**

Three examples of new horizons he pushed:

1. **`menugen`** — "an app that can be fully engulfed by LLMs, with no classical code needed: input an image, output an image and an LLM can natively do the thing."
2. **Install `.md` skills instead of `.sh` scripts** — "Why create a complex Software 1.0 bash script for installing a piece of software if you can write the installation out in words and say 'just show this to your LLM'." LLM = English interpreter that can target your specific setup and debug inline.
3. **LLM knowledge bases** — "an example of something that was *impossible* with classical code because it's computation over unstructured data (knowledge) from arbitrary sources and in arbitrary formats."

The jaggedness theme:

> "How it can be true that a single artifact will simultaneously 1) coherently refactor a 100,000-line code base **and** 2) tell you to walk to the car wash to wash your car… revenue/TAM dictates what the frontier labs choose to package into training data distributions during RL. **You're either in the data distribution (on the rails of the RL circuits) and flying or you're off-roading in the jungle with a machete**, in relative terms."

Closing with the agent-native economy: products & services as sensors / actuators / logic, "making information maximally legible to LLMs," and "hints/dreams of fully neural computing handling the vast majority of computation with some help from (classical) CPU coprocessors."

Post: [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523) (tweeted Apr 30 but actively recirculating today)

## Codex 5/5 token party: rate limits 10x'd

LLMJunky's Sunday call ("you should use absolutely all of the Codex usage you can before 5/5 because there's absolutely no way we don't get a reset. **finna be a token party**") **paid off** today. OpenAI 10x'd Codex rate limits as a 5/5 gift to subscribers:

> "Codex rate limits 10x'd as a gift to the 5th of next month for everyone who signed up for the 5/5 party. This is madness. **@sama you crazy bro ✌️**" — [https://x.com/LLMJunky/status/2051465480620089456](https://x.com/LLMJunky/status/2051465480620089456)

This connects back to the Theo Copilot story above: token-based plans are the dominant pricing primitive now, and OpenAI is using subscriber-friendly token resets as a hard moat against Copilot's collapsing per-message economics.

## LLMJunky's macOS-vs-Linux Codex Computer Use challenge

A Linux maximalist (LinuxBTW) claimed that Codex Computer Use on macOS isn't special — Omarchy can do the same thing. LLMJunky's response:

> "Challenge accepted. So I had Codex draw him a painting using only its mouse, no other tools. Holler at me when you can do this." — [https://x.com/LLMJunky/status/2051454763347181676](https://x.com/LLMJunky/status/2051454763347181676)

The video shows Codex driving the macOS pointer through a paint app to produce an actual image, no DOM/accessibility shortcuts, just mouse moves. The wider thesis from his earlier post in the window:

> "I'm increasingly becoming **macOS pilled**. And it's really because of two apps: **Codex and Clicky**. Since the dawn of computing, machines have been designed around people using them directly… But the next shift is already starting: humans won't always be the ones at the keyboard."
> [https://x.com/LLMJunky/status/2051342251477946521](https://x.com/LLMJunky/status/2051342251477946521)

The frame: macOS's accessibility surface + apps like Clicky (local computer-control bridge) make Mac a more capable agent host than Linux right now, regardless of the kernel-level argument.

## Steipete: Crabbox 0.5.0 ships with VNC + AWS Windows

Crabbox went from "ephemeral machines for agents" (0.4 yesterday) to a real-time shared-desktop primitive overnight:

> "Crabbox 0.5.0 is live 🦀
>  🖥️ Desktop/browser leases
>  🧑‍💻 VNC + authenticated WebVNC
>  🪟 AWS Windows + WSL2
>  📸 Screenshots + app launch
>  Remote CI boxes, now suspiciously usable."
> [https://x.com/steipete/status/2051485798613111116](https://x.com/steipete/status/2051485798613111116) — [github.com/openclaw/crabbox](https://github.com/openclaw/crabbox)

The 0.4 → 0.5 jump in one day is interesting on its own — desktop leases and authenticated WebVNC bring this a lot closer to **Anthropic's Claude Computer Use developer experience but as an OSS layer**. Combined with WSL2 + Windows AWS support, it's the most platform-agnostic agent-controlled-machine primitive in OSS today.

Also noted in steipete's RTs: **Veritas Kanban 4.0.1** (OpenClaw task manager) shipped a security pass on its n8n webhook — required shared secret + timing-safe checks, addressing the kind of issues the OpenClaw security postmortems have been flagging. [https://x.com/BradGroux/status/2051151592754180128](https://x.com/BradGroux/status/2051151592754180128)

## Theo on the OpenAI ↔ Microsoft breakup

Theo dropped a long video he says he's been working on:

> "OpenAI and Microsoft broke up. The impact of this is massive and I don't think enough people understand why. Put a lot of time into tracking the history of the deal to help you all understand 🫡"
> [https://x.com/theo/status/2051535315287060790](https://x.com/theo/status/2051535315287060790) (video)

He pinned the post. Combined with the Copilot tokenpocalypse story above, today's Theo throughline is **"Microsoft's AI stack is structurally fragile, and that fragility is now visible at both the partnership-strategy level and the product-billing level."**

## swyx — current AI lab valuations & the Plan-and-Review pivot

swyx revisited his August 2025 ARR-multiples chart with new numbers:

> "OAI 850B valuation, ~30B ARR now
> Ant ~900B valuation, ~44B* ARR now
> *revenue recognized differently, per Denise Dresser its probably closer to 8-10B lower if using OAI methodology"
> [https://x.com/swyx/status/2051440392722391180](https://x.com/swyx/status/2051440392722391180)

For comparison, his Aug 2025 numbers were OAI 300B/13B ARR and Ant 170B/5B ARR — both labs roughly **3× their valuation and ~3-9× their ARR in nine months**.

Also from swyx today, recirculating from AIE Europe: **Steve Ruiz's "What if chat is the wrong interface for managing agents?"** talk is now public on YouTube — the "agents on a shared canvas" thesis from TLDraw. [https://x.com/swyx/status/2051329419860758932](https://x.com/swyx/status/2051329419860758932)

## Mattpocock — 200K YouTube subs, vocab thread, AI-as-compiler-output meme RT

A milestone day for Matt's content arm:

- **200K YouTube subs**: [https://x.com/mattpocockuk/status/2051331116313796972](https://x.com/mattpocockuk/status/2051331116313796972)
- "**4 of the most confusing terms in AI, defined**": Model = stateless next-token blob; **Harness** = everything around the model that turns it into an agent (tools, system prompt, context-window mgmt); **Environment** = the rest. [https://x.com/mattpocockuk/status/2050456062520615131](https://x.com/mattpocockuk/status/2050456062520615131)
- The "**agent output as compiler output**" meme RT — Matt declared the "but you don't review compiler output either" take "the perfect signal for being immediately able to ignore someone in this space." [https://x.com/badlogicgames/status/2050972668178944477](https://x.com/badlogicgames/status/2050972668178944477)

Also confirmed: he's giving an **AI-focused talk at ETN this Tuesday at 1:00 PM BST** (live + filmed). [https://x.com/etnshow/status/2051259837447536784](https://x.com/etnshow/status/2051259837447536784)

## Theo's vesting-cliff vocabulary fight (off-topic, but unavoidable)

Theo spent a chunk of the day correcting people on what "vesting cliff" actually means (the 1-year initial wait, **not** the 4-year fully-vested point). The thread is mostly off-topic, but a useful glossary if you've ever been confused: [https://x.com/theo/status/2051546385946947823](https://x.com/theo/status/2051546385946947823).

## simonw — Granite 4.1 quant gallery + Redis arrays playground (built on phone via CCfW)

Simon's experiment running the canonical "Generate an SVG of a pelican riding a bicycle" prompt against **21 different quantized variants of IBM's new Granite 4.1 3B model**:

> "the results weren't as interesting as I had hoped" — there's no clean quality-vs-size pattern, "they're all pretty terrible." Will retry with a model that draws pelicans better.
> [https://x.com/simonw/status/2051449431686525102](https://x.com/simonw/status/2051449431686525102)

Separately, **Redis just dropped an array data type** (PR by Salvatore Sanfilippo). Simon used Claude Code for web to build [an interactive WebAssembly playground for the new ARGREP/ARGET/ARSCAN commands](https://tools.simonwillison.net/redis-array). The ARGREP command runs server-side grep against a range using a newly vendored TRE regex library. [Salvatore's writeup](https://antirez.com/news/164) covers the AI-assisted dev process for the Redis side. [https://x.com/simonw/status/2051310232022986772](https://x.com/simonw/status/2051310232022986772)

## Misc / shorter

- **Mitsuhiko on Vercel's `deepsec`**: "Curiously this does not use the Vercel AI SDK." (deepsec is Vercel's new OSS coding-security harness — CLI-first, sandbox-based, pluggable agents). [https://x.com/mitsuhiko/status/2051396472222920880](https://x.com/mitsuhiko/status/2051396472222920880); deepsec announce: [https://x.com/vercel_dev/status/2051381241283539255](https://x.com/vercel_dev/status/2051381241283539255)
- **pi (pi-mono) status**: ongoing refactor — "Biggest changes are SSE downgrade for when websockets fail, rendering improvements to the read tool and some perf fixes for bash." Closes part of the WebSocket-fallback theme from yesterday's roundup. [https://x.com/mitsuhiko/status/2051370264269603204](https://x.com/mitsuhiko/status/2051370264269603204)
- **mattpocockuk — How it started**: nostalgia post comparing his current YouTube workflow to where he started. [https://x.com/mattpocockuk/status/2051193429883830479](https://x.com/mattpocockuk/status/2051193429883830479)
- **OpenClaw Discord outage**: Steipete's primary OpenClaw Discord guild was down all of Monday; backup invite at [discord.gg/openclaw](https://discord.gg/openclaw). [https://x.com/steipete/status/2051341022731407365](https://x.com/steipete/status/2051341022731407365)
- **Sydney Sweeney open-sourced an app she built using only ChatGPT** (RT'd by Theo). [https://x.com/useTRMNL/status/2050947776330998228](https://x.com/useTRMNL/status/2050947776330998228)
- **jerryjliu0 on VentureBeat**: "Don't let Anthropic own your stack. Modular architecture is the only real hedge in the agent era." — recirculating from yesterday. [piped.video/watch?v=HbXvX-KtkSs](https://piped.video/watch?v=HbXvX-KtkSs)
- **Code with Claude conference returns next week** (announced by ClaudeAI, RT'd by trq212): live-streamed sessions for every level of CC user. [claude.com/code-with-claude](https://claude.com/code-with-claude)
- **leerob — "No product, no marketing, no design… just Builders™"** (the day's most-viral leerob micro-meme). [https://x.com/leerob/status/2050723800568774987](https://x.com/leerob/status/2050723800568774987)

## Videos worth watching

- **Theo — "OpenAI and Microsoft broke up. Why it matters."** Long-form explainer (pinned). [https://x.com/theo/status/2051535315287060790](https://x.com/theo/status/2051535315287060790)
- **LLMJunky — Codex draws a painting on macOS using only the mouse**. Short clip, the actual proof of computer-use. [https://x.com/LLMJunky/status/2051454763347181676](https://x.com/LLMJunky/status/2051454763347181676)
- **Steve Ruiz / TLDraw — "What if chat is the wrong interface for managing agents?"** (AIE Europe talk now public). [https://x.com/aiDotEngineer/status/2050243598676013312](https://x.com/aiDotEngineer/status/2050243598676013312)

## News / longer reads

- **Armin Ronacher — "Content for Content's Sake"**: the slop-math + cultural-anxiety blog post above. [lucumr.pocoo.org/2026/5/4/content-for-contents-sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)
- **Salvatore Sanfilippo — "Redis array: short story of a long development process"**: AI-assisted dev process behind the Redis array data type. [antirez.com/news/164](https://antirez.com/news/164)
- **Simon Willison — "Granite 4.1 3B SVG Pelican Gallery"**: 21 quants × 1 prompt, no clear pattern. [simonwillison.net/2026/May/4](https://simonwillison.net/2026/May/4)
- **Vercel Engineering — `deepsec`**: open-source coding-security harness. [github.com/vercel/deepsec](https://github.com/vercel/deepsec) (announced via [@vercel_dev](https://x.com/vercel_dev/status/2051381241283539255))
- **Bun `docs/PORTING.md`**: the Zig→Rust migration guide written *for coding agents*. [github.com/oven-sh/bun/blob/…/docs/PORTING.md](https://github.com/oven-sh/bun/blob/46d3bc29f270fa881dd5730ef1549e88407701a5/docs/PORTING.md)

## Non-AI / off-topic

- **mitsuhiko on US aviation incidents**: "What the fuck is going on with aviation in the US these days?" — quoting a Newark UA169 ground strike. [https://x.com/mitsuhiko/status/2051264914711302403](https://x.com/mitsuhiko/status/2051264914711302403)
- **mitsuhiko on Vienna's free outdoor-park afternoon care**: not AI, but a public-services flex. [https://x.com/mitsuhiko/status/2051242698573545504](https://x.com/mitsuhiko/status/2051242698573545504)
- **Theo on basic vesting/equity vocabulary**: long correction thread (see above).
