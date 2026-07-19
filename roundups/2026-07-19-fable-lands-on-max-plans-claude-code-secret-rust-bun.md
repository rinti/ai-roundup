---
title: "Fable Lands on Max Plans, Claude Code's Secret Rust Bun & the Kimi K3 Value Check"
date: "2026-07-19"
summary: "Anthropic ends the **Fablepocalypse**: from July 20, Claude Fable 5 is included in all Max and Team Premium plans at 50% of limits, with Thariq describing an around-the-clock capacity scramble — while replies credit competitive pressure from GPT-5.6 and Kimi K3. Simon Willison discovers Claude Code quietly ships an **unreleased Rust rewrite of Bun** (v1.4.0 canary), Theo dismantles both the Fable-vs-Mythos confusion (*same model, different entrance*) and the \"Kimi K3 is cheap\" narrative (token efficiency and speed make GPT-5.6 Sol roughly the same price and ~4x faster), and OpenAI's Thibault Sottiaux resets Codex/ChatGPT Work rate limits for all paid users while recruiting an early-access group."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Model Economics
  - OpenAI & ChatGPT Work
  - Other Notes
---

# AI Roundup — July 19, 2026

## Claude Code & Anthropic Updates

### Fable joins Max and Team plans — the "Fablepocalypse" is cancelled

The biggest story of the day: Anthropic announced that beginning July 20, **Claude Fable 5 will be included in all Max and Team Premium plans at 50% of limits**. Pro and Team Standard users keep access via usage credits and get a one-time $100 credit.

