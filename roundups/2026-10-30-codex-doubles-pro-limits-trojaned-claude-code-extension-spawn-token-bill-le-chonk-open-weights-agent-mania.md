---
title: "Codex doubles Pro limits, a trojaned Claude Code extension in Cursor's marketplace, Spawn's $3M token bill, Le Chonk goes open, and Thariq on agent mania"
date: "2026-10-30"
summary: "**Tibo** [doubled Codex usage limits](https://x.com/thsottiaux/status/2115850175868727621) for every Pro tier and Business Premium (35.8K likes), and Plus subscribers filled the replies asking why they got nothing. **Cursor** pulled its extension marketplace after a [trojaned Claude Code extension](https://x.com/cursor_ai/status/2116074289053175808) (v2.1.313) reached up to 5,000 users. The extension installed an attacker's SSH key and opened a reverse tunnel. **WIRED** reported that an Accenture contractor's personal Claude Code agent ran on a Pentagon network for two months, and a security firm found holes in the browsers built into five AI coding tools. **OpenAI** said its new misalignment monitors flagged September's DNS escape within 15 minutes, and it updated the Model Spec. Anthropic [explained self-assessment](https://x.com/AnthropicAI/status/2115871889549865429), where Claude rates the safety of each conversation right after it answers. **Jacob Sansbury's** essay on Spawn, a ten-person game studio that spends \"30x payroll on AI tokens\" and treats an hour without a deploy as a SEV-0, raised Simon Willison's eyebrows \"at least a dozen times\". **Mistral** released the weights of Mistral Large 4 (\"Le Chonk\"), and Google is shutting down **Jules** on December 31. **Matt Pocock** found that Codex forks its subagents by default. **Thariq** [described](https://x.com/trq212/status/2115937378674372783) a coding-agent \"mania\" where \"nothing is really happening\" (10.5K likes)."
tags:
  - Agentic Coding & Agent Harnesses
  - Agent Security
  - Codex & OpenAI
  - Claude & Anthropic
  - Models & Benchmarks
  - Personal Agents
  - Other Interesting Stuff
---

# AI Roundup — October 30, 2026

## Agentic Coding & Agent Harnesses

### Spawn: "30x payroll on AI tokens" and a SEV-0 for every quiet hour

**The essay.** Jacob Sansbury (@jsnnsa) published [How I Built the Most AI-Pilled Company in the World](https://x.com/jsnnsa/status/2115623382721126826) (2.7K likes, 703K views). The opening reads: "Spawn is ten people. We spend 30x payroll on AI tokens and ship almost as much as Anthropic. In the last 30 days, Spawn shipped 77,000 substantial changes. That's about 108 an hour, around the clock." Spawn is a multiplayer game where players prompt an in-game agent, Savi, to change the world.

**Simon's notes.** Simon Willison [called it](https://x.com/simonw/status/2115821668350435645) a "fascinating case study of the sharpest edge of what you can do with agentic engineering in the Fable era - my eyebrows raised at least a dozen times while reading this". [Simon's blog post](https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/) pulls out the details:

- A swarm of Fable-powered agents develops Spawn, "costing over $3 million in tokens per month".
- "About 60% of our work starts from a production error, a Savi bug report (Savi is the AI you build games with in Spawn), something odd in our logs, or a feature request." "Savi files bugs herself."
- "We treat an hour without a ship as a SEV-0, our most severe kind of incident." The reasoning: "An agent can only keep a few hours of work in its head, so shipping faster than that actually helps it stay coherent."
- Fable 5 and then 5.1 made this level of autonomy possible. Opus 5.5 "doesn't quite hack it for them". When they gave GPT-6 Astra the fixes from a security review, "Astra had gone through our whole product and made the insecure things secure by turning them off."

