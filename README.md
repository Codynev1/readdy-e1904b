# Handoff: NevTech AI — Full Site Rebuild

## Overview
A complete redesign of nevtech.ai (~45 routes) in the "door" visual direction: a dark teal entrance homepage whose door opens onto a daylight landscape as you scroll, followed by a light, warm-green "daylight" system for every inner page. Georgia serif headlines, Arial body, Courier New monospace eyebrows, teal accents. This package contains every page as an HTML design reference plus the data files that feed the templated pages.

Build target: the existing **React 18 + Vite + Tailwind** SPA (see `reference/DESIGN-AND-CONTENT-HANDOFF.md` Part A–B for the current codebase’s token system, router, and component inventory). Keep the existing router paths; replace page components and the Header/Footer.

## About the design files
Everything in `design/` is a **design reference created in HTML**, not production code to ship as-is.
- `nevtech-homepage.html` is a self-contained page (CSS + JS + base64 images). Its CSS and JS are the exact spec for the homepage, including the scroll-driven door animation.
- `*.dc.html` files are design-component prototypes: an `<x-dc>` template with **inline styles** (the source of truth for every color, size, and spacing value) plus a small logic class for state. Open them in a browser to see them rendered; read the markup for values. Ignore `support.js` (prototype runtime).
- `SiteHeader.dc.html` / `SiteFooter.dc.html` are shared chrome imported by every inner page.
- `blog-posts.js`, `seo-pages.js`, `legal-pages.js` are the content for the three templated page types; reuse them as seed data / CMS content.

Recreate these in React with Tailwind, mapping the tokens below onto the existing 5-role StyleSystem (`background / primary / accent / secondary / foreground`) by re-pointing the OKLCH CSS variables to the new hex values. Query-string routing in the prototypes (`?page=`, `?post=`) maps to the real router params.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, copy, and interactions are final. Recreate 1:1 using existing patterns. Images marked as placeholders (striped boxes with monospace labels) need real assets.

## Route → design file map
| Route | Design file | Notes |
|---|---|---|
| `/` | nevtech-homepage.html | Door hero + scroll journey + daylight content |
| `/services` | services.dc.html | 10 service cards |
| `/about` | about.dc.html | Founder photo = placeholder |
| `/contact` | contact.dc.html | Form (see Forms) |
| `/products` (+ `/case-studies` alias) | products.dc.html | VMS + Catalyst screenshots = placeholders |
| `/faq` | faq.dc.html | Category filter + `<details>` accordions; `#pricing` etc. deep links |
| `/blog` | blog.dc.html | Card grid; wire to `blog_posts` table |
| `/blog/:slug` and article routes (`/ai-automation-agencies`, `/data-and-ai-consultant-indianapolis`, `/how-we-build-software-now`, `/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours`) | blog-article.dc.html + blog-posts.js | One article template |
| `/fractional-caio` | fractional-caio.dc.html | Tier pricing cards |
| `/rapid-mvp` | rapid-mvp.dc.html | |
| `/ai-projects` | ai-projects.dc.html | |
| `/ai-lead-generation` + `/get-leads` | ai-lead-generation.dc.html | `#get-leads` form section |
| `/use-cases` | use-cases.dc.html | |
| `/tmobile-business` | tmobile-business.dc.html | |
| `/receptionist` (Nova AI) | nova-ai.dc.html | Inbound/Outbound tabs, FAQ, demo form |
| 16 local-SEO routes (`/ai-indianapolis`, `/ai-services-indiana`, … `/ai-construction-indiana`) | seo-landing.dc.html + seo-pages.js | One template; keys in seo-pages.js match route slugs |
| `/privacy`, `/terms`, `/compliance`, `/support` | legal.dc.html + legal-pages.js | Keys: privacy, terms, security, support |
| `/intake-form` | intake-form.dc.html | Form |
| 404 | 404.dc.html | |
| (internal) | sitemap.dc.html | Index of every page; useful QA page |

## Global layout
- `body`: background `#080e0c`, padding 8px. Page frame: max-width 1800px, centered, background `#f1f4e9`, radius 17px, border 1px `#ffffff10`, `overflow:clip`.
- Section horizontal padding: **6%** of frame width. Vertical: hero `80px top / 56px bottom`; content sections `70px`; stats band `56px`; final CTA `80px`. Sections divided by 1px `#173c2a22`.
- Alternate section background: `#e8efe0`. Footer background `#e2ebdf`.
- All layout is fluid: CSS grid `repeat(auto-fit, minmax(280px,1fr))` (cards), `minmax(320px,1fr)` (two-column copy blocks), `minmax(200px,1fr)` (stats). No fixed heights on text containers.

