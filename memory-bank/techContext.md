# Tech Context: Dotfiles Astro Theme

## Stack

| Technology | Version | Notes |
|------------|---------|-------|
| Astro | 5.1.1 | Static site generator |
| Tailwind CSS | 4.0.0 | Vite plugin, not PostCSS |
| TypeScript | 5.7.2 | Full type coverage |
| Node.js | 18+ | Required |

## Dependencies

### Core
- `astro` - Framework
- `@tailwindcss/vite` - Tailwind v4 Vite integration
- `@astrojs/sitemap` - Auto sitemap
- `@astrojs/mdx` - MDX support
- `@astrojs/rss` - RSS feed

### Dev
- `typescript` - Type checking
- `clsx` + `tailwind-merge` - Class utilities

## Key Commands

```bash
npm run dev      # Start dev server (port 4321)
npm run build    # Build to /dist
npm run preview  # Preview production build
```

## Astro 5 Notes

### Reserved Words
- `layout` is reserved in frontmatter - use `style` instead

### Content Collections
- Zod schemas in `src/content/config.ts`
- `getCollection()` and `getEntry()` from `astro:content`

## Tailwind v4 Setup

```javascript
// astro.config.mjs
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-background: #ffffff;
  --color-foreground: #1a1a1a;
}
```

## File Locations

| What | Where |
|------|-------|
| Config | `src/config.ts` |
| Blog posts | `src/content/blog/*.md` |
| Pages | `src/content/pages/*.md` or `*.mdx` |
| Components | `src/components/*.astro` |
| Themes (CSS) | `src/styles/globals.css` |
| Collection schemas | `src/content/config.ts` |

## Build Output

- Static HTML to `/dist`
- 28 pages currently
- ~850ms build time
- Font warnings are expected (optional local fonts)

## Deploy Targets

Works on any static host:
- Vercel: `npx vercel`
- Netlify: `npx netlify deploy --prod`
- Cloudflare Pages: Connect GitHub repo

## Known Warnings

```
/fonts/Geist-Variable.woff2 didn't resolve at build time
```
These are optional local fonts. Site works without them (falls back to system fonts).
