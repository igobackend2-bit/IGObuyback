# 🎨 IGO Buyback Theme System Guide

**A complete guide to using the centralized theme configuration system.**

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Color Palettes](#color-palettes)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Using in React](#using-in-react)
7. [Using in CSS](#using-in-css)
8. [Using in Tailwind](#using-in-tailwind)
9. [Animations](#animations)
10. [Real-World Examples](#real-world-examples)
11. [Best Practices](#best-practices)
12. [Troubleshooting](#troubleshooting)
13. [Advanced Usage](#advanced-usage)

---

## 🎯 Overview

The IGO Buyback theme system provides a centralized, type-safe design system that ensures consistency across your entire application.

### Key Features

✨ **Single Source of Truth** - All design tokens in one file
✨ **Type-Safe** - Full TypeScript support with autocomplete
✨ **CSS Variables** - Auto-injected for use in stylesheets
✨ **Scale-Based Design** - Consistent spacing, typography, shadows
✨ **Easy Customization** - Change colors globally in seconds
✨ **Framework Agnostic** - Works with React, CSS, Tailwind, and more

### File Locations

```
src/
├── config/
│   └── theme.ts                  ← Main theme configuration
├── lib/
│   └── css-variables.ts          ← CSS variable injection
├── components/
│   └── ThemedComponents.tsx      ← Pre-built themed components
├── main.tsx                       ← Initializes CSS variables
└── index.css                      ← Tailwind + CSS variables

Documentation/
└── THEME_GUIDE.md               ← This file
```

---

## 🚀 Quick Start

### 1. Import Theme in React

```typescript
import { colors, spacing, theme } from '../config/theme';

export function MyComponent() {
  return (
    <div style={{
      backgroundColor: colors.green[600],
      padding: spacing[6],
      borderRadius: theme.borderRadius.xl,
    }}>
      Content
    </div>
  );
}
```

### 2. Use CSS Variables in Stylesheets

```css
.my-component {
  color: var(--color-green-600);
  padding: var(--spacing-4);
  border-radius: var(--radius-xl);
}
```

### 3. Use Tailwind Classes

```jsx
<div className="bg-agri-green-600 p-6 rounded-3xl text-white">
  Styled with Tailwind
</div>
```

### 4. Use Pre-Built Themed Components

```typescript
import { ThemedCard, ThemedButtonPrimary } from '../components/ThemedComponents';

export function MyPage() {
  return (
    <ThemedCard>
      <h2>Welcome</h2>
      <ThemedButtonPrimary onClick={() => {}}>
        Click Me
      </ThemedButtonPrimary>
    </ThemedCard>
  );
}
```

---

## 🎨 Color Palettes

All colors follow a 50-900 scale, where 50 is lightest and 900 is darkest.

### Primary Green (Agricultural Brand)

```typescript
// src/config/theme.ts
green: {
  50: '#f0fdf4',    // Lightest - subtle backgrounds
  100: '#dcfce7',   // Light backgrounds
  200: '#bbf7d0',   // Light accents
  300: '#86efac',   // Medium-light
  400: '#4ade80',   // Medium
  500: '#22c55e',   // Medium-dark
  600: '#16a34a',   // ⭐ PRIMARY - main brand color
  700: '#15803d',   // Dark
  800: '#166534',   // Darker
  900: '#14532d',   // Darkest - text, borders
}
```

**Use Cases:**
- Primary buttons and CTAs
- Active states
- Brand identity
- Links and emphasis
- Success states

**Usage:**
```typescript
// React
import { colors } from '../config/theme';
<button style={{ backgroundColor: colors.green[600] }}>Primary Button</button>

// CSS
background-color: var(--color-green-600);

// Tailwind
<button className="bg-agri-green-600">Primary Button</button>
```

---

### Neutral Earth Tones

```typescript
earth: {
  50: '#fafaf9',    // Lightest - main background
  100: '#f5f5f4',   // Light backgrounds
  200: '#e7e5e4',   // Borders, dividers
  300: '#d6d3d1',   // Secondary borders
  400: '#a8a29e',   // Disabled text
  500: '#78716c',   // Secondary text
  600: '#57534e',   // Emphasis text
  700: '#44403c',   // Bold text
  800: '#292524',   // Very dark text
  900: '#1c1917',   // ⭐ DARKEST - primary text
}
```

**Use Cases:**
- Page backgrounds
- Text colors
- Borders and dividers
- Neutral states
- Secondary content

**Usage:**
```typescript
// React
<div style={{
  backgroundColor: colors.earth[50],      // Light background
  color: colors.earth[900],                // Dark text
  borderColor: colors.earth[200],          // Light border
}}>
  Content
</div>

// CSS
background: var(--color-earth-50);
color: var(--color-earth-900);
border-color: var(--color-earth-200);
```

---

### Yellow Accent Colors

```typescript
yellow: {
  50: '#fefce8',    // Lightest - subtle highlights
  100: '#fef3c7',   // Light backgrounds
  200: '#fde68a',   // Light accents
  300: '#fcd34d',   // Medium-light
  400: '#fbbf24',   // Medium
  500: '#f59e0b',   // ⭐ PRIMARY YELLOW - vibrant accent
  600: '#d97706',   // Dark - warnings
  700: '#b45309',   // Darker
  800: '#92400e',   // Deep
  900: '#78350f',   // Darkest - text, high contrast
}
```

**Use Cases:**
- Warning states
- Call-to-action accents
- Highlights and emphasis
- Badge backgrounds
- Alert decorations
- Success confirmations

**Usage:**
```typescript
// Vibrant warning badge
<div style={{
  backgroundColor: colors.yellow[100],
  color: colors.yellow[900],
  border: `1px solid ${colors.yellow[500]}`,
}}>
  ⚠️ Warning
</div>

// CSS
.warning { color: var(--color-yellow-600); }

// Tailwind
<div className="bg-yellow-100 text-yellow-900 border-yellow-500">
  Alert Message
</div>
```

---

### Semantic Status Colors

```typescript
status: {
  success: '#22c55e',   // ✓ Success states
  error: '#ef4444',     // ✗ Error states
  warning: '#f59e0b',   // ⚠ Warning states
  info: '#3b82f6',      // ℹ Information
}
```

**Recommended Usage:**
```typescript
import { colors } from '../config/theme';

// Success message
<div style={{ backgroundColor: colors.status.success }}>
  Success! Your changes have been saved.
</div>

// Error message
<div style={{ backgroundColor: colors.status.error }}>
  Error! Please try again.
</div>

// Warning message
<div style={{ backgroundColor: colors.status.warning }}>
  Warning! This action cannot be undone.
</div>

// Info message
<div style={{ backgroundColor: colors.status.info }}>
  Info: Remember to save your work.
</div>
```

---

### Social Brand Colors

```typescript
social: {
  whatsapp: '#25D366',
  facebook: '#1877F2',
  twitter: '#1DA1F2',
  linkedin: '#0A66C2',
}
```

**Usage:**
```typescript
<a style={{ color: colors.social.whatsapp }}>
  Chat on WhatsApp
</a>
```

---

### Amber (Legacy - Kept for Backward Compatibility)

```typescript
amber: {
  400: '#fbbf24',
  500: '#f59e0b',
}
```

> **Note:** Use `yellow` color palette instead. Amber is maintained for backward compatibility.

---

## 📝 Typography

### Font Sizes

```typescript
sizes: {
  xs: '0.75rem',     // 12px - Small labels, captions
  sm: '0.875rem',    // 14px - Small text, help text
  base: '1rem',      // 16px - Body text (default)
  lg: '1.125rem',    // 18px - Emphasis text
  xl: '1.25rem',     // 20px - Small headings
  '2xl': '1.5rem',   // 24px - Subheadings
  '3xl': '1.875rem', // 30px - Section titles
  '4xl': '2.25rem',  // 36px - Page titles
  '5xl': '3rem',     // 48px - Large titles
  '6xl': '3.75rem',  // 60px - Hero titles
  '7xl': '4.5rem',   // 72px - Extra large titles
}
```

**Usage Examples:**
```typescript
import { typography } from '../config/theme';

// Page title
<h1 style={{ fontSize: typography.sizes['6xl'] }}>Welcome</h1>

// Body text
<p style={{ fontSize: typography.sizes.base }}>
  This is standard body text.
</p>

// Small label
<label style={{ fontSize: typography.sizes.xs }}>
  Required Field
</label>

// CSS
.page-title { font-size: var(--font-size-6xl); }
.body-text { font-size: var(--font-size-base); }
.caption { font-size: var(--font-size-xs); }
```

---

### Font Weights

```typescript
weights: {
  light: 300,        // Thin text, de-emphasis
  normal: 400,       // Standard body text
  medium: 500,       // Slightly bold
  semibold: 600,     // Labels, buttons
  bold: 700,         // Strong emphasis
  black: 900,        // Headlines, high contrast
}
```

**Usage:**
```typescript
import { typography } from '../config/theme';

// Heading (bold)
<h2 style={{ fontWeight: typography.weights.black }}>
  Section Title
</h2>

// Button label (semibold)
<button style={{ fontWeight: typography.weights.semibold }}>
  Click Me
</button>

// Subtle text (light)
<p style={{ fontWeight: typography.weights.light }}>
  Secondary information
</p>

// CSS
.heading { font-weight: var(--font-weight-black); }
.button { font-weight: var(--font-weight-semibold); }
```

---

### Line Heights

```typescript
lineHeights: {
  tight: 1.2,        // Compact, headlines
  normal: 1.5,       // Default, body text
  relaxed: 1.625,    // Spacious, long-form content
  loose: 2,          // Very spacious, accessibility
}
```

**Usage:**
```typescript
import { typography } from '../config/theme';

// Heading with tight line height
<h2 style={{ lineHeight: typography.lineHeights.tight }}>
  Multi-line<br />Title Text
</h2>

// Body text with normal line height
<p style={{ lineHeight: typography.lineHeights.normal }}>
  This is readable body text with normal spacing.
</p>

// Article text with relaxed spacing
<article style={{ lineHeight: typography.lineHeights.relaxed }}>
  Long-form content is more readable with increased line height...
</article>

// CSS
.heading { line-height: var(--line-height-tight); }
.body { line-height: var(--line-height-normal); }
```

---

## 📏 Spacing System

The spacing scale uses a consistent 4px base unit, making it easy to create harmonious layouts.

```typescript
spacing: {
  0: '0',         // No spacing
  1: '0.25rem',   // 4px  - Minimal
  2: '0.5rem',    // 8px  - Small
  3: '0.75rem',   // 12px - Small-medium
  4: '1rem',      // 16px - ⭐ STANDARD
  5: '1.25rem',   // 20px - Medium
  6: '1.5rem',    // 24px - Medium-large
  8: '2rem',      // 32px - Large
  10: '2.5rem',   // 40px - Extra large
  12: '3rem',     // 48px - Very large
  16: '4rem',     // 64px - Huge
  20: '5rem',     // 80px - Extra huge
  24: '6rem',     // 96px - Massive
}
```

**Common Use Cases:**
```typescript
import { spacing } from '../config/theme';

// Padding
<div style={{ padding: spacing[4] }}>        {/* 16px */}
  <button style={{ padding: `${spacing[2]} ${spacing[4]}` }}>
    {/* 8px vertical, 16px horizontal */}
    Click
  </button>
</div>

// Margin & gaps
<div style={{ gap: spacing[6] }}>             {/* 24px gap */}
  <div style={{ marginBottom: spacing[8] }}> {/* 32px margin */}
    Content
  </div>
</div>

// CSS
.card { padding: var(--spacing-6); }
.grid { gap: var(--spacing-4); }
.section { margin-bottom: var(--spacing-12); }
```

**Quick Reference - Spacing Scale:**
| Token | px | Use Case |
|-------|----|----|
| `spacing[1]` | 4px | Tiny gaps, micro-interactions |
| `spacing[2]` | 8px | Small padding |
| `spacing[3]` | 12px | Small margins |
| `spacing[4]` | 16px | ⭐ **STANDARD** - most common |
| `spacing[6]` | 24px | Card padding, sections |
| `spacing[8]` | 32px | Large sections, containers |
| `spacing[12]` | 48px | Page sections, major spacing |

---

## 💻 Using in React

### Basic Component Styling

```typescript
import { colors, spacing, theme } from '../config/theme';

export function Card({ children }) {
  return (
    <div style={{
      backgroundColor: colors.earth[50],
      border: `1px solid ${colors.earth[200]}`,
      borderRadius: theme.borderRadius['3xl'],
      padding: spacing[6],
      boxShadow: theme.shadows.md,
    }}>
      {children}
    </div>
  );
}
```

### Using Helper Functions

```typescript
import { getColor, getSpacing, getFontSize } from '../config/theme';

export function Button({ children }) {
  return (
    <button style={{
      backgroundColor: getColor('green', 600),
      padding: `${getSpacing(3)} ${getSpacing(6)}`,
      fontSize: getFontSize('lg'),
      borderRadius: '9999px',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    }}>
      {children}
    </button>
  );
}
```

### Full Component Example

```typescript
import { colors, spacing, typography, theme } from '../config/theme';

export function Alert({ type = 'info', children }) {
  const typeConfig = {
    success: { bg: colors.status.success, text: 'white' },
    error: { bg: colors.status.error, text: 'white' },
    warning: { bg: colors.status.warning, text: 'white' },
    info: { bg: colors.status.info, text: 'white' },
  };

  const config = typeConfig[type];

  return (
    <div style={{
      backgroundColor: config.bg,
      color: config.text,
      padding: spacing[4],
      borderRadius: theme.borderRadius.lg,
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      boxShadow: theme.shadows.sm,
    }}>
      {children}
    </div>
  );
}

// Usage:
<Alert type="success">✓ Saved successfully!</Alert>
<Alert type="error">✗ Something went wrong</Alert>
<Alert type="warning">⚠ Please review before submitting</Alert>
```

---

## 🎨 Using in CSS

### CSS Variables (Auto-Injected)

All theme values are automatically available as CSS custom properties:

```css
/* Colors */
background-color: var(--color-green-600);
color: var(--color-earth-900);
border-color: var(--color-yellow-200);

/* Spacing */
padding: var(--spacing-6);
margin: var(--spacing-4);
gap: var(--spacing-3);

/* Typography */
font-size: var(--font-size-lg);
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-normal);

/* Border Radius */
border-radius: var(--radius-xl);

/* Shadows */
box-shadow: var(--shadow-lg);

/* Z-Index */
z-index: var(--z-modal);
```

### Complete CSS Component Example

```css
.card {
  background-color: var(--color-earth-50);
  border: 1px solid var(--color-earth-200);
  border-radius: var(--radius-3xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
}

.card-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-black);
  color: var(--color-earth-900);
  margin-bottom: var(--spacing-3);
}

.card-button {
  background-color: var(--color-green-600);
  color: white;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-full);
  border: none;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
}

.card-button:hover {
  background-color: var(--color-green-700);
}

.card-button:disabled {
  background-color: var(--color-green-200);
  cursor: not-allowed;
}

.warning-badge {
  background-color: var(--color-yellow-100);
  color: var(--color-yellow-900);
  border: 1px solid var(--color-yellow-500);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}
```

---

## 🌬️ Using in Tailwind

### Color Utilities

```jsx
// Background colors
<div className="bg-agri-green-600">Primary background</div>
<div className="bg-agri-earth-50">Light background</div>
<div className="bg-yellow-500">Warning background</div>

// Text colors
<div className="text-agri-green-600">Green text</div>
<div className="text-agri-earth-900">Dark text</div>
<p className="text-yellow-600">Warning text</p>

// Border colors
<div className="border border-agri-earth-200">Bordered box</div>
<div className="border-2 border-agri-green-600">Thick green border</div>
```

### Spacing Utilities

```jsx
// Padding
<div className="p-4">Standard padding</div>
<div className="px-6 py-3">Horizontal/vertical padding</div>

// Margin
<div className="mb-6">Margin bottom</div>
<div className="mx-auto">Center horizontally</div>

// Gap (for flex/grid)
<div className="flex gap-4">Flex with 16px gap</div>
<div className="grid gap-6">Grid with 24px gap</div>
```

### Complete Tailwind Component Example

```jsx
export function Alert({ type = 'info', children }) {
  const styles = {
    success: 'bg-green-100 text-green-900 border-green-500',
    error: 'bg-red-100 text-red-900 border-red-500',
    warning: 'bg-yellow-100 text-yellow-900 border-yellow-500',
    info: 'bg-blue-100 text-blue-900 border-blue-500',
  };

  return (
    <div className={`border rounded-lg p-4 ${styles[type]}`}>
      {children}
    </div>
  );
}

export function Card({ title, children }) {
  return (
    <div className="bg-agri-earth-50 border border-agri-earth-200 rounded-3xl p-6 shadow-md">
      {title && (
        <h2 className="text-2xl font-black text-agri-earth-900 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export function Button({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-agri-green-600 hover:bg-agri-green-700 text-white',
    secondary: 'bg-agri-earth-100 hover:bg-agri-earth-200 text-agri-earth-900 border border-agri-earth-200',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  };

  return (
    <button className={`px-6 py-3 rounded-full font-semibold transition-all ${variants[variant]}`}>
      {children}
    </button>
  );
}
```

---

## 🎬 Animations

### Duration Presets

```typescript
durations: {
  fast: '100ms',     // Quick feedback (loading spinners)
  base: '200ms',     // Standard transitions
  slow: '300ms',     // Noticeable animations
  slower: '500ms',   // Slow, dramatic animations
}
```

### Easing Functions

```typescript
easings: {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Recommended for UI
}
```

### Framer Motion Presets

```typescript
motion: {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, ... },
  slideInUp: { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, ... },
  slideInLeft: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, ... },
  scaleIn: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, ... },
}
```

### Animation Usage

```typescript
import { motion } from 'motion/react';
import { theme } from '../config/theme';

// Using presets
export function AnimatedCard() {
  return (
    <motion.div
      {...theme.animations.motion.slideInUp}
      transition={{
        duration: parseFloat(theme.animations.durations.base) / 1000,
        ease: theme.animations.easings.smooth
      }}
    >
      Content
    </motion.div>
  );
}

// Custom animation
export function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: parseFloat(theme.animations.durations.fast) / 1000,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      ⟳
    </motion.div>
  );
}
```

---

## 🌟 Real-World Examples

### Example 1: Complete Form Component

```typescript
import { colors, spacing, typography, theme } from '../config/theme';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: spacing[8],
    }}>
      <h1 style={{
        fontSize: typography.sizes['3xl'],
        fontWeight: typography.weights.black,
        color: colors.earth[900],
        marginBottom: spacing[6],
      }}>
        Welcome Back
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes('@')) {
          setError('Please enter a valid email');
        }
      }}>
        <div style={{ marginBottom: spacing[4] }}>
          <label style={{
            display: 'block',
            fontSize: typography.sizes.sm,
            fontWeight: typography.weights.semibold,
            marginBottom: spacing[2],
            color: colors.earth[700],
          }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            style={{
              width: '100%',
              padding: `${spacing[3]} ${spacing[4]}`,
              border: `1px solid ${error ? colors.status.error : colors.earth[200]}`,
              borderRadius: theme.borderRadius.lg,
              fontSize: typography.sizes.base,
              fontFamily: typography.fonts.sans,
              transition: `all ${theme.animations.durations.base} ${theme.animations.easings.smooth}`,
            }}
            placeholder="you@example.com"
          />
          {error && (
            <p style={{
              marginTop: spacing[2],
              fontSize: typography.sizes.sm,
              color: colors.status.error,
            }}>
              {error}
            </p>
          )}
        </div>

        <button style={{
          width: '100%',
          padding: spacing[3],
          backgroundColor: colors.green[600],
          color: 'white',
          fontSize: typography.sizes.base,
          fontWeight: typography.weights.semibold,
          borderRadius: theme.borderRadius.lg,
          border: 'none',
          cursor: 'pointer',
          transition: `all ${theme.animations.durations.base}`,
        }}>
          Sign In
        </button>
      </form>
    </div>
  );
}
```

### Example 2: Product Card

```typescript
import { colors, spacing, theme } from '../config/theme';
import { motion } from 'motion/react';

export function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{
        duration: parseFloat(theme.animations.durations.fast) / 1000,
      }}
      style={{
        backgroundColor: colors.earth[50],
        border: `1px solid ${colors.earth[200]}`,
        borderRadius: theme.borderRadius['3xl'],
        padding: spacing[6],
        boxShadow: theme.shadows.sm,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: colors.earth[100],
        borderRadius: theme.borderRadius.xl,
        marginBottom: spacing[4],
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      <h3 style={{
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
        color: colors.earth[900],
        marginBottom: spacing[2],
      }}>
        {product.name}
      </h3>

      <p style={{
        fontSize: typography.sizes.sm,
        color: colors.earth[600],
        marginBottom: spacing[4],
      }}>
        {product.description}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.black,
          color: colors.green[600],
        }}>
          ₹{product.price}
        </span>
        <button style={{
          backgroundColor: colors.green[600],
          color: 'white',
          padding: `${spacing[2]} ${spacing[4]}`,
          borderRadius: theme.borderRadius.lg,
          border: 'none',
          cursor: 'pointer',
          fontWeight: typography.weights.semibold,
        }}>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
```

### Example 3: Dashboard Layout

```typescript
import { colors, spacing, theme } from '../config/theme';

export function Dashboard() {
  return (
    <div style={{
      backgroundColor: colors.earth[50],
      minHeight: '100vh',
      padding: spacing[8],
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: spacing[12] }}>
          <h1 style={{
            fontSize: typography.sizes['5xl'],
            fontWeight: typography.weights.black,
            color: colors.earth[900],
            marginBottom: spacing[2],
          }}>
            Dashboard
          </h1>
          <p style={{
            fontSize: typography.sizes.lg,
            color: colors.earth[600],
          }}>
            Welcome back! Here's your overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing[6],
          marginBottom: spacing[12],
        }}>
          {[
            { label: 'Total Sales', value: '₹45,000' },
            { label: 'Active Farmers', value: '1,250' },
            { label: 'Pending Orders', value: '23' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: 'white',
                padding: spacing[6],
                borderRadius: theme.borderRadius['3xl'],
                border: `1px solid ${colors.earth[200]}`,
                boxShadow: theme.shadows.sm,
              }}
            >
              <p style={{ color: colors.earth[600], marginBottom: spacing[2] }}>
                {stat.label}
              </p>
              <p style={{
                fontSize: typography.sizes['3xl'],
                fontWeight: typography.weights.black,
                color: colors.green[600],
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## ✅ Best Practices

### 1. **Always Use Theme Values**

```typescript
// ✅ GOOD
<div style={{ backgroundColor: colors.green[600] }}>

// ❌ AVOID
<div style={{ backgroundColor: '#16a34a' }}>
```

### 2. **Use Semantic Naming**

```typescript
// ✅ GOOD - Clear intent
<div style={{ backgroundColor: colors.status.success }}>

// ❌ AVOID - Unclear
<div style={{ backgroundColor: colors.green[600] }}>
```

### 3. **Leverage Spacing Scale**

```typescript
// ✅ GOOD - Consistent spacing
<div style={{
  padding: spacing[6],
  gap: spacing[4],
  marginBottom: spacing[8],
}}>

// ❌ AVOID - Arbitrary values
<div style={{
  padding: '25px',
  gap: '15px',
  marginBottom: '33px',
}}>
```

### 4. **Use Tailwind When Possible**

```typescript
// ✅ GOOD - Uses Tailwind
<div className="bg-agri-green-600 p-6 rounded-3xl">

// ⚠️ ACCEPTABLE - React inline styles
<div style={{ backgroundColor: colors.green[600], padding: spacing[6] }}>

// ❌ AVOID - Hardcoded values
<div style={{ backgroundColor: '#16a34a', padding: '24px' }}>
```

### 5. **Create Reusable Components**

```typescript
// ✅ GOOD
export function PrimaryButton({ children }) {
  return (
    <button style={{
      backgroundColor: colors.green[600],
      padding: `${spacing[3]} ${spacing[6]}`,
      borderRadius: theme.borderRadius.full,
    }}>
      {children}
    </button>
  );
}

// ❌ AVOID - Repeating styles everywhere
export function FormComponent() {
  return (
    <>
      <button style={{
        backgroundColor: colors.green[600],
        padding: `${spacing[3]} ${spacing[6]}`,
        borderRadius: theme.borderRadius.full,
      }}>
        Submit
      </button>
      <button style={{
        backgroundColor: colors.green[600],
        padding: `${spacing[3]} ${spacing[6]}`,
        borderRadius: theme.borderRadius.full,
      }}>
        Save
      </button>
    </>
  );
}
```

### 6. **Update Theme, Not Components**

```typescript
// ✅ GOOD - Change once, affects everywhere
// Edit: src/config/theme.ts
green: {
  600: '#059669', // Changed
}

// ❌ AVOID - Change every component
// Edit multiple .tsx files
<button style={{ backgroundColor: '#059669' }}>
```

---

## 🔧 Troubleshooting

### Issue: CSS Variables Not Working

**Problem:** `var(--color-green-600)` showing as undefined

**Solution:** Make sure CSS variables are injected:
```typescript
// src/main.tsx should have:
import { injectCSSVariables } from './lib/css-variables';
injectCSSVariables();
```

### Issue: TypeScript Autocomplete Not Working

**Problem:** Not seeing color suggestions in IDE

**Solution:** Make sure you're importing from the right path:
```typescript
// ✅ CORRECT
import { colors } from '../config/theme';

// ❌ WRONG
import { colors } from '../config/color';
```

### Issue: Tailwind Classes Not Applying

**Problem:** `bg-agri-green-600` not styling

**Solution:** Ensure Tailwind config includes theme:
```typescript
// tailwind.config.ts should use theme.ts
module.exports = {
  theme: {
    colors: {
      'agri-green': theme.colors.green,
      'agri-earth': theme.colors.earth,
      'yellow': theme.colors.yellow,
    },
  },
};
```

### Issue: Colors Look Different

**Problem:** Theme colors don't match design

**Solution:** Edit the color values in `src/config/theme.ts`:
```typescript
green: {
  600: '#059669', // Change the hex value
}
```

---

## 🚀 Advanced Usage

### Creating Theme Variants

```typescript
// Create light/dark theme variants
export const lightTheme = {
  background: colors.earth[50],
  foreground: colors.earth[900],
  primary: colors.green[600],
  secondary: colors.earth[200],
};

export const darkTheme = {
  background: colors.earth[900],
  foreground: colors.earth[50],
  primary: colors.green[400],
  secondary: colors.earth[700],
};
```

### Creating Component Tokens

```typescript
// Pre-define component sizes
export const componentTokens = {
  button: {
    small: { padding: spacing[2], fontSize: typography.sizes.sm },
    medium: { padding: spacing[3], fontSize: typography.sizes.base },
    large: { padding: spacing[4], fontSize: typography.sizes.lg },
  },
  card: {
    padding: spacing[6],
    borderRadius: theme.borderRadius['3xl'],
    shadow: theme.shadows.md,
  },
};
```

### Extending Theme

```typescript
// Add custom tokens to theme
import { theme } from '../config/theme';

export const extendedTheme = {
  ...theme,
  custom: {
    mobileMenuHeight: '60px',
    sidebarWidth: '280px',
    maxContentWidth: '1200px',
  },
};
```

---

## 📚 Reference Files

| File | Purpose | Import Path |
|------|---------|-------------|
| `src/config/theme.ts` | Main theme config | `import { theme } from '../config/theme'` |
| `src/lib/css-variables.ts` | CSS injection | `import { injectCSSVariables } from '../lib/css-variables'` |
| `src/components/ThemedComponents.tsx` | Pre-built components | `import { ThemedCard } from '../components/ThemedComponents'` |
| `src/main.tsx` | App initialization | Calls `injectCSSVariables()` |
| `src/index.css` | Tailwind + CSS vars | Uses `var(--color-*)` syntax |

---

## 🎯 Quick Reference - Color Shades

```
50:   Lightest   (backgrounds, very subtle)
100:  Light      (light backgrounds)
200:  Light-mid  (borders, light accents)
300:  Mid-light  (secondary backgrounds)
400:  Mid        (medium elements)
500:  Mid-dark   (emphasis, some text)
600:  ⭐PRIMARY (main brand color)
700:  Dark       (darker text, hover)
800:  Darker     (strong emphasis)
900:  Darkest    (headlines, high contrast text)
```

---

## 🎨 Color Usage Chart

```
Green     → Primary buttons, links, success, brand
Yellow    → Warnings, alerts, emphasis
Earth     → Text, backgrounds, neutral
Status    → Semantic (success/error/warning/info)
Social    → Brand colors (WhatsApp, etc.)
```

---

## 💡 Pro Tips

1. **Use `spacing[4]` as your default** - It's 16px, the standard
2. **Yellow is for warnings** - Not for main branding
3. **Layering colors:** Start with earth[50] background, add borders with earth[200]
4. **Typography hierarchy:** Use sizes.base for body, then 2xl/3xl for headings
5. **Mobile first:** Build with spacing[4], add spacing[6-12] for larger screens
6. **Test contrast:** Dark text on light bg, light text on dark bg
7. **Animation combo:** Use durations.base + easings.smooth for smooth UI

---

## ✨ Summary

- 🎨 **11 color palettes** with 50-900 shade scale
- 📝 **11 typography sizes** from 12px to 72px
- 📏 **13 spacing tokens** from 0 to 96px
- 🎬 **4 animation durations** + easings
- 🌀 **6 shadow levels** for depth
- 🔢 **10+ Z-index tokens** for layering
- 🛠️ **Helper functions** for easy access
- 📚 **CSS variables** auto-injected
- 🎭 **Tailwind integration** built-in
- ✅ **Type-safe** with TypeScript

---

## 📞 Need Help?

Check these resources:
- 📁 File: `src/config/theme.ts` - Source of truth
- 🔧 File: `src/lib/css-variables.ts` - CSS injection
- 💻 File: `src/components/ThemedComponents.tsx` - Examples
- 📖 File: `THEME_GUIDE.md` - This guide!

**Happy theming!** 🎨✨
