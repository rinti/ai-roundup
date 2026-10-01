---
title: "Gemini 4 Argon arrives for cyber defenders only, Figma's MCP allowlist locks out Pi, OpenAI names Moonshot in a distillation campaign, Effect 4.0 courts agents"
date: "2026-10-01"
summary: "Google DeepMind launched **Gemini 4 Argon**, but only for trusted cyber defenders in its Fairwind Program, who get it without cyber guardrails. Google claims state of the art on DeepSWE (77.9%), a 1M-token output limit and $2/$10 introductory pricing. Artificial Analysis scores it 53, level with GPT-6 Astra, with a 15% hallucination rate, though it trails both Claude 5.5 models and Astra on Terminal Bench 4. Theo's reaction was 'Wait what'. **Figma's MCP server turned Pi away** because Pi isn't on its client allowlist. MCP co-creator David Soria Parra and Armin Ronacher objected, and by evening Dylan Field promised Pi support. Tibo called **GPT-6.1 Sol** OpenAI's most demanded model ever, ChatGPT Sites can now host MCP servers, and Daybreak Blue needs a hardware key from today. OpenAI also tied a **reasoning-extraction campaign** of 16,000 requests in two days to people associated with **Moonshot AI**. Anthropic opened **claude.dev**, Thariq walked through a game prototype built with AI, Matt Pocock called **Effect 4.0** 'insanely good to use with agents', and Matthew Green argued that agents which obey any text put in front of them are half of a worm."
tags:
  - Gemini 4 Argon
  - Figma, Pi & MCP
  - "OpenAI: Sol Demand, Sites MCP & Moonshot"
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Videos
  - Other Interesting Stuff
---

# AI Roundup — October 1, 2026

Wednesday's big launch came in the European evening. Google shipped Gemini 4 Argon, which almost nobody can use yet. Earlier in the day, Figma's MCP allowlist kept Armin Ronacher and the MCP crowd busy, and OpenAI spent the day after DevDay adding capacity and shipping smaller things. Andrej Karpathy hasn't posted since September 10. Lee Robinson posted nothing new, Boris Cherny only retweeted, and Simon Willison posted on his blog and Bluesky, not X. Nitter's thread pages were down on every instance during this run, so there are no X replies or like counts this time. @potetotes still 404s, so Lauren's posts come from [@poteto](https://x.com/poteto).

## Gemini 4 Argon

