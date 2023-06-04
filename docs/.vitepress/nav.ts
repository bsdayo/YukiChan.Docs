import { DefaultTheme } from 'vitepress'

function item(text: string, link: string) {
  return { text, link }
}

const nav: DefaultTheme.NavItem[] = [
  {
    text: '版本',
    items: [
      item('v4 (R)', '/v4/'),
      item('v3', '/v3/'),
      item('v2', '/v2/'),
      item('v1', '/v1/'),
    ],
  },
]

export default nav
