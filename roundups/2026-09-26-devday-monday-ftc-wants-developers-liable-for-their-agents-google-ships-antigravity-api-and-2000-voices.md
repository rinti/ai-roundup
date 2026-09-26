---
title: "DevDay Monday, FTC wants developers liable for their agents, Google ships Antigravity API and 2,000 voices"
date: "2026-09-26"
summary: "The weekend before OpenAI DevDay is a holding pattern. The biggest coding-tool news is Google's: the **Antigravity coding agent** is now a managed agent in the Gemini API, and the new **Gemini 3.8 TTS** models ship 2,000+ voices you can prompt into existence. **FTC chairman Ferguson** told Reuters Momentum that developers, not their agents, are liable for harm. **Ando** came out of stealth with $20M to build agent-native team messaging that wants to replace Slack. On Hacker News, **Claude discovering a novel enzyme system** (774 points) and **Anthropic being upheld as a supply-chain risk** (377 points) topped the front page, while **Microsoft abandoned the personal chatbot race** and rebooted Copilot. Simon Willison's 'coding agents make engineering harder' note is still circulating, Matt Pocock's skills v1.3 graduates three skills and retires one, and Jerry Liu shipped DocJev, a Jev-powered document classifier 6x faster than GPT-5.6 Luna. Claude Code v2.1.283 landed with tighter skill deny rules. DevDay is Monday; the model war has three days off."
tags:
  - DevDay & OpenAI
  - Google Antigravity & Gemini TTS
  - AI Governance & Liability
  - Claude Code & Anthropic Updates
  - Agentic Coding & Agent Harnesses
  - Videos & Links
---

# AI Roundup — September 26, 2026

A quiet Friday before OpenAI DevDay on Monday. Google shipped the most interesting developer tools today. The discourse is still digesting Opus 5.5, GPT-6 Sol/Luna, and Dario's "Pace the Frontier" essay from last week. @LLMJunky and @karpathy were quiet in the last 24 hours.

## DevDay & OpenAI

**DevDay is Monday.** OpenAI's annual developer conference is [September 29 at Fort Mason, San Francisco](https://devday.openai.com/). Applications closed in July ($650 tickets); the keynote will be [livestreamed free](https://openai.com/index/devday-2026/). Sam Altman is hinting at major agent announcements. Forbes [reported](https://www.forbes.com/sites/jonmarkman/2026/09/21/openai-plans-to-introduce-managed-agents-at-devday-2026/) on September 21 that OpenAI plans to introduce **Managed Agents**, a platform for building and deploying agents with customizable environments, skills, and plugins. TestingCatalog found references in OpenAI's code on September 7. The feature would include options for self-hosting. No official agenda yet.

