<template>
  <div>
    <title-bar :title="title" @goBack="goback"></title-bar>
    <div v-if="res == true" class="page-body1">
      <div class="load-flex-item">
        <div class="load-img-bg"></div>
        <div class="load-text-area">
          <div class="load-first-text-bg"></div>
          <div class="load-text-bg"></div>
          <div class="load-text-bg"></div>
        </div>
      </div>
    </div>
    <list-loading v-else></list-loading>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import ListLoading from "@/components/ListLoading";
export default {
  name: "hgang", // 分割线
  components: {
    ListLoading,
    TitleBar
  },
  data() {
    return {
      res: false, //
      title: "产品列表"
    };
  },
  mounted() {
    console.log(111);
    this.waitDateload();
  },
  methods: {
    waitDateload() {
      console.log(this.res);
      setTimeout(() => {
        this.res = true;
        console.log(this.res);
        // this.$route.forceUpdate();
      }, 5000);
    },
    goback() {
      //
    }
  }
};
</script>
<style lang="scss" scoped>
.page-body1 {
  background-color: rgb(21, 126, 29);
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
    height: 20px;
    width: 100px;
  }
  .load-text-bg {
    margin-top: 20px;
    background: rgb(34, 71, 141);
    height: 20px;
    width: 220px;
  }
}
</style>
