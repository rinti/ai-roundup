# 2026-04-28 — GitHub Down Half the Day, Theo Sours on Claude Code & Talkie's Pre-1931 LM

## GitHub goes hard down for hours, Issues UI dead

GitHub had its worst outage in months — issues, repo browsing, PR reviews — all dead for the better part of Monday. Mitsuhiko was the loudest:

> "I like how the status page is not even honest. It's not that 'Users are experiencing intermittent failures to view issues'. Issues are hard down for more than an hour at this point. Nothing intermittent about this." — [@mitsuhiko](https://x.com/mitsuhiko/status/2048828857566797863)

Earlier: ["Fucking hell GitHub. At this point CodeBerg is probably more available than this."](https://x.com/mitsuhiko/status/2048806483643498511)

Theo joined in, with the same refrain that's been recurring all week:

> "Github has been down for most of the day. I'm so tired of this. Never been so ready to move on." — [@theo](https://x.com/theo/status/2048857171040121265)

The outage compounded the worst possible week for any agent harness that depends on GitHub for issue/PR ops (Steipete's ClawSweeper fleet was visibly stalled — see below).

## Theo's full reversal on Claude Code

Theo published a long mea-culpa-shaped tweet that is the cleanest articulation yet of the trust collapse a lot of former Anthropic die-hards have been telegraphing for the last month:

> "People forget that I was a big fan of Claude Code. I defended Anthropic a lot in December and January. Opus 4.5 was a defining moment for me. I'm thankful that I got to experience it when I did. This is why I'm so frustrated. I know how good it can be." — [@theo](https://x.com/theo/status/2048843149666365572)

Triggered by [shivam's screenshot](https://x.com/shivamhwp) recalling how good CC was three months ago. The thread spiraled into a now-viral micro-incident: a circulating screenshot of a [support article saying $20 Claude Pro users will lose Opus access in Claude Code](https://x.com/synthwavedd/status/2048822) — Theo dunked on it ([lmao](https://x.com/theo/status/2048904189133324494)) before [Thariq corrected the record](https://x.com/trq212/status/2048911618537582980): the support article is outdated from before Opus was added to Pro plans in January, never got updated, you can verify in the Wayback Machine. Theo backed down ([nvm](https://x.com/theo/status/2048929431151079545)) but the damage was done — most replies didn't see the correction.

Quote-of-the-day from his own timeline: ["Oh how innocent he was..."](https://x.com/theo/status/2048856440799142364) quoting his own past tweet about running two yolo-mode Claude Code instances in parallel.

## Tibo resets Codex rate limits for "good vibes"

Reposted by LLMJunky and now circulating widely:

> "Don't just reset Codex rate limits for fun, it costs money. ... but the vibes are good ... I have reset Codex rate limits for ALL paid plans to celebrate a good week and allow everyone to build more with GPT-5.5. Enjoy" — [@thsottiaux](https://x.com/thsottiaux) (via [LLMJunky](https://x.com/LLMJunky/status/2048999315306057886))

Read in context with last week's GPT-5.5 launch buzz: a deliberate flex against Anthropic's rate-limit-tightening posture. The contrast in vibes between the two flagship CLI products this week is stark.

## Codex browser → ChatGPT Pro consultation pattern

Anthony Kroeger (`@kr0der`) demoed a workflow that LLMJunky [boosted as "slick"](https://x.com/LLMJunky/status/2048911899283140631):

> "Log into ChatGPT in the Codex app browser and get your agent to consult ChatGPT Pro when it's stuck or you're working on something hard/need advice."

So the codex agent itself can hop over to ChatGPT-the-product (which has Pro plan reasoning enabled) and ask the harder question — no API key needed, the existing ChatGPT subscription does the auth via the browser. Effectively "GPT-5.5 Pro on demand for stuck moments" without paying for Pro API tokens. This is the kind of harness-meta-pattern that's only possible because Codex 5.5 ships with browser control built in.

## Simon's Talkie & VibeVoice notes

Two big model writeups from Simon today:

**Talkie — the vintage LM** ([blog post](https://simonwillison.net/2026/Apr/28/talkie/), [tweet](https://x.com/simonw/status/2048957708162986085)):
> "Some notes on talkie, a new 'vintage language model' from a team including Alec Radford (yes, that Alec Radford) 'trained on 260B tokens of historical pre-1931 English text'."

[Created by](https://x.com/simonw/status/2048984084446376344) `@status_effects`, `@DavidDuvenaud`, `@AlecRad`. Simon's pelican-on-a-bicycle benchmark predictably failed but he got an "era-appropriate response" and respected it.

**Microsoft VibeVoice STT** ([blog post](https://simonwillison.net/2026/Apr/27/vibevoice/), [tweet](https://x.com/simonw/status/2048912086307377252)):
> "Microsoft's MIT licensed VibeVoice speech-to-text model (think Whisper with speaker diarization) is really good — my notes on running the 5.71GB 4bit MLX conversion on an M5 MacBook, using about 60GB of RAM at peak and transcribing 1hr of audio in ~9 mins."

He also posted a [uv one-liner](https://x.com/simonw/status/2048913350860685395) that pulls the MLX model and runs it against any local mp3:

```
uv run --with mlx-audio python -m mlx_audio.stt.generate \
  --model mlx-community/VibeVoice-ASR-4bit \
  --audio lenny.mp3 --output-path lenny \
  --format json --verbose --max-tokens 32768
```

Speaker diarization with MIT licensing is the headline — most local Whisper setups still require add-on diarization pipelines that fall over.

## "AGI clause is deceased": Microsoft/OpenAI revenue share locked through 2030

Simon flagged a quietly significant line from today's OpenAI announcement ([blog post](https://simonwillison.net/2026/Apr/27/openai-microsoft/), [tweet](https://x.com/simonw/status/2048834476323823983)):

> "Today OpenAI announced that 'Revenue share payments from OpenAI to Microsoft continue through 2030, independent of OpenAI's technology progress'. That 'independent of OpenAI's technology progress' fragment appears to mean that the weird AGI clause is now deceased."

The original Microsoft/OpenAI deal had a clause that revenue share would terminate when OpenAI declared AGI achieved. Today's language reads as Microsoft buying out that termination right — locking in the revenue share regardless of what OpenAI ships. Simon: "Couldn't resist capping that off with my all-time favorite quote from Matt Levine." (Levine quote not reproduced — see [the post](https://simonwillison.net/2026/Apr/27/openai-microsoft/).)

## Mitsuhiko: llms.txt is doing nothing

Mitsuhiko ran an audit of his pi agent and dropped a damning data point ([thread](https://x.com/mitsuhiko/status/2048746736147923309)):

> "This is not the LLM but the harness doing btw. My pi used llms.txt exactly 1 time across 1730 sessions (new mac). The one hit was from a cloudflare HTML header that told it about llms.txt after it for a 403 earlier."

In response to Nick Khami at skeptrune arguing llms.txt is essential. Mitsuhiko's framing: this is a harness-design question, not a model question — and the empirical data says nobody's harness is fetching llms.txt unless explicitly hinted. Nudge to the agent harness ecosystem to either commit to it or stop pretending it's load-bearing.

He also [shipped a patch to mlx-lm](https://x.com/mitsuhiko/status/2048559908665115088) for tool parameter streaming — a quietly-important fix because non-streaming tool args are the main thing that makes local Apple Silicon agents feel sluggish next to API agents. Followup: ["oh no. it's retarded (probably user error. not sure if i am running it with the right parameters)"](https://x.com/mitsuhiko/status/2048562489969828014) on whatever model he tried next.

Also today he asked the network for [strategies to hit the npm API from Cloudflare Workers without rate-limiting](https://x.com/mitsuhiko/status/2048738978849755399).

## Matt Pocock: skills repo at 28K, /diagnose in flight, auto-mode aftermath

Pocock's `claude-code-skills` repo has been the breakout indie story of the month — yesterday at [23K](https://x.com/mattpocockuk/status/2048490818848075846), [28K by midday Monday](https://x.com/mattpocockuk/status/2048797423795941854), the [#1 trending repo in the world](https://x.com/mattpocockuk/status/2048829796579205550). Newsletter signups [going through the roof](https://x.com/mattpocockuk/status/2048858558955913629) since his AI Engineer talk.

Three threads worth pulling out:

**1. /diagnose, the bug-feedback-loop skill** ([thread](https://x.com/mattpocockuk/status/2048736667209458149)):
> "Working on a /diagnose skill for tackling bugs and perf regressions. 1. Wraps the issue in a feedback loop it can run AFK. 2. Minimizes the reproduction. 3. Creates hypotheses and tests them. Feels insanely good so far."

The pattern is the same ratchet as `/grill-me` and `/to-prd` — wrap a hard task in a deterministic outer loop the model can iterate against. Pocock teased a [first preview link](https://x.com/mattpocockuk/status/2048736828283396526) on his newsletter.

**2. /grill-me used for a eulogy**, the most touching skill-use story this cycle:
> "I used @mattpocockuk's /grill-me to help me write a eulogy for my mum. It interviewed me relentlessly and walked me through memory lane. It was a lovely journey." — `@9er5on`

Pocock's response: ["This is the most awesome one so far. /grill-me is the most impactful four sentences I've ever written."](https://x.com/mattpocockuk/status/2048795562946830517)

**3. Auto-mode confirmation, take two** ([tweet](https://x.com/mattpocockuk/status/2048732665918923111)):
> "Proof that Claude Code makes different decisions when it's in auto mode: So frustrating."

Continuation of yesterday's auto-mode-injects-extra-prompt drama. Today's evidence is a side-by-side diff showing the same prompt taking different paths under auto vs default.

Pocock's roadmap from the community thread ([summary](https://x.com/mattpocockuk/status/2048675153815445686)): docs site, plugin auto-update, newsletter for skill changes, multi-backlog support (GitHub, Linear, Beads).

## Steipete: 300-user enterprise OpenClaw, perf wins, CI infra

A few different OpenClaw threads worth threading together.

**Enterprise install testimonial** ([thread](https://x.com/fagamericano/status/2049005597773988031), via Steipete RT):
> "I've been running an 'enterprise' openclaw install with 300 users (gcp, gke, gvisor sandbox, read-only workspaces, etc) connected (read only) to new relic, github, google (with its own restricted account) and notion. It has changed how many teams work. Ops has been diagnosing customer issues..." — `@fagamericano`

This is the first concrete public datapoint on OpenClaw at company scale: gVisor sandboxes, read-only workspace defaults, and read-only data integrations. Read it as the deployment template for risk-averse orgs that want to put a coding-agent harness in front of 300+ engineers without giving any of them write paths to prod.

**Plugin perf rewrite** ([thread](https://x.com/shakker/status/2049011134426906635)):
> "OpenClaw's first output dropped from 1s to 43ms. Plugin bootstrap went from 265ms to 8ms. Provider capability resolution from 49ms to 1.5ms. Config validation from 62ms to 5ms. For most of OpenClaw's history, the plugin system was carrying core, instead of the other way around."

A clean architecture-debt story — when plugin code is the hot path, every harness operation pays for it. 1s → 43ms first output is the kind of latency improvement that you feel immediately at the keyboard.

**CI infra for OpenClaw** ([tweet](https://x.com/steipete/status/2048957477106938075)): "Finally have great solutions for PR/Issue management, remote test execution, massive CI infra for testing. Streamlines a lot of the work." Following on from the Blacksmith 32vCPU move yesterday and a feature-stack push (Voice Personas via [iamBarronRoth](https://x.com/iamBarronRoth/status/2048782962645459026), wacrawl 0.2.0 [encrypted Git backup/restore](https://x.com/steipete/status/2048660875007914176) for WhatsApp Desktop archives).

**The vibe report** that's the day's best testimonial-by-association: ["I got a 'Holy shit, ...' response from my Claw for the first time in months. Thanks @steipete and @thsottiaux & team for bringing back the life"](https://x.com/sudo_eugene/status/2048847502007222580) — a former skeptic flipping back, attributed to the GPT-5.5 + Claw harness combo.

## Jerry Liu: ParseBench grows up, LlamaParse + Claude Agent SDK loan pipeline

Two updates from llama_index land:

**ParseBench** ([RT thread](https://x.com/osanseviero/status/2048777802015535189)):
> "ParseBench: A benchmark for document parsing agents. @llama_index just shipped a benchmark with 2k verified pages for real enterprise documents. Benchmarks are the major underrated component in the ML ecosystem, so I'm excited to see more entities doing open work in the space." — `@osanseviero`

This is the same ParseBench from last week, now with 2K verified pages — moving from "interesting toy" to "actual evaluable production benchmark."

**End-to-end loan automation** ([Jerry's writeup](https://x.com/jerryjliu0/status/2048860020021031105), [llama_index thread](https://x.com/llama_index/status/2048794487921791003)):
> "Loan processors spend 40–60% of their time reconciling income across tax returns, pay stubs, W-2s, and bank statements. We built an end-to-end pipeline that automates it with LlamaParse + the Claude Agent SDK: 📄 Schema-driven extraction across 4 doc types with confidence scores + citations 🔍 Cross-doc..."

The interesting architectural choice here is leaning on the Claude Agent SDK — i.e. the same harness primitives Anthropic ships in CC — for a backend doc-processing pipeline. Reads as a vote of confidence that the SDK is now production-grade for non-coding agents.

## Quick hits

- **leerob's "we don't know how to do it"** ([thread](https://x.com/leerob/status/2048761048786690391)): leerob's friend (a "10x engineer") is asked what it would cost to rebuild [Yamauchi No.10 Family Office's site](https://y-n10.com/) today. Answer: "We can't, we don't know how to do it." With video. The tweet is making the rounds as the canonical "AI hasn't subsumed taste yet" data point.
- **Theo's Helium browser donation drive concludes**: `@heyandras` and `@photomatt` matched, then `@theCTO` matched on top of that. `@uwukko` is getting upgraded from an 8GB M1 (currently remoting into a 16GB box just to compile) to a higher-tier Mac. ([followup](https://x.com/theo/status/2048652827405451678))
- **Theo on LM Studio waitlist for local-network use**: ["In order to use LM Studio with my local models on my local network, I have to apply to use 'LM Link' and hope they get me off the waitlist? Are you joking?"](https://x.com/theo/status/2048973163833499869) — friction story for self-hosters.
- **Cursor 3 feedback request** ([Eric Zakariasson via potetotes](https://x.com/ericzakariasson/status/2048747330384670971)): "How can we make cursor 3 better? Send us any bugs, feature requests, or feedback you have!" Open invite.
- **Cursor cloud agents in "Grind Mode" / Night Shift**: potetotes [boosting Robin Ebers](https://x.com/potetotes/status/2048482311625445884) running 8K LOC over 7 hours overnight, and Jamon Holmgren's "5x faster, better quality, having fun again" agentic-workflow report.
- **LLMJunky's "newbie made a game with no code in a week"** ([skeptical thread](https://x.com/LLMJunky/status/2048918877858390399)): "I find this kinda hard to believe... but this looks about as good as any other indie game." The community pushback against the no-code-vibecoded-game genre starting to crack.
- **Mappletons (GitHub) talk on PRs being obsolete**: still circulating from Pocock's Sunday recommendation. ["She explains why the PR is no longer fit for purpose, and what GitHub is doing about it"](https://www.youtube.com/watch?v=ClWD8OEYgp8). With GitHub Issues being hard down today, the talk is darkly timely.
- **Mattpocock on /compact** ([thread](https://x.com/mattpocockuk/status/2048487745144709539)): tell Claude *why* you're compacting — the model uses that to decide what to keep vs chuck. Pocock's three-stage QA workflow: 1) build feature, 2) compact and fix walking-distance bugs, 3) compact again and run final QA.
- **leerob's broader thesis** ([Sunday tweet](https://x.com/leerob/status/2048513967039910173)): "It wasn't obvious to me one year ago that an excellent coding agent would also be the path to a general agent for all knowledge work. But now it makes a lot of sense." (Echoes the same "Trojan horse" framing that caught fire in yesterday's Chen Avnery thread.)

## Off-topic / fun

- **LLMJunky on marriage advice from Claude** ([tweet](https://x.com/LLMJunky/status/2048879665217941576)): "as a husband, i can honestly say that i've gotten the best marriage advice from claude. say it with me fellas: 'you're absolutely right.'" 17K likes and counting — the "you're absolutely right" sycophancy meme reaches its final form.
- **Theo on iOS 26**: ["Loving the new iOS update. Feels more like Android every day :)"](https://x.com/theo/status/2048962908697284644) — bait, fully successful.
- **Theo's Korean translation appreciation**: ["Okay but how the hell did the translation preserve the pun?"](https://x.com/theo/status/2048526548115062830) hit 300K likes; he muted the thread immediately and missed the entire blow-up.
- **Mitsuhiko's rope-man-game saga**: family record now stands at 152m on seed "water" ([brag](https://x.com/mitsuhiko/status/2048471167153946822)); badlogicgames ["curse you"](https://x.com/badlogicgames/status/2048506398560931842); a phone-played improvement run posted [here](https://x.com/mitsuhiko/status/2048485175735042411).
- **Mitsuhiko on Bun's Zig fork**: ["Zig getting a slop fork was not on my bingo card!"](https://x.com/mitsuhiko/status/2048510166190924172) re: Bun adding parallel semantic analysis + multiple codegen units to the LLVM backend in their Zig fork (>4x faster debug builds). The "slop fork" framing is doing a lot of work.
