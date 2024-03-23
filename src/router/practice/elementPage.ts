import { RouteConfig } from "vue-router";
const routers: Array<RouteConfig> = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/PCPages/pcManagement/home.vue")
  },
];

export default routers;
