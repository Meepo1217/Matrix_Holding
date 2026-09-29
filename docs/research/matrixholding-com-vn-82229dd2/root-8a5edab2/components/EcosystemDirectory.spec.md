# EcosystemDirectory Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/EcosystemDirectory.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-directory.png`
- **Interaction model:** CLICK-DRIVEN — category filter pills filter visible company cards

## DOM Structure
section (id="tuyen-dung" or "doanh-nghiep", bg-slate-50)
  └── div.container
       ├── div (section header)
       │   ├── span (eyebrow)
       │   ├── h2
       │   └── p (subtitle)
       ├── div (filter pills row)
       │   └── button × 8 (category filter buttons)
       └── div (company cards grid, 4 columns)
            └── article.company-card × N

## Computed Styles

### Section
- backgroundColor: rgb(248, 250, 252) — slate-50
- paddingTop: 96px
- paddingBottom: 96px

### Filter Pills Row
- display: flex
- flexWrap: wrap
- gap: 12px
- justifyContent: center
- marginBottom: 48px

### Filter Pill (inactive)
- backgroundColor: rgb(255, 255, 255)
- color: rgb(9, 46, 86)
- border: 1px solid rgb(9, 46, 86)
- borderRadius: 9999px
- padding: 8px 20px
- fontSize: 14px
- fontWeight: 500
- cursor: pointer
- transition: all 0.2s ease

### Filter Pill (active)
- backgroundColor: rgb(9, 46, 86)
- color: rgb(255, 255, 255)
- border: 1px solid rgb(9, 46, 86)
- borderRadius: 9999px
- padding: 8px 20px

### Filter Pill Hover
- If inactive: backgroundColor: rgb(239, 246, 255) — blue-50
- Transition: all 0.2s ease

### Company Cards Grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 20px

### Company Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 12px
- border: 1px solid rgb(226, 232, 240)
- padding: 24px
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 12px
- transition: all 0.2s ease
- Hover: borderColor: rgb(120,169,205), transform: translateY(-2px), boxShadow: 0 8px 24px rgba(0,0,0,0.08)

### Company Logo Container
- width: 48px
- height: 48px
- borderRadius: 10px
- overflow: hidden
- backgroundColor: rgb(248, 250, 252)
- display: flex
- alignItems: center
- justifyContent: center

### Company Logo Image
- width: 100%
- height: 100%
- objectFit: contain

### Company Name (h3)
- fontSize: 15px
- fontWeight: 700
- color: rgb(15, 23, 42)
- lineHeight: 1.3

### Company Category Tag
- fontSize: 11px
- fontWeight: 600
- textTransform: uppercase
- color: rgb(100, 116, 139)
- backgroundColor: rgb(241, 245, 249) — slate-100
- padding: 3px 8px
- borderRadius: 4px

### Company Description
- fontSize: 13px
- color: rgb(71, 85, 105)
- lineHeight: 1.5

## States & Behaviors

### Category Filter — Click
- **Trigger:** Click a filter pill button
- **State A (no active filter / "Tất cả"):** All cards visible
- **State B (category selected):** Only cards matching the selected category visible, others hidden (display:none or opacity 0)
- **Transition:** Fade out/in of cards, or instant switch (confirm from browser)
- **Implementation:** useState for activeCategory; filter companies array in render

### Card Hover
- Before: border rgb(226,232,240), transform none
- After: border rgb(120,169,205), transform translateY(-2px), boxShadow 0 8px 24px rgba(0,0,0,0.08)
- Transition: all 0.2s ease

## Per-State Content

### All Categories Shown
(Filter: "Tất cả" — all companies visible)

### Categories Available (pills):
- "Tất cả" (default active)
- "Pháp lý"
- "Tài chính"
- "Vận hành"
- "Nhân sự"
- "Kinh doanh"
- "Truyền thông"
- "Công nghệ"

### Company Cards Data (representative sample):
1. Name: "Matrix Legal", Category: "Pháp lý", Desc: "Tư vấn pháp lý doanh nghiệp"
2. Name: "Matrix Finance", Category: "Tài chính", Desc: "Kế toán và tài chính doanh nghiệp"
3. Name: "Matrix HR", Category: "Nhân sự", Desc: "Tuyển dụng và quản trị nhân sự"
4. Name: "Matrix Media", Category: "Truyền thông", Desc: "Truyền thông và marketing"
5. Name: "Matrix Tech", Category: "Công nghệ", Desc: "Giải pháp công nghệ số"
6. Name: "Matrix Ops", Category: "Vận hành", Desc: "Tối ưu hóa vận hành doanh nghiệp"
7. Name: "Matrix Biz", Category: "Kinh doanh", Desc: "Phát triển kinh doanh và thị trường"
8. Name: "Matrix Consult", Category: "Vận hành", Desc: "Tư vấn chiến lược và quản trị"

(NOTE: Actual company names/logos to be extracted from downloaded assets)

## Assets
- Company logos: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/company-*.png`

## Text Content (verbatim)
- Eyebrow: "DOANH NGHIỆP THÀNH VIÊN"
- H2: "Hệ sinh thái doanh nghiệp Matrix"
- Subtitle: "Khám phá các doanh nghiệp thành viên trong hệ sinh thái Matrix Holding"

## Responsive Behavior
- **Desktop (1440px):** 4-column grid, filter pills in one row
- **Tablet (768px):** 2-column grid, filter pills wrap to 2 rows
- **Mobile (390px):** 2-column grid (or 1-col), filter pills wrap and scroll
- **Breakpoint:** 4→2 at 1024px (lg), 2→1 at 640px (sm)
