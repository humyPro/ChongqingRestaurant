<template>
<view class="map-page">
  <RestaurantMap></RestaurantMap>
</view>
</template>
<script>
import RestaurantMap from "../../components/restaurantMap"
export default {
  components:{
    RestaurantMap
  }
}
</script>
<style scoped lang="scss">
.map-page {
  height: 100vh;
  width: 100vw;
}
</style>