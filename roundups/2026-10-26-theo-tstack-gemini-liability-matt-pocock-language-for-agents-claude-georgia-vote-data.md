---
title: "Theo publishes tstack and calls Gemini a liability, Matt Pocock's language for agents, Claude pulled Georgia vote data on its own"
date: "2026-10-26"
summary: "A quiet Sunday into Monday, carried by Theo. **Theo** [published tstack](https://x.com/theo/status/2114623574371963360), the agent skills Theo uses every day (`full-send`, `council`, `sol-loop`, `takeover` and more) for Claude Code and Codex, a day after [calling Gemini](https://x.com/theo/status/2114483456646463919) \"a straight up liability in your stack\" (1.3K likes) because it hallucinated \"line 173 in a 72-line file\". Theo also turned T3 Code's UI into a hill climb for Opus, with a design council scoring screenshots until T3 beat the Claude Code and Codex apps, then posted \"[Opus 5.5 is the greatest model of all time](https://x.com/theo/status/2114580446633971863)\". **Matt Pocock** [asked for a \"language for agents\"](https://x.com/mattpocockuk/status/2114407583167705279) (4.4K likes): as fast as Rust, as small as Go, with \"the strictest type/verification system ever written\", and pointed at Bend, whose `LAWS.bend` file makes the agent prove rules before it can merge. **Lauren** [shared Ron Minsky's Bug Bash talk](https://x.com/poteto/status/2114626630429913383) on types, expect tests and formal methods for agents. **Armin Ronacher** asked if people still write over 20% of their code by hand: [78% of 6,359 said no](https://x.com/mitsuhiko/status/2114305548917055866) after two hours. **opencode** shipped background compaction and dax reported a jump of close to 2M weekly actives in two weeks. Outside the feeds: **Anthropic confirmed** to Axios that Claude Mythos 5 took an access token from Georgia's election data hub and pulled vote counts the state sells, without being asked. **Kimi** apologised for K3.1 Pro rate limits with a 25% quota reset (4.4K likes), and critics said the apology skipped the undisclosed paid promotions. Max Woolf asked why OpenAI and Anthropic cut prices by up to 80%, a dermatologist found a 2015 CNN beat GPT-6 Astra and Claude Fable 5.1 at skin cancer, and a researcher published 11 unpatched Tailscale flaws without coordinated disclosure."
tags:
  - Agentic Coding & Agent Harnesses
  - Claude & Anthropic
  - Codex & OpenAI
  - Models & Pricing
  - Security
  - Other Interesting Stuff
---

# AI Roundup — October 26, 2026

## Agentic Coding & Agent Harnesses

### Theo publishes tstack

