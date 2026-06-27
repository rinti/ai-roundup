---
title: "Karpathy's Anthropic Claude.md Leaks, AIE Hackathon Kicks Off & Fable 5 Still Dark"
date: "2026-06-27"
summary: "The day's biggest signal came from an unlikely source: **a friend on Karpathy's Anthropic team leaked the Claude.md file he actually uses**, and Raytar's tweet about it is going viral — reigniting the CLAUDE.md discourse five months after Karpathy's original coding notes spawned a 109K-star GitHub repo. Meanwhile, the **AI Engineer World's Fair Hackathon kicked off in SF** (June 27–28), focused on recursive self-improvement systems, with the main conference (June 29 – July 2) looming. The **Fable 5 / Mythos 5 export suspension enters day 15** with no subscriber access restored — only a narrow carve-out for US critical infrastructure operators running Mythos. GPT-5.6 is priced at 83% on Polymarket for a pre-June 28 launch, but it'll be government-vetted preview only. In the broader conversation: **Armin Ronacher's 'The Coming Loop' essay** (June 23) is still driving Hacker News debate on harness loops vs agent loops; **Matt Pocock teased /loop-me**, a skill that interviews you to find AI delegation opportunities; **Theo revealed his multi-machine local inference fleet**; and **Simon Willison published on AI and Liability**. The loop engineering wave that steipete and bcherny kicked off earlier this month has now fully mainstreamed — multiple tutorial threads, a Grok summary, and Medium think-pieces are everywhere."
tags:
  - Karpathy's Anthropic Claude.md Leaks
  - AIE World's Fair Hackathon Kicks Off
  - Fable 5 Still Dark — Day 15
  - The Coming Loop — Ronacher's Essay Keeps Burning
  - Matt Pocock's /loop-me and AIE SF Talk
  - Theo's Local Inference Fleet
  - Simon Willison on AI and Liability
  - Sakana Fugu Early Reviews
---

# AI Roundup — June 27, 2026

## Karpathy's Anthropic Claude.md Leaks

The discourse that won't die got a fresh injection today. Five weeks after joining Anthropic's pre-training team, **Karpathy's actual working Claude.md file leaked** via a colleague — and the tweet is going viral.

