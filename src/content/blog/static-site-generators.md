---
title: "The Joy of Static Site Generators"
description: "Why I switched from complex frameworks to simple static sites for my personal projects."
date: 2025-12-15
tags: ["web", "astro", "performance"]
---

I used to overcomplicate everything. Every personal project needed React, a database, authentication, the works. Then I discovered the joy of static sites.

## The Complexity Trap

My old blog setup:

- Next.js with App Router
- PostgreSQL database
- Prisma ORM
- NextAuth for... a blog with no users
- Vercel with Edge Functions
- 47 npm dependencies

All for a site that could be 10 HTML files.

## The Static Revelation

Static Site Generators (SSGs) output plain HTML, CSS, and JavaScript. No server needed. No database. No authentication headaches.

Benefits:

- **Speed** - HTML is fast
- **Security** - No server to hack
- **Cost** - Free hosting on GitHub Pages, Netlify, Vercel
- **Simplicity** - Fewer things to break

## Why Astro?

I chose Astro for several reasons:

1. **Islands Architecture** - JavaScript only where needed
2. **Content Collections** - Built-in content management
3. **Markdown/MDX** - Write posts in Markdown
4. **Framework Agnostic** - Use React, Vue, Svelte, or none
5. **Performance** - Ships zero JS by default

## My New Stack

- **Astro** - Static site generation
- **Tailwind** - Styling
- **Markdown** - Content
- **GitHub** - Version control + hosting

Total npm dependencies: 5. Build time: 2 seconds.

## When to Go Static

Static sites are perfect for:

- Blogs and portfolios
- Documentation sites
- Marketing pages
- Project showcases
- Any content that doesn't need real-time updates

## When Not to Go Static

You might need something more dynamic for:

- Social networks
- Real-time collaboration tools
- E-commerce with inventory management
- Apps with user-generated content

## The Middle Ground

Modern static sites aren't purely static. You can:

- Use API routes for forms
- Integrate with headless CMS
- Add client-side interactivity where needed
- Use serverless functions for dynamic features

## Performance Wins

My old Next.js blog:
- First Contentful Paint: 1.8s
- Time to Interactive: 3.2s
- Lighthouse: 74

My new Astro blog:
- First Contentful Paint: 0.4s
- Time to Interactive: 0.5s
- Lighthouse: 100

## Conclusion

Don't let the "static" in Static Site Generator fool you. Modern SSGs are incredibly capable. For most personal projects, they're the right choice.

Keep it simple. Ship it fast.

---

What's your preferred static site generator? I'm curious to hear!
