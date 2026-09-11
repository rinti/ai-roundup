---
title: "OpenAI Agents API Lands, Navier-Stokes Drama Deepens & the Astra Regression Debate"
date: "2026-09-11"
summary: "OpenAI shipped the Agents API in public beta on September 10, exposing the managed Codex harness behind a single API call with no fee beyond tokens, while the Navier-Stokes priority controversy escalated into the week's biggest story: Buckmaster alleges OpenAI pressured him to drop his Anthropic co-author Alpöge, Bubeck denies it, and Terence Tao laments that AI is turning mathematics into a meaningless production-quota game. Armin Ronacher's 'Astra for Coding: Why Are We Doing This Again?' blog post crystallises the regression argument — Astra is amazing at computer use and long-horizon tasks but writes horrific Python unit tests and weird slop one step from normal code, and he is back to GPT-5.6 for daily software engineering. Anthropic released Claude Commerce Agents as an Apache-2.0 blueprint for shopping and merchant agents, Visa/Mastercard/Ant International unveiled the Know-Your-Agent interoperability framework for agentic commerce, GitHub Copilot Workspace added multi-agent orchestration, and McKinsey found 32% of surveyed organisations killed at least one software purchase because coding agents could build it. Matt Pocock's AI Coding Crash Course is shipping, Fable 5.1 continues to quietly earn loyalty from developers who tried Astra and came back, and the security clock is ticking on open-weight frontier models."
tags:
  - OpenAI Agents API & Navier-Stokes
  - Astra Regression Debate
  - Agentic Commerce & Industry
  - Agentic Coding & Tools
  - Other Interesting Stuff
---

# AI Roundup — September 11, 2026

The biggest story of the week is splitting in two directions: OpenAI shipping the Agents API while simultaneously drowning in the Navier-Stokes priority controversy. On the coding side, the Astra regression debate solidified — Ronacher wrote the definitive blog post, developers keep drifting back to Fable 5.1 and GPT-5.6 for daily work, and the industry is moving fast on agentic commerce infrastructure. Several tracked accounts were quiet on X in the last 24 hours; blog posts, news, and earlier threads that are still running fill in.

## OpenAI Agents API & Navier-Stokes

### Agents API ships in public beta

