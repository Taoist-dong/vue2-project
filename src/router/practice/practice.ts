import { RouteConfig } from "vue-router";
const routers: Array<RouteConfig> = [
  {
    path: "/busExample",
    name: "busExample",
    component: () => import("@/views/busExample/index.vue")
  },
  {
    path: "/chooseArea",
    name: "chooseArea",
    component: () => import("@/views/chooseArea/index.vue")
  },
  {
    path: "/pagePractice",
    name: "pagePractice",
    component: () => import("@/views/pagePractice/index.vue")
  },
  {
    path: "/ListLoading",
    name: "ListLoading",
    component: () => import("@/views/loadPrdList/index.vue")
  },
  {
    path: "/dynamicStyle",
    name: "dynamicStyle",
    component: () => import("@/views/phonePage/dynamicStyle.vue")
  },
  // D:\devFolder\vue2\vue2-project\src\views\phonePage\dynamicStyle.vue
  // {
  //   path: "/skeletonPractice",
  //   name: "skeletonPractice",
  //   component: () => import("@/views/skeletonPractice/index.vue"),
  //   children: [
  //     {
  //       path: "/skeletonComponent",
  //       name: "skeletonComponent",
  //       component: () => import("@/views/skeletonPractice/index.vue")
  //     },
  //     {
  //       path: "/skeletonComponent",
  //       name: "skeletonComponent",
  //       component: () => import("@/views/skeletonPractice/index.vue")
  //     }
  //   ]
  // },
  {
    path: "/routerViewPractice",
    name: "routerViewPractice",
    component: () => import("@/views/routerView/index.vue"),
    redirect: "/messagePage",
    children: [
      {
        path: "/messagePage",
        name: "messagePage",
        component: () => import("@/views/routerView/childPages/messagePage.vue")
      },
      {
        path: "/contactPage",
        name: "contactPage",
        component: () => import("@/views/routerView/childPages/contactPage.vue")
      },
      {
        path: "/dynamicPage",
        name: "dynamicPage",
        component: () => import("@/views/routerView/childPages/dynamicPage.vue")
      }
    ]
  },
  {
    path: "/sakuraSky",
    name: "sakuraSky",
    component: () => import("@/views/PCPages/sakura/sakura.vue")
  },
  {
    path: "/starrySky",
    name: "starrySky.vue",
    component: () => import("@/views/PCPages/starrySky/starrySky.vue")
  },
  {
    path: "/starFlutter",
    name: "starFlutter.vue",
    component: () => import("@/views/PCPages/starrySky/starFlutter.vue")
  },
  // 文件上传
  // {
  //   path: "/excelResolve",
  //   name: "excelResolve",
  //   component: () => import("@/views/PCPages/excelResolve.vue")
  // },
  // 滚动数字
  {
    path: "/scrollNum",
    name: "scrollNum",
    component: () => import("@/views/phonePage/scrollNum/index.vue")
  }
];

export default routers;
