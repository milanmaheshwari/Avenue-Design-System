# component-page-command

These rules define how individual components must be documented within the documentation site.
Every component documentation page must comply with these rules.

---

## Required Section Order
Each component page must include the following sections in the exact order listed below:

1. Overview
2. Variants
3. Specifications
4. Behaviour
5. Usage Guidelines
6. Accessibility
7. Developer Code

---

## Overview
- Provide a concise description of the component’s purpose.
- Explain when and why the component should be used.
- Keep the description short and product-focused.

---

## Variants
- Display all available variants of the component.
- Clearly label each variant.
- Variants must align with the actual component API.

---

## Specifications
- Explicitly document all visual and layout specifications, including:
  - Width
  - Height
  - Padding and spacing
  - Border radius
  - Typography styles
  - Color tokens
- Use design tokens instead of hard-coded values.
- Document responsive or flexible behavior when applicable.

---

## Behaviour

- Define motion tokens like easing, duration, etc. wherever there are properties change states
- Use annotations and gestures to depict the typical behaviour wherever applicable
- Clearly define responsive or flexible behaviors if applicable.

---

## Usage Guidelines
- Provide clear “Do” and “Don’t” rules.
- Describe recommended use cases and best practices.
- Highlight common misuse scenarios to avoid.
- Keep guidance practical and implementation-oriented.

---

## Accessibility
- Document accessibility considerations for the component.
- Include:
  - Color contrast requirements
  - Font size requirements
  - Screen reader and ARIA guidance where applicable
- Accessibility guidance must align with WCAG standards.

---

## Developer Code
- Provide copy-paste ready React code examples.
- Include:
  - Default usage
  - Variant usage
  - Props examples where relevant
- Code must align with:
  - Design tokens
  - Component API
  - Naming conventions
- Code examples must be production-ready and minimal.

---

## Consistency Rules
- All component pages must follow the same structure and section naming.
- Naming conventions must be consistent across components.
- Visual examples and code must remain in sync.

---

## Quality Bar
- Documentation must be clear, concise, and unambiguous.
- Avoid repetition and unnecessary explanations.
- Optimize for long-term maintainability.

