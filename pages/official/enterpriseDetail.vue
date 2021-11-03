<template>
  <view class="enterprise-detail">
    <view class="device-detail">
      <view class="title bold">
        设备实时工况
      </view>
      <RestaurantDeviceCard/>
    </view>
  </view>
</template>
<script>

import RestaurantDeviceCard from "../../components/restaurantDeviceCard";
export default {
  name:"EnterpriseDetail",
  components: {RestaurantDeviceCard}
}

</script>
<style scoped lang="scss">

.enterprise-detail {
  width: 100vw;
  min-height: 100vh;

  .device-detail {
    padding: 28rpx 26rpx 36rpx 26rpx;
    background-color: #ffffff;
    border-radius: 10rpx;

    .title {
      font-size: 28rpx;
      color: #262626;
      margin-bottom: 28rpx;
    }
  }
}

</style>