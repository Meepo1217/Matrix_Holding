# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/desktop-1440.png` (top portion)
- **Interaction model:** static + anchor link CTAs

## DOM Structure
section (id="hero", or first section of page)
  └── div (relative, full-bleed background image + dark overlay)
       ├── img (background, object-cover, absolute inset-0, z-0)
       ├── div (absolute inset-0, bg-gradient overlay, z-10) — dark overlay layer
       └── div (container, relative, z-20, text-center or text-left)
            ├── span (uppercase label, muted color) — "MATRIX HOLDING"
            ├── h1 — main headline
            ├── p — subtitle paragraph
            └── div (flex, gap-4) — CTA buttons row
                 ├── a[href="/#gioi-thieu"] "Khám phá ngay" — primary button
                 └── a[href="/he-sinh-thai"] "Xem hệ sinh thái" — secondary button

## Computed Styles

### Section Container
- position: relative
- minHeight: 100vh (or min-h-screen)
- display: flex
- alignItems: center
- justifyContent: center
- overflow: hidden

### Background Image
- position: absolute
- inset: 0 (top:0, right:0, bottom:0, left:0)
- width: 100%
- height: 100%
- objectFit: cover
- objectPosition: center
- zIndex: 0

### Dark Overlay
- position: absolute
- inset: 0
- backgroundColor: rgba(9, 46, 86, 0.65) — navy with 65% opacity
- OR: background: linear-gradient(to bottom, rgba(9,46,86,0.7) 0%, rgba(9,46,86,0.5) 100%)
- zIndex: 10

### Content Container
- position: relative
- zIndex: 20
- maxWidth: 1280px
- margin: auto
- padding: 0 32px
- paddingTop: 160px (to account for fixed navbar height + extra top space)
- paddingBottom: 80px
- textAlign: center

### Label Span
- fontSize: 13px
- fontWeight: 600
- color: rgb(147, 197, 253) — light blue
- textTransform: uppercase
- letterSpacing: 0.1em
- marginBottom: 16px

### H1 Headline
- fontSize: 56px (clamp-like: ~56px at 1440px desktop)
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 1.15
- letterSpacing: -0.02em
- maxWidth: 800px
- margin: 0 auto 24px

### Paragraph (subtitle)
- fontSize: 18px
- color: rgba(255, 255, 255, 0.85)
- lineHeight: 1.6
- maxWidth: 600px
- margin: 0 auto 40px

### Primary CTA Button ("Khám phá ngay")
- backgroundColor: rgb(255, 255, 255)
- color: rgb(9, 46, 86)
- borderRadius: 8px
- padding: 14px 28px
- fontSize: 15px
- fontWeight: 600
- border: none
- transition: all 0.2s ease
- Hover: backgroundColor: rgb(241, 245, 249), transform: translateY(-2px)

### Secondary CTA Button ("Xem hệ sinh thái")
- backgroundColor: transparent
- color: rgb(255, 255, 255)
- border: 2px solid rgba(255, 255, 255, 0.7)
- borderRadius: 8px
- padding: 14px 28px
- fontSize: 15px
- fontWeight: 600
- transition: all 0.2s ease
- Hover: backgroundColor: rgba(255, 255, 255, 0.1)

## States & Behaviors

### Hover — Primary Button
- Before: backgroundColor: rgb(255,255,255), transform: none
- After: backgroundColor: rgb(241,245,249), transform: translateY(-2px)
- Transition: all 0.2s ease

### Hover — Secondary Button
- Before: backgroundColor: transparent
- After: backgroundColor: rgba(255,255,255,0.1)
- Transition: all 0.2s ease

## Assets
- Background image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/hero-bg.jpg`
  (architectural/city image with blue tones — to be downloaded)

## Text Content (verbatim)
- Label: "MATRIX HOLDING"
- H1: "HỆ SINH THÁI KINH DOANH TOÀN DIỆN"
- Subtitle: "Kết nối doanh nghiệp — Phát triển bền vững — Kiến tạo tương lai"
- CTA 1: "Khám phá ngay" → href="/#gioi-thieu"
- CTA 2: "Xem hệ sinh thái" → href="/he-sinh-thai"

## Responsive Behavior
- **Desktop (1440px):** Centered text, max-w-3xl for headline, two horizontal CTAs
- **Tablet (768px):** Same centered layout, slightly smaller font
- **Mobile (390px):** Headline font 32px, paragraph 16px, CTAs stack vertically or remain side-by-side but smaller padding
- **Breakpoint:** layout adjusts at 768px (md), font sizes at 640px (sm)
