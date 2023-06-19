<template>
  <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '90vh' }"
  ></div>
</template>

<script>
import * as echarts from "echarts";
import {
  StudyDate,
  mornWordTime,
  dayWordTime,
  listenTime,
  readPracticeTime,
  wordPracticeTime,
  translateTime,
  daytotalTime
} from "@/util/constans";
export default {
  data() {
    return {
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134]
    };
  },
  mounted() {
    // const { name, xData, yData } = this;
    this.initChart();
  },
  methods: {
    initChart() {
      console.log(echarts);
      const getchart = echarts.init(document.getElementById("mychart"));
      const option = {
        title: {
          text: "9月数据统计",
          subtext: "各项学习时常"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            "单词(早)",
            "单词(总)",
            "听力",
            "阅读",
            "练字",
            "翻译",
            "总时长(天)"
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: StudyDate
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} M"
            }
          }
        ],
        series: [
          //早上背单词时间
          {
            name: "单词(早)",
            type: "line",
            data: mornWordTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          // 当天背单词时间
          {
            name: "单词(总)",
            type: "line",
            data: dayWordTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          //听力时间
          {
            name: "听力",
            type: "line",
            data: listenTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          //阅读时间
          {
            name: "阅读",
            type: "line",
            data: readPracticeTime,
            smooth: true,
            markPoint: {
              data: [{ name: "最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          //练字时间
          {
            name: "练字",
            type: "line",
            data: wordPracticeTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          //翻译时间
          {
            name: "翻译",
            type: "line",
            data: translateTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          //总计
          {
            name: "总时长(天)",
            type: "line",
            data: daytotalTime,
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
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
    }
  }
};
</script>
