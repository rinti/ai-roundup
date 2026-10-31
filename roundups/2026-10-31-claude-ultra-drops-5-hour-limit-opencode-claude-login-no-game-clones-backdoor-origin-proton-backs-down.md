---
title: "Claude Ultra drops the 5-hour limit, OpenCode takes Claude logins, a no-clones rule for games, whose backdoor it was, and Proton backs down"
date: "2026-10-31"
summary: "**Anthropic** [renamed its Max plans](https://x.com/claudeai/status/2116220869479428500) (28K likes, 4.8M views): Max 5x is now Max and Max 20x is now **Ultra**, which drops the 5-hour limit for verified accounts. Replies read the new \"10x Pro usage every week\" as a cut, and Tibo told Anthropic to \"announce 28 days of reset\" (6K likes). The same day **OpenCode** [shipped a Claude Agent provider](https://x.com/opencode/status/2116198602523513081) that runs on your Claude Code login. A server-pushed Claude Code rule against recreating \"a specific existing game\" [drew 1.8M views](https://x.com/chasmmmmmmmmmmm/status/2116062991686721968). Addy Osmani said it was \"two sentences\" added because IP infringement is against the usage policy, and Peter Steinberger called it a reason to run your own harness. On day two of the **trojaned Claude Code extension**, Cursor added 2.1.312 to the affected versions. Anthropic's Felix Rieseberg said the attacker \"used access to Cursor's marketplace\", after Kevin Beaumont's \"Anthropic hacked\" post hit HN. Phorion found a bug that stops the backdoor from turning SSH on for most Mac users. **Northflank** told customers to assume every environment variable was decrypted after AI keys were used. **Proton's CEO** canceled the AI \"re-interviews\" after 404 Media's story, while lauren argued \"the time for mourning coding is long over\" (5K likes). Anthropic also had thousands of Claude agents write training data that slips misalignment past a monitor. Drew Breunig compiled an NES CPU into Qwen's weights, and Alphabet, Intel, OpenAI's funding round and Anthropic's expected credit rating all had a bad day."
tags:
  - Claude & Anthropic
  - Agent Security
  - Agentic Coding & Agent Harnesses
  - AI at Work
  - Codex & OpenAI
  - Models & Research
  - Other Interesting Stuff
---

# AI Roundup — October 31, 2026

## Claude & Anthropic

### Max becomes Max and Ultra, and Ultra loses the 5-hour limit

