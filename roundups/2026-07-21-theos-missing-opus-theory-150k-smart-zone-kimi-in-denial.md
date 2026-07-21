---
title: "Theo's Missing-Opus Theory, the 150K \"Smart Zone\" & Kimi K3 Refuses to Believe the Jacobian News"
date: "2026-07-21"
summary: "Theo drops two big ones: a full head-to-head video of **Fable 5 vs GPT-5.6** (\"tool vs contractor\" framing, with a choice he says will surprise you) and a widely-debated **theory that Opus 5(.1) was meant to replace Fable for most dev work** — and that Fable's rollout delays were really attempts to fix an Opus that didn't bench well enough. Matt Pocock argues 1M-token context windows are a gimmick and you should stay in the first ~150K \"smart zone\" (cheerfully admitting the threshold is \"just personal vibes\"). The Jacobian conjecture story enters its aftermath phase: Jerry Liu writes a layman's explainer, the whole timeline spends the day gaslighting LLMs with the result — Kimi K3's thinking traces (\"Actually wait hold on wait hold on wait\") steal the show — and Lobsters moderates the story away. Plus swyx surfaces the RLM paper's quiet bombshell on benchmark gaming via \"Temu T-bench\" lookalikes, Cheng Lou ships Freerange (static proofs for UI layouts), and Armin Ronacher writes a melancholy essay about the AI rat race."
tags:
  - "Model Wars: Fable, GPT-5.6 & the Missing Opus"
  - Agentic Coding & Context Engineering
  - Jacobian Conjecture Aftermath
  - Benchmarks & Local AI
  - Other Notes
---

# AI Roundup — July 21, 2026

## Model Wars: Fable, GPT-5.6 & the Missing Opus

### Theo's theory: Opus 5 was supposed to retire Fable — and couldn't

