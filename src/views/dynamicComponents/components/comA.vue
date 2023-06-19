<template>
  <div class="box">BOX A {{ data }} : {{ dataA }}</div>
</template>
<script>
export default {
  props: {
    data: {
      type: String
    },
    dataA: {
      type: String
    }
  }
};
</script>
<style scoped>
.box {
  height: 100px;
  width: 100px;
  background: #2a5caa;
  color: #fff;
}
</style>
