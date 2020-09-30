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
import i18n from './util/lang';
import './assets/style/base.scss';
import api from './api/api'
import jsCookie from 'js-cookie'
import {log} from './util/util';
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(i18n);
log("language",jsCookie.get('language'))
// console.log(jsCookie.get('language'))
// 自动获取线上地址
process.env.NODE_ENV == 'development' ? axios.defaults.baseURL = '/api/' : axios.defaults.baseURL = `${location.protocol}//${location.host}`;
Vue.prototype.$api = api;
Vue.prototype.$toast = Toast;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$cookie = jsCookie;
Vue.prototype.$log = log;


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");


