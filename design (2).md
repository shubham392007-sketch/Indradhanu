---
version: alpha
name: The Paper Portfolio (No-Image Adaptation)
description: A moody editorial portfolio system with vintage contrast, tactile paper tones, and oversized typographic drama — adapted from niccolomiranda.com with all photographic/illustration content removed and replaced by typography, motion, and abstract/geometric placeholders.
source-reference: https://www.niccolomiranda.com/
colors:
  primary: "#1d1d1b"
  secondary: "#cdc6be"
  tertiary: "#c03f13"
  neutral: "#cdc6be"
  surface: "#1d1d1b"
  on-surface: "#cdc6be"
  accent: "#c03f13"
  border: "#000000"
  text-secondary: "#69645f"
  accent-green: "#96B59F"
  link-blue: "#3898ec"
  border-light: "#e2e2e2"
  error: "#ea384c"
typography:
  headline-display:
    fontFamily: "Canopee"
    fontSize: "710px"
    fontWeight: 400
    lineHeight: "852px"
    letterSpacing: "-35.52px"
  headline-lg:
    fontFamily: "Canopee"
    fontSize: "275px"
    fontWeight: 400
    lineHeight: "330px"
    letterSpacing: "-7.872px"
  headline-md:
    fontFamily: "Editorial New"
    fontSize: "107px"
    fontWeight: 300
    lineHeight: "128px"
    letterSpacing: "-0.8256px"
  headline-sm:
    fontFamily: "Editorial New"
    fontSize: "41px"
    fontWeight: 300
    lineHeight: "128px"
    letterSpacing: "-4.608px"
  body-lg:
    fontFamily: "Editorial New"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "1.5"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Editorial New"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "normal"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Editorial New"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "1.4"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Editorial New"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Editorial New"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Editorial New"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0.02em"
  overline:
    fontFamily: "Editorial New"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.08em"
  nav:
    fontFamily: "Editorial New"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "1.2"
    letterSpacing: "0px"
  logo-blackletter:
    fontFamily: "Canopee"
    note: "Used only for the small wordmark lockup in the top nav bar (e.g. 'The Paper Portfolio'). Styled with a blackletter/gothic character, small size, centered in header."
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 15px
  xl: 24px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 28px
  lg: 48px
  xl: 86px
  gutter: 57.6px
grid:
  work-carousel: "1fr 1.25fr 1fr"
  two-col: "1fr 1fr"
  three-col: "1fr 1fr 1fr"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  button-pill-outline:
    backgroundColor: "transparent"
    borderColor: "{colors.primary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    shape: "oval"
    note: "Used for the 'ALL WORK' call-to-action — a wide oval/pill button with a thin dark outline and centered display-style label."
  button-block-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    shape: "rectangle"
    note: "Used for the 'EMAIL ME' call-to-action embedded inline within the marquee text banner — solid dark block, light text, sharp corners."
  card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "48px 58px"
  card-testimonial:
    backgroundColor: "transparent"
    border: "1px dashed {colors.primary}"
    rounded: "{rounded.md}"
    padding: "32px 28px"
    note: "Testimonial cards use a dashed border outline rather than a filled surface, sitting directly on the page background."
  input:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
    note: "Used as the 'New' tag on each work/project item, positioned inline next to the project title."
---

# Project Design System — No-Image Adaptation of "The Paper Portfolio"

## 1. Overview

This document is a design specification for a project that reuses the exact visual language, layout structure, and interaction model of **niccolomiranda.com** ("The Paper Portfolio" / Miranda portfolio), with one strict constraint: **the project will not include any photographic images or illustrations.**

Every section of the reference site that originally relies on a photo, project thumbnail, avatar photo, or hand-drawn illustration is documented below with an explicit **no-image replacement** using typography, motion, abstract/geometric shapes, gradients, or blank interactive placeholders — while preserving the same grid position, size, proportions, and surrounding content.

The tone remains: a high-end editorial portfolio voice — dramatic, tactile, minimal in chrome, oversized typographic drama on a warm paper-beige/dark-ink palette, aimed at design-conscious viewers.

---

## 2. Experience Goals

- **Showcase Work:** Present project entries clearly, using typographic and motion cues instead of imagery.
- **Inform:** Communicate role, skills, and credentials through large-scale type statements.
- **Inspire:** Preserve the iconic, poster-like digital experience through type, layout rhythm, and interaction — without relying on visual imagery.

---

## 3. Information Architecture (as observed on the live site)

