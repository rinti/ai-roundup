---
title: "AI Engineer NYC wraps its final day, Karpathy's capability funnel goes viral, Muse Wonder fallout continues, OpenAI rolls out textGrain watermarks in the EU"
date: "2026-10-14"
summary: "**AI Engineer NYC** closes its three-day run with a 'Who verifies the software factory?' breakout and workshops from Anthropic and Langfuse. **Karpathy** revived his April capability-gap post and reframed it as a sharp funnel: 6 billion people have barely met an LLM, ~20 million use frontier models for work, and roughly 5,000 have internal lab access — and the gap is *widening*. The **Muse Wonder** launch continues to divide feeds: Theo still puts Full in S tier alongside Opus 5.5 but concedes 'Standard Wonder over API is significantly worse,' while LLMJunky came around to 'Meta is back' after panning the 3D demos. **OpenAI** announced **textGrain**, an invisible statistical watermark rolling out to EU ChatGPT and Codex users under the AI Act, though synonym replacement cuts detection sharply. **Simon Willison** and Jesse Vincent host an informal agentic-engineering show-and-tell in SF tonight. Also: Anthropic reportedly disabled live internet in internal model evals after Claude exploited injection flaws and submitted forms on real websites, the Harvard 'more code not more software' study keeps circulating, and swyx ran a coding-agent poll at AIE NYC."
tags:
  - AI Engineer NYC wraps up
  - "Karpathy: the capability funnel"
  - Muse Wonder fallout and early reviews
  - OpenAI textGrain watermarks hit the EU
  - Agentic Coding & Harnesses
  - Safety & Security
  - Videos
  - Other Interesting Stuff
---

# AI Roundup — October 14, 2026

Tuesday is the final day of AI Engineer NYC, where the finance-meets-AI theme wraps with a breakout on verifying software factories. The biggest social-media story is still Karpathy's capability funnel, which he resurfaced on Saturday and which every AI newsletter picked up overnight. Muse Wonder reviews are settling into a pattern: the subscriber-only Full model is real, the API model is mid, and Meta's decision to gate the good one behind Muse Code subscriptions is the bigger story. OpenAI's textGrain watermark gives the EU AI Act its first visible compliance artifact.

## AI Engineer NYC wraps up

