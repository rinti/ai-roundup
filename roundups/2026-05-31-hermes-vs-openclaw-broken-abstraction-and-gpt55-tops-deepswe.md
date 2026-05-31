---
title: "The Harness Wars Get Petty, Claude's 'Broken Abstraction' & GPT-5.5 Tops DeepSWE"
date: "2026-05-31"
summary: "A Sunday dominated by harness politics. Theo poked at **Hermes Agent shipping 100+ skills pre-enabled** — and Teknium fired back that OpenClaw is an *'empty soulless experience'* — kicking off the most substantive thread of the day on whether skill descriptions quietly tax your context window and steer the model toward 'unwanted shit.' Jerry Liu's gripe about un-consolidated Claude Desktop tabs snowballed into a referendum on **Anthropic's Claude AI / Code / Cowork split as 'a broken abstraction'** (a phrase that turns out to be Mikey Krieger's own). The DeepSWE leaderboard lit up with dueling reads of **Opus 4.8 vs GPT-5.5** — and the intelligence-per-dollar argument is increasingly going GPT-5.5's way. Plus OpenClaw ships a guardian agent for auto-approving bash, Theo merges an 18K-line migration written entirely by GPT-5.5, Steipete reframes 'yielding agents' as a skill, and Matt Pocock argues AI design failure is really a vocabulary problem."
tags:
  - The Harness Wars
  - Claude's Broken Abstraction
  - Opus 4.8 vs GPT-5.5 on DeepSWE
  - Long-Horizon Agentic Coding
  - Design as a Vocabulary Problem
  - Around the Ecosystem
---

# AI Roundup — May 31, 2026

A quiet-on-paper Sunday that turned almost entirely into harness politics. Nobody shipped a frontier model today, so the discourse went where it always goes when the models are settled: *which agent do you actually live inside, and what is it doing to your context window behind your back.* Three of the day's biggest threads — Hermes-vs-OpenClaw, Claude Desktop's tab sprawl, and the DeepSWE cost debate — are all really the same argument about who owns the harness.

## The Harness Wars

**Theo poked the Hermes hornet's nest.** He noted that [Hermes Agent ships with "a truly absurd number of skills pre-enabled. Over 100 of them"](https://x.com/theo/status/2061019720552525963) (77K views) — polymarket betting, three "baoyu art" skills, a headless Pokémon skill, Minecraft modpack server skills — all live the first time you run it. The framing he was quote-tweeting was Teknium's blunt clapback: *"They're nonsense for you maybe. We didn't make hermes just for you. If you want an empty soulless experience… try openclaw."* Theo later distilled the rivalry to a one-liner: **"[OpenClaw is Arch. Hermes is Omarchy](https://x.com/theo/status/2061020489246773436). I will not elaborate further."**

The reply thread is the real content, and it split cleanly into two camps:

