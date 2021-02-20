module.exports = {
  title: 'xdorro\'s blog',
  base: '/',
  description: 'Blog cá nhân của xdorro',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  head: [
    // <meta name="google-site-verification" content="GlKV5sSgZMfOOPLgfvVA4_r8Wsdsgy6pHp-OzrkCLPQ" />
    ['meta', {name: 'google-site-verification', content: 'GlKV5sSgZMfOOPLgfvVA4_r8Wsdsgy6pHp-OzrkCLPQ'}],
  ],
  themeConfig: {
    authors: [
      {
        name: 'xdorro',
        avatar: '/assets/img/xdorro.jpg',
        link: 'https://github.com/xdorro',
        linktext: 'Theo dõi',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/xdorro',
        },
        {
          type: 'github',
          link: 'https://github.com/xdorro',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
      ],
      copyright: [
        {
          text: 'Nguyen Manh Tuan Anh',
          link: 'https://github.com/xdorro',
        },
      ],
    },
    sitemap: {
      hostname: 'https://xdorro.github.io/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    feed: {
      canonical_base: 'https://xdorro.github.io/',
    },
    smoothScroll: true
  },
}
