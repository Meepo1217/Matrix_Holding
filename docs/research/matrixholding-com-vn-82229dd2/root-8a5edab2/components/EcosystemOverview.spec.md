# EcosystemOverview Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/EcosystemOverview.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-ecosystem-overview.png`
- **Interaction model:** static (hover effects only)

## DOM Structure
section (id="he-sinh-thai")
  └── div.container
       ├── div (section header, text-center)
       │   ├── span (eyebrow label)
       │   ├── h2 (heading)
       │   └── p (subtitle)
       └── div (grid, 3 columns)
            ├── article.card (Matrix Network)
            │   ├── div (card image header, bg-image)
            │   ├── div (card body)
            │   │   ├── div (icon circle)
            │   │   ├── h3 (card title)
            │   │   ├── p (card description)
            │   │   └── a (CTA link)
            │   └── (border-bottom accent line)
            ├── article.card (Matrix Connect)
            └── article.card (Matrix Ventures)

## Computed Styles

### Section
- backgroundColor: rgb(248, 250, 252) — slate-50
- paddingTop: 96px
- paddingBottom: 96px

### Section Header
- textAlign: center
- marginBottom: 64px

### H2
- fontSize: 40px
- fontWeight: 700
- color: rgb(15, 23, 42)
- marginBottom: 16px

### Section Subtitle
- fontSize: 18px
- color: rgb(71, 85, 105)
- maxWidth: 600px
- margin: 0 auto

### Cards Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 32px

### Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- overflow: hidden
- boxShadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- transition: all 0.3s ease
- border: 1px solid rgb(226, 232, 240)
- Hover: boxShadow: 0 20px 40px rgba(0,0,0,0.15), transform: translateY(-4px)

### Card Image Header
- height: 200px
- width: 100%
- backgroundSize: cover
- backgroundPosition: center
- position: relative

### Card Body
- padding: 28px

### Card Icon Circle
- width: 48px
- height: 48px
- borderRadius: 12px
- backgroundColor: rgb(9, 46, 86) — navy
- display: flex
- alignItems: center
- justifyContent: center
- marginBottom: 16px
- color: rgb(255, 255, 255)

### Card H3 Title
- fontSize: 22px
- fontWeight: 700
- color: rgb(15, 23, 42)
- marginBottom: 12px

### Card Paragraph
- fontSize: 15px
- color: rgb(71, 85, 105)
- lineHeight: 1.6
- marginBottom: 20px

### Card CTA Link
- color: rgb(9, 46, 86)
- fontSize: 14px
- fontWeight: 600
- display: inline-flex
- alignItems: center
- gap: 6px
- Hover: gap: 10px (arrow moves right), color: rgb(0,39,77)

## States & Behaviors

### Card Hover
- Before: boxShadow: 0 1px 3px rgba(0,0,0,0.1), transform: none
- After: boxShadow: 0 20px 40px rgba(0,0,0,0.15), transform: translateY(-4px)
- Transition: all 0.3s ease

### CTA Arrow Hover
- Before: gap: 6px
- After: gap: 10px (arrow shifts right)
- Transition: gap 0.2s ease

## Assets
- Card 1 image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/network-card.jpg`
- Card 2 image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/connect-card.jpg`
- Card 3 image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/ventures-card.jpg`

## Text Content (verbatim)
- Eyebrow: "HỆ SINH THÁI"
- H2: "Ba trụ cột phát triển"
- Subtitle: "Matrix Holding vận hành 3 hệ sinh thái chuyên biệt, hỗ trợ toàn diện cho mọi giai đoạn phát triển của doanh nghiệp"

Card 1 — Matrix Network:
- Title: "Matrix Network"
- Description: "Mạng lưới dịch vụ hỗ trợ doanh nghiệp bao gồm pháp lý, kế toán, nhân sự và các giải pháp vận hành"
- CTA: "Tìm hiểu thêm →"

Card 2 — Matrix Connect:
- Title: "Matrix Connect"
- Description: "Nền tảng kết nối doanh nghiệp với đối tác chiến lược, khách hàng tiềm năng và nhà đầu tư"
- CTA: "Tìm hiểu thêm →"

Card 3 — Matrix Ventures:
- Title: "Matrix Ventures"
- Description: "Quỹ đầu tư và ươm tạo startup, hỗ trợ nguồn vốn và mentoring cho các doanh nghiệp tiềm năng"
- CTA: "Tìm hiểu thêm →"

## Responsive Behavior
- **Desktop (1440px):** 3-column grid, each card equal width
- **Tablet (768px):** 2-column grid (cards wrap)
- **Mobile (390px):** 1-column, cards stack vertically full-width
- **Breakpoint:** 3→2 at 1024px (lg), 2→1 at 768px (md)
