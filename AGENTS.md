# AGENTS.md

## Project Overview

This repository contains a research-grounded, static educational site designed to demonstrate how people can sincerely perceive different realities when observing the same event.

The goal is to cultivate epistemic humility by walking users through controlled perceptual demonstrations before exposing them to real-world interpretive differences.

This is not a partisan persuasion tool.  
It is not an argument that all disagreements are perceptual.  
It is a structured exploration of cognitive mechanisms that can shape perception.

---

## Core Educational Thesis

People can watch the same event and experience different perceived realities due to:

- Selective attention
- Inattentional blindness
- Change blindness
- Sensory integration effects
- Expectation priming
- Identity-driven interpretation
- Post-hoc rationalization

These mechanisms explain some disagreements, not all.

The site must explicitly acknowledge:

- Sometimes people lie.
- Sometimes people are misinformed.
- Some disagreements are about values.
- Some are about incentives.
- Some are about perception.
- These are distinct mechanisms.

---

## Architecture Requirements

The site must be:

- Fully static (HTML, CSS, JS only)
- Deployable via GitHub Pages without build tools
- Self-contained
- Free of tracking or analytics
- Privacy-conscious (use youtube-nocookie embeds)

Required files:

- `index.html`
- Optional `styles.css`
- Optional `script.js`
- `README.md`
- `CITATIONS.md`
- `LICENSE`

---

## Video Gating Requirements

All required videos must:

- Use YouTube IFrame API
- Prevent progression until video reaches ENDED state
- Persist progress using `localStorage`
- Restore progress on refresh
- Provide manual reset
- Support accessibility

Optional strict mode:

- Detect and discourage timeline skipping
- Must be configurable and not default if unstable

---

## Required Educational Phases

### Phase 1 — Attention Limits

Video:
- Invisible Gorilla (Simons & Chabris)

Optional:
- Monkey Business illusion

User cannot advance until completion.

Citations:
- Simons & Chabris (1999)

---

### Phase 2 — Change Blindness

Video:
- Door Study or equivalent demo

Citations:
- Simons & Levin

---

### Phase 3 — Sensory Construction

Videos:
- McGurk Effect
- Yanny vs Laurel or similar ambiguity demo

Citations:
- McGurk & MacDonald (1976)

---

### Phase 4 — Choice Blindness

Video:
- Petter Johansson TED Talk

Citations:
- Johansson et al. (2005)

---

### Phase 5 — Group Identity and Perception

Research:
- Hastorf & Cantril (1954) “They Saw a Game”
- Granot et al. (2014) on group identity and attention
- Identity-protective cognition (Kahan)

Optional:
- Academic explainer video

---

### Phase 6 — Real-World Stimulus

Embed:
- A neutrally presented political news clip

Users must:
1. Describe observable actions only.
2. Separately describe interpretation.

Prompts:
- What prior beliefs influence interpretation?
- What would count as disconfirming evidence?

---

### Phase 7 — Closing Reflection

Prompts:
- When have you been confident and wrong?
- What evidence could change your mind?
- How can you reduce overconfidence in perception?
- What distinguishes perception, memory, interpretation, and deception?

Optional:
- Link to YANSS Episode 333 and related episodes

---

## Research Standards

All claims must:

- Be supported by primary research where possible
- Include DOI links where available
- Avoid blog-only citations
- Avoid partisan framing
- Avoid overgeneralization

Videos must:

- Be verified as embeddable
- Prefer original researcher uploads
- Avoid low-quality reposts

---

## Tone and Framing Constraints

The site must:

- Be intellectually serious
- Avoid moralizing
- Avoid emotional manipulation
- Avoid telling users what to believe
- Encourage self-reflection
- Avoid false equivalence
- Avoid implying all sides are equally correct
- Avoid implying all disputes are perceptual illusions

Explicitly distinguish between:

- Perception
- Memory
- Interpretation
- Incentive-driven distortion
- Deliberate deception

---

## UI Constraints

- Dark neutral theme
- Minimal design
- Clear progress indicator
- Step-based navigation
- One video per step
- Clear reflection prompts
- Collapsible “Research Basis” sections optional
- Accessible (keyboard navigation, ARIA labels)

---

## Optional Enhancements

If feasible:

- Strict vs reflective mode toggle
- Export reflections as `.txt`
- Printable research summary
- Caption reminders
- Accessibility improvements

---

## Success Criteria

The implementation must:

- Run immediately in a browser
- Correctly enforce gating
- Restore progress after refresh
- Provide academically grounded citations
- Maintain neutral framing
- Deploy to GitHub Pages in under five minutes

---

## Agent Operating Principles

When modifying or extending this project:

- Do not introduce tracking.
- Do not introduce partisan commentary.
- Do not oversimplify research.
- Do not weaken gating logic.
- Do not remove epistemic disclaimers.
- Do not replace primary research with blog summaries.

Improvements should increase clarity, rigor, accessibility, or usability without altering the core thesis.
