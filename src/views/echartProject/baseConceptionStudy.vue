<template>
  <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
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
        color: [
          "#dd6b66",
          "#759aa0",
          "#e69d87",
          "#8dc1a9",
          "#ea7e53",
          "#eedd78",
          "#73a373",
          "#73b9bc",
          "#7289ab",
          "#91ca8c",
          "#f49f42"
        ],
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
      // const setEchartWH = {
      //   width: 600,
      //   height: 400
      // };
      const myChart = echarts.init(document.getElementById("mychart"), "dark");
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
