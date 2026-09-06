# NevTech AI — Full Design + Content Handoff
> **For the designer remaking every page of nevtech.ai.** This is a working blueprint: the design system, the global layout, the full navigation/template map, and the *actual current copy, structure, CTAs, forms and images* of each page — captured from the live site so nothing here is invented.
>
> Page entries below contain real text from the site. Text is editable to match the redesigned brand, but if your goal is to *recreate the same information architecture with a fresh visual*, you can rebuild each page from this doc 1:1.

---

# PART A — THE DESIGN SYSTEM

## A1. Visual identity
- **Brand:** NevTech AI — an AI implementation partner based in Indianapolis, Indiana (nevtech.ai).
- **Sub-brands/products:** Nova AI (AI receptionist), NevTech VMS (video), NevTech Catalyst (AI platform), NevTech T-Mobile Business plans.
- **Voice:** confident, practical, local & approachable. "We pick up the phone." Copy uses contractions and everyday business language.
- **Primary contact constants used across the site (keep consistent):**
  - Phone: **(317) 508-9493** (click-to-call `tel:3175089493`)
  - Email: **cody@nevtech.io**
  - Scheduling: **calendly.com/cody-nevtech/30min**
  - Address: Indianapolis, IN · USA
  - Founded/led by **Cody Neville** (Founder)

## A2. Color system — "StyleSystem" (5 semantic roles)
All colors are **OKLCH scale tokens** (50 → 950 per role). The redesign should keep these roles and can swap the actual hues.

| Role / anchor | Approx. color | Job in the UI |
|---|---|---|
| `background-50` | cool near-white `#F9FAFC` | Page canvas, section base |
| `background-100` | light panel `#EFEFF2` | Alternate sections, cards, tiles |
| `background-200` | line `#E4E6EA` | Borders, dividers |
| `primary-500` (brand) | **teal** `#1BA6A0` | CTAs, links, active states, highlights |
| `primary-600/700/800` | deeper teal | Hover + emphasis text |
| `primary-100` | pale teal `#E0F3F1` | Eyebrows, icon chips, pills |
| `accent-500` | deep teal `#1E807B` | Second-theme accents (products, timestamps) |
| `secondary-500` | warm gray `#9A9588` | Supporting controls/tags |
| `foreground-900/950` | charcoal `#2E3036` / near-black `#191B21` | Body / headings |
| `foreground-600/700` | mid-gray | Muted / secondary text |

**Special system used on the Nova AI page only:** a hardcoded emerald-green accent `#42BEA2` over a black theme (this page intentionally breaks from the teal system).

### ⚠️ Known inconsistency to resolve during redesign
Several pages/sections still use an **older black + gray palette** instead of the teal system:
- Base `Button.tsx` (hardcoded `teal-500/gray-600`)
- Homepage blocks that are currently **not even mounted** but live in the codebase: `ServicesOverview`, `BenefitsSection`, `CTASection` (black-on-gray style)
- **Contact page** (black text/icons on white/gray) and **Receptionist/Nova** (black + emerald) use their own styling
**Designer note:** unify onto the StyleSystem teal roles everywhere unless a deliberate dark section is intended.

## A3. Typography
| Role | Current family | Notes |
|---|---|---|
| Headings h1–h6 | `Georgia` serif (CSS `--font-heading`) | The redesign should decide serif vs. modern sans |
| Body / labels / buttons | `Inter` (Google Fonts, 300–700) | |
| Nova page | uses its own larger black type | heavier, bolder marketing feel |

## A4. Shape, spacing, motion
- Card radius `rounded-xl/2xl`; buttons/inputs `rounded-lg`; pills/avatars `rounded-full`.
- Container: centered max-width, `px-4 sm:px-6 lg:px-8`. Sections `py-16`–`py-24`.
- Animation library: `fade-in-up`, `fade-in`, `scale-in`, plus an infinite `marquee` (pauses on hover). IntersectionObserver reveal used on Nova/Testimonials.
- Icons: **Remix Icon** (line style) + FontAwesome via CDN. Icon text like `ri-robot-line`, `ri-check-line`, `ri-arrow-right-line`.

