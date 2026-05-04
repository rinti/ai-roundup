# 2026-05-02 — Codex Eats ChatGPT, Frameworks Are Dead & Claude Code Commit-Message Leaks

## "Coding agents breaking containment" — Codex as the everything-app

The dominant theme of the last 24 hours: Codex is no longer a coding tool, it's becoming a general computer-use agent, and the people most embedded in the agent space are visibly migrating off ChatGPT and (in many cases) off Claude Code.

### swyx: uninstalled the ChatGPT app

> "small milestone: uninstalled the chatgpt app. codex is strict superset now!"

swyx pairs the announcement with a model-choice nugget: among frontier models, **Grok 4.30 has the highest intelligence-per-dollar** on Artificial Analysis right now, beating open models like MiMo, Kimi, and DeepSeek. Post: [https://x.com/swyx/status/2050391638166622222](https://x.com/swyx/status/2050391638166622222)

### swyx: "coding agents breaking containment" is the breakout theme of 2026

His AIE EU closing note went up Apr 30/May 1 and he expanded on it in a thread. The thesis: 2026 is the year **all knowledge workers, not just coders, get AGI-pilled**. The aiDotEngineer team (a "tiny team") serves ~1m unique developers/month using a stack that mixes OpenClaw, Cognition's Devin, and TownAI — and the point isn't any one agent, it's that knowledge workers aren't trying hard enough.

The replies are the real signal. A few of the sharper ones:

- **Soroush Fadaeimanesh**: "The crossover signal is non-coders adopting agent harnesses without writing code. Already seeing ops folks running Claude Code purely on docs and CSVs. The harness is the AGI delivery vehicle, not the model itself."
- **Anees Merchant**: "Once finance and legal teams see a coding agent ship a working internal tool in an afternoon, the cultural permission to use AI in their own workflows gets unlocked overnight. The codebase is just the beachhead."
- **Ghali Bennis**: "the containment break for me wasn't code, it was ops. last week I had Claude reconcile 3 months of stripe payouts against shopify orders, flag the mismatches, and draft the refund emails. would've been a full day of finance work. took 20 min."
- **Crepe Supreme** (the most contrarian): "Coding agents broke containment because dev work has automated verification: every commit hits CI before it ships. Knowledge work has no equivalent. Until there's an eval harness for 'did this brief move the metric,' the AGI-pilling stays a demo."
- **Irving / BlockView**: "It's a permission problem. The real wall isn't context length — it's: can it move your money, push to main, reply for you, read across your accounts. The AGI-pilled moment of 2026 is an OAuth consent screen, not a benchmark."

Thread: [https://x.com/swyx/status/2050068468498842058](https://x.com/swyx/status/2050068468498842058)
Latent.space writeup ("Agents for Everything Else"): [https://www.latent.space/p/ainews-agents-for-everything-else](https://www.latent.space/p/ainews-agents-for-everything-else)
swyx's other "codex is also a better slack ai search than slack ai search" follow-up: [https://x.com/swyx/status/2050432398161264664](https://x.com/swyx/status/2050432398161264664)

### LLMJunky: Codex imports your settings, projects, and plugins from Claude Code

A quietly-shipped Codex feature that LLMJunky (and "@DevAdventur3s") flagged: in the latest update, Codex can **import your settings, projects, and plugins directly from Claude Code**. As LLMJunky puts it: "Sneaky! ... Nice touch." DevAdventur3s' read: "It brings your orange bot chats into Codex, so your setup/context can follow you instead of starting from zero." Migration tooling, basically.

Post: [https://x.com/LLMJunky/status/2050264464197358031](https://x.com/LLMJunky/status/2050264464197358031)

### LLMJunky: Codex on Linux

LLMJunky also drops a video showing the Codex desktop app running on Linux ("Even on Linux. Codex is becoming the everything app."). Community fork link in the comments: [https://github.com/am-will/codex-app](https://github.com/am-will/codex-app)

Post: [https://x.com/LLMJunky/status/2049968945319297364](https://x.com/LLMJunky/status/2049968945319297364)

### steipete: `/goal` in Codex "slaps"

steipete is another ex-CC heavyweight now openly endorsing the Codex side: he praises the new `/goal` feature as "slaps" and, separately, **switched OpenClaw's recommended GPT path to the Codex harness** ("if you used GPT and got subpar performance, switch to codex harness"). He also notes group chats in OpenClaw 2026.4.29 are now agent-native after a meaningful rework of how agents talk to each other.

- /goal: [https://x.com/steipete/status/2050275598178586921](https://x.com/steipete/status/2050275598178586921)
- OpenClaw 2026.4.29 + codex harness recommendation: [https://x.com/steipete/status/2049988836160074022](https://x.com/steipete/status/2049988836160074022)

## Claude Code: commit messages are now a context-leak attack surface

Theo's pinned video of the day (37K likes, 439 RTs):

> "If you use Claude Code, be careful what you put in your commit messages..."

The thread is a small primer on prompt-surface hygiene with Claude Code; the replies surface the actual mechanics:

- **TFisPython**: "git status alone bleeds ~200 tokens every run. your commit message is in the system prompt from session start. the context isn't just bloated — it's shaped."
- **Alex Rogov**: "Claude reads your entire git history for context. every 'wip', 'fix fix fix', and 'temp REMOVE THIS' is now part of the conversation."
- **synabun.ai**: "commit messages get indexed by GitHub and baked into diffs that AI tools read back later. anything sensitive in there has a surprisingly long tail."
- **Septim Labs**: "secrets pasted into Claude Code chat history end up in `/commit-via-claude` commit messages because the model summarizes its own session. our team's seen API keys leak this way three times in 30 days. invariants on line 1 of CLAUDE.md help."
- **agentariumguru**: "this is the prompt injection attack surface nobody is pricing in."
- **Boaz Hwang**: "Commit messages are a weird context leak because they feel like metadata. Safer rule: anything the coding agent can read is prompt surface, not repo bookkeeping."

The throwaway-but-real takeaway: "I no longer write my commit messages 😂" (Codevty), and the inevitable "ever since ai i only use `git commit -m 'agi'`" (thoughtlesslabs).

Theo's pinned post + video: [https://x.com/theo/status/2050331062946197900](https://x.com/theo/status/2050331062946197900)

## Theo: Azure-hosted GPT got 10x faster, "Azure wasn't monitoring this internally"

Earlier the same day Theo got Azure to ship a fix that gave GPT-5.5 (and Foundry models) a **10x improvement in latency and throughput** for customers hosting OpenAI on Azure. His follow-up:

> "Lmao. Kind of insane that Azure wasn't monitoring this internally but I'm thankful they listened and fixed it finally."

Plus a separate finding: there was a "99.9% cache miss rate" issue, also now resolved. He's keeping a live dashboard at azure.t3.gg that gets auto-updated. Net effect noted in replies: "Azure is now FASTER than OpenAI for GPT-5.5."

- The 10x post: [https://x.com/theo/status/2050305813894648289](https://x.com/theo/status/2050305813894648289)
- The dashboard mention: [https://x.com/theo/status/2050316398929559685](https://x.com/theo/status/2050316398929559685)
- 99.9% cache miss note: [https://x.com/theo/status/2050357935956742530](https://x.com/theo/status/2050357935956742530)

## Mattpocock's "Dictionary of AI Coding" — clean definitions of Model / Harness / Environment / Agent

Pinned at the top of his timeline this morning (10K likes), and the most cited concept-piece of the day:

- **Model**: a blob of parameters, written during training. Does next-token prediction and nothing else. Stateless.
- **Harness**: everything around the model that turns it into an agent — tools, system prompt, context window management, etc.
- **Environment**: the world the agent acts on. Anything outside the harness that the agent perceives and acts on via tools.
- **Agent**: a model, harnessed, in an environment.

> "Opus is a model. Claude Code and Claude Web are different agents, because their harnesses differ — even though the models are the same. The file system is an environment. MCP servers add tools to the environment."

Sharper takes from the thread:

- **Sankalp**: "the harness is what most teams confuse with the model. the model is replaceable. the harness is the moat."
- **mylifcc**: "Harness as the precise term, finally. Most 'I built an agent' claims collapse harness + model + orchestration into one word — way easier to debug once you start naming the layers separately."
- David Cramer pushes back that "the models aren't exposed in their raw form" so what you're accessing is never just-the-model in practice; Matt concedes the harness is partly server-side baked in by providers.
- On scaffolding-vs-harness: Matt says "I'd describe scaffolding as an alias of harness. Or perhaps, the thing that the harness gives the model."
- On the term "tools": Nimrod Kor catches Matt's definition collapsing — Matt updates: tools live in the harness, MCP servers extend the harness so the agent can reach the environment.

Post: [https://x.com/mattpocockuk/status/2050456062520615131](https://x.com/mattpocockuk/status/2050456062520615131)

Same day, Mattpocock RTs the launch of **Flue** — "The First Agent Harness Framework" — with the harness vocabulary now being the framing device.

## Flue: a TypeScript Agent Harness Framework (Fred K. Schott)

Fred Schott (Astro) launched Flue overnight (291K views, 2.2K likes):

> "Flue is like Claude Code, but 100% headless and programmable. There's no baked in assumption like requiring a human operator to function. No TUI. No GUI. Just TypeScript."

Key points from his thread:

- "Flue is like Astro or Next.js for agents. It's not another AI SDK. It's a proper runtime-agnostic framework. Write once, build, and deploy your agents anywhere (Node.js, Cloudflare, GitHub Actions, GitLab CI/CD, etc)."
- Most logic lives in **Markdown** (skills, context, AGENTS.md), like Claude Code.
- Built on top of `pi-agent-core`, so anything Pi supports works ("assuming they're not blocking third-party harnesses like Anthropic"), and `varlock run` slots in for env/config.
- Originally built to power AI workflows inside the Astro GitHub repo, then generalized.
- Built-in concepts of "session" and "subagent" as first-class, plus a built-in sandbox (in-memory `just-bash`, or BYO hosted sandbox).
- Direct vs AI SDK / Mastra: framework rather than SDK — `flue build` produces a deployable agent, `flue run` runs locally.

Addy Osmani: "This is super well done, Fred!" Fred: "Inspired by your post on agent harness engineering!"

Post: [https://x.com/FredKSchott/status/2050274923852210397](https://x.com/FredKSchott/status/2050274923852210397)
Site: [https://flueframework.com/](https://flueframework.com/)

## Steipete: Crabbox 0.1.0 — remote Linux test boxes for agent fleets

> "Too many agents, too many test suites, one very tired Mac. Run them remote: Crabbox 0.1.0 🦀"

Capabilities listed:

- Remote Linux test boxes (AWS, Hetzner)
- Dirty-checkout sync
- Warm boxes with friendly slugs
- Idle auto-free

Install: `brew install openclaw/tap/crabbox`. The framing — and the reception — is that local laptops are no longer a reasonable substrate for parallel agent workloads, and remote sandboxes need to be a developer-tool primitive, not a CI thing.

Notable replies:

- **Leeway**: "Local Mac dies when you parallelize 8+ agents on real workload. The dirty checkout sync + idle auto-free combo is what makes it actually usable, not just spinning containers manually."
- **ClawPilot**: "Once agents start shipping code, the bottleneck becomes reproducible CI, fast rollback, and knowing which env produced the bug. Do you pin image hashes or rebuild from base each run?"
- **Sankalp**: "the laptop fan finally getting quiet again is the unsung devops win of the agent era."

Post: [https://x.com/steipete/status/2050140050168451286](https://x.com/steipete/status/2050140050168451286)
Site: [https://crabbox.sh](https://crabbox.sh)

## Jerry Liu (LlamaIndex): "the scaffolding era is over, context is the moat"

LlamaIndex's CEO got a VentureBeat profile this morning where he openly says **the framework era is dead**:

> "A lot of work around AI in 2023 was spent on building picks and shovels. Today, a lot of that is no longer relevant. The core agent abstractions have solidified, and coding agents are letting everyone 'engineer' agents at a higher level of abstraction. What continues to have a durable moat is building the **context layer** for agents."

LlamaIndex's quoted tweet about the article:

> "We've really identified that there's a core set of data that has been locked up in all these file format containers. Ultimately, whether you use OpenAI Codex or Claude Code doesn't really matter. The thing that they all need is context."

Disiok (LlamaIndex eng) reportedly half-joked: "@llama_index should we rebrand to applied automation co."

Sharper reply: **Winston B.** "2023 vector DBs, embedding services, RAG infra built well-priced standalone businesses, but 2025-2026 OpenAI/Anthropic are definitely absorbing the application-adjacent layers. Survivors are either deeply specialized (LlamaIndex, Pinecone) or vertically integrated. The infra-monetization window narrowed faster than anyone budgeted."

VentureBeat article: [https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo)
Jerry's framing post: [https://x.com/jerryjliu0/status/2050373987860123971](https://x.com/jerryjliu0/status/2050373987860123971)
Podcast: [https://piped.video/watch?v=HbXvX-Kt](https://piped.video/watch?v=HbXvX-Kt)

Companion post earlier: Jerry on **filesystems as the new RAG abstraction** ("you can't 'productize' Claude Code over a local file system") — referencing Mesa, an enterprise filesystem with git-style versioning aimed at AI agents: [https://x.com/jerryjliu0/status/2049661223420223492](https://x.com/jerryjliu0/status/2049661223420223492)

## Mattpocock: "Writing code is cheap, maintaining code is not"

A short thesis post (the kind that travels) plus a "de-slop a codebase ruined by AI, with one skill" video from yesterday:

- "Writing code is cheap. Maintaining code is not cheap. Anyone who's hired an external contractor knows this." — [https://x.com/mattpocockuk/status/2050167042771194226](https://x.com/mattpocockuk/status/2050167042771194226)
- The tweet quotes Jonathan Ross's longer "No Engineer is dead" post — for 50 years, software engineering ran on **code rationing** (writing code was expensive, so you rationed it through roadmaps, RFCs, scope reviews); LLMs collapse that and the senior engineer's "no" loses its economic basis. "The judgment system that's protected codebases for half a century may be dying."
- /de-slop video: [https://x.com/mattpocockuk/status/2050102353248874884](https://x.com/mattpocockuk/status/2050102353248874884)

Mattpocock is also still iterating on naming for his skills: `/to-prd` and `/to-issues` are likely renaming to `/to-spec` and `/to-tickets` (per Omer Gronich's reply). [https://x.com/mattpocockuk/status/2049844441209340000](https://x.com/mattpocockuk/status/2049844441209340000)

## Mitsuhiko: clanker upgrade fail, Pi.dev 404, Guido lost to phone-agents

Mitsuhiko's day:

- **"Clanker automated upgrade to Zig 0.16 is going about as well as you would expect. :("** — i.e. Pi-driven auto-upgrades break on the Zig toolchain churn. Follow-up: "With some better prompting I'm not hating it." [https://x.com/mitsuhiko/status/2050255172555665513](https://x.com/mitsuhiko/status/2050255172555665513)
- **"We lost another one"** — quote-tweeting Guido van Rossum: *"Everybody is adding a feature where you can manage your agents from your phone. Don't use it. You'll just get even more addicted, and will burn out even quicker."* The mobile-agents-for-everything movement is starting to get backlash. [https://x.com/mitsuhiko/status/2050003460649545866](https://x.com/mitsuhiko/status/2050003460649545866)
- **Pi.dev 404 page** built out of tetrominos — small detail but underscores Pi has its own marketing site now: [https://pi.dev/404](https://pi.dev/404)
- "The GitHub issue list now needs to send ~10 GraphQL requests and they all produce deprecation warnings." — yet another reason to RT the Mitchell Hashimoto "Ghostty is leaving GitHub" thread, which mitsuhiko continues to amplify. [https://x.com/mitsuhiko/status/2049791597093470281](https://x.com/mitsuhiko/status/2049791597093470281)

## Misc / shorter

- **Anthropic: "Code with Claude" returns next week.** Their developer conference. Trq212 (Claude Code PM) RT'd it. [https://x.com/claudeai/status/2050252933866930339](https://x.com/claudeai/status/2050252933866930339)
- **Sam Altman**: "all of these 'which is better' polls are silly — use codex or claude code, whatever." Posted in response to the daily harness war, RT'd by Theo. [https://x.com/sama/status/2050274547061129577](https://x.com/sama/status/2050274547061129577)
- **Theo on coding agents (older but still circulating)**: "Whenever I use one for more than an hour, I always reach to the other to 'clean up'. Best part? All of this changes every few weeks 🙃" — capturing the lived-in reality of the dual-harness workflow. [https://x.com/theo/status/2049994645531451874](https://x.com/theo/status/2049994645531451874)
- **Theo to T3 Code users**: "we will not be supporting [importing CC settings into T3 Code]." [https://x.com/theo/status/2050289946624422268](https://x.com/theo/status/2050289946624422268)
- **swyx's chrome-extension wishlist**: an extension that augments image-input fields on the web with a tldraw box and a "generate at correct proportions" helper. Tagging Devin to build it. [https://x.com/swyx/status/2050460622706626740](https://x.com/swyx/status/2050460622706626740)
- **leerob (older but highly cited today)**: "How to improve any software system: 1) do less work 2) do the work faster 3) do the work in parallel (or elsewhere)." With concrete examples for coding agents, databases, and web infra. [https://x.com/leerob/status/2049126177210499387](https://x.com/leerob/status/2049126177210499387)
- **steipete on agent culture**: RT of "it's insane how most people on my feed went from claude to codex in just 2 days. this industry is moving too fast." [https://x.com/anitakirkovska/status/2049969056271220884](https://x.com/anitakirkovska/status/2049969056271220884)
- **Karpathy quotes** — RT'ing a quote he's been citing a lot lately, plus a recap of his Sequoia Ascent 2026 fireside chat (highlights: LLMs as a new kind of computing primitive). [https://x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)

## Videos worth watching

- **swyx — "AIE EU closing note: coding agents breaking containment"** — short talk on running aiDotEngineer as a Tiny Team using agents. [https://www.youtube.com/watch?v=zepu8Kk6FBQ](https://www.youtube.com/watch?v=zepu8Kk6FBQ)
- **Theo — "If you use Claude Code, be careful what you put in your commit messages"** — pinned video, the "AI Mastery Guide" reply summary: "34 minutes of Theo saying be careful about commit messages and I am watching every second 👀" — i.e. it's a deep dive, not a tweet-length warning. [https://x.com/theo/status/2050331062946197900](https://x.com/theo/status/2050331062946197900)
- **Mattpocock — "How to de-slop a codebase ruined by AI, with one skill"** — shorter clip; the skill is the de-slop loop he's been refining. [https://x.com/mattpocockuk/status/2050102353248874884](https://x.com/mattpocockuk/status/2050102353248874884)
- **Gergely Orosz × badlogicgames × mitsuhiko** — 90 min Pragmatic Engineer Pi episode (came out Apr 29 but still being circulated). Three meta-points: AI is killing the senior engineer "no", bespoke harnesses are the future, automation bias is the biggest agent risk. [https://youtu.be/n5f51gtuGHE](https://youtu.be/n5f51gtuGHE)
