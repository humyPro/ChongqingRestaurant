<template>
  <view class="enterprise-detail">
    <u-calendar v-model="showCalendar" mode="date" @change="handleSelectDate" :max-date="maxDate"></u-calendar>
    <view class="device-detail-card section">
      <view class="title bold">
        设备实时工况
      </view>
      <RestaurantDeviceCard />
    </view>
    <EnterpriseBaseInfo/>
    <view class="device-history section"  style="margin-top: 30rpx">
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
            <DeviceElectricHistory v-show="showDeviceElectricHistory"/>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>

import RestaurantDeviceCard from "../../components/restaurantDeviceCard";
import DeviceElectricHistory from "../../components/deviceElectricHistory";
import EnterpriseBaseInfo from "../../components/enterpriseBaseInfo";
import UIcon from "../../uview-ui/components/u-icon/u-icon";

export default {
  name: "EnterpriseDetail",
  components: {
    UIcon,
    RestaurantDeviceCard,
    DeviceElectricHistory,
    EnterpriseBaseInfo
  },
  data() {
    return {
      selectedDate: undefined,
      showCalendar: false,
      yesterday: this.$u.timeFormat(Date.now() - 24 * 60 * 60 * 1000),
      maxDate: this.$u.timeFormat(Date.now() - 24 * 60 * 60 * 1000, 'yyyy-m-d'),//修改了底层组件，日期格式不足10的不能保留0
      showDeviceElectricHistory: true
    }
  },
  methods:{
    handleSelectDate(date){
      this.selectedDate = date.result
    }
  },
  watch:{
    showCalendar:{
      handler(val){
        this.showDeviceElectricHistory = !val
      }
    }
  }
}

</script>
<style scoped lang="scss">

.enterprise-detail {
  width: 100vw;
  min-height: 100vh;
  padding: 37rpx 24rpx 24rpx 24rpx;

  background: -webkit-linear-gradient(top, #1184ff, #f0f4f8, #f0f4f8,#f0f4f8,#f0f4f8);

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

  .section {
    background-color: #ffffff;
    border-radius: 10rpx;
    width: 100%;

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