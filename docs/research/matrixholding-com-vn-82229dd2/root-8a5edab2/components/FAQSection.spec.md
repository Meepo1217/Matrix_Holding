# FAQSection Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/FAQSection.tsx`
- **Screenshot:** `docs/design-references/matrixholding-com-vn-82229dd2/root-8a5edab2/section-faq.png`
- **Interaction model:** CLICK-DRIVEN accordion (one open at a time)

## DOM Structure
section (id="faq", bg-white)
  └── div.container
       └── div (grid, 2 cols: left image, right accordion)
            ├── div (image column, left)
            │   └── div (rounded-2xl overflow-hidden)
            │        └── img (faq-illustration.jpg)
            └── div (accordion column, right)
                 ├── span (eyebrow)
                 ├── h2 (heading)
                 ├── p (subtitle)
                 └── div (accordion list)
                      ├── details/div.accordion-item × 5
                      ...

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 96px
- paddingBottom: 96px

### Grid
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 64px
- alignItems: center

### Image
- width: 100%
- height: 480px
- objectFit: cover
- borderRadius: 16px

### H2
- fontSize: 36px
- fontWeight: 700
- color: rgb(15, 23, 42)
- marginBottom: 16px

### Accordion Item (closed)
- borderBottom: 1px solid rgb(226, 232, 240)
- padding: 20px 0

### Accordion Item Header (button)
- width: 100%
- display: flex
- justifyContent: space-between
- alignItems: center
- cursor: pointer
- backgroundColor: transparent
- border: none
- textAlign: left

### Accordion Question Text
- fontSize: 16px
- fontWeight: 600
- color: rgb(15, 23, 42)
- flex: 1

### Accordion Chevron Icon
- width: 20px
- height: 20px
- color: rgb(9, 46, 86)
- transition: transform 0.3s ease
- Closed: transform: rotate(0deg)
- Open: transform: rotate(180deg)

### Accordion Answer (hidden state)
- maxHeight: 0 (or display: none, or grid-template-rows: 0fr)
- overflow: hidden
- transition: max-height 0.3s ease, opacity 0.3s ease

### Accordion Answer (open state)
- maxHeight: 200px (or grid-template-rows: 1fr)
- paddingTop: 12px

### Accordion Answer Text
- fontSize: 15px
- color: rgb(71, 85, 105)
- lineHeight: 1.7

## States & Behaviors

### Accordion Open/Close — Click
- **Trigger:** Click on accordion header button
- **State A (closed):** answer hidden (max-height: 0), chevron rotated 0deg
- **State B (open):** answer visible (max-height: 200px), chevron rotated 180deg
- **One-at-a-time:** Opening one accordion closes the previously open one
- **Transition:** max-height 0.3s ease, transform 0.3s ease
- **Implementation:** React useState for openIndex; conditional classes on answer container

## Assets
- Illustration: `public/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/faq-illustration.jpg`

## Text Content (verbatim)
- Eyebrow: "CÂU HỎI THƯỜNG GẶP"
- H2: "Những câu hỏi phổ biến"
- Subtitle: "Tìm hiểu thêm về Matrix Holding và hệ sinh thái dịch vụ của chúng tôi"

FAQ Items:
1. Q: "Matrix Holding là gì?"
   A: "Matrix Holding là tập đoàn cung cấp hệ sinh thái dịch vụ kinh doanh toàn diện, hỗ trợ doanh nghiệp từ giai đoạn khởi nghiệp đến phát triển bền vững với các giải pháp pháp lý, tài chính, nhân sự và công nghệ."

2. Q: "Làm thế nào để tham gia hệ sinh thái Matrix?"
   A: "Doanh nghiệp có thể đăng ký trực tiếp trên website của chúng tôi hoặc liên hệ đội ngũ tư vấn để được hỗ trợ lựa chọn gói dịch vụ phù hợp với nhu cầu cụ thể."

3. Q: "Matrix Holding có phục vụ doanh nghiệp startup không?"
   A: "Có, Matrix Ventures chuyên hỗ trợ các startup ở giai đoạn đầu với tư vấn chiến lược, kết nối nhà đầu tư và hỗ trợ nguồn vốn cho doanh nghiệp tiềm năng."

4. Q: "Chi phí sử dụng dịch vụ như thế nào?"
   A: "Chi phí phụ thuộc vào gói dịch vụ được lựa chọn và quy mô doanh nghiệp. Liên hệ đội ngũ tư vấn để nhận báo giá chi tiết và phù hợp nhất."

5. Q: "Khu vực nào được Matrix Holding phục vụ?"
   A: "Matrix Holding hiện phục vụ doanh nghiệp trên toàn quốc với văn phòng chính tại TP. Hồ Chí Minh và mạng lưới đối tác tại các tỉnh thành lớn."

## Responsive Behavior
- **Desktop (1440px):** 2-column: image left, FAQ accordion right
- **Tablet (768px):** 1-column: image hidden or above, accordion below
- **Mobile (390px):** 1-column, no image, accordion takes full width
- **Breakpoint:** at 768px (md) — image hidden below this breakpoint