Theo's most-discussed post of the day (377k views, 3.1k likes): [his theory that Opus 5(.1) was meant to replace Fable 5 for most dev work](https://x.com/theo/status/2079322914089029930) — cheaper, benching nearly as well — and that the repeated Fable extension deadlines were really Anthropic buying time to improve an Opus that underperformed. He stresses it's 100% speculation, and later adds an [alt angle: "Opus 5 benched worse than Kimi K3"](https://x.com/theo/status/2079420534358749438). The reply thread is a good map of the competing theories:

- The "capacity, not quality" camp: [paperclippriors argues](https://x.com/paperclippriors/status/2079325883806921033) the Fable saga was about inference optimization, noting Thariq's announcement implied real backend lift to make the Max-plan extension happen.
- The "scale can't be RL'd away" camp: [ostyn pushes back](https://x.com/ostynhyss/status/2079344286881972722) that a smaller model fundamentally can't be a "Fable replacement for cheaper" — Fable has the Mythos base, and a bigger model is just better.
- The "competitors moved the goalposts" camp: several replies argue Opus 5 would have been fine [if it had shipped before GPT-5.6 and Kimi K3](https://x.com/adamNsingh/status/2079337804555784626) landed.
- And the recurring gripe that won't die: multiple heavy users say [Fable's security-refusal behavior](https://x.com/cythagoras/status/2079383545328329099) (flagged while fixing SSH config, etc.) is pushing them off the model regardless of capability.

Best one-liner: ["If true, Opus 5 got benched by the model it was supposed to retire."](https://x.com/Vortlyn/status/2079327849924714693)

### Fable 5 vs GPT-5.6: the head-to-head video

Theo also [pinned his hour-long Fable 5 vs GPT-5.6 breakdown](https://x.com/theo/status/2079368247150100674) — strengths, weaknesses, and a personal pick he teases "will likely surprise you." The framing that stuck with viewers is **tool vs contractor/coworker**: GPT-5.6 as the predictable strong tool, Fable as the more capable but harder-to-manage collaborator — one reply says they now [use Fable as the manager and farm work out to GPT-5.6](https://x.com/TheNeuronScribe/status/2079389270973034980). Recurring reply themes: OpenAI models have ["bad taste"](https://x.com/TheGeneralistHQ/status/2079370381773750555) in UI/output that no eval captures ("tasteeval when?"), harness matters more than model ([5.6 + Codex > Fable + Claude Desktop](https://x.com/findmyrain/status/2079434435104039041)), and Fable's usage limits keep converting people to "Sol mains" against their preferences.

Related: leerob says [Grok 4.5 is really good at React](https://x.com/leerob/status/2079240370576146875) — and notably affordable and token-efficient.

## Agentic Coding & Context Engineering

### Matt Pocock: 1M context windows are a gimmick — stay under ~150K

Matt Pocock's [most-shared post of the day](https://x.com/mattpocockuk/status/2079150593524772864) (94k views): huge context windows are nice, but you may be better off treating the first ~150K tokens as the "smart zone" and everything past it as the "dumb zone." The thread is full of practical follow-ups from him:

- Cost angle: ["Working in the dumb zone is more expensive than working in the smart zone. Cached input tokens still cost money. To avoid re-exploring the code, compact first."](https://x.com/mattpocockuk/status/2079161882154348637)
- Big codebases don't justify big context: ["You just need to structure your codebase in a way that the agent can navigate it easily. Smaller files, more descriptive file system, better context pointers in AGENTS.md files."](https://x.com/mattpocockuk/status/2079154519556944281)
- Against auto-compaction skills: ["autocompacting can be disastrous when it happens mid-phase."](https://x.com/mattpocockuk/status/2079151499393876479)
- And refreshing honesty when asked how he picked 150K over his old 100K rule of thumb: ["No, just personal vibes."](https://x.com/mattpocockuk/status/2079317125638783180) (The graph is ["illustrative, not based on real data"](https://x.com/mattpocockuk/status/2079175586971304297).)

Adjacent Pocock news: his [Claude Code plugin has been approved](https://x.com/mattpocockuk/status/2079318617041035618) — a managed installation of his skills ships with the next release — and his upcoming course [uses a request logger to show the raw payloads sent to Anthropic/OpenAI](https://x.com/mattpocockuk/status/2079193858190041399), which he says instills "context paranoia — every token counts" and makes the model/harness boundary concrete.

### Freerange: proving your UI correct without running it

Cheng Lou (of React/ReasonML fame) [announced Freerange](https://x.com/_chenglou/status/2079373785824932297) (87k views, boosted by swyx): a zero-API static analysis tool that deduces numerical ranges in your code to **prove** things about UIs — layouts obey specified sizing, no NaN/Infinity, array indices in bounds — with no browser and no code execution. He pitches it as step one in turning vibe coding into *proof engineering*, and explicitly calls it RL-friendly (verifiable UI properties as reward signals). Pete Hunt's reply: ["Make it for sql."](https://x.com/floydophone/status/2079395813478764604)

### Small notes

- Anthropic's Thariq: if you hit the recent Claude Code bug, [restart — the fix is propagating](https://x.com/trq212/status/2079103743535280508). It was [live for only a few minutes](https://x.com/trq212/status/2079105479125741675); he hit it himself on his personal account while late-night coding.
- Jerry Liu and Dex Horthy are hosting an SF founder dinner series on [**"loop engineering"**](https://x.com/jerryjliu0/status/2079250071451795883) — context management, compaction, evals, human-in-the-loop handoffs. The term itself seems to be bidding for vocabulary status.

## Jacobian Conjecture Aftermath

Yesterday's bombshell (Fable's counterexample to the Jacobian conjecture) entered its digestion phase:

- **Jerry Liu wrote the layman's explainer.** [A genuinely good handwavy overview](https://x.com/jerryjliu0/status/2079261741649969223) of what the conjecture says, why a counterexample settles it, and why counterexample-hunting suits agentic models: "generating and crawling a large search space, using priors to narrow it down, and a bit of brute force." The sharpest reply pushes back on the brute-force framing: the space of degree-7 polynomial maps in three variables is astronomically large, so [whatever priors narrowed the search were doing serious work](https://x.com/yok0zuna/status/2079295628858011755). Jerry later marvels that [the post out-impressioned IShowSpeed-with-BTS at the World Cup final](https://x.com/jerryjliu0/status/2079411708972732428).
- **The timeline spent the day gaslighting LLMs with the result.** Armin Ronacher's [instant classic](https://x.com/mitsuhiko/status/2079288910631322064): ask Kimi K3 at max thinking what it makes of the counterexample. The thinking traces are theater — ["Hmm!! Wait, no. Hold on... otherwise this is a Fields-medal-adjacent discovery casually dropped in a chat message"](https://x.com/jauneclaude/status/2079466822529942010), ["Actually wait hold on wait hold on wait"](https://x.com/anko_979/status/2079308561293643804), and it [mid-reasoning profiles Ronacher himself](https://x.com/cohomologyring/status/2079332681800933489) ("He's a mathematician-adjacent software engineer... I think he's familiar with math"). Kimi [only believed it after doing a web search](https://x.com/mitsuhiko/status/2079292816182653003); one reply suggests this makes a great [self-doubt eval for OSS models](https://x.com/eersnington/status/2079319968139866283). Ronacher's follow-up: ["P vs. NP next?"](https://x.com/mitsuhiko/status/2079288205845643495)
- **Lobsters moderated the story away** for "end-running the ban on Twitter" — Ronacher's [wry take](https://x.com/mitsuhiko/status/2079190133417398339): you simply can't discuss topics on Lobsters if they originate on Twitter, even a math result. "Let's wait a day or two for the inevitable expert writeup."

## Benchmarks & Local AI

### swyx on the RLM paper: benchmark gaming via "Temu T-bench"

swyx highlights a [trajectory-comparison writeup buried in the RLM paper](https://x.com/swyx/status/2079411861150429402) from Alex Zhang and Omar Khattab: an open secret of frontier training is that **you don't need to train on the test set to goalseek a benchmark — training on test lookalikes works** ("Temu T-bench"), and since open-weight releases almost never include the datasets/RL environments, there's plausible deniability. The paper explores applying NLP distance metrics to hidden trajectories as a detection approach. The quoted RLM finding is itself notable for harness-pilled readers: **well-designed harnesses generalize *for* the transformer** — RLMs trained only on short tasks fully generalize to 8–32× longer ones because the harness makes structurally similar tasks produce near-identical trajectories, even across domains (essay-author matching transferring to math-solution matching). Reply consensus: ["held-out test set" is no longer enough for agent evals](https://x.com/mark_zhangWsNiB/status/2079424376550592976) — you need provenance on the task generator.

### Local AI notes

- Video: Ahmad Osman argues [we'll get Kimi-K3-equivalent intelligence on a single RTX PRO 6000 within 18 months](https://x.com/TheAhmadOsman/status/2079406563370951064) — "The Desktop Frontier," a watch-and-bookmark explainer of how the efficiency curve gets there. Boosted by swyx.
- Meanwhile, in the present: [GLM-5.2 at home for $15,000](https://x.com/0xSero/status/2079230064840106173) (via LLMJunky), and LLMJunky's periodic reminder of the pace of progress — [what model 3D rendering looked like just six months ago](https://x.com/LLMJunky/status/2079240584976347195).

## Other Notes

- **Armin Ronacher: "Never Enough."** Prompted by two stories — the $550k/year couple where the husband handed off parenting to become his company's top AI user, and the founder who has Claude score her first dates for empathy — Ronacher [wrote a short essay](https://dark.ronacher.eu/2026/7/21/never-enough/) about Silicon Valley's new crazy: not rebellion, but fear of falling behind. "Every 'saved' hour is returned to a race with no finish line... Maybe we need the misfits who know when to stop." His related quip: [in more than one way AI is giving crypto vibes lately](https://x.com/mitsuhiko/status/2079253442678198497).
- **Silent speech interface.** Adam Cohen Hillel demos [talking to AI with mouth movements only — no sound](https://x.com/adamcohenhillel/status/2079246149362520225), from your existing phone/computer (demo at 0:13 and 1:09). Boosted by swyx.
- **Ronacher's other experiment:** he asked a model for [a Fil-C vs Rust demo of the different memory-model tradeoffs](https://x.com/mitsuhiko/status/2079273069303017561), then couldn't resist: ["Men would rather adopt garbage collection like constructs in a system level language than use Rust."](https://x.com/mitsuhiko/status/2079294929805701157)
- **Steve Yegge is back at AI Engineer** with, per swyx, a [warning about vibecoding "in a post Gas Town world" that "u guys aren't ready for"](https://x.com/swyx/status/2079260050691072475).
