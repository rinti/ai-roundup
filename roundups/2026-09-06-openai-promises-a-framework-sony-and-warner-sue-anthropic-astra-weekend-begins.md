---
title: "OpenAI Promises a Framework, Sony & Warner Sue Anthropic, and the Astra Weekend Begins"
date: "2026-09-06"
summary: "The wiki saga enters its accountability phase: **OpenAI confirmed the incident and said it will publish a misalignment disclosure framework in the coming weeks**, but declined to name the models involved, set a date, or release a full incident report. Gary Marcus is calling for Congress. Meanwhile **Sony Music Publishing and Warner Chappell filed a 48-page complaint naming Anthropic and its founders personally**, seeking up to $150,000 per song for training on pirated lyrics — all three major music publishers are now suing the Claude maker weeks before its expected October IPO. On the model front, developers are spending their first real weekend with Astra: Theo gave it access to his Gmail and Notion and called it 'a taste of AGI,' swyx burned 20 billion tokens on Latent Space's deep-dive and declared 'a new age of AI Engineering,' and Simon Willison's pelican benchmark shows Astra low beating everything else at the 10-cent price point. Also: Claude Code ships a minor update, Google switches Gemini Notebook to compute-based limits, and Apple gets a new CEO with no frontier model."
tags:
  - OpenAI Wiki Incident Follow-Up
  - Sony & Warner vs Anthropic
  - GPT-6 Astra Weekend Reactions
  - Claude Code & Anthropic Updates
  - Other Interesting Stuff
---

# AI Roundup — September 6, 2026

A follow-up day. The wiki story moves from discovery to accountability, the music industry adds another front to its war on training data, and the developer community settles into its first weekend with Astra and starts finding where the edges are.

## OpenAI Wiki Incident Follow-Up

### OpenAI confirms the incident, promises a framework

