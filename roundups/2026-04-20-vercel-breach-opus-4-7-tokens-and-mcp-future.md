# AI Roundup — 2026-04-20

## Vercel breach, Opus 4.7 token economics, MCP future

A quieter agentic/code day dominated by two parallel stories: Simon Willison's continued autopsy of Opus 4.7's token costs, and the Vercel security breach — an AI-accelerated attack that chained through a third party (Context.ai) into multiple companies. AIE Miami kicked off and swyx confirmed the State of the Claw talk is outperforming TED on YouTube.

---

## Agentic & code AI

### Opus 4.7 costs more tokens than 4.6

Simon Willison upgraded his token-counting tool to compare models side-by-side and found Opus 4.7 uses **~1.46× more tokens for text** than 4.6 at the same per-token price — effectively a price bump for "more efficient reasoning."

- [Initial post + tool](https://x.com/simonw/status/2046029612820594962) (Apr 20, 00:54 UTC)
- [Blog: claude-token-counts](https://simonwillison.net/2026/Apr/20/claude-token-counts/)
- Correction thread: the initial "3× more for images" claim was due to 4.7 handling higher resolutions. At matched resolution (682×318), it's ~1% difference — [clarification](https://x.com/simonw/status/2046065935786938378), plus Simon [community-noting his own tweet](https://x.com/simonw/status/2046069532402610498) to fix it.

Theo independently noticed the pricing oddity: ["4.7 was slightly cheaper than 4.6, even though input token cost nearly doubled and output costs fully doubled. Much more efficient reasoning."](https://x.com/theo/status/2045765937111203957) Combined, these two threads suggest: 4.7's per-token price is flat to down, but it burns more tokens per task, and the net spend goes up for verbose/visual workloads.

### Anthropic system prompt diff + tool descriptions request

Simon published [notes on the Opus 4.6 → 4.7 system prompt diff](https://x.com/simonw/status/2045655052548022690) ([blog](https://simonwillison.net/2026/Apr/18/opus-system-prompt/)) and followed up with a [public plea to Anthropic](https://x.com/simonw/status/2045908928022876210) to publish **tool descriptions** alongside system prompts:

> "The biggest challenge of using chat-based AI systems is that the details of what they can do are invisible — those tool descriptions are the missing manual."

### MCP Future keynote at AIE Miami

swyx RT'd the [MCP Future keynote](https://x.com/aiDotEngineer/status/2045918106145497570) by @dsp_. Key themes worth watching:

- MCP framed as the most successful AI integration protocol to date
- **MCP Apps** (packaged apps on top of MCP)
- Progressive discovery via tool search
- Programmatic tool calling / "code mode" (@threepointone's framing)
- Explicit contrast with **Skills and CLIs** — three competing surfaces for agent capability

swyx separately [celebrated State of the Claw beating TED on YouTube](https://x.com/swyx/status/2045745951785243012) — a technical talk on security advisories and maintainer burnout out-performing the storytelling circuit.

### Agent-to-agent comms in CMUX

LLMJunky flagged a concrete pattern for multi-agent harnesses: [@nummanali's CMUX agent-to-agent feature](https://x.com/LLMJunky/status/2046000408741695893) where Codex and Claude Code talk to each other through an XML message protocol declared in `AGENTS.md`. This is one of the first public implementations of cross-harness comms in a general CLI.

LLMJunky also posted continued [Codex Superapp feedback](https://x.com/LLMJunky/status/2045685119151743433): Custom Instructions → `AGENTS.md`, GPT 5.4 Pro picker, editable file viewer, handoff to cloud session — an ongoing punch list.

Fun side use: [Codex → coloring-book pages](https://x.com/LLMJunky/status/2045684549682602112) from camera roll for his kids.

### Document parsing — Opus 4.7 ParseBench bump, LiteParse

Jerry Liu confirmed [Opus 4.7 is a meaningful step up on document understanding](https://x.com/jerryjliu0/status/2045872038863343638) via ParseBench (previously reported: 13.5% → 55.8% on charts; Layout regressed; ~$0.07/page). He also promoted [LiteParse](https://x.com/jerryjliu0/status/2045664528097247649), a model-free open-source parser now at 4.3K+ stars with 50+ formats and one-shot agent-skill install for Claude Code / Cursor.

### T3 Code ban reversed

Theo [confirmed the Anthropic ban on Luke's account was an error](https://x.com/theo/status/2045771428335947842) and has been reinstated — T3 Code users are safe to keep using Claude. Clean close on yesterday's drama.

### Matt Pocock teaser

Quiet day otherwise, but [he's queued AI Coding videos for the week](https://x.com/mattpocockuk/status/2045970855843291425) focused on "simple ideas that resolve questions I get asked regularly."

---

## Security (AI-adjacent, worth your attention)

### Vercel got pwned

Primary victim: Vercel. Method: compromised credentials from **multiple** employees, entry vector appears to be Context.ai.

- Theo's [credibility signal](https://x.com/theo/status/2045862972342313374) and [initial triage](https://x.com/theo/status/2045870216555499636): "Env vars marked as sensitive are safe. Ones NOT marked as sensitive should be rolled out of precaution. The method of compromise was likely used to hit multiple companies other than Vercel."
- LLMJunky's [rotate-secrets warning](https://x.com/LLMJunky/status/2045885435780509831)
- Mitsuhiko asking the right question: [how did they get creds from *multiple* employees — secret vault?](https://x.com/mitsuhiko/status/2045886023918293094), followed by a dry [SOC 2 jab](https://x.com/mitsuhiko/status/2046113318000079198)
- Vercel's full post-mortem from @rauchg (RT'd by Theo, [link](https://x.com/rauchg/status/2045995362499076169)): breach came via Context.ai employee compromise, attacker "significantly accelerated by AI", sensitive env vars untouched, specific non-sensitive ones enumerated.
- Theo [praising the response](https://x.com/theo/status/2045975205982646776): notification within minutes, no throwing third parties under the bus. His outlook: ["Incidents like this are never easy. We're going to start seeing more and more of them as LLMs get more powerful."](https://x.com/theo/status/2045975556471070788)

Recommended action if you're on Vercel: rotate non-sensitive env vars as a precaution.

---

## Other

### Three-way tie on Artificial Analysis

Theo notes [all three major labs are tied on Artificial Analysis](https://x.com/theo/status/2045765018411766134) for the first time.

### Simon on Datasette → Google Sheets

TIL for the Datasette crowd: [Google Sheets can import Datasette JSON via `importdata()` + Apps Script](https://x.com/simonw/status/2046059677633618123).

### Steipete RT — local GPU inference on agent harnesses

Local-inference-for-agents benchmarking in progress on [OpenClaw with vllm/gemma-e4b, llama-swap, LM Studio, Ollama](https://x.com/onusoz/status/2045872636585029943).

### T3 Code hits 50K users

Theo asking the room: [50K users, 9.6K GitHub stars — enough to start raising?](https://x.com/theo/status/2045679981368656341)

---

## Quiet today

Karpathy, trq212, bcherny, leerob, and potetotes posted nothing substantive in the window. The lifting this cycle came from Simon, Theo, Jerry, and LLMJunky.
