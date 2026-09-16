Create a highly polished, modern personal portfolio website that combines three distinct visual influences into one cohesive art direction:

1. **ASCII Graphics**
2. **Gen-X Soft Club**
3. **Editorial Brutalism**

The website should feel experimental, artistic, slightly nostalgic, and technologically sophisticated without looking like a generic AI-generated portfolio or a typical developer template.

## Overall Creative Direction

Design the portfolio as if it were an experimental digital magazine from the late 90s/early 2000s redesigned with modern web technology.

The visual identity should balance:

* Raw ASCII / terminal aesthetics
* Soft, nostalgic Gen-X internet culture
* Editorial typography and asymmetrical layouts
* Brutalist web design
* Modern motion design
* Strong whitespace and visual hierarchy

The result should feel **personal, confident, unconventional, and curated**, not overly polished or corporate.

Avoid the typical "developer portfolio" appearance:

* No generic gradient blobs
* No excessive glassmorphism
* No standard centered hero section
* No generic dark-mode SaaS dashboard
* No excessive rounded cards
* No stock illustrations
* No unnecessary glowing neon effects
* No overuse of purple/blue gradients
* No template-like sections

Every section should feel deliberately art-directed.

---

# Visual Language

## 1. ASCII Graphics

Use ASCII as a recurring visual language throughout the website.

Create subtle ASCII compositions such as:

```text
        /\
       /  \
      /____\
     /      \
    /  VOID  \
   /__________\
```

Use ASCII for:

* Decorative hero elements
* Section separators
* Loading states
* Small navigation details
* Project metadata
* Background patterns
* Hover states
* Footer artwork
* Small interactive terminal-like elements

ASCII should feel designed rather than randomly generated.

Use monospace typography for ASCII elements and technical metadata.

Some ASCII elements can subtly animate while scrolling or hovering.

Examples:

* Characters shifting position
* Lines appearing progressively
* ASCII diagrams assembling themselves
* Small terminal-style status indicators
* Cursor blinking
* Text scrambling briefly on hover

Keep these effects subtle and intentional.

---

# 2. Gen-X Soft Club

Introduce a nostalgic visual language inspired by late-90s and early-2000s internet culture, underground digital magazines, CD-ROM interfaces, early personal websites, and soft club aesthetics.

Use:

* Muted off-white
* Warm gray
* Faded black
* Soft silver
* Desaturated blue
* Dusty purple
* Pale green
* Occasional washed-out red

Do NOT make the website look like a Y2K cliché.

Instead, capture the atmosphere.

Use subtle:

* CRT-inspired textures
* Slight image grain
* Soft scanline textures
* Low-opacity noise
* Vintage UI elements
* Small pixel details
* Old-web inspired borders
* Tiny status indicators
* Retro hyperlinks
* Monospace labels

The nostalgia should coexist with a modern layout.

Think:

**"old internet culture viewed through a contemporary design studio."**

---

# 3. Editorial Brutalism

Use editorial brutalism as the primary structural language.

Layouts should be:

* Asymmetrical
* Large-scale
* Typography-driven
* Grid-based
* Slightly unpredictable
* Spacious
* Visually aggressive in certain areas

Use oversized typography for major statements.

Allow elements to occasionally break the grid.

Examples:

* Huge title partially extending beyond the viewport
* Project images aligned asymmetrically
* Text columns with unusual widths
* Large numbers used as editorial anchors
* Vertical text
* Overlapping elements
* Unexpected whitespace
* Thin rules and borders
* Editorial captions

However, maintain usability.

The design should feel intentionally chaotic, not actually confusing.

---

# Typography

Typography should be one of the strongest elements of the website.

Use a combination of:

* A bold editorial grotesk/sans-serif for major headlines
* A clean sans-serif for body text
* A monospace font for technical information and ASCII elements

Create strong contrast between typography sizes.

Example hierarchy:

```text
01
SELECTED WORK

A massive editorial headline

Small monospace metadata
```

Use extremely large headlines in selected sections.

Typography should sometimes become the primary visual element instead of imagery.

---

# Navigation

