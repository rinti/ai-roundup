---
title: "Nesformer bakes a NES CPU into model weights, Altman surprises Samsung with Codex keyboards, Android Studio opens to 40+ agents, Anthropic's S-1 reveals $109B loss, and Claude stops cloning games"
date: "2026-10-31"
summary: "**Simon Willison** [linked](https://simonwillison.net/2026/Oct/30/nesformer/) Drew Breunig's nesformer, which bakes a working NES 6502 CPU emulator into the weights of Qwen3.5-4B. **Sam Altman** made a [surprise two-day trip to Korea](https://news.sbs.co.kr/english/article.do?news_id=N1008824391), meeting ~50 Samsung executives and gifting them 'Codex Micro Keyboards'. **Google** announced at Android Dev Summit that [Android Studio now accepts 40+ AI coding agents](https://www.techtimes.com/articles/329715/20261030/android-studio-now-accepts-any-ai-coding-agent-google-sets-2027-foldable-deadline.htm) via the open Agent Client Protocol. **Anthropic** publicly filed its [S-1 under ticker 'ANT'](https://www.iposcoop.com/the-ipo-buzz-anthropic-ant-proposed-files-its-s-1/) — the filing shows a $109B net loss on $19.7B revenue for the 12 months ending June 2026, with IPO marketing expected the week of Nov 9. Anthropic also [told Claude to stop recreating existing video games](https://gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games), citing IP concerns. **Boris Cherny** [shared](https://x.com/bcherny/status/2115491259381072269) Utah's Claude Code pilot results: 34 devs across 10 state agencies, 80% with working environments in 30 minutes. **Thariq** [mused](https://x.com/trq212/status/2115188992861970693) on a new model for distributing open-source software where agents can modify and auto-merge upstream. **GitHub Octoverse 2026** reported [17.9 billion pushes](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/) this year — more than the prior two years combined — with agents now opening 40%+ of PRs."
tags:
  - Agentic Coding & Agent Harnesses
  - Models & Releases
  - Claude & Anthropic
  - TypeScript & Web Dev
  - Other Interesting Stuff
---

# AI Roundup — October 31, 2026

## Agentic Coding & Agent Harnesses

### Nesformer: a NES CPU emulator baked into transformer weights

