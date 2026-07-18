---
title: "Fablepocalypse Cancelled, Tibo Does It Again & the Real Price of Kimi K3"
date: "2026-07-18"
summary: "Anthropic ends the Fable cliffhanger: starting July 20, **Claude Fable 5 is included in all Max and Team Premium plans** at 50% of limits, with Thariq describing an around-the-clock capacity scramble — while replies credit GPT-5.6 and Kimi K3 for the competitive pressure. Hours earlier OpenAI's Tibo pulled the *'Oops... I did it again'* lever and reset usage limits for all paid Codex/ChatGPT Work users. Meanwhile Theo throws cold water on the Kimi K3 hype with cost math showing it lands at roughly GPT-5.6 Sol pricing at a quarter of the speed, LLMJunky finds the $19 Kimi Code plan dies after one prompt, K3 still tops the Frontend Code Arena (Jerry Liu: distillation heaven for startups), Theo debunks the Fable-vs-Mythos conspiracy (same weights, different entrance), and Simon Willison begs Anthropic for a regression suite after Claude Code on the web again blocked cloning public repos."
tags:
  - Claude Code & Anthropic Updates
  - Kimi K3 Reality Check & Model Wars
  - Codex & OpenAI
  - Agentic Coding & Workflows
  - Other Notes
---

# AI Roundup — July 18, 2026

## Claude Code & Anthropic Updates

### Fablepocalypse cancelled: Fable joins Max and Team plans for good

The week-long "use your Fable allowance before it vanishes" saga ended with Anthropic announcing that **beginning July 20, Claude Fable 5 is included in all Max and Team Premium plans at 50% of limits**, with Pro and Team Standard users keeping access via usage credits plus a one-time $100 credit. Anthropic's Thariq ([@trq212](https://x.com/trq212/status/2078514180051906864), 282K views) framed it as "a heroic effort by many people at Anthropic working sometimes literally around the clock" — it wasn't clear they'd secure capacity in time to avoid a gap in Max access. The replies are a great temperature read: plenty of gratitude, but the top reply thanks "GPT 5.6 Sol and my boy Kimi K3 for the extra fable limits," and several users vent about the FOMO-driven comms — people burned through their allowance racing a deadline that then evaporated. A biologist in the replies also notes Fable's safety classifiers block their legitimate scientific work, pushing them to Codex.

Simon Willison's take was more relaxed: ["Huge relief, the Fablepocalypse has been permanently cancelled"](https://x.com/simonw/status/2078360078714065370). Jerry Liu, as a Max user: ["you know what, i'll take it"](https://x.com/jerryjliu0/status/2078313486581715063). Armin Ronacher's counterpoint: ["Slacking off with fable is expensive."](https://x.com/mitsuhiko/status/2078423315987697885)

### Theo: "FABLE IS THE SAME MODEL AS MYTHOS"

