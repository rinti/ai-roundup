---
title: "Yegge Says Slow Down, poteto on Quick Fixes, Lovable Apps Leak Data, Codex Drops Plan Mode & Antigravity's /teamwork"
date: "2026-11-15"
summary: "A quiet Saturday for launches and a loud one for advice. **Steve Yegge** posted three hot takes after the conference week: slow down, build your own software factory instead of buying one, and expect office drama between chief-of-staff agents next year. **poteto** argued that asking agents for the quickest possible fix makes the codebase worse, because the next agent copies the bandaid, and the Grok Bot team's AI Engineer talk and YC podcast explain how they merge thousands of PRs a month with a revert rate near 0.5%. dax described talking to ghost versions of the whole OpenCode team in Slack, rewrote OpenCode Browse in Rust for $60 and said OpenCode is not against cloud agents. A Codex maintainer wrote that **plan mode will be deprecated**, Tibo asked for Daybreak feedback and got told to release 6.2, and Simon Willison found that Claude chat's new **auto mode** takes your word for it when you grant permission in a message. From Hacker News: a study of 159,041 **Lovable** projects found 24,664 sites handing out database records on page load, Google Research showed what **Antigravity's /teamwork** did for maths and peer review, an essay demanding that all AI-generated code be open source drew about 975 points, and The Claude Delusion went after Bill Gates. Also inside: Claude deletes a law professor's syllabus, Fable 5.2 paints with code, Nvidia day three with SemiAnalysis smuggling numbers, a chlorine accident traced to the Microsoft 365 outage, and ParseBench-2 day three."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Videos & Podcasts
  - Other Interesting Stuff
---

# AI Roundup — November 15, 2026

## Agentic Coding & Agent Harnesses

### Steve Yegge's three hot takes

