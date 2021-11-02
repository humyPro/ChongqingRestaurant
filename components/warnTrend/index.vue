<template>
  <view>

    <!-- 百分比柱状图Compent2 -->
    <view>
      <histogram-chart
          :dataAs="histogramData2"
          canvasId="ht1"
          labelKey="label"
          valueKey="value"
          :yAxisAs="{
					formatter: {
						type: 'percent' //type:number percent String,额外参数:fixed:NUmber,name:String
					}
				}"
      />
      <view style="text-align: center;line-height: 40px;">柱状图histogram percent</view>
    </view>

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
      histogramData2: {
        label: ['2052', '2013', '2014', '2015', '2016', '2017', '2018'],
        value: [
          {
            name: '报警趋势',
            data: [0.3, 0.2, 0.5, 0.4, 0.3, 0.1, 0.2]
          }
        ]
      }
    };
  },
  methods: {},
  created() {
  }
};
</script>

<style scoped>
.arcbar {
  display: flex;
}
</style>
