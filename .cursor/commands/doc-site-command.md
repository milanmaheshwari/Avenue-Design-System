# doc-site-command

These rules define how the design system documentation site must be structured and built.
All documentation pages must follow these constraints.

---

## Navigation & Layout
- The documentation site must use a persistent left sidebar.
- The sidebar is the primary navigation mechanism across the site.
- The sidebar must remain visible on all documentation pages.

---

## Sidebar Organization
- Sidebar items must be grouped into clear categories (e.g. Foundations, Components).
- All sidebar categories must be listed in alphabetical order.
- All pages within each category must also be listed alphabetically.
- Sidebar nesting must not exceed two levels.

---

## Information Architecture
- The documentation site must support the following page types:
  - Foundation documentation pages (e.g. Color, Typography, Spacing)
  - Component documentation pages
- Each page type must use a consistent layout and hierarchy.

---

## Light & Dark Mode
- The site must support both Light Mode and Dark Mode.
- Provide a visible theme toggle that is accessible from all pages (e.g. in the top header).
- The selected theme must persist across navigation within the site.
- The selected theme must persist across sessions (e.g. local storage or equivalent).
- Default theme behavior- respect the user’s system preference when available.
- If system preference is unavailable, default to Dark Mode.
- All site UI (backgrounds, text, borders, code blocks, navigation, and examples) must correctly adapt to the active theme.
- Theme styling must be token-driven (no hard-coded colors), using design tokens for both light and dark palettes.

---

## Layout Consistency
- All pages must use consistent spacing, heading styles, and section hierarchy.
- Page structure must remain consistent across the entire site.
- Visual examples must accurately reflect the implemented components.

---

## Developer Experience
- The documentation site must be usable by both designers and developers.
- Code examples must be easy to locate, copy, and understand.
- Design tokens must be referenced instead of hard-coded values wherever applicable.

---

## Quality Bar
- Documentation must prioritize clarity and scalability.
- Avoid redundant or verbose explanations.
- Follow predictable patterns across all pages.
