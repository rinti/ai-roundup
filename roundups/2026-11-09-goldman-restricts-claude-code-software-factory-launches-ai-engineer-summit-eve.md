---
title: "Goldman Restricts Claude Code to Engineers, Pocock's Software Factory Course Launches, AI Engineer Code Summit Eve & Claude Code Email Leak"
date: "2026-11-09"
summary: "**Goldman Sachs** confined Claude Code and GitHub Copilot access to its 12,000 engineers, cutting off traders and bankers after an internal productivity-and-risk review. **Matt Pocock's** two-week Software Factory cohort on AI Hero kicks off today, teaching teams to run agents on ticket queues and produce reviewed PRs in parallel. Tomorrow the **AI Engineer Code Summit** opens in San Francisco for three days on coding agents and developer tools, with Armin Ronacher among the featured speakers. A bug report alleges **Claude Code leaked user emails** in HTTP User-Agent headers, and Anthropic says a fix is coming. **Gemini Omni 1.2 Flash** launched with 15-second video clips and cheaper pricing. Simon Willison published posts on hiding **slop PR descriptions** behind `<details>` tags and on Qwen 3.8 27B interpreting model weights locally. Karpathy argued that mastering the **harness around agents** matters more than forcing agents to work. **Meta bought Conductor** to run teams of coding agents in parallel. Also: Jerry Liu on task cost-accuracy frontiers, Peter Steinberger questioning individual usage limits, and the Claude Code HN comment analysis showing 180 of 424 tool-specifying commenters chose Claude Code."
tags:
  - Claude & Anthropic
  - Agentic Coding & Agent Harnesses
  - Models & Releases
  - Agent Security
  - Events & Courses
  - Other Interesting Stuff
---

# AI Roundup — November 9, 2026

## Claude & Anthropic

### Goldman Sachs restricts Claude Code to engineers only

