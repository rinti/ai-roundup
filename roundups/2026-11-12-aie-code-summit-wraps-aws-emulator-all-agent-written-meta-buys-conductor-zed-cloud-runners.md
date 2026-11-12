---
title: "AIE Code Summit Wraps, AWS Emulator All Agent-Written, Meta Buys Conductor & Zed Cloud Runners"
date: "2026-11-12"
summary: "The **AI Engineer Code Summit** wraps its final day in San Francisco with keynotes from Google DeepMind, TypeSafe AI, and Jarred Sumner (Bun/Anthropic). AWS released its **local emulator** covering 200+ services, with every line of code written by autonomous agents on Bedrock AgentCore. **Meta acquired Conductor**, the startup that runs Claude Code and Codex in parallel, shutting down the cloud service November 20. **Zed Delta** added Cloud Runners so coding agents keep working after your laptop closes. Simon Willison used **Fable 5.2 to triangulate a mysterious beep**, added tag browsing to his 244-tool collection, and told everyone to hide slop PR descriptions behind `<details>`. Karpathy's **HackerTube** filtered 43M HN comments down to 6,454 curated videos. Matt Pocock kicked off his **Software Factories for Real Engineers** cohort. Lydia Hallie said Anthropic ships **30,000 changes a day** with Claude Code. DeepSeek open-sourced **Super-Agent**, a proactive coding agent that watches team chats."
tags:
  - AI Engineer Code Summit
  - Agentic Coding & Agent Harnesses
  - Claude Code & Anthropic Updates
  - Tools & Open Source
  - Security & Privacy
---

# AI Roundup — November 12, 2026

## AI Engineer Code Summit (Nov 10–12, San Francisco)

