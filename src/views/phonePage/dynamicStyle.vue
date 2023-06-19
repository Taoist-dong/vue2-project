<template>
  <div :class="{ 'dark-theme': isActive }">
    <title-bar :title="title" @goBack="goback"></title-bar>
    <div>
      <div class="sty-item">
        <label>改变页面主题色:</label>
        <TButton @clickhandle="changeTheme" />
      </div>
      <div class="sty-item">
        <label>改变按钮样式:</label>
        <button class="btn" :style="dynamicStyle" @click="btnColorChange">
          我是按钮
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import TButton from "@/components/TButton";
export default {
  name: "", // 动态控制vue 页面元素样式
  components: {
    TitleBar,
    TButton
  },
  data() {
    return {
      isActive: false, // class是否生效
      title: "动态样式",
      dynamicStyle: {}, //内联样式控制
      brightStyle: {
        //亮色
        background:
          "linear-gradient(45deg, rgb(225, 194, 137), rgb(213, 208, 156))",
        color: "#fff"
      },
      darkStyle: {
        //暗色
        background:
          "linear-gradient(45deg, rgb(143, 255, 109), rgb(208, 252, 172))",
        color: "#000"
      }
    };
  },
  mounted() {
    console.log(111);
  },
  methods: {
    changeTheme() {
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    btnColorChange() {
      console.log(this.dynamicStyle);
      if (this.compareObj(this.dynamicStyle, this.darkStyle)) {
        this.dynamicStyle = this.brightStyle;
      } else {
        this.dynamicStyle = this.darkStyle;
        console.log(this.dynamicStyle);
      }
    },
    compareObj(a, b) {
      return JSON.stringify(a) == JSON.stringify(b) ? true : false;
    },
    goback() {
      //
    }
  }
};
</script>
<style lang="scss" scoped>
.page-body1 {
  background-color: rgb(21, 126, 29);
  margin: 10px 15px;
}
.dark-theme {
  background-color: rgb(41, 46, 42);
  color: azure;
}
.btn {
  width: 125px;
  // background: linear-gradient(45deg, rgb(143, 255, 109), rgb(208, 252, 172));
  height: 45px;
  // color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 6px;
}
.sty-item {
  padding: 30px;
  text-align: left;
  label {
    margin: 20px 0px;
    display: block;
  }
}
</style>
