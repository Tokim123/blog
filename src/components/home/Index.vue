<template>
  <div>
    <el-container>
      <el-header>
        <el-row class="head">
          <el-col :span="12" class="alignLeft">
            <div class="grid-content bg-purple">
              <img src="../../../static/imgs/logo.jpg" alt="logo" class="logo" title="logo">
              <h1>
                <router-link :to="{name: 'Home'}">编程喵</router-link>
              </h1>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <ul class="login">
                <li>
                  <a href="#">登录</a>
                </li>
                <li>
                  <a href="#">注册</a>
                </li>
                <li>
                  <a href="#">个人中心</a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row class="cate">
          <el-col :span="24">
            <el-tabs v-model="active" type="card" @tab-click="handleClick">
              <el-tab-pane label="latest news" name="collect"></el-tab-pane>
              <el-tab-pane label="web" name="web"></el-tab-pane>
              <el-tab-pane label="Vue" name="vue"></el-tab-pane>
              <el-tab-pane label="NodeJs" name="node"></el-tab-pane>
              <el-tab-pane label="Git" name="git"></el-tab-pane>
              <el-tab-pane label="Go" name="go"></el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
          <keep-alive>
              <component :is="active" :cate="label"></component>
          </keep-alive>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'hello',
      active: 'collect',
      label: 'all'
    }
  },
  components: {
    collect: () => import('./Collect'),
    details: () => import('./Details')
  },
  methods: {
    handleClick (tab) {
      this.active = 'collect'
      this.label = tab.label
    }
  }
}
</script>
<style scoped>
.logo {
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  vertical-align: middle !important;
}

.logo:hover {
  cursor: pointer;
}

h1 {
  font-size: 26px;
  color: #fff;
  font-family: serif;
  display: inline-block;
  padding-left: 20px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

h1 a {
  display: block;
  color: #fff;
  height: 100%;
  width: 100%;
}

.el-header .login {
  float: right;
  height: 50px;
  line-height: 50px;
}

.el-header .login li {
  float: left;
  width: 60px;
  text-align: center;
  height: 100%;
}

.el-header .login li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
}

.el-header .login li a:hover {
  cursor: pointer;
  color: blue;
}

.head {
  height: 95px;
  line-height: 95px;
  padding: 0 12px;
  box-sizing: border-box;
}

.cate {
  height: 45px;
  line-height: 45px;
}

.cate .el-col {
  width: 100%;
  height: 100%;
  background: aliceblue;
}
</style>
