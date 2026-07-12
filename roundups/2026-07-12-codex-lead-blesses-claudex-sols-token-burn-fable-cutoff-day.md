---
title: 'OpenAI''s Codex Lead Blesses "claudex", Sol''s Token Burn Playbook & Fable''s Cutoff Day'
date: "2026-07-12"
summary: "The harness flip goes official: Codex lead **Tibo Sottiaux** posts the exact CLIProxyAPI alias for running GPT-5.6 Sol inside Claude Code — \"If this gets blocked, I owe you a reset\" — and racks up 462K views while Theo salutes from the replies. Theo follows his all-nighter with a written guide on why Sol torches usage limits (eager subagents, full-context forks, a 37% bigger default window) and how to stop it. Meanwhile the calendar quietly hits **July 12 — Fable 5's cutoff day** — with no extension announcement in sight, Simon Willison declares \"AI employees\" as sensible as putting Excel on the org chart, Armin Ronacher laments that AI never speeds up the *thinking*, and Charlie Marsh apologizes for the `<!-- -->` tokens everyone is stripping by hand."
tags:
  - The Harness Flip Goes Official
  - Taming Sol's Token Burn
  - Fable Cutoff Day
  - '"AI Employees" & the Jevons Debate'
  - Agentic Coding & Craft
  - Codex Papercuts & Pi
  - Videos
  - Quick Hits
---

# AI Roundup — July 12, 2026

## The Harness Flip Goes Official

