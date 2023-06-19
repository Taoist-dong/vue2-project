<template>
  <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // const {name,xData,yData} = this;
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          show: false,
          type: "value",
          startAngle: 0,
          clockwise: false //刻度增长逆时针
        },
        radiusAxis: {
          show: false,
          min: 0
        },
        animationDuration: 2000,
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            lineStyle: {
              normal: {
                color: "pink",
                width: 4
              }
            },
            showSymbol: false,
            data: this.generateData()
          }
        ]
      };

      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    generateData() {
      const data = [];
      for (let i = 0; i <= 360; i++) {
        data.push([this.func(i), i]);
      }
      return data;
    },
    // 数学函数
    func(x) {
      return 10 * (1 - Math.sin((Math.PI / 180) * x));
      // let p = 0;
      // p = Math.sqrt(
      //   3 + 2 * (Math.sin((Math.PI / 180) * x) - Math.cos((Math.PI / 180) * x))
      // );
      // return p;
    }
  }
};
</script>
