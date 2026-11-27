---
title: "Agent Browsers Benchmarked, OpenAI's Cost-Tuned Models, ByteDance Behind OpenRouter Providers & the SaaS Refounding"
date: "2026-11-27"
summary: "A quiet Thanksgiving window. **Matt Van Horn** tested 16 agent browser and computer-use tools for T3 Code, and two little-known browsers won. **Agent Duel** data says GPT-6.2 Astra and Sol reason and write less than their predecessors (p-values included), and HN blamed cost tuning. A researcher traced DeepSeek traffic from **Novita, StreamLake and Ant Digital** on OpenRouter to ByteDance's Ark API, with request-ID, tool-call-ID and censorship fingerprints. **dax** predicts most open-weight labs will add commercial restrictions within six months and says only DeepSeek is in it for the long run. Mitchell Hashimoto's **Rex** iOS app is in the App Store, **T3 Code Mobile 2.4** brings localhost previews to phones, and Armin Ronacher showed **Radius**, a \"Pi-native control plane\" that confused most repliers. On the business side, **Zapier** and **HubSpot** are refounding in public, swyx called it a reckoning for lock-in SaaS, and Latent Space's **Clay** episode says OpenAI cancelled Clay's ChatGPT Apps launch two days out. Also: AI-written job emails (Kenton Varda, Simon Willison), the NYT telling photographers not to update Photoshop, and a Lean-plus-fuzzing pass that found 17 unreported Clojure bugs."
tags:
  - Agentic Coding & Agent Harnesses
  - Models, Inference & Providers
  - Agents and the SaaS Refounding
  - Other AI News
---

# AI Roundup — November 27, 2026

US Thanksgiving made this a light day. Most tracked accounts posted holiday greetings or nothing at all (Karpathy, Lee Robinson, Boris Cherny and Matt Pocock were quiet). Theo only reposted others, and Theo's newest YouTube video is still the November 24 Fable vs Opus comparison. Stories covered yesterday (the GPT-6.2 limit cut and banked reset, OCRia-nano-1, psychoscript, Thariq's Latent Space talk, the Treasury CIO's Civilization clone) get only short follow-ups here.

## Agentic Coding & Agent Harnesses

### Matt Van Horn tests 16 agent browser and computer-use tools