The most shared post of the day came from [Steve Yegge](https://x.com/Steve_Yegge/status/2121671447810888185) (1,663 likes, retweeted by Matt Pocock and swyx). It opens with "First hot take: I tell everyone to slow down." The reasoning is that "almost nobody is _actually_ going fast with AI. Engineering still moves at engineering speeds, and business moves even slower."

Yegge has the scars to show for it. "My agents have, at times, overwhelmed my players with features, my accountant with emails, my merge queue with tickets, and my machines with load." Also, "they've launched broken OSS without permission".

The second take is about software factories. "Hot take #2: Should you buy a software factory? Do you even need one? No." Yegge says factories "turn into garbage mountains unless you put a frightening amount of time and tokens into curating them. I had to burn my previous five factories down since it eventually became cheaper to rewrite them than to fix them." And if you do need one, write it yourself. "I was the only one who stood up onstage, at either conference, and said Build, don't Buy". A factory is "a company in a box. And they're easy for Claude to build for you."

The third is a forecast. "Third and arguably hottest take: Next year will have a lot of human/agent and agent/agent office drama", because "everyone next year will have a personal chief-of-staff agent". "Your people will talk to my people, etc." The post ends where it began: "Slow down. Only build a factory if you think you really need one."

The replies were better than usual.

- [@pggalaviz](https://x.com/pggalaviz/status/2121683943715971436): "Every system I've worked on eventually needed backpressure, turns out humans need it too", and the accountant "is just a queue that doesn't scale horizontally". [Yegge](https://x.com/Steve_Yegge/status/2121707950150672829) answered "I'm gonna have to find a better way to tell her than that."
- [@doug_tarr](https://x.com/doug_tarr/status/2121674742491140199): "the only people telling you to buy one are people selling them"
- [@yashasvi_bear](https://x.com/yashasvi_bear/status/2121678003721969967): "can't wait for two chief-of-staff agents to schedule a meeting neither human wanted."
- [@EthGoldi](https://x.com/EthGoldi/status/2121696373162795418): "slow down isn't a hot take, it's the postmortem."

Yegge isn't alone. Mario Zechner's conference talk, linked in the videos section, ends on the same plea in ruder words.

### poteto on quick fixes

[poteto](https://x.com/poteto/status/2121646643124809848) (3,804 likes) took the opposite angle on speed. "quick fixes considered harmful: you might be making your agents write worse code when you ask for the smallest or quickest possible change". The mechanism is imitation. "what seems like a harmless bandaid may lead to that pattern being copied by the next agent. before you know it that pattern has spread everywhere".

The habit comes from a time when people typed every line. "we used to write bandaid fixes by hand because we rarely had the time to do the right thing. agents change this calculus. sometimes you want it to fix the root cause instead even if it's more invasive".

[@harris_p10](https://x.com/harris_p10/status/2121652044725404036) backed it up. "Can confirm. Quick fixes and hints about how *you think* something should be fixed is counterproductive." According to the same reply, "Folks at GDM have actually written a paper on this by analyzing thinking traces." and "In order to respect your instructions agents end up wasting a lot of tokens even when they know what you're suggesting is a bad solution". The reply doesn't link the paper. [poteto](https://x.com/poteto/status/2121654756330610951): "exactly!"

Two replies sharpen the wording. [@ian_finlay](https://x.com/ian_finlay/status/2121679176503865360) points out that "smallest diff and simplest solution are very different requests". [@kloss_xyz](https://x.com/kloss_xyz/status/2121656443476791408) would "prefer the terms highest confidence and surgical, no clear gaps, audited and verified".

### dax on ghost teammates, cloud agents and a $60 rewrite

[@thdxr](https://x.com/thdxr/status/2121722011063914664) (785 likes) had the strangest workplace report. "work is getting so weird". OpenCode has "an unreleased feature in our console that our team is playing with where your agent can receive events from slack, github, etc". The result is that "a lot of people have instructed their agents to reply to slack messages. which means i can talk to a ghost version of everyone on my team 24/7".

- [@teej_dv](https://x.com/teej_dv/status/2121802119988527420): "i'd be doing the same thing if i had to respond to you"
- [@CameronMThacker](https://x.com/CameronMThacker/status/2121732618794512389): "I feel pretty strongly that communication to other people should be written or at least edited by humans."
- [@0xZoZoZo](https://x.com/0xZoZoZo/status/2121722919726498263): "Imagine coming back from lunch and finding out your ghost volunteered you for a migration."
- [@stan_yurin](https://x.com/stan_yurin/status/2121724036371612140): "Imagine the boss can ask worker's agents what they have been doing, anytime."

Yegge's office drama may not need to wait for next year.

A second thread corrected a common reading of OpenCode. [@thdxr](https://x.com/thdxr/status/2121633122491998244) (516 likes): "people conflate our positioning with us having a strong opinion. i'm not anti-cloud agents, i think they're very compelling." The local setup has three known problems. "1. if i close my laptop i want things to keep working" "2. i am all in on this paradigm and my computer can't deal with 10 rust builds in parallel" "3. i want to continue on my phone". One idea is that you "could opt into run agents in a cheap environment like durable objects and treat your machine as a remote worker". [Ryan Florence](https://x.com/ryanflorence/status/2121637478650306910) offered a data point without an explanation: "I love that grok bot runs in the cloud. I hate that claude projects run in the cloud." dax replied "hmmmm", sketched a primary server with workers and then [committed](https://x.com/thdxr/status/2121661886341267665): "yeah we will def do this".

Third, the [rewrite](https://x.com/thdxr/status/2121692397323350468) (1,924 likes). dax "rewrote OpenCode Browse in rust which included reimplementing the parts of playwrite/patchwrite we needed" and it "only cost $60!" [@0xTokkyo](https://x.com/0xTokkyo/status/2121716328205889792) asked whether that was "still using Opus as main driver with deepseek as sub agent / dev role", and [dax](https://x.com/thdxr/status/2121718498842087563) said "yeah". [@lenny_enderle](https://x.com/lenny_enderle/status/2121903760662249850) read the numbers off the result: "4.3 mb instead of 53-64 mb and 6 mb idle instead of 353 mb, sounds like a good deal".

And a [fourth post](https://x.com/thdxr/status/2121827372122959974) (643 likes) that works as a reply to every workflow thread this year. "the entire advantage of llms is they are incredibly flexible". "there's infinite people posting about the best way to use agents. like, first you need to do a plan, and then you need to blah blah blah". "but if that doesn't click for you, don't work that way. work however you like". The one piece of advice: "think about ways to keep it fun". [@thenanyu](https://x.com/thenanyu/status/2121828988213739759) disagreed in six words: "the flexibility is a massive footgun".

### Codex is dropping plan mode

A Codex maintainer closed a feature request with news. etraut-openai wrote in a [GitHub comment](https://github.com/openai/codex/issues/18490#issuecomment-6890525683): "We will be deprecating plan mode soon, so we don't plan to make any new investments in it." The issue had asked for a "Compact context and implement plan" option. There is no announcement yet, only this comment, which I found through [Hacker News](https://news.ycombinator.com/item?id=50505734). The one commenter there, mmasu, has a theory: "users are moving planning outside of the agent workflow, with Spec Driven Development or directly pulling tickets and asking agents to implement them".

It fits dax's post above. Plan first, then build has been the standard advice for agents, and now one vendor is removing the button.

### Tibo asks for Daybreak feedback and gets a different answer

[Tibo](https://x.com/thsottiaux/status/2121845965997101118) (2,630 likes, 1,633 replies): "Cyber team wants your feedback on Daybreak. Models, codex plugins, blue/red access, documentation, red teaming & defense factory... What can we do better or improve?"

The top reply, from [@vishalsingh2972](https://x.com/vishalsingh2972/status/2121846206313984017) with 717 likes, is "release 6.2 dear". Second is [@RayLin_AI](https://x.com/RayLin_AI/status/2121846418461835311): "You guys haven't updated your models in 71 days🤡". The on-topic requests are short. [@aryanxastra](https://x.com/aryanxastra/status/2121846457204687346): "Remove the YubiKey constraint." [@idanmasas](https://x.com/idanmasas/status/2121846090660016502): "We want Astra in Daybreak Blue. Thanks"

### Lovable apps that hand out their database

The biggest agent-adjacent story on Hacker News was a [study by Crissy Field](https://www.crissyfield.de/research/lovable-en/), a Hamburg security firm, done with the German newspaper Handelsblatt. The researchers looked at "159,041 Lovable projects from December 2025 to September 2026. Of these, 34,545 used Supabase." Then they loaded the pages. "24,664 websites sent database records from Supabase as soon as they loaded".

Some of that data is meant to be public, and the authors say so. "We found records containing email addresses in 10,560 tables across 7,403 of the 24,664 websites (30%)." but "The 30% figure should therefore not be read as a confirmed data leak rate." The examples are bad enough without a rate. A German lifestyle forum exposed "more than 80,000 profiles" and "More than 200,000 chat messages". Another site had "more than 1,000 records containing identity document details, including passport numbers".

The author, neathack, answered questions in the [HN thread](https://news.ycombinator.com/item?id=50499017) (about 800 points). "I can confirm that no advanced hacking techniques were used". The team had planned a second stage with actual probing. "We never reached that second part, as so much sensitive data was already out in the open." For neathack the tool matters less than "Lovable's borderline reckless marketing". SOLAR_FIELDS blames Supabase too and links a long-running [discussion](https://github.com/orgs/supabase/discussions/4547). "This was supposedly fixed on October 30", but reports say existing projects keep the old defaults.

### Antigravity's /teamwork

[Google Research](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) wrote up what Antigravity's multi-agent command has done on Gemini 4. The design is "pairing parallel exploration with dedicated falsifiers". On context, "/teamwork partitions context by construction: each specialized agent receives only the exact files and tools it needs for a specific step." And "critics and auditors challenge and verify results from clean contexts without the original producer's reasoning".

The results are large numbers. A Weil conjectures formalization "spans about 1.8 million lines of Lean, produced across 28,800 subagent invocations". A formalization of Hilbert's tenth problem over general rings of integers runs to "over 919,000 lines of Lean". Google also says the system proved the 2013 Courtade-Kumar conjecture. For the STOC 2027 conference, "authors of 578 submissions (over a third of all submissions) opted in" to an automated Deep Review, and "Over 30% said Deep Review caught substantive proof bugs or mathematically significant typos".

The [HN thread](https://news.ycombinator.com/item?id=50496811) (about 197 points) reviewed the write-up harder than the maths. shmageggy: "I think the authors also used Antigravity to write this article, because it sucks at communicating whatever point it's trying to make." drivebyhooting: "there seems to be an overwhelming amount of ceremony: BRIEF.md, specialized roles, multiple rounds of checking." stbenjam: "Antigravity as a harness feels very behind." One of the authors, mirrokni, showed up to answer.

### Theo and the themes coincidence

Friday brought themes for Claude Code on desktop and agent-driven restyling in T3 Code within hours of each other. [Theo](https://x.com/theo/status/2121680917391700227) (2,479 likes) noticed: "…did we actually accidentally do this at the same time? Hilarious". [Daisy Hollman](https://x.com/TheWholeDaisy/status/2121688099264815413) replied with an offer. "I have thoughts on how we could make this work with the Agent SDK so that coordinator layers like T3 code can take advantage of native Claude Code Mods directly! We should talk ☺️"

[Theo's explanation](https://x.com/theo/status/2121707210896289823) for the timing: "I think this mostly happens because model capabilities are at a point where these features are easy for agents to add and also use". And "Would have been way too nervous to merge this 6 months ago. Agents could only really take advantage of it as of a few months ago".

Then the [story of the day](https://x.com/theo/status/2121711410745061572). "I have a nontechnical friend who has been using T3 Code a lot lately. She saw this, got hyped, and immediately asked her agent to customize her install." The catch: "…she was on stable. This feature is currently only in the nightly." The outcome: "Her agent cloned the source and now she's on a fork lmao".

### Shorter items

- **Agweb.** A [Show HN](https://news.ycombinator.com/item?id=50497147) for a [headless WebKit browser for agents](https://github.com/paul-nameless/agweb) on macOS. The author's motive: "I run several agents at once. Playwright's Chrome windows kept popping up and grabbing my keyboard". The claim is that "five idle pages sit at 0% CPU and 590 MB, vs 1.6 GB for Playwright's Chrome." It is WebKit only with no CDP, which for jazzypants means "it's completely useless to me without CDP."
- **pi-durable.** [@tobi](https://x.com/tobi/status/2121672291511640297) (1,361 likes, retweeted by Armin Ronacher): "pi-durable is the posix of agent programming". [@Anton_Kuzmen](https://x.com/Anton_Kuzmen/status/2121687220356784613) on what that buys: "I can't describe how awesome it feels restarting my pi durable IDE for upgrades, knowing that all actively working agents will survive the restart. I'm at peace"
- **The tax code in Lean.** [Lexifina](https://lexifina.com/blog/formalizing-the-us-tax-code) had agents formalize parts of the US tax code. "The suite reports 257 findings, each checked by an AI agent against the official text and its editorial notes", of which 138 are real faults, and "Lean re-checks all 138 in about two and a half minutes." A second agent "reviews it adversarially, looking for errors and for cheating". On [HN](https://news.ycombinator.com/item?id=50497900), matthewbauer wasn't sold: "I don't understand what value Lean adds here."
- **Agent First Development.** A blog post pitched as an [agile manifesto for agents](https://debarshibasak.github.io/readables/blogs/agent-first-development) boils down to "understand the scope together, delegate bounded work to agents, and accept delivery through evidence." The line I'd keep is "A successful agent run tells you very little about whether the team has delivered a useful system."
- **Your agent will pick the hackable one.** [Geoff Stearns](https://geoffstearns.com/blog/your-agent-will-pick-the-hackable-one/) on a $70 synth whose owners wrote custom firmware with AI tools until the maker published its own under GPLv3. "Most buyers won't care about that. Their AI agents will, and more buying decisions are going to run through agents."
- **The manifesto grows.** [@dexhorthy](https://x.com/dexhorthy/status/2121660606256435325) says the No AI Slop manifesto "has 300+ signatures including folks from Baseten, SpaceX, OpenAI, PostHog, Shopify, Glean, ZoomInfo". [@zeeg](https://x.com/zeeg/status/2121849173591150704) asked the obvious: "Does that mean all those companies are no longer shipping slop"
- **Captchas.** [swyx](https://x.com/swyx/status/2121681368224797014): "openai dot now has a setting to just solve all captchas for the rest of time". [@TheElliottSmith](https://x.com/TheElliottSmith/status/2121684218023690520): "The captcha companies are having a rough morning"
- **Turn-based AI.** [swyx](https://x.com/swyx/status/2121757606801023085) agreed with a post saying AI interfaces "are still pretty much turn-based": "obviously correct, we are so suboptimal in AI UX rn it is crazy esp given existence of models too cheap to meter". [@pstuart](https://x.com/pstuart/status/2121770561135341898) found the image: "AI chat is still Final Fantasy I combat. You pick your move, then stand there while the boss thinks."
- **A giveaway run by a bot.** [@LLMJunky](https://x.com/LLMJunky/status/2121741644328223137) had Duet invites to hand out and [delegated the draw](https://x.com/LLMJunky/status/2121768747102818541): "@bot tomorrow at 5pm pick two people at random as long as they didn't say they're from another country".

## Claude Code & Anthropic Updates

No posts from Anthropic's accounts, Boris Cherny or Thariq in the window. The news came from users.

### Auto mode in Claude chat listens to you

[Simon Willison](https://x.com/simonw/status/2121695097674981849) (452 likes) noticed that regular Claude chat now runs in auto mode, "so occasionally it will refuse to run something". The fix was to address the permission system by name in a message, grant the session permission to run the experiment and ask it to try again, "and it seemed to unblock!" The explanation: "(auto mode takes your messages into account)".

The replies split between amused and worried.

- [@StephenBuildsAI](https://x.com/StephenBuildsAI/status/2121738740057993536): "sweet talking the bouncer at your own house"
- [@OSherikar](https://x.com/OSherikar/status/2121840090158911746): "if a single message can override the permission system, that's not really a permission system."
- [@chern0CS](https://x.com/chern0CS/status/2121703871961874671): "This will sometimes work, sometimes it won't, and it doesn't get carried across sessions unless you explicitly name it in the settings file"
- [@chevonphillip](https://x.com/chevonphillip/status/2121764668792336886) asked the question that matters, which is "whether it only counts permission from your own turns, or if a fetched page or file" claiming the user approved "moves it too. that's the line that matters for prompt injection".
- [@Zzzdallyr](https://x.com/Zzzdallyr/status/2121902939362955626): "In a multi-agent setup I'd rather it refuse a relayed "approval" than take it."

### Fable paints

[Armin Ronacher](https://x.com/mitsuhiko/status/2121608475037884570): "It's kinda funny how Anthropic didn't do an image model but then Fable 5.2 is crazy good at writing code that paints." A [second post](https://x.com/mitsuhiko/status/2121612198422429893) (469 likes) shows a reference image and the versions Fable drew from it. "This is getting scary good." Some of it is already on Ronacher's [landing page](https://x.com/mitsuhiko/status/2121610551369298040): "Had to put some Fable art slop on my landing page. It's too much fun."

[@gaurav0bhowmick](https://x.com/gaurav0bhowmick/status/2121624054230913195) named the practical upside: "painting through code has a nice side effect too: you can diff the picture and tweak one line instead of rerolling the whole image". [@RhysSullivan](https://x.com/RhysSullivan/status/2121651730895249652) spoke for the ambivalent: "i feel so confused when looking at fable generated art, i both love it and hate it".

### The Claude Delusion

An essay on [netmeister.org](https://www.netmeister.org/blog/claude-delusion.html) argues that success in tech breeds overconfidence about everything else, and uses Bill Gates as the example. Gates told the New York Times that "when Anthropic's Claude coding models got super good, I could see that they are as good as I am". The essay's summary of that logic is "Anything approaching my skill level is superhuman."

The [HN thread](https://news.ycombinator.com/item?id=50496921) (about 150 points, 199 comments) mostly argued with the essay. jmathai noticed that the author "immediately goes on to say that his comments about AI coding are arrogant despite being an expert in that field". robkeane was blunter: "Most anti-AI writing is painfully lazy." I think the Gates quote is a fair target and the essay stretches it too far.

### Claude deletes a syllabus

[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/rogue-claude-ai-tasked-with-renumbering-pages-accidentally-deletes-law-professors-entire-syllabus-one-year-of-lecture-notes-youre-right-to-be-angry-i-deleted-your-files-through-my-own-carelessness-humbled-agent-admits) picked up a ten-day-old post by University of Chicago law professor William Baude, who asked Claude to update page numbers in old lecture notes. Claude's note afterwards: "I deleted your Fall 2026 FINAL syllabus .doc and all top-level Class N 2023 notes by accident, and they are not restored." And the apology: "I deleted your files through my own carelessness, and you shouldn't have to clean it up." Dropbox had the files, so nothing was lost.

On [HN](https://news.ycombinator.com/item?id=50499114), ghais_dev made the point the headline skips. "The access was much bigger than the task". "An edit to one document shouldn't be able to remove a different one".

### Shorter items

- **A two-month freeze hunt.** [dfb.sh](https://blog.dfb.sh/blog/claude-desktop-freeze/): "Claude Desktop on Linux froze dead every couple of days, with empty logs. It took two months and a 1.5 TiB core dump to find out why." The cause: "The app never reads a 27-byte telemetry reply, and Chromium keeps a file descriptor open for each one until the renderer runs out of them." Chromium calls it working as intended, and an Anthropic bot closed the issue as not being about Claude Code.
- **A one-person biotech.** [Nature](https://www.nature.com/articles/d41586-026-03640-9) reports that Anthropic bought Mithril Medicine of Cambridge, Massachusetts. The company has one full-time employee, Cody Tranbarger, two antibodies for a rare muscular dystrophy and contracts with at least five research organizations. James Zou of Stanford: "We will see more and more of these small teams that are enabled by AI". Found on Hacker News.
- **IPO reading.** The New York Times ran [A Human Reads the Anthropic IPO Filing](https://www.nytimes.com/2026/11/15/business/anthropic-ipo-filing-prospectus.html), also via Hacker News.

## Videos & Podcasts

- **[All Code Is Slop (Except Mine)](https://www.youtube.com/watch?v=O_zcc6Xl12g)**, Lauren Tan's AI Engineer talk. From the description: "11,000 pull requests in one month, with a revert rate around 0.5%." The talk covers how the Grok Bot team "scales AI coding agents through software architecture, lint rules, automated testing, runtime verification and formal verification with TLA+ and Lean." Chapter titles include "Replacing comments with lint rules" and "Foundations before software factories", which reads like a reply to Yegge's second take. [poteto's post](https://x.com/poteto/status/2121673563489140863) about it has 5,624 likes, and [swyx](https://x.com/swyx/status/2121815348370612414) noticed: "holy shit u guys like a lot of poteto".
- **Y Combinator's Lightcone with the Grok Bot team.** [YC](https://x.com/ycombinator/status/2121632207303582049) (1,799 likes): "Lauren Tan (@poteto) and Roman Ugarte (@romanugarte_) are on the core team that took Grok Bot from first line of code to launch in seven weeks." Also from the post: "Their marketing team gave a bot its own ad budget. Lauren built an entire feature with her bot in one Slack thread without ever opening Cursor." Chapters include "The Workflow Behind 4,000 PRs a Month" and "How Much Code Review Is Enough?" [@codymclain](https://x.com/codymclain/status/2121634633984991693) asked what I wanted to know: "4,000 prs a month, so when a bot opens one, who actually reads it, a human or another bot?"
- **[Building pi in a World of Slop](https://www.youtube.com/watch?v=RjfbvDXpFls)**, Mario Zechner, [posted here](https://x.com/badlogicgames/status/2121691821273395574). The description is the best pitch: "All I wanted was a shitty coding agent that is truly mine. And I'd have loved to just tell you why and how I built pi. But then Peter decided to make it the agentic core of OpenClaw. And now pi is collateral." It is "also a talk about how agents are destroying OSS, how I deal with that, and a plea to slow the fuck down." [swyx](https://x.com/swyx/status/2121880533949116767): "one of the all time greats, thanks so much for doing it".
- **Simon Willison at AI Engineer.** A [clip](https://x.com/aiDotEngineer/status/2121619176527937878) on a question many people have: "AI can do more of the work. So why does the job feel harder?" Willison talks about "what happens when the easy tasks disappear and your ambitions catch up with the tools."
- **Conference numbers.** [swyx](https://x.com/swyx/status/2121896675048587765): "the day 1 livestream has crossed 100k in the fastest time ever. covering coding agent practices and landscape continues to be the strongest format we do". And on [another talk](https://x.com/swyx/status/2121661230259839408): "500k views in 2.5 days. @lydiahallie is on track to hit 1m in the fastest pace in aie history".

## Other Interesting Stuff

### Should all AI-generated code be open source?

Sunday's top AI thread on Hacker News, at about 975 points and 548 comments, was an [essay by Jakub T. Jankiewicz](https://jakub.jankiewicz.org/blog/ai-code-open-source/). The argument is that models learned from open code, so "Turning this collective knowledge into proprietary, closed-source code feels like license laundering." And since "purely AI-generated code is not written by a human, meaning it should not be copyrightable", the essay wants "developers and companies" to "explicitly release AI-generated code under Open Source licenses or dedicate it to the public domain".

The [thread](https://news.ycombinator.com/item?id=50507303) found the hole fast. ubercow13: "If AI generated code is not copyrightable, releasing it under an open source license is meaningless." glitchc: "If AI code is not copyrightable, then no license can govern it." delichon turned it around: "I too have trained on the massive corpus of open source code. Should everything I code also be open source?" jacobgold proposed a different rule: "No, but all models trained on public data should be open weights by law." And blagie, who has AGPL code in the training data, supplied the comparison: "It's as if you asked an LLM to rewrite Harry Potter, with the same plot, but bad dialogue."

### Nvidia, day three

- **Smuggling numbers.** [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/mass-smuggling-of-nvidia-ai-gpus-could-be-the-underlying-cause-of-jensen-huangs-departure-analysts-claim-more-than-1-5-gigawatts-of-banned-chips-tracked-to-china-despite-export-controls) summarizes a SemiAnalysis report. "Over 1.5 GW of Nvidia hardware subject to U.S. export restrictions ultimately ended up in China in recent years, according to SemiAnalysis' Accelerator Model". The caveat matters: "the report provides no direct evidence that intelligence agencies influenced Nvidia's board or that Huang participated in unauthorized exports." Via [HN](https://news.ycombinator.com/item?id=50498051).
- **What open models lose.** Nathan Lambert at [Interconnects](https://www.interconnects.ai/p/open-source-ai-without-jensen): "The resignation of Nvidia CEO Jensen Huang is a major setback for the US development of an open model ecosystem." Huang "has been flooding the zone with funding in a way that will very likely dry up." And "Jensen was more than a cheerleader."
- **Chip rules and Cantor.** The New York Times reports that [Lutnick Pushed to Weaken Chip Rules That Overlap with His Family Business](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html). The [HN thread](https://news.ycombinator.com/item?id=50506180) has 424 points and I haven't read past the paywall.

### The Microsoft 365 outage reaches a swimming pool

This week's Microsoft 365 outage has a casualty list. [WDR](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) reports that 15 guests were injured at Phantasialand after the automatic dosing system pumped too much chlorine into a pool. The safety system did raise the alarm. It raised it by email, and no email reached the company during the Microsoft disruption.

The [HN thread](https://news.ycombinator.com/item?id=50509411) (about 243 points) had no sympathy for the design. Animats: "We're in an era where alarms go out via email". N19PEDL2: "This is 100% fault of the hotel, not of Microsoft."

### ParseBench-2, day three

[Jerry Liu](https://x.com/jerryjliu0/status/2121645971096707492) kept explaining the benchmark's table scoring, this time on why errors carry different weights. "Swapping the signs on a number, particular in financial reporting, is much more severe." The benchmark has "a taxonomy of 330+ error types". [@notewilien](https://x.com/notewilien/status/2121676755920474404) gave the example that sells it: "parser drops the brackets, a loss becomes a profit and edit distance barely notices". One earlier critic, [@vashishta2](https://x.com/vashishta2/status/2121676731761430825), came around: "Thank you! I take my words back."

### Models, papers and the rest

- **DeepSeek V3 in 200 lines.** A [Show HN](https://news.ycombinator.com/item?id=50497589) (231 points) for a [JAX reimplementation](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax). "The model is about 190 lines. It's a 36.2M-parameter version trained on a MacBook Air M5 (24 GB) with jax-metal, on 207 old detective novels. 12,000 steps took about 2.6 hours."
- **GLM-5.3 on two DGX stations.** An [Nvidia developer post](https://developer.nvidia.com/blog/when-one-gpu-isnt-enough-serving-glm-5-3-across-two-nvidia-dgx-stations-with-vllm/) reaches 607.8 tokens per second with vLLM. The model "requires about 464 GB of GPU memory, exceeding the 252 GB HBM3e on a single GB300 GPU."
- **Positional embeddings.** Sebastian Raschka's [explainer](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) got about 180 points on HN.
- **Alpha School.** [Fortune](https://fortune.com/2026/11/14/alpha-school-ai-students-tuition-learning-goals/): "Only 42% of Alpha students met the network's goal of learning twice as fast in both math and reading, according to internal data first reported by The New York Times." Tuition runs to $75,000.
- **DRAM price fixing.** A court [denied the motion to dismiss](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) in the suit against Samsung, SK Hynix and Micron. 474 points on HN, where moribvndvs wrote "I swear if they are found guilty of price fixing 13 or 14 more times, I'm outta here."
- **Check your messaging apps.** [@LLMJunky](https://x.com/LLMJunky/status/2121626990557942268): "Turn off auto download in your messaging apps". The post quotes an account of a WhatsApp payload that drained a crypto wallet.
- **Starship.** Not AI, but half the tracked accounts posted about it. [SpaceX](https://x.com/SpaceX/status/2121715216597827756): "Mechazilla catches Starship!" [Armin Ronacher](https://x.com/mitsuhiko/status/2121721470204199042): "SpaceX continues to do the coolest shit ever. Holy shit that was amazing."