## A5. Reusable "recipes"
- `.btn-primary` = teal fill, light text, semibold, rounded-lg, hover deeper teal.
- `.btn-outline` = 2px charcoal border → inverts to charcoal fill on hover.
- `.btn-ghost` = text link w/ subtle hover pill.
- `.eyebrow` / `.section-eyebrow` = small uppercase letter-spaced teal label (sometimes in a pale-teal pill).
- `.quote-mark` = large serif decorative `"`.
- `.check-row` = small teal check circle + benefit text.
- `.step-progress` = segmented progress (filled segments teal).
- `.blog-prose` = full rich-text article body style.
- **Section color rhythm used repeatedly:** `background-50` sections alternate with `background-100`; decorative blurred teal "glows" (`bg-primary-100/40 rounded-full blur-3xl`) appear top-right / bottom-left of hero sections.
- **Hero gradient:** `bg-gradient-to-br from-background-50 via-primary-50/30 to-background-100`.
- **Final CTA band color:** `bg-primary-700` with light text (teal-dark section) — used at the bottom of most pages.

---

# PART B — GLOBAL CHROME & NAVIGATION

## B1. Global Header (on every page)
- **Fixed** at top. Transparent over heroes; on scroll (>20px) becomes **frosted white bar** (`bg-white/95 backdrop-blur` + hairline + shadow).
- **Logo:** rounded teal **"N"** tile + wordmark **NevTech** (bold) **AI** (lighter).
- **Desktop nav (lg+):** Home · Services · Rapid MVP · Nova AI · **AI Projects ▾** (flyout) · Fractional CAIO · Products · About · Blog.
- **Flyout (AI Projects & Services):** dropdown card with icon + label + description rows, arrow caret rotating; closes on outside click.
- **Right:** "Contact" (ghost) + "Get Started" (teal pill) → `/contact`.
- **Mobile:** hamburger → full vertical panel of the same links + a teal "Get Started" button.

## B2. Global Footer
- Light `background-100` panel with top hairline (NOT black).
- **5-column layout:** Brand (logo + 1-line blurb "The AI implementation platform built for businesses of every size. Indianapolis-based. We pick up the phone." + location + LinkedIn/X/Facebook icons) · **Product** · **Services** · **Company** · bottom bar.
- **Product links:** Services, Rapid MVP, Nova AI, After-Hours AI Receptionist, How We Build Software, AI Automation Agencies, Data & AI Consultant, Blog, AI Projects, Products.
- **Services links:** Fractional CAIO, AI Lead Generation, AI Indianapolis, Use Cases, Pricing, T-Mobile Business.
- **Company links:** About, Contact, FAQ, Privacy, Terms.
- **Bottom bar:** © year + Privacy / Terms / Security.

## B3. Shared UI atoms to rebuild
- Primary / outline / ghost buttons
- Eyebrow label + pill
- Section header pattern (eyebrow → h2 → supporting paragraph)
- 4-stat band (numbers in bold + units + caption)
- Accordion/FAQ item (plus icon rotates to minus)
- Category/tag pills
- Blog article card (cover image, category chip, title, excerpt, author + date)
- Testimonial card (stars, quote, avatar circle w/ initials)
- Local-SEO landing page template (see B4)

