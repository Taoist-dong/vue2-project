<template>
  <div>
    <!-- <keep-alive include="includedComponents">
            <component :is="keepaliveTest"></component>
        </keep-alive> -->

    <input-item itemName="姓名"></input-item>
    <input-item itemName="联系电话"></input-item>
    <input-item ref="mobPwdCode" itemName="动态验证码"></input-item>
    <keep-alive>
      <component :is="KeepaliveCom"></component>
    </keep-alive>
    <t-button class="button" @clickhandle="toNextPage"></t-button>
  </div>
</template>
<script>
import KeepaliveComponent from "@/components/keepaliveTest";
import InputItem from "./components/InputItem";
import tButton from "@/components/TButton";
export default {
  name: "testKA",
  components: {
    KeepaliveComponent,
    tButton,
    InputItem
  },
  data() {
    return {
      includedComponents: "KeepaliveComponent",
      KeepaliveCom: "KeepaliveComponent"
    };
  },
  created() {
    console.log("cretead");
  },
  activated() {
    console.log("actived");
    // 页面每次进入将手机动态验证码置为空
    this.$refs.mobPwdCode.inputValue = "";
  },
  // to为即将跳转的路由，from为上一个页面路由
  // beforeRouteLeave(to, from, next) {
  //     // 设置下一个路由的 meta
  //     to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
  //     next();
  // },
  methods: {
    toNextPage() {
      this.$router.push({ path: "/emitExample" });
    }
  }
};
</script>
<style scoped>
.button {
  margin-top: 30px;
}
</style>
