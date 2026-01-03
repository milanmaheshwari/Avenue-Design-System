# Avenue Design System - Token Structure Summary

## Overview
The Avenue Design System employs a comprehensive token structure organized into **Color Tokens** and **Typography Tokens**, with both desktop and mobile variants. The system uses a consistent naming convention and supports multiple theme categories.

---

## 1. Color Token Structure

### 1.1 Primary Colors
The primary color palette uses an indigo/blue scheme (`#4f46e5`) with a complete shade scale:

- **Base Shades**: `50, 100, 200, 300, 400, 600, 700, 800, 950`
- **Alpha Variants**: `0, 5, 10, 25, 50, 75, 90` (with transparency)

**Example Tokens:**
- `primary/600`: `#4f46e5`
- `primary/alpha/25`: `#4f46e540` (25% opacity)
- `primary/950`: `#1e1b4b` (darkest)
- `primary/50`: `#eef2ff` (lightest)

### 1.2 Neutral Colors
Neutral colors provide two variants for light and dark themes:

#### Neutral Base
- **Shades**: `50, 100, 200, 400, 600, 900, 950`
- Range: `#fafafa` (50) to `#0a0a0a` (950)

#### Neutral Light (Alpha Variants)
- **Alpha Values**: `0, 5, 10, 25, 50, 75, 90`
- Base: `#fafafa`

#### Neutral Dark (Alpha Variants)
- **Alpha Values**: `0, 5, 10, 25, 50, 75, 90`
- Base: `#0a0a0a`

### 1.3 Category Colors
The system includes themed color palettes for various event/venue categories:

#### 🎭 Category List
1. **Comedy** (`#ca8a04` - Yellow/Amber)
2. **Nightlife** (`#9333ea` - Purple)
3. **Sports** (`#ea580c` - Orange)
4. **Music** (`#c026d3` - Magenta/Fuchsia)
5. **Movies** (`#dc2626` - Red)
6. **Wellness** (`#16a34a` - Green)
7. **Theme Parks** (`#2563eb` - Blue)
8. **Coffee** (`#a18072` - Brown)

#### Category Color Structure
Each category follows a consistent structure:

**Base Shades**:
- `50` - Lightest tint
- `100, 200, 300` - Light variations
- `400, 500` - Mid-tones
- `600` - Primary (base color)
- `700, 800` - Dark variations
- `900, 950` - Darkest shades

**Alpha Variants**:
- `0, 5, 10, 25, 50, 75, 90` - Transparency levels

**Example - Comedy Category:**
```
comedy/50: #fefce8
comedy/600: #ca8a04 (Primary)
comedy/950: #78350f
comedy/alpha/25: #ca8a0440
```

### 1.4 Semantic Colors
- **Success**: `#16a34a` (Green - wellness/600)
- **Info**: `#2563eb` (Blue - themeParks/600)
- **Error**: `#dc2626` (Red - movies/600)
- **Warning**: `#ca8a04` (Yellow - comedy/600)

### 1.5 Semantic Color Usage
Semantic colors are used for system feedback and UI states:

- **Success**: Use for positive feedback, confirmations, completed states
- **Info**: Use for informational messages, tooltips, help text
- **Error**: Use for error messages, validation failures, destructive actions
- **Warning**: Use for warnings, cautions, important notices

These semantic colors reference category color values for consistency with the overall design system.

---

## 2. Typography Token Structure

The typography system is organized by **Platform** (Desktop/Mobile), **Style** (Heading, Body, Button, Overline), **Weight** (Regular, Medium, Bold), and **Size Scale** (100-800).

### 2.1 Font Family
All tokens use **Satoshi** font family with three weights:
- Regular (400)
- Medium (500)
- Bold (700)

### 2.2 Desktop Typography

#### Desktop/Heading
Large display and heading text with negative letter spacing for tighter appearance:

