<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <div>
      <div class="three-img">
        <div>
          <img :src="require('@/assets/images/imgRowAlign/image .png')" />
          <span>我是图片</span>
        </div>
        <div>
          <img :src="require('@/assets/images/imgRowAlign/image .png')" />
          <span>我是图片</span>
        </div>
        <div>
          <img :src="require('@/assets/images/imgRowAlign/image .png')" />
          <span>我是图片</span>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
export default {
  name: "",
  components: {
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
    console.log(222);
    // 初始化页面参数，按照生命周期，子组件需要的参数父组件需要在created生命周期取值
    // this.initParams();
  },
  methods: {
    goback() {
      console.log("111");
    }
  }
};
</script>
<style lang="scss" scoped>
#page-title {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.backImg {
  width: 20px;
}
.three-img {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 5px;
  }
}
</style>
