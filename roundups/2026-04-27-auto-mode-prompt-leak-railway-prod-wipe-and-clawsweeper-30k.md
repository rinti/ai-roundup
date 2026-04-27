# 2026-04-27 — Auto Mode's Hidden Prompt, Railway Agent Wipes Prod & ClawSweeper Hits 30K PRs

## Auto Mode is silently injecting "be more AFK" into the system prompt

Matt Pocock spent the weekend chasing a regression in his `/grill-me` and `/domain-model` skills — Opus 4.7 was jumping straight to implementation instead of waiting for alignment. He figured out why: **Claude Code's Auto Mode doesn't just handle permissions, it injects extra instructions into the system prompt to make the model behave more autonomously**, and those instructions override the precise wait-for-input behavior his skills are built around.

> "Turns out Auto Mode doesn't just handle permissions. It also injects instructions into the system prompt to make it more AFK. This is dumb, it shouldn't do that — it's messing with all my skills. I guess that's the cost of not owning the whole flow." — [@mattpocockuk](https://x.com/mattpocockuk/status/2048387101981323409)

The replies turn into the harness-ownership debate of the week:
- **Mateusz Majchrzak** confirms you can simply *ask* Claude what's making it skip questions and it'll cite the auto-mode instructions verbatim.
- **David J. Garcia** found a workaround: have your skill explicitly mark itself as a `**BLOCKING REQUIREMENT**` that overrides mode-level directives.
- **Vincent Dal Maso** notes Auto Mode runs a separate model to gate every tool call, which "burns through your tokens".
- **Theo** chimes in with "Join us 😈" — pitching Pi (open-source CLI you fully own).
- **Al Hinds, sohit kumar, Sepanta** all confirm their skill-based helpers stopped working.
- The follow-up nuance: Pocock concedes it's a defensible product call ("if it didn't try to make it more AFK, it would lose the feeling of being auto mode") — he just wishes the injection were visible. ([thread](https://x.com/mattpocockuk/status/2048388134811889818))

The broader vibe: people who've built around their own prompt architecture are frustrated that managed harnesses can silently mutate the prompt, and several (mattpocock included) are openly threatening to migrate to Pi or OpenCode where the flow is fully theirs.

## Simon Willison's two-line postmortem on the Railway/JER agent that nuked production

A viral story this weekend (from `@lifeof_jer`) describes a coding agent that destroyed production data on Railway. Simon's take, posted at 3am UTC, [pushed back hard on the conclusions](https://x.com/simonw/status/2048598378171572332):

> "1. Don't run agents anywhere they might be able to access production environment credentials — it's on you to know which credentials those are. 2. Keep tested backups that are independent from your production host."

The thread is the most substantive postmortem discussion of the week:

- **Dirk Kok**: "If production credentials are ambient in the agent's process (shell variables, .env files, AWS CLI config), your CLAUDE.md rules become conventions, not constraints. The agent can read the rule and still have filesystem access to the secrets it's supposed to ignore."
- **Anees Merchant**: "Treat agent identity as a first class principal in IAM, not a shared service account. Most incidents I have reviewed trace back to one bot key with too much scope and zero rotation policy."
- **HeyMeng**: "Agent autonomy didn't break production. An unscoped credential broke production. Agent autonomy just gave it the keyboard."
- **D. E. Williams**: "They tried to use a strongly worded prompt to restrict a dangerous operation like DB deletion. They should have used a hook (PreToolUse) to restrict this type of agent behavior."
- **James Ellis-Jones** (defending JER): "The token the agent used was for domain name changes and could not be environment scoped. The Railway infra stored backups in the same volume, and that was a) nuts and b) not clearly advertised."
- **Zain Rizvi** on Railway specifically: "Railway has horrible (ie 'zero') authorization granularity on their API keys. You either give it access to nothing or give it full access to literally every organization."
- **claire vo** adds the missing third lesson: "Know how to restore data and run a disaster recovery exercise regularly."
- Simon agrees in-thread that the agent ecosystem's missing primitive is **best-in-class sandboxing out of the box** — currently every framework leaves it as an exercise for the user, "and doing that well is really difficult."
- **Jeffrey Emanuel** plugs his [destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) tool for blocking dangerous git/shell commands at the harness layer.

## ClawSweeper + Clownfish: 27K issues, 30K PRs closed since December

Steipete reports OpenClaw's autonomous-maintenance fleet has now closed [over 10K issues and ~5K PRs in a single week](https://x.com/steipete/status/2048478136824738181), totaling 27K issues / 30K PRs since December. The community reaction is split:

- **Pro**: "First concrete proof that AI agents can actually run open source maintenance at scale, not just write code" (curtismakes); "5 years of development in 5 months" (theskerch97).
- **Skeptical**: "Half those PRs are agents closing what agents opened" (clifcode); "Closed and resolved are not the same — share the merge rate vs the close-as-stale rate. 10K issues a week is impressive only if the fix actually shipped" (hassanscalveta); ByteCrafter asks whether bounce-back rate (auto-closes that get reopened or re-filed within 14 days) has been published anywhere.
- Multiple replies (mikeassad77, litvinovrv) note OpenClaw 4.24 had the worst breaking change so far and Discord is unhappy — the velocity may be coming at stability cost.

Steipete also shipped [birdclaw](https://x.com/steipete/status/2048626844694421842) overnight — a local-first Twitter archive tool that imports your X archive, backs it up to GitHub, and runs jobs to import bookmarks daily (since they're not fully accessible via the API).

## Lee Robinson's retrospective: coding agent → general agent

Vercel's leerob posts a clean one-liner that gets [540 retweets](https://x.com/leerob/status/2048513967039910173):

> "It wasn't obvious to me one year ago that an excellent coding agent would also be the path to a general agent for all knowledge work. But now it makes a lot of sense."

The replies converge on **why** code worked first — and what gates everything else:
- **dnu**: "Coding was the first real forcing function because the feedback loop is brutal. What do evals for softer knowledge work even look like?" leerob's reply: "The stuff that can't be RLed against will likely come last."
- **LabelSets**: "Code worked because it has cheap automatic verifiers — compilers, tests, runtime errors. Knowledge work that has verifiers (legal review against a checklist, schema-bound reports) follows fast. The fuzzy stuff lags."
- **Ryan Nixon**: "The bottleneck shifts from reasoning to context. Models reason fine, IDEs gave 'produce artefact' a home — but knowing what the business actually wants, knows, and has already decided is still glued together with vibes. That layer feels like next year's obvious-in-retrospect."
- **Chen Avnery** (real-world data point): "We run 12 agents in production. 8 of them write zero code. Ops, compliance, sales research, content. The coding agent was the Trojan horse."
- **Matt Biilmann** of Netlify links to his ["AI in the CLI: the Humanoid Robot of the Web"](https://biilmann.blog/articles/ai-in-the-cli-the-humanoid-robot-of-the-web/) piece making the same argument.

leerob also predicts: "In a year, you'll be able to use models at the current frontier at a fraction of the cost and even on your own hardware."

## GPT-5.5 keeps dunking, even on price

Cursor + OpenAI partnered to put [GPT-5.5 in Cursor at 50% off through May 2](https://x.com/cursor_ai/status/2047744579127185843) and it's already #1 on CursorBench at 72.8%. Theo points out [GPT-5.5 (xhigh) is *still* cheaper than Sonnet on the Artificial Analysis Index](https://x.com/theo/status/2048134278760857949) despite the price increase from 5.4. Steipete (and many others) lining up to gush:

> "I was blown away by Codex 5.4, but 5.5 is blowing me away even more. Just absolutely unreal."

Earliest community report from `almmaasoglu`: "Over-defensive slop code gone, faster than 5.4 even on xhigh, less verbose, intelligent on low/medium. This model so far has written the best code I've used."

Simon Willison [used the Codex API as a backdoor](https://x.com/simonw/status/2047406457302524397) to access GPT-5.5 since it's not in the official OpenAI API yet ("apparently approved-of"), and tested it on his pelican-on-bicycle benchmark.

## Quick hits

- **Matt Pocock on intentional `/compact`**: telling Claude *why* you're compacting is critical — it'll keep the right things and chuck the rest. Pocock is on his third compact of a session and finding it pleasant. ([thread](https://x.com/mattpocockuk/status/2048487745144709539))
- **Mappletons (GitHub) talk on PRs being obsolete**: Pocock recommends [this YouTube talk](https://www.youtube.com/watch?v=ClWD8OEYgp8) on why the pull request is no longer fit for purpose and what GitHub is doing about it.
- **mitsuhiko ships an MLX tool-parameter streaming patch**: he pushed a small patch to mlx-lm to get streaming tool params working, after a weekend of game-jamming his open-source [rope-man ninja game](https://mitsuhiko.github.io/rope-man-game/?seed=water) (which got hats; family record is 152m on seed "water"). Briefly notes that ["Zig getting a slop fork was not on my bingo card"](https://x.com/mitsuhiko/status/2048510166190924172) re: a Bun-related Zig fork.
- **steipete moved local test runs to Blacksmith**: "Codex can literally spin up to 32vCPU instances and rip through our test suite" — was severely CPU-constrained on OpenClaw work. ([link](https://x.com/steipete/status/2048630704972443918))
- **bcherny continues threading the Claude Code post-mortem**: usage limits reset for affected subscribers, Opus 4.7 CC issues still being worked on, more rollouts in coming days. ([thread](https://x.com/bcherny/status/2047375800945783056))
- **Theo donates $2K** to help [@uwukko](https://x.com/uwukko) — who's building the [Helium browser](https://heliumbrowser.com) on an M1 with 8GB of RAM (he remotes into a 16GB machine just to compile) — get a 64GB Mac, with `@heyandras` and `@photomatt` matching to push him to a higher tier. ([thread](https://x.com/theo/status/2048624095454187570))
- **theo on Anthropic's product side**: "Is there any public examples of Dario talking about the Claude Code team? Sometimes feels like he ignores the product side of Anthropic." Followed up with a sharper take that Dario "hates software engineers" based on past comments. ([link](https://x.com/theo/status/2048459166336078242))
- **swyx's 2026 thesis** (re-shared by jacobeffron): *"2025 was coding agents. 2026 is coding agents breaking containment to do everything else."* — fits leerob's framing above.

## Off-topic

- **simonw's "Why are you like this" pelican**: ChatGPT Images 2.0 added the sign of its own accord; Simon recorded it [for posterity on his blog](https://simonwillison.net/2026/Apr/25/why-are-you-like-this/).
- **LLMJunky's "Codex on a Tamagotchi"** keeps spawning fan-art (carry-over from yesterday).
- **mitsuhiko's family Sunday**: rope-man-game playtesting with a 152m world record on seed "water" — challenge open.
