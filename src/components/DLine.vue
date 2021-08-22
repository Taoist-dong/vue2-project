<template>
  <div style="text-align:center">
    <hr class="divide-line" />
  </div>
</template>
<script>
export default {
  name: "divideLine" // 分割线
};
</script>
<style scoped>
.divide-line {
  margin: 0 auto;
  border: none;
  width: 86%;
  height: 1px;
  border-bottom: 1px solid rgb(194, 194, 194);
  transform: translateY(90deg);
}
</style>
