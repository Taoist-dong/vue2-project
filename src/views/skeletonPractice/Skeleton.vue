<template>
  <div class="page-body">
    <div class="load-flex-item">
      <div class="load-img-bg"></div>
      <div class="load-text-area">
        <div class="load-first-text-bg"></div>
        <div class="load-text-bg"></div>
        <div class="load-text-bg"></div>
        <div class="load-text-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListLoading" // 分割线
};
</script>
<style lang="scss" scoped>
.page-body {
  background-color: #fff;
  margin: 10px 15px;
}
.load-flex-item {
  display: flex;
  justify-content: start;
  height: 150px;
  padding: 10px 0;
}
.load-img-bg {
  height: 100px;
  width: 100px;
  background-color: rgb(34, 71, 141);
}
.load-text-area {
  margin-left: 20px;
  height: 100px;
  .load-first-text-bg {
    background: rgb(34, 71, 141);
    height: 17px;
    width: 100px;
  }
  .load-text-bg {
    margin-top: 9px;
    background: rgb(34, 71, 141);
    height: 17px;
    width: 210px;
  }
}
</style>
