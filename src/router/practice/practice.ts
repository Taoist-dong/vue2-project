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
    path: "/skeletonPractice",
    name: "skeletonPractice",
    component: () => import("@/views/skeletonPractice/index.vue"),
    children: [
      {
        path: "/skeletonComponent",
        name: "skeletonComponent",
        component: () => import("@/views/skeletonPractice/index.vue")
      },
      {
        path: "/skeletonComponent",
        name: "skeletonComponent",
        component: () => import("@/views/skeletonPractice/index.vue")
      }
    ]
  },
  {
    path: "/routerViewPractice",
    name: "routerViewPractice",
    component: () => import("@/views/routerView/index.vue"),
    redirect: '/messagePage',
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
  }
];

export default routers;
