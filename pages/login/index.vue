<template>
  <view class="page">
    <view class='content'>
      <image :src="logo" class="logo" mode="widthFix"/>
      <view class="input-wrapper" ref="inputpanel">
        <view class="row">
          <label class="label">账号</label>
          <input class="value" v-model="account" placeholder="请输入账号" maxlength="64" />
        </view>
        <view class="row">
          <label class="label">密码</label>
          <input class="value" v-model="password" placeholder="请输入密码" maxlength="64" :password="hidePassword" />
        </view>
      </view>
      <view class="btns-row">
        <view class="space"></view>
        <button class="btn" @click="btnClickedForgetPwd" plain="true">忘记密码</button>
        <button class="btn" @click="btnClickedLoginBySMS" plain="true">短信登录</button>
      </view>
      <button class="login-btn" :loading="loading" @click="btnClickedLogin" type="primary">登录</button>
    </view>
  </view>
</template>

<script>
  import Logo from '@/static/logo.png';
  import md5 from "md5-node";
	export default {
    data() {
      return {
        logo: Logo,
        hidePassword: true,
        loading: false,

        account: '',
        password: ''
      }
    },
		onLoad() {

		},
		methods: {
      btnClickedForgetPwd() {        
      },
      btnClickedLoginBySMS() {        
      },
      btnClickedLogin() {
        if (this.account && this.password) {
          const passwordMd5 = md5(this.password);
          this.loading = true;
          this.request({
            url: this.api.Account.LOGIN,
            method: 'POST',
            data: {
              username: this.account,
              password: passwordMd5
            }
          }).then(res => {
            const userInfo = getApp().globalData.userInfo;
            userInfo.username = this.account;
            userInfo.token = res.token;
            userInfo.info = res;
            userInfo.saveInfo();
            const pages = getCurrentPages();
            if (pages.length > 1) {
              let delta = 0;
              for (let i = pages.length - 2; i >= 0; i--) {
                delta = delta + 1;
                const prevPage = pages[i];
                const fullpath = prevPage.$page && prevPage.$page.fullPath || '';
                if (fullpath.indexOf('pages/login/index') === -1) {
                  uni.$emit('refresh');
                  uni.navigateBack({delta});
                  return;
                }
              }
            }
            uni.switchTab({
              url: '/pages/index/index'
            });
          }, err => {
            if (err && err.errmsg) {
              uni.showToast({
                title: err.errmsg,
                icon: 'none'
              });
            }
            this.loading = false;
          });
        } else {
          let msg = '请输入';
          if (!this.account) {
            msg += '账号';
          } else {
            msg += '密码';
          }
          uni.showToast({
            title: msg,
            icon: 'none'
          });
        }
      }
		}
	}
</script>

<style lang='scss' scoped>
  .page {
    background-color: white;
    width: 100vw;
    height: 100vh;
  }
  .content {
    text-align: center;
    top: 15%;
    position: absolute;
    width: 100%;
    .logo {
      width: 240rpx;
    }
    .input-wrapper {
      margin-top: 100rpx;
      .row {
        display: flex;
        font-size: 28rpx;
        height: 88rpx;
        line-height: 88rpx;
        text-align: left;
        border-bottom: solid 1px $uni-border-separator;
        padding: 0 30rpx;
        .label {
          height: 100%;
          width: fit-content;
          padding-right: 30rpx;
          color: $uni-text-color;
        }
        .value {
          font-size: 28rpx;
          height: 100%;
          flex: 1;
        }
      }
    }
    .btns-row {
      height: 88rpx;
      display: flex;
      align-content: center;
      flex-direction: row;
      .space {
        flex: 1;
      }
      .btn {
        border: none;
        font-size: 24rpx;
        margin: auto 0;
        padding: 0 30rpx 0 0;        
      }
    }
    .login-btn {
      font-size: 32rpx;
      margin: 0 30rpx;
    }
  }
</style>
