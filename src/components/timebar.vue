<template>
  <div class="timebar">
    <span>选择时间</span>
    <el-select v-model="currentTime" placeholder="时间">
      <el-option
        v-for="item in datelist"
        :key="item.value"
        :label="item.name"
        :value="item.value">
      </el-option>
    </el-select>
    <span>更新频率</span>
    <el-select v-model="updateTime" placeholder="时间">
      <el-option
        v-for="item in updatelist"
        :key="item.value"
        :label="item.name"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import { getHistory } from '@/api/zabbix'
  export default {
    name: 'timebar',
    props: {
      item: {
        type: [Object]
      }
    },
    data(){
      return {
        currentTime: 900,
        datelist: [
          {name: "最近15分钟", value: 900},
          {name: "最近30分钟", value: 1800},
          {name: "最近1小时", value: 3600},
          {name: "最近1天", value: 86400},
          {name: "最近1周", value: 604800},
          {name: "最近1月", value: 2678400},
          {name: "最近半年", value: 13046400},
          {name: "最近1年", value: 31536000},
        ],
        updateTime: 5,
        updatelist: [
          {name: "5s", value: 5},
          {name: "10s", value: 10},
          {name: "30s", value: 30}
        ],
        updateTimeOut: "",
        currentItem: null,
        timeOutFlag:0
      }
    },
    methods: {
      updateData(flag){
        let endtime = parseInt(Date.now() / 1000);
        let startTime = endtime - this.currentTime;
        if (this.currentItem) {
          getHistory(this.currentItem.itemid, startTime, endtime, this.currentItem.value_type).then((res) => {
            this.$store.commit("dataList", res.data.result);
          })
        }
        this.updateTimeOut = setTimeout(() => {
          if(flag==this.timeOutFlag)
            this.updateData(flag);
        }, this.updateTime * 1000);
      },
      update(){
        if (this.updateTimeOut)
          clearTimeout(this.updateTimeOut);
        this.timeOutFlag=Math.random();
        this.updateData(this.timeOutFlag);
      }
    },
    watch: {
      'item': function (v) {
        if (v) {
          this.currentItem = v;
          this.update();
        }
      },
      'currentTime': function (v) {
        this.update();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .timebar{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    padding-right: 200px;
  }
</style>
