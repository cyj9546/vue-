import Vue from "vue";
import VueRouter from "vue-router";
// import trading from "../views/trading.vue";
// import wallet from '../views/wallet.vue';
// import team from '../views/team.vue';
import me from '../views//my/index.vue';
import home from '../views/home/index.vue';
import index from '../views/index.vue';
import record from '../views/record/index.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
      {path:'/',name:'home',component: home},
      {path:'/record',name:'record',component: record},
      {path:'/me',name:'me',component:me},
    ]
  }
];
//路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.token ? true : false;
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// })
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
