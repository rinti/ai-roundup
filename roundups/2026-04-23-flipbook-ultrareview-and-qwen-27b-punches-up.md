# 2026-04-23 — Flipbook's live-rendered UI, Claude Code /ultrareview, and Qwen3.6-27B punches up

Quieter day than yesterday's Claude Code pricing fiasco, but the signal-to-hype ratio is better. Three threads worth your time: a "pixel-streaming" UI prototype that Karpathy boosted, a new agentic review command in Claude Code, and Qwen shipping a 27B dense model that beats their own 397B MoE on coding benchmarks.

## Flipbook: no HTML, no layout engine, just pixels from a model

[Karpathy RT'd](https://x.com/zan2434/status/2046982383430496444) Zain Shah's (`@zan2434`) Flipbook prototype — built with Eddie Jiao and Drew O'Carr. The pitch:

> "Imagine every pixel on your screen, streamed live directly from a model. No HTML, no layout engine, no code. Just exactly what you want to see."

LLMJunky [called it](https://x.com/LLMJunky/status/2047014570527469688) "NotebookLM on steroids" and speculated it's the concept MACROHARD is chasing: "If this is indeed a working prototype, it is live-streaming every pixel directly to your screen in real-time. This type of interactivity is honestly amazing." Worth watching the thread video attached to Zain's post — it's the cleanest demo yet of the "model IS the UI" idea that's been simmering since Imagen video and Veo.

If you're thinking about agentic UX, this is the orthogonal take to the "agents drive an existing browser" orthodoxy.

## Claude Code ships /ultrareview — fleet of cloud bug-hunters

[ClaudeDevs announced](https://x.com/ClaudeDevs/status/2046999435239133246) (RT'd by trq212): "New in Claude Code: /ultrareview (research preview) runs a fleet of bug-hunting agents in the cloud. Findings land in the CLI or Desktop automatically. Run it before merging critical changes — auth, data migrations, etc. Pro and Max users get 3 free reviews through 5/5."

This is exactly the "spawn N reviewers, have them race to find a bug" pattern people have been hand-rolling with subagents for weeks. Having it as a first-class slash command matters because:
- It normalizes "review ≠ a single pass from a single model"
- The free-tier-through-5/5 window is a clear signal Anthropic wants real usage data before charging
- It leans hard into the cloud side — local CLI just tails findings

Adjacent: Boris Cherny (`@bcherny`) confirmed [Claude Code won a Webby](https://x.com/bcherny/status/2047004804283773321) in the AI Features Innovation / Best Product or Service category. Same product, good week for the team, rough week for their pricing comms.

## Shopify's AI-native engineering — swyx's new Latent Space episode

swyx dropped [a long conversation](https://x.com/latentspacepod/status/2047037776399614232) with Shopify CTO Mikhail Parakhin (`@MParakhin`) about their AI rollout. The hook on the chart he posted ([tweet](https://x.com/swyx/status/2047077765581816105)):

> "Add this to the growing list of 'WTF happened in Dec 2025' charts. This plots token usage across all the technical staff of shopify — the whole time they had unlimited token budget, but something cracked recently and the slope is both changing and percentile deltas are widening a concerning amount."

What the episode covers (from Parakhin's [repost](https://x.com/MParakhin/status/2047030488708301053)):
- **SimGym**: simulates Shopify customers using historical data at scale
- **Tangle** and **Tangent**: internal experimentation tooling that's changing how they run tests
- **30% month-on-month merge growth** — the claim is that PR review + CI/CD is now the real bottleneck in AI-coded development, not code generation
- **Why larger models are cheaper long-run** — against the usual "use smaller, specialized models" consensus
- 100% AI adoption across engineering, unlimited tokens

Podcast page: [latent.space/p/shopify](https://www.latent.space/p/shopify). YouTube: [video](https://www.youtube.com/watch?v=RrkGoX3Cw7o).

The widening percentile delta is the piece to internalize — the gap between average and top-decile token users is blowing out. If that's real across other AI-native shops, it's the best leading indicator yet that "AI makes senior engineers disproportionately more productive" is a provable thing, not a vibe.

## Qwen3.6-27B: 27B dense beats 397B MoE on coding

[Simon Willison](https://x.com/simonw/status/2046995047720378458) ran his pelican-on-a-bicycle test: "The new Qwen3.6-27B just gave me definitely the best pelican riding a bicycle I've had from a 16.8GB model file!" Write-up at [simonwillison.net/2026/Apr/22/qwen36-27b/](https://simonwillison.net/2026/Apr/22/qwen36-27b/).

The benchmark numbers ([surfaced by Markets & Mayhem](https://x.com/Mayhem4Markets/status/2046944011328393233), RT'd by LLMJunky):

| Benchmark             | Qwen3.6-27B (dense) | Qwen3.5-397B-A17B (MoE) |
|-----------------------|---------------------|-------------------------|
| SWE-bench Verified    | 77.2                | 76.2                    |
| SWE-bench Pro         | 53.5                | 50.9                    |
| Terminal-Bench 2.0    | 59.3                | 52.5                    |
| SkillsBench Avg5      | 48.2                | 30.0                    |
| GPQA Diamond          | 87.8                | —                       |

LLMJunky's [take](https://x.com/LLMJunky/status/2046960231377174736): "These are Opus 4.5 numbers on a model you might even be able to run on some edge devices. 2026 is the year of the small models." Multimodal, thinking + non-thinking modes, live on HuggingFace. If you have 32GB VRAM, you can run it locally.

## LiteParse: PDF parser with zero ML

[Jerry Liu announced](https://x.com/jerryjliu0/status/2047041129326194882) LiteParse — LlamaIndex's new OSS document parser. The unusual choice: "It doesn't use VLMs or any ML models at all. It's entirely heuristics based and super fast."

The technique is **grid projection**: sort lines by Y-coordinate similarity, extract left/right/center anchors, classify text items against those anchors, project everything into a monospace grid column. Paragraphs of flowing text render separately. The result preserves table layouts that VLM-based parsers tend to flatten.

Logan Markewich's deep-dive blog: [llamaindex.ai/blog/how-liteparse-turns-pdfs-into-text-a-deep-dive-into-the-grid-projection-algorithm](https://www.llamaindex.ai/blog/how-liteparse-turns-pdfs-into-text-a-deep-dive-into-the-grid-projection-algorithm). Repo: [github.com/run-llama/liteparse](https://github.com/run-llama/liteparse).

Notable because: in 2026 the default reflex is "throw a VLM at it." LiteParse is the counterargument for anything structural-layout-heavy (financial tables, invoices, government forms) where determinism matters.

## swyx's GPT-Image-2 vs GPT-Image-2-Thinking framing

Yesterday we noted the naming confusion around GPT-Image-2. Today swyx posted the [cleanest mental model](https://x.com/swyx/status/2047140362771132544) anyone's offered:

> "Image-2 is a new Image model, Image-2-Thinking is a new Image AGENT that basically has search and photoshop as a tool to use in an agent loop that can search and composite and review its own work. The same way Gemini Flash Vision destroyed benchmarks by introducing an agentic loop for image-to-text, now Image-2-Thinking is doing it for text-to-image."

That explains the multi-tens-of-minutes generation times and the sudden ability to one-shot QR codes, logos, food, faces. The model can browse, composite, self-critique.

LLMJunky meanwhile used Image-2 to do something genuinely useful: [plate-solving the Orion Nebula](https://x.com/LLMJunky/status/2047044085962473560). He generated a picture-perfect replica, then fed it to [nova.astrometry.net](https://nova.astrometry.net/) — which uses star positions to compute celestial coordinates — and it succeeded. "This means the stars have to be extremely accurate." Nano Banana's [version](https://x.com/LLMJunky/status/2047044089049120799) looked better but failed plate-solving. That's a real, falsifiable quality gap.

## Codex Marketplace: LLMJunky's community plugin registry

[LLMJunky launched](https://x.com/LLMJunky/status/2047176477200826584) Codex Marketplace — a community-curated collection of plugins, skills, and hooks for Codex, with GitHub-based submission and an upvote system. If you own the source repo, artifacts auto-approve; otherwise reviewed. [Bug reports here](https://x.com/LLMJunky/status/2047176545374978057). He [fixed GH auth permissions](https://x.com/LLMJunky/status/2047195348557275234) to read:user after initial rollout.

Related LLMJunky thread: his [long defense of Skills vs custom prompts](https://x.com/LLMJunky/status/2047021884823183650) (disagreeing with kitze). The three key points:
1. Skills take any natural-language context mid-sentence; custom `/prompts` had strict formatting
2. Skills only load the frontmatter description into context until invoked — same as custom prompts
3. Skills can be stacked; he runs up to 5 skills in a single query

"skills can actually serve the same exact purpose with absolutely no downsides. They are far more dynamic, less restrictive, and can be stacked now."

If you're still hand-rolling `/prompts`, this is probably the nudge to move over.

## OpenAI un-deprecates text-embedding-3-small after Simon calls it out

Brief but instructive. Simon [flagged](https://x.com/simonw/status/2047068587190542831) that OpenAI had quietly announced the deprecation of `text-embedding-3-small`:

> "Shutting down embedding models like this is a huge pain for people who have spent time and money running large amounts of text through them and storing the vectors — that investment essentially becomes useless if you can no longer calculate fresh vectors to compare."

His operational rule: ["I won't use proprietary hosted embedding models myself — I am more than happy to pay for a hosted solution... but I want an open weight escape hatch for if they ever stop serving it."](https://x.com/simonw/status/2047069194609680687)

Within hours, OpenAI's [Romain Huet reversed it](https://x.com/romainhuet/status/2047090227920163083): "This was a mistake: we are not deprecating text-embedding-3-small. We're looking into where this came from now, and we'll also email users to clarify. Sorry for the confusion!" Simon's [correction post](https://x.com/simonw/status/2047091567694114986).

Same day, [Cloud Run shipped spending caps](https://x.com/simonw/status/2047007289224442046) — Simon's take: "This is a really big deal — it's easy to run into nasty bills with Cloud Run if your site attracts aggressive scrapers, spending caps make it a whole lot safer to run small projects on." Small but useful guardrail.

## Infra / ops

- **steipete's CI**: [8 minutes → 2 minutes via parallelization](https://x.com/steipete/status/2046787353906167992), with Blacksmith's runners. Clean 4× win; no magic.
- **OpenClaw 2026.4.21** ([steipete](https://x.com/steipete/status/2046803162590335240)): "npm updates now repair bundled plugin runtime deps, with Docker E2E coverage so Telegram/Discord/Slack do not break after upgrade. Also backports OpenAI Image 2 support."
- **slacrawl 0.4.0** (Vincent Koc, [RT'd by steipete](https://x.com/vincent_koc/status/2046984372893675999)): Git-backed archive sync for Slack, so archives live in a private repo and users don't each need bot credentials. Same pattern as steipete's discrawl.
- **Matt Pocock** [hooked up Sandcastle to Slack](https://x.com/mattpocockuk/status/2046868338253418695): "This rocks."
- **potetotes' token receipts**: [20B tokens used for the month](https://x.com/potetotes/status/2047014169279635741), "clearly I deserve a promotion." He's also [using Codex cloud agents off a phone thread](https://x.com/potetotes/status/2047002643747504501): "super handy for firing off a bunch of agents in the cloud, with all the context from your thread."
- **The canonical self-own tweet of the day**, from [mattpocockuk](https://x.com/mattpocockuk/status/2047200599234474017): "spends the evening queuing up 15-20 tasks for AFK agents overnight / forgets to run the script that kicks them off / sigh."

## Non-agent sidebar

- **GLM moderation clarification**: Zixuan Li [apologized](https://x.com/ZixuanLi_/status/2046973976744698139) (RT'd by steipete) for unclear moderation rules; OpenClaw, Hermes, and SillyTavern are now explicitly marked as supported under the GLM Coding Plan. A reminder that the "is my third-party client banned?" question still isn't fully solved.
- **Theo's $1,000 crypto challenge**: he [posted a puzzle](https://x.com/theo/status/2047024972367880250) with a [gist](https://gist.github.com/t3dotgg/02f4d044d3bacdd5a04fd80d53c2747c). Solved in 9 minutes by `@anonymous086505`. Theo's [update](https://x.com/theo/status/2047027335174484280): "You fuckers are fast." Side note from Theo: ["The sheer volume of AI hallucination 'answers' in my DMs right now is hilarious."](https://x.com/theo/status/2047028908688543901)
- **Nerd Snipe ep 3**: [Theo + guest on Anthropic conspiracy theories](https://x.com/theo/status/2046999698695766180) — "T3 Code Banned?" (07:30), "How Claude Caching Works" (16:08), "Why Claude Seems Dumber" (24:00), "The Conspiracies Begin..." (38:03).
- **swyx**: ["GPT 5.5 tomorrow would be the best damn birthday gift I could ever ask for."](https://x.com/swyx/status/2047137849539956862) LLMJunky's earlier-week sighting of GPT 5.5 in the Codex app is still the only public evidence.

## Open questions

- Is Flipbook a dead-end tech demo or the actual UX trajectory? Worth tracking who else forks the concept.
- Does /ultrareview's cloud-fleet pattern land as a durable primitive, or does it pull activation energy away from local subagents?
- If Shopify's "widening percentile deltas" on AI usage hold across other orgs, what does that do to comp bands in 2026?
- Qwen3.6-27B's numbers are either legitimately a year-of-small-models inflection, or a benchmark-overfitting artifact. First independent evals will tell us which.
