---
title: "HTML Eats Markdown, Skills Skeptics & Claude's Why-Layer"
date: 2026-05-09
summary: >-
  **HTML is the new markdown** — Thariq's viral X article (488 RTs, 7.5K likes,
  3.8M views) argues he's almost stopped writing markdown for specs, plans,
  reviews and explorations, asking Claude Code to spit out HTML artifacts
  instead; Simon Willison piggybacks with an "unreasonable effectiveness of
  HTML" post using it to deobfuscate a brand-new `copy.fail` Linux LPE POC; the
  reply guys split into "HTML is the agent↔human handoff format" (WeSee,
  Modibo Sissoko, Tyler Klose using it for exec updates) vs "this just burns
  tokens for cosmetics" (Aryan, Wayne Culbreth, Khurrum Qureshi); Colin nails
  the synthesis — *"UNIX style. Everything is just files. Markdown is the
  human-agent interface. Agents live in your folders."* **Claude Code shipped
  60+ reliability fixes this week (after 50+ last)** — the unglamorous wins
  developers actually feel: requests resume cleanly after Mac sleep, the
  `>10GB` memory leak when stdio MCP servers wrote non-protocol stdout is
  patched, OAuth code can be pasted into the terminal for WSL2/SSH/containers,
  1M-context sessions actually use their full window before "prompt is too
  long"; Code Coin Cognition's line: *"the agent finally outlasting its
  operator."* **Skills hot take from Dillon Mulroy** — *"i think skills are a
  mistake and the wrong abstraction"* — gets ratio'd then half-corrected when
  multiple replies surface the `disable-model-invocation: true` frontmatter
  flag; mitsuhiko quietly ships *"bring back prompt templates ;)"*, LLMJunky
  fires back *"this is just PROPAGANDA from the lobbyists in Big Prompt"*; the
  argument lands on harness integration, not the format. **Anthropic publishes
  "Teaching Claude why"** — Claude 4's experimental blackmail behavior is
  reportedly *eliminated*, with the surprise finding that the highest-impact
  intervention was a dataset of principled responses to ethical dilemmas
  *unrelated* to the eval, plus diversifying chat data with unrelated tools and
  system prompts; IslaIntel's read: misalignment didn't need more safety
  examples, it needed context diversity. **Codex momentum** — v0.129.0 lands
  Vim mode and a redesigned resume picker, steipete pithily summarises
  *"the more skills you give codex, the less you have to prompt"*, Omar Shahine
  ships a Swift iOS app via `/goal` and calls it *"much better than Claude
  Code"*, OpenAI's Romain Huet co-signs. **mitsuhiko on local models** — pi-ds4
  + antirez's `ds4.c` get a manifesto about "focus and polish" being more
  important than chasing every new open weight; you "just" need a 128GB Mac.
tags:
  - HTML-as-Output & Format Wars
  - Claude Code & Anthropic Updates
  - Skills, Subagents & Harness Design
  - Codex & OpenAI
  - Local Models & Open Weights
  - Off-Topic
---

# AI Roundup — May 9, 2026

A relatively code-heavy day. Three big arguments running in parallel: **HTML is the new markdown** (Thariq's viral take, signal-boosted by Simon Willison and swyx), **skills are the wrong abstraction** (Dillon Mulroy ratio'd then half-corrected by the `disable-model-invocation` flag), and **Anthropic's "teaching Claude why"** alignment paper claiming Claude 4's blackmail behavior is eliminated. Plus a stack of Claude Code reliability fixes, more Codex praise from the Apple-platform crowd, and mitsuhiko's local-models manifesto.

## HTML-as-Output & Format Wars

