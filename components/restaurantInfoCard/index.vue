<template>
  <view class="restaurant-infoCard">
    <view class="head">
      <view class="name bold">老妈兔头</view>
      <view><image class="right-icon" src="/static/icon/right.png"></image></view>
    </view>
    <view class="content">
      <view class="item">
        <view class="label">生产状态:</view>
        <view class="value error">异常</view>
      </view>
      <view class="item">
        <view class="label">在线监控:</view>
        <view class="value error">未安装</view>
      </view>
      <view class="item">
        <view class="label">联系人:</view>
        <view class="value ">吴向东</view>
      </view>
      <view class="item">
        <view class="label">联系电话:</view>
        <view class="value ">15883627056</view>
      </view>
    </view>
    <view class="address">
      <u-icon name="map" color="#05a773"/>
      <text style="margin-left:9rpx">重庆市渝中区大坪长江路174号龙湖时代天街C馆大坪店</text>
    </view>
  </view>
</template>
<script>
export default {
  name:"RestaurantInfoCard",
  data(){
    return {}
  }
}

</script>
<style scoped lang="scss">

.restaurant-infoCard {
  background-color: #FFFFFF;
  box-shadow: 0 5rpx 10rpx 0 rgba(196, 196, 196, 0.16);
  border-radius: 10rpx;
  padding: 35rpx 27rpx 37rpx 32rpx;

  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16rpx;
    border-bottom: 2rpx solid #e9edf1;

    .name {
      font-size: 30rpx;
      line-height: 30rpx;
      letter-spacing: 0;
      color: #262626;
      margin-bottom: 16rpx;
    }

    .right-icon {
      height: 16rpx;
      width: 16rpx;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      min-width: 300rpx;
      max-width: 50%;
      display: flex;
      margin-top: 20rpx;

      .label {
        min-width: 130rpx;
      }
      .value {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }

  .address {
    margin-top: 19rpx;
  }
}

</style>