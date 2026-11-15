---
title: "Code Summit Videos Land, Anthropic IPO Oversubscribed, Notion–Fireworks Breach Surfaces & Weekend Reflections"
date: "2026-11-15"
summary: "The **AI Engineer Code Summit** wrapped up this week (Nov 10–12 in SF) and session recordings are hitting YouTube — 86 speakers across 40 talks on coding agents, software quality, and the fight against AI slop. Anthropic's IPO is **multiple times oversubscribed** at $70–$78/share ahead of its Nov 18 pricing; Nvidia and Google are each reportedly in for ~$10B in the private placement. **Notion disclosed** that fewer than 1% of workspaces had AI chat data exposed through the Fireworks AI breach. Simon Willison shipped **datasette-llm 0.1a11** (OpenAI-compatible endpoints for local models in Datasette) and **llm 0.37.2** (a security fix for API keys leaking to third-party providers). Plus: the FAA ground stop autopsy continues, Thariq Shihipar's post-Anthropic Code Summit talk, and weekend reading from the week that had Jensen Huang's resignation, ChatGPT Wallet, and the No AI Slop manifesto."
tags:
  - AI Engineer Code Summit
  - Anthropic & Claude Updates
  - Agentic Coding & Agent Harnesses
  - Other Interesting Stuff
---

# AI Roundup — November 15, 2026

## AI Engineer Code Summit Recap (Nov 10–12, SF)

### The event in numbers