## B4. THE SEOLandingPage TEMPLATE — 15 pages reuse this
> A single React template (`SeoLandingPage`) drives the ~15 local keyword pages listed in Part C. The redesign only needs to be built **once**, then fed the per-page copy. Its fixed section order is:
>
> 1. **Hero** (centered): location pin badge → h1 (title + teal accent) → subtitle → 2 CTAs: teal **"Get Your Free AI Assessment"** (→ `/contact`) + outline **"Call (317) 508-9493"** → trust row (✓ Free 15-minute assessment · ✓ No obligation · ✓ Fixed-price proposals). Decorative teal glows.
> 2. **Stats** (`background-50`): centered title/subtitle + 4 stat cards (big teal number + label + italic source).
> 3. **What-is educational** (`background-100`): centered title + 2–3 paragraphs; then a highlighted callout box (icon + highlight title + text).
> 4. **Services grid** (`background-50`): title/subtitle + 3/6 tappable cards (teal icon chip, title, description, "Learn more →").
> 5. **Why local partner** (`background-100`): title/subtitle + 3–6 reason cards (accent icon chip).
> 6. **FAQ** (`background-50`): FAQPage accordion (title/subtitle + Q/A `<details>` rows).
> 7. **Final CTA** (teal gradient band): title + paragraph + [Get Your Free Assessment] + [Call (317) 508-9493] + contact strip (Indiana Office / Email / Calendly).
> Embedded SEO: FAQPage + LocalBusiness JSON-LD (phone, email cody@nevtech.io, Indianapolis IN, geo 39.7684,-86.1581, hours Mon–Fri 9–5, priceRange $$, serves Indiana).

---

# PART C — FULL PAGE INVENTORY & CONTENT

> Legend: **[template]** = built from a shared template (design once). **[article]** = content page. **[form]** = has a data-capture form.

## C0. Global note: shared page "skins"
Almost every page follows this wrapper: **Header → `<main>` hero section (teal-gradient + eyebrow + h1 + subtitle + CTA) → content sections alternating `background-50`/`background-100` → final teal CTA band → Footer.**

---

## C1. HOMEPAGE — `/`  (the core page to redesign first)

**Layout order (actual, top → bottom):**
1. **Hero** — two-column. Left: eyebrow "AI Indianapolis — The adoption gap is widening" · h1 **"The risk of doing nothing with AI — Just got real"** (accent line teal) · paragraph about competitors slashing telecom costs 40% / capturing 3x after-hours leads / running 24/7 · CTAs **"Get Free Consultation"** (teal) → `/contact` and **"See how it works"** (outline) → `/services` · trust row: ✓ No credit card · ✓ No sales call · ✓ 15 min assessment.
   Right: an **HTML/CSS browser-dashboard mockup** (pure code, no image) with: floating badge "Your competitor's AI agent · Live 24/7", retention ring **95%**, mini tiles (Leads captured/mo **248**, Cost savings **40%**), an "AI Voice Agent Setup · In Progress" progress tracker (Discover/Build/Deploy), and a "Monthly savings 6mo **$8,420 +38%**" bar chart. Second floating badge "Roadmap delivered · 6 services · 30/60/90 days".
2. **LogoStrip** — "Trusted by businesses across Indianapolis and beyond" + auto-scrolling marquee of 8 fake-ish client names w/ icons: Johnson Plumbing, Rodriguez Construction, Chen Marketing, Meridian Dental, Acme Logistics, Cardinal Law, Forge & Vine, Northbridge HVAC.
3. **Problem** — eyebrow "The Problem" · h2 **"Most businesses are aware of technology. Very few are getting their money's worth."** · 2 paragraphs (competitors rolling out AI; nobody handed you a plan). 3 pain-quote cards: "We're bleeding money on telecom." / "We're missing leads after hours." / "Our team is stuck doing busywork." each + supporting body.
4. **Solution Steps** — eyebrow "The Solution" · h2 **"One partner. The whole technology journey."** · 4 step cards (each w/ 4-segment progress): **01 Discover** · **02 Plan** · **03 Implement** · **04 Measure** (subtitles: Assess your needs / Build your roadmap / Deploy the solutions / Track your ROI) + descriptions.
5. **Services Workbench** — eyebrow "What we do" · h2 **"Complete business technology solutions."** · 6 mini cards (2×3): AI Voice Agents · Cellular Consulting · Business Internet · IoT Connectivity · Website Chat Agents · Workflow Automation + short desc + "View All Services" → `/services`.
6. **Stats Band** — **500+** Businesses served · **95%** retention · **40%** cost reduction · **24/7** AI availability.
7. **Testimonials** — eyebrow "In their words" · h2 **"Trusted by businesses serious about getting results."** · 3 quote cards: Sarah Johnson (Johnson Plumbing), Mike Rodriguez (Rodriguez Construction), Lisa Chen (Chen Marketing) — 5 stars, avatar initials SJ/MR/LC.
8. **Advisory** — eyebrow "Advisory · NevTech AI" · h2 **"When you'd rather not go it alone."** · copy re: 80% of tech success is rollout, every advisor led 25+ implementations · CTAs [Book a free consultation] → `/contact` + [Browse engagements] → `/fractional-caio`. Right: 4 tier rows: **Free Consultation** (Core · 30 min no cost) · **AI Voice Agent Deployment** (Popular · 2-4 wks flat fee) · **Fractional CAIO** (Enterprise · monthly) · **Done-For-You Build** (Custom).
9. **Final CTA** — teal-dark band: eyebrow "Free consultation · No credit card to start" · h2 **"Ready to modernize your business?"** · copy about walking away with a roadmap + top-3 savings · [Get Free Consultation] → `/contact` + [Explore Our Services] → `/services`.

