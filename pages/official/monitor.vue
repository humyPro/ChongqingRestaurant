<template>
  <view class="monitor-container">
    <view class="map" v-show="showMap">
      <RestaurantMap :show.sync="showMap" :filter-option="filterOption"></RestaurantMap>
    </view>
    <view class="list-container" v-show="!showMap">
      <view class="head">
        <view class="filter on-page">
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
              <view class="item" @click="showMap = true">
                <image src="/static/icon/map-btn.png" style="height: 28rpx;width: 28rpx"></image>
              </view>
            </view>
          </view>
        </view>
      </view>
      <scroll-view class="auto-height" scroll-y="true">
        <view class="content">
          <view class="tips">
            <view>共24家</view>
            <view>更新时间: {{ updateTime }}</view>
          </view>
          <view class="card-content">
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>
            <view>
              <RestaurantDeviceCard/>
            </view>

          </view>
        </view>
      </scroll-view>
    </view>
  </view>

</template>
<script>
import RestaurantMap from "../../components/restaurantMap"
import RestaurantDeviceCard from "../../components/restaurantDeviceCard";

export default {
  components: {
    RestaurantMap,
    RestaurantDeviceCard
  },
  data() {
    return {
      showMap: true,
      updateTime: '2021-10-6 10:31',
      filter: {
        enStatus: undefined
      },
      filterOption: [
        {
          label: '正常',
          value: 1,
        },
        {
          label: '异常',
          value: 2,
        }
      ],
    }
  },
  methods: {
  },
  onLoad() {
    
  }
}
</script>
<style scoped lang="scss">
.monitor-container {
  width: 100vw;

  .map {
    height: 100vh;
  }
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

.list-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .head {
    background-color: #1083fd;
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
  }

  .auto-height {
    flex-grow: 1;
    height: 1px;
  }

  .content {
    background-color: #f0f4f8;
    padding: 30rpx 24rpx 0 24rpx;
    height: 100%;

    .card-content>view {
      margin-bottom: 24rpx;
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