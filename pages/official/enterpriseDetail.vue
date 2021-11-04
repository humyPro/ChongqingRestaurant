<template>
  <view class="enterprise-detail">
    <u-calendar v-model="showCalendar" mode="date" @change="handleSelectDate" :max-date="maxDate"></u-calendar>
    <view class="device-detail-card section">
      <view class="title bold">
        设备实时工况
      </view>
      <RestaurantDeviceCard/>
    </view>
    <view class="base-info section">
      <view class="section-head bold">
        基本信息
      </view>
      <view class="content">
        <view class="line">
          <text>企业名称：</text>
          <text>重庆小龙坎火锅</text>
        </view>
        <view class="line">
          <text>生产状态：</text>
          <text>正常</text>
        </view>
        <view class="line">
          <text>联系人：</text>
          <text>吴小飞</text>
        </view>
        <view class="line">
          <text>联系电话：</text>
          <text>15282250907</text>
        </view>
        <view class="line">
          <text>所属行业：</text>
          <text>餐饮</text>
        </view>
        <view class="line">
          <text>所属区县：</text>
          <text>渝中区</text>
        </view>
        <view class="line">
          <text>详细地址：</text>
          <text>重庆市渝中区解放大道美食街18号</text>
        </view>
        <view class="line">
          <text>经纬度：</text>
          <text>106.551798,29.561125</text>
        </view>
        <view class="line">
          <text>在线监控：</text>
          <text>浓度监控</text>
        </view>
        <view class="line">
          <text>当前浓度：</text>
          <text>35 mg/m³</text>
        </view>
        <view class="line">
          <text>超标情况：</text>
          <text>正常</text>
        </view>
        <view class="line">
          <text>MN码：</text>
          <text>865374059794100</text>
        </view>
        <view class="line">
          <text>净化机清洗周期：</text>
          <text>2个月</text>
        </view>
        <view class="line">
          <text>净化机下一次清洗日期：</text>
          <text>2021-09-29</text>
          <text class="error">（已逾期）</text>
        </view>
      </view>
    </view>
    <view class="device-history section">
      <view class="section-head">
        <view class="bold">设备历史记录</view>
        <view class="calendar-view" @click="showCalendar = true">
          <text>{{selectedDate || yesterday}}</text>
          <u-icon name="calendar" width="27" style="margin-left: 15rpx"/>
        </view>
      </view>
      <view class="content">
        <view class="device-work-status">
          <view class="content-head">
            <view class="title bold">
              设备历史工况
            </view>
            <view class="sample">
              <viwe class="item">
                <view class="normal view-icon"></view>
                <view>正常</view>
              </viwe>
              <viwe class="item">
                <view class="off view-icon"></view>
                <view>关闭</view>
              </viwe>
            </view> 
          </view>
          <view>
            <view class="segment-content">
              <view  class="name">净化机</view><text>：</text>
              <view class="flex-center">
                <image class="detail-icon" src="/static/icon/leaf-tiny.png"></image>
              </view>
              <view class="color-segment">
              </view>
            </view>
            <view class="segment-content">
              <view class="name">风机</view><text>：</text>
              <view class="flex-center">
                <image class="detail-icon" src="/static/icon/fan-tiny.png"></image>
              </view>
              <view class="color-segment">
              </view>
            </view>
            <view class="segment-content">
              <view class="name hidden">风机</view><text class="hidden">：</text>
              <view class="flex-center hidden">
                <image class="detail-icon" src="/static/icon/fan-tiny.png"></image>
              </view>
              <view class="time-segment">
                <text>00:00</text>
                <text>04:00</text>
                <text>08:00</text>
                <text>12:00</text>
                <text>16:00</text>
                <text>20:00</text>
                <text>24:00</text>
              </view>
            </view>
          </view>
        </view>
        <view class="device-electric-history">
          <view class="content-head">
            <view class="title bold">
              设备历史电量
            </view>
          </view>
          <view style="width: 100%">
            <view class="tips light">
              <view>(度)</view>
              <view class="sample">
                <viwe class="item">
                  <view class="view-icon" style="background-color: #0868f7"></view>
                  <view>净化机</view>
                </viwe>
                <viwe class="item">
                  <view class="view-icon" style="background-color: #10d785"></view>
                  <view>风机</view>
                </viwe>
              </view>
            </view>
            <DeviceElectricHistory/>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>

