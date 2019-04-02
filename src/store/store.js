import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    artList: [
      {
        id: 1,
        title: '这是标题',
        content:
         '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        src: '../../../static/imgs/logo.jpg',
        auth: '编程喵',
        time: '2019-01-11',
        cate: 'Web',
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
        cate: 'Vue',
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
        cate: 'Nodejs',
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
        cate: 'Go',
        uid: '3'
      }
    ]
  },
  getters: {
    filterCate: state => key => {
      if (key === 'All') return state.artList
      return state.artList.filter(todo => todo.cate === key)
    }
  },
  mutations: {
    filterCate (state, c) {
      state.artList.filter((item) => item === c)
    }
  }
})

export default store
