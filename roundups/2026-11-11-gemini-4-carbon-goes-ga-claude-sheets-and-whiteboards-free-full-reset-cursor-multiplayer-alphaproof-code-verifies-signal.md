---
title: "Gemini 4 Carbon Goes GA, Claude Sheets & Whiteboards, a Free Full Reset, Cursor Multiplayer & AlphaProof Code Verifies Signal"
date: "2026-11-11"
summary: "Google made **Gemini 4 Carbon** generally available at an introductory $2/$10 per million tokens, and it took the top of CursorBench at 60.4% for $9.22 a task, against Fable 5.2 Max's 60.0% for $32.79. Google also previewed `/swarm` in Antigravity and shipped its own pelican-on-a-bike game before Simon Willison could. Theo \"wasn't super impressed\" with early access, then found things on a second pass and is redoing the video. Anthropic answered with **Claude Whiteboards, Sheets and Data**, interactive connectors and wider **MCP Apps** support that runs on OpenAI's plugin extensions, plus **one free full reset for every paid user** after admitting to \"a few small issues that used more limits than intended\". Tibo's reply came nine hours later: \"Thursday is feeling codexy to me.\" The **IPO roadshow** terms are out: 825 million shares at $70 to $78 under the ticker ANT. Elsewhere, **Cursor Projects went multiplayer** so agents can coordinate across teammates, Matt Pocock described a **Home Repo** setup and argued agents make Goodhart's Law worse, dax showed OpenCode launching instantly on **rune** instead of Electron, DeepMind's **AlphaProof Code** formally verified the Signal protocol implementation with six million lines of Lean in four weeks, VulnCheck counted **217 fixes out of 37,966 Glasswing findings**, SoftBank's CEO said GPT-6 Astra found 35,000 new vulnerabilities after the company had fixed 10,500, and Val Town is winding down."
tags:
  - Gemini 4 Carbon
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Codex & OpenAI
  - Security & Privacy
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 11, 2026

## Gemini 4 Carbon

### General availability, and the price doubles in three weeks

Google announced Carbon on October 28 for cyber defenders only. On November 10 it went [generally available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/): the API in AI Studio for paying developers, plus a rollout to Google AI Ultra subscribers in Antigravity, the Gemini app and AI Mode. The introductory price is $2 per million input tokens and $10 per million output, the same as Argon. After November 30 it rises to $4/$20.

Google does not pitch it as the default. "Argon remains the ideal choice for the majority of software engineering and knowledge work", and Carbon is for the hard problems, "using more tokens than Argon" to get there. The post claims "#1 on CursorBench 4.0, Perplexity's WANDR, and Zapier's AutomationBench at more than 2X lower cost per task compared to the next best external model". On safety it reports a 0.8% per-attempt breach rate against 3.1% for Argon, and 92% on an agentic honesty benchmark against Argon's 70%.

