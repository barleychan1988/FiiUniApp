<template>
  <view class='content'>
    <view class="section">
      <view class="item-row">
        <text class="name">设置头像</text>
        <image class="figure" mode="widthFix" :src="userIcon" />
        <gray-right-arrow-view />
        <view class="separator-line" />
      </view>
      <view class="item-row" @click="clickedSettingUsername">
        <text class="name">用户名</text>
        <text class="value">{{username}}</text>
        <gray-right-arrow-view />
        <view class="separator-line" />
      </view>
      <view class="item-row" @click="clickedGenderChoose">
        <text class="name">性别</text>
        <text class="value">{{gender}}</text>
        <gray-right-arrow-view />
        <view class="separator-line" />
      </view>
    </view>
    <view class="section">
      <view class="item-row" @click="clickedModifyPassword">
        <text class="name">修改密码</text>
        <gray-right-arrow-view />
        <view class="separator-line" />
      </view>
    </view>
    <view class="section">
      <view class="item-row" @click="clickedModifyMobile">
        <text class="name">更好手机号</text>
        <text class="value">15000000001</text>
        <gray-right-arrow-view />
        <view class="separator-line" />
      </view>
    </view>
    <uni-popup ref="popupgender" type="bottom">
      <button class="gender-btn btn-man" @click="clickedChooseMan" type="default">男</button>
      <button class="gender-btn btn-woman" @click="clickedChooseWoman" type="default">女</button>
      <button class="gender-btn btn-cancel" @click="clickedCancelGenderChoose" type="default">取消</button>
    </uni-popup>
    <uni-popup ref="popupusername" type="dialog">
      <uni-popup-dialog mode="input" title="通知" content="欢迎使用 uni-popup!" :before-close="true" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>
<script>
  import UserFigureIcon from "@/static/figure.png"
  import grayRightArrowView from "@/components/custom/accessoryview/gray.arrow";
  import uniPopup from '@/components/uni-popup/uni-popup.vue'
  import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
  export default {
    components: {
      grayRightArrowView,
      uniPopup,
      uniPopupDialog
    },
    data() {
      return {
        userIcon: UserFigureIcon,
        username: '',
        gender: '男'
      }
    },
    onLoad() {
      const app = getApp();
      const userInfo = app.globalData.userInfo;
      this.username = userInfo.username || userInfo.info.username;
    },
    methods: {
      clickedModifyPassword() {
        uni.navigateTo({url: '/pages/account/password.modify'});
      },
      clickedModifyMobile() {
        uni.navigateTo({url: '/pages/account/mobile.modify'});
      },
      clickedGenderChoose() {
        this.$refs.popupgender.open();
      },
      clickedCancelGenderChoose() {
        this.$refs.popupgender.close();
      },
      clickedChooseWoman() {
        this.gender = '女';
        this.$refs.popupgender.close();
      },
      clickedChooseMan() {
        this.gender = '男';
        this.$refs.popupgender.close();
      },

      clickedSettingUsername() {
        this.$refs.popupusername.open();        
      }
    }
  }
</script>
<style lang='scss' scoped>
.content {
  overflow-x: hidden;
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
  .gender-btn {
    height: 88rpx;
    margin: 0 30rpx;
  }
  .btn-cancel {
    margin-bottom: 20rpx;
    margin-top: 20rpx;
  }
  .btn-man {
    border-radius: 10rpx 10rpx 0 0;
  }
  .btn-woman {
    border-radius: 0 0 10rpx 10rpx;
  }
}
</style>