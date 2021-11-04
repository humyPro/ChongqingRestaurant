<template>
  <view class="map-container" v-show="show">
    <map :longitude="longitude"
         :latitude="latitude"
         style="width: 100%;height:100%"
         layer-style="1"
         :subkey="subKey"
         :polygons="polygons"
         :max-scale="15" 
         :min-scale="10"
         :markers="markers"
         @markertap="bindMarkerTap"
    >
      <view class="filter">
        <view class="filter-status">
          <u-dropdown class="drop-down" :showMask="false" :title-size="26" :height="64">
            <u-dropdown-item v-model="filter.enStatus" title="企业状态" :options="filterOption">
            </u-dropdown-item>
          </u-dropdown>
        </view>
        <view class="filter-search">
          <input placeholder="请输入企业名称查询" placeholder-style="font-size:26rpx;"/>
          <view class="icons">
            <view class="item">
              <u-icon name="search" color="#888888"/>
            </view>
            <view class="item" @click="hideMap">
              <u-icon name="list-dot" color="#888888"/>
            </view>
          </view>
        </view>
      </view>

      <view class="device-card" v-show="showDeviceCard">
        <RestaurantDeviceBigCard title-color="blank" />
      </view>
    </map>
  </view>
</template>
<script>
import config from '../../config/appConfig'
import {searchDistrict} from "../../api";
import RestaurantDeviceBigCard from "../restaurantDeviceBigCard";
export default {
  name: 'RestaurantMap',
  components: {RestaurantDeviceBigCard},
  props: {
    filterOption: {
      type: Array,
      default: []
    },
    show: Boolean
  },
  data() {
    return {
      subKey: config.TX_MAP_KEY,
      longitude: undefined,
      latitude: undefined,
      showDeviceCard: false,
      currentMarkerId: undefined,
      filter: {
        enStatus: undefined
      },
      polygons: [
        {
          points:[],
          // fillColor: "#ffffff02",
          strokeColor: "#1184ff",
          strokeWidth: 2,
          zIndex: 1
        }
      ],
      markers:[
        {
          id: 1,
          //29.560124,106.554745
          latitude:29.560124,
          longitude:106.554745,
          iconPath:"/static/icon/marker-normal.png",
          width:'71px',
          height:'71px'
        },
        {
          id: 2,
          //29.554748,106.570826
          latitude:29.554748,
          longitude:106.570826,
          iconPath:"/static/icon/marker-off.png",
          width:'71px',
          height:'71px'
        }
      ]
    }
  },
  mounted() {
    let location = uni.getStorageSync("location")
    if (!location) {
      searchDistrict("500103").then(res => {
        location = res.result[0][0]
        uni.setStorageSync("location", location)
      })
    }
    const pgArr = location.polygon[0]
    const resArr = []
    for (let i = 0; i < pgArr.length / 2; i++) {
      resArr.push({
        longitude: pgArr[i*2],
        latitude: pgArr[i*2 + 1]
      })
    }

    this.polygons[0].points = resArr
    this.longitude = location.location.lng
    this.latitude = location.location.lat
  },
  methods: {
    hideMap() {
      this.$emit("update:show",false)
    },
    bindMarkerTap(e){
      this.currentMarkerId = e.markerId
      this.showDeviceCard = true
    }
    
  }
}
</script>
<style scoped lang="scss">
.map-container {
  height: 100%;
  width: 100%;
}

.filter {
  display: flex;
  justify-content: space-between;
  margin: 22rpx 24rpx 34rpx 24rpx;
  height: 64rpx;

  &.on-page {
    width: 100%;
  }

  .filter-status {
    width: 230rpx;
    background-color: #FFFFFF;
    box-shadow: 0 5rpx 10rpx 0 rgba(106, 106, 106, 0.29);
    border-radius: 6rpx;
    margin-right: 22rpx;
  }

  .filter-search {
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 5rpx 10rpx 0 rgba(106, 106, 106, 0.29);
    border-radius: 6rpx;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 0 15rpx 0 26rpx;

    .icons {
      display: flex;
      align-content: center;

      .item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-right: 17rpx;
        }
      }
    }

    input {
      height: 100%;
    }
  }
}

.device-card {
  position: absolute;
  margin-top: 100%;
  margin-left: calc((100vw - 702rpx)/2);
  bottom: 32rpx;
}


.list-container {
  width: 100vw;
  height: 100%;

  .head {
    background-color: #1083fd;
    display: flex;
    justify-content: space-between;
  }

  .content {
    background-color: #f0f4f8;
    padding: 30rpx 24rpx 0 24rpx;
    height: 100%;

    .card-content {
    }

    .tips {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;

      font-size: 24rpx;
      color: #262626;
      margin-left: 14rpx;
      margin-right: 8rpx;
    }
  }
}
</style>