# 🎨 Theme Configuration Guide

This document explains how to use the centralized theme configuration in your IGO Buyback project.

## Quick Start

All colors, spacing, typography, and animations are stored in:
- **TypeScript Config:** `src/config/theme.ts`
- **CSS Variables:** Automatically injected into `window.document`
- **Helper Functions:** `getColor()`, `getSpacing()`, `getFontSize()`

---

## 📦 Using Theme in React Components

### Import the theme config:

```typescript
import { theme, getColor, getSpacing } from '../config/theme';
```

### Example 1: Using Colors in a Component

```typescript
import { colors } from '../config/theme';

export function Card() {
  return (
    <div style={{
      backgroundColor: colors.green[600],
      color: colors.earth[900],
      padding: colors.green[600],
      borderColor: colors.earth[200],
      // Yellow accent
      accentColor: colors.yellow[500]
    }}>
      Content
    </div>
  );
}
```

### Example 2: Using Helper Functions

```typescript
import { getColor, getSpacing, getFontSize } from '../config/theme';

export function Button() {
  return (
    <button style={{
      backgroundColor: getColor('green', 600),
      padding: `${getSpacing(3)} ${getSpacing(6)}`,
      fontSize: getFontSize('lg'),
    }}>
      Click Me
    </button>
  );
}
```

### Example 3: Using Animations

```typescript
import { motion } from 'motion/react';
import { theme } from '../config/theme';

export function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: parseFloat(theme.animations.durations.base) / 1000,
        ease: theme.animations.easings.smooth
      }}
    >
      Animated Content
    </motion.div>
  );
}
```

---

## 🎯 Using Theme in CSS/Tailwind

### CSS Variables (Auto-Injected)

All theme values are automatically available as CSS custom properties:

```css
/* Colors */
color: var(--color-green-600);
background: var(--color-earth-50);
border-color: var(--color-green-100);

/* Spacing */
padding: var(--spacing-4);
margin: var(--spacing-6);
gap: var(--spacing-3);

/* Typography */
font-size: var(--font-size-lg);
font-weight: var(--font-weight-semibold);

/* Border Radius */
border-radius: var(--radius-xl);

/* Shadows */
box-shadow: var(--shadow-lg);

/* Z-Index */
z-index: var(--z-modal);
```

### Tailwind CSS (Already Integrated)

The colors are already in Tailwind's theme:

```jsx
<div className="bg-agri-green-600 text-agri-earth-900 p-6 rounded-3xl shadow-lg">
  Styled with Tailwind
</div>
```

---

## 🎨 Available Color Palettes

### Primary Colors (Green Shades)
```typescript
green: {
  50: '#f0fdf4',    // Lightest
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',   // Primary
  700: '#15803d',
  800: '#166534',
  900: '#14532d',   // Darkest
}
```

### Neutral Colors (Earth Tones)
```typescript
earth: {
  50: '#fafaf9',    // Background
  100: '#f5f5f4',   // Light
  200: '#e7e5e4',   // Border
  500: '#78716c',   // Medium text
  900: '#1c1917',   // Dark text
}
```

**Use Cases:**
- Primary text and backgrounds
- Borders and dividers
- Neutral states

### Yellow Colors (Bright, Warm Accent)
```typescript
yellow: {
  50: '#fefce8',    // Lightest
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',   // Primary yellow
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',   // Darkest
}
```

### Accent Colors
```typescript
amber: { 400: '#fbbf24', 500: '#f59e0b' }
status: { success, error, warning, info }
social: { whatsapp, facebook, twitter, linkedin }
```

### Yellow Color (Bright, Warm Accent)
```typescript
yellow: {
  50: '#fefce8',    // Lightest
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',   // Primary yellow
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',   // Darkest
}
```

---

## 📐 Spacing Scale

```typescript
spacing: {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  24: '6rem',     // 96px
}
```

Use consistently: `spacing[4]`, `spacing[6]`, `spacing[12]`

---

## 📝 Typography

### Font Sizes
```typescript
sizes: {
  xs: '0.75rem',    // 12px - Labels
  sm: '0.875rem',   // 14px - Small text
  base: '1rem',     // 16px - Body
  lg: '1.125rem',   // 18px - Emphasis
  2xl: '1.5rem',    // 24px - Subheading
  5xl: '3rem',      // 48px - Heading
  7xl: '4.5rem',    // 72px - Hero title
}
```

### Font Weights
```typescript
weights: {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}
```

---

## 🎬 Animation Presets

### Duration Tokens
```typescript
durations: {
  fast: '100ms',     // Quick feedback
  base: '200ms',     // Standard
  slow: '300ms',     // Noticeable
  slower: '500ms',   // Slow/dramatic
}
```

### Easing Functions
```typescript
easings: {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
```

### Motion Variants (Framer Motion)
```typescript
motion: {
  fadeIn: { ... },
  slideInUp: { ... },
  slideInLeft: { ... },
  scaleIn: { ... },
}
```

