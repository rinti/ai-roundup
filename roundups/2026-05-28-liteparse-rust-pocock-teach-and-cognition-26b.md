---
title: "LiteParse Rusts the PDF, Pocock's /teach Hits the Tube & Cognition's $26B"
date: "2026-05-28"
summary: "Anthropic runs an engineering blitz — a Claude Code **responsiveness & reliability** update tops a *million views* even as reply threads fill with **subs being cut off 24 hours early** and *20x Max accounts burned through in 2–3 days*. The same week brings a sandboxing essay and a free **security-guidance plugin** that ships with Claude Code. Jerry Liu drops **LiteParse v2**, a from-scratch **Rust rewrite of the world's fastest model-free PDF parser** with up to 100x throughput and a WASM build for edge runtimes — early benchmark replies push back hard on two-column reading order, and Jerry asks for docs. Matt Pocock writes a **/teach skill on the London tube** and proposes splitting skills repos into *model-invocable skills* and *user-invocable commands* — disable-model-invocation gets the *yes that's the way* nod from practitioners. Theo opens three fronts in 24 hours: **SWE-Bench's prompt is a giveaway** (*\"This is absolutely something I would have produced as a 'prompt' alongside an agent\"*), his **Claude Code sub gets hard-cut 24 hours early** (and dozens of replies confirm same), and his AI coding workflow has been *forced into a rethink by 5.5*. swyx initiates on **Cognition's $1B / $26B / $492M-ARR round** — first-mover + 2 years of scaling is the moat. Simon Willison calls **April 2026 the PMF month for both OpenAI and Anthropic**. Armin amplifies **\"I'm tired of AI-generated answers\"** to 64K views. And the Latent Space pod goes deep on **Biohub's protein world model** (ESMC-6B, ESMFold2)."
tags:
  - Anthropic, Sandboxing & Claude Code Reliability
  - Pricing, Subs & Token Limits
  - Skills, Composability & /teach
  - Agentic Coding & Document AI
  - Benchmarks vs. Real Work
  - Agent Labs & Enterprise PMF
  - AI Culture & Hot Takes
---

# AI Roundup — May 28, 2026

## Anthropic, Sandboxing & Claude Code Reliability

**ClaudeDevs published a "responsiveness & reliability" sprint update — and the replies became a complaint mega-thread.** The post itself hit 9.2K likes / **1.06M views**, but the most upvoted replies were not victory laps:

- `@yungcloudy44`: *"Love to see the devs push out updates like this — much needed, shows how much they listen!"* — the rare endorsement.
- `@callreddington`: *"Hopefully the 'Let's pick this up tomorrow it's been 5hrs' sort of Claude needing you to take a rest is fixed."*
- `@lukeschuss` (5.8K views on a complaint): *"My 20x account burned through all its tokens in 2-3 days. Some mornings I would wake up to my session at 50% use. Can't get through to support. Finally cancelled."*
- `@louiswharmby` (453 likes): *"How about stopping it from estimating in days. PLEASE FIX THIS, constantly battling scoping decisions because it thinks something will take days / weeks."*
- `@HaseebMir91`: *"Please improve the context — it tries to keep the conversation compact, which I really don't like. It tries to compact again and again."*

