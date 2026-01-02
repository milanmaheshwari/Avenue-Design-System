# Avenue Design System - Documentation Site

A comprehensive documentation site for the Avenue Design System, showcasing design token foundations.

## 📁 Structure

```
docs/
├── components/          # Reusable UI components
│   └── Sidebar.tsx     # Navigation sidebar
├── layouts/            # Page layouts
│   └── DocsLayout.tsx  # Main documentation layout
├── pages/              # Documentation pages
│   ├── HomePage.tsx    # Landing page
│   └── foundations/    # Foundation pages
│       ├── ColorsPage.tsx
│       ├── TypographyPage.tsx
│       └── SpacingPage.tsx
├── styles/             # Global styles
│   └── GlobalStyles.tsx
├── data/               # Navigation and data
│   └── navigation.ts   # Sidebar navigation structure
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎯 Features

### Navigation
- ✅ Persistent left sidebar on all pages
- ✅ Single category: Foundations
- ✅ Alphabetically organized pages (Colors, Spacing, Typography)
- ✅ Active state highlighting

### Foundation Pages
- ✅ **Colors**: Complete color token system with swatches
- ✅ **Typography**: Typography tokens with live examples
- ✅ **Spacing**: Spacing scale with visual demonstrations

### Design System Integration
- ✅ Built entirely with design tokens
- ✅ No hard-coded values
- ✅ Type-safe with TypeScript
- ✅ Responsive design

### Developer Experience
- ✅ Clear code examples
- ✅ Copy-paste ready snippets
- ✅ Visual demonstrations
- ✅ Token tables
- ✅ Guidelines and best practices

## 🚀 Running the Documentation Site

### Prerequisites
- Node.js 18+
- React 18+
- Styled Components 6+

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Opens browser at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build
```

## 📖 Adding New Foundation Pages

1. Create a new file in `docs/pages/foundations/`
2. Follow the structure of existing foundation pages
3. Use the `DocsLayout` wrapper
4. Add to `navigation.ts` in alphabetical order
5. Add route in `App.tsx`

Example:

```tsx
import { DocsLayout, DocsPageHeader, DocsSection } from '../../layouts/DocsLayout';

export const ShadowsPage: React.FC = () => {
  return (
    <DocsLayout currentPath="/foundations/shadows">
      <DocsPageHeader
        title="Shadows"
        description="Elevation system for depth and hierarchy"
      />
      <DocsSection>
        {/* Content */}
      </DocsSection>
    </DocsLayout>
  );
};
```

## 🎨 Design Principles

### Consistency
- All pages use the same layout components
- Spacing, typography, and colors are token-based
- Consistent heading hierarchy

### Clarity
- Clear section titles and descriptions
- Code examples with syntax highlighting
- Visual demonstrations alongside explanations

### Accessibility
- Proper semantic HTML
- Focus states on interactive elements
- Color contrast meets WCAG standards
- Keyboard navigation support

### Scalability
- Easy to add new pages
- Reusable layout components
- Centralized navigation structure
- Token-based styling

## 📝 Page Structure

All foundation pages follow this structure:

1. **Page Header**: Title and description
2. **Usage Section**: Import and basic usage code
3. **Examples Section**: Visual demonstrations with tokens
4. **Guidelines Section**: Best practices and recommendations

## 🎯 Current Pages

### 1. Colors
- Primary color system
- Neutral colors
- Category colors (8 categories)
- Alpha variants
- Semantic colors
- Visual swatches and code examples

### 2. Typography
- Font family (Satoshi)
- Font weights (Regular, Medium, Bold)
- Desktop typography (Headings, Body, Buttons, Overlines)
- Mobile typography
- Type scale tables
- Live examples

### 3. Spacing
- 8px-based spacing scale
- Semantic spacing aliases
- Visual demonstrations
- Usage guidelines
- Padding and gap examples

## 🔧 Customization

### Adding New Navigation Items

Edit `docs/data/navigation.ts`:

```typescript
export const navigation: NavCategory[] = [
  {
    title: 'Foundations',
    items: [
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Shadows', href: '/foundations/shadows' },  // Add new item
      { title: 'Spacing', href: '/foundations/spacing' },
      { title: 'Typography', href: '/foundations/typography' },
    ],
  },
];
```

### Styling

All styles use design tokens from `tokens/`:
- Colors: `colors.*`
- Typography: `typography.*`
- Spacing: `spacing.*`
- Shadows: `shadows.*`
- Borders: `theme.borders.*`
- Transitions: `theme.transitions.*`

## 📦 Dependencies

- React 18+
- Styled Components 6+
- Vite (dev server)
- Design System Tokens (local)

## 🎉 Complete!

The documentation site includes:
- ✅ 1 Home page
- ✅ 3 Foundation pages (Colors, Typography, Spacing)
- ✅ Sidebar navigation
- ✅ Consistent layouts
- ✅ Global styles
- ✅ Token-based styling

Ready to add more foundation pages as needed!
