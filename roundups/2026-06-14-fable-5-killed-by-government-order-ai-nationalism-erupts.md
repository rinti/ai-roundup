---
title: "Fable 5 Killed by Government Order — AI Nationalism Erupts"
date: "2026-06-14"
summary: "The US Commerce Department killed Fable 5 and Mythos 5 on Friday night — three days after launch — citing a narrow jailbreak and barring access by any foreign national, inside or outside the US, including Anthropic's own foreign-born employees like Karpathy. Anthropic pushed back publicly, calling the standard unprecedented and warning it would halt all frontier deployments industry-wide. mitsuhiko responded within hours with **\"Dangerous Technology For Americans Only\"**, arguing Anthropic's own safety rhetoric was weaponized against them. Simon Willison logged the exact moment Fable went dark and linked to Anthropic's statement. Theo eulogized Fable (\"our three days together were magical\") and asked whether Karpathy joined Anthropic just to access Mythos. Meanwhile Boris Cherny's Fable 5 launch celebration — calling it \"the best model I have used for coding, by a wide margin\" — aged poorly within 72 hours. The fallout lands on a week already dominated by loopcraft discourse (steipete's 6.5M-view tweet, swyx coining the Salty Lesson), Pocock's viral /teach skill, and Thariq's demo of Fable editing its own launch video."
tags:
  - The Fable 5 Kill Switch
  - AI Nationalism & Export Controls
  - Loopcraft & Agent Loops
  - Claude Code at One Year
  - Fable in the Wild (While It Lasted)
  - Skills, Teaching & Community
  - Other Bits
---

# AI Roundup — June 14, 2026

## The Fable 5 Kill Switch

