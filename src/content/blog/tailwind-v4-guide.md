---
title: "Getting Started with Tailwind CSS v4"
description: "A quick guide to the new CSS-first configuration approach in Tailwind v4."
date: 2025-12-20
tags: ["tailwind", "css"]
---

Tailwind CSS v4 brings a major shift: CSS-first configuration. No more `tailwind.config.js`. Let's explore what's changed.

## The Big Changes

### 1. CSS-First Configuration

Instead of a JavaScript config file, you now configure Tailwind directly in CSS:

```css
@import "tailwindcss";

@theme {
  --color-primary: #e2777a;
  --color-background: #1a1a1a;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### 2. Vite Plugin

Tailwind v4 is now distributed as a Vite plugin:

```javascript
// vite.config.js or astro.config.mjs
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()]
}
```

### 3. No More PostCSS Config

The Vite plugin handles everything. No `postcss.config.js` needed.

## Setting Up in Astro

Here's the complete setup for an Astro project:

```bash
npm install tailwindcss @tailwindcss/vite
```

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

```css
/* src/styles/globals.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(9.8% 0 0);
  /* ... more custom properties */
}
```

## Benefits of v4

1. **Faster builds** - The Vite plugin is significantly faster
2. **Simpler setup** - Fewer config files
3. **CSS-native** - Feels more natural for styling
4. **Better IDE support** - CSS variables are recognized everywhere

## Migration Tips

If you're coming from v3:

1. Remove `tailwind.config.js`
2. Remove `postcss.config.js`
3. Install `@tailwindcss/vite`
4. Move your config to `@theme` in CSS
5. Update imports: `@import "tailwindcss"` instead of `@tailwind` directives

## Dark Mode

Dark mode works with CSS variables:

```css
@theme {
  --color-background: white;
}

.dark {
  --color-background: #1a1a1a;
}
```

Then add `class="dark"` to your `<html>` tag.

## Conclusion

Tailwind v4 is a welcome evolution. The CSS-first approach feels more natural and the build times are noticeably faster. If you haven't tried it yet, I highly recommend giving it a shot.

---

Questions about the migration? Drop me a line.