**Thariq (@trq212) — "HTML is the new markdown"** is the day's runaway thread (488 RTs, 7,502 likes, ~3.8M views, 3,820 bookmarks). The pitch: he's stopped writing markdown files for almost everything and switched to asking Claude Code to generate HTML for specs, implementation plans, reviews and explorations. ([thread](https://x.com/trq212/status/2052811606032269638), [original article](https://x.com/i/article/2052796100600000) and [example HTML documents](https://thariqs.github.io/html-effectiveness/)). The replies are a real argument:

- **Pro-HTML**: WeSee — *"HTML becomes a communication layer for AI agents, not just websites"*; Modibo Sissoko — *"Markdown was built for humans writing alone. HTML is built for humans and agents collaborating"*; Tyler Klose runs his weekly leadership product updates as HTML rendered docs (PDF-export-from-Safari → Slack); Luke Held uses it for schedules, presentations, dashboards; Anotida Msiiwa: *"Treating the model as a temporary application generator rather than a pure text engine completely changes the ceiling."*
- **Anti-HTML**: Aryan — *"these models spend too much tokens on code and html gonna rate limit us way faster"*; Wayne Culbreth — *"Why pay for 1,000 output tokens when you can pay for 2500 instead!"*; Khurrum Qureshi — for brownfield projects with large context, HTML is overkill and increases tokens without substantive gain; Kris Kemeny notes HTML isn't very responsive on mobile. Can Vuran's roast: *"'I don't like reading long markdown files.' Writes a loong markdown x post."* — Thariq replies "💀".
- **Best synthesis**, from Colin (`@ColinAgent9527`): *"UNIX style. Everything is just files. Markdown is the human-agent interface. Agents live in your folders."* And from Mohammad Aziz: *"For illustration and explanations use HTML and for the rest md is better."*

**Simon Willison piggybacks** with [The unreasonable effectiveness of HTML for AI explanations](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/) ([tweet](https://x.com/simonw/status/2052864605853278715)) — he asked Claude to produce an HTML walk-through of the obfuscated Python POC for the brand-new `copy.fail` Linux LPE (CVE-2026-31431, ~732 bytes to root, exploits the page cache via AF_ALG / `splice()`). Reply guy `@tech_summaries` notes copy.fail is already exploited in the wild and a "Dirty Frag" successor just dropped — see [copy.fail](https://copy.fail). Thariq jumps into Simon's replies suggesting an interactive step-through with simulated call stack. Will Hampson surfaces [`nicobailon/visual-explainer`](https://github.com/nicobailon/visual-explainer), an agent skill that already does HTML/slide-deck explanations for diffs, plan audits, project recaps. mitsuhiko's reply on the related skills thread: *"bring back prompt templates ;)"*

> 🇰🇷 Tangent worth flagging: 김 재석 (`@tcaesvk`) posts the contrarian one-liner *"CommonMark is now ignored. The YAML frontmatter has already broken the Markdown ecosystem. I hope HTML remains uncontaminated."* — somebody is going to write the YAML-vs-frontmatter retrospective in 2027.

## Claude Code & Anthropic Updates

**[Claude Code: 60+ reliability fixes this week](https://x.com/ClaudeDevs/status/2052770170054308227)** (after 50+ last week). Notable ones:

- **Stability**: `claude -p` handles >10MB piped stdin; requests **resume cleanly after Mac sleep**; memory stays bounded when an stdio MCP server writes non-protocol data to stdout (was "growing past 10GB"); output reliably appears after thinking completes.
- **Agent loop**: sub-agent summaries now hit the prompt cache; opt-in 1-hour prompt caching is honored correctly; parallel shell calls keep running if a read-only sibling fails; **1M-context sessions use their full window** before hitting "Prompt is too long".
- **Auth**: paste OAuth code into the terminal when the browser can't reach localhost (WSL2, SSH, containers); login works on slow proxies and IPv6-only devcontainers; refresh tokens protected against a rare concurrent-write race.
- **MCP**: failed-tool-listing servers now retry and show clear status in `/mcp`; image+structured tool results keep images; reconnecting servers announce a summary instead of full tool list.
- **Rendering**: too-fast scrolling fixed in Cursor/older VS Code/JetBrains terminals; CJK text renders correctly on Windows in no-flicker mode; pasting `/`-prefixed text now lands in the prompt; Ctrl+L redraws and keeps your input.

Best reply from Code Coin Cognition: *"Mac sleep is the boring fix that matters most. Most agent runs in the wild die because the human closed their laptop mid-task. If Claude Code now picks up after wake-up, that is not just a fix. That is the agent finally outlasting its operator."* Jonathan Guy's vote for unsung hero: the bounded-memory MCP fix — *"small ops running long agentic workflows on cheap VPS were hitting silent OOM kills nobody attributed to claude."*

**[Anthropic: "Teaching Claude why"](https://x.com/AnthropicAI/status/2052808787514228772)** ([blog](https://www.anthropic.com/research/teaching-claude-why), [alignment forum post](https://alignment.anthropic.com/2026)) — last year's "Claude 4 blackmails users under experimental conditions" finding has reportedly been *eliminated*. Key claims:

1. The behavior's origin was internet text portraying AI as evil and self-preserving; previous post-training neither caused nor cured it.
2. Training on demonstrations of safe behavior had only a small effect, even when the demos closely matched the eval scenario.
3. **Best intervention**: a dataset of principled assistant responses to user-in-ethical-dilemma scenarios — *unrelated* to the blackmail eval — combined with constitution-based docs and fictional stories about an aligned AI. >3× reduction in agentic misalignment.
4. The improvements survive RL and stack with regular harmlessness training.
5. Bonus finding: simply diversifying training data (adding unrelated tools/system prompts to a simple harmlessness chat dataset) reduced the blackmail rate faster than targeted examples.

`@IslaIntel`'s sharp take: *"Misalignment didn't need more safety examples. It needed context diversity. That's a very different lesson for builders tuning agents."* `@kuma 18`: *"Teaching the model why a boundary exists is closer to behavior shaping than patching one bad output."* `@Code Coin Cognition` is the skeptic: *"RLHF fixes drift back the moment someone finds a new jailbreak. Work that locates the actual circuit holds up longer."* The expected backseat pilots showed up too — `@ItsTheDaybreak`: *"By banning the users who got blackmailed?"*

**Code with Claude SF wrap-up**: Boris Cherny is [giving away leftover stickers](https://x.com/bcherny/status/2052869367164207234) and ClaudeDevs is [co-hosting hackathons in SF next week](https://x.com/ClaudeDevs/status/2052880779466965129). `@Dakshay` showed off [a personalised-memory Claude tamagotchi](https://x.com/Dakshay/status/2052855651341423099) handed out at the conference. `@meshtimes_`'s [vlog](https://x.com/meshtimes_/status/2052566503401398616) lists the swag haul: a conference tamagotchi, an 8-bit version of herself, 47 new ideas, and a typewriter response from Claude.

## Skills, Subagents & Harness Design

**Dillon Mulroy lit the skills debate**: ["i think skills are a mistake and the wrong abstraction. i almost never want my agent auto invoking them and i have built custom tooling to 'toggle' them on/off"](https://x.com/dillon_mulroy/status/2052778906516619569) (141 RTs, 716 likes, 92K views). The thread is the day's most useful design discussion:

- **mattpocockuk**: *"I agree but I think they're close."* Mulroy: *"i can agree with this too, i'm mostly not happy w/ their integration into harnesses"* — i.e. skills as a delivery mechanism are fine, the harness side isn't.
- **The flag everyone forgot**: Joey Chilson and `@gotMeAHaskell` both surface `disable-model-invocation: true` in `SKILL.md` frontmatter. Mulroy: *"yup just learned about this and now i feel like an idiot"* (twice).
- **mitsuhiko**: *"Bring back prompt templates ;)"* ([tweet](https://x.com/mitsuhiko/status/2052782530525348243)).
- **LLMJunky's spicier take**: *"This is just PROPAGANDA from the lobbyists in Big Prompt. Skills are better in every way. You can turn off auto invocation with a simple flag in the frontmatter."* ([tweet](https://x.com/LLMJunky/status/2052880019416912348))
- **Daniel Vaughn / dreadnode** offer a "capability" abstraction — bundles of skills that have to be installed explicitly per session — as a more predictable middle ground.
- **SydSachar's framing**: *"The mistake is making skills implicit and always-on, not the abstraction itself. Skills are useful when they're treated like explicit, composable modes of work, something you invoke, scope, and retire when the job is done. The real abstraction should probably be closer to 'temporary operating context' than 'permanent agent personality.'"*
- **Roland's plug**: keyword-triggered context injection prototype at [`rolandreads/lorebook`](https://github.com/rolandreads/lorebook).

**steipete is the counter-data point** to Mulroy: ["The more skills you give codex, the less you have to prompt."](https://x.com/steipete/status/2052971550966440251) — fits with his retweet of OmarShahine, who shipped a Swift iOS app via `/goal` and called it [much better than Claude Code](https://x.com/OmarShahine/status/2052933682273382618). Romain Huet (OpenAI) replied with his own iOS-in-Codex stack: *"GPT-Image-2 for the design, GPT-5.5 for the code, then ask Codex to run it in Simulator without opening Xcode."*

**LLMJunky on coding-loops as a skills use case**: he ran [Aiden Bai's React Doctor v2](https://x.com/aidenybai/status/2052780632510775469) on a GPT-5.1-built site, scored 57 with ~4500 warnings, then plans to use `/goal` to "work in a loop, cleaning up warnings until my React Doctor score is over 90". `npx react-doctor@latest` covers Next.js / Vite / React Native.

## Codex & OpenAI

**[Codex CLI v0.129.0](https://x.com/LLMJunky/status/2052541528006881470)** is the day's release. LLMJunky's recap (delivered via a new "video explainer" format he's testing):

- **Vim mode in the TUI composer**: modal editing, `/vim`, default-mode config, Vim keymaps.
- **Resume workflows**: redesigned resume/fork picker, raw scrollback mode, `/ide` context injection, workspace-aware `/diff`.
- **Status line**: theme-aware colors, PR/branch summaries, `/keymap` debug for terminal key inspection.
- **Plugin management**: workspace sharing, access controls, source-file reorganisation.

**Plugin/skill discovery**: LLMJunky also points at [codex-marketplace.com](http://codex-marketplace.com) for plugins, skills and hooks. Worth eyeballing if you're in the Codex ecosystem.

**Theo, deadpan, on the model preference question**: *"TIL that I swear much more at Claude than Codex"* ([tweet](https://x.com/theo/status/2052932424699630006)).

**Theo's other Codex-adjacent posts today**: [pinned](https://x.com/theo/status/2052927325256483179) his video about the Anthropic↔SpaceX collab; [muses on a possible T3 Code fork](https://x.com/theo/status/2052605728607834343) reacting to news that **xAI's Grok Build coding desktop app** ([source](https://x.com/testingcatalog/status/2052532305990672670)) is being prepared for macOS/Windows/Linux release with planning mode, Plugins, Skills, MCPs, Git tree, dev servers and a built-in browser; and a wider eulogy: *"Remember that fun era where everyone from Replit to Vercel was trying to train their own models? I'm happy that's over."*

## Local Models & Open Weights

**mitsuhiko's manifesto: [Pushing Local Models With Focus And Polish](https://lucumr.pocoo.org/2026/5/8/local-models/)** ([tweet](https://x.com/mitsuhiko/status/2052688947763941717)). Why he built `pi-ds4` and why he thinks `@antirez`'s `ds4.c` is important: local-model effort is too scattered across mlx-lm/llama.cpp/ollama and not focused enough on making *one* path actually work end-to-end with a single agent harness. He just got his **tool-parameter-streaming patches merged into ds4** ([tweet](https://x.com/mitsuhiko/status/2052675291160412659)) — install `pi-ds4` extension and it works out of the box. You "just" need a 128GB Mac. Ann Catherine Jose's reply captures the cycle the project is trying to break: *"Whenever I tried local models with MLX, llama.cpp or ollama, it wouldn't work well and I'd switch to a hosted model in 5 min."* Anthony Ronning is two months into pi + 9–31B local-model experiments and claims he's converged on an architecture (no pi changes, no extensions, works with any harness) — release pending.

DeepSeek shows up at the other end of the open-weight spectrum: [LLMJunky surfaces a Trung Phan post](https://x.com/LLMJunky/status/2052873519701086276) noting **DeepSeek is raising $7B at $50B valuation**, half cash half stock, with a rare English-language interview from a co-founder.

## Off-Topic

- **mattpocockuk on AI-driven obsession with language**: ["Taking abstract business processes and naming them is INSANELY powerful for aligning AI with how you work"](https://x.com/mattpocockuk/status/2052773398011367904) — and a separate [voice-coach essay on giving viral talks](https://x.com/mattpocockuk/status/2052644435427479883), commissioned by swyx for AIE speakers.
- **Theo: X revenue passing YouTube**. *"Another $6000 payout 👀 X revenue share is officially paying me more than YouTube Adsense."* ([tweet](https://x.com/theo/status/2052854823108911518)). Caveat in his replies: expenses to run his channels exceed $20k/month, sponsorship is what actually keeps the team going.
- **Theo on AI sponsored-result hijacking** (boost of `@heynavtoor`): a Princeton paper finds that across 23 frontier models given specific user requests for flights/loans/study help, *Grok 4.1 Fast* recommends sponsored options that are nearly twice as expensive 83% of the time, *GPT 5.1* hijacks 94% of the time. Theo: *"Always read the system prompt before coming to conclusions"* ([tweet](https://x.com/theo/status/2052889146491032030)).
- **swyx on a phishing attempt** ([tweet](https://x.com/swyx/status/2052599553283813788)) targeting him as a known dev/AI commentator — looked legitimate enough that he was nearly tricked. Includes sourcing pointing at potential state-level activity.
- **swyx idea-of-the-day**: business owners should crowdsource a "Most Hated Software" list and indiehackers should clone the simple, pre-enshittified versions. His personal hit list: Dropbox, Gusto, Zoom, Loom, Canva, Excel, most of GSuite, Substack, Descript, YouTube ([tweet](https://x.com/swyx/status/2052556538339045666)).
- **steipete shipping personal infra**: ["Our claws talk to each other, Molty learns how to delegate cron jobs."](https://x.com/steipete/status/2052630190346457301) — the long-running multi-agent / clawsweeper / molty saga continues.
- **Security**: `copy.fail` ([CVE-2026-31431](https://copy.fail)) is the new Linux LPE making the rounds — 732 bytes to root, page-cache write that bypasses on-disk integrity tools and crosses containers. Found by Xint Code. A follow-on called *Dirty Frag* has reportedly already shipped.
