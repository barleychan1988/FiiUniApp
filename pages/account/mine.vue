<template>
  <view class='content'>
    <view class="header-wrapper" @click="clickedUserInfo">
      <image class="user-figure" mode="widthFix" :src="userIcon" />
      <text class="name">{{username}}</text>
      <white-right-arrow-view />
    </view>
    <view class="list">
      <view class="section">
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/order.png"/>
          <text class="content">我的订单</text>
          <text class="badge">0</text>
          <gray-right-arrow-view />
        </view>
      </view>
      <view class="section">
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/tongzhi.png"/>
          <text class="content">通知设置</text>
          <gray-right-arrow-view />
          <view class="separator-line" />
        </view>
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/msg.png"/>
          <text class="content">消息中心</text>
          <gray-right-arrow-view />
        </view>
      </view>
      <view class="section">
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/phone.png"/>
          <text class="content">宽带运营商通讯录</text>
          <gray-right-arrow-view />
          <view class="separator-line" />
        </view>
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/zhaohuimima.png"/>
          <text class="content">找回宽带账号</text>
          <gray-right-arrow-view />
        </view>
      </view>
      <view class="section">
        <view class="item">
          <image class="icon" mode="widthFix" src="@/static/mine/Wechat.png"/>
          <text class="content">微信客服</text>
          <gray-right-arrow-view />
          <view class="separator-line" />
        </view>
        <view class="item" @click="clickedSuggest">
          <image class="icon" mode="widthFix" src="@/static/mine/suggest.png"/>
          <text class="content">意见反馈</text>
          <gray-right-arrow-view />
        </view>
      </view>
      <view class="section">
        <view class="item" @click="clickedAbout">
          <image class="icon" mode="widthFix" src="@/static/mine/about.png"/>
          <text class="content">关于工业富联</text>
          <gray-right-arrow-view />
        </view>
      </view>
      <view class="section">
        <button class="logout" plain @click="clickedLogout">退出登录</button>
      </view>
    </view>
  </view>
</template>
<script>
  import whiteRightArrowView from "@/components/custom/accessoryview/white.arrow";
  import grayRightArrowView from "@/components/custom/accessoryview/gray.arrow";
  import UserFigureIcon from "@/static/figure.png"
  import whiteRightArrow from "@/static/common/arrow-right-white.png"
  import iconPhone from "@/static/mine/phone.png"
  export default {
    components: {
      whiteRightArrowView,
      grayRightArrowView
    },
    data() {
      return {
        userIcon: UserFigureIcon,
        arrowIcon: whiteRightArrow,
        username: ''
      }
    },
    onLoad() {
      const app = getApp();
      const userInfo = app.globalData.userInfo;
      this.username = userInfo.username || userInfo.info.username;
    },
    methods: {
      clickedLogout() {
        uni.redirectTo({
          url: '/pages/login/index'
        });
      },
      clickedUserInfo() {
        uni.navigateTo({url: '/pages/account/user.info'});
      },
      clickedSuggest() {
        uni.navigateTo({url: '/pages/suggest/add'});
      },
      clickedAbout() {
        uni.navigateTo({url: '/pages/account/about'});
      },
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
  }
  .header-wrapper {
    background-color: $uni-color-primary;
    padding: 60rpx 0;
    display: flex;
    .user-figure {
      width: 120rpx;
      margin-left: 30rpx;
    }
    .name {
      flex: 1;
      margin: auto 0 auto 30rpx;
      color: white;
    }
    .arrow {
      width: 48rpx;
      margin: auto 30rpx auto 0;
    }
  }
  .list {
    .section {
      border-top: solid 1px $uni-border-separator;
      border-bottom: solid 1px $uni-border-separator;
      margin-bottom: 20rpx;
      .item {
        height: 88rpx;
        display: flex;
        padding: 0 0 0 30rpx;
        background-color: white;
        .icon {
          width: 44rpx;
          margin: auto 30rpx auto 0;
        }
        .content {
          flex: 1;
          margin: auto 0;
          color: $uni-text-color;
        }
        .badge {
          margin: auto 0;
          color: $uni-text-color-grey;
        }
        position: relative;
        .separator-line {
          height: 1px;
          background-color: $uni-border-separator;
          bottom: 0;
          left: 104rpx;
          position: absolute;
          width: calc(100% - 44rpx);
        }
      }
      .logout {
        border: none;
        background-color: white;
      }
    }
  }
</style>