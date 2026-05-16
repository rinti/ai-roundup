---
title: "Mitchell Warns of 'AI Psychosis', Steipete's $1.8M Token Bill & OpenAI Reorgs Around Codex"
date: "2026-05-16"
summary: "The most-shared post of the day didn't ship a product — it warned about one. Mitchell Hashimoto's **710k-view thread on 'AI psychosis'** invoked the MTBF-vs-MTTR reckoning of the cloud era and said *'you can automate yourself into a very resilient catastrophe machine'*, drawing 10k likes and a near-record-for-him 1,170 retweets. The counter-example arrived hours earlier from Peter Steinberger, whose **$1.8M-and-counting OpenClaw token bill thread** (688k views, 4.6k likes) doubled as the most concrete *'how would we build software if tokens don't matter'* manifesto yet posted: ~100 always-on Codex agents reviewing every PR, watching meetings, gating commits on security, closing six-month-old issues against fixes that just landed. Same day Steipete shipped **clawpatch 0.1.0** — local semantic-slice review with explicit fix-attempt validation — and started a small thread about Svelte being *'Codex-friendly.'* OpenAI quietly reorganised around Codex: Greg Brockman moves over all products, Thibault Sottiaux (Head of Codex) up to core product and platform, Nick Turley to enterprise — and at AI Engineer Singapore, swyx flagged that **Codex is *'completely unrecognizable from 3 months ago'*** while Singapore Govtech projected **1.3 billion agents inside the country in 2 years** and a national MCP gateway. Theo Browne, on the same day Grok V9 1.5T finished training, called the obvious play: *'they're gonna use Cursor's data to leapfrog.'* Matt Pocock kept the skills-discipline drum beating — *'long skills are a red flag'* — and introduced the term **AX** (Agent Experience) as the natural sibling to DX."
tags:
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI Updates
  - Skills, Workflows & Dev Tools
  - Industry & Misc
---

# AI Roundup — May 16, 2026

## Agentic Coding & Agent Harnesses

### Mitchell Hashimoto: "entire companies under heavy AI psychosis"

