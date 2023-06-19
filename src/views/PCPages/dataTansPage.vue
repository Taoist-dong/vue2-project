<template>
  <div>
    <div class="flex-display">
      <label>转换文字</label>
      <input type="text" v-model="inputData" placeholder="请输入文本" />
      <button @click="tranData">制表符转换</button>
      <button @click="tranDataSpace">空格转换</button>
      <button @click="tranDate">日期转换</button>
    </div>
    <div class="flex-display">
      <label>制表符转换结果:</label>
      <div class="text-box">{{ transResult }}</div>
    </div>
    <div class="flex-display">
      <label>空格转换结果:</label>
      <div class="text-box">{{ transReSultSpace }}</div>
    </div>
    <div class="flex-display">
      <label>日期转换结果:</label>
      <div class="text-box">{{ transDateReSult }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      inputData: "",
      transResult: "",
      transReSultSpace: "",
      transDateReSult: "",
      productList: {}, // 产品列表
      productListRst: {} // 搜索筛选之后的产品列表
    };
  },
  created() {
    console.log(222);
    // 初始化页面参数，按照生命周期，子组件需要的参数父组件需要在created生命周期取值
    // this.initParams();
  },
  methods: {
    tranData() {
      this.transResult = this.inputData.replace(/\t/gm, ",");
    },
    tranDataSpace() {
      this.transReSultSpace = this.inputData.replace(/\s/gm, ",");
    },
    tranDate() {
      console.log(typeof this.inputData);
      const mid = this.inputData.replace(/\t/gm, ",");
      this.transDateReSult = mid.replace(/2021\/9\//g, "");
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-display {
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  height: 50px;
  font-size: 32px;
  label {
    margin: 10px 20px;
  }
  input {
    margin: 10px 20px;
    width: 200px;
    font-size: 16px;
  }
  button {
    margin: 0 10px;
    width: 80px;
    height: 50px;
    background: rgb(179, 223, 220);
  }
}
.text-box {
  border-bottom: 1px solid black;
  font-size: 16px;
  line-height: inherit;
  min-height: 50px;
  max-width: 80%;
  word-break: normal;
  word-wrap: break-word;
}
.backImg {
  width: 20px;
}
</style>
