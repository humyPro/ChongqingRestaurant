<template>
  <view class="home-page">
    <view class="overview section">
      <view class="item">
        <image class="big-icon" mode="scaleToFill" src="/static/icon/building.png"/>
        <view class="text-content">
          <view>
            <text class="number bold">24</text>
            <text class="unit">家</text>
          </view>
          <view class="sub-title">餐饮企业总数</view>
        </view>
      </view>
      <view class="item">
        <image class="big-icon" mode="scaleToFill" src="/static/icon/electricDevice.png"/>
        <view class="text-content">
          <view>
            <text class="number">24</text>
            <text class="unit">家</text>
          </view>
          <view class="sub-title">安装用电监控</view>
        </view>
      </view>
    </view>

    <view class="abnormal section">
      <view class="head">
        <view class="title bold">
          <text>当前异常企业:</text>
          <text class="err-number">7</text>
        </view>
        <view class="action text-button">查看全部</view>
      </view>
      <RestaurantDeviceCard/>
      <RestaurantDeviceCard/>
      <RestaurantDeviceCard/>
    </view>

    <view class="section warn-trend">
      <WarnTrend/>
    </view>
  </view>
</template>
<script>
import WarnTrend from  "../../components/warnTrend"
import RestaurantDeviceCard from "../../components/restaurantDeviceCard"
export default {
  components: {
    WarnTrend,
    RestaurantDeviceCard
  },
}

</script>
<style scoped lang="scss">
.home-page {
  width: 100vw;
  padding: 24rpx;
  background-color: #f0f4f8;

  .section {
    border-radius: 10px;
    background-color: #ffffff;

    &:not(:last-child) {
      margin-bottom: 26rpx;
    }

    &:not(:first-child) {
      padding: 28rpx 26rpx;
    }
  }

  .overview {
    display: flex;
    justify-content: space-between;
    padding: 42rpx 36rpx;

    .item {
      display: flex;
      align-content: center;

      .big-icon {
        height: 100rpx;
        width: 100rpx;
        margin-right: 30rpx;
      }

      .text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        .number {
          font-size: 34rpx;
          line-height: 36rpx;
          letter-spacing: 0;
          color: #262626;
          margin-right: 43rpx;
        }

        .unit {
          font-size: 20rpx;
          line-height: 36rpx;
          letter-spacing: 0;
          color: #262626;
        }

        .sub-title {
          font-size: 22rpx;
          line-height: 36rpx;
          letter-spacing: 0;
          color: #959595;
        }
      }
    }


  }

  .abnormal {
    .head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 28rpx;

      .title {
        font-size: 28rpx;
        line-height: 41rpx;
        letter-spacing: 0;
        color: #262626;

        .err-number {
          font-size: 28rpx;
          color: #fd0909;
          margin-left: 20rpx;
        }
      }

      .text-button {
        font-size: 24rpx;
        line-height: 41rpx;
        letter-spacing: 0;
        color: #1184ff;
      }
    }
  }

  .warn-trend {
    padding-top: 10rpx!important;
  }
}

</style>