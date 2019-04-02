import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import Admin from '@/components/admin/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: {path: '/index', params: {cate: 'all'}},
      redirect: to => {
        const { params } = to
        if (params.cate) {
          return '/index/:cate'
        } else {
          return '/index/All'
        }
      }
    },
    {
      path: '/index/:cate',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
