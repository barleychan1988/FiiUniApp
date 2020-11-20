class Utils {
  navigateToLogin = () => {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 1];
      const fullpath = prevPage.$page && prevPage.$page.fullPath || '';
      if (fullpath.indexOf('pages/login/index') != -1) {
        return;
      }
    }
    uni.navigateTo({url: '/pages/login/index'});
  }
}
export default (() => {
  const userInfo = new Utils();
  return userInfo;
})();