import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

//라우트설정
import router from './config/route'
Vue.use(VueRouter)

//상태관리
import store from './vuex/store/index'
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
