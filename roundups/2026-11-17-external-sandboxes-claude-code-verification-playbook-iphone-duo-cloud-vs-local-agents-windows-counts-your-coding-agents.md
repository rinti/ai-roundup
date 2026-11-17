---
title: "External Sandboxes, Claude Code's Verification Playbook, iPhone Duo in the Simulator, Cloud vs Local Agents & Windows Counts Your Coding Agents"
date: "2026-11-17"
summary: "A two-day issue, because Monday's run produced nothing. **Matt Pocock** wrote a month-by-month history of AI coding since Opus 4.5 and ended it with 'no-one is writing code anymore, and we are still figuring out what that means'. Pocock also picked 'nuance tends to lead to slop' as the line to keep from poteto's AI Engineer talk, then went live with Mario Zechner and Armin Ronacher. **Thariq** called software factories a temporary problem and said MCP is not a great protocol for what models can do now. **Peter Steinberger** told people to move to cloud agents and spent the evening explaining that this did not mean giving up your own hardware. **Simon Willison** and Prime Radiant published the external sandbox pattern, with three compatible sandbox servers for Claude Code, Codex and Pi. Theo fought the kanban crowd while T3 Code passed 60k stars, OpenCode Browse 0.1.0 shipped in Rust, and Tibo's Codex capacity fix drew 2,418 replies, most of them unkind. Anthropic published **how the Claude Code team verifies its work**, including a 39-item reliability checklist and a commit gate, and Claude Code on desktop can now fold an **iPhone Duo** in the simulator. Elsewhere, a reverse engineer found that Windows 11 reports which coding agents you run, macOS 27.3 splits its permissions for agent apps, Qwen4-Max landed without weights, Optimizely served malware to 178 organisations, and Microsoft traced last week's outage to a change made in July."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 17, 2026

There was no issue on Monday, so this one covers Sunday afternoon through Tuesday morning. bcherny, karpathy and leerob posted nothing in that time.

## Agentic Coding & Agent Harnesses

### A brief history of AI coding