- **Header (fixed/sticky):**
  - Left: location label — "Amsterdam, NL"
  - Center: small wordmark/logo lockup — "The Paper Portfolio" (blackletter-style Canopee treatment)
  - Right: hamburger menu icon (two horizontal bars)
- **Navigation menu (revealed via hamburger):**
  - Index
  - Work
  - About
  - Social row: twitter · instagram · dribbble · behance
- **Homepage vertical flow (single long scroll):**
  1. Work carousel #1 (3 project tiles + center intro copy)
  2. Giant wordmark section — "MIRANDA"
  3. Sub-heading pair — "INTERACTIVE" / "ARTIST!"
  4. About block — avatar + intro paragraph + role statement heading + "Website" label + stamp icon
  5. Giant wordmark section — "WEBSITE" (partial/cropped, large black block) + stamp icon
  6. "Upcoming Next" block — label + copy + tip + single featured project tile + large supporting image block
  7. "Think, Create / DELIVER" block — heading + drop-cap paragraph + secondary paragraph + "ALL WORK" pill button
  8. Stats row — 4 metric pairs (label + number)
  9. Giant wordmark section — "THE" (partial) + "perfect" / "artisan" headings + supporting avatar/trophy visuals
  10. Credentials paragraph (5+ years / clients / awards mention)
  11. Giant wordmark section — "ARTISAN" + "AWWWARDS" heading + credentials line
  12. Testimonials row — 4 dashed-border cards (quote + avatar + name + title)
  13. Work carousel #2 (3 project tiles + center intro copy, second variant copy)
  14. CTA marquee band — repeating "Let's create something together · EMAIL ME ·" scrolling text
  15. Footer — "Miranda©", year, stamp icon, "Legal" link, social row

---

## 4. Layout System

- **Grid:** CSS Grid drives the multi-column sections.
  - Work carousel: `grid-template-columns: 1fr 1.25fr 1fr` (side project tiles narrower, center text column wider).
  - Two-column content blocks (about/testimonial pairings, upcoming-next pairing): `1fr 1fr`.
  - Three-column groupings where present: `1fr 1fr 1fr`.
- **Flexbox:** Used for internal alignment inside cards, nav bar, and stat rows.
  - `align-items: center | stretch | flex-start | flex-end`
  - `justify-content: space-between | flex-end | center | flex-start`
- **Positioning:**
  - `position: fixed` — header bar (location, logo, hamburger).
  - `position: absolute` — decorative/overlay elements (stamp icon, tags such as "New" badges, tip labels).
  - `position: relative` — default flow containers, section wrappers.
- **Vertical rhythm:** Full-bleed giant-wordmark blocks act as visual "chapter breaks" between content sections, alternating dark-on-light and light-on-dark treatment.
- **Dividers:** Thin 1px vertical and horizontal rules are used extensively to separate carousel columns, stat items, and paragraph blocks — reinforcing the print/editorial grid feel instead of boxed containers.
- **Container margins:** Wide outer gutters (`{spacing.gutter}` ≈ 57.6px) with generous inset padding (`{spacing.xl}` ≈ 86px) around hero/heading moments.

---

## 5. Typography System

Two type families carry distinct roles:

- **Canopee** — used exclusively for monumental, full-bleed display moments: the giant wordmarks ("MIRANDA", "WEBSITE", "THE", "ARTISAN"), the small blackletter-style logo lockup in the header, and any single-word poster statement. Extremely tight/negative letter-spacing, tall line-height, condensed high-contrast letterforms.
- **Editorial New** — used for everything else: body copy, navigation labels, section labels/overlines, stat labels, testimonial quotes and names, buttons, and the bold condensed display-style sub-headings (e.g. "DIGITAL ART DIRECTOR / INTERACTIVE DESIGNER / CREATIVE DEVELOPER / BASED IN AMSTERDAM, NL.", "UPCOMING NEXT", "THINK, CREATE / DELIVER", "AWWWARDS"). These headings render visually bold/heavy in all-caps, condensed serif style — noted here as observed in the reference images even though the base token table lists a lighter (300) weight for `headline-md`/`headline-sm`; treat these specific full-caps statement headings as a **bold condensed variant of Editorial New**, distinct from the lighter long-form body paragraphs.
- **Drop caps:** The first letter of certain intro paragraphs (e.g. "A strong project is created by deep collaboration…") is set in a large boxed Canopee capital, inline with the paragraph's first line — implemented as a typographic device, not an image.
- Body text stays light-weight (300), serif-textured, magazine-style — never bold for long-form narration.
- Uppercase is used selectively (overlines, tags, stat labels, giant wordmarks) — not as a default UI convention for every label.

