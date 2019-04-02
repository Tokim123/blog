// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'
import Ul from '@/components/common/Ul'
import Li from '@/components/common/Li'
import router from './router'
import ElementUI from 'element-ui'
import './element'
import '../static/css/layout.css'
import '../static/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.filter('subs', function (val, num) {
  let len = val.length
  return len < num ? val : (val.substr(0, num)) + '...'
})
Vue.config.productionTip = false
Vue.component(Ul.name, Ul)
Vue.component(Li.name, Li)
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
