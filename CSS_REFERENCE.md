# CSS Conversion Reference

## Tailwind → CSS Module Conversions

### Layout & Flexbox

| Tailwind | CSS Module |
|----------|------------|
| `flex` | `display: flex;` |
| `flex-col` | `flex-direction: column;` |
| `flex-row` | `flex-direction: row;` |
| `items-center` | `align-items: center;` |
| `items-start` | `align-items: flex-start;` |
| `justify-center` | `justify-content: center;` |
| `justify-between` | `justify-content: space-between;` |
| `gap-4` | `gap: 1rem;` |
| `gap-2` | `gap: 0.5rem;` |

### Spacing

| Tailwind | CSS Module |
|----------|------------|
| `p-4` | `padding: 1rem;` |
| `px-4` | `padding-left: 1rem; padding-right: 1rem;` |
| `py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem;` |
| `m-4` | `margin: 1rem;` |
| `mx-auto` | `margin-left: auto; margin-right: auto;` |
| `mb-4` | `margin-bottom: 1rem;` |
| `mt-8` | `margin-top: 2rem;` |

### Sizing

| Tailwind | CSS Module |
|----------|------------|
| `w-full` | `width: 100%;` |
| `h-48` | `height: 12rem;` |
| `min-h-screen` | `min-height: 100vh;` |
| `max-w-7xl` | `max-width: 80rem;` |
| `max-w-4xl` | `max-width: 64rem;` |
| `max-w-2xl` | `max-width: 42rem;` |

### Typography

| Tailwind | CSS Module |
|----------|------------|
| `text-lg` | `font-size: 1.125rem;` |
| `text-xl` | `font-size: 1.25rem;` |
| `text-4xl` | `font-size: 2.5rem;` |
| `text-5xl` | `font-size: 3rem;` |
| `font-bold` | `font-weight: bold;` |
| `font-semibold` | `font-weight: 600;` |
| `text-center` | `text-align: center;` |
| `leading-relaxed` | `line-height: 1.75;` |

### Colors

| Tailwind | CSS Module |
|----------|------------|
| `text-primary` | `color: var(--primary);` |
| `text-accent` | `color: var(--accent);` |
| `bg-card` | `background-color: var(--card);` |
| `bg-background` | `background-color: var(--background);` |
| `border-border` | `border-color: var(--border);` |
| `text-foreground/70` | `color: rgba(255, 255, 255, 0.7);` |

### Borders & Radius

| Tailwind | CSS Module |
|----------|------------|
| `border` | `border: 1px solid;` |
| `border-2` | `border: 2px solid;` |
| `border-b` | `border-bottom: 1px solid;` |
| `border-t` | `border-top: 1px solid;` |
| `rounded-lg` | `border-radius: 0.5rem;` |
| `rounded` | `border-radius: 0.25rem;` |
| `overflow-hidden` | `overflow: hidden;` |

### Position

| Tailwind | CSS Module |
|----------|------------|
| `sticky` | `position: sticky;` |
| `top-0` | `top: 0;` |
| `absolute` | `position: absolute;` |
| `relative` | `position: relative;` |
| `z-50` | `z-index: 50;` |

### Display

| Tailwind | CSS Module |
|----------|------------|
| `hidden` | `display: none;` |
| `block` | `display: block;` |
| `inline-block` | `display: inline-block;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |

### Grid

| Tailwind | CSS Module |
|----------|------------|
| `grid-cols-1` | `grid-template-columns: 1fr;` |
| `grid-cols-2` | `grid-template-columns: repeat(2, 1fr);` |
| `grid-cols-3` | `grid-template-columns: repeat(3, 1fr);` |
| `grid-cols-4` | `grid-template-columns: repeat(4, 1fr);` |

### Effects

| Tailwind | CSS Module |
|----------|------------|
| `backdrop-blur-md` | `backdrop-filter: blur(12px);` |
| `shadow-lg` | `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);` |
| `opacity-0` | `opacity: 0;` |
| `opacity-100` | `opacity: 1;` |

### Transitions

| Tailwind | CSS Module |
|----------|------------|
| `transition-colors` | `transition: color 0.3s ease;` |
| `transition-all` | `transition: all 0.3s ease;` |
| `duration-300` | `transition-duration: 300ms;` |
| `hover:text-primary` | `.class:hover { color: var(--primary); }` |

### Responsive Design

| Tailwind | CSS Module |
|----------|------------|
| `md:flex` | `@media (min-width: 768px) { display: flex; }` |
| `md:hidden` | `@media (min-width: 768px) { display: none; }` |
| `md:text-5xl` | `@media (min-width: 768px) { font-size: 3rem; }` |
| `lg:px-8` | `@media (min-width: 1024px) { padding: 2rem; }` |

## CSS Variables Used

```css
:root {
  /* Colors */
  --background: oklch(0.08 0 0);      /* Dark background */
  --foreground: oklch(0.95 0 0);      /* Light text */
  --card: oklch(0.12 0 0);            /* Card background */
  --primary: oklch(0.7 0.25 200);     /* Neon cyan */
  --accent: oklch(0.65 0.3 320);      /* Neon magenta */
  --muted: oklch(0.25 0 0);           /* Muted background */
  --border: oklch(0.2 0 0);           /* Border color */
  
  /* Sizing */
  --radius: 0.5rem;                   /* Border radius */
}
```

## Custom Utility Classes

### Neon Glow Effect
```css
.neon-glow {
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
}
```

### Animations
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

## Breakpoints

```css
/* Mobile First Approach */

/* Small devices (landscape phones, 640px and up) */
@media (min-width: 640px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) { }

/* Extra large devices (large desktops, 1280px and up) */
@media (min-width: 1280px) { }
```

## Example Component Conversion

### Before (Tailwind):
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-16">
    <h1 className="text-2xl font-bold text-primary">Title</h1>
    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all">
      Click Me
    </button>
  </div>
</div>
```

### After (CSS Module):
```tsx
import styles from './Component.module.css'

<div className={styles.container}>
  <div className={styles.header}>
    <h1 className={styles.title}>Title</h1>
    <button className={styles.button}>Click Me</button>
  </div>
</div>
```

```css
/* Component.module.css */
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}

.button {
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.button:hover {
  box-shadow: 0 10px 25px rgba(0, 200, 255, 0.5);
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}
```

## Tips for Writing CSS Modules

1. **Use semantic names**: Instead of `.flex-center`, use `.header` or `.container`
2. **Keep it scoped**: Each component's styles stay in its module
3. **Use CSS variables**: For colors, spacing, and repeated values
4. **Mobile-first**: Write base styles for mobile, then add media queries
5. **Group related properties**: Layout → spacing → typography → colors
6. **Use meaningful class names**: `.navigation` > `.nav` > `.n`

## Common Patterns

### Centering Content
```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Full Width Container
```css
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### Card Component
```css
.card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}
```

### Button
```css
.button {
  padding: 0.75rem 2rem;
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 10px 25px rgba(0, 200, 255, 0.5);
}
```

---

This reference should help you understand how all Tailwind classes were converted to vanilla CSS!
