<template>
  <view class='content'>
    <view class="section">
      <view class="item-row">
        <text class="name">设置头像</text>
        <image class="figure" mode="widthFix" :src="userIcon" />
        <image class="arrow" mode="widthFix" src="@/static/common/arrow-right-gray.png" />
        <view class="separator-line" />
      </view>
      <view class="item-row">
        <text class="name">用户名</text>
        <text class="value">{{username}}</text>
        <image class="arrow" mode="widthFix" src="@/static/common/arrow-right-gray.png" />
        <view class="separator-line" />
      </view>
      <view class="item-row">
        <text class="name">性别</text>
        <text class="value">男</text>
        <image class="arrow" mode="widthFix" src="@/static/common/arrow-right-gray.png" />
        <view class="separator-line" />
      </view>
    </view>
    <view class="section">
      <view class="item-row">
        <text class="name">修改密码</text>
        <image class="arrow" mode="widthFix" src="@/static/common/arrow-right-gray.png" />
        <view class="separator-line" />
      </view>
    </view>
    <view class="section">
      <view class="item-row">
        <text class="name">更好手机号</text>
        <text class="value">15000000001</text>
        <image class="arrow" mode="widthFix" src="@/static/common/arrow-right-gray.png" />
        <view class="separator-line" />
      </view>
    </view>
  </view>
</template>
<script>
  import UserFigureIcon from "@/static/figure.png"
  export default {
    data() {
      return {
        userIcon: UserFigureIcon,
        username: ''
      }
    },
    onLoad() {
      const app = getApp();
      const userInfo = app.globalData.userInfo;
      this.username = userInfo.username || userInfo.info.username;
    },
    methods: {
      
    }
  }
</script>
<style lang='scss' scoped>
.content {
  .section {
    margin-bottom: 20rpx;
    .item-row {
      display: flex;
      height: 88rpx;
      line-height: 88rpx;
      color: $uni-text-color;
      background-color: white;
      .name {
        flex: 1;
        font-size: $uni-font-size-base;
        margin-left: 30rpx;
      }
      .value {
        font-size: $uni-font-size-sm;
        color: $uni-text-color-grey;
      }
      .figure {
        margin: auto 0;
        width: 70rpx;
      }
      .arrow {
        width: 44rpx;
        margin: auto 0;
      }
      position: relative;
      .separator-line {
        background-color: $uni-border-separator;
        height: 1px;
        bottom: 0;
        position: absolute;
        margin-left: 30rpx;
        width: 100%;
      }
    }
  }
}
</style>