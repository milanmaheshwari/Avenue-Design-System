# Color Tokens Guide

This document explains the color token structure imported from the Figma design system.

## Source

All color tokens are imported from the Figma design library:
- **Figma File**: [Avenue-Ticket Design System](https://www.figma.com/design/fbMbVTwjlkkh1A7NSQQHnS/Avenue-Ticket?node-id=53-11511)
- **Last Synced**: January 2026

## Token Structure

### Base Colors

All color tokens follow a consistent scale structure:

```typescript
{
  50: string,   // Lightest
  100: string,
  200: string,
  300: string,
  400: string,
  500: string,  // Base color
  600: string,  // Primary reference color
  700: string,
  800: string,
  950: string,  // Darkest
  alpha: {
    0: string,   // Fully transparent
    5: string,   // 5% opacity
    10: string,  // 10% opacity
    25: string,  // 25% opacity
    50: string,  // 50% opacity
    75: string,  // 75% opacity
    90: string,  // 90% opacity
  }
}
```

### Color Collections

#### Primary Colors
- **primary**: Brand primary color (indigo/blue)
  - Base: `#4f46e5` (600)
  - Used for: Primary actions, brand elements

#### Neutral Colors
- **neutral**: Grayscale palette
  - Light: `#fafafa` (50) - Used for text on dark backgrounds
  - Dark: `#0a0a0a` (950) - Used for backgrounds
  - Includes both light and dark alpha variants

#### Category Colors
Each category has its own color palette for theming:

- **music**: Magenta/Pink (`#c026d3`)
- **nightlife**: Purple (`#9333ea`)
- **sports**: Orange (`#ea580c`)
- **movies**: Red (`#dc2626`)
- **comedy**: Yellow (`#ca8a04`)
- **wellness**: Green (`#16a34a`)
- **themeParks**: Blue (`#2563eb`)
- **coffee**: Brown (`#a18072`)

### Semantic Colors

Semantic colors provide meaningful color values for common UI states and feedback:

```typescript
semantic: {
  success: '#16a34a',  // Success green (wellness/600)
  info: '#2563eb',     // Info blue (themeParks/600)
  error: '#dc2626',    // Error red (movies/600)
  warning: '#ca8a04',  // Warning yellow (comedy/600)
}
```

These colors are designed to communicate system feedback and status to users.

## Usage in Components

### Direct Token Reference

```typescript
import { colors } from '../tokens';

const StyledButton = styled.button`
  background: ${colors.primary[600]};
  color: ${colors.neutral[50]};
  
  &:hover {
    background: ${colors.primary[700]};
  }
`;
```

### Using Alpha Values

```typescript
const Overlay = styled.div`
  background: ${colors.neutral.dark.alpha[75]};
  backdrop-filter: blur(8px);
`;
```

### Category Theming

```typescript
const CategoryCard = styled.div<{ $theme: CategoryTheme }>`
  background: ${props => colors[props.$theme][600]};
  box-shadow: 0 0 20px ${props => colors[props.$theme].alpha[25]};
`;
```

### Semantic Usage

```typescript
import { colors } from '../tokens';

const ErrorMessage = styled.p`
  color: ${colors.semantic.error};
`;

const SuccessButton = styled.button`
  background: ${colors.semantic.success};
  &:hover {
    background: ${colors.wellness[700]};
  }
`;

const InfoBadge = styled.span`
  background: ${colors.semantic.info};
  color: ${colors.neutral[50]};
`;

const WarningAlert = styled.div`
  border-left: 4px solid ${colors.semantic.warning};
  background: ${colors.comedy.alpha[10]};
`;
```

## Figma Variable Mapping

The color tokens maintain a 1:1 mapping with Figma variables:

| Figma Variable | Token Path | Value |
|----------------|-----------|-------|
| `primary/600` | `colors.primary[600]` | `#4f46e5` |
| `neutral/50` | `colors.neutral[50]` | `#fafafa` |
| `music/alpha/50` | `colors.music.alpha[50]` | `#c026d380` |
| `Error` | `colors.semantic.error` | `#dc2626` |
| `wellness/600` | `colors.semantic.success` | `#16a34a` |
| `theme-parks/600` | `colors.semantic.info` | `#2563eb` |
| `comedy/600` | `colors.semantic.warning` | `#ca8a04` |

## Best Practices

1. **Always use tokens**: Never hardcode color values in components
2. **Use semantic colors**: Use `colors.semantic.*` for UI feedback (error, success, info, warning)
3. **Category consistency**: Use category colors for category-specific components
4. **Alpha for overlays**: Use alpha variants for transparent backgrounds and overlays
5. **Maintain Figma sync**: Update tokens when Figma design system changes

## Updating from Figma

To sync colors from Figma:

1. Open the Figma file
2. Navigate to the Variables panel
3. Export variables or use the Figma API
4. Update `tokens/colors.ts` with new values
5. Ensure alpha values use correct opacity (e5 = 90%, bf = 75%, etc.)
6. Update `colors.semantic` if semantic color values change

## Notes

- **Alpha opacity values**: The hex opacity values are:
  - `00` = 0% (fully transparent)
  - `0d` = 5%
  - `1a` = 10%
  - `40` = 25%
  - `80` = 50%
  - `bf` = 75%
  - `e5` = 90%
  
- **Removed scales**: Some intermediate scales (500, 900) are not used in the design system to maintain consistency with Figma

- **Category naming**: `themeParks` uses camelCase in code but `theme-parks` in Figma (converted for JavaScript compatibility)
