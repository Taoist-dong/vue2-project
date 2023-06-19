<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <!-- <div class="amount-box">
      <label>您的余额为:</label>
      <label>{{ amountFormatPage }}</label>
    </div>
    <t-button @clickhandle="changeAmount" name="计时器"></t-button> -->
    <div>
      <label>您的余额为:</label>
      <label>{{ amountShow }}</label>
    </div>
    <t-button @clickhandle="changeAmountFrame" name="动画帧"></t-button>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import tButton from "@/components/TButton";
import { amountFormat } from "@/util/utils";
export default {
  components: {
    TitleBar,
    tButton
  },
  data() {
    return {
      res: false, //
      title: "动态变化金额",
      amount: 0, //初始amout
      amoutFrame: 0,
      amountShow: 0
    };
  },
  computed: {
    // 计算属性格式化页面金额
    amountFormatPage() {
      return amountFormat(this.amount);
    }
  },
  methods: {
    changeAmount() {
      const total = 16000; //设置初始总金额
      const _this = this;
      let i = 0;
      //变化15次，每次间隔30毫秒
      const amoutInterval = setInterval(() => {
        if (i < 15) {
          i++;
          _this.amount = (total * i) / 15;
        } else {
          clearInterval(amoutInterval);
        }
      }, 30);
    },
    changeAmountFrame() {
      const total = 26666;
      const frameNum = 60;
      const _this = this;
      let animation = window.requestAnimationFrame(function f() {
        console.log(111);
        if (_this.amoutFrame < total) {
          _this.amoutFrame = _this.amoutFrame + total / frameNum;
          // 动画继续
          animation = window.requestAnimationFrame(f);
        } else {
          _this.amoutFrame = total;
          // 动画停止
          window.cancelAnimationFrame(f);
        }
        _this.amountShow = amountFormat(_this.amoutFrame);
      });
    },
    goback() {
      //
    }
  }
};
</script>
<style lang="scss" scoped>
.amount-box {
  label {
    display: box;
  }
}
</style>
