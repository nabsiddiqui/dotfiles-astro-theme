# System Patterns: Dotfiles Astro Theme

## Architecture
Static Astro theme with Tailwind v4, TypeScript, centralized config.

## Key Patterns

### 1. Centralized Config
Everything in `src/config.ts`:
```typescript
export const siteConfig = {
  title, description, author, siteUrl,
  header: { coreNav, showThemeSwitcher },
  hero: { title, typewriterLines, description, ctaButtons },
  theme: { defaultTheme },
  social: { github, twitter, ... },
  seo: { ogImage, twitterCard, twitterHandle },
  // ... more
};
```

### 2. Auto-Imported Components
Page renderer injects components for MDX:
```astro
// src/pages/[...slug].astro
const components = { Terminal };
<Content components={components} />
```

Users just write `<Terminal>` - no import needed.

### 3. Terminal Component
```astro
// src/components/Terminal.astro
<div class="terminal-window">
  <div class="terminal-titlebar">...</div>
  <div class="terminal-content prose prose-terminal">
    <slot />  <!-- Markdown works here -->
  </div>
</div>
```

### 4. SEO (Automatic)
`SEO.astro` generates all meta tags from props:
```astro
<SEO 
  title={title}
  description={description}
  image={ogImage}
  article={isPost}
/>
```

Outputs: meta tags, Open Graph, Twitter Cards, canonical URL, RSS link.

### 5. Page Schema (Minimal)
```yaml
---
title: "Page Title"
description: "Optional"
hideFromNav: true  # Optional, default false
---
```

No `style`, `layout`, or `navOrder` - just content.

### 6. Navigation
Header builds nav from:
1. Home (fixed)
2. `siteConfig.header.coreNav` (Blog, Projects)
3. Pages collection (filtered by `hideFromNav`, sorted alphabetically)
4. Search (fixed)

### 7. Theme System
CSS variables in `globals.css`:
```css
@theme { --color-background: #fff; }
[data-theme="nord"] { --color-background: #2e3440; }
```

Default theme from config, user choice in localStorage.

### 8. Demo Mode
`demo.enabled: true` shows theme switcher for demo sites.
Production users set it to `false`.

## File Structure
```
src/
├── config.ts              # All configuration
├── content/
│   ├── blog/              # Markdown posts
│   └── pages/             # MDX pages
├── components/
│   ├── Terminal.astro     # Terminal wrapper (auto-imported)
│   ├── SEO.astro          # Meta tags
│   └── ...                # 16 more components
├── pages/
│   └── [...slug].astro    # Page renderer
└── styles/globals.css     # Themes
```

## Component Patterns

### Props with Defaults
```astro
---
interface Props { title?: string; }
const { title = "terminal" } = Astro.props;
---
```

### Server-to-Client
```astro
<script is:inline data-theme={defaultTheme}>
  const theme = document.currentScript.getAttribute('data-theme');
</script>
```
