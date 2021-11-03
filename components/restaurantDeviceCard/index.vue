<template>
  <view class="restaurant-card">
    <view class="head">
      <view class="name bold">老妈兔头</view>
      <view><image class="right-icon" src="/static/icon/right.png"></image></view>
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

</template>
<script>
export default {
  name:'RestaurantDeviceCard',
  data(){
    return {}
  }
}
</script>
<style scoped lang="scss">
.restaurant-card {
  padding: 24rpx 22rpx 29rpx 25rpx;
  box-shadow: 0 2rpx 6rpx 0 rgba(21, 21, 21, 0.08);
  border-radius: 10rpx;
  border: solid 1rpx #e9edf1;

  margin-bottom: 24rpx;
  background-color: #FFFFFF;

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
      margin-left: 10rpx;

      &.off {
        color: #fd0909;
      }
    }

    &:not(:last-child) {
      margin-right: 19rpx;
    }
  }

  .head {
    margin-bottom: 42rpx;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 26rpx;
      line-height: 34rpx;
      letter-spacing: 0;
      color: #1083fd;
    }

    .right-icon {
      height: 16rpx;
      width: 16rpx;
    }
  }

  .detail {
    .detail-item {
      display: flex;
      align-content: center;
      flex-basis: 50%;

      &:not(:last-child){
        margin-right: 39rpx;
      }
    }
  }
}
</style>