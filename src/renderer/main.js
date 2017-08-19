import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store/store'

Vue.use(Vuetify)
Vue.use(VueSocketio, 'http://localhost:3000')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios.create({ baseURL: 'http://localhost:8000' })
Vue.storage = Vue.prototype.$storage = window.sessionStorage
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
