import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

console.log(`当前运行环境是：${process.env.NODE_ENV}`)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})