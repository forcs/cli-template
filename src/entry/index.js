import Vue from 'vue'
import IndexPage from '../pages/Index'
import router from '../router'

import MacawUI from 'macaw-ui'
{{#if supportMacawAdmin}}
import MacawAdmin from 'macaw-admin'
{{/if}}
{{#if supportMacawCharts}}
import MacawCharts from 'macaw-charts'
{{/if}}
import 'macaw-ui/dist/css/macaw-ui.css'
import '../styles/entry.index.js'

import manifestConfig from './manifest.js'
import models from './models'

Vue.config.productionTip = false

Vue.use(MacawUI)
MacawUI.applyPlugin(models)
{{#if supportMacawAdmin}}
MacawUI.applyPlugin(MacawAdmin)
{{/if}}
{{#if supportMacawCharts}}
MacawUI.applyPlugin(MacawCharts)
{{/if}}

document.title = manifestConfig.title

MacawUI.start(manifestConfig, {
  el: '#app',
  router,
  template: '<index-page />',
  components: { IndexPage }
})