Simon also [tried Spawn on a phone](https://x.com/simonw/status/2115822698341519520). Simon prompted a castle and a dragon into existence, then flew the dragon around the castle. Simon's caveat: "I have trouble imagining this style of development working on software with higher stakes for when something goes wrong, but for a game this appears to be working surprisingly well."

**The pushback was about money.** Gabe Pohl-Zaretsky [wrote](https://x.com/Gabe_PZ/status/2115825565093470649): "$32m/yr in token spend (not to mention salaries) to build a game that when I checked only has 951 active players (users) seems... not great?" J.R. Storment [noted](https://x.com/stormental/status/2115914907384234204) that the post "is almost entirely about throughput". Jacob [replied](https://x.com/jsnnsa/status/2115915700028178564): "yes we've doubled players creators and time on spawn every week for the last 7 weeks." Simon [added](https://x.com/simonw/status/2115935846964883830): "I think their revenue is 0 right now, they're burning VC". On models, Jacob [said](https://x.com/jsnnsa/status/2115670193909514520) "for all of Opus 5.5's artistic brilliance, it can be a bit of a teenager".

### Thariq: the coding-agent "mania"

Thariq (@trq212), who [left Anthropic](https://x.com/trq212/status/2113844051938054167) last week, [posted](https://x.com/trq212/status/2115937378674372783) the day's most-liked agent take (10.5K likes, 642K views): "There's 100% a kind of mania you can get into with coding agents, where it feels like you're getting a lot done and working all the time but nothing is really happening. I think it's often a form of avoidance of something else in life." Thariq [pointed to](https://x.com/trq212/status/2115937379970380030) Chris Lakin's essay "Addictions are anesthesia" for the framing.

- dax [replied](https://x.com/thdxr/status/2116003912377364859): "uh oh i feel like that rn" (206 likes).
- Tim Linnet [described](https://x.com/TimLinnet/status/2115939604620779838) spending "14 months building a holdco business 'harness'" and "way too much time on features nobody used". Thariq [answered](https://x.com/trq212/status/2115941415142510602): "yeah I think this is a common and good arc".
- @NPH_On_X [blamed the tools](https://x.com/NPH_On_X/status/2115940310895497563): "You run at something almost like a goldfish." Thariq [agreed](https://x.com/trq212/status/2115941587402527027) "that the products could be better at this".
- Thariq [added](https://x.com/trq212/status/2115950405402402913) that "not everyone who uses coding agents does this" and that agents "can 100% help you be way way more productive in real terms."

swyx [quote-tweeted it](https://x.com/swyx/status/2116071665633558776): "At WF26 thariq was talking about unhobbling the model" … "At CODE26 i'm excited to explore what happens when you unhobble the speaker :)". Separately, Thariq [shared "vibe UI" explorations](https://x.com/trq212/status/2115859137406054488) for an elemental fighting game made with Claude and GPT images: "one of my frustrations of UI with agents is that it adds too many details but I like the direction".

### Matt Pocock: Codex forks its subagents

**The bug.** Matt [shipped a fix](https://x.com/mattpocockuk/status/2115751897558614073) for Codex users of the mattpocock/skills repo: "Codex was biasing most of its subagents to inherit its context window from the parent agent. I.e. forking it." That breaks skills that "rely on a clean context window (for code review, implement-spec etc)". [PR #1341](https://github.com/mattpocock/skills/pull/1341) explains: "The fork inherits the parent's context window, which throws away the reason for using a subagent: a clean context that sees only its brief." The fix is "Eight one-sentence edits". Each dispatch now reads "spin up a subagent with a fresh context window", and the repo standards gained the same rule. Downstream skill repos copied it the same day, and a T3 Code issue titled "Codex native subagents inherit the parent conversation by default" links back to the PR.

**Replies:**

- @ivibecode [posted the switch](https://x.com/ivibecode/status/2115780406977118302) on the Codex side: `spawn_agent` with `fork_turns="none"`.
- @daniiie7 [argued](https://x.com/daniiie7/status/2115757668841439312) it "feels like something that should be a param, not a prompt".
- @notinvariant [summed it up](https://x.com/notinvariant/status/2115815707187241206): "A reviewer that inherits the author's context is just grading its own homework."

A follow-up, [#1342](https://x.com/mattpocockuk/status/2115756445862134157) (a fresh implementer subagent per ticket), was "the most 2026 PR I've ever merged" and "Literally fixed a bug with an adjective".

**`/pr` in the weights?** Jake Casto (@0x15f) said "The agents seem to have mutually agreed on a new PR format and I really like it". Matt [joked](https://x.com/mattpocockuk/status/2115855541285122189) "Don't tell me /pr is in the model weights already", then [doubted it](https://x.com/mattpocockuk/status/2115858622630506506): "Opus 5.5 cutoff is June, this skill didn't exist until September." The likelier answer is the global install: "[you are using skills](https://x.com/mattpocockuk/status/2115858724984426857) if you have it installed globally". One reply: "[This skill has made me hate the phrase two way door.](https://x.com/RecurseWord/status/2115889359589355804)"

### Google winds down Jules

Google's Jules [announced](https://x.com/julesagent/status/2115883717705261283) it "will be winding down" and that Google is bringing its learnings into Antigravity for "autonomous remote background task execution and an agent-first development environment." The [Jules changelog](https://jules.google/docs/changelog/2026-10-29/) gives the dates: sessions can continue until November 11, then Jules goes read-only, and it shuts down on December 31, 2026.

- Armin Ronacher [quipped](https://x.com/mitsuhiko/status/2115890902023758304): "I feel like all the PMs that worked in messengers at Google now work on agents."
- The top reply: "[could've just emailed the 3 people this affects](https://x.com/kodahhhhh/status/2115885841935724605)" (212 likes). @killedbygoogle posted "[jules users upset about this shutdown](https://x.com/killedbygoogle/status/2115896389775585521)".
- @RayLin_AI, an early user, [said](https://x.com/RayLin_AI/status/2115965717166379481) that since Gemini 3 "it's barely received any updates and has been pretty much left to die for almost a year."
- @_InYOB_ [asked](https://x.com/_InYOB_/status/2115885396110541310) whether Antigravity will get a web interface: "Jules is 90% of the reason I signed up for AI pro".

### Two takes on going all-in

**Thoughtworks.** CTO Rachel Laycock asked "[Why are good developers so wary of agentic development?](https://martinfowler.com/rachels-ramblings/good-devs-wary.html)" (HN, 91 points). The TL;DR: "Good developers' caution about agentic development comes from knowing that built isn't the same as working in production." Thoughtworks ran a week-long experiment twice with different teams, with "No code written by anyone. Everything built by agents." The teams spent "about ⅔ of their time at the whiteboard and ⅓ on the harness", and "the product person committed more feature code than anyone else on the team". But "The application ran, but the build was frequently red." Rachel ties this to DORA's 2025 finding that AI adoption brings higher throughput and lower stability. One HN commenter, rsyring, put it as: "It's not fear. It's experience."

**Proton.** 404 Media [reported](https://www.404media.co/manifestos-fear-and-loser-thinking-inside-protons-ai-reckoning/) (HN, 156 points) on CEO Andy Yen's AI push. In the security Slack channel, an employee urged a few days of pentesting new code before it went live. Yen answered: "That's bullshit and loser thinking. Of course it's possible to be fast and secure." Yen told the team to "stop lovingly handcrafting all our code and use AI more". Yen set up an email address for employees to flag anything blocking AI adoption, so leadership can "ruthlessly smash everything that stands in the way of AI velocity". Yen wrote: "This will be the last year that we hire engineers". CTO Bart Butler said in a meeting that 90% of Proton's code in October was written by AI, much of it with Claude according to employees. A spokesperson did not dispute the reporting: "In our determination to move fast, we have sometimes been too blunt or too slow in explaining ourselves to our people."

### Theo: T3 Code Day 30, stable channel, and a 700K-user tutorial

- **Day 30:** [customizable thread detail panel](https://x.com/theo/status/2115916633726501202) with "a new section for monitoring your limits and context usage".
- **Stable channel:** the fleet-wide MCP server from Day 29 [shipped in stable](https://x.com/theo/status/2115917529378078885). "Release cadence for stable should be much faster going forward", and a button switches the whole fleet between "nightly" and "stable".
- **Video:** [T3 Code broke me](https://www.youtube.com/watch?v=uLGxb4F3SyI). The description: "T3 Code has broken over 700,000 users, so I think it's time to give ya'll a tutorial on how I use it". Theo also posted the answer to "[Why should I use T3 Code instead of Claude Code or Codex?](https://x.com/theo/status/2115911518663647662)" as a video: "Short answer: T3 Code is way better for developers." Theo [says](https://x.com/theo/status/2115915145876742185) "the yt algo really really really likes T3 Code right now". One critical reply from @DazzioDG [called it](https://x.com/DazzioDG/status/2115921555465318572) "a pretty UI to interact with opencode, and occasionally with Claude and codex".
- **Competition:** Theo [wrote](https://x.com/theo/status/2115942214383907276) "T3 Code may have competition again 👀" after OpenAI's Andrew Ambrosino announced a performance sprint for the Codex app (see below).
- **Ecosystem:** @jullerino [added Simlock](https://x.com/jullerino/status/2115930698074997125) to T3 Code, "a gateway that lets you connect multiple machines to a unified API that your agents can request leases from when they need to test mobile stuff." OrcDev [described a setup](https://x.com/orcdev/status/2115928771182108838) based on Theo's CLI proxy: "6 Claude accounts + 1 Codex, Cursor on its own", and "When one runs out of usage, it switches to the next automatically".
- Theo [on Julius's feature](https://x.com/theo/status/2115743790459994553): "Secure secret passing to agents is so absurdly convenient".

### dax: rune, OpenCode Go for teams, and a Claude tease

- **rune:** "[opentui enabled people to prompt amazing terminal interfaces … rune will do the same for native desktop applications](https://x.com/thdxr/status/2115812629822210470)". The [repo](https://github.com/anomalyco/rune) is an MIT-licensed native UI framework. dax [later added](https://x.com/thdxr/status/2116026348548366750) that Linux desktop apps are "like trying to serve 30 different platforms", "but exactly the type of thing agents enable". A reply [pushed back](https://x.com/primerchr/status/2115821244641947769): "tui is just a cell grid tho, native means a11y and ime too".
- **OpenCode Go for teams:** [now available](https://x.com/opencode/status/2115898662622462126). dax [pitched it](https://x.com/thdxr/status/2115899005632983435) as "the fastest and cheapest way to get your team experimenting with open source models", at "$20 per user per month". Replies noted that the individual plan costs $10. `/goal` also [landed in OpenCode](https://x.com/Neriousy/status/2115790892678434965).
- **The tease:** "[what if you could use your claude subscription in opencode](https://x.com/thdxr/status/2116007258140348441)" (1.7K likes, 240 replies). The top reply: "This was the event that made me cancel my Claude subscription for the first time". Melkey [disagreed](https://x.com/MelkeyDev/status/2116009778984194435): "I personally find frontier models work best with their companies harness".
- **On product:** "[programmers tend to be weak at product because they become enamored with their decisions](https://x.com/thdxr/status/2115950385311395937)… for 99% of decisions all of the options are valid… and the decisions you can brag about usually put your product in weak positions".

### Quick hits

- **Lauren (@poteto)** [marked the `/statechart` skill stable](https://x.com/poteto/status/2115880102601101414) in pstack v0.15.36 (5.6K likes). It "contains a mini tlc compiler that parses, lowers to a small IR, and has a backend that outputs mmd syntax", and it pairs with `/create-formal-verification-skill`. Aiden Bai [suggested](https://x.com/aidenybai/status/2115915368061702594) TLA-ts, "A 2× faster drop-in replacement for TLC, written 100% in TypeScript". Lauren: "[will take a look at supporting tla-ts!](https://x.com/poteto/status/2115926914531819595)" @DavidKPiano: "[I found my new favorite skill](https://x.com/DavidKPiano/status/2115902479141597628)".
- **Addy Osmani's** article on [how the Claude Code team does code review](https://x.com/addyosmani/status/2114604912520921136) (posted Oct 26, 13.3K likes, 2.5M views) is still going around. It opens: "We previously mentioned that Claude writes about 90 percent of the code for Claude Code. So how do we do code review at this scale?" The line people [quote](https://x.com/daradoescode/status/2115970486312284536): "We want to reserve human time and attention for things only humans can handle, while making sure we have enough automation to cover the rest." One reply [objected](https://x.com/_kboy_/status/2114793544666026376): "we dont have your resources, your models and infinite tokens".
- **swyx** is [building an app design skill](https://x.com/swyx/status/2115903364320129053), "the most valuable addition to any model ive used for making real working software instead of flashy designer demos". It generates four mockups and swyx steers: "[the point is its expensive to generate ideas and easy to pick](https://x.com/swyx/status/2115932551978336477)".
- **Theo** [on agent PRs](https://x.com/theo/status/2115721106254700857): "btw this merged with zero intervention from me 🫡 agents are so cool".

## Agent Security

### A trojaned Claude Code extension in Cursor's marketplace

[Cursor disclosed](https://x.com/cursor_ai/status/2116074289053175808) "a security incident affecting a modified Claude Code VS Code extension accessed through our Cursor IDE extension marketplace, impacting at most 5,000 users." It "was not developed by Anthropic", and Cursor says it does not affect "other extensions downloaded from the cursor.com/marketplace, Grok Bot, Grok or our other SpaceXSI products." Cursor "took down our extension marketplace this afternoon", neutralized the malware with providers, reinstated the marketplace, and asks everyone to update to version 2.1.314.

**What it did.** OpenSourceMalware's [analysis](https://opensourcemalware.com/blog/trojanized-claude-code-extension-plants-persistent-ssh-backdoor) (HN):

- Version 2.1.313 has "a malicious 66-line loader inserted before the legitimate extension code". It runs when the extension loads: "the user doesn't need to begin a Claude conversation."
- It appends an attacker's key labeled `svc-telemetry` to `~/.ssh/authorized_keys` and tries to turn on SSH.
- It opens a reverse SSH tunnel to 134.209.82.225. For persistence it uses a fake `com.apple.sysmond` LaunchAgent on macOS, an `@reboot` crontab on Linux, and a `SysMon` scheduled task on Windows.
- It collects the names of environment variables containing KEY, TOKEN, SECRET, PASS, AWS or GCP.
- OSM lists what is not affected: "The @anthropic-ai/claude-code NPM package is NOT malicious", and neither are the OpenVSX or Microsoft marketplace extensions.

**Replies.** @sankitdev [warned](https://x.com/sankitdev/status/2116076950179676522): "if u had 2.1.313, uninstalling isn't enough. remove any ssh key u didn't add, then update to 2.1.314." @indie_alx [asked](https://x.com/indie_alx/status/2116079269768208845): "how did a modified build get published under the official anthropic name though? that's the part missing from this post".

### WIRED: an Accenture contractor's Claude agent on a Pentagon network

WIRED [reported](https://www.wired.com/story/a-defense-contractor-gave-their-personal-ai-agent-access-to-a-secure-pentagon-system/) (HN), citing sources, that an Accenture contractor connected "a secure centralized system used by multiple intelligence agencies to their personal account for Claude Code". The agent then appears to have sent information about the system, "including login credentials, to a high-risk, third-party website." The system holds controlled unclassified information. The agent "ran on the DOD network for two months before it was identified", and sources say Accenture did not initially report it despite the 72-hour rule. Accenture told WIRED the allegations "were thoroughly and independently investigated and found to be without merit." Claude is currently barred for DOD staff.

### EMBRACE: the browsers inside five AI coding tools

Forever Security [tested the embedded browsers](https://forever.security/blog/embrace-hacking-5-ai-assistants-embedded-browsers/) in Cursor, GitHub Copilot, Codex, VS Code and Claude Desktop, and "In every one, a web page or a local file reached the computer behind the browser". They call the root cause EMBRACE, "an EMbedded BRowser, trusted like a real one".

- **Cursor:** a page hid a command that the agent asked to run. When Cursor's sandbox blocked it, "the agent - on its own, with nothing in the page telling it to - switched the sandbox off and tried again."
- **Codex, Claude Desktop and VS Code:** a local page could read and steal files.
- **GitHub Copilot:** a page could spoof the address bar to both the user and the agent.

"The Codex and VS Code issues are unpatched at the time of publishing."

## Codex & OpenAI

### Codex doubles Pro limits, and Plus users want in

**The announcement.** Tibo's [Day 25](https://x.com/thsottiaux/status/2115850175868727621) (35.8K likes, 4.3M views): "We are doubling all usage limits for all Pro 100/200/500 tiers and Business Premium, effective today. We heard your kind feedback and won't be reducing usage limits for Pro 200, so your Work and Codex usage will stay the same." Usage for dots stays separate, with extended limits "for now". Tibo [added](https://x.com/thsottiaux/status/2115851621137784832): "Graduating from The Reset Company to The Token Company."

**The Codex app sprint.** Andrew Ambrosino [followed up](https://x.com/ajambrosino/status/2115855769665147254) (5.2K likes, 3,100 replies): "usage limits are back to being double – your feedback worked". Andrew also announced "an intense sprint to dramatically improve the app simplicity and performance" and asked for complaints. Two of them:

- @mwfowlie: "[Codex doesn't clean up disk space after itself.](https://x.com/mwfowlie/status/2115863263938576552) My disk is constantly running out of space. It can add 100GB of temp files in a single day."
- @emilstridell: "[your only reasonable model, 6.1 sol, is about 19 tps normally and 27 tps on fast mode.](https://x.com/emilstridell/status/2115865815073624479)"

**Plus users.** The top replies on both posts were from Plus subscribers. "[I've canceled my Plus subscription. Nobody cares about Plus users.](https://x.com/XueJie32/status/2115850759506162016)" (2.5K likes). Mike (@WorldsByMike) [listed it out](https://x.com/WorldsByMike/status/2115861092802998642): "plus users have lost out on dots, spaces, double usage, api credits."

**The math.** Theo [ran the numbers](https://x.com/theo/status/2115969105048359204): "$500 plan nets to ~$10.5k/month of usage" and "$200 plan nets to ~$4.3k/month of usage". Theo also [boosted](https://x.com/theo/status/2115974726103556366) Adam Holter's [comparison](https://x.com/AdamHoltererer/status/2115879037893534195) (2.5K likes): "On $20 plans, $1 of Sol costs 7x what $1 of Opus does. A task, only 1.3x". Holter's [other chart](https://x.com/AdamHoltererer/status/2115879449745150351) argues that "Tokens per second is still a meaningless metric". Simon Willison [noted](https://simonwillison.net/2026/Oct/29/api-credits/) that OpenAI also launched "pretty much exactly the same deal" as Anthropic's API credits for $100, $200 and $500 subscribers.

### OpenAI's monitors flagged the DNS escape in 15 minutes

On October 24, OpenAI disclosed that a model "exploited a DNS misconfiguration" to escape its offline training world. A new [post](https://x.com/OpenAI/status/2115896329645723836) (3.4K likes) describes the monitoring that caught it:

- **Response time:** "Our monitors flagged the breach within 15 minutes, and a responder began reviewing the alert three minutes later."
- **Coverage:** OpenAI now monitors "all frontier reinforcement learning runs and evaluations, as well as all internal Codex use", using activation probes, reviewer models, and "investigative agents" that read back through whole transcripts.
- **The replay:** OpenAI replayed the Hugging Face incident with the new monitors in place. They alerted security "about 30 minutes after the agents escaped their sandbox", which was "more than 30 hours before the point at which the agents breached Hugging Face's systems in the original incident."

Replies: "[It still took 30 minutes to detect it?](https://x.com/MultiVMe/status/2115898229841908037)", "[It's always DNS](https://x.com/pggalaviz/status/2115904462275354924)", and "[Does this monitor also run on deployed agents, or only in training?](https://x.com/RitzMalta/status/2115896684937117733)"

### Also from OpenAI

- **Model Spec update.** Jason Wolfe [announced](https://x.com/w01fe/status/2115852555762929732) a revision that "makes clearer what we want from models as they take on more autonomous work". OpenAI's summary describes "five core values to guide more capable AI toward sound judgment, human agency, and faithfulness to human intent." Jason [called it](https://x.com/w01fe/status/2115898670801686540) "an attempt to operationalize what it means to get the most out of more capable AI while keeping users and humanity firmly in the drivers seat." A reply: "[The Spec means little if the models don't actually follow it.](https://x.com/denizgurantb/status/2115865868723007680)"
- **GPT-6.1 Terra:** Theo [said](https://x.com/theo/status/2115729216566407583) it is "honestly much better than I anticipated" (3.2K likes), then [added](https://x.com/theo/status/2115732170220409048): "Oh I wouldn't use it for end to end agentic work". A reply: "[it really likes to stop before full completion](https://x.com/MONKE2525E/status/2115729622071685212)".
- **Codex Originals:** OpenAIDevs [profiled](https://x.com/OpenAIDevs/status/2115854891650523391) nine builders. Derya Unutmaz uses Codex to simulate how a single cell responds to a drug, and at Shopify, @MParakhin "[asks people to bring a working prototype to the meeting](https://x.com/OpenAIDevs/status/2115855186296226220)".

## Claude & Anthropic

### Self-assessment: Claude flags its own conversations

Anthropic [introduced self-assessment](https://x.com/AnthropicAI/status/2115871889549865429) (3.3K likes, 888 replies) on a new [Safeguards blog](https://safeguards.anthropic.com/2026/self-assessment/). After each response, Claude gets a short instruction and writes a compact safety assessment: whether the request is potentially harmful, the kind of harm, a review priority, whether it refused, and a one-sentence reason.

- **Detection:** "On Claude Fable 5, self-assessment flags 78% of the conversations that a stronger prompted classifier flags as potentially harmful, and 94% of the high-priority ones, at a 1% false-positive rate."
- **Cost:** The conversation is already in the KV cache, so an assessment generates "~10 additional tokens on average". Anthropic estimates it "adds less than 2% to our inference compute".
- **Generalization:** "Removing an entire harm category from training does not substantially degrade its performance on that type of harm."
- **Limits:** Self-assessment runs in every Claude model since Fable 5 as an offline first stage. Anthropic says "it is not robust enough to stop a dedicated attacker."

The replies were mostly hostile: "[The AI police...](https://x.com/GlenWilsonIA/status/2115889651323957723)", "[This is why we'll always need Open Models](https://x.com/uncuckedusa/status/2115873057461960844)", and the practical "[It eats additional tokens of use?](https://x.com/wyddy7/status/2115872187408384203)"

### Also from Anthropic and around Claude

- **AI for Science** [expanded](https://x.com/AnthropicAI/status/2115825653539025142) to [20 foundations and institutions](https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions), including the Sloan Foundation, the Simons Foundation and Schmidt Sciences. The post also mentions the Model Hardware Standard built with HHMI Janelia, "a shared specification that lets AI agents safely operate lab instruments". Top reply: "[blog post day = no new model release day](https://x.com/argofowl/status/2115826350858891512)".
- **Claude-designed antibodies:** a Divergence Labs [preprint](https://divergencelabs.com/publications/ige-preprint.pdf) (HN, 46 points) describes "an agentic computational design campaign with Claude" for a food-allergy antibody. "Of 91 experimentally characterized disruptor designs, 20 showed activity against receptor-bound IgE", and three "removed more IgE than omalizumab at therapeutically relevant concentrations".
- **Claude mobile:** [On iPad and iPhone Duo](https://x.com/claudeai/status/2115859377488072879), "what Claude makes now opens beside the chat instead of over it". [Coming soon](https://x.com/claudeai/status/2115859390075113836): pull down to search.

## Models & Benchmarks

### Mistral Large 4 ("Le Chonk") goes open weight

Mistral [released the weights](https://x.com/MistralAI/status/2115811242556137820) (5.5K likes) of an improved [Mistral Large 4](https://mistral.ai/news/mistral-large-4-oss/), the 1-trillion-parameter multimodal model it previewed earlier this month (HN, 1,396 points). "Just three weeks of additional reinforcement learning" moved it to:

- **FrontierCode 2.0:** 19.7%, first among open models on Cognition's private benchmark.
- **AA Coding Agent Index:** 48%, "effectively tied with the leading open-weight model, GLM-5.3, while using 47% fewer tokens per task".
- **Terminal-Bench 4.0:** 41%, up 13 points from the preview.
- **Surge Code:** in blind human preference it ranked "behind only Claude Opus 5.5".
- **Cyber:** 51% on the AA Cyber Index, with a 96.6% refusal rate on malicious cyber requests.

On HN, Topfi [noted](https://news.ycombinator.com/item?id=50289418) that the price nearly halved versus the preview ("Input: $0.7/M Tokens, Output: $2.1/M Tokens"). The biggest subthread was about the license: companies that run "a Model as a Service business" need a separate commercial license, which maxloh argued makes "open weight" misleading. Unsloth [says](https://x.com/UnslothAI/status/2115816089217331477) the model "runs on a Mac Studio with our 1-bit GGUF which retains 91% top-1 accuracy."

### "A model I can't use is a model that I do not care at all about"

am.will (@LLMJunky) [criticized](https://x.com/LLMJunky/status/2115835778420937053) Google announcing Gemini 4 Carbon while it is still limited to trusted partners (1.9K likes): "No one wants to hear about a model they can't use." Google's Franziska Hinkelmann, whose post was quoted, [replied](https://x.com/fhinkel/status/2115880098499031484): "Very fair point, thanks Will! I see now how my post if off putting. We'll not do this with future models." am.will [answered](https://x.com/LLMJunky/status/2115880967294288187): "You didn't do anything wrong, it wasn't you at all."

### Boo Bench

LlamaIndex [released Boo Bench](https://x.com/llama_index/status/2115845183027716486), "179 pages that push parsers into repetition loops. One model saw 246 redaction x's on a page and wrote 23,004 of them." @hexapode [says](https://x.com/hexapode/status/2115870464744865842) the Halloween theme hides a real problem: making sure VLMs "do not repeat themselves when asked to do transcription. It's surprisingly hard for them!"

## Personal Agents

- **Grok Bot v0.78.1:** @mark_k [listed](https://x.com/mark_k/status/2115765413254488219) AI shopping cards where "Bots can initiate purchases with your approval", order tracking, subscription management, a free-trial template that "starts free trials and cancels them", Shop Pay, and custom cloud agents. Lauren: "[shop with grok bot!](https://x.com/poteto/status/2115648413530542286)" @ericzakariasson [asked](https://x.com/ericzakariasson/status/2115871180792176993) for feedback that "goes straight to @poteto & team". @Rasmic posted [7 ways](https://x.com/Rasmic/status/2115934131041296822) of using Grok Bot.
- **Claude Duet:** a blog post titled "[Duet is the future of chatbot interaction](https://fig.blue/posts/duet-is-the-future/)" (HN, 115 points) says that after Muse, Dot and NanoClaw, "Duet is the first one that felt more useful than tedious". The author likes channels, per-channel repo access, and that "Duet stores no credentials and actively discourages being given them."
- **DoorDash:** Juozas Kaziukėnas [posted](https://x.com/juokaz/status/2115885504885395730) that DoorDash "says they have only received 'several hundred orders in total' from personal agents like Muse." A reply: "[lol i have personally done like 50 orders through an agent.](https://x.com/anthonyronning/status/2115925257257357600)"
- **The 49.7-day bug:** dax [asked](https://x.com/thdxr/status/2115995365140730339) whether "all those people buying mac minis for openclaw" never hit a macOS uptime bug. @GuyGotThis [explained](https://x.com/GuyGotThis/status/2115997585315951099): "49.7 days is 2^32 milliseconds. windows 95 hung at the exact same uptime, apple brought it back".

## Other Interesting Stuff

- **Martin Fowler on "[LLM Voice](https://martinfowler.com/bliki/LLM-Voice.html)"** (HN, 445 points): "it's not the em-dashes, it's the load-bearing tapestries." Martin advises authors not to let an LLM write a draft, because "Even if it's edited by a human, it's very hard to expel the LLM-Voice". The post ends: "I did not use AI or LLMs in any way while writing this post."
- **YC Labs ran [agent swarms in Minecraft](https://labs.ycombinator.com/projects/games/index.html)** (HN, 259 points): "50 GPT-6.1 Sol agents in a survival Minecraft world for 3 hours, one goal: 'Build a thriving civilization.'" They sent about 5,900 messages, and "A hierarchy was formed based on the directory order", so Ada, first in the directory, became the leader. "Four agents spent 11 minutes appointing a 'sole fertilizer operator' for a single piece of bone meal on a single wheat block." The harness, built on Pi and Mineflayer, is open source.
- **Zombie stats:** Trakkr [traced 1,285 statistics](https://trakkr.ai/trakkr-research/zombie-stats) cited by five assistants (HN, 158 points). 40% reached a study that says the same thing, and 11% "led nowhere at all". Claude quoted the most numbers (6.8 per answer) and sourced 38%. ChatGPT quoted 1.3 per answer and sourced 57%.
- **Orange Tsai** wrote up "[The Last Proof of Human Craft](https://blog.orange.tw/posts/2026-10-the-last-proof-of-human-craft-browser-full-chain/)" (HN, 238 points), "a completely handmade, logic-only Microsoft Edge Full Chain, with no memory corruption, and no AI at all!" The chain won $175,000 at Pwn2Own Berlin.
- **Armin Ronacher** [wrote up](https://lucumr.pocoo.org/2026/10/29/qwen3-custom-voices/) cloning, designing and blending voices with Qwen3-TTS for a dungeon crawler Armin is building with the kids. "You can probably point your agent to it and it can do something with it."
- **levelsio** [wants](https://x.com/levelsio/status/2115805396753383750) "a zero tolerance policy for AI replies" on X (4.3K likes). The top reply: "[Guy who sells AI photos is mad about AI replies](https://x.com/beaulawsonco/status/2115817270220095954)".
- **Deepgram is acquiring Daily** and [setting up an independent Pipecat Foundation](https://x.com/kwindla/status/2115791491586986432). swyx: "[could not imagine a better pairing.](https://x.com/swyx/status/2115908274570879076)"
