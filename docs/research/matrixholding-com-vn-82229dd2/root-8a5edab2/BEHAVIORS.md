# BEHAVIORS.md — matrixholding.com.vn Homepage

## Scroll Behaviors

### Sticky Navigation — Scroll Transition
- Trigger: Scroll past ~50px from top
- State A (top, scroll=0): backgroundColor transparent, text white, no shadow
- State B (scrolled): backgroundColor rgba(255,255,255,0.95), backdropFilter blur(12px), boxShadow 0 1px 3px rgba(0,0,0,0.1), text slate-600
- Transition: all 0.3s ease
- Implementation: JS scroll listener adding/removing 'scrolled' class to nav

## Click Behaviors

### Category Filter Tabs
- Trigger: Click category pill
- Active: bg navy rgb(9,46,86), text white, rounded-full
- Inactive: transparent bg, navy text, 1px navy border
- Effect: filters company cards
- Interaction model: CLICK-DRIVEN

### FAQ Accordions
- Trigger: Click FAQ row
- Effect: expands answer, chevron rotates 180deg
- Interaction model: CLICK-DRIVEN

## Hover States

### Primary Navy Buttons: translateY(-2px), darker bg, transition 0.2s ease
### White Outline Buttons: bg rgba(255,255,255,0.1), transition 0.2s ease
### Ecosystem Cards: shadow increase + translateY(-2px), transition 0.3s ease
### Company Cards: border rgb(120,169,205), translateY(-2px), transition 0.2s ease
### Nav Links: color rgb(9,46,86) on hover, transition 0.2s ease

## Responsive Breakpoints
- Desktop 1440px: full horizontal nav, 3-col ecosystem, 2-col about
- Tablet 768px: 2-col grids, nav may collapse
- Mobile 390px: hamburger menu, single-column throughout

## Smooth Scroll
- Standard CSS scroll-behavior: smooth (no Lenis/Locomotive detected)