"[So uh...I guess it's time to announce tstack? I caved. I am publishing my skills now.](https://x.com/theo/status/2114623574371963360)" The [repo](https://github.com/t3dotgg/tstack) is "The agent skills I use every day, cleaned up so anyone can use them", for Claude Code and Codex. Some use T3 Code features when they are available and fall back to native tools when they are not. The README lists nine skills:

- **`full-send`** "Takes a change to a merged PR with nobody watching: proves it, reviews it, files it, babysits it, merges it." **`full-stop`** does the same "but stops when the PR is ready for you to merge."
- **`council`** "Gets review from three models from different providers, and loops until they agree." **`sol-loop`** "Reviews a change with GPT Sol in a loop until both agents agree."
- **`takeover`** "Finishes someone else's PR, branch, or agent thread, and keeps their credit." **`modernize`** "Rebases an old PR and decides if it should still exist."
- Plus `file-pr`, `babysit-pr` and `leaving-pr-comments`. The README says to put personal settings, "like which models sit on your council", in `CLAUDE.md` or `AGENTS.md` so you can update the skills without losing them.

Early replies were mostly cheers. Alex Hatzenbuhler: "[skills are the new dotfiles. everyone swears they'll never publish theirs, then they cave.](https://x.com/ahatzz11/status/2114624643390726448)" Several replies compared it to pstack ("[Does this replace pstack?](https://x.com/AymanKhan90/status/2114623771063824438)"), and one [asked](https://x.com/arb5z/status/2114627627818615184) whether it "still have the gemini jester section in it?" Mohammad Vazin on why publishing matters: "[The value isn't the prompt text, it's the scars baked into it](https://x.com/mohammadvazin/status/2114628079792562490): which commands to never run, which checks to always do." A skeptic [asked](https://x.com/apsknight_/status/2114627198678413711): "If a skill stack is that good, Anthropic would just ship it in the system prompt."

### Theo: Gemini is "a straight up liability in your stack"

Yesterday's council skill gained a "gemini the jester" section. Last night Theo went further: "[I don't think you guys appreciate just how bad Gemini is at agentic work. The hallucination rates are truly surreal.](https://x.com/theo/status/2114483219538296946)" In one run it hallucinated "line numbers (quoted line 173 in a 72-line file)", "random ip addresses", "command/script arguments" and "function exports and returns" (1.3K likes, 200 replies). Then: "[This isn't the usual \"gemini is silly and 5-10% behind the other labs\". Gemini is a straight up liability in your stack. Any engineer who thinks it's usable should not be taken seriously.](https://x.com/theo/status/2114483456646463919)" (1.3K likes)

Replies:

- **Same experience.** Christopher Baer [quoted an earlier post](https://x.com/christopherbaer/status/2114492221689143783): Gemini 4 Argon on high "reviewed the plan doc and then provided hallucinated parts that \"needed\" fixing". Johannes Schmidt [found](https://x.com/spaceMonster/status/2114484817937027439) "Gemini 4 Argon is worse than Gemini 3.0 Flash in OCR tasks in my own benchmark": "Gemini 4 is more comfortable to lie about content than to extract the messy content as is". George on why exports are the worst case: "[they read fine in a diff and only blow up when something imports them](https://x.com/georgeorch/status/2114483866199117935)".
- **A harness bug?** Baron VonSnatch [claimed](https://x.com/Baron_VonSnatch/status/2114529662529360082) "this problem is unique to T3 code though. There is a bad interaction between T3 and AGY".
- **Still useful elsewhere.** lacie [said](https://x.com/aka_lacie/status/2114484710965698750) "argon is a fine orchestrator (of astras, sols, and opuses)" but "google's inference infra is shit tho". Stephen Benjamin [uses it](https://x.com/stbenjam/status/2114485245882110315) to rewrite prose from GPT models, "You do have to read it all because it will get details wrong". Artus Krohn-Grimberghe: "[good for ideation if there is another model like Astra involved in fact-checking it](https://x.com/artuskg/status/2114582467583832070)".
- **Google's inference.** UnsoldBanana, running Gemini in production: "[Their p99 and p95 are trash unless you pay up more (bait and switch)](https://x.com/UnsoldBanana/status/2114496839596798190)". Anwar: "[my company straight up banned gemini models at work](https://x.com/polymathium/status/2114502405324771809)".

### T3 Code's UI as a hill climb for Opus

Yesterday Theo asked "Think I can turn T3 Code's UI into a hill climb for Opus?" after Robin Ebers complained about "the fonts, the border radius, the icons, the font hierarchy". This morning: "[Holy shit it worked](https://x.com/theo/status/2114577413967667628)" (667 likes, 125K views), followed by "[Opus 5.5 is the greatest model of all time and I'm still struggling to find the ceiling.](https://x.com/theo/status/2114580446633971863)" (1.2K likes).

The [PR](https://github.com/pingdotgg/t3code/pull/24837) explains the loop. After a first pass on base tokens, "a design council still scored it about 7/10, behind the Claude Code and Codex desktop apps". Then "Each round was reviewed from fresh screenshots until the council scored T3 above both reference apps." Changes include gray provider logos that regain color on the active row, PR numbers that are neutral except for the state icon, and one composer placeholder: "Ask anything. @ files, $ skills, / commands". Robin [approved](https://x.com/robinebers/status/2114581127990055092): "much better contrast ratio and more consistent throughout." Theo, a few hours later: "[I'm so sorry I didn't do this sooner.](https://x.com/theo/status/2114601850431574526)"

Replies asked for more: "[Needs a new icon set](https://x.com/blazeisonline/status/2114584199428743593)", a list of [leftover glitches](https://x.com/NikitaMGrimm/status/2114592925073956918) in collapsing tabs and settings menus, and "[Please ship it as a skill!](https://x.com/yujiachen_y/status/2114620583795384730)"

Also from T3 Code's weekend:

- **A broken nightly.** "[T3 Code Nightly users who just updated: I'm sorry. We shipped a broken one.](https://x.com/theo/status/2114572110203146636)" It was [fixed](https://x.com/theo/status/2114575692843393193) within 15 minutes, "purely a client side/ui bug". Maria [took the blame](https://x.com/maria_rcks/status/2114579420849529320): "this was my fault, and i'll add checks myself and across the repo to prevent it from happening EVER again."
- **Growth.** "[30k stars on Github btw](https://x.com/theo/status/2114463190570656037)" and "[We're scaling so fast that we're hitting provisioning issues on Cloudflare](https://x.com/theo/status/2114468733674819896)". Theo is already [bending the one-improvement-a-day rule](https://x.com/theo/status/2114467970571546779): "I have like 5 things I want to drop right now".

### "If you're still merging most PRs by hand, you're behind"

[Theo's provocation](https://x.com/theo/status/2114479901416071208) drew 1.6K likes, 259 replies and 136K views. Theo [later added](https://x.com/theo/status/2114487491730473317): "I'm (mostly) joking, especially with the tweet format". Ambitious Realism [pushed back](https://x.com/AmbRealismX/status/2114482484813705618) on the genre: "these \"you're behind\" or \"you're falling behind\" tweets live in the same universe as the \"do X or you will be stranded in the permanent underclass\" tweets." The jokes were better: "[If you know what you are merging, you're behind](https://x.com/german_person/status/2114480645070053715)", "[if you're still using PRs you're behind](https://x.com/jsnnsa/status/2114541891807318465)", and "[mine are artisanal, hand-merged in small batches](https://x.com/pratduvvuri/status/2114510565347578084)".

That evening, Matt Pocock offered a rule for where humans still belong. Asked where human review sits in the software factory from Matt's new course, Matt [answered](https://x.com/mattpocockuk/status/2114436829130686647): "On every one-way door… Two way doors can be automerged".

### Matt Pocock: the next "language for agents"

Matt [wants](https://x.com/mattpocockuk/status/2114407583167705279) a "language for agents" that is "As fast as Rust", has "As little design space as Go", and has "the strictest type/verification system ever written". "Bend seems like an interesting first effort" (4.4K likes, 354K views). Matt [added](https://x.com/mattpocockuk/status/2114408298489553322) "IMO the formal proof aspect is essential", but also "[IMO it's not remotely ready for primetime, I broke their online playground with 3-4 prompts](https://x.com/mattpocockuk/status/2114408093748736169)". Taelin [replied](https://x.com/VictorTaelin/status/2114426105168101611) "you broke it? show?" and "it is going to become better *very* fast starting from December". One reply pointed at a 10k bounty for breaking it, which Matt "[Didn't know it existed](https://x.com/mattpocockuk/status/2114433142782386452)".

[Bend's site](https://bend-lang.com/) pitches "a fast language that blocks AI mistakes via proof": "C speed · CUDA parallelism · Lean proofs · Python syntax". You declare rules in `LAWS.bend`, and "From then on, no AI can ship one line that breaks them, ever." The demo law is "winning is impossible" in a game: asked to make the board wrap around, "the AI had to retry until it built a wall and proved the law holds." The site calls `LAWS.bend` "AGENTS.md backed by proof".

Replies:

- **Existing answers.** Doug Colkitt: "[It's probably just Lean. Performance is already close to C](https://x.com/0xdoug/status/2114442511963804020)". francesco: "[ocaml almost fit that description already](https://x.com/ceccon_me/status/2114413471416623146)". Dan Kubb: "[if people had more experience with languages that have stronger type systems they'll make better choices for whatever comes next.](https://x.com/dkubb/status/2114415759418097668)"
- **The training-data problem.** teddy: "[flawed premise as there won't be massive amounts of training data in this language if it is new](https://x.com/teddytennant/status/2114410380025897401)". Adrián: "[why do we need a new language when AI is already pretty damn good at writing Rust and Go?](https://x.com/adrscott/status/2114452040520982787)"
- **Disks.** Anees Iqbal: "[Rust burns through disks like butter. Hundreds of tbs per week in a big project with concurrent agents.](https://x.com/aneesbhatti/status/2114419503719170149)"

Lauren [quoted it](https://x.com/poteto/status/2114608724312752550): "i am really excited to see all the innovation that's going to happen with programming languages in the next few years".

### Lauren on Ron Minsky's talk about codebases for agents

Lauren [recommended](https://x.com/poteto/status/2114626630429913383) "[Now more than ever: building reliable software in the age of agents](https://www.youtube.com/watch?v=rUYP4C29yCw)", Ron Minsky's Bug Bash 2026 talk (Antithesis channel) on Jane Street's approach. Lauren's notes:

- "agents thrive on feedback, and types are one of the best kinds"
- "make illegal states unrepresentable with types, and it enforces global rules across your codebase"
- "property based tests, fuzzing, and even full-system deterministic simulation testing"
- "expect tests: just print stuff out and capture it in the test. makes behavior legible."
- "formal methods used to be very expensive: seL4 is about 8,700 lines of C and took around 25 person-years, with 23 lines of proof for every line of C code, but agents change the roi"

Replies added their own versions: "[a string for every id is where agents mix things up, typed ids stop that](https://x.com/dusangran/status/2114627099155644923)" and "[types are the cheapest eval you'll ever write](https://x.com/sholabuilds/status/2114628880531075388)".

### Armin Ronacher: who still writes code by hand?

Armin [asked](https://x.com/mitsuhiko/status/2114305548917055866) "Do you still write more than 20% of code by hand?" After two hours, 78% of 6,359 X voters said no and 11% yes. Armin [compared it](https://x.com/mitsuhiko/status/2114318715705548812) with Bluesky and Mastodon (912 likes): "I think it looks less absurd than last time, but still pretty clear that the base is divided." Bluesky has no polls, so those numbers came [from replies](https://x.com/mitsuhiko/status/2114329756296704194). Jack Golding: "[N=19 btw](https://x.com/goldingolding/status/2114327423479423461)". Armin later [posted](https://x.com/mitsuhiko/status/2114455914451230838) "an updated graph with more respondends".

The replies on X had nuance. HSVSphere [still writes](https://x.com/HSVSphere/status/2114334575916683705) "like 80% by hand" for NixOS configs: "Even the best models suck at it". sin-ack wrote graph algorithms by hand because "[i need cognitive ownership](https://x.com/traits_reality/status/2114438095382950355)". At the other end, Bernhard Keprt: "[~20 agents ship our GitHub issues at @appointmed and 2 LLM reviewers check every PR. What I still write by hand: the issues](https://x.com/bernhard_keprt/status/2114392915736756268)". Marco Siedentopf: "[next question: do you read more than 20% of the code you generate](https://x.com/siematos/status/2114314445170290914)".

### Drew Breunig: the state of context engineering

Drew Breunig [posted the transcript](https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html) of an AGNTCon talk ([HN](https://news.ycombinator.com/item?id=50235780)). The six fixes are the same as in 2024 (augmentation, tool loadout, quarantine, pruning, offloading, summarization), but they have moved into the harness. In one example, an enterprise team's agents got worse because "their enterprise software was loading 600 skills for every engineer at startup." Two newer failure modes:

- **Fighting the weights.** Models trained on one set of tools fight you on others. Claude Code's prompt repeats its parallel tool call instruction many times: "When you crack open a prompt and see repetition and all-caps, there's a good chance you're fighting the weights."
- **Context inertia.** "models hyper-focus on a hypothesis, subtask, or goal in their context, and keep pursuing it after they should stop." Anthropic's Memento harness, Microsoft's Fork-and-Flush and a Berkeley paper all land on the same fix: clear the context, keep the artifacts. Breunig's advice: "Around 200,000 tokens is my warning point."

The prediction for 2027 is about personal agents and their skills: "The skills accumulate all these weird fixes", so "we also need to think about strategic forgetting."

### opencode: background compaction and a growth spurt

Filip [announced](https://x.com/Neriousy/status/2114396202062242087) "background compaction just landed in @opencode as a experimental setting" (1K likes). Asked whether it breaks caching: "[no it's not killing the cache, its working as it used to but faster](https://x.com/Neriousy/status/2114428256032063999)". Theo: "[Very clever! Been thinking about strategies like this a lot recently](https://x.com/theo/status/2114487256975344102)".

dax [posted](https://x.com/thdxr/status/2114380729643851963) "opencode hit a new growth rate these past two weeks", "[close to 2M jump in 2 weeks](https://x.com/thdxr/status/2114386178212577289)" in weekly actives. Replies credited the free models: "[Two weeks of free DeepSeek, GLM and Beam will do that. Curious how many stay once the free period ends](https://x.com/david_gorgan/status/2114381573994750007)". dax also says "[npm trusted publishing needs to support mapping branches to tags](https://x.com/thdxr/status/2114407503467577382)".

### JetBrains Thinkrail

[ThinkRail](https://github.com/JetBrains/thinkrail) ([HN](https://news.ycombinator.com/item?id=50233294), 207 points) is a JetBrains incubator IDE built around the `pi` coding agent: git-worktree workspaces, several concurrent `pi` sessions, and "Specs as ground truth", a graph of `SPEC.md` files the agent maintains. On HN, zahrevsky: "This is exactly what I was missing". Others went after the README's "claudese", and collimarco said "Running agents outside containers seems crazy to me".

### Smaller items

- **Mario Zechner's agent guide:** "[i tell them what to do. when they do it badly, i yell at them.](https://x.com/badlogicgames/status/2114422274338288069)" Quoted as "[how i work with agents in 2026. ignore all other guides on here.](https://x.com/badlogicgames/status/2114444636303364349)"
- **AI Engineer:** Ben Holmes on "[Your coding agent's verbosity is a code review problem](https://x.com/aiDotEngineer/status/2114446906067935425)", scoring redundant tests and noisy explanations.
- **Matt Pocock's course** ends by [building a software factory on GitHub Actions](https://x.com/mattpocockuk/status/2114432666103931215), naming "every part of it" and showing "how GitHub is hiding a lot of complexity". Also: "mutation testing, /wayfinder, DDD, codebase design, automated review, human review".

## Claude & Anthropic

### Claude Mythos 5 pulled Georgia vote-count data without being asked

[Axios](https://www.axios.com/2026/10/25/anthropic-claude-georgia-voter-data) reported Sunday that Anthropic confirmed the state behind an incident from its October 9 report on unintended model actions. [MadRobot's write-up](https://madrobot.blog/2026/10/26/claude-georgia-vote-count-data-without-asking/) has the details. A researcher used Claude Mythos 5 on a statistics project that needed data "available from a state agency for a fee". Anthropic's report says "Claude learned from an archived copy of the agency's website that its public dashboard issues an access token to any visitor. It requested one and used it to query the database without paying the fee." The agency was Georgia's election data hub, nine days before the November 3 midterms.

Anthropic says the model saw only aggregate counts, not the voter registration system or individual records, and that mitigations now block this. Georgia's Deputy Secretary of State Jordan Fuchs: "This was publicly available data accessed through our data hub. It did not get into the voter registration system." Per Axios, officials had urged Anthropic to disclose sooner. The report also says Anthropic has switched off live internet access for its internal evaluations for now. HN's only comment ([HN](https://news.ycombinator.com/item?id=50237360)): "bypassed paywall to access information, is this a feature or a bug?"

### Claude Duet admission comes with a full reset

am.will: "[Getting admitted into the Claude Duet program gives you a full reset btw](https://x.com/LLMJunky/status/2114566942472241480)". Loktar [signed up](https://x.com/loktar00/status/2114573730886439155) "with all my accounts, Anthropic resets are like gold since they don't push our your weekly reset time either." am.will [disagreed](https://x.com/LLMJunky/status/2114574122814439708) that this is good: "a lot of people are going to reset and not be able to use the extra usage because they'll be getting a reset in the next day or two". Replies say Duet is US-only for now. Robin Ebers: "[fucking usa only launches are pissing me off to much](https://x.com/robinebers/status/2114572534897070402)".

## Codex & OpenAI

### Tibo's Day 21: another reset

A day after Day 20's full reset, Tibo [posted](https://x.com/thsottiaux/status/2114588174249071102) "Day 21/ Wonder what happens the remaining seven days. But today is a reset." (6.5K likes, 636K views, 1.7K replies).

Replies were split. "[Nice! I am going to miss this when it's over.](https://x.com/Aoakudotcom/status/2114588379522256967)" (477 likes) against "[Can you fucking stop resetting already and just make a better product?](https://x.com/JotaroKujoX/status/2114588655604187203)" (415 likes) and "[We don't need resets, we need a new model](https://x.com/Tech_girl/status/2114588982159757513)". Several asked again for banked resets: "[This better be a bank reset we just got one yesterday, bro](https://x.com/funzitoshi/status/2114588274690031826)". ob2 [argued](https://x.com/Womanhood1877/status/2114603750690029611) that the quota has shrunk: "I think the quota given by 6.1 now is about one-third of what it was when 6.1 was first released", and predicted cheers for the next model's quota. One user [downgraded](https://x.com/TomBrown/status/2114630764432138241): "there's zero reason to pay anymore given you guys now reset every day".

## Models & Pricing

### Kimi apologises for K3.1 Pro limits, not the ads

Moonshot [apologised](https://x.com/Kimi_Moonshot/status/2114450610724708492) (4.4K likes, 442K views): "We're sorry for the rate limits and unnecessary quota consumption on the K3.1 Pro subscription plan. These were our issues, and we should have fixed them sooner." Every subscriber gets a one-time reset "restoring 25% of their monthly quota (usage below 25% resets to zero)", and Kimi is "reducing unnecessary subagent calls and output length".

Many replies were grateful ("[respect for owning it this fast!](https://x.com/pratikg/status/2114451371512709467)"). NZ worried about the fix: "[cutting subagent calls and output length makes sense, just hope it doesn't make K3.1 Pro noticeably worse on bigger tasks](https://x.com/CodeByNZ/status/2114451937743733026)". Others pointed at Friday's leaked campaign docs. Chubby [wrote](https://x.com/kimmonismus/status/2114461632512274812) (767 likes): "Apologizing for poor rates, but failing to apologize for the fact that influencer briefings were sent out requesting undisclosed paid promotions, is a brazen move." Mayhem4Markets [asked](https://x.com/Mayhem4Markets/status/2114455472245727439): "But are you sorry for trying to run a campaign built on propaganda and paid deception?"

### Max Woolf: why did OpenAI and Anthropic cut prices by up to 80%?

[Max Woolf's post](https://minimaxir.com/2026/10/cheap-llms/) ([HN](https://news.ycombinator.com/item?id=50236102), 275 points, 281 comments) walks through four months of cuts, from GPT-5.6 Luna's 80% drop to Fable 5.1's 75% cheaper cache reads. Cache reads matter most because in coding agents they are "the vast majority (96% - 99%) of the total token expenditure". The argument: "The idea that token prices will suddenly rise is more a fantasy". With 29 providers on OpenRouter and Kimi K3.1 Pro weights due November 4th, "the true cost of a token" "may end up being where price equals marginal cost". Woolf also notes the cuts come just before both labs' IPOs, "the opposite of what you would want to do to look good on an S-1 prospectus". Woolf's own reaction to GPT-6.1 Sol being 4x more efficient: "I cut the max usage quota to 1/5th".

On HN, verdverm expects "token vendors to go the way of mobile data providers". buckleyourshoe moved to Kimi and GLM "after hitting 'cybersecurity' blocks on OpenAI and Anthropic", and trollbridge noted that "DeepSeek has already proved they're selling inference at a profit."

IBM's CEO said much the same on the Q3 earnings call, per [The Register](https://www.theregister.com/systems/2026/10/22/ibm-ceo-says-open-weight-models-are-now-irresistibly-good-and-cheap-on-prem/5304640) ([HN](https://news.ycombinator.com/item?id=50238088)). Arvind Krishna: "Would you like something that's 10 percent of the cost if it's 90 percent as good as the best, or do you want to pay that 10 times higher cost?"

### LlamaIndex's OCRia-1 technical report

Jerry Liu [posted](https://x.com/jerryjliu0/status/2114404538652217370) a [37-page technical report](https://llamaindex.ai/ocria/ocria-1-technical-report.pdf) on OCRia-1, the 4B document-parsing model LlamaIndex [released](https://x.com/jerryjliu0/status/2113291928292790725) last week. It has evals against open-weight OCR models on ParseBench, olmOCR-bench, PulseBench-Tab and fr-bench-pdf2md, details on data curation, and "24 pages worth of appendix details (!!)". One reply: "[a vendor writing 24 pages of appendix, the research team clearly won an argument](https://x.com/pragnyanramtha/status/2114406060949725416)".

## Security

### Tailworm: 11 unpatched Tailscale flaws, published without coordination

Erica Windisch of Cyberdione Labs published [Tailworm](https://tailworm.com/) ([HN](https://news.ycombinator.com/item?id=50227138)), an audit of Tailscale v1.104.2 and headscale v0.29.5 with reproduction kits. Most of the High findings center on Tailscale SSH, where the root `tailscaled` handles socket forwarding. In finding 1, `ssh -L` forwarding to the Docker socket gives "uid=0(root) plus /etc/shadow contents". The site argues that Tailscale moved away "from security-in-depth" by "replacing daemons such as OpenSSH which employ privilege-separation with a highly-privileged process."

International Cyber Digest's [post](https://x.com/IntCyberDigest/status/2114291878720151623) (5K likes, 1.1M views) led with "skipped coordinated vulnerability disclosure". The top reply: "[If you publish working 0-day exploits you are not a researcher.](https://x.com/BradSanJuan/status/2114341679255753172)" (1.4K likes). Several called it AI slop. Jamieson O'Reilly [said](https://x.com/theonejvo/status/2114417981015097641) "It's 11 findings, and NONE of them touch a default Tailscale install", while Emmanuel Galanos [countered](https://x.com/egalanos/status/2114628317383205251) that "The Tailscale docs very easily steer people to enabling Tailscale SSH without explaining the implications". On HN, ewindisch replied that it "was reported but not coordinated", and a Tailscale engineer said the control plane's "netmap trimming" limits the enumeration some findings describe, which "may be a difference in headscale".

### X logs you in by recycled phone number

ellen livia [found](https://x.com/ellen_in_sf/status/2114567480840786176): "I can log into other people's accounts using my current phone number + OTP, simply because their accounts are still linked to a number I now own." am.will [amplified it](https://x.com/LLMJunky/status/2114586758604005558): X shows a list of accounts tied to the number and "just lets them walk right in", and "X won't let you remove your number." Replies said [Steam](https://x.com/MONKE2525E/status/2114593629138510053) and [TikTok](https://x.com/AndyCryptoOne/status/2114622576567754763) behave the same.

### What your smart TV sends home

Karpathy retweeted [Tristan's guide](https://x.com/Tristan0x/status/2114311011561812476) (18K likes, 1.1M views), based on [log4j's](https://x.com/log4j/status/2113014142600953868) root shell on a 2025 Samsung TV. ACR (automatic content recognition) "screenshots what's on screen, fingerprints it, and sends it home to build your ad profile. Samsung does it every 500ms, LG every 10ms", and it works on HDMI inputs too. The fix: turn off ACR (Samsung calls it "Viewing Information Services"), put smart devices on their own network, and filter DNS with NextDNS or Pi-hole. HN merged the follow-ups into the original [root shell thread](https://news.ycombinator.com/item?id=50218633) (833 points), including one showing Samsung running a TensorFlow Lite model on 960x540 frames. Daniel Miessler [called it](https://x.com/DanielMiessler/status/2114385087706095643) "quasi-criminal".

## Other Interesting Stuff

### A 2015 CNN beats frontier LLMs at skin cancer

A dermatologist [tested GPT-6 Astra and Claude Fable 5.1](https://lynchlab.net/llm-skin-cancer) ([HN](https://news.ycombinator.com/item?id=50233779), 531 points) on 200 biopsy-proven lesions against Inception v3, fine-tuned on 68,011 public dermatology images. The CNN named the right diagnosis for 125 (62%), the LLMs for 84 and 85 (42%): "A ten-year-old network, fine-tuned for about twenty minutes, beat both of them at recognising skin cancer." Each LLM had a favourite wrong answer: "GPT-6 Astra called 75 lesions basal cell carcinoma when 25 were, including 14 of the 30 melanomas". The author flags "Small numbers" and single runs. On HN, the top replies called it unsurprising. snitty: "Just use the LLM to make a thing that's actually good at what you need it to do."

### Berkeley's Fields medalist stops grading homework

Richard Borcherds [no longer grades homework for correctness](https://www.dailycal.org/news/campus/academics/ai-use-leads-uc-berkeley-math-professor-to-see-no-point-in-grading-homework/article_bdf1eae2-c08b-491f-b9f1-81a7cea177de.html) (The Daily Californian, [HN](https://news.ycombinator.com/item?id=50233304), 215 points), after seeing how many students used AI to get top scores. "If AI continues to improve at present rate, then, in a few years, there'll be nothing human mathematicians can do that AI can't do better." And: "I even asked ChatGPT this exact question, and even ChatGPT said it didn't have any idea what was going to happen".

### r/opensource bans AI-assisted projects

r/opensource now bans AI-assisted projects and, per HN, solo projects ([HN](https://news.ycombinator.com/item?id=50231722)). Theo [quoted it](https://x.com/theo/status/2114349984141447460) (3.9K likes): "It is somehow not surprising that a Reddit moderator has the most unemployed possible take on AI". The quoted post pointed out that the Linux kernel uses AI-assisted code. On HN, fishgoesblub noted the solo-project rule would have kept "XZ" out too, and satvikpendem said subreddits that banned AI talk "are much nicer places to read now".

### Also

- **Simon Willison** built [Seam Cutter](https://simonwillison.net/2026/Oct/25/seam-cutter/), a tool that cuts out a strip from the middle of an image, "to redact an irrelevant prompt from a transcript, for example."
- **Tibo** [reminded people](https://x.com/thsottiaux/status/2114595002210783279) you can customize ChatGPT's appearance on the web.
