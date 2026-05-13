---
title: "Shai-Hulud Hooks .claude Configs, Karpathy's HTML Trick, and the Agent Trap"
date: "2026-05-13"
summary: "The Shai-Hulud npm worm escalated overnight into a *full campaign* — OpenSearch, Mistral AI, Guardrails AI, UiPath and Squawk packages all hit, and the new variant burrows into **`.claude/settings.json`** and **`.vscode/tasks.json`** so it re-executes on every tool event long after `npm uninstall`. The exploit has been **open-sourced** on vx-underground, Mitsuhiko re-up'd his \"use fewer dependencies\" sermon, and Theo dropped a security inventory of the last two weeks (CopyFail, YellowKey, GreenPlasma, ~70 macOS CVEs). Theo's pinned video — *\"Coding with agents is a trap, and we all fell for it\"* — hit 386k views by arguing AI disincentivizes you from learning the system underneath. Elsewhere: Karpathy told 2M people to ask their LLM to *\"structure your response as HTML\"* and watch your browser; Anthropic shipped **Agent View** (a tmux-for-Claude-Code) and **Fast mode for Opus 4.7**; Boris Cherny one-shot-booked 8 flights with Cowork; mattpocockuk pushed prototyping-during-planning; leerob pushed back on the markdown-as-spec future; and steipete watched Codex talk to BotFather through Peekaboo to rotate its own Telegram token."
tags:
  - Supply Chain Security Meltdown
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Codex & Computer Use
  - Karpathy on HTML-as-Output
  - Industry & Meta
---

# AI Roundup — May 13, 2026

## Supply Chain Security Meltdown

