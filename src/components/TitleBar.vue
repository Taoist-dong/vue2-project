<template>
  <div class="page-title">
    <div class="backImg" @click="goBack">
      <img src="@/assets/images/arrow_left.png" />
    </div>
    <div class="titleText">
      <label>{{ title }}</label>
    </div>
    <div v-if="showRightArea" class="rightImg">
      <img :src="rightImgPath" />
    </div>
  </div>
</template>
<script>
export default {
  name: "titleBar",
  props: {
    // 标题
    title: {
      type: String,
      default: "标题"
    },
    showRightArea: {
      type: Boolean,
      default: false
    },
    rightImgPath: {
      type: String
    }
  },
  methods: {
    // 返回方法
    goBack() {
      this.$emit("go-back");
    }
  }
};
</script>
<style lang="scss" scoped>
.page-title {
  width: 100%;
  // background-color: #fff;
  display: flex;
  padding: 10px 0;
  justify-content: flex-start;
}
.backImg {
  width: 12%;
  text-align: center;
  img {
    margin: 0 auto;
    width: 24px;
  }
}
.titleText {
  font-size: 18px;
  height: 26px;
  width: 70%;
  text-align: center;
  label {
    margin: 0 auto;
  }
}
.rightImg {
  width: 15%;
  text-align: center;
  img {
    margin: 0 auto;
    width: 24px;
  }
}
</style>