[Matt Van Horn](https://x.com/mvanhorn/status/2125974014032323047) (614 likes, 51K views, reposted by Theo) published [a long article](https://x.com/mvanhorn/status/2125973765104566675) that tests 16 browser and computer-use tools on one Apple Silicon Mac "so my agents in @t3dotcodes stop handing work back to me". The headline finding: "The two browser winners are almost unknown on GitHub (3k stars for @ardiabrowser, 1.1k for @opencode browse), yet they beat 54k-star agent-browser and 26k-star Stagehand on speed, RAM, and tokens."

- **Switch browsers:** Ardia plus cua, with the "Fastest warm loads (396 ms)", no Chrome debugging infobar, "built-in prompt-injection fences", and 1Password plus Touch ID passkeys.
- **Stay in Chrome:** OpenCode browse plus cua. It pairs once over a Chrome extension "so you turn remote debugging off forever", uses 18 MB RAM, and "cuts page snapshots 53x vs Stagehand and 5x vs agent-browser".
- **Native Mac apps:** "cua-driver won at 27 MB RAM and zero focus steal", and five of the tested stacks use it underneath, T3 Code among them.
- **Cloud:** boat.dev "booted 4 Ubuntu VMs in 1.9s median for $0.001". One catch for T3 Code users: "Codex Terra's native browser fails inside T3 Code because its host pipe only lives in the Codex desktop app".
- **Skip pixels:** an MIT result that reverse-engineering desktop binaries into MCPs "makes FreeCAD 55x faster with 35x fewer tokens".

The best reply proposed a reliability test instead of a speed test. [@YXxquf](https://x.com/YXxquf/status/2125984566162972697): "I would add one deliberately interrupted run per tool. Close the tab halfway through a dummy form and see whether the agent resumes in the right place without submitting twice."

### T3 Code Mobile 2.4 and Rex in the App Store

- **T3 Code Mobile 2.4.** [Julius](https://x.com/jullerino/status/2126008211417510213) (1,445 likes, reposted by Theo) shipped it on iOS and Android. New: "In-app localhost previews. Open your dev server directly on your phone over a built-in tunnel", issue trackers on mobile, citations ("highlight any part of an agent's reply to comment on it in your next message"), 10 languages, and "~85% less data sent per environment at launch". [@thymikee](https://x.com/thymikee/status/2126012485580837252): "I use this app daily thank you so much".
- **Rex for iOS.** [Mitchell Hashimoto](https://x.com/mitchellh/status/2126047712596631876) (2,735 likes, 144K views): "Rex is live in the App Store. It requires a Rex Server running on another device so maybe a hint that a full public release is imminent". Asked when, [the answer](https://x.com/mitchellh/status/2126070084280168575) was "Imminently." France is missing because "we needed some physical paperwork to approve our encryption" ([reply](https://x.com/mitchellh/status/2126048893125505092)). To a user whose Little Snitch was "going crazy": "Are you using Tailscale? Those are probably Tailscale relays" ([reply](https://x.com/mitchellh/status/2126084548840869930)). [swyx](https://x.com/swyx/status/2126201671026180469) posted an App Store chart: "beating cursor and t3code on day 0. strong start".

### Armin Ronacher's Radius

[Armin Ronacher](https://x.com/mitsuhiko/status/2126075846620262704) (448 likes, 36K views): "Radius is slowly shaping up!" The [site](https://radius.earendil.com/) describes it as "The Pi-native control plane and gateway for agent workloads." and little else, which was the top reply's complaint. [@ivanbokii](https://x.com/ivanbokii/status/2126112687092568292): "the page doesn't really explain what Radius is, unfortunately." [@RusticStack](https://x.com/RusticStack/status/2126081065903333813) found one concrete feature in it: trimming `git diff` and `rg` output at the gateway "before the model ever sees it", and was glad that `RADIUS_NO_PROCESS=1` exists, because "a truncated diff is exactly how an agent ends up confidently editing code it never saw". Armin also [posted a download chart](https://x.com/mitsuhiko/status/2126088494376456320) for Pi ("Y'all really like to download that thing, no? :)"); [@prds9888](https://x.com/prds9888/status/2126157782818914317) read it as "1.6M a week and the line still bending up".

### dax: agents are a toy

[dax](https://x.com/thdxr/status/2126045236585533568) (664 likes): "a lot of thought leadering on building software lately kind of sounds vaguely upset or sad or frustrated. why should i listen to you if you don't seem happy". And: "agents are a toy. play with them as much as you can". [@pggalaviz](https://x.com/pggalaviz/status/2126063613731323942) had the counterpoint: "Probably because agents took the fun and the typing, the sense of accomplishment, and left us the code reviews LOL".

### swyx's forge CI, Yegge's talk, brownfield factories

- **forge.** [swyx](https://x.com/swyx/status/2125995865525629084): "smol forge now runs macos/ios CI thanks to @namespacelabs" and "boots linux ci in <1s thanks to cloudflare container snapshots". [Four minutes later](https://x.com/swyx/status/2125996759570895157): "cloudflare containers way too unreliable to be a base for a ci cd system". Asked why, [swyx said](https://x.com/swyx/status/2126005938473804110) "forge is a breakable toy so i can just try whatever the hell i want". [@mhm52693](https://x.com/mhm52693/status/2126025383220842720): "ci is the one place where works-most-of-the-time is worse than slow. a flaky runner just trains everyone to hit retry".
- **Steve Yegge's AI Engineer talk.** [Steve Yegge](https://x.com/Steve_Yegge/status/2126056111988244795) (292 likes): "It's 40 minutes of material crammed into 20 minutes. I recommend further speedrunning it on 1.5x." The quoted Chinese summary credits Yegge with 22 Claude Max accounts and 5 billion tokens a day, and pulls out four lessons: don't build orchestration frameworks that fight the bitter lesson, regularly purge accumulated context docs, treat the model well (harsh prompts make agents defensive), and stop buying commodity tooling like CI and merge queues. Yegge added that "swyx spends 11 billion tokens/day"; [swyx](https://x.com/swyx/status/2126066840145469476): "at peak!"
- **Brownfield factories.** [@BuiltByJustin](https://x.com/BuiltByJustin/status/2126000102737392055) of @diffusionio posted their [Code Summit talk](https://www.youtube.com/watch?v=1S4hx3wgvBE) on brownfield factories. [AI.Engineer's](https://x.com/aiDotEngineer/status/2125952716434538581) summary: "preserve the behavior customers depend on, then make it faster, cheaper and safer."

## Models, Inference & Providers

### Agent Duel: GPT-6.2 Astra and Sol think less

["OpenAI may be in cost control mode"](https://micjm.com/blog/openai-is-in-cost-control-mode/) on micjm.com ([HN](https://news.ycombinator.com/item?id=50652527), 324 points) uses head-to-head data from Agent Duel, "a battle system on top of OpenCode". Its claim is that Astra 6.2 and Sol 6.2 have "been tuned for cost savings. Specifically output tokens per task and reasoning tokens per task have dropped." Astra 6 and Sol 6.1 "were pretty normal models", while the 6.2 pair are outliers. The post gives p-values: "The p-value on output dropping is 0.0055 for Sol and 0.022 for Astra. The p-value on reasoning dropping is 0.00013 for Sol and 0.0064 for Astra." This lands a day after OpenAI cut GPT-6.2 limits (covered yesterday).

On HN, [dwb](https://news.ycombinator.com/item?id=50659691): "We've recently switched from Claude to Codex at work (cost, of course!), and I was very surprised at how much worse Astra/Sol 6.x have been at coding." [seizethecheese](https://news.ycombinator.com/item?id=50659128): "Sol 6.2 outperforms Sol 6.1 at lower cost on benchmarks, but not in real world battles from real people".

### Novita, StreamLake and Ant Digital route DeepSeek to ByteDance

A follow-up to last week's OpenRouter provider notices: ["Novita, StreamLake, etc are Ark wrappers"](https://kendell.dev/blog/arkwrapper/) ([HN](https://news.ycombinator.com/item?id=50660273)) traces DeepSeek traffic from three OpenRouter providers to Ark, ByteDance's model API. The evidence is fingerprints:

- **Image fetches.** StreamLake's V4.1 Flash images "are downloaded from Beijing Volcano Engine (AS137718), ByteDance's cloud", and Ant Digital's by a BytePlus address in Singapore.
- **IDs.** "Every Ant Digital response's upstream ID is a ByteDance one", and StreamLake sometimes returns tool-call IDs and gateway errors word for word from Novita, so a request can go "SiliconFlow → StreamLake → Novita → ByteDance".
- **Censorship.** Ask about Tank Man or June 4, 1989 "and you can get ByteDance's canned refusal".
- **Price.** Ant Digital launched at "exactly BytePlus's off-peak 'Economy' rate" and later went below BytePlus's list price.

The author says Novita alone sent "120-160B tokens a day on these models until it lost its ZDR label on November 20", and discloses "a grant from OpenRouter helped with the research". On HN, [leafingensemble](https://news.ycombinator.com/item?id=50662258): "Novita was listed as US and ZDR. Openrouter have been changing their endpoint labels. Novita ToS was updated today. It now disclaims 3rd party providers." [snake_doc](https://news.ycombinator.com/item?id=50661701) explained why wrappers exist: "it's a way to arbitrage compute."

The same day, [Moat](https://commandcode.ai/moat) ([HN](https://news.ycombinator.com/item?id=50652184), 279 points) pitched itself as "the costco of ai": $5/mo for "wholesale" prices on GLM, DeepSeek, Kimi and Ling models. The top comment, from [jedjonesuk](https://news.ycombinator.com/item?id=50653633): "they sure don't give a lot of detail on where these requests are being served?" [resonious](https://news.ycombinator.com/item?id=50652995): "with tool calling, it's basically full access to my machine. Will we see attacks where an infected/evil router injects malicious tool calls?"

### dax on open weights: "deepseek is the only one"

[dax](https://x.com/thdxr/status/2126034662187581563) (1,925 likes, 111K views): "if you are developing an open weight model the game is to endure all financial pain and figure out how to keep going so you can saturate the market". And: "unfortunately most model makers are tapping out and will be adding commercial restrictions over the next six months", and "deepseek is the only one right now who are committed to the long term goal".

- [@bilalbdertli](https://x.com/bilalbdertli/status/2126039245433274783) asked why OpenCode doesn't take on the mission. [dax](https://x.com/thdxr/status/2126040338074574908): "we are but as you can imagine becoming a lab is one of the most difficult things to pull off".
- On why the restrictions matter, [dax](https://x.com/thdxr/status/2126043924309454854): "the terms that are going to come out are going to make it so we effectively can't have these models in open code go or serve them as cheaply as we'd like to".
- [@niccolox](https://x.com/niccolox/status/2126057059833753689) listed Nemotron, Thinking Machines, Gemma, Muse and Mistral. [dax](https://x.com/thdxr/status/2126080987964768360): "muse is the only one actually in the game on this list".
- [@GosuCoder](https://x.com/GosuCoder/status/2126052943547826191): "I wish there was a viable way to build a US based open weight model company."

Separately, [@_xjdr](https://x.com/_xjdr/status/2126083483361788007), reposted by dax: "I've recently come to find out almost everyone is terrible at inference."

### OCRia-nano-1's license

One follow-up to yesterday's OCRia-nano-1 release, promoted again by [Jerry Liu](https://x.com/jerryjliu0/status/2126008009759580616) ("This Thanksgiving, come check it out"). [@victor_explore](https://x.com/victor_explore/status/2126019253010923702) pointed out the terms: "the weights aren't apache. free for research, personal use and companies under $2m revenue and $2m funding, but any ocr/parsing product that competes with llamaparse needs a license at any size. liteparse itself is apache 2.0".

## Agents and the SaaS Refounding

### Zapier and HubSpot refound in public

[Wade Foster](https://x.com/wadefoster/status/2125590135227957619) (616K views) asked the question directly: "Why use Zapier, when Claude connects to my apps?" The answer is to use both. "Your agent does the thinking. Zapier MCP plugs it into 10,000+ apps". Zapier's AI Workflow Index priced 2,944 real workflows and estimates that scheduled agents cost 2.1x as much as Zaps. Replies were rough. [@SimonHoiberg](https://x.com/SimonHoiberg/status/2125766512074203310): "You'll have to burn through a lot of tokens (a lot a lot) to have it be more expensive than Zapier". [@girdley](https://x.com/girdley/status/2126105523703693537): "Zapier is fundamentally a cloud coding ide with amazing plugins."

[dharmesh](https://x.com/dharmesh/status/2125751491634008548) posted "Notes From the HubSpot Refounding, Day 14": "In the world of agentic coding, you need a great purpose-built harness + a great LLM + context". HubSpot is "building the world's best purpose-built GTM harness". [@uzzy_dev1](https://x.com/uzzy_dev1/status/2125831898509521144): "difference is code has tests. what's the unit test for a campaign?"

[swyx](https://x.com/swyx/status/2125969097276178943) (580 likes): "the amount of saas founders having to refound their decade+ old company is visibly going up in the timeline and 1) its causing a reckoning with lazy saas lockin business models". [In a follow-up](https://x.com/swyx/status/2126072968761721013), swyx argued that refounding in public turns "an 'incumbent' into an 'underdog' story". [@pggalaviz](https://x.com/pggalaviz/status/2126024706629292526): "the ones whose entire moat was 'annual contract + a painful export' are finding out the export got a lot less painful now".

### Latent Space: how Clay builds GTM agents

[Basil Chatha](https://x.com/realbasilchatha/status/2126041706655056010) and swyx [interviewed Jeff Barg](https://latent.space/p/how-clay-builds-gtm-agents-jeff-barg-head-of-ai/), Clay's Head of AI ([video](https://www.youtube.com/watch?v=qjPcaZf_plo), 72 min). From the show notes: "Clay wants you to get about the same results whether you use its own agent or point Claude Code at Clay. Usage is already split close to 50/50 between Clay's agent and outside harnesses." Clay's first agent, Sculptor, "ran a set of tools in a loop" and "was great at adding columns but terrible at booking ten qualified meetings"; it is now rebuilt around a coding agent. Other topics: scoring all 40M companies in Clay's dataset for about $1,500, why users hate the model selector, and a hand-rolled stack with "No Temporal, no LangGraph". The most quotable part is the cancelled ChatGPT Apps launch. Clay "reprioritized like a quarter of the company basically to work on this. I think two days before we were supposed to launch, they were like, we're going to cancel it."

### Agentic payments

[swyx](https://x.com/swyx/status/2126106139582677088): "i think agentic payments is one of the most divisive yet important themes to get right for 2028", in reply to [@lukaivicev](https://x.com/lukaivicev/status/2125700569654542615): "If you're in agentic payments, pivot to: something useful." [@bboym0dE](https://x.com/bboym0dE/status/2126114672529309938): "the hard part is who eats the refund when an agent buys the wrong thing at 3am". [@amiffyblue](https://x.com/amiffyblue/status/2126140017622073684) said the confirm step ships before the payment step, citing MCP Elicitation in Claude and Supabase's cost confirmation.

## Other AI News

- **AI-written job emails.** [Kenton Varda](https://x.com/KentonVarda/status/2125767584477790270) (2,352 likes, 165K views) gets "a few emails a day" from Cloudflare applicants: "I'm pretty sure 100% of these emails are written by AI agents." Most open with "Your post on [summarize some blog post of mine] caught my eye". [Simon Willison](https://x.com/simonw/status/2125998873252605954): "so depressing", and [in a follow-up](https://x.com/simonw/status/2125999332386349209), "I feel the same way about those emails as I do when I catch someone deliberately 'mirroring' me in an in-person conversation". Pushback came too. [@ChatGPiTi](https://x.com/ChatGPiTi/status/2125774723829444852): "How dare someone use automation to automate work that had a sub-8% return rate even before automation". [@HSVSphere](https://x.com/HSVSphere/status/2125832801467396110): "Every public hiring channel has been poisoned by LLMs".
- **NYT vs. Photoshop 2027.** [The Verge](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features) ([HN](https://news.ycombinator.com/item?id=50647673), 670 points) reports the New York Times told freelance photographers not to update, because the new features use AI "in ways that may not be apparent to users" and "can result in metadata identifying photographs as AI-generated." HN's top comment, from [jjcm](https://news.ycombinator.com/item?id=50648319), who works in creative tools: "It's nearly impossible to separate 'this image was fully generated with AI' versus 'I made a minor edit to the colors'". [dang](https://news.ycombinator.com/item?id=50649692) sees the same with text: users who "just" polish their wording "don't realize that these leave almost as many imprints as copy-pasting everything from ChatGPT."
- **AI made self-hosting fun again.** [Jan-Lukas Else](https://janlukas.blog/posts/ai-self-hosting) ([HN](https://news.ycombinator.com/item?id=50660180), 596 points): their infrastructure lives in Git as Compose files and scripts, so coding agents can work on it "in much the same way as they would work on any other software project", which got them onto NixOS and a custom bootc image. HN pushback from [markasoftware](https://news.ycombinator.com/item?id=50660400): the point of self-hosting was "to learn and to have pride in my setup (same reason one might buy an old car), both of which LLMs negate".
- **17 unreported Clojure bugs.** [Conao3](https://s.conao3.com/blog/2026/e4f733) ([HN](https://news.ycombinator.com/item?id=50642939)) ported parts of Clojure's core to Lean 4 and added differential testing: "I found 17 bugs that I could not find in Clojure's JIRA or on ask.clojure.org", including a `reduce` on `vector-of` that never finishes. The HAMT itself "showed no mismatch in 3 million operations"; the bugs sat "in places where two mechanisms meet".
- **Yishan on Alice Huang and distillation.** [Yishan](https://x.com/yishan/status/2126141659905994778) (21K views, reposted by LLMJunky) argued that Alice Huang "does not appear to be a spy for China" but "a hustler working for a company funded by Alibaba, which wanted GPUs". Yishan also claimed that now "Anthropic has put a stop to" distillation, "the latest Chinese model releases are DOA". These are Yishan's claims, not reported facts. [@halftroll](https://x.com/halftroll/status/2126223339165298712) replied that "the loophole that Alibaba was exploiting was intentionally put into U.S. law."
- **Datasette Charts gallery.** [Simon Willison](https://x.com/simonw/status/2125859570925154590) launched a new site for Datasette Charts with [a gallery](https://charts.datasette.io/gallery/) "showing all of the chart types and annotations in one place".
