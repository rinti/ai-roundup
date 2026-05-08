# 2026-05-08 — Dreaming Backlash Intensifies, Colossus Environmental Reckoning & the Framework Era Is Over

## Simon Willison: Under-reported details of the xAI/Anthropic deal

Simon Willison published his deep-dive "Notes on the xAI/Anthropic data center deal" late on May 7, pulling together the fine print that got buried under the headline spectacle. The three under-reported details he flags:

1. **Anthropic gets Colossus 1, xAI keeps the larger Colossus 2.** The deal is not symmetric — xAI moved training to Colossus 2 and is essentially subletting the older facility.
2. **Colossus 1 has a terrible environmental record.** The gas turbines installed to power the facility initially ran without Clean Air Act permits or pollution control devices — they got away with it by classifying them as "temporary." Credible reports link the site to increases in hospital admissions relating to low air quality in Memphis. The NAACP and Earthjustice have active lawsuits against xAI for illegal pollution from the data center power plant. One estimate puts the facility's potential NOx emissions at over 1,700 tons/year — likely the largest industrial source in the greater Memphis area.
3. **xAI just shut down a bunch of older models on 2 weeks' notice**, raising questions about platform reliability for anyone building on their stack.

- simonw: "Under-reported details of the xAI/Anthropic Colossus data center deal: Anthropic get Colossus 1 but xAI keep using the larger Colossus 2, Colossus 1 has a REALLY bad environmental record, and xAI just shut down a bunch of older models on 2 weeks' notice" — [x.com/simonw/status/2052436629365948920](https://x.com/simonw/status/2052436629365948920)
- Full blog post: [simonwillison.net/2026/May/7/xai-anthropic/](https://simonwillison.net/2026/May/7/xai-anthropic/)
- Earthjustice lawsuit coverage: [earthjustice.org/press/2026/xai-sued-for-illegal-power-plant](https://earthjustice.org/press/2026/xai-sued-for-illegal-power-plant)
- E&E News / Politico: [Anthropic moves into Musk's Memphis data center](https://www.eenews.net/articles/anthropic-moves-into-musks-memphis-data-center/)

This is the environmental angle that nobody in the Code with Claude euphoria wanted to talk about. Willison's framing — matter-of-fact, link-heavy, no grandstanding — is exactly the kind of thing that makes it harder to ignore.

## "Dreaming" backlash goes mainstream

The Dreaming announcement from Code with Claude on May 6 is now generating a second wave of coverage — and this wave is almost entirely critical. The May 7–8 press cycle has shifted from "cool new feature" to "why are you humanizing machines?"

- **Eastern Herald**: "Anthropic's 'Dreaming' AI Sparks New Fear Over Humanized Machines" — the piece quotes an unnamed AI researcher: "This is not dreaming in any meaningful neurological sense. It's statistical pattern analysis wrapped in emotionally resonant branding." — [easternherald.com/2026/05/07/anthropic-dreaming-ai-humanized-machines-backlash/](https://easternherald.com/2026/05/07/anthropic-dreaming-ai-humanized-machines-backlash/)
- **Digital Trends**: "Anthropic just taught Claude to dream between tasks, and it makes agents meaningfully smarter" — the more positive framing, but even they lead with the controversy — [digitaltrends.com/computing/anthropic-just-taught-claude-to-dream-between-tasks](https://www.digitaltrends.com/computing/anthropic-just-taught-claude-to-dream-between-tasks-and-it-makes-agents-meaningfully-smarter/)
- **XDA Developers**: "Claude's leaked dreaming feature is now live, and it lets agents learn from their own mistakes" — noting the feature was first spotted in leaks — [xda-developers.com](https://www.xda-developers.com/claudes-leaked-dreaming-feature-is-now-live-and-it-lets-agents-learn-from-their-own-mistakes/)
- **The New Stack**: "Anthropic will let its managed agents dream" — the most technical breakdown of the three new Managed Agent features (dreaming, outcomes, multi-agent orchestration) — [thenewstack.io/anthropic-managed-agents-dreaming-outcomes/](https://thenewstack.io/anthropic-managed-agents-dreaming-outcomes/)
- **Slashdot**: "Claude Managed Agents Can Engage In a 'Dreaming' Process To Preserve Memories" — [slashdot.org](https://slashdot.org/story/26/05/06/1714217/claude-managed-agents-can-engage-in-a-dreaming-process-to-preserve-memories)
- **Exit Fund Weekly** goes hardest: "Anthropic's 'Dream' Feature Can Push AI Beyond Human Control" — [exitfundweekly.substack.com](https://exitfundweekly.substack.com/p/anthropics-dream-feature-can-push)

The technical reality: dreaming doesn't modify model weights. The agent writes plain-text notes and structured "playbooks" that future sessions can reference. It's memory consolidation, not self-improvement in the neural-net sense. But the branding has made it nearly impossible to have that conversation without first litigating the naming choice.

Yesterday's roundup captured the developer-level thread reactions (auditable memory, wrong turns being valuable, hallucination concerns). Today's coverage is the mainstream media catching up — and they're focusing entirely on the anthropomorphism angle rather than the practical questions.

## Simon Willison: "Vibe coding and agentic engineering are getting closer than I'd like"

Willison's May 6 blog post continued to circulate heavily through May 7–8. The core confession: he realized during a Heavybit podcast recording that **vibe coding and agentic engineering have started to converge in his own work** — a distinction he'd previously considered sharp and important.

His original framing: "If you're building software for other people, vibe coding is grossly irresponsible because it's other people's information. Other people get hurt by your stupid bugs. You need to have a higher level than that." Agentic engineering is where "you are a professional software engineer. You understand security and maintainability and operations and performance and so forth. You're using these tools to the highest of your own ability."

The uncomfortable realization: the gap between the two is narrowing in practice, even for someone who takes the distinction seriously.

- Blog post: [simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)
- simonw: "I was talking with @josephruscio on the @heavybit podcast the other day when I realized that vibe coding and agentic engineering have started to blur a bit in some of my work" — [x.com/simonw/status/2052040005275779552](https://x.com/simonw/status/2052040005275779552)
- Podcast episode: [Heavybit High Leverage Ep. #9](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison)

Also from Willison today: **llm-gemini 0.31** released with support for the Gemini 3.1 Flash-Lite Preview model — [simonwillison.net/2026/May/7/llm-gemini/](https://simonwillison.net/2026/May/7/llm-gemini/).

## Jerry Liu: "The framework era is over" — context quality is the new moat

Jerry Liu's thesis from earlier this week continues to get heavy pickup. VentureBeat ran a major feature: "The AI scaffolding layer is collapsing. LlamaIndex's CEO explains what survives."

The argument: the scaffolding layer developers once needed to ship LLM apps — indexing layers, query engines, retrieval pipelines, orchestrated agent loops — is collapsing. Three forces are doing it simultaneously: coding agents that can generate custom pipelines on demand, MCP standardizing tool integration, and purpose-built agent SDKs replacing heavyweight frameworks.

What survives? **Context engineering** — curating and structuring the data fed into models. The competitive moat moves from "how you wire up the agent" to "what data the agent gets to see."

- VentureBeat: [The scaffolding era is over. LlamaIndex says context is the new moat](https://venturebeat.com/infrastructure/the-ai-scaffolding-layer-is-collapsing-llamaindexs-ceo-explains-what-survives)
- AI Market Watch: [LlamaIndex CEO argues context quality is the new moat as scaffolding era ends](https://www.ai-market-watch.com/news/llamaindex-ceo-argues-context-quality-is-the-new-moat-as-scaffolding-era-ends-6urf7w)
- jerryjliu0: "AI can't read PDFs" keynote deck from AI Dev '26 now public — "AI agents are going to automate huge amounts of knowledge work, but knowledge work depends on data, a lot of that data is in documents/PDFs, and existing OCR tools suck." — [x.com/jerryjliu0/status/2052085729241731268](https://x.com/jerryjliu0/status/2052085729241731268)

## Karpathy: Sequoia Ascent fireside chat — "LLMs are about more than speeding up coding"

Karpathy's Sequoia Ascent 2026 fireside chat from ~a week ago continues circulating as the canonical "what should founders be thinking about" piece. His three examples of new horizons beyond just making existing work faster:

1. **menugen** — he built an app that takes a picture of a restaurant menu and generates images of the dishes. Then he watched someone feed a menu photo directly to Gemini, which overlaid images onto the pixels without any app at all. The app got "engulfed" by the model. The lesson: some apps are just thin wrappers around a capability that the model can do natively.
2. **Bespoke software** — highly personalized apps that only serve one person's workflow. Not economically viable to hand-build, but trivial to vibe-code.
3. **Programming languages and formal methods** — LLMs change the entire constraints landscape of software. The rising momentum behind C→Rust ports and growing interest in formal verification are early signals.

On agentic engineering vs vibe coding: "The best engineers will not be the ones who write every line of code. They will be the ones who can direct agents without letting quality collapse."

- karpathy: "Fireside chat at Sequoia Ascent 2026 from a ~week ago. Some highlights: The first theme I tried to push on is that LLMs are about a lot more than just speeding up what existed before" — [x.com/karpathy/status/2049903821095354523](https://x.com/karpathy/status/2049903821095354523)
- Written summary: [karpathy.bearblog.dev/sequoia-ascent-2026/](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- Analytics Drift recap: [Karpathy Declares Vibe Coding Obsolete, Introduces Agentic Engineering](https://analyticsdrift.com/andrej-karpathy-agentic-engineering-software-3/)

## Matt Pocock: Skills hit 48K stars, "AI Coding Dictionary" shipping, course teased

Pocock's skills repo trajectory keeps climbing. The repo crossed **48,564 GitHub stars** in late April after a +6,175 star day, held the #2 spot on GitHub trending for six consecutive days, and the wave hasn't crested. The May 7 "At what point do I start being 'that bald guy with the skills'" post captures the vibe.

Notable developments still reverberating:

- **/handoff** shipped and is "very, very good" — enables context transfer between skills mid-session (e.g., /grill-with-docs → /prototype → back to grilling → /to-prd) — [x.com/mattpocockuk/status/2052043231106367685](https://x.com/mattpocockuk/status/2052043231106367685)
- **The "AI Coding Dictionary"** is shipping — Pocock crowd-sourced definitions for it. Skills info: [aihero.dev/skills](https://www.aihero.dev/skills)
- Course teased: "Sounds mad, but maybe I should just make a course about writing great skills? I.e. for actual life/work productivity, not just dev. Breaking down daily tasks into skills. Turning HITL tasks into AFK ones. Creating a working language with the agent." — [x.com/mattpocockuk/status/2052132647770452286](https://x.com/mattpocockuk/status/2052132647770452286)
- The QA insight still landing: "Whenever you're QA-ing code produced by an AFK agent, you're not just QA-ing the code... you're also QA-ing the agent itself. So, fixes must land in both in the same commit." — [x.com/mattpocockuk/status/2051950382906016019](https://x.com/mattpocockuk/status/2051950382906016019)
- Medium writeup gaining traction: [Matt Pocock's 5 Claude Code skills made me rewrite how I work with AI agents](https://adityakumarpuri.medium.com/matt-pococks-5-claude-code-skills-made-me-rewrite-how-i-work-with-ai-agents-d71853c3056c)

## Boris Cherny at AI Ascent: "I haven't written a line of code in 2026"

Cherny's Sequoia AI Ascent talk with Lauren Reeder continues to be the most-shared developer talk of the week. The headline claims:

- **100% AI-generated code for months**, zero manual edits, 20+ PRs a day from his phone
- The Claude Code team at Anthropic operates as an experiment: every member — product managers, designers, data scientists, finance — writes code using AI
- The competitive frontier is no longer technical skills but **the speed at which organizations can restructure processes around AI capabilities**
- Prediction: software development will become completely democratized, comparable to the printing press

The DataChaz summary thread keeps accumulating engagement: "The creator of Claude Code hasn't written a single line of code in 2026" — [x.com/DataChaz/status/2051770066912379309](https://x.com/DataChaz/status/2051770066912379309)

Video: [Anthropic's Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)

## Claude Code v2.1.132 ships

The post-conference release dropped on May 6 with a mix of quality-of-life improvements and bug fixes:

- **/model picker** now lists models from your gateway's `/v1/models` endpoint when `ANTHROPIC_BASE_URL` points at an Anthropic-compatible gateway
- **`claude project purge [path]`** — delete all Claude Code state for a project (transcripts, tasks, file history, config entry) with `--dry-run`, `-y/--yes`, `-i/--interactive`, and `--all` options
- **ANTHROPIC_BEDROCK_SERVICE_TIER** env var for selecting Bedrock service tiers (default, flex, priority)
- Pasting a **PR URL into /resume** now finds the session that created it (GitHub, GHE, GitLab, Bitbucket)
- Fixes: crash loops when piping large input to `claude -p`, long URLs not individually clickable, MCP tool results dropping images, sessions on 1M-context models falsely blocked
- **/loop** improved: Esc now cancels pending wakeups, /extra-usage works from Remote Control clients

Full changelog: [github.com/anthropics/claude-code/releases](https://github.com/anthropics/claude-code/releases)

## Mitsuhiko: inference engines, data centers, and "this is your codebase on clankers"

Armin Ronacher had a productive 48 hours of commentary. The standout thread was badlogicgames noting that mitsuhiko "had his first look into the source code of a bunch of inference engines... and like me a few months ago, he now has stared into the abyss." Mitsuhiko's reply: **"Terrible decisions upstream lead to terrible consequences downstream. I hate everything."** — [x.com/mitsuhiko/status/2052086500615925922](https://x.com/mitsuhiko/status/2052086500615925922)

Also still reverberating:
- His May 4 blog post "Content for Content's Sake" about LLMs degrading online interactions — "what is being damaged are social interactions across the board and the assumption that when someone writes to you, there is a person on the other side who has put some care into the interaction" — [lucumr.pocoo.org/2026/5/4/content-for-contents-sake/](https://lucumr.pocoo.org/2026/5/4/content-for-contents-sake/)
- Data center scale observation: "That Utah data center project is 40,000 acres (basically size of Liechtenstein). 9 GW of power, that is more than twice the total energy usage of all of Utah today." — [x.com/mitsuhiko/status/2052013442010148985](https://x.com/mitsuhiko/status/2052013442010148985)
- Coinbase layoff rant: "Why does everybody want managers to be ICs? Please someone explain this to me from first principles." — [x.com/mitsuhiko/status/2051686334289285155](https://x.com/mitsuhiko/status/2051686334289285155)

## swyx: "Agents for Everything Else" thesis, Code with Claude live coverage

Swyx's AI Engineer Europe talk "Agents for Everything Else" continues to define the 2026 frame: **while 2025 was the year of coding agents, 2026 is coding agents breaking containment to do everything else.** His key revelation: AI agents were increasing productivity by making work more enjoyable for humans — more animations, more polish, more output from his 9-person team that generates over $9M.

From Code with Claude on May 6, swyx provided the best live coverage via the Latent Space account: "omg @bcherny with banger quotes — 'the future is more async agents… this is why we emphasize verification' — 'if you're familiar with higher order functions, routines are higher order prompts'" — [x.com/latentspacepod/status/2052068066167816369](https://x.com/latentspacepod/status/2052068066167816369)

- Agents for Everything Else talk: [tldrecap.tech/posts/2026/aie-europe/ai-engineers-agent-productivity/](https://tldrecap.tech/posts/2026/aie-europe/ai-engineers-agent-productivity/)

## Steipete: ClawSweeper ships, Summarize 0.13 goes to homebrew-core

Steipete's ship cadence hasn't slowed since joining OpenAI. The ClawSweeper full-loop announcement — issue → @clawsweeper fix/build → guarded PR → review → repair → re-review → automerge — continues to be the reference implementation for "how to automate OSS maintenance with agents":

- "This is the most useful tooling I built for OpenClaw to date. It's open source, runs on codex and you can fork and use it for any repo." — [x.com/steipete/status/2051020548335874369](https://x.com/steipete/status/2051020548335874369)
- **Summarize 0.13** graduated from his personal Homebrew tap to **official homebrew-core** — `brew install summarize`. New: local video slides (--slides), GitHub Copilot model backend, GPT-5.4 support, HLS detection — [x.com/steipete/status/2041669438882087180](https://x.com/steipete/status/2041669438882087180)
- OpenClaw v2026.5.7 released on May 7: [github.com/openclaw/openclaw/releases/tag/v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)

## Theo: Chrome ships Prompt API over everyone's objections

Theo's take on Chrome 148 shipping the Prompt API despite opposition from Mozilla, WebKit, Microsoft, and the W3C TAG remains the most shared web-standards take of the week: "I have historically defended Chrome for pushing web standards forward. This is them doing the opposite. I dislike this." — [x.com/theo/status/2052277935768551609](https://x.com/theo/status/2052277935768551609)

The Prompt API gives web developers direct access to Gemini Nano, Chrome's on-device language model. Pages can run text, image, and audio through a local model without sending data to a server. Mozilla's formal opposition: they fear wiring an AI API into Chrome will make the web less open.

- HN thread: [Mozilla's opposition to Chrome's Prompt API](https://news.ycombinator.com/item?id=47959463)
- Chrome 148 release notes: [web-standards.dev/news/2026/05/chrome-148/](https://web-standards.dev/news/2026/05/chrome-148/)

## Smaller items

- **Coder Agents beta launched** — self-hosted, AI-model-agnostic coding agents for enterprise. The pitch: full infrastructure control + any model. — [GlobeNewsWire](https://www.globenewswire.com/news-release/2026/05/06/3288916/0/en/Coder-Sets-a-New-Standard-for-AI-Coding-with-Self-Hosted-AI-Model-Agnostic-Coder-Agents.html)
- **Microsoft published "The state of global AI diffusion in 2026"** — broad policy analysis of how AI is spreading across economies — [blogs.microsoft.com](https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/)
- **State of AI: May 2026** from Air Street Press dropped — the monthly pulse check on the field — [press.airstreet.com](https://press.airstreet.com/p/state-of-ai-may-2026)
- **Karpathy silent again today** — no new posts from May 8.

## Outside the agent/code beat

- **Anthropic's "Dreaming" terminology debate** is now a broader conversation about tech companies anthropomorphizing AI — it touches Mitsuhiko's "Content for Content's Sake" thesis about social trust erosion. When you name a cron job "dreaming," you're participating in the same dynamic he's writing about: blurring the line between human and machine communication in ways that damage shared understanding.
- **Coinbase's 14% layoff letter** continues to generate discussion, especially Mitsuhiko's "why does everybody want managers to be ICs?" pushback and the broader pattern of companies justifying layoffs by claiming AI replaces management overhead.
