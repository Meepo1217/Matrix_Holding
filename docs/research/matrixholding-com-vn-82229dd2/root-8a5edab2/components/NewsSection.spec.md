# NewsSection Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/NewsSection.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-news.png`
- **Interaction model:** static with link navigation

## DOM Structure
section (id="tin-tuc" or similar, bg-white)
  └── div.container
       ├── div (section header with heading + "Xem tất cả" link)
       └── div (grid, left: featured article, right: 3 smaller articles)
            ├── article (featured, large card with image)
            └── div (right column, flex, flex-col, gap-4, 3 smaller cards)
                 ├── article (small card 1)
                 ├── article (small card 2)
                 └── article (small card 3)

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 96px
- paddingBottom: 96px

### Section Header Row
- display: flex
- alignItems: center
- justifyContent: space-between
- marginBottom: 48px

### H2
- fontSize: 36px
- fontWeight: 700
- color: rgb(15, 23, 42)

### "Xem tất cả" Link
- color: rgb(9, 46, 86)
- fontSize: 14px
- fontWeight: 600
- display: inline-flex
- alignItems: center
- gap: 4px
- Hover: textDecoration: underline

### News Grid
- display: grid
- gridTemplateColumns: 1.5fr 1fr (left wider featured, right narrower stack)
- gap: 24px
- alignItems: start

### Featured Card
- borderRadius: 16px
- overflow: hidden
- boxShadow: 0 1px 3px rgba(0,0,0,0.1)
- border: 1px solid rgb(226, 232, 240)
- Hover: boxShadow: 0 10px 30px rgba(0,0,0,0.12), transform: translateY(-2px)
- transition: all 0.3s ease

### Featured Card Image
- width: 100%
- height: 280px
- objectFit: cover

### Featured Card Body
- padding: 24px

### Featured Card Category Tag
- fontSize: 12px
- fontWeight: 600
- color: rgb(9, 46, 86)
- textTransform: uppercase
- backgroundColor: rgb(219, 234, 254) — blue-100
- padding: 4px 10px
- borderRadius: 4px
- marginBottom: 12px

### Featured Card Title (h3)
- fontSize: 22px
- fontWeight: 700
- color: rgb(15, 23, 42)
- lineHeight: 1.3
- marginBottom: 12px

### Featured Card Meta (date + author)
- fontSize: 13px
- color: rgb(100, 116, 139) — slate-500
- display: flex
- gap: 16px

### Small Card
- display: flex
- gap: 16px
- padding: 16px
- borderRadius: 12px
- border: 1px solid rgb(226, 232, 240)
- backgroundColor: rgb(255, 255, 255)
- Hover: borderColor: rgb(120, 169, 205), transform: translateY(-2px), boxShadow: 0 4px 12px rgba(0,0,0,0.08)
- transition: all 0.2s ease

### Small Card Image
- width: 100px
- height: 80px
- objectFit: cover
- borderRadius: 8px
- flexShrink: 0

### Small Card Body
- flex: 1

### Small Card Category
- fontSize: 11px
- fontWeight: 600
- color: rgb(9, 46, 86)
- textTransform: uppercase
- marginBottom: 6px

### Small Card Title
- fontSize: 14px
- fontWeight: 600
- color: rgb(15, 23, 42)
- lineHeight: 1.4
- marginBottom: 4px

### Small Card Date
- fontSize: 12px
- color: rgb(100, 116, 139)

## States & Behaviors

### Featured Card Hover
- Before: boxShadow: 0 1px 3px, transform: none
- After: boxShadow: 0 10px 30px rgba(0,0,0,0.12), transform: translateY(-2px)
- Transition: all 0.3s ease

### Small Card Hover
- Before: border: rgb(226,232,240), transform: none
- After: border: rgb(120,169,205), transform: translateY(-2px)
- Transition: all 0.2s ease

## Assets
- Featured image: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/news-featured.jpg`
- Small card images: news-thumb-1.jpg, news-thumb-2.jpg, news-thumb-3.jpg

## Text Content (verbatim)
Section heading: "Tin tức & Sự kiện"
Section CTA: "Xem tất cả →"

Featured article:
- Category: "SỰ KIỆN"
- Title: "Matrix Holding tổ chức hội nghị kết nối doanh nghiệp 2024"
- Excerpt: "Sự kiện quy tụ hơn 500 doanh nghiệp và chuyên gia hàng đầu..."
- Date: "15/11/2024"
- Author: "Ban Truyền thông"

Small article 1:
- Category: "TIN TỨC"
- Title: "Ra mắt dịch vụ tư vấn pháp lý doanh nghiệp toàn diện"
- Date: "10/11/2024"

Small article 2:
- Category: "KINH DOANH"
- Title: "Matrix Connect ký kết hợp tác chiến lược với 20 đối tác mới"
- Date: "05/11/2024"

Small article 3:
- Category: "ĐẦU TƯ"
- Title: "Matrix Ventures rót vốn vào 5 startup công nghệ tiềm năng"
- Date: "01/11/2024"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid (1.5fr 1fr): featured left, small cards right
- **Tablet (768px):** May switch to single column or 1:1 grid
- **Mobile (390px):** Single column, featured card + small cards stacked vertically
- **Breakpoint:** at 768px (md)
