# Project Brief: Dotfiles Astro Theme

## Project Name
Dotfiles

## Goal
Create a reusable, terminal-inspired Astro theme with popular developer color palettes that can easily be integrated into Astro projects. The theme provides a clean, developer-friendly aesthetic while remaining modern and accessible.

## Core Requirements

### Visual Design
- Clean White theme as default (professional, universal appeal)
- 14 color themes including popular developer favorites:
  - Clean White (default)
  - Catppuccin (Mocha, Latte)
  - Rosé Pine (Default, Dawn)
  - Nord (Dark, Light)
  - Dracula
  - Solarized (Dark, Light)
  - Gruvbox (Dark, Light)
  - Tokyo Night (Dark, Light)
- Typography: JetBrains Mono for headings/code, Inter for body
- Subtle terminal-inspired section headers (not overdone)
- Project grid layout (3x3 responsive)
- Clean blog cards without terminal chrome

### Technical Requirements
- Built for Astro 5.x
- Tailwind CSS v4 integration
- TypeScript support
- Reusable components
- MIT licensed

### Components
1. **TerminalHeader** - Command-style headers (e.g., `$ ls ~/posts`)
2. **ThemeSwitcher** - 14-theme selector with persistence
3. **BlogCard** - Clean, simple post preview
4. **ProjectCard** - Compact grid-friendly cards
5. **Plus 12 more utility components**

### Configuration System
**Single config file approach** - Users customize everything via `src/config.ts`:
- Site info (title, description, author, URL)
- Header navigation (auto-includes pages from content collection)
- Hero section content with CTA buttons
- Theme settings (default theme)
- Social links
- Blog settings (posts per page, reading time, etc.)
- Projects list (defined in config)
- Footer settings (status message, copyright)
- SEO settings (OG image, Twitter card)
- Page feature toggles
- Advanced settings (command palette, copy code, etc.)
- Demo mode (for theme showcase site)

### Content System
- **Blog posts**: Markdown files in `src/content/blog/`
- **Pages**: Markdown/MDX files in `src/content/pages/` (auto-generates routes)
- **Projects**: Defined in `src/config.ts` → `projects.items`

### Distribution
- Standalone theme files that can be copied into any Astro project
- Clear installation instructions
- Eventually publishable to Astro themes directory
- GitHub repository with proper licensing

## Success Criteria
- Theme is visually consistent and professional
- Easy to install and configure in new/existing Astro projects
- Components are reusable and well-documented
- Performance: minimal CSS, optimized fonts
- Accessibility: proper color contrast, semantic HTML
- **Single config file for all customization**
- **Content-driven pages via markdown files**

## Timeline
Initial development complete. Preparing for public release.
