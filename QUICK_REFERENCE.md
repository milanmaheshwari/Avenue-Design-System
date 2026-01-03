# Avenue Design System - Quick Reference Guide

## 🚀 Quick Start

```typescript
// Import everything
import { theme } from './tokens';

// Or import specific tokens
import { colors, typography, spacing } from './tokens';
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
colors.semantic.success          // #16a34a
colors.semantic.info             // #2563eb
colors.semantic.error            // #dc2626
colors.semantic.warning          // #ca8a04
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


## 💡 CSS Variables

```css
/* Import CSS file */
@import './tokens/tokens.css';

/* Use in CSS */
.button {
  background-color: var(--color-primary-600);
  color: var(--color-neutral-50);
  padding: var(--spacing-4);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
}
```

## 📦 Common Patterns

### Button
```typescript
import { colors, spacing, typography } from './tokens';

const Button = styled.button`
  background-color: ${colors.primary[600]};
  color: ${colors.neutral[50]};
  padding: ${spacing[4]} ${spacing[6]};
  border-radius: 12px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.button[300].fontSize};
  font-weight: ${typography.fontWeights.bold};
  
  &:hover {
    background-color: ${colors.primary[700]};
  }
`;
```

### Card
```typescript
const Card = styled.div`
  background: ${colors.neutral[50]};
  padding: ${spacing[6]};
  border-radius: 20px;
`;
```

### Error Message
```typescript
const ErrorMessage = styled.div`
  color: ${colors.semantic.error};
  font-size: ${typography.desktop.body.regular[400].fontSize};
  padding: ${spacing[2]} ${spacing[4]};
  background: ${colors.movies.alpha[10]};
  border-radius: 8px;
`;
```

### Success Button
```typescript
const SuccessButton = styled.button`
  background-color: ${colors.semantic.success};
  color: ${colors.neutral[50]};
  padding: ${spacing[4]} ${spacing[6]};
  font-weight: ${typography.fontWeights.bold};
  border-radius: 12px;
  
  &:hover {
    background-color: ${colors.wellness[700]};
  }
`;
```

---

**For detailed documentation, see:**
- `README.md` - Comprehensive guide
- `DESIGN_TOKENS_SUMMARY.md` - Complete overview
- `EXAMPLE_USAGE.tsx` - React component examples
- `token-structure-summary.md` - Detailed token analysis

