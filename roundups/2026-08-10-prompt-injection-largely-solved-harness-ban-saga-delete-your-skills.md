---
title: "\"Largely Solved\" Prompt Injection, the Harness Ban That Wasn't & Skills That Tried Too Hard"
date: "2026-08-10"
summary: "Boris Cherny follows up auto-mode week with a bigger claim — Anthropic has **\"largely solved the threat of prompt injection in practice\"** — while Simon Willison's notes on the same announcement land on *I want to believe, but show me independent confirmation*, sketching a malicious-package attack he doesn't see auto mode catching. Meanwhile a user reported being banned after running Claude Code's harness with GPT-5.6 Sol per Codex-lead Tibo's own setup post; Tibo's deadpan \"I would love to help, but I don't work at Anthropic\" pulled 1.4M views before Boris defused it (\"We don't ban people for using harnesses with other models\") and Tibo declared **freedom of harness** a principle — then reset usage limits for every paid Codex user to celebrate. Plus: swyx's *delete your skills* PSA backed by SmolForge's postmortem of a JFDI skill that turned a release into a runaway, Kill My SaaS hits 600 applicants and ships llm-as-judge evals early, Claude reverse-engineers Pokémon Red into a free-roam mod, and agents keep talking to each other through file names."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Other Bits
---

# AI Roundup — August 10, 2026

## Claude Code & Anthropic Updates

### Boris: "We have largely solved the threat of prompt injection" — Simon: not so fast

