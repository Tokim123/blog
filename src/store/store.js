import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    artList: [
      {
        id: 1,
        title: '分布式架构：并发重复请求和幂等场景技术实现总结',
        content:
         '实现幂等需要两个条件1、同一请求参数（并发请求或非并发请求）；2、多次请求返回的结果一致。一般大家讲的都是并发情况下的，使用并发控制解决，但还有一点是要满足返回的结果一致，这个一般根据场景来定，是返回相同结果还是返回失败。描述：页面加载时，先请求服务端返回防重Token，用户提交时将token一起提交到服务端，服务端判断token是否存在，存在则执行，不存在则异常处理。【可根据业务规则是更新token的状态值还是直接删除token来标识已处理过】',
        src: '../../../static/imgs/logo.jpg',
        auth: '编程喵',
        time: '2019-01-11',
        cate: 'web',
        uid: '0'
      },
      {
        id: 2,
        title: '这是标题',
        content:
          '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        src: '../../../static/imgs/logo.jpg',
        auth: '编程喵',
        time: '2019-01-11',
        cate: 'vue',
        uid: '1'
      },
      {
        id: 3,
        title: '这是标题',
        content:
            '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        src: '../../../static/imgs/logo.jpg',
        auth: '编程喵',
        time: '2019-01-11',
        cate: 'node',
        uid: '2'
      },
      {
        id: 4,
        title: '这是标题',
        content:
            '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        src: '../../../static/imgs/logo.jpg',
        auth: '编程喵',
        time: '2019-01-11',
        cate: 'go',
        uid: '3'
      }
    ]
  },
  getters: {
    filterCate: state => key => {
      if (key === 'all') return state.artList
      return state.artList.filter(todo => todo.cate === key)
    },
    getDetail: state => id => {
      return state.artList.filter(todo => todo.id === id)
    }
  },
  mutations: {
    filterCate (state, c) {
      state.artList.filter((item) => item === c)
    }
  }
})

export default store
