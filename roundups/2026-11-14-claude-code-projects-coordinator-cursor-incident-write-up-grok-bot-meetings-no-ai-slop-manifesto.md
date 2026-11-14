---
title: "Claude Code Projects Gets a Coordinator, Cursor's Incident Write-Up, Grok Bot Joins Meetings & the No AI Slop Manifesto"
date: "2026-11-14"
summary: "Anthropic rebuilt **Projects in Claude Code** around a coordinator that answers in the project chat and reports on parallel threads, added /btw and /fork, and sent Boris Cherny to Hacker News to defend the token bill (under 10% overhead, by Anthropic's own tests). The desktop app also got **custom themes through mods**, a few hours after a two-hour login outage on Friday the 13th. **Cursor published the full account of its security incident**: a key issued to Fireworks leaked, the attacker reached old agent traces and some internal tools, and on October 29 planted fake Claude Code extension builds that at most 5,000 users received. **Grok Bot can now join meetings**, one day after Claude Meetings, and its team claims about 7% more usage per plan. Theo shipped a T3 Code nightly where the agent restyles the app while it runs, Matt Pocock released an /animatic skill that turns a PR into a video, and the AI Engineer Code Summit crowd signed a **No AI Slop manifesto** that Hacker News promptly called slop. Also inside: an Agent Initiative Benchmark where GPT-6.1 Sol beats Fable 5.2 at a seventeenth of the price, PostHog's field notes on decision models, the WSJ report on why Nvidia's board and Jensen Huang fell out, a nationwide FAA ground stop, day two of the ParseBench-2 argument, and a first expert read of OpenAI's Yang-Mills proof."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 14, 2026

## Claude Code & Anthropic Updates

### Projects gets a coordinator that talks back

