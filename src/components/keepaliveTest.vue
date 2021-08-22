<template>
  <div>
    <input type="number" maxlength="6" v-model="inputValue" />
  </div>
</template>
<script>
export default {
  name: "keepaliveTest",
  data() {
    return {
      inputValue: ""
    };
  }
};
</script>
<style scoped>
input {
  border: palegreen solid 1px;
  border-radius: 4px;
  height: 25px;
  line-height: 25px;
  vertical-align: middle;
  width: 100px;
  font-size: 16px;
}
</style>