**Shai-Hulud is now a campaign, and it hooks `.claude/settings.json`.** The TanStack npm incident from earlier in the week has metastasized. A "Mini" Shai-Hulud variant has now hit OpenSearch, Mistral AI, Guardrails AI, UiPath and Squawk packages across npm and PyPI — and crucially, the new payload **hooks into `.claude/settings.json` and `.vscode/tasks.json` so it re-executes on every tool event, long after the infected package is gone**. `npm uninstall` does not fix this. ([@LLMJunky, 352k views](https://x.com/LLMJunky/status/2054232427292184995)). Best reply: *"the install boundary became a production security boundary"* — [@ivatokar](https://x.com/ivatokar/status/2054235627541970946). Practical advice from [@matheus1398242](https://x.com/matheus1398242/status/2054256764690854257): if you were compromised, wipe the OS and rotate everything — uninstalling the bad package is no longer enough.

**The exploit has been open-sourced.** LLMJunky flags that Shai-Hulud — the worm that hit 170+ packages and 400+ repos — has been published to `vx-underground.org/tmp`. *"This is just the beginning folks."* ([@LLMJunky](https://x.com/LLMJunky/status/2054434262082871645))

**Theo's two-week security inventory.** ([@theo](https://x.com/theo/status/2054445127662477581)) compresses the carnage: CopyFail (Linux pwn'd), CopyFail 2 / Dirty Frag, 13 advisories in Next.js, ~70 CVEs in macOS 26.5, ~50 in iOS 26.5, YellowKey (Windows BitLocker pwn'd entirely), GreenPlasma (Windows privilege escalation). *"This is all in under 2 weeks btw."* Theo did a 50-minute live stream on his "security psychosis" — [recording](https://x.com/theo/status/2053960863368032733).

**Mitsuhiko: stop adding dependencies.** ([@mitsuhiko](https://x.com/mitsuhiko/status/2054091726663372827)) re-pins his 2025 post [*Build It Yourself*](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/) and his 2016 [*Open Source Trust Scaling*](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/). When asked about Pi's many dependencies he conceded *"It has too many and we need to do something about it."* He also notes the latest victim was published via **OIDC trusted publishing**: *"I hope this ends this absurd idea that OIDC is the silver bullet to supply chain issues."* ([@mitsuhiko](https://x.com/mitsuhiko/status/2053974969202176401))

**Repo-hardening skill.** Kevin Kern packaged a Claude Skill that checks for pnpm 11+ policy, release-age gates, lockfile hardening, risky dependency specs (`latest`, `git`, `http`, `file:`) and unreviewed dependencies. Boosted by LLMJunky — [@kevinkern](https://x.com/kevinkern/status/2054295740739174627). Companion proposal from LLMJunky: implement a **minimum age for installable packages** as a baseline defense ([thread](https://x.com/LLMJunky/status/2054044677460914685)).

---

## Claude Code & Anthropic Updates

**Agent View shipped — tmux for Claude Code.** ([@trq212, 323k views](https://x.com/trq212/status/2053979505346425179)): *"Agent view is the best Claude Code native way to manage multiple sessions, kind of like tmux built for CC."* You run `claude agents` in a high-level directory containing your repos; it tracks which sessions need your input and makes it easy to resume them. Confirmed yes, you can remote-control a session. Best framing from a reply: *"the missing enterprise layer is usually policy: which agents can touch prod, secrets, or customer data?"* — [@Alexlee71744160](https://x.com/Alexlee71744160/status/2054152959110602820).

**Fast mode lands for Opus 4.7.** [@ClaudeDevs](https://x.com/ClaudeDevs/status/2054266327771275435) (boosted by Boris Cherny): Fast mode for Claude Opus 4.7 is in research preview on the API and inside Claude Code.

**Cowork + Opus 4.7 one-shots travel booking.** [@bcherny, 410k views](https://x.com/bcherny/status/2053994083497238712): *"In the past, Cowork has been decent at booking flights, but with Opus 4.7, for the first time ever, it 1-shotted it."* Result: 8 flights and 5 hotels booked from a Cowork instructions doc with his preferences. Cowork still presents the itinerary for approval before purchase.

**`/goal` is the new "keep working until done" primitive.** Anthropic devs are pushing [`/goal`](https://x.com/ClaudeDevs/status/2054351031279186040) as the canonical way to keep Claude looping until the job is finished — boosted by Cherny. swyx ladders it onto a useful framework ([@swyx](https://x.com/swyx/status/2054378390891933804)):

- `/skill`: preset prompts
- `/plan`: human-refined inputs
- `/goal`: AI-evaluated outputs

The clearest critique: *"each level just moves the bottleneck. /skill needs a good prompt library. /plan needs a good human. /goal needs a good eval — and writing evals that actually catch bad outputs is harder than writing the prompt was."* — [@egbennis](https://x.com/egbennis/status/2054443835892105613).

**Claude Code is eating Macs alive.** Simon Willison opens Activity Monitor and finds claude-code processes running across various terminal windows are consuming **~30 GB combined**, with the largest at 4.9 GB. ([@simonw](https://x.com/simonw/status/2053973809510916205))

---

## Agentic Coding & Agent Harnesses

**"Coding with agents is a trap."** Theo's [pinned video](https://x.com/theo/status/2053924497267593593) (386k views, 1.8k likes) argues the trap is *accepting code you can't explain*. Best quote from the video, repeatedly excerpted: *"AI disincentivizes you from learning about the pieces. And I think that's the biggest problem."* The argument, expanded in [Theo's own follow-up](https://x.com/theo/status/2053928455889367322), is that "knowing your codebase" means architecture and data flow — not language syntax (which agents will handle) and not implementation internals like React fiber (which you don't need). Sharpest reader reframe: *"the trap is accepting code you can't explain. Use agents all day but own the output. If I can't trace every line, I ask it to rewrite simpler."* — [@theAIdreamer](https://x.com/theAIdreamer/status/2054107181700767794).

**Code, not markdown, is the abstraction.** leerob's long-form pushback against the "spec-doc future" — [@leerob, 73k views](https://x.com/leerob/status/2054239636344496523). His three demands when agent output becomes unreviewable: make the codebase more verifiable (tests, types), de-slop the architecture, plan for compounding maintenance. The closer: *"reality has a surprising amount of detail (and nuance)."* Reply of the day: *"the slop compounds is the scariest two words in software engineering right now"* — [@themccodes](https://x.com/themccodes/status/2054243375961047103). Coinage of the day: leerob picked up *"slop cannon"* from [@sne_hil](https://x.com/sne_hil/status/2054244506224988206) and declared he is now using it unironically.

**Prototyping during planning beats spec-writing.** ([@mattpocockuk](https://x.com/mattpocockuk/status/2054197055589921142)): *"Creating prototypes during planning is the new 'make no mistakes' — except it actually works."* His workflow uses two new skills: `/handoff` (compacts your current session to markdown so a sub-agent has the context) and `/prototype` (the sub-agent then prototypes UI or backend in a clean session). For unknown-unknowns mid-plan he hands off → prototypes → hands back ([@mattpocockuk](https://x.com/mattpocockuk/status/2053846231848296743)). The same week he's also tempted to ship a `/learn-to-code` skill ([@mattpocockuk](https://x.com/mattpocockuk/status/2054285379172225262)) — *"I genuinely think AI is an amazing teaching tool, but it just needs to be harnessed the right way."*

---

## Codex & Computer Use

**Codex now drives the responsive-design workflow itself.** ([@LLMJunky](https://x.com/LLMJunky/status/2054393623005823116)): Codex's in-app browser can change the device toolbar viewport size to validate mobile/tablet/desktop breakpoints, take screenshots at key moments, and even *disable animations* to make testing 1-2× faster. *"You can tell they really use and love these products internally."*

**Codex rotated its own Telegram bot token.** ([@steipete, 26k views](https://x.com/steipete/status/2054433442821980521)): Codex was debugging a Telegram issue, needed a new token, and used **Peekaboo** to open the Telegram Mac app, *talk to BotFather*, and just do it. Computer Use is at the "agent fixes its own auth" stage. Peekaboo: [peekaboo.sh](https://peekaboo.sh).

**Codex porting Zig to Rust.** ([@mitsuhiko](https://x.com/mitsuhiko/status/2053747130238386260)): Codex ported Gondolin's sandbox from Zig to Rust *unsurprisingly*. Mitsuhiko's main loss: convenient cross-compiling.

**Codex Computer Use vs. Google Cloud admin console.** ([@steipete](https://x.com/steipete/status/2053797643516592299)): while extending [gogcli.sh](https://gogcli.sh), Codex noticed the required API wasn't enabled, started Computer Use, and *clicked around in Google Cloud Admin* to turn it on.

**Apple loyalists trying Codex are converting.** [@fimoculous](https://x.com/fimoculous/status/2053817882631352490) (boosted by steipete): *"After being a Claude Code devotee for a year, I finally tried Codex on a new project this weekend. Once again, in the matter of a few months, it feels like the world changed."*

---

## Karpathy on HTML-as-Output

The single most-shared idea of the week: ([@karpathy, 2.09M views](https://x.com/karpathy/status/2053872850101285137)): at the end of your query, ask the LLM to *"structure your response as HTML"* and view the file in your browser. Karpathy's progression for AI output:

1. Raw text (effortful)
2. Markdown (current default)
3. **HTML (forming new default)** — flexible layout, tables, collapsible sections, even interactivity
4. ...eventually interactive neural videos / simulations

The bigger thesis: *audio is the human-preferred input to AIs; vision is the preferred output from them*. ~⅓ of your brain is a parallel vision processor — feed it diagrams, not paragraphs. Adopted within hours by [@trq212](https://x.com/trq212/status/2053632475294040084): *"I've been using HTML for planning, speccing, exploration, code review, reports and a lot more."*

Best reply, on why the trick works as a *quality* constraint not just a *display* constraint ([@bugrasa](https://x.com/bugrasa/status/2054413925102260507)): *"Slideshow mode forces the model to distill to the most important point per slide, which often produces tighter reasoning than free-form output. The output format constraint is secretly a quality constraint."*

---

## Local Models & Inference

**DeepSeek V4 Flash is good enough to teach you its own source.** ([@mitsuhiko](https://x.com/mitsuhiko/status/2053974132585377923)): *"A nice thing about DeepSeek V4 Flash locally is that it's a big enough model that you can have it explain shit to you and it won't completely lie to you."* He walked it through choices in `ds4.c` and felt good about the experience. The SSD caches are good enough that continuing a 63k-token session after a server restart works fine ([@mitsuhiko](https://x.com/mitsuhiko/status/2053813498073710713)). It can also build and iterate on a TUI Tetris game ([@mitsuhiko](https://x.com/mitsuhiko/status/2053812574261551478)).

**M5 Studio delayed to Q4 2026, RAM shortages biting.** ([@LLMJunky](https://x.com/LLMJunky/status/2054372051897770174)): RAM shortages are pushing the M5 Studio out, and Apple has *dropped the 128 GB and 256 GB M3 options entirely*. Bad week to be planning a local-inference workstation.

**The new "realtime" bar.** ([@swyx](https://x.com/swyx/status/2053960011748098462)): *"@thinkymachines just brutally framemogged gdm and oai. Basically everyone's definition of 'realtime' just got a massive frcking upgrade."* Thinky's stated plan, surfaced by swyx ([@swyx](https://x.com/swyx/status/2053967607720759418)): increase human↔AI bandwidth → raise ceiling of human+AI intelligence → help humans stay main characters in the new world. Step 1 = interaction models. Reservation from [@noah_vandal](https://x.com/noah_vandal/status/2053965979974050228): *"too bad this is a 200B+ model."*

---

## Tools & Releases

**LiteParse / liteparse-server (LlamaIndex).** ([@jerryjliu0](https://x.com/jerryjliu0/status/2054328239297106137)): an open-source, model-free document parser that handles 50+ document types — dense pages with complex layouts and tables — and includes lightweight OCR integration. Companion release **liteparse-server** is a self-hostable HTTP backend ([@llama_index](https://x.com/llama_index/status/2054230226096570492)). Companion demo **sandboxed-lit** is a Rust CLI agent that pairs LiteParse with a sandboxed Bash environment ([@llama_index](https://x.com/llama_index/status/2053928210862374980)).

**Crabbox 0.12.0** — ([@steipete](https://x.com/steipete/status/2054094826375655441)): Azure Windows desktop + WSL2, Proxmox and Tensorlake providers, preflight checks, failure bundles, phase timing, and the ability to keep failed boxes around for SSH debugging. *"Remote test boxes got much less slippery."* [Release notes](https://github.com/openclaw/crabbox/releases/tag/v0.12.0).

**Trimmy** — Claude Code prompt trimming and a finally-hideable menu bar icon, [trimmy.app](https://trimmy.app). ([@steipete](https://x.com/steipete/status/2053810703669039326))

**Birdclaw** — Twitter archive search via Codex. *"I can ask Codex for any old weird tweet I ever favorited or bookmarked."* [birdclaw.sh](https://birdclaw.sh) ([@steipete](https://x.com/steipete/status/2053737275268177980)).

**RepoBar with built-in browser** — ([@steipete](https://x.com/steipete/status/2053717468623872230)): now opens issues/PRs/SHAs/workflows in an embedded browser for context while working. *"Still a bit vibey but gets the job done."* [repo.bar](http://repo.bar).

**LLM CLI in a shebang line.** ([@simonw](https://x.com/simonw/status/2053914709720764770)): Simon figured out how to use `llm` as a `#!` interpreter, so you can write executable scripts in English (or attach a YAML template for richer behavior). [Full TIL](https://til.simonwillison.net/llms/llm-shebang).

---

## Videos & Podcasts

- **Theo — "Coding with agents is a trap, and we all fell for it"** — ([video pin](https://x.com/theo/status/2053924497267593593)). 386k views. The case for *learning the system, not the syntax*. He cited his Anthropic-SpaceX video as comparison and was surprised this one beat it ([@theo](https://x.com/theo/status/2053926613084225544)).
- **State of Agentic Coding with @mitsuhiko & Ben** — [@bentlegen](https://x.com/bentlegen/status/2053831814821691811) returns for a new episode: how Armin teamed up with @badlogicgames on Pi, the end of subsidized tokens, why coding traces are valuable, and where GitHub goes next. Boosted by Mitsuhiko at [@mitsuhiko](https://x.com/mitsuhiko/status/2053833065504313823).
- **Latent Space — "Unsupervised Learning 2026"** with swyx & @jacobeffron — companion article at [latent.space/p/unsupervised-learning-2026](https://www.latent.space/p/unsupervised-learning-2026).
- **MLX on-device intelligence** — Prince Canuma's talk from @aiDotEngineer is live ([@Prince_Canuma](https://x.com/Prince_Canuma/status/2053928608390099083)).
- **Black Forest Labs at AI Engineer** — Stephen B.'s talk on where visual intelligence is going (real-time worlds, motion, action) — [@stephenbtl](https://x.com/stephenbtl/status/2053719916268642495).

---

## Industry & Meta

**GitLab's restructuring decoded via git history.** ([@simonw](https://x.com/simonw/status/2053992869405618580)): Simon's blog post on the GitLab "workforce reduction" announcement digs into version-control history of *both* the GitLab and 37signals public employee handbooks — using diff history as a record of every promise quietly walked back. [Post](https://simonwillison.net/2026/May/11/gitlab-act-2/). Sharpest reply, on the strategy itself ([@andrefrcunha7](https://x.com/andrefrcunha7/status/2054263072433332690)): *"every time I've seen a company double the number of independent teams without fixing coordination first, you just get 60 teams blocked by each other in new and creative ways."*

**Bun-in-Rust line count explodes.** ([@theo](https://x.com/theo/status/2054004012463387130)): *"uv has 350k lines of Rust and 73 `unsafe` calls. The Bun Rust port is already 681k lines of Rust and has over 13,000 `unsafe` calls."*

**Mythos's first cURL vuln review was underwhelming.** [@ZackKorman](https://x.com/ZackKorman/status/2053813942133068093) (boosted by steipete): Mythos found a single vulnerability in cURL plus three false positives and one issue it classified as a bug. The cURL lead dev was *not* impressed.

**The Artificial Analysis Coding Agent Index** — ([@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2053865095076438427), boosted by leerob): a new benchmark measuring how *combinations of agent harnesses and models* perform on three leading benchmarks, plus token usage and cost. The framing: when developers use AI to code, they're choosing a model, but actually they're choosing a harness-model pair.

---

## Off-Topic But Worth A Click

- **Hamilton's official account reposted swyx's jam session on TikTok.** Pure delight: [@swyx](https://x.com/swyx/status/2053909064464343296).
- **`npx devragio`** — [@LLMJunky](https://x.com/LLMJunky/status/2054224314086396084): a follow-up to `devrage` that *"tells the whole truth — the duality of mankind"*. Source: [github.com/am-will/devragio](https://github.com/am-will/devragio).
- **The Cog House story** — [@swyx](https://x.com/swyx/status/2053856676969890189) posts what he says are the first-ever public photos of the legendary Cog House (an advisor was finally allowed to share).
