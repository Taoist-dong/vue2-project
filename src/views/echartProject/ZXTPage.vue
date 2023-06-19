<template>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      myChart: {},
      // xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
      // yData: [23, 24, 18, 25, 27, 28, 25], //人数数据
      // taskData: [10, 11, 9, 17, 14, 13, 14], //任务数据
      xData: [],
      yData: [],
      seriesData: [[]],
      myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  methods: {
    initDate() {
      for (let i = 0; i < 5; i++) {
        // this.xData[i] = i;
        // this.yData =this.xData[i]*this.xData[i];
        this.seriesData[i] = [i, i * i];
      }
    },
    initEcharts() {
      // 复杂折线图
      const option = {
        xAxis: {
          data: this.xData
        },
        legend: {
          // 图例
          data: ["人数", "任务"],
          bottom: "0%"
        },
        yAxis: {
          interval: 2
        },
        series: [
          {
            name: "人数",
            data: this.yData,
            type: "line", // 类型设置为折线图
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 16
              }
            }
          },
          {
            name: "任务",
            data: this.taskData,
            type: "line", // 类型设置为折线图
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 16
              }
            }
          }
        ]
      };
      console.log(this.seriesData);
      const optionFree = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(optionFree);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  }
};
</script>