Tired of influencer misinformation, Theo posted an [all-caps explainer](https://x.com/theo/status/2078223917702054221) (209K views): Fable 5 and Mythos 5 are the same weights on the same servers — "two separate entrances to the same place." Fable's extra safeguards are layers in front of the model (request checks plus response monitoring), while Mythos is the low-friction entrance for trusted parties. Best analogy from the replies: "TSA-Fable vs TSA Precheck-Mythos, lead to the same terminal if you get through." Theo also flatly shut down the recurring conspiracy that the current Fable is a different model from the one available at launch: "It is."

### Simon Willison begs for a Claude Code on the web regression suite

Simon [publicly asked Anthropic](https://x.com/simonw/status/2078343997119172705) for "an automated test suite somewhere that ensures Claude Code on the web never blocks me from cloning or interacting with other public repos from within my existing sessions" — his ["Clone repo X from GitHub to /tmp for reference"](https://x.com/simonw/status/2078344441950286160) pattern is one of his most-used prompts, and this isn't the first regression. The replies are substantive: one user notes cross-repo pulls are missing from Cursor, Codex, *and* Claude cloud agents ("makes me want to create a mega monorepo"), another dissects the screenshot into two separate failures (proxy choking on release binaries vs. the sandbox refusing a second repo owner), and several echo the deeper point — guardrails tuned by policy instead of context will always over-block, and "false-positive evals matter as much as capability evals."

## Kimi K3 Reality Check & Model Wars

### Theo's value math: K3 costs the same as GPT-5.6 Sol, at ¼ the speed

Day two of Kimi K3 brought the correction phase. Theo's [most-discussed post of the day](https://x.com/theo/status/2078215659948052984) (325K views, 230 replies): "Kimi k3 is an incredible model. It is not an incredible value." K3 is half the price of GPT-5.6 Sol per token, but 5.6 uses half as many tokens — so price evens out — and 5.6 runs 2x the TPS, getting work done ~4x faster at the same cost. He still loves K3 ("killer for a bunch of fun stuff like using Blender and making dumb games"), he's just tired of people pretending it's cheaper. Notably he says K3 is genuinely token-efficient — fewer tokens than any Anthropic model, with Sonnet 5 being "10x more token hungry than it should be" — and warns the upcoming open-weights release (July 27) will only shave 10–20% off hosting costs. Victor Taelin agrees in the replies: smarter than GPT-5.6 "in most ways that matter to me," but too slow to be practical.

### The $19 Kimi Code plan: one prompt, quota gone

LLMJunky's hands-on backs this up: [the rate limits on Kimi Code's $19 plan are "really bad"](https://x.com/LLMJunky/status/2078014545977573467) — one prompt building a browser game hit the 5-hour quota at ~85% complete and burned 20% of the weekly allowance ("Fable one shot this for me on the $20 plan"). His Rocket League benchmark verdict: [K3's version was "pretty mid,"](https://x.com/LLMJunky/status/2078267563511787532) 4th or 5th best he's seen, behind Opus 4.8 — nice UIs, disappointing physics. And Armin Ronacher [adds a caveat for evaluators](https://x.com/mitsuhiko/status/2078109495620771941): K3's current max-thinking-mode restrictions make it a bad match for some basic tasks.

### But K3 tops the Frontend Arena — and Jerry Liu sees distillation heaven

Meanwhile K3 hit **#1 in the Frontend Code Arena**, surpassing Claude Fable 5 with a 17-place jump from K2.6, ranking first in 6 of 7 domains (only Gaming went to Fable). Jerry Liu's [spicy framing](https://x.com/jerryjliu0/status/2078141654226358779): the proliferation of Chinese open-source models winning task-specific benchmarks "may not be great for American AI dominance," but it's fantastic for everyone else — "Every American AI startup will survive by distilling from the latest open-weight models, instead of solely depending on the frontier labs."

### Steipete: don't trust benchmarks, Terra high beats Sol low for reviews

Peter Steinberger switched his GitHub review bot @clawsweeper to [GPT-5.6 Terra high](https://x.com/steipete/status/2078236791329657017): ~40% faster than 5.5 with negligible quality loss and massively cheaper (xhigh negated the perf wins without moving review evals). Filed under ["don't trust benchmarks"](https://x.com/steipete/status/2078252386376929706): for his issue/code-review use case, Terra high delivers far better results than Sol low.

## Codex & OpenAI

### "Oops... I did it again" — Tibo resets everyone's limits

OpenAI's Tibo (@thsottiaux) [reset usage limits for all paid Codex and ChatGPT Work users](https://x.com/thsottiaux/status/2078320950488297917) (873K views, 14.6K likes), quoting his own ["GPT-5.6 Sol confirmed to be an extremely good model"](https://x.com/thsottiaux/status/2078310751878647932). He noted the reset [transitively "might also have reset other rate limits out there"](https://x.com/thsottiaux/status/2078321266524881065) — a wink at Anthropic's same-day Fable announcement. The reply section is a case study in reset-economics: multiple users lament having spent their *banked* resets hours before the global one dropped, and there are feature requests for banked resets that auto-apply at expiry. The timing war with Anthropic's Fable news was lost on nobody: "right after they announced Fable will stay in plans 😂"

Simon Willison connected a different dot: ["ChatGPT Work" is really "OpenAI Claw"](https://x.com/simonw/status/2078522146779967595).

### Codex corner

- Steipete found it ["both amazing and painful"](https://x.com/steipete/status/2078318731785359634) watching Codex use browser + computer-use to open Chrome, navigate to his PR, and wrangle the macOS file picker — all to upload an image, because GitHub has no API for PR comment attachments. He runs his Codex instances in VMs so they don't steal app focus.
- LLMJunky's "I'll Bet Ya Didn't Know This" series surfaced a hidden Codex feature: [easily switching between prompts in any long thread](https://x.com/LLMJunky/status/2078129596818489661). He also [wants natural-language search in Codex](https://x.com/LLMJunky/status/2078534106049106342) — the current search needs near-exact strings.
- The Codex Security plugin now has [its own progress UI](https://x.com/antonioleivag/status/2078225455686017194) (via LLMJunky RT).
- Theo's T3 Code analytics: [when Fable returned to Claude Code sub plans, Claude overtook Codex for the first time ever — then 5.6 dropped and Codex took the lead back](https://x.com/theo/status/2078217008894865452). Fun cohort: ["dual wielders"](https://x.com/theo/status/2078225264929325091) (users running both Codex and Claude) are the heaviest, most loyal users.

## Agentic Coding & Workflows

- **Matt Pocock spent an afternoon [controlling Claude Code with an Xbox controller and a microphone](https://x.com/mattpocockuk/status/2078112264259842400)** — "Extremely fun, and pretty productive." He also previewed [v1.2 of his /grill-me and /grill-with-docs skills](https://x.com/mattpocockuk/status/2078077849785815465): questions now come in rounds instead of one at a time (faster, less token spend, dependencies preserved), and shared his current flow: [/grill-with-docs → realize the issue is way bigger → /wayfinder make a map → continue happily](https://x.com/mattpocockuk/status/2078031590337245518).
- **Thariq on token thrift**: [building prototypes of mockups, schemas, and proofs-of-concept is the best way to avoid burning tokens before realizing you don't want the output](https://x.com/trq212/status/2078189833445654714).
- **swyx's untapped alpha**: [set your codex/claude/gemini/devin automations to auto-research how to improve your SEO/AEO every week](https://x.com/swyx/status/2078244735794413786) — with a follow-up teasing the next-level question of [on-policy "autoaeo"](https://x.com/swyx/status/2078293998398263587): does Claude optimizing your AEO disproportionately work *on Claude*?
- **Jerry Liu on harness architecture**: [1. build a workflow graph on top of the agent harness, 2. dynamically create that graph through an outer agent loop — "life is a loop (and a graph)"](https://x.com/jerryjliu0/status/2078524983748563370). Steipete's version of the same zeitgeist: ["Are we still talking loops or did we shift to graphs yet?"](https://x.com/steipete/status/2078277297791189132) Jerry also argued [high-quality retrieval still matters in 2026](https://x.com/jerryjliu0/status/2078537490932384136) even as harnesses improve.
- **Steipete's tooling spree**: [octopool.dev](https://x.com/steipete/status/2078238435995959311) is now the only thing between him and daily GitHub rate-limit issues, and user complaints made him (well, Codex) [build an icon editor for CodexBar](https://x.com/steipete/status/2078264088644276598). He also [told his claw to set up a printer](https://x.com/steipete/status/2078261964242039113).
- **Video**: Theo pinned his deep-dive ["Why do you use gpt-5.6 and kimi k3 inside of Claude Code?"](https://x.com/theo/status/2078217355780624864) — what Claude Code gets right, what Codex gets wrong, and how to copy his setup ("Blessed by Tibo btw").
- **Video**: Dex Horthy resurfaced a [January chat with Matt Pocock](https://www.youtube.com/watch?v=NKu3T9FUjmU) — "crazy how much good advice there is in here" ([via @dexhorthy](https://x.com/dexhorthy/status/2078180867940462727)).
- **Video**: AI Engineer published ["Research to Reality with Google DeepMind"](https://youtu.be/1P1hJ36rxM0) — the story of the 2018 Google X skunkworks that became the Gemini coding effort (via [swyx RT](https://x.com/aiDotEngineer/status/2078141533581431220)).

## Other Notes

- **Simon Willison on training-policy chaos at Google**: reacting to a report that Google employees themselves [faced restrictions on using Gemini over concerns proprietary code could leak into training data](https://x.com/simonw/status/2078130861485289977), he asks: [if Google can't agree on a zero-retention policy within its own company, what hope for the rest of us?](https://x.com/simonw/status/2078131588827918491) His sharper point: [the single biggest competitive advantage an AI lab could have right now is making it abundantly clear whether and how they train on your data](https://x.com/simonw/status/2078131930013515836) — he pays close attention and can't confidently summarize the policy of *any* leading lab.
- **Dead-internet check**: Simon on a post with [49 replies — "hard to be confident that ANY of them were posted by an actual human"](https://x.com/simonw/status/2078513714270191942). (His repo-cloning thread above was indeed swarmed by obvious reply bots.)
- **Armin Ronacher responds to DHH**: [a written response](https://dark.ronacher.eu/2026/7/17/live-by-deporting/) disagreeing with DHH on where Europe's problems lie ("it's not immigration") — [thread](https://x.com/mitsuhiko/status/2078080611311362118). Also from Armin: his models-update CI is now ["euromaxxing"](https://x.com/mitsuhiko/status/2078041951715147813) — only updating model catalogs during European business hours — and a confession most of us share: ["I have such a large graveyard of vibe coded apps and productivity things at this point."](https://x.com/mitsuhiko/status/2078450786963472724)
- **Grok 4.6 incoming**: LLMJunky reports [Elon believes it can challenge the best models](https://x.com/LLMJunky/status/2078346704529555494).
- **Palantir as an RL-env vendor?** Jerry Liu muses they [might be one of the best-positioned companies to sell RL environments to frontier labs](https://x.com/jerryjliu0/status/2078542803592974690).
