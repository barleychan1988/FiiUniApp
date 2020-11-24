let isDev = true;
isDev = false;

export const ServiceUrl = isDev ? 'http://127.0.0.1:8360/api/' : 'http://106.14.14.130:9500/api/';
export default {
  Account: {
    LOGIN: 'auth/login',
    GET_USER_INFO: 'auth/getUserInfo',
    PASSWORD_MODIFY: 'auth/modifyPassword'
  },
  HeNB: {
    LIST: 'henb/list',
    DETAIL: 'henb/detail',
    SET_SELECT: 'henb/setSelected'
  },
  SiriusFly: {
    LIST: 'siriusFly/list',
    DETAIL: 'siriusFly/detail'
  }
}