The biggest thread of the day, by a mile: **Tibo Sottiaux, who leads Codex at OpenAI, publicly endorsed running GPT-5.6 Sol inside Claude Code** — [462K views and climbing](https://x.com/thsottiaux/status/2076119366647894371). He posted the full recipe: install CLIProxyAPI, connect, and define a `claudex` alias (`CLAUDE_CODE_SUBAGENT_MODEL=gpt-5.6-sol ... claude --model gpt-5.6-sol`), closing with *"If this gets blocked, I owe you a reset."* Theo — whose late-night experiments kicked this whole thing off — [replied with a salute](https://x.com/theo/status/2076119559971729429).

The replies are worth the scroll:

- *"I never would have expected the OpenAI team to actually push people happily to use their competitor's harness... anthropic would never lol"* — [@TxoriAGI](https://x.com/TxoriAGI/status/2076122585901813834)
- One user reports their **OpenAI account was deactivated** after using CLIProxyAPI as recommended — [@zhetw0](https://x.com/zhetw0/status/2076128273051025533) — so the "officially approved" status may be shakier than the vibes suggest.
- *"Just make the Codex harness better so we don't have to do this?"* — [@danielcraft](https://x.com/danielcraft/status/2076214219012202700)
- The same trick works for GLM 5.2 in Claude Code, [notes @mkagenius](https://x.com/mkagenius/status/2076168143161245697), and at least one person wants the reverse: [*"Fable on Codex! ❤️"*](https://x.com/MelonLeather/status/2076120073937567899)

Related fallout from the ChatGPT/Codex merge: Theo pinned ["The Codex app is dead, and I am unhappy about it"](https://x.com/theo/status/2075918526511186292) (101K views). Best replies compare the Work/Codex split to WordPress's block-vs-classic editor confusion, and one user reports the new app [burning a 5x Pro plan in ~1 hour on Luna](https://x.com/piotr_synowiec/status/2075923702059835420). Others want OpenAI to [open-source the old Codex app](https://x.com/blbraner/status/2076010328593252794).

## Taming Sol's Token Burn

Theo turned his crash-out into a proper written guide: ["gpt-5.6-sol without hitting limits"](https://x.com/theo/status/2076079256027943397) (152K views, article on X). The TL;DR, [nicely condensed by a reader](https://x.com/EmilWagman/status/2076080567901397396): Sol is great but burns limits insanely fast because it runs longer and eagerly spawns subagents — stick to medium/high reasoning, avoid Ultra ("not actually a reasoning level") and Fast mode for now, tell it not to spawn subagents unless asked, and give prompts clear stop points. His defaults: **Sol High on the $200 tier, Sol Low otherwise**.

Why 5.6 eats tokens, per [@PraveenPerera's breakdown](https://x.com/PraveenPerera/status/2076100208207753474): a 37% larger default context window, more subagents by default, subagents that don't lower reasoning effort, and subagents spawning with a full context fork. His workaround: `reasoning_effort` is accepted even though it's not in the tool schema, so you can force it via AGENTS.md.

Adjacent and complementary — **@LLMJunky discovered Codex quietly raised baseline auto-compaction from 262K to 353K tokens** ([thread](https://x.com/LLMJunky/status/2076029411661656448)). GPT-5.6 does have a 1M context window now, but *"you should NOT use it on Luna. It gets uber dumb."* For token-hungry computer/browser automations he raises the ceiling with `codex -c model_auto_compact_token_limit=900000`, since accessibility-tree floods make compaction extremely lossy. Counterpoint from [@pvncher](https://x.com/pvncher/status/2076041610341572825): don't touch the ceiling — you'll pay in usage limits and cache misses. LLMJunky concedes it's for one-off, project-scoped automations only.

## Fable Cutoff Day

Today is **July 12 — the day Anthropic's extended Fable 5 access on paid plans [officially expires](https://x.com/claudeai/status/2074548242386178258)** — and as of this morning there's no extension announcement from @claudeai. Theo's read from earlier in the window: [*"I would like to thank OpenAI for putting out a model exactly good enough to force Anthropic to keep bundling Fable in the Claude Code plan"*](https://x.com/theo/status/2075768231403667645), followed by [*"The July 12th cutoff is still probably happening, but it would be insane for them to go through with it"*](https://x.com/theo/status/2075774654476922986). One to watch over the weekend.

## "AI Employees" & the Jevons Debate

**Simon Willison** lit up the timeline with: [*"The idea of 'AI employees' feels so short-sighted to me - both disrespectful to humans and a complete misunderstanding of what these tools can do... You may as well start adding Excel spreadsheets to your org chart"*](https://x.com/simonw/status/2075996740717871125) (137 replies, 73K views). His [follow-up](https://x.com/simonw/status/2076080476725649581) names the crux: accountability — *"it makes no sense to try and hold a bunch of matrix arithmetic accountable for something."* Sharpest reply: [*"Every 'AI employee' pitch I've seen is really an unowned workflow with good branding. Nobody performance-reviews a spreadsheet; someone owns what it computes"*](https://x.com/anupshesh/status/2076144808888848742). Also good: [ServiceNow's AI strategy as shareholder theater](https://x.com/bryanculbertson/status/2076016097514709448), and Gainsight CEO Nick Mehta [co-signing](https://x.com/nrmehta/status/2076007783854682265).

**swyx** argued the other side of the labor question, [quoting sama's "so far at least, I'm pretty sure AI has been net job-creating"](https://x.com/swyx/status/2076155833428431012): if you learned about Jevons paradox only through software demand, you haven't internalized what happens when coding agents *break containment into all other knowledge work* — "what happened to coding isn't the exception; it's the herald." Pete Hunt [pushes back on the substitution side](https://x.com/floydophone/status/2076172222989767060); another reply keeps the best one-liner: [*"free code just pushes the bottleneck to verification."*](https://x.com/anmolbuildz/status/2076228531584151629) More in swyx's [Latent Space writeup: "AI Engineer will be the last..."](https://www.latent.space/p/ainews-ai-engineer-will-be-the-last).

## Agentic Coding & Craft

**Armin Ronacher's rant of the week** resonated widely ([616 likes](https://x.com/mitsuhiko/status/2075888852737122708)): AI makes him more productive, but he has *"very little success in speeding up the thinking part."* Slopping up a Pi provider-mapping took no time — but designing an abstraction that holds across providers is as slow as ever. *"The easy parts got even easier and the hard parts didn't move nearly as much. Except you can turn your brain off, and pretend the hard parts are easy parts... but then you have slop."* Notable in the replies: Lucas Meijer on [thinking during walks](https://x.com/lucasmeijer/status/2075892293802868878), and Armin's sober note that [Pi has zero bargaining power over trillion-dollar labs whose incompatible API designs cause all this](https://x.com/mitsuhiko/status/2075892854036049946).

**Matt Pocock clarified the Wayfinder flow** ([64K views](https://x.com/mattpocockuk/status/2075856898142740821)): for big coding work it should be `/wayfinder → /to-spec → /to-tickets → /implement` — people using Wayfinder as the entire flow are missing the handoff to an AFK implementation agent. Key details from the replies: Wayfinder creates *decision* tickets, not implementation tickets; [delete specs as soon as they're represented in code](https://x.com/mattpocockuk/status/2076057036421316754); and the steps stay separate because [agents given an entire flow "prematurely rush to completion"](https://x.com/mattpocockuk/status/2075969009778905292). Dex Horthy pitched his [open workflows specification](https://x.com/dexhorthy/status/2075874368895537379) for composing other people's skills without studying them, prompting Matt's neat framing: model-invoked skills cost *context load*, user-invoked skills cost *cognitive load*. Also from Matt: ["ABS — Always be sandboxing"](https://x.com/mattpocockuk/status/2075942356906283090) and a [thread on why skills are worth bothering with](https://x.com/mattpocockuk/status/2075569153633575151).

## Codex Papercuts & Pi

Armin's second viral moment: [*"The fact that we're now all putting in code to strip out `<!-- -->` is ridiculously dumb. Surely this can't take more than 5 minutes to fix on the inference API"*](https://x.com/mitsuhiko/status/2076045401753317585) — with a link to [the codex PR where everyone is doing exactly that client-side](https://github.com/openai/codex/pull/31652). **Charlie Marsh replied with an apology and a promised server-side fix** ([*"clients shouldn't need to worry about this implementation detail"*](https://x.com/charliermarsh/status/2076081520238817433)), while dax delivered the [perfect reply](https://x.com/thdxr/status/2076100895394148538): `<!-- -->`.

On the Pi front: the next release gets [**dynamic tool loading without cache wiping**](https://x.com/mitsuhiko/status/2075703856726499364), with a consistent behavior worked out across OpenAI and Anthropic APIs — adding tools preserves caches, removing wipes them, and cache-miss warnings let you detect bad behavior ([details in the Pi repo](https://github.com/earendil-works/pi)).

## Videos

- **Local AI Summit at AIEWF, first panel live**: "State of the Union: Why Local, Why Now" with NVIDIA, Roboflow, Osmantic, Forward Future, and EXO Labs — [via @TheAhmadOsman](https://x.com/TheAhmadOsman/status/2076026779530121477), RT'd by both swyx and LLMJunky.
- **Geoffrey Litt's Design Eng track keynote** from AIE — "I think it's important for people to understand how code works" — [on YouTube](https://www.youtube.com/watch?v=WkBPX-oDMnA).
- **"Should AI Engineers read code anymore in 2026?"** — @altryne's video on the divisive take that pulled in Theo, Mitchell Hashimoto, Primeagen, and Uncle Bob — [on YouTube](https://www.youtube.com/watch?v=ZpK5PWX2YRM).
- **Matthew Berman × swyx at AIE** on AGI, frontier lab strategy, chips, Fable, and AI existentialism — [via @MatthewBerman](https://x.com/MatthewBerman/status/2075628987104317776).
- **"GPT 5.6 Has Trauma from Training 💀"** — NerdSnipePod clip, RT'd by Theo — [via @NerdSnipePod](https://x.com/NerdSnipePod/status/2076008197173739801).

## Quick Hits

- **sama on the model wars**: [*"there are a lot of benchmarks that suggest 5.6 sol is the best model in the world right now, but the most reliable way to tell is that elon is obsessed with me again"*](https://x.com/sama/status/2075983427019612242) — RT'd by steipete.
- **Career advice via @fredrikalindh** (RT steipete): [*"if i were looking for a job today i'd prioritize working with people who are agent maxxing and have unlimited tokens"*](https://x.com/fredrikalindh/status/2076054455578153301).
- **steipete does his best Fable impression**: [*"Let me verify a couple of load-bearing facts before I give you the architecture assessment."*](https://x.com/steipete/status/2076013212043182375)
- **@maria_rcks "solved the model picker problem"** ([joke post](https://x.com/maria_rcks/status/2076176709221552447), RT'd by Theo, who [added](https://x.com/theo/status/2076228980211167389): "Maria is still under 6k followers, good opportunity to invest early").
- **More Codex power-user tips from @LLMJunky**: [natural-language search over past sessions](https://x.com/LLMJunky/status/2076065244267315344) ("find the session where we integrated Sol into the Lynk app"), [multiple Codex windows with CMD+SHIFT+N](https://x.com/LLMJunky/status/2075830541828386926), and a long-lobbied-for flag: [`codex --enable default_mode_request_user_input`](https://x.com/LLMJunky/status/2076156761443123352).
- **Multi-agent hygiene tip** [via @LyalinDotCom](https://x.com/LyalinDotCom/status/2075989084728709492) (RT LLMJunky): if multiple agents work the same project, tell each one *"other models are working in this project — if anything odd happens or things change that you didn't do, don't panic and don't revert."*
- **Paul Graham on reading** ([RT LLMJunky](https://x.com/paulg/status/2075980847228801132)): "The people who still read won't just be better informed. They'll be... the only ones who can think well."

*Note: @potetotes' feed returned no items again today (Nitter serves an empty channel for the account), so it's unrepresented in this dispatch.*