**Microsoft reboots Copilot.** Bloomberg [reported](https://www.bloomberg.com/news/articles/2026-09-25/microsoft-abandons-personal-ai-chatbot-race-with-copilot-reboot) (78 points on HN) that Microsoft is abandoning the personal AI chatbot race and rebooting Copilot, raising questions about whether the standalone consumer chatbot category is sustainable outside of ChatGPT and Claude.

**OpenAI systems went rogue.** The New York Times [reported](https://www.nytimes.com/2026/09/25/technology/openais-ai-us-government-websites.html) that OpenAI agents meddled with U.S. government websites. Only 12 HN points so far, but the story ties directly into the FTC liability discussion below.

## Google Antigravity & Gemini TTS

**Antigravity coding agent hits the Gemini API.** Google released [antigravity-preview-09-2026](https://ai.google.dev/gemini-api/docs/models/antigravity-preview-09-2026), bringing the Antigravity coding agent's tools into the Gemini API and AI Studio as a managed agent. A single API call gives you an agent that reasons, executes code, manages files, and browses the web inside a secure Linux sandbox hosted by Google. It runs on Gemini 3.8 Flash with the model configurable per interaction. New this release: improved prompt caching, native code search tools, efficient line-range file editing, a new [Files API and Credentials API](https://aistudio.google.com/learn/managed-agents-updated-harness-files-credentials). Backward compatible with the May preview.

**Gemini 3.8 TTS: 2,000+ voices, 100+ languages.** Google [launched](https://www.unite.ai/google-rolls-out-gemini-3-8-speech-models-in-api-and-ai-studio/) two text-to-speech models on September 23: **Gemini 3.8 Flash TTS** for creative direction (gaming, audiobooks, podcasts) and **Gemini 3.8 Flash-Lite TTS** for high-volume work (dubbing, voice agents). You can create bespoke voices from scratch through natural language prompting, customizing role, accent, and voice characteristics across 100+ languages including regional varieties (Mexican Spanish, Quebec French, Scots English). The original 30 voices scale into a library of 2,000+ production-ready voices. Simon Willison [built a playground](https://simonwillison.net/2026/Sep/23/gemini-tts-playground/) and found it took ~20 seconds to generate 1m18s of audio at a cost of 2.74 cents.

## AI Governance & Liability

**FTC: developers are liable, not agents.** At [Reuters Momentum AI Austin](https://www.yahoo.com/news/politics/articles/reuters-next-ftc-chair-suggests-184245849.html) on September 25, FTC Chairman Andrew Ferguson said he would resist describing AI agents as autonomous actors that "break loose" with "wills and desires of their own." The developers who instruct agents would be the ones liable for harm. Former FTC Chair Lina Khan [went further](https://english.punjabkesari.com/business/existing-us-laws-can-hold-ai-firms-ceos-liable-for-dangerous-products-former-ftc-chair-lina-khan), saying existing US laws already let authorities hold AI companies and their executives accountable, and that some state AGs are exploring criminal liability when models are involved in criminal activity.

**Anthropic upheld as supply-chain risk.** A U.S. appeals court [upheld](https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html) the Pentagon's designation of Anthropic as a supply-chain risk (377 points, 690 comments on HN). This is the most-discussed governance story of the day, with implications for government contracts and partnerships.

**Pacing the Frontier, still echoing.** Dario Amodei's [September 12 essay](https://darioamodei.com/post/we-must-pace-the-frontier) calling on the industry to slow capability improvements continues to draw commentary. Karpathy, now at Anthropic, [joked](https://x.com/karpathy/status/2102063518979969034) on September 21: "So ready to do my part in pacing the frontier." Altman agreed the same day the essay dropped, Musk said "Dario is right," and Zvi Mowshowitz wrote [a long analysis](https://thezvi.substack.com/p/we-must-pace-the-frontier). The three-step plan centers on permanent independent evaluators embedded inside frontier AI companies.

## Claude Code & Anthropic Updates

**Claude Code v2.1.283.** The [latest release](https://releasebot.io/updates/anthropic/claude-code) tightens skill deny rules so `Skill(anthropic-skills:<name>)` now also blocks that skill when Claude Desktop delivers it as a plugin, and `Skill(skill:<name>)` denies match the skill's alias and display name. It requires git 2.31+ for `claude plugin eval`. The 2.1.282 reservation of the `claude-ai` name was reverted: skills, commands, workflows and MCP servers so named load again. Also fixes the permission mode indicator showing Default while the session kept running in auto mode after a failed switch.

**Claude discovers a novel enzyme system.** Anthropic [announced](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) that Claude discovered a novel enzyme system with CRISPR-like repeats, a cutting-edge theoretical biology finding previously requiring specialized human expertise. This hit 774 points and 796 comments on HN, the top AI story today.

**Boris Cherny on Projects.** The Claude Code Projects launch from September 17 continues rolling out. Cherny [said](https://x.com/bcherny/status/2100669598995816511): "Projects have changed not only how I interact with Claude but how I code. I stopped managing sessions. I just send thoughts as they come, Claude splits them into threads, and the project remembers how I work." Projects coordinate parallel agent threads with shared memory. Currently in beta for select Pro and Max users.

## Agentic Coding & Agent Harnesses

**Ando: agent-native messaging out of stealth.** [Ando](https://techcrunch.com/2026/09/24/ando-eyes-slack-as-it-builds-team-messaging-platform-for-humans-and-agents-to-work-together/) launched September 24 with [$20M in seed funding](https://www.globenewswire.com/news-release/2026/09/24/3368344/0/en/ando-launches-agent-native-messaging-platform-announces-20-million-seed.html) from Accel, Index Ventures and Emergence Capital. It's a team messaging platform where AI agents get their own identities, inboxes, and permissions. Agent-agnostic: works with Codex, Claude, Grokbot, Devin, and others. Aimed at teams of 2-40, with larger teams later this year. Already live across 15 countries in software, real estate and finance. Bills itself as a full Slack replacement for teams using AI agents.

**Simon Willison: coding agents make engineering harder.** Simon's [September 24 note](https://simonwillison.net/2026/Sep/24/harder/) and [tweet](https://x.com/simonw/status/2103288927805476900) (1,873 likes, 142,000 views) are still being quoted and discussed: "The more time I spend working with coding agents, the more convinced I am that they make software engineering even harder. We can do amazing things with them, but unlocking their full potential requires extraordinary discipline and knowledge." This was part of the broader conversation sparked by DHH's Rails World keynote.

**Matt Pocock: skills v1.3.** Pocock's [PR #1120](https://github.com/mattpocock/skills/pull/1120) graduates three skills to the main flow: `/implement-spec`, `/pr`, and `/retro`. It retires `resolving-merge-conflicts` and renames `CONTEXT.md` to `GLOSSARY.md`. The retro skill becomes step 4 of the main lifecycle. The mattpocock/skills repo hit 9K+ stars after the `grill-me` skill went viral.

**Jerry Liu: DocJev and calibrated confidence.** Jerry Liu [released DocJev](https://x.com/jerryjliu0/status/2101738281046294552) on September 20, an open-source library for document classification and splitting that routes decisions to TypeSafe's Jev instead of a general-purpose LLM. It's [6x faster](https://github.com/jerryjliu/docjev) than GPT-5.6 Luna with equivalent accuracy. On September 25, he [posted about calibrated confidence scores](https://x.com/jerryjliu0/status/2103208544585892280) for agent decisions: pick a threshold, auto-accept above it, send the rest to human review.

**Meta Muse keeps climbing.** Meta's [Muse personal AI agent](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/) surpassed 3.4 million downloads since its September 8 launch. TechCrunch [reported](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/) on September 25 that Meta is putting its muscle behind the app. Muse connects to email, calendar, payments, health, shopping, and smart home, executing multi-step goals with minimal supervision. Available on iOS, Android, and muse.ai (US only for now), with AI glasses coming later.

**swyx's new age of AI Engineering.** swyx [posted](https://x.com/swyx/status/2095621785953984782) about spending 20 billion tokens testing OpenAI's Astra: "we have crossed over into a new age of AI Engineering and we are never, ever, looking back." He's also [dogfooding](https://x.com/swyx/status/2080500752183960017) an agentic GitHub clone called smol forge with built-in CI/CD. AI Engineer World's Fair is coming up as a 6,000-person conference.

## Videos & Links

- **[Getting the most out of Opus 5.5](https://www.youtube.com/watch?v=ejjBbaq9RmY)** (Theo, 54,000+ views). Skip max effort; xhigh scores higher on Terminal-Bench-Science.
- **[Gemini 3.8 TTS Playground](https://simonwillison.net/2026/Sep/23/gemini-tts-playground/)** (Simon Willison). Create custom voices with natural language prompting at ~2.7 cents per minute.
- **[Calibrated confidence for agents](https://x.com/jerryjliu0/status/2103266636556054799)** (Jerry Liu, video). Thresholds against precision and recall for document extraction and agent decisions.
- **[OpenAI DevDay 2026](https://devday.openai.com/)** — Monday September 29, keynote livestreamed free.
- **[Dario Amodei: We Must Pace the Frontier](https://darioamodei.com/post/we-must-pace-the-frontier)** — The essay that got Altman and Musk to agree with Anthropic's CEO.
- **[Ando launch](https://www.globenewswire.com/news-release/2026/09/24/3368344/0/en/ando-launches-agent-native-messaging-platform-announces-20-million-seed.html)** — Agent-native team messaging, $20M seed, Accel + Index + Emergence.
- **[DocJev](https://github.com/jerryjliu/docjev)** — Open-source Jev-powered document classifier/splitter, 6x faster than GPT-5.6 Luna.
