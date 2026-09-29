# CTABanner Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/CTABanner.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-cta-footer.png`
- **Interaction model:** static + button navigation

## DOM Structure
section (id="lien-he" or "partner", relative overflow-hidden)
  ├── img (background image, absolute inset-0, object-cover)
  ├── div (absolute inset-0, dark overlay, bg-navy/70)
  └── div (container, relative z-10, text-center)
       ├── span (eyebrow label)
       ├── h2 (main heading)
       ├── p (subtitle)
       └── div (flex gap-4 justify-center)
            ├── a[href="/dang-ky"] "Bắt đầu ngay" — primary white button
            └── a[href="/lien-he"] "Liên hệ với chúng tôi" — outline button

## Computed Styles

### Section
- position: relative
- overflow: hidden
- paddingTop: 96px
- paddingBottom: 96px
- minHeight: 400px

### Background Image
- position: absolute
- inset: 0
- width: 100%
- height: 100%
- objectFit: cover
- objectPosition: center
- zIndex: 0

### Dark Overlay
- position: absolute
- inset: 0
- backgroundColor: rgba(9, 46, 86, 0.80) — navy 80% opacity
- zIndex: 1

### Content Container
- position: relative
- zIndex: 10
- textAlign: center
- maxWidth: 700px
- margin: 0 auto
- padding: 0 32px

### Eyebrow
- fontSize: 13px
- fontWeight: 600
- color: rgb(147, 197, 253) — blue-300
- textTransform: uppercase
- letterSpacing: 0.1em
- marginBottom: 16px

### H2
- fontSize: 48px
- fontWeight: 700
- color: rgb(255, 255, 255)
- lineHeight: 1.15
- marginBottom: 20px

### Paragraph
- fontSize: 18px
- color: rgba(255, 255, 255, 0.80)
- lineHeight: 1.6
- marginBottom: 40px

### Primary Button ("Bắt đầu ngay")
- backgroundColor: rgb(255, 255, 255)
- color: rgb(9, 46, 86)
- borderRadius: 8px
- padding: 14px 32px
- fontSize: 16px
- fontWeight: 700
- border: none
- transition: all 0.2s ease
- Hover: backgroundColor: rgb(241, 245, 249), transform: translateY(-2px), boxShadow: 0 8px 20px rgba(0,0,0,0.15)

### Outline Button ("Liên hệ với chúng tôi")
- backgroundColor: transparent
- color: rgb(255, 255, 255)
- border: 2px solid rgba(255, 255, 255, 0.6)
- borderRadius: 8px
- padding: 14px 32px
- fontSize: 16px
- fontWeight: 600
- transition: all 0.2s ease
- Hover: backgroundColor: rgba(255,255,255,0.1), borderColor: rgb(255,255,255)

## States & Behaviors

### Primary Button Hover
- Before: bg white, transform none
- After: bg rgb(241,245,249), transform translateY(-2px), shadow
- Transition: all 0.2s ease

### Outline Button Hover
- Before: bg transparent
- After: bg rgba(255,255,255,0.1)
- Transition: all 0.2s ease

## Assets
- Background: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/cta-bg.jpg`

## Text Content (verbatim)
- Eyebrow: "HỢP TÁC CÙNG CHÚNG TÔI"
- H2: "Sẵn sàng xây dựng tương lai cùng Matrix?"
- Subtitle: "Đăng ký ngay để nhận tư vấn miễn phí và khám phá cách Matrix Holding có thể hỗ trợ doanh nghiệp của bạn phát triển bền vững."
- CTA 1: "Bắt đầu ngay" → href="/dang-ky"
- CTA 2: "Liên hệ với chúng tôi" → href="/lien-he"

## Responsive Behavior
- **Desktop (1440px):** Centered text, two horizontal CTAs
- **Tablet (768px):** Same centered layout, slightly smaller font
- **Mobile (390px):** Stacked CTAs (flex-col), h2 40px, para 16px
- **Breakpoint:** at 640px (sm)