[The most-engaged AI-discourse post of the day](https://x.com/mitchellh/status/2055380239711457578) — and one of the biggest of the year for Mitchell Hashimoto's account — landed at 710k views, 10.3k likes, 1,170 retweets, 355 replies:

> I strongly believe there are entire companies right now under heavy AI psychosis and it's impossible to have rational conversations about it with them… I lived through the great MTBF vs MTTR reckoning of infrastructure during the transition to cloud and cloud automation. All those arguments are rearing their ugly heads again but now it's… the whole software development industry.
>
> The psychosis folks operate under an almost absolute "MTTR is all you need" mentality: *"it's fine to ship bugs because the agents will fix them so quickly and at a scale humans can't do."* We learned in infrastructure that MTTR is great but you can't yeet resilient systems entirely. You can automate yourself into a very resilient catastrophe machine. Systems can appear healthy by local metrics while globally becoming incomprehensible. Bug reports can go down while latent risk explodes. Test coverage can rise while semantic understanding falls.

This is the same Mitchell Hashimoto who [yesterday argued *"programming languages used to be lock-in, and they're increasingly not so"*](https://x.com/simonw/status/2055060328048885788) — so it's worth reading as a steelman, not as a hold-out. The two best replies in the thread are [Adam Jacob's reframe](https://x.com/adamhjk/status/2055386430437011637) (*"if you have a strong internal architecture, vocabulary that makes sense, patterns that repeat — you aren't just piling slop into a garbage palace"*) and Mitchell's own [follow-up](https://x.com/mitchellh/status/2055387972971983228):

> This works better in infrastructure because you can update online systems such that the MTTR hits every user within a reasonable time-bounded window. When you're shipping software others integrate with or run on their own (libraries, desktop software, mobile apps) it doesn't matter how fast you can move because it's going to be limited by how fast the user moves. I also disagree about the quality of work of machines building machines. And I say that as someone who probably hasn't written a line of code in over a month — but I've reviewed every line of code I've produced by agent to 100% understanding (not locally, but also within the whole-system architecture).

The post that immediately set up the natural counterexample is in the next section.

### Steipete: "how would we build software if tokens don't matter?"

If Mitchell's thread is the dispatch from the side that worries, [Peter Steinberger's defence of his AI spend](https://x.com/steipete/status/2055405041843052792) is the most concrete writeup of the side that *doesn't* — **688k views, 4.6k likes, 256 retweets, 349 replies**. The list is worth reproducing in full, because it's the closest the community has yet come to a *what does an agent-saturated engineering org actually do all day* picture:

> Part of what excites me so much about working on OpenClaw is that I'm trying to answer the question: **how would we build software in the future if tokens don't matter?**
>
> - We constantly run **~100 codex in the cloud**, reviewing every PR, every issue.
> - If a fix on main lands, @clawsweeper will eventually find that 6-month-old issue and close it with an exact reference.
> - We run codex on every commit to review for security issues.
> - We run codex to de-duplicate issues and find clusters, sending reports for the most pressing.
> - We have agents that recreate complex setups, spin up ephemeral crabbox.sh machines, log into e.g. Telegram, make a video and post before/after fix on the PR.
> - Codex watches new issues — if it fits our documented vision well, it automatically creates a PR (which another codex reviews).
> - Codex scans comments for spam and blocks people.
> - Codex verifies performance benchmarks and reports regressions into Discord.
> - **Agents listen on our meetings and proactively start work**, e.g. create PRs when we discuss new features while we discuss them.
> - We build [clawpatch.ai](https://clawpatch.ai) to split projects into functional units to review and find bugs and regressions.
> - We do the same split for security with Vercel's deepsec and Codex Security.
>
> All that automation allows us to run this project extremely lean.

The "freaking out" the post refers to is the reported **~$1.8M run-rate** in tokens. [Sean's reply](https://x.com/BeCachet/status/2055407044157485449) — *"lmao 'extremely lean' with $1.8M in tokens"* — drew Steipete's [matter-of-fact response](https://x.com/steipete/status/2055407160591356234): *"I could just disable fast mode and cut costs by 70%."* [Tyler Willis's top-engagement reply](https://x.com/tylerwillis/status/2055415476566802637) (42k views) is the macro version of the argument: *"this will become accessible as the cost of intelligence continues to fall. Only a few organizations can do this today, but the frontier will move and this style of automation will be commonly available to most in a few years."*

Pair this thread with Mitchell's for a complete picture: same week, same industry, same set of facts, two fundamentally different theories of consequence.

### Steipete ships clawpatch 0.1.0 — "local review slicing"

Same evening, [clawpatch 0.1.0 went live](https://x.com/steipete/status/2055364630709448970) (64k views, 957 likes, 69 retweets):

> 🩹 clawpatch 0.1.0 is live. Clawpatch **maps codebases into semantic feature slices**, reviews them for bugs and quality issues, and **records explicit fix attempts with validation**. You'll be surprised how much this will find.
> `npm install -g clawpatch` · [clawpatch.ai](https://clawpatch.ai)

[Saburo asked the obvious question](https://x.com/jskoiz/status/2055366031766618402): *"Is this a Greptile equivalent?"* [Steipete's answer](https://x.com/steipete/status/2055367220436312249) is the useful clarification:

> No, this is **local review slicing**, much more effective. Our Greptile equivalent is clawsweeper.bot.

Three details worth noting from the reply tree: (1) [it runs on any OS where codex runs](https://x.com/steipete/status/2055365805970276732) — Claude Code support requested but not committed: *"esp for review you want a really good model though? Claude won't find half the issues."* (2) The 0.1.0 is the *open* extracted version of the in-house tool that powers the *"split projects into functional units"* bullet in the $1.8M thread above. (3) The OpenClaw security side of the same evening shipped — fs-safe (root-bounded filesystem), Proxyline (policy-driven network egress), ClawHub trust evidence, smarter command approvals — [per ClawDevs](https://x.com/openclaw/status/2055437760459055405).

### Steipete on Svelte: "Codex handles it really well"

A throwaway side-post from the same evening that's likely to age into a useful data point. [Steipete on framework choice for new work](https://x.com/steipete/status/2055402519841411165):

> Been using @sveltejs for a few projects lately, it's quite a nice alternative to React, fewer gotchas and complexity and Codex handles it really well.

Sits alongside Mitchell Hashimoto's *"languages are increasingly not lock-in"* point from yesterday: the *"agent-friendliness"* of a stack is becoming a first-class selection criterion, possibly above ecosystem and hireability. **AX** (Agent Experience), in the [Matt Pocock framing below](#mattpocock-ax-developer-experience-for-agents), now applies to framework choice and not just repo layout.

## Codex & OpenAI Updates

### OpenAI's quiet reorg around Codex

[Surfaced by LLMJunky](https://x.com/LLMJunky/status/2055411618289226213), via a quote-tweet of the original detection: OpenAI announced a major reorg to unify ChatGPT and Codex:

> Greg Brockman is officially taking over all OpenAI products. Head of Codex **Thibault Sottiaux** moves to lead **core product and platform**, and Head of ChatGPT **Nick Turley** takes on **enterprise products**.

The promotion is the read-through worth tracking. Codex is now a *priors* product at OpenAI — not a side bet — and Sottiaux being promoted *out* of running Codex means a head-of-Codex vacancy at the moment Codex has the most momentum it's ever had. ([Lorenzo Nuvoletta's deadpan reply](https://x.com/nuvolore/status/2055428015128228261): *"This explains the lack of resets."*)

### swyx at AI Engineer Singapore: "Codex is completely unrecognizable"

[swyx, on stage in Singapore](https://x.com/swyx/status/2055494400252481687):

> Gotta say **Codex is completely unrecognizable from 3 months ago**. Guys went extreme founder mode on this thing. @gabrielchua was demoing this and I was like *"you guys have agentic excel on mac."*

The conference also surfaced [Thibault Sottiaux casually dropping Codex roadmap hints in his keynote](https://x.com/swyx/status/2055467498888118647) — useful corroboration for the *"Codex is now where the energy is"* read of the reorg above. [k2_yash's reply](https://x.com/k2_yash/status/2055508345956806949) is the empirical version: *"tried it last week after avoiding it for months. The multifile context is actually coherent now. Felt like a different product."*

### Singapore: 1.3 billion agents and a national MCP gateway

The same swyx [posted the most quietly significant policy data point of the week](https://x.com/swyx/status/2055470634331750588):

> Head of AI Govtech at Singapore estimates **1.3 billion agents in the country in the next 2 years** and is building a **national MCP gateway**.

For context: Singapore has ~6 million people, so that's a ~200:1 agent-to-citizen ratio. [Shinka's reply](https://x.com/ShinkaIoT/status/2055478341101400235) reframes it usefully: *"A 'national MCP gateway' means AI agents just became public infrastructure. Like the power grid, but for cognition."* That's the policy version of Steipete's *"if tokens don't matter"* thesis — what happens when a state-level actor decides the cost curve is foregone. The same conference [hosted Singapore's first Cabinet Minister speaking not as a politician but as a NanoClaw_AI user and AI Engineer](https://x.com/swyx/status/2055446633706631653).

### Theo: "they're gonna use Cursor's data to leapfrog"

[Theo Browne, with the call](https://x.com/theo/status/2055465492836659216) on the morning after Grok V9 1.5T training reportedly completed (132k views, 1.8k likes, 88 replies):

> Called it, they are gonna use **Cursor's data to leapfrog**.

The post he's quote-tweeting is the source claim: *"Our recently completed Grok V9 1.5T run is looking great and that is before Cursor data is added in supplemental training."* [LLMJunky picked the same thread up earlier in the day](https://x.com/LLMJunky/status/2055315558166401340) with the more measured read: *"Elon in the past has not sugarcoated Grok models not being the strongest when it comes to coding. This change in tone bodes well, and Cursor's post training will only make it better."*

Two reply patterns are worth tracking. The pessimist version, [TravelerOfCode](https://x.com/TravelerOfCode/status/2055483417689809287): *"Training on Cursor's data is the natural next move for anyone with the GPUs and ambition. Cursor was the moat 18 months ago. Once the data leaks into training sets, everyone catches up. Classic."* The unease, [Rhys Sullivan](https://x.com/RhysSullivan/status/2055481795693646082): *"Somewhat concerned on xAI getting a really good coding model having bad cybersecurity implications given how little restrictions they put on their normal models."* Both reads can be right.

## Skills, Workflows & Dev Tools

### Matt Pocock: long skills are a red flag

[The discipline post of the day from Matt Pocock](https://x.com/mattpocockuk/status/2055298876093952489) (59k views, 1,069 likes, 124 replies):

> Long skills are such a red flag to me
>
> - **Hard to audit** (and therefore, trust)
> - **Hard to edit** (more text, harder to maintain)
> - **Expensive to run** (more text, more tokens)
> - *(forgot to add: does too much — tries to take too much control from you)*
>
> The shorter the skill, the better IMO.

He committed in the replies to [putting together guidelines for writing efficient skills](https://x.com/mattpocockuk/status/2055327182839296192). The reply that captures the principle best, from [Rahul Raghunathan](https://x.com/_rahul_r__/status/2055543534233780400): *"A skill that tries to say everything ends up communicating nothing clearly. Shorter skills force you to keep only what actually matters, and that clarity is what makes the model accurate."*

[Pocock's small caveat in the same thread](https://x.com/mattpocockuk/status/2055340361501876650) is worth remembering when reading the *"short skills constrict the agent less"* take: *"I don't think short vs long has much impact on 'constricting' their capabilities."* The short-skill argument is about *clarity and audit cost*, not about agency.

### Matt Pocock: AX — Developer Experience for agents

The new term, [from earlier the same day](https://x.com/mattpocockuk/status/2055267400308654319) (40k views, 508 likes):

> TIL: **DX: Developer Experience. AX: Agent Experience.** AX is an awesome descriptor for something I've been thinking about — **how well an agent can perform in your codebase**. How well-architected it is. How good the feedback loops are. How discoverable information is.

The most useful reply, from [Maire ♡ EconExpert](https://x.com/EconExpt/status/2055277184156139894): *"AX as a distinct discipline from DX is the right frame. The architecture decisions that make a codebase navigable for a human and the ones that make it navigable for an agent are increasingly different design problems and they need separate vocab."* [Paulo Gaspar's longer reply](https://x.com/PauloGaspar7/status/2055280977081966787) is the operational version — *"AX also relates to how you assemble your AGENTS.md or CLAUDE.md hierarchy, how you promote discovery processes, how you make CLI tools available."*

Pocock's [own follow-up](https://x.com/mattpocockuk/status/2055268036450353306) names the tension: *"DX and AX overlap by ~95%. What's good for DX is usually also great for AX. But maybe that's the benefit of the definition."* The 5% is the interesting bit — and is increasingly where engineering judgement now lives.

### jerryjliu0: Infinity-Parser2 tops ParseBench

[Jerry Liu on a new open-weight document-understanding release](https://x.com/jerryjliu0/status/2055405690538070340) (3.9k views, 37 likes):

> A new set of open-weight models is topping the leaderboard for document understanding 🔥 INF just released **Infinity-Parser2-Pro (35B)** and **Infinity-Parser2-Flash (2B)** that top our [ParseBench leaderboard](https://parsebench.ai/) on HuggingFace.
>
> Two key insights:
> - An expanded synthetic data engine over **5 million diverse parsing samples**
> - A novel **Joint RL** algorithm that co-optimises multiple complex tasks: document parsing, element parsing, chart parsing, and more.

ParseBench is an open benchmark designed to test semantic document understanding over real-world enterprise documents — tables, charts, semantic formatting. [Nic's reply](https://x.com/nicdunz/status/2055452920175333756) frames the practical point well: *"The hard part with docs is that 'looks extracted' and 'can be trusted downstream' are totally different bars. Benchmarks that separate tables, charts, formatting, and semantic structure matter a lot here."* If you're building anything in the *agent reads enterprise documents* track, the 2B Flash model is the more interesting release.

## Industry & Misc

### simonw at PyCon US

[Simon Willison flagged the AI track at PyConUS](https://x.com/simonw/status/2055339124035625185) — first talk at 11am yesterday. No live thread yet but worth watching his blog and TIL stream in the next few days; his [LLM-CLI-as-shebang TIL from earlier in the week](https://til.simonwillison.net/llms/llm-shebang) is the kind of thing that usually gets a richer write-up after he's given the talk.

### Anthropic re-opens the rate-limit valve

[ClaudeDevs, retweeted by both trq212 and bcherny on Friday](https://x.com/ClaudeDevs/status/2055347539923308703): *"Happy Friday! We've reset everyone's 5-hour and weekly rate limits."* Combined with [Wednesday's announcement of a 50% increase to weekly limits through July 13](https://x.com/ClaudeDevs/status/2054639777685934564), it's a small operational concession to the cancellation wave Theo's pinned post crystallised — but neither tweet engages with the *programmatic-credit* policy that started the wave. [Armin Ronacher's read on the underlying policy](https://x.com/mitsuhiko/status/2054658058727432229): *"This at least makes their policy consistent."*

### Brief: Pi adds Codex support via Warden

[Armin Ronacher, retweeting the work](https://x.com/zeeg/status/2054959427435065500): *"Pi is coming today to Warden. Initial goal is just to support a few more mainstream providers (particularly Codex)."* Of interest because Pi was originally designed as Anthropic-OAuth-arbitraged tooling — the Codex addition is the visible operational sign that the *"don't bet on one provider"* counsel from yesterday is now showing up in the tools themselves. Pi's [proxy-agent ships a WASM-compiled quickjs interpreter](https://x.com/mitsuhiko/status/2054547599705715043) for PAC support, Armin noted in a separate thread — *"shit you can find in a dependency tree."*

### Brief: Anthropic gave out cardputers at Code With Claude

A small but charming detail from [Dakshay, retweeted by bcherny](https://x.com/Dakshay/status/2052855651341423099): *"Anthropic gave these out yesterday at Code With Claude. Added personalised memory and Claude to it. You can just build things. Time to add managed agents to this."* The cardputer plus personal-Claude-memory pattern is a small physical artefact of where managed agents are going — *the assistant lives on a thing in your pocket, the work happens in the cloud.*
