<template>
  <div class="inputItem">
    <div>{{ itemName }}</div>
    <div>
      <input :type="inputType" maxlength="6" v-model="inputValue" />
    </div>
  </div>
</template>
<script>
export default {
  //输入信息组件
  name: "inputItem",
  props: {
    itemName: {
      // 列表名称
      type: String
    },
    inputType: {
      // 输入类型,默认为text
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      inputValue: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.inputItem {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  border: none;
  background-color: #fff;
  border-top: 1px solid rgb(194, 194, 194);
  div {
    line-height: 20px;
    font-size: 16px;
  }
  input {
    border: none;
    height: 20px;
    line-height: 25px;
    vertical-align: middle;
    width: 100px;
    font-size: 16px;
    text-align: right;
    outline: none;
  }
}
</style>
