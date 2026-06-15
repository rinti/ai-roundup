---
title: "Billing Split Goes Live, Day Three of the Fable Ban & the 120K-Character Prompt Leak"
date: "2026-06-15"
summary: "Today's the day Anthropic's **Agent SDK billing split** goes live — claude -p, GitHub Actions, and third-party agents all move to a separate credit pool metered at full API rates, and two original Claude 4 models (Sonnet 4 and Opus 4) are retired from the API. Meanwhile Fable 5 enters **day three of the US export ban** with no restoration in sight; Polymarket bettors favor early July. The 120K-character system prompt leak keeps yielding lessons — it's less personality script, more product spec with a changelog of everything that ever went wrong. In San Francisco, the **Databricks Data + AI Summit** opens today (30K+ attendees, Satya and Greg Brockman on the keynote stage) and **Google/Kaggle launch a free 5-day AI Agents Intensive** running through June 19. On the discourse front: Armin Ronacher's **'Dangerous Technology For Americans Only'** essay is still circulating hard, Theo has quietly **switched his daily driver from Opus to GPT-5.5**, and the analysis of the Fable 5 prompt leak is turning into a masterclass in production agent prompt engineering."
tags:
  - Anthropic Billing & Model Changes
  - Fable 5 Ban — Day Three
  - The 120K System Prompt Leak
  - Agentic Engineering in Practice
  - Events & Courses
  - Other Notable Threads
---

# AI Roundup — June 15, 2026

## Anthropic Billing & Model Changes

**The Agent SDK billing split goes live today.** Announced May 14 and effective June 15, Anthropic is pulling `claude -p`, Claude Code GitHub Actions, the Agent SDK, and all third-party agent applications out of the existing subscription usage pool. They now live in a separate "Agent SDK Credit pool" metered at full API rates — $20/month for Pro, $100 for Max 5x, $200 for Max 20x — with no rollover. If you've been running heavy agent workloads on your subscription and haven't checked the new metering, today's the day it bites. ([Anthropic billing FAQ](https://help.apiyi.com/en/anthropic-claude-subscription-agent-sdk-billing-split-june-2026-en.html), [Codersera breakdown](https://codersera.com/blog/anthropic-june-2026-billing-change-claude-code/))

**Two original Claude 4 models retire today.** `claude-sonnet-4-20250514` and `claude-opus-4-20250514` are being removed from the API. If you're pinned to those model IDs, your calls will start failing. Migrate to Sonnet 4.6 or Opus 4.8. ([Enterprise DNA summary](https://enterprisedna.co/resources/news/anthropic-claude-june-15-retirements-billing-2026/))

## Fable 5 Ban — Day Three

