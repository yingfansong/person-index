import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WinFord",
  description: "自娱自乐",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Docker',
        items: [
          { text: 'Docker1', link: '/Docker/Docker' },
          { text: 'golang', link: '/golang/打开golang的大门' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yingfansong' }
    ]
  }
})