## Header (SiteHeader)
- Sticky, `top:8px`, z-index 30, padding `12px 14px`, background `#f1f4e9d9` + `backdrop-filter: blur(14px)`, bottom border `#173c2a14`. On the dark homepage: `#091411a8`.
- Logo: 31×31 tile radius 7 background `#109d87`, white bold 15px "N"; wordmark 20px/600, letter-spacing -.5px, "AI" in 400 weight `#566d5f`.
- Nav pill: background `#fffef6`, border 1px `#214b2f22`, radius 7, padding `5px 5px 5px 20px`, gap 20px, font 13px. Each link prefixed with `↗` in `#07806a` 11px; hover color `#07806a`.
- Links: Services · Rapid MVP · Nova AI · **AI Projects ▾** (flyout) · Fractional CAIO · Products · About · Blog · Contact (ghost) · **Let’s build ↗** (button).
- Flyout: opens on hover/click; panel 360px, background `#fffef6`, border `#214b2f22`, radius 7, shadow `0 24px 60px #0b2a2226`, padding 10px; rows = 34px icon chip (`#dcecdf` bg, `#07806a` glyph) + 13px/600 label + 12px `#566d5f` description; row hover `#e5eddf`. Rows: Custom AI projects, Fractional CAIO, AI lead generation, Use cases by industry, AI in Indianapolis.
- **Breakpoint 1120px** (homepage: 1200px): hamburger "Menu +"/"Close −" button (border `#214b2f22`, radius 5, `#fffef6`) opens a single-column panel (sticky under header, radius 7, same shadow) listing all links + full-width Let’s build button.

## Footer (SiteFooter)
4-column `auto-fit minmax(200px,1fr)` grid, gap `40px 30px`, padding `48px 6% 22px`. Brand column: logo, tagline 24px Georgia `#254d36` (“The AI implementation partner built for businesses of every size. Indianapolis-based. We pick up the phone.”), mono contact line, 32px square social buttons (in / X / f; hover fill `#0b8068`). Column headers `// PRODUCT`, `// SERVICES`, `// COMPANY` in 10px Courier `#55745d`; links 12px `#3d5a49`, hover `#07806a`. Bottom bar: © · Privacy/Terms/Security · Back to top ↑, 10px `#55745d`.

## Design tokens (daylight system)
Colors
- Page `#f1f4e9` · alt section `#e8efe0` · footer `#e2ebdf` · card `#fffef6` · card hover `#e5eddf` · chip/tint `#dcecdf` · pill `#daecde`
- Text `#183c2f` · body copy `#3d5a49` · muted `#566d5f` / `#5a705f` · mono labels `#55745d` / `#557561` · dark headline accent `#254d36`
- Teal (links, accents, ✓) `#07806a` · button `#0b8068` hover `#075c4a` · icon `#238b6a` · chip text `#176d4e` · tab active `#17694f`
- Lines `#173c2a22` · card border `#214b2f22` · card hover border `#217d5955` · input border `#214b2f33` · input bg `#f9fbf4`
- Dark CTA band: bg `#0f2f27`, text `#f1f4ec`, accent/em `#7eddb8`, muted `#a5bbaa`, light button `#eff5ee` text `#0b2118`, ghost border `#ffffff33`
- Homepage dark entrance (from nevtech-homepage.html): bg `#111b18`/`#061817`, white `#f1f4ec`, muted `#a4b3ad`, teal `#29c7ad`, brand `#109d87`, black `#080f0d`

Typography
- Headings: Georgia, 'Times New Roman', serif, weight 400.
  - H1: `clamp(46px, 5.6vw, 86px)`, line-height 1.02, letter-spacing -2.6px; em = italic `#07806a`. Nova hero `clamp(50px,6.4vw,100px)`.
  - H2: `clamp(34px, 3.6vw, 52px)`, lh 1.08, ls -1.5px. CTA-band H2 `clamp(42px,5vw,72px)`, ls -2px.
  - Card H3 25px/1.1, ls -.6px. Small H3 21–22px. Stats 56px/1, ls -2px, `#07806a`.
- Body: Arial, Helvetica, sans-serif. Base 16/1.6. Hero lede 17px/1.6 `#566d5f`. Body paragraphs 15px/1.75 `#3d5a49`. Card copy 13px/1.7. Nav/buttons 13px/600. Footer links 12px.
- Mono eyebrows: 'Courier New', 10px, uppercase, letter-spacing 1.5px, `#07806a`, pattern `//01 Section name`. Card footers 9px uppercase `#5a705f`.

