# Product Context: Dotfiles Astro Theme

## Why This Exists
Developers want clean, professional themes with popular color palettes but don't want to build everything from scratch. This theme provides a polished starting point with subtle terminal-inspired elements.

## Problem It Solves
1. **Time-consuming styling** - Developers get a complete theme system without hours of CSS work
2. **Theme variety** - 14 popular developer color schemes built-in
3. **Reusability** - Plug-and-play components that work across pages
4. **Modern design** - Clean aesthetic that's professional yet distinctive
5. **Configuration complexity** - Single config file instead of scattered settings
6. **Page creation friction** - Just add markdown files, routes auto-generate

## Target Users
- Developers building personal portfolios
- Technical bloggers wanting a clean, distinctive aesthetic
- Open source project documentation sites
- Anyone wanting a professional developer-focused design

## User Experience Goals

### Simple Installation
Users can copy files and start immediately. No complex build processes.

### Single Config File
Everything configurable in one place: `src/config.ts`
- Site metadata
- Hero content
- Navigation (auto-includes pages from content)
- Social links
- Blog settings
- Projects list
- Theme defaults
- Feature toggles

### Content as Files
- **Blog posts**: Drop `.md` files in `src/content/blog/`
- **Pages**: Drop `.md` or `.mdx` files in `src/content/pages/`
- **Projects**: Define in config (simpler for small lists)

### Flexible Theming
- 14 built-in themes (light and dark variants)
- Clean White default for broad appeal
- Theme persists across sessions
- Demo mode enables theme switcher for showcasing

### Subtle Terminal Elements
- Command-line style section headers (`$ ls ~/posts`)
- Monospace headings throughout
- NOT overdone - professional and clean

### Developer-Friendly
- Clean, readable code
- TypeScript support
- Well-documented props and usage

## Key Features in Action

### TerminalHeader Component
Shows command-line style headers:
```
$ whoami
$ ls ~/posts
$ find ./posts -type f
```

### Theme System
14 themes including Catppuccin, Rosé Pine, Nord, Dracula, Solarized, Gruvbox, and Tokyo Night variants. Demo mode enables theme switcher.

### Pages Collection
Create any page by adding markdown:
```markdown
// src/content/pages/uses.md
---
title: "Uses"
description: "Tools I use"
style: "terminal"
showInNav: true
navOrder: 3
---

Your content...
```

### Typography
- JetBrains Mono for headings and code
- Inter for body text (readability)
- All headings monospace by default

## How It Should Work

1. **Copy theme files** to Astro project
2. **Edit `src/config.ts`** to customize everything
3. **Add content**:
   - Blog posts in `src/content/blog/`
   - Pages in `src/content/pages/`
4. **Build and deploy**

The experience is "download, configure, write" - minimal friction, maximum results.
