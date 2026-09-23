---
name: Capará Holding Institutional Design System
colors:
  surface: '#fff8f7'
  surface-dim: '#f2d3d0'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e7'
  surface-container-high: '#ffe1df'
  surface-container-highest: '#fbdbd9'
  on-surface: '#281716'
  on-surface-variant: '#5c403e'
  inverse-surface: '#3f2c2a'
  inverse-on-surface: '#ffedeb'
  outline: '#906f6c'
  outline-variant: '#e5bdba'
  surface-tint: '#bd0c21'
  primary: '#8f0014'
  on-primary: '#ffffff'
  primary-container: '#ba071f'
  on-primary-container: '#ffc8c3'
  inverse-primary: '#ffb3ae'
  secondary: '#b22930'
  on-secondary: '#ffffff'
  secondary-container: '#fe6161'
  on-secondary-container: '#65000d'
  tertiary: '#004873'
  on-tertiary: '#ffffff'
  tertiary-container: '#006098'
  on-tertiary-container: '#b4d8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930015'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3af'
  on-secondary-fixed: '#410005'
  on-secondary-fixed-variant: '#900b1b'
  tertiary-fixed: '#cee5ff'
  tertiary-fixed-dim: '#98cbff'
  on-tertiary-fixed: '#001d33'
  on-tertiary-fixed-variant: '#004a77'
  background: '#fff8f7'
  on-background: '#281716'
  surface-variant: '#fbdbd9'
  red-primary: '#BA071F'
  wine: '#8C0719'
  soft-blush: '#F2DBD5'
  gray-light: '#C9C8C8'
  gray-mid: '#A2A2A2'
  gray-dark: '#666666'
typography:
  headline-lg:
    fontFamily: Roboto Condensed
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Roboto Condensed
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Roboto Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md-mobile:
    fontFamily: Roboto Condensed
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 30px
  subhead:
    fontFamily: Barlow Semi Condensed
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  signature:
    fontFamily: Great Vibes
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a rigorous, prestigious, and institutional visual language for Capará Holding and its specialized divisions (Real Estate, Inversiones, and Seguros). The brand personality is authoritative, reliable, structured, and profoundly professional, communicating elite stability paired with modern executive polish.

We adopt a **Corporate / Modern** design style enriched with subtle editorial framing. Visual hierarchy relies on stark, high-contrast typography pairings, precise geometric alignment, and intentional splashes of rich crimson and primary red against pristine white and warm neutral backdrops.

## Colors

The color palette centers on commanding chromatic tones derived directly from the institutional identity manual, anchored by a deep primary red and a sophisticated wine carmine. Neutrals span from pure white and soft blush to deep carbon blacks and precise industrial grays.

### Theme Variations
- **Holding (Institutional):** Utilizes primary red (`#BA071F`) for core actions, wine (`#8C0719`) for accents, and clean white/soft blush surfaces.
- **Real Estate:** Shifts primary emphasis to wine (`#8C0719`) with soft blush (`#F2DBD5`) accent tags to project an editorial, architectural aesthetic.
- **Inversiones:** Leverages high-contrast primary red (`#BA071F`) against structured mid-grays (`#A2A2A2`) to communicate financial solidity and elite status.
- **Seguros:** Pairs wine (`#8C0719`) with warm soft blush (`#F2DBD5`) backgrounds to evoke warmth, security, and closeness.

## Typography

Typography bridges institutional authority with modern readability. Headlines utilize condensed geometric proportions (`Roboto Condensed` / `Barlow Condensed`) to deliver impactful section headers and high-density data titles. Body text relies on systematic sans-serif (`Inter`) for crisp clarity across financial tables, descriptions, and user interfaces. Use the signature font (`Great Vibes` or `Alex Brush`) strictly for monogram watermarks, executive sign-offs, and brand flourishes.

## Layout & Spacing

The layout model relies on a structured **12-column fluid grid** system designed to adapt seamlessly across institutional portals, investment dashboards, and property showcases. 

- **Desktop:** Generous outer canvas margins (`2rem`+) frame high-density content blocks, maintaining strict vertical and horizontal alignment.
- **Tablet & Mobile:** Grid gutters adapt dynamically to smaller viewports, compressing outer margins to `1rem` while preserving internal component padding to maintain touch target accessibility and readability.

## Elevation & Depth

Elevation is conveyed through **low-contrast outlines** and intentional surface layering rather than heavy drop shadows. 

- **Surface Tiers:** Interface cards and modal dialogs rest on crisp white surfaces (`#FFFFFF`) layered over subtle division-specific alt-surfaces (`#FAF5F4`, `#F8F8F8`, or `#F2DBD5`).
- **Borders:** Structural boundaries utilize precise, clean borders (`#C9C8C8` or division accent tokens) to establish clean separation without visual noise. Ghost borders and subtle 1px outlines reinforce the corporate, professional aesthetic.

## Shapes

The shape language is controlled and sophisticated (**Soft**, roundedness level 1). 
- Interactive elements, input fields, and standard cards feature crisp, professional corners (`0.25rem` border-radius).
- Larger containers and prominent feature cards utilize `rounded-lg` (`0.5rem`) to soften structural layouts while preserving an orderly, executive tone. Avoid pill-shaped buttons; favor structured rectangles with micro-radii.

## Components

### Buttons
- **Primary Actions:** Solid fills using the active division's primary token (`#BA071F` or `#8C0719`) with high-contrast white text, subtle 1px border-radius, and medium font weight.
- **Secondary Actions:** Outlined variants featuring a 1px border in `--theme-border` and text matching the primary brand color.

### Input Fields
- Structured rectangles with `0.25rem` radius, 1px border (`#C9C8C8`), and clear label typography above. Focus states trigger a crisp border shift to the division's primary brand color.

### Cards & Containers
- Clean white backgrounds (`#FFFFFF`) bounded by subtle light gray dividers. Real Estate and Investment cards may incorporate subtle top-border accent bars using the primary brand hue.

### Badges & Tags
- Compact label pills utilizing soft background tints (such as `#F2DBD5`) paired with dark wine or primary red typography for categorical tags, property attributes, and investment metrics.

### Lists & Tables
- High-density data tables featuring clear horizontal rules (`#C9C8C8`), alternating row shading for complex financial data, and right-aligned numerical metrics styled in primary brand red.