**The tweet.** [Raytar](https://x.com/Raytar/status/2070577723089768500): "Andrej Karpathy joined Anthropic five weeks ago. Yesterday my friend on his team sent me the Claude.md file he actually uses. **It completely changed how I work with Claude. From the very first message, the difference was obvious.** With this file, Claude finally stops fighting me." The framing is pure engagement-bait, but it's working — the replies are splitting between people who think it's genuinely revelatory and people pointing out that the [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) repo (now 109K+ stars) already distilled the same principles months ago.

**The four principles** that keep resurfacing across every version: think before coding, keep it simple, make surgical changes, and drive execution toward a verifiable goal. Whether this "Anthropic-era" Claude.md meaningfully differs from the January original is hard to verify without the actual file — but the meta-story is clear: CLAUDE.md configuration is now its own genre, with [annotated guides](https://mcp.directory/blog/karpathy-claude-md-annotated-2026), [comparison posts](https://paddo.dev/blog/viral-claude-md-and-mine/), and multiple Medium explainers competing for attention.

**Why it matters this week.** Karpathy's [original "new paradigm" tweet](https://x.com/karpathy/status/2069547676849557725) about Claude Tag being the "3rd major redesign of LLM UI/UX" was [roasted hard in yesterday's roundup](https://x.com/theo/status/2070236351157674313) — the replies split between "he's just doing DevRel" and "no, he genuinely sees patterns others miss." Today's Claude.md leak keeps him at the center of the conversation, this time on firmer ground: practical configuration rather than paradigm claims.

## AIE World's Fair Hackathon Kicks Off

**The pre-conference warm-up.** The second official [AI Engineer World's Fair Hackathon](https://cerebralvalley.ai/e/aiewf-hackathon-2026), hosted with Cerebral Valley, kicks off today (June 27–28) in San Francisco. The theme: **recursive self-improvement — building systems that learn from their own outputs.** $10K+ in prizes, partner credits, and tickets to the main fair.

**The main event.** [AI Engineer World's Fair 2026](https://www.ai.engineer/worldsfair/2026) runs June 29 – July 2 at Moscone. The pre-conference noise has been building all week: [Thariq gives the Day 2 opening keynote](https://x.com/trq212/status/2067737883545596368), [swyx added a first-ever "music corner"](https://x.com/swyx/status/2070235775636320540) for devs who also make music, [Armin Ronacher decided on last-minute travel to SF](https://x.com/mitsuhiko/status/2070239341444497887), and [Matt Pocock's talk "Building Great Skills: The Missing Manual"](https://x.com/mattpocockuk/status/2069170261367128080) is generating buzz. Barry Zyj and Mahesh Murag from Anthropic are speaking about Claude skills. Expect next week's roundups to be wall-to-wall conference dispatches.

## Fable 5 Still Dark — Day 15

The biggest ongoing story in AI continues: **Fable 5 and Mythos 5 remain suspended worldwide**, 15 days after the [Commerce Department's June 12 export control directive](https://www.anthropic.com/news/fable-mythos-access).

**The latest.** Anthropic staff confirmed zero Fable 5 traffic as of June 25. Viral rumors of a return [are incorrect](https://explainx.ai/blog/is-fable-5-back-2026). The one carve-out: the US government notified Anthropic that **Mythos 5 can be redeployed to US organizations that operate and defend critical infrastructure** — but Fable 5 is not back for subscribers, Claude Code, or general API users.

**The jailbreak backstory.** The government cited [a method of bypassing Fable 5's safeguards](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) to access Mythos's cybersecurity capabilities. Anthropic's position: the jailbreak was narrow, applied to only one specific instance, and [could elicit similar capabilities from other models including GPT-5.5](https://www.anthropic.com/news/fable-mythos-access). The government disagreed.

**GPT-5.6 in the same boat.** OpenAI's GPT-5.6 is [priced at 83% on Polymarket](https://explainx.ai/blog/gpt-5-6-release-date-features-benchmarks-2026) for a pre-June 28 launch, but reportedly it'll be **government-vetted preview only** — not by choice, but at the Trump administration's explicit request. That's the second major US government intervention on frontier models in June. The post-Mythos era is reshaping how models ship.

## The Coming Loop — Ronacher's Essay Keeps Burning

Armin Ronacher's ["The Coming Loop"](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) (June 23) continues to drive [Hacker News discussion](https://news.ycombinator.com/item?id=48643180) four days later. The essay distinguishes between **agent loops** (internal to a coding agent — the ReAct cycle) and **harness loops** (external systems that control when work continues, verify output, and decide whether to re-invoke the agent).

**The key argument.** Even self-described "loop skeptics" will end up with harness loops, because the alternative — manually re-prompting after every verification failure — is just a harness loop with a human in it. The question isn't whether to loop, but how much autonomy the loop gets. Ronacher's worry: maintaining **human comprehension and control** over increasingly autonomous systems.

**Why it's still relevant.** The essay crystallizes the tension between the loop-maximalists (steipete: ["you should be designing loops that prompt your agents"](https://x.com/steipete/status/1952876728277172346), bcherny: ["/loops is my favorite feature today"](https://thenewstack.io/loop-engineering/)) and the cautious practitioners who want the loop but fear losing understanding of what it's doing. His [agent-prompts repo](https://github.com/mitsuhiko/agent-prompts) backs up the theory with working code. Meanwhile, his kids [built a game with Pi and Codex over the weekend](https://mitsuhiko.github.io/rope-man-game/) — "with a bit of polishing I think getting agentic coding to be kids-friendly is within reach."

## Matt Pocock's /loop-me and AIE SF Talk

**New skill alert.** [Matt Pocock](https://x.com/mattpocockuk/status/2069729160600203595): "New in-progress skill: **/loop-me** — Interviews you about your work and finds opportunities for delegating your day-to-day work to AI." It's a meta-skill: instead of automating a specific task, it interrogates your workflow to figure out *what* to automate. Consistent with the broader loop-engineering wave, but from the "where do I even start?" angle.

**Skills v1.0 context.** The [mattpocock/skills repo](https://github.com/mattpocock/skills) hit 135K+ stars and 11.7K+ forks as of June 2026 — the most-starred agent skills collection on GitHub. The v1.0.1 release (June 17) shipped progressive disclosure (63% lower token costs by loading summaries first), shared design skills, and a formal user-invoked vs model-invoked taxonomy.

**AIE talk.** [Pocock](https://x.com/mattpocockuk/status/2069170261367128080): "My talk at AIE SF is going to be a banger: **Building Great Skills: The Missing Manual** — A framework for building and improving skills, from the ground up." Between this and his [AI Coding Cohort v2](https://x.com/mattpocockuk/status/2056447804537741327) (2,500+ students in v1), he's positioned himself as the definitive teacher of Claude Code workflows.

## Theo's Local Inference Fleet

A [June 25 episode](https://finance.biggo.com/podcast/c7c3cb2193d150d2) documented Theo's workflow shift: he now **spends nearly zero time in traditional code editors**, living instead in a terminal-plus-AI environment where **a cluster of local machines handles inference**.

**The setup.** Theo operates a multi-machine on-premises inference fleet, running alongside Codex's $200/month plan. He's written a custom command — `ccusagefleet` — that polls all machines on his home network to aggregate total inference volume. The thesis: subscription economics, local hardware, and model performance have crossed an inflection point where a code-editor-free cycle is not just viable but preferable for power users.

**The pricing arbitrage.** Theo has been revealing pricing-arbitrage opportunities between Codex and Claude plans — exploiting cheap cloud inference for capacity when local resources are insufficient, and local inference for latency, control, and multi-threading advantages. He promised a deeper technical walkthrough of the fleet architecture starting June 30, timed to AIE week.

**Broader context.** This sits alongside yesterday's chip-price panic thread — Theo told people to ["just buy it now, it's gonna get worse before it gets better"](https://x.com/theo/status/2070240573160915012) (3K likes, 105K views). The export-squeeze hitting Mac and chip prices is the same force making local inference more strategically important.

## Simon Willison on AI and Liability

Simon Willison published ["AI and Liability"](https://simonwillison.net/2026/Jun/25/ai-and-liability/) on June 25, adding to his steady stream of substantive AI analysis. His recent blog output also includes:

- [**"Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code"**](https://simonwillison.net/2026/Jun/22/porting-moebius/) (June 22) — Got a PyTorch/CUDA model running via WebGPU in the browser. Demo at [simonw.github.io/moebius-web](https://simonw.github.io/moebius-web/).
- [**"GLM-5.2 is probably the most powerful text-only open weights LLM"**](https://simonwillison.net/2026/jun/17/glm-52/) (June 17) — Z.ai's 753B parameter MoE model (40 active parameters), released under MIT license.
- [**Agentic Engineering Patterns**](https://simonw.substack.com/p/agentic-engineering-patterns) — Newsletter piece on emerging patterns in agent design.

On the tooling front, he caught [Daytona quietly closing its sandbox source code](https://x.com/simonw/status/2070212662903099536) yesterday — a story that generated strong backlash in the replies, with developers questioning how a sandboxing company can say "trust us, you cannot inspect the boundary anymore."

## Sakana Fugu Early Reviews — Not Great

Sakana AI's [Fugu](https://sakana.ai/fugu/) — an orchestration model that routes tasks across a pool of frontier LLMs — launched June 22 and the early developer reviews are rough.

**The LLMJunky verdict.** [@LLMJunky](https://x.com/LLMJunky/status/2061952563528745449) blew through his entire five-hour quota on the $20 plan with a single prompt. A ThreeJS coding task came back **"notably worse than GPT 5.5"** and needed seven or eight fix rounds before the game even ran. "Early impressions…not great."

**The benchmark gap.** Where Sakana claims Fugu Ultra "matches" Fable 5, the numbers tell a different story: **Fable 5 wins 3 of 4** published benchmarks (e.g., SWE-Bench Pro 80.0 vs 73.7). Ethan Mollick and independent testers flagged a [sharp gap between benchmark claims and real use](https://the-decoder.com/sakana-ais-fugu-orchestrates-multiple-llms-to-match-anthropics-fable-and-mythos-benchmarks/) within 24 hours of launch. On Hacker News, developers complain the $200/month plan delivers less than three hours a week.

---

## Also Noted

- **Loop engineering has fully mainstreamed.** What started with [steipete's June 8 tweet](https://x.com/steipete/status/1952876728277172346) (6.5M views) and [bcherny's definition at WorkOS Acquired Unplugged](https://thenewstack.io/loop-engineering/) has spawned 2,200+ posts, a Grok summary, [Medium think-pieces](https://medium.com/data-science-collective/how-to-build-a-claude-loop-engineering-better-than-99-of-people-3ab8701d176c), and a [security analysis](https://medium.com/@filipv_74515/from-prompt-engineering-to-loop-engineering-why-the-agent-era-demands-a-new-security-paradigm-816385040e3d). The phrase has crossed from insider jargon to LinkedIn territory.
- **Thariq on Claude Tag.** [trq212](https://x.com/trq212/status/2070238581147455842): "I'll be talking more about Claude Tag with @petergyang and at AIE with @_catwu." He also previously announced [winding back peak-hour limit reductions and doubling 5-hour limits](https://x.com/trq212/status/2052065936585457982), partnering with SpaceX for more compute.
- **swyx / Latent Space.** Recent episodes cover [xAI's Grok Imagine and video agents](https://www.latent.space/podcast) with Ethan He, and stress-testing AI agents with Andon Labs (Vending-Bench, Butter-Bench). The AI Engineer World's Fair (June 29 – July 2) is swyx's event — expect heavy coverage next week.
- **Jerry Liu / LlamaIndex.** LiteParse hit 10K GitHub stars. Jerry Liu continues posting about [Mistral OCR results on ParseBench](https://x.com/jerryjliu0/status/2069825393201483849) and building MCP servers for document extraction workflows. LlamaIndex's 2026 thesis: agents transition from workflows to employees, with long-horizon event triggers, persistent task backlogs, and inbox-style interfaces.
