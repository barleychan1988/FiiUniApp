import {ServiceUrl} from "../service/api";

export default params => {
  uni.showLoading({
    title: '加载中'
  });
  if (params.url && params.url.indexOf('http') == -1) {
    params.url = ServiceUrl + params.url;
  }
  const app = getApp();
  const token = app.globalData && app.globalData.userInfo && app.globalData.userInfo.token;
  params.header = {
    ...params.header,
    token
  }
  return new Promise((resolve, reject) => {
    uni.request({
      ...params,
      success(res) {
        if (res.statusCode == 200 && res.data) {
          res = res.data;
          if (res.errno == 0 && res.data) {
            const result = res.data;
            resolve(result);
          } else {
            if (res.errno == 704) {
              app.globalData.utils.navigateToLogin();
            }
            reject(res);
          }
        }
      },
      fail(err) {
        reject(err);
      },
      complete() {
        uni.hideLoading();
      }
    });
    // wx.request({
    //   ...params,
    //   success(res) {
    //     if (res.statusCode == 200 && res.data) {
    //       res = res.data;
    //       if (res.errno == 0 && res.data) {
    //         const result = res.data;
    //         resolve(result);
    //       } else {
    //         reject(res);
    //       }
    //     }
    //   },
    //   fail(err) {
    //     reject(err);
    //   },
    //   complete() {
    //     uni.hideLoading();
    //   }
    // });
  });
}