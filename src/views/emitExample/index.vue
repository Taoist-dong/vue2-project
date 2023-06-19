<template>
  <div style="text-align:center">
    <div class="value-area">
      {{ counter }}
    </div>
    <keep-alive>
      <component :is="KeepaliveCom"></component>
    </keep-alive>
    <!-- <keepalive-component></keepalive-component> -->
    <!-- 父组件引用子组件，并使用v-on绑定子组件内部的点击事件 -->
    <!-- <t-button @clickhandle="changeCounter"></t-button> -->
    <t-button @clickhandle="changeCounter"></t-button>
    <t-button @clickhandle="goback" name="返回"></t-button>
  </div>
</template>
<script>
import KeepaliveComponent from "@/components/keepaliveTest";
import tButton from "@/components/TButton";
export default {
  name: "emitExample",
  components: {
    // 子组件tButton注册
    tButton,
    KeepaliveComponent
  },
  data() {
    return {
      counter: 0,
      KeepaliveCom: "KeepaliveComponent"
    };
  },
  methods: {
    //  绑定该方法并接受子组件传递过来的参数data
    changeCounter(data) {
      this.counter = data;
    },
    goback() {
      this.$router.push({ path: "/keepAliveTest" });
      // this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.value-area {
  width: 200px;
  height: 50px;
  border: none;
  box-shadow: 0 0 0 10px #b8fcb8;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 30px;
}
</style>
