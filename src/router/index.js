import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NewSongs',
      alias:'/',
      components:require('../Views/NewSongs')
    },
    {
      path: '/rank',
      components:require('../Views/Rank')
    },
    {
      path: '/plist',
      components:require('../Views/Plist')
    },
    {
      path: '/singer',
      components:require('../Views/Singer')
    },
    {
      path:'*',redirect:'/'
    }
  ]
})