Example:
```jsx
<motion.div {...theme.animations.motion.slideInUp}>
  Content
</motion.div>
```

---

## 🎭 Z-Index Scale

```typescript
zIndex: {
  hide: '-1',
  base: '0',
  dropdown: '10',
  sticky: '20',
  fixed: '30',
  backdrop: '40',
  modal: '50',
  tooltip: '60',
  notification: '70',
  popover: '80',
  skipLink: '90',
}
```

Use: `zIndex.modal` instead of hardcoded `z-50`

---

## 🚀 Real-World Examples

### Creating a Themed Button Component

```typescript
import { colors, spacing, borderRadius, animations } from '../config/theme';

export function PrimaryButton({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: colors.green[600],
        color: 'white',
        padding: `${spacing[3]} ${spacing[6]}`,
        borderRadius: borderRadius['3xl'],
        border: 'none',
        fontWeight: 600,
        cursor: 'pointer',
        transition: `all ${animations.durations.base} ease-in-out`,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Creating a Card Component

```typescript
import { colors, spacing, borderRadius, shadows } from '../config/theme';

export function Card({ children }) {
  return (
    <div style={{
      backgroundColor: colors.earth[50],
      border: `1px solid ${colors.earth[200]}`,
      borderRadius: borderRadius['3xl'],
      padding: spacing[6],
      boxShadow: shadows.md,
    }}>
      {children}
    </div>
  );
}
```

### Creating a Responsive Layout

```typescript
import { theme } from '../config/theme';

export function ResponsiveGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
      gap: theme.spacing[6],
      padding: theme.spacing[6],
    }}>
      {/* Items */}
    </div>
  );
}
```

---

## 🔧 Customizing the Theme

To customize the theme globally:

1. **Edit `src/config/theme.ts`** - Update any color, spacing, or animation value
2. **CSS Variables Auto-Update** - All components using CSS variables will update automatically
3. **Component Recompile** - Components importing from `theme.ts` will get new values on save

### Example: Change Primary Green

```typescript
// src/config/theme.ts
green: {
  600: '#059669', // Changed from '#16a34a'
}
```

All usages of `colors.green[600]` or `--color-green-600` will update automatically!

---

## ✅ Best Practices

1. ✅ **Always use theme values** instead of hardcoded colors
2. ✅ **Use semantic naming**: `colors.status.success` instead of `colors.green[600]`
3. ✅ **Prefer Tailwind classes** for styling (uses theme under the hood)
4. ✅ **Keep consistent spacing** - Use spacing scale for padding/margin
5. ✅ **Use animation presets** from `theme.animations.motion`
6. ✅ **Reference z-index tokens** - Don't hardcode z-index values
7. ✅ **Update theme.ts, not individual components** when changing design

---

## 📚 File Structure

```
src/
├── config/
│   ├── theme.ts              ← Theme configuration (colors, spacing, etc.)
│   └── products.ts
├── lib/
│   ├── css-variables.ts      ← CSS variable injection
│   └── ...
├── main.tsx                   ← Injects CSS variables on startup
└── index.css                  ← Uses Tailwind + CSS variables
```

---

## 🎯 Quick Reference

| Purpose | File | How to Use |
|---------|------|-----------|
| React components | `src/config/theme.ts` | `import { colors } from '../config/theme'` |
| CSS/Tailwind | CSS variables | `var(--color-green-600)` or `var(--color-yellow-500)` |
| Tailwind utilities | Tailwind classes | `bg-agri-green-600` or `text-yellow-600` |
| Animations | `theme.animations` | `{...theme.animations.motion.fadeIn}` |
| Spacing consistently | `spacing` object | `spacing[4]`, `spacing[6]` |
| Yellow accents | `colors.yellow` | `colors.yellow[500]` for vibrant, `colors.yellow[100]` for light |

---

## 🌟 Yellow Color Palette (New)

The yellow color palette has been added for bright, warm accents throughout the app!

### Recommended Usage:
- **`yellow[500]`** - Vibrant warnings and CTAs
- **`yellow[600]`** - Warning states and bold accents
- **`yellow[100]`** - Light backgrounds and highlights
- **`yellow[900]`** - Dark text/borders for contrast

### Example:
```typescript
import { colors } from '../config/theme';

export function WarningBadge() {
  return (
    <span style={{
      backgroundColor: colors.yellow[100],
      color: colors.yellow[900],
      borderColor: colors.yellow[500],
      border: '1px solid'
    }}>
      ⚠️ Warning
    </span>
  );
}
```

## 💡 Need Help?

- Check `src/config/theme.ts` for all available tokens (including new yellow colors)
- Use TypeScript autocomplete: `colors.` → shows all options including `yellow`
- Reference existing components for usage patterns
- All CSS variables are in document.documentElement.style
- Yellow colors use same shade system (50-900) as green

Happy theming! 🎨✨
