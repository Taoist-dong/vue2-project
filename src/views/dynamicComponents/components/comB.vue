<template>
  <div class="box">BOX B {{ data }} : {{ dataB }}</div>
</template>
<script>
export default {
  props: {
    data: {
      type: String
    },
    dataB: {
      type: String
    }
  }
};
</script>
<style scoped>
.box {
  height: 100px;
  width: 100px;
  background: #4d4f36;
  color: #fff;
}
</style>
