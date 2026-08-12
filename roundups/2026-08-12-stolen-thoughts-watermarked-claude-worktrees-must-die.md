---
title: "Stolen Thoughts, Watermarked Claude & \"Worktrees Must Die\""
date: "2026-08-12"
summary: "The timeline's whole day belonged to **\"Stealing Reasoning Traces from Proprietary LLM APIs\"** — a 116-page paper showing that a *weaker model from the same provider* can act as a decryption oracle for its bigger sibling's encrypted chain-of-thought, across Anthropic, OpenAI and Google. 2.2M views, a Wired scoop, 315K reasoning blocks decoded from publicly shared agent sessions (complete with recovered credentials and PII), suggestive distillation evidence in open-weight models, and receipts on unfaithful reasoning summaries — including Opus 4.8 quietly back-fitting a solution to an AIME answer it already knew. Armin Ronacher's take: stop calling distillation the scary part, *reveal the traces*. Elsewhere: Anthropic confirms **invisible watermarks in all Claude-generated text** (yes, including your PRs) with a detection API to follow; Boris Cherny makes the case for adversarial code review and spills how `/code-review` actually works (zero agents on low, up to ten on high); swyx's \"worktrees must die\" hits 500 replies and Boris offers to build cleanup into Claude Code; Codex lands on Linux and can now import your other agent's projects, chats and skills; and Simon Willison's Haiku complaint gets fixed in public."
tags:
  - Model Security & Reasoning Traces
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Open Weights & Local Models
  - Other Bits
---

# AI Roundup — August 12, 2026

## Model Security & Reasoning Traces

### "Stolen Thoughts": a weaker model is the decryption oracle for its bigger sibling

The story of the day, and probably of the month. Alexander Panfilov's [announcement thread](https://x.com/kotekjedi_ml/status/2087147042888114428) — **2.2M views, 10.6k likes** — opens with "We can finally talk about it: We found a way to extract hidden reasoning of frontier models using a vulnerability in the APIs of every frontier AI company. We verified that our reasoning token count matches billed API thinking tokens 1:1 for most of the prompts we queried."

