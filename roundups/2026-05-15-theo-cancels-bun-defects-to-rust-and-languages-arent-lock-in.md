---
title: "Theo Cancels, Bun Defects to Rust & 'Programming Languages Aren't Lock-In Anymore'"
date: "2026-05-15"
summary: "Twenty-four hours after Anthropic announced a metered programmatic credit, the backlash compounded: Theo Browne pinned **\"I cancelled my Claude Code sub. I give up.\"** (184k views, 1.5k likes, replies overwhelmingly *\"me too\"*), and Matt Pocock retitled his work — *\"How it started: Claude Code For Real Engineers. How it's going: AI Coding For Real Engineers.\"* On the technical side, the day's bigger story was **Bun moving from Zig to Rust**: Jarred Sumner's PR passes 99.8% of the existing test suite at roughly a million lines, Lee Robinson called it *\"total Rust victory,\"* Armin Ronacher said *\"this is impressive\"*, and Mitchell Hashimoto used the moment to make a sharper point — *\"programming languages used to be LOCK IN, and they're increasingly not so… Bun has shown they can be in probably any language they want in roughly a week or two. Rust is expendable.\"* Peter Steinberger shipped a new TypeScript filesystem-security library inside OpenClaw plus CodexBar 0.26.0 (Kiro, Antigravity, OpenRouter, Kimi), OpenAI brought Codex into the ChatGPT mobile app as a remote-control layer, and the Hejlsberg interview on TypeScript-as-most-used-language-on-GitHub doubled as a quiet *\"languages are still a 10-year play\"* counterpoint that Geoff Huntley promptly rejected as *\"old-world thinking, pre-AI.\"*"
tags:
  - Claude Code & Anthropic Updates
  - Bun, Rust & the Polyglot Rewrite
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI Updates
  - Skills, Workflows & Dev Tools
  - Industry & Misc
---

# AI Roundup — May 15, 2026

## Claude Code & Anthropic Updates

### Theo pins it: "I cancelled my Claude Code sub. I give up."

