<template>
  <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134]
    };
  },
  mounted() {
    // const {name,xData,yData} = this;
    this.initEcharts();
  },
  methods: {
    initChart(name, xData, yData) {
      console.log(echarts);
      const getchart = echarts.init(document.getElementById("echart-line"));
      const option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [name],
          bottom: "0%"
        },
        grid: {
          //调整图表上下左右位置
          top: "10%",
          left: "3%",
          right: "8%",
          bottom: "11%",
          containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: name,
            type: "line",
            stack: "总量",
            data: yData
          }
        ]
      };

      getchart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
      });
    },
    initEcharts() {
      const option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar", //类型为柱状图
            data: [5, 20, 36, 10, 10, 20]
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
