import { DefaultTheme } from 'vitepress'

function item(text: string, link: string) {
  return { text, link }
}

const sidebar: DefaultTheme.Sidebar = {
  '/v3/': [
    {
      text: '暮雪酱 v3',
      items: [
        item('简介', '/v3/index.md'),
        item('用户协议', '/v3/policy.md'),
        item('基本用法', '/v3/intro.md'),
        {
          text: '功能介绍',
          items: [
            item('Arcaea 相关', '/v3/arcaea.md'),
            item('百度翻译', '/v3/trans.md'),
            item('Wolfram Alpha 搜索', '/v3/wolframalpha.md'),
            item('五千兆元图片生成', '/v3/gosen.md'),
            item('杂项', '/v3/misc.md'),
          ],
        },
        item('图查预览', '/v3/gallery.md'),
        item('常见问题', '/v3/faq.md'),
      ],
    },
  ],
  '/v2/': [
    {
      text: '暮雪酱 v2',
      items: [
        item('简介', '/v2/index.md'),
        item('指令简介', '/v2/intro.md'),
        item('Arcaea 相关功能', '/v2/arcaea.md'),
        item('百度翻译', '/v2/trans.md'),
        item('Wolfram Alpha 搜索', '/v2/wolframalpha.md'),
        item('五千兆元图片生成', '/v2/gosen.md'),
        item('杂项', '/v2/misc.md'),
        item('图查预览', '/v2/gallery.md'),
        item('v1 版本文档', '/v1/index.md'),
        item('v3 版本文档', '/v3/index.md'),
      ],
    },
  ],
  '/v1/': [
    {
      text: '暮雪酱 v1',
      items: [
        item('简介', '/v1/index.md'),
        item('Arcaea 相关功能', '/v1/arcaea.md'),
        item('哔哩哔哩相关功能', '/v1/bilibili.md'),
        item('运行 C# 代码/表达式', '/v1/code.md'),
        item('百度翻译', '/v1/trans.md'),
        item('Wolfram Alpha 搜索', '/v1/wolframalpha.md'),
        item('v2 版本文档', '/v2/index.md'),
        item('v3 版本文档', '/v3/index.md'),
      ],
    },
  ],
}

export default sidebar
