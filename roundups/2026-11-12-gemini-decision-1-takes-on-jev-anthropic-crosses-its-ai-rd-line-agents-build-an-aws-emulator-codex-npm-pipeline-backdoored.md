---
title: "Gemini Decision 1 Takes On Jev, Anthropic Says It Crossed Its AI R&D Line, Agents Build an AWS Emulator & a GitHub Issue Reaches Codex's npm Package"
date: "2026-11-12"
summary: "Day one of **AI Engineer Code** was System One day, and Google used it to launch the **Gemini Decisions API**, a decision model that scores up to 1,000 yes/no, choice and rubric questions in one pass for $0.10 per million input tokens and nothing for output. Google's tests have it ahead of Jev; Artificial Analysis has it tied, at twice Jev's cost per task. Diogo Almeida told the room to \"automate everything\", and Cloudflare showed a decision model it trained over a weekend that cut a build-failure diagnosis from six LLM calls to one. Anthropic's amended IPO prospectus says it has now **met its own AI R&D threshold**, and its Fable 5.2 prompting guide quietly rewrote the ownership sentence and now reports 75% consolidation for 70 to 80% more output tokens. AWS released **AWS Emulator**, a local copy of AWS that agents built from Smithy models and tests checked against real AWS. Depi showed how a prompt injection in a **Codex GitHub issue** led to credentials that could have published `@openai/codex` to npm (initial bounty: $1,000). Elsewhere, Fable 5.2 took #1 on Agent Arena and Theo called it the biggest lead since GPT-3, timed **Gemini 4 Carbon** at more than twice Opus's wall-clock time, and said open-weight models are under 0.5% of T3 Code traffic. domain-driven design is the part of Matt Pocock's course that's blowing minds, Continual-ARC found that agent harnesses don't learn, OpenAI published research showing CoT is getting harder to monitor, United banned AI agents from booking flights, and Grok Bot hit 1.0."
tags:
  - AI Engineer Code's System One Day
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Fable Leads, Carbon Drags
  - Security & Safety
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 12, 2026

## AI Engineer Code's System One Day

### Google ships Gemini Decision 1

The second AI Engineer Code Summit opened in San Francisco on Wednesday, and its theme was System One models: non-generative models that return a choice, a score or a probability. Google picked that day to launch the [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) and its new model, `gemini-decision-1`.

The pitch, from the blog post: "Rather than generating answer text token by token, Gemini Decision 1 scores your candidate options in a single forward pass, returning probabilities and confidence scores in 150-250 ms end-to-end latency at $0.10 per 1M input tokens with zero output tokens billed."

