# Portfolio visual system

## Direction
An experimental print folio inspired by the user's pale-paper and green organic-art reference. Wide, geometric display lettering, asymmetric project spreads, quiet rules, generative ASCII, and sparse original line drawings. The latest user instruction removes the separate Playground and redundant decorative copy.

## Tokens
- Paper: `#F1F0E8` — dominant page background.
- Ink: `#171916` — primary typography.
- Acid: `#86AA35` — artwork, selection, progress, interactive accents.
- Accessible accent text: `#506C1D`.
- Secondary text: `#575C51`.
- Rules: `#B9BDB2`.
- Surface: `#E8E8DF`; contact paper: `#E3E6D7`.
- Display: Michroma, self-hosted by `next/font`; body: Geist; metadata: Geist Mono.
- Page gutters: 24px desktop, 12px mobile, shared by navigation, sections, and footer. No centered maximum-width cap on large screens. Section padding: 48–56px desktop, 34–40px mobile.

## Components and structure
`Editorial.tsx` supplies section labels, animated headings, arrows, and SVG sketches. `OrganicAscii.tsx` renders a warped character-based torus with pointer response, a pause control, and a server-rendered static frame. Project previews are authored graphic studies, not screenshots of the live applications. Their buttons open the existing full case-study dialog.

Page sequence: intro, selected projects, skills, about, contact. The hero groups name, role, introductory paragraph, availability, and work link in one left-aligned text column beside the ASCII art. Alternating project spreads collapse to preview-first stacks on mobile. Skills form an open ruled index, rather than nested panels. Use native anchors, visible focus indicators, and 44px minimum button targets. CRT and sound functionality have been removed at the user's request.

Screenshot-driven spacing refinement: bound hero artwork to 330–500px on desktop, use near-balanced project columns with 28–64px gaps, and keep body copy at 16–20px with 11–14px utility text. About uses two phrases rather than four forced heading lines. Contact uses a single-line title with a proportionate arrow. Footer is a compact single row, wrapping on mobile. Preserve the 24px/12px outer gutters; density comes from balancing content within the page, not adding side margins.

## Motion
Native scrolling; GSAP only for heading movement, drawn SVG paths, and scroll progress. Essential text is visible without entrance animation. ASCII sampling is throttled and stops when paused, offscreen, in a hidden tab, or under reduced-motion preferences. Reduced-motion also suppresses GSAP and CSS transitions.

## Maintenance
Legacy literal utility colors in retained dialogs and footer are bridged to the new tokens in `globals.css`. New components use semantic class names. Preserve original project data and contact destinations; never invent case-study metrics or experience. The unused original playground component remains available in the codebase but is not rendered or imported by the homepage.
