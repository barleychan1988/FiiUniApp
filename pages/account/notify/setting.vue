<template>
  <view class='content'>
    <text class="header-title">消息提醒</text>
    <view class="row">
      <text class="name">推送通知</text>
    </view>
    <text class="header-title">提示：防蹭网等消息提醒的开关，请在对应的功能页面设置</text>
    <view class="row">
      <image class="icon" mode="widthFix" src="/static/common/icon_yes.png" />
      <text class="name">全部消息标记为已读</text>
      <view class="separator-line" />
    </view>
    <view class="row">
      <image class="icon" mode="widthFix" src="/static/common/icon_no.png" />
      <text class="name">删除所有消息记录</text>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .header-title {
      padding-left: 30rpx;
      color: $uni-text-color-grey;
      font-size: $uni-font-size-base;
      margin: 10rpx 0;
    }
    .row {
      height: 88rpx;
      line-height: 88rpx;
      padding-left: 30rpx;
      background-color: white;
      .name {
        font-size: $uni-font-size-base; 
        color: $uni-text-color;
      }
      .icon {
        width: 30rpx;
        margin-right: 30rpx;
        vertical-align: middle;
      }
      .separator-line {
        background-color: $uni-border-separator;
        height: 1px;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
      position: relative;
    }
  }
</style>