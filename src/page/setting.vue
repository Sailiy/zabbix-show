<template>
  <div>
    <h1>配置</h1>
    <hr>
    <div class="row">
      <el-row>
        <el-col :span="2">
          服务器地址
        </el-col>
        <el-col :span="6">
          <el-input v-model="serverInfo.server_url" placeholder="服务器地址"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          用户名
        </el-col>
        <el-col :span="6">
          <el-input v-model="serverInfo.username" placeholder="用户名"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          密码
        </el-col>
        <el-col :span="6">
          <el-input type="password" v-model="serverInfo.password" placeholder="密码"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="2">
          <el-button @click="save()" type="primary">连接</el-button>
          <el-button @click="reset()">重置</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting',
    data(){
      return {
        serverInfo:{
          server_url:this.$store.getters.server_url,
          username:this.$store.getters.username,
          password:this.$store.getters.password
        }
      }
    },
    methods:{
      save(){
        this.$store.dispatch("saveAndlogin",this.serverInfo).then((msg)=>{
          this.$notify({
            title: '提示',
            message: msg,
            type: 'success'
          });
        })
      },
      reset(){
        Object.keys(this.serverInfo).forEach((k,v)=>{
            this.serverInfo[k]=""
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .c1 {
    width: 640px;
    height: 360px;
    background-color: orange;
    margin-top: 10px;
  }

  .row {
    .el-row {
      margin-top: 10px;
      .el-col {
        line-height: 30px;
        vertical-align: middle;
      }
    }
  }
</style>
