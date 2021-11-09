<template>
  <view class="canvas-container" :id="id">
    <line-chart
        v-if="ready"
        canvasId="index_line_2"
        :dataAs="lineData2"
        :basicAs="basicAs"
        :legendAs="legendAs"
    />
  </view>
</template>
<script>
import LineChart from '@/components/stan-ucharts/LineChart.vue';

export default {
  name:"DeviceElectricHistory",
  components:{
    LineChart
  },
  data(){
    return {
      id: this.$u.guid(20),
      ready: false,
      lineData2: {
        categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        series: [
          {name: '净化机', data: [35, 8, 25, 37, 65, 20,44]},
          {name: '风机', data: [70, 40, 65, 100, 44, 68,52]}
        ]
      },
      basicAs: {
        colors: ["#10d785","#0868f7"],
        padding: [10, 0, 20, 0],
        enableScroll: false,
        dataLabel: false,
        width: undefined,
        fontSize: 10
      },
      legendAs: {
        legend: {
          show: false
        }
    }
    }
  },
  onReady() {
    debugger
    const query = wx.createSelectorQuery().in(this);
    const id = this.id
    const that = this
    query.select(`#${id}`).boundingClientRect(function (res) {
      that.ready = true
      that.basicAs.width = res && res.width || undefined
    }).exec();
  }
}
</script>
<style scoped lang="scss">
.canvas-container {
  width: 100%;
}

</style>