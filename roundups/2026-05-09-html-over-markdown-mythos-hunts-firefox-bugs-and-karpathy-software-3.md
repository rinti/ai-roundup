---
title: 'HTML Over Markdown, Mythos Hunts Firefox Bugs & Karpathy's Software 3.0'
date: '2026-05-09'
summary: >-
  **Simon Willison's "Unreasonable Effectiveness of HTML"** post (May 8)
  highlights Thariq Shihipar's argument that HTML should replace Markdown as the
  default output format for Claude Code — richer formatting, visual annotations,
  color-coding, and interactive artifacts; Willison admits he's been defaulting
  to Markdown since GPT-4 token-limit days and it's time to reconsider;
  **Mozilla × Claude Mythos** is the security story of the week — an agentic
  harness powered by Claude Mythos Preview found **271 latent security bugs** in
  Firefox (fixed in Firefox 150), including a 15-year-old `<legend>` flaw, a
  20-year-old XSLT bug, a use-after-free via IPC race condition, and a buffer
  over-read in HTTPS RR/ECH parsing — the shift from "AI bug reports are slop"
  to "AI found bugs humans missed for two decades" is real; **Karpathy publishes
  Sequoia Ascent 2026 recap** with the "Software 3.0" thesis — LLMs are a new
  programmable layer, the unit of programming shifted from lines of code to
  delegated macro actions, and three "new horizon" use cases beyond coding;
  **Steipete ships imsg 0.6 + 0.7** with Private API bridge for iMessage agent
  integration, plus open-sourced OpenClaw Codex tooling for OSS maintainers
  drowning in PRs; **Matt Pocock** continues championing /handoff ("might be my
  new favourite skill"), skills repo momentum holds; **Jerry Liu** declares "the
  scaffolding layer is collapsing" — agent loops are capable enough that context
  quality is the new moat, 95% of LlamaIndex code is AI-generated; **Theo**
  opens State of AI for Web Devs 2026 survey; **Willison on AI-run businesses**:
  "interesting and fun up to the point where they waste the time of humans who
  haven't opted in"; **Boris Cherny** post-conference: Claude Code now 100%
  written by Claude Code, Opus 4.7 dogfooding insights; ongoing threads from
  Code with Claude event continue to produce signal.
tags:
  - >-
    Simon Willison: "Unreasonable Effectiveness of HTML" — time to ditch
    Markdown for Claude output
  - >-
    Mozilla × Claude Mythos: 271 Firefox vulnerabilities found, fixed in
    Firefox 150
  - 'Karpathy: Sequoia Ascent 2026 recap, Software 3.0 thesis'
  - 'Steipete: imsg 0.6/0.7 ships, OpenClaw Codex tooling open-sourced'
  - 'Matt Pocock: /handoff is the new favourite, skills repo holds momentum'
  - >-
    Jerry Liu: "the scaffolding layer is collapsing", context quality is the
    new moat
  - 'Theo: State of AI for Web Devs 2026 survey is open'
  - 'Willison on AI-run businesses: keep humans in the loop for outbound actions'
  - 'Boris Cherny: Claude Code written by Claude Code, Opus 4.7 dogfooding'
  - Other items worth noting
---
# 2026-05-09 — HTML Over Markdown, Mythos Hunts Firefox Bugs & Karpathy's Software 3.0

## Simon Willison: "Unreasonable Effectiveness of HTML" — time to ditch Markdown for Claude output

Simon Willison's May 8 post highlights a piece by **Thariq Shihipar** (@trq212, on the Claude Code team at Anthropic) arguing that **HTML should replace Markdown as the default output format** when working with Claude Code. The core argument: HTML enables richer formatting, visual annotations, color-coding, and interactive artifacts that Markdown simply can't match.

- Willison: "I've been defaulting to asking for most things in Markdown since the GPT-4 days, when token limits made Markdown's efficiency important. **Thariq's piece has caused me to reconsider this approach**, especially for output." — [simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/)
- This builds on Thariq's earlier viral thread: "Claude Code is All You Need" — where he argued that the team uses Claude Code as a general-purpose agent, not just for coding — [x.com/trq212/status/1944877527044120655](https://x.com/trq212/status/1944877527044120655)
- Thariq also captured the Anthropic posture at Code with Claude: "We're winding back our peak hours limit reduction and doubling 5 hour limits. Excited to partner with SpaceX to bring you more compute and we'll keep pushing to bring you the best coding agent in the world." — [x.com/trq212/status/2052065936585457982](https://x.com/trq212/status/2052065936585457982)

## Mozilla × Claude Mythos: 271 Firefox vulnerabilities found, fixed in Firefox 150

The biggest security-meets-AI story of the week is still producing discussion. **Mozilla ran an agentic harness powered by Claude Mythos Preview** across Firefox's codebase and found **271 latent security bugs**, all fixed in Firefox 150.

- Mozilla Hacks technical writeup: [hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
- Simon Willison's link post: [simonwillison.net/2026/May/7/firefox-claude-mythos/](https://simonwillison.net/2026/May/7/firefox-claude-mythos/)
- SecurityWeek coverage: [securityweek.com/claude-mythos-finds-271-firefox-vulnerabilities/](https://www.securityweek.com/claude-mythos-finds-271-firefox-vulnerabilities/)

The bugs found include some genuinely old ones:

- A **15-year-old flaw** in the HTML `<legend>` element
- A **20-year-old XSLT bug** involving reentrant `key()` calls
- A **race condition over IPC** allowing a compromised content process to manipulate IndexedDB refcounts and trigger a use-after-free
- A **buffer over-read** during HTTPS RR and ECH parsing triggered by simulating a malicious DNS server

More than 40 CVEs were addressed in Firefox 150, but only three are directly credited to Claude in the official advisory (CVE-2026-6746, CVE-2026-6757, CVE-2026-6758). The key methodological shift: unlike earlier AI models that produced floods of false positives, the agentic system **builds and runs its own test cases** to verify suspected bugs before reporting them.

Bruce Schneier's take: [schneier.com/blog/archives/2026/04/claude-mythos-has-found-271-zero-days-in-firefox.html](https://www.schneier.com/blog/archives/2026/04/claude-mythos-has-found-271-zero-days-in-firefox.html)

## Karpathy: Sequoia Ascent 2026 recap, Software 3.0 thesis

Karpathy published a recap of his **fireside chat at Sequoia Ascent 2026** (with Stephanie Zhan), laying out his "Software 3.0" thesis and why LLMs are about far more than speeding up existing workflows.

- Full recap: [karpathy.bearblog.dev/sequoia-ascent-2026/](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- Original thread: [x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)

Key arguments:

1. **LLMs are a new programmable layer for digital work** — no longer just chatbots or autocomplete. Humans "program" LLMs through prompts, context, tools, examples, memory, and instructions.
2. **The unit of programming changed** — from typing lines of code to delegating larger "macro actions": implement this feature, refactor this subsystem, research this library, set up this service.
3. **Three "new horizon" use cases** beyond coding — Karpathy described apps that can be "fully engulfed" by LLMs (menugen example), entirely new interaction paradigms, and agent-native businesses.
4. **Coding agents crossed a threshold around December 2025** — "the generated chunks got larger, more coherent, and more reliable."
5. **Deep technical expertise is *more* of a multiplier now**, not less — "prompters is doing it a disservice and is imo a misunderstanding... at the top tiers, deep technical expertise may be *even more* of a multiplier than before because of the added leverage." — [x.com/karpathy/status/2026743030280237562](https://x.com/karpathy/status/2026743030280237562)

Shruti Gandhi (Array VC) distilled the founder takeaways: "Training your agents with your domain-specific data — big labs trained AI on math and code, they didn't train it on your industry knowledge." — [x.com/atShruti/status/2049992301934764501](https://x.com/atShruti/status/2049992301934764501)

## Steipete: imsg 0.6/0.7 ships, OpenClaw Codex tooling open-sourced

Peter Steinberger continues shipping at an impossible pace:

- **imsg 0.6 + 0.7** are live — "Private API bridge landed, Watch/history reliability fixes, Better chat + account diagnostics, Long fallback messages decode correctly. **Private APIs, public receipts.**" — [x.com/steipete/status/2051905175355351440](https://x.com/steipete/status/2051905175355351440)
- The **OpenClaw Codex tooling** open-sourced on May 3 — "This is the most useful tooling I built for OpenClaw to date. It's open source, **runs on codex and you can fork and use it for any repo.** For all the hard working OSS folks that drown in issues and PRs, this is for you." — [x.com/steipete/status/2051020548335874369](https://x.com/steipete/status/2051020548335874369)
- **ClawSweeper 0.2.0** handles the full loop: issue → @clawsweeper fix/build → guarded PR → review → repair → re-review → automerge.
- **Summarize 0.13** also shipped: local video slides (`--slides`), more model backends (GitHub Copilot), better GPT-5.4 support — [x.com/steipete/status/2041669438882087180](https://x.com/steipete/status/2041669438882087180)
- OpenClaw releases continue at a rapid clip: v2026.5.2, v2026.5.5, v2026.5.7 all in the past week — [github.com/openclaw/openclaw/releases](https://github.com/openclaw/openclaw/releases)

## Matt Pocock: /handoff is the new favourite, skills repo holds momentum

Pocock's skills ecosystem continues to be the center of gravity for Claude Code workflow innovation:

- "/handoff might be my new favourite skill" — [x.com/mattpocockuk/status/2052489881088049407](https://x.com/mattpocockuk/status/2052489881088049407). The skill compacts the current conversation into a handoff document for a fresh agent to pick up, suggests skills for the next session, and avoids duplicating content already captured in PRDs/plans/ADRs/issues — [github.com/mattpocock/skills/.../handoff/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/in-progress/handoff/SKILL.md)
- The daily-driver workflow he keeps refining: `/grill-with-docs → /handoff to /prototype → /to-prd → /to-issues → npm run sandcastle → /improve-codebase-architecture` — [x.com/mattpocockuk/status/2052042499053453330](https://x.com/mattpocockuk/status/2052042499053453330)
- **Sandcastle** as the proof case: "889 commits, none of them hand-coded" — [x.com/mattpocockuk/status/2049942742743019528](https://x.com/mattpocockuk/status/2049942742743019528)
- The skills repo trajectory: 9K+ stars, with the personal-`.claude/`-as-public-asset format becoming a durable pattern of the 2026 skills directory cycle
- Course feedback synthesis: "How dissatisfied people are with frameworks like BMAD, GSD, Spec-Kit. **Giving away control of context to a framework makes things a lot harder to debug. My advice: own the process.**" — [x.com/mattpocockuk/status/2044029094942159126](https://x.com/mattpocockuk/status/2044029094942159126)

## Jerry Liu: "the scaffolding layer is collapsing", context quality is the new moat

Jerry Liu's VentureBeat interview is circulating heavily this week. The LlamaIndex CEO publicly acknowledges the forces disrupting his company's original product:

- **"The AI scaffolding layer is collapsing"** — the indexing layers, query engines, retrieval pipelines, and carefully orchestrated agent loops that devs once needed are being made redundant by more capable agent loops — [venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- **95% of LlamaIndex code is now AI-generated** — "Engineers are not actually writing real code... typing in natural language"
- The pivot thesis: **context quality is the new competitive edge**. Agents need to decipher file formats to extract the right information; higher accuracy and cheaper parsing becomes key
- Coding agents like Claude Code and Cursor are **centralizing around filesystems as core abstractions** — storing conversation histories in searchable files, using file-based retrieval with semantic search instead of traditional RAG
- LlamaIndex's bet: agentic document processing via OCR (LlamaParse), because core enterprise data is locked up in various file format containers
- **LlamaParse Mobile** (iOS + Android, Expo/RN) shipped alongside the AI Dev '26 talk

Also: [ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat...](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w)

## Theo: State of AI for Web Devs 2026 survey is open

Theo opened the second edition of the **State of AI (for Web Devs) 2026 survey**, run by Devographics, covering April 10 to May 10:

- "State of AI (for web devs) 2026 is open." — [x.com/theo/status/2041715755306389780](https://x.com/theo/status/2041715755306389780)
- Survey link: [survey.devographics.com/en-US/survey/state-of-ai/2026](https://survey.devographics.com/en-US/survey/state-of-ai/2026)
- On the 2025 results: "Over half of respondents watch my videos 😳" — [x.com/theo/status/1912883664007930314](https://x.com/theo/status/1912883664007930314)

Theo's broader takes on the current moment: **70–90% of code is now AI-generated** in his own work and in teams he consults for. He also flagged GPT-5.5 as a "first model on this new pre-training data" — sound architecture, incomplete behavior-tuning.

His compute bottleneck explainer video, recorded *before* the Anthropic/SpaceX announcement, continues to age well — [x.com/theo/status/2052114791045668894](https://x.com/theo/status/2052114791045668894)

## Willison on AI-run businesses: keep humans in the loop for outbound actions

Simon Willison weighed in on the AI-run cafe experiment in Stockholm (Andon Labs' "Mona" AI that ordered 120 eggs despite no stove, and 6,000 napkins):

- "AI-run business experiments are interesting and fun up to the point where they waste the time of humans who haven't opted into the experiments — I think they need to keep their own **human operators in the loop for outbound actions that affect other people**" — [x.com/simonw/status/2051788176071745592](https://x.com/simonw/status/2051788176071745592)
- Blog post with the cafe details: [simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/)

Related, Willison on the agent safety front from the same thread cycle:

- On an agent wiping a production environment: "The two lessons I see are: 1. Don't run agents anywhere they might be able to access production environment credentials — it's on you to know which credentials those are. 2. Keep tested backups that are independent from your production host" — [x.com/simonw/status/2048598378171572332](https://x.com/simonw/status/2048598378171572332)
- On OpenAI Codex vs Claude Code: "My hunch for now is that this was an ill-considered test... If they do go ahead I expect OpenAI Codex to catch Claude Code very fast" — [x.com/simonw/status/2046735565555630512](https://x.com/simonw/status/2046735565555630512)

## Boris Cherny: Claude Code written by Claude Code, Opus 4.7 dogfooding

Boris Cherny's post-conference commentary continues to produce signal:

- **Claude Code is now "100% written by Claude Code"** — [officechai.com/ai/claude-code-is-now-100-written-by-claude-code-creator-boris-cherny/](https://officechai.com/ai/claude-code-is-now-100-written-by-claude-code-creator-boris-cherny/)
- Opus 4.7 dogfooding review: "**It feels more intelligent, agentic, and precise than 4.6. It took a few days for me to learn how to work with it effectively.**" — [x.com/bcherny/status/2019471487833706769](https://x.com/bcherny/status/2019471487833706769)
- At Code with Claude: "Everything we are seeing today still feels magical to me, and I work on Claude Code every day" — [simonwillison.net/2026/May/6/code-w-claude-2026/](https://simonwillison.net/2026/May/6/code-w-claude-2026/)
- Impact stats: 259 PRs in one month, 497 commits, 40K lines added, 38K removed — every line written by Claude Code + Opus 4.5
- Demand context: "Demand has outpaced our capacity recently, and we know it's been frustrating." — [x.com/bcherny/status/2052070555151708564](https://x.com/bcherny/status/2052070555151708564)

## Other items worth noting

**Mitsuhiko (Armin Ronacher)** — ongoing AI code quality concerns:
- His retweeted observation on code quality degradation remains the most-cited counterpoint to AI optimism: "There will be more of this. And as much as we're joking about it, **we're seeing a massive degradation of code quality right now** and we're increasingly only catching it way too late." (RT'd by Jeremy Howard) — [x.com/jeremyphoward/status/2036507393337729404](https://x.com/jeremyphoward/status/2036507393337729404)
- "Agent Psychosis: Are We Going Insane?" blog post: AI agent workflows create a dopamine-driven loop that feels productive but often produces low-quality output — [lucumr.pocoo.org/2026/1/18/agent-psychosis/](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
- On inference engine source code: "**Terrible decisions upstream lead to terrible consequences downstream. I hate everything.**" — [x.com/mitsuhiko/status/2052086500615925922](https://x.com/mitsuhiko/status/2052086500615925922)
- DeepSeek 4 Flash local inference engine (`ds4`) for Metal on GitHub — [github.com/mitsuhiko/ds4](https://github.com/mitsuhiko/ds4)

**Swyx** — AI Engineer community and Latent Space expansion:
- Live-tweeting Code with Claude: capturing bcherny's bangers — "the future is more async agents", "routines are higher order prompts", "the capability is already here — the gap left is how to put it to work" — [x.com/latentspacepod/status/2052068066167816369](https://x.com/latentspacepod/status/2052068066167816369)
- AI Engineer community now reaches **1.1M+ AI engineers/month**, 7+ conferences planned for 2026
- Latent Space podcast featured Simon Last + Sarah Sachs from Notion: "Notion has rebuilt Notion AI five times" — [x.com/swyx/status/2044220922387984408](https://x.com/swyx/status/2044220922387984408)
- "Vibe designed" a 6,000-person conference website at a climbing gym "without reading a single line of code" — [x.com/swyx/status/2021498862012334274](https://x.com/swyx/status/2021498862012334274)

**Opus 4.7 quick reference** (launched at Code with Claude, still relevant context):
- 13% resolution lift over Opus 4.6 on 93-task coding benchmark
- High-res vision: images up to 2,576px on the long edge (~3.75 megapixels), 3x previous
- New `effort` parameter with `xhigh` level for coding/agentic use cases
- Task budgets for estimating token spend across full agentic loops
- Better file-system-based memory for agent scratchpads — [anthropic.com/news/claude-opus-4-7](https://www.anthropic.com/news/claude-opus-4-7)

**Simon Willison's Heavybit podcast** (May 6):
- "The AI Coding Paradigm Shift" — his realization that vibe coding and agentic engineering have started to converge in his own work — [heavybit.com/.../ep-9-the-ai-coding-paradigm-shift-with-simon-willison](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison)
- Blog companion post: [simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)

---

*Note: @LLMJunky's account could not be accessed or found via web search for recent content. Nitter instances (nitter.net, xcancel.com, nitter.poast.org) are all returning 403 Forbidden as of today — Twitter/X profile scraping continues to degrade.*
