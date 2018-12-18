import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from './components/CommonLayout.vue'
import Home from './views/Home.vue'
import Tag from './views/Tag.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: CommonLayout,
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
      }, {
        path: 'tag/:id',
        name: 'tag',
        component: Tag,
      }]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    }
  ]
})