Create a minimal but unconventional navigation system.

Desktop navigation:

```text
[ JERK / PORTFOLIO ]                 INDEX  ABOUT  WORK
```

Keep it mostly text-based.

Use a thin border or editorial rule.

The navigation should remain visible while scrolling but should not look like a standard sticky SaaS navbar.

Consider subtle behavior:

* Navigation compresses when scrolling down
* Expands slightly when scrolling up
* Active section indicator
* Small ASCII indicator
* Current scroll position

Example:

```text
● 03 / 07
```

---

# Hero Section

Do NOT use a conventional centered hero.

Create an editorial composition.

Possible structure:

```text
01
PORTFOLIO / 2026

JERK

DIGITAL
CRAFT
/
SYSTEMS
```

Place a large ASCII graphic somewhere in the composition.

Include a short introduction such as:

```text
DESIGN × DEVELOPMENT × EXPERIMENTATION

I build digital experiences that sit somewhere
between technology, design, and the strange
corners of the internet.
```

The hero should immediately communicate personality.

Use oversized typography that interacts with the viewport.

Add subtle scroll-based movement.

For example:

* Headline moves horizontally at a different speed than the page
* ASCII graphic slowly changes
* Small metadata elements drift slightly
* Background texture subtly moves

---

# Scroll Animations

Motion is a major part of the experience.

Use modern, performance-conscious scroll animations.

Prefer:

* CSS transforms
* Intersection Observer
* GSAP or Framer Motion if appropriate
* Smooth but restrained transitions

Avoid animation overload.

### Hero

As the user scrolls:

* Large typography slowly moves vertically
* ASCII artwork shifts slightly
* Small metadata fades/moves
* Hero elements gradually separate from each other

### About Section

Text should reveal progressively.

Example:

```text
ABOUT

I MAKE
THINGS
FOR THE
WEB.
```

Each line can reveal independently as it enters the viewport.

### Projects

Project cards should animate into position as the user reaches them.

Use different movement directions.

Example:

Project 01 → slides upward
Project 02 → slides from the right
Project 03 → slides upward with slight rotation
Project 04 → reveals through a clipping mask

Do not use the same animation for every element.

### Image Hover

Project images should have sophisticated interactions:

* Slight scale
* Grain overlay
* Cursor interaction
* Image distortion or displacement if performance allows
* Project title appearing over the image
* Metadata appearing around the image

Keep the movement subtle.

---

# Selected Work

Make projects feel like editorial case studies rather than ordinary cards.

Example:

```text
SELECTED WORK
─────────────

01

SEA & RIVER VIEW
BOOKING SYSTEM

WEB APPLICATION
2026

[ LARGE PROJECT IMAGE ]

NEXT.JS / SUPABASE / PAYMONGO
```

Use large project imagery.

Projects should alternate layouts.

Example:

Project 01:
Large image on left, text on right.

Project 02:
Text on left, oversized image on right.

Project 03:
Image almost full viewport width with small floating metadata.

Project 04:
Highly editorial split composition.

Add a subtle project number such as:

```text
01 / 04
```

---

# Interactive ASCII Elements

Include several small interactive ASCII elements throughout the site.

For example:

```text
+-----------------------+
| SYSTEM STATUS         |
|                       |
| DESIGN      [ OK ]    |
| CODE        [ OK ]    |
| COFFEE      [ 98% ]   |
| INTERNET    [ ??? ]   |
+-----------------------+
```

These can react subtly to mouse movement or scrolling.

Another possible element:

```text
LOADING...
████████████░░░░ 78%
```

Use these as visual details rather than actual loading screens unless necessary.

---

# About Section

Make the About section feel like an editorial profile rather than a résumé.

Large statement:

```text
I LIKE BUILDING
THINGS THAT FEEL
A LITTLE DIFFERENT.
```

Then a smaller paragraph explaining:

* Who I am
* What I build
* Technologies I use
* What I care about
* What kind of work interests me

Include a small technical profile:

