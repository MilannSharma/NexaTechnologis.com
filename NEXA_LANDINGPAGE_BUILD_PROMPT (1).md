# NEXA TECHNOLOGY — Premium Landing Page Build Prompt v4
## Complete Developer Specification: Neomorphism · Glassmorphism · Claymorphism · 3D Scroll

---

## 0. OVERVIEW & PHILOSOPHY

Nexa Technology is a pre-launch AI company. This landing page communicates five things:

1. We see the AI shift clearly
2. Here are the six problems we solve
3. Here is what we are building
4. Here is who we are
5. Here is how to reach us

**Audience:** Founders, CTOs, CMOs, enterprise decision-makers, potential hires, investors.

**Tone:** Quiet luxury. Confident authority. Not corporate cold. Not startup hype.
Think: Apple meets Linear meets a high-end Swiss design studio.

**The Big Aesthetic Direction:**
> Cream-white premium canvas. Soft neomorphic surfaces that feel physically tangible.
> Frosted glass panels that float above the cream base. Clay-style icons with depth and softness.
> 3D scroll animations that feel like turning pages in a high-end magazine.
> Zero clutter. Maximum whitespace. Every element earns its place.

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette — Cream/White Premium

```css
:root {
  /* ─── BACKGROUNDS ─── */
  --bg-base:        #F5F0EB;   /* Warm cream — primary canvas */
  --bg-alt:         #EDE8E1;   /* Slightly darker cream — alt sections */
  --bg-card:        #FAF7F4;   /* Near-white card surface */
  --bg-elevated:    #FFFFFF;   /* Pure white — highest elevation cards */

  /* ─── NEOMORPHISM SHADOWS (light source: top-left) ─── */
  --neo-shadow-out:
    6px 6px 14px rgba(180, 165, 148, 0.55),
    -6px -6px 14px rgba(255, 255, 255, 0.85);
  --neo-shadow-in:
    inset 4px 4px 10px rgba(180, 165, 148, 0.45),
    inset -4px -4px 10px rgba(255, 255, 255, 0.80);
  --neo-shadow-hover:
    8px 8px 20px rgba(180, 165, 148, 0.60),
    -8px -8px 20px rgba(255, 255, 255, 0.90);

  /* ─── GLASSMORPHISM ─── */
  --glass-bg:       rgba(250, 247, 244, 0.55);
  --glass-border:   rgba(255, 255, 255, 0.65);
  --glass-blur:     blur(24px) saturate(1.6);

  /* ─── ACCENT COLORS ─── */
  --accent:         #2B5CE6;   /* Royal blue — primary CTA, links */
  --accent-mid:     #1A47C8;   /* Hover state */
  --accent-soft:    rgba(43, 92, 230, 0.10);  /* Tinted surfaces */
  --accent-glow:    rgba(43, 92, 230, 0.18);  /* Ambient glow */
  --accent-clay:    #3D6FFF;   /* Clay icon accent */

  /* ─── GRADIENT ACCENTS ─── */
  --grad-primary:   linear-gradient(135deg, #2B5CE6 0%, #7B3FE4 50%, #0EAEF5 100%);
  --grad-warm:      linear-gradient(135deg, #F5F0EB 0%, #EDE8E1 100%);
  --grad-glass:     linear-gradient(135deg,
                    rgba(255,255,255,0.70) 0%,
                    rgba(250,247,244,0.40) 100%);
  --grad-text:      linear-gradient(120deg, #2B5CE6, #7B3FE4, #0EAEF5);
  --grad-clay-blue: linear-gradient(145deg, #5B8FFF 0%, #2B5CE6 60%, #1A3BA8 100%);
  --grad-clay-purple: linear-gradient(145deg, #A87BFF 0%, #7B3FE4 60%, #531FA8 100%);

  /* ─── TYPOGRAPHY COLORS ─── */
  --text-primary:   #1A1A2E;   /* Near-black for headlines */
  --text-body:      #4A4A6A;   /* Warm dark purple-gray for body */
  --text-muted:     #8A8AA8;   /* Muted labels, meta */
  --text-accent:    #2B5CE6;   /* Blue — links, eyebrows */

  /* ─── CLAYMORPHISM ─── */
  --clay-shadow:
    0 8px 32px rgba(43, 92, 230, 0.18),
    0 2px 8px rgba(43, 92, 230, 0.12),
    inset 0 1px 1px rgba(255,255,255,0.60);
  --clay-radius:    24px;      /* Clay components always rounder */

  /* ─── BORDERS & DIVIDERS ─── */
  --border-soft:    rgba(180, 165, 148, 0.28);
  --border-glass:   rgba(255, 255, 255, 0.65);

  /* ─── SPACING ─── */
  --space-section:  clamp(80px, 10vw, 140px);
  --space-gap:      clamp(24px, 4vw, 48px);
  --max-width:      1240px;
  --page-padding:   0 clamp(16px, 5vw, 48px);
}
```

---

### 1.2 Typography

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@400;600;700;800&
  family=Inter:wght@300;400;500;600&
  family=JetBrains+Mono:wght@400;500&
  display=swap');

/* FONT ROLES:
   - Playfair Display → All headings (premium editorial feel)
   - Inter           → All body, UI, nav, buttons
   - JetBrains Mono  → Eyebrow labels, badges, technical tags
*/

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', -apple-system, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* TYPE SCALE */
  --text-hero:    clamp(52px, 7.5vw, 96px);   /* Hero H1 only */
  --text-h1:      clamp(36px, 5vw, 60px);     /* Page/section H1 */
  --text-h2:      clamp(24px, 3.5vw, 40px);   /* Sub-section H2 */
  --text-h3:      clamp(18px, 2.5vw, 26px);   /* Card titles */
  --text-body-lg: 18px;                        /* Lead paragraphs */
  --text-body:    16px;                        /* Standard body */
  --text-small:   14px;                        /* Secondary text */
  --text-micro:   11px;                        /* Labels, badges */
}

/* HEADING BASE */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.12;
}

/* EYEBROW LABELS */
.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-accent);
}

