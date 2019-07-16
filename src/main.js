import Vue from 'vue'
import App from './App.vue'
import "normalize.css";
import routers from './routers'

import VueRouter from 'vue-router'
import VeeValidate from "vee-validate"

// import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(VueRouter)
Vue.use(VeeValidate)
// Vue.use(mandMobile)

const router = new VueRouter({
  // mode: 'history',
  routes: routers
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')