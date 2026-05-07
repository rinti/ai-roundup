# 2026-05-07 — Anthropic ↔ SpaceX, Dreaming Lands & robobun Outpaces Jarred

## Anthropic ↔ SpaceX: Colossus 1 goes Claude, "multi-gigawatt orbital compute" on the table

The headline news of Code with Claude's keynote yesterday in SF — and the biggest plot twist in the AI compute story so far — is **Anthropic announcing a compute partnership with SpaceX/xAI**, including immediate access to Colossus 1.

- Claude (@claudeai): "We've agreed to a partnership with @SpaceX that will substantially increase our compute capacity. This, along with our other recent compute deals, means that we've been able to increase our usage limits for Claude Code and the Claude API." — [https://x.com/claudeai/status/2052060691893227611](https://x.com/claudeai/status/2052060691893227611)
- The numbers: **300+ MW additional capacity within the month**, **220K+ NVIDIA GPUs** inside Colossus 1.
- Effective today: **5-hour rate limits doubled** for Pro, Max, Team, and seat-based Enterprise; **peak-hour reductions removed** for Pro and Max; **substantially higher API rate limits for Opus**.
- bcherny: "Demand has outpaced our capacity recently, and we know it's been frustrating. We take your feedback to heart, thank you for sticking with us." — [https://x.com/bcherny/status/2052070555151708564](https://x.com/bcherny/status/2052070555151708564)
- Anthropic's writeup: [anthropic.com/news/higher-limits](https://anthropic.com/news/higher-limits)

The xAI side adds the most surreal detail of the year:

- xAI (@xai): "SpaceXAI will provide @AnthropicAI with access to Colossus 1, one of the world's largest and fastest-deployed AI supercomputers, to provide additional capacity for Claude" — [https://x.com/xai/status/2052060350770515978](https://x.com/xai/status/2052060350770515978)
- xAI followup: "**SpaceXAI and @AnthropicAI have also expressed interest in partnering to develop multiple gigawatts of orbital AI compute capacity.**" — [https://x.com/xai/status/2052060561857302605](https://x.com/xai/status/2052060561857302605)
- NVIDIA picked up the headline immediately: "Two frontier labs. One accelerated computing platform. Congrats to @SpaceX and @AnthropicAI on the new compute partnership, powered by 220,000+ NVIDIA GPUs inside Colossus 1." — [https://x.com/nvidia/status/2052091408643756296](https://x.com/nvidia/status/2052091408643756296)

The reply guys in shock — note that **Elon Musk has spent the past year publicly trolling Anthropic as "Misanthropic"** (theo quote-tweeting the older Musk tweet and Anthropic's ad: "Frankly, I don't think there is anything you can do to escape the inevitable irony of Anthropic ending up being Misanthropic. You were doomed to this fate when you chose your name." — [https://x.com/theo/status/2052146809699786883](https://x.com/theo/status/2052146809699786883)). Highest-signal replies under the announcement threads:

- **The Calda**: "SpaceX might have just given Claude the upper hand in the AI race"
- **Saeef**: "Compute wars just went orbital. Power + vision = humanity wins. 2026 is cooking."
- **Aditya Chhabra**: "The AI race is no longer about models alone. It's about who can scale inference faster than demand."
- **Patryn23**: "Why? Giving away your own compute to a competitor who is already ahead, to enable them to get even further ahead? And promising them access to the Holy Grail of Space Compute too, which was XAI's key future advantage? Has XAI surrendered then? Does Elon know about this decision?"
- **Mike Wojtanowicz**: "bro gave the company he calls 'Misanthropic' additional compute to spite @sama, have to respect the pettiness"
- **Mookafish**: "Never expected Elon to work with Anthropic after he very publicly said it was misanthropic on multiple occasions but here we are I guess..."
- **Waterloose** (sober ops take): "**300MW of additional capacity is essentially adding a mid-sized nuclear reactor's worth of demand to a single site in four weeks.** Even with pre-staged racks, the networking and cooling synchronization for a cluster that size is a logistical nightmare. The math isn't mathing."
- **Shahid**: "Interesting shift — competitors becoming infrastructure partners. The real race isn't model vs model anymore. **It's who controls the compute.**"
- **Harlech Business Insights**: "Anthropic gets additional compute capacity without the capital burden of building it — and xAI gets a high-profile partner that signals **Colossus is open for business**. Mutually beneficial infrastructure deals like this tend to quietly reshape the competitive landscape far more than the headlines suggest."

Important fine print being flagged in the threads:

- **MCP / user1508123**: Several users note the increase is to the 5-hour window, not the **weekly** quota — "you'll have the same quota for the week but you'll be able to hit it faster."
- **Madan Park**: "Your 5 hour window doubles but your weekly is the same. You have the same plate of pasta but I'll give you a shovel to eat."

Theo's read on this dropped earlier in the day, before the announcement — and it aged pretty well:

- czajkadev: "Looks like @theo was spot on in his latest video. **Compute was the bottleneck.**" — [https://x.com/czajkadev/status/2052101699188248990](https://x.com/czajkadev/status/2052101699188248990)
- theo's pinned 23min explainer (recorded before announcement, posted again ~1h after): [https://x.com/theo/status/2052114791045668894](https://x.com/theo/status/2052114791045668894) — "I wanted to clear up some common misconceptions about the issues AI companies are facing. tl;dr - it's not just money, it's about compute."
- Theo's followup live broadcast at 2pm PT: [https://x.com/theo/status/2052114866912260387](https://x.com/theo/status/2052114866912260387)

Trq212's cleanest framing: "We're winding back our peak hours limit reduction and doubling 5 hour limits. Excited to partner with SpaceX to bring you more compute and we'll keep pushing to bring you the best coding agent in the world." — [https://x.com/trq212/status/2052065936585457982](https://x.com/trq212/status/2052065936585457982). And the new Anthropic posture quote, captured by trq212 from the conference: "everyday we're trying to obtain more compute to pass on to you, we're sorry if it takes sometime but we're going to acquire as much as we can" — [https://x.com/trq212/status/2052250816720056604](https://x.com/trq212/status/2052250816720056604).

## Code with Claude: Dreaming, Outcomes, Multiagent Orchestration ship

Anthropic's first-ever developer conference dropped a bigger feature lineup than the rate-limit story alone, but it got buried under the SpaceX news. The four announcements:

**1. Dreaming (Claude Managed Agents, research preview)** — the biggest async-agents primitive of the day:

- "Dreaming reviews your agent's past sessions, extracts patterns, and curates memories so your agents learn over time." — [https://x.com/claudeai/status/2052067400690851842](https://x.com/claudeai/status/2052067400690851842)
- swyx, live from the event: "omg @bcherny with banger quotes 'the future is more async agents… this is why we emphasize verification' '**if you're familiar with higher order functions, routines are higher order prompts**' 'default is i will now have claude prompt claude code' 'the capability is already here - the gap left is how to put it to work.'" — [https://x.com/latentspacepod/status/2052068066167816369](https://x.com/latentspacepod/status/2052068066167816369)

The Dreaming reply thread is already producing the production-grade questions that hint at where this primitive is fragile:

- **engineer cat**: "wait, **can Dreaming drop memories that turn out to be wrong, or is it strictly additive?** what gets kept is going to matter way more than what gets added"
- **Tommaso Rinversi**: "The hard part is not memory. **It is auditable memory:** where a promoted fact came from, when it expires, which run it influenced, and how to roll it back."
- **Guy Braunstain**: "The real treasure in past Claude Code sessions isn't the answers. **It's the wrong turns.** Every failed attempt the agent paid for before finding the solution. Annoying that Claude Code deletes it all after 30 days by default. The setting to keep it (`cleanupPeriodDays`) is buried."
- **Gabriel Mares**: "But why does it assume that my conversation patterns are good practices for the future? **Dreaming might also contribute to hallucination.**"
- **FirmBrain**: "The loop infrastructure is here. The next meter of value lives in what the agent gets to read between dreams. **For law firms the compounding target is partner edits, prior matters, contract markups. Vertical corpora are where dreaming actually pays compound interest.**"
- **mkultra (mkhaytman87)** and others claim they shipped this in their OpenClaw forks first, with the same name — there's a flurry of "you copied my fork" replies. Atanasio Juarez most pointed: "When yet another frontier AI lab straight copies code you wrote and quietly open sourced over a month ago and claims it as their own."

**2. Outcomes (public beta)**: write a rubric, a separate grader checks the output, the agent iterates until it gets there. Subscribe to webhooks for completion notifications.

**3. Multiagent orchestration (public beta)**: a lead agent delegates to specialists that work in parallel.

**4. Webhooks (public beta)** for managed-agent lifecycle events.

Full keynote writeup: Anthropic's [claude.com/blog/new-in-claude-managed-agents](https://claude.com/blog/new-in-claude-managed-agents). The cleanest live coverage of the day was Simon Willison's keynote live blog: [https://simonwillison.net/2026/May/6/code-w-claude-2026/](https://simonwillison.net/2026/May/6/code-w-claude-2026/).

Eugene Yan's same-morning essay slots neatly into the Dreaming/async-agents framing — circulated by swyx as the canonical thinking-out-loud companion piece:

- "some thoughts on working with ai models • **context as infra • taste as config • verification for autonomy • scaling via delegation • closing the loop**" — [https://x.com/eugeneyan/status/2051855557406171448](https://x.com/eugeneyan/status/2051855557406171448) ([eugeneyan.com/writing/working-with-ai-models](https://eugeneyan.com/writing/working-with-ai-models))

## robobun has now made more contributions to Bun than Jarred himself

The most photogenic moment from Code with Claude's stage was Simon Willison's tweet from bcherny + jarredsumner's joint talk:

- **simonw**: "Watching @jarredsumner and @bcherny at Code w/ Code talking about robobun, the Bun project's GitHub bot that's now made **more contributions to Bun than Jarred has** [github.com/robobun](https://github.com/robobun)" — [https://x.com/simonw/status/2052133374018699373](https://x.com/simonw/status/2052133374018699373)
- Simon's audience-mode question, since Q&A wasn't open: "**@jarredsumner do you end up actually reading all of that chatter between the review bots on a PR?**" — [https://x.com/simonw/status/2052136006720299117](https://x.com/simonw/status/2052136006720299117)

Continuing yesterday's Bun Zig→Rust subplot: jarredsumner confirmed the port is **experimental, not a decision** — "I want to see what a viable side by side comparison looks like. Does it use less memory? How many crash reports go away? What does the performance look like? Nothing decided this is all just experimentation" — [https://x.com/jarredsumner/status/2051592754313273380](https://x.com/jarredsumner/status/2051592754313273380). Simon confirms the same framing: "Confirmed that this is an experimental branch, not a decision to switch languages" — [https://x.com/simonw/status/2051611966683463764](https://x.com/simonw/status/2051611966683463764).

Mitsuhiko's parallel commentary continues to be the most useful "this is the agent-era reality of OSS" framing:

- "I am not sure how I missed this, but **the whole bun repo at this point looks like modern performance art.** Truly fascinating." — [https://x.com/mitsuhiko/status/2051418854052528614](https://x.com/mitsuhiko/status/2051418854052528614) (RT'd today)
- "I guess the phrase 'gives me the eyes' means a completely different thing with clankers. **That's how robobun interacts with me on my PR :P**" — [https://x.com/mitsuhiko/status/2052061048128065804](https://x.com/mitsuhiko/status/2052061048128065804)
- "**This is your codebase on clankers.**" (with video) — [https://x.com/mitsuhiko/status/2051999150095397358](https://x.com/mitsuhiko/status/2051999150095397358)
- And the most ominous one of the day: badlogicgames RT'd by mitsuhiko — "today was the day @mitsuhiko had his first look into the source code of a bunch of inference engines (not going to name names) and **like me a few months ago, he now has stared into the abyss. we will never be the same.**" — [https://x.com/badlogicgames/status/2052086312568590433](https://x.com/badlogicgames/status/2052086312568590433). Mitsuhiko's reply: "**Terrible decisions upstream lead to terrible consequences downstream. I hate everything.**" — [https://x.com/mitsuhiko/status/2052086500615925922](https://x.com/mitsuhiko/status/2052086500615925922)

## Mattpocock: /grill-me writes a eulogy, /handoff ships, "skills for life" course teased

Pocock's `/grill-me` skill keeps producing the most viral non-coding agent moment of the week:

- etn. (covering Pocock's interview): "Matt Pocock says somebody **wrote a eulogy for their mother using his 'Grill Me' skill**, in which a user gets AI to question them on a topic of their choosing: 'They used Grill Me just to grill them about their mom and they had this wonderful interaction and it wrote this beautiful eulogy, because they just had this lovely conversation.' '**I think it has applications in all sorts of places. And I also think it's just way better than the default plan mode because the plan mode in most harnesses is super eager to rush towards creating an asset.**' 'You need to reach a shared concept of what you're building first. What Frederick P. Brooks calls the design concept.'" — [https://x.com/etnshow/status/2052087493151887678](https://x.com/etnshow/status/2052087493151887678)
- Pocock himself: "Sounds mad, but maybe I should just **make a course about writing great skills**? I.e. **for actual life/work productivity, not just dev. Breaking down daily tasks into skills. Turning HITL tasks into AFK ones. Creating a working language with the agent.** Feels pretty deep" — [https://x.com/mattpocockuk/status/2052132647770452286](https://x.com/mattpocockuk/status/2052132647770452286)
- joelhooks: "**122 questions** into a @mattpocockuk /grill-with-docs sesh 🔥" — [https://x.com/joelhooks/status/2052139620465627477](https://x.com/joelhooks/status/2052139620465627477) (live demo at [aihero.dev/grill-with-docs](https://aihero.dev/grill-with-docs))
- Pocock teases a new daily-driver workflow: "1. /grill-with-docs 2. 'Oh, I need to prototype some UI' 3. **/handoff** to /prototype 4. Create prototype, /handoff back to grilling session 5. /to-prd, /to-issues 6. npm run sandcastle 7. /improve-codebase-architecture. **I love this shit**" — [https://x.com/mattpocockuk/status/2052042499053453330](https://x.com/mattpocockuk/status/2052042499053453330) — and "Yes, /handoff is new and very, very good." — [https://x.com/mattpocockuk/status/2052043231106367685](https://x.com/mattpocockuk/status/2052043231106367685)
- Field report — **dillon_mulroy** (yesterday, still circulating): "**i've been trying to merge at least one PR a day using @mattpocockuk's improve-codebase-architecture skill, and it has turned into my favorite work each day.**" — [https://x.com/dillon_mulroy/status/2051717882518897082](https://x.com/dillon_mulroy/status/2051717882518897082)
- **Mini-realization of the day**: "Whenever you're QA-ing code produced by an AFK agent, you're not just QA-ing the code... **you're also QA-ing the agent itself. So, fixes must land in both in the same commit.**" — [https://x.com/mattpocockuk/status/2051950382906016019](https://x.com/mattpocockuk/status/2051950382906016019)
- /grill-me note from etn's earlier video: Pocock runs "**two grilling sessions at the same time**. So I'll be grilling one; once I hit enter, I'll grill on the other one. And so, I'm just talking all day essentially." — [https://x.com/etnshow/status/2051973854101156090](https://x.com/etnshow/status/2051973854101156090)
- **The "AI Coding Dictionary" is shipping** — Pocock crowd-sourced "what is AI?" definitions to round it out. Skills info: [aihero.dev/skills](https://aihero.dev/skills).
- Skills repo trajectory continues: from the morning-after of Code with Claude, "At what point do I start being 'that bald guy with the skills'" — [https://x.com/mattpocockuk/status/2052141395092160946](https://x.com/mattpocockuk/status/2052141395092160946).

## Cursor 3.3: dynamic context for all models, context-usage breakdown UI

Cursor shipped two related pieces while the Claude conference was running:

- **Dynamic context** is now the default for all models in Cursor's agent. leerob: "It's now much easier to debug context usage in Cursor. This builds on our work to use 'dynamic context', e.g. **we don't load all MCP tools up front into context, helping you reduce token usage without degrading quality.**" — [https://x.com/leerob/status/2052062405107265878](https://x.com/leerob/status/2052062405107265878)
- The headline number from Cursor's PR: "**This reduces total tokens by 46.9% when using multiple MCP servers.**" — [https://x.com/leerob/status/2052062845094039712](https://x.com/leerob/status/2052062845094039712)
- The context-usage breakdown UI is the new debug surface: "You can now see a breakdown of your agent's context usage in Cursor 3.3. Use these stats to diagnose context issues and improve your setup across rules, skills, MCPs, and subagents." — [https://x.com/cursor_ai/status/2052059748544249918](https://x.com/cursor_ai/status/2052059748544249918)

Best replies in that thread are field reports about why this matters more than it sounds:

- **lifcc**: "Context usage breakdown is the right level of UI for agent debugging. **Rules, skills, MCPs, and subagents all look harmless alone until one source quietly eats the window.**"
- **LeetLLM**: "i keep dozens of reusable skills in my user folder, and **it's been basically impossible to tell which ones are quietly eating the token budget during long vibecoding sessions**"
- **Calvin Thurman**: "Seeing that Conversation is eating 42K tokens out of your context window versus 608 for System prompt is the kind of visibility that actually changes how you build."
- **Maciek**: "Is it possible to print these stats from CLI to use them in monitoring scripts? **To avoid context pollution over time in big codebases where skills/agents.md are being constantly added/modified**"
- **Danny Livshits**: "Context budget visibility is one of the foundational primitives every agent platform should ship... **The platforms that compete on context observability will pull ahead on enterprise readiness.**"
- austinnickpiel (Cursor): "One of the devs who built this here! Lots more coming soon to give you even more visibility + tools to optimize context :)"

## Steipete: OpenClaw army keeps growing, fs-safe ships

Steipete's daily ship-list is back to terminal-velocity — the highlight is the **fs-safe** primitive carved out of OpenClaw, the most interesting general-utility extraction since `acpx`:

- "Shipping 🛡️**openclaw/fs-safe**: a reusable filesystem safety primitive extracted from OpenClaw. **If your Node app accepts paths from agents, plugins, uploads, configs, or users, stop treating string normalization as a filesystem boundary. Use a root handle.** [fs-safe.io](https://fs-safe.io)" — [https://x.com/steipete/status/2051852940554481901](https://x.com/steipete/status/2051852940554481901)
- "Me and codex were busy. 🔊 sonoscli.sh — Sonos 🗃️ wacli.sh — WhatsApp 🪶 birdclaw.sh — X archive 🧰 gitcrawl.sh — GitHub archive 🛰️ discrawl.sh — Discord archive 🎧 spogo.sh — Spotify 💬 imsg.sh — iMessage 🧳 mcporter.sh — MCP to CLI 🗣️ sag.sh — ElevenLabs voice 🧿 askoracle.sh — second opinion. **Upgrading the 🦞 OpenClaw army.**" — [https://x.com/steipete/status/2051900143339704730](https://x.com/steipete/status/2051900143339704730)
- imsg 0.6 + 0.7 with private API bridge: [https://x.com/steipete/status/2051905175355351440](https://x.com/steipete/status/2051905175355351440)
- CodexBar 0.24 ships **Windsurf, Codebuff, DeepSeek providers** + Copilot multi-account switching + opt-in local storage breakdowns + battery-drain bug fix: [https://x.com/steipete/status/2051882417292525950](https://x.com/steipete/status/2051882417292525950)
- The Code-with-Claude posture line of the day: **"closed source, open source, nothing can stop codex."** — [https://x.com/steipete/status/2052144503595716790](https://x.com/steipete/status/2052144503595716790)

A field report on the OpenClaw plugin architecture that's worth surfacing — oleksiyML: "Plugin-based architecture @openclaw is a massive W. No more bloated binaries! 📦 Just installed the **Codex harness as a standalone plugin** - clean, fast & modular. This is how pro CLI tools should evolve. Kudos to @steipete & team for the heavy lifting!" — [https://x.com/oleksiyML/status/2052055133328929252](https://x.com/oleksiyML/status/2052055133328929252)

## Mitsuhiko on GPT-5.5 codex: "Why did you do X?" → "Sorry I should not have done that"

A small but extremely teachable observation from a heavy daily Codex user — the kind of thing you only catch if you've migrated harnesses recently:

- "With gpt-5.5 I have this interaction way too often now: '**Why codex, tell me why you did X**' '**Oh sorry I should not have done that**' and changes everything." — [https://x.com/mitsuhiko/status/2051947865488941299](https://x.com/mitsuhiko/status/2051947865488941299)

This is an open category of agent failure — asking for a justification gets misread as a correction signal. Mattpocock's "fixes must land in agent + code in the same commit" rule from above is the prescribed countermeasure when this bites you in production.

Adjacent, two infra rants from Mitsuhiko:

- "The scale of these data center buildouts is crazy. **That Utah data center project is 40,000 acres (basically size of Liechtenstein). 9 GW of power, that is more than twice the total energy usage of all of Utah today.** And somehow they want to produce all of that power on site." — [https://x.com/mitsuhiko/status/2052013442010148985](https://x.com/mitsuhiko/status/2052013442010148985)
- "Working on pi makes me hate terminal multiplexers so much more." — [https://x.com/mitsuhiko/status/2051951047724151204](https://x.com/mitsuhiko/status/2051951047724151204)

## Jerry Liu: "AI can't read PDFs" deck + LlamaParse Mobile

Jerry Liu's keynote deck from AI Dev '26 is now public — the only PDF-understanding deck of the week worth pulling:

- "Last week I gave a talk at AI Dev '26 by @DeepLearningAI on '**AI can't read PDFs, how do we fix it**'. I'm sharing the slides publicly if others are interested in doing a deep dive into document understanding. AI agents are going to automate huge amounts of knowledge work, but knowledge work depends on data, **a lot of that data is in documents/PDFs, and existing OCR tools suck.** PDFs are a format that is inherently hard to read, and I dive into specific reasons why (tables, layouts), and **why frontier VLMs and benchmarks are still insufficient.**" — [https://x.com/jerryjliu0/status/2052085729241731268](https://x.com/jerryjliu0/status/2052085729241731268)
- LlamaParse Mobile (iOS + Android, Expo + React Native) ships: "**What if you could extract text from any photo on your phone?** Three steps: 🔑 Add your API key (securely stored on-device) 📸 Snap a photo of anything with text 📄 Parse it and, in under a minute, get clean, copyable text. No hassle, no manual typing. Try it now: [github.com/run-llama/llamaparse-mobile](https://github.com/run-llama/llamaparse-mobile)" — [https://x.com/llama_index/status/2052056007954837865](https://x.com/llama_index/status/2052056007954837865)
- LlamaIndex NYC takeover next Wednesday (5/13): **FinParse workshop** ([luma.com/updli8i6](https://luma.com/updli8i6)) + AI Engineers on Tap happy hour ([luma.com/tklfgwh8](https://luma.com/tklfgwh8)). Pizza from L'Industrie.

## Smaller items worth reading

- **Cofounder 2 ("Run an entire company with agents")** lands. Boosted by Jerry: "It's always awesome to see companies continuing to innovate on AI-native UI/UX, particularly around multi-agent coordination, **to solve deeply complex tasks beyond what a single user can easily define via a chat interface.**" — [https://x.com/jerryjliu0/status/2051783364555034951](https://x.com/jerryjliu0/status/2051783364555034951). The launch video features Andrew Pignanelli's actual grandma; "infrastructure for the one person billion dollar company" remains 2026's most punchable startup deck phrase but the multi-agent product model is real.
- **Wes Bos's pnpm supercut tool** — `pnpm supercut "by the way" --bucket @ThePrimeagen --tile --limit 150` — combs YouTube/Twitch transcripts for the exact moments a person says a phrase and tiles them into a compilation. LLMJunky's reaction is correct: "**the result is hilarious.** wes built a command line tool that can apparently comb video transcripts for youtube (or twitch?) videos and find the exact moments a person says some phrase, allowing you to compile a compilation." — [https://x.com/LLMJunky/status/2052148146461979003](https://x.com/LLMJunky/status/2052148146461979003)
- **Simon's own writeup**: "I was talking with @josephruscio on the @heavybit podcast the other day when I realized that **vibe coding and agentic engineering have started to blur a bit in some of my work** — I published some extracts from the transcript [simonwillison.net/2026/May/6](https://simonwillison.net/2026/May/6/)" — [https://x.com/simonw/status/2052040005275779552](https://x.com/simonw/status/2052040005275779552). Episode: [hubs.ly/Q04flJBN0](https://hubs.ly/Q04flJBN0).
- **VLMaxxing** (research preview): "Continuous-video agents (computer use, robotics, static scenes) burn compute re-ingesting pixels that didn't move. VLMaxxing teaches a frozen video VLM to skip the reruns. **54 fps perception on Gemma 4 26B, training-free, no accuracy drift.** w/ @jfbastien (arXiv 2605.03351)" — [https://x.com/sdamico/status/2051831378757800216](https://x.com/sdamico/status/2051831378757800216) (boosted by swyx)

## Outside the agent/code beat

- **Chrome ships its Prompt API** despite Mozilla, WebKit, Microsoft, the W3C TAG and most developers opposing. theo: "I have historically defended Chrome for pushing web standards forward. **This is them doing the opposite. I dislike this.**" — [https://x.com/theo/status/2052277935768551609](https://x.com/theo/status/2052277935768551609) (quoting Jake Archibald's "A sad time for web standards" thread)
- **BlackRock CEO Larry Fink predicts a compute futures market.** swyx: "typical @evanjconrad W" — [https://x.com/swyx/status/2051874556831469604](https://x.com/swyx/status/2051874556831469604)
- **Coinbase's 14% layoff letter** (yesterday) gets the right rant from mitsuhiko: "**Why does everybody want managers to be ICs? Please someone explain this to me from first principles.**" — [https://x.com/mitsuhiko/status/2051686334289285155](https://x.com/mitsuhiko/status/2051686334289285155)
- **Theo's $1M Azure podcast** keeps circulating: 00:00 Intro, 00:52 Azure Woes, 11:22 Cloud platform talk, 18:08 Coding agents, 29:06 GPT-5.5 pricing debate, **45:14 OpenClaw workflows**, 1:12:37 G Stack/G Brain, 1:29:00 Dynamic UI — [https://x.com/theo/status/2051818430337253691](https://x.com/theo/status/2051818430337253691)
- **Karpathy was silent today** — no posts from him in the last 24 hours, so nothing to summarize from that quarter.