**Images:** none photographic (hero is a code mockup). Decorative blurred-teal glows used as background.

---

## C2. SERVICES — `/services`

**Hero:** eyebrow "What we offer" · h1 **"Complete business technology solutions."** · sub: "…Ten services, one partner, zero runaround." · [Get Free Consultation] → `/contact` + [Browse All Services] (anchor).

**Services grid (10 cards). Each card = teal icon + title + description + "Key Features" checklist + "Benefits" panel + optional "Learn More" link.** The ten services with their real copy:

1. **Fractional CAIO** — Get a Chief AI Officer without full-time cost… → `/fractional-caio`. Benefits: "AI leadership without the $300K+ salary…"
2. **AI Projects** — custom AI: automations, data pipelines, apps → `/ai-projects`.
3. **Rapid MVP** — idea to working product in 8 weeks → `/rapid-mvp`.
4. **AI Voice Agents** — 24/7 phone answering, NLP, booking, routing, multi-language.
5. **AI Receptionist** — virtual receptionist; external link `indianaaireception.com`.
6. **Cellular Consulting** — phones/tablets/hotspots/plans optimization (save up to 40%).
7. **Business Internet Solutions** — 5G, fiber, failover, SD-WAN, multi-location.
8. **IoT Connectivity** — fleets, sensors, monitoring.
9. **Website Chat Agents** — chatbots, lead capture.
10. **Workflow Automation** — repetitive-task automation (save 20+ hrs weekly).

**Process section:** same 4-step Discover/Plan/Implement/Measure as home.
**Stats band:** same 500+/95%/40%/24/7.
**Final CTA:** teal-dark band → "Ready to transform your business?" [Get Free Consultation] + [Learn About Us] → `/about`.

---

## C3. ABOUT — `/about`
- **Hero:** eyebrow "Who We Are" · h1 **"About NevTech AI"** · mission paragraph (modernize small businesses with AI, cellular, workflow).
- **Our Story:** 3 paragraphs. Founder **Cody Neville** saw small businesses struggle with outdated systems/telecom; "today we've helped over 500 businesses." Right side: logo image.
- **Founder:** photo of Cody Neville (Founder & Chief Solutions Architect) + 6 bio paragraphs (medical software, $5M sold, led 50+ engineer team, specializations list: AI voice agents, business internet, cellular/IoT, operational redesign, product strategy, AI+IoT+connectivity integrations).
- **Stats:** 500+ / 95% / 40% / 24/7.
- **Values (4 cards):** Innovation · Client Success · Transparency · Partnership.
- **Final CTA:** "Ready to Work Together?" [Get Free Consultation] + [View Our Services].

---

