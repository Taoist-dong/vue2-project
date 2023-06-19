<template>
  <div>
    <div class="home">
      <div class="link">
        <div class="contant">
          <p>领取阿里云通用云产品优惠券</p>
          <br />
          <p style="color: #33cacc">
            https://www.aliyun.com/minisite/goods?userCode=fcor2omk
          </p>
          <br />
          <p>领取腾讯云通用云产品优惠券</p>
          <br />
          <p style="color: #33cacc">
            https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=20b1c3842f74986b2894e2c5fcde7ea2&from=console
          </p>
          <br />
        </div>
      </div>
      <div class="container">
        <div class="container1">
          <i class="el-icon-user-solid" style="color:#40C9C6"> </i>

          <div class="right">
            <span>
              访问
              <p>5669</p></span
            >
          </div>
        </div>

        <div class="container2">
          <i class="el-icon-s-comment" style="color:#36A3F7"> </i>

          <div class="right">
            <span>
              消息
              <p>460</p></span
            >
          </div>
        </div>
        <div class="container3">
          <i class="el-icon-chat-dot-square" style="color:#F4516C"> </i>

          <div class="right">
            <span>
              回复
              <p>7765</p></span
            >
          </div>
        </div>
        <div class="container4">
          <i class="el-icon-shopping-cart-2" style="color:#34BFA3"> </i>

          <div class="right">
            <span>
              订单
              <p>8097</p></span
            >
          </div>
        </div>
      </div>
      <div class="msg">
        <div class="echart" id="mychart" :style="myChartStyle"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], //横坐标
      yData: [5, 30, 68, 10, 18, 29, 900, 350, 560, 1250, 450, 780], //数据
      yAxis: {
        max: 1400,
        interval: 200
      },
      animationDuration: 200,
      myChartStyle: { float: "left", width: "90%", height: "400px" } //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // 基本柱状图
      const option = {
        xAxis: {
          data: this.xData
        },
        yAxis: {
          max: 1400,
          interval: 200
        },
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData,
            barWidth: "40%"
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
<style scoped>
.home {
  width: 100%;
  height: 400vh;
}
.link {
  width: 100%;
  height: 170px;
  display: flex;
  align-content: center;
  margin-top: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.container {
  width: 95%;
  height: 140px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 10px;
}
.container1 {
  width: 23%;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  position: relative;
}
i {
  font-size: 80px;
  margin: 20px 20px;
  /* color: azure; */
}
.right {
  width: 90px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 140px;
  top: 40px;
  font-size: 20px;
}

.container2 {
  width: 23%;
  height: 100%;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.container3 {
  width: 23%;
  height: 100%;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.container4 {
  width: 23%;
  height: 100%;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.contant {
  width: 100%;
  height: 150px;
  margin-left: 20px;
  margin-top: 5px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
}
.msg {
  width: 100%;
  height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 15px;
}
</style>
