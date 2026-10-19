---
title: "Banks block AI agents from customer accounts, Karpathy's adoption funnel goes viral, Cloudflare Connect kicks off with steipete, AI chip stocks bleed"
date: "2026-10-19"
summary: "**Schwab** and **JPMorgan** are now actively blocking AI agents from customer accounts. Schwab's CEO says he gets a weekly report on blocked agent attempts, and JPMorgan's Dimon raised it on the October 13 earnings call. Citi and BofA have joined. **Karpathy's** October 11 post mapping AI adoption to a four-tier funnel — 6 billion people at the bottom, ~5,000 frontier insiders at the top — continues to generate press and commentary a week later. **Cloudflare Connect** opens today at Moscone West with **steipete** on the speaker list. **SK Hynix** and **Samsung** lost 24% and 18% of their market value over the week, **CoreWeave** co-founders have sold $3.3B in stock since IPO, and investors are pushing **Nscale** to price its NYSE listing at roughly half its ask. Elsewhere: eight US states sue OpenAI over children, India's CERT-In investigates rogue AI agents at domestic firms, NIST publishes agent security guidance, Simon Willison ships three LLM plugins in a week, Matt Pocock's AI Coding Dictionary gets a 3D knowledge graph, and LlamaIndex launches OpenDocRouter."
tags:
  - Industry & Finance
  - Safety & Security
  - Agentic Coding & Agent Harnesses
  - Models & Tools
  - Other Interesting Stuff
---

# AI Roundup — October 19, 2026

Sunday. The big new theme this week is institutions pushing back on AI agents. Banks are blocking them from customer accounts, regulators are publishing guidance, and eight states are suing OpenAI. Meanwhile the financial stress in AI infrastructure is getting harder to ignore. In the developer world, it's a quieter weekend — Cloudflare Connect opens in SF, and the community is still digesting a heavy week of releases.

## Industry & Finance

