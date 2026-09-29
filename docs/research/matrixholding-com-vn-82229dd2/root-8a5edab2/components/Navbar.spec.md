# Navbar Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Navbar.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/desktop-1440.png`
- **Interaction model:** scroll-reactive (transparent → opaque on scroll) + mobile hamburger menu click-driven

## DOM Structure
header (sticky, top-0, z-50)
  └── div.container (max-w-7xl, mx-auto, px-4..px-8, flex, items-center, justify-between)
       ├── a[href="/"] (logo link)
       │   └── img (logo.png, white version when transparent, colored version when scrolled OR separate logo)
       ├── nav (hidden md:flex, gap-8, items-center) — desktop nav links
       │   └── a[href] × 5 links
       ├── div (flex, gap-3) — CTA buttons (desktop)
       │   ├── a[href="/dang-ky"] "Đăng ký" (outline button)
       │   └── a[href="/dang-nhap"] "Đăng nhập" (solid button)
       └── button (hamburger, md:hidden) — mobile toggle

## Computed Styles

### Header (initial transparent state)
- position: fixed
- top: 0
- left: 0
- right: 0
- width: 100%
- height: 80px
- display: flex
- alignItems: center
- zIndex: 50
- backgroundColor: rgba(0, 0, 0, 0) → transparent
- backdropFilter: none
- boxShadow: none
- transition: all 0.3s ease

### Header (scrolled state — after scroll > 50px)
- backgroundColor: rgba(255, 255, 255, 0.95)
- backdropFilter: blur(12px)
- boxShadow: 0 1px 3px rgba(0, 0, 0, 0.1)

### Logo Image
- height: 40px
- width: auto

### Nav Links (transparent state)
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontWeight: 500
- textDecoration: none
- transition: color 0.2s ease

### Nav Links (scrolled state)
- color: rgb(71, 85, 105) → slate-600
- Hover: color: rgb(9, 46, 86) → navy

### Primary CTA Button ("Đăng ký")
- backgroundColor: transparent
- border: 1px solid rgb(255, 255, 255)
- color: rgb(255, 255, 255)
- borderRadius: 8px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500

### Secondary CTA Button ("Đăng nhập")
- backgroundColor: rgb(9, 46, 86) → navy
- color: rgb(255, 255, 255)
- border: none
- borderRadius: 8px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500

## States & Behaviors

### Scroll-triggered transparent → opaque
- **Trigger:** window.scrollY > 50
- **State A (before):** backgroundColor: transparent, text/buttons: white
- **State B (after):** backgroundColor: rgba(255,255,255,0.95), backdropFilter: blur(12px), boxShadow: 0 1px 3px rgba(0,0,0,0.1), nav links: rgb(71,85,105)
- **Transition:** transition: all 0.3s ease on the header element
- **Implementation:** useEffect with scroll event listener; toggle a `scrolled` boolean state; apply conditional classes

### Mobile hamburger
- **Trigger:** Click hamburger icon (visible below md breakpoint)
- **Effect:** Show/hide mobile navigation drawer/dropdown
- **State A:** Menu closed, hamburger icon shown
- **State B:** Menu open, X icon shown, nav links shown vertically in full-width panel

## Assets
- Logo: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png` (or .svg)
- Logo white version (for transparent state): may be same logo with filter: brightness(0) invert(1) or separate white-logo.png

## Text Content (verbatim)
Nav links:
- "Giới thiệu" → href="/#gioi-thieu"
- "Hệ sinh thái" → href="/he-sinh-thai" (or "/#he-sinh-thai")
- "Tuyển dụng" → href="/#tuyen-dung"
- "Tin tức" → href="/tin-tuc"
- "Liên hệ" → href="/#lien-he" or href="/lien-he"

CTA Buttons:
- "Đăng ký" → href="/dang-ky"
- "Đăng nhập" → href="/dang-nhap"

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav; logo left, links center, buttons right
- **Tablet (768px):** Same horizontal layout, may reduce padding
- **Mobile (390px):** Logo left, hamburger right; all nav links hidden; clicking hamburger reveals vertical nav in a dropdown/drawer
- **Breakpoint:** switches at 768px (md)
