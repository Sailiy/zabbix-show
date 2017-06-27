<template>
  <div class="w">
    <span>服务器组：</span>
    <el-select v-model="current.groupid" @change="handleHostGroupChange()" placeholder="服务器组">
      <el-option
        v-for="item in hostgroups"
        :key="item.name"
        :label="item.name"
        :value="item.groupid">
      </el-option>
    </el-select>
    <span>主机：</span>
    <el-select v-model="current.hostid" @change="handleHostChange()" placeholder="主机">
      <el-option
        v-for="item in hosts"
        :key="item.name"
        :label="item.name"
        :value="item.hostid">
      </el-option>
    </el-select>
    <span>监控项：</span>
    <el-select v-model="current.itemid" @change="handleItemChange()" placeholder="监控项">
      <el-option
        v-for="item in items"
        :key="item.name"
        :label="item | expandItemName"
        :value="item.itemid">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import { getHostGroup, getHost, getApplication, getItem } from '@/api/zabbix'
  export default {
    name: 'selectionbar',
    created(){
      this.loadGroup();
    },
    data(){
      return {
        hostgroups: [],
        hosts: [],
        items: [],
        current: {
          groupid: "",
          hostid: "",
          itemid: "",
        }
      }
    },
    methods: {
      loadGroup(){
        getHostGroup().then((res) => {
          this.hostgroups = res.data.result;
        })
      },
      loadtHost(groupid){
        getHost(groupid).then((res) => {
          this.hosts = res.data.result;
        })
      },
      loadtItem(hostid){
        getItem(hostid).then((res) => {
          this.items = res.data.result;
        })
      },
      handleHostGroupChange(){
          this.current.hostid = "",
          this.current.itemid = "",
          this.loadtHost(this.current.groupid)
      },
      handleHostChange(){
        this.current.itemid = "",
        this.loadtItem(this.current.hostid)
      },
      handleItemChange(){
        this.$store.commit('item',this.items.find((item)=>{
          return item.itemid==this.current.itemid
        }));
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
