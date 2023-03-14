import { DefaultTheme, defineConfigWithTheme } from 'vitepress'

import nav from './navbar'
import sidebar from './sidebar'

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: '暮雪酱使用文档',
  description: 'YukiChan Documentation',
  lang: 'zh-CN',
  appearance: true,
  base: '/',
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: false,
  },

  themeConfig: {
    lastUpdatedText: '最近更新',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '暗色模式',
    outline: {
      label: '查看本页内容',
      level: 'deep',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    footer: {
      message: '所有文档均采用 CC-BY-NC-SA 4.0 许可协议',
      copyright: 'Copyright © 2023 bsdayo',
    },

    nav,
    sidebar,

    algolia: {
      appId: 'IEC9R45J0Z',
      apiKey: '48de6031fb1319f0f6489a4f37ae0bc0',
      indexName: 'yukisorabs',
    },
  },
})