| Token | Size | Line Height | Letter Spacing |
|-------|------|-------------|----------------|
| Desktop/Heading/100 | 72px | 76px | -2% |
| Desktop/Heading/200 | 60px | 64px | -2% |
| Desktop/Heading/300 | 48px | 52px | -2% |
| Desktop/Heading/400 | 36px | 40px | -2% |
| Desktop/Heading/500 | 32px | 36px | -2% |
| Desktop/Heading/600 | 24px | 28px | -2% |
| Desktop/Heading/700 | 20px | 24px | -2% |
| Desktop/Heading/800 | 16px | 20px | -2% |

#### Desktop/Body
Content text with three weight variants:

**Regular (Weight: 400)**
| Token | Size | Line Height |
|-------|------|-------------|
| Desktop/Body/Regular/100 | 20px | 28px |
| Desktop/Body/Regular/200 | 18px | 24px |
| Desktop/Body/Regular/300 | 16px | 22px |
| Desktop/Body/Regular/400 | 14px | 18px |

**Medium (Weight: 500)**
| Token | Size | Line Height |
|-------|------|-------------|
| Desktop/Body/Medium/100 | 20px | 28px |
| Desktop/Body/Medium/200 | 18px | 24px |
| Desktop/Body/Medium/300 | 16px | 22px |
| Desktop/Body/Medium/400 | 14px | 18px |

**Bold (Weight: 700)**
| Token | Size | Line Height |
|-------|------|-------------|
| Desktop/Body/Bold/100 | 20px | 28px |
| Desktop/Body/Bold/200 | 18px | 24px |
| Desktop/Body/Bold/300 | 16px | 22px |
| Desktop/Body/Bold/400 | 14px | 18px |

#### Desktop/Button
Button text with 1:1 line height ratio (tight):

| Token | Size | Weight |
|-------|------|--------|
| Desktop/Button/100 | 20px | 700 (Bold) |
| Desktop/Button/200 | 18px | 700 (Bold) |
| Desktop/Button/300 | 16px | 700 (Bold) |
| Desktop/Button/400 | 14px | 700 (Bold) |

#### Desktop/Overline
Uppercase labels with high letter spacing:

| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Desktop/Overline/200 | 16px | 500 | 20px | 10% |
| Desktop/Overline/300 | 14px | 500 | 18px | 10% |

### 2.3 Mobile Typography

#### Mobile/Heading
Smaller scale optimized for mobile devices:

| Token | Size | Line Height | Letter Spacing |
|-------|------|-------------|----------------|
| Mobile/Heading/100 | 40px | 48px | -2% |
| Mobile/Heading/200 | 28px | 32px | -2% |
| Mobile/Heading/300 | 20px | 24px | -2% |
| Mobile/Heading/400 | 18px | 22px | -2% |
| Mobile/Heading/500 | 16px | 20px | -2% |
| Mobile/Heading/600 | 14px | 18px | -2% |
| Mobile/Heading/700 | 13px | 16px | -2% |

#### Mobile/Body
Content text with all three weight variants:

**Regular, Medium, and Bold variants:**
| Token Suffix | Size | Line Height |
|--------------|------|-------------|
| 100 | 16px | 22px |
| 200 | 14px | 20px |
| 300 | 13px | 18px |
| 400 | 12px | 16px |

#### Mobile/Button
| Token | Size | Weight |
|-------|------|--------|
| Mobile/Button/100 | 16px | 700 |
| Mobile/Button/200 | 14px | 700 |
| Mobile/Button/300 | 13px | 700 |
| Mobile/Button/400 | 12px | 700 |

#### Mobile/Overline
| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Mobile/Overline/200 | 13px | 500 | 16px | 10% |
| Mobile/Overline/300 | 12px | 500 | 14px | 10% |

---

## 3. Token Naming Convention

### 3.1 Color Token Pattern
```
{category}/{shade|alpha/value}
```

**Examples:**
- `primary/600` - Primary color at 600 shade
- `neutral/alpha/25` - Neutral with 25% opacity
- `comedy/800` - Comedy category dark shade
- `movies/alpha/50` - Movies category with 50% opacity

### 3.2 Typography Token Pattern
```
{platform}/{type}/{weight}/{size}
```