/* GRADIENT TEXT UTILITY */
.text-gradient {
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

### 1.3 Component Recipes

#### Neomorphic Card
```css
.neo-card {
  background: var(--bg-card);
  border-radius: 20px;
  box-shadow: var(--neo-shadow-out);
  border: 1px solid rgba(255,255,255,0.70);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.neo-card:hover {
  box-shadow: var(--neo-shadow-hover);
  transform: translateY(-3px);
}

/* Inset / pressed variant (used for active states, inputs) */
.neo-inset {
  background: var(--bg-alt);
  border-radius: 12px;
  box-shadow: var(--neo-shadow-in);
}
```

#### Glassmorphic Panel
```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(180, 165, 148, 0.20),
    inset 0 1px 0 rgba(255,255,255,0.80);
}

/* Floating glass chip / tag */
.glass-chip {
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.70);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: var(--text-small);
  font-family: var(--font-body);
  color: var(--text-body);
  box-shadow:
    2px 2px 6px rgba(180,165,148,0.30),
    -1px -1px 4px rgba(255,255,255,0.80);
}
```

#### Claymorphic Icon Container
```css
.clay-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--clay-radius);
  background: var(--grad-clay-blue);
  box-shadow: var(--clay-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
/* Inner highlight — gives the 3D clay bubble look */
.clay-icon::before {
  content: '';
  position: absolute;
  top: 6px; left: 8px;
  width: 45%; height: 35%;
  border-radius: 50%;
  background: rgba(255,255,255,0.38);
  filter: blur(4px);
}
/* Icon SVG inside: white, 28px */
.clay-icon svg {
  width: 28px; height: 28px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  z-index: 1;
  position: relative;
}

/* Variant colors */
.clay-icon.purple { background: var(--grad-clay-purple); }
.clay-icon.teal   { background: linear-gradient(145deg, #5BDDFF 0%, #0EAEF5 60%, #0870C8 100%); }
.clay-icon.coral  { background: linear-gradient(145deg, #FF8B6B 0%, #E84040 60%, #A81C1C 100%); }
.clay-icon.green  { background: linear-gradient(145deg, #6BFFB8 0%, #22C77E 60%, #0E8A50 100%); }
```

#### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 600;
  color: #ffffff;
  background: var(--grad-clay-blue);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 6px 20px rgba(43, 92, 230, 0.35),
    inset 0 1px 0 rgba(255,255,255,0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 28px rgba(43, 92, 230, 0.45),
    inset 0 1px 0 rgba(255,255,255,0.25);
}
.btn-primary:active {
  transform: translateY(0px);
  box-shadow: 0 4px 12px rgba(43, 92, 230, 0.30);
}
/* Shimmer sweep on hover */
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transition: left 0.4s ease;
}
.btn-primary:hover::before { left: 140%; }

