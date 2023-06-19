<template>
  <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      name: "张雪"
      // xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      // yData: [30, 132, 80, 134]
    };
  },
  mounted() {
    // const {name,xData,yData} = this;
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: "y轴数据展示"
        },
        tooltip: {},
        animation: false,
        grid: {
          top: 40,
          left: 50,
          right: 40,
          bottom: 50
        },
        xAxis: {
          name: "x",
          min: -50,
          max: 50,
          minorTick: {
            show: true
          },
          minorSplitLine: {
            show: true
          }
        },
        yAxis: {
          name: "y",
          // min: -50,
          // max: 50,
          silent: true,
          axisTick: {
            show: true,
            alignWithLabel: true,
            interval: 0,
            inside: false,
            length: 20
          },

          minorTick: {
            show: true,
            splitNumber: 10,
            length: 5
          }
          // minorSplitLine: {
          //   show: true
          // }
        },
        dataZoom: [
          {
            show: true,
            type: "inside",
            filterMode: "none",
            xAxisIndex: [0],
            startValue: -20,
            endValue: 20
          },
          {
            show: true,
            type: "inside",
            filterMode: "none",
            yAxisIndex: [0]
            // startValue: -20,
            // endValue: 20
          }
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            clip: true,
            data: this.generateData()
          }
        ]
      };
      // const setEchartWH = {
      //   width: 600,
      //   height: 400
      // };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    generateData() {
      const data = [];
      for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, this.func(i)]);
      }
      return data;
    },
    // 数学函数
    func(x) {
      x /= 10;
      return Math.sin(x) * 50;
      // return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
    }
  }
};
</script>
