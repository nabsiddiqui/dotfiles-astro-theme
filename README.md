# Dotfiles

A terminal-inspired blog theme for Astro with 14 developer-favorite color palettes.

![Dotfiles Theme](https://placehold.co/1200x600/1e1e2e/cdd6f4?text=Dotfiles+Theme)

## Features

- **14 themes** - Catppuccin, Nord, Dracula, Rosé Pine, Gruvbox, Solarized, Tokyo Night
- **Clean default** - Light theme for readability, dark themes for vibes
- **Terminal aesthetic** - Command-style headers, monospace touches
- **Content-driven** - Write pages in markdown or MDX
- **RSS, search, SEO** - All built in
- **TypeScript** - Full type safety
- **Tailwind v4** - Latest utility-first CSS

## Quick Start

```bash
# Clone the theme
git clone https://github.com/nabsiddiqui/dotfiles-astro-theme.git my-blog
cd my-blog

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [localhost:4321](http://localhost:4321) to see your site.

## Configuration

Everything lives in `src/config.ts`:

```typescript
export const siteConfig = {
  title: "Your Name",
  description: "What you're about",
  author: "Your Name",
  siteUrl: "https://yoursite.com",
  
  hero: {
    title: "Your Name",
    typewriterLines: ["What you do", "Where you work"],
    description: "I build **things** and write about **stuff**.",
    ctaButtons: [
      { text: "Read Blog", href: "/blog", isPrimary: true },
      { text: "About Me", href: "/about", isPrimary: false }
    ]
  },
  
  social: {
    github: "https://github.com/you",
    twitter: "https://twitter.com/you"
  },
  
  theme: {
    defaultTheme: "clean-white"  // or any of the 14 themes
  }
};
```

## Available Themes

| Theme | Style |
|-------|-------|
| `clean-white` | Light (default) |
| `catppuccin-mocha` | Dark |
| `catppuccin-latte` | Light |
| `rose-pine` | Dark |
| `rose-pine-dawn` | Light |
| `nord` | Dark |
| `nord-light` | Light |
| `dracula` | Dark |
| `solarized-dark` | Dark |
| `solarized-light` | Light |
| `gruvbox-dark` | Dark |
| `gruvbox-light` | Light |
| `tokyo-night` | Dark |
| `tokyo-night-light` | Light |

## Writing Content

### Blog Posts

Add markdown files to `src/content/blog/`:

```markdown
---
title: "My First Post"
description: "What this post is about"
date: "2025-01-15"
tags: ["web", "astro"]
---

Your content here.
```

### Pages

Add pages to `src/content/pages/` (markdown or MDX):

```markdown
---
title: "About"
description: "About me"
---

Regular markdown content here.
```

Pages show in navigation automatically. To hide one, add `hideFromNav: true`.

### Terminal Chrome

Use `<Terminal>` in MDX files to wrap content in a terminal window. No import needed:

```mdx
---
title: "About"
---

Some intro text here.

<Terminal title="~/.profile">
  **Name** Your Name  
  **Role** Developer
  
  - Skill one
  - Skill two
</Terminal>

More content outside the terminal.
```

Markdown works inside `<Terminal>` - just write normally.

### Projects

Define projects in `src/config.ts`:

```typescript
projects: {
  items: [
    {
      title: "My Project",
      description: "What it does",
      link: "https://github.com/you/project",
      tags: ["TypeScript", "React"]
    }
  ]
}
```

## Project Structure

```
src/
├── config.ts          # Site configuration
├── content/
│   ├── blog/          # Blog posts (markdown)
│   └── pages/         # Site pages (markdown/MDX)
├── components/        # Reusable UI components
├── pages/             # Route files
└── styles/
    └── globals.css    # Theme colors & styles
```

## Deploy

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --prod
```

### Cloudflare Pages
Connect your GitHub repo in Cloudflare dashboard.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Requirements

- Node.js 18+
- npm 9+

## License

MIT - Created by [Nabeel Siddiqui](https://nabeelsiddiqui.net)

---

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
