<template>
  <div class="container">
    <div class="top">
      <logo/>
    </div>
    <div class="main">
      <div class="left">
        <slider></slider>
      </div>
      <div class="right">
        <levelbar></levelbar>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import levelbar from '@/components/levelbar';
  import logo from '@/components/logo';
  import slider from '@/components/slider';
  export default {
    name: 'page01',
    components: {
      logo,
      slider,
      levelbar
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    .top {
      height: 60px;
    }
    .main {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      .left {
        width: 180px;
        flex-shrink: 0;
        background-color: paleturquoise;
      }
      .right {
        flex-grow: 1;
        background-color: azure;
      }
    }
  }
</style>
