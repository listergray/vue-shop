
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/001.jpg" alt="room" />
      </div>
      <!-- 表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_form">
        <el-form-item prop="username">
          <el-input
            placeholder="username"
            prefix-icon="icon iconfont icon-haofangtuo400iconfontyonghuming"
            v-model="loginForm.username"
          >{{ loginForm.username }}</el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="password"
            prefix-icon="icon iconfont icon-mima"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login"> Login </el-button>
          <el-button type="primary" @click="resetLoginFormRef"> Redo </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'please input username', trigger: 'blur' },
          { min: 4, max: 20, message: 'legth lt 20', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'please input password', trigger: 'blur' },
          { min: 4, max: 20, message: 'legth lt 20', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginFormRef () {
      // console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res !== 200) return console.log('登录失败')
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  width: 100%;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: antiquewhite;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