Bloomberg [reported](https://aiweekly.co/alerts/goldman-sachs-pulls-claude-code-and-github-copilot-from-traders-and-bankers) on November 2 that Goldman Sachs updated internal guidance in October to limit Claude Code and GitHub Copilot access to its roughly 12,000 engineers, pulling the tools from traders and bankers. A Goldman spokesperson said the tools belong "in the hands of those who are best suited" to use them ([Quartz](https://qz.com/goldman-sachs-restricts-ai-coding-tools-traders-bankers-110226)). The bank had previously restricted Claude for Hong Kong staff over data concerns ([Dealroom](https://dealroom.co/news/169162-goldman-restricts-claude-code-github-for-traders-and-bankers/)). Goldman's own CIO had praised traders' AI-built tools just last July. Worth noting: Goldman is a lead underwriter on Anthropic's expected Nasdaq IPO (ticker ANT) later this month ([The State of AI](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers)).

### Claude Code email leak via User-Agent headers

A [GitHub issue](https://cybersecuritynews.com/claude-code-leaks-user-email/) (#107757, filed against v2.1.318 on macOS) alleges that Claude Code included users' account email addresses in outbound HTTP User-Agent headers during web fetches. The reporter says the leak led to scam emails, though that link hasn't been publicly confirmed. A Claude Code team member [said](https://aiweekly.co/alerts/claude-code-bug-report-alleges-email-leak-in-user-agent-header) that account emails will be removed from model context in an upcoming release. Anthropic reportedly added a privacy check in v2.1.317 ([PrivacySavvy](https://privacysavvy.com/news/privacy/claude-code-privacy-flaw-email-exposure)). This lands on top of last week's Apiiro report about the "Don't Ask Again" credential leak (covered in [yesterday's roundup](2026-11-08-opus-nerf-or-summarizer-dont-ask-again-leaks-maxxbench-codex-pro-limits-asahi-goes-gpl.md)).

### Claude Code still the most popular agent on HN

A [TechBytes analysis](https://techbytes.app/posts/ai-coding-agent-setups-from-663-hacker-news-comments/) of 663 Hacker News comments found Claude Code leading all coding agents: 180 of 424 commenters who specified tools named Claude Code, followed by OpenAI Codex with 103. The survey is self-selecting, but the 1.7x lead is notable given the security stories this week.

### Simon Willison: hide your slop PR descriptions

Simon Willison [posted](https://simonwillison.net/2026/Nov/9/details-summary/) a tip on collapsing AI-generated PR descriptions behind `<details><summary>` tags. The idea: if an AI wrote a long, formulaic PR summary, wrap it in a collapsible block so reviewers can skip straight to the diff. This follows a running theme on his blog — in July he [relayed](https://simonwillison.net/2026/Jul/8/kenton-varda/) Kenton Varda's moratorium on AI-written change descriptions: "the AI-written descriptions were worse than useless when reviewing PRs, since they described code that was already visible while leaving out the higher-level framing."

## Agentic Coding & Agent Harnesses

### Matt Pocock's Software Factory cohort starts today

Matt Pocock's [Software Factories for Real Engineers](https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m) course launches today on AI Hero. The two-week cohort teaches teams to set up agents that pull from a ticket queue, work through tasks in parallel, and produce reviewed pull requests. Students work on a provided example codebase, and the course includes live office hours with Pocock. He [tweeted](https://x.com/mattpocockuk/status/2115538750147023323): "Everyone's talking about how to go FASTER with agents. That's really, really easy. Loops, YOLO… The hard part is building something that actually works reliably."

Pocock also showed up in yesterday's roundup for landing on the [Thoughtworks Technology Radar](https://x.com/mattpocockuk/status/2119067549438542226) for his agent skills work, with Marcel Marais replying: "kinda insane how even ai laggards seem aware of your skills."

### Karpathy: master the harness before forcing agents to work

Karpathy [argued](https://x.com/RoundtableSpace/status/2118791779671806051) (289K views) that "The biggest mistake in AI right now: people are forcing agents to work instead of mastering the harness engineering for the model first. We made that mistake in 2016 at OpenAI and it cost us 5 years." The term "harness engineering" has been spreading through the community — a [crash course](https://agentfactory.piaic.org/docs/harness-engineering-crash-course) and a [Substack series](https://myexperimentswithai.substack.com/p/agentic-engineering-why-the-harness) now cover it — though attribution is muddled: Karpathy popularized "context engineering" (June 2025) and coined "agentic engineering" (February 2026), but the "harness engineering" label itself [appears to come from](https://ogkranthi.github.io/autoresearch-harness-engineering.html) the broader builder community.

### Meta acquires Conductor for parallel coding agents

Meta [acquired Conductor](https://www.axios.com/2026/11/04/meta-acquires-ai-coding-startup-conductor) on November 4. Conductor's platform runs multiple coding agents in parallel across Claude Code, Codex, Cursor and OpenCode. Financial terms weren't disclosed. Axios framed it as Meta joining the race to own the tools developers use. The same day, OpenAI reportedly said it was acquiring Pierre Computer, a developer tools startup, following its earlier pickup of Ona ([AI Agents Directory](https://aiagentsdirectory.com/news/ai-agents-news-brief-november-6-2026)).

### Peter Steinberger: do individual limits still make sense?

Steinberger [asked](https://x.com/steipete) on November 4: "Do individual limits still make sense? As capabilities increase you want to work with and support an agent that represents your project, that runs loops and evolves your codebase. The humans merely curate the automations." On November 8, he weighed in on the Asahi Linux AI ban: "The Asahi project was all about taking something closed and restricted and opening it up. Adding new restrictions that make it harder for other projects to build on that is not the way. And that AI rejection is just silly."

### Jerry Liu: every task has a pareto frontier

Jerry Liu (LlamaIndex) [posted](https://x.com/jerryjliu0/status/2119126255455051893): "There's a pareto frontier of accuracy and cost for every meaningful task out in the world." @gaurav0bhowmick [replied](https://x.com/gaurav0bhowmick/status/2119142946918555691): "very few teams measure their own frontier though, they grab the newest model and eat the bill."

## Events & Courses

### AI Engineer Code Summit starts tomorrow

The [AI Engineer Code Summit](https://www.ai.engineer/code/2026) opens tomorrow (November 10–12) at the Hilton San Francisco Union Square. It's an application-only, single-track summit focused on coding agents and developer tools. November 10 is a workshop day ($299). Armin Ronacher (CTO of Earendil, creator of Flask) is [listed as a featured keynote speaker](https://www.ai.engineer/speakers/armin-ronacher). His speaker bio argues that coding agents multiply code production without multiplying the people accountable for production failures. The full lineup hasn't been published yet.

## Models & Releases

### Gemini Omni 1.2 Flash

Google [launched](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) Gemini Omni 1.2 Flash on November 5, a video generation and editing model with clips up to 15 seconds (up from 10 in v1.1) and reportedly ~30% cheaper pricing. It's generally available on the Gemini API, Google AI Studio, Vertex AI, YouTube, Google Workspace and the Gemini app. The [model card](https://deepmind.google/models/model-cards/gemini-omni-1-2-flash/) places it in the Gemini 3 series.

### Simon Willison's llm 0.37 and Qwen findings

Willison released [llm 0.37](https://simonwillison.net/2026/Nov/2/llm/) on November 2, adding GPT-6.1 Sol and GPT-6.1 Terra support plus a new endpoint command. The default model switched to GPT-6 Luna at half the cost. A [bugfix 0.37.1](https://simonwillison.net/2026/Nov/3/llm/) followed November 3, the same day he [reported](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) that Qwen 3.8 27B running locally on his laptop can interpret model weights, following a recent research paper.

### LlamaIndex ships OCRia and Extract V2.6

LlamaIndex's recent releases include [Extract V2.6](https://www.llamaindex.ai/blog) ("Max Effort") on October 29 and the [OCRia inference stack](https://www.llamaindex.ai/blog) post on November 4, plus earlier October releases of the Document Parsing Protocol and OCRia-1 model.

## Agent Security

### HN digest: Claude Code security dominates the front page

An [automated HN digest](https://github.com/datnguyenquy94/news-radar/issues/1032) for November 9 reports that Claude Code security stories dominated the front page: posts on the Goldman Sachs restriction, the credential leak from "Don't Ask Again", and the email exfiltration report together drew over 2,300 points and 1,500+ comments. The three CVEs from April ([CVE-2026-35020, -35021, -35022](https://phoenix.security/claude-code-leak-to-vulnerability-three-cves-in-claude-code-cli-and-the-chain-that-connects-them/)) chaining into credential exfiltration are being resurfaced in the discussion.

## Other Interesting Stuff

### The Web Is More Than Enough

Simon Willison [commented](https://simonwillison.net/2026/Nov/9/hn-50421091/) on a Paul Ford piece making the HN rounds. Ford's essay argues for the web as a sufficient platform. Willison's commentary linked it to a Three.js demo and a port to vanilla JS built with Claude — a practical demonstration of the web's capability.

### Codex vs Claude Code: the horse race continues

[TechRepublic's October comparison](https://techrepublic.com/article/news-codex-vs-claude-code/) put Claude Code with Sonnet 5.5 at 68 on the Artificial Analysis Coding Agent Index versus 63 for Codex with GPT-6.1 Sol. Architecture-wise, Codex runs in a cloud sandbox while Claude Code is terminal-first. A [DEV Community benchmark post](https://dev.to/shehzan/openai-codex-vs-claude-code-2026-benchmark-comparison-371m) reports Claude Code leading on accuracy (92% vs 90.2% on HumanEval, 72.7% vs 69.1% on SWE-bench), while Codex claims 3x better token efficiency. Both date from earlier in 2026 with older model versions.

### Armin Ronacher's agent philosophy ahead of Code Summit

Ronacher's talks and writing consistently argue that agents should be grounded in files, shell commands, tests, and direct editing — and that autonomous coding loops accumulate redundant abstractions. In his [Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/building-pi-and-what-makes-self-modifying), he described assigning jobs to agents with full permissions and waiting for completion. His [March PyAI talk](https://mitsuhiko.github.io/talks/leaning-in-to-find-out) was "Leaning In to Find Out." Expect these themes at tomorrow's keynote.

---

*Note: nitter.net and direct X/Twitter access were blocked in this session's network policy. Content was gathered via web search, secondary sources, and cached snippets. Some post dates could not be independently verified against the original X timeline. Links to x.com posts may require authentication.*