import RestaurantDeviceCard from "../../components/restaurantDeviceCard";
import DeviceElectricHistory from "../../components/deviceElectricHistory";
import UIcon from "../../uview-ui/components/u-icon/u-icon";

export default {
  name: "EnterpriseDetail",
  components: {
    UIcon,
    RestaurantDeviceCard,
    DeviceElectricHistory
  },
  data() {
    return {
      selectedDate: undefined,
      showCalendar: false,
      yesterday: this.$u.timeFormat(Date.now() - 24 * 60 * 60 * 1000),
      maxDate: this.$u.timeFormat(Date.now() - 24 * 60 * 60 * 1000, 'yyyy-m-d'),//修改了底层组件，日期格式不足10的不能保留0
    
    }
  },
  methods:{
    handleSelectDate(date){
      this.selectedDate = date.result
    }
  }
}

</script>
<style scoped lang="scss">

.enterprise-detail {
  width: 100vw;
  min-height: 100vh;
  padding: 37rpx 24rpx 24rpx 24rpx;

  background: -webkit-linear-gradient(top, #0d81fa, #f0f4f8, #f0f4f8);

  .calendar-view {
    font-size: 26rpx;
    color: #272727;
    padding: 24rpx 15rpx 20rpx 17rpx;
    border-radius: 6rpx;
    border: solid 1rpx #e9edf1;
  }
  
  .device-detail-card {
    padding: 28rpx 26rpx 36rpx 26rpx;

    .title {
      font-size: 28rpx;
      color: #262626;
      margin-bottom: 28rpx;
    }
  }

  &>.section {
    background-color: #ffffff;
    border-radius: 10rpx;

    &:not(:last-child) {
      margin-bottom: 30rpx;
    }
  }

  .section-head {
    padding: 37rpx 0 16rpx 31rpx;
    font-size: 28rpx;
    color: #262626;
    border-bottom: 1rpx dashed #e9edf1;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .base-info {

    .content {
      padding: 25rpx 0 35rpx 34rpx;
      font-size: 25rpx;
      color: #7a7a7a;

      .line:not(:last-child) {
        margin-bottom: 22rpx;
      }
    }
  }

  .segment-content {
    display: flex;
    align-items: center;
    font-size: 26rpx;
    color: #383c40;

    &:first-child {
      margin-bottom: 43rpx;
    }

    .name {
      width: 86rpx;
      text-align-last: justify
    }

    .color-segment {
      background-color: #00C777;
      flex-grow: 1;
      width: 1px;
      height: 17rpx;
    }

    .time-segment {
      font-size: 20rpx;
      color: #9e9d9d;
      display: flex;
      justify-content: space-between;
      flex: 1;
      margin-top: 17rpx;
    }
  }

  .content-head {
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-bottom: 44rpx;

    font-size: 26rpx;
    color: #828a93;
  }
  
  .device-history {
    .content {
      padding: 31rpx 24rpx 18rpx 31rpx;
    }

    .section-head {
      padding: 10rpx 10rpx 7rpx 30rpx;
    }

    .detail-icon {
      height: 26rpx;
      width: 26rpx;
      margin-right: 13rpx;
    }

  }

  .device-electric-history {
    margin-top: 78rpx;

    .tips {
      font-size: 20rpx;
      line-height: 34rpx;
      letter-spacing: 0;
      color: #bdc0c3;

      padding-left: 4rpx;

      display: flex;
      justify-content: space-between;
    }
  }

  .sample {
    display: flex;
    font-size: 20rpx;
    color: #828a93;

    .item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 58rpx;
      }

      .view-icon {
        width: 23rpx;
        height: 9rpx;
        border-radius: 5rpx;
        margin-right: 8rpx;

        &.normal {
          background-color: #1688fe;
        }

        &.off {
          background-color: #bfbfbf;
        }
      }
    }
  }

}

</style>