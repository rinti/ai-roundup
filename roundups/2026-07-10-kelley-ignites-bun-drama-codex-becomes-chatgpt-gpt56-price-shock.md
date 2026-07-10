---
title: "Kelley Ignites the Bun Drama, Codex Becomes ChatGPT & GPT-5.6's Price Shock"
date: "2026-07-10"
summary: "Day two of the Bun-in-Rust saga turns ugly: **Andrew Kelley** publishes \"My thoughts on Bun's Rust rewrite\" and the community erupts — Theo calls him \"a petty, evil man\" on stream, Charlie Marsh calls the post \"really disappointing,\" and Armin Ronacher (no Bun fan) defends Jarred Sumner outright. Meanwhile **OpenAI's Codex desktop app is now just ChatGPT**, and Theo declares it \"a generational fumble\" (4.4K likes) while Simon Willison admits he's *so confused* by ChatGPT vs. Codex vs. Work vs. Claude vs. Code vs. Cowork. The GPT-5.6 numbers land too: SOTA on the Artificial Analysis Coding Agent Index (80.0, +2.8 over Fable 5 at a third of the cost), first verified model to beat an ARC-AGI-3 game, and CursorBench pricing that has people calling the economics \"brutal for Anthropic.\" Plus: Anthropic resets everyone's rate limits (\"Enjoy more Fable!\"), Theo's $200k-in-tokens month with Sol, pi ships cache-miss dollar accounting, and Matt Pocock finally records a tutorial for his 160K-star skills repo."
tags:
  - The Zig Post Fallout
  - Codex Becomes ChatGPT
  - GPT-5.6 Day Two — Benchmarks & Economics
  - Claude Code & Anthropic Updates
  - Agentic Coding & Craft
  - Quick Hits
---

# AI Roundup — July 10, 2026

## The Zig Post Fallout

