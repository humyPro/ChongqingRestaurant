<template>
  <view class="map-container" v-show="show">
    <map :longitude="longitude" :latitude="latitude" style="width: 100%;height:100%">
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
    </map>
  </view>
</template>
<script>

export default {
  name: 'RestaurantMap',
  components: {},
  props: {
    filterOption: {
      type: Array,
      default: []
    },
    show: Boolean
  },
  data() {
    return {
      longitude: undefined,
      latitude: undefined,
      filter: {
        enStatus: undefined
      }
    }
  },
  mounted() {
    const _this = this
    wx.getLocation({
      success(res) {
        _this.longitude = res.longitude
        _this.latitude = res.latitude
        console.log("获取地址成功：", res)
      }
    })
  },
  methods: {
    hideMap() {
      this.$emit("update:show",false)
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