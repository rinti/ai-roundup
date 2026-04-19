# Opus Prompt Archaeology, T3 Code Bans, and Vienna Codex Vibes

**Date:** 2026-04-19

A weekend in which Anthropic started banning T3 Code users without warning (then un-banning them), Simon Willison diffed the Opus 4.6 → 4.7 system prompts, and Armin Ronacher's Vienna Codex Hackathon at the Sentry office produced a vibecoded judging tool that needed the "clanker" to unfuck the database.

## Anthropic silently bans T3 Code users, then reverses

The biggest drama of the day. Theo started getting reports of Claude Code users who were suddenly banned from Anthropic after using [T3 Code](https://t3.gg), a third-party harness built on top of Claude.

- [Theo: "small number of reports of Anthropic banning T3 Code users without warning"](https://x.com/theo/status/2045618854932734260) — his contacts at Anthropic believe it's in error, they're investigating, cannot replicate in-house.
- [Update: Luke got his account back](https://x.com/theo/status/2045655245607620647). No clarity on why it happened.
- [Theo's exasperated follow-up](https://x.com/theo/status/2045631571395530769): *"It genuinely sucks so hard that we have no clarity whatsoever on what's allowed with your Claude Code subscription. We've been begging for clarity for months. All we get is 'we're working on it' again and again. … There are dozens of incredible builders who want to make incredible things, and none of them even know if they are allowed to."*
- [Theo cites Matt Pocock's satirical rules summary](https://x.com/theo/status/2045632081045413945) — "Claude Code = OK, Claude's online platform = OK, Agent SDK running in personal software = OK... ish?" — as a perfect summary of the confusion.

Not isolated to T3. [Armin Ronacher (@mitsuhiko) highlighted a similar incident](https://x.com/mitsuhiko/status/2045404032370413818): Pato Molina's entire org (60+ people) was deactivated with a terse email and a Google Form to appeal. Armin's take: *"One of the many reasons we need real competition. Two large labs is not enough and we need to ensure we have competitive open models."*

Also this weekend: [T3 Code crossed 50k users and 9.6k GitHub stars](https://x.com/theo/status/2045679981368656341) — Theo joked about raising.

## Simon Willison diffs the Opus 4.6 → 4.7 system prompt

Anthropic publishes their system prompts, so Simon did the archaeology.

[Post: "Claude Opus 4.7 System Prompt"](https://simonwillison.net/2026/Apr/18/opus-system-prompt/) · [Tweet](https://x.com/simonw/status/2045655052548022690)

Highlights of what changed:

**Added:**
- New `<critical_child_safety_instructions>` block — after any child-safety refusal, all subsequent requests in the conversation must be approached with extreme caution.
- Claude in **PowerPoint** joins the Chrome / Excel / Cowork agent lineup.
- A **tool search** capability — the model is told to check for available tools before claiming it cannot do something.
- Disordered-eating guidance — no specific nutrition or exercise numbers for users showing signs.
- Screenshot-attack defense in the `<evenhandedness>` section, guarding against forced yes/no responses on controversial topics.
- "Acting vs. clarifying" — prefer making a reasonable attempt over front-loading clarifying questions.

**Removed:**
- The old rules against asterisks for emotes/actions.
- The warnings against using the words "genuinely" and "honestly".
- The explicit mention that Donald Trump is the current president (the knowledge cutoff updated to January 2026).

**Behavioral shifts:**
- Less pushy — respects when users want to end conversations.
- Concise by default.
- Prefers using tools to resolve ambiguity rather than interrogating the user.

## Vienna Codex Hackathon at the Sentry office

Armin Ronacher, Mario Zechner (@badlogicgames), and @mrlesk ran the [Vienna Codex Hackathon](https://x.com/DanielGri/status/2045428529475510576) at Sentry's office on Saturday. The day's liveblog, from Armin:

- [Hackathon judging delayed because the judging tool is clearly vibecoded](https://x.com/mitsuhiko/status/2045551307847569794)
- [*"We're waiting for the clanker to unfuck the database"*](https://x.com/mitsuhiko/status/2045551530766483930)
- [*"The clanker fixed it"*](https://x.com/mitsuhiko/status/2045594970141122643)
- [*"It's a wrap!"*](https://x.com/mitsuhiko/status/2045567569797505458)

Two talks out of AI Engineer Europe dropped that are directly from this crew:

- **[The Friction is Your Judgment](https://www.youtube.com/watch?v=_Zcw_sVF6hU)** — Armin Ronacher + Cristina Poncela Cubeiro. [@threepointone calls them both required viewing](https://x.com/threepointone/status/2045578175426560448). Thesis (per [the AIE recap](https://x.com/aiDotEngineer/status/2045645619080073695)): ship-without-friction agentic coding tempts you to turn your brain OFF in the moments you most need it ON. Recoding is [online](https://x.com/mitsuhiko/status/2045593453900272032).
- **[Building pi in a World of Slop](https://www.youtube.com/watch?v=RjfbvDXpEg8)** — Mario Zechner (@badlogicgames).

## AIE "beats" TED — Singapore dates announced

swyx — clearly tickled — [reported that an AI Engineer talk outperformed TED on YouTube](https://x.com/swyx/status/2045745951785243012): *"a somber technical talk about security advisories and maintainer burnout beat the happy storytelling lobster on blazer one on the channel with 27 million subscribers???"*

The "lobster" is [Peter Steinberger's TED2026 talk "State of the Claw"](https://www.ted.com/talks/peter_steinberger) — prepped in a week, delivered without teleprompter. [Bilawal Sidhu's behind-the-scenes thread](https://x.com/bilawalsidhu/status/2045291456630509709) is worth a skim.

[AI Engineer Singapore](https://ai.engineer/sg) is May 15–17. [swyx is offering personal cai fan tours](https://x.com/swyx/status/2045737217784684827) to anyone who shows up, and is still recruiting speakers.

## LLMJunky's Codex Superapp feedback thread

8-item wishlist for the new Codex "Superapp" — good read for anyone working on agentic IDEs. [Start of thread](https://x.com/LLMJunky/status/2045549463079440724).

1. Per-project "Custom Instructions" button that auto-syncs with AGENTS.md.
2. GPT 5.4 Pro in the model picker.
3. (unspecified — image)
4. (unspecified)
5. [Browser toggle button](https://x.com/LLMJunky/status/2045560426709061929).
6. [Search inside threads](https://x.com/LLMJunky/status/2045579766951219424) — currently only title search works.
7. [Per-thread persistent pane layouts](https://x.com/LLMJunky/status/2045613999690064130) — re-toggling panes every chat is annoying.
8. [Cloud session handoff](https://x.com/LLMJunky/status/2045685119151743433).

Also: [LLMJunky used Codex to build an app that turns his camera roll into coloring-book pages for his kids](https://x.com/LLMJunky/status/2045684549682602112).

## Tools and libraries

**CodexBar 0.21** — Steipete's macOS menubar app for Codex shipped a big release: Abacus AI provider, Codex Pro $100 tier support, safer OpenAI web extras, fixed local cost scanning, z.ai 5h quotas, Antigravity/Cursor/Ollama fixes, faster refreshes, macOS 26 icon fix. The previously reported "too much CPU" issue traced to an OpenAI web fetch — now disabled for new installs. [Post](https://x.com/steipete/status/2045582547996856682) · [GitHub](https://github.com/steipete/CodexBar).

**LiteParse gets a landing page** — Jerry Liu is positioning LlamaIndex's model-free, open-source document parser as a first-class pillar of their agentic doc platform. Claims 50+ file formats, installable as an agent skill. [Post](https://x.com/jerryjliu0/status/2045664528097247649) · [Page](https://www.llamaindex.ai/liteparse) · [GitHub](https://github.com/run-llama/liteparse). Jerry also [published a ParseBench deep-dive on Content Faithfulness](https://x.com/jerryjliu0/status/2045623431220412755): 167k rules measuring digit / word / sentence-level correctness and reading-order linearization — the two failure modes of VLM-based PDF parsing.

**Matt Pocock's /domain-model skill** — [replaces his /grill-me skill, adds a thin layer of docs + ADRs during ideation](https://x.com/mattpocockuk/status/2045568731678466224). [SKILL.md on GitHub](https://github.com/mattpocock/skills/blob/main/domain-model/SKILL.md). His current DDD-for-AI stance: *"use DDD to document the app but don't prescribe the shape of the app"* — take Ubiquitous Language / Bounded Contexts / ADRs; skip Entities / Value Objects / Aggregates / Domain Events.

**OpenCode desktop goes Electron** — brendan (@brendonovich) announced OpenCode desktop dropped Tauri for Electron, citing speed and reliability. Theo [agreed](https://x.com/theo/status/2045427330395652159): *"Tauri sounds like a really good idea. Electron is usually a better one."* Also related: [OpenCode Nightly now supports Cursor (early access)](https://x.com/jullerino/status/2045295014872543350).

**Grok → OpenClaw** — [Elon Musk announced X API access via OpenClaw](https://x.com/elonmusk/status/2045572706939355483), Steipete's open-source Claude Code fork — *"trying to make it affordable without giving away the shop."*

## Podcast: Theo + davis7 — "Gstack-pill me"

[Episode 2 of Theo's podcast](https://x.com/theo/status/2045362303525355652) is out. davis7 spends most of the episode trying to gstack-pill Theo. Timestamps:

- 02:50 — Is Mythos legit?
- 24:20 — Post-AI Uncle Bob (@unclebobmartin)
- 36:23 — Praising Claude Code
- 40:49 — GStack is actually good (@garrytan)
- 51:07 — Everything should be a md file

Related: [Uncle Bob's "Rule files" rant](https://x.com/unclebobmartin/status/2045485259127423369) ("Bob is quickly becoming one of the best sources for practical AI advice" — [Theo](https://x.com/theo/status/2045649758719717618)).

## Also noted

- Armin Ronacher on Rust: [*"I love Rust, but not unconditionally. The language has some obvious warts (compilation model, lack of self borrows, compile times) and I wish we could be all more adult about it."*](https://x.com/mitsuhiko/status/2045393872881176964) — in reply to Mitchell Hashimoto calling the Rust community the most insecure/defensive in tech.
- Armin: [GitHub randomly jump-scrolls when switching between open and closed issues](https://x.com/mitsuhiko/status/2045419534937432234).
- [Ryan Carson: "holy-shit moment" with his OpenClaw exec assistant](https://x.com/ryancarson/status/2045461154114462049) — his cron-scheduled agent correlated a Vercel sign-in alert from Las Vegas with the fact that he's physically in Tokyo, flagged it for review, and ultimately traced it back to a DevinAI CLI session.
- [@tetsuo_cpp: "Software engineering is largely solved btw"](https://x.com/tetsuo_cpp/status/2045278379696603431) (RT'd by Theo without comment).

## Non-agent side

- Theo, in a fit: [*"I miss when my haters were smart"*](https://x.com/theo/status/2045744493387993464).
- Armin: [learned about the "yankee with no brim" meme from his school-age kids](https://x.com/mitsuhiko/status/2045477338150748255).
