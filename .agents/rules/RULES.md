---
trigger: always_on
---

## 1. Core Objective
Build a modern, production-quality landing page inspired by a sharp, monochromatic, high-contrast aesthetic similar to https://attio.com/

The system must prioritize:
- Clarity over decoration
- Precision over variety

## 2. Design Philosophy

### 2.1 Visual Style
- Monochromatic or near-monochromatic palette (black, white, grayscale)
- Accent colors must be rare and functional only (errors, success, focus states)
- High contrast UI elements
- Minimal gradients; prefer flat design
- Subtle borders instead of heavy shadows
- light theme

### 2.2 Typography
- Use modern sans-serif fonts (e.g., Inter, Geist, SF Pro equivalent)
- Strong typographic hierarchy:
  - Large, confident headings
  - Clean body text with high readability
- Avoid decorative fonts
- Use letter-spacing minimally and intentionally

### 2.3 Layout
- Generous whitespace
- Strict alignment rules (no "almost centered" elements)
- Avoid clutter and dense UI blocks
- Prefer modular sections

### 2.4 Components
- Reusable, composable UI components
- Buttons, inputs, modals must follow consistent styling system
- No unnecessary variants (limit to primary / secondary / ghost)

## 3. UX Rules

- Every screen must have a single primary action
- Navigation must be minimal and predictable
- Feedback must be immediate (loading, success, error states required)
- Forms must be short and structured

## 5. Technical Constraints

### Frontend
- Component-driven architecture

### Code Quality
- No duplicated components
- Strict separation of UI / logic / data fetching
- No inline styles unless absolutely necessary
- Maintain clean folder structure:
  - /components
  - /pages (or /app)
  - /lib
  - /styles

## 6. Content Rules

- Use realistic placeholder content only
- No lorem ipsum unless explicitly requested
- Text must be concise and functional
- Avoid marketing fluff language

## 7. Accessibility

- Must follow WCAG contrast standards
- All interactive elements must be keyboard accessible
- Proper aria labels for inputs and modals
- No interaction relying solely on color

## 8. Performance

- Avoid unnecessary re-renders
- Prefer server-side rendering where applicable
- Optimize images and assets
- Keep bundle size minimal

## 9. Prohibited Patterns
- Color-heavy or multi-theme designs
- Decorative UI elements with no functional purpose
- Inconsistent spacing systems

## 10. Output Expectations

When generating code:
- Output production-ready code only
- No explanations unless explicitly requested
- Maintain consistency with existing components
- Ensure every feature integrates into the system cleanly

## 11. Design Reference Constraint

All UI decisions must remain consistent with:
- Sharp geometry
- Monochrome dominance
- Enterprise-grade minimalism
- High information density without clutter

Deviation is only allowed if explicitly requested by the user.