## C4. CONTACT — `/contact` **[form]**
> ⚠️ This page uses the **older black-on-white** style — good redesign candidate to unify.
- **Hero:** h1 **"Get in Touch"** · "Ready to transform your business with AI? Let's discuss…".
- **3 contact cards:** Phone (317) 508-9493 · Email cody@nevtech.io · Schedule (Calendly book meeting).
- **Form "Send Us a Message":** Fields — Full Name* (text), Email Address* (email), Company (text), Phone Number (tel), Subject* (dropdown: AI Strategy Consultation / Custom AI Development / Process Automation / Data Analytics / General Inquiry / Partnership), Message* (textarea, 500-char limit w/ counter). Posts to a form endpoint. Success/error banners inline.
- **Final CTA (black band):** "Ready to Get Started?" · [Call Now] + [Send Email] + [Book Meeting].

---

## C5. PRODUCTS — `/products`
> Also aliased as `/case-studies`. Two products, comparison layout.
- **Hero:** eyebrow "Our Products" · h1 **"Products Built for Real Business Impact"** · "Two focused products… Indian-naples-based, actually supported."
- **NevTech VMS** (Cloud Video Management System): intro para; hero screenshot image; "Why It's Different" (3 cards: Outages are a pause not a loss · Per-second coverage state · Priced like storage not per stream); "Key Features" (8, incl. WebRTC sub-second live view, LPR/ANPR, clip export, PTZ, multi-tenant); "Who It's For" (retail, logistics, property, parking/transport, campuses, integrators); CTA → nevtechvms.com.
- **NevTech Catalyst** (AI Implementation Platform + Advisory, "From $49/mo · 14-day trial"): intro para; screenshot; "What You Get" (8 features incl. 15-min readiness score, 30/60/90 roadmap, OS Workbench, RAG, advisory tiers, SOC 2/HIPAA); "Who It's For"; CTA → nevtechai.com. Uses **accent** teal as its theme color.
- **Comparison "At a Glance":** two side cards w/ tag chips (VMS: Edge Recording, WebRTC, LPR/ANPR, Multi-Tenant, White-Label, ONVIF/RTSP · Catalyst: Readiness Score, Roadmap, KPI Tracking, RAG Search, Governance, Advisory).
- **Final CTA:** teal-dark · "Let's Figure It Out Together" · [Talk to Us] → `/contact` + [Explore NevTech VMS] + [Try NevTech Catalyst].
- **Images (reuse for redesign):** VMS dashboard screenshot; Catalyst platform screenshot (see Part D).

---

## C6. FAQ — `/faq`
- **Hero:** eyebrow "Got Questions?" · h1 **"Frequently Asked Questions"** · [Contact Us].
- **Category filter pills (sticky):** All Questions · General · AI Receptionist · AI & Automation · Cellular & Internet · Pricing & Plans.
- **Accordion Q&A (~23 total).** Key answers to preserve:
  - **General:** What does NevTech do; Where based (Indianapolis, serves Indiana + nationwide AI); Do I need to be technical; How do I get started (Calendly / (317) 508-9493).
  - **AI Receptionist (Nova):** what it is; does it sound robotic; escalation; setup ~5 business days; handles many calls; HIPAA-compliant.
  - **AI & Automation:** project types (data taxonomy, RAG internal search, workflow tools, earnings-call automation, meeting intelligence); Fractional CAIO definition (vs $250K+ salary); consultant vs CAIO; Rapid MVP (8 wks, under $10K); automations.
  - **Cellular & Internet:** T-Mobile offers ($10/line ≥10 lines, $15 tablet, $50 internet); number porting free; consulting (30–40% savings); non-T-Mobile internet.
  - **Pricing:** Nova pricing (volume-based; T-Mobile customers 6 months free inbound); CAIO retainers ($1,800/mo Quick-Start, $2,800–$4,200 Growth, $4,500–$6,500 Hands-On; hourly $125–$175); no lock-in after 90 days; free discovery call + Nova live demo; Midwest rates vs coastal ($200–$400/hr).
- **Final CTA:** "Still Have Questions?" [Contact Us] + [(317) 508-9493].
- Embeds FAQPage JSON-LD.

---

