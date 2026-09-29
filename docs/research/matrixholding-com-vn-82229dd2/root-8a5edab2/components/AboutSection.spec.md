# AboutSection Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/AboutSection.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/desktop-1440.png` (2nd section)
- **Interaction model:** static with link button

## DOM Structure
section (id="gioi-thieu")
  └── div.container (max-w-7xl, mx-auto, px-4..px-8)
       └── div (grid, grid-cols-1 md:grid-cols-2, gap-12..gap-16, items-center)
            ├── div (text column, left)
            │   ├── span (uppercase eyebrow label)
            │   ├── h2 (section heading)
            │   ├── p × 2-3 (description paragraphs)
            │   ├── ul (feature bullet points, or stats row)
            │   └── a[href] (CTA button "Tìm hiểu thêm" or "Xem chi tiết")
            └── div (image column, right)
                └── div (rounded-2xl overflow-hidden, with shadow)
                     └── img (src=about-image.jpg, object-cover, w-full, h-[400px])

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 96px
- paddingBottom: 96px

### Container
- maxWidth: 1280px
- margin: 0 auto
- paddingLeft: 32px
- paddingRight: 32px

### Grid Layout
- display: grid
- gridTemplateColumns: 1fr 1fr (desktop)
- gap: 64px
- alignItems: center

### Eyebrow Label
- fontSize: 13px
- fontWeight: 600
- color: rgb(9, 46, 86) — navy
- textTransform: uppercase
- letterSpacing: 0.1em
- marginBottom: 12px
- display: block

### H2 Heading
- fontSize: 40px
- fontWeight: 700
- color: rgb(15, 23, 42) — slate-900
- lineHeight: 1.2
- marginBottom: 24px
- fontFamily: (same as body — likely Be Vietnam Pro or sans-serif)

### Paragraphs
- fontSize: 16px
- color: rgb(71, 85, 105) — slate-600
- lineHeight: 1.7
- marginBottom: 16px
- maxWidth: none (takes full column width)

### Stat Row (numbers/highlights)
- display: flex
- gap: 32px
- marginTop: 32px
- marginBottom: 32px
Each stat:
  - Number: fontSize: 36px, fontWeight: 700, color: rgb(9,46,86), display: block
  - Label: fontSize: 14px, color: rgb(71,85,105)

### CTA Link/Button
- backgroundColor: rgb(9, 46, 86) — navy
- color: rgb(255, 255, 255)
- borderRadius: 8px
- padding: 12px 24px
- fontSize: 15px
- fontWeight: 600
- display: inline-flex
- alignItems: center
- gap: 8px
- transition: all 0.2s ease
- Hover: backgroundColor: rgb(0,39,77), transform: translateY(-2px)

### Image Container
- borderRadius: 16px
- overflow: hidden
- boxShadow: 0 20px 60px rgba(0,0,0,0.12)

### Image
- width: 100%
- height: 400px
- objectFit: cover
- objectPosition: center

## States & Behaviors

### CTA Button Hover
- Before: backgroundColor: rgb(9,46,86), transform: none
- After: backgroundColor: rgb(0,39,77), transform: translateY(-2px)
- Transition: all 0.2s ease

## Assets
- Image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/about-image.jpg`

## Text Content (verbatim)
- Eyebrow: "VỀ CHÚNG TÔI"
- H2: "Matrix Holding — Hệ sinh thái kinh doanh toàn diện"
- Para 1: "Matrix Holding là tập đoàn cung cấp hệ sinh thái dịch vụ kinh doanh toàn diện, hỗ trợ doanh nghiệp từ giai đoạn khởi nghiệp đến phát triển bền vững."
- Para 2: "Với hơn 10 năm kinh nghiệm và mạng lưới đối tác rộng khắp, chúng tôi đồng hành cùng hàng nghìn doanh nghiệp Việt Nam trên con đường phát triển."
- Stats: "500+ Doanh nghiệp", "10+ Năm kinh nghiệm", "50+ Chuyên gia"
- CTA: "Tìm hiểu thêm" → href="/gioi-thieu"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid: text left, image right
- **Tablet (768px):** Maintaining 2-column or switching to 1-column
- **Mobile (390px):** 1-column, image above or below text (image first preferred), full-width
- **Breakpoint:** grid switches at 768px (md)
