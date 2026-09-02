---
marp: true
theme: default
paginate: true
---

<!-- only include once in document -->
<style scoped>
@media screen {
  /* Hide not current fragments */
  [data-marpit-fragment]:not([data-marpit-fragment]:current) {
    display: none;
  }
}
</style>

<!-- class: invert -->

# Spec Driven Development (SDD)

---

<!-- class: lead -->

<!-- TODO: update -->

## SDD Overview

- Disclaimers
- Intro to SDD and AI Engineering
- SDD

![bg contain right:50%](./assets/sdd.jpg)

---

## Disclaimer - all is change

**AI engineering practices are evolving rapidly.** In cases like MCP, something that was completely new becomes industry standard within a year. Engineers are looking for and building out abstractions for common problems and adopting useful frameworks and patterns quickly. The dust has not settled, **things will continue to change, standards are still emerging**.

That said, it is important that developers are not standing still. These tools are transforming the industry and we must do our best to **stay informed and current on standards and tooling**.

---

## Disclaimer - it's not free

Use of AI coding agents is not required for this class but most of us are using these tools anyway. What we are learning in this class is general processes around software development with AI. I will be using Cursor but the processes should be applicable to whatever coding tools you use.

There are free, limited, tiers available to you but it may be worth investing in a subscription to go deeper with your learning.

I will be using Cursor. The React Native portion will work with Claude. Claude has plugin integrations with Cursor and VS Code.

---

<!-- class: invert -->

# Engineering with AI

---

<!-- class: lead -->

## Vibe coding

![vibe coding](./assets/vibe_coding.png)

Andrej Karpathy (founding member of OpenAI) coined the term "vibe-coding".

We have all had some experience with this. What do we think? Is it a suitable approach for software development? Why or why not? In what cases is it most appropriate?

---

## Vibe coding problems

In general, vibe coding or even simple prompt-based, feature engineering fails beyond simple prototypes and small application for a variety of reasons including:

- **Architectural drift** - Each prompt solves a local task but not necessarily in an architecturally consistent way. The system accumulates multiple and inconsistent implementations and architectural choices. Inconsistent schemas, diverging error handling, duplicated auth. These inconsistencies can compound exponentially over time as the inconsistencies pollute the agent's inferred context.
- **Missing context** - Conventions live outside the code (validate at service layer, soft deletes, localized errors). These are invisible to an AI given only the task leading to incorrect or missing implementations due to missing details.
- **The plausability gap** - AI code looks production-quality (formatting, names, patterns) leading quick approval of large changes with potential bugs.

---

## SDD as a solution to vibe coding limitations

Software engineering has known for decades that **ambiguous requirements are expensive**. Boehm (1981): a defect found in production can cost far more than one caught in design.

What changed in 2025 is speed. With **vibe coding**: describe the vibe, accept the diffs, ship, prototyping got cheaper but production defects got cheaper to create at volume.

**Spec-driven development** is the emerging standard around developing applications in a rigorous, detailed and incremental way using text-based specification documents to guide the agent during development.

---

## SDD at a glance, two Engineers, One Task

**Task:** Rate-limit payment — max 10 requests per user per minute.

|                    | Engineer A (vibe)                                                                            | Engineer B (AI-native)                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Approach**       | “Add rate limiting… max 10/min.” Merge in ~30s.                                              | 10 min of notes first, then prompt with that context.                                             |
| **Implementation** | Sliding-window middleware keyed on **client IP**; new Redis client; looks clean; tests pass. | Approved cache wrapper; keyed on **`user_id`**; idempotency-key exemption; correct metric format. |
| **Missed**         | Corporate NAT (shared IP → false positives); dynamic residential IPs (fraud bypass).         | Found a gap (idempotency key present but previous request failed); updated spec; re-ran.          |
| **Outcome**        | Incident, rollback, a day of remediation.                                                    | Shipped a feature that handled the real problem.                                                  |

**Notes B wrote before prompting:** per-user (not IP) because of NAT; auth already attaches `user_id`; identical idempotency keys must not count; observability metric format; Redis in same AZ + approved cache wrapper.

