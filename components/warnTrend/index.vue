<template>
  <view class="canvas-container" :id="id">
    <view class="head">
      <view class="title bold">报警趋势</view>
      <view class="button-container">
        <u-tabs :list="buttonText" :is-scroll="false" :current="current" :bar-width="76" :font-size="20"
                :item-width="76" @change="handleScopeChange"></u-tabs>
      </view>
    </view>
    <histogram-chart v-if="ready"
                     :dataAs="histogramData"
                     :basicAs="basicAs"
                     :legendAs="legendAs"
                     :xAxisAs="xAxisAs"
                     labelKey="label"
                     valueKey="value"
                     :yAxisAs="{
                        formatter: {
                          type: 'number' //type:number percent String,额外参数:fixed:NUmber,name:String
                        }
                      }"
    />
  </view>
</template>

<script>
import HistogramChart from '@/components/stan-ucharts/HistogramChart.vue';

export default {
  name: 'WarnTrend',
  components: {
    HistogramChart,
  },
  data() {
    return {
      id: this.$u.guid(20),
      buttonText: [{name: "本周"}, {name: "本月"}],
      current: 1,
      ready: false,
      basicAs: {
        colors: ["#f8c322"],
        padding: [0, 0, 20, 0],
        enableScroll: false,
        dataLabel: false,
        width: undefined,
      },
      xAxisAs: {
        xAxis: {
          labelCount: 15,
          itemCount: 30,
          disableGrid: true
        }
      },
      legendAs: {
        legend: {
          show: false
        }
      },
      histogramData: {
        label: (() => {
          const arr = []
          for (let i = 0; i < 30; i++) {
            arr.push(i + 1)
          }
          return arr
        })(),
        value: [
          {
            name: '',
            data: (() => {
              const arr = []
              for (let i = 0; i < 30; i++) {
                arr.push(Math.floor(Math.random() * 50))
              }
              console.log("随机生成的arr", arr)
              return arr
            })()
          }
        ]
      }
    };
  },
  methods: {
    handleScopeChange(index) {
      this.current = index
    }
  },
  created() {
  },
  onReady() {
    const query = wx.createSelectorQuery().in(this);  //创建节点选择器
    const id = this.id
    const that = this
    query.select(`#${id}`).boundingClientRect(function (res) {
      that.ready = true
      that.basicAs.width = res && res.width || undefined
    }).exec();
  }
};
</script>

<style scoped lang="scss">
.canvas-container {
  width: 100%;
  
  .head {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    margin-bottom: 34rpx;

    .title {
      font-size: 28rpx;
      letter-spacing: 0;
      color: #262626;
      display: flex;
      align-items: center;
    }

    .button-container {
      display: flex;
      align-content: center;
    }
  }

  .tips {
    font-size: 20rpx;
    line-height: 34rpx;
    letter-spacing: 0;
    color: #bdc0c3;

    display: flex;
    justify-content: space-between;
  }

}
</style>
