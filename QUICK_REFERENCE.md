# Avenue Design System - Quick Reference Guide

## 🚀 Quick Start

```typescript
// Import everything
import { theme } from './tokens';

// Or import specific tokens
import { colors, typography, spacing, shadows } from './tokens';
```

## 🎨 Colors

```typescript
// Primary colors
colors.primary[600]              // #4f46e5
colors.primary.alpha[25]         // #4f46e540 (25% opacity)

// Neutral colors
colors.neutral[900]              // #171717 (dark)
colors.neutral[50]               // #fafafa (light)

// Category colors
colors.comedy[600]               // #ca8a04
colors.nightlife[600]            // #9333ea
colors.sports[600]               // #ea580c
colors.music[600]                // #c026d3
colors.movies[600]               // #dc2626
colors.wellness[600]             // #16a34a
colors.themeParks[600]           // #2563eb
colors.coffee[600]               // #a18072

// Semantic
colors.semantic.labelsPrimary    // #FFFFFF
colors.semantic.error            // #dc2626
```

## 📝 Typography

```typescript
// Desktop
typography.desktop.heading[100]           // 72px heading
typography.desktop.heading[700]           // 20px heading
typography.desktop.body.regular[300]      // 16px body text
typography.desktop.body.medium[300]       // 16px medium text
typography.desktop.body.bold[300]         // 16px bold text
typography.desktop.button[300]            // 16px button text
typography.desktop.overline[300]          // 14px overline

// Mobile
typography.mobile.heading[100]            // 40px heading
typography.mobile.body.regular[300]       // 13px body text

// Font properties
typography.fontFamily.primary             // "Satoshi"
typography.fontWeights.regular            // 400
typography.fontWeights.medium             // 500
typography.fontWeights.bold               // 700
```

## 📏 Spacing

```typescript
// Numeric scale
spacing[0]                       // 0px
spacing[1]                       // 4px
spacing[2]                       // 8px
spacing[4]                       // 16px
spacing[6]                       // 24px
spacing[8]                       // 32px
spacing[12]                      // 48px
spacing[16]                      // 64px

// Semantic aliases
spacing.semantic.xs              // 4px
spacing.semantic.sm              // 8px
spacing.semantic.md              // 16px
spacing.semantic.lg              // 24px
spacing.semantic.xl              // 32px
spacing.semantic['2xl']          // 48px
spacing.semantic['3xl']          // 64px
```

## 🌑 Shadows

```typescript
shadows.xs                       // Minimal shadow
shadows.sm                       // Small shadow
shadows.md                       // Medium shadow
shadows.lg                       // Large shadow
shadows.xl                       // Extra large shadow
shadows['2xl']                   // Huge shadow
shadows.inner                    // Inner shadow

// Semantic
shadows.semantic.card            // Card shadow
shadows.semantic.cardHover       // Card hover shadow
shadows.semantic.dropdown        // Dropdown shadow
shadows.semantic.modal           // Modal shadow
```

## 🔲 Borders

```typescript
// Widths
theme.borders.widths[1]          // 1px
theme.borders.widths[2]          // 2px
theme.borders.widths[4]          // 4px

// Radius
theme.borders.radius.sm          // 4px
theme.borders.radius.md          // 8px
theme.borders.radius.lg          // 12px
theme.borders.radius.xl          // 16px
theme.borders.radius.full        // 9999px

// Semantic
theme.borders.radius.semantic.button      // Button radius
theme.borders.radius.semantic.card        // Card radius
theme.borders.radius.semantic.input       // Input radius
theme.borders.radius.semantic.badge       // Badge radius (full)
```

## 📱 Breakpoints

```typescript
// Values
breakpoints.xs                   // 375px
breakpoints.sm                   // 640px
breakpoints.md                   // 768px
breakpoints.lg                   // 1024px
breakpoints.xl                   // 1280px
breakpoints['2xl']               // 1536px

// Media queries
mediaQueries.md                  // @media (min-width: 768px)
mediaQueries.lg                  // @media (min-width: 1024px)
```

## 📚 Z-Index

```typescript
zIndex.hide                      // -1
zIndex.base                      // 0
zIndex.dropdown                  // 1000
zIndex.sticky                    // 1100
zIndex.fixed                     // 1200
zIndex.modalBackdrop             // 1300
zIndex.modal                     // 1400
zIndex.popover                   // 1500
zIndex.tooltip                   // 1600
zIndex.toast                     // 1700
```

## ⚡ Transitions

```typescript
// Durations
transitionDurations.instant      // 0ms
transitionDurations.fast         // 150ms
transitionDurations.normal       // 250ms
transitionDurations.slow         // 350ms

// Timing functions
transitionTimingFunctions.smooth // cubic-bezier(0.4, 0, 0.2, 1)
transitionTimingFunctions.bounce // cubic-bezier(0.68, -0.55, 0.265, 1.55)

// Pre-configured
transitions.default              // all 250ms smooth
transitions.fast                 // all 150ms smooth
transitions.color                // color 250ms smooth
transitions.transform            // transform 250ms smooth
```

## 🛠️ Utility Functions

```typescript
import { getColor, getSpacing, hexToRgba } from './tokens/utils';

// Get color by path
getColor('primary', 600)                    // #4f46e5
getColor('comedy', 'alpha', 25)             // #ca8a0440

// Get spacing
getSpacing(4)                               // 16px
getSpacing('md')                            // 16px

// Color manipulation
hexToRgba('#4f46e5', 0.5)                   // rgba(79, 70, 229, 0.5)

// Category colors
getCategoryColor('music', 600)              // #c026d3

// Button styles
createButtonStyles('primary')               // Returns button style object
```

## 💡 CSS Variables

```css
/* Import CSS file */
@import './tokens/tokens.css';

/* Use in CSS */
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition-duration: var(--duration-normal);
}
```

## 📦 Common Patterns

### Button
```typescript
const Button = styled.button`
  background-color: ${colors.primary[600]};
  color: ${colors.semantic.labelsPrimary};
  padding: ${spacing[4]} ${spacing[6]};
  border-radius: ${theme.borders.radius.md};
  font-size: ${typography.desktop.button[300].fontSize};
  font-weight: ${typography.desktop.button[300].fontWeight};
  box-shadow: ${shadows.sm};
  transition: ${transitions.default};
`;
```

### Card
```typescript
const Card = styled.div`
  background: ${colors.neutral[50]};
  padding: ${spacing[6]};
  border-radius: ${theme.borders.radius.lg};
  box-shadow: ${shadows.card};
`;
```

### Input
```typescript
const Input = styled.input`
  padding: ${spacing[3]} ${spacing[4]};
  border: ${theme.borders.widths[2]} solid ${colors.neutral[200]};
  border-radius: ${theme.borders.radius.md};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  
  &:focus {
    border-color: ${colors.primary[600]};
    outline: none;
  }
`;
```

### Responsive Typography
```typescript
const Heading = styled.h1`
  font-size: ${typography.mobile.heading[100].fontSize};
  
  ${mediaQueries.md} {
    font-size: ${typography.desktop.heading[100].fontSize};
  }
`;
```

---

**For detailed documentation, see:**
- `README.md` - Comprehensive guide
- `DESIGN_TOKENS_SUMMARY.md` - Complete overview
- `EXAMPLE_USAGE.tsx` - React component examples
- `token-structure-summary.md` - Detailed token analysis

