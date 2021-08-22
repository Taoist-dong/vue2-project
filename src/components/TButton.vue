<template>
  <div>
    <button @click="clickhandle">{{ name }}</button>
  </div>
</template>
<script>
export default {
  props: {
    //   clickhandle: Function //作为父传子的一个属性
    name: {
      type: String, //按钮名称
      default: "Button"
    }
  },
  methods: {
    clickhandle() {
      //使用emit，第一个参数为子组件组件方法，第二个参数为该方法传递的参数
      this.$emit("clickhandle", 5);
    }
  }
};
</script>
<style scoped>
button {
  width: 125px;
  background: linear-gradient(45deg, rgb(143, 255, 109), rgb(208, 252, 172));
  height: 45px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 6px;
}
button:hover {
  background: linear-gradient(45deg, rgb(111, 255, 68), rgb(175, 248, 114));
}
button:visited {
  border: none;
  opacity: 0.5;
}
button:focus {
  outline: none;
}
</style>