[Matt Pocock](https://x.com/mattpocockuk/status/2122287575557706226) wrote the year up as a list, and 4,568 people liked it. It starts at "Nov 2025: Opus 4.5 releases, OpenClaw gets built" and reads like a diary of the mood. "Feb: Everyone feels knackered, too much strategic decision-making, fears around cognitive debt begin". "Apr: most SOTA devs haven't written a line of code in months". "Jul: Every talk in every conference becomes "here is my software factory"". Then the turn. "Oct: The promised speed gains haven't materialised, "dark factory" feels a long way off still" and "Nov: No-slop manifesto releases, reading the code still appears essential".

The summary line is "TL;DR: no-one is writing code anymore, and we are still figuring out what that means".

The replies argued with the last two months and with the summary.

- [@tommy5dollar](https://x.com/tommy5dollar/status/2122289731987972150) offered a different ending: "Oct: SDLC is running 2-3x as fast as pre-AI but it turns out product wasn't the revenue bottleneck" and "Nov: no one is reading the code any more and people are starting to question code review".
- [@paulbkimdev](https://x.com/paulbkimdev/status/2122294255121293714): "Posts like this show the massive gap between AI influencers and people actually shipping code at regular jobs." Pocock's [answer](https://x.com/mattpocockuk/status/2122294784236966191) was "I don't know anyone still writing code by hand".
- On speed, [Pocock](https://x.com/mattpocockuk/status/2122291330038874532) said "IMO it all depends on the defect rate, you WILL get slowed back down to 1x (or slower) if you don't stay on top of bugs".
- [@solomonmithra99](https://x.com/solomonmithra99/status/2122308615377932603): "Compilers ran the same arc: people stopped writing assembly years before they stopped reading the output."
- [@KennesLode](https://x.com/KennesLode/status/2122433975117590902): "a year of this and most companies still have agents that write a feature in 10 minutes, then it sits in review for a week waiting on Kevin"
- [poteto](https://x.com/poteto/status/2122540032787620064): "opus 4.5 feels like an eternity ago. incredible how far things have progressed in just a year"

### "nuance tends to lead to slop"

Sunday's issue covered poteto's AI Engineer talk. On Monday [Matt Pocock](https://x.com/mattpocockuk/status/2122316570852487441) (2,491 likes) picked the one slide worth keeping: "nuance tends to lead to slop". Pocock's reading is "To increase quality, design API's and automated checks that remove the nuance from agents' decisions." The examples are "Ban useEffect", "Ban 99% of explanatory comments (they just lead to workarounds)" and "Create API's that hide complexity from agents".

The obvious question came from [@0usage](https://x.com/0usage/status/2122317090652594673), who asked where the reason behind a non-obvious decision lives once explanatory comments are banned. Pocock's [reply](https://x.com/mattpocockuk/status/2122317494287204525) in the thread: "In my system it would be ADR's". [@vinicius2prg](https://x.com/vinicius2prg/status/2122336197003395215) compressed the talk further: "lint errors >>> AGENTS.md line. deterministic should always be code, not prompts". [@tejaskalpande](https://x.com/tejaskalpande/status/2122376998169571572) wants hooks for the same reason: "A line in AGENTS/CLAUDE.md can get skipped but hook that blocks the edit will force the rule."

poteto has moved on already. "[the thrill of starting a new compiler project is absurd](https://x.com/poteto/status/2122466044715642995)". poteto also [resurfaced](https://x.com/poteto/status/2122067662373269960) an older post about senior engineers building guardrails with "interesting how well this post aged" and asked "what are your predictions 1 year from now?"

### Thariq says factories are a temporary problem

[Thariq](https://x.com/trq212/status/2122438326431154210) of the Claude Code team got 5,865 likes for two sentences. "software factories feel like a temporary problem. the models will learn to build them for you". And "the more interesting question to me is how to build a workspace where agents can collaborate with you".

Karri Saarinen [asked](https://x.com/karrisaarinen/status/2122454072112689655) "What do you think it needs", and Thariq's [answer](https://x.com/trq212/status/2122517239811514405) is the part to read:

- "I don't think there's 1 overall solution, I dislike that people are trying to make "the one workspace app", instead I want people to be able to bring their own tools + services"
- "I think MCP is not a great protocol for current capabilities, the MCP Plugin Connector thing by OAI is much closer in what I'd like"
- "harness needs to evolve"

An Anthropic engineer saying OpenAI's connector design is closer to right than MCP is not something I expected to read this week.

[@fut_ure](https://x.com/fut_ure/status/2122454378829509087) thinks the workspace is personal: "are you a visual thinker, or love reading, or brainstorming? Agents will build that workspace too but they need to know you as a person". Thariq [agreed](https://x.com/trq212/status/2122454802630373393): "Yes agree, not one size." [@sumant_us](https://x.com/sumant_us/status/2122533324443054564) "gave the agents a whiteboard where I can drag and comment on pieces and get live responses". Thariq's own example is the side-project game, with a [video](https://x.com/trq212/status/2122438328079524159) captioned "this is me working with agents on a new character for my game".

### "move to cloud agents. local isn't the future"

[Peter Steinberger](https://x.com/steipete/status/2122412909619994984) wrote that in reply to @mattt and got 139 replies, most of them objections.

- [@Drewski1138](https://x.com/Drewski1138/status/2122458565176590497): "-says man with monetary interest in the success of cloud agents." Steinberger's [answer](https://x.com/steipete/status/2122459368407150806): "I shipped a whole stack of tools so you can run cloud agents on your infra and with local inference. But sure 🤣"
- [@eligaultney](https://x.com/eligaultney/status/2122441693152571494): "hard disagree on this one. having my agent on my home desktop, on that network in particular, is hugely powerful."
- [@pa1ar](https://x.com/pa1ar/status/2122450106905457006): "we don't own our storage, our services, our inference already" and "now you suggest that we stop owning the whole computer?"
- [@softverity](https://x.com/softverity/status/2122429356329050492): "For the time being too much is blocked from non residential networks."
- [@ZazenCodes](https://x.com/ZazenCodes/status/2122436799650021518): "I can't render videos or develop my iOS apps in the cloud"

Steinberger kept clarifying. "[you can run cloud agents fully on your own infra, like we do on openclaw+crabbox+podman](https://x.com/steipete/status/2122455992214671500)". And on iOS, "[i mean iOS is a niche use case and you can rent and use macOS runners, but the less expensive way is a mini, yeah](https://x.com/steipete/status/2122486632821756291)". [LLMJunky](https://x.com/LLMJunky/status/2122527384469663945) tried to settle it: "He's not talking about local models." and "Hes talking about your local file system."

So the claim is narrower than it sounded. The agent should run on a machine that is not your laptop, and that machine can still be yours.

### External sandboxes

[Simon Willison](https://x.com/simonw/status/2122500307557265651) has been working on the opposite arrangement and published it with [Prime Radiant](https://x.com/simonw/status/2122500313886396840), "the AI research lab behind Superpowers". The [write-up](https://blog.primeradiant.com/external-sandboxes-for-coding-agents/) describes "the external sandbox pattern, where agents run on your Mac but execute code in a WebAssembly or QEMU or Apple Container sandbox".

The reasoning is in the post. Approving every action by hand "is a terrible way to work!" Claude Code's auto mode and Codex's auto-review "appear to work well", but "they still rely on a model judging each action correctly. A sandbox is a protection that doesn't depend on any model's judgment." That matters most for cheap and local models, which "are more prone to mistakes and are easier victims of deliberate prompt injection attacks."

What they built is three servers that speak one protocol.

- `external-sandbox-v86` "is a Node.js process that uses v86 in WebAssembly" to run Alpine Linux. It starts with `npx`.
- `external-sandbox-container` wraps Apple Containers.
- `external-sandbox-quicksand` runs "a full QEMU virtual machine using Microsoft's Quicksand".

All three give the sandbox only the folders you mount and no network by default. The optional proxy does allow-listing and what [Willison](https://x.com/simonw/status/2122500317187330279) calls "a credential replacement mechanism to make authenticated API calls without sharing a secret with the agent". There is a [protocol spec](https://github.com/prime-radiant-inc/external-sandbox/blob/main/PROTOCOL.md) and a conformance tool, so other sandboxes can join.

The agents differ in how much they hand over. Pi sends "its bash, read, write, edit, grep, find and ls tools". Codex sends "its process and filesystem operations, including native apply_patch". Claude Code is the weak one here: "Claude Code sends only its Bash tool commands to the sandbox. Its native Read and Edit tools still run on the host, outside the sandbox."

[@johnroodepic](https://x.com/johnroodepic/status/2122503895570382985) put a finger on the same gap: "the sandbox bounds what the code can touch, not what the agent can read. the agent is still on your mac with your env vars and your ssh keys, so a prompt injection doesn't need to escape the box, it just asks the agent on the outside." [@tazqen](https://x.com/tazqen/status/2122515194240811483) wants a Windows version, with "a throwaway WSL instance as the external sandbox".

A second post attacks the credentials half from the cloud side. Antonio Mika runs agents on throwaway VMs and wrote [lend](https://blog.antonio.cx/running-agents-with-lend) so they can still act as the user. "The agent asks to run something, I approve it with Touch ID, and the agent gets the output back." When an agent on the VM asks to run `gh`, "gh runs on my laptop with my login. The token never leaves the laptop, so the agent never has it." It reached about 121 points on [HN](https://news.ycombinator.com/item?id=50526152), where ryanczak noted that "Docker sandboxes support secret injection."

### Theo against the kanban

[Theo](https://x.com/theo/status/2122201652493230343) (2,826 likes) saw one more board screenshot. "Every single time someone says T3 Code isn't "optimal for real work" they show the most useless 2025-era kanban slop that wastes over half the screen real estate for in-progress work."

The author of the screenshot, [@agent_wrapper](https://x.com/agent_wrapper/status/2122202690256289857), explained that the criticism was about the "lack of dedicated coordinator / orchestrator" and that "The kanban view is a good way to skim through backlog / unfinished work". Theo's [reply](https://x.com/theo/status/2122204073466413176) got 268 likes and was not an argument: "My criticism is that I don't think you're a very good programmer". [@fatwang2ai](https://x.com/fatwang2ai/status/2122205719277822422) tried a middle position, "Kanban is unnecessary, but T3 Code should learn somthing from the new Claude Projects, it is really amazing". Theo answered "No". [@lethiakx](https://x.com/lethiakx/status/2122216252441837777) had the diagnosis: "I think the long-term trauma caused by jira has possibly resulted in some degree of brain damage".

Theo [added](https://x.com/theo/status/2122201981167251877) some history: "I was an investor in and contributor to Vibe Kanban. They realized kanbans were dead and started moving to basically the exact UI that T3 Code has today." And "They didn't finish fast enough. They gave up and shut down the company."

The project itself is doing fine. "[We broke 60k stars when I was on vacation](https://x.com/theo/status/2122458476345717169)", at "Over 1k a day consistently". [@jullerino](https://x.com/jullerino/status/2122511041938825551) shipped a new stable with replies to responses, deeper theme customisation, running "T3 Code as a Windows service", device approval for T3 Connect, and one small feature I would like today: "T3 Code keeps your computer awake while agents are working, then releases it afterward." Theo on [why it exists](https://x.com/theo/status/2122461831902138489): "It wasn't built to be popular. It was built to lower my stress levels after every other tool disappointed me."

### OpenCode Browse 0.1.0

Sunday's issue had dax rewriting OpenCode Browse in Rust for $60. It is [released](https://x.com/opencode/status/2122377687968678258): "25x less memory", "23x smaller" and "removed dependency on playwright". [dax](https://x.com/thdxr/status/2122377981087674641) pointed at the last line of the release: "all the browser tools are now available in codemode", so an agent can "open a url, fetch a list of things, iterate over them and call your mcp tool in a loop, then continue".

The [HN thread](https://news.ycombinator.com/item?id=50523459) (about 297 points) was mixed. esafak: "It's all right when it works, but it has a habit of disconnecting; you have to rerun 'browse pair'." jeremyjacob said "The functionality seems to overlap with the Playwright MCP server". testtestmetest was harsher: "Opencode vibe codes and releases like 3 projects a week at this points. Cool, just know its throwaway software to them."

dax had other things to say over the two days.

- On [workflows](https://x.com/thdxr/status/2122346446028759521): "you'll never see anyone on our team evangelizing their ai workflows", because "99% of the magic is coming from the model".
- On [GPUs](https://x.com/thdxr/status/2122493644129054781): "i posted this a month ago and we now have 1000 GPUs", "all on short term contracts".
- On [npm](https://x.com/thdxr/status/2122349524714754416): "they need to make it better to distribute native binaries. everyone is doing hacks so that npm i mypackage works across all platforms".
- On [credentials](https://x.com/thdxr/status/2122022494337106408): "man agents make doing least privilege credentials in things like aws so easy".

### Tibo fixes capacity errors and reads the replies

[Tibo](https://x.com/thsottiaux/status/2122206990101536852): "Codex team might have actually fixed the "model at capacity" errors that have been pestering you." It got 8,906 likes and 2,418 replies. The top reply, from [@jmaloneVS](https://x.com/jmaloneVS/status/2122207211803771013), got 5,134 likes on its own: "lol yeah because everyone is using Opus 5.5 and not codex anymore". [@sdmat123](https://x.com/sdmat123/status/2122208625817182665): "Are you sure Anthropic didn't fix them?" [@CtrlAltDwayne](https://x.com/CtrlAltDwayne/status/2122213602459599110): "Prove it. Reset the limits then."

Tibo's posts keep going this way. The replies ignore the news and ask for something else.

### Shorter items

- **Together deleted its megakernels.** [swyx](https://x.com/swyx/status/2122566522094915765) flagged Together's [compiler post](https://www.together.ai/blog/road-to-together-compiler). The megakernels from last year were fast, but "After months of effort, we had a grand total of one model, one batch size, and one customer." Together Compiler "uses AI agents to rewrite and fuse the GPU kernels in a model's forward pass" and "beats hand-written megakernels by 28% on B200".
- **1Password for dots.** [@JamesZmSun](https://x.com/JamesZmSun/status/2122430860012191980), retweeted by Steinberger: "We're starting to test 1password in dots!" The goal is "to make it easy for your dot to do tasks that require a login, while keeping your credentials secure."
- **Kimi on Cerebras.** [@communidiyi](https://x.com/communidiyi/status/2122405732738105491) is running a weekend with "early access to @Kimi_Moonshot kimi k3.1 on @cerebras" and "$5000 in prize money".
- **Codex meetups.** [@paw_lean](https://x.com/paw_lean/status/2122406419039174749): "We have 23(!!) events on the Codex Community calendar this week".

## Claude Code & Anthropic Updates

### How the Claude Code team verifies its work

[ClaudeDevs](https://x.com/ClaudeDevs/status/2122457608963395586) published the [follow-up](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) to the code review post. It opens with a number, "the vast majority of our code (~90%) is written and reviewed by Claude", and a claim: "Without them, you can really only run one or two Claudes at a time, because you have to check everything yourself. With them, you can run dozens or hundreds in parallel." Them being verification loops.

The first half is general advice. Three kinds of test are worth the investment: end-to-end, property and differential. "If you have to focus on one test type, pick end-to-end", because "either the whole feature works or it doesn't". Flaky tests are worse than no tests: "If your tests are flaky you'll train the agent to run them again rather than fixing the failing code."

The second half is what the team does, and it is more specific than these posts usually are.

- **A `verify` skill.** "To codify how to start the simulator or run your app, create a skill called verify." And "Running the app end to end matters more than tests."
- **Three rounds, then a human.** "If a check is still failing after three rounds, Claude stops and brings in a human."
- **A checklist matched against the diff.** "We maintain a reliability checklist with 39 items, each with a trigger that can be read from a diff, a check, and the incidents or PRs behind it." Claude checks "only the items whose trigger matches–usually 3 to 10–so nobody has to memorize past outages."
- **One tuned reviewer.** "Adding a second, more expensive, reviewer on top of the primary one is often a worse approach than tuning the primary."
- **The change cannot edit its judge.** "If a change can modify the check that judges it, the check is broken." Code Review reads REVIEW.md "from the base or default branch".
- **Commit stamps.** "In our own repos, we stamp each commit with how it was verified. The stamp even includes "none" so we can query for commits that weren't verified."
- **A commit gate** that blocks a commit "if the session did not contain /code-review or /verify", with an escape hatch: "If commits have been blocked twice in the session, the next one will be allowed through so Claude doesn't get stuck – Claude Code isn't perfect."
- **Flaky tests.** "Claude can't skip them, add sleeps or retry until they pass. If it can't find the root cause, it deletes the test and writes down why."

[Hacker News](https://news.ycombinator.com/item?id=50529612) was not impressed, at about 76 points. OtherShrezzing: "This article feels like the result of having unlimited tokens at your disposal. It's got some very expensive practices, where near-free practices would produce the same or better results." girvo: "Im already spending my $2k usd per month in tokens with just one or two agents. How do they expect me to do that?" koolba objected to the premise that nobody can read every change: "The trick is to break things into small enough pieces that you can review them."

Read next to poteto's talk, the two teams agree on more than they differ. Both replace prose rules with checks that fail.

### iPhone Duo in the simulator

[ClaudeDevs](https://x.com/ClaudeDevs/status/2122439098740674839) (12,348 likes): "Claude Code on desktop now supports iPhone Duo in the iOS simulator (public beta)." Claude "can fold and unfold the device to test each layout." It is "[Available today in Claude Code on desktop (macOS, Xcode 27.1 or later)](https://x.com/ClaudeDevs/status/2122439102981390562)". For existing apps, Claude Code "[can offer to install Apple's App Resizability skill](https://x.com/ClaudeDevs/status/2122439100854939907), which scans your project for layout issues and suggests fixes." Terminal users get the Xcode plugin in the official marketplace with `/plugin install xcode@claude-plugins-official`, which lets Claude "[build, run, and test your app, render SwiftUI previews, and search developer docs](https://x.com/ClaudeDevs/status/2122439104419790958)".

Replies: [@undefinedKi](https://x.com/undefinedKi/status/2122439843158642715) "send this to apple". [@pggalaviz](https://x.com/pggalaviz/status/2122472473480589531) "Android devs have been doing the folding by hand for years haha". [@philipengberg](https://x.com/philipengberg/status/2122650116725055805) "Why the f*%# does Codex not have this?" [@bil0090](https://x.com/bil0090/status/2122447742630850618) claimed prior art, "We had this in T3 Code for sometime now btw", and [Theo](https://x.com/theo/status/2122473901116805374) turned that into a "Leaked internal prompt" joke about Claude being told to copy T3 Code.

### Fable says ship it

[Theo](https://x.com/theo/status/2122429147289206976) (6,477 likes): "Fable 5.2 is the first model that consistently ignores unimportant feedback. It's incredible." The example: "Had at least a dozen instances where I used Opus for a thread, it started running in circles, swapped to Fable and it was like "wtf this is fine just ship it"".

[@Moriarty_tech](https://x.com/Moriarty_tech/status/2122438422727934314): "Fable reviewing Opus threads like the senior who just wants to go home 😂". [@marcelmarais](https://x.com/marcelmarais/status/2122429470401249446): "agreed, lgtm is a sick feature with Fable". The complaint is the usual one. [@dom_scholz](https://x.com/dom_scholz/status/2122430250290491450): "if only it didn't run out so fast 😅". [@DavidTranAI](https://x.com/DavidTranAI/status/2122438084168147362): "Yeah Fable 5.2 really makes the best decisions but the usage is just so painful."

### People are making games with it

[Jerry Liu](https://x.com/jerryjliu0/status/2122127601791885607) had a childhood wish to combine Harry Potter and Call of Duty. "introducing muggle warfare: the battle of hogwarts". The [method](https://x.com/jerryjliu0/status/2122127603192717463): "i fed a 200-word prompt into claude code fable 5.2 xhigh". [@disiok](https://x.com/disiok/status/2122129061153755607): "you can just do things (even if you are a CEO)". [dax](https://x.com/thdxr/status/2122198024067940628) "use fable 5.2 to refresh some of my carrier game", and [Thariq](https://x.com/trq212/status/2122154124024381828) showed "a new arena and two new characters".

## Videos & Podcasts

- **[LIVE: Writing code that doesn't suck with the creators of Pi](https://www.youtube.com/watch?v=ZBTegd8DUZM)** (Matt Pocock, about 59k views). "Matt Pocock talks with Mario Zechner and Armin Ronacher about how to write code with agents that isn't absolute garbage." Pocock's [announcement](https://x.com/mattpocockuk/status/2122325627529519558) gave the theme as "Maybe we need to slow the f*** down". Under an hour after the start time, [Ronacher](https://x.com/mitsuhiko/status/2122377198946365917) posted "Doing a podcast from a parked car. Done."
- **[All Code Is Slop (Except Mine)](https://www.youtube.com/watch?v=O_zcc6Xl12g)** (AI Engineer, about 670k views). poteto's talk, covered Sunday, now has chapters, including "Replacing comments with lint rules" at 6:56 and "Formal verification and UI testing" at 10:50. swyx [linked](https://x.com/swyx/status/2122031563961684032) a written recap on ai.engineer and [said](https://x.com/swyx/status/2121896675048587765) "the day 1 livestream has crossed 100k in the fastest time ever."
- **What's new in Grok Bot 1.0.** [@mattyp](https://x.com/mattyp/status/2122343944889483583) posted a walkthrough with chapters for "Bots join your meetings", "Bots take initiative" and "Bots learn and improve".
- **Code Summit recap.** [AI Engineer](https://x.com/aiDotEngineer/status/2122366588582015138): "Code Summit, through the people who were there." Armin Ronacher's [verdict](https://x.com/mitsuhiko/status/2122080398419132645): "this single track conference was entirely up my alley."
- **Coming up.** [Clare Liguori](https://x.com/clare_liguori/status/2122390620308377771) will "lead the Developer keynote at AWS reInvent this year", on "Monday, Nov 30, 7:30 pm - 8:45 pm". [swyx](https://x.com/swyx/status/2122418961107284083): "Clare is an AWESOME speaker".

## Other Interesting Stuff

### Windows 11 counts your coding agents

Xusheng Li asked an AI to look through Windows binaries for undocumented features and [found a list](https://xusheng.dev/posts/windows-coding-agent-telemetry/) in `MissionControlAggregator.dll`: "coding agents such as codex.exe, claude.exe, copilot.exe, and cursor.exe, alongside familiar developer tools such as python.exe, dotnet.exe, gcc.exe, and code.exe."

The component "records which coding agents and developer tools have been used, saves that information locally, and reports it to Windows Diagnostics. And unless you have opted out of the "optional" diagnostic data (which is enabled by default), the data is uploaded to Microsoft." There are "four CLI-agent slots checking copilot.exe, claude.exe, codex.exe, and agy.exe" and "Five desktop-agent slots". The feature flag is named `CLICodingAgentUsage`.

The report is narrow. The component "appears to discard those details and record only a bitmap of which agents were observed", and Li "found no prompt text or source code in this report". The matching is by file name only: "I copied cmd.exe to a file named codex.exe and ran it in the interactive Windows session. The name alone was enough for the component to recognize it as Codex."

On [HN](https://news.ycombinator.com/item?id=50524736) (about 660 points), lesspassiveobse saw a statistics problem: "That's one way to get very skewed data. Determine programming tool use but only from the population that uses Windows with optional telemetry enabled." speed_spread: "It's just prefiltered. If you're smart enough to disable telemetry, you're not part of the market segment they're interested in."

### macOS 27.3 splits permissions for agent apps

Apple followed up on October's Full Disk Access warning. [MacRumors](https://www.macrumors.com/2026/11/16/macos-27-3-full-desk-access/) reports that in the 27.3 beta "The current Device Control and Data Access setting will be split into two options", named "System & App Protection Override and Accessibility". Users "will have an option to configure apps to ask each time for required access rather than granting an app unrestricted access", and "There will be a transparency indicator when a requesting app is controlling another app". Apple's [support page](https://support.apple.com/en-us/149699) explains that with a full override an app "can fully control your Mac and apps", can "see every window and app, including ones in the background, and capture every keystroke."

The agent crowd took it badly. [Steinberger](https://x.com/steipete/status/2122463466304971068): "People: Please reduce the number of permission alerts so agents can work on macOS without constant babysitting" and "Apple: I hear you, here's some new scary alerts". [Theo](https://x.com/theo/status/2122481947213717705): "Apple stays impressively behind. It's like they want us to reconsider our choice to use MacOS."

I think Apple has the better of this one. Per-folder and per-app grants are what the sandbox posts above are asking for.

### Qwen4-Max

Qwen4-Max reached about 865 points on [HN](https://news.ycombinator.com/item?id=50513215). I could not read Qwen's own page, so this is from the thread. It is not an open-weights release. nixosbestos: "oh, I guess this isn't open weights". maplet: "It scores a 43 on Artificial Analysis with an average cost of $3.27", against "GPT-6.1 Sol (medium) gets a 46 with an average of $0.36." esperent objected to the comparison: "If they are not testing Chinese models with less than max thinking, then we should only compare them to other models also at max thinking." xiaoyu2006: "Disappointing performance for a 2.4T model in the end of 2026."

Simon Willison ran "Qwen4-Max pelicans at four reasoning efforts" and noted "Turns out Qwen4-Max has a none setting, but 3.8 Max didn't allow disabling reasoning". Most of the thread is waiting for the smaller models. m00dy: "I bet most of us waiting for 27b model and want to see how good it will be."

### Optimizely served malware to 178 organisations

[Report URI](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/): "On 16 November 2026, malicious JavaScript was served to visitors of 178 organisations through the Optimizely Web experimentation platform." The list includes "Zoom, the BBC, CNN, Salesforce, GitLab, IKEA, HSBC, Equifax, Air France-KLM, Ledger and Peacock." The kit "swapped cryptocurrency wallet addresses for the attacker's, skimmed payment cards, stole cookies and screenshots", and on iPhones and iPads delivered iOS exploit kits.

The method was simple. "The attacker wrote their own code into the Project JavaScript of customer projects, and the rest of each snippet was untouched." The file still came from cdn.optimizely.com "with Optimizely's certificate". Report URI sells the detection, so read its pitch with that in mind, but the lesson holds: "trusted JavaScript doesn't always remain trustworthy." About 444 points on [HN](https://news.ycombinator.com/item?id=50524767).

### The outage week gets an explanation and an essay

Microsoft published a preliminary report on last week's Microsoft 365 outage. [The Register](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) says the cause was "a change it made in July that lurked in the network gateway servers until a surge in load and a drop in capacity triggered the defect". The testing missed it: "Our load testing tended to focus on weaker hardware with fewer cores."

Monday added two more. HN's front page had "[Technical issue at JPMorgan Chase triggers online banking delays for US banks](https://news.ycombinator.com/item?id=50521045)" from AP and "[United Airlines experiencing a widespread system outage](https://news.ycombinator.com/item?id=50524165)" from CNN. I read neither article. [Theo](https://x.com/theo/status/2122518894263025737) was on a United flight that evening: "Worst travel day of my life. Should have been home 6 hours ago but still haven't taken off."

Jimmy Breck-McKye tied it together in [Software is breaking down at a systemic level](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) (about 375 points on [HN](https://news.ycombinator.com/item?id=50520866)). "You might be tempted to blame AI, and you wouldn't be completely wrong", but "AI is both a cause and a symptom of the problem here." The essay's worry is not bad model output. "They're actually pretty good at doing what you ask them to do". It is that "we are all fighting the tide of small, incoherent changes that look rational in isolation but slowly lose sense as a whole."

HN pushed back. dividedcomet: "This feels a little hyperbolic". LPisGood: "Software has always been broken at a systemic level."

### Nvidia, day five

HN carried a Reuters item headed "[Jensen Huang might return to Nvidia as CEO](https://news.ycombinator.com/item?id=50511982)" (about 177 points). I could not read Reuters, so this is the thread's account. futxtuxutxutxut: "The US Treasury Secretary said today that the board needs to select an external hire for CEO", which "makes it seem extremely unlikely that Jensen can return." waximabbax: "This isn't OpenAI in 2023. Nvidia is a public company".

[dax](https://x.com/thdxr/status/2122556704801820867) thinks the export fight is already lost: "the us gov is pretty far behind on the chip stuff, it's mostly pointless now that the worst case outcome already happened". "deepseek v4 already designed for and served on non-nvidia chips", and "v5 could potentially be trained with zero nvidia chips at all".

### ParseBench-2 gets a Metric Lab

[Jerry Liu](https://x.com/jerryjliu0/status/2122019605271167009): "ParseBench-2 hit 30k monthly downloads in 3 days". The new piece is the [Metric Lab](https://x.com/jerryjliu0/status/2122492826172952734), "a simple interface where you can define how much you care about different evaluation metrics, and how you weigh different severities", because "not everyone weights the same errors equally". [LlamaIndex](https://x.com/llama_index/status/2122422794361377268): "Watch all 19 parsers re-rank live in your browser". Liu also [described](https://x.com/jerryjliu0/status/2122370561682907447) the forms set: "600 pages from 244 government form templates across 30 countries, with 20K annotated fields".

### One more

The top story on Hacker News across both days, at about 1,537 points, was "[Carnegie Mellon is putting computer science courses on YouTube for free](https://news.ycombinator.com/item?id=50522980)". The courses are at [cs.cmu.edu/learn](https://www.cs.cmu.edu/learn/).
