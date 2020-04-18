const moment = require('moment-timezone');
const path = require('path');

module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      description: '一款 Material Design 风格的 Hexo 博客主题',
    },
    '/en/': {
      lang: 'en-US',
      description: 'An elegant Material-Design theme for Hexo',
    },
  },
  title: 'Fluid',
  base: '/hexo-fluid-docs/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '帮助我们完善文档',
        // 最后更新的描述
        lastUpdated: '文档更新于',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        nav: [
          { text: '配置指南', link: '/guide/' },
          { text: '插件推荐', link: '/plugin/' },
          { text: '操作示例', link: '/example/' },
          { text: '贡献开发', link: '/contribute/' },
          { text: '关于图标', link: '/icon/' },
          { text: 'GitHub', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Plugin', link: '/en/plugin/' },
          { text: 'Example', link: '/en/example/' },
          { text: 'Contribute', link: '/en/contribute/' },
          { text: 'Icon', link: '/en/icon/' },
          { text: 'GitHub', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
        ],
      },
    },
    sidebar: 'auto',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'fluid-dev/hexo-fluid-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        if (lang === 'zh-CN') {
          return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('lll')
        } else {
          return moment(timestamp).utc().locale(lang).format('lll')
        }
      },
    },
    'sitemap': {
      hostname: 'https://fluid-dev.github.io/',
      dateFormatter: time => new moment(time, 'lll').toISOString(),
    },
  },
  enhanceAppFiles: path.resolve(__dirname, 'script.js')
};
