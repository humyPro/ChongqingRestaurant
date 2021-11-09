<template>
  <view class="base-info section">
    <view class="section-head bold">
      基本信息
    </view>
    <view class="content">
      <view class="line">
        <text>企业名称：</text>
        <text>重庆小龙坎火锅</text>
      </view>
      <view class="line">
        <text>生产状态：</text>
        <text>正常</text>
      </view>
      <view class="line">
        <text>联系人：</text>
        <text>吴小飞</text>
      </view>
      <view class="line">
        <text>联系电话：</text>
        <text>15282250907</text>
      </view>
      <view class="line">
        <text>所属行业：</text>
        <text>餐饮</text>
      </view>
      <view class="line">
        <text>所属区县：</text>
        <text>渝中区</text>
      </view>
      <view class="line">
        <text>详细地址：</text>
        <text>重庆市渝中区解放大道美食街18号</text>
      </view>
      <view class="line">
        <text>经纬度：</text>
        <text>106.551798,29.561125</text>
      </view>
      <view class="line">
        <text>在线监控：</text>
        <text>浓度监控</text>
      </view>
      <view class="line">
        <text>当前浓度：</text>
        <text>35 mg/m³</text>
      </view>
      <view class="line">
        <text>超标情况：</text>
        <text>正常</text>
      </view>
      <view class="line">
        <text>MN码：</text>
        <text>865374059794100</text>
      </view>
      <view class="line">
        <text>净化机清洗周期：</text>
        <text>2个月</text>
      </view>
      <view class="line">
        <text>净化机下一次清洗日期：</text>
        <text>2021-09-29</text>
        <text class="error">（已逾期）</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name:"EnterpriseBaseInfo"
}
</script>
<style scoped lang="scss">
  .base-info {
  background-color: #FFFFFF;

  &.section {
    background-color: #ffffff;
    border-radius: 10rpx;
    width: 100%;
  }
  .content-head {
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-bottom: 44rpx;

    font-size: 26rpx;
    color: #828a93;
  }

  .section-head {
      padding: 37rpx 0 16rpx 31rpx;
      font-size: 28rpx;
      color: #262626;
      border-bottom: 1rpx dashed #e9edf1;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  .content {
    padding: 25rpx 0 35rpx 34rpx;
    font-size: 25rpx;
    color: #7a7a7a;

    .line:not(:last-child) {
      margin-bottom: 22rpx;
    }
  }
}
</style>