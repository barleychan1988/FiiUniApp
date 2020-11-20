import Vue from 'vue'
import App from './App'
import Request from '@/util/request'
import API from '@/service/api';

Vue.config.productionTip = false
Vue.prototype.request = Request;
Vue.prototype.api = API;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
