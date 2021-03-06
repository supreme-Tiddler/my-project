<template>
  <div class="system">
    <div class="title">Edu boss 管理系统</div>
    <div class="login">
      <el-form class = "login-form demo-ruleForm" label-position="top" ref="form" :model="form" label-width="80px" >
        <div class="denglu">登录</div>
        <el-form-item label="手机号">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'loginIndex',
    data () {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: '',
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log('submit!');
            
        }
    }
})
</script>
<style lang="scss" scoped>
.system{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  .title{
    display: flex;
    margin-bottom: 50px;
    text-align: center;
    font-size: 45px;
    width: 300px;
  }
  .login{
    .login-form{
        background: #fff;
        width: 300px;
        padding: 20px;
        border-radius: 5px
    }
    .login-btn{
        width: 100%
    }
    .denglu{
        font-weight: 1000;
        font-size: 20px;
        padding-bottom: 10px
    }
  }
}

</style>