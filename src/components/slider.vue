<template>
  <el-menu default-active="routeActive" class="el-menu-vertical-demo" router>
    <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
    <el-menu-item index="/setting"><i class="el-icon-setting"></i>配置</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'logo',
    watch: {
      '$route' (to, from) {
        this.routeActive=to.path;
      },
    },
  }
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo {
    width: 100%;
    height: 100%;
  }
</style>
