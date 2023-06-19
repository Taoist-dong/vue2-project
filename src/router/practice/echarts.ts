import { RouteConfig } from "vue-router";

const echartsRouters: Array<RouteConfig> = [
    {
      path: "/firstEchartPage",
      name: "firstEchartPage",
      // discriptions: 'Echart使用',
      component: () => import("@/views/PCPages/firstEchartPage.vue")
    },
    {
      path: "/studyData",
      name: "studyData",
      // discriptions: 'Echart使用',
      component: () => import("@/views/PCPages/studyData.vue")
    },
    {
      path: "/dataTansPage",
      name: "dataTansPage",
      // discriptions: 'Echart使用',
      component: () => import("@/views/PCPages/dataTansPage.vue")
    },
    {
      path: "/Echarts/baseConceptionStudy",
      name: "baseConceptionStudy",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/baseConceptionStudy.vue")
    },
    // 柱状图
    {
      path: "/Echarts/ZZT",
      name: "ZZTPage",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/ZZTPage.vue")
    },
    // 折线图
    {
      path: "/Echarts/ZXT",
      name: "ZXTPage",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/ZXTPage.vue")
    },
    // 饼图
    {
      path: "/Echarts/pie",
      name: "piePage",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/piePage.vue")
    },
    // 中国地图
    {
      path: "/Echarts/chinaMap",
      name: "chinaMap",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/chinaMap.vue")
    },
    // 世界地图
    {
      path: "/Echarts/worldMap",
      name: "chinaMap",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/echartProject/worldMap.vue")
    },
    {
      path: "/Echarts/pupulationData",
      name: "pupulationData",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/htmlDataResolve/pupulationData.vue")
    },
    // 动态折线图
    {
      path: "/Echarts/dynamicZXT",
      name: "dynamicZXT",
      component: () => import("@/views/echartProject/dynamicZXTPage.vue")
    },
    {
      path: "/dynamicComponents",
      name: "dynamicComponents",
      // discriptions: 'Echart基本特性学习探索',
      component: () => import("@/views/dynamicComponents/index.vue")
    },
    {
      path: "/Echarts/test",
      name: "test",
      // discriptions: 'Echart基本特性学习探索',D:\devFolder\vue2\vue2-project\src\views\echartProject\testChart.vue
      component: () => import("@/views/echartProject/testChart.vue")
    },
    // y轴配置
    {
      path: "/Echarts/yAxis",
      name: "yAxis",
      component: () => import("@/views/echartProject/yAxisOption.vue")
    },
    // 极坐标
    {
      path: "/Echarts/polarCharts",
      name: "polarCharts",
      component: () => import("@/views/echartProject/polarCharts.vue")
    },
    // 基本k线图
    {
      path: "/Echarts/baseKLine",
      name: "baseKLine",
      component: () => import("@/views/echartProject/kLine/baseKLineChart.vue")
    },
    // 综合k线图
    {
      path: "/Echarts/oneStopKLine",
      name: "oneStopKLine",
      component: () => import("@/views/echartProject/kLine/oneStopKLineChart.vue")
    },
    // 日k型k线图
    {
      path: "/Echarts/dayKLine",
      name: "dayKLine",
      component: () => import("@/views/echartProject/kLine/dayKLineChart.vue")
    },
    // 分时k线图
    {
      path: "/Echarts/hourKLine",
      name: "hourKLine",
      component: () => import("@/views/echartProject/kLine/hourKLine.vue")
    }
]
export default echartsRouters;
