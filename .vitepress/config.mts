import { defineConfig } from 'vitepress'

import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-MEASURMENT_ID' }],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MEASURMENT_ID');`
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '關於', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '關於', link: '/about' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Tutored by <a href="https://econ-sense.com/about.html" target="_blank">EN Chu</a>',
    }
  },
  // EN Chu建議的網站設定
  /**
   * Customization
   */
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  vite: {
    plugins: [
      SearchPlugin({
        encode: false,
        tokenize: "full",
        buttonLabel: "搜尋",
        placeholder: "搜尋關鍵字"
      }) as any
    ]
  },
  /** Experimental */
  sitemap: {
    hostname: 'https://econ-sense.com'
  },
})