Simon Willison [linked](https://simonwillison.net/2026/Oct/30/nesformer/) Drew Breunig's nesformer project, which takes a cycle-exact NES 6502 CPU and bakes its behavior into the weights of Qwen3.5-4B. Rather than running an emulator that simulates the CPU instruction-by-instruction, the transformer *is* the CPU — it predicts the next state given the current one. The [Hackaday page](https://hackaday.io/project/206401-transformers-on-retro-game-consoles) describes it as "real transformer language models running on stock NES, SNES, Game Boy Color, Genesis and N64 hardware, measured in actual cycles." A [Hugging Face repo](https://huggingface.co/elyanlabs/elya-nes) includes trained weights and claims a "ternary transformer forward pass verified bit-exact against a host reference over 19 generated tokens."

### Android Studio opens to 40+ AI coding agents

At Android Dev Summit (Oct 30), Google announced that [Android Studio now accepts any AI coding agent](https://www.techtimes.com/articles/329715/20261030/android-studio-now-accepts-any-ai-coding-agent-google-sets-2027-foldable-deadline.htm) through its open Agent Client Protocol — including Claude Code and Codex. This puts Android Studio in the same "bring your own agent" category as VS Code and JetBrains, rather than locking developers into a single AI provider.

### Sam Altman surprises Samsung with Codex keyboards

Sam Altman made a [surprise two-day trip to Korea](https://news.sbs.co.kr/english/article.do?news_id=N1008824391) (Oct 31), meeting roughly 50 Samsung affiliate executives. He gifted them "Codex Micro Keyboards" designed to make OpenAI's Codex coding agent easier to use. The visit comes as OpenAI expands enterprise relationships in Asia — a separate report noted that [OpenAI models will be available on Google Cloud](https://ucapital.com/en/news/breaking/17670576) in the coming weeks.

### GitHub Octoverse 2026: agents drive record code volume

The [Octoverse 2026 report](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/), released at GitHub Universe (Oct 28), shows staggering numbers:

- **17.9 billion pushes** this year — more than the prior two years combined ([The Stack](https://www.thestack.technology/github-developers-pushed-more-code-in-2026-than-in-the-last-two-years-combined/))
- **220 million merged PRs per month**, roughly triple the level from under a year ago
- **Agent-involved PRs** changed multiple files 87% of the time vs. 79% for non-agent PRs
- Satya Nadella said [agents now open over 40% of GitHub pull requests](https://cryptobriefing.com/ai-agents-open-40-percent-github-pull-requests/)

Simon Willison [covered the Octoverse](https://simonwillison.net/2026/Oct/28/github-octoverse-2026/) from GitHub Universe.

### Thariq on agent-native open source distribution

Thariq (@trq212), who [left Anthropic last week](https://x.com/trq212/status/2113844051938054167), continues to post thought-provoking takes. His [latest musing](https://x.com/trq212/status/2115188992861970693): "feels like there needs to be a new way to distribute opensource software such that people can modify via agents but also get upstream automatically merged in. coding agents can do this but they won't do it automatically." This follows his [viral "coding-agent mania" post](https://x.com/trq212/status/2115937378674372783) (10.5K likes) from yesterday about how agents can create a false sense of productivity.

Coverage of his departure from multiple outlets:
- [FourWeekMBA](https://fourweekmba.com/ai-claude-codes-thariq-leaves-anthropic-weeks-before-its-ipo/) framed it as leaving "weeks before Anthropic's IPO"
- [TokenPost](https://www.tokenpost.com/news/people/40214) noted Anthony Morris (Claude Code Desktop creator) also left, with his last day on Oct 23
- Multiple people [praised his writing](https://x.com/hqmank/status/2113983310984556746) on coding agents, especially his pieces on HTML over Markdown for AI-generated plans and dynamic workflows

### Boris Cherny: Claude Code Review and Utah pilot

Boris Cherny (@bcherny) shared two notable items:

- **Claude Code Review:** [He wrote](https://x.com/bcherny/status/2111158313463525518) "I could not imagine being productive without Claude Code Review. It runs on all of my PRs, and catches almost every bug before it goes in." (389K views)
- **Utah state government pilot:** [He shared](https://x.com/bcherny/status/2115491259381072269) results from Utah giving Claude Code to 34 developers across 10 state agencies: 80% had a working environment within 30 minutes, 71% reported saving 20+ hours by the end of the four-week pilot.

### Peter Steinberger's $10M/month token bill

More details emerged about Peter Steinberger's (@steipete) AI spending. At [Cloudflare Connect 2026](https://www.infoworld.com/article/4239758/openclaw-creator-spent-10-million-on-ai-tokens-last-month.html), the OpenClaw creator said he spent roughly $10 million on AI tokens last month (September), up from the [$1.3M he showed in May](https://techradar.com/pro/openclaw-creator-peter-steinberger-claims-he-spent-usd10-million-in-tokens-in-just-a-month-but-luckily-openai-can-afford-it). The costs are borne by OpenAI (Steinberger joined OpenAI earlier this year). In a [recent reply](https://x.com/steipete/status/2114432445269545427), he argued that "cli and keyboard shortcuts was kind of a 2025 thing for agents when closer steering was needed" — suggesting the interface paradigm has moved beyond manual prompting.

## Claude & Anthropic

### Anthropic's S-1 goes public: ticker ANT, $109B loss

Anthropic [publicly filed its S-1](https://www.iposcoop.com/the-ipo-buzz-anthropic-ant-proposed-files-its-s-1/) for Class A common stock, planning to list on the Nasdaq Global Select Market under ticker "ANT" ([IPOScoop](https://www.iposcoop.com/the-ipo-buzz-anthropic-ant-proposed-files-its-s-1/)):

- **Financials:** Net loss of $109.74 billion on revenue of $19.7 billion for the 12 months ending June 30, 2026
- **Valuation:** Last private valuation was [$965 billion](https://thenextweb.com/news/anthropic-ipo-confidential-filing-openai-race-965-billion) after raising $65 billion in funding. Reuters puts the likely market cap around $1.5 trillion
- **Timeline:** IPO marketing [expected the week of Nov 9](https://www.investmentnews.com/equities/anthropic-files-for-ipo-as-ai-giant-nears-1t-valuation/266819), per Bloomberg
- **Risk disclosure:** The filing [warns AI "could pose catastrophic, existential risks if misused"](https://foxbaltimore.com/news/nation-world/gallery/anthropic-ipo-filing-warns-ai-could-pose-catastrophic-existential-risks-if-misused)

The confidential filing was first [submitted on June 1](https://letsdatascience.com/news/anthropic-confidentially-files-form-s-1-for-ipo-2d067167).

### Claude told to stop recreating existing video games

[Game Developer reported](https://gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games) that Anthropic has added a prompt change for Claude (on Opus 5.5) that steers it away from recreating existing games. An Anthropic-affiliated staffer said the change was made because "using Claude to infringe IP is against our usage policy." A [Russian outlet](https://shazoo.ru/2026/10/26/192995/anthropic-mogla-taino-urezat-sposobnost-claude-opus-55-k-revers-inziniringu-posle-volny-portov-igr) reported users complaining that Opus 5.5 also stopped helping with reverse engineering, though Anthropic hasn't confirmed any broader change. [A madrobot blog post](https://madrobot.blog/2026/10/30/claude-code-rule-no-existing-game-recreations/) has more details.

### Trojanized Claude Code extension: continued fallout

The [trojaned Claude Code extension in Cursor's marketplace](https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html) continues to draw coverage. New articles from [The Register](https://www.theregister.com/cyber-crime/2026/10/30/anthropic-that-claude-code-extension-compromise-couldnt-be-us/5306682), [Bleeping Computer](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/), and [Help Net Security](https://www.helpnetsecurity.com/2026/10/30/claude-code-extension-ssh-backdoor/) add detail. Anthropic's position: [it didn't build or publish the tampered copy](https://www.theregister.com/cyber-crime/2026/10/30/anthropic-that-claude-code-extension-compromise-couldnt-be-us/5306682). How the attackers got it onto Cursor's marketplace under the legitimate extension's identity remains unexplained.

## Models & Releases

### GPT-6.1 Terra: 50% cheaper, computer-use focused

OpenAI's [GPT-6.1 Terra](https://aimagazine.com/news/how-openais-gpt-6-1-terra-is-much-faster-and-50-cheaper) launched Oct 26 with a focus on computer use and cost efficiency:

- **Pricing:** [$1/M input, $5/M output](https://aiweekly.co/alerts/openai-ships-gpt-61-terra-at-15-per-million-half-of-sol) — 50% cheaper than Sol
- **Speed:** Completes computer-use tasks [3x faster](https://letsdatascience.com/news/openai-releases-gpt-61-terra-cutting-price-50-and-benchmark-bc892dc4) than GPT-6 Astra and Sol
- **Benchmarks:** [Terminal-Bench 4.0](https://aicybr.com/blog/openai-gpt-6-1-terra-api-pricing-computer-use-benchmarks): 50.3% at max reasoning (vs. 21.5% for GPT-5.6 Terra); error rate at low reasoning dropped from 53.6% to 16.7%
- **Context:** Up to 1,050,000 tokens
- **Caveat:** OpenAI itself [recommends Sol or Astra](https://apidog.com/blog/gpt-6-1-terra-pricing/) for the most demanding coding and research tasks

Simon Willison [covered Terra](https://simonwillison.net/2026/Oct/26/gpt-61-terra/) noting its aggressive pricing strategy. Theo [said](https://x.com/theo/status/2115729216566407583) it's "honestly much better than I anticipated" but "I wouldn't use it for end to end agentic work."

## TypeScript & Web Dev

### Matt Pocock on TypeScript 7.1 content mappers

Matt Pocock (@mattpocockuk) [praised content mappers](https://x.com/mattpocockuk/status/2113507665733197892) in the TypeScript 7.1 beta:

> "Let me put my TypeScript hat back on for a minute. Content mappers look outrageously exciting. This is now possible: 1. import any non-TypeScript file (markdown, vue, svelte) 2. Write a content mapper to extract types from it 3. Run tsc with --runExternalCode 4. You get type inference"

The [TypeScript 7.1 beta](https://byteiota.com/typescript-71-beta-stable-api-vue-svelte-astro/) ships content mappers as an official plugin point, meaning `tsc` can now type-check `.vue` files directly. Mappers for [Svelte, Astro, MDX, Ember and CSS Modules](https://alexop.dev/posts/goodbye-vue-tsc-typescript-7-content-mappers/) are listed as prototyped or done. Stable release is expected [November 24](https://byteiota.com/typescript-71-beta-stable-api-vue-svelte-astro/).

### Matt Pocock: the agent-constraint arc

Matt also posted a [popular thread](https://x.com/mattpocockuk/status/2107749763789578692) (700K views) describing the emotional arc developers go through with AI:

> "1. Oh shit, AI can do my job better than me 2. Software engineering is dead! 3. I can vibe code as much slop as I want! 4. Oh, things are not going well. Fable/Sol/Opus all suuuck 5. But what if I constrain the agent? Put it in a straitjacket? 6. Oh, the results are pretty good"

His [skills repo](https://github.com/mattpocock/skills) — approaching 277K GitHub stars — embodies this philosophy: constraining agents with structured skills rather than open-ended prompting.

## Other Interesting Stuff

### Karpathy's AI capability funnel

Andrej Karpathy's [October 11 essay](https://dnyuz.com/2026/10/12/andrej-karpathy-says-this-ai-gap-is-widening/) on the widening gap in AI understanding continues to generate discussion. He described a "sharp funnel" of AI capability awareness:

- **~6 billion** people have barely used an LLM
- **1-2 billion** casual/consumer users
- **~20 million** professionals using frontier models for code and math
- **~5,000** people inside labs with access to unreleased frontier systems

[Box CEO Aaron Levie](https://startupfortune.com/andrej-karpathy-says-the-ai-capability-gap-is-now-a-sharp-funnel/) called it "a good way to understand how early we actually are in AI diffusion." Karpathy presented the numbers as rough "napkin math," not survey data.

### Theo's T3 Code daily improvement streak

Theo (@theo) continues his [daily T3 Code improvement pledge](https://aicodingweekly.news/stories/theo-t3-code-search-18-hour-hill-climb-53-of-54), now past Day 30. Recent highlights:
- Day 30: [customizable thread detail panel](https://x.com/theo/status/2115916633726501202) with limit/context monitoring
- The fleet-wide MCP server [shipped in stable](https://x.com/theo/status/2115917529378078885) with a button to switch between nightly and stable channels
- New video: "[T3 Code broke me](https://www.youtube.com/watch?v=uLGxb4F3SyI)" — a tutorial for T3 Code's 700K+ users

### LlamaIndex: OCRia-1 and Boo Bench

LlamaIndex launched [OCRia-1](https://www.llamaindex.ai/blog/introducing-opendocrouter), a document parsing model, and [Boo Bench](https://x.com/llama_index/status/2115845183027716486) — "179 pages that push parsers into repetition loops. One model saw 246 redaction x's on a page and wrote 23,004 of them." The Halloween-themed benchmark highlights a real problem: VLMs repeating themselves during transcription.

### swyx: app design skill and CODE26 hype

swyx (@swyx) is [building an app design skill](https://x.com/swyx/status/2115903364320129053) he calls "the most valuable addition to any model I've used for making real working software instead of flashy designer demos." It generates four mockups and you steer: "[the point is it's expensive to generate ideas and easy to pick](https://x.com/swyx/status/2115932551978336477)." He also [teased CODE26](https://x.com/swyx/status/2116071665633558776): "At WF26 thariq was talking about unhobbling the model... At CODE26 I'm excited to explore what happens when you unhobble the speaker."

### JetBrains: 90% of developers use AI coding agents

[JetBrains' 2026 survey](https://gulfnews.com/technology/90-of-developers-surveyed-now-use-ai-coding-agents-at-work-jetbrains-says-1.500700542) found that nine out of ten professional developers now use AI coding agents at work at least weekly. Combined with the Octoverse numbers, it paints a picture of near-universal adoption in professional development.

---

*Note: This roundup was compiled via web search. nitter.net and x.com were not directly accessible from the cloud environment, so all social media content is sourced via search engine results and may miss posts from the last few hours. Linked sources should be verified for exact timestamps and full context.*
