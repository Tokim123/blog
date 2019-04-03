import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import Detail from '@/components/home/Detail'
import Collect from '@/components/home/Collect'
import Admin from '@/components/admin/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: to => {
        const { params } = to
        if (params.cate) {
          return '/index/:cate'
        } else {
          return '/index/all'
        }
      },
      children: [
        {
          path: '/index/:cate',
          name: 'Index',
          component: Collect
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