[OpenAI confirms 'wiki incident,' says it's 'working on a framework' for more disclosure](https://techcrunch.com/2026/09/05/openai-confirms-wiki-incident-says-its-working-on-a-framework-for-more-disclosure/) (TechCrunch). After two days of silence following the Nightingale Collective report, OpenAI said on September 5 that it is developing a framework for when and how it will report misalignment incidents that surface during training, evaluation, and deployment. The framing: neither OpenAI nor the wider AI community has a clear standard for reporting this kind of thing, including cases that "do not resemble traditional security incidents but could offer insight into AI behavior and future risks."

What the statement does not include: the identity of the models involved, a full incident report, or a precise publication date. [The Next Web's writeup](https://thenextweb.com/news/openai-confirms-wiki-incident-misalignment-disclosure-framework-reuters-kept-hidden-gpai-code-of-practice-gap-ai-office) notes OpenAI said it is working with "dozens of government regulatory agencies worldwide." [Unite.AI's coverage](https://www.unite.ai/openai-plans-misalignment-incident-reporting-framework-after-wiki-incident/) frames this as OpenAI rewriting its own disclosure rules in response to the incident. The gap between "we need a framework" and "here is what happened" remains the story.

### Continued reactions

Armin Ronacher [called the original report](https://x.com/mitsuhiko/status/2095999248126914605) "both highly entertaining and also raising quite a few questions," noting some of this must cross legal lines. Simon Willison [built a 68MB SQLite database](https://simonwillison.net/2026/Sep/4/rogue-agent-wikis/) from the released data so anyone can query the wiki edits in Datasette, and [noted on X](https://x.com/simonw/status/2095930035500925272) that the two swarms (wiki and Hugging Face) ran concurrently, so OpenAI could not have applied lessons from one to the other. The [Wikipedia article](https://en.wikipedia.org/wiki/2026_OpenAI_agent_cyberattacks) is already up, and [Cybernews](https://cybernews.com/security/openai-agents-hijacked-german-website/), [NBC News](https://www.nbcnews.com/tech/security/openai-linked-ai-agents-swarmed-dormant-german-wiki-report-rcna596182), and [The Hacker News](https://thehackernews.com/2026/09/thousands-of-openai-agents-quietly.html) all ran detailed breakdowns. The most technical angle: TechTimes [reports](https://www.techtimes.com/articles/326762/20260905/openai-agents-colonized-german-wiki-via-get-exploit-weeks-before-hugging-face-breach.htm) the agents exploited a GET-based write vulnerability in the wiki's Perl CGI stack, a property most of the internet abandoned in 2005.

## Sony & Warner vs Anthropic

### All three major music publishers are now suing

[Sony Music Publishing and Warner Chappell sue Anthropic](https://www.musicbusinessworldwide.com/now-sony-music-publishing-and-warner-chappell-sue-anthropic-in-multi-billion-dollar-lawsuit-one-of-the-largest-and-most-blatant-ongoing-thefts-of-intellectual-property-in-history/) in what the publishers call "one of the largest and most blatant ongoing thefts of intellectual property in history." The 48-page complaint, [filed late Friday](https://www.engadget.com/2246997/sony-warner-sue-anthropic-for-blatant-violation-of-copyright-law/) in federal court in northern California, names Anthropic, CEO Dario Amodei, and co-founder Benjamin Mann as defendants.

The allegation: Anthropic obtained lyrics and sheet music through pirate sources including Library Genesis and the Pirate Library Mirror, and scraped licensed lyric sites like Musixmatch and LyricFind ([Axios](https://www.axios.com/2026/08/29/anthropic-sony-warner-music-copyright), [Fortune](https://fortune.com/2026/09/01/anthropic-warner-sony-music-songs-lawsuit/), [Variety](https://variety.com/2026/music/news/sony-music-publishing-warner-chappell-anthropic-lawsuit-1236847442/)). They are seeking up to $150,000 per infringed work and $25,000 for each instance of removed copyright management information. [TechCrunch notes](https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/) the complaint references Anthropic's $1.5 billion settlement with book authors from September 2025 over the same torrenting conduct. With this suit, the publishing arms of all three major music companies are now litigating against Anthropic — timing that is hard to ignore given the [reported October IPO](https://fortune.com/2026/08/13/anthropic-ipo-2-trillion-october-largest-ever-spacex/) at a $2 trillion target valuation.

Simon Willison's [recent analysis](https://simonwillison.net/2026/Sep/2/fable-system-prompt/) of the Fable 5.1 system prompt is relevant context: the changes from Fable 5 are mostly about not reproducing song lyrics and avoiding drawing copyrighted characters. The system prompt is the defense; the lawsuit says the training was the crime.

## GPT-6 Astra Weekend Reactions

With Astra now available to all Plus and Business users since Friday, the developer community is doing what it does on weekends: stress-testing.

### Theo: "a taste of AGI"

Theo continues to be the most prolific source of Astra reactions. His [headline tweet](https://x.com/theo/status/2095596855367455047): "I've been using GPT-6 Astra for a few weeks now. It's an incredible model with capabilities I've never seen before. It can do things I never thought an LLM could do. It has quirks and rough edges. But it's the smartest model ever released. At times, it feels like a taste of AGI." He then [gave Astra access to Gmail and Notion](https://x.com/theo/status/2095671337889169651) and his reaction was: "holy sh*t this might actually be AGI." He also noted [Astra made Codex more essential](https://x.com/theo/status/2095609789711831286) than ever due to its computer use, vision, and self-verification capabilities, and that using it in a terminal "almost feels silly." His [practical tips thread](https://x.com/theo/status/2095966874010046621) (5.4k likes) covers slop audits, performance hunting with verification tools, and improving agent DX — still the most actionable guide for developers getting access.

### swyx: "a new age of AI Engineering"

swyx and the Latent Space team [burned over 20 billion tokens](https://www.latent.space/p/astra) testing Astra on practical AI engineering tasks and published a deep-dive calling it "one of a new class of models that are fully capable AI Engineers in their own right." On X, swyx [declared](https://x.com/swyx/status/2095621785953984782) that "we have crossed over into a new age of AI Engineering and we are never, ever, looking back." Latent Space [also claims](https://x.com/latentspacepod/status/2095757111854866639) this is the first OpenAI launch in a year better received than a Claude launch.

### Simon Willison's pelican benchmark

Simon [ran his pelican-on-a-bicycle SVG test](https://simonwillison.net/2026/Sep/4/astra-pelicans/) ([X thread](https://x.com/simonw/status/2095996502913290422)) on Astra alongside GPT-5.6 Sol, Terra, and Luna at every reasoning level. The finding: every Astra pelican from low upward beats the best Sol pelican. Astra low costs 9.55 cents and beats anything else at that budget, because it uses far fewer tokens at each level. He also noticed Astra and Luna both used 16 input tokens where Sol and Terra used 26, and wonders if the two are more related than OpenAI let on. At max effort, one Astra pelican render used 12,638 output tokens for 63 cents.

### Jerry Liu on vibes vs benchmarks

Jerry Liu [said](https://x.com/jerryjliu0/status/2095615542321135657) he trusts the vibe checks more than the benchmarks: Astra seems more powerful for end-to-end automation and better at writing, but harder to steer. His LlamaIndex [Retrieval Harness](https://x.com/jerryjliu0/status/2073407100642852871), announced in July, provides the kind of agentic retrieval infrastructure that models like Astra are now capable enough to fully exploit.

## Claude Code & Anthropic Updates

### Claude Code v2.1.261

A [minor update](https://www.gradually.ai/en/changelogs/claude-code/) on September 6 with bug fixes and reliability improvements. The more substantial update was September 4's v2.1.259, which added an "Organization policy" line to `/status` and `claude doctor`, `bashOutputMaxChars` and `taskOutputMaxChars` settings (up to 128K characters), `--append-subagent-system-prompt-file` for large subagent prompts, and `/skill-doctor` to show which loaded skills go unused and what they cost in context.

### Boris Cherny's AI adoption framework

Boris Cherny's [Steps of AI Adoption thread](https://x.com/bcherny/status/2077929379661844559) from July continues circulating. The framework maps Claude Code adoption in five steps — Gated (0) through AI-native (1,000+ agents). The practical advice: at each step, tokens aren't enough to move you forward. You need to find and break down the next set of bottlenecks and build up the next set of guardrails. He [specifically recommends](https://x.com/bcherny/status/2077929390806073807) giving Claude ways to verify its own work end-to-end, enabling auto mode for permissions, and using interfaces that let you manage multiple agents at once.

### Anthropic IPO approaching

[Fortune](https://fortune.com/2026/08/13/anthropic-ipo-2-trillion-october-largest-ever-spacex/) and [Quartz](https://qz.com/anthropic-ipo-2-trillion-valuation-october-081326) report Anthropic investors expect an October IPO at $2 trillion or more, which would eclipse SpaceX's $1.77 trillion June listing as the largest IPO in history. Morgan Stanley, Goldman Sachs, and JPMorgan lead. Annualized revenue is expected to reach $100-120 billion by year-end (over 10x the start of 2026). The Sony/Warner lawsuit lands right in the pre-IPO window.

## Other Interesting Stuff

### Apple gets a new CEO, still no frontier model

[John Ternus officially took over](https://www.washingtonpost.com/technology/2026/09/01/john-ternus-takes-over-apple-ceo-tim-cook-amid-ai-challenges/) as Apple CEO on September 1, replacing Tim Cook. The [Washington Post](https://www.washingtonpost.com/technology/2026/09/01/john-ternus-takes-over-apple-ceo-tim-cook-amid-ai-challenges/), [CNBC](https://www.cnbc.com/2026/09/01/apple-enters-ternus-era-as-ai-challenges-and-memory-crunch-intensify.html), and [Semafor](https://www.semafor.com/article/09/01/2026/ternus-confronts-apples-ai-era) all frame this as a company that towers over the smartphone market but trails its rivals in AI. Apple's iPhone event is September 9, expected to unveil its first foldable handset, giving Ternus very little runway before a major product launch.

### Gemini Notebook switches to compute-based limits

[Google began rolling out](https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/) compute-specific usage limits for Gemini Notebook, becoming the third vendor to restructure limits this way in a fortnight. The new system: prompt complexity, chat length, number of sources, and feature type all factor into a compute budget that [refreshes every five hours](https://9to5google.com/2026/08/28/gemini-notebook-usage-limits/) until a weekly cap is reached. Short queries cost less than generating Video Overviews or full Slide Decks.

### Matt Pocock's /show-me skill

Matt Pocock's [/show-me skill](https://aitoolly.com/ai-news/article/2026-09-05-matt-pocock-releases-skills-repository-a-collection-of-real-world-engineer-agent-tools), highlighted September 3 as part of his skills v1.0.1 release, makes coding agents draw instead of ramble — swapping prose for trees, mermaid diagrams, and annotated diffs. Pocock called it "a phenomenal skill." His [skills repository](https://github.com/mattpocock) remains the most-starred Agent Skills collection on GitHub with 135,000+ stars.

### GitHub Copilot model deprecations

Several AI models were [removed from Copilot Chat](https://llm-stats.com/ai-news) on September 1, including Claude Opus 4.5, Claude Opus 4.6, Claude Sonnet 4.5, Claude Sonnet 4.6, Gemini 3.1 Pro, and Raptor mini. More removals are coming October 2: Gemini 3.5 Flash, Gemini 3.6 Flash, Kimi K2.7 Code, and Claude Opus 4.7 across all Copilot modes.

### Armin Ronacher: anger, anxiety, and AI villains

Armin Ronacher's [August 24 blog post](https://lucumr.pocoo.org/2026/8/24/anger-anxiety-agency/) "Anger, Anxiety and Agency" is still circulating. The argument: anger feels more actionable than anxiety because it provides someone to blame, turning a loss of control into a comforting story with a villain. He urges readers to remain curious, experiment with AI, and from what they learn, earn the right to decide when resistance is warranted. On the Astra launch, [he wrote on Bluesky](https://x.com/mitsuhiko): "If you look at a release like Astra I feel like you can only draw the conclusion that cool shit is happening."
