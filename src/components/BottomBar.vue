<template>
  <div class="btm-nav-bar">
    <div class="flex-layout">
      <div class="btm-nav-bar-item" @click='messageClick'>
        <img src="@/assets/images/bottomNavBar/message.png" />
        <label>消息</label>
      </div>
      <div class="btm-nav-bar-item" @click='contactClick'>
        <img src="@/assets/images/bottomNavBar/contact.png" />
        <label>联系人</label>
      </div>
      <div class="btm-nav-bar-item" @click='dynamicClick'>
        <img src="@/assets/images/bottomNavBar/dynamic.png" />
        <label>动态</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomBar",
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
    },
    // 点击消息
    messageClick() {
      this.$emit('handleMsg')
    },
    // 点击联系人
    contactClick() {
      this.$emit('lookContact')
    },
    // 点击动态
    dynamicClick() {
      this.$emit('readDynamic')
    }
  }
};
</script>
<style lang="scss" scoped>
.btm-nav-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99;
}
.flex-layout {
  display: flex;
  justify-content: space-between;
  padding: 10px 35px;
}
.btm-nav-bar-item {
  font-size: 12px;
  text-align: center;
  img {
    height: 35px;
    width: 35px;
  }
  label {
    display: block;
    margin: 0 auto;
  }
}
</style>