- **"Just toggle them off, stop baby-raging"** — the most-liked pushback ([@embw_l0x](https://x.com/embw_l0x/status/2061026124990239199), [@wackaid](https://x.com/wackaid/status/2061058913521295567), and a dozen others). Theo's retort: [the screenshot *is* him turning them off](https://x.com/theo/status/2061031245640016133) after they fired in places they shouldn't have.
- **The technical objection that actually landed.** When someone asked whether unused skills even cost anything, Theo's answer was the crux: **["The skill names and descriptions are loaded into context. You have to trust the model to not pull them in when you don't want them."](https://x.com/theo/status/2061020374926852507)** He says Hermes told him it's ~2K tokens, but [the real cost is steering](https://x.com/theo/status/2061038460660781364): "they distract the model and steer it towards unwanted shit." His example — he asked for a change and it pulled in the TDD skill unprompted and he "almost uninstalled it on the spot."

That technical point drew the most credible support. Paul ([@paul_pbng](https://x.com/paul_pbng/status/2061037041052463452)): "Every enabled skill's description loads into context before the agent picks anything. Trimmed my CC setup from 40+ skills to 9 I actually trigger. Wrong-skill picks dropped, prompt got ~3K tokens lighter per turn." Lonnie Jordan ([@LonnieJordan843](https://x.com/LonnieJordan843/status/2061043726638543117)) wanted **"Skill Packs"** scoped to a task instead of the everything-app default: "You want a Quarterly Income Statement with Charts? I'll use my Minecraft skills!" And Tina ([@TinaJucyBlue](https://x.com/TinaJucyBlue/status/2061052781058773172)) had the line of the thread: "the 'out of the box' agent assumes I'm simultaneously degen betting AND commissioning AI art. Feels like someone's user persona is just their Twitter timeline."

The meme war ran in parallel: a widely-shared "[build a trustworthy agent system](https://x.com/EricMcPh/status/2060895686518861839)" pop-quiz image — *"OpenClaw understood the assignment. Hermes Agent understood the seating arrangement"* — made the rounds (RT'd by Steipete).

## OpenClaw Ships Guardrails (and Steipete Ships to SF)

While the skill-bloat fight raged, the OpenClaw camp spent the weekend on **safety primitives** — a pointed contrast given the "soulless" jab:

- **A guardian agent for bash auto-approval.** Jesse Merhi ([@jesse_merhi](https://x.com/jesse_merhi/status/2060860368331964432), 15.6K views) shipped `tools.exec.mode: auto` with [@vincent_koc](https://x.com/vincent_koc) and [@joshavant](https://x.com/joshavant): a second agent evaluates the safety of proposed system calls and **only prompts you when it's genuinely risky** — pitched as the escape hatch from "when your security team forces you to approve every bash command."
- **A policy conformance plugin** "from the Microsoft OpenClaw Team" promising [verifiable proof that agent behavior doesn't drift](https://lobster.shahine.com/security/policy-conformance/) (RT'd by Steipete).
- **Another measured perf sweep:** OpenClaw 2026.5.28 vs .27 — cold turns 14.5% faster, warm 16% faster, fresh install 52.8% smaller, package roots 371→300. "Lighter core, sharper claws, now with receipts."

Steipete himself [finally got his visa and is moving to San Francisco](https://x.com/steipete/status/2061031509088231640), timed to MS Build and an OpenClaw × GitHub after-hours event on the 3rd.

## Claude's "Broken Abstraction"

**Jerry Liu's small UX gripe became a referendum on Anthropic's whole product surface.** "[I've been loyal to Claude but it would be really nice to have these tabs be consolidated. Codex is a lot nicer in that regard](https://x.com/jerryjliu0/status/2060807138172416406)" (81K views) — and the OpenAI camp piled in to gloat ("everyone from openai liked my tweet," he noted; jxnlco's reply was simply "[LETS GOOOO](https://x.com/jxnlco/status/2060835790272561254)").

But the replies turned diagnostic:

- **It's not the tabs, it's the architecture.** WillyV3 ([@V3_Willy](https://x.com/V3_Willy/status/2060826713383223760)): "Anthropic just hasn't decided what the 'one canonical agent surface' should look like yet." dotey ([@dotey](https://x.com/dotey/status/2060852970322030955)) ran a longer Chinese-language critique — Plan-mode stickiness, ungrouped sidebars, panels that crush each other — landing on **"Cowork and Code really didn't need to be two separate products."**
- **The phrase came from inside the house.** morqon ([@morqon](https://x.com/morqon/status/2060825771908661410)) surfaced a new Mikey Krieger podcast where Krieger — whose Labs team birthed Claude Code, Computer Use, and MCP — reportedly calls the current **Claude AI / Code / Cowork separation "a broken abstraction we need to fix,"** and frames Anthropic as "shipping our harness strategy rather than a product."
- And the harsher takes: "[they need to start over… a sloppy mess compared to Codex on Mac](https://x.com/shrubsup/status/2060936498699219132)," and a recirculated "Cowork was Anthropic's biggest mistake" sentiment (Riley Brown, RT'd by Jerry Liu).

The throughline with the Hermes thread is hard to miss: two days, two ecosystems, the same complaint — *the surface is fighting the user.*

## Opus 4.8 vs GPT-5.5 on DeepSWE

The DeepSWE leaderboard became the day's battleground, and the numbers depend heavily on who's framing them:

- **The Opus-positive read:** Datacurve put [Opus 4.8 on DeepSWE at default high effort scoring 6% higher than Opus 4.7 xhigh while *lowering* cost per task](https://x.com/datacurve/status/2060834005998793199). LLMJunky ([@LLMJunky](https://x.com/LLMJunky/status/2060860660238729346)) gave it a "vibe check: PASSED," calling it the first benchmark that felt like it "really held real weight."
- **The GPT-5.5 read:** a competing readout (RT'd by Steipete) declared **[GPT-5.5 #1 on DeepSWE — 70% pass@1 vs 58% for Opus 4.8](https://x.com/reach_vb/status/2060865517628379466)**, at ~2× faster runs, ~½ the cost, and ~⅓ the output tokens: "better intelligence per dollar."
- **The "actually, look at the cost axis" rebuttal:** Benedict ([@benedictk__](https://x.com/benedictk__/status/2060960996785524892)) flagged that the headline 70% for GPT-5.5 xhigh comes at $6.60/task — i.e., the framing cuts both ways depending on which effort/price point you cherry-pick.

The pragmatist consensus in the replies leaned cost-conscious. Johnny Yukari ([@JYukariHero](https://x.com/JYukariHero/status/2061019521473823096)): "5.5 medium at that price is the move. Running real SWE pipelines at Opus 4.8 rates for a few extra points makes no sense." One circulating per-task table made the squeeze concrete: **gpt-5.5-medium 58.9% at $0.98** vs **Opus 4.8 xhigh 56.4% at $2.02** — cheaper *and* a hair higher.

## Long-Horizon Agentic Coding

The "yield a big task to the agent and walk away" workflow keeps maturing:

- **Theo merged an 18K-line migration "in a few hours" with zero regressions** ([@theo](https://x.com/theo/status/2061010189554491555)) — "[written entirely by 5.5, feedback by 5.5, Opus, and coderabbit + macroscope](https://x.com/theo/status/2061012595881242890)." The skeptic's reply was the useful one: Paul ([@paul_pbng](https://x.com/paul_pbng/status/2061029990536495377)) warned **"the trap is 'so far' — big agent diffs bury the one bad line till prod,"** and described forcing commit-per-logical-unit ("40 small commits beats one 18K blob when git bisect has to save you").
- **Steipete reframed the skill itself.** With GPT-5.5, `/goal`, autoreview and crabbox, "[my prompts moved from ~30-60min to often 4-10h tasks and my confidence that it's ready is much, much higher](https://x.com/steipete/status/2060678430031597696). **Yielding agents is a skill.**" (See also the relatable meme he RT'd: "[me reviewing codex's output after it worked for 16 hours straight](https://x.com/reach_vb/status/2060855550326243791).")

## Design as a Vocabulary Problem

**Matt Pocock argued AI's design weakness is really yours.** "[One reason AI sucks at design is because you're bad at telling it what you want](https://x.com/mattpocockuk/status/2061005409779925351)" (28K views) — experienced designers have a thousand shorthands ("bump the leading," "let it breathe," "fix the hierarchy") that non-designers can't supply. He thinks there's "a skill waiting to be written here," and when someone pointed him at an existing one ("impeccable"), his reply was a delighted "[fuck yeah, that's what I wanted](https://x.com/mattpocockuk/status/2061013489313857600)."

Two sharpening points from the replies:
- **The model can't see its own work.** Pocock himself: "[Model vision is not yet good enough to create really great designs](https://x.com/mattpocockuk/status/2061010335771881877)." Patrick Bade ([@nishffx](https://x.com/nishffx/status/2061008997612736711)) extended it — tell it to "let it breathe" and it may shrink the font to unreadable to win the whitespace; taste has to be reasoned about holistically, "and it could be this has to be baked into the model."
- **It generalizes past design.** Guilherme O'Tina ([@guilhermeotina](https://x.com/guilhermeotina/status/2061014070170391017)): "same dynamic in code. 'make it faster' is worthless. 'cut p99 by 30%' is a plan. It's a vocabulary problem that hits every domain where non-experts have to describe intent — maybe AI should lean harder on examples than natural language here."

## Around the Ecosystem

- **The "shitty robot" build log.** Mario Zechner ([@badlogicgames](https://x.com/badlogicgames/status/2060901805433733520), RT'd by Mitsuhiko) published [a full writeup on building his open-weights robot](https://mariozechner.at/posts/2026-05-30-shitty-robot/) — "a fun project that will keep on giving," with thanks to the open-weights community.
- **Codex is getting genuinely good at CAD.** LLMJunky [gave Codex API access to his Onshape account and had it design a 3D-printable monitor stand](https://x.com/LLMJunky/status/2060833485950996676): "I seriously thought it was marketing speak… you should see how bad the models were at this just a few months ago." His mobile harness client **Lynk** (OpenClaw / Hermes / Codex / local edge models) is now [up on GitHub](https://github.com/am-will/lynk) and in beta.
- **Agentic search as 80% of context engineering.** swyx amplified Leonie Monigatti's [talk-turned-blog-post on agentic search for context engineering](https://leoniemonigatti.com/blog/agentic-search-for-context-engineering.html) — low-floor specialized tools vs high-ceiling general ones, "and the part where an agent fakes semantic search by chaining grep synonyms."
- **Simon Willison** posted [notes on Opus 4.8 with pelicans-on-bicycles for all five thinking efforts](https://simonwillison.net/2026/May/28/claude-opus-4-8/), and continued his myth-busting streak — walking back the viral "[Uber blew its AI budget](https://x.com/simonw/status/2060209010486493500)" story as thinly sourced after digging in.
- **Lee Robinson** kept beating the fundamentals drum: "[You might believe you should spend less time thinking about code because of AI. I strongly disagree](https://x.com/leerob/status/2058577150500909108)" — an engineer still has to be on call for what ships, so vendoring code, trimming dependencies, and "spending waaaay more time on system design" only get more valuable.
- **Karpathy** stayed quiet on the Anthropic move; his most recent substantive post remains the "[ask your LLM to structure its response as HTML](https://x.com/karpathy/status/2053872850101285137)" riff on vision being the preferred *output* modality.

---

*Sources: RSS + Nitter thread scans of the accounts in `TASK.md`. Note: `@potetotes`'s Nitter feed returned a "user not found" error again today, so that account is not represented. Several benchmark figures (the GPT-5.5 #1 DeepSWE claim and the per-task cost table) come from posts circulating via retweets; treat the exact numbers as the posters' self-reported figures rather than independently verified.*
