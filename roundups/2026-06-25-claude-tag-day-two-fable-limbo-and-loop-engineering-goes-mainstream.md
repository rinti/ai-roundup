---
title: "Claude Tag Day Two, Fable Limbo Drags On & Loop Engineering Goes Mainstream"
date: "2026-06-25"
summary: "The Claude Tag afterglow continued with context-ownership debates, enterprise-gating frustration, and the question nobody at Anthropic wants to answer: *can the memory leave?* Fable 5 hit day 13 offline with no restoration date — Polymarket odds jumped after Tom Brown replaced Dario in Commerce talks, but isfable5back.com still says no. Meanwhile loop engineering crossed from tweet into textbook: Armin Ronacher's *\"The Coming Loop\"* blog post, Boris Cherny's *\"thousands of agents running 20 hours straight\"* quote, and a proliferation of practitioner guides signal the idea has legs beyond the hype cycle. Simon Willison shipped browser-compat-db and explored persistent Datasette Lite via OPFS, the State of AI survey confirmed 54% AI-generated code with Claude Code leading sentiment, and Google quietly delayed Gemini 3.5 Pro to July."
tags:
  - Claude Tag — Context Ownership & the Morning After
  - Fable 5 Day 13 — Still Offline, Negotiations Shift
  - Loop Engineering Goes Mainstream
  - The Numbers — State of AI & Stack Overflow Surveys
  - Simon Willison's Quiet Productivity
  - Also Noted
---

# AI Roundup — June 25, 2026

## Claude Tag — Context Ownership & the Morning After

Yesterday's [Claude Tag launch](https://www.anthropic.com/news/introducing-claude-tag) was the biggest Anthropic coordination push in months — Boris Cherny, Karpathy, Thariq, and seemingly the entire staff posting in concert. Today the conversation shifted from "what is it" to "who owns what."