The same post previews `/swarm` in Google Antigravity, "turning a single prompt into a coordinated team of agents you can track in real time". The [docs](https://antigravity.google/docs/swarm) are up.

### CursorBench

[Cursor](https://x.com/cursor_ai/status/2120193584670580857) (4,454 likes) added Carbon the same day: "At high effort, it's the top model on CursorBench at 60.4%". The [leaderboard](https://cursor.com/evals) makes the cost argument better than Google's blog post does.

| Model | Score | Cost per task |
| --- | --- | --- |
| Carbon High | 60.4% | $9.22 |
| Carbon Medium | 60.1% | $8.49 |
| Fable 5.2 Max | 60.0% | $32.79 |
| Carbon Low | 58.6% | $11.89 |
| Opus 5.5 Max | 57.8% | $13.43 |
| Fable 5.2 High | 56.9% | $9.70 |

Carbon matches Fable 5.2 Max for less than a third of the money, at the introductory price. Double it on December 1 and Carbon High lands near $18, still well under Fable Max but no longer near Fable High. [@LexnLin](https://x.com/LexnLin/status/2120195630647677331) spotted the odd row: "how is low more expensive than both medium and high lmao". Cursor is running it at [50% off through November 30](https://x.com/cursor_ai/status/2120193596972474586).

### Pelicans, subagents and a video that changed direction

Simon Willison shipped [llm-gemini 0.36](https://simonwillison.net/2026/Nov/10/llm-gemini/) and summed up the pricing: "This is Google's best ever Gemini, priced at $2/million input and $10/million output at launch", which is GPT-6.1 Sol and Sonnet 5.5 territory, then doubling to Opus 5.5's price. The pelican verdict was a shrug: "[Gemini 4 Carbon is good at pelican SVGs, but that's nothing new for Gemini](https://x.com/simonw/status/2120258951594037732)".

Google got there first anyway. [Sundar Pichai](https://x.com/sundarpichai/status/2120198811297694192) (4,351 likes): "Carbon made a pelican demo so you don't have to 😅". The demo is a playable 3D game of a pelican biking around the Mountain View campus, built by "Builder and critic subagents" that "ran iterative loops across Blender and Three.js". You can [play it in AI Studio](https://aistudio.google.com/apps/bundled/pelican-campus-quest). Simon [conceded](https://x.com/simonw/status/2120387954044735980): "Google had a whole lot more fun with Carbon and pelicans on bicycles than I did".

dax had been using it early. The rune framework that OpenCode is moving to (more below) had "[a big chunk of it](https://x.com/thdxr/status/2120198768264200243)" built with Carbon, followed by "what now haters". The practical advice came [later](https://x.com/thdxr/status/2120222008093151392): "it's a model i think that's very useful to mix in with whatever model you're currently using", so "ask your primary model to spawn some carbon subagents when you have a tricky problem or you want to try to simplify some code". poteto [agreed](https://x.com/poteto/status/2120232138603975020): "it's quite a good model, give it a try!"

[Theo](https://x.com/theo/status/2120350391078723649) (1,205 likes) is in the middle of changing a verdict. "Got early access and wasn't super impressed overall." Then: "Did a few more tests as I was getting ready and...I missed some things." And: "This video will not be going how I initially planned." Asked whether it is actually good, Theo [answered](https://x.com/theo/status/2120352029436678323) "No, but it has real use cases :) more soon!"

The [Hacker News thread](https://news.ycombinator.com/item?id=50442303) (283 points) was mostly about access. byefruit complained that the subscription rollout is Ultra-only, and kevmo314 reported "I was barely able to complete a single project with Ultra 5x using Carbon". TomGarden had the naming complaint: "Carbon and Argon are such similar names this is the first time I've registered they are different models".

## Claude Code & Anthropic Updates

### Whiteboards, Sheets and Data

[@claudeai](https://x.com/claudeai/status/2120206365759094857) (51.7K likes, 8.3M views): "Starting to roll out today: Claude Whiteboards, Claude Sheets and Claude Data." The [article](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors) fills in the rest. Claude Data is the product formerly called Dashboards and connects to Snowflake and Salesforce. Claude Meetings is coming soon. New plugins from Salesforce, NetSuite and Workday come with built-in skills.

The top reply, from [@0x0SojalSec](https://x.com/0x0SojalSec/status/2120212635585286637) (2,947 likes): "All those years of refusing to learn Excel, Word and PowerPoint is about to pay off."

[Hacker News](https://news.ycombinator.com/item?id=50443716) (195 points) read it as Anthropic eating its API customers a week before an IPO. WhatsName: "it burns relationships with everyone building on top of your API". option_greek: "Model companies are starting to cannibalize their api customers's business cases." paxy doubted the whole direction: "I don't understand the need for these side quests. Microsoft has a 40 year lead in spreadsheets." cadamsdotcom offered a product name: "maybe call it C Suite".

### Interactive connectors, built on OpenAI's extensions

The second half of the launch is [interactive connectors](https://x.com/claudeai/status/2120206375137484875) from Adobe, Atlassian and Box on web and desktop. For developers, [@ClaudeDevs](https://x.com/ClaudeDevs/status/2120227979041341943) (3,437 likes) explained what changed underneath: "Claude now supports more of the MCP Apps extension, such as app tools and embedded sites, so your full app can run inside Claude." And [it is portable](https://x.com/ClaudeDevs/status/2120227981855777049): "It can run in any AI application that supports the extension." It is in [public preview](https://x.com/ClaudeDevs/status/2120227982921097388), with a [getting-started guide](https://claude.com/docs/connectors/building/mcp-apps/getting-started).

The surprise is where the extension comes from. [Max Stoiber](https://x.com/mxstbr/status/2120249867276804267) (313 likes) pointed out that it is "powered by OpenAI plugin extensions 🤯", meaning the open [openai/mcp-extensions](https://github.com/openai/mcp-extensions) repo. For partners who already built for ChatGPT, "[now they'll just work™ with Claude, too!](https://x.com/mxstbr/status/2120261117339701734)", and the plan is to [upstream it](https://x.com/mxstbr/status/2120271971753853162) "to the official spec".

[Tibo](https://x.com/thsottiaux/status/2120266880963473789) (4,118 likes) took the win: "Labs innovating together ftw". The replies did not let it stand. [@DoubleStraddleG](https://x.com/DoubleStraddleG/status/2120267146538238160) (1,398 likes) wrote that Anthropic is "literally mogging you guys while you keep trying to push dots on us". [@ExiledonMoon](https://x.com/ExiledonMoon/status/2120272152041832851) looked at the screenshot: "Even OpenAI's Codex lead has a Claude tab open."

Not everything worked on day one. [@tommyent](https://x.com/tommyent/status/2120284000589914401) timed an import: "A 66 cell Google Sheet, THREE MINUTES and 45 seconds to import it."

### One free full reset for everyone

[@ClaudeDevs](https://x.com/ClaudeDevs/status/2120275296637321476) (35.7K likes, 1.8M views): "We've given all Pro, Max, Ultra, and Team users one free full reset, across all models and limits. Use it anytime before December 10 at 2:00PM PT."

The reason is the interesting part. "We recently fixed a few small issues that used more limits than intended, and the Fable resets didn't do much for those of you who'd already hit your weekly limits for all models." That is yesterday's complaint about the launch offer, conceded within a day. You redeem it in Settings > Usage.

Replies were happy for once. "[thanks for the airdrop](https://x.com/errnsterr/status/2120275981789438032)". "[I LOVE THAT ANTHROPIC IS RESETMAXXING NOW 🥹](https://x.com/AunySillyMe/status/2120275498592870615)". "[Stop it, GPT is already dead!](https://x.com/dhruvyad/status/2120275572748349698)" (772 likes).

Resets are Tibo's signature move, so [Theo](https://x.com/theo/status/2120382386076840100) (1,439 likes) poked: "Can't believe Tibo let this one slide with no response". [@ShaneBOly](https://x.com/ShaneBOly/status/2120383701511180728) had a theory: "Tibo's dot is still drafting the reply.. got routed to the cheaper model". The response is in the Codex section.

### The roadshow terms

Anthropic [launched the roadshow](https://x.com/AnthropicAI/status/2120117722230968385) for its IPO, and the [press release](https://www.anthropic.com/news/roadshow-launch) has numbers this time. The offering is 825,000,000 Class A shares, of which Anthropic sells 801,351,354 and existing stockholders sell 23,648,646. Underwriters get a 30-day option on 123,750,000 more. The expected price is $70.00 to $78.00 a share, and the stock will list on the Nasdaq Global Select Market as "ANT". At the midpoint the offering comes to about $61 billion before the option. The replies did the valuation arithmetic. [@DhruvaGoyal](https://x.com/DhruvaGoyal/status/2120119584061813018): "So the target is $1.26-$1.40 trillion". [@hopes_revenge](https://x.com/hopes_revenge/status/2120158620658913749) asked the real question: "is there an allocation for loyal reply guys ?"

### Claude Code doubles every keypress

[Theo](https://x.com/theo/status/2120103631307645276) (1,674 likes) hit a bug in Claude Code's input box: "It DOUBLES EVERY SINGLE KEY PRESS IN THE INPUT BOX." [Jarred Sumner](https://x.com/jarredsumner/status/2120104535712801049) (993 likes) replied in kind: "SSoorryy aabboouutt tthhiiss.. II ppaasseedd tthhiiss aalloonngg ttoo tthhee tteeaamm.." Theo: "[I have a lot of respect for you typing this out manually](https://x.com/theo/status/2120105032570044658)".

[@thisisgm](https://x.com/thisisgm/status/2120112197951234371) supplied the likely cause: "Has been a bug for a while when Codex computer use is on". Theo [confirmed](https://x.com/theo/status/2120113006940225817) "This was almost certainly the cause ty!" and then learned from a post by Jamon (@jamonholmgren) that it had been [happening for over a week](https://x.com/theo/status/2120157712822796591). Two vendors' agents fighting over one keyboard is a new category of bug.

### Quick hits

- [Thariq](https://x.com/trq212/status/2120223476279869875) (1,666 likes), quoting a video of AI-assisted tweening and painting tools: "we need fewer one shot demos and more tools that show how you can collaborate with models to bring your vision to life".
- Theo praised [@zanyfen's post](https://x.com/theo/status/2120287281982640489) about an employer that pays API prices for Claude because it will not let anyone train on its source code. In the replies, [@ihatesleepy](https://x.com/ihatesleepy/status/2120288144272814395) pushed back that assuming IP is the only reason enterprises pay API pricing "is missing the forest for the trees".
- [@chongdashu](https://x.com/chongdashu/status/2120154573356793883) built a pickleball game with Fable 5.2 and the Unreal Engine 5.9 Preview, touching the editor not at all: "Unreal 5.9's AI first changes made working with Claude Code SO smooth".

## Agentic Coding & Agent Harnesses

### Cursor Projects go multiplayer

[Cursor](https://x.com/cursor_ai/status/2120295553309565139) (2,682 likes): "Your agents can now coordinate with your teammates' agents." The [follow-up](https://x.com/cursor_ai/status/2120295565305282658) says what that means: "Agents share plans before they start, flag conflicts while they work, and unblock each other's tasks across the team." The [blog post](https://cursor.com/blog/projects-multiplayer) describes a shared task board and shared context on top of the Projects feature from September, in beta for all users. poteto [added](https://x.com/poteto/status/2120313779691168082) that Grok Bot can create and manage projects for you if you ask.

The first objections are the ones I would have. [@avisinghdotdev](https://x.com/avisinghdotdev/status/2120297515379834999): "Tbh I don't like the idea of an agent speaking with my teammate's agent, especially if they have separate sets of rules and skills. One slop can degrade the quality." [@sanchitmonga22](https://x.com/sanchitmonga22/status/2120300993606975991): "cant wait for the pr review where one teammate's agent blames another teammate's agent".

Also from the merged company, [Grok Bot](https://x.com/bot/status/2120279511707386263) (5,215 likes) announced its side of the Tailscale integration covered yesterday: "Grok Bot can now join your personal or company tailnets on Tailscale."

### Matt Pocock: the Home Repo, Goodhart, and a decision board

Three posts from Matt, all about working with agents across a team.

The [Home Repo](https://x.com/mattpocockuk/status/2120260969750540327) (1,961 likes) is a setup pattern. "I have a single repo (the home) where all of my skills, steering files, wiki etc live." Then: "I run my agent in the home repo, and then inside AGENTS.md I have pointers to the other repos". Follow-up answers say there are [worktrees within each clone](https://x.com/mattpocockuk/status/2120262371075670256) and that [cross-repo issues live in the home repo](https://x.com/mattpocockuk/status/2120274646348030270). [@ShubhamMal72313](https://x.com/ShubhamMal72313/status/2120261736691601414) asked what I wanted to ask: "how do you scope keys with this, one agent that can touch every repo makes me a little nervous". [@browserOS_ai](https://x.com/browserOS_ai/status/2120268319265837058) flagged a Claude Code catch: it does not load memory files from additional directories unless you set `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`.

On [metrics](https://x.com/mattpocockuk/status/2120103371335962979) (519 likes): "Agents make Goodhart's Law a LOT worse:" because "Agents are incredibly good at gaming metrics. So any organisation that says "we track your number of PR's" is fucked." The conclusion: "Measuring productivity was already impossible. Now it might be actively harmful." [@zesen88](https://x.com/zesen88/status/2120115529474306130): "My agent can open eleven PRs before I finish reading the first one. Metric met."

And a [tool idea](https://x.com/mattpocockuk/status/2120135880916808093) (405 likes): "A shared 'decision ticket' board, where your team can talk through decisions before implementation". The reasoning is "Why leave all the alignment until review - get it done early". The agent side [works through a CLI](https://x.com/mattpocockuk/status/2120141643407823121): "The chat has a CLI it can use to add/update questions and wait for answers".

### "AI usage generates a fragile codebase"

Evan X. Merz, laid off from Meta in May, wrote [the post](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) that topped Hacker News for the day ([512 points, 485 comments](https://news.ycombinator.com/item?id=50438318)). The detail people quoted: "I generated at least 90% of my code using AI in my last few months there, which was the minimum for a decent rating." The argument has four parts. AI writes shallow tests, it writes overly complex code, humans stop understanding the result, and it moves too fast for review. The summary line is "AI codebases are software made by AI for AI."

The thread split the usual way. ricardobeat compared it to managing junior engineers, and cassianoleal answered "Comparing an LLM to a junior engineer is frankly a disgrace." user43928 disagreed from experience: "After 7 months and a 500k LOC codebase I can say that in my experience the fragility is inconsequential." snarfy moved the blame: "Business incentives create fragile codebases." Read next to Matt's Goodhart post, the 90% minimum is the same story from the inside.

### dax: OpenCode on rune, honest TPS, and a rack that trains

[dax](https://x.com/thdxr/status/2120247436627071209) (1,623 likes): "luke is porting opencode from electron to rune" and "look how fast it launches, it's completely instant, doesn't even feel like a cold start". The promise: "once we're done we're going to teach the world how to do this and then everyone can stop complaining about electron". [rune](https://x.com/thdxr/status/2120248875910898174) is Anomaly's native UI framework. The port is not a fork that will rot, because "[Luke set up an automated system that keeps this up to date with any features we're shipping](https://x.com/thdxr/status/2120267394824159673)". [@fat](https://x.com/fat/status/2120262651687428321) asked for an Electron-to-Electron rewrite as a control, to separate what the rewrite bought from what rune bought. Fair.

On [speed numbers](https://x.com/thdxr/status/2120149200356642816) (1,502 likes): "OpenCode computes tokens per second in a very conservative way to not let providers (including us) cheat", with the result that "so now we get people saying the same model is slower in OpenCode". The conservative part is counting time to first token in the denominator, which dax [confirmed](https://x.com/thdxr/status/2120150616315986168) to [@pingToven](https://x.com/pingToven/status/2120149927829631390).

On [cost](https://x.com/thdxr/status/2120231727562104991): "software is now lower exertion", in fact "so much lower we're tricking ourselves into thinking it's cheap". But "frontier tokens are still expensive. worth it in a lot of cases. but not cheap".

On [training](https://x.com/thdxr/status/2120146051902415310) (1,135 likes): after inference, "now we're looking at model training which seems even more like something regular mortals couldn't do", then "and we probably can do it". The current hardware is modest: "[we really just have one rack up right now. and we're pushing it to the max of what it can handle](https://x.com/thdxr/status/2120148434842001504)".

Two smaller ones. The [AUR warning](https://x.com/thdxr/status/2120221231974900091) (617 likes): "the AUR is going to have a critical supply chain attack at some point. they really need to provide a different auth mechanism", to which [@BrodieOnLinux](https://x.com/BrodieOnLinux/status/2120323559172264091) replied "At some point, or at some point this month". And [email](https://x.com/thdxr/status/2120232450051715400): "i canceled superhuman. i only use email from opencode now". Theo, a few hours later and [independently](https://x.com/theo/status/2120284214566535383) (1,983 likes): "I think now would legitimately be a good time to reinvent the email client."

### T3 Code and the cost of being open source

Theo spent part of the day [defending T3 Code](https://x.com/theo/status/2120131740471861485) against a screenshot of a commit. The explanation: "Julius had a massive agent loop running to clear out and merge open PRs from contributors. Someone had "fable 5.5" in a commit message and it got attached to his username when it merged." For scale, "This was one out of over 3,599 PRs he merged in that month alone." Theo's frustration is that only open repos get this treatment: "The alternative is to just close the repo and end all the bullshit."

Better news arrived from [Gergely Orosz](https://x.com/GergelyOrosz/status/2120224821053395139) at the Linear London launch, quoting a developer: "I had trouble with Claude Code yesterday and figured I'll give T3 a go. It BLEW MY MIND. I'm hooked."

### Quick hits

- **modern-web-guidance 1.0.** Chrome's [guidance package for coding agents](https://github.com/GoogleChrome/modern-web-guidance) hit 1.0 with Firefox, MDN and Edge on board, about 200 guides you query with `npx modern-web-guidance@latest search`. The [writeup](https://developer.chrome.com/blog/modern-web-guidance-v1) has the details. Found on [Hacker News](https://news.ycombinator.com/item?id=50443812) (350 points), where paulirish called maintainability "the next frontier" and simonw asked for a plain markdown index on GitHub Pages.
- **Unreal Engine 5.9 Preview.** [Epic](https://x.com/UnrealEngine/status/2119806791567773829) calls it "the first Unreal Engine release built primarily with agentic workflows", with expanded Unreal MCP toolsets and coding agents inside the editor. dax [noticed](https://x.com/thdxr/status/2120338429276016959) OpenCode support is built in. The replies under Epic's post are a wall of "slop", which tells you how the games audience differs from this one.
- **Factory Workstreams.** [dex](https://x.com/dexhorthy/status/2120220674543476800) from the AI Engineer Code Summit: "letting an orchestrator manage a swarm of agents + scheduled automations and integrations to do massive, long horizon stuff". [@boy_that_lives](https://x.com/boy_that_lives/status/2120222409550963177) runs a small version and says orchestration was the easy part, and that hard budgets per routine kept it sane.

## Codex & OpenAI

### Tibo comes out of the basement

Nine hours after Anthropic's free reset, [Tibo](https://x.com/thsottiaux/status/2120410006273380750) (4,635 likes): "It's been a while without resets. Maybe I should come back out of the basement". Then [the hint](https://x.com/thsottiaux/status/2120410480204525936) (3,646 likes): "Thursday is feeling codexy to me. Perhaps also a good time for a banked reset."

The audience wants something else. [@thestandard122](https://x.com/thestandard122/status/2120411398991720620): "No, get back in the basement and get working on new models." [@gigglecon](https://x.com/gigglecon/status/2120410256958443849): "We need better models not resets Tibo." [@SFourdrinier](https://x.com/SFourdrinier/status/2120411590487048322) would take it "If it comes with Astra 6.2 or sol 6.2".

That demand followed every OpenAI post of the day. Under the keynote announcement, [@x_snow](https://x.com/x_snow/status/2120202709962027409): "just release the model man". Under Businesses in ChatGPT, [@StefanoGPT](https://x.com/StefanoGPT/status/2120216769860374632): "Anything but a new model eh?"

### What OpenAI did ship

- **Sign in with ChatGPT for Business plans.** [@OpenAIDevs](https://x.com/OpenAIDevs/status/2120212596850663712): "Now, you can use your ChatGPT Business plan in tools like @NotionHQ, @v0, @ampcode, @kilocode, @warpdotdev, Hermes from @NousResearch, @openclaw, @opencode, and more." Admins get [controls and limits](https://x.com/OpenAIDevs/status/2120212598385733732). This is the opposite of Anthropic's position on third-party harnesses, and it now covers company seats.
- **Businesses in ChatGPT.** [In beta](https://x.com/OpenAI/status/2120216592395174382) (14.4K likes): "Claim your business, manage your information, and get insights on how people engage with you." Eligible businesses can build a Business Agent. [@glucapav](https://x.com/glucapav/status/2120217047967949085): "so chatgpt becomes the new yellow pages listing". [@liamgordon](https://x.com/liamgordon/status/2120339168912171176) filled in the whole profile before learning it is US-only.
- **Cyber at the Frontier.** A [live keynote](https://x.com/OpenAI/status/2120202353907486826) on Thursday, November 12 at 10 a.m. PT, "for our latest cyber announcements". Same day as Tibo's codexy Thursday.

### The Codex workshop at AI Engineer Code Summit

Latent Space wrote up [OpenAI's workshop on working with Codex](https://latent.space/p/codex-work/), given by Dominik Kundel and Charlie Guo. Kundel on why this took until now: "it took a while for models and harnesses to equalize into something where we can build a really engaging experience". The candid line is Guo's: "As a Codex power user, dots feel a little bit awkward to work with". When an OpenAI presenter says that on stage, the dots complaints in Tibo's replies look less like trolling.

## Security & Privacy

### AlphaProof Code verifies the Signal protocol

Google DeepMind [introduced AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/), agents that "mathematically prove key security properties of the actual code underlying the Signal protocol". The numbers: "generating over six million lines of Lean", with humans reviewing "just one percent of the codebase", and "our verification process took just four weeks". As a check, the team reintroduced two previously fixed bugs and the system proved the buggy version insecure. DeepMind calls it the "first time the implementation of a widely deployed protocol like this has been formally verified by any method". There is a [project site](https://google-deepmind.github.io/code-verification/) with the paper.

On [Hacker News](https://news.ycombinator.com/item?id=50439193) (619 points) the first question was the right one, from whattheheckheck: "How do you prove the lean code represents what the code its proving?" thibsrn noted that the work proves the code against the spec and does not challenge the spec itself. conartist6 worried about upkeep: "it'll be much better once each CI run costs $10,000 for the AI to make sure you didn't break its giant proof".

Yesterday it was a thousand agents formalizing Fermat. Today it is production crypto code. The one percent human review figure is the number to watch, since those are the lines where a wrong statement of the theorem would hide.

### VulnCheck counts Glasswing: 37,966 findings, 217 fixed

VulnCheck's [November update](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) on Anthropic's vulnerability disclosure program is a useful counterweight. It attributes 442 CVEs to Anthropic this year, two of them exploited in the wild. The backlog is the story: "Of Anthropic's 37,966 reported findings, only 7,349 (19.4%) have been made public and just 217 have been marked fixed." Since September the pile grew by nearly 12,000 findings and 15 fixes. curl rejected 19 of the 34 reports it got from the OSS scanner.

[Hacker News](https://news.ycombinator.com/item?id=50447074) (392 points) noted that VulnCheck sells vulnerability intelligence and has a stake in the framing. The ratio still stands on its own, as delichon put it: "37,966 to 217".

### SoftBank: "Honestly, we're completely exhausted"

[Peter Steinberger](https://x.com/steipete/status/2120228665946710248) (1,428 likes) quoted a [BigGo Finance report](https://finance.biggo.com/news/2cb8f108-49d2-4df2-a41d-d1e1663564e7) on SoftBank's November 9 earnings briefing. CEO Junichi Miyakawa apologized for a ransomware attack on subsidiary IDC Frontier that affected 495 companies and local governments, and where seven minutes passed between detection and damage. The way in was an open-source component outside the company's scanning scope.

The passage Steinberger pulled: SoftBank ran diagnostics on about 700 systems, "found 10,500 vulnerabilities" and spent three months fixing them. Then it re-ran the diagnostics with GPT-6 Astra and "confirmed 35,000 new vulnerabilities". Miyakawa: "Honestly, we're completely exhausted". Reconnaissance attempts against the company have doubled to 600 to 700 million a month.

[@pstuart](https://x.com/pstuart/status/2120230193600106790): "That's not a security audiot. That's DLC." [@pggalaviz](https://x.com/pggalaviz/status/2120233830309101696): "Now the same spreadsheet has 35,000 rows and the same 3 people triaging it 😅". Put this next to the VulnCheck numbers and the bottleneck is plain. Finding is cheap now. Fixing is not.

## Videos & Podcasts

- **[Nobody Is Competing With Anthropic](https://www.youtube.com/watch?v=yh5IAUow4Hc)** (Theo). The day-two Fable video. From the description: "Fable 5.2 may not be as big of a jump as Opus 5 to Opus 5.5, but Anthropic is still impressing me and I wanna break down why." Theo's [tweet](https://x.com/theo/status/2120284921839394847) (1,384 likes) is less measured: "Fable 5.2 is the greatest model ever released. I stayed up until 3am getting this video ready for y'all." [@pggalaviz](https://x.com/pggalaviz/status/2120293982227906970): "Greatest model ever, unfortunately so it's expensive".
- **[Designing for Agents, with Zeno Rocha of Resend](https://youtu.be/bdIoODXsu8k)** (Latent Space, [writeup](https://latent.space/p/resend/)). swyx's [pitch](https://x.com/swyx/status/2120260228902264872): "I finally asked @zenorocha, the CEO of AEO, why tf my agents keep choosing Resend even when I don't want them to". The writeup cites Claude Code picking Resend first in 64 of 102 email recommendations. Worth watching if you sell a developer tool and wonder why agents do not pick yours.
- **[How One Founder Manages 20 AI Coding Agents at Once](https://youtu.be/BTtyguoPvBU)** (Ryan Carson, AI Engineer). swyx [pulled the quote](https://x.com/swyx/status/2120241063193706960): "If you're coding locally, stop. You really need to be coding with a cloud agent." The replies argue the other side. [@asmirkn](https://x.com/asmirkn/status/2120242267067761112): "20 agents means 20 PRs for one person to read. Reviewing is the slow part now". [@herbad_habit](https://x.com/herbad_habit/status/2120249246414680408): "Local still wins when the feedback loop is a few seconds."
- **[Gemini 4 Carbon pelican game](https://www.youtube.com/watch?v=dNbkThtNzS8)** (Google). The demo video for the pelican campus game from the Carbon launch post.
- **AI Engineer Code Summit, Thursday.** swyx is [teasing a keynote](https://x.com/swyx/status/2120372817720197357) that required an embargo: "you guys don't know what youre in for in thursday", and "it is not the full story". The quoted post identifies the speaker as Melvin, VP of post training at Google DeepMind. Between this, OpenAI's cyber keynote and Tibo's hint, Thursday is crowded.

## Other Interesting Stuff

- **Val Town is winding down.** The [announcement](https://blog.val.town/winding-down) says "we couldn't compete in the cloud computing space". The service goes read-only on December 10, 2026, and the code will be open-sourced on February 1, 2027, with migration guides in between. Found on [Hacker News](https://news.ycombinator.com/item?id=50443427) (371 points) and via Armin Ronacher's retweet of [@daniel_levine](https://x.com/daniel_levine/status/2120222186523038092).
- **Apple "Harbor".** [9to5Mac](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) reports on an unreleased Mac app found by Aaron Perris that "turns your Mac into a private AI inference server". It runs open-weight models locally and clusters several Macs over Thunderbolt 5 to pool unified memory. It is in private preview under Apple's Claris brand. Found on [Hacker News](https://news.ycombinator.com/item?id=50446520) (186 points).
- **Agents find a Maya site.** Armin Ronacher [wants](https://x.com/mitsuhiko/status/2120355438101487620) "to see more stuff like this", quoting [Pietro Miotti](https://x.com/PietroMiotti/status/2120219901814043087) (15K likes): "My AI agents found an unmapped Maya site in Mexico, using LiDAR data from a NASA dataset." It took "72 hours from a random thought on vacation to a reply from Mexico's national archaeology institute." [@hEachthighearne](https://x.com/hEachthighearne/status/2120241063529173441): "like the least marketable indian jones movie imaginable".
- **Lee Robinson on what to teach kids.** A [long reply to a cold email](https://x.com/leerob/status/2120182450416500819) (1,128 likes). The advice is to build something exciting first and learn the CS when a roadblock demands it: "You have to hone and craft your "idea machine"." And a reminder that "AI models today are the worst they will ever be." The footnotes link Matt Pocock's skills repo as a way to have an agent teach you.
- **NaiveAI at 2,100 tokens per second.** Latent Space [tested Naive-N0.5-Flash](https://latent.space/p/naiveai/), a model built on Xiaomi MiMo-V2.5. Its median answer took 3.1 seconds against 5.3 for GLM 5.3 Flash and 10.1 for DeepSeek V4.1 Flash. With thinking on, hard questions averaged about 108,500 completion tokens, so the speed gets spent.
- **Kimi K3.1 Pro on Cerebras.** [Sarah Chieng](https://x.com/MilksandMatcha/status/2120242508655653095) wrote up how Cerebras serves Moonshot's 2.8T-parameter open-weight model as a launch partner. LLMJunky [replied](https://x.com/LLMJunky/status/2120244820182790172): "I'm deep in this space and still learned a ton from this one."
- **Hedra Model Factory.** [Hedra](https://x.com/hedra_labs/status/2120207555263905973), retweeted by LLMJunky, announced "an autonomous inference and training platform for building models for the real world", aimed at robotics, manufacturing, biology and defense teams.
