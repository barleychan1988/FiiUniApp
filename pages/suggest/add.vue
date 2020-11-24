<template>
  <view class='content'>
    <text class="tip">我的建议是</text>
    <editor class="value" placeholder="请输入"></editor>
    <text class="tip">请留下您的联系方式（选填）</text>
    <input class="phone" placeholder="联系方式" v-model="phone"/>
    <button class="submit-btn" @click="clickedSubmit" type="primary">提交</button>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        phone: ''
      }
    },
    methods: {
      clickedSubmit() {

      }
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .tip {
      height: 88rpx;
      line-height: 88rpx;
      padding: 0 30rpx;
      color: $uni-text-color-grey;
      font-size: $uni-font-size-base;
    }
    .value {
      background-color: white;
      padding: 10rpx 30rpx;
      color: $uni-text-color;
      font-size: $uni-font-size-base;
    }
    .phone {
      height: 88rpx;
      line-height: 88rpx;
      color: $uni-text-color;
      font-size: $uni-font-size-base;
      background-color: white;
      padding-left: 30rpx;
    }
    .submit-btn {
      margin: 60rpx 30rpx;
    }
  }
</style>