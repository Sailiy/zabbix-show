<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
  import {parseTime,nFormatter} from '@/utils/index'
  // 引入 ECharts 主模块
  const echarts = require('echarts/lib/echarts');
  // 引入图
  require('echarts/lib/chart/line');
  // 引入提示框和标题组件
  require('echarts/lib/component/title');

  require('echarts/lib/component/markLine');
  //  require('echarts/lib/component/markPoint');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/dataZoom');

  export default {
    name: 'lineChart',
    props: {
      className: {
        type: String,
        default: 'line-chart'
      },
      id: {
        type: String,
        default: 'line-chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '480px'
      },
      listData: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        chart: null
      };
    },
    watch: {
      listData(data) {
        this.setLine(data)
      }
    },
    mounted() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [ '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45','15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45','15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45','15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },

        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: function (value, index) {
              return nFormatter(value);
            }
          },
          axisPointer: {
            snap: true
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        animation:false,
        series: [
          {
            name: '',
            type: 'line',
            smooth: true,
            data: [],
          }
        ]
      });
      this.setLine(this.listData);
    },
    methods: {
      setLine(data) {
          this.chart.setOption({
            xAxis:{
              data:data.map(function (item) {
                return parseTime(item.clock,'{m}-{d} {h}:{i}:{s}');
              })
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                animation: false
              }
            },
            series: [
              {
                data: data.map(function (item) {
                  return item.value;
                })
              }
            ]
          })
      }
    }
  }
</script>