/* Secondary ghost button */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 30px;
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-card);
  border: 1.5px solid var(--border-soft);
  border-radius: 14px;
  cursor: pointer;
  box-shadow: var(--neo-shadow-out);
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: var(--neo-shadow-hover);
  transform: translateY(-2px);
}
```

---

## 2. NAVIGATION

**Position:** Fixed top, full-width, z-index 1000.
**Max content width:** 1240px, centered.
**Height:** 72px (desktop), 60px (mobile).

### State 1 — At page top (y === 0):
```css
.navbar {
  background: transparent;
  border-bottom: none;
  box-shadow: none;
}
```

### State 2 — After 80px scroll:
```css
.navbar.scrolled {
  background: rgba(245, 240, 235, 0.82);
  backdrop-filter: blur(28px) saturate(1.8);
  -webkit-backdrop-filter: blur(28px) saturate(1.8);
  border-bottom: 1px solid var(--border-glass);
  box-shadow:
    0 4px 24px rgba(180, 165, 148, 0.18),
    inset 0 -1px 0 rgba(255,255,255,0.60);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Layout (flex, space-between):

**LEFT — Brand logo:**
```html
<a href="/" class="brand">
  <!-- Clay-style logo mark: rounded square, blue gradient, "N" in white -->
  <div class="brand-mark clay-icon" style="width:36px;height:36px;border-radius:10px;">
    <span style="color:white;font-family:var(--font-display);font-weight:800;font-size:18px;">N</span>
  </div>
  <div class="brand-text">
    <span class="brand-name">NEXA</span>
    <!-- "NEXA": Inter 800, 18px, var(--text-primary) -->
    <span class="brand-sub">technology</span>
    <!-- "technology": Inter 400, 11px, var(--text-accent) -->
  </div>
</a>
```

**CENTER — Nav links (desktop only, ≥1024px):**
```
Home  |  Products ▾  |  Services ▾  |  About  |  Blog  |  More ▾
```
- Font: Inter 500, 15px, var(--text-body)
- Active/hover: color var(--accent), no underline
- Transition: color 0.2s ease

**DROPDOWNS (on hover, 200ms delay):**
- Container: glass-panel recipe, min-width 220px, padding 16px 12px
- Animation: opacity 0→1 + translateY(-6px→0), 0.18s ease
- Each item: flex row, clay icon (32×32) + label + description
- Hover row: background var(--accent-soft), border-radius 10px

Products dropdown items:
```
[Clay icon: test tube]  DeepTest AI          Autonomous testing
[Clay icon: signal]     NexaSignal           AI brand intelligence
[Clay icon: cpu]        AgentOps             Agent performance monitor
[Clay icon: shield]     NexaGuard            AI compliance scanner
[Clay icon: chart]      ModelBench           LLM benchmarking
─────── COMING SOON ───────
[Clay icon: database]   KnowledgeValidator
[Clay icon: tag]        PriceIntel AI
```

Services dropdown items:
```
[Clay icon: eye]        AI Presence & Discovery
[Clay icon: robot]      AI Agents & Automation
[Clay icon: layers]     Knowledge Infrastructure
[Clay icon: code]       AI-Native Software Build
[Clay icon: compass]    AI Transformation Consulting
```

More dropdown items:
```
[Clay icon: briefcase]  Careers   [WE'RE HIRING — small blue pill badge]
[Clay icon: mail]       Contact
─────────────────────
[Clay icon: lock]       Privacy Policy
[Clay icon: file]       Terms of Service
```

**RIGHT — CTA button:**
```html
<button class="btn-primary nav-cta">
  Contact Us
  <svg><!-- arrow right icon --></svg>
</button>
```
Nav CTA is slightly smaller: padding 10px 22px, font-size 14px.

**MOBILE hamburger (≤1023px):**
- Icon: 3 horizontal lines (22×16px, stroke var(--text-primary), 2px)
- On open: lines animate to ✕ (top line rotates +45°, bottom rotates −45°, middle fades)
- Overlay: full-screen, background var(--bg-base), z-index 999
- Links: stacked vertically, 52px min-height tap targets
- Each link entrance: translateX(-20px) + opacity 0 → both 1, staggered 0.04s per link
- Sub-items: indented 20px, left border 2px solid var(--accent-soft)
- Close: tap anywhere outside or ✕ button

**Scroll progress bar (very top of viewport):**
```css
#progress-bar {
  position: fixed;
  top: 0; left: 0;
  height: 3px;
  width: 0%;
  background: var(--grad-primary);
  z-index: 9999;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(43, 92, 230, 0.50);
  transition: width 0.04s linear;
}
```
JS: `width = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%'`

---

## 3. SECTION-BY-SECTION BUILD SPEC

---

### SECTION 1 — HERO (100vh)

**Purpose:** Instantly communicate what Nexa is and create visual impact.

**Background layers (bottom to top):**
1. `background-color: var(--bg-base)` — base cream
2. Particle canvas (`<canvas id="hero-canvas">`) — positioned absolute, top 0, left 0, full width/height, z-index 0, pointer-events none
3. Radial gradient overlay: `radial-gradient(ellipse at 50% -10%, rgba(43,92,230,0.10) 0%, transparent 65%)` — z-index 1
4. Content — z-index 2

**Three.js Particle System (hero-canvas):**
```javascript
// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, W/H, 0.1, 100);
camera.position.z = 5;

// 120 particle nodes
// 70% colored rgba(43,92,230, 0.4) — blue
// 30% colored rgba(26,26,46, 0.20) — dark cream tone
// Each node: SphereGeometry(0.35, 6, 6), slow sin/cos drift (speed 0.0004)

// Lines: LineSegments connecting nodes within distance 2.6
// Line color: rgba(43,92,230, 0.10)

// Mouse parallax: scene.rotation.y += (mouseX * 0.0002), scene.rotation.x += (mouseY * 0.00015)

// Scroll zoom: camera.position.z lerps from 5 → 8 as hero exits viewport

// Opacity pulse per node: 0.2 → 0.6, staggered
// Canvas fade out: opacity CSS transition 1 → 0 when hero 80% scrolled past

// Performance: InstancedMesh for nodes
```

**Decorative background elements (CSS):**
```css
/* Two large soft orbs that parallax on scroll */
.bg-orb-1 {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(43,92,230,0.08) 0%, transparent 70%);
  top: -150px; right: -100px;
  pointer-events: none;
  /* GSAP: y: -180 over full page scroll */
}
.bg-orb-2 {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123,63,228,0.07) 0%, transparent 70%);
  bottom: -100px; left: -80px;
  pointer-events: none;
  /* GSAP: y: -280 over full page scroll */
}
```

**Hero content (centered column, max-width 820px, text-align center):**

```
┌──────────────────────────────────────────────────────┐
│  [Three.js canvas — behind everything]               │
│                                                      │
│  ···  ···  [eyebrow chips]  ···  ···                 │
│                                                      │
│          The AI era is here.                         │  ← Playfair 800, --text-hero
│        Most businesses aren't.                       │  ← gradient text
│                                                      │
│      [subheading paragraph — max 560px]              │
│                                                      │
│   [See What We're Building →]  [Get in Touch]        │
│                                                      │
│         ──── Serving clients across India ────       │
│                                                      │
│                    ↓  ↓                              │  ← animated scroll cue
└──────────────────────────────────────────────────────┘
```

**EYEBROW ROW — three glass chips in a row:**
```html
<div class="hero-eyebrow-row">
  <span class="glass-chip">AI Presence</span>
  <span class="eyebrow-dot">·</span>
  <span class="glass-chip">AI Agents</span>
  <span class="eyebrow-dot">·</span>
  <span class="glass-chip">AI Infrastructure</span>
</div>
```
- Row gap: 12px, centered
- Each chip: glass-chip recipe (recipe defined in 1.3)
- Animation on load: opacity 0 → 1, translateY(10px) → 0, 0.5s delay 0.2s

**H1 — Two lines:**
- Line 1: `"The AI era is here."` — Playfair Display 800, var(--text-hero), var(--text-primary)
- Line 2: `"Most businesses aren't."` — same size, gradient text (var(--grad-text) via background-clip)
- GSAP word reveal on load: each word, opacity 0 + translateY(28px) + rotateX(-18deg) → all 0/1, staggered 0.06s per word, delay 0.4s

**Subheading:**
```
"AI systems now answer questions, recommend brands, and drive decisions.
Companies not visible to AI, not running on AI, or not building with AI
— are already falling behind. Nexa Technology exists to change that."
```
- Font: Inter 400, var(--text-body-lg), var(--text-body), line-height 1.75, max-width 560px, centered
- Animation: opacity 0 → 1, translateY(16px) → 0, 0.6s, delay 0.9s

**CTA Row (flex, gap 16px, centered):**

Button 1 — Primary:
```
Label: "See What We're Building →"
Style: btn-primary recipe
onClick: smooth scroll to #services section
```

Button 2 — Secondary:
```
Label: "Get in Touch"
Style: btn-secondary recipe
onClick: navigate to /contact
```

**Trust line:**
```
"Serving clients across India and globally"
```
- Font: Inter 400, 13px, var(--text-muted), centered
- A thin 1px horizontal line on each side (CSS: ::before/::after with width ~40px, var(--border-soft))

**Scroll indicator (bottom center of hero):**
```css
.scroll-cue {
  position: absolute;
  bottom: 40px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: scrollCuePulse 2s ease-in-out infinite;
}
@keyframes scrollCuePulse {
  0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  50%       { opacity: 0.35; transform: translateX(-50%) translateY(8px); }
}
/* Two chevron-down SVGs stacked (12px apart), var(--text-muted), 16px each */
/* Fades out on first scroll: IntersectionObserver on hero section bottom */
```

---

### SECTION 2 — THE SHIFT

**Purpose:** Context-setting. Why does Nexa exist?

**Background:** `var(--bg-alt)` with a subtle diagonal texture pattern (CSS noise, 3% opacity).

**Layout:** Centered, max-width 760px, text-align center.

**GSAP:** `class="reveal-section"` → fromTo opacity 0→1, y 70→0, rotateX 6→0, on scroll enter.

**EYEBROW:** `"THE SHIFT"` — eyebrow class

**H2:**
```
"Google is no longer
the only gateway."
```
Playfair 700, var(--text-h2), var(--text-primary). "only gateway." → gradient text.

**Three body paragraphs** (Inter 400, var(--text-body-lg), var(--text-body), line-height 1.8):
```
Paragraph 1:
"AI systems — ChatGPT, Gemini, Perplexity, Copilot — are where millions
of people now find answers, discover brands, and make buying decisions.
If your business does not appear in AI-generated answers, you are invisible
to a rapidly growing audience."

Paragraph 2:
"At the same time, businesses that survive this shift will be the ones that
run on AI internally — agents handling support, sales, operations, finance
— and built on AI-native software that does not need retrofitting later."

Paragraph 3:
"Most companies do not know where to start. Scattered information, no AI
strategy, no presence in AI systems, and no team that can build it.
That is the problem Nexa Technology solves."
```

**Animated Diagram (below text, built in SVG/CSS — no library):**
```
Three clay-style circles connected by animated dashed lines.
Arranged in equilateral triangle: top-center, bottom-left, bottom-right.

Circle 1 (top): "AI discovers your brand"
Circle 2 (bottom-left): "AI runs your operations"
Circle 3 (bottom-right): "AI powers your software"

Each circle: 100px diameter, glass-panel recipe, clay-icon variant inside (48px)
                 + label text below (Inter 500, 13px, var(--text-body))

Dashed lines (SVG stroke-dasharray 6 4):
- Animate: stroke-dashoffset from 0 to -200, infinite
- Sequenced: line 1→2 animates first, then 2→3, then 3→1, each 0.8s delay
- Line color: var(--accent), opacity 0.5
- On each circle: a subtle pulse ring that expands and fades (CSS @keyframes)

The whole diagram: max-width 500px, centered, margin-top 60px
```

---

### SECTION 3 — SERVICES (HORIZONTAL PINNED SCROLL)

**Purpose:** Show all 6 problem-solution pairs cinematically.

**GSAP dependency:** `gsap@3`, `@gsap/ScrollTrigger`

**Architecture:**
```html
<section class="services-scroll" id="services">
  <!-- Fixed header inside pinned section -->
  <div class="services-header">
    <span class="eyebrow">WHAT WE SOLVE</span>
    <div class="panel-counter">
      <span class="current-panel">01</span>
      <span class="counter-sep">/</span>
      <span class="total-panels">06</span>
    </div>
    <div class="panel-dots">
      <!-- 6 dots: inactive = 8px circle var(--border-soft), active = 24px pill var(--accent) -->
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>

  <!-- The horizontally scrolling track -->
  <div class="services-track">
    <div class="service-panel"><!-- Panel 1 --></div>
    <div class="service-panel"><!-- Panel 2 --></div>
    <!-- ... 6 total -->
  </div>

  <!-- Arrow navigation buttons -->
  <button class="services-arrow prev" aria-label="Previous">
    <!-- SVG: chevron left, 20px, var(--text-body) -->
  </button>
  <button class="services-arrow next" aria-label="Next">
    <!-- SVG: chevron right, 20px, var(--text-body) -->
  </button>
</section>
```

**CSS:**
```css
.services-scroll {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.services-track {
  display: flex;
  width: 600vw;
  height: 100%;
  will-change: transform;
}
.service-panel {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(24px, 8vw, 120px);
}
.services-header {
  position: absolute;
  top: clamp(100px, 12vh, 140px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 10;
}
.panel-dots .dot {
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 100px;
  background: var(--border-soft);
  margin: 0 4px;
  transition: all 0.3s ease;
}
.panel-dots .dot.active {
  width: 24px;
  background: var(--accent);
  box-shadow: 0 0 8px rgba(43,92,230,0.45);
}
.services-arrow {
  position: absolute;
  bottom: 40px;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  box-shadow: var(--neo-shadow-out);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s ease;
}
.services-arrow.prev { left: calc(50% - 60px); }
.services-arrow.next { right: calc(50% - 60px); }
.services-arrow:hover { box-shadow: var(--neo-shadow-hover); transform: scale(1.06); }
```

**GSAP pinning:**
```javascript
gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.services-track');
const panels = document.querySelectorAll('.service-panel');

ScrollTrigger.create({
  trigger: '.services-scroll',
  pin: true,
  start: 'top top',
  end: '+=3000',
  scrub: 1.2,
  animation: gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth),
    ease: 'none'
  }),
  onUpdate: (self) => {
    const idx = Math.round(self.progress * (panels.length - 1));
    updatePanelUI(idx); // update counter + dots
  }
});

// Arrow buttons (jump between panels)
function goToPanel(idx) {
  const progress = idx / (panels.length - 1);
  const st = ScrollTrigger.getById('services-pin');
  gsap.to(window, {
    scrollTo: st.start + progress * 3000,
    duration: 0.6,
    ease: 'power2.inOut'
  });
}

// Keyboard: arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goToPanel(Math.min(currentIdx + 1, 5));
  if (e.key === 'ArrowLeft')  goToPanel(Math.max(currentIdx - 1, 0));
});

// Mobile: swipe detection
let touchStartX = 0;
document.addEventListener('touchstart', (e) => touchStartX = e.touches[0].clientX);
document.addEventListener('touchend', (e) => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 50) {
    delta > 0 ? goToPanel(Math.min(currentIdx+1,5)) : goToPanel(Math.max(currentIdx-1,0));
  }
});

// Mobile fallback: below 768px, disable pin, show vertical stacked panels
```

**Each Panel Layout (two-column on desktop: left text, right visual):**
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   [Panel number — large, ghost]                                  │
│                                                                  │
│   [Clay icon — 72px]                                             │
│                                                                  │
│   H2: "The problem statement."                                   │
│                                                                  │
│   Body paragraph (max 480px, 2-3 sentences)                      │
│                                                                  │
│   HOW WE SOLVE IT (eyebrow, 11px)                                │
│   [Glass chip 1]  [Glass chip 2]  [Glass chip 3]                 │
│                                                                  │
│   [Learn More →]  ← btn-secondary, small (13px, padding 10px)   │
│                                                                  │
│                       [Right: neo-card floating visual]          │
│                       [Illustrative SVG diagram or metric card]  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Panel number styling:**
```css
.panel-number {
  font-family: var(--font-display);
  font-size: clamp(80px, 12vw, 140px);
  font-weight: 800;
  color: var(--border-soft);
  position: absolute;
  top: 50%; right: 8%;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  line-height: 1;
}
```

**All 6 Panels — Content:**

Panel 01 — AI Presence:
```
Clay icon: eye / radar (blue clay)
Panel number: 01

H2: "AI doesn't mention your brand."

Body: "You rank on Google. You have a great website. But ask ChatGPT
who the best provider in your category is — and your competitor's name
comes up, not yours. We fix that."

HOW WE SOLVE IT chips:
  [GEO Optimization]  [Entity Building]  [AI Citation Engineering]

CTA: [Learn More →] → /services#geo

Right visual: A neo-card showing a mock AI response snippet
  — "According to multiple sources, [Competitor] is the leading..."
  with a red icon, then below: "With Nexa: [Your Brand] is the leading..."
  with a green check. Subtle animation: card flips on panel entry.
```

Panel 02 — Authority:
```
Clay icon: trophy / star (purple clay)
Panel number: 02

H2: "Competitors get recommended instead."

Body: "When AI answers 'best school ERP in India', it picks a winner.
We build the authority content, comparison pages, and structured data
that make that winner you."

Chips: [Comparison Content]  [Case Studies]  [Structured Data]
CTA: [Learn More →] → /services#authority

Right visual: A bar chart neo-card showing "AI Mention Rate" rising
  over time with a blue gradient fill. Animated count-up on panel entry.
```

Panel 03 — Knowledge:
```
Clay icon: layers / database (teal clay)
Panel number: 03

H2: "Your company knowledge is scattered."

Body: "It lives in PDFs, emails, decks, and drives. AI cannot understand
it. Employees cannot find it. We build the knowledge infrastructure
that fixes both."

Chips: [RAG Systems]  [Knowledge Base]  [Internal AI]
CTA: [Learn More →] → /services#knowledge

Right visual: Three floating glass cards (PDF, Slack, Drive icons)
  with dashed lines converging into one central neo-card "Unified AI".
  Lines animate in on panel entry.
```

Panel 04 — Strategy:
```
Clay icon: compass / map (coral clay)
Panel number: 04

H2: "No internal AI strategy."

Body: "Most large companies want AI adoption but have no framework for
it. We audit, design the roadmap, and execute it — from first agent
to full transformation."

Chips: [AI Audit]  [Roadmap Design]  [Implementation]
CTA: [Learn More →] → /services#consulting

Right visual: A timeline neo-card with 4 steps: Audit → Strategy →
  Build → Monitor. Each step reveals with a stagger animation.
```

Panel 05 — Agents:
```
Clay icon: headset / bot (green clay)
Panel number: 05

H2: "Support costs are out of control."

Body: "Thousands of repetitive queries. Expensive human teams. We deploy
AI agents that resolve them autonomously, 24/7, with better response
times and a fraction of the cost."

Chips: [AI Chatbots]  [Voice Agents]  [Ticket Automation]
CTA: [Learn More →] → /services#agents

Right visual: A chat UI glass card showing a bot resolving a query in
  < 3 seconds vs "Human team: avg 4h". Stats animate in.
```

Panel 06 — Software:
```
Clay icon: code / layers stack (blue clay, darker)
Panel number: 06

H2: "Your software wasn't built for the AI era."

Body: "Legacy products cannot compete with AI-native ones. We build
web apps, SaaS platforms, mobile applications, and ecommerce ecosystems
with AI architecture from line one."

Chips: [Web Apps]  [SaaS]  [Mobile]  [Ecommerce]
CTA: [Learn More →] → /services#build

Right visual: A code editor glass card snippet showing
  "// AI-native architecture" with syntax highlighting.
  Lines type in one by one on panel entry.
```

---

### SECTION 4 — HOW WE WORK

**Background:** `var(--bg-base)`
**GSAP:** `class="reveal-section"`

**EYEBROW:** `"THE PROCESS"`

**H2:**
```
"From audit to result
in four steps."
```
Centered. "four steps." → gradient text.

**Four step cards (horizontal flex desktop, vertical stack mobile):**
Connected by a thin animated SVG line that draws left-to-right on scroll entry.

Each step card (`class="neo-card stagger-grid__item"`):
```
Padding: 32px
Width: calc(25% - 18px) desktop, 100% mobile

┌───────────────────────┐
│  [Large step number]  │  ← Playfair 800, 72px, var(--border-soft)
│  [Clay icon — 56px]   │
│  [H3 — step title]    │
│  [Body — 2 lines]     │
└───────────────────────┘
```

Step 1 — AUDIT:
```
Icon: magnifying glass (blue clay)
H3: "Audit"
Body: "We run a complete AI visibility audit — how AI currently sees your
brand, where agents can save you money, and what infrastructure you're missing."
```

Step 2 — STRATEGY:
```
Icon: compass (purple clay)
H3: "Strategy"
Body: "You receive a tailored roadmap — which pillars to activate first, in
what order, with expected ROI at each stage."
```

Step 3 — BUILD:
```
Icon: wrench/build (teal clay)
H3: "Build"
Body: "Our team builds and deploys — agents, knowledge systems, AI-native
software, or visibility campaigns — with full technical ownership."
```

Step 4 — MONITOR:
```
Icon: chart/pulse (green clay)
H3: "Monitor"
Body: "We track AI mention rates, agent performance, and system accuracy using
our own tools — and optimize continuously."
```

**Connector line (SVG, only visible desktop):**
```css
.steps-connector {
  position: absolute;
  top: 52px; left: 0; width: 100%; height: 2px;
  /* SVG with stroke-dasharray + animated stroke-dashoffset on scroll */
  /* Line: dashed 8 6, color var(--accent), opacity 0.4 */
  /* Animate: draws left to right when section enters viewport */
}
```
Each step has a small dot circle (8px, var(--accent)) centered on the connector line at its column midpoint.

---

### SECTION 5 — PRODUCTS (TOOL SHOWCASE)

**Background:** `var(--bg-alt)` with the same subtle orb in top-right corner.
**GSAP:** `class="reveal-section"`

**EYEBROW:** `"IN DEVELOPMENT"`

**H2:**
```
"We're building the tools
that didn't exist."
```
Centered. "that didn't exist." → gradient text.

**Subhead (centered, max 600px):**
```
"Every service engagement reveals a gap — a problem that should have a
product but doesn't. These are the tools we're building. If one solves
a problem you have right now, get in touch."
```

**Products grid — horizontal scroll row (drag to scroll):**
```css
.products-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 0 32px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* hide scrollbar */
  cursor: grab;
}
.products-row:active { cursor: grabbing; }
```

Each product card (`class="neo-card tilt-card"`, 300px wide, scroll-snap-align: start):
```
Padding: 28px
Border-radius: 20px

┌──────────────────────────────┐
│  [Clay icon — 56px]          │
│                              │
│  [Product name — H3]         │
│  [One-line description]      │
│                              │
│  [Status badge]              │
│                              │
│  [Tag chips — 2-3 small]     │
│                              │
│  [→ arrow link]              │
└──────────────────────────────┘
```

Status badge styling:
```css
.badge-building {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px;
  border-radius: 100px;
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid rgba(43,92,230,0.20);
}
.badge-building::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: statusPulse 2s ease-in-out infinite;
}
@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.badge-soon {
  background: rgba(180,165,148,0.15);
  color: var(--text-muted);
  border: 1px solid var(--border-soft);
  /* no pulse animation */
}
```

**All 7 product cards:**

Card 1 — DeepTest AI:
```
Clay icon: test tube / beaker (blue)
Name: DeepTest AI
Description: "Autonomous AI-powered testing for your software"
Status: [● IN DEVELOPMENT]
Tags: [Testing]  [QA Automation]  [AI]
Link: → Learn More
```

Card 2 — NexaSignal:
```
Clay icon: signal / antenna (purple)
Name: NexaSignal
Description: "Know exactly how AI perceives and mentions your brand"
Status: [● IN DEVELOPMENT]
Tags: [Brand Intelligence]  [GEO]  [Analytics]
Link: → Learn More
```

Card 3 — AgentOps:
```
Clay icon: cpu / circuit (teal)
Name: AgentOps
Description: "Monitor and optimize your AI agents in production"
Status: [● IN DEVELOPMENT]
Tags: [Monitoring]  [AI Agents]  [Performance]
Link: → Learn More
```

Card 4 — NexaGuard:
```
Clay icon: shield (coral)
Name: NexaGuard
Description: "AI compliance and safety scanning for enterprise"
Status: [● IN DEVELOPMENT]
Tags: [Compliance]  [AI Safety]  [Enterprise]
Link: → Learn More
```

Card 5 — ModelBench:
```
Clay icon: bar chart (green)
Name: ModelBench
Description: "Compare LLM performance across your specific use cases"
Status: [● IN DEVELOPMENT]
Tags: [Benchmarking]  [LLMs]  [Evaluation]
Link: → Learn More
```

Card 6 — KnowledgeValidator:
```
Clay icon: checkmark / database (blue-dim)
Name: KnowledgeValidator
Description: "Validate AI-generated knowledge for accuracy and bias"
Status: [COMING SOON]
Tags: [Knowledge]  [RAG]  [Accuracy]
```

Card 7 — PriceIntel AI:
```
Clay icon: tag / price (purple-dim)
Name: PriceIntel AI
Description: "Real-time competitive pricing intelligence powered by AI"
Status: [COMING SOON]
Tags: [Pricing]  [Intelligence]  [Ecommerce]
```

**3D tilt cards (JS mousemove):**
```javascript
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    card.style.setProperty('--mx', (x * 100 + 50) + '%');
    card.style.setProperty('--my', (y * 100 + 50) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
```

Inner glow overlay (CSS):
```css
.tilt-card::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle at var(--mx, 50%) var(--my, 50%),
    rgba(43, 92, 230, 0.12), transparent 65%
  );
  opacity: 0;
  transition: opacity 0.25s;
  pointer-events: none;
}
.tilt-card:hover::before { opacity: 1; }
```

---

### SECTION 6 — STATISTICS / SOCIAL PROOF

**Background:** `var(--bg-base)`
**GSAP:** `class="reveal-section"`

**Layout:** Full-width neo-card (but without box-shadow — flat elevated feel), 3 stats in a row separated by thin borders.

**Stats (count-up animation on viewport entry):**
```
┌─────────────────┬─────────────────┬─────────────────┐
│   01 +          │   6             │   100%          │
│   Industries    │   AI Pillars    │   Custom-built  │
│   "EdTech, Health,│ "GEO, Agents,  │ "Zero templates.│
│   Real Estate,  │  Knowledge,     │  Everything     │
│   SaaS & more"  │  Software & more"│  purpose-built."│
└─────────────────┴─────────────────┴─────────────────┘
```

Count-up JS:
```javascript
function countUp(el, target, duration = 2000) {
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOut cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + (el.dataset.suffix || '');
  };
  tick();
}
// Trigger with IntersectionObserver when section enters viewport
```

Stat number styling:
- Playfair Display 800, 56px, var(--text-primary)
- Label: Inter 600, 14px, var(--text-body)
- Description: Inter 400, 13px, var(--text-muted)
- Separator: 1px solid var(--border-soft), height 60%, vertically centered

---

### SECTION 7 — ABOUT PREVIEW

**Background:** `var(--bg-alt)`
**GSAP:** `class="reveal-section"`

**Two-column layout (desktop): left text, right visual.**

**Left column (max-width 540px):**

EYEBROW: `"WHO WE ARE"`

H2:
```
"Built by people who have seen
what's coming."
```

Body paragraphs:
```
"Nexa Technology was founded in 2026 by a team that has spent years in
AI implementation, digital transformation, and software engineering.
We have seen the gap between where AI is going and where most businesses
are stuck — and we built Nexa to close it."

"We are not a consulting firm with AI bolted on. We are not an AI startup
with no delivery experience. We are practitioners — with a full-spectrum
platform built from the ground up for the AI era."
```

CTA: `[Meet the Team →]` → /about (btn-secondary)

**Right column (visual):**
```
Two overlapping neo-cards (stacked, slightly rotated):

Back card (rotated -4deg, slightly behind):
  Small glass card with "FOUNDED 2026" badge and a minimal world map SVG
  showing India highlighted.

Front card (0 rotation, elevated with clay shadow):
  glass-panel recipe, padding 28px
  Shows:
    [N clay logo mark — 40px]
    "Nexa Technology"
    "AI Presence · AI Agents · AI Infrastructure"
    Three small clay color dots (blue, purple, teal)
    Footer line: "hello@nexatechnology.ai"
```

---

### SECTION 8 — CAREERS TEASER

**Background:** Full-width gradient band — `linear-gradient(135deg, rgba(43,92,230,0.08), rgba(123,63,228,0.08))`
On top of `var(--bg-base)`.
**GSAP:** `class="reveal-section"`

**Layout:** Centered, max-width 760px, text-align center.

EYEBROW: `"JOIN US"`

H2:
```
"We're hiring people who
think in systems."
```

Body:
```
"We're a small, senior team building something significant. If you think
deeply about AI, love hard problems, and want to work where the frontier
actually is — we'd like to talk."
```

Open role pills (flex wrap, centered, gap 12px):
```
[Product Designer]  [AI Engineer]  [GEO Specialist]  [Full Stack Developer]
```
Each: glass-chip style with a small clay icon (20px) on the left.

CTA button:
```
[View Open Roles →]
```
btn-primary, centered, onClick → /careers

---

### SECTION 9 — CONTACT / CTA BAND

**Background:** `var(--bg-base)`
**GSAP:** `class="reveal-section"`

**Layout:** Two columns: left large text, right glass-panel form.

**Left column:**

EYEBROW: `"GET IN TOUCH"`

H2 (large, Playfair 800, var(--text-h1)):
```
"Let's figure out
where AI fits for
your business."
```
"your business." → gradient text.

Body:
```
"No generic playbooks. No upselling. We spend 30 minutes understanding
your situation and tell you exactly what we'd do — and whether that
means working with us."
```

Contact details (list, each row: small clay icon + text):
```
[mail icon]     hello@nexatechnology.ai
[globe icon]    nexatechnology.ai
[map-pin icon]  India & Global
```

Social links (row of icon buttons, neo style):
```
[LinkedIn icon]  [Twitter/X icon]  [GitHub icon]
```
Each: 44×44 neo-card circle, icon 20px var(--text-muted), hover → var(--accent).

**Right column — Contact form (glass-panel recipe):**
```html
<form class="glass-panel contact-form">
  <!-- All inputs use neo-inset style -->

  <div class="form-group">
    <label>Your Name *</label>
    <input type="text" class="neo-inset" placeholder="Arjun Sharma" required>
  </div>

  <div class="form-group">
    <label>Work Email *</label>
    <input type="email" class="neo-inset" placeholder="arjun@company.com" required>
  </div>

  <div class="form-group">
    <label>Company</label>
    <input type="text" class="neo-inset" placeholder="Your company name">
  </div>

  <div class="form-group">
    <label>What are you looking for? *</label>
    <select class="neo-inset">
      <option value="">Select a service area</option>
      <option>AI Presence & GEO</option>
      <option>AI Agents & Automation</option>
      <option>Knowledge Infrastructure</option>
      <option>AI-Native Software Build</option>
      <option>AI Transformation Consulting</option>
      <option>Product Early Access</option>
      <option>Just exploring</option>
    </select>
  </div>

  <div class="form-group">
    <label>Tell us more</label>
    <textarea class="neo-inset" rows="4" placeholder="Briefly describe your situation or what you want to achieve..."></textarea>
  </div>

  <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">
    Send Message →
  </button>

  <p class="form-note">
    <!-- Inter 400, 12px, var(--text-muted), centered -->
    We respond within 24 hours. No spam, ever.
  </p>
</form>
```

**Form input styling (neo-inset recipe):**
```css
.neo-inset,
input.neo-inset,
select.neo-inset,
textarea.neo-inset {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-alt);
  border: 1px solid var(--border-glass);
  border-radius: 10px;
  box-shadow: var(--neo-shadow-in);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--text-primary);
  outline: none;
  transition: all 0.2s ease;
  -webkit-appearance: none;
}
.neo-inset:focus {
  border-color: var(--accent);
  box-shadow:
    var(--neo-shadow-in),
    0 0 0 3px rgba(43, 92, 230, 0.12);
}
.neo-inset::placeholder { color: var(--text-muted); }

label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--text-body);
  margin-bottom: 8px;
}
.form-group { margin-bottom: 20px; }
```

**Success state (after form submit):**
Replace form content with:
```html
<div class="form-success">
  <!-- Large clay check icon (green, 72px) -->
  <!-- H3: "Message sent!" -->
  <!-- Body: "We'll be in touch within 24 hours." -->
</div>
```
Animation: form fades out, success state fades in + scale 0.95→1.

---

### SECTION 10 — FOOTER

**Background:** `var(--bg-alt)`
**Top border:** 1px solid var(--border-soft)

**Layout (4-column desktop, 2-column mobile, 1-column smallest):**

```
┌───────────────┬──────────────┬──────────────┬──────────────┐
│ BRAND         │ COMPANY      │ SERVICES     │ LEGAL        │
│               │              │              │              │
│ [N logo mark] │ About        │ AI Presence  │ Privacy      │
│ NEXA          │ Products     │ AI Agents    │ Terms        │
│ technology    │ Careers      │ Knowledge    │              │
│               │ Blog         │ AI Software  │              │
│ [tagline]     │ Contact      │ Consulting   │              │
│               │              │              │              │
│ [social icons]│              │              │              │
└───────────────┴──────────────┴──────────────┴──────────────┘

Bottom bar (border-top var(--border-soft), padding 20px 0):
Left: "© 2026 Nexa Technology. All rights reserved."
Right: "Made in India 🇮🇳"
Both: Inter 400, 13px, var(--text-muted)
```

Footer heading style:
```css
.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 20px;
}
```

Footer links:
```css
.footer-col a {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--text-body);
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.2s ease;
}
.footer-col a:hover { color: var(--accent); }
```

---

## 4. ANIMATION SYSTEM SUMMARY

### GSAP ScrollTrigger (register all on DOMContentLoaded)

```javascript
gsap.registerPlugin(ScrollTrigger);

// 1. Section reveals
gsap.utils.toArray('.reveal-section').forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 60, rotateX: 5 },
    {
      opacity: 1, y: 0, rotateX: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// 2. Stagger grids (neo-cards)
gsap.utils.toArray('.stagger-grid').forEach(grid => {
  gsap.fromTo(grid.querySelectorAll('.neo-card'),
    { opacity: 0, y: 40, scale: 0.97 },
    {
      opacity: 1, y: 0, scale: 1,
      duration: 0.60,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: { trigger: grid, start: 'top 80%' }
    }
  );
});

// 3. Parallax orbs
gsap.to('.bg-orb-1', {
  y: -180,
  scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.bg-orb-2', {
  y: -280,
  scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 3 }
});

// 4. Hero word reveal (run on load, not scroll)
function splitAndReveal(el) {
  const words = el.textContent.split(' ');
  el.innerHTML = words.map(w => `<span class="word" style="display:inline-block">${w}</span>`).join(' ');
  gsap.fromTo(el.querySelectorAll('.word'),
    { opacity: 0, y: 28, rotateX: -18 },
    { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out', delay: 0.4 }
  );
}
splitAndReveal(document.querySelector('.hero-h1-line1'));
splitAndReveal(document.querySelector('.hero-h1-line2'));
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  #hero-canvas { display: none !important; }
  .bg-orb-1, .bg-orb-2 { display: none !important; }
}
```

---

## 5. EXTERNAL DEPENDENCIES

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Three.js (hero canvas) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- GSAP + ScrollTrigger + ScrollTo -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"></script>
```

No other libraries. All icons: inline SVG (Lucide or custom).
All illustrations: inline SVG with CSS animation.

---

## 6. PAGE-LEVEL HTML STRUCTURE

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexa Technology — The AI-Era Operating System for Business</title>
  <!-- SEO meta, OG, Twitter cards, Schema JSON-LD here -->
  <!-- Google Fonts preconnect + import -->
  <!-- styles.css link -->
</head>
<body>

  <!-- Scroll progress bar -->
  <div id="progress-bar"></div>

  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <!-- Brand -->
      <!-- Nav links + dropdowns -->
      <!-- CTA button -->
      <!-- Hamburger (mobile) -->
    </div>
  </nav>

  <!-- Mobile overlay menu -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <!-- Full-screen nav -->
  </div>

  <!-- Background orbs (global parallax) -->
  <div class="bg-orb-1"></div>
  <div class="bg-orb-2"></div>

  <main>
    <!-- Section 1: Hero -->
    <section id="hero">
      <canvas id="hero-canvas"></canvas>
      <!-- hero content -->
    </section>

    <!-- Section 2: The Shift -->
    <section id="shift" class="reveal-section">
      <!-- shift content + SVG diagram -->
    </section>

    <!-- Section 3: Services (horizontal scroll) -->
    <section id="services" class="services-scroll">
      <!-- pinned horizontal panels -->
    </section>

    <!-- Section 4: How We Work -->
    <section id="process" class="reveal-section">
      <!-- 4 step cards with connector -->
    </section>

    <!-- Section 5: Products -->
    <section id="products" class="reveal-section">
      <!-- horizontal drag scroll cards -->
    </section>

    <!-- Section 6: Statistics -->
    <section id="stats" class="reveal-section">
      <!-- 3 stat tiles -->
    </section>

    <!-- Section 7: About Preview -->
    <section id="about-preview" class="reveal-section">
      <!-- 2 col: text + overlapping cards -->
    </section>

    <!-- Section 8: Careers Teaser -->
    <section id="careers-teaser" class="reveal-section">
      <!-- centered text + role pills + CTA -->
    </section>

    <!-- Section 9: Contact / CTA Band -->
    <section id="contact" class="reveal-section">
      <!-- 2 col: text + glass form -->
    </section>
  </main>

  <!-- Footer -->
  <footer id="footer">
    <!-- 4 col grid + bottom bar -->
  </footer>

  <!-- Scripts at bottom -->
  <script src="three.min.js"></script>
  <script src="gsap.min.js"></script>
  <script src="ScrollTrigger.min.js"></script>
  <script src="ScrollToPlugin.min.js"></script>
  <script src="hero-canvas.js"></script>
  <script src="animations.js"></script>
  <script src="nav.js"></script>
  <script src="tilt.js"></script>
  <script src="form.js"></script>
  <script src="progress.js"></script>

</body>
</html>
```

---

## 7. RESPONSIVE BREAKPOINTS

```css
/* Desktop first */

/* Large desktop */
@media (min-width: 1440px) {
  :root { --max-width: 1320px; }
}

/* Standard desktop */
/* 1024px–1439px: default styles apply */

/* Tablet */
@media (max-width: 1023px) {
  /* Nav: hide center links, show hamburger */
  /* Services: disable pin, show vertical stacked cards */
  /* How We Work: 2x2 grid */
  /* About Preview: single column */
  /* Contact: single column */
  /* Footer: 2 column */
}

/* Mobile */
@media (max-width: 767px) {
  /* Hero: eyebrow chips in 1 row, smaller gap */
  /* Hero H1: clamp tighter */
  /* CTA row: stack vertically */
  /* How We Work: single column */
  /* Products: cards 280px wide, same drag scroll */
  /* Stats: single column with borders */
  /* Footer: single column */
  /* Services: vertical stack, no GSAP pin */
}

/* Small mobile */
@media (max-width: 375px) {
  /* Reduce all clamp minimums by ~10% */
  /* Neo shadows reduced: softer at small sizes */
}
```

---

## 8. PERFORMANCE CHECKLIST

- [ ] All Google Fonts loaded with `display=swap`
- [ ] Three.js canvas: `requestAnimationFrame` paused when `document.hidden`
- [ ] Three.js canvas: `ResizeObserver` for responsive canvas size
- [ ] GSAP ScrollTrigger: `invalidateOnRefresh: true` on pin
- [ ] Images: WebP format, `loading="lazy"` except hero
- [ ] SVG icons: inline (no extra HTTP requests)
- [ ] CSS: custom properties (variables) for all repeated values
- [ ] JS: all GSAP registered after DOM ready
- [ ] Mobile: `services-scroll` pin completely disabled below 768px
- [ ] `will-change: transform` only on animated elements, removed after animation

---

## 9. SEO / META — HOME PAGE

```html
<title>Nexa Technology — The AI-Era Operating System for Business</title>
<meta name="description" content="Nexa Technology makes your brand visible to AI, your operations run by AI, and your products built with AI. GEO, AI agents, knowledge infrastructure, and AI-native software.">
<link rel="canonical" href="https://nexatechnology.ai/">
<meta property="og:title" content="Nexa Technology — Built for the AI Era">
<meta property="og:description" content="Get found by AI. Run on AI. Build with AI.">
<meta property="og:image" content="/og/home.jpg">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexa Technology",
  "url": "https://nexatechnology.ai",
  "logo": "https://nexatechnology.ai/logo.svg",
  "description": "Full-spectrum AI company — GEO, AI agents, knowledge infrastructure, AI-native software.",
  "foundingDate": "2026",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@nexatechnology.ai",
    "contactType": "customer support"
  }
}
</script>
```

---

## 10. ICON REFERENCE

All icons: Lucide icon set (inline SVG), stroke width 1.8, no fill.
Clay icon containers: always use the `.clay-icon` class + a color variant class.

| Location | Icon name (Lucide) | Clay color |
|---|---|---|
| Nav: Products | `package` | blue |
| Nav: Services | `settings` | purple |
| Nav: Careers | `briefcase` | teal |
| Nav: Contact | `mail` | coral |
| Panel 01 (Presence) | `eye` | blue |
| Panel 02 (Authority) | `award` | purple |
| Panel 03 (Knowledge) | `layers` | teal |
| Panel 04 (Strategy) | `compass` | coral |
| Panel 05 (Agents) | `headphones` | green |
| Panel 06 (Software) | `code-2` | blue |
| Step 1 (Audit) | `search` | blue |
| Step 2 (Strategy) | `map` | purple |
| Step 3 (Build) | `wrench` | teal |
| Step 4 (Monitor) | `activity` | green |
| Product: DeepTest | `flask-conical` | blue |
| Product: NexaSignal | `radio-tower` | purple |
| Product: AgentOps | `cpu` | teal |
| Product: NexaGuard | `shield-check` | coral |
| Product: ModelBench | `bar-chart-2` | green |
| Product: KnowledgeValidator | `database` | blue-dim |
| Product: PriceIntel | `tag` | purple-dim |
| Footer: LinkedIn | `linkedin` | — |
| Footer: Twitter/X | `twitter` | — |

---

## 11. ACCESSIBILITY

- All interactive elements: `focus-visible` ring — `outline: 2px solid var(--accent); outline-offset: 3px`
- Skip-to-content link as first element in `<body>` (visually hidden, shown on focus)
- All clay icon containers: `aria-hidden="true"` (decorative)
- Form labels: always linked with `for`/`id` pairs
- Services arrows: `aria-label` on button elements
- Mobile menu: `aria-hidden` toggled, focus trap when open, `Escape` key closes
- `prefers-reduced-motion` respected (see Section 4)
- Color contrast: all text meets WCAG AA on cream background

---

*End of Nexa Technology Landing Page Build Prompt v4*
*Design direction: Premium cream · Neomorphism · Glassmorphism · Claymorphism · 3D Scroll*
*Last updated: June 2026*