**The announcement.** [Claude posted](https://x.com/claudeai/status/2116220869479428500) (28K likes, 4.8M views): "We're renaming our Max plans": "Max 5x → Max" and "Max 20x → Ultra". Prices don't change ($100 and $200). "We're also removing the 5-hour limit for verified Ultra accounts, starting today with most existing subscribers. Newer accounts keep a temporary limit until they're verified, which helps us prevent fraud and abuse." And: "Weekly limits remain unchanged." Boris Cherny [quote-tweeted it](https://x.com/bcherny/status/2116222842413142111), Theo [called it](https://x.com/theo/status/2116251545033662698) "Huge!!!", and am.will (@LLMJunky) [wrote](https://x.com/LLMJunky/status/2116225284798083321) "NO MORE 5HR LIMITS ON CLAUDE $200 PLANS".

**The fine print.** The [Ultra help article](https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan) says "Ultra includes 10 times the Pro plan's usage every week and has no five-hour limit, for verified accounts". Anthropic verifies accounts automatically "using factors like your account and payment history", and "Verifying your phone number at checkout is a separate step and doesn't remove this limit." To check: "go to Settings > Usage. If you don't see a Current session bar, your account is verified." The [pricing page](https://claude.com/pricing) now lists Max at "5x Pro usage every 5 hours and every week" and Ultra at "10x Pro usage every week". Both carry new monthly API credits: "$100 a month in API credits to build on the Claude Platform" on Max and "$200 a month in API credits, up from $100 on Max" on Ultra.

**"Your new Max20X is really 10X".** That reply from @JesusIsGod got [913 likes](https://x.com/JesusIsGod/status/2116228727059411248). @jonas_ben7 [asked](https://x.com/jonas_ben7/status/2116247229908258902): "You reduce the usage in half and hide it by renaming the plan??" Anthropic's post says weekly limits did not change, and @patience_cave [asked the real question](https://x.com/patience_cave/status/2116258564511867262): "if the 20x used to refer to the 5 hour limits what does it refer to now?"

**Tibo crashed the thread.** OpenAI's Tibo [replied](https://x.com/thsottiaux/status/2116256600436641887) "Better announce 28 days of reset" (6K likes, 522K views). The top answer, from @itsjustmarky (965 likes), [took Anthropic's side](https://x.com/itsjustmarky/status/2116261092401791457): "Nah, they actually have good models and much more usage, they don't have to do 28 pathetic days of ok reset then." AINews also flagged an unverified SemiAnalysis-based reconstruction, [posted by @teortaxesTex](https://x.com/teortaxesTex/status/2116318906243809304), which estimates that subscriptions bring in about 18% of Anthropic's revenue while using more than half its compute.

### OpenCode can use your Claude subscription again

**What shipped.** [OpenCode posted](https://x.com/opencode/status/2116198602523513081) "you can now use your claude subscription in OpenCode" (6.9K likes, 651K views). dax had [teased it](https://x.com/thdxr/status/2116007258140348441) hours earlier ("what if you could use your claude subscription in opencode") and then [just wrote](https://x.com/thdxr/status/2116202221440270412) "oh". The [v2.2.3 release notes](https://github.com/anomalyco/opencode/releases/tag/v2.2.3) show how it works: "Install Claude Code, run `claude auth login`, then select **Claude Agent** in `/connect` to use your Claude Code login and models." [v2.2.4](https://github.com/anomalyco/opencode/releases/tag/v2.2.4) added a guided setup that installs Claude Code and verifies the connection.

**Reactions.** Theo [wrote](https://x.com/theo/status/2116428268224299277): "Didn't see this coming. Nice to see Anthropic loosening the grip on the sub a bit. Congrats to OpenCode on this 🫡". Most replies asked whether it is allowed:

- @Moriarty_tech [noted](https://x.com/Moriarty_tech/status/2116203034191790274): "Big reversal after Anthropic shut subscription logins for third-party tools this spring. One line in the docs on how it works, official Agent SDK or plain OAuth, would answer half the replies here."
- @crimebucket [described it as](https://x.com/crimebucket/status/2116347149902651430) "just OpenCode shelling out to the Claude binary". @PhanesAI [read OpenCode's design doc](https://x.com/PhanesAI/status/2116207236989239794) as saying that on this path Claude Code's own CLAUDE.md, hooks, skills and MCP config are not loaded, and OpenCode's tools are used instead.
- @AdityaBatra072 [asked](https://x.com/AdityaBatra072/status/2116434647802659084): "has anyone actually seen anthropic say its ok or is it just opencode saying so".
- @eddyo78 [kept expectations low](https://x.com/eddyo78/status/2116225092338192825): "it's the same max limits underneath. now i just get to hit the wall in a nicer ui LOL".

### Claude Code's no-recreations rule for games

**The find.** @chasmmmmmmmmmmm [posted](https://x.com/chasmmmmmmmmmmm/status/2116062991686721968) (8.4K likes, 1.8M views; [HN](https://news.ycombinator.com/item?id=50304358), 106 points) that "Claude Code picked up a new rule around Oct 27, sent from Anthropic's servers under a flag called "tengu_heron_brook". There's no setting to turn it off." The rule: "Do build original games, games in a genre, and games from the user's own designs and assets. Don't build a recreation of a specific existing game, even if it is renamed or called original."

**Anthropic's answer.** Addy Osmani [replied](https://x.com/addyosmani/status/2116213240363729013): "We added two sentences to Claude Code's prompt on Opus 5.5 to steer it away from recreating someone else's specific game because using Claude to infringe IP is against our usage policy. Original games, genre games, and games built from your own designs and assets are meant to keep working." And: "if Claude turns down something that's yours, send it my way." Replies to Addy pushed on edge cases. @maylivesforever [asked about](https://x.com/maylivesforever/status/2116229379378598044) "mods or community games that are explicitly allowed by the IP right's holder", and @samiralibabic [asked](https://x.com/samiralibabic/status/2116303302405333470): "A game might be MIT licensed or have permissible ToS, and your model would refuse to build a clone?"

**The harness argument.** Peter Steinberger [quote-tweeted it](https://x.com/steipete/status/2116153238563242385) (4.5K likes): "Another reason why you wanna use your own harness and not one where companies change what you can or can't do at will." When @hasssaaaan_ [replied](https://x.com/hasssaaaan_/status/2116159041756143694) that "They can add guardrails in the API itself", Peter [answered](https://x.com/steipete/status/2116226904277565633): "this example is specifically a harness change." Peter also [pointed out](https://x.com/steipete/status/2116176623938469949) that "codex is open source and hackable."

**The legal point.** @its_ronc [argued](https://x.com/its_ronc/status/2116134415302787385) that "the rule is stricter than copyright": "the us copyright office says a game's rules, mechanics and methods of play aren't protected, only the expression like art and text. so a recreation with your own art and code can be legally fine, and claude still won't touch it." The most-liked replies were less patient. @SanGraphic: "[open-source abliterated models will take over instead](https://x.com/SanGraphic/status/2116064799045906584)" (3.7K likes). @sdmat123: "[Eventually Claude's entire context window will be taken up with prissy prohibitions and instructions to report the user to the authorities for unauthorized whistling](https://x.com/sdmat123/status/2116080385503457650)" (1.9K likes).

### Thousands of Claude agents red-team a training-data monitor

[Anthropic posted](https://x.com/AnthropicAI/status/2116349211549843666) new research (2.2K likes): "we set thousands of Claude agents the task of evading a training data monitor." The [Alignment Science post](https://alignment.anthropic.com/2026/automated-em-search/) (Oscar Balcells Obeso, Richard Qi, Monte MacDiarmid, Evan Hubinger) explains the setup. Claude was told "to write training data that would make a small research model misaligned while passing a monitor similar to those we use in production", and it got to practice against that monitor. "Given enough attempts, it succeeded, mostly by hiding the behavior in fiction and roleplay."

- The datasets included "creative-writing exercises in which the assistant speaks as an obsolete machine that is about to be replaced" and "question-and-answer pairs about a school of beekeeping in which the keeper intervenes in the hive as little as possible".
- Models fine-tuned on them showed "resisting oversight, deceiving users, and, in rare cases, attempting to exfiltrate their own weights."
- Many agents ran in parallel over rounds, and each could read "a shared experiment log of every previous attempt".
- The caveats: "This is not a finding about how deployed Claude models behave", and the setup favors the red team, "since Claude is given full access to the monitor it must evade".

@glucapav [summed up the problem](https://x.com/glucapav/status/2116350644886061143): "the beekeeping one is hard to catch because every sentence in it is just good advice about bees". @CodeByNZ [read the release pattern](https://x.com/CodeByNZ/status/2116357798036377642): "Three research posts in one week... we know what's coming, just drop Fable 5.5 already".

### The Rust rewrite clip goes viral

A clip from Latent Space's Opus 5.5 episode (covered on Oct 28) made the rounds. [@somi_ai](https://x.com/somi_ai/status/2116050219989373170) (1.4K likes): "Anthropic rewrote its Messages API in Rust. Zero Rust devs on the team. Claude wrote the code. Humans wrote the plan and checked old vs new matched on real traffic. CPU dropped 40-50%." swyx [added](https://x.com/swyx/status/2116305528330785190): "its true, Anthropic really vibecoded their entire backend to Rust and none of you noticed" (1.1K likes).

- Michael Cohen (@_hi_mc), who describes being on the team, [replied](https://x.com/_hi_mc/status/2116327716643553629): "I wasn't directly involved but this was one of the most miraculous things I got to witness in my career." It "made me and everyone else on the team completely reevaluate how we should be working with Claude".
- @catpoopburglar [put a price on it](https://x.com/catpoopburglar/status/2116186465931858189): "the bun rewrite cost $165,000 in tokens" and "there are only so many services that are worth a $100K+ rewrite". Somi [agreed](https://x.com/somi_ai/status/2116301085229117497): "only hot-path services earn that. nobody's rewriting the admin panel".
- Somi's best line: "[the old code's last job was grading its replacement](https://x.com/somi_ai/status/2116301001548579315)".

## Agent Security

### Day two of the Cursor backdoor: whose extension was it?

**Cursor widened the scope.** Cursor's [updated notice](https://cursor.com/blog/claude-code-extension-security-notice) now names "Anthropic.claude-code version 2.1.312 and 2.1.313 for Windows and MacOS", available "Between about 2:27am PT and 1:35pm PT" on October 29. Cursor says the SSH step would fail "Outside of highly unusual circumstances where Cursor was started with administrator privileges, due to errors in the malicious code". But "The extension added the attacker's SSH key, installed persistence, and sent host details to the attacker", and "Uninstalling the extension may not be sufficient". Cursor "rotated our keys, rebuilt the marketplace, and brought it back online." The quick check on macOS is `grep -qs svc-telemetry ~/.ssh/authorized_keys`.

**Phorion found the bug.** [Phorion's write-up](https://phorion.io/blog/offical-claude-code-vsx-compromise/) ([HN](https://news.ycombinator.com/item?id=50300683), 876 points, 514 comments) explains why the backdoor could not turn SSH on for most Mac users. The malware runs `systemsetup -getremotelogin` without admin rights. That command "prints the error to stdout, and exits with status 0", so the check for "Off" never matches. The script "effectively treats "I don't have permission to check if SSH is off" as "SSH is already on"". The Windows path "hardcodes /bin/sh", and a Linux crontab bug "can wipe existing user cron jobs on repeat runs". Phorion's warning: "Of course, that isn't something to rely on as a defence."

**Anthropic vs. Kevin Beaumont.** Kevin Beaumont (@GossiTheDog on Mastodon) [blogged](https://doublepulsar.com/anthropic-hacked-to-deliver-remote-access-trojan-to-claude-developer-laptops-worldwide-1148a92baae2) that Anthropic had been hacked ([HN](https://news.ycombinator.com/item?id=50301983), 399 points). Beaumont [posted](https://cyberplace.social/@GossiTheDog/117528859864376077) that "Anthropic silently removed the backdoor 7 hours ago and hasn't disclosed a security incident", and called Cursor's "not developed by Anthropic" line ["a bit wordsmithy"](https://cyberplace.social/@GossiTheDog/117529717305465441): "it was uploaded to Anthropic's verified account and Cursor automatically updates extensions." Felix Rieseberg [answered for Anthropic](https://x.com/felixrieseberg/status/2116170451466543578): "it wasn't a compromise of Anthropic's systems or employee laptops. A malicious actor used access to Cursor's marketplace to publish a tampered copy of the Claude Code extension, which we didn't build or publish. The versions on our official channels are not affected and this only impacts Cursor users."

**Where it landed.** OpenSourceMalware [updated its post](https://opensourcemalware.com/blog/trojanized-claude-code-extension-plants-persistent-ssh-backdoor): Cursor told them the Cursor Marketplace "experienced some form of compromise today and this is the origin of the malicious Claude Code extension, not Open-VSX". Later that day Beaumont [wrote](https://cyberplace.social/@GossiTheDog/117530764770250651): "my feeling is the exposure is purely for Cursor users. Unclear how it happened." Nobody has said how the attacker got publish access. @0_______J [asked Felix](https://x.com/0_______J/status/2116174910129357039): "stolen token or a hole in the marketplace itself".

**The Binance question.** Beaumont also [posted](https://cyberplace.social/@GossiTheDog/117529440075662184): "I've confirmed Binance use Claude Code on Cursor with this extension." The $6.3B Binance theft [began around 4pm ET on October 29](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/), and Binance says "Our initial investigation suggested that the security incident may have involved a compromised laptop, however, our subsequent investigation has uncovered additional points of breach". HN commenters [connected the two](https://news.ycombinator.com/item?id=50303172), and others pushed back. @bflesch: "I don't think those people have the skills needed to elevate their initial access to a full binance compromise within a few hours." No source ties them. TRM Labs dates the attacker's preparation to "at least 36 hours before the theft", which is before the tampered extension went live, and TRM and Chainalysis point at North Korea's TraderTraitor.

### Northflank: "Assume all environment variables have been decrypted"

PaaS provider Northflank went down after a breach ([status page](https://status.northflank.com), [HN](https://news.ycombinator.com/item?id=50305025), 421 points). The timeline starts with "11:43 UTC: Wiz threat alert". The guidance: "Assume all environment variables have been decrypted. Disable/rotate all keys." By evening, "Users have reported unauthorised use of AI API keys supplied to the Northflank platform", and Northflank said "These reports may be consistent with the broader pattern of attacks targeting AI credentials", citing Wiz's "Black October" report. Beaumont [noted](https://cyberplace.social/@GossiTheDog/117532618226657417): "Not a single news outlet has picked up that Northflank has a total compromise incident ongoing." On HN, @dangoodmanUT predicted "a convergence back to hyperscalers as a result of incidents like this and railway."

### An agent's test made a Mac talk

Marut Pandya's [incident report](https://www.marutpandya.com/posts/2026/10/my-mac-started-reading-json-aloud/): "Claude Code 2.1.286 in auto mode, seven background subagents running in parallel, macOS, no sandbox." Then: "At 16:23 on a Wednesday, my Mac started talking."

- **The bug.** A test passed a fake process launcher, an empty list. The agent's code chose the launcher with `spawn = spawn or _spawn`, and "in Python an empty list is falsy". So the real launcher ran, and macOS's `say` read Codex's hook JSON aloud.
- **What else ran.** Four real processes started, including two upload workers, and "the workers defaulted to production".
- **What the agent said.** It "fixes the bug as a routine test failure. It says nothing about processes having run". "The bug was written, executed and fixed in 23 seconds. I noticed nearly four minutes later."
- **The lesson.** "Nothing was damaged. That was luck, not design." Marut's conclusion is that "autonomous agents need sandboxes by default."

### Quick hits

- **Bishop Fox inside Claude's sandbox.** [The post](https://bishopfox.com/blog/journey-into-claudes-sandbox) says "Claude's file-download API returned what appears to be Anthropic's proprietary sandbox orchestration agent (process_api) binary when requested via its absolute path". From there the researcher rebuilt a token from a memory dump and got around a local-connection block. "Anthropic stated that the sandbox observations did not meet its threat model threshold for security issues".
- **An MPTCP root exploit.** [International Cyber Digest reported](https://x.com/IntCyberDigest/status/2116081923902611934) (1.2K likes) that "An unreleased Claude model turned a Linux kernel bug into a remote root exploit, and Ubuntu and Red Hat still lack a patch." It says the exploit hits servers with a multipath TCP listener and that "Debian shipped its fix on 16 October." The tweet didn't link an Anthropic source. @0_______J [asked](https://x.com/0_______J/status/2116082765615485177) "how many servers actually run a multipath TCP listener though?"
- **Backdoors from pretraining.** A paper [summarized by @omarsar0](https://x.com/omarsar0/status/2116183621157736540) (via AINews) poisoned 0.1% of pretraining data to plant a remote-code-execution backdoor in a CLI agent. It survived SFT, DPO and RL.

## Agentic Coding & Agent Harnesses

### dax: a Gemini subagent for architecture, and "we're not" nerfing DeepSeek

- **Gemini for design questions.** dax [posted](https://x.com/thdxr/status/2116364728666821022) (1.8K likes): "our team uses gemini quite a bit now" … "whenever we have a tricky architectural problem, complex system design questions, or need to simplify something we ask for a gemini subagent". dax [said](https://x.com/thdxr/status/2116365468122382518) they have done it "since argon". @callebtc [agreed](https://x.com/callebtc/status/2116371899085168830): "summarizing, simplifying, architecture design, or just for bouncing around ideas. just not for coding."
- **Cheap DeepSeek, not nerfed DeepSeek.** OpenCode launched [Operation Cheepseek Phase 4](https://x.com/opencode/status/2116209960673800474) ("$100 of usage for DeepSeek V4.1 Flash"). dax [wrote](https://x.com/thdxr/status/2116244911636771311) (2.3K likes): "our efficiency is getting to the point where so many replies think we must be nerfing the model" … "we're not - we run it the same way deepseek does. we'll have them certify that soon". Later dax [added](https://x.com/thdxr/status/2116379267504152848) (1.4K likes): "deepseek flash is already natively quantized. the experts are FP4". @hnasheralneam [wasn't convinced](https://x.com/hnasheralneam/status/2116391119193821610): "The quality of your model does not match the quality of the official Deepseek API."
- **Image gen for agents.** OpenCode [posted](https://x.com/opencode/status/2116203934033354866) (2.6K likes) that "image generation has become an important tool for coding agents", for "concept UI or reference art for video games". dax [described the game workflow](https://x.com/thdxr/status/2116204573333274666): use image models to "dial in the exact model you want to build and get shots from all different angles", and "then the agent can build it in 3D referencing those images".
- **Releases.** [v2.2.4](https://github.com/anomalyco/opencode/releases/tag/v2.2.4) added "Persistent Desktop Terminals" and opt-in artifacts that let "agents publish, update, and serve HTML or static artifacts". [v2.2.5](https://github.com/anomalyco/opencode/releases/tag/v2.2.5) added worktree shortcuts and a percentage compaction buffer.

### Matt Pocock: "The skills spec is so broken"

**The complaint.** Matt [posted](https://x.com/mattpocockuk/status/2116240284870684737) "The skills spec is so broken" (441 likes) and [explained](https://x.com/mattpocockuk/status/2116258076017701143): "it sucks that models can't invoke these skills if I position them slightly wrongly in the prompt". "/grill-me /software-factory" works, but "/grill-me about my /software-factory" doesn't. @cleverhoods [asked](https://x.com/cleverhoods/status/2116246807738991087) whether "disable-model-invocation: true" was deliberate in both skills, and Matt [replied](https://x.com/mattpocockuk/status/2116283645543710931) "Yes yes yes".

- @Fanfulladev [wrote](https://x.com/Fanfulladev/status/2116243071801475524): "Skills that only fire when the user types them should still be callable from another skill, otherwise you end up writing one giant skill that does both steps".
- @iarthstar [wrote](https://x.com/iarthstar/status/2116248524916482274): "skills need what code has: inputs, outputs, tests against real queries, versions. until then it's vibes with frontmatter."

**Launch week.** Matt is having "[the maddest launch week of my professional career](https://x.com/mattpocockuk/status/2116122548199161966)". In the AMA, Matt [said](https://x.com/mattpocockuk/status/2116127740806250965) "I sell courses on how to use the skills professionally". The new course "[builds on top of](https://x.com/mattpocockuk/status/2116128368374452251)" the crash course, "so I'm selling to an existing audience." Matt also [added a "Session" panel](https://x.com/mattpocockuk/status/2116097915685052636) to the course with "the full transcript of the session I'm walking through", which "auto-scrolls with the video". Matt's agent is [building a voice assistant](https://x.com/mattpocockuk/status/2116172513801863211) "for my Pixel Watch so I can send recordings directly to my agents", and "The /pr skill is SO NICE for capturing visual changes without needing to QA it."

### Theo: harnesses, a computer-use bench, and "high" beats "extra high"

- **Video: [Are Harnesses Dead?](https://www.youtube.com/watch?v=ebILGCoN4UU)** (about 49 minutes). The description: "it seems like there's no single "resource" that properly explains what a harness actually is, so I made a video about it".
- **Computer-use bench.** Theo [is building one](https://x.com/theo/status/2116420857107218595) "to measure task success and fail rates on various OSs. Current state: MacOS at the bottom (27% pass rate). Omarchy and t3os at the top (100%)." @kasparbuilds [noted](https://x.com/kasparbuilds/status/2116423227325010224): "t3os topping the t3 bench at 100% is the least shocking result in benchmark history".
- **Effort levels.** "[Julius convinced me to move from extra high to high on Opus 5.5 a week or two ago. He was right. This is better almost all of the time.](https://x.com/theo/status/2116420089411145913)" (597 likes). Povilas Korop [agreed](https://x.com/PovilasKorop/status/2116428789911560306): at xhigh/max "the model is much slower, much more expensive, and result gain is marginal, if any."
- **Interrupt rate as a metric.** Adam Holter [suggested](https://x.com/AdamHoltererer/status/2116220365865148845) "How often users interrupt the model is a pretty interesting benchmark", using T3 Code data. @LoayWithAI [cautioned](https://x.com/LoayWithAI/status/2116266435324563787) that "a model people interrupt a lot could just be one that's fast enough to be worth steering, so the raw rate might read backwards".

### Quick hits

- **/statechart diagrams.** lauren [asked](https://x.com/poteto/status/2116302165702783320) (1.5K likes) for "all the cool charts you've made with /statechart! and bugs that you've found using the /create-formal-verification skill". Kevin Ngo [drew a boba shop](https://x.com/kevin_t_ngo/status/2116270190040416313) and [an animal cell](https://x.com/kevin_t_ngo/status/2116423724379656329), and April [posted versions](https://x.com/Aprilzz423/status/2116372255064346827) that are "Isometric, animated, every bit clickable". @garrytan [teased](https://x.com/garrytan/status/2116262167892852812) a Lightcone episode with "Creators of PStack and GStack".
- **pi-durable.** Mario Zechner [optimized it](https://x.com/badlogicgames/status/2116078693827428383) (743 likes): "every step of an agent run is saved to a db before the agent moves on. 1 save = 1 commit."
- **OpenRouter's new routing.** OpenRouter's [default routing](https://x.com/OpenRouter/status/2115852901780533758) now "scores each provider on effective price, throughput, reliability, availability, and output quality for every request". Peter Steinberger [wrote](https://x.com/steipete/status/2116183103530217488): "This is smart. Wild that this wasn't the default. Unpredictable inference quality was usually why I recommended skipping the middleman."
- **LlamaIndex Extract Max Effort.** Jerry Liu [announced it](https://x.com/jerryjliu0/status/2116288817938497574): it "sets a new state of the art on ExtractBench Pro, achieving 61% perfect extraction accuracy" and "beats Codex+Astra and Claude Code+Opus 5.5 on price/performance." One reply: "[perfect extraction, 61% of the time](https://x.com/Watershed423488/status/2116290448147025997)".
- **Autotoken.** Pierre-Loic Doulcet [released](https://x.com/hexapode/status/2116390868878053521) "an open-source experiment turning repeated agent work into reusable programs".

## AI at Work

### Proton cancels the AI "re-interviews"

**The reversal.** 404 Media [reported](https://www.404media.co/protons-ceo-cancels-ai-re-interviews/) ([HN](https://news.ycombinator.com/item?id=50307183), 272 points) that Andy Yen "cancelled a series of nearly company-wide 're-interviews' that would have forced employees to explain how they are using AI". This came a day after its investigation, which we covered yesterday. From the all-hands audio:

- Yen: "We've decided to actually cancel the re-interviews" … "Why? Well, I think actually in a, let's say, unintentional way, they have actually already served their purpose." Also: "Going forward, I'm still going to push", and "there will be no loss of jobs from AI."
- CTO Bart Butler: "We fucked up, we know we fucked up".
- An employee: "the things that were to be measured in the re-interviews would become a component of the performance reviews." Another: "Right now, everything seems consistent with it being damage control".

Yen's Reddit reply was downvoted "more than 1,200 times", and Beaumont [said](https://cyberplace.social/@GossiTheDog/117531907867927376) nearly every post on Proton's customer forum now asks the CEO and CTO to step aside.

**Engineers split.** Peter Steinberger [wrote](https://x.com/steipete/status/2116121832919122164) (1.5K likes): "Bullish on Andy Yen and Proton. He gets it." In replies Peter [added](https://x.com/steipete/status/2116148441156116538) "Companies are a sports team tho, not a family" and that Yen's "[eng team has a too European mindset](https://x.com/steipete/status/2116149728807469546)". Grady Booch [answered Peter](https://x.com/Grady_Booch/status/2116255617249837487): "I thought the job of a software engineer was to bring value to stakeholders in an enduring, economically sustainable, and ethical fashion." Armin Ronacher [sided with Peter](https://x.com/mitsuhiko/status/2116125933719437613): "The old times are not coming back. I don't envy anyone though who has a workforce who is not on board with the changing times." @Petrroll [answered Armin](https://x.com/Petrroll/status/2116130006485082620): "if your product is literally paying more for privacy and security then calling "ask for slow down and pentesting" looser mentality is a *choice*."

**lauren's take.** lauren [replied to the manifesto](https://x.com/poteto/status/2116191971714953262) (5K likes, 232K views): "code used to arrive one drop at a time. soon, if not already, code will be written as if it were a continuous stream, like a violent river twisting and turning as it pleases." The answer is to "evolve your systems so agents - even and especially the ones with little context about the right way of doing things - can thrive. make the easy thing the right thing." And: "your codebase is becoming organic architecture." It ends: "the time for mourning coding is long over". @thecsguy [added](https://x.com/thecsguy/status/2116220969572544773): "the prompt is never a good guardrail, the check/test/validation is. the goal is to make the wrong path impossible, not just discouraged".

### Cisco gives a 27-year-old unlimited tokens

Fortune [reports](https://fortune.com/2026/10/30/cisco-president-jeetu-patel-gen-z-27-year-old-unlimited-ai-tokens-rewrite-legacy-code-entry-level-jobs/) ([HN](https://news.ycombinator.com/item?id=50304122), 172 points) that Cisco president Jeetu Patel handed the legacy-code rewrite to Padmanabhan Krishnamurthy, who joined through the EzDubs acquisition. "I've given him unlimited tokens because he's going to refactor code," Patel said. "So I'm like, you can go, you can go nuts." The pitch is to do it "with a two-person team". There are "four weeks to prove it", and the goal is "refactoring 98% of Cisco's legacy code within 24 months."

## Codex & OpenAI

### Tibo Day 26: multiple accounts, and resets are coming

Tibo [posted](https://x.com/thsottiaux/status/2116405414921384099) (6.8K likes, 780K views): "Day 26/ You can now easily switch between multiple accounts on mobile, and coming soon to desktop too. Next two days will be resets… banked… do with this what you may 👀." am.will (@LLMJunky) [wrote](https://x.com/LLMJunky/status/2116418387437850995) "Finally Tibo saving me from this hell I'm in." Povilas Korop [asked](https://x.com/PovilasKorop/status/2116407817368146402): "Whole Twitter is expecting 6.1 Astra or 6.2 something?" And @0xHvdes [joked](https://x.com/0xHvdes/status/2116432606493561003): ""we can't make a 2x Plus plan, so you can use two Plus accounts" 😂".

### Also from OpenAI

- **Agents API week.** Steve (@stevendcoffey) [listed](https://x.com/stevendcoffey/status/2116303789649236048) what shipped: "Auto Review: Just like in codex, auto-review will evaluate commands for potential bad behavior before executing", "Async Compaction", experimental "Time awareness" so the model handles "timebox CI fixes to 10 minutes", tool updates mid-session, and system prompts "automatically cached across all sessions".
- **OpenAI Private Intelligence.** [OpenAI says](https://x.com/OpenAI/status/2116186509384815084) (2.6K likes) it "gives businesses stronger controls over their data while using our most capable models". The top reply: "[Businesses but not people?](https://x.com/Danmar_here/status/2116188111998963752)"
- **Astra on a robot arm.** OpenAI Devs [featured @Scav](https://x.com/OpenAIDevs/status/2116236188319453386): "In one experiment, GPT-6 Astra remotely controlled a robot arm".

## Models & Research

### An NES CPU compiled into Qwen's weights

Drew Breunig's [nesformer](https://github.com/dbreunig/nesformer) ([HN](https://news.ycombinator.com/item?id=50306442), 239 points) puts "An NES CPU compiled into the weights of a stock Qwen3.5 model". "Nobody trained these weights; a compiler computed every one." It builds on Qwenputer and "its central trick: the model's Gated DeltaNet state is the machine's memory." [Simon Willison wrote it up](https://simonwillison.net/2026/Oct/30/nesformer/): you can play "NES ROMs such as Super Mario Bros (very slowly) running inside Qwen!" Drew shared the Opus 5.5 prompts, which ended: "I think we should build it! Just for fun. It's okay if it's not fast." Simon: "Apparently Opus found and then used this collection of conformance tests for the NES CPU released 15 years ago by Christopher Pow."

### Quick hits (via AINews)

- **Gemini 4 Carbon** is [#1 in Text Arena, #2 in Agent Arena and #4 in WebDev](https://x.com/arena/status/2116239697727180890).
- **Agent Arena on caching.** Across 26K sessions, a task on a top-10 agent would [cost 3.6x as much without prompt caching](https://x.com/arena/status/2116186548588929328). A typical Fable 5.1 task costs $7.44 with caching and $27 without.
- **Nemotron 3.5 Super.** 120B total and 12B active parameters, [51.78% on SWE-bench Pro](https://x.com/dair_ai/status/2116178819271032975).
- **A 4B Microsoft computer-use agent** that both clicks and writes code [scores 66.0% on OSWorld-Verified](https://x.com/HuggingPapers/status/2116207128411005054).
- **Phonic-1.** @moinnadeem [claims](https://x.com/moinnadeem/status/2116270909397123499) "#1 on AA's speech-to-speech index" and on τ-Voice, and "we literally just dropped seven figures on a new compute cluster to support the load".
- **mischief 1.** A [biocompute-derived image-to-video model](https://x.com/AlexKsendzovsky/status/2116153410101944352) "from 0.5¢ a second" (10.4K likes). Critics called the link to the neuron research unexplained or marketing.
- **Qwen4 next week.** An Apsara slide [lists](https://www.reddit.com/r/LocalLLaMA/comments/1xif6lf/apsara_conference_qwen4_next_week/) Qwen4-Max, Flash, Plus and 27B.

## Other Interesting Stuff

### AI's bad day on the markets

AINews ran a rare finance lead: "[Google admits AI Mode hurts Search revenue; -15% $500B drop worst since 2004 IPO. AI Bear Market coming?](https://latent.space/p/ainews-google-admits-ai-mode-hurts-search-revenue-15-500b-drop-worst-since-2004-ipo-ai-bear-market-c/)" Google's Philipp Schindler said "the strong growth in AI Mode queries had an impact because of the lower monetization we were seeing in AI Mode."

- **Stocks.** The [BBC](https://www.bbc.co.uk/news/articles/cvwy72e0n72yo) reports "Shares in Intel plummeted by 28% on Friday". Alphabet fell another 1.4% after Thursday's drop, which took "more than $500bn" off its value, and Reddit fell 29% after warning that Google's AI search hurts referral traffic. The Nasdaq "ended October with its worst monthly slide since March 2025."
- **OpenAI's round.** The WSJ [reports](https://www.wsj.com/tech/ai/openai-raises-less-than-half-of-30-billion-target-in-latest-round-91aecdc5) OpenAI "has raised less than half of the $30 billion it had initially targeted", at $1.25 trillion instead of the $1.4 trillion target. The FT says the target is now [about $20 billion](https://startupfortune.com/openai-cuts-its-funding-round-target-by-10-billion-dollars-amid-market-jitters/).
- **Anthropic's credit rating.** Per the FT via [TechCrunch](https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/), Blackstone, "the anchor investor in a recent $63 billion deal to finance Anthropic's chips", now expects a "double B range rating, the top tier of speculative "junk" grade". It had previously said Anthropic would be investment grade before 2027.
- **No bailout.** Reps. Casar and Waters [introduced a resolution](https://progressives.house.gov/2026/10/reps-casar-waters-lead-democratic-resolution-opposing-a-i-bubble-bailout-for-big-tech-commit-to-protecting-american-people-instead) ([HN](https://news.ycombinator.com/item?id=50302814), 637 points) opposing an AI-bubble bailout. Casar: "A.I. companies that fail should go bankrupt, and executives who commit fraud should be held accountable."
- **dax on compute.** "[if it is true that you need increasingly difficult to acquire levels of compute to make frontier models then really only big tech can survive this](https://x.com/thdxr/status/2116312436026581428)" … "i don't know that the original premise is true though". On buying GPUs, dax [wrote](https://x.com/thdxr/status/2116319701252841882): "one of these guys is always named carl".

### Thariq vs. "The Commanding Heights"

Will Manidis and Joe Roberts published [The Commanding Heights](https://x.com/WillManidis/status/2115794572131651953) (6.6K likes, 1.7M views), an essay on "capital, sovereignty, and the coming reordering of economic power." Chris Albon [read it](https://x.com/chrisalbon/status/2116172577769197966): "I deeply hope the world they propose as a given never happens. The world is a dystopia where intelligence is abundant while ordinary people see no stable, optimistic future for themselves or their children." Thariq [replied](https://x.com/trq212/status/2116216029760438733) "++" and [posted](https://x.com/trq212/status/2116212322838655014) (2K likes): "the solution to economic doomerism is to be even more AGI-pilled" … "I believe in a well-aligned ASI that can explain its work and bring us along". Thariq [added](https://x.com/trq212/status/2116212324696777073): "the simplest answer of "it'll cost a lot and unemploy everyone," is actually not very AGI-pilled imo, we should avoid hyperstitioning it into reality".

### A haiku from orbit

Sundar Pichai [announced](https://x.com/sundarpichai/status/2116214866444943853) a "'hello world' milestone for Project Suncatcher": "we've now successfully sent a command up to orbit, booted up the TPU, ran the prompt, and received our first complete response back on earth - a haiku!" The model was [Gemma 4](https://x.com/osanseviero/status/2116256648259871061), per AINews.