**Examples:**
- `Desktop/Heading/700` - Desktop heading, size 700
- `Mobile/Body/Regular/300` - Mobile body text, regular weight, size 300
- `Desktop/Button/200` - Desktop button text, size 200

### 3.3 Scale Logic

#### Color Shades
- Lower numbers (50-300) = Lighter tints
- 500-600 = Base/primary colors
- Higher numbers (700-950) = Darker shades

#### Typography Sizes
- Lower numbers (100-200) = Larger text
- Higher numbers (600-800) = Smaller text
- **Inverted scale**: 100 is largest, 800 is smallest

#### Alpha Values
- 0 = Fully transparent
- 5, 10, 25, 50, 75, 90 = Increasing opacity
- (Note: No 100 alpha value - use base color instead)

---

## 4. Key Observations & Design Patterns

### 4.1 Consistency
- All category colors follow the same shade structure (50-950)
- All category colors include alpha variants (0, 5, 10, 25, 50, 75, 90)
- Typography scales are consistent across weight variants

### 4.2 Semantic Organization
- Clear separation between platform-specific typography (Desktop vs Mobile)
- Category-based color organization for domain-specific theming
- Neutral colors support both light and dark themes

### 4.3 Flexibility
- Alpha variants enable overlay and blending effects
- Multiple weight options for body text provide typographic hierarchy
- Separate button styles optimize for interactive elements

### 4.4 Aliasing Strategy
The system uses color aliasing to:
- Reduce token redundancy
- Enable theme consistency across categories
- Example: `nightlife`, `music`, and some `primary` groups share underlying color values

### 4.5 Typography Hierarchy
Clear size differentiation:
- **Desktop**: Ranges from 72px (Heading/100) to 14px (smallest)
- **Mobile**: Ranges from 40px (Heading/100) to 12px (smallest)
- Consistent line-height ratios maintain readability

### 4.6 Special Considerations
- **Headings** use -2% letter spacing for tighter, more compact appearance
- **Overlines** use +10% letter spacing for all-caps label style
- **Buttons** use line-height of 1 (1:1 ratio) for precise control
- **Error token** directly references red color, showing semantic naming

---

## 5. Usage Recommendations

### 5.1 Color Application
- Use **base shades (500-600)** for primary UI elements
- Use **light tints (50-200)** for backgrounds and subtle highlights
- Use **dark shades (700-950)** for text and emphasis
- Use **alpha variants** for overlays, shadows, and layered effects

### 5.2 Typography Application
- **Headings 100-400**: Hero sections, page titles
- **Headings 500-800**: Section headers, card titles
- **Body Regular**: Standard content, paragraphs
- **Body Medium**: Emphasized content, labels
- **Body Bold**: Strong emphasis, highlights
- **Buttons**: Interactive elements only
- **Overline**: Labels, categories, metadata

### 5.3 Platform Targeting
- Use **Desktop** tokens for viewport widths ≥768px
- Use **Mobile** tokens for viewport widths <768px
- Consider implementing responsive type scale switches

---

## 6. Token Statistics

### Color Tokens
- **Primary colors**: ~18 tokens (shades + alpha)
- **Neutral colors**: 18 tokens (base + light/dark alpha)
- **Category colors**: 8 categories × ~18 tokens each = ~144 tokens
- **Semantic colors**: 4 (success, info, error, warning)
- **Total color tokens**: ~184 tokens

### Typography Tokens
- **Desktop**: 38 tokens (8 Headings + 12 Body + 4 Buttons + 2 Overlines)
- **Mobile**: 31 tokens (7 Headings + 12 Body + 4 Buttons + 2 Overlines)
- **Total typography tokens**: 69 tokens

### Grand Total
**~253 design tokens** across the system (colors + typography)

---

### Maintenance Notes
- All color tokens are synced with Figma design system
- See `tokens/COLOR_TOKENS_GUIDE.md` for detailed color documentation
- Semantic colors provide consistent UI feedback across the design system

---

*This document was generated by analyzing the Figma variables and styles in the Avenue Ticket design file.*

