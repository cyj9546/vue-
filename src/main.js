import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'vant/lib/button/style';
import 'vant/lib/index.css';
import 'lib-flexible'
import axios from 'axios'
Vue.config.productionTip = false;
axios.defaults.timeout = 5000 // 请求超时
import { post, get } from './api/http'
import { Tabbar, TabbarItem } from 'vant';
import { Toast } from 'vant';
import './assets/style/base.scss';
import api from './api/api'
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

// 自动获取线上地址
process.env.NODE_ENV == 'development' ? axios.defaults.baseURL = '/api/' : axios.defaults.baseURL = `${location.protocol}//${location.host}`;

Vue.prototype.$api = api;
Vue.prototype.$toast = Toast;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


