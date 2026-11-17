# AI Roundup — November 17, 2026

## AIE Code Summit & the Agentic Web

The second annual AI Engineer Code Summit wrapped up last week in San Francisco, Karpathy's HackerTube went viral, and the "agentic web" debate is heating up. Here's what caught our eye.

---

## Agentic Coding & Developer Tools

### AIE Code Summit 2026 (Nov 10–12, San Francisco)

The [AI Engineer Code Summit](https://ai.engineer/code/2026) ran Nov 10–12 at the Hilton Union Square. The three anchor themes: **fighting slop in software factories**, **building with System 1 models**, and **rewriting critical apps**. Day 1 was hands-on workshops, days 2–3 were single-track keynotes and sessions. A hackathon on Nov 7 (with Meta, Google DeepMind, MongoDB, Fetch.ai) awarded $11K in prizes.

Swyx framed coding agents as "the pinnacle of verifiable AI" and positioned Code as the first vertical summit. His broader thesis from [Latent Space](https://latent.space/p/unsupervised-learning-2026): **2025 was the year of coding agents; 2026 is the year they break containment** — expanding beyond code into other domains.

*Source: [AI Engineer](https://ai.engineer/code/2026), [Startuphub.ai](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-engineer-turns-goodbye-into-next-year), [Latent Space](https://latent.space/p/unsupervised-learning-2026)*

### Thariq (@trq212): "Software Factories Are a Temporary Problem"

[Thariq's Nov 16 post](https://x.com/trq212/status/2122438326431154210) (~299K views) argued that software factories are a **temporary problem** — models will learn to build them for you. The more interesting question: **how to build a workspace where agents can collaborate with you**. This reframes the conversation from "how do I set up an AI pipeline" to "how do I make agents good collaborators."

His X bio now reads "formerly Claude Code @anthropicai" — suggesting a role change since his time building Claude Code at Anthropic.

*Source: [x.com/trq212](https://x.com/trq212/status/2122438326431154210)*

### Matt Pocock: Live Interview with Mitsuhiko & New Course Cohort

[Matt Pocock announced](https://x.com/mattpocockuk/status/2120554967035433183) a live interview with **Armin Ronacher (@mitsuhiko)** and **Mario Zechner (@badlogicgames)** — the creators of Pi — on how code should be written in the AI age. His [AI Coding for Real Engineers](https://www.aihero.dev) course launched a new November cohort covering wayfinder, codebase design, automated checks/review, and building a software factory. His open-source [skills repo](https://github.com/mattpocock/skills) (v1.3) added `/pr`, `/implement-spec`, and `/retro` commands.

*Source: [x.com/mattpocockuk](https://x.com/mattpocockuk/status/2120554967035433183), [aihero.dev](https://www.aihero.dev)*

### Karpathy's HackerTube: 43M Comments → 6,454 Videos

Andrej Karpathy built [HackerTube](https://hackertube.org) in ~2 hours using **Claude Opus 5.5** and Claude Code. He filtered ~43 million Hacker News comments spanning 2007–2026 down to 6,454 highly-recommended videos across 150 topics. Origin story: he opened YouTube one Friday night, saw "an enshittified wall of slop," and decided to build an alternative curated by HN commenters. Features include duration/type filters, a "Recently Recommended" view, and all state stays in-browser (no accounts).

*Source: [AI Weekly](https://aiweekly.co/alerts/karpathy-builds-hackertube-from-6454-hn-recommended-videos-in-two-hours-with), [BuildMVPFast](https://www.buildmvpfast.com/blog/karpathy-hackertube-43m-hn-comments-6454-videos-cost-2026), [Digg](https://digg.com/tech/s5ob3c6a)*

### Simon Willison: LLM Security Fix & 244 Vibe-Coded Tools

Simon Willison released **llm 0.37.2** on [Nov 11](https://simonwillison.net/2026/Nov/11/llm/), patching a security issue (GHSA-v9h7-jj4g-f862) where a configured OpenAI API key could leak to third-party provider endpoints. He also continues building his collection of AI-assisted ("vibe-coded") tools — now **244 and counting** — with a new tag-browsing page at [tools.simonwillison.net](https://tools.simonwillison.net/).

He also released **datasette-maplibre 0.1a0** for map visualizations in Datasette, and published a post about [locating a mysterious beep with Claude](https://simonwillison.net/2026/Nov/9/) using multiple devices as microphones.

*Source: [simonwillison.net](https://simonwillison.net/), [Let's Data Science](https://letsdatascience.com/news/llm-0372-patches-openai-key-exposure-to-third-party-endpoint-db08c0bd)*

### Theo Browne: "AI Models — A Race to the Bottom"

Theo's latest podcast episode, [AI Models: A Race to the Bottom](https://rosetta.to/u/t3dotgg/ai-models-a-race-to-the-bottom) (~21 min), argues that rapidly decreasing prices are **eroding the moats of major AI providers**, pushing them toward product work over model work. Meanwhile, his [T3 Code](https://t3.gg) project (a free, open-source app for managing AI coding agents from a single interface) has grown to ~45K GitHub stars.

*Source: [Rosetta](https://rosetta.to/u/t3dotgg/ai-models-a-race-to-the-bottom), [Decodo](https://decodo.com/blog/t3-code)*

### Google Launches Gemini 4 Hydrogen for Agentic Coding

Google released **Gemini 4 Hydrogen**, aimed at cost-efficient agentic coding and debugging, available through Google AI Studio. This follows the Gemini 4 Carbon release. Meanwhile, **Expo launched Expo Simulators** (Nov 12) — cloud iOS simulators and Android emulators built specifically for AI coding agents.

*Source: [TechBuzz.ai](https://www.techbuzz.ai/articles/google-launches-gemini-4-hydrogen-for-agentic-coding), [AI Agents Directory](https://aiagentsdirectory.com/news/ai-agents-news-brief-november-12-2026)*

---

## People & Profiles

### Boris Cherny (Claude Code Creator) — CNN Profile

[CNN profiled Boris Cherny](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny) (Nov 15), the 35-year-old creator of Claude Code. Key quote: "Coding is solved for the kinds of coding that I do." He reportedly hasn't written code by hand in ~8 months, instead running fleets of AI agents. He argues that as AI takes over most coding tasks, engineers will be freed to focus on design, architecture, and product thinking. He spoke at the [Computer History Museum](https://computerhistory.org/?p=35032) in September.

*Source: [CNN](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny), [Platformer](https://www.platformer.news/boris-cherny-interview-ai-jobs/), [Fortune](https://fortune.com/2026/06/08/anthropics-boris-cherny-creator-of-claude-code-says-there-are-days-he-manages-tens-of-thousands-of-ai-agents-at-once/)*

### Karpathy at Anthropic

Karpathy joined **Anthropic's pre-training team** (under Nick Joseph) in May 2026. His [Nov 7 follow-up post](https://x.com/karpathy) on HackerTube and a broader thread about the "slopacolypse" of low-quality AI content continue to circulate widely.

*Source: [Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy), [x.com/karpathy](https://x.com/karpathy)*

---

## Broader AI News

### MIT Technology Review: "The Agentic Web Is Here"

MIT Technology Review's [Nov 2 feature](https://www.technologyreview.com/2026/11/02/1147846/the-agentic-web-is-here/) argues the internet is no longer just for humans. With personal AI assistants from Meta, OpenAI, and Anthropic flooding the web, sites are struggling to keep up. A related [Oct 19 piece](https://www.technologyreview.com/2026/10/19/1147186/making-the-internet-better-for-ai-agents-might-make-it-worse-for-everyone-else/) warned that making the internet better for agents might make it worse for everyone else.

*Source: [MIT Technology Review](https://www.technologyreview.com/2026/11/02/1147846/the-agentic-web-is-here/)*

### Google Warns: Hackers Using Autonomous AI Agents for Attacks

A [Google Cloud forecast](https://thenewstack.io/autonomous-ai-exploit-agents) (Nov 12) warns that **multi-stage attacks now unfold in seconds**, outpacing weekly vulnerability scans. In Q2 2026, a financially motivated actor deployed a multi-agent framework that harvested **thousands of credentials in under six hours**, handling vulnerability scanning, troubleshooting, and IP rotation autonomously. State-sponsored actors from China and North Korea are also using AI for vulnerability research. Google says it hasn't yet seen *fully* autonomous attack pipelines in the wild, but warns of "decision manipulation" — subtly poisoning data to make autonomous agents make harmful business choices.

*Source: [The New Stack](https://thenewstack.io/autonomous-ai-exploit-agents), [Help Net Security](https://www.helpnetsecurity.com/2026/09/08/ai-agents-cyberattacks-automation-google-research/), [Channel Insider](https://www.channelinsider.com/security/news-google-ai-agents-cloud-credential-attacks/)*

### Google AdMob Opens Up to Coding Agents

[Google released AdMob agent skills](https://thenextweb.com/news/google-admob-ai-agents-claude-code-codex-ask-admob) (Nov 16) that let AI coding agents (Claude Code, Codex, Cursor) add and check ad code in mobile apps. A Gemini-built assistant ("Ask AdMob") and an MCP server for managing AdMob accounts are still in testing.

*Source: [The Next Web](https://thenextweb.com/news/google-admob-ai-agents-claude-code-codex-ask-admob)*

### Mitsuhiko: "We Built So Much Bad Software"

Armin Ronacher (@mitsuhiko) [posted](https://twitter.com/mitsuhiko/status/2113207589978636646) (Oct 22, still circulating): "As fun as AI is, we built so much bad software over the last 30 years, and now the universe is punishing us for our sins." A timely counterpoint to the software-factory optimism at AIE Code.

*Source: [x.com/mitsuhiko](https://twitter.com/mitsuhiko/status/2113207589978636646)*

---

## LlamaIndex Updates

Jerry Liu's LlamaIndex team shipped **LlamaIndex 0.14.26** (Nov 13) with security fixes and Python requirement bumps. They also announced **OCRia-1.5**, a new OCR model family with lower per-page pricing, and published [ParseBench-2](https://www.llamaindex.ai/blog) (Nov 12) — a benchmark measuring parser accuracy and the real-world impact of mistakes.

*Source: [LlamaIndex Blog](https://www.llamaindex.ai/blog), [Freedom.tech](https://freedom.tech/posts/2026-11-13-llamaindex-0-14-26/)*

---

## Videos & Podcasts

- **Theo Browne** — [AI Models: A Race to the Bottom](https://rosetta.to/u/t3dotgg/ai-models-a-race-to-the-bottom) (~21 min) — Argues AI provider moats are eroding as prices plummet.
- **Karpathy** — [Deep Dive into LLMs like ChatGPT](https://x.com/karpathy) — His long-form explainer has hit 10.4M views.
- **Matt Pocock** — Live interview with mitsuhiko & badlogicgames on [coding in the AI age](https://x.com/mattpocockuk/status/2120554967035433183).
- **Latent Space** — [AIE Europe Debrief + Agent Labs Thesis](https://latent.space/p/unsupervised-learning-2026) — Swyx's crossover on coding agents breaking containment.

---

*Note: nitter.net was not accessible from this session's network, so this roundup was compiled via web search. Some posts from @LLMJunky and @bcherny's personal X accounts could not be directly verified. Dates and figures from secondary sources should be treated as approximate.*