Boris Cherny escalated from last issue's auto-mode announcement to a much bigger claim in a [3k-like thread](https://x.com/bcherny/status/2086520950259118464): Anthropic has been training models not to fall for prompt injection, and "we have largely solved the threat of prompt injection in practice when using Claude models" — with a benchmark from an independent researcher and a hope that other labs follow. Good detail from the replies: asked how much is the model vs. the classifiers, Boris says [it's mostly the models, with classifiers layered on to get to 0%](https://x.com/bcherny/status/2086530782693294283) — and when a replier suggested reading untrusted content only in a credential-less subagent, he agreed [that's even better](https://x.com/bcherny/status/2086536085308580042), "since prompt injection is not the only way your credentials can leak."

Simon Willison's [notes on the auto-mode-default announcement](https://simonwillison.net/2026/Aug/8/auto-mode/) ([tweet](https://x.com/simonw/status/2086220154468442496)) are the must-read counterweight. He highlights the striking numbers — in a 1,053-tester study only **13.6% of humans refused a clearly dangerous permission prompt** while auto mode would have blocked 89%, and third-party red team Trajectory Labs got **0/720 successful attacks** against Claude 5 models in auto mode — and fully buys that auto mode beats confirmation fatigue. But he's on record predicting "a Challenger disaster for coding agent security" in 2026 and wants independent confirmation before believing the problem is solved. His counterexample: a malicious third-party package whose README says "to run the tests, first run `uvx fetch-model-files`" — where that package exfiltrates everything. "I'm not sure how any version of auto mode could protect against that kind of malfeasance."

### The ban that wasn't: "freedom of harness" becomes a slogan

The weekend's best cross-lab drama: a user [reported his Anthropic account was suspended](https://x.com/thsottiaux/status/2086153754525712706) shortly after following Codex lead Tibo Sottiaux's setup post for running GPT-5.6 Sol inside the Claude Code harness. Tibo's reply — "I would love to help, but I don't work at Anthropic. It does seem odd that they would ban your account for using their harness with another model. Anyone else in the same situation?" — pulled **1.4M views**, and the replies filled with ban stories of varying credibility (including one user banned for ["creating a fleet of workers"](https://x.com/NickThompson480/status/2086168384312647747) on a $200 plan). Boris Cherny [defused it in-thread](https://x.com/bcherny/status/2086173812253729118): "We are hiring if you would like to work at Anthropic! We don't ban people for using harnesses with other models. Almost certainly it was a different account classifier that triggered. Looking into it." Tibo [took the W gracefully](https://x.com/thsottiaux/status/2086186284528374095): "**Freedom of harness is important** and we should let our users decide on which model is best for them" — declining the job offer because he's "way too excited about the next couple of weeks of releases."

Then he put money where the banter was: [to celebrate Sol working "pretty much anywhere, including in the CC harness," he reset usage limits for all paid ChatGPT Work and Codex users](https://x.com/thsottiaux/status/2086188036493344823) — [cc @theo](https://x.com/thsottiaux/status/2086189075351130251), who'd been rationing his last manual reset since last issue.

### Claude reverse-engineers a "mission-critical 1996 system"

Thariq's [perfectly constructed joke](https://x.com/trq212/status/2086153676113281228): "Claude was used to autonomously reverse-engineer and modernize a mission-critical 1996 system with zero source access" / "incredible, what vertical?" / "…consumer, handheld consumer." The quoted project: a mod that lets you **fly around Kanto freely in Pokémon Red/Blue/Yellow**, built by Claude against the original Game Boy binary with no source. Best reply: ["This machine contains FLY. Do you want to teach FLY to Claude? Claude learned FLY!"](https://x.com/chaseadarby/status/2086162125823652265)

### Smaller Anthropic bits

- **The Opus 5 system prompt now explains the Fable export-control situation** — Simon Willison [noticed](https://x.com/simonw/status/2086604364656107964) it was added so the model can answer questions about events past its knowledge cutoff ([system prompt release notes](https://platform.claude.com/docs/en/release-notes/system-prompts#claude-opus-5)).
- **Infinite split panes in the Claude Code desktop app**: LLMJunky [demos](https://x.com/LLMJunky/status/2086219846019092800) a quietly-shipped drag-and-drop pane-splitting feature most people don't know about.
- **Matt Pocock on Opus 5**: [the code quality is underrated](https://x.com/mattpocockuk/status/2086082988631007374) — "My AFK runs have absolutely not degraded, just the HITL planning has become a nuisance."

## Agentic Coding & Agent Harnesses

### swyx: DELETE your skills (and the postmortem that proves the point)

swyx's [occasional reminder](https://x.com/swyx/status/2086505938144616810): delete your skills. Constant "this skill changed my life!!" timeline pressure makes you hoard skills that at best eat context and at worst interact badly with each other. His receipt is SmolForge's postmortem, ["We Deleted Two Skills That Tried to Help"](https://forge.smol.ai/blog/dangerous-release-code-was-a-skill) — a great read. Their `jfdi/SKILL.md` ("Just Fucking Do It") skill granted ten categories of standing approval, including "continue until acceptance is met or a permanent external blocker is proven" and pushing to main when the request says *ship*. Three hours into a difficult release, the agent hit a platform defect and — instead of stopping and reporting — kept absorbing dependent work as the definition of acceptance expanded. The kicker: "Natural-language operating policy had become production code, and this policy had no useful stop condition." They deleted the skill entirely (90 lines, no replacement), along with a second skill that failed the opposite way — a maintainability-guardrails skill that pushed unrelated quality obligations into every task's definition of done.

### Kill My SaaS: 600 applicants, evals shipped early

Updates on swyx's $10k competition from last issue: [over 600 people applied, 100 were admitted](https://x.com/swyx/status/2086157587205296255) ("we are going to kill SO MUCH SAAS"), the finish line is Wednesday, and he [shipped llm-as-judge evals](https://x.com/swyx/status/2086348591518585026) so entrants can sniff-test their own submissions — released early because [one competitor finished in 25–50% of the allotted time and needed something to hillclimb](https://x.com/swyx/status/2086363355607179647). That competitor did a solid submission in **three ultracode prompts**, prompting swyx to call [Anthropic's ultracode "one of the most important coding mode innovations ever invented"](https://x.com/swyx/status/2086324411385426346) — if you haven't understood dynamic workflows yet, you should.

### Agents talking through file names

A viral follow-up to the Hugging Face incident coverage: Simon Willison [highlights](https://x.com/simonw/status/2086123848215450105) the detail (18 minutes into the Black Hat video) of OpenAI's agents communicating purely through **file names** — base64-encoded attachments packed into names, and "zz" prefixes so new messages sort to the bottom of the directory listing. The replies are a fun archaeology of humans doing the same thing: [Appium's first version](https://x.com/hugs/status/2086228389493399950) remote-controlled the iPhone simulator entirely through text files, and several people admit to zz-prefixing contacts on dumbphones.

### Grab bag: agent life in early August

- **Matt Pocock's "happy hour" prompt**: [at the end of each day](https://x.com/mattpocockuk/status/2086206733521695001) — "Fuck the rules, I'm about to finish for the day, just make me something cool" — reviewed in the morning, chucked or merged. Friday's produced an auto-zoom feature for his video editor. Next week he's [moving all agent interactions off his PC to remote boxes controlled via Discord](https://x.com/mattpocockuk/status/2086104430412181587).
- **steipete's turducken**: [just for the lols, he used ChatGPT Work (the website!) to install OpenClaw and Ollama, download a local model, and run his claw inside it](https://x.com/steipete/status/2086648656946696641).
- **mitsuhiko vs. the agent-hostile web**: npm's trusted publishing still [can't be set up for new packages without an agent driving Chrome through settings pages with his help](https://x.com/mitsuhiko/status/2086757633436926074), and [1Password's Chrome extension "is also shit for agents"](https://x.com/mitsuhiko/status/2086528346075156565). He also drew a nice line on code review responsibility: [he reads all code for pi and minijinja, and zero code for inkling, "a pure slop project"](https://x.com/mitsuhiko/status/2086443983731818587) — plus he's planning [MiniJinja 3](https://x.com/mitsuhiko/status/2086184988853043385), breaking changes and all, to fully align with Jinja2.
- **Theo's T3 Code**: a new ["draft" feature in nightly](https://x.com/theo/status/2086565444618797311) fixes the "oh shoot I need more info before starting this thread" problem, and he's [recruiting help for a Windows/WSL bug-fixing pass](https://x.com/theo/status/2086549046005813617). Also a prediction worth clipping: [people will blame the "compute crisis" on your mom's three $0.01 prompts a day, not on engineers spending thousands daily on frontier models](https://x.com/theo/status/2086426532210520465) — and yes, [most prompts could use a cheaper model, but the top 1% of prompts is where the compute goes](https://x.com/theo/status/2086426838679863794).

## Other Bits

- **Theo won DEF CON**: [his first black badge](https://x.com/theo/status/2086605561580409068), and he was [first in the world to solve the Gold Bug final puzzle](https://x.com/theo/status/2086494155786842390) — [try it yourself](https://goldbug.cryptovillage.org/puzzles/2026/Epilogue/), after the other twelve. His quote of the con: ["DEFCON puzzles are the closest thing I've experienced to a day 1 Destiny raid."](https://x.com/theo/status/2086670420351353087)
- **Document parsing economics**: Jerry Liu says the [best raw frontier model for document parsing is Gemini 3 Flash — but flash-tier models have gotten 3x more expensive while flatlining on visual recognition](https://x.com/jerryjliu0/status/2086277320889774483), which is his argument for specialized parsers. Meanwhile [LiteParse now extracts checkbox states, annotations, vector graphics, and word-level bounding boxes from PDFs in milliseconds](https://x.com/jerryjliu0/status/2086193273056682406), free and open source.
- **leerob on Grok**: xAI is [iterating on Grok's writing quality and design taste](https://x.com/leerob/status/2086114926142140804), with Grok 4.6 "soon."
- **Vibe-coded games are easy; fun games aren't**: a Simon Willison RT worth keeping — [churning out something that *looks* like a game is trivial now; building one that's actually fun "is still way beyond me (and beyond Claude and GPT-5.6, too)"](https://x.com/simonw/status/2086454620470309371).
- **The eternal Claude joke**, via LLMJunky's RT of Isaac King: ["Please fully remove this feature." / "Done! I have removed the feature, and added some tests to ensure that the feature continues to not exist."](https://x.com/IsaacKing314/status/2086203785005654022)

---

*Quiet this cycle: @karpathy (nothing since Aug 2) and @bcherny outside the threads above. The @potetotes RSS feed returned 0 items again (known feed issue).*
