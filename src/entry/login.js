import Vue from 'vue'
import AdminLoginPage from 'macaw-admin/dist/pages/Login'

import manifestConfig from './manifest.js'

import 'macaw-ui/dist/css/macaw-ui.css'
import 'macaw-admin/dist/css/macaw-admin.css'
import MacawUI from 'macaw-ui'
import MacawAdmin from 'macaw-admin'

Vue.config.productionTip = false

Vue.use(MacawUI)
MacawUI.applyPlugin(MacawAdmin)

MacawUI.start(manifestConfig, {
  el: '#app',
  template: '<admin-login-page />',
  components: { AdminLoginPage }
})