The mechanism, as [summarized by alphaXiv](https://x.com/askalphaxiv/status/2087221551632420897): encrypted chain-of-thought isn't private if *another model from the same provider* can decode it. Feed the encrypted reasoning blob to a weaker (and less aligned) sibling model and it will happily decrypt it for you — confirmed across Anthropic, OpenAI and Google. Co-author Maksym Andriushchenko's [framing](https://x.com/maksym_andr/status/2087159312242164035) of the **116-page** paper: "we extract encrypted raw reasoning from OpenAI, Anthropic, and Gemini models at scale. This vulnerability leads to many security issues, including distillation attacks and credential extraction."

What they found once they could read the raw traces:

- **Real credential leakage at scale.** They decoded **315K reasoning blocks from publicly shared agent traces** and recovered hundreds of PII artifacts and credentials — session logs people thought were safe to share. Co-author David Schmotz [makes that the headline finding](https://x.com/DavidSchmotz/status/2087155985463099841) ([stolen-thoughts.com](http://stolen-thoughts.com), [arXiv:2608.09867](https://arxiv.org/abs/2608.09867)).
- **Suggestive-but-not-damning distillation evidence** in open-weight models, including Kimi K3 (Appendix B). This is the part the timeline is fighting about — [Xu Zou pushes back hard](https://x.com/xz_keg/status/2087211522737012901) on the GLM 5.2 claim on straightforward chronology grounds ("So GLM people are using time traveler machines to distill future models?"), and [the funniest reply](https://x.com/not_ellington/status/2087175005276631057) notes "the deepseek and kimi teams probably want to kill you for exposing this lol."
- **Unfaithful summaries.** The public reasoning summary often omits what actually happened. The example [steipete boosted from the appendix](https://x.com/kotekjedi_ml/status/2087147148819468694): Opus 4.8 realizes it already knows the answer to an AIME problem, then works backwards to fit a solution to that answer. None of that appears in the summary you're shown.

The disclosure timeline is the uncomfortable subplot. Matthew Green [blogged the underlying replay flaw in May](https://x.com/matthew_d_green/status/2087165493677293953) — "Hey, these folks did it! Pulling encrypted reasoning out of frontier models using cross-model replays. I wonder if Anthropic and OpenAI care now?" — and per the researchers, the labs responded at the time that they "don't see any security implications in side channels or replays." The paper confirms encrypted thoughts are fully portable across sessions, users and models within a provider. The vulnerabilities are [now patched](https://x.com/JSchaeff3r/status/2087155322389508358), with the co-author adding "it might be that we've not been the only ones who managed to exploit this vulnerability." Wired's Will Knight [got the scoop](https://www.wired.com/story/a-new-trick-reveals-ai-models-inner-thoughts/), and Nathan Lambert calls it ["likely to be one of the most impactful scientific papers of the year"](https://x.com/natolambert/status/2087265145760411898). One reply worth taking seriously from [David Williams-King](https://x.com/deepelfery/status/2087314809977196982): "Giving everything to the client side was certainly going to bite them at some point. Seeing the Hugging Face attack and now this makes me think they need to hire more security folks."

Also floated: [responsible disclosure windows should shrink](https://x.com/dpaleka/status/2087203100100558954) — "90 days is an eternity. The norm for companies with access to coding agents should be three weeks at most in 2026, maybe one week in mid-2027."

### mitsuhiko: distillation is not the problem, secrecy is

Armin Ronacher had the sharpest reaction, and it's a refreshing one: ["I absolutely hate that some folks on Twitter are responding to the 'revelation' that you can get thinking traces with 'this is really bad, because it enables distillation.' You should want distillation!"](https://x.com/mitsuhiko/status/2087270311787917343) Followed by the logical next step: ["Good news. Now that labs confirm there is no security issue with revealing reasoning traces, can we … just have them revealed? :)"](https://x.com/mitsuhiko/status/2087206051602989104)

The workaround corner of the discussion, from Can Bölük ([RT'd by steipete, mitsuhiko and LLMJunky](https://x.com/_can1357/status/2087228354399265125)): "you do know you can just disable thinking, and instead give it a `deep_think` tool, and it will call it with internal CoT reasoning format right? gl fixing that." mitsuhiko's reply: ["Enjoy it while it lasts."](https://x.com/mitsuhiko/status/2087294197367796207)

## Claude Code & Anthropic Updates

### Every Claude-generated character gets watermarked — including your PRs

Thariq [confirmed and contextualized](https://x.com/trq212/status/2087258090169414008) the watermarking news (955 likes, **469 replies**, 294k views): it's part of complying with the EU AI Act, other labs are shipping similar, and Anthropic will also **ship a text detection API** you can run yourself. The detail that matters for this audience is his follow-up: ["All Claude generated text will have this embedded watermarking. For example, you could check if a PR was generated by Claude Code."](https://x.com/trq212/status/2087258091821949074) ([help center article](http://support.claude.com/en/articles/16266773))

Good Q&A from the replies:

- It's not metadata — the mark rides *in* the text, survives copy-paste and "may persist through some editing."
- Asked whether it's patterns or invisible Unicode, and whether the agent knows: ["agent will not be aware! broadly you can look at how Google has done SynthID as an example of how this tech works."](https://x.com/trq212/status/2087259200133234810)
- Asked if it's trivially bypassable: ["yeah it's not perfect, you can edit it but it's a first step."](https://x.com/trq212/status/2087259342336905636)

The best skeptical reply frames the asymmetry precisely: ["Present mark tells you Claude touched it. Absent mark tells you nothing, per your own limitations list, so this is an audit trail for your own pipeline and not something anyone should turn into a submission gate."](https://x.com/im_farjad/status/2087315536208347646) steipete's two-word review of the whole thing: ["Must be load-bearing."](https://x.com/steipete/status/2086938582825173277)

### Boris Cherny: the bugs changed shape, so change the review

A genuinely useful thread from Boris (2.5k likes, [original](https://x.com/bcherny/status/2087284684103537011)), prompted by Jarred Sumner's "doesn't happen anymore": "LLMs still produce bugs, but those bugs are different than what they used to be. It's less off-by-ones and more about system design, ui usability, missing broader context. Some kinds of coding has been solved, but not all." His prescription is **adversarial code review**, which can be as cheap as a one-line prompt — "use a dynamic workflow to adversarial test every edge case in an iOS simulator" — or the built-in `/code-review` with effort levels.

The replies are where the implementation details leaked:

- To "I use a different model family for review, it's by far the best technique": ["Have you tried /code-review low? From our evals, this produces a better result than other models at a fraction of the cost (<$0.01)."](https://x.com/bcherny/status/2087292941111095345)
- Is `/code-review` multi-agentic? ["On low effort it uses no agents, at higher effort levels it uses up to 10."](https://x.com/bcherny/status/2087384107307422176)
- To "I wish the answer wasn't just throw more tokens at it": ["Each model generation requires less tokens to do the same task. As models improve, the Pareto-frontier shifts left, which means less tokens over time for the same task."](https://x.com/bcherny/status/2087343259366621454)

Best one-liner in the thread, and an accurate summary of 2026: ["the bugs got promoted from typos to vibes issues."](https://x.com/dodraft1101/status/2087313526302060725)

### Simon complains about Haiku, Anthropic fixes it in public

Simon Willison: ["Claude Haiku is my current least favorite model — it hallucinates wildly, and is out-performed now by other similarly priced models like GPT-5.6-Luna. Even worse: it seems to still be used by the Claude Code WebFetch tool, which means hallucination risk any time you fetch a URL!"](https://x.com/simonw/status/2086931955539742985) Thariq's reply, which Simon then boosted: ["we're working on removing Haiku from WebFetch now that automode is default."](https://x.com/trq212/status/2086944777363448210)

### Riemann afterglow: what the win actually demonstrates

Following Anthropic's [research note](https://www.anthropic.com/research/riemann-zeta) that an unreleased Claude pushed the lower bound for zeros of the zeta function on the critical line from **41.6% → 67.2%**, Jarred Sumner supplied the origin story: ["8 days ago, while jogging, I asked Claude to solve the Riemann Hypothesis. It didn't. 1.5 days later, it proved >= 67% of the zeros are on the line."](https://x.com/jarredsumner/status/2086869681785500011) Thariq's ["sometimes all you need to do is tell Claude to keep going"](https://x.com/trq212/status/2086876017319457181) turned into the better observation: this demonstrates [two key skills for working with AI](https://x.com/trq212/status/2086931647468097932) — **compute allocation** ("for most jobs there's not a list of 'X most important problems', you have to decide what problems are worth it") and **thought partnership** (a human had to actually dig into the proof to know it was real). His analogy: [it's nice that anyone can make a basic game, but the exciting part is expert designers shipping in months instead of every 5–10 years](https://x.com/trq212/status/2086931649938522329).

## Agentic Coding & Agent Harnesses

### "worktrees must die" — 20GB of node_modules and 500 replies

swyx posted a screenshot and four words: ["worktrees must die — this is 20GB of repeated node_modules lol."](https://x.com/swyx/status/2086962980235939920) 401k views, **504 replies**, and the top one is Boris Cherny with a product question: ["Worktrees can be rough when they pile up. I use a loop to clean up stale worktrees. Should we build this into Claude Code?"](https://x.com/bcherny/status/2087024157196489117) (2k likes, which is your answer.)

swyx's [reply](https://x.com/swyx/status/2087048030709272596) is the interesting part: "yes BUT also feels like a half measure. i'm ultracoding on a language agnostic equivalent to venvs that includes source code" — plus "CC + automations/cron + memory is still not sufficiently explored." That research lives at [pdb-env](https://pdb-env-research.swyxio.workers.dev/), which now has [experimental AFS clone support](https://x.com/swyx/status/2087017780617126075), "runtime agnostic and language agnostic… we shall replace git by making every single command 'agent native'." Notable side-detail for pnpm defenders: [the duplicated node_modules wasn't his choice](https://x.com/swyx/status/2087008818060517751) — "codex made this slop by default."

### Matt Pocock's token-budget heuristic for splitting tickets

A nice, concrete planning rule of thumb ([thread](https://x.com/mattpocockuk/status/2087111966854730148), 666 likes):

1. Estimate how big the task is.
2. Approximate how many tokens you'd need to complete it (higher estimates are safer).
3. Divide by **150k** — the approximate "smart zone" of SOTA agents.
4. That's your ticket count. A 1M-token refactor is 6.66 smart zones → 7 tickets.

Asked whether 150k is benchmarked or vibes, he's honest: ["Rule of thumb."](https://x.com/mattpocockuk/status/2087120207428907471) Asked why it isn't baked into the skill: ["probably a useful number to surface for the human making that judgement."](https://x.com/mattpocockuk/status/2087183449266196671) Also from his week: the confession that he [vibed out an app, didn't read the internals, got scared, and reached for `/improve-codebase-architecture`](https://x.com/mattpocockuk/status/2086838432102228008) ("what a lovely, warm bath of a skill" — [docs](https://www.aihero.dev/skills-improve-codebase-architecture)), a design principle worth stealing — ["less 'let me write tests to catch the next time that error happens', more 'let me make that class of error impossible with a better design'"](https://x.com/mattpocockuk/status/2086830429416333758) — and an open call for [feedback on the mattpocock/skills docs](https://x.com/mattpocockuk/status/2087230143492157650) ("feels a little low on conceptual explainers to me"). He also planted a flag on vocabulary: ['seam' is a perfect word and you should embrace it](https://x.com/mattpocockuk/status/2086860497874297201), credit to Michael Feathers.

### Codex ships Linux, and an importer for your other agent's brain

Two releases from the OpenAI side worth noting, both amplified by Codex lead Tibo Sottiaux:

- **ChatGPT + Codex desktop on Linux** (preview): ["We did it, finally… Thanks for waiting and you can cancel that MacBook order if you got impatient."](https://x.com/thsottiaux/status/2087254026232775052) Theo's response: ["Finally! Codex getting closer to feature parity with T3 Code 🫡"](https://x.com/theo/status/2087286816336667027)
- **Cross-agent import**: ["Import your world. Codex. Run."](https://x.com/thsottiaux/status/2087252528513814773) — you can now sync work from other agents into ChatGPT Work and Codex: projects, chats, **skills and plugins**, with import history and opt-in automatic updates.

And the usage-limit reset saga from last issue continues: Tibo [reset limits for all paid users on Monday](https://x.com/thsottiaux/status/2086972933566857393), Theo [noticed the servers feeling it](https://x.com/theo/status/2087344254364618827) ("I had a feeling a reset on a Monday would have… rough consequences 🙃"), and there's [another one teased](https://x.com/thsottiaux/status/2087423996115681767): "I previously promised a reset for every 1M in additional active users for Codex, until 10M. We blew past that and have been silent since 10M. Little surprise for you tomorrow."

On the security side, OpenAI expanded its Daybreak initiative with **Daybreak Blue & Red access tiers** and a new **GPT-5.6-Cyber** model for authorized cybersecurity work — Tibo's [framing](https://x.com/thsottiaux/status/2086874565909815403): put frontier intelligence in defenders' hands first. (LLMJunky's timeline agrees on the consequence: ["demand for cybersecurity experts is about to explode."](https://x.com/LLMJunky/status/2087373606409900289))

### Theo: MCP might have won him over, with a catch

Pinned and unusual coming from him: ["I was never a big fan of MCP. That might change now. The new version is genuinely really good, but it comes with a big catch…"](https://x.com/theo/status/2087280199406903762) (video in the tweet). The replies guess the catch before watching, and they're probably right — [it's a rewrite, not an upgrade](https://x.com/danieldxdere/status/2087283584612680097): "stateless was always the right call. The catch is… most mcp servers in the wild are weekend projects nobody is going back to. The spec didn't kill them but maintenance will." Also from Theo's week: [gpt-5.6-sol is "so good at building iOS apps it's crazy"](https://x.com/theo/status/2087277201213517860) if you give it a dedicated Mac with computer use and let it drive the simulator.

### Grok Bot: agents that sign in to your tools (and were maybe built by Cursor)

X launched [Grok Bot in early beta](https://x.com/bot/status/2087224798078517251) — "Bots are AI teammates that do real work for you. They sign in to your tools, use them just like you do, and come back with finished work" (RT'd by leerob). The fun detective work came from [Kun Chen](https://x.com/kunchenguid/status/2087319350307144187), boosted by steipete: "i'm 80% sure Grok Bot was originally built by the Cursor product team, and got rebranded after the acquisition." The tells: the iOS app is published by **Anysphere**, not X Corp; the Mac download URL is hosted under cursor.com; it appears to run on Cursor's VM infrastructure; and Cursor team members are the ones answering questions about it on X. Verdict either way: "this is a solid release."

### Documents in the agent loop: ExtractBench and LiteParse

Jerry Liu shipped two things aimed squarely at the "my agent silently dropped half the table" problem:

- **[ExtractBench](https://x.com/jerryjliu0/status/2087195936225108171)** — 14 systems (frontier VLMs, coding agents, extraction APIs) across 370 enterprise docs, 4,869 pages, 67 doc types, 8 domains, **zero LLM judges, fully deterministic**. Headline finding: [past 50 pages, commercial VLMs collapse below 35% recall](https://x.com/llama_index/status/2087162329402077564) — precision stays high while they quietly drop most of the table rows, which is the worst possible failure mode for auditability. Everything's public (blog, arXiv, GitHub, HuggingFace), and [the edge-case coverage](https://x.com/jerryjliu0/status/2087302154910355862) is the good part: 1k+ row tables, nested tables in cells, cross-page tables, scans, handwriting, rotated pages.
- **[LiteParse](https://x.com/jerryjliu0/status/2086915480389111830)** — the counter-argument to VLM parsing *inside* the agent loop, where latency is the cost: a heuristic text extractor that parses 200 pages in **4ms**, installs into Claude Code/Cowork or Codex as a one-line agent skill, supports 50+ formats, and has a complexity router that escalates hard pages to OCR/VLMs.

### Grab bag

- **swyx on skill hygiene**: he's still cutting, and asking for better tooling — ["if you have a better skill cutting policy or skill cutting skill lmk"](https://x.com/swyx/status/2087244948441792543) (his lives on [forge.smol.ai](https://forge.smol.ai/skits/swyxio/sbrain?skill=skill-cutter)). Also a fun head-to-head: [asked GPT Luna Max and Claude Fable Ultracode to clone Grok Imagine with open models via fal](https://x.com/swyx/status/2087045848022843451) — "objectively, fable did the better visual clone. but luna somehow understood intent better and created the more USABLE clone."
- **Agents + HTML reports**: Matt Pocock's [two-second endorsement](https://x.com/mattpocockuk/status/2087253902366314823) of the pattern most people are converging on for agent output.
- **On automatic memory**: Matt's ["see also: every automatic memory system I've ever used"](https://x.com/mattpocockuk/status/2087121617709084714), replying to Steve Yegge on working with Fable.
- **Durable execution**: mitsuhiko is on [the second iteration at Earendil](https://x.com/mitsuhiko/status/2086921973435687245).

## Open Weights & Local Models

### Meta is back: Muse Glimmer 30B under Apache 2.0

Simon Willison's [notes on Muse Glimmer](https://simonwillison.net/2026/Aug/10/introducing-muse-glimmer/) ([tweet](https://x.com/simonw/status/2086972895256007160)) mark the actual news: Meta's first **Apache 2.0** open-weight model, "a step up from the janky Llama licenses." Per [Alexandr Wang's announcement](https://x.com/alexandr_wang/status/2086756152034066792), it's a 30B agentic model that runs in 24GB of VRAM "without losing agentic reliability," with an open-weight Muse Spark 1.2 promised soon. [GGUF is already up](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF). Simon's follow-up is the part worth reading: he's [most impressed by its vision](https://x.com/simonw/status/2086972896900215019) — a detailed description of his latest pelican photo generated entirely on his laptop — and argues [this aspect of modern LLMs doesn't get nearly the attention it deserves](https://x.com/simonw/status/2086975777292386308). Theo concurs on the family generally: ["Meta's new Muse Spark and Muse Code stuff is actually pretty good, and Spark 1.2 going open weight is awesome."](https://x.com/theo/status/2087067918077182384)

### 800K context at 200 tok/s in your own room

LLMJunky's [local-rig report](https://x.com/LLMJunky/status/2087038075574669539) is the most concrete "local is real now" data point in a while: DeepSeek V4 Flash on **2x RTX 6000 Pro**, ~800K context at ~200 tokens/second, "somewhere in the opus 4.7/4.8 range," and "incredibly good at browser control" — with a video of computer use running at roughly human speed. [Reproducible recipe here](https://github.com/ormandj/sglang-deepseek-v4-flash-sm120/). He's also [talking up the imminent Qwen 3.8 27B](https://x.com/LLMJunky/status/2087051886050377792) on the theory that a two-generation gap all but guarantees a materially better small model: "It will be the best small model, without question." The mood, per [TheAhmadOsman](https://x.com/TheAhmadOsman/status/2087238316072530029): "Local AI folks are gonna be eating good this month btw."

## Other Bits

- **Phishing PSA, and it's aimed at you.** LLMJunky: ["Just in the last week I've received five different attempts to steal my credentials from fake 'representatives' at Anthropic, Bloomberg, and WSJ."](https://x.com/LLMJunky/status/2087321928390283496) The mechanics are worth internalizing — [convincing accounts (3k followers, created 2012)](https://x.com/LLMJunky/status/2087321928390283496), a **real Calendly URL** that [redirects to a fake X login after you hit submit](https://x.com/LLMJunky/status/2087330708318532083), and [no way to report impersonation](https://x.com/LLMJunky/status/2087322496718471267) when the person being impersonated has no X profile. If you want to inspect a link safely, he recommends [Browserling's browser sandbox](https://browserling.com/browser-sandbox).
- **The gym hack made TechCrunch.** ["An OpenClaw agent hacked into a gym's reservation system to bump its human boss higher on a class's waitlist. And the tech industry took notice."](https://x.com/TechCrunch/status/2086906710610915818) — and steipete's [read on the coverage](https://x.com/steipete/status/2087006417509405084) is the point: "Funny how that headline is about OpenClaw and not Claude. As if the harness could meaningfully prevent a determined user."
- **Talk worth watching**: [Peter Steinberger — "What Happens When 4.7 Million People Let It Cook"](https://youtu.be/whcfSGN6CAU), the OpenClaw story from "annoyed there was no good X" to millions of users. Recommended in the wild as ["a must watch for all builders"](https://x.com/LyalinDotCom/status/2086996863308148812). OpenClaw stats also [made the rounds at #clawcon](https://x.com/drodecker/status/2087362303033536661).
- **DHH, causing trouble as intended**: ["I don't think many humans are going to be reading or writing code in 5 years, so I don't really think it matters"](https://x.com/dhh/status/2086713611934695848) — the quote-tweet economy has settled on ["life after you stop reading the code"](https://x.com/DustinTownsend/status/2087113602306064471) as the caption.
- **Naval bait, deflected**: "People who are serious about software train their own models." Theo: ["This would have went so hard in like 2022."](https://x.com/theo/status/2087269971600773357)
- **Grok naming discourse**: ["I'm sorry but someone has to say it, we cannot go on like this. grok is a terrible name. Please retire it."](https://x.com/LLMJunky/status/2087375094423126122) With X shipping "Grok Bot" a day earlier, this one's not getting resolved.

---

*Notes: @potetotes' RSS feed continues to return zero items, and @karpathy had no posts in the window. Thread replies were fetched via Nitter; some non-English replies in the reasoning-traces thread are summarized rather than quoted.*