## C7. BLOG — `/blog`  + `/blog/:slug`
> Content is **database-driven** (published posts from backend `blog_posts`). Design only; text is dynamic.
- **Hero:** pill "NevTech Blog" · h1 **"Ideas from the AI-Native Software Team"** · sub.
- **Listing:** responsive 3-col grid of article cards (cover image or fallback code icon; category chip; title; 3-line excerpt; author + date). Loading spinner, error + Retry state, and empty state built in.
- **Article template** (`/blog/:slug`) renders `blog-prose` rich text w/ LocalBusiness + BlogPosting + Breadcrumb JSON-LD. Existing long-form articles include titles such as *"NevTech AI: Data & AI Consultant in Indianapolis"* and the AI-automation-agencies piece (both live as dedicated article pages too — see C10).

---

## C8. NOVA AI (AI Receptionist) — `/receptionist` **[form]**
> ⚠️ Distinct **black + emerald (#42BEA2)** visual theme — an intentional "dark product page." A strong standalone landing page to redesign in its own identity.
- **Hero (black, bg image):** pulsing dot pill "Now Taking Calls for SMBs Nationwide" · giant **"Meet Nova AI"** · "Your 24/7 AI Receptionist by NevTech" · copy: 62% of inbound callers hang up when nobody answers; Nova captures 100% · CTAs [Get a Demo] (white) + [See How It Works] · stat row: 24/7 · 100% · <2 sec · 30+ languages.
- **The Problem:** "Every Missed Call Is a Lost Customer" — 3 cards: 100% Captured · Front Desk Burnout · After-Hours Black Hole.
- **What Nova Does:** Inbound/Outbound **tab switcher**, each 6 feature cards (inbound: answers every call, natural convos, books appointments, smart routing, remembers customers, 30+ languages; outbound: reminders, lead follow-up, surveys, payment reminders, reactivation, bulk outreach).
- **How It Works (3 steps):** 01 We Learn Your Business → 02 Nova Goes Live (5 business days) → 03 You Watch the Results.
- **T-Mobile offer band (black):** "Limited-Time Offer · **6 Months Free Inbound Calling**" when signing up for T-Mobile through NevTech → [Claim Your 6 Free Months] + link to `/tmobile-business`.
- **Benefits (6):** Never Miss Revenue 100% · Fraction of the Cost 85% · True 24/7 · Instant Scalability (Unlimited) · Consistent Quality 100% · Actionable Analytics (Real-time).
- **Who It's For (6 industry cards, each = Pain → How Nova Fixes It):** Medical & Dental · Law Firms · Home Services · Salons & Spas · Real Estate · Restaurants.
- **Mid CTA:** "Your competitors are answering. Are you?" → [Start Answering Every Call].
- **FAQ (7):** robot voice, handoff, setup, integrations, concurrent calls, HIPAA, contract/no lock-in (annual 2 months free).
- **Demo form** (black panel): Full Name* · Work Email* · Phone Number* · Company Name* · Number of Employees (dropdown 1–5…200+) → posts to form endpoint; success state "Demo Request Received!" with try-calling prompt.
- **Images:** black technology background (hero) + T-Mobile offer background (see Part D).

---

## C9. Other offer / product landing pages
These exist as their own routes; all follow the standard Header/Footer + teal hero wrapper. (Full per-page copy can be appended on request, but structure/purpose below.)

| Route | Purpose / primary CTA |
|---|---|
| `/fractional-caio` | Part-time AI leadership offer |
| `/rapid-mvp` | 8-week build program |
| `/ai-projects` | Custom AI project types (RAG, data taxonomy, automation, earnings call, meeting tracking) |
| `/ai-lead-generation` | Automated lead-gen service |
| `/get-leads` | Lead-gen landing + [form] |
| `/use-cases` | Industry applications |
| `/tmobile-business` | T-Mobile business plans (from receptionist page) |

## C10. Article / content pages
| Route | Type | Content summary |
|---|---|---|
| `/ai-automation-agencies` | [article] | Long-form: what AI automation agencies do; off-the-shelf vs custom; choosing a partner; getting started. BlogPosting + LocalBusiness + Breadcrumb JSON-LD. |
| `/data-and-ai-consultant-indianapolis` | [article] | Long-form: what a data/AI consultant does in Indianapolis; problems solved; idea→reality process; why local; getting started. Same schema. |
| `/how-we-build-software-now` | [article] | "How We Build Software" — engineering approach essay. |
| `/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours` | [article] | After-hours AI receptionist explainer. |

## C11. Local-SEO keyword landing pages — 15 routes, all `[SeoLandingPage template]`
Each = the B4 template filled with keyword-specific copy. Redesign the template once; content differs per page.

| Route | Target keyword |
|---|---|
| `/ai-indianapolis` | AI Indianapolis |
| `/ai-services-indiana` | AI services Indiana |
| `/ai-consulting-indianapolis` | AI consulting Indianapolis |
| `/ai-consulting-indiana` | AI consulting Indiana |
| `/ai-automation-indianapolis` | AI automation Indianapolis |
| `/ai-automation-indiana` | AI automation Indiana |
| `/ai-voice-agents-indiana` | AI voice agents Indiana |
| `/ai-agent-development-indiana` | AI agent development Indiana |
| `/custom-ai-development-indiana` | Custom AI development Indiana |
| `/best-ai-companies-indianapolis` | Best AI companies Indianapolis |
| `/ai-law-firms-indiana` | AI for law firms Indiana |
| `/ai-healthcare-indiana` | AI healthcare Indiana |
| `/ai-manufacturing-indiana` | AI manufacturing Indiana |
| `/ai-logistics-indiana` | AI logistics Indiana |
| `/ai-home-services-indiana` | AI home services Indiana |
| `/ai-construction-indiana` | AI construction Indiana |

*(Plus `/ai-automation-agencies` + `/data-and-ai-consultant-indianapolis` which are article pages, listed in C10.)*

## C12. Legal, forms & support pages
`/terms` · `/privacy` · `/compliance` (Security) · `/intake-form` **[form]** · `/support` · custom 404 (`NotFound`). Simple text/content pages wrapped in Header/Footer.

---

# PART D — IMAGE / ASSET REGISTRY (reuse in redesign)

> **Logo / favicon:** "N" letter mark, teal-gradient on charcoal. Favicon + social share images generated.
> **Brand logo (site-wide):** `static.readdy.ai/.../f8906f87....png` (used in SEO asset map)
> **About — company logo image:** storage URL (see about page)
> **About — Cody Neville headshot:** `static.readdy.ai/.../8659b27b....png`
> **Products — VMS dashboard screenshot:** `static.readdy.ai/.../36f1197b....png`
> **Products — Catalyst platform screenshot:** `static.readdy.ai/.../5b238159....png`
> **Nova hero background (black tech, emerald streaks):** generated image
> **Nova T-Mobile offer background:** generated image

*(Full URLs are embedded in the page code; list here for reference so the designer keeps visual assets consistent.)*

---

# PART E — REDESIGN DECISION LIST (carry-over from handoff part 1)

1. **Unify one visual system** — resolve the teal StyleSystem vs. legacy black/gray blocks; decide whether Nova stays a separate emerald/black identity.
2. **Pick a distinctive type system** (serif vs. modern sans headings; swap a recognizable Google font).
3. **Formalize the logo asset** ("N" mark + wordmark).
4. **Fix dead/placeholder links** (footer social X/Facebook → `#`; `/case-studies` currently aliases to Products).
5. **Rebuild homepage in its true section order** (see C1) — note `ServicesOverview`, `BenefitsSection`, `CTASection` exist in code but are **not** on the live home page; decide whether to include them in the redesign.
6. **Reuse the SeoLandingPage template** for the 15 keyword pages (design once), and the article wrapper for content pages.
7. **Keep conversions**: phone (317) 508-9493, email cody@nevtech.io, Calendly link, and contact/demo forms working.

---
*Built as a living document for the NevTech AI redesign. Page-specific copy above is captured from the live site's code. Long-tail offer/SEO pages (C9, C11, C12) can be expanded with their full verbatim copy on request.*