import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Gavin`s Tech Blog",
  description: "Hello, I’m Gavin, a full-stack engineer skilled in front-end development and smart contracts. This is my tech blog.",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'About Me', link: '/docs/about/index' }
    ],

    sidebar: [
      {
        text: "HTML and CSS",
        items: []
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      },
      {
        text: 'TavaScript',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      },
      {
        text: 'Next',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenyanxun/chenyanxun.github.io' }
    ]
  }
})