Yesterday Jarred Sumner shipped the "Rewriting Bun in Rust" post; today Zig creator **Andrew Kelley** published his response — ["My thoughts on Bun's Rust rewrite"](https://andrewkelley.me/post/my-thoughts-bun-rust-rewrite.html) — and it became the day's angriest thread-storm.

- **Theo read it live on stream and detonated** ([post](https://x.com/theo/status/2075435921965728044), 83K views): "I've never been so pissed off on camera. Andrew is a petty, evil man, and you should not trust any software he writes." Pushed on whether that's a stretch, he [doubled down](https://x.com/theo/status/2075440411414548907): "If he goes after his users in such a vile way, I don't think you should use his software. He is a ticking time bomb." The replies carry useful context: the resentment reads as being about Jarred taking the VC path, Zig banning AI contributions (Bun was Zig's flagship project *and* its biggest donor — reportedly $60k/yr, now ended), and the post repeatedly questioning Jarred's engineering judgment. Plenty of pushback too, from "petty sure, evil?? why?" to a pointed callback to Theo's own ffmpeg-maintainer bounty episode.

- **Charlie Marsh's cooler-headed version** ([post](https://x.com/charliermarsh/status/2075281721050759474), RT'd by theo): "I find this post to be really disappointing... It's explicitly framed as 'not a personal criticism', then goes on to include a bunch of very personal criticisms about Jarred."

- **Armin Ronacher, notably not a Bun fan, defended Jarred** ([post](https://x.com/mitsuhiko/status/2075245365301850281)): "what @jarredsumner is doing is pretty fucking awesome and I can confirm that he's great to hang out with... The responses to his blog post by some people are uncalled for." Best replies: Jamie Turner's ["It's reprehensible and condescending. Call me crazy, but if I lose my biggest customer, I'm gonna consider it my fault"](https://x.com/jamwt/status/2075445478075113824), and Seb Insua calling it ["one of the most poisonous posts I've ever seen... It's sad that some people's reaction to AI makes them treat other humans like this"](https://x.com/sebinsua/status/2075284155898716671) — because underneath the personal feud, this is really a proxy war over AI-assisted rewrites (Zig forbids AI contributions; Jarred used Claude to port the entire runtime).

- The contrarian minority is worth reading too: Ben Vinegar's ["we've gone soft"](https://x.com/bentlegen/status/2075450772884480415) (72 likes) and a [reply](https://x.com/Revenode/status/2075457293458759831) collecting the Zig side's actual grievances — correctness advice ignored, and AI-generated changes that allegedly made the Zig compiler non-deterministic.

## Codex Becomes ChatGPT

The other half of Wednesday's OpenAI launch — the Codex desktop app being folded into a unified "ChatGPT" app alongside the new **ChatGPT Work** — aged badly overnight.

- **Theo: "turning Codex into ChatGPT Desktop is a generational fumble"** ([post](https://x.com/theo/status/2075312087723876556), 304K views, 4.4K likes, 483 replies). The replies are a catalog of migration pain: the Codex app vanishing from people's Macs, accounts not rolled over so [threads and workspaces are unreachable](https://x.com/ianlenehan/status/2075340350978175248), Shift+Tab planning mode gone, and kitze summarizing the brand damage as ["aura loss of biblical proportions"](https://x.com/thekitze/status/2075314991712923692). Recurring take: ["It is Cowork/Code all over again"](https://x.com/jensenwaud/status/2075313998120280506) — several people note OpenAI copied the one Anthropic decision devs disliked. OpenAI's dkundel offered the defense: ["We just made this setting a dropdown. It's the same Codex"](https://x.com/dkundel/status/2075363472200925406).

- **Simon Willison speaks for everyone** ([post](https://x.com/simonw/status/2075348941215006888)): "I am *so confused* by ChatGPT v. ChatGPT Codex v. ChatGPT Work v. Claude v. Claude Code v. Claude Cowork right now!" He read [OpenAI's own help page](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) on the split and reported back: ["This did not help"](https://x.com/simonw/status/2075388081126228068).

- **The contrarian case**, from Jerry Liu ([post](https://x.com/jerryjliu0/status/2075297007162265948)): he actually tested both and prefers the ChatGPT Work/Codex split to Claude Cowork/Code — the interface is more unified, chat history is shared between modes, and "the team put more care into the specific toggles that should feel different." He'd [still rather](https://x.com/jerryjliu0/status/2075295459304710496) OpenAI went all the way to one app surface for all work.

- **Theo's bigger lament** ([post](https://x.com/theo/status/2075339972744483251)): "Codex just rebranded to ChatGPT. Claude is spamming me with Excel plugins. xAI is bragging about how good Grok is at PowerPoint. I knew the 'AI labs focus 100% of their effort on software devs' thing wouldn't last, but it's sad having it end all at once." Corey Quinn adds the money angle ([post](https://x.com/QuinnyPig/status/2075334468462899442)): nobody can pin down when GPT-5.6's price jumps 50% or when it stops being included in subscriptions — docs, blog posts, and employees all disagree.

- Practical scrap for the migration: [keep a "Codex" alias](https://x.com/LLMJunky/status/2075283097424162826) so Spotlight/Raycast searches still work.

## GPT-5.6 Day Two — Benchmarks & Economics

The launch-day dust settled into numbers, and the story everyone converged on is price-performance, not raw capability.

- **Simon Willison's full write-up is out**: [Notes on GPT-5.6](https://simonwillison.net/2026/Jul/9/gpt-5-6/) ([post](https://x.com/simonw/status/2075306164993315192)) — the API additions he flags as most interesting are **programmatic tool calling** and first-class **multi-agent support**, plus 18 pelican SVGs covering all 6 reasoning levels × 3 models (Sol, Terra, Luna). A sharp reply worth keeping: programmatic tool calling means routing decisions leave the context window — ["deterministic execution, no token burn on deliberation, testable behavior. The three things agents usually sacrifice"](https://x.com/GauravAlbal/status/2075333309350252830). OpenAI's own livestream featured [a 3D pelican riding a tricycle, bicycle, pony, and another pelican](https://www.youtube.com/live/Wq45rvPGNHs?t=1070s) as a nod to Simon's benchmark. One field report on Terra to balance the hype: it [kept stopping mid-task](https://x.com/FredipusRex/status/2075315919002182077) until the user rigged a timer thread reminding it every 30 seconds to keep working.

- **The benchmark sweep**: OpenAI says Sol sets a new SOTA on the Artificial Analysis Coding Agent Index at 80.0 — 2.8 points above Claude Fable 5 while using less than half the output tokens, in less than half the time, at about a third less cost ([announcement](https://x.com/OpenAI/status/2075271425548795909)). ARC Prize reports Sol is [the first verified frontier model to beat an ARC-AGI-3 game](https://x.com/arcprize/status/2075270869992264003) (7.8% SOTA, "best model at orienting in a situation it's never encountered"). And on CursorBench the framing that stuck was ["the economics are brutal for Anthropic"](https://x.com/bridgemindai/status/2075271377397981641): Fable 5 Max 70.5% at $17.32/task vs. Sol Max 67.2% at $5.22 — 95% of the performance at a third of the cost. LLMJunky's take ([post](https://x.com/LLMJunky/status/2075401119434437076)): "unless you have a task that only Fable can do well," the price story decides it.

- **Not every benchmark moved**: LlamaIndex ran GPT-5.6 through ParseBench day-zero and found [no change vs. GPT-5.5 on document understanding](https://x.com/jerryjliu0/status/2075356305099800717) — still strong on text and tables, still struggling with charts and layout. And LLMJunky's Rocket League one-prompt demo verdict: decent, ["but Fable mogged here"](https://x.com/LLMJunky/status/2075297321491763579).

- **The "work at the level of your ideas" demos**: Sharif Shameem says his favorite thing about 5.6 is that it's "a fucking stellar researcher" and posted *the entire prompt* used to get Sol to post-train Luna ([post](https://x.com/sharifshameem/status/2075279959996928307), 172K views) — a ~500-word prompt, though so heavily redacted the replies turned it into a meme ("more redactions here than the Epstein files"). In the same genre, skirano [vibe-coded a language model from a single prompt](https://x.com/skirano/status/2075283308276220011): 5.6 built the training pipeline and trained a model from scratch on his iMessage history, locally on a Mac.

- **Theo's month with Sol**: he burned over **$200k in tokens** with gpt-5.6-sol over the past month and released a video overview of everything he built with it (including a Rust port of his Hermes agent), with a "proper review coming soon" ([post + video](https://x.com/theo/status/2075439348267577790)). The replies split between awe and ["$200k in tokens and still no review, that's a sponsorship not an opinion"](https://x.com/trifon_getsov/status/2075468949991354859) — the who-paid-for-the-tokens question goes unanswered. Also his succinct standalone verdict: ["It's a good model"](https://x.com/theo/status/2075288748452168174).

## Claude Code & Anthropic Updates

- **Anthropic reset everyone's rate limits**: Thariq's ["Enjoy more Fable!"](https://x.com/trq212/status/2075280416995705312) (398K views) quote-tweets the announcement that 5-hour *and* weekly limits were reset for all users — read universally as a competitive response to the GPT-5.6 launch ("Fantastic competitive energy you all"). The replies also pin down the elephant: people are still treating **July 12 as the date Fable access via plans expires**, and Thariq didn't correct them. Relatedly, kitze notes [Anthropic is including Fable in the Max plan](https://x.com/thekitze/status/2075193862973214760), and Theo marks the date: ["Fable 5 released 1 month ago today"](https://x.com/theo/status/2075441382471471170).

- **`/checkup` keeps climbing**: Boris Cherny's announcement from Tuesday is now at [720K views / 11K likes](https://x.com/bcherny/status/2074997570317779038) (covered in yesterday's roundup). New in the replies since: confusion about `/checkup` vs. `/doctor` persists, and the sharpest critique is that auto-cleanup makes your setup Claude-Code-only — ["since Anthropic refuses to support standards for skills or AGENTS.md, I won't be using this"](https://x.com/ChrisEdwards357/status/2075283267922571388).

- **Armin Ronacher's Anthropic "announcement"** ([post](https://x.com/mitsuhiko/status/2075290530599075857)): some aggregator listed him as an Anthropic employee, so — "I guess I got to announce that I'm leaving Anthropic." (He never worked there.)

## Agentic Coding & Craft

- **pi 0.80.4/0.80.5 ships cache-miss accounting** ([Armin Ronacher](https://x.com/mitsuhiko/status/2075296534632005743), [changelog](https://pi.dev/news/releases/0.80.4)): `/session` now shows how much money you lost on cache misses, with cache warnings in the transcript — plus GPT-5.6 support, new extension and lifecycle hooks, and a big `pi config` update. The design insight in the replies: ["Seeing the wasted-money line inside /session is what changes behavior. People fix what stares at them in the transcript"](https://x.com/Ferbin08/status/2075304460096544784). One user reports pi spending [about half the tokens of Codex](https://x.com/hxtxmu/status/2075309521220825249) for the same output on the same model. Armin also says pi is now [investing in grammar-constrained decoding and dynamic tool registration](https://x.com/mitsuhiko/status/2075242230789390488), arguing those areas have finally stabilized enough across providers to build stable APIs on.

- **Matt Pocock recorded the missing tutorial** ([post + video](https://x.com/mattpocockuk/status/2075218406266036236), 240K views): his skills repo hit 160K stars and 7.5M downloads without one, so this walks the whole flow end-to-end — `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement` → `/code-review` ([all skills here](https://www.aihero.dev/s/mhcZOr)). The new `/wayfinder` skill (deliberately excluded as "not entry-level"; tutorial in a couple of weeks) is generating its own buzz: one user describes it as a genuine break from the Research→Plan→Implement paradigm — ["your agent can now be both a PM and a developer"](https://x.com/N3sOnline/status/2075260831500312947) — though another [spent a whole day](https://x.com/itspers/status/2075248703112155383) watching it spawn dozens of GitHub issues without asking a single question, which Matt is treating as a bug report.

- **Matt's personal-wiki experiment is compounding** ([post](https://x.com/mattpocockuk/status/2075315723631497705)): every weekday he now gets a 15-minute generated podcast covering what flowed into his wiki from X, Discord, Slack, Gmail, and GitHub issues — doubling as a vibe check on the pipeline itself. Related aphorisms from his feed worth keeping: ["An agent is just a model, harnessed, in an environment"](https://x.com/mattpocockuk/status/2075149990658191668), and AI-written PRs/commits being easy to review is [an alignment problem, not a model problem](https://x.com/theo/status/2075165134691992029) — shared vocabulary from domain modeling makes commit messages dramatically more readable.

- **Thariq's one-liner** ([post](https://x.com/trq212/status/2075283841758183674)): "one of the core skills of agentic coding is reducing your unknowns."

## Quick Hits

- **swyx on AI-era SEO** ([post](https://x.com/swyx/status/2075376938676621752)): "whoever does AEO for @resend needs to get a raise, all the leading frontier models keep trying to use resend for emails even when I have existing transactional infrastructure already set up." Answer-engine optimization — getting your product to be the one models reach for — is quietly becoming a growth channel.

- **Codex housekeeping trick** ([LLMJunky](https://x.com/LLMJunky/status/2075425239102595471)): ask Codex to clean up your stale threads — traditional automations reuse the same title every run, so they're easy for the model to identify and sweep.

- **GPT-Live API design partners wanted**: Greg Brockman is [soliciting design partners](https://x.com/gdb/status/2075233835802071467) for OpenAI's GPT-Live API — creative new apps or integrations into existing products.

- **Cognition stakes out its lane** ([Jared Zoneraich, RT'd by LLMJunky](https://x.com/imjaredz/status/2075345646689587355)): "Cognition only cares about software engineering. We're not trying to build an AI God... just a really great AI Software Engineer" — a pointed contrast on the same day OpenAI pivoted its dev tool toward general work.

- **Compression claim to watch** ([post](https://x.com/0xSero/status/2075330642850496936)): a purported breakthrough running models "losslessly" on 13% of the usual hardware, with calls for someone to validate it with a full terminal-bench-2.1 trace. Extraordinary claims, no trace yet.

- **The Theo–Charlie Grahn saga continues** ([post](https://x.com/theo/status/2074997032218239060)): Theo reposted the year-old video that's still drawing takedown attempts, then reported [another copyright strike with identical content and timestamps](https://x.com/theo/status/2075037591272128522) — "Despite being informed that these are invalid and malicious. Willful ignorance. Probably illegal."
