<template>
  <div id="login">
    <div class="bg">
    </div>
    <div class="box">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="form.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>
<style scoped>
html,
body,
#login {
  width: 100%;
  height: 100%;
}

.bg {
  width: 100%;
  height: 100%;
  background: url('../../../static/imgs/login.jpg');
}

.box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  padding: 20px 15px 0;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #fff;
  border-radius: 3px;
}
</style>