```text
LOCATION     PHILIPPINES
FOCUS        WEB / UI / SYSTEMS
STACK        NEXT.JS / REACT / PHP / SQL
CURRENT      BUILDING THINGS
STATUS       ONLINE
```

---

# Skills / Technologies

Do not use generic progress bars.

Instead, create an editorial technical index.

Example:

```text
01  FRONTEND
    Next.js
    React
    Vue

02  BACKEND
    PHP
    Laravel
    Node.js

03  DATABASE
    PostgreSQL
    MySQL
    Supabase

04  OTHER
    UI/UX
    Git
    APIs
```

Allow sections to reveal as the user scrolls.

---

# Contact Section

Make the contact section visually dramatic.

Use oversized typography:

```text
HAVE
AN IDEA?

LET'S
MAKE
SOMETHING.
```

Then provide:

```text
EMAIL
GITHUB
LINKEDIN
INSTAGRAM
```

Use simple text links instead of large generic buttons.

Hovering over each link should produce a subtle visual reaction.

---

# Footer

Create an experimental old-web-inspired footer.

Example:

```text
────────────────────────────────────────

JERK / PORTFOLIO

BUILT WITH CODE + CURIOSITY

© 2026

[ ASCII ART ]

        /\_/\
       ( o.o )
        > ^ <

STATUS: ONLINE

────────────────────────────────────────
```

Include a small back-to-top interaction.

---

# Texture & Details

Use subtle visual imperfections:

* Grain
* Noise
* Slightly imperfect borders
* Thin rules
* Tiny typography
* Pixel details
* CRT-inspired texture
* Paper/editorial texture
* Slight image imperfections

Do not overdo them.

The website should still feel modern and readable.

---

# Responsive Design

The design must work exceptionally well on:

* Desktop
* Laptop
* Tablet
* Mobile

Do not simply shrink the desktop layout.

Create intentional mobile compositions.

On mobile:

* Maintain oversized typography
* Simplify complex editorial layouts
* Preserve ASCII elements
* Reduce decorative animations
* Ensure readable body text
* Avoid horizontal overflow
* Keep navigation accessible

---

# Cursor Interactions

On desktop, consider a subtle custom cursor.

Possible behavior:

* Small dot normally
* Expands when hovering links
* Displays "VIEW" over project images
* Displays "OPEN" over interactive elements

Do not create a giant distracting cursor.

Disable or simplify it on touch devices.

---

# Motion Philosophy

The website should feel alive, but not like a motion-design demo.

Use:

* Smooth entrance animations
* Scroll-linked movement
* Typography reveals
* Image clipping
* Subtle parallax
* Hover interactions
* Micro-interactions

Avoid:

* Excessive bouncing
* Constant floating objects
* Long loading animations
* Excessive page transitions
* Animation on every element

The user should notice the design first and the animation second.

---

# Technical Requirements

Build the website using a modern production-ready stack.

Preferred:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion or GSAP
* CSS animations where appropriate

Use reusable components.

Suggested structure:

```text
/components
    Navigation
    Hero
    ASCIIArt
    About
    ProjectList
    ProjectCard
    Skills
    Contact
    Footer
```

Keep the implementation clean and maintainable.

Optimize animations for performance.

Use semantic HTML.

Ensure accessibility.

Respect `prefers-reduced-motion`.

Images should use optimized loading.

---

# Important Design Rule

Do not make the website look like three separate themes.

The final visual identity should feel like:

**ASCII internet culture + Gen-X nostalgia + editorial brutalism + modern interaction design.**

The website should look like a designer/developer intentionally created a strange personal corner of the internet rather than using an existing portfolio template.

Prioritize:

**Typography → Composition → Editorial hierarchy → Interaction → Texture → Color**

rather than relying on gradients and effects to create visual interest.

The final result should feel:

**raw, intelligent, nostalgic, experimental, editorial, personal, and modern.**

## Libraries & Tools

Use external libraries when they materially improve the quality of the experience. Do not recreate complex animation, interaction, typography, or visual-effect systems from scratch when a mature library is better suited.

Preferred libraries include, but are not limited to:

### Animation

