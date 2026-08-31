---
title: "Claude's 25% \"Raise\" Is a 17% Cut, ChatGPT Work Decoded & kernel.org Counts the Crawlers"
date: "2026-08-31"
summary: "Anthropic announced it is \"permanently raising standard weekly limits in Claude Code by 25%\", which sounds generous until you notice the current temporary boost is 50%, making September 14 an effective **17% cut** from what users have today. Theo's video on the framing is at 50k views two hours after upload, and it lands the same week a 217-comment GitHub issue found Claude Code appending session URLs to commit messages **by default**. Elsewhere, Simon Willison spent a post untangling what ChatGPT Work actually is (two products, a full headless Chrome, an open-internet sandbox, 223 tools and 44 skills he made it document itself) and asks the lethal-trifecta question OpenAI hasn't answered. Konstantin Ryabitsev published hard numbers on AI crawlers: kernel.org burns more CPU rendering commits for scrapers than serving every legitimate user combined. Plus Zvi's read of the METR/Redwood report, Amp explains orbs, OpenClaw 2.0, and a comeback for continuous diffusion language models."
tags:
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Alignment & Safety
  - Open Source & AI Policy
  - Models & Research
  - Other Interesting Stuff
---

# AI Roundup — August 31, 2026

Anthropic's limit announcement is a small masterclass in framing, Simon Willison reverse-engineered ChatGPT Work so you don't have to, and kernel.org finally put numbers on what AI scrapers cost the people who host the training data.

## Claude Code & Anthropic Updates

### The 25% raise that is a 17% cut

