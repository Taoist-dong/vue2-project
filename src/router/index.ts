import Vue from "vue";
import VueRouter from "vue-router";
import routers from "./practice/practice";
import echartsRouters from './practice/echarts';
import elementPage from "./practice/elementPage"

// 注册vue-router中的所有组件
Vue.use(VueRouter);

const allRouter = [...routers, ...echartsRouters, ...elementPage];
const router = new VueRouter({
  mode: "history",
  routes: allRouter
});

export default router;
