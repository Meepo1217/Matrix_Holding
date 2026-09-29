# PAGE_TOPOLOGY.md — matrixholding.com.vn Homepage

## Section Order (Top to Bottom)

1. **Navbar** — position: sticky, top: 0, z-index: 50, ~80px height
   - Interaction model: scroll-reactive (transparent → white on scroll), link clicks
   - Overlays all content as user scrolls

2. **HeroSection** — normal flow, ~700px height
   - Full-bleed background image (hero-bg.jpg)
   - Interaction model: static (anchor CTA only)

3. **AboutSection** — normal flow, ~600px height
   - 2-col layout: text left, image right
   - id: gioi-thieu (anchor target from hero CTA)
   - Interaction model: static + button navigation

4. **EcosystemOverview** — normal flow, ~650px height
   - 3-col card grid: Matrix Network, Matrix Connect, Matrix Ventures
   - Each card has image header, icon, title, description, CTA link
   - Interaction model: hover effects only

5. **NewsSection** — normal flow, ~500px height
   - Left: featured article card (large)
   - Right: 3 smaller news preview cards stacked
   - Interaction model: link navigation

6. **EcosystemDirectory** — normal flow, ~750px height
   - Category filter pills + company card grid
   - Interaction model: CLICK-DRIVEN tab filtering

7. **FAQSection** — normal flow, ~600px height
   - 2-col: left image, right accordion list (5 items)
   - Interaction model: CLICK-DRIVEN accordion

8. **CTABanner** — normal flow, ~300px height
   - Background image (cta-bg.jpg) with dark overlay
   - Interaction model: static + button navigation

9. **Footer** — normal flow, ~400px height
   - Contact info + nav links + copyright
   - Interaction model: static links

## Z-index Layers
- Navbar: z-50 (sticky on top)
- Content sections: z-0 (normal flow)
- Modal/overlays: none detected

## Scroll Container
- Root document scroll (no custom scroll container)
- scroll-behavior: smooth on html element

## Key Dependencies
- Navbar overlays hero at top — hero section needs top padding or margin-top for content to be visible under transparent nav
- CTA button in hero links to #gioi-thieu (AboutSection id)