**Still offline, no timeline.** Three days after the US government's export-control directive forced Anthropic to disable Fable 5 and Mythos 5 globally, access has not been restored. Anthropic continues to call it "a misunderstanding" it's working to reverse, but cannot give a date. All other Claude models (Opus 4.8, Sonnet 4.6, Haiku) remain unaffected. ([Anthropic statement](https://www.anthropic.com/news/fable-mythos-access))

**Polymarket bettors favor early July.** A prediction market on Fable 5 restoration has formed, with odds strongly favoring US customer access before July 1. The bet reflects Anthropic's rapid compliance efforts and competitive pressure — but delays could come from ongoing regulatory negotiations or the need to build nationality-based access filtering. ([Polymarket](https://polymarket.com/event/claude-fable-5-restored-for-us-customers-by-20260613193753196))

**Armin Ronacher's essay keeps circulating.** His June 13 blog post ["Dangerous Technology For Americans Only"](https://lucumr.pocoo.org/2026/6/13/americans-only/) — arguing the ban treats AI as a weapon controlled by nationality rather than by actual safety risk — is still getting heavy play. The sharpest reply from the thread: Josip Licardo's ["Europe doesn't need cooperation. It needs chips, capital, and models of its own. It has none of those."](https://x.com/jtlicardo/status/2065847191403467212) Armin's response: cooperation avoids hard mode. And antirez offered a concrete counter — Italy's Leonardo supercomputer plus the Swiss CSCS "has more than enough compute to train a very large LLM." ([@mitsuhiko](https://x.com/mitsuhiko/status/2065772705014497478), 94K views)

**LLMJunky landed the structural critique.** The sharpest observation from the ban discourse: [Karpathy himself, now at Anthropic, would be barred from working on or with Mythos under these restrictions](https://x.com/LLMJunky/status/2065649629027352954) — a foreign national at the company that built the model. And the cleanest rebuttal to "just fix the jailbreak": ["No, Dario cannot 'just fix it'"](https://x.com/LLMJunky/status/2065932932703817904) — because preventing models from finding-and-fixing bugs would break agentic coding entirely.

## The 120K System Prompt Leak

**The Fable 5 system prompt is now a case study.** Within hours of launch on June 9, jailbreak researcher Pliny the Liberator extracted and published the full 120,040-character system prompt on GitHub. Multiple deep analyses have since been published, and they're worth reading if you build anything with agents:

- **It's a product spec, not a personality script.** Tool schemas, search rules, safety postmortems, and a changelog of past failures. The "identity" line doesn't appear until line 1,351 of 1,585. ([Alpha Signal analysis](https://alphasignalai.substack.com/p/claude-fable-5-prompt-leak-is-a-user))
- **~30K tokens before the user types anything.** This isn't "instructions" — it's an operating manual with worked examples of every known failure mode. Failure modes don't just say "use the current date" — they show the exact bad query and the exact good one. ([AY Automate breakdown](https://www.ayautomate.com/blog/claude-fable-5-system-prompt-leak))
- **Best suited for long-running engineering tasks** — migrations, multi-file debugging, research synthesis, artifact-heavy technical work. Memory from previous runs is a first-class feature. ([Knightli section-by-section analysis](https://knightli.com/en/2026/06/12/claude-fable-5-system-prompt-analysis/))
- **The GitHub gist** if you want to read it yourself: [phpfour/claude-fable-5-prompt](https://gist.github.com/phpfour/413feb2f30a77cf66602a1599ca226a7)

## Agentic Engineering in Practice

**Matt Van Horn's "Every Agentic Engineering Hack I Know" is going viral.** The article from the non-technical founder who spends $10K/month on AI coding agents has become the most-shared agentic engineering piece of the week. Core workflow: idea -> `/ce-plan` -> `plan.md` (using Compound Engineering by @kieranklaassen), then agents execute from the plan. He runs overnight loops that open PRs across ~30 open-source repos. Key principle: "stop being the thing in the loop — write the loop once." ([Article on X](https://x.com/mvanhorn/article/2061877533885473181), [TL;DR thread](https://x.com/mvanhorn/status/2061978364391592110), [YouTube walkthrough](https://www.youtube.com/watch?v=BxEf3RqIHkw))

**steipete's QA agent: Codex as automated tester.** Beyond the self-building crabbox saga from yesterday, steipete has been teaching Codex to act as his QA assistant — for every commit it creates a user-test scenario, uses webVNC (crabbox) and browser/computer use to test OpenClaw like a real user would, runs in the background, and opens PRs with fixes. ["This is a game changer. With codex autoreview and crabbox I can now go from issue to fix almost fully automated."](https://x.com/steipete/status/2055178254877700450) His [codex-review skill](https://github.com/steipete/agent-scripts/tree/main/skills/codex-review) that loops `/review` until no issues remain is getting widely adopted.

**Boris Cherny's Claude Code one-year retrospective still driving conversation.** The June 8 thread keeps generating quotes: Cherny hasn't written code by hand in 8 months, coordinates tens of thousands of agents, does most coding from his phone before bed. Inside Anthropic, code output has grown 8x with productivity per engineer up ~70% since the start of 2026. He also built [zero2claude](https://x.com/bcherny/status/2057876668501434603), a free course (17K+ students) — "So much of the world has not yet used agents. There's a lot of opportunity to level the playing field." ([Thread](https://x.com/bcherny/status/2064034799711588805), [Lenny Rachitsky's breakdown](https://x.com/lennysan/status/2024896611818897438))

**Nested subagents are a real workflow now.** Boris shipped nested subagent support in Claude Code (v2.1.172, June 9) — subagents can spawn subagents, capped at depth=5. The point isn't parallelism, it's context management: each level gets a fresh window, pushing noisy work away from the conversation you care about. Matt Pocock's reaction: ["Seeing a subagent spawn its own subagent is unbelievably satisfying."](https://x.com/mattpocockuk/status/2065372560578003013) ([Cherny announcement](https://x.com/bcherny/status/2064327225504403752))

**Thariq's tip for staying in the loop with agent work.** Thariq ([@trq212](https://x.com/trq212/status/2061545633560010826), Claude Code team at Anthropic) has been asking colleagues how they "stay in the loop with Claude and fully understand the work being done" — a question that matters more now that agents produce the majority of code.

**Theo has switched his daily driver to GPT-5.5.** A reversal from five months ago when he was all-in on Opus. His evolved workflow centers on GPT-5.5, voice-to-text prompts, and a hand-written `agent.md` file. His thesis: "simplicity and natural conversation about code — not the code itself — drive productivity." He also continues to push on the idea that AI coding tools are widening the gap between great and poor developers faster than any previous technology — the concept of "cognitive debt" as distinct from technical debt.

## Events & Courses

**Databricks Data + AI Summit opens today in SF.** June 15-18 at the Moscone Center, 30K+ in-person attendees from 150+ countries. Keynotes from Satya Nadella (pre-recorded fireside chat), Greg Brockman (OpenAI co-founder), and the Databricks co-founders. 800+ sessions spanning data engineering, AI agents, and enterprise deployment. Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0)) and LlamaIndex are co-hosting "The Agent Open" — an afternoon of AI conversations and a pickleball tournament bracket, alongside Braintrust, turbopuffer, Cursor, Modal, and Browserbase. ([Summit site](https://www.databricks.com/dataaisummit), [Side events](https://qubika.com/blog/databricks-summit-2026-side-events/))

**Google/Kaggle free AI Agents Intensive starts today.** A free 5-day course (June 15-19) covering agentic systems with updated content, new speakers, and a hands-on capstone project. ([Google blog announcement](https://blog.google/innovation-and-ai/technology/developers-tools/kaggle-genai-intensive-course-vibe-coding-june-2026/))

## Other Notable Threads

**Karpathy's praise of Fable 5 aged interestingly.** Just before the ban, he called it ["a major-version-bump-deserving step change forward"](https://x.com/karpathy/status/2064409694761054332) — same order of advancement as Claude 4.5 was in November — and noted it "can handle more ambitious tasks than users are accustomed to." That quote reads differently now that nobody can use it. His Sequoia AI Ascent 2026 talk also keeps getting referenced: the evolution from "vibe coding" to "agentic engineering," the MenuGen anecdote (his app became obsolete when Gemini could just do it natively), and the December 2025 inflection point where his coding ratio inverted from 80% manual to 80% agent. ([Karpathy's summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/), [Analytics Drift writeup](https://analyticsdrift.com/andrej-karpathy-agentic-engineering-software-3/))

**Simon Willison's week in review.** His most impactful recent posts: [Initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/) (June 9), ["Claude Fable is relentlessly proactive"](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/) (June 11, where a two-line CSS fix cost $12.11 in tokens because Fable went to extreme debugging lengths), and his [commentary on the US government directive](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/) (June 13). Also worth noting: his observation that [Uber now caps coding agents at $1,500/month per employee per tool](https://x.com/simonw/status/2062143151184465964) — a signal of the value enterprises place on these tools.

**Armin Ronacher's "Gaslighting Openness."** His June 10 blog post argues that open source is being stressed by AI slop, shifting contributor dynamics, the falling cost of producing code, and large companies closing doors. It's a companion piece to the "Americans Only" essay from Friday. ([lucumr.pocoo.org](https://lucumr.pocoo.org/2026/6/10/gaslighting/))

**Matt Pocock's `/improve-codebase-architecture` skill update.** Now ships with a glossary of terminology for describing good/bad codebases (LANGUAGE.md) — consistent definitions of "Module," "Interface," etc. to stop agents from drifting into vague "component" / "service" / "boundary" language. His `mattpocock/skills` repo is at 9K stars. The recommendation: run it on your codebase once every few days. ([Announcement](https://x.com/mattpocockuk/status/2047759493581156377), [GitHub](https://github.com/mattpocock/skills/tree/main/skills/engineering/improve-codebase-architecture))

**swyx's "The Age of Async Agents."** Recent Latent Space episode with Cognition's Walden Yan and OpenInspect's Cole Murray unpacked why everyone is building their own Devin and what changed about background-agent infrastructure. swyx's running thesis: 2025 was the year of coding agents, 2026 may be the year they do everything else. Also of interest: his coverage of [Dreamer (formerly /dev/agents)](https://x.com/swyx/status/2023820429258117158), which he calls "the most ambitious full stack consumer+coding agent startup I've ever seen" — an agent that builds agents. ([Latent Space](https://www.latent.space/p/unsupervised-learning-2026))
