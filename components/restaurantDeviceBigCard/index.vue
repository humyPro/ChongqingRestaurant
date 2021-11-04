<template>
  <view class="restaurant-card" @click="handleClick">
    <view class="head">
      <view :class="`name bol`" :style="{color: titleColor}">老妈兔头</view>
      <view class="right">
        <image class="right-icon" src="/static/icon/right.png"></image>
      </view>
    </view>
    <view class="detail">
      <view class="detail-item">
        <view class="icon">
          <image class="detail-icon" src="/static/icon/water.png"></image>
        </view>
        <view class="device-status">
          <text>当前浓度</text>
          <text class="status">35</text><text class="unit">&nbsp;mg/m³</text>
        </view>
        <view class="device-status">
          <text>超标情况</text>
          <text class="status">正常</text>
        </view>
      </view>
      <view class="detail-item">
        <view  class="icon">
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
        <view  class="icon">
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
  name:'RestaurantDeviceBigCard',
  props:{
    titleColor: {
      type: String,
      default: "#1083fd"
    }
  },
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
  padding: 27rpx 26rpx 30rpx 26rpx;
  box-shadow: 0 2rpx 6rpx 0 rgba(21, 21, 21, 0.08);
  border-radius: 10rpx;
  border: solid 1rpx #e9edf1;

  background-color: #FFFFFF;

  width: 702rpx;

  .head {
    margin-bottom: 28rpx;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 30rpx;
    }

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
    display: flex;
    justify-content: space-between;
    padding: 33rpx 30rpx 29rpx 31rpx;

    box-shadow: 0 2rpx 6rpx 0 rgba(21, 21, 21, 0.08);
    border-radius: 10rpx;
    border: solid 1rpx #e9edf1;
  }

  .detail-icon {
    height:63rpx;
    width: 63rpx;
    margin-bottom: 22rpx;
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

    .unit {
      font-size: 14rpx;
      
    }

    &:not(:last-child) {
      margin-right: 19rpx;
    }
  }

  .detail {
    .detail-item {
      display: flex;
      align-content: center;
      flex-direction: column;

      .icon {
        align-self: center;
      }

      &.right{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>