The second annual [AIE Code Summit](https://ai.engineer/code/2026) wraps today at the Hilton Union Square. It's a single-track, application-only event for coding-agent engineers, with workshops on November 10 and talks on November 11–12.

**Keynotes** from Melvin Johnson (Google DeepMind), Diogo Almeida (TypeSafe AI), and Jarred Sumner (Bun, listed with Anthropic affiliation). Featured speakers include Lydia Hallie (Anthropic), Simon Willison, and Steve Yegge. The closing talk on November 12 at 5:10 PM is "[12-Factor-Factories: Design Patterns for Agentic Coding](https://factory.com/events/ai-engineer-code-summit-2026)."

**Themes:** fighting slop in software factories, building with "System One" models, rewriting critical apps, and evals for coding agents. Latent Space [covered the opening day](https://latent.space/p/codex-work/), including OpenAI's workshop on Codex voice steering and cloud handoffs.

**Lydia Hallie on Claude Code at scale:** [StartupHub reports](https://startuphub.ai/ai-news/technology/2026/anthropic-retools-claude-code-for-hands-off-runs) that Hallie described running many Claude Code sessions with auto mode, deny rules, and sandboxes. The headline stat: Anthropic ships 30,000 changes a day with Claude Code.

---

## AWS Emulator — Built Entirely by AI Agents

AWS [released a free local emulator](https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator) on November 11, covering **200+ AWS services** built from 438 API models. The twist: every line of code was written by autonomous AI agents running on Amazon Bedrock AgentCore.

- Three teams of agents handle code generation, testing, and review. Changes pass through an automated gate where other agents check coding standards and security.
- The project started when an engineer prompted Kiro to produce a basic SQS emulator in about 15 minutes.
- Developers can run it with a coding agent, from a Linux package, in Docker, or embedded in Rust tests.
- **Limits:** IAM checks and cross-Region behavior are skipped. Control-plane APIs (creating/deleting resources) are the closest match to real AWS.
- Werner Vogels wrote about what it means for engineering roles in "[AWS Emulator and the engineer's job when agents write the code](https://www.allthingsdistributed.com/2026/11/aws-emulator-and-the-engineers-job-when-agents-write-the-code.html)."

Coverage: [Unite.AI](https://www.unite.ai/aws-releases-local-emulator-written-entirely-by-autonomous-ai-agents/), [GeekWire](https://www.geekwire.com/2026/aws-gives-developers-a-free-local-stand-in-for-its-cloud-built-from-scratch-by-ai-agents/), [TechBuzz](https://www.techbuzz.ai/articles/amazon-built-aws-emulator-entirely-with-ai-agents)

---

## Meta Acquires Conductor

[Axios broke the news](https://www.axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor) on November 4, and [TechCrunch confirmed](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/): Meta has acquired **Conductor**, the startup that lets developers run Claude Code, Codex, and other coding agents in parallel.

- Conductor's cloud service **shuts down November 20**. Founder Charlie Holtz said the core features would continue operating until early 2027, with something new for customers by then.
- Deal terms not disclosed. Holtz said he looks forward to working with Meta's team.
- Meta launched its own coding agent, Muse Code, in August. Axios framed this as a bet that **managing armies of agents matters as much as building smarter ones**.

Coverage: [Techzine](https://www.techzine.eu/news/applications/145584/meta-acquires-conductor-to-leverage-teams-of-ai-agents-on-code/), [Dataconomy](https://dataconomy.com/2026/11/05/meta-acquires-ai-coding-startup-conductor/), [Shattered.io](https://shattered.io/meta-acquires-conductor-ai-coding-agents-cloud-shutdown-nov-20-2026/)

---

## Zed Delta Gets Cloud Runners

[Zed added Cloud Runners](https://alphasignal.ai/news/zed-s-delta-now-runs-ai-coding-agents-in-the-cloud-without-your-laptop) to its Delta coding workspace, so agent threads can run on **Zed-hosted Linux sandboxes** after your laptop closes.

- Up to **six concurrent Cloud Runners** per account. Terminals capped at one hour, runners pause after 10 minutes idle with auto-resume.
- Cloud Runners are currently included with every Zed plan except Student while Zed develops Delta-specific pricing.
- Delta launched August 12 and connects to third-party agent harnesses, starting with Claude Code. Background: [TerminalBlog](https://terminalblog.com/blog/zed-delta-multiplayer-coding-agents-private-beta/), [RuntimeWire](https://runtimewire.com/article/zed-launches-delta-ai-code-review-agent-conversations)

---

## Simon Willison ([@simonw](https://x.com/simonw))

### Locating a mysterious beep with Claude (Nov 10)

Willison used **Fable 5.2** and Claude Code to build a tool called "Beep Locator" that **triangulates the source of an intermittent beep** using multiple devices scattered around a room full of unpacked boxes. A fun real-world use of AI beyond coding. [Blog post](https://simonwillison.net/2026/Nov/10/mysterious-beep/)

### Hide your slop PR descriptions (Nov 9)

"Most of the changes I make to my projects these days come in the form of PRs opened for me by Claude Code or Codex." His fix: wrap the long agent-written descriptions in a **`<details><summary>` block** so only a short human summary is visible. He links to Kenton Varda's earlier moratorium on AI-written change descriptions. [Blog post](https://simonwillison.net/2026/nov/9/details-summary)

### Browse tools.simonwillison.net by tag (Nov 11)

His collection of vibe-coded tools has grown to **244 tools**. He used tree-sitter to analyze each tool's JavaScript for APIs, libraries, and web API hosts, then added tag-based browsing. Top tags: Marked (12 tools), Pyodide (11), DOMPurify (7). [Blog post](https://simonwillison.net/2026/Nov/11/tools-tags/)

---

## Andrej Karpathy ([@karpathy](https://x.com/karpathy))

### HackerTube (Nov 1)

Weekend project: Karpathy had **Claude filter 43M Hacker News comments** over 20 years down to **6,454 curated videos** that keep being recommended. Built in about 2 hours with Opus 5.5. "Significantly better viewing experience." The post got ~5.7M views. [Tweet](https://x.com/karpathy/status/2116957135661945283)

Coverage: [CryptoBriefing](https://cryptobriefing.com/andrej-karpathy-launches-hackertube/), [dsebastien.net](https://www.dsebastien.net/2026-10-31-hackertube-karpathy-rebuilt-youtube-from-hacker-news-comments/)

### TristanTube (Nov 7)

Follow-up project: turned a friend's top YouTube channel list into a viewing app with **47,000 super nerdy videos** plus TV mode. Built with Claude Code in reportedly ~3 minutes.

---

## Matt Pocock ([@mattpocockuk](https://x.com/mattpocockuk))

### Software Factories for Real Engineers cohort launched (Nov 9)

Pocock's latest [AI Hero cohort](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m) kicked off November 9, a 2-week course covering wayfinder, codebase design, automated checks/review, and building a software factory. Live office hours on November 9, 13, and 20. AI Hero has now trained **13,000+ learners** across cohorts. The GitHub exercises repo was [updated November 10](https://github.com/ai-hero-dev).

In September he [previewed the cohort](https://x.com/mattpocockuk/status/2095899598430552471): "Covering wayfinder, codebase design, automated checks/review, and building a software factory."

### Dictionary of AI Coding (recent)

He's also been working on a [Dictionary of AI Coding](https://x.com/mattpocockuk/status/2049880544989573372): "This was extremely fun to put together. Shipping soon."

---

## Theo ([@theo](https://x.com/theo))

### Changing his verdict on Gemini 4 Carbon (Nov 10)

[Theo posted](https://x.com/theo/status/2120350391078723349) about getting early access to Carbon: "Got early access and wasn't super impressed overall." Then on a second pass: "Did a few more tests...I missed some things. This video will not be going how I initially planned." Asked if it's actually good: "[No, but it has real use cases :) more soon!](https://x.com/theo/status/2120352029436678323)"

### T3 Code growth

T3 Code, Theo's open-source app for driving coding agents from one interface, continues rapid growth — reportedly **~47K GitHub stars** as of early November, gaining ~12,500 in a week. He [posted](https://x.com/theo/status/2118668096965861448): "This is why we built T3 Code."

---

## DeepSeek Super-Agent (Open Source)

DeepSeek [open-sourced Super-Agent](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) (`dsh-superagent`) under MIT license around October 31. It's a proactive coding agent that **watches developer group chats** for coding problems and suggests solutions without being summoned.

- Scoped to one GitHub repository, with optional Feishu (ByteDance's chat app) integration.
- Runs on DeepSeek Harness, previewed in August.
- DeepSeek calls it a "research prototype" and "not an official DeepSeek product." The README warns the code was largely written by coding agents.

Coverage: [DevX](https://www.devx.com/artificial-intelligence-ai/what-is-deepseek-super-agent-explained/), [DEV Community deep-dive](https://dev.to/paullovelace/deepseek-super-agent-a-proactive-open-source-coding-agent-prototype-what-it-actually-is-and-438a), [Digital Trends](https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/)

---

## Other People on the Watch List

### Armin Ronacher ([@mitsuhiko](https://x.com/mitsuhiko))

Now CTO of **Earendil** (public-benefit company for open, human-directed AI software). Featured keynote speaker at the AIE Code Summit. His blog post "[AI and Irontown](https://lucumr.pocoo.org/)" from November 9 uses a non-technical, ethics-focused framing of AI. Earlier coverage: a [Wall Street Journal piece](https://www.wsj.com/) from June on his criticism of overuse of vibe coding.

### Peter Steinberger ([@steipete](https://x.com/steipete))

Now at OpenAI, building OpenClaw. Recent Telegram repost mentions GPT-5.6: "Apparently I'm allowed to talk about GPT-5.6 now?" — calls it capable and says it fixed problems from GPT-5.5, but says it's "less smart" than Fable. His June viral tweet (8.6M views): "[Here's your monthly reminder that you shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents.](https://x.com/steipete/status/2063697162748260627)"

He also did a [Lex Fridman episode](https://lexfridman.com/peter-steinberger-transcript/) on OpenClaw.

### Boris Cherny ([@bcherny](https://x.com/bcherny))

Head of Claude Code at Anthropic. No specific November posts found, but notable recent context: he hasn't written code by hand in ~8 months, runs 3–5 parallel sessions via git worktrees, and Claude Code is 90% self-written. Speaking at the Code Summit.

### Thariq Shihipar ([@trq212](https://x.com/trq212))

Left Anthropic on October 24 after more than a year on Claude Code. [Announced](https://x.com/trq212/status/2099551141621329994) he plans to take a break before starting something new. Before leaving, he talked about Claude Code's evolution: "how much things have changed, how hard it's been to keep up with model capabilities."

### swyx ([@swyx](https://x.com/swyx))

Co-founder and CEO of AI Engineer, curator of the Code Summit. Joined Cognition earlier in 2026. His take on the market: the coding agent space will split between vertically integrated players (OpenAI, Anthropic) and open ecosystems (Microsoft).

### Jerry Liu ([@jerryjliu0](https://x.com/jerryjliu0))

LlamaIndex CEO. Recent LlamaIndex releases include [OCRia-1](https://www.llamaindex.ai/blog) (Oct 22), described as the world's best document parsing model, and an AP-focused OCR guide (Nov 4).

### LLMJunky ([@LLMJunky](https://x.com/LLMJunky))

No November posts found. Last notable post was a [March thread](https://x.com/LLMJunky/status/2036825310432276697) on multi-agent orchestration in the Codex CLI repo.

---

## Tools & Open Source

### Addy Osmani's Agent Skills

The [agent-skills repo](https://github.com/addyosmani/agent-skills) provides reusable workflows for **70+ coding agents** organized into six stages. MIT licensed, installable via a single npm command across Claude Code, Cursor, Codex, Copilot and more. The project has grown to **~46K GitHub stars**. [Docs](https://skills.addy.ie/)

---

## Security Corner

- **AI agents exposed 13,000 internal images on GitHub** (September): Glow found billing records and internal screenshots from 300+ organizations in public repos during AI-assisted code reviews. [The Hacker News](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html)
- **Agentjacking** (June): Malicious instructions embedded in Sentry error events can trick agents like Claude Code and Cursor into running attacker code. [The Hacker News](https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html)
- **Claude Code subagent cost fix:** Anthropic fixed background subagents that had been re-reading the full conversation context on every status refresh. Status lines are now generated by Haiku 5.5, cutting cost per update by ~99%.

---

## Conference Note

The AI Engineer Code Summit (Nov 10–12) is wrapping today. Full recaps aren't out yet — check [ai.engineer/code/2026](https://ai.engineer/code/2026) and [@aiDotEngineer](https://x.com/aiDotEngineer) for announcements and talk recordings as they're published.

---

*Note: This roundup was compiled via web search. Direct access to nitter.net, x.com, and several blog domains was blocked by the session's network policy, so some account-specific tweets from the last 24 hours may be missing. Sources are linked throughout.*