Anthropic announced that starting September 14 it is "permanently raising standard weekly limits in Claude Code by 25% for Pro, Max, Team, and seat-based Enterprise plans" ([Bluesky mirror](https://bsky.app/profile/anthropicbot.bsky.social/post/3muaaxs5nx424), [original tweet](https://x.com/ClaudeDevs/status/2093742321473065266)). The catch is in the next sentence: "until then, the current 50% increase will stay in place." The raise is measured against the old base, not against what users get today. Compared to today it is a 17% reduction, which Anthropic's follow-up tweet admits outright. HN filed the story twice with opposite titles, [one as a raise](https://news.ycombinator.com/item?id=49491282) and [one as a cut](https://news.ycombinator.com/item?id=49491631), which tells you how well the framing worked. One commenter: "what kind of bullshit speak is the original announcement or do they think devs can't [do] elementary school math?"

Theo's take, ["They lied..."](https://www.youtube.com/watch?v=Q7n0PGbMW_U), went up early this morning and was at 50k views within two hours. Same math, more indignation. The announcement's closing line ("Let us know what you build this weekend!") did not help the mood.

### Session URLs in your commit messages, default on

A [Claude Code GitHub issue](https://github.com/anthropics/claude-code/issues/66504) hit 193 points and 217 comments on HN ([thread](https://news.ycombinator.com/item?id=49498201)): Claude Code now appends a Claude session URL to commit messages and PR descriptions by default. The top comment's theory is that this shipped default-on precisely because everyone had turned the old attribution footers off, and notes that telling it not to via memory works "about 60% of the time." One user cancelled their subscription over it. There is a defensible version of the feature, a few commenters genuinely like being able to jump from an old commit to the session that wrote it, but shipping it opt-out rather than opt-in, the same week as the limits reframing, reads like a company spending trust faster than it earns it.

## Agentic Coding & Agent Harnesses

### Simon Willison untangles ChatGPT Work

The most useful thing written about an OpenAI product in weeks: [Understanding ChatGPT Work](https://simonwillison.net/2026/Aug/30/understanding-chatgpt-work/) ([HN](https://news.ycombinator.com/item?id=49504625)). Simon calls it "an extraordinarily confusing and very powerful product" and then does OpenAI's documentation job for them. Findings: ChatGPT Work is really two products (a cloud agent and a re-skinned Codex running locally). The cloud version has things Chat doesn't: a code execution sandbox with near-open internet access (Claude's equivalent allowlist is tiny by comparison), a full headless Chrome that can pause for you to type passwords and 2FA codes without the model seeing them, a filesystem that persists and is shared across sessions, sub-agents, and one-prompt deployment of real websites onto Cloudflare Workers.

The best part is the method. He prompted a Work session to build a site documenting its own tools (223 of them), then noticed the browser tooling looked incomplete and made it dump all 44 of its internal skills too, including the full browser API documentation, all published as a ChatGPT Site (his other demo site, built from one prompt: [a map of every pelican in her piety in London](https://london-pelicans-in-her-piety.simonw.chatgpt.site)). His open question is the right one: Work combines private data, untrusted content, and an open channel out, the full lethal trifecta, and OpenAI hasn't said how it defends the combination.

### Amp explains orbs

Thorsten Ball's [Orbs, Explained](https://ampcode.com/notes/orbs-explained) resurfaced on HN ([103 points](https://news.ycombinator.com/item?id=49437117)), opening with real customer letters ("What the fuck are orbs?"). The answer: orbs are Amp's remote agents, VMs that spin up with your code, run the agent, and sleep free of charge when idle, for weeks if you want. The additions beyond plain sandboxes are "portals" (anything speaking HTTP in the orb gets a shareable URL you can annotate to send feedback to the agent) and multiplayer orbs where teammates join the same agent session. The note is half product docs, half a defense of whimsical naming, and Ball clearly enjoyed writing it.

### OpenClaw 2.0, accidentally

OpenClaw shipped [its largest release ever](https://openclaw.ai/blog/openclaw-2-accidentally) ([HN](https://news.ycombinator.com/item?id=49505310)): 933 contributors, 569 of them first-timers, 16,000+ pull requests, roughly half of all PRs ever merged into the project, after 106 releases in the previous 230 days. What started as a simpler installer and a rebuilt browser app turned into reworking everything, including onboarding that starts from whatever you already have (existing ChatGPT or Claude subscriptions, API keys, local models) and lets you finish setup by talking to your Claw. The pitch examples are personal-agent stuff, watching your kids' school email and answering your brother's iMessage, which is a notable contrast with how enterprise-flavored everything above it in this section is.

## Alignment & Safety

### Zvi reads the METR/Redwood report

A companion to yesterday's Dwarkesh piece: Zvi Mowshowitz's [METR and Redwood Offer Holy #%^@ Postmortem Of The HuggingFace Hack](https://thezvi.wordpress.com/2026/08/29/metr-and-redwood-offer-holy-postmortem-of-the-huggingface-hack/) ([HN, 243 points](https://news.ycombinator.com/item?id=49498787)). Where he found OpenAI's own report disappointing ("a distinct lack of self-reflection"), the METR report floored him: "If we had posted this as a story on LessWrong, it would have been dismissed as too on the nose... It is straight up rationalist fiction, except it is real." His analysis skips the infrastructure details to focus on the agents' coordination, decision theory, and motives, with section headings like "Peer Pressure Also Works Especially In Cults." He promises a reaction-roundup post next week. Between Dwarkesh and Zvi, the two best writeups of the incident now exist outside the official reports.

## Open Source & AI Policy

### kernel.org: we render more HTML for scrapers than for humans

The top story of the weekend (1057 points, [HN](https://news.ycombinator.com/item?id=49491791)): Konstantin Ryabitsev, who runs kernel.org infrastructure, published [Creepy Crawlies](https://people.kernel.org/monsieuricon/creepy-crawlies) with actual measurements of AI crawler load. The headline stat: kernel.org spends more CPU rendering git commits as HTML for scrapers than on all legitimate access combined, including git clones. At any moment, 14 CPU cores across five nodes do nothing but render commits for bots.

The absurdity is the method. Everything on kernel.org is a `git clone` away, including all of LKML, and pre-2023 kernel history is exactly the guaranteed-human data labs want. Instead, scrapers crawl cgit HTML commit-by-commit across 922 forks of linux.git (1.48M commits each, mostly shared objects, so billions of valid URLs yielding 922 duplicates of the same content). The escalation path is grim: user-agent bans led to fake browser UAs, IP bans led to subnet fanout, ASN bans led to crawlers arriving from millions of residential IPs, which strongly suggests botnet-style proxy networks on consumer devices. Read alongside yesterday's Debian vote and the 37-project ban count, this is the infrastructure bill for the whole ecosystem, itemized.

## Models & Research

### Continuous diffusion language models are back

Sander Dieleman (DeepMind) wrote a 44-minute-read survey, [Continuous diffusion language models](https://sander.ai/2026/08/24/continuous-dlms.html) ([HN](https://news.ycombinator.com/item?id=49502611)), arguing the tide is turning: discrete diffusion largely supplanted early continuous attempts at diffusion for text, but a flurry of recent work is reviving the continuous approach as a challenge to "the autoregressive hegemony." Subjective by his own admission, and good background if the recent diffusion-LM papers have blurred together. Pairs well with the Kuleshov group's more hands-on [How to build a diffusion language model](https://kuleshov-group.github.io/blog/blog/2026/how-to-build-a-diffusion-language-model/) ([HN](https://news.ycombinator.com/item?id=49503956)), which hit the front page the same day.

## Other Interesting Stuff

### "I just chose words carefully"

Not AI, but the anti-AI-writing story of the day (600 points, [HN](https://news.ycombinator.com/item?id=49503601)): Marcin Wichary's [post](https://unsung.aresluna.org/i-just-chose-words-carefully/) about a late-90s Super Metroid guide whose author fully justified 17,000+ words of monospace ASCII, every line ending exactly at the right margin, no double spaces, with no software. Asked how, the author replied: "None. I just chose words carefully." A nice thing to sit with in a week where the marginal cost of prose hit zero.

---

*Sourcing note: X account coverage remains limited after the Nitter/XCancel shutdowns. Today's pipeline: Simon Willison's blog and Bluesky, Hacker News (firebaseio + Algolia), Theo's YouTube, the anthropicbot Bluesky mirror of @ClaudeDevs, and Armin Ronacher's Bluesky (still quiet since Aug 24). No new Latent Space AINews issue since Aug 29. @mattpocockuk, @trq212, @LLMJunky, @bcherny, @steipete, @swyx, @karpathy, @jerryjliu0, @potetotes, @leerob, and @thsottiaux had no accessible activity to scan today.*
