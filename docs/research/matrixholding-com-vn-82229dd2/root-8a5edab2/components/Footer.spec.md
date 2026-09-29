# Footer Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Footer.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-footer.png`
- **Interaction model:** static (links only)

## DOM Structure
footer (bg-slate-900)
  └── div.container
       ├── div (footer body, grid 4-column)
       │   ├── div (company column — logo, description, social icons)
       │   ├── div (nav column — "Về chúng tôi" + links)
       │   ├── div (services column — "Dịch vụ" + links)
       │   └── div (contact column — "Liên hệ" + address, phone, email)
       └── div (footer bottom bar)
            ├── p (copyright)
            └── div (policy links: privacy, terms)

## Computed Styles

### Footer
- backgroundColor: rgb(15, 23, 42) — slate-900
- paddingTop: 64px
- paddingBottom: 0
- color: rgb(148, 163, 184) — slate-400

### Footer Grid
- display: grid
- gridTemplateColumns: 2fr 1fr 1fr 1.5fr
- gap: 40px
- paddingBottom: 48px
- borderBottom: 1px solid rgb(30, 41, 59) — slate-800

### Company Column Logo
- height: 36px
- width: auto
- marginBottom: 16px
- filter: brightness(0) invert(1) — make logo white on dark bg

### Company Description
- fontSize: 14px
- color: rgb(148, 163, 184)
- lineHeight: 1.7
- marginBottom: 24px

### Social Icons Row
- display: flex
- gap: 12px
Each social icon button:
- width: 36px
- height: 36px
- borderRadius: 8px
- backgroundColor: rgb(30, 41, 59) — slate-800
- color: rgb(148, 163, 184)
- display: flex
- alignItems: center
- justifyContent: center
- transition: all 0.2s ease
- Hover: backgroundColor: rgb(9,46,86), color: white

### Column Heading
- fontSize: 14px
- fontWeight: 700
- color: rgb(255, 255, 255)
- textTransform: uppercase
- letterSpacing: 0.05em
- marginBottom: 20px

### Column Links
- fontSize: 14px
- color: rgb(148, 163, 184)
- lineHeight: 2
- textDecoration: none
- display: block
- transition: color 0.2s ease
- Hover: color: rgb(255, 255, 255)

### Contact Info Lines
- fontSize: 14px
- color: rgb(148, 163, 184)
- display: flex
- alignItems: flex-start
- gap: 8px
- marginBottom: 12px
Icon:
- color: rgb(9, 46, 86) — navy (or muted blue)

### Footer Bottom Bar
- paddingTop: 24px
- paddingBottom: 24px
- display: flex
- justifyContent: space-between
- alignItems: center
- fontSize: 13px
- color: rgb(100, 116, 139) — slate-500

## States & Behaviors

### Social Icon Hover
- Before: bg rgb(30,41,59), color slate-400
- After: bg rgb(9,46,86), color white
- Transition: all 0.2s ease

### Footer Link Hover
- Before: color rgb(148,163,184)
- After: color rgb(255,255,255)
- Transition: color 0.2s ease

## Assets
- Logo (white): `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png` (with CSS filter: brightness(0) invert(1))
- Social icons: Use Lucide React icons (Facebook, Twitter, LinkedIn, YouTube)

## Text Content (verbatim)
Company column:
- Description: "Matrix Holding là tập đoàn cung cấp hệ sinh thái dịch vụ kinh doanh toàn diện, đồng hành cùng doanh nghiệp Việt Nam phát triển bền vững."
- Social icons: Facebook, LinkedIn, YouTube, Zalo

Column 2 — "VỀ CHÚNG TÔI":
- "Giới thiệu" → /gioi-thieu
- "Hệ sinh thái" → /he-sinh-thai
- "Tin tức" → /tin-tuc
- "Tuyển dụng" → /tuyen-dung

Column 3 — "DỊCH VỤ":
- "Tư vấn pháp lý" → /dich-vu/phap-ly
- "Kế toán & Tài chính" → /dich-vu/tai-chinh
- "Tuyển dụng nhân sự" → /dich-vu/nhan-su
- "Giải pháp công nghệ" → /dich-vu/cong-nghe
- "Truyền thông" → /dich-vu/truyen-thong

Column 4 — "LIÊN HỆ":
- Address: "123 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh"
- Phone: "(028) 3825 xxxx"
- Email: "info@matrixholding.com.vn"
- Business hours: "Thứ 2 – Thứ 6: 8:00 – 17:30"

Bottom bar:
- Copyright: "© 2024 Matrix Holding. Bảo lưu mọi quyền."
- Links: "Chính sách bảo mật" | "Điều khoản sử dụng"

## Responsive Behavior
- **Desktop (1440px):** 4-column grid: 2fr 1fr 1fr 1.5fr
- **Tablet (768px):** 2-column grid: company+contact left, nav+services right
- **Mobile (390px):** 1-column, each section stacked vertically
- **Breakpoint:** 4→2 at 768px (md), 2→1 at 640px (sm)
