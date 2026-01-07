// Dotfiles Theme Config
// Edit this file to make it yours

export const siteConfig = {
  // The basics
  title: "Dotfiles",
  description: "A minimal, terminal-inspired blog theme for developers",
  author: "Your Name",
  siteUrl: "https://yourdomain.com",

  // Header navigation
  header: {
    // Core nav items (pages from content/pages are added automatically after these)
    coreNav: [
      { text: "Blog", href: "/blog" },
      { text: "Projects", href: "/projects" },
    ],
    
    // Let visitors change the color theme?
    showThemeSwitcher: false,
  },

  // Homepage hero
  hero: {
    title: "Dotfiles",
    
    // These rotate with a typewriter effect
    typewriterLines: [
      "A minimal, terminal-inspired blog theme",
      "Built with Astro 5.x and Tailwind CSS v4"
    ],
    
    // Wrap words in **asterisks** to highlight them
    description: "A theme for **developers**, **writers**, and **creators**.",
    
    terminalTitle: "welcome",
    
    // primary: true = filled button
    ctaButtons: [
      { text: "[blog]", href: "/blog", primary: true },
      { text: "[projects]", href: "/projects", primary: false },
      { text: "[about]", href: "/about", primary: false }
    ],
  },

  // Color theme (see /themes for all options)
  theme: {
    // clean-white, catppuccin-mocha, catppuccin-latte, rose-pine, rose-pine-dawn,
    // nord, nord-light, dracula, solarized-dark, solarized-light,
    // gruvbox-dark, gruvbox-light, tokyo-night, tokyo-night-light
    defaultTheme: "clean-white",
  },

  // Your links (leave empty to hide)
  social: {
    github: "https://github.com/nabsiddiqui",
    twitter: "",
    linkedin: "",
    bluesky: "",
    mastodon: "",
    email: "",
    rss: "/rss.xml",
  },

  // Blog settings
  blog: {
    postsOnHomepage: 5,
    postsPerPage: 10,
    showReadingTime: true,
    showTableOfContents: true,
    showPostNavigation: true,
    showTags: true,
    showFeaturedPost: true,
    dateFormat: "MMMM d, yyyy",
  },

  // Your projects (shown on /projects)
  projects: {
    gridColumns: 3,
    showStatus: true,
    items: [
      {
        name: "my-awesome-project",
        description: "A brief description of what this project does and why it's cool.",
        tech: ["Astro", "Tailwind", "TypeScript"],
        status: "active",
        url: "https://example.com",
        github: "https://github.com/you/repo"
      },
      {
        name: "another-project",
        description: "Another great project you've worked on.",
        tech: ["React", "Node.js"],
        status: "shipped",
        github: "https://github.com/you/repo"
      },
    ],
  },

  // Footer
  footer: {
    statusMessage: "All systems operational",
    copyright: "© %YEAR% Your Name",
    showSocialLinks: true,
  },

  // SEO
  seo: {
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
    twitterHandle: "",
    googleSiteVerification: "",
  },

  // Toggle pages on/off
  pages: {
    blog: true,
    projects: true,
    search: true,
    archives: true,
    rss: true,
  },

  // Power user settings
  advanced: {
    commandPalette: true,
    showCopyCode: true,
    showLineNumbers: false,
    showBreadcrumbs: true,
    pageTransitions: true,
  },

  // Set to true to show theme switcher for demo purposes
  // Automatically enabled on Netlify via ENABLE_DEMO env var
  demo: {
    enabled: import.meta.env.ENABLE_DEMO === 'true' || false,
  },
};

export type SiteConfig = typeof siteConfig;