Use **GSAP** and **ScrollTrigger** for advanced scroll-based animation when appropriate.

Possible uses:

* Scroll-linked typography
* Horizontal scrolling sections
* Pinning sections
* Parallax effects
* Image reveal animations
* Scrubbed animations
* Text movement
* Editorial layout transitions

Use **Framer Motion / Motion** for component-level interactions and UI transitions when it is more appropriate than GSAP.

Do not use both libraries for the exact same animation unnecessarily.

Choose the library that best fits each interaction.

### Smooth Scrolling

Consider using:

* Lenis
* GSAP ScrollSmoother if appropriate

The scrolling experience should feel smooth and intentional, but native browser scrolling should remain usable and accessible.

Do not make smooth scrolling so aggressive that it feels disconnected from the user's input.

### Text Effects

Use libraries when useful for:

* Text splitting
* Character reveals
* Scrambling effects
* Text distortion
* Letter-by-letter animation

Possible tools:

* GSAP SplitText
* Custom CSS/JavaScript
* A lightweight text animation library

Do not animate every character simply because the technology allows it.

### ASCII / Terminal Effects

For interactive ASCII visuals, consider lightweight approaches or libraries that can help with:

* ASCII rendering
* Character-based animations
* WebGL-to-ASCII effects
* Terminal-style interactions

Possible technologies:

* Canvas
* WebGL
* Three.js
* ASCII post-processing techniques

Use WebGL/Three.js only when the visual effect genuinely benefits from it.

Avoid adding a heavy 3D engine for a simple ASCII effect.

### Image Effects

For selected projects, consider:

* CSS clip-path
* CSS masks
* WebGL shaders
* Three.js
* GSAP image distortion
* Lightweight displacement effects

Use these selectively.

Project images should remain performant and accessible.

### Visual Texture

Use CSS and lightweight effects for:

* Grain
* Noise
* Scanlines
* CRT-inspired textures
* Paper texture
* Pixel patterns

Prefer procedural CSS/noise techniques over large background images whenever practical.

---

# Library Selection Rules

Do not install libraries just to make the project appear sophisticated.

Before adding a dependency, consider:

1. Can CSS handle it?
2. Can the existing animation library handle it?
3. Does the dependency materially improve the visual result?
4. Does it introduce unnecessary bundle size?
5. Does it work well with Next.js and React?
6. Does it support mobile and reduced-motion behavior?

Prefer a small number of high-quality dependencies over a large collection of animation packages.

---

# Recommended Stack

Use:

* Next.js
* TypeScript
* Tailwind CSS
* GSAP + ScrollTrigger
* Motion / Framer Motion where appropriate
* Lenis if smooth scrolling improves the experience
* Lucide React or another lightweight icon library if icons are required
* Three.js only for genuinely useful experimental visual effects

Do not use an icon library for decorative ASCII elements.

---

# Motion Architecture

Organize animations so they are reusable.

For example:

```text
/hooks
    useScrollReveal
    useParallax
    useTextReveal

/components
    AnimatedText
    ScrollReveal
    ParallaxElement
    ASCIIArt
    ProjectCard
```

Avoid scattering complicated animation logic throughout individual components.

Create reusable animation utilities where appropriate.

---

# Performance

The website should remain fast despite its experimental design.

Requirements:

* Lazy-load heavy visual effects
* Avoid unnecessary WebGL
* Avoid excessive DOM nodes
* Use transform/opacity for animations whenever possible
* Avoid animating layout properties unnecessarily
* Optimize project images
* Respect reduced-motion preferences
* Disable expensive effects on lower-powered/mobile devices when appropriate
* Avoid animation loops that run continuously when they are not visible

The website should feel sophisticated without feeling heavy.

---

# Final Implementation Principle

Use technology in service of the art direction.

Do not add:

* Three.js just because it is trendy
* WebGL just because it looks impressive
* GSAP for simple CSS transitions
* Excessive plugins
* Random hover effects
* Generic AI-generated animations

Every animation and library should have a clear design purpose.

The final website should feel like a carefully designed experimental portfolio, not a showcase of JavaScript libraries.
