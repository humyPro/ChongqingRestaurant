<template>
  <view class="map-container" >
    <map :longitude="longitude" :latitude="latitude" style="width: 100%;height:100%"> </map>
    <cover-view>
      <cover-view></cover-view>
    </cover-view>
  </view>
</template>
<script>
export default {
  name:'RestaurantMap',
  data(){
    return {
      longitude: undefined,
      latitude: undefined
    }
  },
  mounted() {
    const _this = this
    wx.getLocation({
      success(res){
        _this.longitude = res.longitude
        _this.latitude = res.latitude
      }
    })
  },
}
</script>
<style scoped lang="scss">
.map-container {
  height: 100%;
  width: 100%;
}
</style>