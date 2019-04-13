import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Services from './services'
Vue.prototype.$services = Services 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
