import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { EnhanceAppContext } from 'vitepress/dist/client'

import VersionOutdated from './components/VersionOutdated.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component('VersionOutdated', VersionOutdated)
  },
}
