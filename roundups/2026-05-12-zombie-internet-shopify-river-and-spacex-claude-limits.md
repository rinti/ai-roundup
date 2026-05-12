---
title: >-
  Zombie Internet, Shopify's Public-Only Agent & Anthropic Doubles Claude Limits
  via SpaceX
date: '2026-05-12'
summary: >-
  **Simon Willison's May 11 link dump** anchors the day — "Your AI Use Is
  Breaking My Brain" (404 Media's zombie-internet piece: bots talking to bots,
  AI-influencer spam farms, humans unconsciously absorbing LLM cadence),
  **Shopify's River agent** operates *public-only in Slack* so every prompt is
  searchable and everyone learns by osmosis ("a Lehrwerkstatt at scale"),
  **GitLab's "Act 2" layoffs** framed explicitly around the agentic era;
  **Karpathy's LLM-as-HTML tip** — "ask your LLM to structure your response as
  HTML, then view the generated file in your browser", also teases slideshows
  and audio as output modalities; **Anthropic × SpaceX compute deal** lands —
  300 MW / 220K+ GPUs from Colossus 1, Claude Code 5-hour limits doubled, peak
  throttling removed (Thariq: "we'll keep pushing to bring you the best coding
  agent in the world"); **Boris Cherny at Sequoia AI Ascent** still generating
  waves — "I haven't written a line of code in 2026", ships dozens of PRs/day
  from his phone, argues coding is solved and the frontier is now org
  restructuring; **Jerry Liu declares the scaffolding era dead** — context
  quality is the only moat when agent loops commoditize middleware; **Matt
  Pocock's /handoff skill** goes viral ("compact the conversation into a handoff
  doc so another agent can continue"), "grill me" is his most popular skill;
  **mitsuhiko's "Content for Content's Sake"** still sparking debate — AI-generated
  PRs are cheap to create but expensive to review, the asymmetry is becoming
  untenable; **Theo on AI economy compute constraints** — "it's not just money,
  it's about compute"; steipete's ast-grep discovery — GPT-5 automatically
  adding refactor rules from world knowledge.
tags:
  - 'simonw — "Your AI Use Is Breaking My Brain" / zombie internet'
  - 'simonw — Shopify''s River agent: public-only Slack, learning by osmosis'
  - simonw — GitLab Act 2 layoffs and the agentic era
  - simonw — James Shore quote
  - 'Karpathy — LLM output as HTML/slideshows tip'
  - >-
    Anthropic × SpaceX — 300MW compute deal, Claude Code limits doubled
  - >-
    Boris Cherny at Sequoia AI Ascent — "Coding Is Solved, What Comes Next"
  - Jerry Liu — scaffolding era is dead, context is the moat
  - Matt Pocock — /handoff skill, "grill me" viral skill
  - Mitsuhiko — Content for Content's Sake, slop loops
  - Theo — AI economy is about compute, not money
  - Steipete — ast-grep + GPT-5 world knowledge
  - Karpathy — Sequoia Ascent recap (still active thread)
  - Videos worth watching
  - News / longer reads
---
# 2026-05-12 — Zombie Internet, Shopify's Public-Only Agent & Anthropic Doubles Claude Limits via SpaceX

## Simon Willison's May 11 link dump

Four posts in one day, all AI-adjacent. Willison continues to be the most consistent daily chronicler of the AI-coding shift.

### "Your AI Use Is Breaking My Brain" — the zombie internet

Link post to [404 Media's piece by Jason Koebler](https://www.404media.co/your-ai-use-is-breaking-my-brain/) about what's being called the **zombie internet**: large parts of the internet now involve bots talking to people, people talking to bots, AI agents interacting with humans, and influencer-hustlebros creating automated YouTube channels and blogs spamming the internet for ad revenue. The concern: humans are unconsciously absorbing LLM cadence and writing patterns simply from reading so much AI-generated text.

> [https://simonwillison.net/2026/May/11/zombie-internet/](https://simonwillison.net/2026/May/11/zombie-internet/)

### Shopify's River agent — public-only, learning by osmosis

Willison highlights Shopify's internal coding agent **River**, which lives in Slack and **can only be used in public channels**. River politely declines DMs and suggests creating a public channel instead. The design is deliberate: every prompt, every conversation is searchable, and anyone at Shopify can jump in or learn from it.

Willison draws the comparison to Midjourney's Discord-only launch, which helped people learn image prompting by watching each other:

> "Shopify's River agent system lives in Slack and can only be used in public so that other employees can learn from what you do with it. Reminds me of how Midjourney's Discord-only launch helped people figure out the weird & complex craft of image prompting by watching each other."
> — [https://x.com/simonw/status/2053529689122328947](https://x.com/simonw/status/2053529689122328947)

Shopify wants to be a **Lehrwerkstatt** (teaching workshop) at scale — River doesn't require a curriculum or training plan, just visibility. The CTO notes CLI-based agent tools like River don't require you to look at the code, and they're becoming more popular internally.

> [https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/)

### GitLab "Act 2" layoffs and the agentic era

Link post on GitLab's workforce reduction, framed around "structural and strategic decisions" for the agentic era. The implication: GitLab is reorganizing around AI agent workflows and shedding roles that don't fit the new structure.

> [https://simonwillison.net/2026/May/11/gitlab-act-2/](https://simonwillison.net/2026/May/11/gitlab-act-2/)

### James Shore quote

A collected quote from James Shore — content not fully available but part of Willison's ongoing quotation curation.

> [https://simonwillison.net/2026/May/11/james-shore/](https://simonwillison.net/2026/May/11/james-shore/)

---

## Karpathy — ask your LLM to output HTML

Posted May 11. Simple but powerful tip that's generating a lot of engagement:

> "This works really well btw, at the end of your query ask your LLM to 'structure your response as HTML', then view the generated file in your browser. I've also had some success asking the LLM to present its output as slideshows, etc. More generally, imo audio is the [next frontier for output modalities]..."
> — [https://x.com/karpathy/status/2053872850101285137](https://x.com/karpathy/status/2053872850101285137)

The broader point: we're still underexploring **LLM output modalities**. Plain text in a terminal is just the default, not the ceiling. HTML gives you layout, interactivity, embedded media. Slideshows give you structure. Audio gives you hands-free consumption. The tools are there — the habit isn't.

This connects to his Sequoia Ascent theme of LLMs being about much more than speeding up existing workflows.

---

## Anthropic × SpaceX compute deal — Claude Code limits doubled

The biggest infrastructure news of the past week, still reverberating. Anthropic signed a deal with SpaceX to use **all of the compute capacity at their Colossus 1 data center** — over **300 megawatts / 220,000+ NVIDIA GPUs** coming online within the month.

The immediate user impact:

- **Claude Code 5-hour rate limits doubled** for Pro, Max, Team, and seat-based enterprise plans
- **Peak hours throttling removed** for Pro and Max accounts
- Announced by Ami Vora (Anthropic CPO) at the Code w/ Claude developer event

Thariq (@trq212, Anthropic) on the announcement:

> "We're winding back our peak hours limit reduction and doubling 5 hour limits. Excited to partner with SpaceX to bring you more compute and we'll keep pushing to bring you the best coding agent in the world."
> — [https://x.com/trq212/status/2052065936585457982](https://x.com/trq212/status/2052065936585457982)

Coverage: [Anthropic blog](https://www.anthropic.com/news/higher-limits-spacex) · [The Register](https://www.theregister.com/ai-and-ml/2026/05/06/claude-hitches-a-ride-on-spacexs-datacenter-capacity/5231252) · [Engadget](https://www.engadget.com/2166315/anthropic-is-doubling-claude-code-rate-limits-after-deal-with-spacex/)

---

## Boris Cherny at Sequoia AI Ascent — "Coding Is Solved"

Still generating discussion a week+ after the event. Boris Cherny (creator of Claude Code, Anthropic) joined Sequoia partner Lauren Reeder for a talk titled **"Why Coding Is Solved, and What Comes Next"**:

- He **hasn't written a line of code in 2026** — 100% of his development has been AI-generated since late 2025
- Ships **dozens of PRs per day from his phone**
- Argues coding is effectively solved (at least for the code he writes) and the new frontier is **organizational restructuring** around AI capabilities
- Predicts Claude Code itself might be ~100 lines of code a year from now
- Compares the moment to the invention of the printing press

> Video: [Anthropic's Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)
>
> Full playlist: [AI Ascent 2026 — Sequoia Capital](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)

---

## Jerry Liu — the scaffolding era is dead

Jerry Liu (LlamaIndex CEO) has been pushing a thesis that's gaining traction: **the AI framework/scaffolding era is over**. Agent loops are now capable enough that the scaffolding layer (indexing, query engines, retrieval pipelines, orchestrated agent loops) is collapsing.

The new moat is **context engineering** — curating and structuring the data fed into models:

> "Whether you use OpenAI Codex or Claude Code doesn't really matter. The thing that they all need is context."

He argues agents need to decipher file formats and extract the right information, and providing higher accuracy + cheaper parsing becomes the key differentiator. LlamaIndex is pivoting hard into agentic document processing and context quality tooling.

Coverage: [VentureBeat — "The scaffolding era is over"](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives) · [AI Market Watch](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w)

---

## Matt Pocock — /handoff and "grill me" skills

Matt Pocock's Claude Code skills repo ([github.com/mattpocock/skills](https://github.com/mattpocock/skills)) continues to gain traction (9K+ stars). Two skills getting the most attention:

### /handoff — context continuity across agent sessions

The **`/handoff`** skill compacts the current conversation into a handoff document so another agent can continue the work. Designed for when you hit the context limit (~200K tokens) and the model starts hallucinating or cutting corners. It writes learnings to a sessions file, then creates a structured handoff for the next agent.

> "/handoff might be my new favourite skill"
> — [https://x.com/mattpocockuk/status/2052489881088049407](https://x.com/mattpocockuk/status/2052489881088049407)

Key benefit: context about what was done in a session is never lost. Rather than jumping into execution, the new agent proposes next steps and ensures alignment first.

### /grill-me — stress-test plans before building

The **`/grill-me`** skill has gone viral as Pocock's most popular. It structures AI interactions as a Q&A interrogation of your plan, forcing you to think through edge cases before writing code. Pocock says users produce "very messy output, but because the AI is structuring it like a Q&A, it becomes like a nice structured [artifact]."

> [AI Hero blog post: "My 'Grill Me' Skill Went Viral"](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)
>
> [Matt Pocock's skills README](https://github.com/mattpocock/skills/blob/main/README.md)

---

## Mitsuhiko — "Content for Content's Sake" and slop loops (still active thread)

Armin Ronacher's May 4 blog post continues to generate discussion. Core arguments:

- **AI-generated PRs are cheap to create but expensive to review** — the asymmetry is becoming untenable for maintainers
- LLM-generated noise performs well in open source: projects quickly receive "remixes" and "reimplementations" that come with sloppy marketing websites, paid-for domains, and "a whole story on socials"
- He's tracked certain medium-frequency words spiking on Google Trends ("substrate", "capability") correlating with his own LLM-heavy coding sessions
- **"I am increasingly worried that I'm starting to write like an LLM because I just read so much more LLM text"**
- AI agents are a huge productivity boost but also "massive slop machines if you turn off your brain and let go completely"
- Proposes **friction and rate limiting** as the missing primitive

Also still circulating: his retweeted concern about "a massive degradation of code quality right now and we're increasingly only catching it way too late."

> Blog: [Content for Content's Sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)
>
> Earlier piece: [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)

---

## Theo — AI economy is a compute problem, not a money problem

Theo posted a response to ThePrimeagen's video about the AI economy, arguing the core constraint is **compute, not capital**:

> "Feels like a good time to post this one. @ThePrimeagen posted a video about the AI economy. I wanted to clear up some common misconceptions about the issues AI companies are facing. tl;dr - it's not just money, it's about compute."
> — [https://x.com/theo/status/2052114791045668894](https://x.com/theo/status/2052114791045668894)

Also notable: the **State of AI (for web devs) 2026 survey** that Theo helped promote has closed (ran April 10 – May 10). Over half of respondents said they watch Theo's videos. Results should be published soon.

> [State of AI 2026 survey](https://survey.devographics.com/en-US/survey/state-of-ai/2026)

---

## Steipete — ast-grep + GPT-5 world knowledge

Peter Steinberger (now at OpenAI) shared that after introducing **ast-grep** to his codebase, GPT-5 started **automatically adding new rules during refactors** — without being told to. It's pulling from world knowledge, not the agents file:

> "Ever since I introduced ast-grep to the codebase, gpt-5 is loving it and automatically adds new rules whenever we do a refactor. No idea where this is coming from, it's not in the agents file, so this must be world knowledge. I do love it too, since the number of guardrails [keeps growing]."
> — [https://x.com/steipete/status/1965576585609642094](https://x.com/steipete/status/1965576585609642094)

He recommends setting up ast-grep as a **git hook to block commits** — the model then writes rules that enforce patterns the human cares about. A nice example of emergent agent behavior improving code quality without explicit instruction.

Also: his blog post [Just Talk To It — the no-bs Way of Agentic Engineering](https://steipete.me/posts/just-talk-to-it) remains worth reading for practical tips.

---

## Videos worth watching

- **[Andrej Karpathy: From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs)** — Sequoia AI Ascent 2026 fireside chat. Covers menugen (app fully engulfed by LLM capabilities), Software 3.0 framework, jaggedness in LLM ability, agent-native economy. Also available as [cleaned-up transcript on his blog](https://karpathy.bearblog.dev/sequoia-ascent-2026/).
- **[Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)** — Sequoia AI Ascent. Claude Code creator on shipping from phone, coding as solved problem, org restructuring as the new frontier.
- **[Full AI Ascent 2026 playlist](https://www.youtube.com/playlist?list=PLOhHNjZItNnOkkZThzULo1Ygg7JR6T3MG)** — includes talks from Karpathy, Demis Hassabis, Jim Fan, Dmitri Dolgov (Waymo), Cherny, and more.
- **[Matt Pocock: Full Walkthrough — Workflow for AI Coding](https://www.youtube.com/watch?v=-QFHIoCo-Ko)** — his end-to-end workflow: Idea → PRD → Kanban → Ralph Loop → Manual QA.

---

## News / longer reads

- **[Anthropic × SpaceX compute deal](https://www.anthropic.com/news/higher-limits-spacex)** — 300MW, 220K GPUs, limits doubled. The biggest infrastructure move in the Claude ecosystem this quarter.
- **[VentureBeat: The scaffolding era is over](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)** — Jerry Liu's argument for context engineering as the surviving moat.
- **[404 Media: Your AI Use Is Breaking My Brain](https://www.404media.co/your-ai-use-is-breaking-my-brain/)** — Jason Koebler on the zombie internet. Linked by Simon Willison.
- **[Simon Willison: Vibe coding and agentic engineering are getting closer than I'd like](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)** — from Code w/ Claude week, on the convergence of casual vibe coding and serious agentic engineering.
- **[Simon Willison: Code w/ Claude 2026 live blog](https://simonwillison.net/2026/May/6/code-w-claude-2026/)** — detailed live blog of Anthropic's developer event keynote sessions.
- **[Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)** — his personal knowledge base structure for LLMs, 16M+ views on the gist. Still being widely discussed and forked.
- **[Steipete: OpenClaw, OpenAI and the future](https://steipete.me/posts/2026/openclaw)** — on joining OpenAI and OpenClaw moving to a foundation.
- **[Mitsuhiko: Content for Content's Sake](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)** — the slop math, friction as primitive, writing-like-an-LLM anxiety.

---

## Non-AI / off-topic

- **@LLMJunky** — couldn't find recent posts through search. Account may be less active or posts not indexed. Will retry next roundup.
- **Swyx** — no May 11-12 posts found, but his [Scaling without Slop](https://www.latent.space/p/2026) Latent Space piece from January remains the best long-form framing of the slop/inference-economics problem. He also recently vibe-designed the AI Engineer 2026 conference website at a climbing gym without reading a single line of code ([tweet](https://x.com/swyx/status/2021498862012334274)).
