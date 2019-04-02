<template>
  <div>
    <div v-if="cate.length">
      <el-ul>
        <el-li-item v-for="item in cate" :key="item.id">
          <div class="tit">
            <h2 @click="clickContent(item.id)">{{item.title}}</h2>
            <span @click="clickCate(item.cate)">{{item.cate}}</span>
          </div>
          <p @click="clickContent(item.id)">{{ item.content | subs(20)}}</p>
          <div class="auth">
            <img :src="item.src" alt>
            <span>{{item.auth}}</span>
            <div class="time">{{item.time}}</div>
          </div>
        </el-li-item>
      </el-ul>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>
<script>
export default {
  props: ['cate'],
  name: 'collect',
  data() {
    return {
      list: []
    }
  },
  methods: {
    clickContent(id) {
      console.log(id)
    },
    clickCate(cate) {
      alert(cate)
    }
  },
  watch: {
    cate(val, old) {}
  },
  mounted () {
    this.list = this.cate
  }
}
</script>
<style scoped>
.tit {
  margin-bottom: 10px;
}

.tit h2 {
  color: #000;
  display: inline-block;
}

.tit h2:hover {
  cursor: pointer;
}

.tit span {
  padding-left: 20px;
  font-size: 14px;
  color: #ccc;
  font-weight: normal;
  text-decoration: underline;
}

.tit span:hover {
  cursor: pointer;
  color: blue;
}

p {
  font-size: 20px;
  color: #000;
  word-break: break-all;
  letter-spacing: 0.5;
  margin-bottom: 15px;
}

p:hover {
  cursor: pointer;
}

.auth {
  position: relative;
}

.auth img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
}

.auth span {
  padding-left: 10px;
  color: #000;
}

.time {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
