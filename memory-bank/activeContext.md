# Active Context

## Current Focus
Theme deployed with **dual-mode system**: GitHub users get clean version, Netlify demo shows all features.

## Dual Deployment Strategy

### How It Works
Single codebase, two outputs:

```typescript
// src/config.ts
demo: {
  enabled: import.meta.env.PUBLIC_ENABLE_DEMO === 'true' || false,
}
```

**GitHub Clone** (no env var)
- `demo.enabled = false`
- No theme switcher by default
- Production-ready out of box

**Netlify Deploy** (env var set)
- `PUBLIC_ENABLE_DEMO=true` in netlify.toml
- `demo.enabled = true`
- Shows theme switcher for showcase

### Files Involved
- `netlify.toml` - Sets `PUBLIC_ENABLE_DEMO=true` for Netlify builds
- `src/config.ts` - Reads env var, defaults to false

## What's Live

### Demo Site (Netlify)
- URL: [dotfiles-astro-theme.netlify.app](https://dotfiles-astro-theme.netlify.app)
- Theme switcher: ✅ ON
- Shows all 14 color themes

### GitHub Repo
- URL: [github.com/nabsiddiqui/dotfiles-astro-theme](https://github.com/nabsiddiqui/dotfiles-astro-theme)
- Theme switcher: ❌ OFF (by default)
- Users get clean production theme

## Recent Fixes (Session 9)

### Theme Switcher Visibility
- **Issue**: Theme names not visible on some color themes
- **Solution**: Used inline style with CSS variable `color: var(--color-card-foreground)`
- **Hover Fix**: Changed from `hover:bg-secondary` to `hover:opacity-80`
- **Result**: Text always visible across all 14 themes

### Demo Mode Configuration  
- Netlify config with `PUBLIC_ENABLE_DEMO=true`
- Astro reads `import.meta.env.PUBLIC_ENABLE_DEMO`
- GitHub users get `false` by default

## What's Left
1. Take screenshot (1200×630px of homepage)
2. Submit to portal.astro.build

## URLs
- **GitHub**: https://github.com/nabsiddiqui/dotfiles-astro-theme
- **Live Demo**: https://dotfiles-astro-theme.netlify.app
- **Submit**: https://portal.astro.build/themes/submit

## Build Status
- **GitHub**: ✅ Updated (demo OFF)
- **Netlify**: ✅ Deployed (demo ON, theme names fixed)
- **Build**: 28 pages, ~800ms