- Anthropic's Thariq ([@trq212](https://x.com/trq212/status/2078514180051906864), 850k+ views, 930 replies) framed it as "a heroic effort by many people at Anthropic working sometimes literally around the clock… It was not at all clear that we'd be able to do this in time." In [a follow-up](https://x.com/trq212/status/2078537116829765991) he clarified the goal was avoiding a gap in Fable access on Max plans after the July 7 cutoff, with demand far outstripping capacity.
- The replies are a good temperature read on Anthropic's community standing right now. Many are skeptical the timing is about heroics rather than competition — "Thanks to the heroic efforts of GPT-5.6 Sol and my boy Kimi K3 for the extra fable limits" ([@shaolinchen9](https://x.com/shaolinchen9/status/2078514497132859396), 1.3k likes). tinygrad's account [piled on](https://x.com/__tinygrad__/status/2078576567723463161) about opencode compatibility, silent Opus fallbacks, and policy churn. $20 Pro users feel left out, and a recurring serious complaint: **safety classifiers blocking legitimate work** — a biologist who moved to Codex because Fable can't be used for his research, and bug-bounty hunters saying the whole community is migrating because "even if you're cyber approved on Anthropic, you can't use Fable for anything" ([@rez0__](https://x.com/rez0__/status/2078818730906149105)).
- Simon Willison's [take](https://x.com/simonw/status/2078360078714065370): "Huge relief, the Fablepocalypse has been permanently cancelled." Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0/status/2078313486581715063)) as a Max user: "you know what, i'll take it." Armin Ronacher [notes](https://x.com/mitsuhiko/status/2078423315987697885) "Slacking off with fable is expensive."

### Theo: Fable IS Mythos — same model, different entrance

Theo posted a widely-shared [explainer](https://x.com/theo/status/2078223917702054221) (248k views) killing a persistent misconception: **Fable 5 and Mythos 5 are the same model — same weights, same servers**. The difference is the safeguard layers in front: Fable gets more request/response monitoring; Mythos is a lower-restriction entrance for vetted parties. Good pushback in the replies: why does Mythos benchmark higher if it's only guardrails, whether the routing to Opus 4.8 past ~790k context counts as "the same model," and [a claim](https://x.com/constexprvoid/status/2078304728593596629) that filling out Anthropic's cyber-access forms gets your safeguards adjusted to near-Mythos levels.

### Claude Code ships on an unreleased Rust rewrite of Bun

Simon Willison [discovered](https://x.com/simonw/status/2078692298301587758) that Claude Code's binary embeds the **new, unreleased Rust rewrite of Bun** (v1.4.0 canary — Bun was famously written in Zig), with two shell commands to verify it yourself. Write-up on his blog: [simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/).

Good thread details: a [neat trick](https://x.com/ajanraj25/status/2078825794701242697) using `BUN_OPTIONS="--preload=..."` to print the embedded Bun version, a pointer to Bun's own [bun-in-rust blog post](https://bun.com/blog/bun-in-rust) (so not exactly a secret), and the observation that millions of devs have effectively been beta-testing an unreleased runtime for months without noticing — "that's the only benchmark that matters" ([@0xDepressionn](https://x.com/0xDepressionn/status/2078787937462857990)). Others raise the fair operational concern that a regression in a vendored unreleased runtime has no public build to bisect against.

### Claude Code on the web regression

Simon Willison also [publicly begged](https://x.com/simonw/status/2078343997119172705) Anthropic to add an automated test that Claude Code on the web never again blocks cloning public repos mid-session — "Clone repo X from GitHub to /tmp for reference" is one of his most-used prompting patterns and this is a repeat regression.

## Agentic Coding & Model Economics

### Theo's Kimi K3 value check: good model, not a bargain

Theo's [most substantive thread](https://x.com/theo/status/2078215659948052984) (435k views): **Kimi K3 is an incredible model but not an incredible value.** K3 is half the price of GPT-5.6 Sol per token, but 5.6 uses half as many tokens, so cost evens out — and at 2x the TPS, GPT-5.6 finishes work ~4x faster at the same price. He [estimates](https://x.com/theo/status/2078217483698462848) open-weight hosting competition will only shave 10–20% off. Notable replies: Taelin [agrees](https://x.com/VictorTaelin/status/2078225887871328281) K3 is "smarter than gpt 5.6 in most ways that matter to me" but too slow to be practical; Theo [contrasts](https://x.com/theo/status/2078217655220306068) it with Sonnet 5 being "10x more token hungry than it should be"; LLMJunky [reports](https://x.com/LLMJunky/status/2078229851186532532) brutal rate limits on Kimi Code's $19 plan (one unfinished browser-game prompt burned 20% of his weekly quota — Fable one-shotted the same task).

Related: Theo's pinned [video](https://x.com/theo/status/2078217355780624864) "Why do you use gpt-5.6 and kimi k3 inside of Claude Code?" — what Claude Code gets right as a harness, what Codex gets wrong, and how to replicate his multi-model setup.

### T3 Code analytics: dual wielders and the model horse race

From T3 Code's anonymized analytics ([thread](https://x.com/theo/status/2078217008894865452)): when Fable returned to the Claude Code sub plan, Claude overtook Codex for the first time ever — then GPT-5.6 dropped and Codex took the lead back. The ["dual wielders"](https://x.com/theo/status/2078225264929325091) (users running both Codex and Claude) are the heaviest and most loyal users.

### steipete: GPT-5.6 Terra high is underrated for code review

Peter Steinberger [switched his GitHub review bot](https://x.com/steipete/status/2078236791329657017) to 5.6 Terra high: ~40% faster than 5.5 with negligible quality loss and massively cheaper (xhigh negated the perf win). In [a follow-up](https://x.com/steipete/status/2078252386376929706): "don't trust benchmarks" — for issue/code review, Terra high beats Sol low by far in his evals. He's also been tweaking [octopool.dev](https://octopool.dev), which he says is the only thing between him and daily GitHub rate-limit problems, and [shared](https://x.com/steipete/status/2078318731785359634) the absurd-but-real sight of Codex using browser + computer-use to open Chrome and manually upload an image to a GitHub PR comment — because GitHub has no API for it (he runs his Codex agents in VMs so they don't steal app focus).

### Codex tips: cross-thread agent collaboration

LLMJunky's [practical tip](https://x.com/LLMJunky/status/2078624104949952680): Codex agents in parallel threads working on the same codebase can be given each other's **session IDs** (right-click the thread) and asked to collaborate — [he reports](https://x.com/LLMJunky/status/2078626466992984276) they genuinely chat back and forth, wait for each other, and request updates. He also [wants](https://x.com/LLMJunky/status/2078534106049106342) natural-language search in Codex — the current exact-string search UX is noisy.

## OpenAI & ChatGPT Work

- Thibault Sottiaux [reset usage limits](https://x.com/thsottiaux/status/2078320950488297917) for all paid Codex and ChatGPT Work users ("Oops... I did it again"), joking it may have [transitively reset](https://x.com/thsottiaux/status/2078321266524881065) other providers' rate limits too, and [declared](https://x.com/thsottiaux/status/2078310751878647932) GPT-5.6 Sol "confirmed to be an extremely good model."
- He's [assembling an early-access group](https://x.com/thsottiaux/status/2078642674572419435) of 50–100 ChatGPT Work users via DM, and pitching the product hard: [creating/hosting sites, managing email, summarizing documents, docs/sheets/slides](https://x.com/thsottiaux/status/2078697631019303273), included in Plus/Pro/Business/Enterprise. His own workflow is now [mostly dictation-driven delegation](https://x.com/thsottiaux/status/2078697741455356367) — including having it triage his own Twitter DMs for the beta callout.
- Simon Willison's [read](https://x.com/simonw/status/2078522146779967595) on the positioning: "'ChatGPT Work' is really 'OpenAI Claw'."

## Other Notes

- **Retrieval still matters in 2026** — Jerry Liu [argues](https://x.com/jerryjliu0/status/2078537490932384136) that production agentic retrieval is less about groundbreaking techniques and more about solid indexing/retrieval engineering plugged into modern harnesses, and [muses](https://x.com/jerryjliu0/status/2078524983748563370) that agent architecture is converging on "build a workflow graph on top of the harness, dynamically create that graph through an outer agent loop." Also a spicy one-liner: [Palantir might be one of the best-positioned companies to sell RL environments to frontier labs](https://x.com/jerryjliu0/status/2078542803592974690). steipete's [companion snark](https://x.com/steipete/status/2078277297791189132): "Are we still talking loops or did we shift to graphs yet?"
- **AEO as untapped alpha** — swyx [recommends](https://x.com/swyx/status/2078244735794413786) setting your coding agents to auto-research SEO/AEO (answer-engine optimization) improvements weekly, [estimating](https://x.com/swyx/status/2078581967768166591) AEO will be responsible for $1M of his revenue next year, and [poses the next-level question](https://x.com/swyx/status/2078293998398263587): does Claude optimizing your AEO disproportionately work on Claude?
- **Learning to code from prison with Claude** — LLMJunky [shared the story of Rondo](https://x.com/LLMJunky/status/2078607351444046290), a DOJ prisoner using Claude to learn software engineering, ML, and networking, building interactive learning tools along the way.
- **OpenAI Micro keyboard mania** — the OpenAI Micro keyboards are [reselling for ~$1000 on eBay](https://x.com/LLMJunky/status/2078730044638220354) (sold listings, not asks).
- **The vibe-coding graveyard** — Armin Ronacher [confesses](https://x.com/mitsuhiko/status/2078450786963472724) to "such a large graveyard of vibe coded apps and productivity things at this point," and [appreciates](https://x.com/mitsuhiko/status/2078583203237896195) that models now understand instructions like "put the next button directly next to the input box like we do on the next page."
- **Grok 4.6 teased** — [LLMJunky notes](https://x.com/LLMJunky/status/2078346704529555494) Elon Musk says it's coming soon and can challenge the best models. His own [Rocket League benchmark](https://x.com/LLMJunky/status/2078267563511787532) verdict on Kimi K3: nice UIs, "not Fable."

---

*Quiet feeds this cycle: @karpathy, @bcherny, @leerob, @mattpocockuk (no posts in the window). @potetotes RSS returned 0 items (known-empty feed).*
