<template>
  <view class='content'>
    <view class="tip-top">更换手机后，下次可使用新手机号登录。当前手机号：{{mobile}}</view>
    <view class="input-area">
      <view class="item-row bottom-separator-line">
        <input class="value" placeholder="请输入新手机号码" v-model="newMobile" />
      </view>
      <view class="item-row">
        <input class="value" placeholder="请输入验证码" v-model="vercode" />
        <button class="btn-ver-code" plain @click="clickedObtainSMSCode" :disabled="invalideMobile" >获取验证码</button>
      </view>
      <button class="submit" type="primary" @click="clickedSubmit">下一步</button>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        mobile: '13000000000',
        newMobile: '',
        vercode: ''
      }
    },
    methods: {
      clickedObtainSMSCode() {

      },
      clickedSubmit() {

      }
    },
    computed: {
      invalideMobile: function() {
        if (this.newMobile.length < 11) {
          return true;
        }
        return false;
      }
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .tip-top {
      font-size: $uni-font-size-base;
      color: $uni-text-color-grey;
      padding: 30rpx;
    }
    .input-area {
      .item-row {
        height: 88rpx;
        line-height: 88rpx;
        background-color: white;
        position: relative;
        .value {
          height: 100%;
          font-size: $uni-font-size-base;
          padding-left: 30rpx;
        }
        .btn-ver-code {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 30rpx  ;
          font-size: $uni-font-size-base;
          line-height: $uni-font-size-base;
          padding: 16rpx;
        }
      }
      .bottom-separator-line {
        border-bottom: solid 1px $uni-border-separator;
      }
      .submit {
        margin: 60rpx 30rpx 0;
        
      }
    }
  }
</style>