**The context portability question.** The sharpest post-launch critique centers on lock-in. [Alpha Signal's newsletter](https://alphasignalai.substack.com/p/the-real-claude-tag-question-is-context) framed it directly: "The real Claude Tag question is context ownership" — can the memory, institutional knowledge, and channel context leave Claude Tag in a form another model can use? Can teams rebuild the workflow if Claude Tag is disabled, capped, or blocked by a policy change? Given Fable 5's sudden disappearance two weeks ago, the question isn't theoretical.

**Enterprise-only frustration lingers.** Claude Tag is beta for Enterprise and Team customers only. [Jason Haugh's lament](https://x.com/jason_haugh/status/2069600265062199772) from yesterday — "Wish it worked on non-enterprise accounts" — continued to echo, alongside requests for Teams, Lark, and Mattermost support that Cherny answered with ["soon"](https://x.com/bcherny/status/2069556296114978949). The token-bill anxiety from [Eric Pate](https://x.com/Eric_P8/status/2069561427409400007) — "We're gonna see token bills like you people have never seen" — is shaping up as the practical counterweight to the ambition.

**"Just marketing."** A segment of the reaction has hardened around the view that Claude Tag is a polished wrapper on an open-source pattern. [Kimmonismus](https://x.com/kimmonismus): "At this point it's just marketing." The open-source comparison to [OpenClaw](https://openclaw.ai/) persists, though Karpathy's [pointed rebuttal](https://x.com/karpathy/status/2069601818540392669) from launch day — "it's not even OpenClaw adjacent, it's a different way of working entirely" — remains the strongest counter. Steipete, for his part, had [pre-framed it](https://x.com/steipete/status/2068961217524490739) the day before launch: "The hype died down. We improved quality and grew a team. We created a non-profit whereas competitors are VC funded and have other agendas."

**Thariq's playbook stands out.** If you missed it yesterday, [Thariq's best-practices thread](https://x.com/trq212/status/2069474335656694003) is the most actionable Claude Tag content so far: give each channel a pinned persona, maintain a personal `#yourname-claude` channel, have Claude update a pinned status message, and use emoji reactions for status tracking. [Slack's official account](https://x.com/SlackHQ/status/2069506088186061019) called it "a masterclass in setting up stateful agent workflows."

## Fable 5 Day 13 — Still Offline, Negotiations Shift

[isfable5back.com](https://isfable5back.com/) still says no. Thirteen days after the US government ordered Anthropic to suspend Claude Fable 5 and Mythos 5 over export-control concerns, both models remain offline for every user globally.

**The negotiation shifted.** The notable development is a personnel change in the Commerce Department talks. [Reporting on X](https://news.kalshi.com/p/fable-5-odds-anthropic-access-restored-july-57-percent) indicates Tom Brown (Anthropic co-founder, chief compute officer, GPT-3 architect) replaced CEO Dario Amodei in negotiations, alongside public policy chief Sarah Heck. Polymarket odds for Fable 5 returning jumped from ~15% to 60% following the delegation change.

**The timeline.** At a Seoul press conference on June 17, Anthropic's Chris Ciauri said they're "very confident that in the coming days, the models will become available again." Eight days later, still nothing. [Manifold](https://manifold.markets/PhilipDowdell/will-anthropic-restore-access-to-fa) is tracking whether restoration happens before end of June.

**The background radiation.** Every Anthropic launch thread this week has a Fable heckler. [Theo to Anthropic](https://x.com/theo/status/2069508944423452880): "Hey @claude when are we getting Fable back?" [tmuxvim](https://x.com/tmuxvim/status/2069476091161391417) under the Claude Tag launch: "how bout you launch Fable bro."

**Also delayed: Gemini 3.5 Pro.** Google's next flagship model, [announced at I/O on May 19](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/), has been [pushed to July](https://cryptobriefing.com/google-delays-gemini-35-pro-launch-to-july-2026/). The original target was June. Between Fable 5's export ban and Gemini 3.5 Pro's delay, the frontier model landscape is unusually frozen for late June.

## Loop Engineering Goes Mainstream

The "loop engineering" meme has crossed from provocative tweet into recognized practice in under three weeks.

**The origin tweet.** [Peter Steinberger, June 8](https://x.com/steipete/status/2063697162748260627): "Here's your monthly reminder that you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents." 6.5 million views. The entire AI-coding timeline argued about it for a week.

**Ronacher's long-form take.** Armin Ronacher's blog post [*"The Coming Loop"*](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) (June 23) gave the concept its first serious architectural treatment. The pattern: work goes into a queue, a machine picks it up and attempts it, a harness decides whether the task is complete, and if not, the harness continues the session, injects another message, starts fresh with modified context, or sends the task to another machine. Ronacher shared it [on X](https://x.com/mitsuhiko/status/2069371901583954275) and the discussion continued today.

**Cherny's defining quote.** Boris Cherny, creator of Claude Code, [in a widely-shared interview](https://x.com/AnatoliKopadze/status/2069433889278288126): "Every night I have hundreds, sometimes thousands of agents running in loops for 5, 10, 20 hours straight. This is just how engineering is done now." His three-stage definition of a loop — prompt → execute → verify → repeat — is being [codified by practitioners](https://medium.com/mountain-movers/what-a-loop-actually-is-boris-chernys-three-stage-definition-33dd2bfe01b3).

**The practitioner guide wave.** In the last week alone: [TechTalks](https://bdtechtalks.com/2026/06/22/ai-loop-engineering/amp/) ("Demystifying loop engineering"), [Data Science Dojo](https://datasciencedojo.com/blog/agentic-loops-explained-from-react-to-loop-engineering-2026-guide/) ("Agentic Loops: From ReAct to Loop Engineering"), [explainx.ai](https://explainx.ai/blog/loop-engineering-coding-agents-claude-code-guide-2026) ("How to Design Coding Agent Loops That Run While You Sleep"), and [Yahoo Tech](https://tech.yahoo.com/ai/claude/articles/forget-prompt-engineering-loop-engineering-090101184.html) ("Forget prompt engineering: 'loop engineering' is all the rage now"). The backlash-to-the-backlash is also here — [StationX](https://app.stationx.net/articles/loop-engineering): "Loop Engineering: New Paradigm or Rebranded Cron?"

**The Sam Willis receipt.** Still the most concrete demo: [`/goal make postgres multithreaded`](https://x.com/samwillis/status/2069147163255312392) — 1,000+ commits, 124K lines, 786 changed files, 10 days and counting. [Still running](https://x.com/samwillis/status/2069494541208416509). Reviewed by Codex. Hasn't exceeded the Codex Pro x20 limit yet. The rate limiter is compile-and-test, not tokens.

**Pocock's counterpoint.** Matt Pocock has been consistent in pushing back against prompt-engineering nihilism. [Yesterday](https://x.com/mattpocockuk/status/2069463356700770816): "Usually the more of a skill I've handwritten, the better it is. Paying attention to each word as you write it is unreasonably effective." His /skills repo continues at 135K+ GitHub stars.

## The Numbers — State of AI & Stack Overflow Surveys

**State of AI (for Web Devs) 2026.** The [Devographics survey](https://2026.stateofai.dev/en-US) (7,258 respondents, closed May 8) delivered the headline numbers:
- Developers now generate **54% of their code with AI**, up from 28% last year
- **72%** say AI is integral to their workflow
- **Claude Code leads positive sentiment** among coding agents at 42.3%
- Claude is the model developers **pay for the most**
- Hallucinations remain the top pain point
- **63% of AI-generated functions had a security finding** — misses cluster in auth, input validation, unpinned crypto

[Theo flagged](https://x.com/theo/status/1912883664007930314) that over half of respondents watch his videos.

**Stack Overflow 2026 Dev Survey opened** on [June 23](https://stackoverflow.blog/2026/06/23/the-2026-developer-survey-is-now-open-for-human-developers-only) — tagline: "for human developers only." Last year's results (49K devs, released Dec 2025) showed the trust paradox: [84% using AI tools, but only 3% "highly trust" AI-generated code](https://byteiota.com/stack-overflow-dev-survey-2026-ai-at-84-trust-at-3/). 66% cited "AI solutions that are almost right, but not quite" as their top frustration.

## Simon Willison's Quiet Productivity

Simon Willison continues shipping at his usual prolific pace:

- **[browser-compat-db](https://simonwillison.net/2026/Jun/24/browser-compat-db/)** (June 24) — a browser compatibility database you can download or explore with Datasette Lite.
- **Datasette Lite + OPFS exploration** (June 23) — testing whether Datasette Lite (Python running in-browser via Pyodide/WASM) can edit persistent SQLite files using Origin Private File System, built with Claude Code for web.
- **[Datasette 1.0a35](https://simonwillison.net/2026/Jun/23/datasette/)** released June 23, **[sqlite-utils 4.0rc1](https://simonwillison.net/2026/Jun/21/sqlite-utils/)** on June 21 with migrations support and nested transactions.
- Earlier this week: [GLM-5.2 writeup](https://simonwillison.net/2026/jun/17/glm-52/) ("probably the most powerful text-only open weights LLM"), [Datasette Apps](https://simonwillison.net/2026/Jun/18/datasette-apps/) (host custom HTML apps inside Datasette), and the [Moebius vision model running in-browser via ONNX](https://simonwillison.net/2026/Jun/22/porting-moebius/).

## Also Noted

- **Anthropic by the numbers.** Claude has hit a [$30B revenue run rate](https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth) (80x growth in Q1 2026). Claude Code alone is at [$2.5B ARR](https://www.mindstudio.ai/blog/claude-code-2-5-billion-annualized-revenue-saas-comparison) after nine months, doubling since the start of 2026. Anthropic has [confidentially filed for an IPO](https://www.cnbc.com/2026/06/01/microsoft-and-google-take-on-anthropic-and-openai-in-ai-coding-models.html) at a ~$965B valuation.

- **LLMJunky on computer/browser use limits.** [@LLMJunky](https://x.com/LLMJunky/status/2069575544258052399): "Computer and Browser use are amazing, life changing innovations. But they have seriously glaring problems… Though they claim background use, many tasks still need babysitting." A grounded counterweight to autonomy hype. Separately, he gave [Sakana AI's Fugu](https://the-decoder.com/sakana-ais-fugu-orchestrates-multiple-llms-to-match-anthropics-fable-and-mythos-benchmarks/) early negative impressions — "exhausted my entire five-hour quota on the $20 plan with a single prompt."

- **Theo, grudgingly, on Codex.** [Theo](https://x.com/theo/status/2069366192536781273): "I know I dunk on Codex a lot but man this is actually magic." He also flagged [NerdSnipePod](https://x.com/NerdSnipePod/status/2069593931340554247) covering Cursor×SpaceX, the new Cursor model, open weights, and AI regulation (chapter title: "Fable is still banned").

- **swyx on GLM-5.2 and SpaceX math.** [swyx](https://x.com/swyx/status/2069598378191941835) on Zai's open-weights model: "now they have beat deepseek with the world's undisputed top open model." His [SpaceX-as-NeoCloud analysis](https://x.com/swyx/status/2069301071965741388) calculated that SpaceX has already recouped ~half its $60B Cursor investment in compute deals.

- **Jerry Liu / LlamaIndex.** Recent focus on [LiteParse v2.1](https://x.com/jerryjliu0) (fastest PDF → markdown parser), [Spreadsheet Agents](https://x.com/jerryjliu0/status/1930700136482800050) for unnormalized Excel sheets, and LlamaCloud Chat for conversational interfaces over production data.

- **Karpathy's knowledge-base concept.** Still resonating from April: using LLMs to build personal, interlinked Markdown knowledge bases rather than treating them as chatbots. His [autoresearch project](https://github.com/karpathy/autoresearch) (AI agents running automated training experiments on nanochat) delivered 11% training speedups via ~20 autonomously-discovered improvements.

---

*Sources: [x.com/bcherny](https://x.com/bcherny), [x.com/karpathy](https://x.com/karpathy), [x.com/trq212](https://x.com/trq212), [x.com/steipete](https://x.com/steipete), [x.com/mattpocockuk](https://x.com/mattpocockuk), [x.com/simonw](https://x.com/simonw), [x.com/swyx](https://x.com/swyx), [x.com/theo](https://x.com/theo), [x.com/mitsuhiko](https://x.com/mitsuhiko), [x.com/LLMJunky](https://x.com/LLMJunky), [x.com/jerryjliu0](https://x.com/jerryjliu0), [simonwillison.net](https://simonwillison.net/), [lucumr.pocoo.org](https://lucumr.pocoo.org/), [2026.stateofai.dev](https://2026.stateofai.dev/en-US), [anthropic.com](https://www.anthropic.com/news/introducing-claude-tag), [isfable5back.com](https://isfable5back.com/)*
