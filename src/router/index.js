import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NewSongs',
      alias:'/',
      components:require('../views/NewSongs')
    },
    {
      path: '/rank',
      components:require('../views/Rank')
    },{
      path: '/rank/info/:id',
      components: require('../views/RankInfo')
    },
    {
      path: '/plist/info/:id',
      components: require('../views/PlistInfo')
    },
    {
      path: '/plist',
      components:require('../views/Plist')
    },
    {
      path: '/singer',
      components:require('../views/Singer')
    },
    {
      path:'*',redirect:'/'
    }
  ]
})
