<template>
  <view class='content'>
    <view class="item-row">
      <text class="label">原始密码</text>
      <input class="value" placeholder="6-20个字符" :password="isOldPwdHidden" v-model="oldpassword" />
      <password-visible-switch @toogleVisible="handleOldPwdVisible"/>
    </view>
    <view class="item-row">
      <text class="label">新密码</text>
      <input class="value" placeholder="6-20个字符" :password="isNewPwdHidden" v-model="newpassword" />
      <password-visible-switch @toogleVisible="handleNewPwdVisible" />
    </view>
    <view class="item-row">
      <text class="label">确认密码</text>
      <input class="value" placeholder="6-20个字符" :password="isConfirmPwdHidden" v-model="confirmpassword" />
      <password-visible-switch @toogleVisible="handleConfirmPwdVisible"/>
    </view>
    <view class="row-btn">
      <button class="submit" @click="clickedOk" type="primary">提交</button>
    </view>
  </view>
</template>
<script>
  import passwordVisibleSwitch from "@/components/custom/accessoryview/password.switch";
  import md5 from "md5-node";
  export default {
    components: {
      passwordVisibleSwitch
    },
    data() {
      return {
        isOldPwdHidden: true,
        isNewPwdHidden: true,
        isConfirmPwdHidden: true,
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
      }
    },
    methods: {
      handleOldPwdVisible(isVisible) {
        this.isOldPwdHidden = !isVisible;
      },
      handleNewPwdVisible(isVisible) {
        this.isNewPwdHidden = !isVisible;
      },
      handleConfirmPwdVisible(isVisible) {
        this.isConfirmPwdHidden = !isVisible;
      },
      clickedOk() {
        if (!this.oldpassword) {
          uni.showToast({title: '请输入原密码', icon: 'none'});
        } else if (!this.newpassword) {
          uni.showToast({title: '请输入新密码', icon: 'none'});
        } else if (!this.confirmpassword) {
          uni.showToast({title: '请输入确认密码', icon: 'none'});
        } else if (this.newpassword != this.confirmpassword) {
          uni.showToast({title: '新密码和确认密码不一致', icon: 'none'});
        } else if (this.oldpassword == this.newpassword) {
          uni.showToast({title: '新密码和原密码一致', icon: 'none'});
        } else {
          const oldPassword = md5(this.oldpassword);
          const newPassword = md5(this.newpassword);
          this.request({
            url: this.api.Account.PASSWORD_MODIFY,
            method: 'POST',
            data: {oldPassword,newPassword}
          }).then(res => {
            uni.showToast({title: '密码修改成功'});
            setTimeout(() => {
              uni.navigateBack({animationDuration: 500});              
            }, 1500);
          }, err => {
            const msg = err && err.errmsg;
            uni.showToast({title: msg, icon: 'none'})
          });
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .item-row {
      background-color: white;
      display: flex;
      height: 88rpx;
      line-height: 88rpx;
      font-size: $uni-font-size-base;
      border-bottom: solid 1px $uni-border-separator;
      .label {
        margin: 0 30rpx;
        min-width: 120rpx;
      }
      .value {
        flex: 1;
        margin: auto 0;
      }
    }
    .row-btn {
      margin: 60rpx 30rpx;
      .submit {
        font-size: $uni-font-size-lg;
      }
    }
  }
</style>