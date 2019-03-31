import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Index'
import Admin from '@/components/admin/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
