---
title: "OpenAI's Codex Post-Mortem, Fable's Cutoff Reversed & the Weekend Coding Verdict"
date: "2026-07-13"
summary: "The Sol usage panic gets an autopsy: Codex lead **Tibo Sottiaux** itemizes exactly why GPT-5.6 Sol was nuking people's limits — a 372K context bump, over-eager multi-agent, and reverted juice values — hands out resets, and earns near-universal praise for the transparency (888K views), while Theo's own breakdown gets a rare public correction from Tibo mid-thread. Meanwhile the **July 12 Fable cutoff never came**: Anthropic quietly extended Fable 5 access again through July 19 to a 16.4M-view groan of *\"I feel like I'm in an abusive relationship with Claude\"* and a running tally of nine changed deals. The weekend's verdict hardened — Nick Schrock and others declare OpenAI has taken the coding lead — as Theo's Sol review crossed 700K views, Simon Willison poked at where \"Opus 5\" even fits in the Haiku→Mythos ladder, and Armin Ronacher wondered whether the Python 2→3 migration lessons still apply now that agents just do it."
tags:
  - OpenAI's Codex Post-Mortem
  - Fable's Cutoff, Reversed Again
  - The Weekend Coding Verdict
  - Opus 5 & the Naming Puzzle
  - Agentic Coding & Craft
  - Videos
  - Quick Hits
---

# AI Roundup — July 13, 2026

## OpenAI's Codex Post-Mortem

