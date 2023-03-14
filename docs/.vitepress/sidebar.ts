import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/v3/': [
    {
      text: '暮雪酱 v3',
      items: [
        { text: '简介', link: '/v3/index.md' },
        { text: '用户协议', link: '/v3/policy.md' },
        { text: '基本用法', link: '/v3/intro.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/v3/arcaea.md' },
        { text: 'BaiduTranslate - 百度翻译', link: '/v3/trans.md' },
        { text: 'WolframAlpha - Wolfram Alpha 搜索', link: '/v3/wolframalpha.md' },
        { text: 'Gosen - 五千兆元图片生成', link: '/v3/gosen.md' },
        { text: '杂项', link: '/v3/misc.md' },
        { text: '图查预览', link: '/v3/gallery.md' },
      ],
    },
  ],
  '/v2/': [
    {
      text: '暮雪酱 v2',
      items: [
        { text: '简介', link: '/v2/index.md' },
        { text: '指令简介', link: '/v2/intro.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/v2/arcaea.md' },
        { text: 'BaiduTranslate - 百度翻译', link: '/v2/trans.md' },
        { text: 'WolframAlpha - Wolfram Alpha 搜索', link: '/v2/wolframalpha.md' },
        { text: 'Gosen - 五千兆元图片生成', link: '/v2/gosen.md' },
        { text: '杂项', link: '/v2/misc.md' },
        { text: '图查预览', link: '/v2/gallery.md' },
        { text: 'v1 版本文档', link: '/v1/index.md' },
        { text: 'v3 版本文档', link: '/v3/index.md' },
      ],
    },
  ],
  '/v1/': [
    {
      text: '暮雪酱 v1',
      items: [
        { text: '简介', link: '/v1/index.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/v1/arcaea.md' },
        { text: 'Bilibili - 哔哩哔哩相关功能', link: '/v1/bilibili.md' },
        { text: 'Code - 运行 C# 代码/表达式', link: '/v1/code.md' },
        { text: 'BaiduTranslate - 百度翻译', link: '/v1/trans.md' },
        { text: 'WolframAlpha - Wolfram Alpha 搜索', link: '/v1/wolframalpha.md' },
        { text: 'v2 版本文档', link: '/v2/index.md' },
        { text: 'v3 版本文档', link: '/v3/index.md' },
      ],
    },
  ],
}

export default sidebar