Same tool. Extra 10 minutes of writing. Difference was the engineering, not the model.

---

## Why the old workflow no longer scales

<style scoped>
  section {
    font-size: 24px;
  }
</style>

Traditional development assumed **implementation speed was the bottleneck**, and that you were the author of every line. Both assumptions no longer hold.

**You used to discover the design _by writing the code_.** Edge cases showed up in tests. The data model changed when you hit the third entity. That worked because **_you_ accumulated context and understanding as you went**.

**An agent does not. It starts fresh at each context boundary. Underspecify, and it invents assumptions** — then builds the next prompt on top of them.

**\_So the expensive work moves **upstream** (clear spec) and **downstream** (rigorous verification). Generation in the middle is the cheap part.\_**

---

![bg contain](./assets/bottleneck_shift.png)

---

## You are no longer paid mainly to type the code

<style scoped>
  section {
    font-size: 24px;
  }
</style>

When an agent can draft a CRUD endpoint in 30 seconds, the scarce work moves **around** the translation:

- What should this actually do?
- What invariants must hold?
- What happens on bad input or under load?
- Is this the right design for _this_ system?

An **orchestrator** defines work precisely, assigns it, reviews against intent, integrates what passes, and redirects what does not.

Addy Osmani: _every engineer is a manager now_ — not of people, of work that other capable entities produce.

---

![bg contain](./assets/orchestrator.png)

---

## SDD development cycle

SDD relies on a cycle where intent, and constraint are defined, implementation is completed and verification is performed.

![bg contain right:60%](./assets/intent_constraints_verification.png)

---

## Intent: what should be true when you are done

<style scoped>
  section {
    font-size: 22px;
  }
</style>

Intent is an **outcome**, not a list of implementation steps.

**Weak:** "Add a user profile page."

**Strong:** "Return display name, avatar URL, member-since date, and the 2 most recent public posts. 404 if the user does not exist. Hide email from unauthenticated callers. Cache 60s using the existing user-resource cache key convention."

Vague intent produces vague code. The model will fill every gap with **training-data defaults** for "what a profile page usually looks like." Those defaults will match your system only by luck.

---

## Constraints: the walls the agent cannot see

<style scoped>
  section {
    font-size: 22px;
  }
</style>

The most common AI failure: the agent **violates a constraint it was never told**.

The code passes tests, merges, and the violation shows up later — often when it is expensive.

Write them down **before** the task:

- **Technical** — existing auth library, p99 under 200ms, no new database
- **Business** — all locales, backward-compatible with v2, no emails to anonymous users
- **Quality** — coverage bar, security scan, project naming conventions

If it is not in the spec, the model is free to invent something plausible.

---

## Verification: your judgment replaces the model's confidence

<style scoped>
  section {
    font-size: 22px;
  }
</style>

AI is confident. It can also be wrong: hallucinated APIs, misread code, locally smart assumptions that are globally false.

Three layers:

1. **Automated** — unit/integration tests, linters, types, CI. Catches the embarrassing class of errors quickly.
2. **Structured review** — does it match intent, respect constraints, take shortcuts that will hurt later?
3. **Acceptance** — run it the way a real user would.

Tests the agent wrote are necessary and **not sufficient**. Agents can generate tests that pass without covering the behavior that matters.

Review against **criteria**, not against a vibe that it "looks right."

---

![bg contain](./assets/human_in_the_loop.png)

---

## Human-in-the-loop is how you stay fast

<style scoped>
  section {
    font-size: 22px;
  }
</style>

HITL is **calibrated automation**, not maximum automation.

Checkpoints that actually pay for themselves:

1. **Review the spec / plan before execution** — cheapest place to catch a misunderstanding. Cursor Plan Mode is this habit, formalized.
2. **Review output before merge** — CI already checked that it compiles. You check that it belongs in _this_ system.
3. **Stay close on high-risk work** — auth, production data, new dependencies. A utility function can be reviewed quickly. A migration cannot.

Skipping review "to go faster" is backwards. A 10-minute spec review prevents hours of remediating the wrong implementation.