The signal: the *small* fixes (TUI flicker, stop-hook latency, MCP stability) are landing — `@TurtleAIHacks` measured stop hooks down from 2–3s to <1s — but on **token economics**, the audience is openly furious. [Tweet](https://x.com/ClaudeDevs/status/2059701677981413812).

**Theo: subscription cut off 24 hours early.** *"My Claude Code sub expires tomorrow. I barely use it, but I still had it installed on my Windows PC so I used it to debug some crashing earlier. They hard cut me off over 24 hours early."* (743 likes, 56.7K views.) The replies turned it into a *me too* roll call: `@BigRoosterMoney`, `@kdoesai`, `@BradleyYoungjr`, `@alexbeaulieu97` all confirmed identical 12–24h early cut-offs. `@jakestanex` reported a refund refusal *after Boris Cherny publicly offered the choice*, then losing the converted credits when the sub expired. `@MatthewBerman`: *"off by 1 (day) error 🤣."* `@loftwah`: *"Now Claude is just someone you used to know."* Lone counterpoint from `@mustafaergisi`: *"Had Claude Code grinding through an overnight refactor last week and woke up to a clean diff."* [Tweet](https://x.com/theo/status/2059820505574863069).

**Anthropic Engineering: sandboxing as the right primitive.** The official blog argues *"the access and permissions we grant agents should evolve with their capabilities,"* and Anthropic's own products do this through **sandboxing — limiting the scope of any potentially destructive actions**. The post drew 342K views and a useful reply chorus on what comes next:

- `@SignalHouseSMS`: *"Now do it for messaging. An agent that sends SMS should have a scoped A2P campaign, a rate limit it cannot exceed, and an audit log that survives the agent itself. The permissions surface for outbound comms is the next obvious extension."*
- `@PointWake25`: *"For SMB deployments the bottleneck isn't capability evolution. Read-only access to a CRM gets approved in a day and write-back to the scheduler takes three meetings. Trust gradient lags capability by months."*
- `@jahanzaibai`: *"Sandboxing handles the worst case. Dynamic permission tightening as tasks complete is what most agent frameworks don't even try to solve yet."*

[Tweet](https://x.com/AnthropicAI/status/2059351260243919269).

**Security-guidance plugin ships into Claude Code (free for all users).** Install from the `/plugins` marketplace. The launch post crossed **1.73M views**. `@ogrizkov` did the dirty test: *"Asked it to add eval() and a dangerous regex. It immediately blocked both with proper OWASP explanations."* `@itsmemarvai` flagged the underrated bit: *"the org-specific rules file is the actually interesting part. Security guidance that ships with the code instead of sitting in a confluence doc nobody reads."* The sober pushback from `@snehalsurti`: *"good first pass for catching risky code Claude writes — but not supply-chain prevention. If an agent downloads a bad package, I want that blocked before install, not politely reviewed after the diff."* [Tweet](https://x.com/ClaudeDevs/status/2059385239781384341).

## Pricing, Subs & Token Limits

**OpenAI's 25x Codex usage ends May 31 — but the $200 Pro plan keeps 20x ongoing.** am.will (`@LLMJunky`) read the just-published FAQ carefully: *"If I'm reading this right… the $200 ChatGPT Pro plan will continue to enjoy 2x limits past the May 31st date… as written, it seems fairly explicit."* (113 likes / 24K views.) The clarification from OpenAI (via `@thsottiaux`, re-quoted) admits the prior pricing page mixed two things in a confusing way and promises a rewrite — *"Sorry it wasn't as clear as it should have in the first place."* In plain terms (per `@RetroOptions`): Pro $100 = 5x Plus (boosted to 10x till May 31), Pro $200 = 20x Plus ongoing. So the actual cliff is just for the **$100 tier**; the $200 tier keeps its juice. [Tweet](https://x.com/LLMJunky/status/2059769048783577446).

am.will's earlier farewell post (*"Just four days left for 2x usage inside of Codex. End of an era. I'll be surprised if we see it again for a while. 💔"*) is now retroactively wrong for the $200 plan but still pithy for the $100 tier. [Tweet](https://x.com/LLMJunky/status/2059751503460483545).

**Theo's full workflow rethink, induced by 5.5.** *"My AI coding workflows have changed a lot over the last few months. 5.5 forced me to rethink everything, and I'm better for it."* (1K likes, 62K views.) The associated video drew Kath Korevec (OpenAI Codex GM) into the replies: *"As always, thanks for the feedback, Theo! Such a blessing to have you as a user… the work shifted from writing the code to writing prompts. LLMs are magical but you still gotta put the work in."* `@TomGiant1`: *"The re-think is the real product. 5.5 broke every prompt chain I'd tuned over months… The value is in what you can delete from your stack because it handles it natively now."* `@mukparekh`: *"Once the model gets good enough, the workflow stops being 'how do I use AI here?' and becomes 'how do I structure work so the model can actually compound my judgment?'"* The recurring micro-tip from `@codyzaz` and others: **ask the model to first build an HTML page that lists clarifying questions back at you** — turn the spec into a form, then iterate. A direct continuation of yesterday's Thariq/Karpathy *"ask for HTML"* threads. [Tweet](https://x.com/theo/status/2059596131676586216).

## Skills, Composability & /teach

**Matt Pocock wrote a `/teach` skill on the London Underground.** *"It encodes all my instincts about good teaching. Using it to teach me Linux user permissions properly so I can fix Sandcastle bugs."* (774 likes, 39K views.) The pushback in replies was *"learning is too personal for a one-shape-fits-all teaching skill"* — Pocock disagrees: *"there are absolutely techniques which work for most people."* The smartest concrete tweak came from `@tommyflaim`: *"having learning files land in a centralized folder, structured as `<project>/<topic>`, with the project pulled from git root."* The shitpost reply of the day, from `@0xtreysync`: *"I'm currently making a skill 'masochist' that will quiz you on concepts related to your codebase. If you fail, it deletes parts of your system."* [Tweet](https://x.com/mattpocockuk/status/2059616119388795367) · [skills repo](https://github.com/mattpocock/skills).

**Splitting the skills repo: skills vs commands.** Pocock floated the structural change he's converging on: *"Model-invocable skills (skills) vs User-invocable skills (commands). I.e. you'd be able to run `/improve-codebase-architecture` (a command), which would use `/deep-modules` (a skill). That way, skills become more composable."* (508 likes, 28K views.) The thread became a small-scale design doc, with several voices converging on the same shape:

- **The mechanism already exists.** Pocock confirmed `disable-model-invocation: true` works today but *"imposes some weird restrictions, like not being able to invoke 2 skills at the same time."*
- **Functional core / imperative shell.** `@bnadlerjr`: *"I don't create slash commands for any of my skills. Skills are composable. Commands are specialized prompts that use one or more skills. I think of it as 'functional core' (skills) & 'imperative shell' (commands)."*
- **Tools vs workflows.** `@theunsuredev`: *"(1) tools that do 'one thing well' — access Jira, access GitHub etc. (2) workflows that encode my desired workflows and call tools as needed. But agents are not looking hierarchically at a skills directory — leaving the unsavoury option of mashing all 'tools' and 'workflow' mini-prompts into a single non-sub-foldered skills directory. I do it. But yuck."*
- **Open question: skill versioning.** `@stefrich45040`: *"Once they're composable, breaking changes get painful fast."* No good answer yet.
- **Auto-loading skills onto agents.** `@haowjy`: *"I have most skills not model-invocable, and then a small subset of core 'principle' skills that can be model-invocable since they are so general. I also have agents with some of the non-invocable skills autoloaded so I'm not constantly typing it."*

The throughline: the people running mature skill stacks have all independently arrived at the same separation Pocock is now proposing in the open. [Tweet](https://x.com/mattpocockuk/status/2059576485111808071).

## Agentic Coding & Document AI

**LlamaIndex ships LiteParse v2 — a full Rust rewrite of "the world's fastest model-free PDF parser."** Jerry Liu's launch post hit 2.4K likes / **247K views**, with the headline numbers being *up to 100x faster*, native packages for Python, JS/TS and Rust, plus a custom **WASM build for browser and edge runtimes**. Install via `pip install liteparse`, `npm i @llamaindex/liteparse(-wasm)`, or `cargo install liteparse`. They claim better accuracy than every popular open-source, model-free option (pymupdf, pypdf, markitdown, pdftotext, opendataloader, pymupdf4llm). [GitHub](https://github.com/run-llama/liteparse) · [Tweet](https://x.com/jerryjliu0/status/2059710330016817501).

The most useful replies were sceptical:

- `@davielam_` ran a head-to-head on 4 real Hermes PDFs (52 pages): *"~2.1× faster, but worse reading order on two-column PDFs; it merges left/right columns into same lines, which is worse for LLM/document reading. Word coverage was high 99.4–100%, but layout/readability lost."* Jerry's response: *"Do you have an example doc here? We'll use to iterate on core capabilities."*
- `@knsn94`: *"Definitely faster, but has systematic errors on tabular data that are absent in pymupdf."*
- `@jdrhyne`: *"Would really re-run this on a commonly used open-source benchmark like opendataloader's. The speed increase is impressive, but the accuracy claim seems a bit off."*
- `@Prashtwtz` framed the actual workflow test: *"The real benchmark for agent workflows is: does it preserve semantic order on ugly PDFs? Two-column docs, tables, footnotes, scanned pages — if LiteParse handles those model-free, that's a serious default upgrade."*
- `@baibaida` framed the *business* case: *"100x on CPU alone changes the math completely. Most teams trying to build doc pipelines get stuck on GPU costs before they even hit scale."*

**The K-Dense team shipped a "LiteParse in Scientific Agent Skills" wrapper the same day** — local research-paper ingestion that *"can parse PDFs and supplementary files on your machine (no document cloud), and pull layout-preserved structure into your AI co-scientist."* The Rust port + skill wrap-up means daily research pipelines that previously needed a hosted cloud parser now run end-to-end on a laptop. [Tweet](https://x.com/k_dense_ai/status/2059746007764869388).

**Steipete: Rastermill + libopus-wasm.** Continuing the OpenClaw extraction binge: he published **Rastermill** (portable WASM+Rust image processing for Node agents — *"especially useful if you want to ensure small hacked images don't explode your process"*) and **libopus-wasm** (his own replacements for octoscript and opus-native because *"all the deps around opus are old or terrible"*). Performance claim: *"modern WASM on Node/V8 is ~equivalent to native."* Practical upshot — *your claw can now automatically take meeting notes.* [Rastermill](http://rastermill.com) · [Tweet](https://x.com/steipete/status/2059423344961671290) · [libopus tweet](https://x.com/steipete/status/2059422568352714981).

**Pi 0.76.0 ships with codex-Asia / codex-Europe transport workarounds.** Armin: *"Includes workarounds for some transport issues observed with codex in Asia (and now Europe too?) and OpenCode Go when out of credits."* Confirmed working by users — `@AaronCQL`: *"codex was having issues in Asia (random hangs for no reason), and it seems to be much better now!"* Armin's bonus line worth flagging for any agent-pricing watcher: *"I accidentally had a pi session work for 20 minutes on deepseek flash via DwarfStar4 and I did not even notice. Laptop got slightly warmer but that was it."* [Tweet](https://x.com/mitsuhiko/status/2059730277367189528) · [release notes](https://pi.dev/news/releases/0.76.0).

## Benchmarks vs. Real Work

**Theo: "You don't hate SWE-Bench enough."** With a screenshot of the actual prompt SWE-Bench uses for every test (a 30+ line directive that pre-stages most of the planning), Theo set off a benchmark-credibility debate (621 likes / 51K views). Importantly he qualified it himself in a reply: *"This is absolutely something I would have produced as a 'prompt' alongside an agent. It's also 1 of their 100+ examples, many of which look identical to things I would have written."*

The sharpest replies put it in context:

- `@7xmohamedd`: *"That's why raw SWE-Bench scores became harder to interpret lately. The model is not dropped into a repo with 'fix this bug'. It gets a massive workflow prompt telling it to inspect files, reproduce, rerun tests, think about edge cases… A big part of the progress is agent scaffolding and benchmark optimization, not only better reasoning."*
- `@S1r1u5_` on the harness: *"The crazy part is they're not even using model-provider harnesses like Codex or Claude Code. It's literally a while-loop with a bash tool until the model throws context-window-exceeded. No summarization, no context management, no fancy skills, no specific web search tool — so it's probably figuring it out from latent space unless it's doing curl. And [Mythos] got the exploit for 18 of them??????"*
- `@18_priyansh`: *"The leak is line 20. 'Tests already in place, don't touch them.' That strips the working-memory test in real SWE."*
- `@kr0der` (deadpan): *"They may as well paste the solutions in too."*
- `@JesusGodAndKing` plugged the alternative: *"Interesting, DeepSWE is so much better."* — consistent with yesterday's Datacurve launch.

Net: the credibility argument is shifting from *which model wins* to *which harness, which prompt, and how much of the work is in the scaffolding rather than the model.* [Tweet](https://x.com/theo/status/2059851108450025539) · [Theo's qualifier](https://x.com/theo/status/2059856641470939591).

## Agent Labs & Enterprise PMF

**Cognition is now the largest independent agent lab.** swyx posted his initiation thesis after the official announcement of a **$1B raise at a $26B valuation** (Lux, General Catalyst, 8VC), with run-rate revenue at **$492M** and enterprise usage growing 10x since the start of 2026. The pitch worth quoting: *"first* koding agent, first* cloud dev infra, best reviewed code review/security guy, first* LLM wiki knowledge base, S-tier GTM, most IOI golds…"* — where *first* means *first + 2 years of serious scaling* = most enterprise battle-tested. He stresses one underrated capability in the customer ledger: *"chief partner to CIOs in combating tokenmaxxing slop from humans and from agents."* (227 likes / 28K views.) [Tweet](https://x.com/swyx/status/2059717021944926238).

The smartest reply, from `@TomGiant1`: *"'Combating tokenmaxxing slop' is the sleeper line here. The hard part of scaling agents isn't making them do more — it's making them stop when they're wrong. Every agent lab eventually discovers that the most valuable capability isn't generation speed. It's confident refusal."* And the sceptical needle from `@praveenkoka`: *"200% utilization means your infrastructure is doing 2x what it was built for. That's not a flex, that's an infrastructure team cry for help."*

**Simon Willison: April 2026 was the PMF month for both OpenAI and Anthropic.** *"Given the recent burst of activity around enterprise pricing and contracts, I think April 2026 was the month when both OpenAI and Anthropic found product-market fit."* (216 likes / 20K views.) His one-line justification when pushed: *"2x API pricing on the latest models coinciding with enterprise deals locking big companies into those prices."* He explicitly discounted ChatGPT's earlier *fastest-growing consumer app* milestone *"because almost nobody was actually paying for it!"* The reply thread surfaced sharp counter-tests of PMF: `@LukioTec` (ex-fintech): *"'enterprise deal signed' ≠ product-market fit. The real test is renewal rates 12-18mo later at the same margin."* `@nitmusai`: *"Enterprise PMF is when customers stop asking for discounts and start asking how to get more seats."* `@DevaBuilds`: *"My signal was finance pulling up Anthropic's committed spend tiers before engineering finished the POC. When procurement moves faster than the prototype, the sale was already done."* [Tweet](https://x.com/simonw/status/2059675701838774352) · [post](https://simonwillison.net/2026/May/27/product-market-fit/).

## AI Culture & Hot Takes

**"I'm tired of AI-generated answers."** Armin amplified Orchid Files' post to **63.5K views** (2.2K likes, 315 RTs) — *"This is such a good post."* — and joined the comments: *"Unfortunately it's being normalized so much right now."* The screenshots and replies turned it into a litany: `@ernestas0` asked friends in a group chat for headphone advice and *"they just forwarded me ChatGPT output to my question."* `@wrosswross`: *"At work we pay $1k/hr for a typical expert call. Recently we noticed strange long pauses before each answer, each starting with 'that's a great question.' So I randomly cut off the speaker and ask 'what's your favorite soda?' 20 second delay…"* The countersignal in the thread is that *AI-generated answers* now functions as a relationship signal — sending one is read as disrespect. [Tweet](https://x.com/mitsuhiko/status/2059634048700469627) · [post](https://orchidfiles.com/im-tired-of-ai-generated-answers/).

**Dario's "great gains, cheap price of unemployment and inequality" messaging.** Armin again, this time on Anthropic's PR: *"'I'm selling you the tool that will accomplish great economic gains and all for the cheap price of unemployment and inequality' is definitely a choice. I love you all at Anthropic but the messaging is bad."* (`@LLMJunky` posted in the same direction: *"at what point are his own people going to ask him to stop talking?"*) [Tweet](https://x.com/mitsuhiko/status/2059650414832759236).

**Chesterton's Fence, post-LLM.** A widely re-shared tweet by `@sixhobbits` (RT'd by Armin): *"LLMs ruined Chesterton's Fence. Before agents: q: 'why is this random fence with no obvious purpose here?' a: 'someone had a problem, this was a solution.' After agents: q: 'why is this random fence here?' a: 'remove it.'"* [Tweet](https://x.com/sixhobbits/status/2059643238319902846).

## Beyond Coding

**Latent Space: Biohub's Protein World Model.** swyx and team published a deep-dive episode with `@alexrives` (Head of Science, Biohub) on **ESMC-6B, ESMFold2, 6.8B proteins, 1.1B structures, antibody design, SAEs, and the bitter lesson for biology** — *"why biology may scale even further than language."* Notable for AI engineers tracking domain-specific foundation models: this is the same Rich Sutton *bitter lesson* logic running into protein space at frontier-LLM scale. [Episode](https://www.latent.space/p/esmfold2) · [Tweet](https://x.com/latentspacepod/status/2059773588593660119).

**Theo's tribute, "RIP Marc."** A short personal note: *"These two weirdos made me feel so welcome when I lived to San Francisco. The world feels a little darker without them in it anymore. RIP Marc. Thank you for the decades of inspiration. 🙏"* [Tweet](https://x.com/theo/status/2059720448716439562).

---

*Scanned 13 accounts; `@potetotes` and `@karpathy` had no posts in the 24h window. Coverage focuses on activity from May 27 onwards.*
