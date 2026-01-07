---
title: "My Development Setup in 2025"
description: "A tour of my tools, editor config, and terminal setup for maximum productivity."
date: 2025-12-01
tags: ["tools", "productivity"]
---

Every year, I refine my development setup. Here's what I'm using in 2025.

## Hardware

- **MacBook Pro 14" M3 Pro** - Fast, quiet, all-day battery
- **LG 27" 4K Monitor** - Sharp text, good colors
- **Keychron K3** - Low profile mechanical keyboard
- **Logitech MX Master 3** - The GOAT of mice

## Terminal

### Shell: zsh with Oh My Zsh

Plugins I can't live without:
- `git` - Git aliases and completion
- `z` - Jump to frequent directories
- `autosuggestions` - Fish-like autosuggestions
- `syntax-highlighting` - Colorful commands

### Terminal Emulator: Warp

I switched from iTerm to Warp last year. The AI features and modern UI won me over.

### Prompt: Starship

Minimal, fast, informative. Shows git status, Node version, and nothing else.

```toml
[character]
success_symbol = "[❯](green)"
error_symbol = "[❯](red)"
```

## Editor: VS Code

### Theme: One Dark Pro

Tried many, keep coming back. The colors are easy on the eyes.

### Font: JetBrains Mono

With ligatures enabled. `->` becomes → and `!=` becomes ≠.

### Essential Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitLens** - Git superpowers
- **GitHub Copilot** - AI pair programming
- **Error Lens** - Inline error display
- **Auto Rename Tag** - HTML tag renaming

### Settings

```json
{
  "editor.fontSize": 14,
  "editor.lineHeight": 1.8,
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Browser: Arc

The sidebar tabs changed how I work. I have workspaces for:
- Development (localhost, docs)
- Research (articles, Stack Overflow)
- Personal (email, calendar)

## CLI Tools

- **fnm** - Fast Node manager (faster than nvm)
- **pnpm** - Package manager (faster than npm)
- **gh** - GitHub CLI
- **jq** - JSON processing
- **ripgrep** - Fast grep
- **bat** - cat with syntax highlighting
- **exa** - ls but pretty

## Git Config

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.lg "log --oneline --graph"
```

## Productivity Apps

- **Raycast** - Spotlight replacement with superpowers
- **1Password** - Password management
- **CleanShot X** - Screenshots and recordings
- **Notion** - Notes and documentation
- **Linear** - Project management

## Dotfiles

Everything is version controlled in a dotfiles repo. New machine setup takes about 30 minutes.

Key files:
- `.zshrc` - Shell config
- `.gitconfig` - Git settings
- `.config/starship.toml` - Prompt config
- VS Code settings (synced via GitHub)

## What's Changed Since Last Year

- Switched from Alacritty to Warp
- Adopted GitHub Copilot
- Moved from npm to pnpm
- Started using Arc browser

## Conclusion

The best setup is the one that gets out of your way. I spend more time refining my tools than I probably should, but the productivity gains are worth it.

---

What's in your dev setup? Always looking for new tools to try!