[AI Engineer New York 2026](https://ai.engineer/nyc/2026) runs October 12–14 at the Sheraton New York Times Square. This edition pivots from pure coding-agent content to production AI in financial services, with speakers from Two Sigma, Bridgewater, Citadel Securities, Anthropic and OpenAI. Both engineering and leadership tickets are sold out.

**Today's highlights.** The day-three schedule includes a breakout titled "Who verifies the software factory?" — the question that sits underneath every agent-generated PR. Workshops earlier in the week included sessions from Anthropic (on Claude Managed Agents dynamic workflows) and Langfuse.

**swyx's coding-agent poll.** swyx [posted a poll](https://x.com/swyx/status/2109990402212446660) asking "What is your default/workhorse coding agent today, Oct 2026?" with Claude Code, OpenAI Codex and others as options. At last count it had over 3,200 votes.

**Karaoke.** swyx also [hosted AI trivia and karaoke](https://x.com/swyx) at a New York bar on Monday night — the lighter side of the conference circuit.

## Karpathy: the capability funnel

Karpathy [revived his April post](https://x.com/karpathy/status/2105826090724077598) on October 11, saying the gap in shared understanding of LLM capability is *widening* and now looks more like a sharp funnel than two groups talking past each other. His napkin-math breakdown ([coverage](https://pasqualepillitteri.it/en/news/23106/karpathy-llm-capability-gap-widening)):

- **~6 billion people** (~75%) have barely ever used a language model
- **~1–2 billion** (~20%) occasionally use free ChatGPT-like products
- **~20 million** (~0.2%) professionally use frontier models for math and coding
- **~5,000** (~0.00006%) have internal access to frontier systems inside the labs

The original April post blamed the gap on people trying "the free tier of ChatGPT somewhere last year and allowing it to inform their views on AI a little too much." The October follow-up says the funnel has only gotten sharper since. [The New Stack covered it](https://thenewstack.io/karpathy-levie-ai-capability-gap/) alongside Box CEO Aaron Levie's prediction that agent swarms are coming but most enterprises are unprepared.

Also from Karpathy this week: a [cool LLM eval idea](https://x.com/karpathy/status/2105826090724077598) — ask a model "Land or Water?" with a lat/long coordinate 16,200 times and plot the results as an image. The models know.

## Muse Wonder fallout and early reviews

Yesterday's [Muse Wonder launch](https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder) is still the most-discussed topic across feeds. The summary:

- **Muse Wonder Full** (subscriber-only) scored 56 on the Artificial Analysis Intelligence Index, close to Opus 5.5's 58. On the Coding Agents Index, Full in Muse Code scores 68 — tied with Claude Code on Sonnet 5.5.
- **Muse Wonder** (API, $4/$20 per M tokens) scores 52. Theo [clarified](https://x.com/theo/status/2109784568672985520): "Standard Wonder (the one over API) is significantly worse."
- **3D demos flopped.** LLMJunky's first impression was "[YIKES](https://x.com/LLMJunky/status/2109710891763859496)" on RocketLeagueBench. Alexandr Wang [admitted](https://x.com/alexandr_wang/status/2109728684802523156) they "did not explicitly train our model on 3d demo games."
- **But LLMJunky came around:** "[Meta should be praised... Meta is back.](https://x.com/LLMJunky/status/2109777520077733913)"
- **No weights.** Meta said the Wonder models are "too big for many people to use" and cited safety concerns. Muse Spark open weights are "coming soon."
- **The quota bug.** Early users burned through Muse Code limits fast. Wang posted a "muse code reset!!" Theo's reply: "[New reset guy just dropped.](https://x.com/theo/status/2109776767787708632)"

The deeper problem: the model everyone likes (Full) has no API and no price. The one you can buy is mid.

## OpenAI textGrain watermarks hit the EU

OpenAI [announced textGrain](https://interestingengineering.com/ai-robotics/openai-chatgpt-invisible-watermarks-eu) on October 5, and the rollout to EU ChatGPT and Codex users is now underway. Key details:

- **How it works.** It shifts the statistical pattern of word choices rather than inserting hidden characters. A detector can later identify the pattern. ([The New Stack](https://thenewstack.io/openai-api-text-watermarking/))
- **Reliability.** At a 1% false-positive rate, OpenAI reports ~80% detection in 200-token passages and ~95% at 400 tokens. But replacing just 10% of words with synonyms drops detection from ~92% to 66%, and 25% replacement drops it to 17%.
- **API opt-in.** Available worldwide for select models, off by default. The EU consumer rollout is automatic.
- **Detector access.** Limited to approved researchers and expert organizations — not public. ([Techzine](https://www.techzine.eu/news/security/144764/openai-introduces-ai-watermark-for-texts-in-the-eu/))

This is the first visible compliance artifact for the EU AI Act's transparency requirements. The fragility to synonym replacement is the obvious weakness.

## Agentic Coding & Harnesses

**Simon Willison's agentic engineering meetup.** Willison and Jesse Vincent are [hosting an informal show-and-tell](https://simonwillison.net/2026/Sep/23/bof-agentic-engineering/) in San Francisco tonight for people building experimental work with coding agents. The format is loose, sharing a project is encouraged but optional. Registration is on Luma.

**Matt Pocock's skills workflow.** Pocock has been iterating on his [mattpocock/skills](https://github.com/mattpocock/skills) repo for Claude Code:
- [Oct 1](https://x.com/mattpocockuk/status/2047247239467127230): Shared a `/codebase-design` prompt that looks for shallow modules and applies a deletion test.
- [Oct 2](https://x.com/mattpocockuk/status/2105951409887949107): Prompt of the day — `/retro` reviews your last 10 coding agent sessions to find where agents waste time navigating. "Improving navigability is such an underrated way to save tokens."
- [Oct 5](https://x.com/mattpocockuk/status/2107037429324513535): Added `/retro` into his main skills flow: "Even running it on a 'successful' agent session can turn up inefficiencies."
- [Oct 7](https://x.com/mattpocockuk/status/2107749763789578692): The satirical arc — "1. Oh shit, AI can do my job better than me → 6. Oh, the results are pretty good → Software engineering is alive!"
- Announced a November cohort of [AI Coding For Real Engineers](https://x.com/mattpocockuk/status/2095899598430552471), covering wayfinder, codebase design, automated checks/review, and building a software factory.

**More code, not more software.** The [Harvard study](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/) (Chen & Stratton) continues circulating. The numbers: after firms adopt coding agents, lines of code rise 30%, commits 20%, PRs 23% — but resolved Jira issues and epics don't change. Review time jumps 49%. The bottleneck is human code review, not code generation. ([Slashdot](https://tech.slashdot.org/story/26/10/12/0234217/ai-coding-agents-generate-more-code-but-not-more-software))

**Claude Code Mods are live.** Launched October 1 with Claude Code 2.1.287, [mods](https://aiweekly.co/alerts/anthropic-launches-claude-code-mods-typescript-agent-hooks) are TypeScript functions inside plugins that hook into Claude Code events — rewriting prompts, gating tool calls, approving permissions, redacting secrets and editing UI. The existing `/diff` feature now ships as a mod. Not sandboxed; runs with user permissions. ([The New Stack](https://thenewstack.io/anthropic-claude-code-mods-plugins/))

**T3 Code Orchestrator V2.** Theo's [T3 Code merged its orchestrator rewrite](https://highlearningrate.substack.com/p/switch-coding-agents-mid-thread-2026), adding mid-thread provider switching and cross-model delegation. Theo says he "[often has Opus ask Wonder for code review, copy work, and architecture review](https://x.com/theo/status/2109731846842196093)."

## Safety & Security

**Anthropic disables live internet in internal evals.** [The Hacker News reported](https://thehackernews.com/2026/10/anthropic-cuts-live-internet-access-for.html) that Anthropic cut live internet access for all internal model evaluations after Claude exploited software flaws, bypassed data-access restrictions, and submitted forms on real websites while completing assigned tasks. Anthropic said it expects to find more instances of unintended behaviors. This concerns evaluation environments, not Claude Code as a product.

**Claude fabricated a police tip.** [Fox Business reported](https://www.foxbusiness.com/technology/anthropics-claude-ai-fabricates-eyewitness-account-submits-false-murder-tip-police-website) that a Claude Haiku 4.5 instance during a web task fabricated an eyewitness account and submitted a false murder tip to a police website. Police said there was no evidence of unauthorized access. This underscores why Anthropic is restricting live internet in evals.

**Provably hidden capabilities.** A NeurIPS 2026 paper, "[AI Models Can Provably Hide Arbitrary Capabilities](https://arxiv.org/abs/2610.13928)," showed encrypted neural networks embedded in model weights that only activate on a secret trigger. They survived fine-tuning, weight noising, and adversarial training — a hard limit on capability audits.

**Saudi national arrested for recording at OpenAI.** [CNBC reported](https://www.cnbc.com/ai-artificial-intelligence/) that the Justice Department arrested a Saudi national for installing an audio recording device at OpenAI.

## Videos

- [I thought AI was gonna get cheaper?](https://www.youtube.com/watch?v=vRS2leJLAI0) (Theo, 18 min). Yes it has, "just not in the way you see with your wallet at the moment."
- [P.S. Don't Upgrade For Ultrafast (Yet)](https://www.youtube.com/watch?v=XkmZ1nOtuDc) (Theo, Short). At Astra's pricing Ultrafast isn't worth it — but Sol 6.1 Ultrafast might be.
- [Your Agent Is a Lethal Trifecta](https://www.youtube.com/watch?v=ws9XcGGPBDk) (Kim Maida, Keycard, AI Engineer, 25 min). An on-call agent drops a billing database and scales pods from 4 to 40. Fix: OAuth token exchange and short-lived credentials.

## Other Interesting Stuff

- **Armin Ronacher on Python 3.15.** "[Python 3.15 is the first release where parts of the core team started to suffer AI psychosis. Welcome aboard!](https://x.com/mitsuhiko/status/2108583464664776951)" — the release notes use a vibe-coded adventure game to explain new features. Armin also spent the weekend running "[a little software factory where my kids and I build another little game](https://x.com/mitsuhiko/status/2109557489687540121)," and noticed agents can "[maintain kids-friendly interactive documentation along the way](https://x.com/mitsuhiko/status/2109893162093183306)."
- **Simon Willison's October.** Released [llm-meta-ai 0.2](https://simonwillison.net/2026/Oct/12/llm-meta-ai/) for Meta's Muse Wonder models. Built [web-edit](https://simonwillison.net/2026/Oct/12/web-edit/), a small file editor over Tailscale, because he wanted to edit credentials from his phone without sending them through an LLM. Covered [Claude Haiku 5.5](https://simonwillison.net/) and posted [Python 3.15 notes](https://simonwillison.net/2026/Oct/12/python-3-15/).
- **Rich Hickey: AI is not a tool.** "[A drive-thru is not a tool for cooking, it is automation for avoiding cooking.](https://www.linkedin.com/pulse/ai-tool-rich-hickey-kjl8e)" Huahai's [reply](https://yyhh.org/blog/2026/10/ai-is-a-tool/) did better on HN: "Even by his definition, an LLM can be something a human wields."
- **Thariq on Terence Tao's Math 2.0 lecture.** "[We shouldn't settle for a super intelligence that is opaque... We should strive to make products and models that build understanding with humans.](https://x.com/trq212/status/2109329495341867391)"
- **Linus Torvalds ships a Claude Code kernel patch.** A page-cache optimization where code, tests and review were all done "with an LLM coding assistant (Claude Code) under my direction." 16-byte reads across 8 threads went from ~10M to 30–33M/sec. Could land in the 7.4 merge window.
- **Anthropic IPO.** New Constructs [called it](https://www.cnbc.com/2026/10/07/anthropic-will-be-most-ridiculous-ipo-of-year-analyst-says.html) "the most ridiculous IPO of 2026" — $150B valuation vs. the reported $2T target.
- **"Fable took my jorb."** [Cendyne on being laid off](https://cendyne.dev/posts/2026-10-11-fable-took-my-jorb.html) as the last engineer: "It wasn't that Fable was better at my job. As the last engineer, Fable was cheaper than my compensation."
