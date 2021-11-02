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
      <view class="item">
        <view class="item-head">
          <view class="name bold">九味砂锅米线</view>
        </view>
        <view class="detail">
          <view class="detail-item">
            <view>
              <image class="detail-icon" src="/static/icon/leaf-tiny.png"></image>
            </view>
            <view class="device-status">
              <text>净化机</text>
              <text class="status">开</text>
            </view>
            <view class="device-status">
              <text>电流</text>
              <text class="status">12.5Ah</text>
            </view>
          </view>
          <view class="detail-item">
            <view>
              <image class="detail-icon" src="/static/icon/fan-tiny.png"></image>
            </view>
            <view class="device-status">
              <text>风机</text>
              <text class="status">开</text>
            </view>
            <view class="device-status">
              <text>电流</text>
              <text class="status">12.5Ah</text>
            </view>
          </view>
        </view>
      </view>

      <view class="item">
        <view class="item-head">
          <view class="name bold">老妈兔头</view>
        </view>
        <view class="detail">
          <view class="detail-item">
            <view>
              <image class="detail-icon" src="/static/icon/leaf-tiny.png"></image>
            </view>
            <view class="device-status">
              <text>净化机</text>
              <text class="status">开</text>
            </view>
            <view class="device-status">
              <text>电流</text>
              <text class="status">12.5Ah</text>
            </view>
          </view>
          <view class="detail-item">
            <view>
              <image class="detail-icon" src="/static/icon/fan-tiny-off.png"></image>
            </view>
            <view class="device-status">
              <text>风机</text>
              <text class="status off">关</text>
            </view>
            <view class="device-status">
              <text>电流</text>
              <text class="status">0</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="warn-trend section">
      <WarnTrend/>
    </view>
  </view>
</template>
<script>
import WarnTrend from  "../../components/warnTrend"
export default {
  components: {
    WarnTrend,
  },
}

</script>
<style scoped lang="scss">
.home-page {
  height: 100vh;
  width: 100vw;
  padding: 24rpx;
  border-radius: 10px;
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

    .item {
      padding: 24rpx 22rpx 29rpx 25rpx;
      box-shadow: 0 2rpx 6rpx 0 rgba(21, 21, 21, 0.08);
      border-radius: 10rpx;
      border: solid 1rpx #e9edf1;

      &:not(:last-child) {
        margin-bottom: 24rpx;
      }

      .detail {
        display: flex;
        justify-content: space-between;
      }

      .detail-icon {
        height: 26rpx;
        width: 26rpx;
        margin-right: 7rpx;
      }

      .device-status {
        font-size: 22rpx;
        line-height: 34rpx;
        letter-spacing: 0;
        color: #808080;

        .status {
          color: #0b0b0b;
          margin-left: 20rpx;

          &.off {
            color: #fd0909;
          }
        }

        &:not(:last-child) {
          margin-right: 19rpx;
        }
      }

      .item-head {
        .name {
          font-size: 26rpx;
          line-height: 34rpx;
          letter-spacing: 0;
          color: #1083fd;
        }

        margin-bottom: 42rpx;
      }

      .detail {
        .detail-item {
          display: flex;
          align-content: center;
        }
      }
    }

  }
}

</style>