**The US government pulled Fable 5 and Mythos 5 from the market.** At [5:21pm ET on June 12](https://www.anthropic.com/news/fable-mythos-access), Commerce Secretary Howard Lutnick sent Anthropic a letter placing Fable 5 and Mythos 5 under export controls, barring use by any foreign national "whether inside or outside the United States." Because Anthropic cannot filter users by nationality in real time, it [disabled both models for everyone by Friday night](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) — three days after their June 9 launch. This is the first time a frontier model has been pulled from the market by government order rather than by the company that made it.

**The stated reason: a narrow jailbreak.** The government claims it became aware of a method to bypass Fable 5's safeguards — specifically, asking the model to read a codebase and identify software vulnerabilities. [Anthropic publicly disagrees](https://www.anthropic.com/news/fable-mythos-access): the jailbreak is narrow, non-universal, and produces results already achievable with GPT-5.5 and other publicly available models. They warn that applying this standard across the industry "would essentially halt all new model deployments for all frontier model providers."

**Active threads using Fable automatically fell back to Opus 4.8** — Anthropic's most capable generally available model. [Developers scrambled for continuity plans](https://www.cosmicjs.com/blog/fable-5-mythos-5-suspended-developer-action-plan) as production workflows built on three days of Fable integration suddenly went dark. The [Fable departure deadline from subscription plans is now June 22](https://www.developersdigest.tech/blog/claude-fable-5-june-22-deadline).

**Simon Willison posted Anthropic's statement** within hours, [logging the exact moment Fable stopped answering](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/) — 6:59pm Pacific on June 12. This from the same person who two days earlier called Fable ["relentlessly proactive"](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/) and had it building datasette features. The whiplash is real.

## AI Nationalism & Export Controls

**mitsuhiko fires back: "Dangerous Technology For Americans Only."** Armin Ronacher published [a scathing blog post](https://lucumr.pocoo.org/2026/6/13/americans-only/) within hours of the suspension, arguing that Anthropic's own safety rhetoric was weaponized against them. The key insight: the US government has moved from restricting AI sales to hostile governments to making **nationality itself** the defining boundary — including Anthropic's own foreign-born employees. This follows his June 10 post ["Gaslighting Openness"](https://lucumr.pocoo.org/2026/6/10/gaslighting/) which argued "Control is safety. Openness is danger" is the new framing being pushed.

**Karpathy potentially locked out of his own work.** Several key Anthropic personnel — including co-founder Chris Olah, recently hired researcher Andrej Karpathy, and philosopher Amanda Askell — were born outside the United States. [According to reports](https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5), the directive bars foreign nationals from accessing the models regardless of location. Karpathy, a Slovak-born EB-1 green card holder who [joined Anthropic just last month](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) to build a team using Claude to accelerate pre-training research, may now be barred from the very models he was hired to work on. Anthropic declined to comment on specific employees.

**Theo eulogized Fable and connected the dots.** His take from [June 12](https://x.com/theo/status/2065313488747233618): "Do you think Karpathy joined Anthropic just so he could use Mythos for ML research without restrictions?" — a question that now hits very differently. He also posted: "Fable, my beloved, I will miss you so. Our three days together were magical."

**The sovereign AI debate reignites.** [Time](https://time.com/article/2026/06/13/anthropic-fable-mythos-ban-US-security/), [Bloomberg](https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5), and [Inc42](https://inc42.com/buzz/anthropics-fable-5-mythos-5-access-suspension-rekindles-sovereign-ai-debate/) all ran coverage on how the suspension rekindles the case for on-premises AI sovereignty. If the government can kill-switch a model three days after launch, the cloud dependency question stops being theoretical.

## Loopcraft & Agent Loops

**steipete's "design loops, not prompts" tweet hit 6.5M views.** On [June 8](https://x.com/steipete/status/2064998499780084154), Peter Steinberger — OpenClaw creator, now at OpenAI — posted: "Here's your monthly reminder that you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents." The AI-coding timeline [spent the next week arguing about it](https://explainx.ai/blog/loop-engineering-coding-agents-claude-code-guide-2026). His [5-minute maintenance loop demo](https://x.com/steipete/status/2064998499780084154) (4.6K likes, 417K views) shows codex waking every 5 minutes to triage and auto-review repos — with skills in his [agent-scripts repo](https://github.com/steipete/agent-scripts).

**swyx coined "Loopcraft" and the Salty Lesson.** [Latent Space's new piece](https://www.latent.space/p/ainews-loopcraft-the-art-of-stacking): Sutton has the Bitter Lesson for models; agents get the Salty Lesson — "Don't fix things yourself. If you don't figure out how to do this, don't be salty when you lose to those that do." Best counter-argument from replies: knowing when to go *down* a loop (tight deterministic steps where correctness matters) is the actual skill.

**Boris Cherny: "I don't prompt Claude anymore. I write loops."** From [his Fortune interview](https://fortune.com/2026/06/11/anthropic-claude-boris-cherny-doesnt-write-code-by-hand-anymore/): "every night I have a few thousand agents running." He hasn't written a line of code by hand in eight months, did [150 PRs in one day from his phone](https://x.com/hanakoxbt/status/2059670998535008702), and runs cron loops that babysit PRs and fix CI automatically.

## Claude Code at One Year

**Boris Cherny marked Claude Code's one-year GA anniversary.** [His June 8 thread](https://x.com/bcherny/status/2064034799711588805) with Cat Wu discussed what's changed: why he uses auto mode instead of plan mode, how routines fix bugs before he sees them, and why he does most of his coding from his phone now. His [auto mode tip](https://x.com/bcherny/status/2058519809214607704): "auto mode means no more permission prompts. It is the key building block for multi-clauding."

**Fable 5 was "the best model I have used for coding, by a wide margin."** [Cherny's June 9 announcement](https://x.com/bcherny/status/2064402671898075579) praised less prompting, more efficient tokens, better code quality, better tool use, more intelligent self-verification, and higher autonomy. He called it ["the biggest step up since Opus 4.5"](https://x.com/bcherny/status/2064431111154053187) — the model that made him uninstall his IDE. These tweets aged poorly within 72 hours.

## Fable in the Wild (While It Lasted)

**Simon Willison: "relentlessly proactive."** [His June 11 blog post](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/) (723 points on HN) detailed how Fable, asked only to inspect a CSS scrollbar bug, autonomously wrote pyobjc code to enumerate Safari windows, grabbed screenshots with macOS tooling, spun up CORS servers, and injected JavaScript to trigger a modal — all unprompted. Same day: [Datasette 1.0a33 shipped](https://simonwillison.net/2026/Jun/11/datasette/) with most code written by Fable, and [datasette-agent 0.2a0](https://simonwillison.net/2026/Jun/10/datasette-agent/) added a save_query tool enabled by Fable.

**Thariq showed Fable editing its own launch video.** [@trq212's walkthrough](https://x.com/trq212/status/2061545633560010826) (288K+ views) demonstrated a full video production pipeline: Whisper timestamps on 17 takes, subagents picking best shots into final-edit.json, ffmpeg cutting and concatenating, 7 LUTs for S-Log3 color grade, Remotion rebuilding 11 design PNGs as animated React, Figma MCP exports for design review, and a 4K render at 24fps. He never opened a traditional video editor.

## Skills, Teaching & Community

**Matt Pocock's /teach skill goes viral.** [Launched June 8](https://x.com/mattpocockuk/status/2063988995692900439), the skill turns Claude into a personalized tutor for anything — rubik's cube, vocal harmonies, software fundamentals. [His demo](https://x.com/mattpocockuk/status/2065068530387591319) showed it interrogating a user on their mission, teaching git ("just 5 basic commands"), noticing Node was already installed, and sending to primary sources. He [runs it on Opus 4.8 medium, not Fable](https://x.com/mattpocockuk/status/2065070580068474912). Users are [learning chess strategy](https://x.com/N3sOnline/status/2065090964751052833) and [Japanese](https://x.com/Dhinihan/status/2065118872772952306) with it. Install: `npx skills add mattpocock/skills --skill teach`. His skills repo is at 9K stars.

**State of AI for Web Devs 2026 results dropped.** The [survey](https://2026.stateofai.dev/en-US) of 7,258 developers found: AI-generated code jumped from 28% to 54% year-over-year, Claude Code leads positive sentiment among coding agents at 42.3%, developers reporting "constant" AI use doubled from 11% to 21%, and spending keeps rising as the industry shifts from VC-subsidized pricing to sustainable monetization. Hallucinations remain the top pain point. [Theo noted](https://x.com/theo/status/1912883664007930314) over half of respondents watch his videos.

**AI Engineer World's Fair 2026 approaches.** [June 29-July 2 in San Francisco](https://www.ai.engineer/worldsfair/2026): 29 tracks, 300 speakers, 6,000+ attendees at Marriott Marquis. [Jerry Liu is organizing](https://x.com/jerryjliu0) "The Agent Open" — a massive pickleball tournament during the conference featuring teams from Braintrust, Browserbase, Cursor, Modal, and others.

## Other Bits

- **steipete's $1.3M token bill.** Previously revealed: [100 Codex coding agents burned through $1,305,088.81 in OpenAI tokens in 30 days](https://thenextweb.com/news/openclaw-peter-steinberger-1-3-million-openai-token-bill) — 603 billion tokens, 7.6 million requests. OpenAI covers the cost as a research investment. His thesis: "How would we build software in the future if tokens don't matter?"
- **Karpathy's second brain.** In April, Karpathy [shifted from using AI to generate code to using it to organize knowledge](https://medium.com/neuralnotions/andrej-karpathy-stopped-using-ai-to-write-code-hes-using-it-to-build-a-second-brain-instead-cddceadc5df5) — dumping raw research into a folder and pointing an LLM to build an interlinked wiki from scratch.
- **Y Combinator announced steipete as a Startup School 2026 speaker** — [the OpenClaw creator](https://x.com/ycombinator/status/2062942526856941994) whose weekend project became the most-starred GitHub repo in history (346k+ stars) in under 5 months.
- **Jerry Liu on the research/product tension.** His [thread](https://x.com/jerryjliu0/status/2065280547153444902) on Robert Yang's Fundamental postmortem: research needs long bets that ignore customer feedback; product needs the opposite. "For a 'lab' company, I don't think the tension ever goes away."