OpenAI [launched the Agents API](https://www.marktechpost.com/2026/09/10/openai-launches-the-agents-api-in-public-beta-putting-the-codex-harness-behind-one-api-call/) in public beta on September 10, exposing the managed Codex harness that handles sessions, orchestration, context compaction and recovery so developers only supply tools and pick execution environments. Built-in features include sandbox execution for code, file editing, MCP connections, artifact generation and multi-agent delegation. No additional API fee beyond model tokens and paid tools. Developers can run compute in an OpenAI-managed sandbox, their own infrastructure, or a partner sandbox. As of June 2026, heavy Codex users were averaging over 60 hours of agent operation per day, so the managed infrastructure story matters. OpenAI says it plans to iterate quickly during the beta, incorporating developer feedback.

### Navier-Stokes priority controversy keeps escalating

The [Navier-Stokes drama](https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician/) has become the AI story of the week. OpenAI announced on September 8 that an unreleased internal model solved the Navier-Stokes existence and smoothness problem — one of the seven Millennium Prize Problems, each carrying a $1 million award — after 88 hours with roughly [10,000 coordinated AI agents](https://www.washingtonpost.com/technology/2026/09/09/openai-claims-it-solved-elusive-math-problem-with-1-million-prize/). The model found a configuration where a vortex tightens and spins ever faster (finite-time blowup) while energy stays bounded.

But the controversy overshadows the result. NYU mathematician Tristan Buckmaster [alleges](https://fortune.com/2026/09/08/openai-says-it-cracked-navier-stokes-math-grand-challenge-buckmaster-accusation-cheating-intimidation-tao-lament/) that he and Levent Alpöge, an Anthropic employee, had been working on the problem for over a year using LLMs from both companies. He claims OpenAI proposed he write a joint paper as sole author while excluding Alpöge due to his Anthropic affiliation. When Buckmaster objected, OpenAI mathematician Sébastien Bubeck allegedly responded: *"Why would you ruin your career?"* and *"If you don't want me to be nice, then I don't have to be nice."* Buckmaster's central concern is that private Codex-session work may have been accessible to OpenAI researchers who then announced a competing result. Bubeck [publicly denied](https://the-decoder.com/openai-researcher-allegedly-pressured-mathematician-to-drop-anthropic-co-author-from-math-breakthrough-paper/) the allegations as "false and inflammatory."

Terence Tao [acknowledged](https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/) on his blog that while it is possible OpenAI drew on ongoing human efforts, the broader issue is that *"the indiscriminate use of AI is turning the subject into a meaningless production quota game."* Simon Willison [covered the story](https://simonwillison.net/2026/Sep/8/on-navier-stokes/) on his blog. The [Wikipedia article](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_priority_controversy) on the controversy is already live and growing.

## Astra Regression Debate

### Ronacher: "Astra for Coding: Why Are We Doing This Again?"

Armin Ronacher published [the definitive Astra critique](https://lucumr.pocoo.org/2026/9/7/astra-why/) on September 7, framing the model's trajectory through the Chinese concept of *neijuan* (内卷) — ever more effort and competition without improving actual output. He [tweeted](https://x.com/mitsuhiko/status/2097318251403395471) that while *"Astra is absolutely amazing,"* he has switched back to GPT-5.6 for software engineering: *"This is the first time I feel like this is a genuine regression on OpenAI model release for my day to day workflows."*

His specific criticism: Astra is greatly rewarded for succeeding on long-horizon tasks but presumably punished very little for writing bad code. The result is that [one step from normal code](https://x.com/mitsuhiko/status/2096720787998650453) it writes *"weird Python slop"* and *"the unittests it writes are absolutely horrific."* He described Astra's software factory as having [reinvented let bindings as `def`](https://x.com/mitsuhiko/status/2096714059609473326). His blog post also published on September 5 about ["Latent Powers"](https://lucumr.pocoo.org/2026/9/5/latent-powers/) continues his broader thinking on what AI models can and cannot do for engineering workflows.

### The quiet Fable 5.1 loyalty

The pattern from last week continues: developers try Astra, are impressed by its ceiling and frustrated by its floor, and drift back to Fable 5.1 or GPT-5.6 for actual work. Theo's [verdict from the weekend](https://x.com/theo/status/2097192907023458473) — that Astra is the spikiest model he has ever used, *"sometimes God and sometimes distilled Gemini Flash"* — is the consensus position among the tracked accounts. Multiple replies across threads report the same experience: Astra wrote the best code they got all year and then forgot what a for loop was.

## Agentic Commerce & Industry

### Anthropic ships Claude Commerce Agents

Anthropic [released Claude Commerce Agents](https://www.anthropic.com/webinars/building-claude-commerce-agents) on September 2 as an Apache-2.0 blueprint for shopping and merchant agents across retail, travel, telecom and entertainment. The release includes reference implementations, four runnable vertical examples, a safety harness, eval patterns, a Claude Code builder plugin, and deployment paths across Claude API, Amazon Bedrock, Microsoft Foundry and Google Cloud Vertex AI. Early results: carts run [up to 35% larger](https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-built-the-shopping-brain-and-skipped-the-wallet/) and shoppers are 60% more likely to complete a purchase. Shopify and Priceline already run live agents on it. Notably, the blueprint carries no payment protocol, no checkout and no ad layer — Anthropic is positioning Claude as the intelligence layer, not the transaction layer.

### Know-Your-Agent: Visa, Mastercard and Ant International

On September 10, [Ant International, Visa and Mastercard](https://www.pymnts.com/cybersecurity/2026/visa-mastercard-team-with-ant-know-your-agent-framework) unveiled the Know-Your-Agent (KYA) interoperability framework, projecting that AI agents will orchestrate $3–5 trillion of global consumer commerce by 2030. The framework aligns three previously competing protocols — Visa's Trusted Agent Protocol, Mastercard Verifiable Intent and Ant International's Agentic Mobile Protocol — so card networks, wallets, agent platforms and marketplaces can recognise trusted AI shoppers across ecosystems.

### McKinsey: 32% of companies killed a software purchase

McKinsey's [latest State of AI survey](https://aijourn.com/mckinsey-state-of-ai-2026-build-vs-buy-software/) found that 32% of surveyed organisations decided against purchasing at least one software product because they could build the functionality with coding agents. The trend is strongest in technology and healthcare. At organisations with over $1 billion in annual revenue, 40% are scaling AI agents in at least one function, up from 27% a year earlier. The important caveat: the share of organisations attributing impact on EBIT to AI is 37% — *"essentially unchanged from a year ago."*

## Agentic Coding & Tools

### GitHub Copilot Workspace goes multi-agent

GitHub Copilot Workspace now supports [multiple specialised agents](https://www.digitalapplied.com/blog/github-copilot-app-agent-native-desktop-orchestration-2026) working simultaneously on different parts of a codebase, with separate agents for implementation, testing and documentation coordinating via a shared context window. Each session runs in its own isolated git worktree so several agents can work the same repository in parallel. The standalone Copilot app, announced at Microsoft Build in June, is the control centre for orchestrating these sessions.

### Matt Pocock ships the AI Coding Crash Course

Matt Pocock [announced](https://x.com/mattpocockuk/status/2085796061361078718) that the AI Coding Crash Course is fully shipped and ready at [aihero.dev](https://www.aihero.dev/workshops/ai-coding-crash-course) — nearly 60 lessons across six sections covering grilling (interrogating fuzzy ideas before writing code), codebase exploration, AGENTS.md design, and real engineering workflows for AI-assisted development. The course works with any harness plus his skills repo. With 8,500+ engineers already trained in cohorts, the Crash Course is the self-paced on-ramp aimed at both senior engineers and non-devs.

### Anthropic: Fable 5.1 and Mythos 5.1

Released September 1, [Claude Fable 5.1 and Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) are the same model with different safeguard levels. Fable 5.1 is generally available; Mythos 5.1 is restricted to vetted cybersecurity and life-sciences organisations. Key numbers: Fable 5.1 more than doubles Fable 5 on agentic scientific research, nearly doubles it on business workflows, and finishes ahead of Opus 5 on every published benchmark category. Pricing stays at $10/$50 per million input/output tokens. Cache reads got a [75% cost reduction](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads/).

## Other Interesting Stuff

### The security clock

The security argument from jyn's ["A year to fix security"](https://jyn.dev/a-year-to-fix-security/) essay continues to circulate. The core logic: GLM 5.3-flash is open-weight, frontier-class, and runs on consumer hardware. DeAlignAI's abliterated version scores 0% refusals on HarmBench. Astra scores 100% on ExploitBench. An Astra-class open-weight model is roughly a year away based on historical lag. Simon Willison's Hacker News comment: *he does not think we even have a year.*

### Latent Space AEO tracker

Latent Space [launched the Frontier AEO tracker](https://aeo.latent.space/), extending AmplifyingAI's "What Claude Code Actually Chooses" to every frontier model across 161 categories. Key finding: Fable and Opus recommend Claude Code while Sol and Astra recommend Codex, though GPT models occasionally recommend Claude. Anthropic models search far more sources than OpenAI models — Fable's median is 15 against Astra's 5.

### Swyx: 2026 is the year agents do everything else

Swyx's ongoing thesis via [Latent Space](https://www.latent.space/p/unsupervised-learning-2026): 2025 was the year of coding agents, 2026 is the year they expand beyond code. He [vibe-designed](https://x.com/swyx/status/2021498862012334274) a 6,000-person conference website at a climbing gym without reading a single line of code. The agent horizon doubles every 3–7 months according to METR. AI Engineer is planning at least 7 events worldwide in 2026.

### Shorter

- **Peter Steinberger** continues driving OpenClaw from inside OpenAI. The foundation model is now the [most-starred repo on GitHub](https://x.com/ycombinator/status/2062942526856941994) at 346k+ stars. His June take — *"you shouldn't be prompting coding agents anymore, you should be designing loops that prompt your agents"* — hit 6.5M views and spawned an entire [Loopcraft movement](https://www.latent.space/p/loopcraft) before he [declared the loop era over](https://eu.36kr.com/en/p/3904771418867330) in July.
- **Boris Cherny**, head of Claude Code at Anthropic, hasn't [written code by hand](https://fortune.com/2026/06/11/anthropic-claude-boris-cherny-doesnt-write-code-by-hand-anymore/) since November 2025. He says 4% of all public GitHub commits are now authored by Claude Code, predicted to hit 20% by end of 2026.
- **Jerry Liu** and LlamaIndex continue building out knowledge agents — the [contract review agent](https://x.com/jerryjliu0/status/1886951394147754281) that matches contracts against any knowledge base remains a reference implementation. He also [made GTA 6 at home](https://x.com/jerryjliu0/status/2096702098570097045) with Astra out of FOMO.
- **Meta acquiring Stilla**, a multiplayer AI teammate for companies, to strengthen business AI products.
- **ChatGPT Voice Mode** now supports GPT-5.6 Sol and GPT-6 Astra (Pro accounts only).

*Sources: Web search results from x.com tweet pages, Washington Post, Fortune, TechCrunch, CNN, Nature, Quanta, Scientific American, The Decoder, MIT Technology Review, ABC News, CNBC, The New Stack, VentureBeat, MacRumors, PYMNTS, MarkTechPost, McKinsey via ANI/Tribune/AIJourn, Latent Space, simonwillison.net, lucumr.pocoo.org, terrytao.wordpress.com, aihero.dev, Wikipedia. @karpathy, @bcherny and @simonw had no confirmed posts in the 24-hour window; @trq212 and @swyx had no specific new tweets surfaced.*