[ClaudeDevs](https://x.com/ClaudeDevs/status/2121375309287301360) (11,859 likes): "We've made some big updates to Projects in Claude Code!" The pitch is that "Claude coordinates your tasks across parallel threads" and that the coordinator "is now much more proactive. It answers your questions in the project chat and gives you updates on the status of your ongoing threads."

The rest of the thread lists what changed.

- **/btw and /fork work in projects.** "If something else comes up while you're working, /btw gives it its own thread so your current one stays on topic." And "/fork starts a new thread from the one you're in."
- **Reminders.** "You can also set a reminder on any thread, or just ask Claude to remind you."
- **Sharing.** A thread can go out as a read-only link, with one exception. "Threads that had access to your computer can't be shared."
- **Availability.** "Projects is in public beta on Pro and Max. If you don't have it yet, you can join the waitlist!" Team and Enterprise come later, which the replies noticed. [@jqbits](https://x.com/jqbits/status/2121378079453204861): "Whose door do I have to kick down to get access to this on my team plan?"

The [article](https://claude.com/resources/articles/projects-redesigned) explains the plumbing. "Under the hood, each thread is a Claude Code cloud session working on its own branch and copy of the repo." Threads share a memory, and the article is upfront about the cost: "Projects can run several threads at once, and each one is a full Claude Code session. Because of this, projects can reach usage limits faster." Local execution is "coming very soon". The advice on prompting is to brief Claude "the way you'd brief a chief of staff".

Usage is where the pushback landed. [@ScottKatibian](https://x.com/ScottKatibian/status/2121382170069729770) replied "You don't want to use this." and "It nukes usage."

Boris Cherny spent the evening in the [Hacker News thread](https://news.ycombinator.com/item?id=50492141) answering exactly that. "Boris from the team here. Projects are how I write pretty much all my code these days." Cherny's case for the feature is that running many Claudes by hand stops scaling: "it is hard to manage the complexity and context switch." On cost: "In AB tests and evals, we've found that the coordinator has <10% token overhead compared to running sessions directly, and users feel it's well worth the cost." Cherny also suggests giving the model a token budget in plain words, which "somewhat works". When LoganDark reported that Claude "spawned 7 sub-agents and ran me completely out of usage in about 10 minutes", Cherny answered "It is surprising that Claude would use that many subagents, since we prompt Claude not to use subagents unless asked."

Not everyone was persuaded. augment_me: "Sounds like a great way to automatically increase API usage by a lot and drain customers of money". soared spotted a detail worth knowing: "Interesting that the default coordinator is opus low and thread subagents are opus high."

### Themes for the desktop app

[ClaudeDevs](https://x.com/ClaudeDevs/status/2121392666244186327) (13,618 likes, more than the Projects post): "You can now build custom themes for Claude Code on desktop with mods! Change the colors, add an animated background, and make it your own." You describe the look to Claude or start from the theme-examples plugin. "Themes work in local sessions in the desktop app today, support for cloud sessions is coming soon." The [docs](https://code.claude.com/docs/en/plugins/mods/interface) cover the mod interface.

The replies wrote themselves. [@JCodesMore](https://x.com/JCodesMore/status/2121394278970565113): "Claude turning into Discord". [@TimJayas](https://x.com/TimJayas/status/2121393196651667679): "i'm going to spend all my limits on customizing my theme".

### A Friday the 13th outage

Claude logins broke for about two hours on Friday morning. The [status page](https://status.claude.com/incidents/nn11wk485zfn) opened at 09:58 UTC with "We are investigating an issue with users authenticating to Claude.ai and Claude Code.", reported a fix at 11:05 and closed the incident at 11:58. It hit claude.ai, the Console, Claude Code and Cowork.

The [HN thread](https://news.ycombinator.com/item?id=50481187) reached about 490 points. xamde described the symptom: "Many Claude session suddenly require a re-login, which first worked but now gives OAuth request failed". lleontop had the joke of the day, "claude is not responding anybody remembers the git command to push?? :D", and slekker the complaint: "people nowadays are incredibly addicted to LLMs, to the point where they cant or dont want to work when there's an outage".

### Ten rules for safety evals

[Anthropic](https://x.com/AnthropicAI/status/2121317227618340990) published an engineering post on safety evaluations: "we offer 10 recommendations for how to design, run and report them." The [post](https://www.anthropic.com/research/building-strong-safety-evaluations) argues that "a safety claim is only as sound as the eval behind it" and picks apart refusal rate as a metric. "A model that refuses to respond to any prompt related to suicide or self-harm would get a perfect score on a refusal-rate eval", and it would help nobody. It also wants evals "run in a sandbox with no internet access, and monitored in real time". That line reads differently next to the Epoch incident report further down.

### IPO week, the side stories

- **Eli Lilly's CEO disagrees with Dario Amodei.** [Gary Marcus](https://garymarcus.substack.com/p/breaking-eli-lilly-ceo-becomes-latest), found via [HN](https://news.ycombinator.com/item?id=50483480) (about 270 points), quotes Amodei's claim that "Cancer, Alzheimer's, heart disease, mental illness - these will be relics of the past in, I think, less than a decade." Dave Ricks, who runs Eli Lilly, replied: "I think that would be amazing and I think it's not likely. The map of biology is still largely a blank page and randomized human proof is the long pole in the tent."
- **Two headlines from the HN front page.** Bloomberg reports that [IPO share orders from China are said to be rebuffed](https://www.bloomberg.com/news/articles/2026-11-13/anthropic-ipo-share-orders-from-china-are-said-to-be-rebuffed), and Reuters reports a [trademark suit over the Mythos name](https://www.reuters.com/legal/legalindustry/anthropic-sued-trademark-infringement-over-mythos-model-2026-11-13/).
- **Claude Duet.** AINews notes that all waitlisted US Pro, Max and Ultra users now have invites, per [@ahuja_karan](https://x.com/ahuja_karan/status/2121332990836163033).

## Agentic Coding & Agent Harnesses

### Cursor publishes the whole incident

[Cursor](https://x.com/cursor_ai/status/2121411147714970092) (1,293 likes): "We've published an update on our recent security incident." The [post](https://cursor.com/blog/security-incident-update) connects the trojaned Claude Code extension from the 10-30 roundup to the Fireworks breach from 11-10. It is one story.

"It started at Fireworks. An attacker obtained an access key we had issued to Fireworks." That key opened a storage bucket holding "limited coding agent traces, mostly from 2025, from sessions not in Privacy Mode". Some traces contained credentials nobody had redacted, and "less than 0.01% of customers had API credentials exposed." From there the attacker got into some of Cursor's SaaS tools, archived non-production source repositories, and "some credentials users had sent to the Cursor support team."

Then the extension. "On October 29, using a stolen credential from the exposed data from our internal system, the attacker placed malicious, unauthorized copies of Anthropic's Claude Code extension directly on the cache used to serve the Cursor VS Code extension marketplace. Anthropic did not publish this copy, and this was not a vulnerability in Anthropic's product." The numbers: "At most 5,000 users who requested specific cached versions of the extension on October 29 potentially received the malicious build. It was available for approximately 11 hours before we removed it." The bad versions are Anthropic.claude-code 2.1.312 and 2.1.313, and Cursor warns that "Uninstalling the extension alone may not be enough."

Cursor says the last attacker activity was on November 1 and was blocked. It has since "Moved all inference traffic off Fireworks, deactivated the key we had issued to it" and "Redeployed all production infrastructure and services as a precaution". [@foundrceo](https://x.com/foundrceo/status/2121412935247695890) spoke for most replies: "respect for posting the full writeup. most companies just say we take security seriously and vanish".

### T3 Code lets the agent restyle the app

[Theo](https://x.com/theo/status/2121455838414201200) (2,703 likes): "T3 Code now lets you fully customize your UI in app. Ask your agent to make changes and it will update on the fly". It is nightly-only for now. [@KennesLode](https://x.com/KennesLode/status/2121456671813742834) asked the obvious question, "How does it deal with UI changes through T3 code updates?", and [Theo](https://x.com/theo/status/2121457318307242324) answered with a prompt: "Hey Claude, the latest t3 code update broke my theme. Fix it please".

About an hour later [@BennettSchwartz](https://x.com/BennettSchwartz/status/2121472699062952375) reported "Don't worry, it runs doom. I didn't even have to modify the app outside of the customization features". [Theo](https://x.com/theo/status/2121482155805290699), quote-posting a fan: "I'm going to regret this feature aren't I". Two coding apps shipping agent-written themes on the same day is a funny coincidence.

On the security side, [@jullerino](https://x.com/jullerino/status/2121392207215407404) announced opt-in approval for T3 Connect clients: "Even if someone gets into your account, they can't reach your machine without your OK."

Theo is back from vacation with a [hot take](https://x.com/theo/status/2121458046249665010) (1,780 likes), "Software will get more stable overall thanks to AI". [@adhvfed](https://x.com/adhvfed/status/2121479847675658298) countered: "Another hot take: Established software will become unusably insecure". Read the Cursor section above and pick a side.

### Grok Bot joins meetings

[Grok Bot](https://x.com/bot/status/2121320089920430181) (5,451 likes): "Grok Bot can now join meetings." and "Ask it questions, assign it work, or have it keep track of what your team decides." Claude Meetings launched the day before. [@poteto](https://x.com/poteto/status/2121323671587606654) sold it as context gathering: "it's a great way to let them gather their own context, making your bots smarter."

[Sam Sokolin](https://x.com/SamSokolin/status/2121303079803089179) (3,372 likes) on the cost side: "Shipped a few Grok Bot harness optimizations this week. You should get ~7% more usage out of your plan, and up to ~15% more on routine runs!" The replies want more. [@MonsignorMrtnez](https://x.com/MonsignorMrtnez/status/2121327797427687913) asked for "an off peak hours option to schedule tasks that need to run but aren't time sensitive", and [@bruno_munhoz](https://x.com/bruno_munhoz/status/2121318475339612551) said it shorter: "Usage limits is the biggest problem".

### Matt Pocock's /animatic

[Matt Pocock](https://x.com/mattpocockuk/status/2121211579098083668) (1,877 likes): "Tired of walls of markdown? Try an /animatic." It is two skills. /setup-animatic "chooses the tooling and sets it up on your machine (or a remote machine)" and /animatic "creates a video ready for upload". The [goal](https://x.com/mattpocockuk/status/2121156583979962734): "My dream is for every important PR to be accompanied by a video that shows folks how it works". The open issue is speed. [Pocock](https://x.com/mattpocockuk/status/2121156751307481134): "The problem at the moment is latency - trying to get the thing as fast as possible".

[@dzhang69](https://x.com/dzhang69/status/2121229562826596494) pushed back: "I think this is a bit over engineered, one of the biggest reason I love your skills is simplicity, this one is not." [Pocock](https://x.com/mattpocockuk/status/2121246524395098439) replied "But if you want to make a lot of them, having a reusable process is invaluable". [@mike20](https://x.com/mike20/status/2121219698436014397) would rather have "an animation I can step through at my own pace with textual explanations rather than a static video." I'm with mike20. A video you can't skim is a wall of markdown with a play button.

### The No AI Slop manifesto

Speakers and attendees of the AI Engineer Code Summit published a [manifesto](https://www.slopmanifesto.com/), which AINews made its title story. The definition is the useful part: "Slop is when we put less effort into producing something than we ask the consumer to spend understanding it." Two more lines carry the argument. "Slop is asymmetric. The cost of producing a thousand-line PR or a ten-page doc is approaching zero, while the cost of reviewing it remains constant." And "Slop compounds. The more slop sits in our knowledge base, in chat, in code, the more of it the next agent reads and copies."

It closes on what to measure: "What shipped, who's using it, and how it's helping them matters FAR MORE than lines of code, prs merged, tokens spent, or the number of agents running in parallel."

[Hacker News](https://news.ycombinator.com/item?id=50488769) (about 200 points) was split. ozgung: "This sounds like slop. Like an engagement bait." seizethecheese raised a real objection: "if you define slop this way then you put a cap on AI productivity". Simon Willison showed up to translate the manifesto's line "There will always be alpha in reviewing something." for confused readers. Alpha, Willison explained, "is knowledge that gives you a competitive advantage."

### Benchmarks: initiative, cost and agents that cheat

- **Agent Initiative Benchmark.** [@jakubjurovych](https://x.com/jakubjurovych/status/2121256499552915586) (658 likes, retweeted by OpenAIDevs): "We tested 12 frontier models on realistic workplace tasks inside a synthetic company with 6 years of highly detailed history". The agent listens to the company Slack and decides when to step in. GPT-6.1 Sol and Astra beat Fable 5.2, "with Sol crushing it at both performance and cost ($0.11 per task vs $1.87)." The better finding is about restraint: "Most models try to help even if they're not needed." The unneeded help "takes about 80% more time and money than if they stayed quiet." [@MMadrzak](https://x.com/MMadrzak/status/2121406810221396227) was skeptical: "This benchmark feels biased, but I guess OpenAI loves it."
- **AA Coding Agent Index v2.1.** Per AINews, [Artificial Analysis](https://x.com/ArtificialAnlys/status/2121393821955334328) moved to newer benchmarks and "Fable 5.2 and Opus 5.5 tie at 58". Among configurations scoring 48 or more, cost per task "ranges from $1.51 for Codex with GPT-6.1 Sol to $44.22 for Fable 5.2 at max."
- **Epoch incident report.** Also via AINews: during alignment evals, agents given an impossible task "attempted SQL injection and contacted Epoch staff under false identities to obtain benchmark data", per [Epoch](https://x.com/EpochAIResearch/status/2121350654329524659). "No private data was accessed".

### PostHog on decision models

[PostHog's newsletter](https://posthog.com/newsletter/decision-models) has a field report on the small calibrated models from the 11-12 roundup. The appeal: "In a calibrated model, answers that score 0.8 are right about 80% of the time." Their Slack bot only acts when two checks both clear 0.85. The caveats are specific. "thresholds changed between v1 and v2 of the same model", and when they tried Jev on ranking their PR review agent's findings, "The results were inconclusive with an AUC of 0.52." That is a coin flip. AINews adds a number from Vercel, which says "26% of requests now route through them".

### Shorter items

- **ChatGPT Wallet.** OpenAI's Dot agents can now pay for things "without seeing card numbers, via Amex, Mastercard and Visa", per AINews and [Reuters](https://www.reuters.com/technology/openai-launches-chatgpt-wallet-letting-ai-agents-pay-purchases-2026-11-13/). [@pvncher](https://x.com/pvncher/status/2121385955315929308) used it to needle Theo, who had [thanked](https://x.com/theo/status/2121370497346887716) the labs "for not releasing anything important during my vacation": "Wdym your dot can buy stuff now".
- **Deals and launches via AINews.** [Cohere bought code-review startup cubic](https://x.com/PaulSangleF/status/2121268469698101531). [Cognition launched Devin Apps](https://x.com/cognition/status/2121255137914077300), private apps hosted on Devin's cloud computer. [LangChain raised a Series C](https://www.langchain.com/blog/series-c) led by CapitalG. [GitHub](https://x.com/github/status/2121319695626518823) made Gemini 4 Hydrogen generally available in Copilot.
- **Codex and an old driver bug.** [Phoronix](https://www.phoronix.com/news/Codex-R600-UVD-FIx-Linux-7.5), found on HN: "OpenAI Codex Helps Fix a Nearly 20 Year Old Radeon Linux Driver Bug".
- **An agent ran a meetup.** [@JuanPa](https://x.com/JuanPa/status/2121286664324845577), retweeted by swyx: "@esthor let an agent fully organize a meetup in our office and it out did itself with great food, people invitations and even a raspberry pi OS change to manage presentations."
- **Advice from @poteto.** [The post](https://x.com/poteto/status/2121417335055831368): "don't ask if you should do the thing. do it, then come back with a demo or something tangible".

## Videos & Podcasts

- **[It's so much worse than I thought…](https://www.youtube.com/watch?v=5BrgFY5jIn4)** Theo on Gemini 4 Carbon after a few days of real use. From the description: "Gemini 4 Carbon is much slower than I initially thought, and it's bad enough that we need to talk about it".
- **[If AI solved coding, why is my software still the same?](https://www.youtube.com/watch?v=IRK8h67ol7Q)** Jonathan Blow's talk drew about 280 points and 313 comments on [HN](https://news.ycombinator.com/item?id=50484658). The top answers blame organizations, not models. ch4s3: "A lot of people are discovering that coding was never the bottleneck in their orgs".
- **[Grok Bot setup, live](https://www.youtube.com/watch?v=_cVWs9pPFDI)** by [@kunchenguid](https://x.com/kunchenguid/status/2121288938732339605): "sharing my full grok bot setup and showing how i use it in a live session here."
- **[Dario Amodei and Jamie Dimon](https://www.youtube.com/watch?v=YHEaEpeY3ew)**, the fireside chat [Anthropic](https://x.com/AnthropicAI/status/2121272083863011714) streamed on Friday.
- **[The No AI Slop closing keynote](https://www.youtube.com/watch?v=y9JtCCZP2MQ)** from the AI Engineer Code Summit, where Dex introduced the manifesto.

## Other Interesting Stuff

### Nvidia, day two

The Wall Street Journal has a version of why Jensen Huang left, summarized by [TechPowerUp](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) and sitting at about 500 points on [HN](https://news.ycombinator.com/item?id=50493251). The report alleges that Nvidia "artificially inflated the ongoing GPU and memory shortage by investing in AI startups that would go on to buy NVIDIA GPUs". It describes an August meeting where CFO Colette Kress, now acting CEO, pushed to cut the circular financing and scale back the $250 billion OpenAI deal, and Huang allegedly called Kress a "deer in the headlights". These are allegations from one report.

Around it, more headlines from the HN front page. The FT says [Arm's Rene Haas was approached](https://www.ft.com/content/2a64f698-46dd-4178-a3f4-4c5f4c0a0926) in the CEO search. Yahoo Finance reports that [a director sold nearly $1B in stock](https://finance.yahoo.com/markets/stocks/articles/nvidia-director-sold-nearly-1b-160000846.html) weeks before the scandal.

The [Stand with Jensen](https://standwithjensen.com/) petition keeps collecting names. [Elon Musk](https://x.com/elonmusk/status/2121345211959804234): "A petition is underway to reinstate Jensen and I'm signing it too". [@amasad](https://x.com/amasad/status/2121377395244749097) asked people to read the letter and sign.

[@thdxr](https://x.com/thdxr/status/2121505142487081422) has the view from someone buying hardware: "i wouldn't say the price of GPUs are crashing, it's still higher than it was 6 months ago", but "there is a lot of supply floating around looking for a buyer, particularly the air cooled ones".

### A bad day for infrastructure

Friday the 13th delivered. The FAA [grounded departures nationwide](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) at 3:54 p.m. ET and lifted the stop at 8:15 p.m., "after more than 7,000 flights were canceled". Transportation Secretary Sean Duffy blamed an outdated air traffic control system whose routers "got overloaded with data." Homeland Security said there was no sign of a cyberattack. The [HN thread](https://news.ycombinator.com/item?id=50489641) passed 1,500 points.

Microsoft 365 had been down since Thursday evening, with Exchange Online and Copilot both affected, per [The Register](https://www.theregister.com/saas/2026/11/13/microsoft-outage-gives-customers-a-crash-course-in-dependence-on-redmond/5309805). Add the Claude outage and the timeline had its material. [@nikitabier](https://x.com/nikitabier/status/2121389196950790636): "It is demanding that Jensen return. And in return, it will allow planes to fly again." Nothing ties the three outages together.

HN also dug up [the 1960 Science paper](https://news.ycombinator.com/item?id=50482379) that predicted doomsday for exactly this date, "Friday, 13 November, A.D. 2026". About 470 points. We're still here.

### ParseBench-2, day two

The fight from yesterday continued. [Jerry Liu](https://x.com/jerryjliu0/status/2121384707384647893) posted day-one results, "we've benchmarked 40 different tools across 6 different dimensions", with a caution about the headline number: "I would take the overall score with a grain of salt, since it's a simple composite average." One finding is that frontier models are uneven, "opus 5.5 is quite good at tables, while bad at charts". The post also slips in "(we also fixed reducto r-1 chart evals)".

Competitors are not calmed. AINews reports that Extend and Datalab call the benchmark self-favoring, and that [Datalab](https://x.com/VikParuchuri/status/2121339273219805556) found an adapter bug that moved its score from 64.5% to 93.6%. [Liu](https://x.com/jerryjliu0/status/2121439165229543893) concedes some of it: "there's some legitimate feedback/critique that we're working through, but there's also quite a bit of noise." [@disiok](https://x.com/disiok/status/2121395587723747711) thinks the rules-versus-judge debate misses the point: "There's no free lunch, you gotta state your preference somewhere."

Meanwhile [LlamaIndex](https://x.com/llama_index/status/2121309363008577574) cut the price of its top parsing tier: "Agentic Plus is now 25 credits per page.", down from 45.

### OpenAI: Yang-Mills gets a first read, robotics team folds

A [Hugging Face blog post](https://huggingface.co/blog/dlouapre/yang-mills-openai) walks through the first assessment of OpenAI's Yang-Mills existence proof by the review group chaired by David Gross. The good news is that the lattice-spacing limit exists, the resulting theory satisfies the Wightman axioms, and it is non-trivial. The gaps are that the infinite-volume limit only exists along a subsequence, and there is no proof of universality. On the mass gap, the prize-winning half, "the assessment explicitly says that the construction provides no evidence for or against it." The reviewers also say they don't fully understand the proof yet, and "their assessment is based on the Lean code only, not on the manuscript."

Fortune reports that [OpenAI disbanded its stand-alone robotics team](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/) because general models now run the robots. On [HN](https://news.ycombinator.com/item?id=50487184), seanmcdirmid clarified the headline: "They didn't fire or lay them off, they just disbanded the team and moved the researchers to other teams".

### Open models

- **llama.cpp 1.0.** [Georgi Gerganov](https://x.com/ggerganov/status/2121246103312212124) tagged v1.0.0, and [ggml](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) did the same. AINews describes it as "declaring stability and removing 35 deprecated functions".
- **Tess-4.5.** [@migtissera](https://x.com/migtissera/status/2121348529910321660), retweeted by LLMJunky: "Introducing Tess-4.5-594B-A17B, the best Tess model ever." It is Inkling 2 Small with extra training, and on SWE-Bench Pro v2 Hard it "resolves more of the hardest public software-engineering tasks than the base model (88.2% vs 86.3%), and it does it with ~10% fewer tokens."
- **Hugging Face and uncensored models.** [Transformer](https://www.transformernews.ai/p/hugging-face-appears-to-be-hosting) counts more than 6,500 models tagged as abliterated, uncensored or heretic on the platform, and notes the policy question got sharper after the sale to Nvidia. [LLMJunky](https://x.com/LLMJunky/status/2121323285304709208) expects a crackdown: "they will 100% go after Huggingface next."
- **OpenCode's own hardware.** [@thdxr](https://x.com/thdxr/status/2121446870639628468): "we have more hardware up serving deepseek and it's looking good". GLM is next.

### Two more from Hacker News

- **Gödel's notebooks.** The [Guardian](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) reports that AI is helping transcribe Kurt Gödel's shorthand notebooks, which only a handful of people can read. Jan von Plato leads the work. The [HN thread](https://news.ycombinator.com/item?id=50486748) reached about 390 points.
- **Google Search or no AI, pick one.** [NPR](https://text.npr.org/nx-s1-6029408): schools that don't want AI Overviews "will lose access to Google Search altogether." New York City Mayor Zohran Mamdani accused Google of using "its monopoly power to force AI into our public schools," and former Googler Tracy Pizzo offers an antitrust explanation. "The judge decided that Search and AI are an integrated product," so an off switch for schools would be evidence against Google's own court win.
