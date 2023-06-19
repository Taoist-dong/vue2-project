<template>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      myChart: {},
      xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
      yData: [23, 24, 18, 25, 27, 28, 25], //人数数据
      taskDate: [10, 11, 9, 17, 14, 13, 14], //任务数据
      sortData: [], //动态排序数据
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
      dynamicSortZZTOption: {
        xAxis: {
          max: "dataMax"
        },
        yAxis: {
          type: "category",
          data: ["A", "B", "C", "D", "E"],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 4 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: "动态变化",
            type: "bar",
            data: [],
            label: {
              show: true,
              position: "right",
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear"
      }
    };
  },
  mounted() {
    // 图表初始化
    // this.myChart = echarts.init(document.getElementById("mychart"));
    // 数据初始化
    // for (let i = 0; i < 5; ++i) {
    //   this.sortData.push(Math.round(Math.random() * 200));
    // }
    // 数据刷新
    // setInterval(() => {
    //   this.pageUpdate();
    // }, 3000);
    this.initEcharts();
  },
  methods: {
    // 数据刷新
    pageUpdate() {
      console.log(this.dynamicSortZZTOption.series[0].data);
      this.dynamicSortZZTOption.series[0].data = this.sortData;
      for (let i = 0; i < this.sortData.length; ++i) {
        if (Math.random() > 0.9) {
          this.sortData[i] += Math.round(Math.random() * 2000);
        } else {
          this.sortData[i] += Math.round(Math.random() * 200);
        }
      }
      this.myChart.setOption(this.dynamicSortZZTOption);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },

    initEcharts() {
      // 基本柱状图
      // const option = {
      //   xAxis: {
      //     data: this.xData
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       type: "bar", //形状为柱状图
      //       data: this.yData
      //     }
      //   ]
      // };
      // 样式设置
      // const option = {
      //   xAxis: {
      //     data: ["A", "B", "C", "D", "E"]
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       type: "bar",
      //       data: [
      //         10,
      //         22,
      //         28,
      //         {
      //           value: 43,
      //           // 设置单个柱子的样式
      //           itemStyle: {
      //             color: "#91cc75",
      //             shadowColor: "#91cc75",
      //             borderType: "dashed",
      //             opacity: 0.5
      //           }
      //         },
      //         49
      //       ],
      //       barWidth: "20%", // 每个柱条的宽度就是类目宽度的 20%
      //       // 同系列柱条样式
      //       itemStyle: {
      //         barBorderRadius: 5,
      //         borderWidth: 1,
      //         borderType: "solid",
      //         borderColor: "#73c0de",
      //         shadowColor: "#5470c6",
      //         shadowBlur: 3
      //       }
      //     }
      //   ]
      // };
      // 柱条间距
      const option = {
        xAxis: {
          data: ["A", "B", "C", "D", "E"]
        },
        yAxis: {
          max: 30,
          interval: 6
          // splitNumber: 5
        },
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 18],
            barGap: "0%", // 两个柱子之间的距离相对于柱条宽度的百分比;
            barCategoryGap: "40%" // 每侧空余的距离相对于柱条宽度的百分比
          },
          {
            type: "bar",
            data: [12, 14, 9, 9, 11]
          }
        ]
      };
      // 多列柱状图
      const mulColumnZZTData = {
        xAxis: {
          data: this.xData
        },
        // 图例
        legend: {
          data: ["人数", "任务数"],
          top: "0%"
        },
        yAxis: {},
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData,
            name: "人数", // legend属性
            label: {
              // 柱状图上方文本标签，默认展示数值信息
              show: true,
              position: "top"
            }
          },
          {
            type: "bar", //形状为柱状图
            data: this.taskDate,
            name: "任务数", // legend属性
            label: {
              // 柱状图上方文本标签，默认展示数值信息
              show: true,
              position: "top"
            }
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
