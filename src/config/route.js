/* eslint-disable */

import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
  }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    //페이지 변경시 최상단으로 화면 맞춤
    scrollBehavior() {
      return {
        x: 0,
        y: 0
      }
    }
  })  
  
  export default router