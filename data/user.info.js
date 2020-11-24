
class UserInfo {
  constructor() {
    this.loadInfo();
    // 获取设备信息
    uni.getSystemInfo({
      success: res => {
        const deviceInfo = {...res};
        delete deviceInfo.errMsg;
        this.deviceInfo = deviceInfo;
      },
      fail: err => {
      }
    })
  }
  loadInfo = () => {
    try {
      let value = uni.getStorageSync('user_token');
      if (value) {
        this.token = value;
      }
      value = uni.getStorageSync('username');
      if (value) {
        this.username = value;
      }
    } catch (e) {
      console.log('loadToken error');
    }
  }
  saveInfo = () => {
    try {
      uni.setStorageSync('username', this.username);
      uni.setStorageSync('user_token', this.token);
    } catch (e) {
      console.log('saveInfo error');
    }
  }
}
export default (() => {
  const userInfo = new UserInfo();
  return userInfo;
})();