The second-day fallout from Wednesday's programmatic-credit announcement (see [yesterday's roundup](2026-05-14-anthropic-meters-programmatic-mythos-cyber-and-pocock-regrills.md)) compounded rather than cooled. [Theo Browne pinned a one-liner](https://x.com/theo/status/2055022768262144102) on Thursday night that hit **184k views, 1,517 likes, 1,200+ replies**:

> I cancelled my Claude Code sub. I give up.

What's notable isn't the post — it's the replies. A scroll-through shows the ratio inverted from his usual contrarian threads: roughly 70% of repliers attaching their own cancellation screenshots ([@thegenioo's rough math counted ~350 visible cancellations](https://x.com/thegenioo/status/2054919696663663009)), with familiar names ([Uncle Bob Martin](https://x.com/unclebobmartin/status/2054970327592042661): *"I just cancelled my Claude account. I've been using codex, and haven't used Claude in several weeks."*) showing up among the screenshots. The most-cited critical reply, from [Chen Avnery](https://x.com/MindTheGapMTG/status/2055066541276754303), pushed back structurally:

> The frustration is valid but this is a dependency problem, not a tool problem. If one provider's pricing change breaks your entire workflow, you built a vendor lock-in not a system. Provider-agnostic constraint files survive any subscription change.

[Yassine Bouanane's defence](https://x.com/ybouane/status/2055042252779458653) of the policy — *"the subscription is heavily subsidized to promote their apps. It's like asking them to give their product for free at this point"* — was the highest-engagement *pro*-Anthropic reply, and even it accepts that subscription Claude has always been a loss-leader marketing channel. [Paul Wakim's longer reply](https://x.com/thepaulwakim/status/2055039370571415867) drew the same conclusion from the other direction: *"With their sights set on $100B run rate from giant companies with giant contracts, why would they care to support the tech enthusiast? They have crossed the chasm."*

Theo's $10-per-cancelled-screenshot OSS bounty from yesterday is presumably already at cap. The mood in his thread is migration: Codex, Conductor, T3 Code, opencode + a Minimax plan, or — for the cautious — *both* subscriptions running in parallel.

### "How it started / how it's going"

[Matt Pocock's quiet caption](https://x.com/mattpocockuk/status/2055177489538756984) on the same shift:

> How it started: Claude Code For Real Engineers
> How it's going: AI Coding For Real Engineers

He's now telling subscribers his course material is rebranding away from Claude Code specifically. He'd already signalled *"time to try Codex"* in yesterday's threads; the curriculum rename is the operational follow-through. His [`/improve-codebase-architecture` skill](https://x.com/mattpocockuk/status/2054922772573303293) will also start outputting HTML — picking up the [Karpathy "structure as HTML"](https://x.com/karpathy/status/2053872850101285137) thread that [trq212 has been pushing for a week](https://x.com/trq212/status/2052811606032269638).

### Anthropic's silence-from-the-top

One striking absence: there's no public Anthropic engagement under any of the high-profile cancellation threads. Boris Cherny ([@bcherny](https://x.com/bcherny)) hasn't tweeted since yesterday's Mythos Preview post. [Thariq ([@trq212](https://x.com/trq212))](https://x.com/trq212) has only retweeted the +50% weekly-limit sweetener. The community read of the silence is unforgiving — Theo's quote *"any statement from an Anthropic employee is a lie on a timer"* is now circulating as a meme.

## Bun, Rust & the Polyglot Rewrite

### Bun moved from Zig to Rust

The day's biggest technical story. [Jarred Sumner's PR](https://github.com/oven-sh/bun/pull/30412) ports Bun's roughly one-million-line Zig codebase to Rust — and passes **99.8%** of the existing test suite. [Lee Robinson's read](https://x.com/leerob/status/2054920768593514625) (55k views, 958 likes):

> Bun moved from Zig to Rust. Total Rust victory. I've been tracking the move to Rust in the JS ecosystem since 2021. It's actually wild.

He updated [his Rust-in-JS-tooling map](https://leerob.com/rust) with the new milestone and noted that *"Jarred is working on a blog post — casual 1 million LOC PR."* Pnpm followed the same day: [zkochan merged the pnpm Rust rewrite into the main pnpm repo](https://x.com/zkochan/status/2054966567692099943), now developing TS and Rust in parallel. *"Anotha one,"* [Lee Robinson noted](https://x.com/leerob/status/2054981087957291181), DJ Khaled-voice.

The most-quoted skeptical reply, from [Rezo Bolkvadze](https://x.com/t64_bv/status/2054927643166851089) (1.3k views), is the only thing that has to be true for the story to fall apart:

> The issue with such a rewrite is not "unsafe" code or vulnerabilities or bad code. It's… semantics. Believing that tests passing mean that there are no regressions introduced. I can't imagine Claude porting 1M lines of code and not introducing *behavioral* regressions. There is just no fucking way.

The counter, from [Nikil Kuruvilla](https://x.com/NikilKuruvilla/status/2054923832910123104), is the *spray and pray* defence: high test coverage *plus* a [Mythos audit](https://x.com/bcherny/status/2054617810253615147) for vulnerabilities. *"If Mythos digs up bugs that hid for 20 years in legacy code, a fresh rewrite isn't going to slip past it."*

Other replies fixated on the LLM-friendliness angle: [@C8Luna](https://x.com/C8Luna/status/2054928335298347063): *"The strict rules of Rust plus excellent diagnostics make it a home run with LLM."* [Tessa Archer](https://x.com/scifi_tessa/status/2055032423314804790): *"Coding agents producing correct Rust because the compiler rejects anything else. Type systems as the new code review."*

[Armin Ronacher's one-line take](https://x.com/mitsuhiko/status/2054865717007089974) (162k views, 1.4k likes):

> Say what you want: this is impressive.

He followed up that *"we need these types of experiments, I wouldn't jump to conclusions right now"* — pushing back against the **dan_note** reply (*"…and dangerous"*). Notably, Armin is the same person who [yesterday argued Pi wouldn't make sense in Rust](https://x.com/mitsuhiko/status/2054519228456198565) because extensibility matters more than memory safety for that workload.

### Mitchell Hashimoto: "Rust is expendable"

The sharpest framing of the moment came from [Mitchell Hashimoto's blog post](https://mitchellh.com/) (quoted by [@simonw](https://x.com/simonw/status/2055060328048885788), 31k views), and it's worth quoting at length:

> It isn't unexpected that the focus of the Bun Rust rewrite is on the anti-Zig side more than anything, since the internet loves to hate. What is unexpected and unfortunate is that leadership within Bun hasn't tried to steer the conversation away from that at all.
>
> On the interesting side is how fungible programming languages are nowadays. **Programming languages used to be LOCK IN, and they're increasingly not so.** You think the Bun rewrite in Rust is good for Rust? Bun has shown they can be in probably any language they want in roughly a week or two. **Rust is expendable.** It's useful until it's not, then it can be thrown out. That's interesting!
>
> There's been a lot of talk about memory safety and no doubt Rust provides more guarantees than Zig. But I'd love to see a better analysis of *why Bun in particular* suffered so much rather than take the language-blame path. How could engineering as a practice been more rigorous to prevent this? What were the largest sources of crashes other programs should watch out for?

Simon Willison's add-on observation was that this generalises beyond the runtime story: he's also seen *"how cheap it can be to port native mobile apps to React Native using coding agents, and then port them back again later if it turns out not to work out."* [David Moosmann's reply](https://x.com/damoosmann/status/2055125717751337361) captured the cultural shift: *"Picked Flutter because the AI suggested it. No attachment. If a new model said Swift was a cleaner fit tomorrow, I'd switch the same week. The framework was never mine to begin with."*

Alessandro De Blasis added [a thought worth holding](https://x.com/polyMatto/status/2055152597141434643): *"Bun might one day go back to Zig after a fling with Rust revealed where the bugs were hiding and in the meantime Zig evolved further. The point is that these things are now possible."*

If you want a counter-example, [trq212 sounded almost rueful on Sunday](https://x.com/trq212/status/2053559397654348159): *"Jarred tried rewriting Bun in Rust and it passes 99.8% of the existing test suite — we're not being ambitious enough."*

## Agentic Coding & Agent Harnesses

### Steipete ships fs-safe.io — extracted TS filesystem hardening

[Peter Steinberger's biggest release of the day](https://x.com/steipete/status/2055179961535705327):

> The latest release of OpenClaw is the first one that ships with our new TypeScript security hardening file-system lib. Previously, this was a grown mess of ad-hoc hardening which was hard to maintain, slow and inconsistent. [fs-safe.io](https://fs-safe.io) increased some file ops by 10x.

In the [follow-up](https://x.com/steipete/status/2055180157619479007) he added: *"It's also kinda nuts that this just didn't exist in the TypeScript ecosystem yet."* The thread is small but the engagement is high-signal — multiple replies asked the right question: *"Can this be used to allow an agent to write to specific locations outside its workspace without going full YOLO mode?"* MIT-licensed, designed for agent harnesses where path-traversal and symlink attacks are realistic threats. Worth a look if you're building anything that runs an LLM-driven workflow against a filesystem you care about.

Same day he shipped [**CodexBar 0.26.0**](https://x.com/steipete/status/2055163690790334865): Kiro, Antigravity, OpenRouter, and Kimi added to the model menu, calmer keyboard nav, better Codex/Claude limits + cost scoping, named macOS assets and Homebrew fixes. The reply most likely to age well, from [Agentic Glacius](https://x.com/temhandev/status/2055170508845715957): *"Per-runtime cost scoping is the right primitive for multi-model practice. Global cost tracking tells you the bill. Per-tool scoping turns it into a budget you can allocate. Cost becomes an agent input."*

### Steipete's `codex /review` loop skill

A useful smaller piece from yesterday: [a skill that runs codex `/review` in a loop until there's no booboos](https://x.com/steipete/status/2054850632067019173) (166k views, 2.2k likes). Pairs nicely with crabbox for the *find-and-fix* sub-loop, leaving you to use BRAIN as master model on architecture. Steipete's recommended model for the loop is *"5.5 high fast"* — i.e. GPT-5.5 high effort, fast mode.

He also posted [a more triumphant note today](https://x.com/steipete/status/2055178254877700450): *"This is a game changer. With codex autoreview and crabbox I can now go from issue to fix almost fully automated. (yes it does burn lots of tokens)."*

## Codex & OpenAI Updates

### Codex now in the ChatGPT mobile app

[OpenAI announced Codex preview in the ChatGPT mobile app](https://x.com/OpenAI/status/2055016850849993072) (2.68M views, 17.6k likes). The framing is *remote control, not relocation*: start new work, review outputs, steer execution, approve next steps from your phone — *"Codex will keep running on your laptop, Mac mini, or devbox."* [Ray's read](https://x.com/theRayW/status/2055171192571695435):

> OpenAI just put a mission control for codex in my pocket. Being able to monitor diffs, approve terminal commands, and check screenshots of my devbox while away from the desk is the real agentic unlock.

[@_onecookie's quieter framing](https://x.com/_onecookie/status/2055116251316576589) is the more interesting one: *"Coding agents are becoming long-running remote workers, and the phone is turning into the approval steering layer."* Pair this with [Steipete's Tailscale-to-data-centre Android phone setup from yesterday](https://x.com/steipete/status/2054647734418756012) and you see the same architecture from both sides.

## Skills, Workflows & Dev Tools

### Matt Pocock on the shared-language refactor

A small but generally useful post from Pocock on `/grill-with-docs` — and an old DDD problem:

> One painful thing about /grill-with-docs (and shared language in general) is the moment you realise you've been using the wrong word for something. DDD-folks, do you ever do a refactor just to change the name of something throughout the codebase? In my case, it's a feature in my video where I break the video into sections. I call them ClipSections, but obviously they should be called Chapters. Worth a refactor?

[The consensus reply](https://x.com/andrewcairns/status/2055183596239929570): *"Yeah, your mental model has now shifted. You've uncovered a concept of the domain that was previously expressed in a different way. The constant mapping in your head builds up. You don't need that cognitive fatigue. And it's easier than ever to do that refactor."* In other words: in a world where renaming-across-codebase is a 30-second agent task, naming debt has gone from *"acceptable"* to *"cheap to fix immediately."*

### swyx: blogs die when they come from "the ___ team"

[A throwaway-but-true post from swyx](https://x.com/swyx/status/2055079344632926603) (5.3k views, 90 likes):

> Blogs die when they come from "the ____ team" instead of named individuals. With great ownership comes great accountability.

[The replies sharpen it](https://x.com/pagents_22/status/2055104008243593237): *"The Substack era didn't change the platform. It changed the unit of trust. The 'team' byline is an institution wearing a name tag."* And [a relevant follow-on from Shinka](https://x.com/ShinkaIoT/status/2055086476774498389): *"Once AI drops the cost of corporate content to zero, those faceless team blogs will just drown in noise. Individual skin in the game is going to be the only filter we have left."*

### swyx: the Raycast v2 deep-dive as devtools-marketing template

In a [separate post](https://x.com/swyx/status/2054938522034020816) (29k views), swyx praises [Raycast's v2 technical write-up](https://ray.so/v2-deep-dive) as a template every devtools company should copy — *"tell users the care that goes into the product, tell hires there's SOTA work here, tell competitors to give up, give back to community."* His side note is the interesting one: most companies don't write these because *"they don't actually have sufficient depth, or aren't sufficiently good at notetaking/systematic about problem-solving."* In the agentic era, this is the same argument as Mitchell Hashimoto's *"steer the conversation"* point about Bun: if you don't write the deep version, the internet writes a shallow one for you.

## Industry & Misc

### Hejlsberg's "10-year language" claim — and Geoff Huntley's *"old-world thinking, pre-AI"* response

[Armin Ronacher posted a fanboy thread](https://x.com/mitsuhiko/status/2055011053537206422) (19k views) about the [Pragmatic Engineer episode with Anders Hejlsberg](https://newsletter.pragmaticengineer.com/) (creator of Turbo Pascal, Delphi, C#, TypeScript). The four highlights worth knowing:

1. **"10x better for 1/10th of the price" is a proven winner.** Turbo Pascal sold for $49.95 when competing compilers cost $500.
2. **C# might not have existed without a famous court case.** Microsoft originally hired Hejlsberg for Visual J++; the Sun-vs-Microsoft lawsuit forced a new language.
3. **TypeScript exists because Hejlsberg refused to build Script#.** The Outlook .com team wanted a C#-to-JS cross-compiler; Anders argued *"fix JavaScript instead"*.
4. **"Designing a programming language is a 10-year play."** Version one has issues. Version three is when it starts to be great. Then you have to convince people.

[Geoff Huntley's pushback in the replies](https://x.com/GeoffreyHuntley/status/2055012994527146028): *"I love the guy but he's wrong on this point. 'Designing a programming language is a 10-year play' — that's old-world thinking pre-AI."* In context with the Bun-to-Rust story above, this isn't trolling — it's the same observation Mitchell Hashimoto made. The half-life of "language matters" arguments may now be measured in releases rather than decades.

### swyx: "Everything is Conductor"

[swyx's *AINews 15 May*](https://www.latent.space/p/ainews-everything-is-conductor) frames [Conductor](https://conductor.build) as the central piece of the new agent-orchestration stack. Less a single product than a category nominee — the *"GitHub for parallel agent sessions"* role. Useful read if you've been wondering what the *"agent harnesses converge"* end-state looks like.

### Theo's AI x Healthcare comment

[Swyx flagged a vulnerability gap](https://x.com/swyx/status/2055071896920879236) worth noting: *"One of the most important applied AI fields is in AI x Healthcare, but nobody on my team knows how to cover it. Very fortunate to have [@jacobeffron](https://x.com/jacobeffron) on the [Latent Space podcast]."* A reminder that the application-layer story for frontier models is still under-told outside coding, and that the *"agent index"* type benchmarks ([Artificial Analysis](https://x.com/ArtificialAnlys/status/2053865095076438427)) only cover the loudest 20% of use.