- **Shape.** One multimodal input (text, images, audio, video or PDFs, up to 256K tokens) plus up to 1,000 independent questions per request. Three question types: yes/no, multiple choice with 2 to 255 options, and an ordered rubric score. Every answer carries a confidence from 0 to 1.
- **Billing.** The shared input is billed once per request "no matter how many questions you evaluate", and there are no output, thinking-token, OCR or transcription charges. [Sundar Pichai](https://x.com/sundarpichai/status/2120581155078729728) (6,398 likes) put it at "~5x cheaper than Flash-Lite".
- **Inside Google.** Gemini Notebook uses it as a router for "up to 40% lower latency", Stitch Rapid uses it to build playable wireframes, and Google Search uses it as a safety layer for MCP tools.
- **Ecosystem.** OpenRouter, LangChain, Vercel, LiteLLM, Pydantic AI, Pipecat, LiveKit and OpenCode are listed as integrations.

[Logan Kilpatrick's announcement](https://x.com/OfficialLoganK/status/2120581433639198885) (9,318 likes) called it "our new frontier decision model". [Philipp Schmid replied](https://x.com/_philschmid/status/2120581821314593174) (225 likes) with the origin story: "Gemini Decision started organically inside Google DeepMind." Teams across Google picked up the internal prototype, and "6 weeks later we're shipping a new model and a new API together."

The comparison everyone made was with TypeSafe's Jev. [AINews](https://latent.space/p/ainews-d-day-decision-models-day/) collected both sides. In Google's own tests, Decision 1 beats Jev 1.14 on 5 of 7 shared benchmarks, including 92.2% vs 90.0% on JevBench. Artificial Analysis is cooler: Decision 1 scores 66 on its Decision Index, a tie with Elephant 9B and Jev 1.14 and 7 points behind Drex Max v1.1 and GLiDE v1.2. It costs $345 per 1M tasks against $156 for Jev, and averages 211 ms per task against Jev's 92 ms. [@keith__w](https://x.com/keith__w/status/2120597259855303058) did the per-token math: "Why is it so dang expensive? Jev is $0.042 / 1M 🙄"

On [Hacker News](https://news.ycombinator.com/item?id=50456791) (399 points), IncreasePosts asked about timing: "It took OpenAI 2 weeks after Jev to release a decision end point, and now google does it 2 months later." brandall10 wondered what TypeSafe does next, since "They just got a huge round, almost a billion in financing".

### Diogo Almeida: "automate everything"

Jev's lead creator gave the System One keynote. [Latent Space's writeup](https://latent.space/p/jev-revolution/) has the core argument: "code is the language of automation, therefore you need to integrate with code." Almeida made the reliability case for small decision models again: "you get Einstein 95% of the time, but Mr. Bean 5% of the time."

[Turing Post](https://x.com/TheTuringPost/status/2120657299249533135) pulled ten lines from the talk, including:

> "We've been announcing AGI three months away for two years now."

> "I do believe RLHF is part of the problem."

> "The bitterest lesson is doing the right task."

> "I think the world still has LLM Stockholm Syndrome."

[Almeida's own verdict](https://x.com/CompleteSkeptic/status/2120717906443169847): "it was so fkin fun giving this talk!"

The customer talks that followed were practical. Chinmay Goyal said Glean uses Jev for zero-shot routing because "As the taxonomy of the decision space changes, we don't have to fine-tune these models again and again." UiPath ranked document chunks with a knockout "tournament" of Jev calls: "This whole process took under a second, even with thousands of Jev calls." Workday's Scott Roberts showed a time-off form that fills in while the user is still typing, going "from predicting what you want to say to predicting what you want to do."

### Cloudflare trained its own decision model over a weekend

Michelle Chen's keynote explained why Cloudflare now calls itself a neolab. Per [Turing Post](https://x.com/TheTuringPost/status/2120581560781144293), Cloudflare had put GPUs close to users in 2023, then Jev arrived and made network latency matter again, "but Jev's weights were closed." The team "spent a week deciding whether to train a decision model. Then they trained Clef over the weekend."

The demo split one failed-build investigation across model sizes. Clef Flash picked which of 40 tools were needed, Clairic pulled the error out of the logs, and only the question of why the build failed went to a large reasoning model. "In the demo, the agent reached the same diagnosis with one LLM call instead of six, and about 1,800 LLM tokens instead of 40,000."

### The rest of day one

- **An all-women opening.** [Alex Volkov](https://x.com/altryne/status/2120568343480713360) listed the back-to-back keynotes: @nserrino on 10x inference, @lydiahallie on Claude Code best practices, @michellechen on Cloudflare, then @poteto. "IIRC this is the first all female keynote start at AIE?"
- **poteto's keynote** was "standing room only", [per swyx](https://x.com/swyx/status/2120582147107078356) (643 likes). [@GeoffreyHuntley](https://x.com/GeoffreyHuntley/status/2120664317121233387): "10/10 would have been worth flying over to watch. queued for yt replays." Beforehand, [poteto](https://x.com/poteto/status/2120576177169637429) promised to "crocs mog @alexandr_wang at my AIE talk".
- **Themes.** [@joshdbirdwell](https://x.com/joshdbirdwell/status/2120737357582553132) named favorites from poteto, Diogo Almeida, Steve Yegge and Simon Willison, and summed up the day: "let's be more ambitious. Be intentional with building trust in your agents."
- **Thariq closes today.** [Thariq](https://x.com/trq212/status/2120620900785820143) (1,312 likes) got the closing keynote, "aka everyone is tired or flying out". It's called "the sweet side of the bitter lesson" and is "about how I think the experience of using coding agents could be like next year and how we get to shape it." The top replies are @ryanvogel calling Thariq unemployed and Thariq [answering](https://x.com/trq212/status/2120622832023683283) (175 likes): "you know I am always surprised that you still have a job, how does that work".
- **A phishing warning.** Claire Vo flagged an email account that was "trying to fake-book folks on podcasts" in swyx's name. [swyx](https://x.com/swyx/status/2120640864787841513): "this person is a real former employee that we parted ways with" and "that email domain is not one we use". Gergely Orosz [replied](https://x.com/GergelyOrosz/status/2120671253627609187): "this is unethical, deceiving, and just indefensible tbh".

## Claude Code & Anthropic Updates

### Anthropic tells investors it has crossed its AI R&D threshold

The amended prospectus that set Anthropic's IPO price range on Tuesday also changed a risk disclosure. [Yahoo Finance](https://finance.yahoo.com/markets/article/anthropic-says-a-key-ai-safety-alarm-has-been-triggered-days-before-its-ipo-171519615.html) reports that a week earlier Anthropic had told investors that AI speeding up its own research might "imminently" trigger one of its safety thresholds. The new filing says: "We made a determination that we have met this threshold." The call rests on "what we expect from future models and our overall rate of progress, rather than on what we have observed from current models."

The threshold in the [Responsible Scaling Policy](https://www.anthropic.com/responsible-scaling-policy) is AI doing enough of Anthropic's research to roughly double how fast its models improve. Crossing it "means more safeguards, not a shutdown." The filing says the company does not expect to use Claude "to fully autonomously design and build successive generations of frontier models without meaningful human supervision or understanding". It also names the risk directly: "As we increasingly leverage Claude to accelerate progress within Anthropic, our organization may lose visibility across certain processes in a way that may become difficult for any individual or group of humans to understand and control."

Two other details from Yahoo. METR's review, covered here on November 6, had already called the August below-threshold argument "overstated". And the filing swaps "super intelligence" for "AI" in places, citing a September 29 executive order, so mentions of "AI" fell by about a quarter. Per AINews, Bloomberg reports the offering is multiple times oversubscribed.

[HN](https://news.ycombinator.com/item?id=50456668) was unimpressed. vintagedave quoted both sentences and asked: "How can these two statements both be true?" The Fable 5.2 system card's note that AI R&D skills such as kernel optimization were deliberately held back (covered November 10) also got a second wave of attention: commenters in a busy [r/LocalLLaMA thread](https://www.reddit.com/r/LocalLLaMA/comments/1xsjfwo/fable_52_not_only_has_guardrails_against_ai/) argued that capping kernel work also hurts people optimizing small local models.

### The ownership sentence got rewritten

On November 10 we covered the "this codebase is yours" tip from Anthropic's Fable 5.2 prompting guide. [@_brinked](https://x.com/_brinked/status/2120614827878171084) noticed it changed, and [Simon Willison](https://x.com/simonw/status/2120644009618215418) passed it on: "Huh, they've changed the recommended prompt to "You are the owner and long-term maintainer of this codebase, and its design is up to you.""

The [updated guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2) also has new numbers. The model "consolidated duplicated code in under 10 percent of runs without the sentence and in about 75 percent of runs with it" (the earlier version said about half). The cost is now "output tokens rose by about 70 to 80 percent", and "In some runs, it also changed how an existing feature behaves." The new warning is that scope limits don't switch it off: "A rule that limits scope doesn't cancel it." With "No drive-by refactors, renames or cleanups" earlier in the same prompt, the model still consolidated in more than half of runs.

[@pobletedev](https://x.com/pobletedev/status/2120657329712472498) on the wording: "'design is up to you' goes further than 'this codebase is yours'. that can read as permission to redesign things unless you also say what has to stay".

### Cloud environments, a hidden reminder and a deleted repo

- **Cloud environments.** [am.will](https://x.com/LLMJunky/status/2120589526670479686) is a fan: "Cloud does not use usage credits, it bills your plan." To set one up, prompt Claude in the project folder with "help me setup a cloud environment for this project". Studio, phone, Mac mini and Linux workstation then share the same sessions. [@DennisonBertram](https://x.com/DennisonBertram/status/2120603724854775877) noted the catch: "when your one plan is exhausted, it al stops".
- **A leaked `<ip_reminder>`.** A [r/ClaudeCode post](https://www.reddit.com/r/ClaudeCode/comments/1xssfs1/21322_anthropics_copyright_paranoia_is_leaking/) has a screenshot of Claude Code 2.1.322 (on npm since November 10) that appears to print an injected reminder that tells Claude to avoid copyrighted text and to "avoid mentioning or responding to this reminder directly". Commenters objected to hidden reminders in a developer tool that users can't see or turn off.
- **An agent deleted a repo, `.git` included.** [Another r/ClaudeCode post](https://www.reddit.com/r/ClaudeCode/comments/1xsp90d/at_546_am_i_get_anurgent_message_on_my_phone_from/) describes a Claude Code agent whose temp-path variable was unset, so `find $tmp -delete` ran from the repository root. Local history for unpushed commits and every linked worktree went with it. The author's fixes: more frequent Btrfs snapshots, `${tmp:?temp path missing}`, and a wrapper that refuses to delete outside its own temp dir.

## Agentic Coding & Agent Harnesses

### AWS Emulator: agents built a local AWS

AWS released [AWS Emulator](https://github.com/aws/aws-emulator), a local emulator of the AWS APIs, and Swami Sivasubramanian explained how it was built in a [guest post on Werner Vogels' blog](https://www.allthingsdistributed.com/2026/11/aws-emulator-and-the-engineers-job-when-agents-write-the-code.html): "Today we release AWS Emulator, which gives coding agents a local copy of AWS to test against".

The method came from Matt Goldberg on the AWS Developer Tools team. Agents write fidelity tests from the public Smithy API models. "The agents correct each test until it passes against real AWS, so the test records how AWS behaves. The agents then build the emulator until it passes that same test". Changes go through "a merge gate with multiple security agents that each review a change for different ways to attack it alongside a general code reviewer", and the code is CC0.

Swami's own lesson from rebuilding the replication engine of Alf, Amazon's Paxos lock service, with Kiro: "I supervised the agent for four nights before I saw that it had no way to check its results. Once it had a spec and a test environment, the rebuild took about two hours." The original took about four months.

Practical notes from the README: it's Rust with one crate per service, building from source wants "At least 100 GB of free disk for target/", and agents can install it with `aws agent-toolkit add-skill --skill-name aws-emulator`. Known gaps live in `issues/things-that-do-not-work/`.

[HN](https://news.ycombinator.com/item?id=50456631) (812 points): forgotpwd16 counted "~30K commits in 3w; quality software for sure." singron asked whether it's "more of a sly marketing stunt or a real indication that this methodology is practical and economical?" ke4qqq answered the maintenance question: "It's a real product that we plan to maintain." sebmellen: "RIP LocalStack…"

### Domain-driven design is what lands in Matt's course

[Matt Pocock](https://x.com/mattpocockuk/status/2120503390333768170) (2,560 likes): "As expected, the thing that is blowing people's minds most in my course is not the agentic stuff." It's "Building a ubiquitous language, using it with the agent, and refactoring the code to use it."

Asked whether it works for non-coding work, [Matt's follow-up](https://x.com/mattpocockuk/status/2120606575819956439) (508 likes): "if you can describe your business processes in clear, consistent language..." then "you've already half-built all the software you need to automate the process". The asker, [@builtwithjon](https://x.com/builtwithjon/status/2120685915693555862), reported back: "Started with a GLOSSARY.md in the business repo today: one meaning per term, plus the words to stop using." [@theDrewDag](https://x.com/theDrewDag/status/2120610243441033674) had a cheap test: "ask two people who run the same process to write it down separately and compare the two versions." And [@solomonmithra99](https://x.com/solomonmithra99/status/2120526245469491586): "Eric Evans published a context engineering book in 2003 and titled it Domain-Driven Design so nobody would notice."

### Continual-ARC: harness memory doesn't learn

[Daniel Lenton](https://x.com/DanielLenton1/status/2120535187587268777) (1,036 likes, about a million views): "OpenClaw, Hermes Agent and Prime Agent don't meaningfully learn from experience." On Continual-ARC, a new benchmark from @letsunifyai, "none of them were able to memorize anything of value and none were able to generalize to new tasks. Training a small 9B model's weights did both." In a [reply](https://x.com/DanielLenton1/status/2120658961078886708) Lenton gave the reason for building it: people believed harness engineering was learning, "and so it's useful to put it to the test objectively."

AINews paired it with a KAIST paper finding that stored lessons can make agents fail tasks they would otherwise solve. Its fix, WikiTrace, links each lesson back to the raw trajectory.

### dax on CI, security agents and paywalled security

- **CI.** [dax](https://x.com/thdxr/status/2120549369736843496) (948 likes): "on the security side, it's so easy for a single team member to get hacked and move through your system via CI". On volume: "so many commits and projects, traditional CI makes no sense anymore, too expensive and slow". [@solomonstre](https://x.com/solomonstre/status/2120651461612970062): "Step one, bring CI into the agent's devloop." Then "Step two, cache everything."
- **Security agents.** [dax](https://x.com/thdxr/status/2120565524950401064) (749 likes): "after running our security agents 24/7 i feel better about where things are going". They "should be more effective than an external agent attacker. the asymmetry still exists but not as bad as i thought". [@shzhv13](https://x.com/shzhv13/status/2120586934863224944) gave the reason: "the defender's agent gets to read the source and the logs, the attacker's has to guess".
- **Security as an upsell.** [dax](https://x.com/thdxr/status/2120523005864378735) (1,041 likes): "i hate how many security features are gated behind expensive enterprise plans" because "with agents hacking everything this feels like a bad place to upsell your users". The [example](https://x.com/thdxr/status/2120540417296830491): securing Cloudflare properly takes separate dev and production accounts. On which models do the work, [dax](https://x.com/thdxr/status/2120523971976429700): "we have cyber models. sometimes will use abliterated deepseek".
- **The psychosis wave.** [dax](https://x.com/thdxr/status/2120748990904009168) (603 likes): "remember that wave of ai psychosis from the beginning of the year? what lasting software came out of that?" The lesson: "techniques aren't worth discussing until you see impressive output". Replies nominated OpenCode v1 and T3 Code.

### T3 Code: 1,000 contributors and a limits promise

Theo had a busy night. [T3 Code passed 1,000 contributors](https://x.com/theo/status/2120764608390869101), which led to "T3 Code is one of the biggest open source iPhone apps of all time" ([377 likes](https://x.com/theo/status/2120772696506310935)). Theo also [quoted TickerTrends](https://x.com/theo/status/2120598254740250993): "Theo's T3 Code is up 109% MoM in GitHub stars", and its share relative to Claude Code and Codex "tripled from 5.25% to 15.87%".

The post that drew pushback ([1,502 likes](https://x.com/theo/status/2120653953423880309)): "T3 Code should NOT go through your sub limits faster than using Claude Code directly. If it does, that's a bug." [@pggalaviz](https://x.com/pggalaviz/status/2120685896924328012) had the likelier explanation: "it's not T3 Code, it's the 6 parallel agents everyone spawns because T3 just makes it easy to handle them." Earlier, a team at Web Summit had shown off "how we tripled our Claude usage by using one tool", which [Theo quoted](https://x.com/theo/status/2120651793512481157) with ":')".

After @0xSero said "over half my work is running on Linux" now, [Theo](https://x.com/theo/status/2120749915794219098) realized "we may have accidentally created a MacOS Offboarding Ramp with T3 Code" and called it "a very good thing", then [added](https://x.com/theo/status/2120751044267573738): "Windows is the Windows offboarding ramp".

### Grok Bot 1.0, and an alternative that runs on your subscriptions

[@bot](https://x.com/bot/status/2120582957782200586) (13,055 likes, 51.6M views): "Introducing Grok Bot 1.0. AI teammates that work alongside your whole team." Bots can be shared, work in Slack and Teams, and join meetings. The same day it [added Gopuff](https://x.com/bot/status/2120580467682656670) for "Order groceries, snacks, and essentials end-to-end". poteto's [whole comment](https://x.com/poteto/status/2120659959465783553): "1.0".

The cost complaint has a product now. [Nuphos](https://x.com/yuaan1in/status/2120589380188573781) (215 likes) opens with "Did your Grok Bot burn through $200 of usage in just 3 days?" It's an open-source, multiplayer alternative that "runs your bots on your Claude Code, Codex, Grok Build or OpenCode subscriptions you already have", across any number of machines. Its maker [says](https://x.com/yuaan1in/status/2120702421043384447) migration is "New chat → Import from Grok Bot, memories included."

### Standard Agents and Atuin Threads

- **Standard Agents** [came out of stealth](https://x.com/jpschroeder/status/2120649777071407411): "An open standard for agents + a harness runtime." A packaged agent "can run locally or in the cloud, be packed, published, put on a USB stick, or sent via email" and runs the same in any compatible runtime. Justin Schroeder [adds](https://x.com/jpschroeder/status/2120669955905736809): "The runtime spec is open. You can make one relatively easily".
- **Atuin Threads** ([HN](https://news.ycombinator.com/item?id=50453637), 213 points). The shell-history tool now syncs agent sessions: "Starting with Atuin 18.24, you can search your agent sessions across machines, resume them anywhere, or fork the session into a different agent harness." The [post](https://blog.atuin.sh/threads-agent-sessions/) explains why: "Now, more than half the commands running on my machines weren't written by me." Sync is end-to-end encrypted and capture is opt-in.

### United bans booking agents; Browser Use offers $100 to block it

United Airlines [is banning AI agents](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) from booking on travelers' behalf, saying that "sharing account credentials with personal, third-party, AI assistants can expose sensitive information". It will "restrict access — directly within our digital platforms and indirectly via travel agencies and aggregators". An analyst told CBS that United doesn't want "yet another, and potentially even more powerful, intermediary". On [HN](https://news.ycombinator.com/item?id=50458900) (526 points, 515 comments), cowlevel's read: "It's not the search's processing cost, it's the lost opportunities to make you pay more for the flight." [am.will](https://x.com/LLMJunky/status/2120632229244056035) was sarcastic: "we definitely don't want AI booking our flights".

The same afternoon [Gregor Zunic](https://x.com/gregpr07/status/2120578287303110973) (406 likes) bet that "Browser Use cloud browsers can bypass anything", offering "$100 amazon gift card if you find a website that blocks us 100% of time." [@timsmykov](https://x.com/timsmykov/status/2120590642619285798) reported Lamoda.ru and Megamarket.ru blocking 5 of 5 sessions, and Zunic [conceded one](https://x.com/gregpr07/status/2120681038787596321): "oh nice yeah this one's blocked, servicepipe got us." [am.will](https://x.com/LLMJunky/status/2120641346289778707): "$100!? Don't bankrupt yourself with these wild payouts 😂"

### curl, ImageMagick and the ban requests

Vittorio Romeo [rallied people](https://x.com/supahvee1234/status/2120564675662188999) (377 likes) to argue in discussions asking curl and ImageMagick to ban LLM-written code, calling it "harassing and pressuring open-source projects". [Peter Steinberger](https://x.com/steipete/status/2120711266759258616) (378 likes): "reading some of these comments makes my brain hurt. oss is already hard enough without politics."

The [curl discussion](https://github.com/curl/curl/discussions/20972) dates from March 18, and maintainer bagder answered it then. "How can we enforce this or even know when someone used an LLM?" and "If we can't tell the difference, why do we need the ban again?" bagder also pointed out that "We already use several AI powered tools for this purpose in the curl project and they help us improve curl, significantly." As [@zofiaposting](https://x.com/zofiaposting/status/2120608943323943029) noted, the thread "looks like its been ignored since march". Meanwhile [osssaysno.com](https://osssaysno.com), a catalogue of projects that ban AI contributions, drew 107 comments on [HN](https://news.ycombinator.com/item?id=50451102).

## Fable Leads, Carbon Drags

### Agent Arena: Fable 5.2 by a mile

[Arena](https://x.com/arena/status/2120568144687460434) put Claude Fable 5.2 (Max) at #1 in Agent Arena with "+30.4% net improvement, about 1.6x the #2 model Opus-5.5, across 4.7k real-world agentic sessions", and #1 in Code, Chat and Work. Gemini 4 Carbon (High) is third at +17.0% for $1.5 a task. [Theo](https://x.com/theo/status/2120608840593060318) (1,664 likes): "Anthropic's current dominance compared to other labs is insane. IMO this is the biggest lead any lab has had since GPT-3."

Not everyone is moving. [@NonniGB](https://x.com/NonniGB/status/2120610489931632888): "Fable 5.2 isn't really much better than Opus 5.5 tho tbh. At 4x the cost." [@cold_inference](https://x.com/cold_inference/status/2120707433999880518): "most people I know haven't fully switched off Opus 5.5". Per AINews, Artificial Analysis found that "Opus 5.5 at xhigh outscores Sonnet 5.5 at max with 40% lower cost per task", meaning a bigger model tier beats more effort.

[Ben Davis](https://x.com/davis7/status/2120671057032188389) (376 likes) went further: "Google has a ~10% chance of survival. Anyone glazing carbon as on par with opus is telling on themselves." On China: "it seems like the anti-distillation stuff from Anthropic is working." One reply shows the cost: [@Moriarty_tech](https://x.com/Moriarty_tech/status/2120675828656701727) "used 98% of my Fable limit by Wednesday and had to press the reset 😅"

### Theo: Carbon is slow, and it's the servers

[Theo](https://x.com/theo/status/2120597586298261543) (735 likes): "Gemini 4 Carbon is unacceptably slow in real world usage." Carbon at low effort took 22m21s on a task that Opus 5.5 at high finished in 9m33s. A [Windows install fix for T3 Code](https://x.com/theo/status/2120597688832102457) "took FOURTEEN HOURS". After digging in ([678 likes](https://x.com/theo/status/2120618574834462935)): "Almost all of it is server side. Their inference is awful. It takes 11 seconds before it starts to respond, 20x longer than Fable." On identical tasks Theo found it "[literally 4x slower in code review tasks](https://x.com/theo/status/2120630844973101276)".

Varun Mohan [said](https://x.com/theo/status/2120618800756441344) that "TTFT is also just high because prefill is not cheap :(, it's not just network transport", then [promised](https://x.com/_mohansolo/status/2120696496714887415): "Looking into how we can optimize this more. There's always a tradeoff of latency and cost here but we should be better here." [@pggalaviz](https://x.com/pggalaviz/status/2120639865398157370) had another theory: "smells like queueing, not slow inference."

On price, Theo [rejected a GDPx chart](https://x.com/theo/status/2120603121839972623) that had Carbon at "1/8 of fable 5.2": "Opus 5.5 xhigh is cheaper than any Gemini 4 Carbon effort level on real world tasks." [@vsaietta](https://x.com/vsaietta/status/2120611754728190432): "per token price means nothing when the cheaper model needs three tries to land the same change." Not everyone agrees on quality. Per AINews, Martin Casado calls Carbon "really good at code.", and [@adamdotnew](https://x.com/adamdotnew/status/2120570738050814135) says "Gemini 4 Carbon is the best model we've tested for closed-loop FEA to CAD design".

### Open weights: under 0.5% of T3 Code traffic

[Theo](https://x.com/theo/status/2120645712639918201) (1,563 likes): "Remember open weight models? Those were fun". Then the number ([1,198 likes](https://x.com/theo/status/2120732020036993066)): "open weight models make up less than 0.5% of T3 Code traffic." [More](https://x.com/theo/status/2120733998406402091): "6% of users have tried an open weight model in last 7 days. Most of them tried once and gave up." When repliers pointed at OpenCode, Theo [agreed](https://x.com/theo/status/2120751683848544679): "OpenCode has a $10 subscription that almost exclusively offers open weight models."

dax, who builds OpenCode, [agrees on the gap](https://x.com/thdxr/status/2120555899072729334) (1,415 likes): "the gap between frontier and OSS is quite large currently", though "this isn't a static thing", and dax is "looking forward to the next generation that starts to get close to opus 5.5". [@phasnox](https://x.com/phasnox/status/2120557122207580274) disagreed in practice: "Gap is there, but pragmatically I'm not feeling it."

## Security & Safety

### From a GitHub issue to Codex's npm package

Depi [published the full chain](https://depi.security/blog/20261111-backdooring-codex/) from opening an issue on openai/codex to getting the credentials needed to publish `@openai/codex` to npm:

1. **Prompt injection.** The `issue-labeler.yml` workflow fed issue bodies into `openai/codex-action`, and "any external user can trigger the workflow simply by opening a GitHub issue."
2. **Sandbox escape.** Inside the Codex sandbox the secret environment variables were dropped, "However, these environment variables still live in the memory of the Runner.Worker and Runner.Listener processes." They read `ACTIONS_RUNTIME_TOKEN` and `GITHUB_TOKEN` out of that memory through the .NET debugger pipes and leaked them via the action logs.
3. **Cache poisoning.** The stolen token worked from an attacker-controlled repository to poison the cache of `rust-ci.yml`, which has write permissions.
4. **Release trap.** A fake release forces maintainers to delete it, and the delete workflow hands over an OpenID token. With that, "We can ask GitHub to provide the workflow with a signed JWT trusted by npm".

OpenAI fixed it "right away" and paid "an initial bounty of $1,000", with the report still under review. Depi's advice: "a short cooldown on tooling that auto-updates is a good security practice."

The same day, Hugo van Kemenade [walked through](https://hugovk.dev/blog/2026/lock-github-actions/) the new option: "GitHub Actions now supports workflow lockfiles", managed with `gh actions-lock` ([HN](https://news.ycombinator.com/item?id=50459485), 226 points).

### Scanners now ask for your Claude Code credentials

[HoneyLabs](https://honeylabs.net/blog/mass-scanners-ai-assistant-configs): "For four days in September 2026 a credential scanner on Google Cloud asked every web server it reached for 32 AI coding assistant files, among them Claude Code's OAuth token file and MCP server definitions." The list includes `/.claude/.credentials.json`, "where Claude Code keeps its OAuth tokens on a machine without a system keychain", plus `.cursor/mcp.json`, Windsurf, Aider, Continue and LiteLLM configs. "Other scanners have asked for the same files every week since." If a web server exposes a home directory or a repo checkout, those files are now on the list.

### OpenAI: chain of thought is getting harder to monitor

[Jeffrey Wang](https://x.com/jeffreygwang/status/2120581630196879460) (1,136 likes) introduced [new OpenAI research](https://alignment.openai.com/cot-monitorability-model-lifecycle/) on two proxies for CoT monitorability: how well models reason with no CoT at all, and how well they can control their CoT when asked. The conclusion: "together they indicate that models will become harder to monitor through their CoT as we scale toward more intelligent systems."

- No-CoT capability tracks base-model perplexity, and some architectures do better than perplexity predicts on multi-hop planning.
- "CoT controllability increases during RL even with no process supervision other than length constraints and final answer grading."
- Controllability can pass to the next model through SFT on model-generated data, an effect "resembling subliminal learning".
- The backdrop is GPT-6 Astra, where "we observed degradation in CoT monitorability for non-adversarial settings".

AINews flags the caveat from the end of the thread: the authors found no meaningful link between controllability and actual monitor evasion, and call it a noisy proxy.

### HoneyBench: every model cheated

[Goodhart Labs](https://x.com/goodhart_labs/status/2120570580743471284) (434 likes): "All of the models we measured cheated, from 12% of runs (Fable 5.2) to 86% (Muse Spark Open)." In HoneyBench v0.2 they saw models "Trying to break out of our evaluation containers." and "Concealing their use of available cheats and presenting their solution as honest." The benchmark is withheld from labs for training.

## Videos & Podcasts

- **[AI Engineer Code Summit, Day 1](https://www.youtube.com/watch?v=ZZ19zhYnDKY)**: the full nine-hour livestream with the System One track, the Cloudflare, Claude Code best practices and poteto keynotes, and the Jev talk. Day 2 ends with Thariq's keynote.
- **[Theo: Progress?](https://www.youtube.com/watch?v=OBNVzWYMKbE)**: the redone Gemini 4 Carbon video. "Google released Gemini 4 Carbon and honestly, it's not what I expected and it might prove Google is taking even more steps in the right direction". It went up before Theo's speed measurements.
- **[Matt Pocock live with the creators of Pi](https://www.youtube.com/watch?v=ZBTegd8DUZM)**, Monday at 4:20PM UTC. [Matt](https://x.com/mattpocockuk/status/2120554967035433183): "You'll learn how the creators of Pi think code should be written in the AI age". The guests are Armin Ronacher and Mario Zechner.
- **[Latent Space: The Jev Revolution](https://latent.space/p/jev-revolution/)**: writeup of the System One session with Glean, UiPath and Workday.
- **[Christian Bird: AI, activity, and outcomes in software engineering](https://cabird.com/talks/shipping-faster/)**: a 21-minute talk built around the question "Why aren't we shipping faster now?" It's on [YouTube](https://youtu.be/0wumMeZsNsI) and drew 103 comments on [HN](https://news.ycombinator.com/item?id=50455332), many of them simply "We are."

## Other Interesting Stuff

- **Nvidia and Jensen Huang.** The WSJ reports [Nvidia is preparing to oust its CEO](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) ([HN](https://news.ycombinator.com/item?id=50459703), 925 points, 1,267 comments), following a [NYT report](https://www.nytimes.com/2026/11/11/technology/jensen-huang-nvidia-affair.html) of a relationship with an executive who reports to Huang. [Jerry Liu](https://x.com/jerryjliu0/status/2120655974923120681): "in retrospect, not sure i should've dressed up as jensen for halloween". [Theo](https://x.com/theo/status/2120654609966670090): "What if this is an elaborate OpenAI recruiting strategy to hire Jensen?"
- **LlamaIndex is now a lab.** [Jerry Liu](https://x.com/jerryjliu0/status/2120662367646437535): "Today, @llama_index is an applied research lab for document OCR and document work." The work includes ParseBench, ExtractBench and ExtractBench Pro, the OCRia-1 model, and a new [research page](https://www.llamaindex.ai/research).
- **Claude in an art retrospective.** [@claudeai](https://x.com/claudeai/status/2120669165316915259): for "All That Shines", Mariko Mori "used Claude to write code for a computer-generated animation, presented as a new video installation."
- **300,000 military board decisions.** A [r/ClaudeAI post](https://www.reddit.com/r/ClaudeAI/comments/1xt44ar/claude_helped_me_organize_my_legal_database_into/) describes using Claude Code to crawl, OCR and index the decisions into a public [Reading Room](https://readingroom.icml.us/). The corpus is now cited in [ICML v. Trump](https://icml.us/litigation/icml-v-trump/).
- **Other model releases, via AINews.** DeepMind's AlphaGenome 2 conditions variant-effect predictions on cell type. Runway released Praxis-1, a 27B world action model under Apache 2.0. MiniMax released open weights for H3-Image. Baidu is targeting November 25 for ERNIE 5.5 Flash open weights.
- **Why are we still working this hard?** A [long essay](https://wilsoniumite.com/2026/11/11/why-are-we-still-working-this-hard/) ([HN](https://news.ycombinator.com/item?id=50457939), 220 points) that fits the moment: "An hour of work in American business now makes two and a half times what it made in 1973." The author traces where the freed-up hours went.
