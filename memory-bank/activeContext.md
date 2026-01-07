# Active Context

## Current Focus
Theme is **deployed and ready for submission**. Demo site live at Netlify, GitHub repo public.

## Deployment State

### What's Live
- **Demo Site**: [dotfiles-astro-theme.netlify.app](https://dotfiles-astro-theme.netlify.app)
  - Has `demo.enabled: true` (shows theme switcher)
  - All 14 themes visible on `/themes`
  
- **GitHub Repo**: [github.com/nabsiddiqui/dotfiles-astro-theme](https://github.com/nabsiddiqui/dotfiles-astro-theme)
  - Has `demo.enabled: false` (production default)
  - Users who clone get clean theme without switcher

### How It Works
The Netlify site was deployed with demo mode ON, but GitHub has it OFF. This means:
- Demo site shows all features for showcase
- Users cloning theme get production-ready version

## What's Left
1. Take screenshot (1200×630px of homepage)
2. Submit to portal.astro.build

## Recent Changes (Session 9)

### Deployment Setup
- Installed GitHub CLI (`gh`)
- Authenticated and created public repo
- Installed Netlify CLI
- Deployed to production with demo mode

### Demo Mode Strategy
- **Netlify build**: `demo.enabled: true` (for showcase)
- **GitHub default**: `demo.enabled: false` (for users)
- This lets us show features on demo without forcing them on users

### Terminal Component
- Auto-imported in all MDX pages (no import needed)
- Markdown works inside `<Terminal>` tags
- Users just write `<Terminal title="~">content</Terminal>`

## URLs
- GitHub: https://github.com/nabsiddiqui/dotfiles-astro-theme
- Live Demo: https://dotfiles-astro-theme.netlify.app
- Submit: https://portal.astro.build/themes/submit

## Build Status
- **GitHub**: ✅ Pushed (demo OFF)
- **Netlify**: ✅ Deployed (demo ON)
- **Build**: 28 pages, ~800ms

## Quick Config Reference
```typescript
demo: {
  enabled: false,  // GitHub default
}
```
Set to `true` for demo deployments only.