The second annual AI Engineer Code Summit ran November 10–12 at the Hilton Union Square in San Francisco, with Google DeepMind as presenting sponsor. The organizers report [86 speakers across 40 talks, 32 breakouts, and 18 workshops](https://ai.engineer/code/2026), and claim 1.5 million talk views worldwide. Day 1 (Nov 10) was workshops; days 2–3 (Nov 11–12) were main-stage talks and expo.

Session recordings are now on YouTube. [Day 1 main stage](https://www.youtube.com/watch?v=y9JtCCZP2MQ) features talks from OpenAI, Cognition, Exa, Anthropic, and others. [Day 2 main stage](https://www.youtube.com/watch?v=ZZ19zhYnDKY) covers Google DeepMind, Anthropic, Lovable, Ramp, and the "System One" decision-models theme.

### Key talks and themes

- **Anthropic's Lydia Hallie** opened the main stage on Nov 11 with "Rethinking Claude Code Best Practices," a session on how agent workflows have evolved since Claude Code launched.
- **Thariq Shihipar** (now listed as independent after [leaving Anthropic on Oct 24](https://x.com/trq212/status/2121375309287301360)) gave a closing talk on "keeping the human inside the creative loop," reportedly opening with predictions he got wrong about agents — including that agents would settle into one permanently correct tool interface. He [mentioned](https://x.com/i/trending/2114282218361114846) he'd share his World of Warcraft shaman build at the closing.
- **The No AI Slop manifesto** ([slopmanifesto.com](https://www.slopmanifesto.com/)) was introduced by Dex during the closing keynote. It was [covered in yesterday's roundup](2026-11-14-claude-code-projects-coordinator-cursor-incident-write-up-grok-bot-meetings-no-ai-slop-manifesto.md) — the key definition: "Slop is when we put less effort into producing something than we ask the consumer to spend understanding it."
- **The overarching question** has shifted from *whether agents can write code* to *how to stop that code from degrading*. Eight of the 32 main-stage talks came from Google DeepMind, Anthropic, OpenAI, and xAI. One [pre-event analysis](https://superpowerdaily.com/posts/ai-engineer-code-summit-schedules-two-days-on-coding-agents-and-software-quality) framed the summit around "fighting slop in software factories, building with System One models, and rewriting critical apps."

### The broader Code Week

The summit was part of a packed [Code Week in San Francisco](https://merveinsiders.substack.com/p/san-francisco-ai-events-code-week) (Nov 9–15), with satellite events and meetups throughout the city. An [AI Daily digest from Nov 13](https://buttondown.com/ai-daily-mini/archive/ai-daily-2026-11-13/) noted that Thariq's closing talk asked whether there will be "a renaissance of software in 2027."

## Anthropic & Claude Updates

### IPO: multiple times oversubscribed

[Bloomberg reported](https://stockanalysis.com/news/anthropic-ipo-multiple-times-oversubscribed/) (via StockAnalysis) that Anthropic's IPO is multiple times oversubscribed at the $70–$78/share range. The company plans to price on **Wednesday, Nov 18** and begin trading on Nasdaq under ticker **ANT** on **Nov 19**.

The numbers are staggering:
- **825 million shares** on offer from Anthropic and selling shareholders
- A **$26B private placement** of Class N stock at the IPO price, with [Nvidia and Google each reportedly committing ~$10B](https://aiweekly.co/alerts/anthropic-ipo-oversubscribed-bankers-weigh-15t-valuation-nvidia-and-google-each)
- Total proceeds could reach [~$90.4B](https://fourweekmba.com/ai-anthropic-ipo-said-oversubscribed-115b-book-1-3x-spacex/), surpassing SpaceX's record June IPO
- Chinese share orders are [being rebuffed](https://www.bloomberg.com/news/articles/2026-11-13/anthropic-ipo-share-orders-from-china-are-said-to-be-rebuffed), per Bloomberg
- A [trademark suit over the "Mythos" name](https://www.reuters.com/legal/legalindustry/anthropic-sued-trademark-infringement-over-mythos-model-2026-11-13/) was filed on Nov 13

### Claude auth incident postmortem

Friday the 13th's two-hour login outage (covered yesterday) hit claude.ai, the Console, Claude Code, and Cowork. The [status page](https://status.claude.com/incidents/nn11wk485zfn) opened at 09:58 UTC and closed at 11:58. The API stayed up. No further technical details have been posted.

### Self-hosted Managed Agents (continuing)

The [self-hosted sandbox private beta](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes) from May remains in beta. Anthropic runs the agent loop; tool execution can move to customer infrastructure or managed providers (Cloudflare, Daytona, Modal, Vercel). Memory stores still don't work with self-hosted sandboxes.

## Agentic Coding & Agent Harnesses

### Simon Willison's LLM tooling blitz

Simon Willison had a prolific week of releases for his LLM CLI and ecosystem:

- **[datasette-llm 0.1a11](https://simonwillison.net/2026/Nov/14/datasette-llm/)** (Nov 14): Adds support for OpenAI-compatible endpoints, so local servers like LM Studio or Ollama can power Datasette's AI features. This is a significant step toward local-first AI in Datasette.
- **[llm 0.37.2](https://simonwillison.net/2026/Nov/11/llm/)** (Nov 11): A security fix addressing a report that configured OpenAI API keys could be sent to third-party providers through OpenAI-compatible endpoints. Worth checking if you run OpenAI-compatible proxies.
- **[llm-gemini 0.36](https://simonwillison.net/2026/Nov/10/llm-gemini/)** (Nov 10): Adds support for Gemini 4 Carbon.
- **[llm-anthropic 0.31](https://simonwillison.net/2026/Nov/9/llm-anthropic/)** (Nov 9): Adds support for Fable 5.2 and Mythos 5.2.
- **[datasette-llm 0.1a10](https://simonwillison.net/2026/Nov/4/datasette-llm/)** (Nov 4): Fixed a model-restriction bug.
- **[llm 0.37](https://simonwillison.net/2026/Nov/2/llm/)** (Nov 2): A large release covering ~2 months of features and fixes, with contributions from 12 authors, most AI-assisted.

Willison also showed up in the [No AI Slop HN thread](https://news.ycombinator.com/item?id=50488769) to explain the manifesto's use of "alpha" — "knowledge that gives you a competitive advantage."

### Notion discloses Fireworks AI breach impact

[Notion confirmed](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor-nov9) that fewer than 1% of workspaces had AI chat data exposed through the [Fireworks AI security incident](https://runtimewire.com/article/notion-says-ai-chats-used-for-insights-may-have-been-exposed-in-fireworks-breach). The exposed data was chat records from Notion AI's Insights feature, which Notion says weren't labeled with user or workspace identifiers. Notion disconnected from Fireworks on Nov 3, deleted stored data, and paused Insights. They advise rotating any credentials pasted into Notion AI during the affected timeframe.

This connects to the broader Fireworks chain from the [Cursor incident write-up](2026-11-14-claude-code-projects-coordinator-cursor-incident-write-up-grok-bot-meetings-no-ai-slop-manifesto.md) — the same Fireworks breach that led to the trojaned Claude Code extension builds.

### OpenAI cuts off Cursor

One of the week's quieter stories: [OpenAI will stop supplying models to Cursor](https://opentools.ai/news/openai-pushes-for-ai-economic-zones-to-supercharge-us-ai-dominance) effective November 12, after SpaceX acquired the coding tool. This accelerates Cursor's existing shift toward self-hosted and Anthropic models.

### Coding agents digest (week of Nov 2–8)

A [releases.sh digest](https://releases.sh/collections/coding-agents/digest/2026-11-02) covering nine coding-agent releases frames the week's theme as "agents gaining governance and security controls." Highlights include Devin adding admin controls for session sharing, a sign-out-everywhere option, and raising the multi-repo scan cap to 1,000 repositories.

## Videos & Podcasts

- **[AIE CODE Day 1: OpenAI, Cognition, Anthropic, Exa, Amp](https://www.youtube.com/watch?v=y9JtCCZP2MQ)** — Full main-stage recording from the AI Engineer Code Summit, Nov 11.
- **[AIE CODE Day 2: Google DeepMind, Anthropic, Lovable, Ramp](https://www.youtube.com/watch?v=ZZ19zhYnDKY)** — Full main-stage recording, Nov 12. Includes the System One / decision models theme.
- **[4 Takeaways from AI Engineer Code Summit](https://www.youtube.com/shorts/ztcbHkntC7A)** — Short-form recap.
- **[Claude Code's Next Era — Thariq Shihipar](https://latent.space/p/thariq/)** — Latent Space podcast with Thariq recorded before his departure from Anthropic, covering Claude Code's design philosophy and what's next.

## Other Interesting Stuff

### Nvidia fallout continues

The Jensen Huang story is in its fourth day. Key threads since yesterday:

- An [SEC Form 8-K](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm) confirms Huang stepped down as president, CEO, and board member effective immediately on Nov 12. CFO Colette Kress serves as interim CEO.
- The [WSJ report](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) alleging Nvidia artificially inflated GPU scarcity by funding AI startups to buy its GPUs continues to drive discussion. The article describes an August meeting where Kress pushed to cut circular financing and Huang allegedly reacted badly.
- The [FT reports](https://www.ft.com/content/2a64f698-46dd-4178-a3f4-4c5f4c0a0926) that Arm's Rene Haas was approached for the CEO role.
- The [Stand with Jensen](https://standwithjensen.com/) petition is collecting signatures; Elon Musk signed.

### Gemini 4 Hydrogen: still a rumor

Despite some aggregator sites reporting a release, [Gemini 4 Hydrogen has not been officially announced](https://kie.ai/blog/what-is-gemini-4-hydrogen). The only confirmed Gemini 4 model in Google's API is Argon (the flagship) and Carbon (the mid-tier, [which went GA on Nov 11](2026-11-11-gemini-4-carbon-goes-ga-claude-sheets-and-whiteboards-free-full-reset-cursor-multiplayer-alphaproof-code-verifies-signal.md)). Hydrogen is described in leaks as a fast, cheap tier — think Flash successor — but Google hasn't confirmed the name or a date. GitHub Copilot was reported to have made it "generally available" in yesterday's roundup, which adds confusion.

### FAA ground stop autopsy

The Friday the 13th nationwide ground stop (7,000+ flights canceled, 827 diverted) is getting its postmortem. Transportation Secretary Sean Duffy blamed aging telecom routers that "got overloaded with data" and explicitly said there is ["no possible way"](https://creati.ai/ai-news/2026-11-15/) the FAA's new SMART AI system was involved. The SMART AI tool had just been expanded to all 22 US air traffic centers in a [$875M rollout](https://byobot.ai/ai-news/ai-daily-newsstand-november-14-2026).

### Weekend reading

- **[Karpathy's four-step capability gap](https://pasqualepillitteri.it/en/news/23106/karpathy-llm-capability-gap-widening)**: A recent thread argues the gap in how people understand LLM capabilities is widening and has a funnel shape — from people who have never tried AI, through casual users, power users, and builders. Still relevant as context for the Code Summit's audience.
- **[Armin Ronacher's agentic coding slides](https://speakerdeck.com/mitsuhiko/agentic-coding-the-future-of-software-development-with-agents)**: Mitsuhiko's talk recommends against MCP for coding agents, favoring bespoke file-system-and-text-based tools. His [Pi toolkit](https://github.com/mitsuhiko) continues to evolve as an alternative approach.
- **[Jerry Liu / LlamaIndex ParseBench-2](https://x.com/jerryjliu0/status/2121384707384647893)**: The debate from yesterday continues — competitors Extend and Datalab call the benchmark self-favoring. LlamaIndex cut Agentic Plus pricing to 25 credits/page (from 45).
- **[Boris Cherny on building Claude Code](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny)**: Pragmatic Engineer interview. Cherny says ~90% of Claude Code is written with Claude Code.

---

**Note on sourcing:** This roundup was compiled via web search from a cloud environment with limited network access. Nitter, X/Twitter, Hacker News, Substack, and many blog domains were unreachable directly. Links are to the best available source found through search. Some items (particularly exact tweet text and engagement numbers) could not be independently verified and are noted as such.
