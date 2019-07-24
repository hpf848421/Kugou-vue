// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/neat-min.css'
import './assets/css/base.css'
import axios from 'axios'
import store from './store/Store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