---

## 6. Color Palette

| Token | Hex | Usage as observed |
|---|---|---|
| `primary` | `#1d1d1b` | Near-black ink — headlines, body copy, rules, dark full-bleed wordmark backgrounds |
| `secondary` | `#cdc6be` | Warm paper-beige — main page background, light text on dark blocks |
| `tertiary` / `accent` | `#c03f13` | Rust-orange — "New" tags on project entries, stamp icon accent, sparingly used emphasis |
| `text-secondary` | `#69645f` | Secondary gray text |
| `accent-green` | `#96B59F` | Listed design token; not directly observed on the homepage in the supplied images — retain as a reserved accent token only, do not introduce new UI usage |
| `link-blue` | `#3898ec` | Listed design token for hyperlink states; on the reference page, in-text links (e.g. "Awwwards", "Studio BA", "Adoratorio") appear as underlined text in the ink color rather than blue — keep token defined but underline styling takes visual precedence |
| `border` | `#000000` | Hard black structural rules and dividers |
| `border-light` | `#e2e2e2` | Reserved light border token |
| `error` | `#ea384c` | Reserved token; not observed in use on this page |

Overall palette impression: deep ink, warm paper, single orange accent — no gradients, no bright modern blues, no glossy effects.

---

## 7. Spacing Scale

| Token | Value |
|---|---|
| `xs` | 6px |
| `sm` | 14px |
| `md` | 28px |
| `lg` | 48px |
| `xl` | 86px |
| `gutter` | 57.6px |

Additional spacing values observed in the source markup (fluid/responsive, `vw`-based):
- Margins: `3px`, `.7vw 1vw 1vw 0vw`, `1vw 2vw 1vw 0vw`, `0`, `.67em 0`, `1em 40px`, `0 2px`, `0 0 10px`
- Padding: `.75vw .4vw .5vw .5vw`, `1.5vw .8vw .5vw 1vw`, `0`, `.35em .625em .75em`, `9px 15px`, `6px 8px 6px 6px`, `10px 20px`

Use the fixed token scale for structural section spacing, and the `vw`-based values for fine-grained fluid component spacing that should scale with viewport width.

---

## 8. Shape & Elevation

- **Corners:** Mostly sharp; small radii only — `4px` on buttons, `~15px` on rounded cards, full pill/oval shape only for the "ALL WORK" button and avatar-placeholder circles.
- **Elevation:** Flat design overall. Depth comes from tonal contrast (dark ink vs. paper beige) and hard-edged borders rather than drop shadows. Any shadow used is subtle and directional (e.g. `#0000007a` semi-transparent black), reinforcing a printed/mounted-board feel rather than soft modern elevation.
- **Testimonial cards:** dashed 1px border, no fill, no shadow — sit directly on the page background.
- **Standard cards:** paper-beige fill, dark text, generous padding, minimal or no shadow, always "framed" rather than "floating."

---

## 9. Section-by-Section Spec (with No-Image Replacements)

> Legend: 🖼 = originally used a photo/illustration on the reference site → replacement required. ✅ = no image involved, keep as-is (typography/UI only).

