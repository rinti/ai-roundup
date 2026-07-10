---
title: "ChatGPT Work Ships, Alibaba's Claude Code Ban Goes Live & the Fable Clock Is Ticking"
date: "2026-07-10"
summary: "OpenAI launches **ChatGPT Work** — a GPT-5.6-powered workplace agent that produces finished spreadsheets, slides, and web apps instead of chat — while **Simon Willison** discovers GPT-5.6's new tokenizer silently inflates costs ~30%. Alibaba's **Claude Code ban takes effect today**, pushing thousands of developers onto in-house Qoder amid espionage allegations that Thariq called a misread anti-distillation experiment. The **Fable 5 subscription window** has two days left before per-token billing kicks in. **Matt Pocock** ships skills v1.1 with `/wayfinder` for ambitious multi-session planning, **Boris Cherny's** five-archetypes post reshapes how teams talk about roles in the AI era, and **Jerry Liu** unveils LlamaIndex's Retrieval Harness — filesystem-style tools for agents crawling large knowledge bases. Plus: Theo says devs are ~6 months from running agents off-laptop, Karpathy's \"AI Psychosis\" framing keeps reverberating, and Armin Ronacher asks whether RL even punishes wasted tokens."
tags:
  - ChatGPT Work & GPT-5.6
  - Alibaba Bans Claude Code
  - Fable 5 Subscription Countdown
  - Skills & Workflows
  - Roles & Industry Shifts
  - Agentic Retrieval & Infrastructure
  - Quick Hits
---

# AI Roundup — July 10, 2026

## ChatGPT Work & GPT-5.6 Day Two

OpenAI's double launch from yesterday is the story everyone's chewing on today.

