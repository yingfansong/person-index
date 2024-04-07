import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WinFord",
  description: "自娱自乐",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Home1', link: '/qianduan' },
      { text: '其他平台',
        items:[
        { text: '稀土掘金', link: 'https://juejin.cn/user/1434196254931182' },
        { text: 'leetcode', link: 'https://leetcode.cn/u/jolly-7alandeszo/' }
      ]}
    ],

    sidebar: [
      {
        text: 'Docker',
        items: [
          { text: 'Getting', link: '/index' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yingfansong'
      }
    ]
  }
})
