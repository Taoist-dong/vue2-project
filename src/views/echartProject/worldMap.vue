<template>
  <div class="echart" id="mychart" :style="myChartStyle" ref="myEcharts"></div>
</template>

<script>
import * as echarts from "echarts";
import GDPData from "./pjtData";
// import axios from "axios";
// import Vue from "vue";
// Vue.prototype.$http = axios;
// Vue.use(axios);

export default {
  data() {
    return {
      myChart: {},
      myChartStyle: {
        float: "left",
        width: "100%",
        height: "800px",
        "background-color": "gray"
      } //图表样式
    };
  },
  mounted() {
    // this.initDate(); //数据初始化
    this.initEcharts();
  },
  methods: {
    async initEcharts() {
      const chinaData = require("../../assets/js/chinaMap.json").data;
      console.log(GDPData);
      console.log(chinaData);
      this.myChart = echarts.init(this.$refs.myEcharts);
      echarts.registerMap("china", chinaData);
      const option = {
        title: {
          text: "中国地图",
          subtext: "中国2021各省份GDP对比",
          sublink: "http://www.census.gov/popest/data/datasets.html",
          left: "right"
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function(params) {
            const value = (params.value + "").split(".");
            const valueStr = value[0].replace(
              /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
              "$1,"
            );
            return params.seriesName + "<br/>" + params.name + ": " + valueStr;
          }
        },
        visualMap: {
          left: "right",
          min: 10000,
          max: 150000,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026"
            ]
          },
          text: ["High", "Low"],
          calculable: true
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: "left",
          top: "top",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          map: "china"
        }
        // series: [
        //   {
        //     name: "中国",
        //     type: "map",
        //     roam: true,
        //     map: "china",
        //     avoidLabelOverlap: true,
        //     emphasis: {
        //       label: {
        //         show: true
        //       }
        //     },
        //     label: {
        //       show: true,
        //       formatter: "{c}",
        //       // position: "bottom",
        //       textStyle: {
        //         fontSize: 10,
        //         color: "#fff"
        //       }
        //     },
        //     data: GDPData
        //   }
        // ]
      };
      // echarts.registerMap("china", chinaData);
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    async getFetch(url) {
      return fetch(url).then(res => res.json());
    }
  }
};
</script>
