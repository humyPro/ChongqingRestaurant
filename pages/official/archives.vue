<template>
<view class="archives-container">
  <view class="head">
    <view class="filter">
      <view class="filter-status">
        <u-dropdown class="drop-down" :showMask="false" :title-size="26" :height="64">
          <u-dropdown-item v-model="filter.enStatus" title="企业状态" :options="enStatusOption">
          </u-dropdown-item>
        </u-dropdown>
      </view>
      <view class="filter-status">
        <u-dropdown class="drop-down" :showMask="false" :title-size="26" :height="64">
          <u-dropdown-item v-model="filter.monitorStatus" title="监控状态" :options="monitorStatus">
          </u-dropdown-item>
        </u-dropdown>
      </view>
      <view class="filter-search">
        <input placeholder="输入关键字查询" placeholder-style="font-size:26rpx;"/>
        <view class="icons">
          <view class="item">
            <u-icon name="search" color="#888888"/>
          </view>
        </view>
      </view>
    </view>
  </view>
  <scroll-view class="auto-height" scroll-y="true">
    <view class="card-container">
      <view class="tips">共24家</view>
      <view class="card-view">
        <view>
          <RestaurantInfoCard/>
        </view>
        <view>
          <RestaurantInfoCard/>
        </view>
        <view>
          <RestaurantInfoCard/>
        </view>
        <view>
          <RestaurantInfoCard/>
        </view>
      </view>
    </view>
  </scroll-view>
</view>
</template>
<script>
import RestaurantInfoCard from '../../components/restaurantInfoCard'
export default {
  name:"Archives",
  components: {
    RestaurantInfoCard
  },
  data(){
    return {
      filter:{
        enStatus:undefined,
        monitorStatus:undefined,
      },
      enStatusOption:[
        {
          label: '正常',
          value: 1,
        },
        {
          label: '异常',
          value: 2,
        }
      ],
      monitorStatus:[
        {
          label: '正常',
          value: 1,
        },
        {
          label: '异常',
          value: 2,
        }
      ]
      }
    }
  }
</script>
<style scoped lang="scss">
.archives-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .head {
    flex: 0 0 auto;
  }

  .auto-height {
    flex-grow: 1;
    height: 1px;
  }

  .card-container {
    background-color: #f0f4f8;
    width: 100%;
    padding: 30rpx 24rpx 30rpx 24rpx;

    .tips{
      font-size: 24rpx;
      color: #262626;
      margin-bottom: 16rpx;
      margin-left: 14rpx;
    }

     .card-view>view:not(:last-child){
       margin-bottom: 30rpx;
     }
  }
}
.head {
  background-color: #1083fd;
  display: flex;
  justify-content: space-between;
}

.filter {
  display: flex;
  justify-content: space-between;
  margin: 22rpx 24rpx 34rpx 24rpx;
  height: 64rpx;

  .filter-status {
    width: 230rpx;
    background-color: #FFFFFF;
    box-shadow: 0 5rpx 10rpx 0 rgba(106, 106, 106, 0.29);
    border-radius: 6rpx;
    margin-right: 22rpx;
  }

  .filter-search {
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
        margin-right: 17rpx;
      }
    }

    input {
      height: 100%;
    }
  }
}
</style>