<template>
  <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
</template>

<script>
import * as echarts from "echarts";
import SZlineData from "./data/klineDate.ts";
// console.log(SZlineData);

export default {
  data() {
    return {
      upcolor: "#FF0000", //增长颜色
      upBorderColor: "#8A0000",
      downColor: "#008000", // 下跌颜色
      downBorderColor: "#008F28",
      klineData: [] //k线图数据
    };
  },
  mounted() {
    this.initData();
    this.initEcharts();
  },
  methods: {
    initData() {
      this.klineData = this.splitData(SZlineData);
    },
    initEcharts() {
      const option = {
        title: {
          text: "上证指数",
          left: 0
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"]
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%"
        },
        xAxis: {
          type: "category",
          data: this.klineData.categoryData,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          min: "dataMin",
          max: "dataMax"
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100
          },
          {
            show: true,
            type: "slider",
            top: "90%",
            start: 50,
            end: 100
          }
        ],
        series: [
          {
            name: "日K",
            type: "candlestick",
            data: this.klineData.values,
            itemStyle: {
              color: this.upColor,
              color0: this.downColor,
              borderColor: this.upBorderColor,
              borderColor0: this.downBorderColor
            },
            markPoint: {
              label: {
                formatter: function(param) {
                  return param != null ? Math.round(param.value) + "" : "";
                }
              },
              data: [
                {
                  name: "Mark",
                  coord: ["2013/5/31", 2300],
                  value: 2300,
                  itemStyle: {
                    color: "rgb(41,60,85)"
                  }
                },
                {
                  name: "highest value",
                  type: "max",
                  valueDim: "highest"
                },
                {
                  name: "lowest value",
                  type: "min",
                  valueDim: "lowest"
                },
                {
                  name: "average value on close",
                  type: "average",
                  valueDim: "close"
                }
              ],
              tooltip: {
                formatter: function(param) {
                  return param.name + "<br>" + (param.data.coord || "");
                }
              }
            },
            markLine: {
              symbol: ["none", "none"],
              data: [
                [
                  {
                    name: "from lowest to highest",
                    type: "min",
                    valueDim: "lowest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      show: false
                    },
                    emphasis: {
                      label: {
                        show: false
                      }
                    }
                  },
                  {
                    type: "max",
                    valueDim: "highest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      show: false
                    },
                    emphasis: {
                      label: {
                        show: false
                      }
                    }
                  }
                ],
                {
                  name: "min line on close",
                  type: "min",
                  valueDim: "close"
                },
                {
                  name: "max line on close",
                  type: "max",
                  valueDim: "close"
                }
              ]
            }
          },
          {
            name: "MA5",
            type: "line",
            data: this.calculateMA(5),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              opacity: 0.8
            }
          },
          {
            name: "MA10",
            type: "line",
            data: this.calculateMA(10),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              opacity: 0.8
            }
          },
          {
            name: "MA20",
            type: "line",
            data: this.calculateMA(20),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              opacity: 0.8
            }
          },
          {
            name: "MA30",
            type: "line",
            data: this.calculateMA(30),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              opacity: 0.8
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
    },
    // 数据计算以及拆分
    splitData(rawData) {
      const categoryData = [];
      const values = [];
      for (let i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
      }
      console.log(categoryData);
      console.log(values);
      return {
        categoryData: categoryData,
        values: values
      };
    },
    // 均值计算
    calculateMA(dayCount) {
      const result = [];
      for (let i = 0, len = this.klineData.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        let sum = 0;
        for (let j = 0; j < dayCount; j++) {
          sum += +this.klineData.values[i - j][1];
        }
        // 保留两位小数
        result.push((sum / dayCount).toFixed(2));
      }
      return result;
    }
  }
};
</script>
