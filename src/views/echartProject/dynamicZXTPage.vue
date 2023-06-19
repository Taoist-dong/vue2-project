<template>
  <div class="echart" id="mychart" ref="mychart" :style="myChartStyle"></div>
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
      populationData: [
        "127627",
        "128453",
        "129227",
        "129988",
        "130756",
        "131448",
        "132129",
        "132802",
        "133450",
        "134091",
        "134916",
        "135922",
        "136726",
        "137646",
        "138326",
        "139232",
        "140011",
        "140541",
        "141008",
        "141212"
      ],
      seriesData: [],
      index: 0,
      myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  methods: {
    initDate() {
      this.xData[0] = 2001;
      for (let i = 1; i < 20; i++) {
        this.xData[i] = this.xData[i - 1] + 1;
        // this.yData =this.xData[i]*this.xData[i];
        // this.seriesData[i] = [i, i * i];
      }
      // for (let i = 0; i < 20; i++) {
      //   this.seriesData[i] = this.populationData[19 - i];
      // }
      // console.log(this.seriesData);
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
        yAxis: {},
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
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: this.xData
        },
        yAxis: {
          name: "人口(万）",
          min: "120000",
          max: "150000",
          // type: "value",
          splitLine: {
            show: false
          }
        },
        // stateAnimation: {
        // animation: true,
        animationDuration: 20000,
        // animationDuration: idx => {
        //   return idx * 10000;
        // },
        // },

        // animationDurationUpdate: 20000,
        // animationEasing: "cubicInOut",
        animationEasingUpdate: "cubicInOut",
        // animationThreshold: 2000,
        // progressiveThreshold: 3000,
        // progressive: 400,
        // hoverLayerThreshold: 3000,
        series: [
          {
            // data: this.populationData,
            data: this.seriesData,
            type: "line",
            smooth: true,
            endLabel: {
              show: true
            }
          }
        ]
      };
      this.myChart = echarts.init(this.$refs.mychart);
      setInterval(() => {
        this.seriesData.push(this.populationData[this.index]);
        // this.seriesData[this.index] = this.populationData[this.index];
        this.myChart.setOption(optionFree);
        this.index++;
      }, 1000);
      this.myChart = echarts.init(this.$refs.mychart);
      // this.myChart.setOption(optionFree);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  }
};
</script>
