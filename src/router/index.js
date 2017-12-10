import Vue from 'vue'
import Router from 'vue-router'
import McNavWindowsContainer from 'macaw-ui/dist/components/nav-windows-container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/index/',
      name: 'index',
      component: McNavWindowsContainer
    },
    {
      path: '/index/:menu',
      name: '$sub',
      component: McNavWindowsContainer
    }
  ]
})
