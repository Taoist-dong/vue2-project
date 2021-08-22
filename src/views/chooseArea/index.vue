<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <AreaChoose></AreaChoose>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import AreaChoose from "@/components/AreaChoose";
export default {
  name: "",
  components: {
    AreaChoose,
    TitleBar
  },
  data() {
    return {
      title: "地区选择",
      searchPlhText: "请输入产品名称",
      productList: {}, // 产品列表
      productListRst: {} // 搜索筛选之后的产品列表
    };
  },
  created() {
    setTimeout(() => {
      console.log(222);
    }, 2000);
    // 初始化页面参数，按照生命周期，子组件需要的参数父组件需要在created生命周期取值
    // this.initParams();
  },
  methods: {
    // 返回方法
    goback() {
      // this.$emit("GoBack");
    },
    // 初始化页面参数,获取产品列表
    // initParams() {},
    // 每次search框变化则进行筛选
    searchInputChange(value) {
      // 若未输入值，则展示所有数据
      if (null === value || undefined === value) {
        this.productListRst = this.productList;
      } else {
        this.productListRst = []; // 结果列表置空
        let regStr = "";
        // 初始化正则表达式
        for (let i = 0; i < value.length; i++) {
          regStr = regStr + "(" + value[i] + ")([\\s]*)"; //跨字匹配
        }
        const reg = new RegExp(regStr);
        console.log(reg);
        for (let i = 0; i < this.productList.length; i++) {
          const name = this.productList[i].name; //按照名字匹配
          const regMatch = name.match(reg);
          if (null !== regMatch) {
            // 将匹配的数据放入结果列表中
            this.productListRst.push(this.productList[i]);
          }
        }
      }
    },
    // 去往产品详情页
    toPrdDetail() {
      this.$router.push({ path: "detail" });
    }
  }
};
</script>
<style scoped>
#page-title {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.backImg {
  width: 20px;
}
</style>