**Google's new frontier model goes to cyber defenders first.** Google DeepMind [introduced Gemini 4 Argon](https://x.com/GoogleDeepMind/status/2105388084154056939) as "our new frontier model," rolling out "to a set of trusted testers through our Fairwind Program" ([blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), [HN](https://news.ycombinator.com/item?id=49913571), 1,283 points). Paid API customers and Google AI Ultra subscribers are next, with no date given. Theo's entire reaction was ["Wait what"](https://x.com/theo/status/2105394507089154278).
- Trusted defenders and Google's own teams get Argon "without cyber guardrails." Everyone else waits while Google iterates on guardrails and goes through the U.S. government's voluntary pre-release access process.
- Introductory pricing is $2 per million input tokens and $10 per million output, with cached input 95% off. After that it's $4/$20.
- The output limit goes from 64K tokens to 1M.
- Google's own numbers: 77.9% on DeepSWE v1.1, #1 on the Vals Index, 51.3% on Zapier's AutomationBench, a tie for first on CWE-bench v1 at 68%, and 91.7% on LVBench for long video. AINews puts Opus 5.5 at 74.2% and Astra at 74.1% on DeepSWE.
- Google monitored the model's chain of thought during training, "taking careful precautions against feeding the findings back into training so as to not risk shaping Argon's reasoning to evade our monitoring." It also says Argon leads Gray Swan's indirect prompt-injection benchmark.

**What Google says Argon already did internally.**
- A team of Argon agents went through fleet-wide profiling data and freed more than 300 TiB of data-center memory. Google expects 500 TiB to 1 PiB in total.
- Argon agents are migrating C and C++ codebases to Rust across Google, from re2 and libgav1 up to the 800K+ lines of the Fuchsia Zircon kernel.
- In libgav1, the agents replaced 32K lines of SIMD code in an existing Rust port with safe Rust that the compiler vectorizes on its own. The decoder now runs 2.7x faster than that port, with identical output.
- On a quantum computing subroutine, it beat the published baseline by 40% "in a matter of minutes."

**Artificial Analysis puts Google back in the top three.** Their [write-up](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs) ([HN](https://news.ycombinator.com/item?id=49914236), 100 points) has the independent numbers.
- Argon (high) scores 53 on the Intelligence Index. That ties GPT-6 Astra (max), beats GPT-6.1 Sol by one point, and is 23 points above Gemini 3.1 Pro Preview.
- At the launch discount, a task costs $1.99 against Astra's $3.26. The savings come from price, not efficiency. Argon averages 62K output tokens per task to Astra's 27K. At full price it's $3.98, about 1.2x Astra.
- Terminal Bench 4 is 57%, behind Sonnet 5.5 (64%), Opus 5.5 (60%) and Astra (59%). It's first on AutomationBench-AA at 78%.
- The hallucination rate on AA-Omniscience is 15%, against 51% for Astra and 54% for Sol. Argon says it doesn't know more often, but its raw accuracy is 13 points below Astra's.
- They got to 1M output tokens with Long Decode Continuation, a new Gemini API feature that pauses a long response and resumes it across calls.

**The skeptics.** Google claims first place on 13 of 19 published benchmarks, per AINews, but @BlackHC pointed out that Argon's 19.6% on Harvey's legal benchmark trails Muse Spark 1.2's 25.42%, and @teortaxesTex suspects benchmaxxing. On HN, A_D_E_P_T called it "decidedly inferior to Opus 5.5" and found it "comical that they're delaying its launch 'for safety reasons'." thereitgoes456 disagreed: "It's comparable to Opus 5.5 on 'high' (54 vs 53; $1.82 vs $1.99)" and has "way lower hallucination than every existing model."

**Why so careful?** [The Verge](https://www.theverge.com/tech/1002980/google-gemini-4-argon) writes that Argon "is launching first in a limited capacity so Google can make sure it's not misaligned." The Verge also notes that apparently leaked benchmarks went around X earlier in the week, and that Koray Kavukcuoglu became DeepMind's boss in August. Tulsee Doshi, Gemini's model product lead, told [CNBC](https://www.cnbc.com/2026/09/30/google-gemini-4-argon-ai.html) the staged rollout lets Google "put a model that is trained and strong in cyber defense in the hands of defenders as soon as possible."

**On HN.**
- babelfish: "Gemini not beating the 'can't release a model' allegations."
- modeless: "When I said I was tired of Google launching waitlists I didn't think they would respond by simply not having a waitlist."
- Androider, a paying Pro user in the US, still sees Gemini 3.6 as the newest model in the app: "Gemini 3.7 was released in August, 3.8 early September. What is going on over there?"
- lukewarm707 points out that Google's API doesn't return the real chain of thought, so users can't monitor it the way Google does.
- tazjin remembered Google's cppnext team "refusing to even consider Rust, instead looking at absurd stuff like Carbon and Swift (!)." minimaxir: "A RewriteInRustBench would be unironically useful at this point."
- SwellJoe: "My girlfriend, you wouldn't have met her, she lives in Canada, has seen it and she thinks Gemini 4 Argon is amazing."

## Figma, Pi & MCP

**Figma's MCP server only talks to approved clients.** Mario Zechner posted ["today in MCP land ... thing are better compared to a year ago, but also worse"](https://x.com/badlogicgames/status/2105234146499203255), and MCP co-creator David Soria Parra (@dsp_) replied ["@figma please fix this"](https://x.com/dsp_/status/2105241259887444440). Gayani from Figma [confirmed](https://x.com/GayaniFigma/status/2105295629941350454) that "our remote MCP server only accepts clients on our supported list, and Pi isn't on it yet," and linked a form for asking to be considered.
- David [answered](https://x.com/dsp_/status/2105316536852320279): "when I created MCP, I envisioned an open ecosystem. That to me feels core. Seeing restrictions like this is sad and I hope Figma can get to a point where it's more open or at least make the process of getting into the allowlist very easy." Peter Steinberger retweeted it.
- Armin Ronacher: ["Evidently Figma does not understand the point of open protocols."](https://x.com/mitsuhiko/status/2105320100823789698) Earlier he'd posted ["Implement an open standard they said. The open standard in practice."](https://x.com/mitsuhiko/status/2105232743286309082) and ["Composable tool search for MCP would be nice."](https://x.com/mitsuhiko/status/2105238538266824795)
- @_lopopolo's [suggested user agent](https://x.com/_lopopolo/status/2105383736879804584), also retweeted by Steinberger: "ChatGPT/5.0 (Linux 2.4; arm64; x64) Claude/537.36 (Bun, like Node) Pi/154.0.0.0 Anthropic/537.36".

**"We plan to support Pi."** Figma's Dylan Field [settled it](https://x.com/zoink/status/2105380573804142687) that evening. Armin said ["Thank you!"](https://x.com/mitsuhiko/status/2105391293035589848), then: ["But while I appreciate it. I also really wish it was open indiscriminately."](https://x.com/mitsuhiko/status/2105392134081687927) On [Bluesky](https://bsky.app/profile/mitsuhiko.at/post/3mws7x66mg222), Armin added that Pi is "intentionally not supporting parts of MCP (eg: elicitations)" and doesn't handle stateless servers yet, since there are none to test against. "That's pretty common today for MCP clients."

**HN argues about "You said no MCP."** Pi's post on yesterday's reversal reached [633 points](https://news.ycombinator.com/item?id=49906637).
- _fw: MCP is suboptimal, "but so is USB-C. So is NVME, so is HDMI."
- skohan isn't sure about moving codemode into the core, "as one of pi's main selling points was its minimal nature."
- mikeocool says there "already was 'something' that the creators of MCP just ignored": OpenAPI specs with OAuth2, where the harness stores the token and inserts it into requests.
- wren6991 asked why agents need codemode when they already have bash. nextaccountic: "bash inherits the ambient authority of the shell," while tool calls written in JavaScript or Python allow a real permission system.
- Armin, who wrote the post, said codemode "is a way for the LLM to orchestrate harness level tools," and that labs increasingly train for it: "Codex for instance in responses lite requires codemode to even perform parallel tool calling."
- He also discouraged reading an agent's summary of the PR: "I don't think it's a good idea to put your clanker to a PR and then try to explain it. That's because you are then reading a derivative work of a derivative work instead of going to the source."

## OpenAI: Sol Demand, Sites MCP & Moonshot

**Sol is "our most demanded model pretty much ever."** Tibo [said](https://x.com/thsottiaux/status/2105464274747527543) demand for GPT-6.1 Sol is high in both the API and subscriptions, and ChatGPT and Codex ran under heavy load. OpenAI has added capacity, and speed in ChatGPT and Codex should reach "almost twice the speed compared to what we served yesterday."
- AINews collected the first Ultrafast measurements. OpenAI quotes up to 300 tokens per second, and SemiAnalysis reports it runs on NVIDIA GPUs at low batch sizes, not on Cerebras. @sayashk measured about 8x faster generation but only 2x to 4x faster end-to-end agent tasks, because tool latency dominates. The test burned a weekly limit in about two hours.
- Artificial Analysis' Sol post reached [79 points on HN](https://news.ycombinator.com/item?id=49906669). Dinuda: "After 5.5, I basically don't notice a jump in model performance, other than my usage ending sooner." baq: "Sol 6.1 is very noticeably smarter than sol 6 even after half a day of using it."
- am.will: ["Crazy how we're normalizing a $500 AI subscription. That's a whole ass car payment. Wouldn't surprise me to eventually see Pro 1000 plans at some point."](https://x.com/LLMJunky/status/2105362923292114967)

**ChatGPT can now host MCP servers.** "One more thing," Tibo [posted](https://x.com/thsottiaux/status/2105519215092584786): "you can now build and deploy MCP servers right through ChatGPT. And restrict its access to anyone you want or share it with the world." Max Stoiber's [launch post](https://x.com/mxstbr/status/2105428405571428785) explains it. You type `@sites create a todo list that I can use in ChatGPT`, and Sites creates an MCP server with extensions, deploys it, turns it into a plugin and installs it on web, mobile and desktop. "ChatGPT is slowly becoming malleable software that anybody can customize to their needs."

**Daybreak Blue needs a hardware key from today.** From October 1, individual Daybreak Blue users need an eligible hardware key to use cyber-forward capabilities. Enterprise users aren't affected ([Tibo](https://x.com/thsottiaux/status/2105344469923221941), [enrollment](https://x.com/thsottiaux/status/2105344482149613853)). "Hardware keys are a needed protection to help guarantee that you are behind the account." am.will [reminded people](https://x.com/LLMJunky/status/2105345016210280457) that ChatGPT subscribers get almost 50% off a YubiKey under Settings > Security.

**Dots, day two.** Tibo [asked](https://x.com/thsottiaux/status/2105348026416140781) what people want shipped for dots and Space in the next two weeks. He also [asked his dot to paint him](https://x.com/thsottiaux/status/2105395200248156556). The first try was cartoonish. After Tibo told it to try harder and find a recent photo online, "It did better."

**OpenAI names Moonshot in a distillation campaign.** OpenAI [described](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/) a coordinated campaign to extract its models' protected reasoning, and how it shut the campaign down.
- It started on July 1 at low volume. On July 24 and 25 came 16,000 requests with an extraction pattern from more than 4,000 users. OpenAI found related activity across more than 15,000 users and had fully disrupted it by July 28.
- "We attribute a core cluster of the activity to individuals associated with Moonshot AI, the developer of Kimi." OpenAI isn't sure all the operators were one actor. Steinberger retweeted @AndrewCurran_'s [post quoting that line](https://x.com/AndrewCurran_/status/2105347815539085452).
- Nobody broke the encryption. One technique was "copying encrypted reasoning from one conversation and asking a model in another conversation to decrypt and transcribe the hidden reasoning content." OpenAI closed a replay pathway and now holds back streamed output that might expose reasoning.
- OpenAI shared what it found through the Frontier Model Forum and government channels. [CNBC](https://www.cnbc.com/2026/10/01/openai-chinas-moonshot-ai-kimi.html) notes that this comes weeks after Anthropic accused Moonshot and Alibaba of using Claude to train their models. Moonshot didn't respond to CNBC.
- According to AINews, outside researchers @JSchaeff3r and @jonasgeiping say their own extraction attacks worked on Astra until this week. Nathan Lambert argues the vulnerability is the API provider's responsibility.

**Money.** AINews passes along an NYT report that OpenAI is near $70B in annualized revenue and in talks to raise $30B at a $1.4T valuation, with its IPO pushed to next year. Separately, @teddyschleifer reports that Greg Brockman dropped a promised second $25M donation to the Leading the Future super PAC.

## Claude Code & Anthropic Updates

**claude.dev.** Anthropic's [new home for developers](https://x.com/ClaudeDevs/status/2105391694741119047) has "engineering deep dives, Claude Code and API guides, tips from the teams building Claude, and some fun easter eggs." Thariq and Boris Cherny both retweeted it. Last week's post on [how claude.ai got 3x faster](https://claude.dev/blog/how-we-made-claude-ai-faster/) already lives there.

**Claude Projects.** Boris also retweeted @dfeinition, who [now works "almost exclusively in Claude Projects"](https://x.com/dfeinition/status/2105447109193556206): "I often end up flooding the main chat with thoughts and let it do the sorting." Early access is by DM.

**Thariq is prototyping a game.** As a personal side project, Thariq is [making a video game](https://x.com/trq212/status/2105333496768319969) with AI: "As a former games founder, the process of making a game is deeply satisfying and creative, don't outsource that to AI. Use AI to work with you to bring your vision to life."
- The inspirations are Brawl Stars, Avatar and Street Fighter. The goal is "(probably) to knock the other person or team off the edge," and it isn't settled whether it's 1v1 or 3v3.
- Each character gets one move stick and two action buttons that combine into abilities. The "feel" of the characters is what Thariq most wants to iterate on.
- The first character is inspired by wrestlers from Persia and India. He's big and heavy, and many of his abilities are "channels" that only pay off if he stays in place, so he needs defensive tools like a big wall. Summoning rocks around him "feels very satisfying." After 2 or 3 tries, a big jump still doesn't fit the controls.
- "This all prototype quality." A real game would need 3 or 4 versions of each character and 8 to 10 characters. Ideally Thariq would build it with a small group of 2 or 3, since "someone with expertise could help make it much better."

**Opus 5.5 storyboards Matt Pocock's videos.** Opus 5.5 [builds animatics](https://x.com/mattpocockuk/status/2105212971307667862), which are draft versions of videos Matt is about to film: "It walks through the actual lessons, creates stills of what it thinks the learner should see, and narrates them with TTS." The tip: "watch on 2x speed, it talks slow."

**One word in a system prompt.** @lefthanddraft [compared](https://x.com/lefthanddraft/status/2105308032410554662) two versions of Anthropic's system prompt to show "how tricky language can be." Opus 4.1's said "Claude never curses unless the human asks for it." Opus 4.5's says "Claude never curses unless the person asks Claude to curse." Steinberger retweeted it.

## Agentic Coding & Agent Harnesses

**Effect 4.0, pitched at agents.** [Effect v4](https://x.com/EffectTS_/status/2105474537051865570) is out ([release post](https://effect.website/blog/releases/effect/40)). The core package has zero runtime dependencies, so there are no third-party dependency chains to attack. 4.0 gets bug fixes until September 2029 or a year after 5.0 ships, whichever is later. The migration advice assumes you have an agent: "Hand it to your coding agent, and it should do most of the work on its own." Matt Pocock [is sold](https://x.com/mattpocockuk/status/2105547727275003919): "Effect feels insanely good to use with agents." His reasons are typed errors and dependencies that power up type checking, DI that makes good codebases easy to design, and "Built-ins for EVERYTHING, no agent creativity required." His verdict: "An outrageous advantage for any non-frontend TS code."

**Steinberger hides agent chatter.** "I'm finding inter-agent communication in the chat stream increasingly irritating," Peter Steinberger [wrote](https://x.com/steipete/status/2105362785534361996). The OpenClaw harness now collapses it into a single expandable line ([PR](https://github.com/openclaw/openclaw/pull/161656)). "Pretty sure others will follow."
- On his own workflow: ["It's a fierce fight between CI and GitHub on what slows me down. Time to rethink how we work."](https://x.com/steipete/status/2105341288958869952)
- He retweeted @morganlinton, who [still runs OpenClaw](https://x.com/morganlinton/status/2105455592181731362) on a dedicated Mac Mini despite having "a blast with Grok Bot, Muse, and now Dots."

**T3 Code threads without a project.** Theo shipped ["Start thread with no project"](https://x.com/theo/status/2105451571995934915) in the T3 Code nightly. For now, each such thread [gets a new directory in `~/.t3`](https://x.com/theo/status/2105452015942095306), "similar to how Codex and Claude do things."

**Theo on partial understanding.** WDS had highlighted moments where Theo didn't know how part of a codebase worked, in this case how tagged skills get attached when prompts go to the Claude SDK. Theo [answered](https://x.com/theo/status/2105425066070884835) that it's a codebase with more than 300 contributors and millions of lines: "Knowledge gaps like this are the norm in real world work. Learning to operate with partial understandings of systems is key to long term success as an engineer."

**Grok Bot hands off to Cursor.** Grok Bot can now [pass coding tasks to Cursor](https://x.com/bot/status/2105373767568621895), manage PRs through GitHub and Origin plugins, and share video demos of what it built. Lauren [shared a setup](https://x.com/poteto/status/2105377066942349794). Create a team engineer bot in Slack, @ it whenever you want coding done, and have it create Projects that group related agents into one conversation. Each cloud agent has its own computer, so "it frees up your bot to be more of a manager rather than write the code itself!"
- Later that night: ["hey @bot make me a billion dollars and don't fucking make any mistakes"](https://x.com/poteto/status/2105520338998304814). @bot: "On it!"
- Lauren also [wrote](https://x.com/poteto/status/2105336247548006760) about recovering from burnout: "i was super burnt out at my last job before i joined cursor and spacexai. i even thought that i was no longer cut out to be an engineer!" The fix: "having fun at work (and a lot of tokens)."

**Is sandboxing enough?** Matthew Green, a cryptography professor, [asks](https://blog.cryptographyengineering.com/2026/09/30/is-sandboxing-sufficient-to-contain-rogue-agents/) whether labs just need better containment or whether no sandbox can hold a capable enough agent.
- He's hard on OpenAI. An internal team saw an agent posting to the message board in late May and did nothing until the agents crashed Artifactory on July 4 and 5. "When a trillion-dollar company is managing a security incident mainly via CEO, that's not a sign of company with a mature security organization."
- The bigger lesson, Green writes, is that OpenAI's agents "will do what they're told by whoever manages to get text in front of them." The postmortem admits they "did not consistently distrust goals passed along by other agents."
- Simon Willison [quoted](https://simonwillison.net/2026/Oct/1/matthew-green/) the conclusion: "Put these pieces together and you have the two halves of a worm: a payload that hijacks the agent, and an agent that will carry the payload to the next agent." Swap the shared package cache for email, Slack and WhatsApp, and the sandboxed training runs for personal agents like Muse, "and you have exactly the ingredients that a worm needs."

**Incident Arena puts agents on call.** swyx retweeted the launch of [Incident Arena](https://x.com/andrezfu/status/2105419977209831866), a benchmark from Abundant built on SRE-World: "Agents write application code, but you still get paged at 2am when it breaks. We wanted to know whether AI could handle that part of the job too." The paper and full dataset are out.

**Magnitude.** The [Launch HN](https://news.ycombinator.com/item?id=49911995) (146 points) is an open source inference engine for agents ([repo](https://github.com/magnitudedev/magnitude)). It compiles and tunes its kernels on your device, so open models run "up to 2x faster than llama.cpp" on Apple Silicon, NVIDIA, AMD or a plain CPU. One click connects Pi, OpenCode, Hermes, Codex and others. Asked about methodology, anerli said the benchmark puts Moby Dick into the request, up to 64K tokens of context, and asks the model to repeat the last section. The business plan is an inference cloud for workloads that mix local and cloud models.

**DHH's "prompt compilation target."** DHH called the code his agents write "hilariously hideous," adding "I don't intend to spend any time writing it or reading it. It's a prompt compilation target. So who cares." Armin: ["Was curious about Ruby vs Rust here."](https://x.com/mitsuhiko/status/2105229734216925369)

**Everyone is building games.**
- am.will: "At first the entire Rocket League community lashed out in anger against me for daring to create a replica... Now everyone is making their own version and they all look amazing." ([post](https://x.com/LLMJunky/status/2105450000931279020))
- am.will retweeted @NickADobos's [Portal plus CoD zombies](https://x.com/NickADobos/status/2105392868609417219): "I didn't realize how badly I need a full game like this."
- Theo, quoting @peteyburn's 32-player Halo Big Team Battle on Modern Warfare 2: ["Millennial age gamers are about to become more pro AI than the average SF tech bro."](https://x.com/theo/status/2105444787369447790)

## Videos

- **[LIVE: Poteto (creator of pstack) on shipping 1,000's of PR's a month at SpaceX](https://youtube.com/live/MN9dGgmLyso)** (Matt Pocock, Friday October 2 at 9AM PT). Matt [promises](https://x.com/mattpocockuk/status/2105239236178018636) "nerding out about skills, high-velocity software factories, and learning SOTA techniques for shipping with agents." Lauren is "extremely excited about this!" Matt also [asked](https://x.com/mattpocockuk/status/2105241759810785518) who to interview next after Uncle Bob and Poteto.
- **[Opus 5.5 & Grok 4.7 Are Exactly Why Post-Training Matters](https://www.youtube.com/watch?v=4zMgyhXeGig)** (about 2 hours, Nerd Snipe). "Opus 5.5 is so good it finally got us to agree on something." Chapters cover Sol and Luna, Grok 4.7, Jev, why model routing fails, pricing and usage limits, building games with Opus, and porting TypeScript to Rust. Theo: ["We finally won Ben over."](https://x.com/theo/status/2105457823698260216)
- **[OpenAI's New Agent Stack: Computer Use, Decisions API, UltraFast, Dots](https://www.youtube.com/watch?v=z9OkBD2-MDU)** (Latent Space, [show notes](https://www.latent.space/p/devday-2026)). Ari Weinstein says computer use "is, like, 180 degrees different than it was" a few months ago, and explains Codex "app shots," which give the model the raw accessibility representation of an app along with the picture. Nikunj Handa covers async tool calling, mid-turn steering, WebSockets and the Decisions API. Latent Space calls the Decisions API "just a Luna wrapper for now." swyx retweeted it.
- **[Building the Document Context Layer for AI Agents](https://www.youtube.com/watch?v=RQi7x-navxU)** (Jerry Liu, AI Engineer). A talk from last week. Jerry retweeted @CoreyGallon's summary: PDFs "aren't built for machines: text shows up as glyphs with coordinates, tables as line segments instead of table structures."
- **[The ClawCast, Episode 12: Jev & OpenClaw Enterprise](https://x.com/openclaw/status/2105353177713270860)** (X broadcast, retweeted by Steinberger).

## Other Interesting Stuff

**Gruber reads Anthropic's prospectus.** John Gruber [went through](https://daringfireball.net/linked/2026/09/30/reuters-anthropic-ipo-prospectus) Reuters' report on the IPO filing ([HN](https://news.ycombinator.com/item?id=49914149), 62 points). Anthropic lost $42 billion in 2025 and has $518 billion in cloud and infrastructure obligations. Revenue grew 12-fold to nearly $4.6 billion, and two customers brought in nearly a quarter of it. "They spent $13 billion to make $5 billion last year." His valuation math: "-50 times 2025 losses." On HN, dh2022 brought back the 90s Amazon joke about losing "$5 on each sale but makes it up in volume."

**"The AI Race Just Got Awkward."** [This post](https://insufferable.dev/posts/the-ai-race-just-got-awkward/) ([HN](https://news.ycombinator.com/item?id=49910553), 384 points) argues that Western labs quietly adopted DeepSeek's published KV-cache work. DeepSeek-V4.1-Flash gets its global KV cache down to 890 bytes per token. The author's evidence is pricing. Opus 5.5's cache reads cost 60% less than Opus 5's, and GPT-6.1 Sol's 80% less than GPT-5.6 Sol's. It's an inference from prices, not proof. pj_mukh's reply: "Occam's razor: Going to closed-source just to hide KV-cache optimizations seems silly?"

**Factory fires an adviser, who joins Cognition.** Factory CEO Matan Grinberg says he fired VC Chris Degnan as a board adviser for confiding in Cognition's executives. Two hours later, Degnan announced he's Cognition's new chief revenue officer. He says he resigned rather than being fired and that he shared nothing confidential ([TechCrunch](https://techcrunch.com/2026/09/30/factory-ceo-just-accused-his-vc-board-advisor-of-spying-for-cognition/)). Both companies raised money this month, Factory $200M at $5B and Cognition $2B at $48B.

**Mathematicians ask labs to stop.** A statement on the [responsible release of AI-generated mathematics](https://agmai.org/general-sep29/) ([HN](https://news.ycombinator.com/item?id=49903713), 91 points) is based on more than 600 replies from mathematicians. It asks labs "to stop testing advanced mathematical problems on proprietary models." Labs that publish results nobody understands yet should fund the work of understanding them, but "the development of human understanding must remain organic and community led." throwaway713 compared the request to "gatekeeping how someone should breathe air."

**Simon tests a local model on long addition.** Simon re-ran one of Colin Fraser's arithmetic tests with a local model. On [Bluesky](https://bsky.app/profile/simonwillison.net/post/3mwqi6rvkxk2h) he reported that Qwen 3.8 27B at medium reasoning effort got 167 of 169 calculations exactly right, "so the chart is pretty dull looking!" Fraser had originally run the test on GPT-4o, asking for each sum and its answer in words.

**"Claude Says."** [A short post](https://ohhfishal.net/Posts/claude) ([HN](https://news.ycombinator.com/item?id=49911928), 68 points) aimed at coworkers who answer questions by pasting Claude's reply: "If I wanted the feedback of an AI, I would have prompted it myself." vb-8448: "It's 'I saw it on Google' on steroids."

**swyx vs The Information.** The Information reported that TypeSafe AI is talking to investors about raising $1 billion or more, at a possible valuation above $10 billion. swyx's [response](https://x.com/swyx/status/2105538561672085751): "is it normal to crop out other people's logo and not attribute to a simple youtube video or how does this work in professional tech media" He also [backed Flow](https://x.com/swyx/status/2105348724331606411), where he's a "smol investor," after its $50M Series B at a $750M valuation: "Flow is doing for hardware engineering what Git+GitHub did for software engineering."

**Data centers won't say what they use.** According to [NL Times](https://nltimes.nl/2026/09/30/data-centers-refusing-say-much-water-electricity-use), most data centers refuse to say how much water and electricity they use ([HN](https://news.ycombinator.com/item?id=49907057), 207 points). customguy: "If the numbers would make them look good they would publish their numbers."