Shape & spacing
- Radii: frame 17 · panels/flyout 7–8 · cards 5 · buttons/inputs 4 · chips 3 · pills 20.
- Buttons: `inline-flex; gap 18px; padding 14px 20px; min-height 49px; border 1px; radius 4; 13px/600`. Primary `#0b8068`→`#075c4a`. Light (on dark) `#eff5ee`→`#fff`. Ghost: transparent, border `#173c2a33` (light) / `#ffffff33` (dark). Text links 12px with trailing `↗` or `↓`.
- Cards: padding `23px 21px 18px`, border `#214b2f22`, bg `#fffef6`, hover border `#217d5955` + bg `#e5eddf`; header row = mono index left, 22px glyph right; footer row separated by 1px line, 29×29 arrow button (`#daecde` bg, `#9cbfa6` border, hover `#0b8068`).
- Process rows: 1px-bordered container, cells separated by 1px, label mono teal, H3 margin-top 36px.
- Checklists: `✓` in `#07806a`, 12–13px `#254d36`.
- Section heading row: flex, space-between, align end, gap `20px 35px`, margin-bottom 34px; right-side supporting paragraph 14px `#566d5f`, max-width 300px.
- Placeholder image: `repeating-linear-gradient(135deg,#e2ebdf 0 12px,#d6e2d2 12px 24px)`, radius 8, monospace label.

## Homepage (nevtech-homepage.html) — key behaviors
Use the file’s CSS/JS directly as the implementation spec.
- Door hero: sticky within a `270svh` journey track; scroll progress `travel` (0–1) drives a compositor-only camera transform (`translate + scale`, origin at the doorway ~72%/48%), the door leaf `rotateY(-104deg · door)` hinge, a crossfade to the outdoor image (travel .60–.86), copy fade-out (0–.24), and arrival overlay fade-in (.80–.97). Door auto-opens 650ms after images decode (2.7s open, 1.7s close). Controls: Open/Close/Replay.
- `prefers-reduced-motion`: static open door, no sticky journey.
- Full nav with CSS-hover flyout; hamburger below 1200px (single column, sub-links indented).
- Daylight content: interactive “Connected intelligence” demo (3 scenario tabs, Run example steps through 3 cards at 800ms), section nav with IntersectionObserver highlighting.
- Images: `assets/door-open.jpg` (room), `door-closed.jpg` (floor/closed), `door-leaf.jpg` (hinged leaf, 375×735), `door-outdoors.jpg` (arrival). Serve as optimized files instead of base64.

## Interactions & state (inner pages)
- Header: `narrow` (matchMedia ≤1120px), `menuOpen`, `flyOpen` (hover enter/leave + click toggle; close on outside click in production).
- FAQ: `cat` ∈ all/general/nova/ai/tel/price; sticky filter bar (`top:78px`, `#f1f4e9e6` + blur); active pill `#0b8068`/white; reads `location.hash` to preselect. Accordions are native `<details>`; `+` rotates 45° when open (`transition: transform .2s`).
- Nova: `tab` inbound/outbound (segmented control on `#dfe8d9`, active `#17694f`); pulsing dot `nova-pulse 2s ease-in-out infinite` (opacity .4→1).
- Blog article / SEO landing / Legal: read route param, look up in data file, set `document.title`; “Keep reading” shows 3 other posts.
- Forms (Contact, Nova demo, Get Leads, Intake): required fields marked *, message textarea 500-char counter, focus ring `2px solid #07806a` offset 1px. On submit → success card (border `#217d5955`, mono “… received” eyebrow, 34px Georgia headline, phone fallback). **Wire to the existing form endpoint / LeadConnector**; no backend in the prototypes.
- Hover: links → `#07806a`; cards → border/bg change (transition .2s); buttons → darker fill. No other animation on inner pages.

## Content constants
Phone (317) 508-9493 (`tel:3175089493`) · cody@nevtech.io · calendly.com/cody-nevtech/30min · Indianapolis, IN · Founder Cody Neville. Stats: 500+ / 95% / 40% / 24/7. Nova: 62% hang-up, <2 sec, 30+ languages, 5-day go-live, 6 months free inbound with T-Mobile. CAIO tiers: $1,800 · $2,800–4,200 · $4,500–6,500 /mo; hourly $125–175. T-Mobile: $10/line (10+), $15 tablet, $50 internet.

## Assets
- `assets/door-*.jpg`: original door photography (four files) used by the homepage.
- Needed from client: Cody Neville headshot (About), NevTech VMS dashboard + Catalyst screenshots (Products), blog cover images, logo mark file (currently the CSS “N” tile). URLs for the current versions are in `reference/DESIGN-AND-CONTENT-HANDOFF.md` Part D.
- Icons are Unicode glyphs (↗ ↓ ✓ ◎ ⇄ ⌘ ◉ ⊞ ▤ ⊕ ⌖ ▾); swap for Remix Icon line icons if preferred, keeping the sizes above.

## Open items
- Fix footer social URLs (X/Facebook placeholders).
- `/case-studies` should redirect to `/products`.
- SEO: keep the existing FAQPage / LocalBusiness / BlogPosting JSON-LD from the current codebase on the corresponding templates.
- Offer/SEO/legal copy in the data files was written from the handoff facts; review before publishing.