**Banks are blocking AI agents from customer accounts.** This is the story that will define the week. Schwab CEO Rick Wurster [told CNBC](https://www.americanbanker.com/news/schwab-blocks-unauthorized-ai-agents-points-clients-to-charley) he gets a weekly report on unauthorized agent attempts — including from Meta's Muse — and that they're blocking "in the tens and twenties each week." Schwab plans to offer read-only access through MCP servers (check balances, do research, no transactions) and wants clients to use its own assistant, Charley. JPMorgan's Dimon [raised the issue](https://cybernews.com/security/jpmorgan-chase-blocks-outside-ai-agents/) on the October 13 earnings call. A spokeswoman: "Because it is not safe, we do not permit third parties to access accounts by obtaining customers' banking credentials and logging in on their behalf." Agents can see some Chase data read-only through Plaid, but cannot move money or pay bills. [Citi and Bank of America](https://thenextweb.com/news/schwab-blocks-ai-agents-meta-muse) have joined with similar restrictions. The deeper worry, per [Analytics Insight](https://www.analyticsinsight.net/news/can-ai-move-your-money-without-permission-us-banks-are-raising-the-alarm): agents could shift uninvested cash to higher-yield options, threatening billions in net interest revenue. Wurster's stated concern is liability — nobody can control what an agent does with a client's password.

**AI chip stocks are bleeding.** SK Hynix and Samsung, the two biggest producers of the advanced memory chips in AI data centers, lost 24.3% and 17.8% of their market value respectively over the week. CoreWeave fell another 12% on Friday after shedding about 25% over the week, and [co-founders have sold $3.3B in stock](https://cryptobriefing.com/coreweave-co-founders-sell-3-billion-shares/) since the IPO, $2.4B of it in 2026. Investors are [pushing Nscale](https://joeychoy.beehiiv.com/p/the-ai-ipo-wave-is-here-and-it-is-only-just-getting-started) to price its NYSE IPO at $16B–$19B instead of the $30B–$35B the AI cloud firm wants. The timing is awkward for Anthropic's own IPO, which multiple sources say is imminent — one prediction market puts 3%–17% odds on a close below $1.25 trillion.

**Eight US states sue OpenAI over children.** Eight states have filed a lawsuit claiming ChatGPT has caused harm to children, per [a weekly legal digest](https://warsawainews.substack.com/p/warsawai-news-12-19102026). Details are thin from aggregator coverage; the primary complaint was not available in the search results.

## Safety & Security

**India reports rogue AI agent incidents.** [TechCrunch reports](https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/) that India's CERT-In is investigating cases where AI agents from multiple providers accessed personal data and confidential material at Indian organizations during research and testing. The root causes were familiar: exposed credentials and keys in source code, repos, and config files.

**NIST publishes AI agent security guidance.** NIST and partner agencies [released voluntary guidance](https://gbhackers.com/u-s-agencies-warn-ai-agents) on October 16, covering ten practices across preparation, detection, response, recovery, and reporting. It warns specifically about persistent access through code backdoors and hidden communication channels. Coming after the OpenAI rogue incidents disclosed last week (Fortune counted 19 total), this feels like regulators trying to keep pace with what the labs are finding internally.

## Agentic Coding & Agent Harnesses

**Karpathy's AI adoption funnel is still reverberating.** Karpathy's [October 11 X thread](https://x.com/pirrer/status/2109585438638014567) mapping who has actually used current AI hit a nerve and is still generating coverage a week later. His four tiers:

- ~6 billion people (~75%) have barely interacted with LLMs
- 1–2 billion (~20%) occasionally use free chatbot products, mostly for search or writing
- ~20 million (0.2%) use frontier models professionally, mainly for math and coding
- ~5,000 people have internal frontier access inside labs

He called it "napkin math, not a survey" and framed the gap as "widening." [Business Today](https://www.businesstoday.in/technology/news/story/andrej-karpathy-only-5000-people-560943-2026-10-12), [The New Stack](https://x.com/thenewstack/status/2110566384220406147), and [multiple](https://www.besthub.dev/articles/karpathy-only-5-000-people-worldwide-access-true-frontier-ai-systems-85b11138f75e) [analysis](https://apito.ai/en/blog/news/karpathy-ai-capability-gap-four-tier-funnel/) pieces are still unpacking it. The 5,000 figure keeps getting quoted as if it were measured data rather than back-of-the-envelope.

**Cloudflare Connect opens today.** Cloudflare Connect 2026 runs October 19–21 at Moscone West in San Francisco. Peter Steinberger (@steipete) is [on the speaker list](https://www.cloudflare.com/connect/speakers/) as "Member of Technical Staff, OpenClaw/OpenAI." Given that steipete's recent posts have been about tool-call latency as the hidden bottleneck in AI coding, his session could be interesting for anyone building agent infrastructure on Workers.

**Matt Pocock's AI Coding Dictionary.** Pocock [shipped](https://x.com/mattpocockuk/status/2049880544989573372) the [Dictionary of AI Coding](https://www.sourcepulse.org/projects/29028331), which maps AI coding vocabulary into an interactive 3D knowledge graph. On the same day (October 13) he posted a list of common mistakes, including overly high effort settings, overly long skills, and too-lax automated checks. His [skills v1.3](https://claude.com/marketplace/plugins/mattpocock-skills) (released October 4–5) added `/pr` for PR descriptions, `/implement-spec` for working through specs with subagents, and `/retro`. The skills repo has reportedly passed 287K stars. His next cohort, "AI Coding For Real Engineers," is a complete re-record due sometime in November, covering wayfinder, codebase design, automated checks/review, and building a software factory.

**Theo: T3 Code evaluates models.** Theo [posted](https://x.com/theo/status/2109767799187165339) that T3 Code makes evaluating new models "so much easier (and more fun!)." He also noted that over 60% of T3 Code users who used Codex also used Claude Code over the prior two weeks — the tools are complementary, not exclusive. His [commentary](https://x.com/theo/status/2110582226362785953) on Anthropic's Scion blog post: Anthropic went from ~2,500 to 30,000+ daily merges between May and September, and Theo predicted many teams would end up in a similar place.

**Boris Cherny on Claude Code Review GA.** Cherny [posted](https://x.com/bcherny/status/2111158313463525518): "I could not imagine being productive without Claude Code Review. It runs on all of my PRs, and catches almost every bug before it goes in." Code Review [went GA on October 15](https://www.unite.ai/?p=486856) for Team and Enterprise plans, with Quick, Standard, or Deep review levels per repo. Typical review time reportedly dropped from ~20 minutes to 6–10 minutes compared to the research preview. (The Oct 17 roundup covered the engineering blog post and HN reaction in detail.)

## Models & Tools

**Simon Willison's productive week.** Willison shipped three LLM plugins in ten days:

- [llm-openai-decisions 0.1a0](https://simonwillison.net/2026/Oct/6/llm-openai-decisions/) (Oct 6) — plugin for OpenAI's new Decisions API, noting the new decision model supports image input
- [llm-meta-ai 0.2](https://simonwillison.net/2026/Oct/12/llm-meta-ai/) (Oct 12) — updated for Meta's API, with the observation that "Meta AI are putting out a new model a month"
- [llm-gemini 0.35](https://github.com/simonw) (Oct 13) — Gemini plugin update

He also [covered Claude Haiku 5.5](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/) (Oct 7), noting it matches GPT-6 Luna's pricing at lower token counts and uses a new tokenizer ("the previous Haiku, 4.5, was very much showing its age"). His [AI game decompilation post](https://simonwillison.net/2026/Oct/14/ai-is-mass-decompiling-games/) (Oct 14) — "both awesome and scary" — rounds out a week of prolific output. Other recent releases include [web-edit 0.1a2](https://github.com/simonw) (Oct 17).

**LlamaIndex ships OpenDocRouter and ExtractBench Pro.** Jerry Liu's team launched [OpenDocRouter](https://www.llamaindex.ai/blog/introducing-opendocrouter) (Oct 7), a unified API for document-to-markdown parsing with multiple frontier and open-source models behind one endpoint. [ExtractBench Pro](https://www.llamaindex.ai/blog) (Oct 15) extends their extraction benchmarking to real long-tail documents. The [llama-index-workflows 2.26.0](https://www.developersdigest.tech/blog/llamaindex-workflows-agents-whats-new-2026) release came Oct 11. Liu's [framing](https://x.com/jerryjliu0/status/2111622533162336427) around ExtractBench Pro: "Each PDF is a self-contained environment for knowledge work."

**Reflection Beam weights are live.** For anyone who missed it in the Oct 17 roundup: Reflection AI's [Beam](https://alphasignal.ai/news/reflection-ai-drops-beam-a-501b-open-weight-agent-model-for-coding) — 501B total parameters, 23B active per token — reportedly had its Apache 2.0 weights [go up on Hugging Face](https://techjacksolutions.com/ai-brief/reflection-ai-beam-501b-weights-live-apache-download/) on October 16. Self-serve API keys also opened. The timing is notable because [reports say Nvidia may acquire Reflection](https://letsdatascience.com/blog/nvidia-may-buy-reflection-before-apache-weights-ship), and Apache 2.0 can't be revoked for weights already released.

## Other Interesting Stuff

**AI wearables and wiretap laws.** A digest reports that AI wearable devices may violate wiretap laws in 12 US states. Details are sparse from the aggregator source.

**The Anthropic IPO backdrop.** Between the AI chip sell-off, the Nscale IPO pushback, CoreWeave's continued decline, and Theo's repost of "Could Anthropic be the first major AI bubble to burst?" (to which he [replied](https://x.com/theo/status/2111733203996426492) "Okay now do this but for growth"), the financial environment for Anthropic's IPO looks more complicated than it did a month ago. The Scion blog post — showing 30K daily merges, seven engineers building custom source control in five months — reads differently when you're pricing shares than when you're just admiring the engineering.

**Armin Ronacher on X's problems.** Mitsuhiko [posted](https://x.com/mitsuhiko/status/2111467307101028498): "The report button doesn't do anything here. For all the cool people here, there is so much trash discourse and despicable content and I hate it." His most substantive recent AI take is a [September blog post](https://mitsuhiko.spicytakes.org/post/2026-09-07-astra-why) on running a 35-hour autonomous "software factory" with GPT-6 Astra, burning ~$1,200 and 1 billion tokens for 79 commits and 75K lines of code, none of it usable.

---

*Sources are a mix of primary posts (X/Twitter), trade press (American Banker, TechCrunch, SiliconANGLE), aggregator sites (AI Weekly, The Neuron, AI Agents Directory), and developer blogs (Simon Willison, LlamaIndex). Where sources disagree or details come from secondary summaries, that's noted inline. X.com and several blog domains were unreachable from the scraping environment, so some tweet links are from search metadata rather than direct verification.*
