# How to Submit Dotfiles to Astro Themes

## Step 1: Deploy a Demo Site

You need a live demo URL. Pick one:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts, get URL like: dotfiles-demo.vercel.app
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
# Get URL like: dotfiles-demo.netlify.app
```

### Cloudflare Pages
1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect repo, deploy

## Step 2: Push to GitHub

```bash
# If not already a git repo
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/nabsiddiqui/dotfiles-astro-theme.git
git branch -M main
git push -u origin main
```

Make sure the repo is **public**.

## Step 3: Take a Screenshot

Requirements:
- **Size**: 1200×630px (or similar 1.91:1 ratio)
- **Format**: PNG or Webe
- **Content**: Homepage showing the theme in action

Tips:
- Use Chrome DevTools to set exact viewport size
- Show the theme switcher with a few themes visible
- Make sure text is readable

## Step 4: Submit via Developer Portal

1. Go to **[portal.astro.build](https://portal.astro.build)**
2. Sign in with GitHub
3. Click **"Submit Theme"**
4. Fill in the form:

| Field | Value |
|-------|-------|
| **Name** | Dotfiles |
| **Description** | A terminal-inspired Astro theme with 14 developer-favorite color palettes including Catppuccin, Nord, Dracula, Rosé Pine, and more. |
| **GitHub URL** | https://github.com/nabsiddiqui/dotfiles-astro-theme |
| **Demo URL** | (your deployed URL) |
| **Categories** | Blog, Portfolio, Minimal |
| **Tools** | Tailwind, TypeScript |
| **Tags** | terminal, monospace, catppuccin, nord, dracula, dark-mode, light-mode |

5. Upload your screenshot
6. Submit for review

## Step 5: Wait for Approval

Astro team reviews submissions. Usually takes a few days.

## Checklist Before Submitting

- [x] README with clear install instructions
- [x] MIT license
- [x] Working `npm run build` (no errors)
- [x] No hardcoded personal content (config-driven)
- [ ] Live demo URL
- [ ] Screenshot (1200×630px)
- [ ] Public GitHub repo
- [ ] Pushed latest code

## Post-Submission

Once approved, your theme appears at [astro.build/themes](https://astro.build/themes).

### Promote It

- Tweet about it, tag @astaboruild
- Post on Reddit r/astrojs
- Share on Discord (Astro server)
- Write a blog post about building it

### Keep It Updated

Use the Developer Portal to update:
- Screenshots
- Description
- Demo URL
- Version info

## Theme Info for Social Media

**One-liner:**
> Dotfiles - A terminal-inspired Astro theme with 14 color palettes including Catppuccin, Nord, and Dracula.

**Features list:**
- 14 built-in themes (light & dark)
- Terminal-style design
- Markdown/MDX pages
- Full TypeScript
- Tailwind v4
- RSS, search, SEO

**Hashtags:**
#astro #webdev #tailwindcss #opensource #theme
