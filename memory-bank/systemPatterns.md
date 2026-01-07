# System Patterns

## Configuration Architecture

### Single Config File
All settings in `src/config.ts`:
```typescript
export const siteConfig = {
  site: { title, description, author, email, url },
  theme: { defaultTheme: 'clean-white' },
  header: { coreNav, showThemeSwitcher },
  blog: { postsPerPage, showTableOfContents },
  projects: { projectsPerPage },
  features: { commandPalette, search, rss, sitemap, pageTransitions },
  demo: { enabled: import.meta.env.PUBLIC_ENABLE_DEMO === 'true' || false }
}
```

Users configure everything in one place. No hunting through multiple files.

### Navigation System
Pages auto-appear in nav by default. To hide a page from nav:
```typescript
hideFromNav: true  // in frontmatter
```

No `navOrder` needed - pages sort alphabetically. Clean and simple.

### Content Collections
Two collections:

**blog/** - Posts with .md
```yaml
title, description, date, tags[], draft
```

**pages/** - MDX pages with components
```yaml
title, description, hideFromNav
```

## Component Patterns

### Terminal Wrapper
Auto-imported globally in `astro.config.mjs`:
```javascript
components: { Terminal: './src/components/Terminal.astro' }
```

Users write:
```mdx
<Terminal title="~">
## This is markdown
Works seamlessly
</Terminal>
```

No manual imports needed.

### SEO Component
Automatic meta tags, no user config:
```astro
<SEO {title} {description} {article} />
```

Generates: OG tags, Twitter cards, canonical URLs, JSON-LD.

## Theme System

### 14 Color Palettes
Defined in `globals.css` using `@theme` directive and `data-theme` attributes:
- Light: clean-white, catppuccin-latte, rose-pine-dawn, nord-light, solarized-light, gruvbox-light, tokyo-night-light
- Dark: catppuccin-mocha, rose-pine, nord, dracula, solarized-dark, gruvbox-dark, tokyo-night

### Demo Mode (Dual Deployment)
**GitHub version** (users cloning repo):
```typescript
demo: { enabled: false }  // No env var, defaults to false
```

**Netlify version** (showcase site):
```toml
# netlify.toml
[context.production.environment]
  PUBLIC_ENABLE_DEMO = "true"
```
```typescript
demo: { enabled: true }  // Env var set, switcher shows
```

Single codebase, two outputs. GitHub users get production-ready theme, Netlify demo showcases all features.

### Theme Persistence
```javascript
localStorage.setItem('theme', themeName)
```
Saved client-side, loads on page refresh.

### Theme Switcher Visibility
Fixed with inline styles to ensure text visibility across all themes:
```html
<div style="color: var(--color-card-foreground);">
  <!-- Theme names always visible -->
</div>
```

Hover uses opacity change instead of background color change:
```html
<button class="hover:opacity-80" style="background: transparent;">
```

## Markdown Features

### Code Blocks
Syntax highlighting via Astro's Shiki integration. Terminal blocks:
```bash
npm install dotfiles-astro-theme
```

### Typography
Prose classes from `@tailwindcss/typography`:
```html
<div class="prose dark:prose-invert">
  <!-- User markdown -->
</div>
```

## Build Process

### Static Site Generation
Astro builds to `dist/`:
- 28 pages
- ~800ms build time
- RSS feed, sitemap auto-generated

### Deployment
**Netlify**:
- Auto-deploy on push via GitHub integration
- Build command: `npm run build`
- Environment: `PUBLIC_ENABLE_DEMO=true`

**GitHub**:
- Public repo
- Users clone and customize
- Environment: No env vars (demo disabled)

## File Structure
```
src/
  config.ts          ← Single source of truth
  components/        ← 18 reusable components
  content/
    blog/           ← Markdown posts
    pages/          ← MDX pages
  layouts/
    Layout.astro    ← Base layout
  pages/            ← Route pages
  styles/
    globals.css     ← 14 theme definitions
```

Everything is intentional. No magic, no hidden config.