After a weekend of Sol users watching their usage evaporate, **Codex lead Tibo Sottiaux posted a detailed post-mortem** — ["Updates for Codex and ChatGPT Work users. No nerfing, only good stuff!"](https://x.com/thsottiaux/status/2076495156757577895) (888K views, 6.2K likes). The itemized list:

- **Inference optimizations** landed and passed down to subscriptions — ~10% more usage on its own.
- The product's context limit for Sol had been bumped to **372K (up from 272K for 5.5), which charged more usage than intended** — reverted to 272K, with a plan to reintroduce 372K without the cost hit.
- Reasoning-effort experiments (internally, "juice values") were **reverted**.
- Slightly-too-much **multi-agent spawning at high/xhigh** is being fixed, plus a small auto-review efficiency tweak.
- The **5-hour limit remains temporarily suspended**.

The replies were unusually warm for a usage-nerf thread: [*"that's how you build trust in a subscription. every other ai company takes the margin"*](https://x.com/alexanderbenz/status/2076505238480228739), and the pointed contrast [*"they screwed up, itemized exactly what went wrong, and handed out resets before most people even noticed. that's the gap with anthropic lately — one lab communicates and compensates, the other goes quiet"*](https://x.com/walidbelr/status/2076545237866930479). The one recurring gripe is still the model picker: [*"can we have some small brain modes... like 3 modes total, it feels so messy with the 3x4 shit"*](https://x.com/chilltankgame/status/2076554312327590362). **Theo saluted the openness** — [*"Unprecedented levels of transparency out of OpenAI... they definitely made mistakes but they're addressing them with full transparency"*](https://x.com/theo/status/2076501402822775267).

Theo followed with his own [engineering breakdown of how the failures stacked](https://x.com/theo/status/2076512403668488299) (124K views): reasoning tokens filling the enlarged context window, subagents spawning with that *full* window copied (the unfinished "v2" subagent layer), Ultra spawning too many of them, and Fast mode piling on an extra 2.5x. It's a good read — but notable mostly because **Tibo publicly corrected it in the replies**: the extra cost is *not* from 2x billing above 272K (subscriptions don't charge for longer context), it's that [cache-read cost grows with the size of the context shuffled back and forth between tool calls — so the cost sweet spot isn't the maximum context length](https://x.com/thsottiaux/status/2076543065045795309). Theo [conceded the point](https://x.com/theo/status/2076543641397633163) and asked whether cheaper cache reads are on the roadmap. Best reply, from an engineer on the receiving end: [*"thank u for screaming at us to fix things. we fixed it. keep screaming at us."*](https://x.com/ericlim/status/2076515530689982570)

## Fable's Cutoff, Reversed Again

Yesterday's dispatch led with "Fable Cutoff Day." **It didn't happen.** Anthropic [extended Claude Fable 5 access on all paid plans — and kept Claude Code's weekly limits 50% higher — through July 19](https://x.com/claudeai/status/2076351399999557669). The tweet pulled a staggering **16.4M views and 5,883 replies**, most of them some flavor of exhausted:

- [*"I feel like I'm in an abusive relationship with Claude."*](https://x.com/Motorv8tion/status/2076356263689019768) (5.5K likes)
- [*"Just make it permanent and stop playing these games."*](https://x.com/VitaliArbuzov/status/2076353278435377514) (3.9K likes)
- The definitive tally: [*"Guys, do you know how many times you've changed the deal since Fable 5 launched? Nine: 1 suspension, 1 redeploy, 2 extensions, 3 resets, 1 Code extension, 1 SDK rollback. You want applause for each extension. Users keep the uncertainty. That's how you burn trust."*](https://x.com/RyanWillia55819/status/2076373796563349965)
- And the mood on churn: [*"this is stupid at this point. we're all switching to GPT 5.6. you keep extending by barely a week at a time."*](https://x.com/Anon7000000/status/2076353275591340045)
- Consolation prize of the day, from a user who [panic-built an entire flight game to burn his remaining Fable quota before the (non-)cutoff](https://x.com/vedolos/status/2076353617934811173): *"…anyway it turned out great."*

## The Weekend Coding Verdict

With the pricing dust settling, the weekend's real question — *has OpenAI actually taken the coding lead?* — got a lot of confident answers. **Nick Schrock's stood out**: [*"I've seen enough: after a weekend of working with Sol and Fable it's pretty clear to me that OpenAI has taken the lead on coding models. Congrats to the team. You cooked. Looking forward to Anthropic's next move!"*](https://x.com/schrockn/status/2076488446961709218) The Fable loyalists pushed back in his replies — [*"fable nailing full project refactors with minimal guidance is crazy"*](https://x.com/RaoulDukeDegen/status/2076494016011804754) — and one framed the bar Anthropic now has to clear: [*"Opus 5 Ultracode at Fable 5's low-effort performance or very close to it, unless the consumer business model is over for Anthropic."*](https://x.com/maestroalvarez/status/2076541210831761864)

**Theo made his verdict official** with a 36-minute review, [*"GPT-5.6 is a great family of models. This is my review."*](https://x.com/theo/status/2076417924559224944) His advice to the overwhelmed: [*"Just stick with the official harnesses and frontier models for now. No need to stress over that last 1-2%. Codex is a tiny bit behind but they'll catch up faster than you can move your workflows over."*](https://x.com/theo/status/2076419810481811550) (Separately, his limits guide [crossed 700K views](https://x.com/theo/status/2076418899130958321): *"I wrote it while getting my hair cut. You can just do things."*)

The best practical onboarding advice came from **Keyan Zhang's Sol tips** (RT'd by steipete): [*"remove old slop — disable community skills/plugins, especially bundles with 20+ skills. Think of 5.6 Sol like someone who just grew from senior to staff: prescriptive guidance that used to help becomes micromanagement. Turn on Codex memory. You probably don't need Ultra — I do 95% of my work on Sol High."*](https://x.com/keyanzhang/status/2076461227661054015) And the pure-vibes end of the spectrum, from LLMJunky watching Sol test its own realtime voice agent by generating spoken test audio: [*"5.6 is so good that things like this do not surprise me anymore. My jaw would've been on the floor just 12 months ago."*](https://x.com/LLMJunky/status/2076380857623777720)

## Opus 5 & the Naming Puzzle

With "Opus 5 will beat Fable 5 soon" rumors circulating, **Simon Willison asked the obvious question nobody at Anthropic has answered**: [*"have Anthropic clarified how their relative naming scheme works yet? I assumed Haiku < Sonnet < Opus < Fable < Mythos — but is Fable meant to go between Sonnet and Opus?"*](https://x.com/simonw/status/2076440861253218399) He and repliers settled that [Fable and Mythos are the same weights and tier, Fable just wears the safeguards](https://x.com/simonw/status/2076454877878964614). Sharpest reply: [*"'relative naming scheme' is propping this whole question up — it means there isn't one, just launch order and vibes."*](https://x.com/ShokhzodjonT/status/2076453029201494139)

**Theo's answer is the one to read**: [Opus 5 should be seen as more like "5.1"](https://x.com/theo/status/2076510222714392628). *"If it's better than Fable 5, I'd expect them to label it 5.1. This isn't new — Sonnet 3.5 smoked Opus 3, Sonnet 4.5 smoked Opus 4.1, Sonnet 4.6 was slightly better than Opus 4.5. Tiering: definitely Haiku < Sonnet < Opus < Fable & Mythos."*

## Agentic Coding & Craft

**Matt Pocock's "comprehension debt" workflow** is a neat idea for fast-moving repos ([44K views](https://x.com/mattpocockuk/status/2076257280501129336)): once a day/week, grab a diff → have an LLM write a podcast transcript focused on the *why* not the *what* → TTS it → publish to a private feed → listen on your commute. He already runs this over his personal wiki (which ingests X/Slack/Discord/Gmail, [skimmed by Sonnet](https://x.com/mattpocockuk/status/2076546008528355530)). He's also mulling [an `npx` CLI to ship Wayfinder](https://x.com/mattpocockuk/status/2076297916336013516). And a delightful repurposing of one of his skills: [*"someone's using /grill-me in technical interviews — watch the candidate work, see whether the AI drives them or they drive the AI. Honestly genius."*](https://x.com/mattpocockuk/status/2076558271918358954)

**Armin Ronacher had GPT-5.6 port one of his 15-year-old pre-3.x Python projects to modern Python** — and the agent didn't even reach for `libmodernize`: [*"Whatever lesson we learned going from 2.x to 3.x might no longer apply."*](https://x.com/mitsuhiko/status/2076409894651957687) Jack O'Connor [pushed back](https://x.com/oconnor663/status/2076437504144904362): the real lesson was "make one codebase support both versions," and that still holds. (Separately, the `<!-- -->` saga from yesterday closed out: Armin confirms [OpenAI fixed the stray-comment tokens server-side](https://x.com/mitsuhiko/status/2076259819036557700).)

## Videos

- **Theo's full GPT-5.6 review** — a 36-minute walkthrough of the Sol/Terra/Luna family, reasoning levels, and harness choices, capped with a "which model when" breakdown — [via @theo](https://x.com/theo/status/2076417924559224944).
- **LLMJunky's first Sol session** — a screen-recording of a first run on gpt-5.6-sol — [via @LLMJunky](https://x.com/LLMJunky/status/2076449274305372560).

## Quick Hits

- **steipete's weekend build-out**: [*"Spent the weekend on a little facelift"*](https://x.com/steipete/status/2076551622227095828), followed by a photo of a wall of Codex sessions — [*"about as many sessions as my Mac Studio can take"*](https://x.com/steipete/status/2076552605262872904) — and the reveal that he [shards work across ~5 machines via Jump Desktop](https://x.com/steipete/status/2076553742883930455).
- **The Codex power feature nobody expected**: [*"the new Codex rich visualization support is fantastic — one of the best features they ever shipped"*](https://x.com/henrycunh/status/2076466064381116850) (RT'd by steipete).
- **A coding model that writes fiction?** LLMJunky put Cognition's [**SWE 1.7** through its paces](https://x.com/LLMJunky/status/2076331639643177444) — impressed by Cerebras "Lightning mode" speed, but the surprise is he thinks it's *"the best new creative writing model, even beating out its base model, Kimi 2.7. It's free btw."*
- **sama's Sol showcase**: OpenAI is [soliciting the coolest things people have built with 5.6 Sol](https://x.com/sama/status/2076398253332140410) (RT'd by steipete), prompting the wry aside that [*"tibo can reset the usage limits at ant now too"*](https://x.com/AdrienLE/status/2076505120175763954).
- **openclaw on e-ink**: someone [got @openclaw running on a Remarkable Pro](https://x.com/colinsolvely/status/2076439863759347803) (RT'd by steipete) — "working great."
- **LLMJunky on the platform wars**: [*"Apple's war on OpenAI has begun lol."*](https://x.com/LLMJunky/status/2076411754423124268)

*Note: @potetotes' feed again returned no items (Nitter serves an empty channel for the account), so it's unrepresented in this dispatch.*
