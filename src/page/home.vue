<template>
  <div class="main">
    <selectionbar></selectionbar>
    <timebar :item="$store.state.item"></timebar>
    <linechart :listData="$store.state.dataList" width="100%"  ></linechart>
  </div>
</template>

<script>
  import selectionbar from '@/components/selectionbar'
  import linechart from '@/components/charts/line'
  import timebar from '@/components/timebar'
  export default {
    name: 'page01',
    components: {
      selectionbar,
      linechart,
      timebar
    }
  }
</script>
<style lang="scss" scoped>
  .main{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: stretch;

  }
</style>