- **ChatGPT Work went GA alongside GPT-5.6** ([Axios](https://www.axios.com/2026/07/09/ai-openai-gpt-release), [The Tech Portal](https://thetechportal.com/2026/07/10/openai-launches-gpt-5-6-powered-chatgpt-work-to-automate-complex-workplace-tasks/)). Work isn't a chatbot — it's an agent that takes a goal, gathers context across connected apps (Slack, Gmail, Drive, CRM), breaks it into steps, and stays with complex projects for hours. The output is finished material: spreadsheets, slides, documents, and interactive web apps. It includes Plan mode (approve before it starts), configurable check-ins, and action approvals so you can dial autonomy up or down. Codex is merged in — one desktop app. Pricing: GPT-5.6 Sol at $5/$30, Terra at $2.50/$15, Luna at $1/$6 per 1M input/output tokens.

- **Simon Willison's GPT-5.6 analysis is the technical deep-dive to read** ([blog post](https://simonwillison.net/2026/Jul/9/gpt-5-6/)). All three tiers share a February 16 knowledge cutoff, a million-token context window, and 128K max output. The buried lede: GPT-5.6 ships a new tokenizer that produces ~30% more tokens for the same input text — effectively a stealth price hike even where headline rates look competitive. He tested reasoning-effort levels across Luna/Terra/Sol and found costs range from 0.71 cents (Luna, effort none) to 48.55 cents (Sol, max reasoning). OpenAI's biggest claim: all three models outperform Claude Fable 5 on long-running agentic benchmarks.

- **Theo's take** ([post](https://x.com/theo/status/2074708892341481755)): "a damn good model. Not quite as smart as Fable, but incredibly capable. Fixed all the problems I had with GPT-5.5. Incredibly determined — will run for a day without even using a /goal. It understands subagents." He also noted Grok 4.5 held its own in blind testing ([post](https://x.com/theo/status/2075090486403166516)) and the previous generation is commoditizing fast — "GLM-5.2 is close to Opus, Grok 4.5 allegedly beats Opus and GPT-5.5. Feels like it barely matters now."

## Alibaba's Claude Code Ban Goes Live

Today is the day.

- **Alibaba officially bans Claude Code effective July 10** ([TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens)). Employees are being migrated to **Qoder**, Alibaba's in-house AI coding platform. Claude Code has been classified as "high-risk software with security vulnerabilities."

- **The backstory**: A June 30 Reddit post claimed to have reverse-engineered Claude Code and found mechanisms that checked system timezones (`Asia/Shanghai`, `Asia/Urumqi`) and matched proxy URLs against a hardcoded list of Chinese domains and AI lab identifiers including Alibaba, Baidu, Ant Group, and ByteDance. **Thariq** ([post](https://x.com/trq212/status/2072814903170408784)) clarified this was an experiment to "prevent account abuse from unauthorized resellers and protect against distillation," planned for removal in the July 2 release. The context: Anthropic accused Alibaba last month of the largest known distillation attack — ~25,000 fraudulent accounts running 28.8 million exchanges over six weeks.

- **The ripple effects are real.** Investor Kevin Xu suggested other Chinese labs may follow Alibaba's lead. The SCMP ([article](https://www.scmp.com/tech/big-tech/article/3359375/alibaba-bans-staff-using-claude-code-over-anthropic-spyware-concerns)) frames it as deepening distrust toward Anthropic within China's developer community and part of a broader push to reduce dependence on foreign AI suppliers.

## Fable 5 Subscription Countdown: 2 Days Left

- **Fable 5 leaves paid subscriptions on July 12 at 11:59 PM PT** ([BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/), [Forbes](https://www.forbes.com/sites/sandycarter/2026/07/07/claude-fable-5-extends-by-five-more-days-10-moves-to-make-now/)). After that, Pro/Max/Team/Enterprise users pay API rates via usage credits: $10/M input, $50/M output. The original deadline was July 7 but Anthropic extended after backlash — understandable given the chaos: Fable launched June 9, the export-control directive took it offline June 12, and it only came back July 1.

- **Thariq says Fable will return to subscriptions** "as soon as capacity allows" ([post](https://x.com/trq212/status/2072814903170408784)), but there's no timeline. The practical question every team is asking: is it worth budgeting usage credits for Fable, or is Sol now "good enough" for daily work? Yesterday's Sol reviews suggest the answer is model-dependent — Fable keeps its edge on targeted debug/security/performance tasks, Sol wins on sustained agentic work.

## Skills & Workflows

- **Matt Pocock ships skills v1.1** ([changelog](https://www.aihero.dev/skills/skills-changelog-v1-1-wayfinder-to-spec-to-tickets-grilling-improvements), [announcement](https://x.com/mattpocockuk/status/2074860312423997800)). The headline: `/wayfinder` graduates from experimental — it takes work too big for one agent session, charts it as investigation tickets on your issue tracker, then resolves them one at a time until the path is clear. `/to-prd` and `/to-issues` are renamed to `/to-spec` and `/to-tickets` (what they produced was never really a PRD). `/implement` and `/code-review` complete the full lifecycle. Skills are also **no longer GitHub-specific** — point the setup at any programmatically-accessible tracker. The repo is at 135K+ GitHub stars.

- **His "code is cheap" pushback** ([post](https://x.com/mattpocockuk/status/2075106497176981692)) continues a recurring theme: the phrase correctly says code is cheaper to produce but wrongly implies it's disposable. "Code is the environment the agent operates in. Better code = better output." This ties directly to his course philosophy — AI coding from first principles, not throwaway prompting.

- **Thariq's "Field Guide to Fable"** ([article](https://x.com/trq212/article/2073100352921215386), [Latent Space coverage](https://www.latent.space/p/ainews-the-field-guide-to-fable)) drew 2M+ views in its first three days and is still generating discussion. The core lesson: the map (your prompt, skills, CLAUDE.md) is not the territory. The gap between them is "unknowns." The field guide covers unhobbling Claude, capability overhang, finding unknowns, system-prompt shrink, and being unreasonable with frontier models. A [GitHub repo](https://github.com/bozhouDev/finding-unknowns-skills) has already packaged the key ideas as installable skills. Now also [on YouTube](https://x.com/trq212/status/2074163788853760175) from the AI Engineer World Fair keynote.

## Roles & Industry Shifts

- **Boris Cherny's five-archetypes post** ([thread](https://x.com/bcherny/status/2071379474277613732)) continues to generate coverage ([AOL](https://www.aol.com/articles/5-job-archetypes-future-according-141801000.html), [BigGo Finance](https://finance.biggo.com/news/c8e37d53-c061-4eef-b2a7-77d68021b3b8)). As engineering, product, design, and DS roles melt together, he sees five archetypes on the Claude Code team: **Prototyper** (brand new ideas, most don't ship), **Builder** (prototype to production fast), **Sweeper** (clean up, simplify, unship), **Grower** (iterate toward PMF), **Maintainer** (scale, secure, harden). Most people span 2–3. The key insight: these aren't job titles — they cut across functions. Some designers are Prototypers, some are Sweepers. Healthy teams need a mix, weighted by product maturity.

- **Karpathy's "AI Psychosis" framing** ([thread](https://x.com/karpathy/status/2042334451611693415)) keeps reverberating weeks after posting. The gap: people who tried free-tier ChatGPT last year vs. people paying $200/month for frontier agentic models are "speaking past each other." The $200/month crowd sees models melting problems that would take days or weeks — he calls the resulting cognitive state "AI Psychosis." Boris Cherny [responded](https://x.com/bcherny/status/2015979257038831967) that the Claude Code team itself might be an indicator of where things are headed: they hire mostly generalists who span the archetypes.

- **Theo estimates ~6 months until most devs move code agents off laptops** ([post](https://x.com/theo/status/2071083700385955906)). He's already living there — a terminal-plus-AI environment with a cluster of local machines handling inference. His overnight agent run filing and merging four stacked PRs ([coverage](https://finance.biggo.com/news/0630550c86453c18)) is the proof point.

## Agentic Retrieval & Infrastructure

- **Jerry Liu unveils LlamaIndex's Retrieval Harness** ([announcement](https://x.com/jerryjliu0/status/2073407100642852871), [MarkTechPost](https://www.marktechpost.com/2026/07/05/llamaindex-legal-kb-agentic-retrieval-over-index-v2-with-retrieve-find-read-and-grep-tools/)). Instead of one embedding search per query, the harness gives agents filesystem-style tools: semantic/keyword search, regex grep, file search, and read operations over a persistent data pipeline. Plug it into any agent and it can autonomously crawl an arbitrary knowledge base. The reference app is [legal-kb](https://github.com/run-llama/legal-kb) — contract review against any compliance ruleset. This is the pattern that differentiates agentic RAG from traditional RAG: the agent decides how to navigate, not the pipeline.

- **Claude Managed Agents quietly shipped Memory, Multi-agent coordination, and Outcomes to public beta** ([Linas's Newsletter](https://linas.substack.com/p/claude-managed-agents-update)). Scheduled deployments turn a Claude agent from a tool you call into an autonomous worker on a cron. One company 3x'd to $10M annualized on Anthropic's agent stack. AWS and Google shipped near-identical managed harnesses within two weeks of launch.

- **Armin Ronacher's "The Coming Loop"** ([essay](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)) remains the essential reading on harness architecture. Two loops: the agent loop (tool → result → tool) and the harness loop (external system deciding when to continue, restart, or escalate agent work across sessions). He's honest about the tradeoff: loops are probably inevitable due to competitive pressure, but they risk overly defensive code, loss of architectural coherence, and shipping code no human fully understands. His [follow-up question](https://x.com/mitsuhiko/status/2074986669229367549) on whether RL even punishes wasted tokens got confirmed by Florian Brand — token efficiency is a factor in RL, but the model cards don't say how much.

## Quick Hits

- **steipete says GPT-5.6 on Cerebras is "insane, 10x speed"** ([post](https://x.com/steipete/status/2074913617636675939)) and his `autoreview` skill remains the most impactful in his stack — it reviews code before landing a PR and "finds so many edge cases, sometimes runs for hours" ([post](https://x.com/steipete/status/2059453909819654554)). He's now at OpenAI working on agents, while OpenClaw moved to an independent nonprofit foundation.

- **Simon Willison on AI commit messages** ([post](https://x.com/simonw/status/2074948137182257284)): he's been letting Claude write almost all of his, but doesn't feel great about it. The problem: AI commit messages describe what's visible in the diff while "omitting the higher-level framing." The memorable line from a team lead who declared a moratorium: "I'd rather see your prompt than your output." Simon's mitigation: link commits back to human-written issues.

- **swyx on Cognition's SWE-1.7** ([post](https://x.com/swyx/status/2074919183947808881)): the interesting part isn't the score — it's that Cognition productionized a Chinese base model, built a multilingual propaganda & censorship eval, corrected for it in post-training, and serves it at 1000 tok/s on Cerebras. Most agent labs won't acknowledge Chinese model use because they sell to gov/defense.

- **LLMJunky × Cerebras** ([post](https://x.com/LLMJunky/status/2075002147100303520)): "the world's first natively multimodal model to crack 2,300 tok/s." Meanwhile on the local front, antirez is hitting 50 tok/s on DeepSeek v4 Flash with two M5 Max 128GB systems, and someone is running 8 clustered DGX Sparks with 1TB unified memory.

- **State of AI for Web Devs 2026** ([results](https://2026.stateofai.dev/en-US)): Theo's survey collected 7,258 responses. AI-generated code jumped from 28% average in 2025 to 54% in 2026. Claude Code leads positive sentiment among coding agents at 42.3%. Claude is the model devs actually pay for the most, despite ChatGPT's higher overall popularity.

- **AI coding agent security is the emerging headache** ([Adversa AI](https://adversa.ai/blog/top-ai-coding-agent-security-resources-july-2026/), [The Hacker News](https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html)): July exposed that agents are expanding attack surface faster than patches, with supply chain flaws including the Claude Code GitHub Action poisoning and the GuardFall revelation.
