# Apr 16 Roundup: Cal.com Closes Source, Shopify Autoresearch Results, Cursor Canvas

## Agentic & Code AI

### Cal.com Goes Closed Source, Sparks "Open Source Is Dead" Debate

Cal.com's Bailey Pumfleet announced they're closing their core codebase, claiming AI has made open source too exploitable. The thread blew up with pushback from nearly every corner:

- **Simon Willison** [responded](https://x.com/simonw/status/2044436261990265019) saying it reads like a company admitting they no longer trust their own ability to keep data secure. He shared Drew Breunig's piece arguing AI-powered security analysis actually makes open source *more* valuable.
- **Armin Ronacher (mitsuhiko)** [called the argument "pretty weak"](https://x.com/mitsuhiko/status/2044425243519824129), noting that closing source doesn't address the real issue.
- **Peter Steinberger (steipete)** [pushed back from experience](https://x.com/steipete/status/2044423791405924562) with OpenClaw, saying their response has been rapid iteration and code hardening, and warned about OSS projects that don't publish security advisories.
- **Theo** retweeted [a snarky take](https://x.com/willccbb/status/2044480332515447176) contrasting Anthropic's restrictive ToS with OpenAI letting Codex do recursive self-improvement research.

Cal.com released the old codebase as an MIT-licensed project called "cal.diy" for hobbyists. The community consensus was largely that security through obscurity remains a bad strategy.

- [Original thread](https://x.com/pumfleet/status/2044406553508274554)
- [Breunig's article: "Cybersecurity Is Proof of Work Now"](https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html)

### Shopify Open-Sources Autoresearch Results: 300x Faster Tests, 65% CI Reduction

Shopify Engineering [shared results](https://x.com/ShopifyEng/status/2044477537200550383) from teams running pi-autoresearch across their codebase:

- Unit tests: 300x faster
- React component mounting: 20% faster
- CI build time: 65% reduction
- Even made pnpm run faster

Community reaction was a mix of awe and introspection. As one reply put it: the optimizations were always there, nobody had time to look. Another commenter shared "evo," an open-source Claude Code plugin that does autoresearch with tree search over greedy hill-climb and parallel agents in git worktrees.

- [Repo: pi-autoresearch](https://github.com/davebcn87/pi-autoresearch)
- [Shopify Engineering blog post](https://shopify.engineering/autoresearch)

### Sentry's Internal Slackbot: A Real-World Team Agent Case Study

David Cramer (Sentry CEO) [wrote a detailed thread](https://x.com/zeeg/status/2044652771790700929) about building an internal Slackbot agent at Sentry. 30% of the team (~130 people) has interacted with it. Key takeaways:

- Everything ends up as a GitHub issue; low friction to get info in/out of systems
- Stack: Vercel compute + sandboxes for isolation, Chat SDK, Pi's SDK as the harness, MCP for integrations
- It answers questions about product, software, and company better than any single vendor's agent because it's connected to all of them
- His honest take: the tech is rough and early, complex systems are still complex, and having a strong design vision hasn't gotten easier

Retweeted by Armin Ronacher. A pragmatic counterpoint to the hype.

### Matt Pocock: AI Coding Frameworks Are Disappointing Users

After running an AI coding course for ~2,000 people, Matt Pocock [reported](https://x.com/mattpocockuk/status/2044029094942159126) major dissatisfaction with frameworks like BMAD, GSD, and Spec-Kit. His finding: giving away control of context to a framework makes things harder to debug. His advice: own the process.

Discussion was nuanced. Some defended structured TDD loops while acknowledging rigid workflows fail. Pocock clarified that good frameworks should hand control to users and be easy to observe -- the current crop doesn't do that. Projects "turn into a ball of mud over time."

He also [shipped Sandcastle 0.4.7](https://x.com/mattpocockuk/status/2044360271997628497) with a new `interactive()` feature for HITL workflows where you develop locally then immediately run a reviewer agent that commits to the branch.

### Cursor Ships Interactive Canvases

Cursor [announced](https://x.com/cursor_ai/status/2044486585492947010) that the AI can now respond by creating interactive canvases -- dashboards and custom interfaces rendered inline rather than plain text output. Lauren (potetotes) [called it](https://x.com/potetotes/status/2044487818609889742) worth a thousand tokens. Kent C. Dodds chimed in with approval.

Separately, Cursor also [launched Sentry-triggered automations](https://x.com/cursor_ai/status/2044097171071611338) -- agents that auto-respond to new issues, investigate root causes, open PRs, and post summaries to Slack.

### Thariq on Claude Code Session Management & 1M Context

Thariq (Anthropic) [published a guide](https://x.com/trq212/status/2044548257058328723) on managing Claude Code's 1M context window, calling it a double-edged sword -- it enables more complex tasks but can lead to context pollution. Tips include setting a custom autocompact threshold (e.g., `CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000`).

Also available on the [Claude Blog](https://claude.com/blog/using-claude-code-session-management-and-1m-context).

### Codex CLI Update: Search, Custom Marketplaces

LLMJunky [covered](https://x.com/LLMJunky/status/2044531918666870840) Codex CLI v0.121.0:

- CTRL+R to search through previous user prompts
- Custom marketplace installs via `codex marketplace add <source>` (GitHub shorthand, git URLs, or local directories)
- /compact coming to Codex

[Release notes](https://github.com/openai/codex/releases/tag/rust-v0.121.0)

### Lauren (potetotes): /how Skill for Architecture Understanding

Lauren open-sourced [/how](https://github.com/poteto/how), a Claude Code skill that helps understand codebase architecture. She tells agents to "use /how to understand how X works" which helps them fix root causes rather than symptoms. Built in response to Matt Pocock asking what to name the "go up a layer of abstraction" pattern.

### Lee Robinson's Free Coding Agents Course

Lee Robinson (Vercel) [released](https://x.com/leerob/status/2044540647298761025) a free 30-minute course on building software with coding agents -- planning features, fixing bugs, reviewing/testing code. Lauren shared it calling it full of useful tips.

## Other Notable AI News

### Gemini Flash TTS

Simon Willison [tested](https://simonwillison.net/2026/Apr/15/gemini-31-flash-tts/) Google's new Gemini 3.1 Flash TTS model, running it with London Estuary, Newcastle, and Exeter accents. Blog post has embedded audio samples.

### Boris Cherny on Acquired Podcast

Boris Cherny (Claude Code) [appeared on Acquired FM's Unplugged](https://x.com/bcherny/status/2044632185354006713).

### Latent Space: The Full Story of Notion AI

Swyx's Latent Space podcast [published](https://x.com/latentspacepod/status/2044218242315759635) a deep dive with Notion's AI team on Custom Agents, covering 5 major rebuilds, MCP vs CLI trade-offs, retrieval and search built for agents, and why embedding model choice matters less than you think.

### Armin Ronacher Worries About AI Slop in IETF RFCs

Mitsuhiko [flagged concerns](https://x.com/mitsuhiko/status/2044651344716255365) about AI-generated submissions flooding the IETF RFC process. Also shared a humorous IPv8 draft that's only backwards-compatible with IPv4 and uses JWT.

### swyx: Meta's AI Turnaround

swyx [outlined](https://x.com/swyx/status/2044547085962559654) Meta's AI comeback story: more hiring post-soup-wars, Zuck moving in with Alexandr and Nat, GA of an Opus-ish model, and acquiring Dreamer and Manus to build the AI OS prosumer layer.

### T3 Code Gets Nightly Builds

Julius [announced](https://x.com/jullerino/status/2044308917237485608) nightly builds for T3 Code, with improved project management for web and remote environments. Retweeted by Theo.

### Theo: Open Sourcing Your Business

Theo [posted a video](https://x.com/theo/status/2044510003156160992) arguing there's never been a better time to open source your business -- a direct counterpoint to the Cal.com news.
