<template>
  <div class="row-bg">
    <img class="logo" src="../assets/logo.png"/>
    <span class="h1">Zabbix-Show</span>
  </div>
</template>

<script>
  export default {
    name: 'logo'
  }
</script>
<style lang="scss" scoped>
  .row-bg {
    height: 100%;
    background-color: #58B7FF;
    display: flex;
    flex-direction: row;
    align-items: center;
    .logo {
      width: 3em;
      height: 3em;
    }
    .h1 {
      font-size: 20px;
      color: white;
    }
  }
</style>
