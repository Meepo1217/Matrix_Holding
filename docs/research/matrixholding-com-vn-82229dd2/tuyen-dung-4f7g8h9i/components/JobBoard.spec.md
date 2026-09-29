# JobBoard Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/tuyen-dung-4f7g8h9i/JobBoard.tsx`

## Design & Structure
- Background: Very light gray/slate (`bg-slate-50`).
- Top Bar: Categories filter (pill shapes). Active pill is dark navy text with white bg and shadow. Inactive are transparent with border.
- 2-Column Layout (lg: grid-cols-[300px_1fr]).
- Left Sidebar:
  - Sticky positioning.
  - "Tìm việc thông minh" card: white bg, blue text.
  - "Doanh nghiệp đang hiển thị" list: small blue building icons with company names.
- Right Job List:
  - Job Card: White bg, shadow-sm, rounded-2xl. Left border thick accent color.
  - Badge: Circle with letters (e.g., MA), blue text on light blue bg.
  - Tags: Location (light gray), Salary (light yellow), Category (light purple).
  - Hover effects on cards (slight lift or shadow increase).
