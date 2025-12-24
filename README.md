# Avenue Design System - Design Tokens

A comprehensive set of design tokens for the Avenue Design System, ready to be used in React components and web applications.

## 📦 Installation

```bash
npm install @avenue/design-tokens
# or
yarn add @avenue/design-tokens
```

## 🚀 Usage

### Import All Tokens

```typescript
import { theme } from '@avenue/design-tokens';

// Access tokens
const primaryColor = theme.colors.primary[600];
const headingStyle = theme.typography.desktop.heading[100];
const spacing = theme.spacing[4];
```

### Import Specific Token Groups

```typescript
import { colors, typography, spacing } from '@avenue/design-tokens';

// Use individual token groups
const buttonColor = colors.primary[600];
const bodyText = typography.desktop.body.regular[300];
const padding = spacing[4];
```

### Use with Styled Components

```typescript
import styled from 'styled-components';
import { theme } from '@avenue/design-tokens';

const Button = styled.button`
  background-color: ${theme.colors.primary[600]};
  color: ${theme.colors.semantic.labelsPrimary};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  border-radius: ${theme.borders.radius.md};
  font-size: ${theme.typography.desktop.button[300].fontSize};
  font-weight: ${theme.typography.desktop.button[300].fontWeight};
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.sm};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;
```

### Use with CSS-in-JS (Emotion)

```typescript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '@avenue/design-tokens';

const buttonStyles = css`
  background-color: ${theme.colors.primary[600]};
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borders.radius.button};
`;

function Button() {
  return <button css={buttonStyles}>Click me</button>;
}
```

### Use with Tailwind CSS

You can integrate these tokens with Tailwind CSS by extending the theme in `tailwind.config.js`:

```javascript
const { theme } = require('@avenue/design-tokens');

module.exports = {
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      borderRadius: theme.borders.radius,
      boxShadow: theme.shadows,
      // ... add more tokens as needed
    },
  },
};
```

## 🎨 Token Structure

### Colors

- **Primary**: Main brand colors with shades (50-950) and alpha variants
- **Neutral**: Grayscale colors for text, backgrounds, and borders
- **Category Colors**: 
  - Comedy (yellow/amber)
  - Nightlife (purple)
  - Sports (orange)
  - Music (magenta/fuchsia)
  - Movies (red)
  - Wellness (green)
  - Theme Parks (blue)
  - Coffee (brown/taupe)
- **Semantic**: Special-purpose colors (labels, errors)

```typescript
colors.primary[600]           // #4f46e5
colors.neutral[900]           // #171717
colors.comedy[600]            // #ca8a04
colors.primary.alpha[25]      // #4f46e540 (25% opacity)
colors.semantic.error         // #dc2626
```

### Typography

Organized by platform (Desktop/Mobile), style (Heading, Body, Button, Overline), and weight (Regular, Medium, Bold).

```typescript
typography.desktop.heading[100]      // 72px heading
typography.desktop.body.regular[300] // 16px regular body text
typography.mobile.button[200]        // 14px button text
typography.fontFamily.primary        // "Satoshi" font
typography.fontWeights.bold          // 700
```

### Spacing

8px-based spacing scale with semantic aliases.

```typescript
spacing[4]              // 16px
spacing[8]              // 32px
spacing.semantic.md     // 16px
spacing.semantic.xl     // 32px
```

### Shadows

Elevation system for depth and hierarchy.

```typescript
shadows.sm                    // Small shadow
shadows.xl                    // Extra large shadow
shadows.semantic.card         // Card shadow
shadows.semantic.modal        // Modal shadow
```

### Borders

Border widths, styles, and radius values.

```typescript
borders.widths[1]                  // 1px
borders.styles.solid               // solid
borders.radius.md                  // 8px
borders.radius.semantic.button     // Button border radius
```

### Breakpoints

Responsive design breakpoints.

```typescript
breakpoints.md              // 768px (tablet)
breakpoints.lg              // 1024px (desktop)
mediaQueries.md             // @media (min-width: 768px)
```

### Z-Index

Layering system for stacking context.

```typescript
zIndex.modal           // 1400
zIndex.tooltip         // 1600
zIndex.toast           // 1700
```

### Transitions

Animation durations and easing functions.

```typescript
transitions.default              // all 250ms smooth
transitions.fast                 // all 150ms smooth
transitionDurations.normal       // 250ms
transitionTimingFunctions.smooth // cubic-bezier(0.4, 0, 0.2, 1)
```

## 📖 Token Documentation

For detailed information about each token category, see [token-structure-summary.md](./token-structure-summary.md).

## 🎯 Design Principles

1. **Consistency**: All tokens follow predictable naming conventions
2. **Scalability**: Token structure supports easy additions and modifications
3. **Accessibility**: Colors and typography meet WCAG guidelines
4. **Flexibility**: Semantic aliases provide meaningful shortcuts
5. **Type-Safe**: Full TypeScript support with type exports

## 🔄 Updating Tokens

When updating tokens from Figma:

1. Export the latest design tokens from Figma
2. Update the corresponding token files in the `tokens/` directory
3. Run `npm run typecheck` to ensure type safety
4. Update version in `package.json`
5. Document changes in CHANGELOG

## 📝 Contributing

When adding new tokens:

1. Follow the existing naming conventions
2. Add TypeScript types
3. Update documentation
4. Include examples in README
5. Ensure backward compatibility

## 📄 License

MIT © Avenue Design Team

