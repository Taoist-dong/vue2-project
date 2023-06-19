// // 基本柱状图
// // export default const BaseZZTOption = {
// //   tooltip: {
// //     trigger: "axis"
// //   },
// //   legend: {
// //     data: [name],
// //     bottom: "0%"
// //   },
// //   grid: {
// //     //调整图表上下左右位置
// //     top: "10%",
// //     left: "3%",
// //     right: "8%",
// //     bottom: "11%",
// //     containLabel: true
// //   },

// //   xAxis: {
// //     type: "category",
// //     boundaryGap: false,
// //     data: xData
// //   },
// //   yAxis: {
// //     type: "value"
// //   },
// //   series: [
// //     {
// //       name: name,
// //       type: "line",
// //       stack: "总量",
// //       data: yData
// //     }
// //   ]
// // };

// // 基本柱状图数据
// export default const BaseZZTData = {
//   xAxis: {
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {},
//   series: [
//     {
//       type: 'bar',
//       data: [23, 24, 18, 25, 27, 28, 25]
//     }
//   ]
// }

// // 多列柱状图
// export default const mulColumnZZTData = {
//   xAxis: {
//     data: [23, 24, 18, 25, 27, 28, 25]
//   },
//   // 图例
//   legend: {
//     data: ["人数", "任务数"],
//     top: "0%"
//   },
//   yAxis: {},
//   series: [
//     {
//       type: "bar", //形状为柱状图
//       data: [23, 24, 18, 25, 27, 28, 25],
//       name: "人数", // legend属性
//       label: {
//         // 柱状图上方文本标签，默认展示数值信息
//         show: true,
//         position: "top"
//       }
//     },
//     {
//       type: "bar", //形状为柱状图
//       data: [10, 11, 9, 17, 14, 13, 14],
//       name: "任务数", // legend属性
//       label: {
//         // 柱状图上方文本标签，默认展示数值信息
//         show: true,
//         position: "top"
//       }
//     }
//   ]
// }

// // 动态排序柱状图
// export default const dynamicSortZZTOption = {
//   xAxis: {
//     max: 'dataMax'
//   },
//   yAxis: {
//     type: 'category',
//     data: ['A', 'B', 'C', 'D', 'E'],
//     inverse: true,
//     animationDuration: 300,
//     animationDurationUpdate: 300,
//     max: 2 // only the largest 3 bars will be displayed
//   },
//   series: [
//     {
//       realtimeSort: true,
//       name: 'X',
//       type: 'bar',
//       data: data,
//       label: {
//         show: true,
//         position: 'right',
//         valueAnimation: true
//       }
//     }
//   ],
//   legend: {
//     show: true
//   },
//   animationDuration: 3000,
//   animationDurationUpdate: 3000,
//   animationEasing: 'linear',
//   animationEasingUpdate: 'linear'
// }
const GDPData = [
  { name: '广东省', value: 122982 },
  { name: '辽宁省', value: 27715 },
  { name: '江苏省', value: 116760 },
  { name: '云南省', value: 27347 },
  { name: '山东省', value: 83882 },
  { name: '浙江省', value: 73520 },
  { name: '河南省', value: 60681 },
  { name: '四川省', value: 50174 },
  { name: '湖北省', value: 50174 },
  { name: '福建省', value: 49265 },
  { name: '台湾省', value: 48593 },
  { name: '湖南省', value: 46465 },
  { name: '安徽省', value: 44256 },
  { name: '上海市', value: 43205 },
  { name: '北京市', value: 41124 },
  { name: '河北省', value: 40463 },
  { name: '江西省', value: 30018 },
  { name: '陕西省', value: 29605 },
  { name: '重庆市', value: 27972 },
  { name: '香港特别行政区', value: 25642 },
  { name: '广西壮族自治区', value: 25060 },
  { name: '山西省', value: 21635 },
  { name: '内蒙古自治区', value: 20332 },
  { name: '贵州省', value: 19755 },
  { name: '天津市', value: 15825 },
  { name: '新疆维吾尔自治区', value: 15775 },
  { name: '黑龙江省', value: 15245 },
  { name: '吉林省', value: 13598 },
  { name: '甘肃省', value: 10302 },
  { name: '海南省', value: 6430 },
  { name: '青海省', value: 3340 },
  { name: '宁夏回族自治区', value: 4455 },
  { name: '西藏自治区', value: 2128 },
  { name: '澳门特别行政区', value: 1725 },
]
export default GDPData;