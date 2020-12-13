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
        link: '/meet-yuphub/'
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
        title: 'Meet Yuphub',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/meet-yuphub/',
        ]
      },
      {
        title: 'Getting Started',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/getting-started/',
          '/getting-started/create-account',
          '/getting-started/verify-account',
          '/getting-started/setup',
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
        title: 'Contacts',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // 2 is max shows h2 and h3
        children: [
          '/contacts/',
        ],
      },
      {
        title: 'Google My Business',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // 2 is max shows h2 and h3
        children: [
          '/google/',
        ],
      },
      {
        title: 'Automation',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // 2 is max shows h2 and h3
        children: [
          '/automation/',
          '/automation/zapier',
          '/automation/api',
        ],
      },
      {
        title: 'API',
        collapsable: false, // optional, defaults to true
        children: [
            '/api/',
        ],
      },
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
