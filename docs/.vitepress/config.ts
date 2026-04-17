import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vibe-coding-intro-20250417/',
  title: 'バイブコーディング入門講座',
  description: 'AIエージェントを活用した新しい開発スタイル「バイブコーディング」の勉強会資料',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: '当日の手順', link: '/guide' },
      { text: '開発ガイド', link: '/VitePress-dev' }
    ],
    sidebar: [
      {
        items: [
          { text: '当日の手順', link: '/guide' },
          { text: '開発ガイド', link: '/VitePress-dev' }
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message: '4月17日（金）19:00〜 | 池袋研修室（オンライン参加可）',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],
})