### 9.1 Header Bar ✅
- Fixed top bar, full width, thin bottom rule.
- Left: "Amsterdam, NL" (or project's own location/label) — `label-md`, ink color.
- Center: small wordmark using the Canopee blackletter treatment (mirrors "The Paper Portfolio" lockup).
- Right: hamburger icon (two horizontal bars, no third line) — opens navigation overlay.
- No images used here already — keep exactly as-is.

### 9.2 Navigation Overlay ✅
- Full-screen or slide-in panel.
- Links: Index, Work, About — `nav` typography token.
- Social row at bottom or side: separated by " · " middle-dot characters — twitter · instagram · dribbble · behance.
- Text-only, no icons/images — keep as-is.

### 9.3 Work Carousel (both instances) 🖼 → Typographic Project Tiles
**Original:** 3 visible tiles in a horizontal drag-to-navigate carousel. Each tile = project thumbnail photo + title (small caps label) + orange "New" chip + 2–3 line description. Center column holds a large heading ("ALL WORK!"), a supporting line ("A Featured selection the latest work – of the last years." / "Handpicked highlights – spanning the last few years."), and a tip label ("TIP! Drag sideways to navigate" / "TIP! Click on the sides to explore").

**No-image replacement:**
- Replace the photographic thumbnail with a **flat-color block** in `primary` or `secondary` tone (no gradient, no photographic content), sized to the same aspect ratio the image occupied.
- Inside that flat block, center the **project's initial/monogram** or a short numeric index (e.g. "01", "02") set in large Canopee type as the sole visual content — purely typographic, not illustrative.
- Keep the project title (`label-lg`/bold Editorial New), the orange "New" chip (`{components.chip}`), and the description paragraph exactly as structured.
- Keep the center intro column, heading, and "TIP!" label unchanged — these are already typographic.
- Preserve the drag/click-to-navigate interaction and the 1fr / 1.25fr / 1fr column ratio.
- Divider rules between the three columns remain (vertical 1px lines).

### 9.4 Giant Wordmark Sections ("MIRANDA", "WEBSITE", "THE", "ARTISAN") ✅
- Full-bleed block, `primary` (ink) background, `secondary` (paper) text, or inverse.
- Oversized Canopee headline filling the width of the viewport, often cropped at the block edges (letters bleed off top/bottom of the block).
- Purely typographic already — no image content to replace. Keep exactly as-is, including the cropped/overflow treatment of the lettering.

### 9.5 About / Role Statement Block 🖼 → Typographic + Abstract Placeholder
**Original:** Small square avatar photo beside the intro paragraph ("As a multidisciplinary freelancer…"), a second avatar photo beside the bold role heading, and a small orange stamp illustration near the "Website" label.

**No-image replacement:**
- Replace each avatar photo with a **fixed-size square placeholder block** filled with `primary` color, containing only a large single capital letter (drop-cap style, same treatment as the paragraph drop caps) — e.g. the project owner's initial — set in Canopee. This keeps the "boxed initial" motif already present elsewhere in the design (the drop-cap paragraph device) and reuses it here instead of a photo.
- Keep the intro paragraph, the bold condensed role heading ("DIGITAL ART DIRECTOR / INTERACTIVE DESIGNER / CREATIVE DEVELOPER / BASED IN [LOCATION]."), and the underline on the last line exactly as structured.
- The small stamp icon near "Website": replace with a **CSS-drawn radial burst / sunburst shape** built from simple line strokes (SVG `<line>` or `<path>` elements in `accent` color, no raster image, no illustrative content) positioned the same way — a small circular sunburst mark in the corner. This is a geometric/vector mark, not a photographic or illustrative image, and keeps the same visual footprint as the original stamp.

### 9.6 "Upcoming Next" Block 🖼 → Typographic Card + Abstract Panel
**Original:** Label "UPCOMING NEXT" + copy + tip label, next to a small project thumbnail (painterly portrait image) with title "UNEXPECTED TIME" and description; below, a large supporting illustration (desk/tablet + character render).

**No-image replacement:**
- Keep "UPCOMING NEXT" label, copy, and "TIP!" line as typographic elements.
- Replace the small project thumbnail with the same **flat-color block + monogram/index-number** treatment as defined in 9.3.
- Keep the project title and description text as-is.
- Replace the large supporting illustration panel with a **large abstract geometric composition**: e.g. a few flat rectangles/circles in `primary`/`secondary`/`accent` tones arranged asymmetrically, or a full-bleed color field with a single oversized typographic character/numeral centered — no figurative or illustrative content, purely abstract shape and type.

### 9.7 "Think, Create / DELIVER" Block ✅ (mostly typographic) 🖼 (one supporting image)
**Original:** Large heading "THINK, CREATE" / "DELIVER", drop-cap paragraph, secondary paragraph, "ALL WORK" pill button. A supporting illustration (notebook/tablet + partial face) sits to the side in the surrounding layout.

**No-image replacement:**
- Keep heading, drop-cap paragraph, secondary paragraph, and the "ALL WORK" oval outline button exactly as structured (`{components.button-pill-outline}`).
- Replace the adjacent supporting illustration with an **abstract line-drawing composition** built from simple geometric primitives (circles, thin strokes, a speech-bubble-shaped outline) rendered in flat `primary`-color strokes only — no facial/figurative rendering, no photographic content. Alternatively, use a blank interactive placeholder panel (a bordered empty rectangle) if no abstract motif is desired.

### 9.8 Stats Row ✅
- Four label/number pairs, each: small-caps label (`overline`/`label-sm`) stacked above or beside a very large Canopee/Editorial New numeral.
  - "SITE OF THE DAY" — "AWARDS" — **9**
  - "SITE OF THE MONTH" — "WINNERS" — **1**
  - "FWA OF THE DAY" — "AWARDS" — **6**
  - "ACCLAIMED" — "MENTIONS" — **8**
- Purely typographic — keep as-is, adjusting numbers/labels to the project's own credentials.

### 9.9 "perfect artisan" / Trophy Block 🖼 → Typographic + Abstract Placeholder
**Original:** Two avatar photos flanking the stacked headings "perfect" / "artisan", plus a trophy photo/illustration.

**No-image replacement:**
- Replace both avatar photos with the same **initial-in-a-box** placeholder defined in 9.5.
- Replace the trophy image with a **simple geometric badge shape**: e.g. a circle or shield outline built from strokes in `accent` color with a centered numeral or short label (no illustrative trophy artwork) — purely abstract/iconographic, not a picture of an object.
- Keep the stacked headings and credentials paragraph ("Over the past 5+ years, I've teamed up with high-profile clients and partners globally earning mentions & awards from digital platforms like The FWA, Awwwards, Communication Arts, Site Inspire, Behance, Codrops and many others.") as typographic content, including the inline hyperlink styling (underline, ink color) for "Awwwards" and "mentions & awards."

### 9.10 Testimonials Row 🖼 → Typographic Cards, Initials Instead of Photos
**Original:** 4 cards, dashed border, rounded corners, each containing: quoted testimonial text (underlined styling on parts of the quote), a small circular avatar photo, name (bold), and title/role (with hyperlinked studio name where applicable).

**No-image replacement:**
- Keep the dashed-border card shape, quote text, name, and title/role exactly as structured (`{components.card-testimonial}`).
- Replace each circular avatar photo with a **small circular monogram placeholder**: a filled circle in `primary` color containing the person's initials in `secondary`-colored Editorial New type, same diameter and position as the original avatar.
- Preserve underline styling on emphasized quote fragments and on hyperlinked studio names (e.g. "Studio BA", "Adoratorio").

### 9.11 CTA Marquee Band ✅
- Full-width horizontally scrolling/marquee text loop: "Let's create something together" repeated, interleaved with a solid block button "EMAIL ME" (`{components.button-block-solid}`) linking to a mailto action.
- Purely typographic + one button — keep exactly as-is, including the continuous horizontal scroll/marquee motion.

### 9.12 Footer 🖼 (one small icon) → Mostly Typographic
**Original:** "Miranda©" wordmark, year, small orange stamp icon, "Legal" link, and social link row (twitter · instagram · dribbble · behance).

**No-image replacement:**
- Keep "[ProjectName]©", year, "Legal" link, and social row as typographic/text elements — unchanged.
- Replace the small stamp icon with the same **CSS-drawn sunburst/radial mark** defined in 9.5, reused for visual consistency between header-area and footer-area stamp placements.

---

## 10. Components

### Buttons
- **Primary:** paper-beige fill, dark text, `label-lg` typography, `sm` radius, `8px 16px` padding, `40px` min height.
- **Secondary:** transparent background, paper-beige text/outline, same typography and padding as primary.
- **Tertiary:** text-link style, no container, no padding, body-md typography.
- **Pill outline ("ALL WORK"):** oval shape, thin dark outline, transparent fill, centered bold display-style label, generous horizontal padding.
- **Block solid ("EMAIL ME"):** solid ink-colored rectangle, sharp corners, light paper-colored text, sits inline inside the marquee text flow.

### Cards
- **Standard card:** paper-beige surface, dark text, `lg` radius (15px), generous `48px 58px` padding — used for framed content blocks/image-led portfolio items (now typography/placeholder-led).
- **Testimonial card:** transparent fill, dashed 1px dark border, rounded `md` corners, moderate padding — quote + monogram + name + title.

### Chips/Tags
- "New" tag: solid `accent` (rust-orange) fill, `surface`-colored text, small `label-sm` type, `sm` radius, compact `4px 8px` padding — attached inline next to each project title.

### Inputs
- Transparent or paper-toned background, light serif text, simple border, `sm` radius — focus state shown via contrast/border emphasis, not decorative glow effects. (No input fields observed on the homepage itself in the supplied material; token retained for any form elements the project may need.)

### Placeholder Blocks (new, no-image-specific component — built only from existing tokens)
- **Monogram tile:** square or circular flat-color block (`primary` fill) containing a single large initial letter or short numeral in `secondary`-colored Canopee/Editorial New type — replaces every avatar/thumbnail photo across the site.
- **Abstract panel:** large flat-color or two-tone geometric composition (rectangles/circles in `primary`/`secondary`/`accent`) with no figurative content — replaces large supporting illustrations.
- **Sunburst mark:** small vector radial-line icon in `accent` color — replaces the decorative stamp graphic.

---

## 11. Interaction & Motion

- **Work carousels:** horizontal drag-to-navigate interaction (mouse drag / touch swipe), as explicitly instructed by the on-page "TIP!" labels ("Drag sideways to navigate" / "Click on the sides to explore" / "Click on the image to explore").
- **Giant wordmark blocks:** function as full-bleed scroll "chapter" transitions between sections — large type may be cropped by the viewport/block edges.
- **CTA marquee:** continuous horizontal auto-scrolling text loop containing the repeated call-to-action phrase and the "EMAIL ME" button.
- **Navigation overlay:** hamburger icon toggles a menu reveal (slide/overlay).
- **Mobile:** an explicit rotate-device prompt is shown ("Please rotate your device to ensure a better experience"), indicating the layout is optimized for landscape/desktop-width viewing.
- **Hover/focus states:** underline emphasis on links and emphasized quote fragments; buttons rely on contrast shifts rather than shadow/glow effects, consistent with the flat, print-like elevation model.

---

## 12. Responsive Behavior

- Layout is wide and gallery-like, built for large screens where oversized typography can dominate the viewport.
- Fluid spacing units (`vw`-based paddings/margins, per Section 7) allow components to scale proportionally with viewport width rather than snapping to fixed breakpoints alone.
- A dedicated rotate-device notice is shown on portrait/mobile orientations, signaling that the primary experience targets landscape or desktop widths.
- Grid columns (carousel `1fr 1.25fr 1fr`, content `1fr 1fr` / `1fr 1fr 1fr`) should collapse to a single column stack on narrow viewports, preserving vertical order of sections as documented above.

---

## 13. No-Image Rule — Summary of Replacements

| Original Element | Type | Replacement |
|---|---|---|
| Work carousel project thumbnails (x6 across 2 carousels) | Photo | Flat-color block + monogram/index numeral |
| About-section avatar photos (x2) | Photo | Boxed single-letter placeholder (drop-cap style) |
| "Upcoming Next" project thumbnail (painterly portrait) | Photo | Flat-color block + monogram/index numeral |
| "Upcoming Next" supporting illustration (desk/tablet scene) | Illustration | Abstract geometric composition or oversized numeral field |
| "Think, Create/Deliver" supporting illustration (notebook/face) | Illustration | Abstract line-drawing composition (geometric strokes only) or blank bordered placeholder panel |
| "Perfect artisan" avatar photos (x2) | Photo | Boxed single-letter placeholder |
| Trophy image | Photo/Illustration | Simple geometric badge (circle/shield outline + numeral) |
| Testimonial avatar photos (x4) | Photo | Circular monogram placeholder (initials) |
| Decorative stamp icon (header/footer, x2 instances) | Small graphic icon | CSS/SVG-drawn sunburst/radial-line mark in accent color |

All text content, headings, labels, tags, buttons, dividers, giant wordmark blocks, stats row, and the CTA marquee require **no changes** — they were already purely typographic on the reference site.

---

## 14. Do's and Don'ts

- Do keep the palette to deep ink, warm paper, and a single rust-orange accent.
- Do use Canopee only for large, dramatic headings, giant wordmark blocks, and the header logo lockup.
- Do preserve generous whitespace and broad horizontal breathing room.
- Do keep borders crisp (solid or dashed) and shadows minimal to maintain the print-like feel.
- Do replace every photo/illustration with flat-color blocks, monogram placeholders, abstract geometric shapes, or vector line marks only — never a photographic or figurative substitute.
- Do preserve the drag/click carousel interaction and the marquee CTA motion exactly as documented.
- Don't introduce bright modern blues, gradients, or glossy effects.
- Don't over-round corners; the system should stay sharp and editorial.
- Don't use bold sans-serif UI text for primary narration or brand moments — retain Editorial New/Canopee.
- Don't crowd sections with extra controls, chips, or decorative elements beyond what is documented above.
- Don't add any new sections, features, copy, or components beyond what exists in the reference site, images, and source design.md files.
