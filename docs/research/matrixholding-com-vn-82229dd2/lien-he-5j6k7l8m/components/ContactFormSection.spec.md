# ContactFormSection Specification

## Overview
- **Target file:** `src/components/sites/matrixholding-com-vn-82229dd2/lien-he-5j6k7l8m/ContactFormSection.tsx`

## Design & Structure
- Light gray background (`bg-slate-50`).
- Two-column grid (e.g., `lg:grid-cols-5` with `col-span-2` for left, `col-span-3` for right form).
- **Left Column**:
  - Blue eyebrow, Navy H2.
  - Office card: White bg, rounded-2xl. Top padding has a light blue building icon. Bottom has "Mở Google Maps" with blue text. Middle has a large empty space (perhaps meant for an iframe). We'll replicate the white space box.
  - Shield alert box below it with light blue background (`bg-blue-50`) and blue text.
- **Right Column (Form)**:
  - Large white card, rounded-3xl, heavy drop shadow.
  - Top has "TRAO ĐỔI HỢP TÁC" and a yellow rounded square with a paper plane icon.
  - Form layout: 2 cols for inputs, 1 col for textarea.
  - Inputs: light border, placeholder text, labels above inputs.
  - Submit: Dark navy button.
  - Form should use `"use client"` and standard `onSubmit` handler (can just `preventDefault` and alert/mailto for the clone).
