<template>
  <view class='content'>
    <image src="/static/logo.png" class="logo" mode="widthFix"/>
    <text class="version">1.0.0</text>
    <view class="list">
      <view class="row">
        <text class="label">进入官网</text>
        <text class="value"></text>
        <gray-right-arrow-view />
      </view>
      <view class="row">
        <text class="label">版本更新</text>
        <text class="value"></text>
        <gray-right-arrow-view />
      </view>
    </view>
  </view>
</template>
<script>
  import grayRightArrowView from "@/components/custom/accessoryview/gray.arrow";
  export default {
    components: {
      grayRightArrowView
    },
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
    text-align: center;
    padding-top: 60rpx;
    .logo {
      width: 240rpx;
    }
    .version {
      display: block;
      margin-bottom: 30rpx;
    }
    .list {
      background-color: white;
      .row {
        height: 88rpx;
        line-height: 88rpx;
        display: flex;
        border-bottom: solid 1px $uni-border-separator;
        .label {
          color: $uni-text-color;
          padding-left: 30rpx;
        }
        .value {
          flex: 1;
        }
      }
    }
  }
</style>