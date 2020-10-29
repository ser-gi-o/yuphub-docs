const { description } = require('../../package')

module.exports = {
  base: '/docs/',
  dest: 'public/docs',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'yuphub Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#377dff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    logo: '/images/logo/favicon-192x192.png',
    nav: [
      {
        text: 'Documentation',
        link: '/'
      },
      {
        text: 'yuphub',
        link: 'https://yuphub.com',
        target:'_self',
        rel:false
      },
    ],
    sidebar: [
      {
        title: 'Getting Started',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/getting-started/',
          '/getting-started/using-yuphub',
        ]
      },
      {
        title: 'Reviews',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // 2 is max shows h2 and h3
        children: [
          '/review/',
        ],
      },
      {
        title: 'API',
        collapsable: false, // optional, defaults to true
        children: [
            '/api/',
        ],
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
