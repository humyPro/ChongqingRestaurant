<template>
  <view class="restaurant-card" @click="handleClick">
    <view class="head">
      <view class="name bold">老妈兔头</view>
      <view class="right">
        <view class="head-tips">
          <image src="/static/icon/dot-green.png" style="height: 10rpx;width: 10rpx"></image>已安装在线监控
        </view>
        <image class="right-icon" src="/static/icon/right.png"></image>
      </view>
    </view>
    <view class="detail">
      <view class="detail-item">
        <view>
          <image class="detail-icon" src="/static/icon/leaf-tiny.png"></image>
        </view>
        <view class="device-status">
          <text>当前浓度</text>
          <text class="status">35</text><text class="unit">&nbsp;mg/m³</text>
        </view>
      </view>
      <view class="detail-item right">
        <view class="device-status">
          <text>超标情况</text>
          <text class="status green bold">正常</text>
        </view>
      </view>
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
      <view class="detail-item right">
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
  },
  methods:{
    handleClick(){
      wx.navigateTo({url:"/pages/official/enterpriseDetail"})
    }
  }
}
</script>
<style scoped lang="scss">
.restaurant-card {
  padding: 24rpx 22rpx 29rpx 25rpx;
  box-shadow: 0 2rpx 6rpx 0 rgba(21, 21, 21, 0.08);
  border-radius: 10rpx;
  border: solid 1rpx #e9edf1;

  background-color: #FFFFFF;

  .detail {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    border-bottom: 2rpx dashed #e9edf1;

    .head-tips {
      font-size: 22rpx;
      color: #828a93;
      display: flex;
      align-items: center;

      image {
        margin-right: 8rpx;
      }
    }
    
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .name {
      font-size: 26rpx;
      line-height: 34rpx;
      letter-spacing: 0;
      color: #1083fd;
      border-bottom: 15rpx;
    }

    .right-icon {
      height: 16rpx;
      width: 16rpx;
      margin-left: 21rpx;
    }
  }

  .detail {
    .detail-item {
      display: flex;
      align-content: center;
      flex-basis: 50%;

      &.right{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>